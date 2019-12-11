import { Body, Bodies, Vertices, Common } from 'matter-js';

const WalkStates = Object.freeze({
    WALK_RIGHT: Symbol('walk_right'),
    WALK_LEFT: Symbol('walk_left'),
    STANDING: Symbol('standing'),
});

export default class Player {

    static stats() {
        return {
            jumpPower: -10,
            speed: 5,
        }
    }

    constructor(body) {
        this.body = body;

        this.state = {
            isGrounded: false,
            canDoubleJump: false,
            walkStateStack: [WalkStates.STANDING],
        }

        this.inputSequenceNumber = 0;
        this.pendingInputs = [];
    }

    queueInput(input) {
        this.pendingInputs.push(input);
    }


    applyInput(input) {
        switch (input.type) {
            case 'dive': this.dive(input.isPressed); break;
            case 'jump': this.jump(input.isPressed); break;
            case 'move-left': input.isPressed ? this.startWalkLeft() : this.stopWalkLeft(); break;
            case 'move-right': input.isPressed ? this.startWalkRight() : this.stopWalkRight(); break;
        }
    }

    update(tickMetaData) {
        
        if (typeof window !== 'undefined') {
            // console.log(tickMetaData)

        }
        // Update player
        let currentWalkState = this.getCurrentWalkState();

        if (currentWalkState === WalkStates.STANDING) {
            return;
        }

        const stats = Player.stats();

        if (currentWalkState === WalkStates.WALK_LEFT) {
            Body.setVelocity(this.body, { x: -stats.speed, y: this.body.velocity.y });
        } else {
            // Body.setVelocity(this.body, { x: this.stats.speed, y: this.body.velocity.y });
            Body.setVelocity(this.body, { x: stats.speed, y: this.body.velocity.y })
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

    jump(isPressed) {
        if (!isPressed) {
            return;
        }

        const stats = Player.stats();
        if (this.state.isGrounded) {
            this.state.isGrounded = false;
            Body.setVelocity(this.body, { x: this.body.velocity.x, y: stats.jumpPower });
            this.state.canDoubleJump = true;
        } else if (this.state.canDoubleJump) {
            this.state.canDoubleJump = false;
            Body.setVelocity(this.body, { x: this.body.velocity.x, y: stats.jumpPower });
        }
    }

    getCurrentWalkState() {
        return this.state.walkStateStack[this.state.walkStateStack.length - 1];
    }
}


export function createPlayerBody(x, y, radius, options = {}) {
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