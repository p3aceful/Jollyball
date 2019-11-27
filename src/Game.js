import { Engine, World, Bodies, Events } from 'matter-js';
import InputContext from './InputContext';
import config from './config.json';


const { screenHeight, screenWidth, wallThickness, halfThickness } = config.arena;

function createWall(x, y, w, h) {
    return Bodies.rectangle(x, y, w, h, { isStatic: true });
}

function callbackOnCollisionStart(engine, collider, collidee, callback) {
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
    constructor() {

        this.engine = Engine.create();

        this.walls = {
            bottomWall: createWall(screenWidth / 2, screenHeight + halfThickness, screenWidth, wallThickness),
            topWall: createWall(screenWidth / 2, -halfThickness, screenWidth, wallThickness),
            leftWall: createWall(-halfThickness, screenHeight / 2, wallThickness, screenHeight),
            rightWall: createWall(screenWidth + halfThickness, screenHeight / 2, wallThickness, screenHeight),
        }

        const { bottomWall, topWall, leftWall, rightWall } = this.walls;
        const ball = Bodies.circle(screenWidth / 2, 50, 30, { restitution: 0.9 });

        this.players = [];

        this.score = {
            left: 0,
            right: 0,
        }

        callbackOnCollisionStart(this.engine, ball, rightWall, () => {
            this.score.left++;
            Events.trigger(this, 'update-score');
        });

        callbackOnCollisionStart(this.engine, ball, leftWall, () => {
            this.score.right++;
            Events.trigger(this, 'update-score');
        });

        World.add(this.engine.world, [topWall, bottomWall, leftWall, rightWall, ball]);
    }

    addPlayer(player, keys) {
        const { bottomWall } = this.walls;
        this.players.push(player);

        callbackOnCollisionStart(this.engine, player.body, bottomWall, () => {
            Events.trigger(player.body, 'grounded');
        });
        Events.on(this.engine, 'beforeUpdate', player.update.bind(player));
        Events.on(player.body, 'grounded', _event => {

            if (!player.state.isGrounded) {
                player.state.isGrounded = true;
            }
        });

        World.addBody(this.engine.world, player.body);
    }

    run() {
        Engine.run(this.engine);
    }
}