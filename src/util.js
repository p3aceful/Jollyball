import { Vertices, Body, Common } from 'matter-js';

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

export function getBody(player) {
    return player.body;
}

export function setupPlayerKeyboard(keys, keyboard, player) {
    const { jump, moveRight, moveLeft, dive } = keys;

    keyboard.addMapping(jump, isPressed => {
        if (isPressed) {
            player.jump();
        }
    });

    keyboard.addMapping(moveRight, isPressed => {
        if (isPressed) {
            player.startWalkRight();
        } else {
            player.stopWalkRight();
        }
    });

    keyboard.addMapping(moveLeft, isPressed => {
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
