import { Render, Events, Body, World, Engine, Runner } from 'matter-js';
import Game, { callbackOnCollisionStart } from '../common/Game';

import Player, { createPlayerBody } from '../common/Player';
import { keybinds, arena } from '../common/config.json';
import InputContext from './InputContext';
import Resurrect from 'resurrect-js';

const necromancer = new Resurrect();
const { player2Keys } = keybinds;
const { screenWidth, screenHeight } = arena;

const clientSidePrediction = true;

function processInput(name, player, isPressed) {
    const input = {
        type: name,
        isPressed,
        inputSequenceNumber: ++player.inputSequenceNumber,
        timestamp: game.engine.timing.timestamp,
    }

    ws.send(JSON.stringify({
        type: 'input',
        data: input,
    }));

    if (clientSidePrediction) {
        player.applyInput(input);

        player.pendingInputs.push(input);
    }
}

function setupPlayerKeyboard(keyboard, player, keys) {
    const { jump, right, left, dive } = keys;

    keyboard.addMapping(jump, isPressed => {
        processInput('jump', player, isPressed);
    });

    keyboard.addMapping(right, isPressed => {
        processInput('move-right', player, isPressed)
    });

    keyboard.addMapping(left, isPressed => {
        processInput('move-left', player, isPressed)
    });

    keyboard.addMapping(dive, isPressed => {
        processInput('dive', player, isPressed);
    });
}

const engine = Engine.create({ isFixed: false });
const game = new Game(engine);
const keyboard = new InputContext();

const render = Render.create({
    element: document.body,
    engine: game.engine,
    options: {
        width: screenWidth,
        height: screenHeight,
        wireframes: false,
        background: '#133377',
    },
});
Render.run(render);

let scoreboard = updateScoreboard();

Events.on(render, 'afterRender', event => {
    render.context.drawImage(
        scoreboard,
        (screenWidth / 2) - (scoreboard.width / 2),
        (screenHeight / 8) - (scoreboard.height / 2)
    );
});

Events.on(game, 'update-score', event => {
    game.score = event.score
    scoreboard = updateScoreboard();
});

function updateScoreboard() {
    const buffer = document.createElement('canvas');
    buffer.width = 300;
    buffer.height = 100;
    const context = buffer.getContext('2d');
    context.font = 'bold 40px Arial'
    context.textAlign = 'center';
    context.fillStyle = 'white';
    context.fillText(`${game.score.left} - ${game.score.right}`, buffer.width / 2, buffer.height / 2);
    return buffer;
}

const runner = Runner.create({ isFixed: true });
Runner.run(runner, engine);

keyboard.listen(window);


let addr;

if (process.env.NODE_ENV === 'development') {
    addr = 'ws://localhost:9000';
} else {
    addr = 'wss://morning-reef-06070.herokuapp.com';
}

const ws = new WebSocket(addr);

ws.addEventListener('open', () => {
    console.log('Connection established');
});


Events.on(render, 'beforeRender', () => {
    //do prediction
})

const entities = new Map();


ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);

    if (message.type === 'world-state') {

        Events.trigger(ws, 'received-world-state', { message });


    } else if (message.type === 'player-created') {
        console.log('Initiating game...');
        // console.log(message);

        const player = new Player(necromancer.resurrect(message.entity));

        setupPlayerKeyboard(keyboard, player, player2Keys);

        entities.set(player.body.id, player.body);

        message.state.map(body => necromancer.resurrect(body)).forEach(body => {
            entities.set(body.id, body);

            World.addBody(game.engine.world, body);
        });

        const bottomWall = entities.get('bottom-wall');

        callbackOnCollisionStart(game.engine, player.body, bottomWall, () => {
            if (!player.state.isGrounded) {
                player.state.isGrounded = true;
            }
        });

        Events.on(game.engine, 'beforeUpdate', player.update.bind(player));

        World.addBody(game.engine.world, player.body);

        Events.on(ws, 'received-world-state', ({ message }) => {
            message.state
                .map(body => necromancer.resurrect(body))
                .forEach(body => {
                    if (!entities.has(body.id)) {
                        throw new Error('I have a received a body which is not in my list of entities');
                    }

                    Body.set(entities.get(body.id), body);

                    if (body.id === player.body.id && clientSidePrediction) {

                        let i = 0;
                        while (i < player.pendingInputs.length) {

                            const input = player.pendingInputs[i];

                            if (input.inputSequenceNumber <= message.lastProcessedInput) {
                                // Already processed
                                player.pendingInputs.splice(i, 1);
                            } else {
                                // Not processed yet. apply it.
                                player.applyInput(input);
                                player.update();

                                const nextInput = player.pendingInputs[i + 1];

                                let unsimulatedTime = typeof nextInput === 'undefined'
                                    ? game.engine.timing.timestamp - input.timestamp
                                    : nextInput.timestamp - input.timestamp;

                                let acc = 0;
                                while(unsimulatedTime >= acc+ (1000 / 60) ) {
                                    Body.update(player.body, (1000 / 60), 1, 1);
                                    acc += (1000 / 60);
                                }
                                let rest = unsimulatedTime - acc;
                                console.log(rest);
                                Body.update(player.body, rest, 1, 1);
                                // simulateTime(player.body, game.engine.timing.delta, unsimulatedTime);
                                // Engine.update(game.engine, unsimulatedTime, 1);
                                // simulateTime(player.body, timestep, unsimulatedTime);
                                i++;
                            }
                        }

                    }
                });

            Events.trigger(game, 'update-score', { score: message.score });
        });

        console.log('Game initiated.')

    } else if (message.type === 'other-connected') {
        const body = necromancer.resurrect(message.entity);
        entities.set(body.id, body);
        World.addBody(game.engine.world, body);
    } else if (message.type === 'other-disconnected') {
        const body = necromancer.resurrect(message.entity);
        const localBody = entities.get(body.id);
        entities.delete(localBody.id);
        World.remove(game.engine.world, localBody);
    }
});

