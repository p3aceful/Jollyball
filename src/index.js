import { Render, Events } from 'matter-js';
import Game from './Game';
import Player from './Player';
import { keybinds, arena } from './config.json';
import InputContext from './InputContext';

const { player1Keys, player2Keys } = keybinds;
const { screenWidth, screenHeight } = arena;

function setupPlayerKeyboard(keyboard, player, keys) {
    const { jump, right, left, dive } = keys;

    keyboard.addMapping(jump, isPressed => {
        if (isPressed) {
            player.jump();
        }
    });

    keyboard.addMapping(right, isPressed => {
        if (isPressed) {
            player.startWalkRight();
        } else {
            player.stopWalkRight();
        }
    });

    keyboard.addMapping(left, isPressed => {
        if (isPressed) {
            player.startWalkLeft();
        } else {
            player.stopWalkLeft();
        }
    });

    keyboard.addMapping(dive, isPressed => {
        player.dive(isPressed);
    });
}

const game = new Game();
const keyboard = new InputContext();
let scoreboard = updateScoreboard();

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

Events.on(render, 'afterRender', event => {
    render.context.drawImage(
        scoreboard,
        (screenWidth / 2) - (scoreboard.width / 2),
        (screenHeight / 8) - (scoreboard.height / 2)
    );
});

Events.on(game, 'update-score', event => {
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

const player1 = new Player(50, 50);
const player2 = new Player(screenWidth - 50, 50);

setupPlayerKeyboard(keyboard, player1, player1Keys);
setupPlayerKeyboard(keyboard, player2, player2Keys);

game.addPlayer(player1, player1Keys);
game.addPlayer(player2, player2Keys);
Render.run(render);
game.run();
keyboard.listen(window);

// const conn = new WebSocket('ws://localhost:9000');