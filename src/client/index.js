import { Render, Events, Body, World, Engine } from 'matter-js';
import Game, { callbackOnCollisionStart } from '../shared/Game';
import Player, { createPlayerBody } from '../shared/Player';
import { keybinds, arena } from '../shared/config.json';
import InputContext from './InputContext';
import Resurrect from 'resurrect-js';

const necromancer = new Resurrect();
const { player1Keys, player2Keys } = keybinds;
const { screenWidth, screenHeight } = arena;

const fakeLag = 0;

function setupPlayerKeyboard(keyboard, player, keys) {
    const { jump, right, left, dive } = keys;

    keyboard.addMapping(jump, isPressed => {
        const last = new Date().getTime() || player.lastTimestamp
        const delta = (new Date().getTime() - last) / 1000;
        const input = { type: 'jump', isPressed, inputSequenceNumber: player.inputSequenceNumber++, delta}

        setTimeout(() => {
            ws.send(JSON.stringify({
                type: 'input',
                data: input,
            }));
        }, fakeLag);


        player.applyInput(input);

        // save for later reconciliation
        player.pendingInputs.push(input);
    });

    keyboard.addMapping(right, isPressed => {
        const last = new Date().getTime() || player.lastTimestamp
        const delta = (new Date().getTime() - last) / 1000;
        const input = { type: 'move-right', isPressed, inputSequenceNumber: player.inputSequenceNumber++, delta}
        setTimeout(() => {
            ws.send(JSON.stringify({
                type: 'input',
                data: input,
            }));
        }, fakeLag);

        player.applyInput(input);

        player.pendingInputs.push(input);
    });

    keyboard.addMapping(left, isPressed => {
        const last = new Date().getTime() || player.lastTimestamp
        const delta = (new Date().getTime() - last) / 1000;

        const input = { type: 'move-left', isPressed, inputSequenceNumber: player.inputSequenceNumber++, delta}
        setTimeout(() => {
            ws.send(JSON.stringify({
                type: 'input',
                data: input,
            }));
        }, fakeLag);
        player.applyInput(input);
        player.pendingInputs.push(input);
    });

    keyboard.addMapping(dive, isPressed => {
        const last = new Date().getTime() || player.lastTimestamp
        const delta = (new Date().getTime() - last) / 1000;
        const input = { type: 'dive', isPressed, inputSequenceNumber: player.inputSequenceNumber++, delta}
        setTimeout(() => {
            ws.send(JSON.stringify({
                type: 'input',
                data: input,
            }));
        }, fakeLag);
        player.applyInput(input);
        player.pendingInputs.push(input);
    });

}

const engine = Engine.create();
const game = new Game(engine);
const keyboard = new InputContext();
// let scoreboard = updateScoreboard();

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

// Events.on(render, 'afterRender', event => {
//     render.context.drawImage(
//         scoreboard,
//         (screenWidth / 2) - (scoreboard.width / 2),
//         (screenHeight / 8) - (scoreboard.height / 2)
//     );
// });

// Events.on(game, 'update-score', event => {
//     scoreboard = updateScoreboard();
// });

// function updateScoreboard() {
//     const buffer = document.createElement('canvas');
//     buffer.width = 300;
//     buffer.height = 100;
//     const context = buffer.getContext('2d');
//     context.font = 'bold 40px Arial'
//     context.textAlign = 'center';
//     context.fillStyle = 'white';
//     context.fillText(`${game.score.left} - ${game.score.right}`, buffer.width / 2, buffer.height / 2);
//     return buffer;
// }

Render.run(render);
keyboard.listen(window);

// const ws = new WebSocket('ws://localhost:9000');
const ws = new WebSocket('wss://morning-reef-06070.herokuapp.com');

ws.addEventListener('open', () => {
    console.log('Connection established');
});

const entities = new Map();
let me;
ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);

    if (message.type === 'world-state') {


        message.state.map(body => necromancer.resurrect(body)).forEach(body => {
            if (!entities.has(body.id)) {
                console.log('dont have that');
                throw new Error('I have a received a body which is not in my list of entities');
            }

            Body.set(entities.get(body.id), body);

            // if (body.id === me.body.id) {

            //     // Server corrected my position. Re-apply all inputs that are not processed by server.
            //     let i = 0;
            //     while(i < me.pendingInputs.length) {

            //         const input = me.pendingInputs[i];

            //         if (input.inputSequenceNumber <= message.lastProcessedInput) {
            //             // Already processed
            //             me.pendingInputs.splice(i, 1);
            //         } else {
            //             // Not processed yet. apply it.
            //             me.applyInput(input);
            //             // Body.update(me.body, input.delta, 1, 0);
            //             i++;
            //         }
            //     }
            // }
        });


    } else if (message.type === 'player-created') {
        console.log('Initiating game...')
        console.log(message);

        const player = new Player(necromancer.resurrect(message.entity));
        me = player;
        setupPlayerKeyboard(keyboard, player, player2Keys);

        entities.set(player.body.id, player.body);

        message.state.map(body => necromancer.resurrect(body)).forEach(body => {
            entities.set(body.id, body);

            World.addBody(game.engine.world, body);
        });

        const bottomWall = entities.get('bottom-wall');

        callbackOnCollisionStart(game.engine, player.body, bottomWall, () => {
            Events.trigger(player.body, 'grounded');
        });

        Events.on(game.engine, 'beforeUpdate', player.update.bind(player));
        Events.on(player.body, 'grounded', _event => {

            if (!player.state.isGrounded) {
                player.state.isGrounded = true;
            }
        });

        World.addBody(game.engine.world, player.body);
        console.log(entities);
        game.run();
        ws.send(JSON.stringify({ type: 'player-created' }));
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