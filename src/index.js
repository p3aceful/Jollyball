import { Engine, World, Body, Bodies, Render, Events } from 'matter-js';
import { getBody, setupPlayerKeyboard } from './util'
import InputContext from './InputContext';
import Player from './Player';

const keyboard = new InputContext();
const engine = Engine.create();
engine.world.gravity = { x: 0, y: 2, scale: 0.001, };
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 900,
        height: 600,
        wireframes: false,
        background: '#133377',
    },
});

const ball = Bodies.circle(render.canvas.width / 2, 50, 30, { restitution: 0.9 });
const top = Bodies.rectangle(render.canvas.width / 2, -20, render.canvas.width, 40, { isStatic: true });
const bottom = Bodies.rectangle(render.canvas.width / 2, render.canvas.height + 20, render.canvas.width, 40, { isStatic: true, });
const left = Bodies.rectangle(-20, render.canvas.height / 2, 40, render.canvas.height, { isStatic: true });
const right = Bodies.rectangle(render.canvas.width + 20, render.canvas.height / 2, 40, render.canvas.height, { isStatic: true });

const score = {
    left: 0,
    right: 0,
}


function updateScoreboard() {
    const buffer = document.createElement('canvas');
    buffer.width = 300;
    buffer.height = 100;
    const context = buffer.getContext('2d');
    context.font = 'bold 40px Arial'
    context.textAlign = 'center';
    context.fillStyle = 'white';
    context.fillText(`${score.left} - ${score.right}`, buffer.width / 2, buffer.height / 2);
    return buffer;
}

const player1Keys = {
    jump: 'w',
    moveRight: 'd',
    moveLeft: 'a',
    dive: 's'
};

const player2Keys = {
    jump: 'ArrowUp',
    moveRight: 'ArrowRight',
    moveLeft: 'ArrowLeft',
    dive: 'ArrowDown'
};

const players = [new Player(50, 50, player1Keys), new Player(render.canvas.width - 50, 50, player2Keys)];

let scoreboard = updateScoreboard();


players.forEach(player => {
    console.log(player);

    setupPlayerKeyboard(player.keys, keyboard, player);

    Events.on(engine, 'beforeUpdate', player.update.bind(player));

    Events.on(player.body, 'grounded', _event => {
        if (!player.state.isGrounded) {
            player.state.isGrounded = true;
        }
    });

    Events.on(engine, 'collisionStart', event => {
        event.pairs.forEach(pair => {

            if (pair.bodyA === player.body && pair.bodyB === bottom
                || pair.bodyA === bottom && pair.bodyB === player.body) {

                Events.trigger(player.body, 'grounded', { pair });
            }

            if (pair.bodyA === ball && pair.bodyB === left || pair.bodyA === left && pair.bodyB === right) {
                Events.trigger(ball, 'goal', { pair });
            }
            if (pair.bodyA === ball && pair.bodyB === right || pair.bodyA === right && pair.bodyB === ball) {
                Events.trigger(ball, 'goal', { pair });
            }
        })
    });
})

Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach(pair => {
        if (pair.bodyA === ball && pair.bodyB === left || pair.bodyA === left && pair.bodyB === right) {
            Events.trigger(ball, 'l-goal', { pair });
            console.log('left goal');
        }
        if (pair.bodyA === ball && pair.bodyB === right || pair.bodyA === right && pair.bodyB === ball) {
            Events.trigger(ball, 'r-goal', { pair });
            console.log('right goal');
        }
    });
});


Events.on(ball, 'l-goal', event => {
    score.right++;
    scoreboard = updateScoreboard();
    // resetBall();
    // console.log(score);
});

Events.on(ball, 'r-goal', event => {
    score.left++;
    scoreboard = updateScoreboard();
    // resetBall();
    // console.log(score)
});

Events.on(render, 'afterRender', event => {
    render.context.drawImage(scoreboard, (render.canvas.width / 2) - (scoreboard.width / 2), (render.canvas.height / 8) - (scoreboard.height / 2));

});
keyboard.listen(window);

World.add(engine.world, [top, bottom, left, right, ball, ...players.map(getBody)]);
Engine.run(engine);
Render.run(render);
