import { Render, Events, Body, World, Engine, Runner } from 'matter-js';
import Game, { callbackOnCollisionStart } from '../common/Game';
import MyRunner from './MyRunner';
import Player, { createPlayerBody } from '../common/Player';
import { keybinds, arena } from '../common/config.json';
import InputContext from './InputContext';
import Resurrect from 'resurrect-js';

const necromancer = new Resurrect();
const { player2Keys } = keybinds;
const { screenWidth, screenHeight } = arena;

const clientSidePrediction = true;



function setupPlayerKeyboard(keyboard, player, keys) {
    const { jump, right, left, dive } = keys;

    keyboard.addMapping(jump, isPressed => {
        // processInput('jump', player, isPressed);
        player.keyState.up = isPressed;
    });

    keyboard.addMapping(right, isPressed => {
        // processInput('move-right', player, isPressed)
        player.keyState.right = isPressed;
    });

    keyboard.addMapping(left, isPressed => {
        // processInput('move-left', player, isPressed)
        player.keyState.left = isPressed;
    });

    keyboard.addMapping(dive, isPressed => {
        // processInput('dive', player, isPressed);
        player.keyState.down = isPressed;
    });
}

const engine = Engine.create();
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

const myRunner = new MyRunner();
myRunner.run(engine)
console.log(myRunner)
keyboard.listen(window);

class Network {
    constructor(address) {
        this.socket = new WebSocket(address);

        this.socket.addEventListener('open', () => {
            console.log('connection established');
        })
    }

    listen(eventName, callback) {
        this.socket.addEventListener(eventName, callback);
    }

    send(data) {
        this.socket.send(JSON.stringify(data));
    }

    receive() {

    }
}

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

const entities = new Map();
const outgoingInput = [];

ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);

    if (message.type === 'world-state') {

        Events.trigger(ws, 'received-world-state', { message });


    } else if (message.type === 'player-created') {
        console.log('Initiating game...');

        const player = new Player(necromancer.resurrect(message.entity));

        setupPlayerKeyboard(keyboard, player, player2Keys);

        entities.set(player.body.id, player.body);

        message.state.map(body => necromancer.resurrect(body)).forEach(body => {
            entities.set(body.id, body);

            World.addBody(game.engine.world, body);
        });

        // const bottomWall = entities.get('bottom-wall');

        // callbackOnCollisionStart(game.engine, player.body, bottomWall, () => {
        //     if (!player.state.isGrounded) {
        //         player.state.isGrounded = true;
        //     }
        // });

        Events.on(myRunner.runner, 'beforeUpdate', () => {
            const isAnyButtonPressed = [...Object.values(player.keyState)].some(k => k);

            if (!isAnyButtonPressed) {
                return;
            }

            const input = {
                tickNumber: myRunner.tickNumber,
                ...player.keyState,
            }

            outgoingInput.push(input);          // Send it
            player.applyInput(input);           // Apply it
            player.pendingInputs.push(input);   // Save it for later
        });

        Events.on(game.engine, 'afterUpdate', _event => {
            while (outgoingInput.length > 0) {
                const input = outgoingInput.shift();
                ws.send(JSON.stringify({ type: 'input', data: input }));
            }
        });

        World.addBody(game.engine.world, player.body);

        Events.on(ws, 'received-world-state', ({ message }) => {
            let lastPos;
            message.state
                .map(body => necromancer.resurrect(body))
                .forEach(body => {
                    if (!entities.has(body.id)) {
                        throw new Error('I have a received a body which is not in my list of entities');
                    }
                    if (body.id === player.body.id) {
                        lastPos = {
                            x:  player.body.position.x,
                            y:  player.body.position.y,
                        }
                    }
                    Body.set(entities.get(body.id), body);

                });

            // The world has been snapped back in time

            let i = 0;
            const currentTick = myRunner.tickNumber;
            let j = message.lastProcessedInput + 1;

            while (i < player.pendingInputs.length) { // While there are pending inputs left
                if (message.lastProcessedInput > 0) {
                    // debugger;
                }
                const input = player.pendingInputs[i];
                
            //     console.log(input.lastProcessedInput);
                if (input.tickNumber <= message.lastProcessedInput) {
            //         // Already processed
                    player.pendingInputs.splice(i, 1);
                } else {
                    // Not processed yet. apply it.
                    while (j <= currentTick) {
                        if (j === input.tickNumber ) {
                            player.applyInput(input);
                            Engine.update(engine, myRunner.runner.delta, myRunner.runner.correction);
                            j++
                            break;
                        } else {
                            Engine.update(engine, myRunner.runner.delta, myRunner.runner.correction);
                            j++;
                        }
                    }
                    // We have the current tick
                    // We have the last input processed by server
                    // We have a list of inputs each associated with a tick number they were performed.
                    // current tick - last tick processed by server = amount of ticks we have to resimulate
                    // Apply Inputs when approriate tick is resimulated
                    i++;
                }
            }

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

