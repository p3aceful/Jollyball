import { Engine, World, Body, Bodies, Render, Events } from 'matter-js';
import InputContext from './InputContext';
import Player from './Player';

const keyboard = new InputContext();
const engine = Engine.create();
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: '#133377',
    }
});

const ball = Bodies.circle(render.canvas.width, 50, 30, { restitution: 0.9 });
const top = Bodies.rectangle(render.canvas.width / 2, -20, render.canvas.width, 40, { isStatic: true });
const bottom = Bodies.rectangle(render.canvas.width / 2, render.canvas.height + 20, render.canvas.width, 40, { isStatic: true, label: 'ground' });
const left = Bodies.rectangle(-20, render.canvas.height / 2, 40, render.canvas.height, { isStatic: true });
const right = Bodies.rectangle(render.canvas.width + 20, render.canvas.height / 2, 40, render.canvas.height, { isStatic: true });
const player = new Player(50, 50);

Events.on(engine, 'beforeUpdate', player.update.bind(player));
Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach(pair => {
        if (pair.bodyA.label === 'ground' && pair.bodyB.label === 'player' || pair.bodyA.label === 'player' && pair.bodyB.label === 'ground') {
            Events.trigger(player.body, 'grounded', { pair });
        }
    })
});

Events.on(player.body, 'grounded', _event => {
    if (!player.state.isGrounded) {
        player.state.isGrounded = true;
    }
});

keyboard.addMapping('ArrowUp', isPressed => {
    if (isPressed) {
        player.jump();
    }
});

keyboard.addMapping('ArrowRight', isPressed => {
    if (isPressed) {
        player.startWalkRight();
    } else {
        player.stopWalkRight();
    }
});

keyboard.addMapping('ArrowLeft', isPressed => {
    if (isPressed) {
        player.startWalkLeft();
    } else {
        player.stopWalkLeft();
    }
});

keyboard.addMapping('ArrowDown', isPressed => {
    player.dive(isPressed);
});

keyboard.listen(window);

World.add(engine.world, [top, bottom, left, right, ball, player.body]);
Engine.run(engine);
Render.run(render);