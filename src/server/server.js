import { Engine, World, Events } from 'matter-js';
import Game, { callbackOnCollisionStart } from '../shared/Game.js';
import Player, { createPlayerBody } from '../shared/Player.js';
import Resurrect from 'resurrect-js';
import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: process.env.PORT || 9000 });
const necromancer = new Resurrect();

class Server {
    constructor() {
        this.clients = new Set();
    }

    broadcast(client, message) {
        [...this.clients]
            .filter(_client => _client !== client)
            .forEach(client => client.send(message));
    }
}

class Client {
    constructor(conn, player) {
        this.conn = conn;
        this.player = player;
        this.wantsWorldUpdates = false;
        this.fakeLag = 0;
    }

    send(data) {
        const msg = JSON.stringify(data);
        // console.log(`Sending message ${msg}`);
        setTimeout(() => {
            this.conn.send(msg, (err) => {
                if (err) {
                    console.log('Error sending message', msg, err);
                }
            })
        }, this.fakeLag);
    }
}

const server = new Server();

const engine = Engine.create();
const game = new Game(engine);
game.setupBodies();


setInterval(() => {
    Engine.update(game.engine, 1000 / 60);
}, 1000 / 60);

setInterval(() => {

    const message = {
        type: 'world-state',
        state: game.engine.world.bodies.map(body => {
            const {
                id,
                position,
                velocity,
                angle,
                angularVelocity,
            } = body;
            return necromancer.stringify({ id, position, velocity, angle, angularVelocity });
        }),
    };

    server.clients.forEach(client => {
        if (client.conn.readyState === WebSocket.OPEN && client.wantsWorldUpdates) {

            const inputNumber = lastProcessedInput.get(client.player.body.id);
            message.lastProcessedInput = inputNumber;
            client.conn.send(JSON.stringify(message));
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

    const allWorldBodies = game.engine.world.bodies.map(body => necromancer.stringify(body));

    server.clients.add(client);

    const bottomWall = game.bodies.get('bottom-wall');

    callbackOnCollisionStart(game.engine, body, bottomWall, () => {
        if (!player.state.isGrounded) {
            player.state.isGrounded = true;
        }
    });

    Events.on(game.engine, 'beforeUpdate', player.update.bind(player));

    Events.on(player, 'grounded', _ => {

        if (!player.state.isGrounded) {
            player.state.isGrounded = true;
        }
    });

    // Notify other clients before adding the body to the woruld,
    server.broadcast(client, { type: 'other-connected', entity: necromancer.stringify(body) });

    World.addBody(game.engine.world, body);

    const msg = { type: 'player-created', entity: necromancer.stringify(body), state: allWorldBodies };

    client.send(msg)

    conn.on('message', function incoming(message) {
        
        const data = JSON.parse(message);

        if (data.type === 'player-created') {
            client.wantsWorldUpdates = true;
        }

        if (data.type === 'input') {
            const input = data.data;
            client.player.applyInput(input);
            lastProcessedInput.set(client.player.body.id, input.inputSequenceNumber);
        }
    });

    conn.on('close', () => {
        console.log('User disconnected');
        server.broadcast(client, { type: 'other-disconnected', entity: necromancer.stringify(body) });
        lastProcessedInput.delete(client.player.body.id);
        server.clients.delete(client);
        World.remove(game.engine.world, body);
    })
});

