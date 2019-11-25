import Matter from 'matter-js';
import { createPlayerBody } from './util.js';

const { Engine, World, Body, Bodies, Render, Events } = Matter;

const engine = Engine.create();

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
    }
});

class InputContext {
    constructor() {
        this.PRESSED = 1;
        this.RELEASED = 0;

        this.keys = new Map();
        this.callbacks = new Map();
    }

    addMapping(keyName, callback) {
        if (!this.keys.get(keyName)) {
            console.log('Unactive key');
            return;
        }

        console.log('Bound key');
    }


}

class Player {
    constructor(x, y) {
        this.body = createPlayerBody(x, y, 50, { restitution: 0.1 });
        this.body.label = 'player';
        // this.body = Bodies.circle(x, y, 40, { insertia: Infinity });
        this.input = {
            // up: false,
            down: false,
            left: false,
            right: false,
        }

        this.grounded = false;
        this.canDoubleJump = false;
        window.addEventListener('keydown', event => {

            if (event.key == 'ArrowUp') {
                this.jump();
            }
            if (event.key == 'ArrowDown') {
                this.input.down = true;
            }
            if (event.key == 'ArrowRight') {
                this.input.left = true;
            }
            if (event.key == 'ArrowLeft') {
                this.input.right = true;
            }
        });

        window.addEventListener('keyup', event => {

            if (event.key == 'ArrowUp') {
                this.input.up = false;
            }
            if (event.key == 'ArrowDown') {
                this.input.down = false;
            }
            if (event.key == 'ArrowRight') {
                this.input.left = false;
            }
            if (event.key == 'ArrowLeft') {
                this.input.right = false;
            }
        });


        Events.on(engine, 'beforeUpdate', this.update.bind(this));


        Events.on(engine, 'collisionActive', event => {


            event.pairs.forEach(pair => {
                if (pair.bodyA.label === 'ground' && pair.bodyB.label === 'player') {
                    // console.log('hello', pair)
                    Events.trigger(this.body, 'grounded', { pair });
                }
            })
        });
        Events.on(this.body, 'grounded', event => {
            if (!this.grounded) {
                this.grounded = true;
                console.log('im grounded');
            }

        });

        World.addBody(engine.world, this.body);
    }

    jump() {
        if (this.grounded) {
            this.grounded = false;
            this.body.velocity.y = 0;
            Body.applyForce(this.body, this.body.position, { x: 0, y: -1 * 0.13 });
            this.canDoubleJump = true;
        } else {
            if (this.canDoubleJump) {
                this.canDoubleJump = false;
                this.body.velocity.y = 0;
                Body.applyForce(this.body, this.body.position, { x: 0, y: -1 * 0.13 });
            }
        }
    }

    update() {
        // React to player input
        const speed = 4000 * 0.002;
        // if (this.input.up) {
        //     this.jump();
        // }
        if (this.input.right) {
            Body.setVelocity(this.body, { x: -speed, y: this.body.velocity.y });
        }
        if (this.input.left) {
            Body.setVelocity(this.body, { x: speed, y: this.body.velocity.y });
        }
        if (this.input.down) {
            Body.setVelocity(this.body, { x: this.body.velocity.x, y: speed + 3000 * 0.002 });
        }
    }
}
const circle = Bodies.circle(render.canvas.width, 50, 30, { restitution: 0.9 });
const top = Bodies.rectangle(render.canvas.width / 2, -20, render.canvas.width, 40, { isStatic: true });
const bottom = Bodies.rectangle(render.canvas.width / 2, render.canvas.height + 20, render.canvas.width, 40, { isStatic: true });
bottom.label = 'ground';
const left = Bodies.rectangle(-20, render.canvas.height / 2, 40, render.canvas.height, { isStatic: true });
const right = Bodies.rectangle(render.canvas.width + 20, render.canvas.height / 2, 40, render.canvas.height, { isStatic: true });
World.add(engine.world, [top, bottom, left, right, circle]);
const player = new Player(50, 50);


Engine.run(engine);
Render.run(render);