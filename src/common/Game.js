import { Engine, World, Bodies, Events } from 'matter-js';
import config from './config.json';

const { screenHeight, screenWidth, wallThickness, halfThickness } = config.arena;

function createWall(x, y, w, h, label) {
    return Bodies.rectangle(x, y, w, h, { isStatic: true, id: label });
}

export function callbackOnCollisionStart(engine, collider, collidee, callback) {
    Events.on(engine, 'collisionStart', event => {
        event.pairs.forEach(pair => {
            if (
                pair.bodyA === collider && pair.bodyB === collidee
                || pair.bodyA === collidee && pair.bodyB === collider
            ) {
                callback();
            }
        });
    });
}

export default class Game {
    constructor(engine) {

        this.engine = engine;

        this.score = {
            left: 0,
            right: 0,
        }
    }

    /**
     * run on server before starting game.
     */
    setupBodies() {

        const bottomWall = createWall(screenWidth / 2, screenHeight + halfThickness, screenWidth, wallThickness, 'bottom-wall');
        const topWall = createWall(screenWidth / 2, -halfThickness, screenWidth, wallThickness, 'top-wall');
        const leftWall = createWall(-halfThickness, screenHeight / 2, wallThickness, screenHeight, 'left-wall');
        const rightWall = createWall(screenWidth + halfThickness, screenHeight / 2, wallThickness, screenHeight, 'right-wall');

        const ball = Bodies.circle(screenWidth / 2, 50, 30, { restitution: 0.9, id: 'ball' });

        const bodies = [topWall, bottomWall, leftWall, rightWall, ball]
        this.bodies = new Map(bodies.map(body => ([body.id, body])));
        World.add(this.engine.world, bodies);
    }

    run() {
        Engine.run(this.engine);
    }
}