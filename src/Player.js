import { Body, Vertices, Common } from 'matter-js';

const WalkStates = Object.freeze({
    WALK_RIGHT: Symbol('walk_right'),
    WALK_LEFT: Symbol('walk_left'),
    STANDING: Symbol('standing'),
});

export function createPlayerBody(x, y, radius, options) {
    let sides = 20;
    let theta = Math.PI / sides;
    let path = '';
    let offset = theta * 20.5;

    for (var i = 0; i < sides; i += 1) {
        var angle = offset + (i * theta),
            xx = Math.cos(angle) * radius,
            yy = Math.sin(angle) * radius;

        path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
    }

    var polygon = { 
        label: 'Polygon Body',
        position: { x, y },
        vertices: Vertices.fromPath(path)
    };

    if (options.chamfer) {
        var chamfer = options.chamfer;
        polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
            chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
        delete options.chamfer;
    }

    return Body.create(Common.extend({}, polygon, options));
}

export default class Player {
    constructor(x, y, keys) {

        this.keys = keys;
        const options = {
            inertia: Infinity,
        }

        this.body = createPlayerBody(x, y, 80, options);

        this.state = {
            isGrounded: false,
            canDoubleJump: false,
            walkStateStack: [WalkStates.STANDING],
        }

        this.stats = {
            jumpPower: -0.355,
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
            Body.setVelocity(this.body, { x: this.body.velocity.x, y: 0});
            Body.applyForce(this.body, this.body.position, { x: 0, y: this.stats.jumpPower });
            this.state.canDoubleJump = true;
        } else if (this.state.canDoubleJump) {
            this.state.canDoubleJump = false;
            Body.setVelocity(this.body, { x: this.body.velocity.x, y: 0});
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