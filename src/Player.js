import { createPlayerBody } from './util.js';
import { Engine, World, Body, Bodies, Render, Events } from 'matter-js';

const WalkStates = Object.freeze({
    WALK_RIGHT: Symbol('walk_right'),
    WALK_LEFT: Symbol('walk_left'),
    STANDING: Symbol('standing'),
});

export default class Player {
    constructor(x, y, keys) {

        this.keys = keys;
        const options = {
            inertia: Infinity,
            // mass: 9,
            // density: 1,
            // frictionAir: 0,
        }

        // this.body = Bodies.circle(x, y, 80, options);
        this.body = createPlayerBody(x, y, 80, options);

        this.state = {
            isGrounded: false,
            canDoubleJump: false,
            walkStateStack: [WalkStates.STANDING],
        }

        this.stats = {
            jumpPower: -0.385,
            speed: 10,
        }
    }

    startWalkRight() {
        this.state.walkStateStack.push(WalkStates.WALK_RIGHT);
    }

    stopWalkRight() {
        this.state.walkStateStack = this.state.walkStateStack.filter(state => state !== WalkStates.WALK_RIGHT);
        Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y })
    }

    startWalkLeft() {
        this.state.walkStateStack.push(WalkStates.WALK_LEFT);
    }

    stopWalkLeft() {
        this.state.walkStateStack = this.state.walkStateStack.filter(state => state !== WalkStates.WALK_LEFT);
        Body.setVelocity(this.body, { x: 0, y: this.body.velocity.y })
    }

    dive(isPressed) {
        if (isPressed) {
            Body.setVelocity(this.body, { x: 0, y: 10 });
        }
    }

    jump() {
        if (this.state.isGrounded) {
            this.state.isGrounded = false;
            this.body.velocity.y = 0;
            Body.applyForce(this.body, this.body.position, { x: 0, y: this.stats.jumpPower });
            this.state.canDoubleJump = true;
        } else if (this.state.canDoubleJump) {
            this.state.canDoubleJump = false;
            this.body.velocity.y = 0;
            Body.applyForce(this.body, this.body.position, { x: 0, y: this.stats.jumpPower });

        }
    }

    update() {

        let currentWalkState = this.getCurrentWalkState();

        if (currentWalkState === WalkStates.STANDING) {
            return;
        }

        if (currentWalkState === WalkStates.WALK_LEFT) {
            Body.setVelocity(this.body, { x: -this.stats.speed, y: this.body.velocity.y });
        } else {
            Body.setVelocity(this.body, { x: this.stats.speed, y: this.body.velocity.y });
        }

    }

    getCurrentWalkState() {
        return this.state.walkStateStack[this.state.walkStateStack.length - 1];
    }

    
}