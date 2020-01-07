import { World,Events, Body } from 'matter-js';
import Resurrect from 'resurrect-js';
import Player, { createPlayerBody } from '../common/Player';
import { keybinds, arena } from '../common/config.json';
import InputContext from './InputContext';

const necromancer = new Resurrect();
const { player2Keys } = keybinds;

export default class GameClient {
    constructor(ws, game) {
        this.ws = ws;
        this.game = game;
        this.entities = new Map()
        ws.addEventListener('open', this.onConnection.bind(this));
        ws.addEventListener('message', this.onMessage.bind(this));
    }

    onConnection(event) {
        console.log('Connected to server');
        this.game.initWorld();
    }

    onMessage(event) {
        const message = JSON.parse(event.data);
        switch (message.type) {
            case 'player-created': this.onPlayerCreated(message.data); break;
            case 'world-state': this.onWorldStateReceived(message.data); break;
            default: throw new Error('Received unhandled message', message.type);
        }
    }

    onWorldStateReceived(data) {
        const body = necromancer.resurrect(data.entity);
        Body.set(this.entities.get(data.id), body);
        // data.forEach(client => {
        // })
    }

    onPlayerCreated(data) {
        const { id, entity } = data;
        const body = necromancer.resurrect(entity);
        this.entities.set(id, body);
        World.addBody(this.game.engine.world, body);

        //  CREATE MY OWN BODY :)
        const mybody = createPlayerBody(150, 150, 80, { inertia: Infinity, collisionFilter: { category: 0x0004 }, render: { fillStyle: '#C44D58' } });
        const player = new Player(mybody);
        const keyboard = new InputContext();
        setupPlayerKeyboard(keyboard, player, player2Keys);
        keyboard.listen(window);

        Events.on(this.game.engine, 'beforeUpdate', () => {
            const isAnyButtonPressed = [...Object.values(player.keyState)].some(k => k);

            if (!isAnyButtonPressed) {
                return;
            }

            const input = {
                tickNumber: this.runner.frameCount,
                ...player.keyState,
            }

            // outgoingInput.push(input);          // Send it
            this.ws.send(JSON.stringify({ type: 'input', data: input }));
            player.applyInput(input);           // Apply it
            // player.pendingInputs.push(input);   // Save it for later
        });

        World.addBody(this.game.engine.world, mybody);
    }
}

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