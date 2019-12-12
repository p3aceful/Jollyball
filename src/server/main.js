import { Engine, World, Events, Runner, Common } from 'matter-js';
import Game, { callbackOnCollisionStart } from '../common/Game';
import Player, { createPlayerBody } from '../common/Player';
import Server from './Server';
import Client from './Client';
import Resurrect from 'resurrect-js';
import WebSocket from 'ws';

// Fix stupid idiot matter-js code
Common.now = function () {
    return (new Date()) - Common._nowStartTime;
}

const wss = new WebSocket.Server({ port: process.env.PORT || 9000 });

const necromancer = new Resurrect();

const server = new Server();

const engine = Engine.create();
const runner = Runner.create({ isFixed: true });

const game = new Game(engine);
game.setupBodies();

const right = game.bodies.get('right-wall');
const left = game.bodies.get('left-wall');
const ball = game.bodies.get('ball');

callbackOnCollisionStart(game.engine, ball, right, () => {
    game.score.left++;
});

callbackOnCollisionStart(game.engine, ball, left, () => {
    game.score.right++;
});

Runner.run(runner, engine);

const getAllWorldObjects = game => game.engine.world.bodies;
const getAllWorldActors = game => getAllWorldObjects(game).filter(body => !body.isStatic);

// Send world-state updates to all connected clients
setInterval(() => {

    const message = {
        type: 'world-state',
        state: getAllWorldActors(game).map(body => {
            const {
                id, position, velocity,
                angle, angularVelocity,
            } = body;
            return necromancer.stringify({
                id, position, velocity,
                angle, angularVelocity,
            });
        }),
        score: game.score,
    };

    server.clients.forEach(client => {
        if (client.conn.readyState === WebSocket.OPEN) {
            message.lastProcessedInput = lastProcessedInput.get(client.player.body.id);
            client.send(message);
        }
    });
}, 1000 / 20);


const lastProcessedInput = new Map();

wss.on('connection', conn => {

    console.log('User connnected');

    const body = createPlayerBody(150, 150, 80, { inertia: Infinity });
    const player = new Player(body);
    const client = new Client(conn, player);

    lastProcessedInput.set(body.id, 0);

    const world = getAllWorldObjects(game).map(body => necromancer.stringify(body));

    server.clients.add(client);

    const bottomWall = game.bodies.get('bottom-wall');

    callbackOnCollisionStart(game.engine, body, bottomWall, () => {
        if (!player.state.isGrounded) {
            player.state.isGrounded = true;
        }
    });

    Events.on(game.engine, 'beforeUpdate', player.update.bind(player));

    // Notify other clients before adding the body to the woruld,
    server.broadcast(client, { type: 'other-connected', entity: necromancer.stringify(body) });

    World.addBody(game.engine.world, body);

    const msg = { type: 'player-created', entity: necromancer.stringify(body), state: world };

    client.send(msg)

    conn.on('message', message => {
        const data = JSON.parse(message);

        if (data.type === 'input') {
            const input = data.data;
            client.player.applyInput(input);
            lastProcessedInput.set(client.player.body.id, input.inputSequenceNumber);
        }
    });

    conn.on('close', () => {
        console.log('User disconnected');
        lastProcessedInput.delete(client.player.body.id);
        server.clients.delete(client);
        World.remove(game.engine.world, body);
        server.broadcast(client, { type: 'other-disconnected', entity: necromancer.stringify(body) });
    })
});

