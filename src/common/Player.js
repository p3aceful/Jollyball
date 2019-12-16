import { Body, Bodies, Vertices, Common } from 'matter-js';

export default class Player {

    static stats() {
        return {
            jumpPower: -10,
            speed: 5,
        }
    }

    constructor(body) {
        this.body = body;

        this.keyState = {
            up: false,
            down: false,
            right: false,
            left: false,
        }

        this.pendingInputs = [];
        this.outgoingInput = [];
    }

    applyInput(input) {

        if (input.up) {
            Body.setVelocity(this.body, { x: this.body.velocity.x, y: -10 });
        }
        if (input.down) {
            Body.setVelocity(this.body, { x: this.body.velocity.x, y: 10 });
        }
        if (input.left) {
            // Body.applyForce(this.body, this.body.position, { x: -0.14, y: 0 });
            Body.setVelocity(this.body, { x: -10, y: this.body.velocity.y });
        }
        if (input.right) {
            // Body.applyForce(this.body, this.body.position, { x: 0.14, y: 0 });
            Body.setVelocity(this.body, { x: 10, y: this.body.velocity.y });
        }
    }

    
    // dive(isPressed) {
    //     if (isPressed) {
    //         Body.setVelocity(this.body, { x: 0, y: 10 });
    //     }
    // }

    // jump(isPressed) {
    //     if (!isPressed) {
    //         return;
    //     }

    //     const stats = Player.stats();
    //     if (this.state.isGrounded) {
    //         this.state.isGrounded = false;
    //         Body.setVelocity(this.body, { x: this.body.velocity.x, y: stats.jumpPower });
    //         this.state.canDoubleJump = true;
    //     } else if (this.state.canDoubleJump) {
    //         this.state.canDoubleJump = false;
    //         Body.setVelocity(this.body, { x: this.body.velocity.x, y: stats.jumpPower });
    //     }
    // }
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