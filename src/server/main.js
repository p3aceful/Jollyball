import { Engine, World, Events, Composite } from 'matter-js';
import Game, { callbackOnCollisionStart } from '../common/Game';
import Runner from '../common/Runner';
import Player, { createPlayerBody } from '../common/Player';
import Resurrect from 'resurrect-js';
import WebSocket from 'ws';


const wss = new WebSocket.Server({ port: process.env.PORT || 9000 });

const necromancer = new Resurrect();

const runner = new Runner();
const engine = Engine.create();
const game = new Game(engine);
game.setupBodies();
runner.run();

const clients = new Map();

wss.on('connection', conn => {
    const uniqueID = generateUniqueID();
    clients.set(uniqueID, conn);
    console.log('Client', uniqueID, 'connected');

    const body = createPlayerBody(150, 150, 80, { inertia: Infinity, collisionFilter: { category: 0x0002, mask: 0x0001 }, render: { fillStyle: 'yellow' } });
    const player = new Player(body);
    const inputQueue = [];
    let lastProcessedInputNumber = 0;
    World.addBody(engine.world, body);

    conn.send(JSON.stringify({ type: 'created', entity: necromancer.stringify(body) }));


    // Send state updates
    let intervalID;

    Events.on(runner, 'tick', event => {
        if (inputQueue.length > 0) {
            const input = inputQueue.shift();
            player.applyInput(input);
            Engine.update(engine, event.timestep, 1);
            lastProcessedInputNumber = input.tickNumber + 1;
        }
    });

    conn.on('message', packet => {
        const message = JSON.parse(packet);

        if (message.type === 'ack') {
            intervalID = setInterval(() => {
                if (lastProcessedInputNumber === 0) {
                    // No inputs received yet. Lets not send state
                    return;
                }
                const { id, position, velocity, angle, angularVelocity, velocityPrev, positionPrev } = body;
                // const { position: bp, velocity: bv, angle: ba, angularVelocity: bav} = game.bodies.get('ball');

                const message = {
                    type: 'state',
                    state: necromancer.stringify({ id, position, velocity, angle, angularVelocity }),
                    // ball: necromancer.stringify({ id: 'ball', position: bp, velocity: bv, angle: ba, angularVelocity: bav }),
                    lastProcessedInputNumber,
                };
                const packet = JSON.stringify(message);
                conn.send(packet, (err) => {
                    if (err) {
                        console.log('Error sending  message');
                    }
                });
            }, 1000 / 20);
        }
        if (message.type === 'input') {
            inputQueue.push(message.data);
        }
    });

    conn.on('close', () => {
        console.log('Client', uniqueID, 'disconnected');
        clearInterval(intervalID);
        World.remove(engine.world, body);
        clients.delete(uniqueID);
    });
});

const generateUniqueID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}
