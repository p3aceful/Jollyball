import { Render, Events, Body, World, Engine, Vector, Composite } from 'matter-js';
import Game, { callbackOnCollisionStart } from '../common/Game';
import Runner from '../common/Runner';
import Player, { createPlayerBody } from '../common/Player';
import { keybinds, arena } from '../common/config.json';
import InputContext from './InputContext';
import Resurrect from 'resurrect-js';
import GameClient from './GameClient';

const necromancer = new Resurrect();
const { player2Keys } = keybinds;
const { screenWidth, screenHeight } = arena;

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
game.setupBodies();
const keyboard = new InputContext();

const render = Render.create({
    element: document.body,
    engine: game.engine,
    options: {
        width: screenWidth,
        height: screenHeight,
        wireframes: false,
        background: '#994337',
    },
});
Render.run(render);

const runner = new Runner();
Events.on(runner, 'tick', event => {
    const { delta } = event;
    Engine.update(engine, delta, 1);
});

keyboard.listen(window);
runner.run();

let addr = process.env.NODE_ENV === 'development' ? 'ws://localhost:9000' : 'wss://morning-reef-06070.herokuapp.com';

const ws = new WebSocket(addr);
const entities = new Map();
const bufferSize = 1024;
const inputBuffer = new Array(bufferSize);
const stateBuffer = new Array(bufferSize);

ws.addEventListener('open', () => {
    console.log('Connection to server establised');
});

let fullID;
let localID;
let serverID;
let player;
let ready = false;
// const timeouts = [];
ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);


    if (message.type === 'created') {
        const body = necromancer.resurrect(message.entity);

        // const serverBody = body;
        // const localBody = createPlayerBody(150, 150, 80, { inertia: Infinity, collisionFilter: { category: 0x0004, mask: 0x0001 }, render: { fillStyle: 'green' } });
        // const fullRTTBody = createPlayerBody(150, 150, 80, { inertia: Infinity, collisionFilter: { category: 0x0008, mask: 0x0001 }, render: { fillStyle: 'red' } });
        const localBody = body;

        localID = localBody.id;
        // serverID = serverBody.id;
        // fullID = fullRTTBody.id;

        entities.set(localID, localBody);
        // entities.set(fullID, fullRTTBody);
        // entities.set(serverID, serverBody);

        player = new Player(localBody);
        setupPlayerKeyboard(keyboard, player, player2Keys);

        Events.on(runner, 'beforeTick', event => processPlayerInput(event, player));

        // World.addBody(engine.world, fullRTTBody);
        // World.addBody(engine.world, serverBody);
        World.addBody(engine.world, localBody);

        runner.tickNumber = 0;

        ws.send(JSON.stringify({ type: 'ack' }));

    } else if (message.type === 'state') {

        const bodyConfiguration = necromancer.resurrect(message.state);

        let bufferSlot = message.lastProcessedInputNumber % bufferSize;

        const positionError = Vector.sub(bodyConfiguration.position, stateBuffer[bufferSlot].position);
        const magnitude = Vector.magnitudeSquared(positionError);

        if (magnitude > 0.0001) {
            const body = entities.get(localID);
            const { position, velocity, angle, angularVelocity } = bodyConfiguration;
            Body.setVelocity(body, velocity);
            Body.setPosition(body, position);
            Body.setAngle(body, angle);
            Body.setAngularVelocity(body, angularVelocity);

            let rewindTickNumber = message.lastProcessedInputNumber;
            while (rewindTickNumber < runner.frameNumber) {
                bufferSlot = rewindTickNumber % bufferSize;
                const input = inputBuffer[bufferSlot];
                stateBuffer[bufferSlot].position = body.position;
                
                player.applyInput(input);
                Engine.update(engine, runner.timestep, 1);
                rewindTickNumber++;
            }
        }

        // const { id, ...rest } = bodyConfiguration;
        // setTimeout(() => Body.set(entities.get(serverID), rest), 100)
        // setTimeout(() => Body.set(entities.get(fullID), rest), 200)
    }
});

function processPlayerInput(event, player) {

    const { timestamp, tickNumber } = event;

    const input = {
        timestamp,
        tickNumber,
        ...player.keyState,
    }

    // Send it 
    ws.send(JSON.stringify({ type: 'input', data: input }));

    // Save input and state for later 
    const bufferSlot = tickNumber % bufferSize;
    const { x, y } = player.body.position;
    inputBuffer[bufferSlot] = input;
    stateBuffer[bufferSlot] = { position: { x, y } };


    player.applyInput(input); // Apply it
}





















// let scoreboard = updateScoreboard();

// Events.on(render, 'afterRender', event => {
//     render.context.drawImage(
//         scoreboard,
//         (screenWidth / 2) - (scoreboard.width / 2),
//         (screenHeight / 8) - (scoreboard.height / 2)
//     );
// });

// Events.on(game, 'update-score', event => {
//     game.score = event.score
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
// const client = new GameClient(new WebSocket(addr), game);
// client.runner = runner;
// ws.addEventListener('open', () => {
//     console.log('Connection established');
// });

// const entities = new Map();
// const outgoingInput = [];


// ws.addEventListener('message', event => {
//     const message = JSON.parse(event.data);

//     if (message.type === 'world-state') {

//         Events.trigger(ws, 'received-world-state', { message });


//     } else if (message.type === 'player-created') {
//         console.log('Initiating game...');

//         const player = new Player(necromancer.resurrect(message.entity));

//         setupPlayerKeyboard(keyboard, player, player2Keys);

//         entities.set(player.body.id, player.body);

//         message.state.map(body => necromancer.resurrect(body)).forEach(body => {
//             entities.set(body.id, body);

//             World.addBody(game.engine.world, body);
//         });

//         // const bottomWall = entities.get('bottom-wall');

//         // callbackOnCollisionStart(game.engine, player.body, bottomWall, () => {
//         //     if (!player.state.isGrounded) {
//         //         player.state.isGrounded = true;
//         //     }
//         // });

//         Events.on(game.engine, 'beforeUpdate', () => {
//             const isAnyButtonPressed = [...Object.values(player.keyState)].some(k => k);

//             if (!isAnyButtonPressed) {
//                 return;
//             }

//             const input = {
//                 tickNumber: runner.frameCount,
//                 ...player.keyState,
//             }

//             outgoingInput.push(input);          // Send it
//             player.applyInput(input);           // Apply it
//             player.pendingInputs.push(input);   // Save it for later
//         });


//         Events.on(game.engine, 'afterUpdate', _event => {
//             while (outgoingInput.length > 0) {
//                 const input = outgoingInput.shift();
//                 ws.send(JSON.stringify({ type: 'input', data: input }));
//             }
//         });

//         World.addBody(game.engine.world, player.body);

//         Events.on(ws, 'received-world-state', ({ message }) => {
//             let lastPos;
//             message.state
//                 .map(body => necromancer.resurrect(body))
//                 .forEach(body => {
//                     if (!entities.has(body.id)) {
//                         throw new Error('I have a received a body which is not in my list of entities');
//                     }
//                     if (body.id === player.body.id) {
//                         lastPos = {
//                             x:  player.body.position.x,
//                             y:  player.body.position.y,
//                         }
//                     }
//                     Body.set(entities.get(body.id), body);

//                 });

//             // The world has been snapped back in time

//             let i = 0;
//             const currentTick = runner.frameCount;
//             let j = message.lastProcessedInput + 1;

//             while (i < player.pendingInputs.length) { // While there are pending inputs left
//                 if (message.lastProcessedInput > 0) {
//                     // debugger;
//                 }
//                 const input = player.pendingInputs[i];

//             //     console.log(input.lastProcessedInput);
//                 if (input.tickNumber <= message.lastProcessedInput) {
//             //         // Already processed
//                     player.pendingInputs.splice(i, 1);
//                 } else {
//                     // Not processed yet. apply it.
//                     while (j <= currentTick) {
//                         if (j === input.tickNumber ) {
//                             player.applyInput(input);
//                             Engine.update(engine, 1000 / 60, 1);
//                             j++
//                             break;
//                         } else {
//                             Engine.update(engine, 1000 / 60, 1);
//                             j++;
//                         }
//                     }
//                     // We have the current tick
//                     // We have the last input processed by server
//                     // We have a list of inputs each associated with a tick number they were performed.
//                     // current tick - last tick processed by server = amount of ticks we have to resimulate
//                     // Apply Inputs when approriate tick is resimulated
//                     i++;
//                 }
//             }

//             Events.trigger(game, 'update-score', { score: message.score });
//         });

//         console.log('Game initiated.')

//     } else if (message.type === 'other-connected') {
//         const body = necromancer.resurrect(message.entity);
//         entities.set(body.id, body);
//         World.addBody(game.engine.world, body);
//     } else if (message.type === 'other-disconnected') {
//         const body = necromancer.resurrect(message.entity);
//         const localBody = entities.get(body.id);
//         entities.delete(localBody.id);
//         World.remove(game.engine.world, localBody);
//     }
// });

