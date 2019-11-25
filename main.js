/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/matter-js/build/matter.js":
/*!************************************************!*\
  !*** ./node_modules/matter-js/build/matter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/**
* matter-js 0.14.2 by @liabru 2018-06-11
* http://brm.io/matter-js/
* License MIT
*/

/**
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
/**
* The `Matter.Body` module contains methods for creating and manipulating body models.
* A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
* Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/

var Body = {};

module.exports = Body;

var Vertices = _dereq_('../geometry/Vertices');
var Vector = _dereq_('../geometry/Vector');
var Sleeping = _dereq_('../core/Sleeping');
var Render = _dereq_('../render/Render');
var Common = _dereq_('../core/Common');
var Bounds = _dereq_('../geometry/Bounds');
var Axes = _dereq_('../geometry/Axes');

(function() {

    Body._inertiaScale = 4;
    Body._nextCollidingGroupId = 1;
    Body._nextNonCollidingGroupId = -1;
    Body._nextCategory = 0x0001;

    /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */
    Body.create = function(options) {
        var defaults = {
            id: Common.nextId(),
            type: 'body',
            label: 'Body',
            parts: [],
            plugin: {},
            angle: 0,
            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
            position: { x: 0, y: 0 },
            force: { x: 0, y: 0 },
            torque: 0,
            positionImpulse: { x: 0, y: 0 },
            constraintImpulse: { x: 0, y: 0, angle: 0 },
            totalContacts: 0,
            speed: 0,
            angularSpeed: 0,
            velocity: { x: 0, y: 0 },
            angularVelocity: 0,
            isSensor: false,
            isStatic: false,
            isSleeping: false,
            motion: 0,
            sleepThreshold: 60,
            density: 0.001,
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.5,
            frictionAir: 0.01,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            },
            slop: 0.05,
            timeScale: 1,
            render: {
                visible: true,
                opacity: 1,
                sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                },
                lineWidth: 0
            }
        };

        var body = Common.extend(defaults, options);

        _initProperties(body, options);

        return body;
    };

    /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */
    Body.nextGroup = function(isNonColliding) {
        if (isNonColliding)
            return Body._nextNonCollidingGroupId--;

        return Body._nextCollidingGroupId++;
    };

    /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */
    Body.nextCategory = function() {
        Body._nextCategory = Body._nextCategory << 1;
        return Body._nextCategory;
    };

    /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */
    var _initProperties = function(body, options) {
        options = options || {};

        // init required properties (order is important)
        Body.set(body, {
            bounds: body.bounds || Bounds.create(body.vertices),
            positionPrev: body.positionPrev || Vector.clone(body.position),
            anglePrev: body.anglePrev || body.angle,
            vertices: body.vertices,
            parts: body.parts || [body],
            isStatic: body.isStatic,
            isSleeping: body.isSleeping,
            parent: body.parent || body
        });

        Vertices.rotate(body.vertices, body.angle, body.position);
        Axes.rotate(body.axes, body.angle);
        Bounds.update(body.bounds, body.vertices, body.velocity);

        // allow options to override the automatically calculated properties
        Body.set(body, {
            axes: options.axes || body.axes,
            area: options.area || body.area,
            mass: options.mass || body.mass,
            inertia: options.inertia || body.inertia
        });

        // render properties
        var defaultFillStyle = (body.isStatic ? '#2e2b44' : Common.choose(['#006BA6', '#0496FF', '#FFBC42', '#D81159', '#8F2D56'])),
            defaultStrokeStyle = '#000';
        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
    };

    /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */
    Body.set = function(body, settings, value) {
        var property;

        if (typeof settings === 'string') {
            property = settings;
            settings = {};
            settings[property] = value;
        }

        for (property in settings) {
            value = settings[property];

            if (!settings.hasOwnProperty(property))
                continue;

            switch (property) {

            case 'isStatic':
                Body.setStatic(body, value);
                break;
            case 'isSleeping':
                Sleeping.set(body, value);
                break;
            case 'mass':
                Body.setMass(body, value);
                break;
            case 'density':
                Body.setDensity(body, value);
                break;
            case 'inertia':
                Body.setInertia(body, value);
                break;
            case 'vertices':
                Body.setVertices(body, value);
                break;
            case 'position':
                Body.setPosition(body, value);
                break;
            case 'angle':
                Body.setAngle(body, value);
                break;
            case 'velocity':
                Body.setVelocity(body, value);
                break;
            case 'angularVelocity':
                Body.setAngularVelocity(body, value);
                break;
            case 'parts':
                Body.setParts(body, value);
                break;
            default:
                body[property] = value;

            }
        }
    };

    /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */
    Body.setStatic = function(body, isStatic) {
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.isStatic = isStatic;

            if (isStatic) {
                part._original = {
                    restitution: part.restitution,
                    friction: part.friction,
                    mass: part.mass,
                    inertia: part.inertia,
                    density: part.density,
                    inverseMass: part.inverseMass,
                    inverseInertia: part.inverseInertia
                };

                part.restitution = 0;
                part.friction = 1;
                part.mass = part.inertia = part.density = Infinity;
                part.inverseMass = part.inverseInertia = 0;

                part.positionPrev.x = part.position.x;
                part.positionPrev.y = part.position.y;
                part.anglePrev = part.angle;
                part.angularVelocity = 0;
                part.speed = 0;
                part.angularSpeed = 0;
                part.motion = 0;
            } else if (part._original) {
                part.restitution = part._original.restitution;
                part.friction = part._original.friction;
                part.mass = part._original.mass;
                part.inertia = part._original.inertia;
                part.density = part._original.density;
                part.inverseMass = part._original.inverseMass;
                part.inverseInertia = part._original.inverseInertia;

                delete part._original;
            }
        }
    };

    /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */
    Body.setMass = function(body, mass) {
        var moment = body.inertia / (body.mass / 6);
        body.inertia = moment * (mass / 6);
        body.inverseInertia = 1 / body.inertia;

        body.mass = mass;
        body.inverseMass = 1 / body.mass;
        body.density = body.mass / body.area;
    };

    /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */
    Body.setDensity = function(body, density) {
        Body.setMass(body, density * body.area);
        body.density = density;
    };

    /**
     * Sets the moment of inertia (i.e. second moment of area) of the body of the body. 
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */
    Body.setInertia = function(body, inertia) {
        body.inertia = inertia;
        body.inverseInertia = 1 / body.inertia;
    };

    /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull, concave hulls are not supported.
     *
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */
    Body.setVertices = function(body, vertices) {
        // change vertices
        if (vertices[0].body === body) {
            body.vertices = vertices;
        } else {
            body.vertices = Vertices.create(vertices, body);
        }

        // update properties
        body.axes = Axes.fromVertices(body.vertices);
        body.area = Vertices.area(body.vertices);
        Body.setMass(body, body.density * body.area);

        // orient vertices around the centre of mass at origin (0, 0)
        var centre = Vertices.centre(body.vertices);
        Vertices.translate(body.vertices, centre, -1);

        // update inertia while vertices are at origin (0, 0)
        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

        // update geometry
        Vertices.translate(body.vertices, body.position);
        Bounds.update(body.bounds, body.vertices, body.velocity);
    };

    /**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param [body] parts
     * @param {bool} [autoHull=true]
     */
    Body.setParts = function(body, parts, autoHull) {
        var i;

        // add all the parts, ensuring that the first part is always the parent body
        parts = parts.slice(0);
        body.parts.length = 0;
        body.parts.push(body);
        body.parent = body;

        for (i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part !== body) {
                part.parent = body;
                body.parts.push(part);
            }
        }

        if (body.parts.length === 1)
            return;

        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

        // find the convex hull of all parts to set on the parent body
        if (autoHull) {
            var vertices = [];
            for (i = 0; i < parts.length; i++) {
                vertices = vertices.concat(parts[i].vertices);
            }

            Vertices.clockwiseSort(vertices);

            var hull = Vertices.hull(vertices),
                hullCentre = Vertices.centre(hull);

            Body.setVertices(body, hull);
            Vertices.translate(body.vertices, hullCentre);
        }

        // sum the properties of all compound parts of the parent body
        var total = Body._totalProperties(body);

        body.area = total.area;
        body.parent = body;
        body.position.x = total.centre.x;
        body.position.y = total.centre.y;
        body.positionPrev.x = total.centre.x;
        body.positionPrev.y = total.centre.y;

        Body.setMass(body, total.mass);
        Body.setInertia(body, total.inertia);
        Body.setPosition(body, total.centre);
    };

    /**
     * Sets the position of the body instantly. Velocity, angle, force etc. are unchanged.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     */
    Body.setPosition = function(body, position) {
        var delta = Vector.sub(position, body.position);
        body.positionPrev.x += delta.x;
        body.positionPrev.y += delta.y;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.position.x += delta.x;
            part.position.y += delta.y;
            Vertices.translate(part.vertices, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Sets the angle of the body instantly. Angular velocity, position, force etc. are unchanged.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     */
    Body.setAngle = function(body, angle) {
        var delta = angle - body.angle;
        body.anglePrev += delta;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.angle += delta;
            Vertices.rotate(part.vertices, delta, body.position);
            Axes.rotate(part.axes, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
            if (i > 0) {
                Vector.rotateAbout(part.position, delta, body.position, part.position);
            }
        }
    };

    /**
     * Sets the linear velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */
    Body.setVelocity = function(body, velocity) {
        body.positionPrev.x = body.position.x - velocity.x;
        body.positionPrev.y = body.position.y - velocity.y;
        body.velocity.x = velocity.x;
        body.velocity.y = velocity.y;
        body.speed = Vector.magnitude(body.velocity);
    };

    /**
     * Sets the angular velocity of the body instantly. Position, angle, force etc. are unchanged. See also `Body.applyForce`.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */
    Body.setAngularVelocity = function(body, velocity) {
        body.anglePrev = body.angle - velocity;
        body.angularVelocity = velocity;
        body.angularSpeed = Math.abs(body.angularVelocity);
    };

    /**
     * Moves a body by a given vector relative to its current position, without imparting any velocity.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     */
    Body.translate = function(body, translation) {
        Body.setPosition(body, Vector.add(body.position, translation));
    };

    /**
     * Rotates a body by a given angle relative to its current angle, without imparting any angular velocity.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     */
    Body.rotate = function(body, rotation, point) {
        if (!point) {
            Body.setAngle(body, body.angle + rotation);
        } else {
            var cos = Math.cos(rotation),
                sin = Math.sin(rotation),
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.setAngle(body, body.angle + rotation);
        }
    };

    /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */
    Body.scale = function(body, scaleX, scaleY, point) {
        var totalArea = 0,
            totalInertia = 0;

        point = point || body.position;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            // scale vertices
            Vertices.scale(part.vertices, scaleX, scaleY, point);

            // update properties
            part.axes = Axes.fromVertices(part.vertices);
            part.area = Vertices.area(part.vertices);
            Body.setMass(part, body.density * part.area);

            // update inertia (requires vertices to be at origin)
            Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
            Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
            Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });

            if (i > 0) {
                totalArea += part.area;
                totalInertia += part.inertia;
            }

            // scale position
            part.position.x = point.x + (part.position.x - point.x) * scaleX;
            part.position.y = point.y + (part.position.y - point.y) * scaleY;

            // update bounds
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }

        // handle parent body
        if (body.parts.length > 1) {
            body.area = totalArea;

            if (!body.isStatic) {
                Body.setMass(body, body.density * totalArea);
                Body.setInertia(body, totalInertia);
            }
        }

        // handle circles
        if (body.circleRadius) { 
            if (scaleX === scaleY) {
                body.circleRadius *= scaleX;
            } else {
                // body is no longer a circle
                body.circleRadius = null;
            }
        }
    };

    /**
     * Performs a simulation step for the given `body`, including updating position and angle using Verlet integration.
     * @method update
     * @param {body} body
     * @param {number} deltaTime
     * @param {number} timeScale
     * @param {number} correction
     */
    Body.update = function(body, deltaTime, timeScale, correction) {
        var deltaTimeSquared = Math.pow(deltaTime * timeScale * body.timeScale, 2);

        // from the previous step
        var frictionAir = 1 - body.frictionAir * timeScale * body.timeScale,
            velocityPrevX = body.position.x - body.positionPrev.x,
            velocityPrevY = body.position.y - body.positionPrev.y;

        // update velocity with Verlet integration
        body.velocity.x = (velocityPrevX * frictionAir * correction) + (body.force.x / body.mass) * deltaTimeSquared;
        body.velocity.y = (velocityPrevY * frictionAir * correction) + (body.force.y / body.mass) * deltaTimeSquared;

        body.positionPrev.x = body.position.x;
        body.positionPrev.y = body.position.y;
        body.position.x += body.velocity.x;
        body.position.y += body.velocity.y;

        // update angular velocity with Verlet integration
        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
        body.anglePrev = body.angle;
        body.angle += body.angularVelocity;

        // track speed and acceleration
        body.speed = Vector.magnitude(body.velocity);
        body.angularSpeed = Math.abs(body.angularVelocity);

        // transform the body geometry
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            Vertices.translate(part.vertices, body.velocity);
            
            if (i > 0) {
                part.position.x += body.velocity.x;
                part.position.y += body.velocity.y;
            }

            if (body.angularVelocity !== 0) {
                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                Axes.rotate(part.axes, body.angularVelocity);
                if (i > 0) {
                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                }
            }

            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Applies a force to a body from a given world-space position, including resulting torque.
     * @method applyForce
     * @param {body} body
     * @param {vector} position
     * @param {vector} force
     */
    Body.applyForce = function(body, position, force) {
        body.force.x += force.x;
        body.force.y += force.y;
        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
        body.torque += offset.x * force.y - offset.y * force.x;
    };

    /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */
    Body._totalProperties = function(body) {
        // from equations at:
        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
        // http://output.to/sideway/default.asp?qno=121100087

        var properties = {
            mass: 0,
            area: 0,
            inertia: 0,
            centre: { x: 0, y: 0 }
        };

        // sum the properties of all compound parts of the parent body
        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
            var part = body.parts[i],
                mass = part.mass !== Infinity ? part.mass : 1;

            properties.mass += mass;
            properties.area += part.area;
            properties.inertia += part.inertia;
            properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
        }

        properties.centre = Vector.div(properties.centre, properties.mass);

        return properties;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "body"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */

    /**
     * An array of bodies that make up this body. 
     * The first body in the array must always be a self reference to the current body instance.
     * All bodies in the `parts` array together form a single rigid compound body.
     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
     * Parts themselves should never be added to a `World`, only the parent body should be.
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
     *
     * @property parts
     * @type body[]
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * A self reference if the body is _not_ a part of another body.
     * Otherwise this is a reference to the body that this is a part of.
     * See `body.parts`.
     *
     * @property parent
     * @type body
     */

    /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */

    /**
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * When passed via `Body.create`, the vertices are translated relative to `body.position` (i.e. world-space, and constantly updated by `Body.update` during simulation).
     * The `Vector` objects are also augmented with additional properties required for efficient collision detection. 
     *
     * Other properties such as `inertia` and `bounds` are automatically calculated from the passed vertices (unless provided via `options`).
     * Concave hulls are not currently supported. The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @property vertices
     * @type vector[]
     */

    /**
     * A `Vector` that specifies the current world-space position of the body.
     *
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
     *
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
     *
     * @property torque
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.velocity`).
     *
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that _measures_ the current angular speed of the body after the last `Body.update`. It is read-only and always positive (it's the magnitude of `body.angularVelocity`).
     *
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */

    /**
     * A `Vector` that _measures_ the current velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's velocity directly, you should either apply a force or simply change the body's `position` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that _measures_ the current angular velocity of the body after the last `Body.update`. It is read-only. 
     * If you need to modify a body's angular velocity directly, you should apply a torque or simply change the body's `angle` (as the engine uses position-Verlet integration).
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */

    /**
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     * If you need to set a body as static after its creation, you should use `Body.setStatic` as this requires more than just setting this flag.
     *
     * @property isStatic
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     * If you need to set a body as sleeping, you should use `Sleeping.set` as this requires more than just setting this flag.
     *
     * @property isSleeping
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that _measures_ the amount of movement a body currently has (a combination of `speed` and `angularSpeed`). It is read-only and always positive.
     * It is used and updated by the `Matter.Sleeping` module during simulation to decide if a body has come to rest.
     *
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     *
     * @property sleepThreshold
     * @type number
     * @default 60
     */

    /**
     * A `Number` that defines the density of the body, that is its mass per unit area.
     * If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object.
     * This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
     *
     * @property density
     * @type number
     * @default 0.001
     */

    /**
     * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead.
     * If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
     *
     * @property mass
     * @type number
     */

    /**
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     * If you modify this value, you must also modify the `body.mass` property.
     *
     * @property inverseMass
     * @type number
     */

    /**
     * A `Number` that defines the moment of inertia (i.e. second moment of area) of the body.
     * It is automatically calculated from the given convex hull (`vertices` array) and density in `Body.create`.
     * If you modify this value, you must also modify the `body.inverseInertia` property (`1 / inertia`).
     *
     * @property inertia
     * @type number
     */

    /**
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * If you modify this value, you must also modify the `body.inertia` property.
     *
     * @property inverseInertia
     * @type number
     */

    /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     *     Math.max(bodyA.restitution, bodyB.restitution)
     *
     * @property restitution
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     *     Math.min(bodyA.friction, bodyB.friction)
     *
     * @property friction
     * @type number
     * @default 0.1
     */

    /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */

    /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */

    /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */

    /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */

    /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */

    /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */

    /**
     * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies.
     * Avoid changing this value unless you understand the purpose of `slop` in physics engines.
     * The default should generally suffice, although very large bodies may require larger values for stable stacking.
     *
     * @property slop
     * @type number
     * @default 0.05
     */

    /**
     * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
     *
     * @property timeScale
     * @type number
     * @default 1
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */

    /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */

    /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */
     
    /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */

     /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */

     /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */

    /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */

    /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated from the given convex hull (`vertices` array) in `Body.create`.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @property axes
     * @type vector[]
     */
     
    /**
     * A `Number` that _measures_ the area of the body's convex hull, calculated at creation by `Body.create`.
     *
     * @property area
     * @type string
     * @default 
     */

    /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated from the given convex hull (`vertices` array) in `Body.create` and constantly updated by `Body.update` during simulation.
     *
     * @property bounds
     * @type bounds
     */

})();

},{"../core/Common":14,"../core/Sleeping":22,"../geometry/Axes":25,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29,"../render/Render":31}],2:[function(_dereq_,module,exports){
/**
* The `Matter.Composite` module contains methods for creating and manipulating composite bodies.
* A composite body is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`, therefore composites form a tree structure.
* It is important to use the functions in this module to modify composites, rather than directly modifying their properties.
* Note that the `Matter.World` object is also a type of `Matter.Composite` and as such all composite methods here can also operate on a `Matter.World`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/

var Composite = {};

module.exports = Composite;

var Events = _dereq_('../core/Events');
var Common = _dereq_('../core/Common');
var Bounds = _dereq_('../geometry/Bounds');
var Body = _dereq_('./Body');

(function() {

    /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */
    Composite.create = function(options) {
        return Common.extend({ 
            id: Common.nextId(),
            type: 'composite',
            parent: null,
            isModified: false,
            bodies: [], 
            constraints: [], 
            composites: [],
            label: 'Composite',
            plugin: {}
        }, options);
    };

    /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */
    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
        composite.isModified = isModified;

        if (updateParents && composite.parent) {
            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
        }

        if (updateChildren) {
            for(var i = 0; i < composite.composites.length; i++) {
                var childComposite = composite.composites[i];
                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
            }
        }
    };

    /**
     * Generic add function. Adds one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {} object
     * @return {composite} The original composite with the objects added
     */
    Composite.add = function(composite, object) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeAdd', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                // skip adding compound parts
                if (obj.parent !== obj) {
                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
                    break;
                }

                Composite.addBody(composite, obj);
                break;
            case 'constraint':
                Composite.addConstraint(composite, obj);
                break;
            case 'composite':
                Composite.addComposite(composite, obj);
                break;
            case 'mouseConstraint':
                Composite.addConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterAdd', { object: object });

        return composite;
    };

    /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */
    Composite.remove = function(composite, object, deep) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeRemove', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                Composite.removeBody(composite, obj, deep);
                break;
            case 'constraint':
                Composite.removeConstraint(composite, obj, deep);
                break;
            case 'composite':
                Composite.removeComposite(composite, obj, deep);
                break;
            case 'mouseConstraint':
                Composite.removeConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterRemove', { object: object });

        return composite;
    };

    /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */
    Composite.addComposite = function(compositeA, compositeB) {
        compositeA.composites.push(compositeB);
        compositeB.parent = compositeA;
        Composite.setModified(compositeA, true, true, false);
        return compositeA;
    };

    /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */
    Composite.removeComposite = function(compositeA, compositeB, deep) {
        var position = Common.indexOf(compositeA.composites, compositeB);
        if (position !== -1) {
            Composite.removeCompositeAt(compositeA, position);
            Composite.setModified(compositeA, true, true, false);
        }

        if (deep) {
            for (var i = 0; i < compositeA.composites.length; i++){
                Composite.removeComposite(compositeA.composites[i], compositeB, true);
            }
        }

        return compositeA;
    };

    /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */
    Composite.removeCompositeAt = function(composite, position) {
        composite.composites.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */
    Composite.addBody = function(composite, body) {
        composite.bodies.push(body);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBody = function(composite, body, deep) {
        var position = Common.indexOf(composite.bodies, body);
        if (position !== -1) {
            Composite.removeBodyAt(composite, position);
            Composite.setModified(composite, true, true, false);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeBody(composite.composites[i], body, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBodyAt = function(composite, position) {
        composite.bodies.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */
    Composite.addConstraint = function(composite, constraint) {
        composite.constraints.push(constraint);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraint = function(composite, constraint, deep) {
        var position = Common.indexOf(composite.constraints, constraint);
        if (position !== -1) {
            Composite.removeConstraintAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeConstraint(composite.composites[i], constraint, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraintAt = function(composite, position) {
        composite.constraints.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */
    Composite.clear = function(composite, keepStatic, deep) {
        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.clear(composite.composites[i], keepStatic, true);
            }
        }
        
        if (keepStatic) {
            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
        } else {
            composite.bodies.length = 0;
        }

        composite.constraints.length = 0;
        composite.composites.length = 0;
        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */
    Composite.allBodies = function(composite) {
        var bodies = [].concat(composite.bodies);

        for (var i = 0; i < composite.composites.length; i++)
            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

        return bodies;
    };

    /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */
    Composite.allConstraints = function(composite) {
        var constraints = [].concat(composite.constraints);

        for (var i = 0; i < composite.composites.length; i++)
            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

        return constraints;
    };

    /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */
    Composite.allComposites = function(composite) {
        var composites = [].concat(composite.composites);

        for (var i = 0; i < composite.composites.length; i++)
            composites = composites.concat(Composite.allComposites(composite.composites[i]));

        return composites;
    };

    /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */
    Composite.get = function(composite, id, type) {
        var objects,
            object;

        switch (type) {
        case 'body':
            objects = Composite.allBodies(composite);
            break;
        case 'constraint':
            objects = Composite.allConstraints(composite);
            break;
        case 'composite':
            objects = Composite.allComposites(composite).concat(composite);
            break;
        }

        if (!objects)
            return null;

        object = objects.filter(function(object) { 
            return object.id.toString() === id.toString(); 
        });

        return object.length === 0 ? null : object[0];
    };

    /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */
    Composite.move = function(compositeA, objects, compositeB) {
        Composite.remove(compositeA, objects);
        Composite.add(compositeB, objects);
        return compositeA;
    };

    /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */
    Composite.rebase = function(composite) {
        var objects = Composite.allBodies(composite)
                        .concat(Composite.allConstraints(composite))
                        .concat(Composite.allComposites(composite));

        for (var i = 0; i < objects.length; i++) {
            objects[i].id = Common.nextId();
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */
    Composite.translate = function(composite, translation, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            Body.translate(bodies[i], translation);
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.rotate = function(composite, rotation, point, recursive) {
        var cos = Math.cos(rotation),
            sin = Math.sin(rotation),
            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.rotate(body, rotation);
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + dx * scaleX,
                y: point.y + dy * scaleY
            });

            Body.scale(body, scaleX, scaleY);
        }

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */
    Composite.bounds = function(composite) {
        var bodies = Composite.allBodies(composite),
            vertices = [];

        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i];
            vertices.push(body.bounds.min, body.bounds.max);
        }

        return Bounds.create(vertices);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */

    /**
     * A flag that specifies whether the composite has been modified during the current step.
     * Most `Matter.Composite` methods will automatically set this flag to `true` to inform the engine of changes to be handled.
     * If you need to change it manually, you should use the `Composite.setModified` method.
     *
     * @property isModified
     * @type boolean
     * @default false
     */

    /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */

    /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */

    /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();

},{"../core/Common":14,"../core/Events":16,"../geometry/Bounds":26,"./Body":1}],3:[function(_dereq_,module,exports){
/**
* The `Matter.World` module contains methods for creating and manipulating the world composite.
* A `Matter.World` is a `Matter.Composite` body, which is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`.
* A `Matter.World` has a few additional properties including `gravity` and `bounds`.
* It is important to use the functions in the `Matter.Composite` module to modify the world composite, rather than directly modifying its properties.
* There are also a few methods here that alias those in `Matter.Composite` for easier readability.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class World
* @extends Composite
*/

var World = {};

module.exports = World;

var Composite = _dereq_('./Composite');
var Constraint = _dereq_('../constraint/Constraint');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a new world composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @constructor
     * @param {} options
     * @return {world} A new world
     */
    World.create = function(options) {
        var composite = Composite.create();

        var defaults = {
            label: 'World',
            gravity: {
                x: 0,
                y: 1,
                scale: 0.001
            },
            bounds: { 
                min: { x: -Infinity, y: -Infinity }, 
                max: { x: Infinity, y: Infinity } 
            }
        };
        
        return Common.extend(composite, defaults, options);
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * The gravity to apply on the world.
     *
     * @property gravity
     * @type object
     */

    /**
     * The gravity x component.
     *
     * @property gravity.x
     * @type object
     * @default 0
     */

    /**
     * The gravity y component.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */

    /**
     * The gravity scale factor.
     *
     * @property gravity.scale
     * @type object
     * @default 0.001
     */

    /**
     * A `Bounds` object that defines the world bounds for collision detection.
     *
     * @property bounds
     * @type bounds
     * @default { min: { x: -Infinity, y: -Infinity }, max: { x: Infinity, y: Infinity } }
     */

    // World is a Composite body
    // see src/module/Outro.js for these aliases:
    
    /**
     * An alias for Composite.add
     * @method add
     * @param {world} world
     * @param {} object
     * @return {composite} The original world with the objects added
     */

    /**
     * An alias for Composite.remove
     * @method remove
     * @param {world} world
     * @param {} object
     * @param {boolean} [deep=false]
     * @return {composite} The original world with the objects removed
     */

    /**
     * An alias for Composite.clear
     * @method clear
     * @param {world} world
     * @param {boolean} keepStatic
     */

    /**
     * An alias for Composite.addComposite
     * @method addComposite
     * @param {world} world
     * @param {composite} composite
     * @return {world} The original world with the objects from composite added
     */
    
     /**
      * An alias for Composite.addBody
      * @method addBody
      * @param {world} world
      * @param {body} body
      * @return {world} The original world with the body added
      */

     /**
      * An alias for Composite.addConstraint
      * @method addConstraint
      * @param {world} world
      * @param {constraint} constraint
      * @return {world} The original world with the constraint added
      */

})();

},{"../constraint/Constraint":12,"../core/Common":14,"./Composite":2}],4:[function(_dereq_,module,exports){
/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/

var Contact = {};

module.exports = Contact;

(function() {

    /**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */
    Contact.create = function(vertex) {
        return {
            id: Contact.id(vertex),
            vertex: vertex,
            normalImpulse: 0,
            tangentImpulse: 0
        };
    };
    
    /**
     * Generates a contact id.
     * @method id
     * @param {vertex} vertex
     * @return {string} Unique contactID
     */
    Contact.id = function(vertex) {
        return vertex.body.id + '_' + vertex.index;
    };

})();

},{}],5:[function(_dereq_,module,exports){
/**
* The `Matter.Detector` module contains methods for detecting collisions given a set of pairs.
*
* @class Detector
*/

// TODO: speculative contacts

var Detector = {};

module.exports = Detector;

var SAT = _dereq_('./SAT');
var Pair = _dereq_('./Pair');
var Bounds = _dereq_('../geometry/Bounds');

(function() {

    /**
     * Finds all collisions given a list of pairs.
     * @method collisions
     * @param {pair[]} broadphasePairs
     * @param {engine} engine
     * @return {array} collisions
     */
    Detector.collisions = function(broadphasePairs, engine) {
        var collisions = [],
            pairsTable = engine.pairs.table;

        
        for (var i = 0; i < broadphasePairs.length; i++) {
            var bodyA = broadphasePairs[i][0], 
                bodyB = broadphasePairs[i][1];

            if ((bodyA.isStatic || bodyA.isSleeping) && (bodyB.isStatic || bodyB.isSleeping))
                continue;
            
            if (!Detector.canCollide(bodyA.collisionFilter, bodyB.collisionFilter))
                continue;


            // mid phase
            if (Bounds.overlaps(bodyA.bounds, bodyB.bounds)) {
                for (var j = bodyA.parts.length > 1 ? 1 : 0; j < bodyA.parts.length; j++) {
                    var partA = bodyA.parts[j];

                    for (var k = bodyB.parts.length > 1 ? 1 : 0; k < bodyB.parts.length; k++) {
                        var partB = bodyB.parts[k];

                        if ((partA === bodyA && partB === bodyB) || Bounds.overlaps(partA.bounds, partB.bounds)) {
                            // find a previous collision we could reuse
                            var pairId = Pair.id(partA, partB),
                                pair = pairsTable[pairId],
                                previousCollision;

                            if (pair && pair.isActive) {
                                previousCollision = pair.collision;
                            } else {
                                previousCollision = null;
                            }

                            // narrow phase
                            var collision = SAT.collides(partA, partB, previousCollision);


                            if (collision.collided) {
                                collisions.push(collision);
                            }
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */
    Detector.canCollide = function(filterA, filterB) {
        if (filterA.group === filterB.group && filterA.group !== 0)
            return filterA.group > 0;

        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
    };

})();

},{"../geometry/Bounds":26,"./Pair":7,"./SAT":11}],6:[function(_dereq_,module,exports){
/**
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
*/

var Grid = {};

module.exports = Grid;

var Pair = _dereq_('./Pair');
var Detector = _dereq_('./Detector');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a new grid.
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */
    Grid.create = function(options) {
        var defaults = {
            controller: Grid,
            detector: Detector.collisions,
            buckets: {},
            pairs: {},
            pairsList: [],
            bucketWidth: 48,
            bucketHeight: 48
        };

        return Common.extend(defaults, options);
    };

    /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */

    /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */

    /**
     * Updates the grid.
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */
    Grid.update = function(grid, bodies, engine, forceUpdate) {
        var i, col, row,
            world = engine.world,
            buckets = grid.buckets,
            bucket,
            bucketId,
            gridChanged = false;


        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isSleeping && !forceUpdate)
                continue;

            // don't update out of world bodies
            if (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y)
                continue;

            var newRegion = Grid._getRegion(grid, body);

            // if the body has changed grid region
            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {


                if (!body.region || forceUpdate)
                    body.region = newRegion;

                var union = Grid._regionUnion(newRegion, body.region);

                // update grid buckets affected by region change
                // iterate over the union of both regions
                for (col = union.startCol; col <= union.endCol; col++) {
                    for (row = union.startRow; row <= union.endRow; row++) {
                        bucketId = Grid._getBucketId(col, row);
                        bucket = buckets[bucketId];

                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
                                                && row >= newRegion.startRow && row <= newRegion.endRow);

                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
                                                && row >= body.region.startRow && row <= body.region.endRow);

                        // remove from old region buckets
                        if (!isInsideNewRegion && isInsideOldRegion) {
                            if (isInsideOldRegion) {
                                if (bucket)
                                    Grid._bucketRemoveBody(grid, bucket, body);
                            }
                        }

                        // add to new region buckets
                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
                            if (!bucket)
                                bucket = Grid._createBucket(buckets, bucketId);
                            Grid._bucketAddBody(grid, bucket, body);
                        }
                    }
                }

                // set the new region
                body.region = newRegion;

                // flag changes so we can update pairs
                gridChanged = true;
            }
        }

        // update pairs list only if pairs changed (i.e. a body changed region)
        if (gridChanged)
            grid.pairsList = Grid._createActivePairsList(grid);
    };

    /**
     * Clears the grid.
     * @method clear
     * @param {grid} grid
     */
    Grid.clear = function(grid) {
        grid.buckets = {};
        grid.pairs = {};
        grid.pairsList = [];
    };

    /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */
    Grid._regionUnion = function(regionA, regionB) {
        var startCol = Math.min(regionA.startCol, regionB.startCol),
            endCol = Math.max(regionA.endCol, regionB.endCol),
            startRow = Math.min(regionA.startRow, regionB.startRow),
            endRow = Math.max(regionA.endRow, regionB.endRow);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */
    Grid._getRegion = function(grid, body) {
        var bounds = body.bounds,
            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Creates a region.
     * @method _createRegion
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */
    Grid._createRegion = function(startCol, endCol, startRow, endRow) {
        return { 
            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
            startCol: startCol, 
            endCol: endCol, 
            startRow: startRow, 
            endRow: endRow 
        };
    };

    /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */
    Grid._getBucketId = function(column, row) {
        return 'C' + column + 'R' + row;
    };

    /**
     * Creates a bucket.
     * @method _createBucket
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */
    Grid._createBucket = function(buckets, bucketId) {
        var bucket = buckets[bucketId] = [];
        return bucket;
    };

    /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketAddBody = function(grid, bucket, body) {
        // add new pairs
        for (var i = 0; i < bucket.length; i++) {
            var bodyB = bucket[i];

            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
                continue;

            // keep track of the number of buckets the pair exists in
            // important for Grid.update to work
            var pairId = Pair.id(body, bodyB),
                pair = grid.pairs[pairId];

            if (pair) {
                pair[2] += 1;
            } else {
                grid.pairs[pairId] = [body, bodyB, 1];
            }
        }

        // add to bodies (after pairs, otherwise pairs with self)
        bucket.push(body);
    };

    /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketRemoveBody = function(grid, bucket, body) {
        // remove from bucket
        bucket.splice(Common.indexOf(bucket, body), 1);

        // update pair counts
        for (var i = 0; i < bucket.length; i++) {
            // keep track of the number of buckets the pair exists in
            // important for _createActivePairsList to work
            var bodyB = bucket[i],
                pairId = Pair.id(body, bodyB),
                pair = grid.pairs[pairId];

            if (pair)
                pair[2] -= 1;
        }
    };

    /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @private
     * @param {} grid
     * @return [] pairs
     */
    Grid._createActivePairsList = function(grid) {
        var pairKeys,
            pair,
            pairs = [];

        // grid.pairs is used as a hashmap
        pairKeys = Common.keys(grid.pairs);

        // iterate over grid.pairs
        for (var k = 0; k < pairKeys.length; k++) {
            pair = grid.pairs[pairKeys[k]];

            // if pair exists in at least one bucket
            // it is a pair that needs further collision testing so push it
            if (pair[2] > 0) {
                pairs.push(pair);
            } else {
                delete grid.pairs[pairKeys[k]];
            }
        }

        return pairs;
    };
    
})();

},{"../core/Common":14,"./Detector":5,"./Pair":7}],7:[function(_dereq_,module,exports){
/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/

var Pair = {};

module.exports = Pair;

var Contact = _dereq_('./Contact');

(function() {
    
    /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */
    Pair.create = function(collision, timestamp) {
        var bodyA = collision.bodyA,
            bodyB = collision.bodyB,
            parentA = collision.parentA,
            parentB = collision.parentB;

        var pair = {
            id: Pair.id(bodyA, bodyB),
            bodyA: bodyA,
            bodyB: bodyB,
            contacts: {},
            activeContacts: [],
            separation: 0,
            isActive: true,
            isSensor: bodyA.isSensor || bodyB.isSensor,
            timeCreated: timestamp,
            timeUpdated: timestamp,
            inverseMass: parentA.inverseMass + parentB.inverseMass,
            friction: Math.min(parentA.friction, parentB.friction),
            frictionStatic: Math.max(parentA.frictionStatic, parentB.frictionStatic),
            restitution: Math.max(parentA.restitution, parentB.restitution),
            slop: Math.max(parentA.slop, parentB.slop)
        };

        Pair.update(pair, collision, timestamp);

        return pair;
    };

    /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */
    Pair.update = function(pair, collision, timestamp) {
        var contacts = pair.contacts,
            supports = collision.supports,
            activeContacts = pair.activeContacts,
            parentA = collision.parentA,
            parentB = collision.parentB;
        
        pair.collision = collision;
        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
        pair.friction = Math.min(parentA.friction, parentB.friction);
        pair.frictionStatic = Math.max(parentA.frictionStatic, parentB.frictionStatic);
        pair.restitution = Math.max(parentA.restitution, parentB.restitution);
        pair.slop = Math.max(parentA.slop, parentB.slop);
        activeContacts.length = 0;
        
        if (collision.collided) {
            for (var i = 0; i < supports.length; i++) {
                var support = supports[i],
                    contactId = Contact.id(support),
                    contact = contacts[contactId];

                if (contact) {
                    activeContacts.push(contact);
                } else {
                    activeContacts.push(contacts[contactId] = Contact.create(support));
                }
            }

            pair.separation = collision.depth;
            Pair.setActive(pair, true, timestamp);
        } else {
            if (pair.isActive === true)
                Pair.setActive(pair, false, timestamp);
        }
    };
    
    /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */
    Pair.setActive = function(pair, isActive, timestamp) {
        if (isActive) {
            pair.isActive = true;
            pair.timeUpdated = timestamp;
        } else {
            pair.isActive = false;
            pair.activeContacts.length = 0;
        }
    };

    /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */
    Pair.id = function(bodyA, bodyB) {
        if (bodyA.id < bodyB.id) {
            return 'A' + bodyA.id + 'B' + bodyB.id;
        } else {
            return 'A' + bodyB.id + 'B' + bodyA.id;
        }
    };

})();

},{"./Contact":4}],8:[function(_dereq_,module,exports){
/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/

var Pairs = {};

module.exports = Pairs;

var Pair = _dereq_('./Pair');
var Common = _dereq_('../core/Common');

(function() {
    
    Pairs._pairMaxIdleLife = 1000;

    /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */
    Pairs.create = function(options) {
        return Common.extend({ 
            table: {},
            list: [],
            collisionStart: [],
            collisionActive: [],
            collisionEnd: []
        }, options);
    };

    /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */
    Pairs.update = function(pairs, collisions, timestamp) {
        var pairsList = pairs.list,
            pairsTable = pairs.table,
            collisionStart = pairs.collisionStart,
            collisionEnd = pairs.collisionEnd,
            collisionActive = pairs.collisionActive,
            activePairIds = [],
            collision,
            pairId,
            pair,
            i;

        // clear collision state arrays, but maintain old reference
        collisionStart.length = 0;
        collisionEnd.length = 0;
        collisionActive.length = 0;

        for (i = 0; i < collisions.length; i++) {
            collision = collisions[i];

            if (collision.collided) {
                pairId = Pair.id(collision.bodyA, collision.bodyB);
                activePairIds.push(pairId);

                pair = pairsTable[pairId];
                
                if (pair) {
                    // pair already exists (but may or may not be active)
                    if (pair.isActive) {
                        // pair exists and is active
                        collisionActive.push(pair);
                    } else {
                        // pair exists but was inactive, so a collision has just started again
                        collisionStart.push(pair);
                    }

                    // update the pair
                    Pair.update(pair, collision, timestamp);
                } else {
                    // pair did not exist, create a new pair
                    pair = Pair.create(collision, timestamp);
                    pairsTable[pairId] = pair;

                    // push the new pair
                    collisionStart.push(pair);
                    pairsList.push(pair);
                }
            }
        }

        // deactivate previously active pairs that are now inactive
        for (i = 0; i < pairsList.length; i++) {
            pair = pairsList[i];
            if (pair.isActive && Common.indexOf(activePairIds, pair.id) === -1) {
                Pair.setActive(pair, false, timestamp);
                collisionEnd.push(pair);
            }
        }
    };
    
    /**
     * Finds and removes pairs that have been inactive for a set amount of time.
     * @method removeOld
     * @param {object} pairs
     * @param {number} timestamp
     */
    Pairs.removeOld = function(pairs, timestamp) {
        var pairsList = pairs.list,
            pairsTable = pairs.table,
            indexesToRemove = [],
            pair,
            collision,
            pairIndex,
            i;

        for (i = 0; i < pairsList.length; i++) {
            pair = pairsList[i];
            collision = pair.collision;
            
            // never remove sleeping pairs
            if (collision.bodyA.isSleeping || collision.bodyB.isSleeping) {
                pair.timeUpdated = timestamp;
                continue;
            }

            // if pair is inactive for too long, mark it to be removed
            if (timestamp - pair.timeUpdated > Pairs._pairMaxIdleLife) {
                indexesToRemove.push(i);
            }
        }

        // remove marked pairs
        for (i = 0; i < indexesToRemove.length; i++) {
            pairIndex = indexesToRemove[i] - i;
            pair = pairsList[pairIndex];
            delete pairsTable[pair.id];
            pairsList.splice(pairIndex, 1);
        }
    };

    /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */
    Pairs.clear = function(pairs) {
        pairs.table = {};
        pairs.list.length = 0;
        pairs.collisionStart.length = 0;
        pairs.collisionActive.length = 0;
        pairs.collisionEnd.length = 0;
        return pairs;
    };

})();

},{"../core/Common":14,"./Pair":7}],9:[function(_dereq_,module,exports){
/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/

var Query = {};

module.exports = Query;

var Vector = _dereq_('../geometry/Vector');
var SAT = _dereq_('./SAT');
var Bounds = _dereq_('../geometry/Bounds');
var Bodies = _dereq_('../factory/Bodies');
var Vertices = _dereq_('../geometry/Vertices');

(function() {

    /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {object[]} Collisions
     */
    Query.collides = function(body, bodies) {
        var collisions = [];

        for (var i = 0; i < bodies.length; i++) {
            var bodyA = bodies[i];
            
            if (Bounds.overlaps(bodyA.bounds, body.bounds)) {
                for (var j = bodyA.parts.length === 1 ? 0 : 1; j < bodyA.parts.length; j++) {
                    var part = bodyA.parts[j];

                    if (Bounds.overlaps(part.bounds, body.bounds)) {
                        var collision = SAT.collides(part, body);

                        if (collision.collided) {
                            collisions.push(collision);
                            break;
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {object[]} Collisions
     */
    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
        rayWidth = rayWidth || 1e-100;

        var rayAngle = Vector.angle(startPoint, endPoint),
            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
            rayX = (endPoint.x + startPoint.x) * 0.5,
            rayY = (endPoint.y + startPoint.y) * 0.5,
            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
            collisions = Query.collides(ray, bodies);

        for (var i = 0; i < collisions.length; i += 1) {
            var collision = collisions[i];
            collision.body = collision.bodyB = collision.bodyA;            
        }

        return collisions;
    };

    /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */
    Query.region = function(bodies, bounds, outside) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                overlaps = Bounds.overlaps(body.bounds, bounds);
            if ((overlaps && !outside) || (!overlaps && outside))
                result.push(body);
        }

        return result;
    };

    /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */
    Query.point = function(bodies, point) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            
            if (Bounds.contains(body.bounds, point)) {
                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                    var part = body.parts[j];

                    if (Bounds.contains(part.bounds, point)
                        && Vertices.contains(part.vertices, point)) {
                        result.push(body);
                        break;
                    }
                }
            }
        }

        return result;
    };

})();

},{"../factory/Bodies":23,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29,"./SAT":11}],10:[function(_dereq_,module,exports){
/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/

var Resolver = {};

module.exports = Resolver;

var Vertices = _dereq_('../geometry/Vertices');
var Vector = _dereq_('../geometry/Vector');
var Common = _dereq_('../core/Common');
var Bounds = _dereq_('../geometry/Bounds');

(function() {

    Resolver._restingThresh = 4;
    Resolver._restingThreshTangent = 6;
    Resolver._positionDampen = 0.9;
    Resolver._positionWarming = 0.8;
    Resolver._frictionNormalMultiplier = 5;

    /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */
    Resolver.preSolvePosition = function(pairs) {
        var i,
            pair,
            activeCount;

        // find total contacts on each body
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            
            if (!pair.isActive)
                continue;
            
            activeCount = pair.activeContacts.length;
            pair.collision.parentA.totalContacts += activeCount;
            pair.collision.parentB.totalContacts += activeCount;
        }
    };

    /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solvePosition = function(pairs, timeScale) {
        var i,
            pair,
            collision,
            bodyA,
            bodyB,
            normal,
            bodyBtoA,
            contactShare,
            positionImpulse,
            contactCount = {},
            tempA = Vector._temp[0],
            tempB = Vector._temp[1],
            tempC = Vector._temp[2],
            tempD = Vector._temp[3];

        // find impulses required to resolve penetration
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;

            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;

            // get current separation between body edges involved in collision
            bodyBtoA = Vector.sub(Vector.add(bodyB.positionImpulse, bodyB.position, tempA), 
                                    Vector.add(bodyA.positionImpulse, 
                                        Vector.sub(bodyB.position, collision.penetration, tempB), tempC), tempD);

            pair.separation = Vector.dot(normal, bodyBtoA);
        }
        
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive || pair.isSensor)
                continue;
            
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            positionImpulse = (pair.separation - pair.slop) * timeScale;

            if (bodyA.isStatic || bodyB.isStatic)
                positionImpulse *= 2;
            
            if (!(bodyA.isStatic || bodyA.isSleeping)) {
                contactShare = Resolver._positionDampen / bodyA.totalContacts;
                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
            }

            if (!(bodyB.isStatic || bodyB.isSleeping)) {
                contactShare = Resolver._positionDampen / bodyB.totalContacts;
                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
            }
        }
    };

    /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */
    Resolver.postSolvePosition = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            // reset contact count
            body.totalContacts = 0;

            if (body.positionImpulse.x !== 0 || body.positionImpulse.y !== 0) {
                // update body geometry
                for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    Vertices.translate(part.vertices, body.positionImpulse);
                    Bounds.update(part.bounds, part.vertices, body.velocity);
                    part.position.x += body.positionImpulse.x;
                    part.position.y += body.positionImpulse.y;
                }

                // move the body without changing velocity
                body.positionPrev.x += body.positionImpulse.x;
                body.positionPrev.y += body.positionImpulse.y;

                if (Vector.dot(body.positionImpulse, body.velocity) < 0) {
                    // reset cached impulse if the body has velocity along it
                    body.positionImpulse.x = 0;
                    body.positionImpulse.y = 0;
                } else {
                    // warm the next iteration
                    body.positionImpulse.x *= Resolver._positionWarming;
                    body.positionImpulse.y *= Resolver._positionWarming;
                }
            }
        }
    };

    /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */
    Resolver.preSolveVelocity = function(pairs) {
        var i,
            j,
            pair,
            contacts,
            collision,
            bodyA,
            bodyB,
            normal,
            tangent,
            contact,
            contactVertex,
            normalImpulse,
            tangentImpulse,
            offset,
            impulse = Vector._temp[0],
            tempA = Vector._temp[1];
        
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            contacts = pair.activeContacts;
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            tangent = collision.tangent;

            // resolve each contact
            for (j = 0; j < contacts.length; j++) {
                contact = contacts[j];
                contactVertex = contact.vertex;
                normalImpulse = contact.normalImpulse;
                tangentImpulse = contact.tangentImpulse;

                if (normalImpulse !== 0 || tangentImpulse !== 0) {
                    // total impulse from contact
                    impulse.x = (normal.x * normalImpulse) + (tangent.x * tangentImpulse);
                    impulse.y = (normal.y * normalImpulse) + (tangent.y * tangentImpulse);
                    
                    // apply impulse from contact
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        offset = Vector.sub(contactVertex, bodyA.position, tempA);
                        bodyA.positionPrev.x += impulse.x * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulse.y * bodyA.inverseMass;
                        bodyA.anglePrev += Vector.cross(offset, impulse) * bodyA.inverseInertia;
                    }

                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        offset = Vector.sub(contactVertex, bodyB.position, tempA);
                        bodyB.positionPrev.x -= impulse.x * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulse.y * bodyB.inverseMass;
                        bodyB.anglePrev -= Vector.cross(offset, impulse) * bodyB.inverseInertia;
                    }
                }
            }
        }
    };

    /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Resolver.solveVelocity = function(pairs, timeScale) {
        var timeScaleSquared = timeScale * timeScale,
            impulse = Vector._temp[0],
            tempA = Vector._temp[1],
            tempB = Vector._temp[2],
            tempC = Vector._temp[3],
            tempD = Vector._temp[4],
            tempE = Vector._temp[5];
        
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                normal = collision.normal,
                tangent = collision.tangent,
                contacts = pair.activeContacts,
                contactShare = 1 / contacts.length;

            // update body velocities
            bodyA.velocity.x = bodyA.position.x - bodyA.positionPrev.x;
            bodyA.velocity.y = bodyA.position.y - bodyA.positionPrev.y;
            bodyB.velocity.x = bodyB.position.x - bodyB.positionPrev.x;
            bodyB.velocity.y = bodyB.position.y - bodyB.positionPrev.y;
            bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
            bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;

            // resolve each contact
            for (var j = 0; j < contacts.length; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex,
                    offsetA = Vector.sub(contactVertex, bodyA.position, tempA),
                    offsetB = Vector.sub(contactVertex, bodyB.position, tempB),
                    velocityPointA = Vector.add(bodyA.velocity, Vector.mult(Vector.perp(offsetA), bodyA.angularVelocity), tempC),
                    velocityPointB = Vector.add(bodyB.velocity, Vector.mult(Vector.perp(offsetB), bodyB.angularVelocity), tempD), 
                    relativeVelocity = Vector.sub(velocityPointA, velocityPointB, tempE),
                    normalVelocity = Vector.dot(normal, relativeVelocity);

                var tangentVelocity = Vector.dot(tangent, relativeVelocity),
                    tangentSpeed = Math.abs(tangentVelocity),
                    tangentVelocityDirection = Common.sign(tangentVelocity);

                // raw impulses
                var normalImpulse = (1 + pair.restitution) * normalVelocity,
                    normalForce = Common.clamp(pair.separation + normalVelocity, 0, 1) * Resolver._frictionNormalMultiplier;

                // coulomb friction
                var tangentImpulse = tangentVelocity,
                    maxFriction = Infinity;

                if (tangentSpeed > pair.friction * pair.frictionStatic * normalForce * timeScaleSquared) {
                    maxFriction = tangentSpeed;
                    tangentImpulse = Common.clamp(
                        pair.friction * tangentVelocityDirection * timeScaleSquared,
                        -maxFriction, maxFriction
                    );
                }

                // modify impulses accounting for mass, inertia and offset
                var oAcN = Vector.cross(offsetA, normal),
                    oBcN = Vector.cross(offsetB, normal),
                    share = contactShare / (bodyA.inverseMass + bodyB.inverseMass + bodyA.inverseInertia * oAcN * oAcN  + bodyB.inverseInertia * oBcN * oBcN);

                normalImpulse *= share;
                tangentImpulse *= share;

                // handle high velocity and resting collisions separately
                if (normalVelocity < 0 && normalVelocity * normalVelocity > Resolver._restingThresh * timeScaleSquared) {
                    // high normal velocity so clear cached contact normal impulse
                    contact.normalImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // impulse constraint tends to 0
                    var contactNormalImpulse = contact.normalImpulse;
                    contact.normalImpulse = Math.min(contact.normalImpulse + normalImpulse, 0);
                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
                }

                // handle high velocity and resting collisions separately
                if (tangentVelocity * tangentVelocity > Resolver._restingThreshTangent * timeScaleSquared) {
                    // high tangent velocity so clear cached contact tangent impulse
                    contact.tangentImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
                    var contactTangentImpulse = contact.tangentImpulse;
                    contact.tangentImpulse = Common.clamp(contact.tangentImpulse + tangentImpulse, -maxFriction, maxFriction);
                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                }

                // total impulse from contact
                impulse.x = (normal.x * normalImpulse) + (tangent.x * tangentImpulse);
                impulse.y = (normal.y * normalImpulse) + (tangent.y * tangentImpulse);
                
                // apply impulse from contact
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulse.x * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulse.y * bodyA.inverseMass;
                    bodyA.anglePrev += Vector.cross(offsetA, impulse) * bodyA.inverseInertia;
                }

                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulse.x * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulse.y * bodyB.inverseMass;
                    bodyB.anglePrev -= Vector.cross(offsetB, impulse) * bodyB.inverseInertia;
                }
            }
        }
    };

})();

},{"../core/Common":14,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29}],11:[function(_dereq_,module,exports){
/**
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
*/

// TODO: true circles and curves

var SAT = {};

module.exports = SAT;

var Vertices = _dereq_('../geometry/Vertices');
var Vector = _dereq_('../geometry/Vector');

(function() {

    /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {collision} previousCollision
     * @return {collision} collision
     */
    SAT.collides = function(bodyA, bodyB, previousCollision) {
        var overlapAB,
            overlapBA, 
            minOverlap,
            collision,
            canReusePrevCol = false;

        if (previousCollision) {
            // estimate total motion
            var parentA = bodyA.parent,
                parentB = bodyB.parent,
                motion = parentA.speed * parentA.speed + parentA.angularSpeed * parentA.angularSpeed
                       + parentB.speed * parentB.speed + parentB.angularSpeed * parentB.angularSpeed;

            // we may be able to (partially) reuse collision result 
            // but only safe if collision was resting
            canReusePrevCol = previousCollision && previousCollision.collided && motion < 0.2;

            // reuse collision object
            collision = previousCollision;
        } else {
            collision = { collided: false, bodyA: bodyA, bodyB: bodyB };
        }

        if (previousCollision && canReusePrevCol) {
            // if we can reuse the collision result
            // we only need to test the previously found axis
            var axisBodyA = collision.axisBody,
                axisBodyB = axisBodyA === bodyA ? bodyB : bodyA,
                axes = [axisBodyA.axes[previousCollision.axisNumber]];

            minOverlap = SAT._overlapAxes(axisBodyA.vertices, axisBodyB.vertices, axes);
            collision.reused = true;

            if (minOverlap.overlap <= 0) {
                collision.collided = false;
                return collision;
            }
        } else {
            // if we can't reuse a result, perform a full SAT test

            overlapAB = SAT._overlapAxes(bodyA.vertices, bodyB.vertices, bodyA.axes);

            if (overlapAB.overlap <= 0) {
                collision.collided = false;
                return collision;
            }

            overlapBA = SAT._overlapAxes(bodyB.vertices, bodyA.vertices, bodyB.axes);

            if (overlapBA.overlap <= 0) {
                collision.collided = false;
                return collision;
            }

            if (overlapAB.overlap < overlapBA.overlap) {
                minOverlap = overlapAB;
                collision.axisBody = bodyA;
            } else {
                minOverlap = overlapBA;
                collision.axisBody = bodyB;
            }

            // important for reuse later
            collision.axisNumber = minOverlap.axisNumber;
        }

        collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
        collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
        collision.collided = true;
        collision.depth = minOverlap.overlap;
        collision.parentA = collision.bodyA.parent;
        collision.parentB = collision.bodyB.parent;
        
        bodyA = collision.bodyA;
        bodyB = collision.bodyB;

        // ensure normal is facing away from bodyA
        if (Vector.dot(minOverlap.axis, Vector.sub(bodyB.position, bodyA.position)) < 0) {
            collision.normal = {
                x: minOverlap.axis.x,
                y: minOverlap.axis.y
            };
        } else {
            collision.normal = {
                x: -minOverlap.axis.x,
                y: -minOverlap.axis.y
            };
        }

        collision.tangent = Vector.perp(collision.normal);

        collision.penetration = collision.penetration || {};
        collision.penetration.x = collision.normal.x * collision.depth;
        collision.penetration.y = collision.normal.y * collision.depth; 

        // find support points, there is always either exactly one or two
        var verticesB = SAT._findSupports(bodyA, bodyB, collision.normal),
            supports = [];

        // find the supports from bodyB that are inside bodyA
        if (Vertices.contains(bodyA.vertices, verticesB[0]))
            supports.push(verticesB[0]);

        if (Vertices.contains(bodyA.vertices, verticesB[1]))
            supports.push(verticesB[1]);

        // find the supports from bodyA that are inside bodyB
        if (supports.length < 2) {
            var verticesA = SAT._findSupports(bodyB, bodyA, Vector.neg(collision.normal));
                
            if (Vertices.contains(bodyB.vertices, verticesA[0]))
                supports.push(verticesA[0]);

            if (supports.length < 2 && Vertices.contains(bodyB.vertices, verticesA[1]))
                supports.push(verticesA[1]);
        }

        // account for the edge case of overlapping but no vertex containment
        if (supports.length < 1)
            supports = [verticesB[0]];
        
        collision.supports = supports;

        return collision;
    };

    /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {} verticesA
     * @param {} verticesB
     * @param {} axes
     * @return result
     */
    SAT._overlapAxes = function(verticesA, verticesB, axes) {
        var projectionA = Vector._temp[0], 
            projectionB = Vector._temp[1],
            result = { overlap: Number.MAX_VALUE },
            overlap,
            axis;

        for (var i = 0; i < axes.length; i++) {
            axis = axes[i];

            SAT._projectToAxis(projectionA, verticesA, axis);
            SAT._projectToAxis(projectionB, verticesB, axis);

            overlap = Math.min(projectionA.max - projectionB.min, projectionB.max - projectionA.min);

            if (overlap <= 0) {
                result.overlap = overlap;
                return result;
            }

            if (overlap < result.overlap) {
                result.overlap = overlap;
                result.axis = axis;
                result.axisNumber = i;
            }
        }

        return result;
    };

    /**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */
    SAT._projectToAxis = function(projection, vertices, axis) {
        var min = Vector.dot(vertices[0], axis),
            max = min;

        for (var i = 1; i < vertices.length; i += 1) {
            var dot = Vector.dot(vertices[i], axis);

            if (dot > max) { 
                max = dot; 
            } else if (dot < min) { 
                min = dot; 
            }
        }

        projection.min = min;
        projection.max = max;
    };
    
    /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {} bodyA
     * @param {} bodyB
     * @param {} normal
     * @return [vector]
     */
    SAT._findSupports = function(bodyA, bodyB, normal) {
        var nearestDistance = Number.MAX_VALUE,
            vertexToBody = Vector._temp[0],
            vertices = bodyB.vertices,
            bodyAPosition = bodyA.position,
            distance,
            vertex,
            vertexA,
            vertexB;

        // find closest vertex on bodyB
        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            vertexToBody.x = vertex.x - bodyAPosition.x;
            vertexToBody.y = vertex.y - bodyAPosition.y;
            distance = -Vector.dot(normal, vertexToBody);

            if (distance < nearestDistance) {
                nearestDistance = distance;
                vertexA = vertex;
            }
        }

        // find next closest vertex using the two connected to it
        var prevIndex = vertexA.index - 1 >= 0 ? vertexA.index - 1 : vertices.length - 1;
        vertex = vertices[prevIndex];
        vertexToBody.x = vertex.x - bodyAPosition.x;
        vertexToBody.y = vertex.y - bodyAPosition.y;
        nearestDistance = -Vector.dot(normal, vertexToBody);
        vertexB = vertex;

        var nextIndex = (vertexA.index + 1) % vertices.length;
        vertex = vertices[nextIndex];
        vertexToBody.x = vertex.x - bodyAPosition.x;
        vertexToBody.y = vertex.y - bodyAPosition.y;
        distance = -Vector.dot(normal, vertexToBody);
        if (distance < nearestDistance) {
            vertexB = vertex;
        }

        return [vertexA, vertexB];
    };

})();

},{"../geometry/Vector":28,"../geometry/Vertices":29}],12:[function(_dereq_,module,exports){
/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/

var Constraint = {};

module.exports = Constraint;

var Vertices = _dereq_('../geometry/Vertices');
var Vector = _dereq_('../geometry/Vector');
var Sleeping = _dereq_('../core/Sleeping');
var Bounds = _dereq_('../geometry/Bounds');
var Axes = _dereq_('../geometry/Axes');
var Common = _dereq_('../core/Common');

(function() {

    Constraint._warming = 0.4;
    Constraint._torqueDampen = 1;
    Constraint._minLength = 0.000001;

    /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */
    Constraint.create = function(options) {
        var constraint = options;

        // if bodies defined but no points, use body centre
        if (constraint.bodyA && !constraint.pointA)
            constraint.pointA = { x: 0, y: 0 };
        if (constraint.bodyB && !constraint.pointB)
            constraint.pointB = { x: 0, y: 0 };

        // calculate static length using initial world space points
        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
    
        constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;

        // option defaults
        constraint.id = constraint.id || Common.nextId();
        constraint.label = constraint.label || 'Constraint';
        constraint.type = 'constraint';
        constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
        constraint.damping = constraint.damping || 0;
        constraint.angularStiffness = constraint.angularStiffness || 0;
        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
        constraint.plugin = {};

        // render
        var render = {
            visible: true,
            lineWidth: 2,
            strokeStyle: '#ffffff',
            type: 'line',
            anchors: true
        };

        if (constraint.length === 0 && constraint.stiffness > 0.1) {
            render.type = 'pin';
            render.anchors = false;
        } else if (constraint.stiffness < 0.9) {
            render.type = 'spring';
        }

        constraint.render = Common.extend(render, constraint.render);

        return constraint;
    };

    /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */
    Constraint.preSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            body.position.x += impulse.x;
            body.position.y += impulse.y;
            body.angle += impulse.angle;
        }
    };

    /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} timeScale
     */
    Constraint.solveAll = function(constraints, timeScale) {
        // Solve fixed constraints first.
        for (var i = 0; i < constraints.length; i += 1) {
            var constraint = constraints[i],
                fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic),
                fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (fixedA || fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }

        // Solve free constraints last.
        for (i = 0; i < constraints.length; i += 1) {
            constraint = constraints[i];
            fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic);
            fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (!fixedA && !fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }
    };

    /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */
    Constraint.solve = function(constraint, timeScale) {
        var bodyA = constraint.bodyA,
            bodyB = constraint.bodyB,
            pointA = constraint.pointA,
            pointB = constraint.pointB;

        if (!bodyA && !bodyB)
            return;

        // update reference angle
        if (bodyA && !bodyA.isStatic) {
            Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
            constraint.angleA = bodyA.angle;
        }
        
        // update reference angle
        if (bodyB && !bodyB.isStatic) {
            Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
            constraint.angleB = bodyB.angle;
        }

        var pointAWorld = pointA,
            pointBWorld = pointB;

        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

        if (!pointAWorld || !pointBWorld)
            return;

        var delta = Vector.sub(pointAWorld, pointBWorld),
            currentLength = Vector.magnitude(delta);

        // prevent singularity
        if (currentLength < Constraint._minLength) {
            currentLength = Constraint._minLength;
        }

        // solve distance constraint with Gauss-Siedel method
        var difference = (currentLength - constraint.length) / currentLength,
            stiffness = constraint.stiffness < 1 ? constraint.stiffness * timeScale : constraint.stiffness,
            force = Vector.mult(delta, difference * stiffness),
            massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0),
            inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0),
            resistanceTotal = massTotal + inertiaTotal,
            torque,
            share,
            normal,
            normalVelocity,
            relativeVelocity;

        if (constraint.damping) {
            var zero = Vector.create();
            normal = Vector.div(delta, currentLength);

            relativeVelocity = Vector.sub(
                bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
            );

            normalVelocity = Vector.dot(normal, relativeVelocity);
        }

        if (bodyA && !bodyA.isStatic) {
            share = bodyA.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyA.constraintImpulse.x -= force.x * share;
            bodyA.constraintImpulse.y -= force.y * share;

            // apply forces
            bodyA.position.x -= force.x * share;
            bodyA.position.y -= force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyA.positionPrev.x -= constraint.damping * normal.x * normalVelocity * share;
                bodyA.positionPrev.y -= constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointA, force) / resistanceTotal) * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
            bodyA.constraintImpulse.angle -= torque;
            bodyA.angle -= torque;
        }

        if (bodyB && !bodyB.isStatic) {
            share = bodyB.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyB.constraintImpulse.x += force.x * share;
            bodyB.constraintImpulse.y += force.y * share;
            
            // apply forces
            bodyB.position.x += force.x * share;
            bodyB.position.y += force.y * share;

            // apply damping
            if (constraint.damping) {
                bodyB.positionPrev.x += constraint.damping * normal.x * normalVelocity * share;
                bodyB.positionPrev.y += constraint.damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointB, force) / resistanceTotal) * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
            bodyB.constraintImpulse.angle += torque;
            bodyB.angle += torque;
        }

    };

    /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */
    Constraint.postSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            Sleeping.set(body, false);

            // update geometry and reset
            for (var j = 0; j < body.parts.length; j++) {
                var part = body.parts[j];
                
                Vertices.translate(part.vertices, impulse);

                if (j > 0) {
                    part.position.x += impulse.x;
                    part.position.y += impulse.y;
                }

                if (impulse.angle !== 0) {
                    Vertices.rotate(part.vertices, impulse.angle, body.position);
                    Axes.rotate(part.axes, impulse.angle);
                    if (j > 0) {
                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                    }
                }

                Bounds.update(part.bounds, part.vertices, body.velocity);
            }

            // dampen the cached impulse for warming next step
            impulse.angle *= Constraint._warming;
            impulse.x *= Constraint._warming;
            impulse.y *= Constraint._warming;
        }
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */

    /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */

    /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */

    /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */

    /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */

    /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();

},{"../core/Common":14,"../core/Sleeping":22,"../geometry/Axes":25,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29}],13:[function(_dereq_,module,exports){
/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/

var MouseConstraint = {};

module.exports = MouseConstraint;

var Vertices = _dereq_('../geometry/Vertices');
var Sleeping = _dereq_('../core/Sleeping');
var Mouse = _dereq_('../core/Mouse');
var Events = _dereq_('../core/Events');
var Detector = _dereq_('../collision/Detector');
var Constraint = _dereq_('./Constraint');
var Composite = _dereq_('../body/Composite');
var Common = _dereq_('../core/Common');
var Bounds = _dereq_('../geometry/Bounds');

(function() {

    /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */
    MouseConstraint.create = function(engine, options) {
        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

        if (!mouse) {
            if (engine && engine.render && engine.render.canvas) {
                mouse = Mouse.create(engine.render.canvas);
            } else if (options && options.element) {
                mouse = Mouse.create(options.element);
            } else {
                mouse = Mouse.create();
                Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
            }
        }

        var constraint = Constraint.create({ 
            label: 'Mouse Constraint',
            pointA: mouse.position,
            pointB: { x: 0, y: 0 },
            length: 0.01, 
            stiffness: 0.1,
            angularStiffness: 1,
            render: {
                strokeStyle: '#90EE90',
                lineWidth: 3
            }
        });

        var defaults = {
            type: 'mouseConstraint',
            mouse: mouse,
            element: null,
            body: null,
            constraint: constraint,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            }
        };

        var mouseConstraint = Common.extend(defaults, options);

        Events.on(engine, 'beforeUpdate', function() {
            var allBodies = Composite.allBodies(engine.world);
            MouseConstraint.update(mouseConstraint, allBodies);
            MouseConstraint._triggerEvents(mouseConstraint);
        });

        return mouseConstraint;
    };

    /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */
    MouseConstraint.update = function(mouseConstraint, bodies) {
        var mouse = mouseConstraint.mouse,
            constraint = mouseConstraint.constraint,
            body = mouseConstraint.body;

        if (mouse.button === 0) {
            if (!constraint.bodyB) {
                for (var i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (Bounds.contains(body.bounds, mouse.position) 
                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                            var part = body.parts[j];
                            if (Vertices.contains(part.vertices, mouse.position)) {
                                constraint.pointA = mouse.position;
                                constraint.bodyB = mouseConstraint.body = body;
                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                                constraint.angleB = body.angle;

                                Sleeping.set(body, false);
                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

                                break;
                            }
                        }
                    }
                }
            } else {
                Sleeping.set(constraint.bodyB, false);
                constraint.pointA = mouse.position;
            }
        } else {
            constraint.bodyB = mouseConstraint.body = null;
            constraint.pointB = null;

            if (body)
                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
        }
    };

    /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */
    MouseConstraint._triggerEvents = function(mouseConstraint) {
        var mouse = mouseConstraint.mouse,
            mouseEvents = mouse.sourceEvents;

        if (mouseEvents.mousemove)
            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

        if (mouseEvents.mousedown)
            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

        if (mouseEvents.mouseup)
            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

        // reset the mouse state ready for the next step
        Mouse.clearSourceEvents(mouse);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */

    /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */

    /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */

    /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */

})();

},{"../body/Composite":2,"../collision/Detector":5,"../core/Common":14,"../core/Events":16,"../core/Mouse":19,"../core/Sleeping":22,"../geometry/Bounds":26,"../geometry/Vertices":29,"./Constraint":12}],14:[function(_dereq_,module,exports){
(function (global){
/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/

var Common = {};

module.exports = Common;

(function() {

    Common._nextId = 0;
    Common._seed = 0;
    Common._nowStartTime = +(new Date());

    /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */
    Common.extend = function(obj, deep) {
        var argsStart,
            args,
            deepClone;

        if (typeof deep === 'boolean') {
            argsStart = 2;
            deepClone = deep;
        } else {
            argsStart = 1;
            deepClone = true;
        }

        for (var i = argsStart; i < arguments.length; i++) {
            var source = arguments[i];

            if (source) {
                for (var prop in source) {
                    if (deepClone && source[prop] && source[prop].constructor === Object) {
                        if (!obj[prop] || obj[prop].constructor === Object) {
                            obj[prop] = obj[prop] || {};
                            Common.extend(obj[prop], deepClone, source[prop]);
                        } else {
                            obj[prop] = source[prop];
                        }
                    } else {
                        obj[prop] = source[prop];
                    }
                }
            }
        }
        
        return obj;
    };

    /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */
    Common.clone = function(obj, deep) {
        return Common.extend({}, deep, obj);
    };

    /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */
    Common.keys = function(obj) {
        if (Object.keys)
            return Object.keys(obj);

        // avoid hasOwnProperty for performance
        var keys = [];
        for (var key in obj)
            keys.push(key);
        return keys;
    };

    /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */
    Common.values = function(obj) {
        var values = [];
        
        if (Object.keys) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                values.push(obj[keys[i]]);
            }
            return values;
        }
        
        // avoid hasOwnProperty for performance
        for (var key in obj)
            values.push(obj[key]);
        return values;
    };

    /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */
    Common.get = function(obj, path, begin, end) {
        path = path.split('.').slice(begin, end);

        for (var i = 0; i < path.length; i += 1) {
            obj = obj[path[i]];
        }

        return obj;
    };

    /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */
    Common.set = function(obj, path, val, begin, end) {
        var parts = path.split('.').slice(begin, end);
        Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
        return val;
    };

    /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */
    Common.shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Common.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */
    Common.choose = function(choices) {
        return choices[Math.floor(Common.random() * choices.length)];
    };

    /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */
    Common.isElement = function(obj) {
        if (typeof HTMLElement !== 'undefined') {
            return obj instanceof HTMLElement;
        }

        return !!(obj && obj.nodeType && obj.nodeName);
    };

    /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */
    Common.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */
    Common.isFunction = function(obj) {
        return typeof obj === "function";
    };

    /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */
    Common.isPlainObject = function(obj) {
        return typeof obj === 'object' && obj.constructor === Object;
    };

    /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */
    Common.isString = function(obj) {
        return toString.call(obj) === '[object String]';
    };
    
    /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */
    Common.clamp = function(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    
    /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */
    Common.sign = function(value) {
        return value < 0 ? -1 : 1;
    };
    
    /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result will be high-resolution including decimal places if available.
     * @method now
     * @return {number} the current timestamp
     */
    Common.now = function() {
        if (window.performance) {
            if (window.performance.now) {
                return window.performance.now();
            } else if (window.performance.webkitNow) {
                return window.performance.webkitNow();
            }
        }

        return (new Date()) - Common._nowStartTime;
    };
    
    /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */
    Common.random = function(min, max) {
        min = (typeof min !== "undefined") ? min : 0;
        max = (typeof max !== "undefined") ? max : 1;
        return min + _seededRandom() * (max - min);
    };

    var _seededRandom = function() {
        // https://en.wikipedia.org/wiki/Linear_congruential_generator
        Common._seed = (Common._seed * 9301 + 49297) % 233280;
        return Common._seed / 233280;
    };

    /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */
    Common.colorToNumber = function(colorString) {
        colorString = colorString.replace('#','');

        if (colorString.length == 3) {
            colorString = colorString.charAt(0) + colorString.charAt(0)
                        + colorString.charAt(1) + colorString.charAt(1)
                        + colorString.charAt(2) + colorString.charAt(2);
        }

        return parseInt(colorString, 16);
    };

    /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @property Common.logLevel
     * @type {Number}
     * @default 1
     */
    Common.logLevel = 1;

    /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */
    Common.log = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.log.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */
    Common.info = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
            console.info.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */
    Common.warn = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.warn.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */
    Common.nextId = function() {
        return Common._nextId++;
    };

    /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */
    Common.indexOf = function(haystack, needle) {
        if (haystack.indexOf)
            return haystack.indexOf(needle);

        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle)
                return i;
        }

        return -1;
    };

    /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */
    Common.map = function(list, func) {
        if (list.map) {
            return list.map(func);
        }

        var mapped = [];

        for (var i = 0; i < list.length; i += 1) {
            mapped.push(func(list[i]));
        }

        return mapped;
    };

    /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */
    Common.topologicalSort = function(graph) {
        // https://github.com/mgechev/javascript-algorithms
        // Copyright (c) Minko Gechev (MIT license)
        // Modifications: tidy formatting and naming
        var result = [],
            visited = [],
            temp = [];

        for (var node in graph) {
            if (!visited[node] && !temp[node]) {
                Common._topologicalSort(node, visited, temp, graph, result);
            }
        }

        return result;
    };

    Common._topologicalSort = function(node, visited, temp, graph, result) {
        var neighbors = graph[node] || [];
        temp[node] = true;

        for (var i = 0; i < neighbors.length; i += 1) {
            var neighbor = neighbors[i];

            if (temp[neighbor]) {
                // skip circular dependencies
                continue;
            }

            if (!visited[neighbor]) {
                Common._topologicalSort(neighbor, visited, temp, graph, result);
            }
        }

        temp[node] = false;
        visited[node] = true;

        result.push(node);
    };

    /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */
    Common.chain = function() {
        var funcs = [];

        for (var i = 0; i < arguments.length; i += 1) {
            var func = arguments[i];

            if (func._chained) {
                // flatten already chained functions
                funcs.push.apply(funcs, func._chained);
            } else {
                funcs.push(func);
            }
        }

        var chain = function() {
            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
            var lastResult,
                args = new Array(arguments.length);

            for (var i = 0, l = arguments.length; i < l; i++) {
                args[i] = arguments[i];
            }

            for (i = 0; i < funcs.length; i += 1) {
                var result = funcs[i].apply(lastResult, args);

                if (typeof result !== 'undefined') {
                    lastResult = result;
                }
            }

            return lastResult;
        };

        chain._chained = funcs;

        return chain;
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathBefore = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            func,
            Common.get(base, path)
        ));
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathAfter = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            Common.get(base, path),
            func
        ));
    };

    /**
     * Used to require external libraries outside of the bundle.
     * It first looks for the `globalName` on the environment's global namespace.
     * If the global is not found, it will fall back to using the standard `require` using the `moduleName`.
     * @private
     * @method _requireGlobal
     * @param {string} globalName The global module name
     * @param {string} moduleName The fallback CommonJS module name
     * @return {} The loaded module
     */
    Common._requireGlobal = function(globalName, moduleName) {
        var obj = (typeof window !== 'undefined' ? window[globalName] : typeof global !== 'undefined' ? global[globalName] : null);
        return obj || _dereq_(moduleName);
    };
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(_dereq_,module,exports){
/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/

var Engine = {};

module.exports = Engine;

var World = _dereq_('../body/World');
var Sleeping = _dereq_('./Sleeping');
var Resolver = _dereq_('../collision/Resolver');
var Render = _dereq_('../render/Render');
var Pairs = _dereq_('../collision/Pairs');
var Metrics = _dereq_('./Metrics');
var Grid = _dereq_('../collision/Grid');
var Events = _dereq_('./Events');
var Composite = _dereq_('../body/Composite');
var Constraint = _dereq_('../constraint/Constraint');
var Common = _dereq_('./Common');
var Body = _dereq_('../body/Body');

(function() {

    /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */
    Engine.create = function(element, options) {
        // options may be passed as the first (and only) argument
        options = Common.isElement(element) ? options : element;
        element = Common.isElement(element) ? element : null;
        options = options || {};

        if (element || options.render) {
            Common.warn('Engine.create: engine.render is deprecated (see docs)');
        }

        var defaults = {
            positionIterations: 6,
            velocityIterations: 4,
            constraintIterations: 2,
            enableSleeping: false,
            events: [],
            plugin: {},
            timing: {
                timestamp: 0,
                timeScale: 1
            },
            broadphase: {
                controller: Grid
            }
        };

        var engine = Common.extend(defaults, options);

        // @deprecated
        if (element || engine.render) {
            var renderDefaults = {
                element: element,
                controller: Render
            };
            
            engine.render = Common.extend(renderDefaults, engine.render);
        }

        // @deprecated
        if (engine.render && engine.render.controller) {
            engine.render = engine.render.controller.create(engine.render);
        }

        // @deprecated
        if (engine.render) {
            engine.render.engine = engine;
        }

        engine.world = options.world || World.create(engine.world);
        engine.pairs = Pairs.create();
        engine.broadphase = engine.broadphase.controller.create(engine.broadphase);
        engine.metrics = engine.metrics || { extended: false };


        return engine;
    };

    /**
     * Moves the simulation forward in time by `delta` ms.
     * The `correction` argument is an optional `Number` that specifies the time correction factor to apply to the update.
     * This can help improve the accuracy of the simulation in cases where `delta` is changing between updates.
     * The value of `correction` is defined as `delta / lastDelta`, i.e. the percentage change of `delta` over the last step.
     * Therefore the value is always `1` (no correction) when `delta` constant (or when no correction is desired, which is the default).
     * See the paper on <a href="http://lonesock.net/article/verlet.html">Time Corrected Verlet</a> for more information.
     *
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     * @param {number} [correction=1]
     */
    Engine.update = function(engine, delta, correction) {
        delta = delta || 1000 / 60;
        correction = correction || 1;

        var world = engine.world,
            timing = engine.timing,
            broadphase = engine.broadphase,
            broadphasePairs = [],
            i;

        // increment timestamp
        timing.timestamp += delta * timing.timeScale;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(engine, 'beforeUpdate', event);

        // get lists of all bodies and constraints, no matter what composites they are in
        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world);


        // if sleeping enabled, call the sleeping controller
        if (engine.enableSleeping)
            Sleeping.update(allBodies, timing.timeScale);

        // applies gravity to all bodies
        Engine._bodiesApplyGravity(allBodies, world.gravity);

        // update all body position and rotation by integration
        Engine._bodiesUpdate(allBodies, delta, timing.timeScale, correction, world.bounds);

        // update all constraints (first pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // broadphase pass: find potential collision pairs
        if (broadphase.controller) {
            // if world is dirty, we must flush the whole grid
            if (world.isModified)
                broadphase.controller.clear(broadphase);

            // update the grid buckets based on current bodies
            broadphase.controller.update(broadphase, allBodies, engine, world.isModified);
            broadphasePairs = broadphase.pairsList;
        } else {
            // if no broadphase set, we just pass all bodies
            broadphasePairs = allBodies;
        }

        // clear all composite modified flags
        if (world.isModified) {
            Composite.setModified(world, false, false, true);
        }

        // narrowphase pass: find actual collisions, then create or update collision pairs
        var collisions = broadphase.detector(broadphasePairs, engine);

        // update collision pairs
        var pairs = engine.pairs,
            timestamp = timing.timestamp;
        Pairs.update(pairs, collisions, timestamp);
        Pairs.removeOld(pairs, timestamp);

        // wake up bodies involved in collisions
        if (engine.enableSleeping)
            Sleeping.afterCollisions(pairs.list, timing.timeScale);

        // trigger collision events
        if (pairs.collisionStart.length > 0)
            Events.trigger(engine, 'collisionStart', { pairs: pairs.collisionStart });

        // iteratively resolve position between collisions
        Resolver.preSolvePosition(pairs.list);
        for (i = 0; i < engine.positionIterations; i++) {
            Resolver.solvePosition(pairs.list, timing.timeScale);
        }
        Resolver.postSolvePosition(allBodies);

        // update all constraints (second pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, timing.timeScale);
        }
        Constraint.postSolveAll(allBodies);

        // iteratively resolve velocity between collisions
        Resolver.preSolveVelocity(pairs.list);
        for (i = 0; i < engine.velocityIterations; i++) {
            Resolver.solveVelocity(pairs.list, timing.timeScale);
        }

        // trigger collision events
        if (pairs.collisionActive.length > 0)
            Events.trigger(engine, 'collisionActive', { pairs: pairs.collisionActive });

        if (pairs.collisionEnd.length > 0)
            Events.trigger(engine, 'collisionEnd', { pairs: pairs.collisionEnd });


        // clear force buffers
        Engine._bodiesClearForces(allBodies);

        Events.trigger(engine, 'afterUpdate', event);

        return engine;
    };
    
    /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */
    Engine.merge = function(engineA, engineB) {
        Common.extend(engineA, engineB);
        
        if (engineB.world) {
            engineA.world = engineB.world;

            Engine.clear(engineA);

            var bodies = Composite.allBodies(engineA.world);

            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                Sleeping.set(body, false);
                body.id = Common.nextId();
            }
        }
    };

    /**
     * Clears the engine including the world, pairs and broadphase.
     * @method clear
     * @param {engine} engine
     */
    Engine.clear = function(engine) {
        var world = engine.world;
        
        Pairs.clear(engine.pairs);

        var broadphase = engine.broadphase;
        if (broadphase.controller) {
            var bodies = Composite.allBodies(world);
            broadphase.controller.clear(broadphase);
            broadphase.controller.update(broadphase, bodies, engine, true);
        }
    };

    /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */
    Engine._bodiesClearForces = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            // reset force buffers
            body.force.x = 0;
            body.force.y = 0;
            body.torque = 0;
        }
    };

    /**
     * Applys a mass dependant force to all given bodies.
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */
    Engine._bodiesApplyGravity = function(bodies, gravity) {
        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001;

        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
            return;
        }
        
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            // apply gravity
            body.force.y += body.mass * gravity.y * gravityScale;
            body.force.x += body.mass * gravity.x * gravityScale;
        }
    };

    /**
     * Applys `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} deltaTime 
     * The amount of time elapsed between updates
     * @param {number} timeScale
     * @param {number} correction 
     * The Verlet correction factor (deltaTime / lastDeltaTime)
     * @param {bounds} worldBounds
     */
    Engine._bodiesUpdate = function(bodies, deltaTime, timeScale, correction, worldBounds) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            Body.update(body, deltaTime, timeScale, correction);
        }
    };

    /**
     * An alias for `Runner.run`, see `Matter.Runner` for more information.
     * @method run
     * @param {engine} engine
     */

    /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {} event An event object
    * @param {} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {} event An event object
    * @param {} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {} event An event object
    * @param {} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */

    /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */

    /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */

    /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */

    /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */

    /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     *
     * @property timing.timestamp
     * @type number
     * @default 0
     */

    /**
     * An instance of a `Render` controller. The default value is a `Matter.Render` instance created by `Engine.create`.
     * One may also develop a custom renderer module based on `Matter.Render` and pass an instance of it to `Engine.create` via `options.render`.
     *
     * A minimal custom renderer object must define at least three functions: `create`, `clear` and `world` (see `Matter.Render`).
     * It is also possible to instead pass the _module_ reference via `options.render.controller` and `Engine.create` will instantiate one for you.
     *
     * @property render
     * @type render
     * @deprecated see Demo.js for an example of creating a renderer
     * @default a Matter.Render instance
     */

    /**
     * An instance of a broadphase controller. The default value is a `Matter.Grid` instance created by `Engine.create`.
     *
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * A `World` composite object that will contain all simulated bodies and constraints.
     *
     * @property world
     * @type world
     * @default a Matter.World instance
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();

},{"../body/Body":1,"../body/Composite":2,"../body/World":3,"../collision/Grid":6,"../collision/Pairs":8,"../collision/Resolver":10,"../constraint/Constraint":12,"../render/Render":31,"./Common":14,"./Events":16,"./Metrics":18,"./Sleeping":22}],16:[function(_dereq_,module,exports){
/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/

var Events = {};

module.exports = Events;

var Common = _dereq_('./Common');

(function() {

    /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.on = function(object, eventNames, callback) {
        var names = eventNames.split(' '),
            name;

        for (var i = 0; i < names.length; i++) {
            name = names[i];
            object.events = object.events || {};
            object.events[name] = object.events[name] || [];
            object.events[name].push(callback);
        }

        return callback;
    };

    /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.off = function(object, eventNames, callback) {
        if (!eventNames) {
            object.events = {};
            return;
        }

        // handle Events.off(object, callback)
        if (typeof eventNames === 'function') {
            callback = eventNames;
            eventNames = Common.keys(object.events).join(' ');
        }

        var names = eventNames.split(' ');

        for (var i = 0; i < names.length; i++) {
            var callbacks = object.events[names[i]],
                newCallbacks = [];

            if (callback && callbacks) {
                for (var j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] !== callback)
                        newCallbacks.push(callbacks[j]);
                }
            }

            object.events[names[i]] = newCallbacks;
        }
    };

    /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */
    Events.trigger = function(object, eventNames, event) {
        var names,
            name,
            callbacks,
            eventClone;

        if (object.events) {
            if (!event)
                event = {};

            names = eventNames.split(' ');

            for (var i = 0; i < names.length; i++) {
                name = names[i];
                callbacks = object.events[name];

                if (callbacks) {
                    eventClone = Common.clone(event, false);
                    eventClone.name = name;
                    eventClone.source = object;

                    for (var j = 0; j < callbacks.length; j++) {
                        callbacks[j].apply(object, [eventClone]);
                    }
                }
            }
        }
    };

})();

},{"./Common":14}],17:[function(_dereq_,module,exports){
/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/

var Matter = {};

module.exports = Matter;

var Plugin = _dereq_('./Plugin');
var Common = _dereq_('./Common');

(function() {

    /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */
    Matter.name = 'matter-js';

    /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */
    Matter.version = '0.14.2';

    /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */
    Matter.uses = [];

    /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */
    Matter.used = [];

    /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */
    Matter.use = function() {
        Plugin.use(Matter, Array.prototype.slice.call(arguments));
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Matter.before = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathBefore(Matter, path, func);
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Matter.after = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathAfter(Matter, path, func);
    };

})();

},{"./Common":14,"./Plugin":20}],18:[function(_dereq_,module,exports){

},{"../body/Composite":2,"./Common":14}],19:[function(_dereq_,module,exports){
/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/

var Mouse = {};

module.exports = Mouse;

var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */
    Mouse.create = function(element) {
        var mouse = {};

        if (!element) {
            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
        }
        
        mouse.element = element || document.body;
        mouse.absolute = { x: 0, y: 0 };
        mouse.position = { x: 0, y: 0 };
        mouse.mousedownPosition = { x: 0, y: 0 };
        mouse.mouseupPosition = { x: 0, y: 0 };
        mouse.offset = { x: 0, y: 0 };
        mouse.scale = { x: 1, y: 1 };
        mouse.wheelDelta = 0;
        mouse.button = -1;
        mouse.pixelRatio = mouse.element.getAttribute('data-pixel-ratio') || 1;

        mouse.sourceEvents = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            mousewheel: null
        };
        
        mouse.mousemove = function(event) { 
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.sourceEvents.mousemove = event;
        };
        
        mouse.mousedown = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            } else {
                mouse.button = event.button;
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mousedownPosition.x = mouse.position.x;
            mouse.mousedownPosition.y = mouse.position.y;
            mouse.sourceEvents.mousedown = event;
        };
        
        mouse.mouseup = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                event.preventDefault();
            }
            
            mouse.button = -1;
            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mouseupPosition.x = mouse.position.x;
            mouse.mouseupPosition.y = mouse.position.y;
            mouse.sourceEvents.mouseup = event;
        };

        mouse.mousewheel = function(event) {
            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
            event.preventDefault();
        };

        Mouse.setElement(mouse, mouse.element);

        return mouse;
    };

    /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */
    Mouse.setElement = function(mouse, element) {
        mouse.element = element;

        element.addEventListener('mousemove', mouse.mousemove);
        element.addEventListener('mousedown', mouse.mousedown);
        element.addEventListener('mouseup', mouse.mouseup);
        
        element.addEventListener('mousewheel', mouse.mousewheel);
        element.addEventListener('DOMMouseScroll', mouse.mousewheel);

        element.addEventListener('touchmove', mouse.mousemove);
        element.addEventListener('touchstart', mouse.mousedown);
        element.addEventListener('touchend', mouse.mouseup);
    };

    /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */
    Mouse.clearSourceEvents = function(mouse) {
        mouse.sourceEvents.mousemove = null;
        mouse.sourceEvents.mousedown = null;
        mouse.sourceEvents.mouseup = null;
        mouse.sourceEvents.mousewheel = null;
        mouse.wheelDelta = 0;
    };

    /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */
    Mouse.setOffset = function(mouse, offset) {
        mouse.offset.x = offset.x;
        mouse.offset.y = offset.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };

    /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */
    Mouse.setScale = function(mouse, scale) {
        mouse.scale.x = scale.x;
        mouse.scale.y = scale.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };
    
    /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */
    Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
        var elementBounds = element.getBoundingClientRect(),
            rootNode = (document.documentElement || document.body.parentNode || document.body),
            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
            touches = event.changedTouches,
            x, y;
        
        if (touches) {
            x = touches[0].pageX - elementBounds.left - scrollX;
            y = touches[0].pageY - elementBounds.top - scrollY;
        } else {
            x = event.pageX - elementBounds.left - scrollX;
            y = event.pageY - elementBounds.top - scrollY;
        }

        return { 
            x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
            y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
        };
    };

})();

},{"../core/Common":14}],20:[function(_dereq_,module,exports){
/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/

var Plugin = {};

module.exports = Plugin;

var Common = _dereq_('./Common');

(function() {

    Plugin._registry = {};

    /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */
    Plugin.register = function(plugin) {
        if (!Plugin.isPlugin(plugin)) {
            Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
        }

        if (plugin.name in Plugin._registry) {
            var registered = Plugin._registry[plugin.name],
                pluginVersion = Plugin.versionParse(plugin.version).number,
                registeredVersion = Plugin.versionParse(registered.version).number;

            if (pluginVersion > registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
                Plugin._registry[plugin.name] = plugin;
            } else if (pluginVersion < registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
            } else if (plugin !== registered) {
                Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
            }
        } else {
            Plugin._registry[plugin.name] = plugin;
        }

        return plugin;
    };

    /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */
    Plugin.resolve = function(dependency) {
        return Plugin._registry[Plugin.dependencyParse(dependency).name];
    };

    /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */
    Plugin.toString = function(plugin) {
        return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
    };

    /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */
    Plugin.isPlugin = function(obj) {
        return obj && obj.name && obj.version && obj.install;
    };

    /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */
    Plugin.isUsed = function(module, name) {
        return module.used.indexOf(name) > -1;
    };

    /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */
    Plugin.isFor = function(plugin, module) {
        var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
        return !plugin.for || (module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range));
    };

    /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */
    Plugin.use = function(module, plugins) {
        module.uses = (module.uses || []).concat(plugins || []);

        if (module.uses.length === 0) {
            Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
            return;
        }

        var dependencies = Plugin.dependencies(module),
            sortedDependencies = Common.topologicalSort(dependencies),
            status = [];

        for (var i = 0; i < sortedDependencies.length; i += 1) {
            if (sortedDependencies[i] === module.name) {
                continue;
            }

            var plugin = Plugin.resolve(sortedDependencies[i]);

            if (!plugin) {
                status.push('❌ ' + sortedDependencies[i]);
                continue;
            }

            if (Plugin.isUsed(module, plugin.name)) {
                continue;
            }

            if (!Plugin.isFor(plugin, module)) {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
                plugin._warned = true;
            }

            if (plugin.install) {
                plugin.install(module);
            } else {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
                plugin._warned = true;
            }

            if (plugin._warned) {
                status.push('🔶 ' + Plugin.toString(plugin));
                delete plugin._warned;
            } else {
                status.push('✅ ' + Plugin.toString(plugin));
            }

            module.used.push(plugin.name);
        }

        if (status.length > 0) {
            Common.info(status.join('  '));
        }
    };

    /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */
    Plugin.dependencies = function(module, tracked) {
        var parsedBase = Plugin.dependencyParse(module),
            name = parsedBase.name;

        tracked = tracked || {};

        if (name in tracked) {
            return;
        }

        module = Plugin.resolve(module) || module;

        tracked[name] = Common.map(module.uses || [], function(dependency) {
            if (Plugin.isPlugin(dependency)) {
                Plugin.register(dependency);
            }

            var parsed = Plugin.dependencyParse(dependency),
                resolved = Plugin.resolve(dependency);

            if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy',
                    Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.'
                );

                resolved._warned = true;
                module._warned = true;
            } else if (!resolved) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(dependency), 'used by',
                    Plugin.toString(parsedBase), 'could not be resolved.'
                );

                module._warned = true;
            }

            return parsed.name;
        });

        for (var i = 0; i < tracked[name].length; i += 1) {
            Plugin.dependencies(tracked[name][i], tracked);
        }

        return tracked;
    };

    /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */
    Plugin.dependencyParse = function(dependency) {
        if (Common.isString(dependency)) {
            var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/;

            if (!pattern.test(dependency)) {
                Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
            }

            return {
                name: dependency.split('@')[0],
                range: dependency.split('@')[1] || '*'
            };
        }

        return {
            name: dependency.name,
            range: dependency.range || dependency.version
        };
    };

    /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */
    Plugin.versionParse = function(range) {
        var pattern = /^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/;

        if (!pattern.test(range)) {
            Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
        }

        var identifiers = range.split('-');
        range = identifiers[0];

        var isRange = isNaN(Number(range[0])),
            version = isRange ? range.substr(1) : range,
            parts = Common.map(version.split('.'), function(part) {
                return Number(part);
            });

        return {
            isRange: isRange,
            version: version,
            range: range,
            operator: isRange ? range[0] : '',
            parts: parts,
            prerelease: identifiers[1],
            number: parts[0] * 1e8 + parts[1] * 1e4 + parts[2]
        };
    };

    /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */
    Plugin.versionSatisfies = function(version, range) {
        range = range || '*';

        var rangeParsed = Plugin.versionParse(range),
            rangeParts = rangeParsed.parts,
            versionParsed = Plugin.versionParse(version),
            versionParts = versionParsed.parts;

        if (rangeParsed.isRange) {
            if (rangeParsed.operator === '*' || version === '*') {
                return true;
            }

            if (rangeParsed.operator === '~') {
                return versionParts[0] === rangeParts[0] && versionParts[1] === rangeParts[1] && versionParts[2] >= rangeParts[2];
            }

            if (rangeParsed.operator === '^') {
                if (rangeParts[0] > 0) {
                    return versionParts[0] === rangeParts[0] && versionParsed.number >= rangeParsed.number;
                }

                if (rangeParts[1] > 0) {
                    return versionParts[1] === rangeParts[1] && versionParts[2] >= rangeParts[2];
                }

                return versionParts[2] === rangeParts[2];
            }
        }

        return version === range || version === '*';
    };

})();

},{"./Common":14}],21:[function(_dereq_,module,exports){
/**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/

var Runner = {};

module.exports = Runner;

var Events = _dereq_('./Events');
var Engine = _dereq_('./Engine');
var Common = _dereq_('./Common');

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
   
        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    if (!_requestAnimationFrame) {
        var _frameTimeout;

        _requestAnimationFrame = function(callback){ 
            _frameTimeout = setTimeout(function() { 
                callback(Common.now()); 
            }, 1000 / 60);
        };

        _cancelAnimationFrame = function() {
            clearTimeout(_frameTimeout);
        };
    }

    /**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */
    Runner.create = function(options) {
        var defaults = {
            fps: 60,
            correction: 1,
            deltaSampleSize: 60,
            counterTimestamp: 0,
            frameCounter: 0,
            deltaHistory: [],
            timePrev: null,
            timeScalePrev: 1,
            frameRequestId: null,
            isFixed: false,
            enabled: true
        };

        var runner = Common.extend(defaults, options);

        runner.delta = runner.delta || 1000 / runner.fps;
        runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
        runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
        runner.fps = 1000 / runner.delta;

        return runner;
    };

    /**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */
    Runner.run = function(runner, engine) {
        // create runner if engine is first argument
        if (typeof runner.positionIterations !== 'undefined') {
            engine = runner;
            runner = Runner.create();
        }

        (function render(time){
            runner.frameRequestId = _requestAnimationFrame(render);

            if (time && runner.enabled) {
                Runner.tick(runner, engine, time);
            }
        })();

        return runner;
    };

    /**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Triggers `beforeTick`, `tick` and `afterTick` events on the engine.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */
    Runner.tick = function(runner, engine, time) {
        var timing = engine.timing,
            correction = 1,
            delta;

        // create an event object
        var event = {
            timestamp: timing.timestamp
        };

        Events.trigger(runner, 'beforeTick', event);
        Events.trigger(engine, 'beforeTick', event); // @deprecated

        if (runner.isFixed) {
            // fixed timestep
            delta = runner.delta;
        } else {
            // dynamic timestep based on wall clock between calls
            delta = (time - runner.timePrev) || runner.delta;
            runner.timePrev = time;

            // optimistically filter delta over a few frames, to improve stability
            runner.deltaHistory.push(delta);
            runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
            delta = Math.min.apply(null, runner.deltaHistory);
            
            // limit delta
            delta = delta < runner.deltaMin ? runner.deltaMin : delta;
            delta = delta > runner.deltaMax ? runner.deltaMax : delta;

            // correction for delta
            correction = delta / runner.delta;

            // update engine timing object
            runner.delta = delta;
        }

        // time correction for time scaling
        if (runner.timeScalePrev !== 0)
            correction *= timing.timeScale / runner.timeScalePrev;

        if (timing.timeScale === 0)
            correction = 0;

        runner.timeScalePrev = timing.timeScale;
        runner.correction = correction;

        // fps counter
        runner.frameCounter += 1;
        if (time - runner.counterTimestamp >= 1000) {
            runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
            runner.counterTimestamp = time;
            runner.frameCounter = 0;
        }

        Events.trigger(runner, 'tick', event);
        Events.trigger(engine, 'tick', event); // @deprecated

        // if world has been modified, clear the render scene graph
        if (engine.world.isModified 
            && engine.render
            && engine.render.controller
            && engine.render.controller.clear) {
            engine.render.controller.clear(engine.render); // @deprecated
        }

        // update
        Events.trigger(runner, 'beforeUpdate', event);
        Engine.update(engine, delta, correction);
        Events.trigger(runner, 'afterUpdate', event);

        // render
        // @deprecated
        if (engine.render && engine.render.controller) {
            Events.trigger(runner, 'beforeRender', event);
            Events.trigger(engine, 'beforeRender', event); // @deprecated

            engine.render.controller.world(engine.render);

            Events.trigger(runner, 'afterRender', event);
            Events.trigger(engine, 'afterRender', event); // @deprecated
        }

        Events.trigger(runner, 'afterTick', event);
        Events.trigger(engine, 'afterTick', event); // @deprecated
    };

    /**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */
    Runner.stop = function(runner) {
        _cancelAnimationFrame(runner.frameRequestId);
    };

    /**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */
    Runner.start = function(runner, engine) {
        Runner.run(runner, engine);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired at the start of a tick, before any updates to the engine or timing
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after engine timing updated, but just before update
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired at the end of a tick, after engine update and after rendering
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired before update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after update
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    * @deprecated
    */

    /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    * @deprecated
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A flag that specifies whether the runner is running or not.
     *
     * @property enabled
     * @type boolean
     * @default true
     */

    /**
     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
     *
     * @property isFixed
     * @type boolean
     * @default false
     */

    /**
     * A `Number` that specifies the time step between updates in milliseconds.
     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
     *
     * @property delta
     * @type number
     * @default 1000 / 60
     */

})();

},{"./Common":14,"./Engine":15,"./Events":16}],22:[function(_dereq_,module,exports){
/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/

var Sleeping = {};

module.exports = Sleeping;

var Events = _dereq_('./Events');

(function() {

    Sleeping._motionWakeThreshold = 0.18;
    Sleeping._motionSleepThreshold = 0.08;
    Sleeping._minBias = 0.9;

    /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} timeScale
     */
    Sleeping.update = function(bodies, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // update bodies sleeping status
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                motion = body.speed * body.speed + body.angularSpeed * body.angularSpeed;

            // wake up bodies if they have a force applied
            if (body.force.x !== 0 || body.force.y !== 0) {
                Sleeping.set(body, false);
                continue;
            }

            var minMotion = Math.min(body.motion, motion),
                maxMotion = Math.max(body.motion, motion);
        
            // biased average motion estimation between frames
            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
            
            if (body.sleepThreshold > 0 && body.motion < Sleeping._motionSleepThreshold * timeFactor) {
                body.sleepCounter += 1;
                
                if (body.sleepCounter >= body.sleepThreshold)
                    Sleeping.set(body, true);
            } else if (body.sleepCounter > 0) {
                body.sleepCounter -= 1;
            }
        }
    };

    /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     * @param {number} timeScale
     */
    Sleeping.afterCollisions = function(pairs, timeScale) {
        var timeFactor = timeScale * timeScale * timeScale;

        // wake up bodies involved in collisions
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            // don't wake inactive pairs
            if (!pair.isActive)
                continue;

            var collision = pair.collision,
                bodyA = collision.bodyA.parent, 
                bodyB = collision.bodyB.parent;
        
            // don't wake if at least one body is static
            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
                continue;
        
            if (bodyA.isSleeping || bodyB.isSleeping) {
                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

                if (!sleepingBody.isStatic && movingBody.motion > Sleeping._motionWakeThreshold * timeFactor) {
                    Sleeping.set(sleepingBody, false);
                }
            }
        }
    };
  
    /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */
    Sleeping.set = function(body, isSleeping) {
        var wasSleeping = body.isSleeping;

        if (isSleeping) {
            body.isSleeping = true;
            body.sleepCounter = body.sleepThreshold;

            body.positionImpulse.x = 0;
            body.positionImpulse.y = 0;

            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;

            body.anglePrev = body.angle;
            body.speed = 0;
            body.angularSpeed = 0;
            body.motion = 0;

            if (!wasSleeping) {
                Events.trigger(body, 'sleepStart');
            }
        } else {
            body.isSleeping = false;
            body.sleepCounter = 0;

            if (wasSleeping) {
                Events.trigger(body, 'sleepEnd');
            }
        }
    };

})();

},{"./Events":16}],23:[function(_dereq_,module,exports){
/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/

// TODO: true circle bodies

var Bodies = {};

module.exports = Bodies;

var Vertices = _dereq_('../geometry/Vertices');
var Common = _dereq_('../core/Common');
var Body = _dereq_('../body/Body');
var Bounds = _dereq_('../geometry/Bounds');
var Vector = _dereq_('../geometry/Vector');
var decomp;

(function() {

    /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */
    Bodies.rectangle = function(x, y, width, height, options) {
        options = options || {};

        var rectangle = { 
            label: 'Rectangle Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
                                    chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, rectangle, options));
    };
    
    /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */
    Bodies.trapezoid = function(x, y, width, height, slope, options) {
        options = options || {};

        slope *= 0.5;
        var roof = (1 - (slope * 2)) * width;
        
        var x1 = width * slope,
            x2 = x1 + roof,
            x3 = x2 + x1,
            verticesPath;

        if (slope < 0.5) {
            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        } else {
            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        }

        var trapezoid = { 
            label: 'Trapezoid Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(verticesPath)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
                                    chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, trapezoid, options));
    };

    /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */
    Bodies.circle = function(x, y, radius, options, maxSides) {
        options = options || {};

        var circle = {
            label: 'Circle Body',
            circleRadius: radius
        };
        
        // approximate circles with polygons until true circles implemented in SAT
        maxSides = maxSides || 25;
        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

        // optimisation: always use even number of sides (half the number of unique axes)
        if (sides % 2 === 1)
            sides += 1;

        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
    };

    /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */
    Bodies.polygon = function(x, y, sides, radius, options) {
        options = options || {};

        if (sides < 3)
            return Bodies.circle(x, y, radius, options);

        var theta = 2 * Math.PI / sides,
            path = '',
            offset = theta * 0.5;

        for (var i = 0; i < sides; i += 1) {
            var angle = offset + (i * theta),
                xx = Math.cos(angle) * radius,
                yy = Math.sin(angle) * radius;

            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
        }

        var polygon = { 
            label: 'Polygon Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(path)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
                                    chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, polygon, options));
    };

    /**
     * Creates a body using the supplied vertices (or an array containing multiple sets of vertices).
     * If the vertices are convex, they will pass through as supplied.
     * Otherwise if the vertices are concave, they will be decomposed if [poly-decomp.js](https://github.com/schteppe/poly-decomp.js) is available.
     * Note that this process is not guaranteed to support complex sets of vertices (e.g. those with holes may fail).
     * By default the decomposition will discard collinear edges (to improve performance).
     * It can also optionally discard any parts that have an area less than `minimumArea`.
     * If the vertices can not be decomposed, the result will fall back to using the convex hull.
     * The options parameter is an object that specifies any `Matter.Body` properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param [[vector]] vertexSets
     * @param {object} [options]
     * @param {bool} [flagInternal=false]
     * @param {number} [removeCollinear=0.01]
     * @param {number} [minimumArea=10]
     * @return {body}
     */
    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea) {
        if (!decomp) {
            decomp = Common._requireGlobal('decomp', 'poly-decomp');
        }

        var body,
            parts,
            isConvex,
            vertices,
            i,
            j,
            k,
            v,
            z;

        options = options || {};
        parts = [];

        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;

        if (!decomp) {
            Common.warn('Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull.');
        }

        // ensure vertexSets is an array of arrays
        if (!Common.isArray(vertexSets[0])) {
            vertexSets = [vertexSets];
        }

        for (v = 0; v < vertexSets.length; v += 1) {
            vertices = vertexSets[v];
            isConvex = Vertices.isConvex(vertices);

            if (isConvex || !decomp) {
                if (isConvex) {
                    vertices = Vertices.clockwiseSort(vertices);
                } else {
                    // fallback to convex hull when decomposition is not possible
                    vertices = Vertices.hull(vertices);
                }

                parts.push({
                    position: { x: x, y: y },
                    vertices: vertices
                });
            } else {
                // initialise a decomposition
                var concave = vertices.map(function(vertex) {
                    return [vertex.x, vertex.y];
                });

                // vertices are concave and simple, we can decompose into parts
                decomp.makeCCW(concave);
                if (removeCollinear !== false)
                    decomp.removeCollinearPoints(concave, removeCollinear);

                // use the quick decomposition algorithm (Bayazit)
                var decomposed = decomp.quickDecomp(concave);

                // for each decomposed chunk
                for (i = 0; i < decomposed.length; i++) {
                    var chunk = decomposed[i];

                    // convert vertices into the correct structure
                    var chunkVertices = chunk.map(function(vertices) {
                        return {
                            x: vertices[0],
                            y: vertices[1]
                        };
                    });

                    // skip small chunks
                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                        continue;

                    // create a compound part
                    parts.push({
                        position: Vertices.centre(chunkVertices),
                        vertices: chunkVertices
                    });
                }
            }
        }

        // create body parts
        for (i = 0; i < parts.length; i++) {
            parts[i] = Body.create(Common.extend(parts[i], options));
        }

        // flag internal edges (coincident part edges)
        if (flagInternal) {
            var coincident_max_dist = 5;

            for (i = 0; i < parts.length; i++) {
                var partA = parts[i];

                for (j = i + 1; j < parts.length; j++) {
                    var partB = parts[j];

                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                        var pav = partA.vertices,
                            pbv = partB.vertices;

                        // iterate vertices of both parts
                        for (k = 0; k < partA.vertices.length; k++) {
                            for (z = 0; z < partB.vertices.length; z++) {
                                // find distances between the vertices
                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

                                // if both vertices are very close, consider the edge concident (internal)
                                if (da < coincident_max_dist && db < coincident_max_dist) {
                                    pav[k].isInternal = true;
                                    pbv[z].isInternal = true;
                                }
                            }
                        }

                    }
                }
            }
        }

        if (parts.length > 1) {
            // create the parent body to be returned, that contains generated compound parts
            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));
            Body.setPosition(body, { x: x, y: y });

            return body;
        } else {
            return parts[0];
        }
    };

})();

},{"../body/Body":1,"../core/Common":14,"../geometry/Bounds":26,"../geometry/Vector":28,"../geometry/Vertices":29}],24:[function(_dereq_,module,exports){
/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/

var Composites = {};

module.exports = Composites;

var Composite = _dereq_('../body/Composite');
var Constraint = _dereq_('../constraint/Constraint');
var Common = _dereq_('../core/Common');
var Body = _dereq_('../body/Body');
var Bodies = _dereq_('./Bodies');

(function() {

    /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        var stack = Composite.create({ label: 'Stack' }),
            x = xx,
            y = yy,
            lastBody,
            i = 0;

        for (var row = 0; row < rows; row++) {
            var maxHeight = 0;
            
            for (var column = 0; column < columns; column++) {
                var body = callback(x, y, column, row, lastBody, i);
                    
                if (body) {
                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

                    if (bodyHeight > maxHeight)
                        maxHeight = bodyHeight;
                    
                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

                    x = body.bounds.max.x + columnGap;

                    Composite.addBody(stack, body);
                    
                    lastBody = body;
                    i += 1;
                } else {
                    x += columnGap;
                }
            }
            
            y += maxHeight + rowGap;
            x = xx;
        }

        return stack;
    };
    
    /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */
    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
        var bodies = composite.bodies;
        
        for (var i = 1; i < bodies.length; i++) {
            var bodyA = bodies[i - 1],
                bodyB = bodies[i],
                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
        
            var defaults = {
                bodyA: bodyA,
                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                bodyB: bodyB,
                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
            };
            
            var constraint = Common.extend(defaults, options);
        
            Composite.addConstraint(composite, Constraint.create(constraint));
        }

        composite.label += ' Chain';
        
        return composite;
    };

    /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */
    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
        var bodies = composite.bodies,
            row,
            col,
            bodyA,
            bodyB,
            bodyC;
        
        for (row = 0; row < rows; row++) {
            for (col = 1; col < columns; col++) {
                bodyA = bodies[(col - 1) + (row * columns)];
                bodyB = bodies[col + (row * columns)];
                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
            }

            if (row > 0) {
                for (col = 0; col < columns; col++) {
                    bodyA = bodies[col + ((row - 1) * columns)];
                    bodyB = bodies[col + (row * columns)];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

                    if (crossBrace && col > 0) {
                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }

                    if (crossBrace && col < columns - 1) {
                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }
                }
            }
        }

        composite.label += ' Mesh';
        
        return composite;
    };
    
    /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
        return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
            
            if (row > actualRows)
                return;
            
            // reverse row order
            row = actualRows - row;
            
            var start = row,
                end = columns - 1 - row;

            if (column < start || column > end)
                return;
            
            // retroactively fix the first body's position, since width was unknown
            if (i === 1) {
                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
            }

            var xOffset = lastBody ? column * lastBodyWidth : 0;
            
            return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
        });
    };

    /**
     * Creates a composite with a Newton's Cradle setup of bodies and constraints.
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */
    Composites.newtonsCradle = function(xx, yy, number, size, length) {
        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

        for (var i = 0; i < number; i++) {
            var separation = 1.9,
                circle = Bodies.circle(xx + i * (size * separation), yy + length, size, 
                            { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
                constraint = Constraint.create({ pointA: { x: xx + i * (size * separation), y: yy }, bodyB: circle });

            Composite.addBody(newtonsCradle, circle);
            Composite.addConstraint(newtonsCradle, constraint);
        }

        return newtonsCradle;
    };
    
    /**
     * Creates a composite with simple car setup of bodies and constraints.
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */
    Composites.car = function(xx, yy, width, height, wheelSize) {
        var group = Body.nextGroup(true),
            wheelBase = 20,
            wheelAOffset = -width * 0.5 + wheelBase,
            wheelBOffset = width * 0.5 - wheelBase,
            wheelYOffset = 0;
    
        var car = Composite.create({ label: 'Car' }),
            body = Bodies.rectangle(xx, yy, width, height, { 
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height * 0.5
                },
                density: 0.0002
            });
    
        var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var axelA = Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset, y: wheelYOffset },
            bodyA: wheelA,
            stiffness: 1,
            length: 0
        });
                        
        var axelB = Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset, y: wheelYOffset },
            bodyA: wheelB,
            stiffness: 1,
            length: 0
        });
        
        Composite.addBody(car, body);
        Composite.addBody(car, wheelA);
        Composite.addBody(car, wheelB);
        Composite.addConstraint(car, axelA);
        Composite.addConstraint(car, axelB);

        return car;
    };

    /**
     * Creates a simple soft body like object.
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */
    Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
        constraintOptions = Common.extend({ stiffness: 0.2, render: { type: 'line', anchors: false } }, constraintOptions);

        var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
            return Bodies.circle(x, y, particleRadius, particleOptions);
        });

        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

        softBody.label = 'Soft Body';

        return softBody;
    };

})();

},{"../body/Body":1,"../body/Composite":2,"../constraint/Constraint":12,"../core/Common":14,"./Bodies":23}],25:[function(_dereq_,module,exports){
/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/

var Axes = {};

module.exports = Axes;

var Vector = _dereq_('../geometry/Vector');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */
    Axes.fromVertices = function(vertices) {
        var axes = {};

        // find the unique axes, using edge normal gradients
        for (var i = 0; i < vertices.length; i++) {
            var j = (i + 1) % vertices.length, 
                normal = Vector.normalise({ 
                    x: vertices[j].y - vertices[i].y, 
                    y: vertices[i].x - vertices[j].x
                }),
                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
            
            // limit precision
            gradient = gradient.toFixed(3).toString();
            axes[gradient] = normal;
        }

        return Common.values(axes);
    };

    /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */
    Axes.rotate = function(axes, angle) {
        if (angle === 0)
            return;
        
        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i],
                xx;
            xx = axis.x * cos - axis.y * sin;
            axis.y = axis.x * sin + axis.y * cos;
            axis.x = xx;
        }
    };

})();

},{"../core/Common":14,"../geometry/Vector":28}],26:[function(_dereq_,module,exports){
/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/

var Bounds = {};

module.exports = Bounds;

(function() {

    /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */
    Bounds.create = function(vertices) {
        var bounds = { 
            min: { x: 0, y: 0 }, 
            max: { x: 0, y: 0 }
        };

        if (vertices)
            Bounds.update(bounds, vertices);
        
        return bounds;
    };

    /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */
    Bounds.update = function(bounds, vertices, velocity) {
        bounds.min.x = Infinity;
        bounds.max.x = -Infinity;
        bounds.min.y = Infinity;
        bounds.max.y = -Infinity;

        for (var i = 0; i < vertices.length; i++) {
            var vertex = vertices[i];
            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
        }
        
        if (velocity) {
            if (velocity.x > 0) {
                bounds.max.x += velocity.x;
            } else {
                bounds.min.x += velocity.x;
            }
            
            if (velocity.y > 0) {
                bounds.max.y += velocity.y;
            } else {
                bounds.min.y += velocity.y;
            }
        }
    };

    /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */
    Bounds.contains = function(bounds, point) {
        return point.x >= bounds.min.x && point.x <= bounds.max.x 
               && point.y >= bounds.min.y && point.y <= bounds.max.y;
    };

    /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */
    Bounds.overlaps = function(boundsA, boundsB) {
        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
    };

    /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */
    Bounds.translate = function(bounds, vector) {
        bounds.min.x += vector.x;
        bounds.max.x += vector.x;
        bounds.min.y += vector.y;
        bounds.max.y += vector.y;
    };

    /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */
    Bounds.shift = function(bounds, position) {
        var deltaX = bounds.max.x - bounds.min.x,
            deltaY = bounds.max.y - bounds.min.y;
            
        bounds.min.x = position.x;
        bounds.max.x = position.x + deltaX;
        bounds.min.y = position.y;
        bounds.max.y = position.y + deltaY;
    };
    
})();

},{}],27:[function(_dereq_,module,exports){
/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/

var Svg = {};

module.exports = Svg;

var Bounds = _dereq_('../geometry/Bounds');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */
    Svg.pathToVertices = function(path, sampleLength) {
        if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) {
            Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
        }

        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
        var i, il, total, point, segment, segments, 
            segmentsQueue, lastSegment, 
            lastPoint, segmentIndex, points = [],
            lx, ly, length = 0, x = 0, y = 0;

        sampleLength = sampleLength || 15;

        var addPoint = function(px, py, pathSegType) {
            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

            // when the last point doesn't equal the current point add the current point
            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                if (lastPoint && isRelative) {
                    lx = lastPoint.x;
                    ly = lastPoint.y;
                } else {
                    lx = 0;
                    ly = 0;
                }

                var point = {
                    x: lx + px,
                    y: ly + py
                };

                // set last point
                if (isRelative || !lastPoint) {
                    lastPoint = point;
                }

                points.push(point);

                x = lx + px;
                y = ly + py;
            }
        };

        var addSegmentPoint = function(segment) {
            var segType = segment.pathSegTypeAsLetter.toUpperCase();

            // skip path ends
            if (segType === 'Z') 
                return;

            // map segment to x and y
            switch (segType) {

            case 'M':
            case 'L':
            case 'T':
            case 'C':
            case 'S':
            case 'Q':
                x = segment.x;
                y = segment.y;
                break;
            case 'H':
                x = segment.x;
                break;
            case 'V':
                y = segment.y;
                break;
            }

            addPoint(x, y, segment.pathSegType);
        };

        // ensure path is absolute
        Svg._svgPathToAbsolute(path);

        // get total length
        total = path.getTotalLength();

        // queue segments
        segments = [];
        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
            segments.push(path.pathSegList.getItem(i));

        segmentsQueue = segments.concat();

        // sample through path
        while (length < total) {
            // get segment at position
            segmentIndex = path.getPathSegAtLength(length);
            segment = segments[segmentIndex];

            // new segment
            if (segment != lastSegment) {
                while (segmentsQueue.length && segmentsQueue[0] != segment)
                    addSegmentPoint(segmentsQueue.shift());

                lastSegment = segment;
            }

            // add points in between when curving
            // TODO: adaptive sampling
            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

            case 'C':
            case 'T':
            case 'S':
            case 'Q':
            case 'A':
                point = path.getPointAtLength(length);
                addPoint(point.x, point.y, 0);
                break;

            }

            // increment by sample value
            length += sampleLength;
        }

        // add remaining segments not passed by sampling
        for (i = 0, il = segmentsQueue.length; i < il; ++i)
            addSegmentPoint(segmentsQueue[i]);

        return points;
    };

    Svg._svgPathToAbsolute = function(path) {
        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
        // Copyright (c) Gavin Kistner
        // http://phrogz.net/js/_ReuseLicense.txt
        // Modifications: tidy formatting and naming
        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
            x = 0, y = 0, len = segs.numberOfItems;

        for (var i = 0; i < len; ++i) {
            var seg = segs.getItem(i),
                segType = seg.pathSegTypeAsLetter;

            if (/[MLHVCSQTA]/.test(segType)) {
                if ('x' in seg) x = seg.x;
                if ('y' in seg) y = seg.y;
            } else {
                if ('x1' in seg) x1 = x + seg.x1;
                if ('x2' in seg) x2 = x + seg.x2;
                if ('y1' in seg) y1 = y + seg.y1;
                if ('y2' in seg) y2 = y + seg.y2;
                if ('x' in seg) x += seg.x;
                if ('y' in seg) y += seg.y;

                switch (segType) {

                case 'm':
                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                    break;
                case 'l':
                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                    break;
                case 'h':
                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                    break;
                case 'v':
                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                    break;
                case 'c':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                    break;
                case 's':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                    break;
                case 'q':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                    break;
                case 't':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                    break;
                case 'a':
                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                    break;
                case 'z':
                case 'Z':
                    x = x0;
                    y = y0;
                    break;

                }
            }

            if (segType == 'M' || segType == 'm') {
                x0 = x;
                y0 = y;
            }
        }
    };

})();
},{"../core/Common":14,"../geometry/Bounds":26}],28:[function(_dereq_,module,exports){
/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/

// TODO: consider params for reusing vector objects

var Vector = {};

module.exports = Vector;

(function() {

    /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */
    Vector.create = function(x, y) {
        return { x: x || 0, y: y || 0 };
    };

    /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */
    Vector.clone = function(vector) {
        return { x: vector.x, y: vector.y };
    };

    /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */
    Vector.magnitude = function(vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    };

    /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */
    Vector.magnitudeSquared = function(vector) {
        return (vector.x * vector.x) + (vector.y * vector.y);
    };

    /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */
    Vector.rotate = function(vector, angle, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = vector.x * cos - vector.y * sin;
        output.y = vector.x * sin + vector.y * cos;
        output.x = x;
        return output;
    };

    /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */
    Vector.rotateAbout = function(vector, angle, point, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
        output.x = x;
        return output;
    };

    /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */
    Vector.normalise = function(vector) {
        var magnitude = Vector.magnitude(vector);
        if (magnitude === 0)
            return { x: 0, y: 0 };
        return { x: vector.x / magnitude, y: vector.y / magnitude };
    };

    /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */
    Vector.dot = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
    };

    /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */
    Vector.cross = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
    };

    /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */
    Vector.cross3 = function(vectorA, vectorB, vectorC) {
        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
    };

    /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */
    Vector.add = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x + vectorB.x;
        output.y = vectorA.y + vectorB.y;
        return output;
    };

    /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */
    Vector.sub = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x - vectorB.x;
        output.y = vectorA.y - vectorB.y;
        return output;
    };

    /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */
    Vector.mult = function(vector, scalar) {
        return { x: vector.x * scalar, y: vector.y * scalar };
    };

    /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */
    Vector.div = function(vector, scalar) {
        return { x: vector.x / scalar, y: vector.y / scalar };
    };

    /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */
    Vector.perp = function(vector, negate) {
        negate = negate === true ? -1 : 1;
        return { x: negate * -vector.y, y: negate * vector.x };
    };

    /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */
    Vector.neg = function(vector) {
        return { x: -vector.x, y: -vector.y };
    };

    /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */
    Vector.angle = function(vectorA, vectorB) {
        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
    };

    /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */
    Vector._temp = [
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create()
    ];

})();
},{}],29:[function(_dereq_,module,exports){
/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/

var Vertices = {};

module.exports = Vertices;

var Vector = _dereq_('../geometry/Vector');
var Common = _dereq_('../core/Common');

(function() {

    /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */
    Vertices.create = function(points, body) {
        var vertices = [];

        for (var i = 0; i < points.length; i++) {
            var point = points[i],
                vertex = {
                    x: point.x,
                    y: point.y,
                    index: i,
                    body: body,
                    isInternal: false
                };

            vertices.push(vertex);
        }

        return vertices;
    };

    /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */
    Vertices.fromPath = function(path, body) {
        var pathPattern = /L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/ig,
            points = [];

        path.replace(pathPattern, function(match, x, y) {
            points.push({ x: parseFloat(x), y: parseFloat(y) });
        });

        return Vertices.create(points, body);
    };

    /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */
    Vertices.centre = function(vertices) {
        var area = Vertices.area(vertices, true),
            centre = { x: 0, y: 0 },
            cross,
            temp,
            j;

        for (var i = 0; i < vertices.length; i++) {
            j = (i + 1) % vertices.length;
            cross = Vector.cross(vertices[i], vertices[j]);
            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
            centre = Vector.add(centre, temp);
        }

        return Vector.div(centre, 6 * area);
    };

    /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */
    Vertices.mean = function(vertices) {
        var average = { x: 0, y: 0 };

        for (var i = 0; i < vertices.length; i++) {
            average.x += vertices[i].x;
            average.y += vertices[i].y;
        }

        return Vector.div(average, vertices.length);
    };

    /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */
    Vertices.area = function(vertices, signed) {
        var area = 0,
            j = vertices.length - 1;

        for (var i = 0; i < vertices.length; i++) {
            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
            j = i;
        }

        if (signed)
            return area / 2;

        return Math.abs(area) / 2;
    };

    /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */
    Vertices.inertia = function(vertices, mass) {
        var numerator = 0,
            denominator = 0,
            v = vertices,
            cross,
            j;

        // find the polygon's moment of inertia, using second moment of area
        // from equations at http://www.physicsforums.com/showthread.php?t=25293
        for (var n = 0; n < v.length; n++) {
            j = (n + 1) % v.length;
            cross = Math.abs(Vector.cross(v[j], v[n]));
            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
            denominator += cross;
        }

        return (mass / 6) * (numerator / denominator);
    };

    /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */
    Vertices.translate = function(vertices, vector, scalar) {
        var i;
        if (scalar) {
            for (i = 0; i < vertices.length; i++) {
                vertices[i].x += vector.x * scalar;
                vertices[i].y += vector.y * scalar;
            }
        } else {
            for (i = 0; i < vertices.length; i++) {
                vertices[i].x += vector.x;
                vertices[i].y += vector.y;
            }
        }

        return vertices;
    };

    /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */
    Vertices.rotate = function(vertices, angle, point) {
        if (angle === 0)
            return;

        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < vertices.length; i++) {
            var vertice = vertices[i],
                dx = vertice.x - point.x,
                dy = vertice.y - point.y;
                
            vertice.x = point.x + (dx * cos - dy * sin);
            vertice.y = point.y + (dx * sin + dy * cos);
        }

        return vertices;
    };

    /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */
    Vertices.contains = function(vertices, point) {
        for (var i = 0; i < vertices.length; i++) {
            var vertice = vertices[i],
                nextVertice = vertices[(i + 1) % vertices.length];
            if ((point.x - vertice.x) * (nextVertice.y - vertice.y) + (point.y - vertice.y) * (vertice.x - nextVertice.x) > 0) {
                return false;
            }
        }

        return true;
    };

    /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */
    Vertices.scale = function(vertices, scaleX, scaleY, point) {
        if (scaleX === 1 && scaleY === 1)
            return vertices;

        point = point || Vertices.centre(vertices);

        var vertex,
            delta;

        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            delta = Vector.sub(vertex, point);
            vertices[i].x = point.x + delta.x * scaleX;
            vertices[i].y = point.y + delta.y * scaleY;
        }

        return vertices;
    };

    /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */
    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
        if (typeof radius === 'number') {
            radius = [radius];
        } else {
            radius = radius || [8];
        }

        // quality defaults to -1, which is auto
        quality = (typeof quality !== 'undefined') ? quality : -1;
        qualityMin = qualityMin || 2;
        qualityMax = qualityMax || 14;

        var newVertices = [];

        for (var i = 0; i < vertices.length; i++) {
            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
                vertex = vertices[i],
                nextVertex = vertices[(i + 1) % vertices.length],
                currentRadius = radius[i < radius.length ? i : radius.length - 1];

            if (currentRadius === 0) {
                newVertices.push(vertex);
                continue;
            }

            var prevNormal = Vector.normalise({ 
                x: vertex.y - prevVertex.y, 
                y: prevVertex.x - vertex.x
            });

            var nextNormal = Vector.normalise({ 
                x: nextVertex.y - vertex.y, 
                y: vertex.x - nextVertex.x
            });

            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

            var precision = quality;

            if (quality === -1) {
                // automatically decide precision
                precision = Math.pow(currentRadius, 0.32) * 1.75;
            }

            precision = Common.clamp(precision, qualityMin, qualityMax);

            // use an even value for precision, more likely to reduce axes by using symmetry
            if (precision % 2 === 1)
                precision += 1;

            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
                theta = alpha / precision;

            for (var j = 0; j < precision; j++) {
                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
            }
        }

        return newVertices;
    };

    /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */
    Vertices.clockwiseSort = function(vertices) {
        var centre = Vertices.mean(vertices);

        vertices.sort(function(vertexA, vertexB) {
            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
        });

        return vertices;
    };

    /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */
    Vertices.isConvex = function(vertices) {
        // http://paulbourke.net/geometry/polygonmesh/
        // Copyright (c) Paul Bourke (use permitted)

        var flag = 0,
            n = vertices.length,
            i,
            j,
            k,
            z;

        if (n < 3)
            return null;

        for (i = 0; i < n; i++) {
            j = (i + 1) % n;
            k = (i + 2) % n;
            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

            if (z < 0) {
                flag |= 1;
            } else if (z > 0) {
                flag |= 2;
            }

            if (flag === 3) {
                return false;
            }
        }

        if (flag !== 0){
            return true;
        } else {
            return null;
        }
    };

    /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */
    Vertices.hull = function(vertices) {
        // http://geomalgorithms.com/a10-_hull-1.html

        var upper = [],
            lower = [], 
            vertex,
            i;

        // sort vertices on x-axis (y-axis for ties)
        vertices = vertices.slice(0);
        vertices.sort(function(vertexA, vertexB) {
            var dx = vertexA.x - vertexB.x;
            return dx !== 0 ? dx : vertexA.y - vertexB.y;
        });

        // build lower hull
        for (i = 0; i < vertices.length; i += 1) {
            vertex = vertices[i];

            while (lower.length >= 2 
                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                lower.pop();
            }

            lower.push(vertex);
        }

        // build upper hull
        for (i = vertices.length - 1; i >= 0; i -= 1) {
            vertex = vertices[i];

            while (upper.length >= 2 
                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                upper.pop();
            }

            upper.push(vertex);
        }

        // concatenation of the lower and upper hulls gives the convex hull
        // omit last points because they are repeated at the beginning of the other list
        upper.pop();
        lower.pop();

        return upper.concat(lower);
    };

})();

},{"../core/Common":14,"../geometry/Vector":28}],30:[function(_dereq_,module,exports){
var Matter = module.exports = _dereq_('../core/Matter');

Matter.Body = _dereq_('../body/Body');
Matter.Composite = _dereq_('../body/Composite');
Matter.World = _dereq_('../body/World');

Matter.Contact = _dereq_('../collision/Contact');
Matter.Detector = _dereq_('../collision/Detector');
Matter.Grid = _dereq_('../collision/Grid');
Matter.Pairs = _dereq_('../collision/Pairs');
Matter.Pair = _dereq_('../collision/Pair');
Matter.Query = _dereq_('../collision/Query');
Matter.Resolver = _dereq_('../collision/Resolver');
Matter.SAT = _dereq_('../collision/SAT');

Matter.Constraint = _dereq_('../constraint/Constraint');
Matter.MouseConstraint = _dereq_('../constraint/MouseConstraint');

Matter.Common = _dereq_('../core/Common');
Matter.Engine = _dereq_('../core/Engine');
Matter.Events = _dereq_('../core/Events');
Matter.Mouse = _dereq_('../core/Mouse');
Matter.Runner = _dereq_('../core/Runner');
Matter.Sleeping = _dereq_('../core/Sleeping');
Matter.Plugin = _dereq_('../core/Plugin');


Matter.Bodies = _dereq_('../factory/Bodies');
Matter.Composites = _dereq_('../factory/Composites');

Matter.Axes = _dereq_('../geometry/Axes');
Matter.Bounds = _dereq_('../geometry/Bounds');
Matter.Svg = _dereq_('../geometry/Svg');
Matter.Vector = _dereq_('../geometry/Vector');
Matter.Vertices = _dereq_('../geometry/Vertices');

Matter.Render = _dereq_('../render/Render');
Matter.RenderPixi = _dereq_('../render/RenderPixi');

// aliases

Matter.World.add = Matter.Composite.add;
Matter.World.remove = Matter.Composite.remove;
Matter.World.addComposite = Matter.Composite.addComposite;
Matter.World.addBody = Matter.Composite.addBody;
Matter.World.addConstraint = Matter.Composite.addConstraint;
Matter.World.clear = Matter.Composite.clear;
Matter.Engine.run = Matter.Runner.run;

},{"../body/Body":1,"../body/Composite":2,"../body/World":3,"../collision/Contact":4,"../collision/Detector":5,"../collision/Grid":6,"../collision/Pair":7,"../collision/Pairs":8,"../collision/Query":9,"../collision/Resolver":10,"../collision/SAT":11,"../constraint/Constraint":12,"../constraint/MouseConstraint":13,"../core/Common":14,"../core/Engine":15,"../core/Events":16,"../core/Matter":17,"../core/Metrics":18,"../core/Mouse":19,"../core/Plugin":20,"../core/Runner":21,"../core/Sleeping":22,"../factory/Bodies":23,"../factory/Composites":24,"../geometry/Axes":25,"../geometry/Bounds":26,"../geometry/Svg":27,"../geometry/Vector":28,"../geometry/Vertices":29,"../render/Render":31,"../render/RenderPixi":32}],31:[function(_dereq_,module,exports){
/**
* The `Matter.Render` module is a simple HTML5 canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/

var Render = {};

module.exports = Render;

var Common = _dereq_('../core/Common');
var Composite = _dereq_('../body/Composite');
var Bounds = _dereq_('../geometry/Bounds');
var Events = _dereq_('../core/Events');
var Grid = _dereq_('../collision/Grid');
var Vector = _dereq_('../geometry/Vector');
var Mouse = _dereq_('../core/Mouse');

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */
    Render.create = function(options) {
        var defaults = {
            controller: Render,
            engine: null,
            element: null,
            canvas: null,
            mouse: null,
            frameRequestId: null,
            options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: '#18181d',
                wireframeBackground: '#0f0f13',
                hasBounds: !!options.bounds,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showBroadphase: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showShadows: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
            }
        };

        var render = Common.extend(defaults, options);

        if (render.canvas) {
            render.canvas.width = render.options.width || render.canvas.width;
            render.canvas.height = render.options.height || render.canvas.height;
        }

        render.mouse = options.mouse;
        render.engine = options.engine;
        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
        render.context = render.canvas.getContext('2d');
        render.textures = {};

        render.bounds = render.bounds || {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: render.canvas.width,
                y: render.canvas.height
            }
        };

        if (render.options.pixelRatio !== 1) {
            Render.setPixelRatio(render, render.options.pixelRatio);
        }

        if (Common.isElement(render.element)) {
            render.element.appendChild(render.canvas);
        } else if (!render.canvas.parentNode) {
            Common.log('Render.create: options.element was undefined, render.canvas was created but not appended', 'warn');
        }

        return render;
    };

    /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */
    Render.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            Render.world(render);
        })();
    };

    /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */
    Render.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
    };

    /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */
    Render.setPixelRatio = function(render, pixelRatio) {
        var options = render.options,
            canvas = render.canvas;

        if (pixelRatio === 'auto') {
            pixelRatio = _getPixelRatio(canvas);
        }

        options.pixelRatio = pixelRatio;
        canvas.setAttribute('data-pixel-ratio', pixelRatio);
        canvas.width = options.width * pixelRatio;
        canvas.height = options.height * pixelRatio;
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
        render.context.scale(pixelRatio, pixelRatio);
    };

    /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */
    Render.lookAt = function(render, objects, padding, center) {
        center = typeof center !== 'undefined' ? center : true;
        objects = Common.isArray(objects) ? objects : [objects];
        padding = padding || {
            x: 0,
            y: 0
        };

        // find bounds of all objects
        var bounds = {
            min: { x: Infinity, y: Infinity },
            max: { x: -Infinity, y: -Infinity }
        };

        for (var i = 0; i < objects.length; i += 1) {
            var object = objects[i],
                min = object.bounds ? object.bounds.min : (object.min || object.position || object),
                max = object.bounds ? object.bounds.max : (object.max || object.position || object);

            if (min && max) {
                if (min.x < bounds.min.x)
                    bounds.min.x = min.x;

                if (max.x > bounds.max.x)
                    bounds.max.x = max.x;

                if (min.y < bounds.min.y)
                    bounds.min.y = min.y;

                if (max.y > bounds.max.y)
                    bounds.max.y = max.y;
            }
        }

        // find ratios
        var width = (bounds.max.x - bounds.min.x) + 2 * padding.x,
            height = (bounds.max.y - bounds.min.y) + 2 * padding.y,
            viewHeight = render.canvas.height,
            viewWidth = render.canvas.width,
            outerRatio = viewWidth / viewHeight,
            innerRatio = width / height,
            scaleX = 1,
            scaleY = 1;

        // find scale factor
        if (innerRatio > outerRatio) {
            scaleY = innerRatio / outerRatio;
        } else {
            scaleX = outerRatio / innerRatio;
        }

        // enable bounds
        render.options.hasBounds = true;

        // position and size
        render.bounds.min.x = bounds.min.x;
        render.bounds.max.x = bounds.min.x + width * scaleX;
        render.bounds.min.y = bounds.min.y;
        render.bounds.max.y = bounds.min.y + height * scaleY;

        // center
        if (center) {
            render.bounds.min.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.max.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.min.y += height * 0.5 - (height * scaleY) * 0.5;
            render.bounds.max.y += height * 0.5 - (height * scaleY) * 0.5;
        }

        // padding
        render.bounds.min.x -= padding.x;
        render.bounds.max.x -= padding.x;
        render.bounds.min.y -= padding.y;
        render.bounds.max.y -= padding.y;

        // update mouse
        if (render.mouse) {
            Mouse.setScale(render.mouse, {
                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
            });

            Mouse.setOffset(render.mouse, render.bounds.min);
        }
    };

    /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */
    Render.startViewTransform = function(render) {
        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
            boundsHeight = render.bounds.max.y - render.bounds.min.y,
            boundsScaleX = boundsWidth / render.options.width,
            boundsScaleY = boundsHeight / render.options.height;

        render.context.scale(1 / boundsScaleX, 1 / boundsScaleY);
        render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
    };

    /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */
    Render.endViewTransform = function(render) {
        render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
    };

    /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */
    Render.world = function(render) {
        var engine = render.engine,
            world = engine.world,
            canvas = render.canvas,
            context = render.context,
            options = render.options,
            allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world),
            background = options.wireframes ? options.wireframeBackground : options.background,
            bodies = [],
            constraints = [],
            i;

        var event = {
            timestamp: engine.timing.timestamp
        };

        Events.trigger(render, 'beforeRender', event);

        // apply background if it has changed
        if (render.currentBackground !== background)
            _applyBackground(render, background);

        // clear the canvas with a transparent fill, to allow the canvas background to show
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = "transparent";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'source-over';

        // handle bounds
        if (options.hasBounds) {
            // filter out bodies that are not in view
            for (i = 0; i < allBodies.length; i++) {
                var body = allBodies[i];
                if (Bounds.overlaps(body.bounds, render.bounds))
                    bodies.push(body);
            }

            // filter out constraints that are not in view
            for (i = 0; i < allConstraints.length; i++) {
                var constraint = allConstraints[i],
                    bodyA = constraint.bodyA,
                    bodyB = constraint.bodyB,
                    pointAWorld = constraint.pointA,
                    pointBWorld = constraint.pointB;

                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

                if (!pointAWorld || !pointBWorld)
                    continue;

                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
            }

            // transform the view
            Render.startViewTransform(render);

            // update mouse
            if (render.mouse) {
                Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
                });

                Mouse.setOffset(render.mouse, render.bounds.min);
            }
        } else {
            constraints = allConstraints;
            bodies = allBodies;
        }

        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
            // fully featured rendering of bodies
            Render.bodies(render, bodies, context);
        } else {
            if (options.showConvexHulls)
                Render.bodyConvexHulls(render, bodies, context);

            // optimised method for wireframes only
            Render.bodyWireframes(render, bodies, context);
        }

        if (options.showBounds)
            Render.bodyBounds(render, bodies, context);

        if (options.showAxes || options.showAngleIndicator)
            Render.bodyAxes(render, bodies, context);

        if (options.showPositions)
            Render.bodyPositions(render, bodies, context);

        if (options.showVelocity)
            Render.bodyVelocity(render, bodies, context);

        if (options.showIds)
            Render.bodyIds(render, bodies, context);

        if (options.showSeparations)
            Render.separations(render, engine.pairs.list, context);

        if (options.showCollisions)
            Render.collisions(render, engine.pairs.list, context);

        if (options.showVertexNumbers)
            Render.vertexNumbers(render, bodies, context);

        if (options.showMousePosition)
            Render.mousePosition(render, render.mouse, context);

        Render.constraints(constraints, context);

        if (options.showBroadphase && engine.broadphase.controller === Grid)
            Render.grid(render, engine.broadphase, context);

        if (options.showDebug)
            Render.debug(render, context);

        if (options.hasBounds) {
            // revert view transforms
            Render.endViewTransform(render);
        }

        Events.trigger(render, 'afterRender', event);
    };

    /**
     * Description
     * @private
     * @method debug
     * @param {render} render
     * @param {RenderingContext} context
     */
    Render.debug = function(render, context) {
        var c = context,
            engine = render.engine,
            world = engine.world,
            metrics = engine.metrics,
            options = render.options,
            bodies = Composite.allBodies(world),
            space = "    ";

        if (engine.timing.timestamp - (render.debugTimestamp || 0) >= 500) {
            var text = "";

            if (metrics.timing) {
                text += "fps: " + Math.round(metrics.timing.fps) + space;
            }


            render.debugString = text;
            render.debugTimestamp = engine.timing.timestamp;
        }

        if (render.debugString) {
            c.font = "12px Arial";

            if (options.wireframes) {
                c.fillStyle = 'rgba(255,255,255,0.5)';
            } else {
                c.fillStyle = 'rgba(0,0,0,0.5)';
            }

            var split = render.debugString.split('\n');

            for (var i = 0; i < split.length; i++) {
                c.fillText(split[i], 50, 50 + i * 18);
            }
        }
    };

    /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */
    Render.constraints = function(constraints, context) {
        var c = context;

        for (var i = 0; i < constraints.length; i++) {
            var constraint = constraints[i];

            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                continue;

            var bodyA = constraint.bodyA,
                bodyB = constraint.bodyB,
                start,
                end;

            if (bodyA) {
                start = Vector.add(bodyA.position, constraint.pointA);
            } else {
                start = constraint.pointA;
            }

            if (constraint.render.type === 'pin') {
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.closePath();
            } else {
                if (bodyB) {
                    end = Vector.add(bodyB.position, constraint.pointB);
                } else {
                    end = constraint.pointB;
                }

                c.beginPath();
                c.moveTo(start.x, start.y);

                if (constraint.render.type === 'spring') {
                    var delta = Vector.sub(end, start),
                        normal = Vector.perp(Vector.normalise(delta)),
                        coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)),
                        offset;

                    for (var j = 1; j < coils; j += 1) {
                        offset = j % 2 === 0 ? 1 : -1;

                        c.lineTo(
                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
                            start.y + delta.y * (j / coils) + normal.y * offset * 4
                        );
                    }
                }

                c.lineTo(end.x, end.y);
            }

            if (constraint.render.lineWidth) {
                c.lineWidth = constraint.render.lineWidth;
                c.strokeStyle = constraint.render.strokeStyle;
                c.stroke();
            }

            if (constraint.render.anchors) {
                c.fillStyle = constraint.render.strokeStyle;
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                c.closePath();
                c.fill();
            }
        }
    };

    /**
     * Description
     * @private
     * @method bodyShadows
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyShadows = function(render, bodies, context) {
        var c = context,
            engine = render.engine;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.render.visible)
                continue;

            if (body.circleRadius) {
                c.beginPath();
                c.arc(body.position.x, body.position.y, body.circleRadius, 0, 2 * Math.PI);
                c.closePath();
            } else {
                c.beginPath();
                c.moveTo(body.vertices[0].x, body.vertices[0].y);
                for (var j = 1; j < body.vertices.length; j++) {
                    c.lineTo(body.vertices[j].x, body.vertices[j].y);
                }
                c.closePath();
            }

            var distanceX = body.position.x - render.options.width * 0.5,
                distanceY = body.position.y - render.options.height * 0.2,
                distance = Math.abs(distanceX) + Math.abs(distanceY);

            c.shadowColor = 'rgba(0,0,0,0.15)';
            c.shadowOffsetX = 0.05 * distanceX;
            c.shadowOffsetY = 0.05 * distanceY;
            c.shadowBlur = 1 + 12 * Math.min(1, distance / 1000);

            c.fill();

            c.shadowColor = null;
            c.shadowOffsetX = null;
            c.shadowOffsetY = null;
            c.shadowBlur = null;
        }
    };

    /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodies = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            showInternalEdges = options.showInternalEdges || !options.wireframes,
            body,
            part,
            i,
            k;

        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                if (!part.render.visible)
                    continue;

                if (options.showSleeping && body.isSleeping) {
                    c.globalAlpha = 0.5 * part.render.opacity;
                } else if (part.render.opacity !== 1) {
                    c.globalAlpha = part.render.opacity;
                }

                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                    // part sprite
                    var sprite = part.render.sprite,
                        texture = _getTexture(render, sprite.texture);

                    c.translate(part.position.x, part.position.y);
                    c.rotate(part.angle);

                    c.drawImage(
                        texture,
                        texture.width * -sprite.xOffset * sprite.xScale,
                        texture.height * -sprite.yOffset * sprite.yScale,
                        texture.width * sprite.xScale,
                        texture.height * sprite.yScale
                    );

                    // revert translation, hopefully faster than save / restore
                    c.rotate(-part.angle);
                    c.translate(-part.position.x, -part.position.y);
                } else {
                    // part polygon
                    if (part.circleRadius) {
                        c.beginPath();
                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                    } else {
                        c.beginPath();
                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

                        for (var j = 1; j < part.vertices.length; j++) {
                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
                            } else {
                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
                            }

                            if (part.vertices[j].isInternal && !showInternalEdges) {
                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                        }

                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        c.closePath();
                    }

                    if (!options.wireframes) {
                        c.fillStyle = part.render.fillStyle;

                        if (part.render.lineWidth) {
                            c.lineWidth = part.render.lineWidth;
                            c.strokeStyle = part.render.strokeStyle;
                            c.stroke();
                        }

                        c.fill();
                    } else {
                        c.lineWidth = 1;
                        c.strokeStyle = '#bbb';
                        c.stroke();
                    }
                }

                c.globalAlpha = 1;
            }
        }
    };

    /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyWireframes = function(render, bodies, context) {
        var c = context,
            showInternalEdges = render.options.showInternalEdges,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render all bodies
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                c.moveTo(part.vertices[0].x, part.vertices[0].y);

                for (j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    } else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }

                    if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                }

                c.lineTo(part.vertices[0].x, part.vertices[0].y);
            }
        }

        c.lineWidth = 1;
        c.strokeStyle = '#bbb';
        c.stroke();
    };

    /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyConvexHulls = function(render, bodies, context) {
        var c = context,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render convex hulls
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible || body.parts.length === 1)
                continue;

            c.moveTo(body.vertices[0].x, body.vertices[0].y);

            for (j = 1; j < body.vertices.length; j++) {
                c.lineTo(body.vertices[j].x, body.vertices[j].y);
            }

            c.lineTo(body.vertices[0].x, body.vertices[0].y);
        }

        c.lineWidth = 1;
        c.strokeStyle = 'rgba(255,255,255,0.2)';
        c.stroke();
    };

    /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.vertexNumbers = function(render, bodies, context) {
        var c = context,
            i,
            j,
            k;

        for (i = 0; i < bodies.length; i++) {
            var parts = bodies[i].parts;
            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                var part = parts[k];
                for (j = 0; j < part.vertices.length; j++) {
                    c.fillStyle = 'rgba(255,255,255,0.2)';
                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                }
            }
        }
    };

    /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */
    Render.mousePosition = function(render, mouse, context) {
        var c = context;
        c.fillStyle = 'rgba(255,255,255,0.8)';
        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
    };

    /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyBounds = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.render.visible) {
                var parts = bodies[i].parts;
                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,255,255,0.08)';
        } else {
            c.strokeStyle = 'rgba(0,0,0,0.1)';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyAxes = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            part,
            i,
            j,
            k;

        c.beginPath();

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                parts = body.parts;

            if (!body.render.visible)
                continue;

            if (options.showAxes) {
                // render all axes
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        var axis = part.axes[k];
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                    }
                }
            } else {
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        // render a single axis indicator
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2,
                                 (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
                    }
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'indianred';
            c.lineWidth = 1;
        } else {
            c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            c.globalCompositeOperation = 'overlay';
            c.lineWidth = 2;
        }

        c.stroke();
        c.globalCompositeOperation = 'source-over';
    };

    /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyPositions = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            body,
            part,
            i,
            k;

        c.beginPath();

        // render current positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = 0; k < body.parts.length; k++) {
                part = body.parts[k];
                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'indianred';
        } else {
            c.fillStyle = 'rgba(0,0,0,0.5)';
        }
        c.fill();

        c.beginPath();

        // render previous positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];
            if (body.render.visible) {
                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        c.fillStyle = 'rgba(255,165,0,0.8)';
        c.fill();
    };

    /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyVelocity = function(render, bodies, context) {
        var c = context;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.render.visible)
                continue;

            c.moveTo(body.position.x, body.position.y);
            c.lineTo(body.position.x + (body.position.x - body.positionPrev.x) * 2, body.position.y + (body.position.y - body.positionPrev.y) * 2);
        }

        c.lineWidth = 3;
        c.strokeStyle = 'cornflowerblue';
        c.stroke();
    };

    /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyIds = function(render, bodies, context) {
        var c = context,
            i,
            j;

        for (i = 0; i < bodies.length; i++) {
            if (!bodies[i].render.visible)
                continue;

            var parts = bodies[i].parts;
            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                var part = parts[j];
                c.font = "12px Arial";
                c.fillStyle = 'rgba(255,255,255,0.5)';
                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
            }
        }
    };

    /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.collisions = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render collision positions
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            for (j = 0; j < pair.activeContacts.length; j++) {
                var contact = pair.activeContacts[j],
                    vertex = contact.vertex;
                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'rgba(255,255,255,0.7)';
        } else {
            c.fillStyle = 'orange';
        }
        c.fill();

        c.beginPath();

        // render collision normals
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;

            if (pair.activeContacts.length > 0) {
                var normalPosX = pair.activeContacts[0].vertex.x,
                    normalPosY = pair.activeContacts[0].vertex.y;

                if (pair.activeContacts.length === 2) {
                    normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                    normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                }

                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                } else {
                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                }

                c.lineTo(normalPosX, normalPosY);
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.7)';
        } else {
            c.strokeStyle = 'orange';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.separations = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render separations
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            bodyA = collision.bodyA;
            bodyB = collision.bodyB;

            var k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyB.isStatic) k = 0;

            c.moveTo(bodyB.position.x, bodyB.position.y);
            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

            k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyA.isStatic) k = 0;

            c.moveTo(bodyA.position.x, bodyA.position.y);
            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.5)';
        } else {
            c.strokeStyle = 'orange';
        }
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method grid
     * @param {render} render
     * @param {grid} grid
     * @param {RenderingContext} context
     */
    Render.grid = function(render, grid, context) {
        var c = context,
            options = render.options;

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,180,0,0.1)';
        } else {
            c.strokeStyle = 'rgba(255,180,0,0.5)';
        }

        c.beginPath();

        var bucketKeys = Common.keys(grid.buckets);

        for (var i = 0; i < bucketKeys.length; i++) {
            var bucketId = bucketKeys[i];

            if (grid.buckets[bucketId].length < 2)
                continue;

            var region = bucketId.split(/C|R/);
            c.rect(0.5 + parseInt(region[1], 10) * grid.bucketWidth,
                    0.5 + parseInt(region[2], 10) * grid.bucketHeight,
                    grid.bucketWidth,
                    grid.bucketHeight);
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */
    Render.inspector = function(inspector, context) {
        var engine = inspector.engine,
            selected = inspector.selected,
            render = inspector.render,
            options = render.options,
            bounds;

        if (options.hasBounds) {
            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
                boundsHeight = render.bounds.max.y - render.bounds.min.y,
                boundsScaleX = boundsWidth / render.options.width,
                boundsScaleY = boundsHeight / render.options.height;

            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
            context.translate(-render.bounds.min.x, -render.bounds.min.y);
        }

        for (var i = 0; i < selected.length; i++) {
            var item = selected[i].data;

            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.9)';
            context.setLineDash([1,2]);

            switch (item.type) {

            case 'body':

                // render body selections
                bounds = item.bounds;
                context.beginPath();
                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3),
                             Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                context.closePath();
                context.stroke();

                break;

            case 'constraint':

                // render constraint selections
                var point = item.pointA;
                if (item.bodyA)
                    point = item.pointB;
                context.beginPath();
                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                context.closePath();
                context.stroke();

                break;

            }

            context.setLineDash([]);
            context.translate(-0.5, -0.5);
        }

        // render selection region
        if (inspector.selectStart !== null) {
            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.6)';
            context.fillStyle = 'rgba(255,165,0,0.1)';
            bounds = inspector.selectBounds;
            context.beginPath();
            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y),
                         Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
            context.closePath();
            context.stroke();
            context.fill();
            context.translate(-0.5, -0.5);
        }

        if (options.hasBounds)
            context.setTransform(1, 0, 0, 1, 0, 0);
    };

    /**
     * Description
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */
    var _createCanvas = function(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.oncontextmenu = function() { return false; };
        canvas.onselectstart = function() { return false; };
        return canvas;
    };

    /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */
    var _getPixelRatio = function(canvas) {
        var context = canvas.getContext('2d'),
            devicePixelRatio = window.devicePixelRatio || 1,
            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
                                      || context.backingStorePixelRatio || 1;

        return devicePixelRatio / backingStorePixelRatio;
    };

    /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */
    var _getTexture = function(render, imagePath) {
        var image = render.textures[imagePath];

        if (image)
            return image;

        image = render.textures[imagePath] = new Image();
        image.src = imagePath;

        return image;
    };

    /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */
    var _applyBackground = function(render, background) {
        var cssBackground = background;

        if (/(jpg|gif|png)$/.test(background))
            cssBackground = 'url(' + background + ')';

        render.canvas.style.background = cssBackground;
        render.canvas.style.backgroundSize = "contain";
        render.currentBackground = background;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A back-reference to the `Matter.Render` module.
     *
     * @property controller
     * @type render
     */

    /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */

    /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */

    /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */

    /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */

    /**
     * The target width in pixels of the `render.canvas` to be created.
     *
     * @property options.width
     * @type number
     * @default 800
     */

    /**
     * The target height in pixels of the `render.canvas` to be created.
     *
     * @property options.height
     * @type number
     * @default 600
     */

    /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */

    /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */

    /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */

    /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */

})();

},{"../body/Composite":2,"../collision/Grid":6,"../core/Common":14,"../core/Events":16,"../core/Mouse":19,"../geometry/Bounds":26,"../geometry/Vector":28}],32:[function(_dereq_,module,exports){
/**
* The `Matter.RenderPixi` module is an example renderer using pixi.js.
* See also `Matter.Render` for a canvas based renderer.
*
* @class RenderPixi
* @deprecated the Matter.RenderPixi module will soon be removed from the Matter.js core.
* It will likely be moved to its own repository (but maintenance will be limited).
*/

var RenderPixi = {};

module.exports = RenderPixi;

var Bounds = _dereq_('../geometry/Bounds');
var Composite = _dereq_('../body/Composite');
var Common = _dereq_('../core/Common');
var Events = _dereq_('../core/Events');
var Vector = _dereq_('../geometry/Vector');

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame 
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };
   
        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame 
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }
    
    /**
     * Creates a new Pixi.js WebGL renderer
     * @method create
     * @param {object} options
     * @return {RenderPixi} A new renderer
     * @deprecated
     */
    RenderPixi.create = function(options) {
        Common.warn('RenderPixi.create: Matter.RenderPixi is deprecated (see docs)');

        var defaults = {
            controller: RenderPixi,
            engine: null,
            element: null,
            frameRequestId: null,
            canvas: null,
            renderer: null,
            container: null,
            spriteContainer: null,
            pixiOptions: null,
            options: {
                width: 800,
                height: 600,
                background: '#fafafa',
                wireframeBackground: '#222',
                hasBounds: false,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showBroadphase: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showShadows: false
            }
        };

        var render = Common.extend(defaults, options),
            transparent = !render.options.wireframes && render.options.background === 'transparent';

        // init pixi
        render.pixiOptions = render.pixiOptions || {
            view: render.canvas,
            transparent: transparent,
            antialias: true,
            backgroundColor: options.background
        };

        render.mouse = options.mouse;
        render.engine = options.engine;
        render.renderer = render.renderer || new PIXI.WebGLRenderer(render.options.width, render.options.height, render.pixiOptions);
        render.container = render.container || new PIXI.Container();
        render.spriteContainer = render.spriteContainer || new PIXI.Container();
        render.canvas = render.canvas || render.renderer.view;
        render.bounds = render.bounds || { 
            min: {
                x: 0,
                y: 0
            }, 
            max: { 
                x: render.options.width,
                y: render.options.height
            }
        };

        // event listeners
        Events.on(render.engine, 'beforeUpdate', function() {
            RenderPixi.clear(render);
        });

        // caches
        render.textures = {};
        render.sprites = {};
        render.primitives = {};

        // use a sprite batch for performance
        render.container.addChild(render.spriteContainer);

        // insert canvas
        if (Common.isElement(render.element)) {
            render.element.appendChild(render.canvas);
        } else {
            Common.warn('No "render.element" passed, "render.canvas" was not inserted into document.');
        }

        // prevent menus on canvas
        render.canvas.oncontextmenu = function() { return false; };
        render.canvas.onselectstart = function() { return false; };

        return render;
    };

    /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     * @deprecated
     */
    RenderPixi.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            RenderPixi.world(render);
        })();
    };

    /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     * @deprecated
     */
    RenderPixi.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
    };

    /**
     * Clears the scene graph
     * @method clear
     * @param {RenderPixi} render
     * @deprecated
     */
    RenderPixi.clear = function(render) {
        var container = render.container,
            spriteContainer = render.spriteContainer;

        // clear stage container
        while (container.children[0]) { 
            container.removeChild(container.children[0]); 
        }

        // clear sprite batch
        while (spriteContainer.children[0]) { 
            spriteContainer.removeChild(spriteContainer.children[0]); 
        }

        var bgSprite = render.sprites['bg-0'];

        // clear caches
        render.textures = {};
        render.sprites = {};
        render.primitives = {};

        // set background sprite
        render.sprites['bg-0'] = bgSprite;
        if (bgSprite)
            container.addChildAt(bgSprite, 0);

        // add sprite batch back into container
        render.container.addChild(render.spriteContainer);

        // reset background state
        render.currentBackground = null;

        // reset bounds transforms
        container.scale.set(1, 1);
        container.position.set(0, 0);
    };

    /**
     * Sets the background of the canvas 
     * @method setBackground
     * @param {RenderPixi} render
     * @param {string} background
     * @deprecated
     */
    RenderPixi.setBackground = function(render, background) {
        if (render.currentBackground !== background) {
            var isColor = background.indexOf && background.indexOf('#') !== -1,
                bgSprite = render.sprites['bg-0'];

            if (isColor) {
                // if solid background color
                var color = Common.colorToNumber(background);
                render.renderer.backgroundColor = color;

                // remove background sprite if existing
                if (bgSprite)
                    render.container.removeChild(bgSprite); 
            } else {
                // initialise background sprite if needed
                if (!bgSprite) {
                    var texture = _getTexture(render, background);

                    bgSprite = render.sprites['bg-0'] = new PIXI.Sprite(texture);
                    bgSprite.position.x = 0;
                    bgSprite.position.y = 0;
                    render.container.addChildAt(bgSprite, 0);
                }
            }

            render.currentBackground = background;
        }
    };

    /**
     * Description
     * @method world
     * @param {engine} engine
     * @deprecated
     */
    RenderPixi.world = function(render) {
        var engine = render.engine,
            world = engine.world,
            renderer = render.renderer,
            container = render.container,
            options = render.options,
            bodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world),
            constraints = [],
            i;

        if (options.wireframes) {
            RenderPixi.setBackground(render, options.wireframeBackground);
        } else {
            RenderPixi.setBackground(render, options.background);
        }

        // handle bounds
        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
            boundsHeight = render.bounds.max.y - render.bounds.min.y,
            boundsScaleX = boundsWidth / render.options.width,
            boundsScaleY = boundsHeight / render.options.height;

        if (options.hasBounds) {
            // Hide bodies that are not in view
            for (i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                body.render.sprite.visible = Bounds.overlaps(body.bounds, render.bounds);
            }

            // filter out constraints that are not in view
            for (i = 0; i < allConstraints.length; i++) {
                var constraint = allConstraints[i],
                    bodyA = constraint.bodyA,
                    bodyB = constraint.bodyB,
                    pointAWorld = constraint.pointA,
                    pointBWorld = constraint.pointB;

                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

                if (!pointAWorld || !pointBWorld)
                    continue;

                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
            }

            // transform the view
            container.scale.set(1 / boundsScaleX, 1 / boundsScaleY);
            container.position.set(-render.bounds.min.x * (1 / boundsScaleX), -render.bounds.min.y * (1 / boundsScaleY));
        } else {
            constraints = allConstraints;
        }

        for (i = 0; i < bodies.length; i++)
            RenderPixi.body(render, bodies[i]);

        for (i = 0; i < constraints.length; i++)
            RenderPixi.constraint(render, constraints[i]);

        renderer.render(container);
    };


    /**
     * Description
     * @method constraint
     * @param {engine} engine
     * @param {constraint} constraint
     * @deprecated
     */
    RenderPixi.constraint = function(render, constraint) {
        var engine = render.engine,
            bodyA = constraint.bodyA,
            bodyB = constraint.bodyB,
            pointA = constraint.pointA,
            pointB = constraint.pointB,
            container = render.container,
            constraintRender = constraint.render,
            primitiveId = 'c-' + constraint.id,
            primitive = render.primitives[primitiveId];

        // initialise constraint primitive if not existing
        if (!primitive)
            primitive = render.primitives[primitiveId] = new PIXI.Graphics();

        // don't render if constraint does not have two end points
        if (!constraintRender.visible || !constraint.pointA || !constraint.pointB) {
            primitive.clear();
            return;
        }

        // add to scene graph if not already there
        if (Common.indexOf(container.children, primitive) === -1)
            container.addChild(primitive);

        // render the constraint on every update, since they can change dynamically
        primitive.clear();
        primitive.beginFill(0, 0);
        primitive.lineStyle(constraintRender.lineWidth, Common.colorToNumber(constraintRender.strokeStyle), 1);
        
        if (bodyA) {
            primitive.moveTo(bodyA.position.x + pointA.x, bodyA.position.y + pointA.y);
        } else {
            primitive.moveTo(pointA.x, pointA.y);
        }

        if (bodyB) {
            primitive.lineTo(bodyB.position.x + pointB.x, bodyB.position.y + pointB.y);
        } else {
            primitive.lineTo(pointB.x, pointB.y);
        }

        primitive.endFill();
    };
    
    /**
     * Description
     * @method body
     * @param {engine} engine
     * @param {body} body
     * @deprecated
     */
    RenderPixi.body = function(render, body) {
        var engine = render.engine,
            bodyRender = body.render;

        if (!bodyRender.visible)
            return;

        if (bodyRender.sprite && bodyRender.sprite.texture) {
            var spriteId = 'b-' + body.id,
                sprite = render.sprites[spriteId],
                spriteContainer = render.spriteContainer;

            // initialise body sprite if not existing
            if (!sprite)
                sprite = render.sprites[spriteId] = _createBodySprite(render, body);

            // add to scene graph if not already there
            if (Common.indexOf(spriteContainer.children, sprite) === -1)
                spriteContainer.addChild(sprite);

            // update body sprite
            sprite.position.x = body.position.x;
            sprite.position.y = body.position.y;
            sprite.rotation = body.angle;
            sprite.scale.x = bodyRender.sprite.xScale || 1;
            sprite.scale.y = bodyRender.sprite.yScale || 1;
        } else {
            var primitiveId = 'b-' + body.id,
                primitive = render.primitives[primitiveId],
                container = render.container;

            // initialise body primitive if not existing
            if (!primitive) {
                primitive = render.primitives[primitiveId] = _createBodyPrimitive(render, body);
                primitive.initialAngle = body.angle;
            }

            // add to scene graph if not already there
            if (Common.indexOf(container.children, primitive) === -1)
                container.addChild(primitive);

            // update body primitive
            primitive.position.x = body.position.x;
            primitive.position.y = body.position.y;
            primitive.rotation = body.angle - primitive.initialAngle;
        }
    };

    /**
     * Creates a body sprite
     * @method _createBodySprite
     * @private
     * @param {RenderPixi} render
     * @param {body} body
     * @return {PIXI.Sprite} sprite
     * @deprecated
     */
    var _createBodySprite = function(render, body) {
        var bodyRender = body.render,
            texturePath = bodyRender.sprite.texture,
            texture = _getTexture(render, texturePath),
            sprite = new PIXI.Sprite(texture);

        sprite.anchor.x = body.render.sprite.xOffset;
        sprite.anchor.y = body.render.sprite.yOffset;

        return sprite;
    };

    /**
     * Creates a body primitive
     * @method _createBodyPrimitive
     * @private
     * @param {RenderPixi} render
     * @param {body} body
     * @return {PIXI.Graphics} graphics
     * @deprecated
     */
    var _createBodyPrimitive = function(render, body) {
        var bodyRender = body.render,
            options = render.options,
            primitive = new PIXI.Graphics(),
            fillStyle = Common.colorToNumber(bodyRender.fillStyle),
            strokeStyle = Common.colorToNumber(bodyRender.strokeStyle),
            strokeStyleIndicator = Common.colorToNumber(bodyRender.strokeStyle),
            strokeStyleWireframe = Common.colorToNumber('#bbb'),
            strokeStyleWireframeIndicator = Common.colorToNumber('#CD5C5C'),
            part;

        primitive.clear();

        // handle compound parts
        for (var k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
            part = body.parts[k];

            if (!options.wireframes) {
                primitive.beginFill(fillStyle, 1);
                primitive.lineStyle(bodyRender.lineWidth, strokeStyle, 1);
            } else {
                primitive.beginFill(0, 0);
                primitive.lineStyle(1, strokeStyleWireframe, 1);
            }

            primitive.moveTo(part.vertices[0].x - body.position.x, part.vertices[0].y - body.position.y);

            for (var j = 1; j < part.vertices.length; j++) {
                primitive.lineTo(part.vertices[j].x - body.position.x, part.vertices[j].y - body.position.y);
            }

            primitive.lineTo(part.vertices[0].x - body.position.x, part.vertices[0].y - body.position.y);

            primitive.endFill();

            // angle indicator
            if (options.showAngleIndicator || options.showAxes) {
                primitive.beginFill(0, 0);

                if (options.wireframes) {
                    primitive.lineStyle(1, strokeStyleWireframeIndicator, 1);
                } else {
                    primitive.lineStyle(1, strokeStyleIndicator);
                }

                primitive.moveTo(part.position.x - body.position.x, part.position.y - body.position.y);
                primitive.lineTo(((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2 - body.position.x), 
                                 ((part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2 - body.position.y));

                primitive.endFill();
            }
        }

        return primitive;
    };

    /**
     * Gets the requested texture (a PIXI.Texture) via its path
     * @method _getTexture
     * @private
     * @param {RenderPixi} render
     * @param {string} imagePath
     * @return {PIXI.Texture} texture
     * @deprecated
     */
    var _getTexture = function(render, imagePath) {
        var texture = render.textures[imagePath];

        if (!texture)
            texture = render.textures[imagePath] = PIXI.Texture.fromImage(imagePath);

        return texture;
    };

})();

},{"../body/Composite":2,"../core/Common":14,"../core/Events":16,"../geometry/Bounds":26,"../geometry/Vector":28}]},{},[30])(30)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./src/util.js");



const { Engine, World, Body, Bodies, Render, Events } = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a;

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
        this.body = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["createPlayerBody"])(x, y, 50, { restitution: 0.1 });
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

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: createPlayerBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayerBody", function() { return createPlayerBody; });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);


function createPlayerBody(x, y, radius, options) {
    options.inertia = Infinity;
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
        vertices: matter_js__WEBPACK_IMPORTED_MODULE_0__["Vertices"].fromPath(path)
    };

    if (options.chamfer) {
        var chamfer = options.chamfer;
        polygon.vertices = matter_js__WEBPACK_IMPORTED_MODULE_0__["Vertices"].chamfer(polygon.vertices, chamfer.radius, 
            chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
        delete options.chamfer;
    }

    return matter_js__WEBPACK_IMPORTED_MODULE_0__["Body"].create(matter_js__WEBPACK_IMPORTED_MODULE_0__["Common"].extend({}, polygon, options));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHRlci1qcy9idWlsZC9tYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLEdBQUcsSUFBc0QsRUFBRSxtQkFBbUIsS0FBSyxV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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYSxHQUFHLGVBQWUsR0FBRyxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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LDhHQUE4RyxpQkFBaUI7QUFDL0g7QUFDQSx3RkFBd0YsaUJBQWlCO0FBQ3pHLDhHQUE4RyxpQkFBaUI7QUFDL0g7QUFDQTs7O0FBR0E7QUFDQSxtQjs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQW1EOztBQUU1QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUI7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLGtCQUFrQixrREFBUTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGtEQUFRO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDhDQUFJLFFBQVEsZ0RBQU0sVUFBVTtBQUN2QyxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuKiBtYXR0ZXItanMgMC4xNC4yIGJ5IEBsaWFicnUgMjAxOC0wNi0xMVxuKiBodHRwOi8vYnJtLmlvL21hdHRlci1qcy9cbiogTGljZW5zZSBNSVRcbiovXG5cbi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgTGlhbSBCcnVtbWl0dCBhbmQgY29udHJpYnV0b3JzLlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcuTWF0dGVyID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgYm9keSBtb2RlbHMuXG4qIEEgYE1hdHRlci5Cb2R5YCBpcyBhIHJpZ2lkIGJvZHkgdGhhdCBjYW4gYmUgc2ltdWxhdGVkIGJ5IGEgYE1hdHRlci5FbmdpbmVgLlxuKiBGYWN0b3JpZXMgZm9yIGNvbW1vbmx5IHVzZWQgYm9keSBjb25maWd1cmF0aW9ucyAoc3VjaCBhcyByZWN0YW5nbGVzLCBjaXJjbGVzIGFuZCBvdGhlciBwb2x5Z29ucykgY2FuIGJlIGZvdW5kIGluIHRoZSBtb2R1bGUgYE1hdHRlci5Cb2RpZXNgLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuXG4qIEBjbGFzcyBCb2R5XG4qL1xuXG52YXIgQm9keSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZHk7XG5cbnZhciBWZXJ0aWNlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlcnRpY2VzJyk7XG52YXIgVmVjdG9yID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVjdG9yJyk7XG52YXIgU2xlZXBpbmcgPSBfZGVyZXFfKCcuLi9jb3JlL1NsZWVwaW5nJyk7XG52YXIgUmVuZGVyID0gX2RlcmVxXygnLi4vcmVuZGVyL1JlbmRlcicpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG52YXIgQm91bmRzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQm91bmRzJyk7XG52YXIgQXhlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0F4ZXMnKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgQm9keS5faW5lcnRpYVNjYWxlID0gNDtcbiAgICBCb2R5Ll9uZXh0Q29sbGlkaW5nR3JvdXBJZCA9IDE7XG4gICAgQm9keS5fbmV4dE5vbkNvbGxpZGluZ0dyb3VwSWQgPSAtMTtcbiAgICBCb2R5Ll9uZXh0Q2F0ZWdvcnkgPSAweDAwMDE7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogVmVydGljZXMgbXVzdCBiZSBzcGVjaWZpZWQgaW4gY2xvY2t3aXNlIG9yZGVyLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2JvZHl9IGJvZHlcbiAgICAgKi9cbiAgICBCb2R5LmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgaWQ6IENvbW1vbi5uZXh0SWQoKSxcbiAgICAgICAgICAgIHR5cGU6ICdib2R5JyxcbiAgICAgICAgICAgIGxhYmVsOiAnQm9keScsXG4gICAgICAgICAgICBwYXJ0czogW10sXG4gICAgICAgICAgICBwbHVnaW46IHt9LFxuICAgICAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgoJ0wgMCAwIEwgNDAgMCBMIDQwIDQwIEwgMCA0MCcpLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgZm9yY2U6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgdG9ycXVlOiAwLFxuICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRJbXB1bHNlOiB7IHg6IDAsIHk6IDAsIGFuZ2xlOiAwIH0sXG4gICAgICAgICAgICB0b3RhbENvbnRhY3RzOiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBhbmd1bGFyU3BlZWQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBhbmd1bGFyVmVsb2NpdHk6IDAsXG4gICAgICAgICAgICBpc1NlbnNvcjogZmFsc2UsXG4gICAgICAgICAgICBpc1N0YXRpYzogZmFsc2UsXG4gICAgICAgICAgICBpc1NsZWVwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdGlvbjogMCxcbiAgICAgICAgICAgIHNsZWVwVGhyZXNob2xkOiA2MCxcbiAgICAgICAgICAgIGRlbnNpdHk6IDAuMDAxLFxuICAgICAgICAgICAgcmVzdGl0dXRpb246IDAsXG4gICAgICAgICAgICBmcmljdGlvbjogMC4xLFxuICAgICAgICAgICAgZnJpY3Rpb25TdGF0aWM6IDAuNSxcbiAgICAgICAgICAgIGZyaWN0aW9uQWlyOiAwLjAxLFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IDB4MDAwMSxcbiAgICAgICAgICAgICAgICBtYXNrOiAweEZGRkZGRkZGLFxuICAgICAgICAgICAgICAgIGdyb3VwOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xvcDogMC4wNSxcbiAgICAgICAgICAgIHRpbWVTY2FsZTogMSxcbiAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICBzcHJpdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgeFNjYWxlOiAxLFxuICAgICAgICAgICAgICAgICAgICB5U2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIHhPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHlPZmZzZXQ6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBib2R5ID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgX2luaXRQcm9wZXJ0aWVzKGJvZHksIG9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBncm91cCBpbmRleCBmb3Igd2hpY2ggYm9kaWVzIHdpbGwgY29sbGlkZS5cbiAgICAgKiBJZiBgaXNOb25Db2xsaWRpbmdgIGlzIGB0cnVlYCwgcmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgZ3JvdXAgaW5kZXggZm9yIHdoaWNoIGJvZGllcyB3aWxsIF9ub3RfIGNvbGxpZGUuXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICogQG1ldGhvZCBuZXh0R3JvdXBcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtpc05vbkNvbGxpZGluZz1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFVuaXF1ZSBncm91cCBpbmRleFxuICAgICAqL1xuICAgIEJvZHkubmV4dEdyb3VwID0gZnVuY3Rpb24oaXNOb25Db2xsaWRpbmcpIHtcbiAgICAgICAgaWYgKGlzTm9uQ29sbGlkaW5nKVxuICAgICAgICAgICAgcmV0dXJuIEJvZHkuX25leHROb25Db2xsaWRpbmdHcm91cElkLS07XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuX25leHRDb2xsaWRpbmdHcm91cElkKys7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdW5pcXVlIGNhdGVnb3J5IGJpdGZpZWxkIChzdGFydGluZyBhZnRlciB0aGUgaW5pdGlhbCBkZWZhdWx0IGNhdGVnb3J5IGAweDAwMDFgKS5cbiAgICAgKiBUaGVyZSBhcmUgMzIgYXZhaWxhYmxlLiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIG5leHRDYXRlZ29yeVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIGNhdGVnb3J5IGJpdGZpZWxkXG4gICAgICovXG4gICAgQm9keS5uZXh0Q2F0ZWdvcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgQm9keS5fbmV4dENhdGVnb3J5ID0gQm9keS5fbmV4dENhdGVnb3J5IDw8IDE7XG4gICAgICAgIHJldHVybiBCb2R5Ll9uZXh0Q2F0ZWdvcnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIGJvZHkgcHJvcGVydGllcy5cbiAgICAgKiBAbWV0aG9kIF9pbml0UHJvcGVydGllc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt9IFtvcHRpb25zXVxuICAgICAqL1xuICAgIHZhciBfaW5pdFByb3BlcnRpZXMgPSBmdW5jdGlvbihib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIC8vIGluaXQgcmVxdWlyZWQgcHJvcGVydGllcyAob3JkZXIgaXMgaW1wb3J0YW50KVxuICAgICAgICBCb2R5LnNldChib2R5LCB7XG4gICAgICAgICAgICBib3VuZHM6IGJvZHkuYm91bmRzIHx8IEJvdW5kcy5jcmVhdGUoYm9keS52ZXJ0aWNlcyksXG4gICAgICAgICAgICBwb3NpdGlvblByZXY6IGJvZHkucG9zaXRpb25QcmV2IHx8IFZlY3Rvci5jbG9uZShib2R5LnBvc2l0aW9uKSxcbiAgICAgICAgICAgIGFuZ2xlUHJldjogYm9keS5hbmdsZVByZXYgfHwgYm9keS5hbmdsZSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBib2R5LnZlcnRpY2VzLFxuICAgICAgICAgICAgcGFydHM6IGJvZHkucGFydHMgfHwgW2JvZHldLFxuICAgICAgICAgICAgaXNTdGF0aWM6IGJvZHkuaXNTdGF0aWMsXG4gICAgICAgICAgICBpc1NsZWVwaW5nOiBib2R5LmlzU2xlZXBpbmcsXG4gICAgICAgICAgICBwYXJlbnQ6IGJvZHkucGFyZW50IHx8IGJvZHlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgVmVydGljZXMucm90YXRlKGJvZHkudmVydGljZXMsIGJvZHkuYW5nbGUsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICBBeGVzLnJvdGF0ZShib2R5LmF4ZXMsIGJvZHkuYW5nbGUpO1xuICAgICAgICBCb3VuZHMudXBkYXRlKGJvZHkuYm91bmRzLCBib2R5LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcblxuICAgICAgICAvLyBhbGxvdyBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgcHJvcGVydGllc1xuICAgICAgICBCb2R5LnNldChib2R5LCB7XG4gICAgICAgICAgICBheGVzOiBvcHRpb25zLmF4ZXMgfHwgYm9keS5heGVzLFxuICAgICAgICAgICAgYXJlYTogb3B0aW9ucy5hcmVhIHx8IGJvZHkuYXJlYSxcbiAgICAgICAgICAgIG1hc3M6IG9wdGlvbnMubWFzcyB8fCBib2R5Lm1hc3MsXG4gICAgICAgICAgICBpbmVydGlhOiBvcHRpb25zLmluZXJ0aWEgfHwgYm9keS5pbmVydGlhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbmRlciBwcm9wZXJ0aWVzXG4gICAgICAgIHZhciBkZWZhdWx0RmlsbFN0eWxlID0gKGJvZHkuaXNTdGF0aWMgPyAnIzJlMmI0NCcgOiBDb21tb24uY2hvb3NlKFsnIzAwNkJBNicsICcjMDQ5NkZGJywgJyNGRkJDNDInLCAnI0Q4MTE1OScsICcjOEYyRDU2J10pKSxcbiAgICAgICAgICAgIGRlZmF1bHRTdHJva2VTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgYm9keS5yZW5kZXIuZmlsbFN0eWxlID0gYm9keS5yZW5kZXIuZmlsbFN0eWxlIHx8IGRlZmF1bHRGaWxsU3R5bGU7XG4gICAgICAgIGJvZHkucmVuZGVyLnN0cm9rZVN0eWxlID0gYm9keS5yZW5kZXIuc3Ryb2tlU3R5bGUgfHwgZGVmYXVsdFN0cm9rZVN0eWxlO1xuICAgICAgICBib2R5LnJlbmRlci5zcHJpdGUueE9mZnNldCArPSAtKGJvZHkuYm91bmRzLm1pbi54IC0gYm9keS5wb3NpdGlvbi54KSAvIChib2R5LmJvdW5kcy5tYXgueCAtIGJvZHkuYm91bmRzLm1pbi54KTtcbiAgICAgICAgYm9keS5yZW5kZXIuc3ByaXRlLnlPZmZzZXQgKz0gLShib2R5LmJvdW5kcy5taW4ueSAtIGJvZHkucG9zaXRpb24ueSkgLyAoYm9keS5ib3VuZHMubWF4LnkgLSBib2R5LmJvdW5kcy5taW4ueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgcHJvcGVydHkgYW5kIGEgdmFsdWUgKG9yIG1hcCBvZiksIHNldHMgdGhlIHByb3BlcnR5KHMpIG9uIHRoZSBib2R5LCB1c2luZyB0aGUgYXBwcm9wcmlhdGUgc2V0dGVyIGZ1bmN0aW9ucyBpZiB0aGV5IGV4aXN0LlxuICAgICAqIFByZWZlciB0byB1c2UgdGhlIGFjdHVhbCBzZXR0ZXIgZnVuY3Rpb25zIGluIHBlcmZvcm1hbmNlIGNyaXRpY2FsIHNpdHVhdGlvbnMuXG4gICAgICogQG1ldGhvZCBzZXRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge30gc2V0dGluZ3MgQSBwcm9wZXJ0eSBuYW1lIChvciBtYXAgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzKSB0byBzZXQgb24gdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHt9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgaWYgYHNldHRpbmdzYCBpcyBhIHNpbmdsZSBwcm9wZXJ0eSBuYW1lLlxuICAgICAqL1xuICAgIEJvZHkuc2V0ID0gZnVuY3Rpb24oYm9keSwgc2V0dGluZ3MsIHZhbHVlKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eTtcblxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBzZXR0aW5ncztcbiAgICAgICAgICAgIHNldHRpbmdzID0ge307XG4gICAgICAgICAgICBzZXR0aW5nc1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHZhbHVlID0gc2V0dGluZ3NbcHJvcGVydHldO1xuXG4gICAgICAgICAgICBpZiAoIXNldHRpbmdzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICBjYXNlICdpc1N0YXRpYyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRTdGF0aWMoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaXNTbGVlcGluZyc6XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21hc3MnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZW5zaXR5JzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldERlbnNpdHkoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5lcnRpYSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRJbmVydGlhKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZlcnRpY2VzJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFZlcnRpY2VzKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aW9uJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FuZ2xlJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEFuZ2xlKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZlbG9jaXR5JzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFZlbG9jaXR5KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FuZ3VsYXJWZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRBbmd1bGFyVmVsb2NpdHkoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGFydHMnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0UGFydHMoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBib2R5W3Byb3BlcnR5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9keSBhcyBzdGF0aWMsIGluY2x1ZGluZyBpc1N0YXRpYyBmbGFnIGFuZCBzZXR0aW5nIG1hc3MgYW5kIGluZXJ0aWEgdG8gSW5maW5pdHkuXG4gICAgICogQG1ldGhvZCBzZXRTdGF0aWNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IGlzU3RhdGljXG4gICAgICovXG4gICAgQm9keS5zZXRTdGF0aWMgPSBmdW5jdGlvbihib2R5LCBpc1N0YXRpYykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcbiAgICAgICAgICAgIHBhcnQuaXNTdGF0aWMgPSBpc1N0YXRpYztcblxuICAgICAgICAgICAgaWYgKGlzU3RhdGljKSB7XG4gICAgICAgICAgICAgICAgcGFydC5fb3JpZ2luYWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RpdHV0aW9uOiBwYXJ0LnJlc3RpdHV0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmcmljdGlvbjogcGFydC5mcmljdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbWFzczogcGFydC5tYXNzLFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhOiBwYXJ0LmluZXJ0aWEsXG4gICAgICAgICAgICAgICAgICAgIGRlbnNpdHk6IHBhcnQuZGVuc2l0eSxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZU1hc3M6IHBhcnQuaW52ZXJzZU1hc3MsXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VJbmVydGlhOiBwYXJ0LmludmVyc2VJbmVydGlhXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHBhcnQucmVzdGl0dXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQuZnJpY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIHBhcnQubWFzcyA9IHBhcnQuaW5lcnRpYSA9IHBhcnQuZGVuc2l0eSA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIHBhcnQuaW52ZXJzZU1hc3MgPSBwYXJ0LmludmVyc2VJbmVydGlhID0gMDtcblxuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb25QcmV2LnggPSBwYXJ0LnBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvblByZXYueSA9IHBhcnQucG9zaXRpb24ueTtcbiAgICAgICAgICAgICAgICBwYXJ0LmFuZ2xlUHJldiA9IHBhcnQuYW5nbGU7XG4gICAgICAgICAgICAgICAgcGFydC5hbmd1bGFyVmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQuc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQuYW5ndWxhclNwZWVkID0gMDtcbiAgICAgICAgICAgICAgICBwYXJ0Lm1vdGlvbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQuX29yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgcGFydC5yZXN0aXR1dGlvbiA9IHBhcnQuX29yaWdpbmFsLnJlc3RpdHV0aW9uO1xuICAgICAgICAgICAgICAgIHBhcnQuZnJpY3Rpb24gPSBwYXJ0Ll9vcmlnaW5hbC5mcmljdGlvbjtcbiAgICAgICAgICAgICAgICBwYXJ0Lm1hc3MgPSBwYXJ0Ll9vcmlnaW5hbC5tYXNzO1xuICAgICAgICAgICAgICAgIHBhcnQuaW5lcnRpYSA9IHBhcnQuX29yaWdpbmFsLmluZXJ0aWE7XG4gICAgICAgICAgICAgICAgcGFydC5kZW5zaXR5ID0gcGFydC5fb3JpZ2luYWwuZGVuc2l0eTtcbiAgICAgICAgICAgICAgICBwYXJ0LmludmVyc2VNYXNzID0gcGFydC5fb3JpZ2luYWwuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgcGFydC5pbnZlcnNlSW5lcnRpYSA9IHBhcnQuX29yaWdpbmFsLmludmVyc2VJbmVydGlhO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIHBhcnQuX29yaWdpbmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1hc3Mgb2YgdGhlIGJvZHkuIEludmVyc2UgbWFzcywgZGVuc2l0eSBhbmQgaW5lcnRpYSBhcmUgYXV0b21hdGljYWxseSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIGNoYW5nZS5cbiAgICAgKiBAbWV0aG9kIHNldE1hc3NcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWFzc1xuICAgICAqL1xuICAgIEJvZHkuc2V0TWFzcyA9IGZ1bmN0aW9uKGJvZHksIG1hc3MpIHtcbiAgICAgICAgdmFyIG1vbWVudCA9IGJvZHkuaW5lcnRpYSAvIChib2R5Lm1hc3MgLyA2KTtcbiAgICAgICAgYm9keS5pbmVydGlhID0gbW9tZW50ICogKG1hc3MgLyA2KTtcbiAgICAgICAgYm9keS5pbnZlcnNlSW5lcnRpYSA9IDEgLyBib2R5LmluZXJ0aWE7XG5cbiAgICAgICAgYm9keS5tYXNzID0gbWFzcztcbiAgICAgICAgYm9keS5pbnZlcnNlTWFzcyA9IDEgLyBib2R5Lm1hc3M7XG4gICAgICAgIGJvZHkuZGVuc2l0eSA9IGJvZHkubWFzcyAvIGJvZHkuYXJlYTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZGVuc2l0eSBvZiB0aGUgYm9keS4gTWFzcyBhbmQgaW5lcnRpYSBhcmUgYXV0b21hdGljYWxseSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIGNoYW5nZS5cbiAgICAgKiBAbWV0aG9kIHNldERlbnNpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVuc2l0eVxuICAgICAqL1xuICAgIEJvZHkuc2V0RGVuc2l0eSA9IGZ1bmN0aW9uKGJvZHksIGRlbnNpdHkpIHtcbiAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIGRlbnNpdHkgKiBib2R5LmFyZWEpO1xuICAgICAgICBib2R5LmRlbnNpdHkgPSBkZW5zaXR5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtb21lbnQgb2YgaW5lcnRpYSAoaS5lLiBzZWNvbmQgbW9tZW50IG9mIGFyZWEpIG9mIHRoZSBib2R5IG9mIHRoZSBib2R5LiBcbiAgICAgKiBJbnZlcnNlIGluZXJ0aWEgaXMgYXV0b21hdGljYWxseSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIGNoYW5nZS4gTWFzcyBpcyBub3QgY2hhbmdlZC5cbiAgICAgKiBAbWV0aG9kIHNldEluZXJ0aWFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5lcnRpYVxuICAgICAqL1xuICAgIEJvZHkuc2V0SW5lcnRpYSA9IGZ1bmN0aW9uKGJvZHksIGluZXJ0aWEpIHtcbiAgICAgICAgYm9keS5pbmVydGlhID0gaW5lcnRpYTtcbiAgICAgICAgYm9keS5pbnZlcnNlSW5lcnRpYSA9IDEgLyBib2R5LmluZXJ0aWE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvZHkncyB2ZXJ0aWNlcyBhbmQgdXBkYXRlcyBib2R5IHByb3BlcnRpZXMgYWNjb3JkaW5nbHksIGluY2x1ZGluZyBpbmVydGlhLCBhcmVhIGFuZCBtYXNzICh3aXRoIHJlc3BlY3QgdG8gYGJvZHkuZGVuc2l0eWApLlxuICAgICAqIFZlcnRpY2VzIHdpbGwgYmUgYXV0b21hdGljYWxseSB0cmFuc2Zvcm1lZCB0byBiZSBvcmllbnRhdGVkIGFyb3VuZCB0aGVpciBjZW50cmUgb2YgbWFzcyBhcyB0aGUgb3JpZ2luLlxuICAgICAqIFRoZXkgYXJlIHRoZW4gYXV0b21hdGljYWxseSB0cmFuc2xhdGVkIHRvIHdvcmxkIHNwYWNlIGJhc2VkIG9uIGBib2R5LnBvc2l0aW9uYC5cbiAgICAgKlxuICAgICAqIFRoZSBgdmVydGljZXNgIGFyZ3VtZW50IHNob3VsZCBiZSBwYXNzZWQgYXMgYW4gYXJyYXkgb2YgYE1hdHRlci5WZWN0b3JgIHBvaW50cyAob3IgYSBgTWF0dGVyLlZlcnRpY2VzYCBhcnJheSkuXG4gICAgICogVmVydGljZXMgbXVzdCBmb3JtIGEgY29udmV4IGh1bGwsIGNvbmNhdmUgaHVsbHMgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNldFZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3JbXX0gdmVydGljZXNcbiAgICAgKi9cbiAgICBCb2R5LnNldFZlcnRpY2VzID0gZnVuY3Rpb24oYm9keSwgdmVydGljZXMpIHtcbiAgICAgICAgLy8gY2hhbmdlIHZlcnRpY2VzXG4gICAgICAgIGlmICh2ZXJ0aWNlc1swXS5ib2R5ID09PSBib2R5KSB7XG4gICAgICAgICAgICBib2R5LnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LnZlcnRpY2VzID0gVmVydGljZXMuY3JlYXRlKHZlcnRpY2VzLCBib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGJvZHkuYXhlcyA9IEF4ZXMuZnJvbVZlcnRpY2VzKGJvZHkudmVydGljZXMpO1xuICAgICAgICBib2R5LmFyZWEgPSBWZXJ0aWNlcy5hcmVhKGJvZHkudmVydGljZXMpO1xuICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgYm9keS5kZW5zaXR5ICogYm9keS5hcmVhKTtcblxuICAgICAgICAvLyBvcmllbnQgdmVydGljZXMgYXJvdW5kIHRoZSBjZW50cmUgb2YgbWFzcyBhdCBvcmlnaW4gKDAsIDApXG4gICAgICAgIHZhciBjZW50cmUgPSBWZXJ0aWNlcy5jZW50cmUoYm9keS52ZXJ0aWNlcyk7XG4gICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShib2R5LnZlcnRpY2VzLCBjZW50cmUsIC0xKTtcblxuICAgICAgICAvLyB1cGRhdGUgaW5lcnRpYSB3aGlsZSB2ZXJ0aWNlcyBhcmUgYXQgb3JpZ2luICgwLCAwKVxuICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgQm9keS5faW5lcnRpYVNjYWxlICogVmVydGljZXMuaW5lcnRpYShib2R5LnZlcnRpY2VzLCBib2R5Lm1hc3MpKTtcblxuICAgICAgICAvLyB1cGRhdGUgZ2VvbWV0cnlcbiAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKGJvZHkudmVydGljZXMsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICBCb3VuZHMudXBkYXRlKGJvZHkuYm91bmRzLCBib2R5LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcGFydHMgb2YgdGhlIGBib2R5YCBhbmQgdXBkYXRlcyBtYXNzLCBpbmVydGlhIGFuZCBjZW50cm9pZC5cbiAgICAgKiBFYWNoIHBhcnQgd2lsbCBoYXZlIGl0cyBwYXJlbnQgc2V0IHRvIGBib2R5YC5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSBjb252ZXggaHVsbCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY29tcHV0ZWQgYW5kIHNldCBvbiBgYm9keWAsIHVubGVzcyBgYXV0b0h1bGxgIGlzIHNldCB0byBgZmFsc2UuYFxuICAgICAqIE5vdGUgdGhhdCB0aGlzIG1ldGhvZCB3aWxsIGVuc3VyZSB0aGF0IHRoZSBmaXJzdCBwYXJ0IGluIGBib2R5LnBhcnRzYCB3aWxsIGFsd2F5cyBiZSB0aGUgYGJvZHlgLlxuICAgICAqIEBtZXRob2Qgc2V0UGFydHNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0gW2JvZHldIHBhcnRzXG4gICAgICogQHBhcmFtIHtib29sfSBbYXV0b0h1bGw9dHJ1ZV1cbiAgICAgKi9cbiAgICBCb2R5LnNldFBhcnRzID0gZnVuY3Rpb24oYm9keSwgcGFydHMsIGF1dG9IdWxsKSB7XG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIC8vIGFkZCBhbGwgdGhlIHBhcnRzLCBlbnN1cmluZyB0aGF0IHRoZSBmaXJzdCBwYXJ0IGlzIGFsd2F5cyB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgwKTtcbiAgICAgICAgYm9keS5wYXJ0cy5sZW5ndGggPSAwO1xuICAgICAgICBib2R5LnBhcnRzLnB1c2goYm9keSk7XG4gICAgICAgIGJvZHkucGFyZW50ID0gYm9keTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gYm9keSkge1xuICAgICAgICAgICAgICAgIHBhcnQucGFyZW50ID0gYm9keTtcbiAgICAgICAgICAgICAgICBib2R5LnBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keS5wYXJ0cy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgYXV0b0h1bGwgPSB0eXBlb2YgYXV0b0h1bGwgIT09ICd1bmRlZmluZWQnID8gYXV0b0h1bGwgOiB0cnVlO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIGNvbnZleCBodWxsIG9mIGFsbCBwYXJ0cyB0byBzZXQgb24gdGhlIHBhcmVudCBib2R5XG4gICAgICAgIGlmIChhdXRvSHVsbCkge1xuICAgICAgICAgICAgdmFyIHZlcnRpY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLmNvbmNhdChwYXJ0c1tpXS52ZXJ0aWNlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFZlcnRpY2VzLmNsb2Nrd2lzZVNvcnQodmVydGljZXMpO1xuXG4gICAgICAgICAgICB2YXIgaHVsbCA9IFZlcnRpY2VzLmh1bGwodmVydGljZXMpLFxuICAgICAgICAgICAgICAgIGh1bGxDZW50cmUgPSBWZXJ0aWNlcy5jZW50cmUoaHVsbCk7XG5cbiAgICAgICAgICAgIEJvZHkuc2V0VmVydGljZXMoYm9keSwgaHVsbCk7XG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUoYm9keS52ZXJ0aWNlcywgaHVsbENlbnRyZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdW0gdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICB2YXIgdG90YWwgPSBCb2R5Ll90b3RhbFByb3BlcnRpZXMoYm9keSk7XG5cbiAgICAgICAgYm9keS5hcmVhID0gdG90YWwuYXJlYTtcbiAgICAgICAgYm9keS5wYXJlbnQgPSBib2R5O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnggPSB0b3RhbC5jZW50cmUueDtcbiAgICAgICAgYm9keS5wb3NpdGlvbi55ID0gdG90YWwuY2VudHJlLnk7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSB0b3RhbC5jZW50cmUueDtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IHRvdGFsLmNlbnRyZS55O1xuXG4gICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCB0b3RhbC5tYXNzKTtcbiAgICAgICAgQm9keS5zZXRJbmVydGlhKGJvZHksIHRvdGFsLmluZXJ0aWEpO1xuICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHRvdGFsLmNlbnRyZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBib2R5IGluc3RhbnRseS4gVmVsb2NpdHksIGFuZ2xlLCBmb3JjZSBldGMuIGFyZSB1bmNoYW5nZWQuXG4gICAgICogQG1ldGhvZCBzZXRQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb3NpdGlvblxuICAgICAqL1xuICAgIEJvZHkuc2V0UG9zaXRpb24gPSBmdW5jdGlvbihib2R5LCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKHBvc2l0aW9uLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCArPSBkZWx0YS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IGRlbHRhLnk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gZGVsdGEueDtcbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBkZWx0YS55O1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGRlbHRhKTtcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFuZ2xlIG9mIHRoZSBib2R5IGluc3RhbnRseS4gQW5ndWxhciB2ZWxvY2l0eSwgcG9zaXRpb24sIGZvcmNlIGV0Yy4gYXJlIHVuY2hhbmdlZC5cbiAgICAgKiBAbWV0aG9kIHNldEFuZ2xlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgQm9keS5zZXRBbmdsZSA9IGZ1bmN0aW9uKGJvZHksIGFuZ2xlKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IGFuZ2xlIC0gYm9keS5hbmdsZTtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgKz0gZGVsdGE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LmFuZ2xlICs9IGRlbHRhO1xuICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGRlbHRhLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIEF4ZXMucm90YXRlKHBhcnQuYXhlcywgZGVsdGEpO1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBWZWN0b3Iucm90YXRlQWJvdXQocGFydC5wb3NpdGlvbiwgZGVsdGEsIGJvZHkucG9zaXRpb24sIHBhcnQucG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpbmVhciB2ZWxvY2l0eSBvZiB0aGUgYm9keSBpbnN0YW50bHkuIFBvc2l0aW9uLCBhbmdsZSwgZm9yY2UgZXRjLiBhcmUgdW5jaGFuZ2VkLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKiBAbWV0aG9kIHNldFZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlbG9jaXR5XG4gICAgICovXG4gICAgQm9keS5zZXRWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHksIHZlbG9jaXR5KSB7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBib2R5LnBvc2l0aW9uLnggLSB2ZWxvY2l0eS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55IC0gdmVsb2NpdHkueTtcbiAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gdmVsb2NpdHkueDtcbiAgICAgICAgYm9keS52ZWxvY2l0eS55ID0gdmVsb2NpdHkueTtcbiAgICAgICAgYm9keS5zcGVlZCA9IFZlY3Rvci5tYWduaXR1ZGUoYm9keS52ZWxvY2l0eSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFuZ3VsYXIgdmVsb2NpdHkgb2YgdGhlIGJvZHkgaW5zdGFudGx5LiBQb3NpdGlvbiwgYW5nbGUsIGZvcmNlIGV0Yy4gYXJlIHVuY2hhbmdlZC4gU2VlIGFsc28gYEJvZHkuYXBwbHlGb3JjZWAuXG4gICAgICogQG1ldGhvZCBzZXRBbmd1bGFyVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldEFuZ3VsYXJWZWxvY2l0eSA9IGZ1bmN0aW9uKGJvZHksIHZlbG9jaXR5KSB7XG4gICAgICAgIGJvZHkuYW5nbGVQcmV2ID0gYm9keS5hbmdsZSAtIHZlbG9jaXR5O1xuICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgICBib2R5LmFuZ3VsYXJTcGVlZCA9IE1hdGguYWJzKGJvZHkuYW5ndWxhclZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYSBib2R5IGJ5IGEgZ2l2ZW4gdmVjdG9yIHJlbGF0aXZlIHRvIGl0cyBjdXJyZW50IHBvc2l0aW9uLCB3aXRob3V0IGltcGFydGluZyBhbnkgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdHJhbnNsYXRpb25cbiAgICAgKi9cbiAgICBCb2R5LnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGJvZHksIHRyYW5zbGF0aW9uKSB7XG4gICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgVmVjdG9yLmFkZChib2R5LnBvc2l0aW9uLCB0cmFuc2xhdGlvbikpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGEgYm9keSBieSBhIGdpdmVuIGFuZ2xlIHJlbGF0aXZlIHRvIGl0cyBjdXJyZW50IGFuZ2xlLCB3aXRob3V0IGltcGFydGluZyBhbnkgYW5ndWxhciB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvblxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcG9pbnRdXG4gICAgICovXG4gICAgQm9keS5yb3RhdGUgPSBmdW5jdGlvbihib2R5LCByb3RhdGlvbiwgcG9pbnQpIHtcbiAgICAgICAgaWYgKCFwb2ludCkge1xuICAgICAgICAgICAgQm9keS5zZXRBbmdsZShib2R5LCBib2R5LmFuZ2xlICsgcm90YXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKSxcbiAgICAgICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbiksXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbiksXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIChkeCAqIHNpbiArIGR5ICogY29zKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkuc2V0QW5nbGUoYm9keSwgYm9keS5hbmdsZSArIHJvdGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIGJvZHksIGluY2x1ZGluZyB1cGRhdGluZyBwaHlzaWNhbCBwcm9wZXJ0aWVzIChtYXNzLCBhcmVhLCBheGVzLCBpbmVydGlhKSwgZnJvbSBhIHdvcmxkLXNwYWNlIHBvaW50IChkZWZhdWx0IGlzIGJvZHkgY2VudHJlKS5cbiAgICAgKiBAbWV0aG9kIHNjYWxlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW3BvaW50XVxuICAgICAqL1xuICAgIEJvZHkuc2NhbGUgPSBmdW5jdGlvbihib2R5LCBzY2FsZVgsIHNjYWxlWSwgcG9pbnQpIHtcbiAgICAgICAgdmFyIHRvdGFsQXJlYSA9IDAsXG4gICAgICAgICAgICB0b3RhbEluZXJ0aWEgPSAwO1xuXG4gICAgICAgIHBvaW50ID0gcG9pbnQgfHwgYm9keS5wb3NpdGlvbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcblxuICAgICAgICAgICAgLy8gc2NhbGUgdmVydGljZXNcbiAgICAgICAgICAgIFZlcnRpY2VzLnNjYWxlKHBhcnQudmVydGljZXMsIHNjYWxlWCwgc2NhbGVZLCBwb2ludCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBwYXJ0LmF4ZXMgPSBBeGVzLmZyb21WZXJ0aWNlcyhwYXJ0LnZlcnRpY2VzKTtcbiAgICAgICAgICAgIHBhcnQuYXJlYSA9IFZlcnRpY2VzLmFyZWEocGFydC52ZXJ0aWNlcyk7XG4gICAgICAgICAgICBCb2R5LnNldE1hc3MocGFydCwgYm9keS5kZW5zaXR5ICogcGFydC5hcmVhKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGluZXJ0aWEgKHJlcXVpcmVzIHZlcnRpY2VzIHRvIGJlIGF0IG9yaWdpbilcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCB7IHg6IC1wYXJ0LnBvc2l0aW9uLngsIHk6IC1wYXJ0LnBvc2l0aW9uLnkgfSk7XG4gICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEocGFydCwgQm9keS5faW5lcnRpYVNjYWxlICogVmVydGljZXMuaW5lcnRpYShwYXJ0LnZlcnRpY2VzLCBwYXJ0Lm1hc3MpKTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCB7IHg6IHBhcnQucG9zaXRpb24ueCwgeTogcGFydC5wb3NpdGlvbi55IH0pO1xuXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbEFyZWEgKz0gcGFydC5hcmVhO1xuICAgICAgICAgICAgICAgIHRvdGFsSW5lcnRpYSArPSBwYXJ0LmluZXJ0aWE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNjYWxlIHBvc2l0aW9uXG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggPSBwb2ludC54ICsgKHBhcnQucG9zaXRpb24ueCAtIHBvaW50LngpICogc2NhbGVYO1xuICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ID0gcG9pbnQueSArIChwYXJ0LnBvc2l0aW9uLnkgLSBwb2ludC55KSAqIHNjYWxlWTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvdW5kc1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgcGFyZW50IGJvZHlcbiAgICAgICAgaWYgKGJvZHkucGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgYm9keS5hcmVhID0gdG90YWxBcmVhO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgYm9keS5kZW5zaXR5ICogdG90YWxBcmVhKTtcbiAgICAgICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdG90YWxJbmVydGlhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBjaXJjbGVzXG4gICAgICAgIGlmIChib2R5LmNpcmNsZVJhZGl1cykgeyBcbiAgICAgICAgICAgIGlmIChzY2FsZVggPT09IHNjYWxlWSkge1xuICAgICAgICAgICAgICAgIGJvZHkuY2lyY2xlUmFkaXVzICo9IHNjYWxlWDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYm9keSBpcyBubyBsb25nZXIgYSBjaXJjbGVcbiAgICAgICAgICAgICAgICBib2R5LmNpcmNsZVJhZGl1cyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBzaW11bGF0aW9uIHN0ZXAgZm9yIHRoZSBnaXZlbiBgYm9keWAsIGluY2x1ZGluZyB1cGRhdGluZyBwb3NpdGlvbiBhbmQgYW5nbGUgdXNpbmcgVmVybGV0IGludGVncmF0aW9uLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhVGltZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29ycmVjdGlvblxuICAgICAqL1xuICAgIEJvZHkudXBkYXRlID0gZnVuY3Rpb24oYm9keSwgZGVsdGFUaW1lLCB0aW1lU2NhbGUsIGNvcnJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGRlbHRhVGltZVNxdWFyZWQgPSBNYXRoLnBvdyhkZWx0YVRpbWUgKiB0aW1lU2NhbGUgKiBib2R5LnRpbWVTY2FsZSwgMik7XG5cbiAgICAgICAgLy8gZnJvbSB0aGUgcHJldmlvdXMgc3RlcFxuICAgICAgICB2YXIgZnJpY3Rpb25BaXIgPSAxIC0gYm9keS5mcmljdGlvbkFpciAqIHRpbWVTY2FsZSAqIGJvZHkudGltZVNjYWxlLFxuICAgICAgICAgICAgdmVsb2NpdHlQcmV2WCA9IGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngsXG4gICAgICAgICAgICB2ZWxvY2l0eVByZXZZID0gYm9keS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvblByZXYueTtcblxuICAgICAgICAvLyB1cGRhdGUgdmVsb2NpdHkgd2l0aCBWZXJsZXQgaW50ZWdyYXRpb25cbiAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gKHZlbG9jaXR5UHJldlggKiBmcmljdGlvbkFpciAqIGNvcnJlY3Rpb24pICsgKGJvZHkuZm9yY2UueCAvIGJvZHkubWFzcykgKiBkZWx0YVRpbWVTcXVhcmVkO1xuICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSAodmVsb2NpdHlQcmV2WSAqIGZyaWN0aW9uQWlyICogY29ycmVjdGlvbikgKyAoYm9keS5mb3JjZS55IC8gYm9keS5tYXNzKSAqIGRlbHRhVGltZVNxdWFyZWQ7XG5cbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGJvZHkucG9zaXRpb24ueDtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGJvZHkucG9zaXRpb24ueTtcbiAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IGJvZHkudmVsb2NpdHkueDtcbiAgICAgICAgYm9keS5wb3NpdGlvbi55ICs9IGJvZHkudmVsb2NpdHkueTtcblxuICAgICAgICAvLyB1cGRhdGUgYW5ndWxhciB2ZWxvY2l0eSB3aXRoIFZlcmxldCBpbnRlZ3JhdGlvblxuICAgICAgICBib2R5LmFuZ3VsYXJWZWxvY2l0eSA9ICgoYm9keS5hbmdsZSAtIGJvZHkuYW5nbGVQcmV2KSAqIGZyaWN0aW9uQWlyICogY29ycmVjdGlvbikgKyAoYm9keS50b3JxdWUgLyBib2R5LmluZXJ0aWEpICogZGVsdGFUaW1lU3F1YXJlZDtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlO1xuICAgICAgICBib2R5LmFuZ2xlICs9IGJvZHkuYW5ndWxhclZlbG9jaXR5O1xuXG4gICAgICAgIC8vIHRyYWNrIHNwZWVkIGFuZCBhY2NlbGVyYXRpb25cbiAgICAgICAgYm9keS5zcGVlZCA9IFZlY3Rvci5tYWduaXR1ZGUoYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gTWF0aC5hYnMoYm9keS5hbmd1bGFyVmVsb2NpdHkpO1xuXG4gICAgICAgIC8vIHRyYW5zZm9ybSB0aGUgYm9keSBnZW9tZXRyeVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcblxuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gYm9keS52ZWxvY2l0eS54O1xuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBib2R5LnZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChib2R5LmFuZ3VsYXJWZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIFZlcnRpY2VzLnJvdGF0ZShwYXJ0LnZlcnRpY2VzLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgQXhlcy5yb3RhdGUocGFydC5heGVzLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBib2R5LmFuZ3VsYXJWZWxvY2l0eSwgYm9keS5wb3NpdGlvbiwgcGFydC5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGEgZm9yY2UgdG8gYSBib2R5IGZyb20gYSBnaXZlbiB3b3JsZC1zcGFjZSBwb3NpdGlvbiwgaW5jbHVkaW5nIHJlc3VsdGluZyB0b3JxdWUuXG4gICAgICogQG1ldGhvZCBhcHBseUZvcmNlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGZvcmNlXG4gICAgICovXG4gICAgQm9keS5hcHBseUZvcmNlID0gZnVuY3Rpb24oYm9keSwgcG9zaXRpb24sIGZvcmNlKSB7XG4gICAgICAgIGJvZHkuZm9yY2UueCArPSBmb3JjZS54O1xuICAgICAgICBib2R5LmZvcmNlLnkgKz0gZm9yY2UueTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHsgeDogcG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb24ueSB9O1xuICAgICAgICBib2R5LnRvcnF1ZSArPSBvZmZzZXQueCAqIGZvcmNlLnkgLSBvZmZzZXQueSAqIGZvcmNlLng7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bXMgb2YgdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keS5cbiAgICAgKiBAbWV0aG9kIF90b3RhbFByb3BlcnRpZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge31cbiAgICAgKi9cbiAgICBCb2R5Ll90b3RhbFByb3BlcnRpZXMgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICAgIC8vIGZyb20gZXF1YXRpb25zIGF0OlxuICAgICAgICAvLyBodHRwczovL2Vjb3Vyc2VzLm91LmVkdS9jZ2ktYmluL2Vib29rLmNnaT9kb2M9JnRvcGljPXN0JmNoYXBfc2VjPTA3LjImcGFnZT10aGVvcnlcbiAgICAgICAgLy8gaHR0cDovL291dHB1dC50by9zaWRld2F5L2RlZmF1bHQuYXNwP3Fubz0xMjExMDAwODdcblxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIG1hc3M6IDAsXG4gICAgICAgICAgICBhcmVhOiAwLFxuICAgICAgICAgICAgaW5lcnRpYTogMCxcbiAgICAgICAgICAgIGNlbnRyZTogeyB4OiAwLCB5OiAwIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdW0gdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBmb3IgKHZhciBpID0gYm9keS5wYXJ0cy5sZW5ndGggPT09IDEgPyAwIDogMTsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXSxcbiAgICAgICAgICAgICAgICBtYXNzID0gcGFydC5tYXNzICE9PSBJbmZpbml0eSA/IHBhcnQubWFzcyA6IDE7XG5cbiAgICAgICAgICAgIHByb3BlcnRpZXMubWFzcyArPSBtYXNzO1xuICAgICAgICAgICAgcHJvcGVydGllcy5hcmVhICs9IHBhcnQuYXJlYTtcbiAgICAgICAgICAgIHByb3BlcnRpZXMuaW5lcnRpYSArPSBwYXJ0LmluZXJ0aWE7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmNlbnRyZSA9IFZlY3Rvci5hZGQocHJvcGVydGllcy5jZW50cmUsIFZlY3Rvci5tdWx0KHBhcnQucG9zaXRpb24sIG1hc3MpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnRpZXMuY2VudHJlID0gVmVjdG9yLmRpdihwcm9wZXJ0aWVzLmNlbnRyZSwgcHJvcGVydGllcy5tYXNzKTtcblxuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGJvZHkgc3RhcnRzIHNsZWVwaW5nICh3aGVyZSBgdGhpc2AgaXMgdGhlIGJvZHkpLlxuICAgICpcbiAgICAqIEBldmVudCBzbGVlcFN0YXJ0XG4gICAgKiBAdGhpcyB7Ym9keX0gVGhlIGJvZHkgdGhhdCBoYXMgc3RhcnRlZCBzbGVlcGluZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBib2R5IGVuZHMgc2xlZXBpbmcgKHdoZXJlIGB0aGlzYCBpcyB0aGUgYm9keSkuXG4gICAgKlxuICAgICogQGV2ZW50IHNsZWVwRW5kXG4gICAgKiBAdGhpcyB7Ym9keX0gVGhlIGJvZHkgdGhhdCBoYXMgZW5kZWQgc2xlZXBpbmdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIG51bWJlciBnZW5lcmF0ZWQgaW4gYEJvZHkuY3JlYXRlYCBieSBgQ29tbW9uLm5leHRJZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImJvZHlcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJiaXRyYXJ5IGBTdHJpbmdgIG5hbWUgdG8gaGVscCB0aGUgdXNlciBpZGVudGlmeSBhbmQgbWFuYWdlIGJvZGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsYWJlbFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiQm9keVwiXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBib2RpZXMgdGhhdCBtYWtlIHVwIHRoaXMgYm9keS4gXG4gICAgICogVGhlIGZpcnN0IGJvZHkgaW4gdGhlIGFycmF5IG11c3QgYWx3YXlzIGJlIGEgc2VsZiByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgYm9keSBpbnN0YW5jZS5cbiAgICAgKiBBbGwgYm9kaWVzIGluIHRoZSBgcGFydHNgIGFycmF5IHRvZ2V0aGVyIGZvcm0gYSBzaW5nbGUgcmlnaWQgY29tcG91bmQgYm9keS5cbiAgICAgKiBQYXJ0cyBhcmUgYWxsb3dlZCB0byBvdmVybGFwLCBoYXZlIGdhcHMgb3IgaG9sZXMgb3IgZXZlbiBmb3JtIGNvbmNhdmUgYm9kaWVzLlxuICAgICAqIFBhcnRzIHRoZW1zZWx2ZXMgc2hvdWxkIG5ldmVyIGJlIGFkZGVkIHRvIGEgYFdvcmxkYCwgb25seSB0aGUgcGFyZW50IGJvZHkgc2hvdWxkIGJlLlxuICAgICAqIFVzZSBgQm9keS5zZXRQYXJ0c2Agd2hlbiBzZXR0aW5nIHBhcnRzIHRvIGVuc3VyZSBjb3JyZWN0IHVwZGF0ZXMgb2YgYWxsIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFydHNcbiAgICAgKiBAdHlwZSBib2R5W11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBzZWxmIHJlZmVyZW5jZSBpZiB0aGUgYm9keSBpcyBfbm90XyBhIHBhcnQgb2YgYW5vdGhlciBib2R5LlxuICAgICAqIE90aGVyd2lzZSB0aGlzIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSBib2R5IHRoYXQgdGhpcyBpcyBhIHBhcnQgb2YuXG4gICAgICogU2VlIGBib2R5LnBhcnRzYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYXJlbnRcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHNwZWNpZnlpbmcgdGhlIGFuZ2xlIG9mIHRoZSBib2R5LCBpbiByYWRpYW5zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGFuZ2xlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYFZlY3RvcmAgb2JqZWN0cyB0aGF0IHNwZWNpZnkgdGhlIGNvbnZleCBodWxsIG9mIHRoZSByaWdpZCBib2R5LlxuICAgICAqIFRoZXNlIHNob3VsZCBiZSBwcm92aWRlZCBhYm91dCB0aGUgb3JpZ2luIGAoMCwgMClgLiBFLmcuXG4gICAgICpcbiAgICAgKiAgICAgW3sgeDogMCwgeTogMCB9LCB7IHg6IDI1LCB5OiA1MCB9LCB7IHg6IDUwLCB5OiAwIH1dXG4gICAgICpcbiAgICAgKiBXaGVuIHBhc3NlZCB2aWEgYEJvZHkuY3JlYXRlYCwgdGhlIHZlcnRpY2VzIGFyZSB0cmFuc2xhdGVkIHJlbGF0aXZlIHRvIGBib2R5LnBvc2l0aW9uYCAoaS5lLiB3b3JsZC1zcGFjZSwgYW5kIGNvbnN0YW50bHkgdXBkYXRlZCBieSBgQm9keS51cGRhdGVgIGR1cmluZyBzaW11bGF0aW9uKS5cbiAgICAgKiBUaGUgYFZlY3RvcmAgb2JqZWN0cyBhcmUgYWxzbyBhdWdtZW50ZWQgd2l0aCBhZGRpdGlvbmFsIHByb3BlcnRpZXMgcmVxdWlyZWQgZm9yIGVmZmljaWVudCBjb2xsaXNpb24gZGV0ZWN0aW9uLiBcbiAgICAgKlxuICAgICAqIE90aGVyIHByb3BlcnRpZXMgc3VjaCBhcyBgaW5lcnRpYWAgYW5kIGBib3VuZHNgIGFyZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGUgcGFzc2VkIHZlcnRpY2VzICh1bmxlc3MgcHJvdmlkZWQgdmlhIGBvcHRpb25zYCkuXG4gICAgICogQ29uY2F2ZSBodWxscyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQuIFRoZSBtb2R1bGUgYE1hdHRlci5WZXJ0aWNlc2AgY29udGFpbnMgdXNlZnVsIG1ldGhvZHMgZm9yIHdvcmtpbmcgd2l0aCB2ZXJ0aWNlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB2ZXJ0aWNlc1xuICAgICAqIEB0eXBlIHZlY3RvcltdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBjdXJyZW50IHdvcmxkLXNwYWNlIHBvc2l0aW9uIG9mIHRoZSBib2R5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvc2l0aW9uXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGZvcmNlIHRvIGFwcGx5IGluIHRoZSBjdXJyZW50IHN0ZXAuIEl0IGlzIHplcm9lZCBhZnRlciBldmVyeSBgQm9keS51cGRhdGVgLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmb3JjZVxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0b3JxdWUgKHR1cm5pbmcgZm9yY2UpIHRvIGFwcGx5IGluIHRoZSBjdXJyZW50IHN0ZXAuIEl0IGlzIHplcm9lZCBhZnRlciBldmVyeSBgQm9keS51cGRhdGVgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRvcnF1ZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBjdXJyZW50IHNwZWVkIG9mIHRoZSBib2R5IGFmdGVyIHRoZSBsYXN0IGBCb2R5LnVwZGF0ZWAuIEl0IGlzIHJlYWQtb25seSBhbmQgYWx3YXlzIHBvc2l0aXZlIChpdCdzIHRoZSBtYWduaXR1ZGUgb2YgYGJvZHkudmVsb2NpdHlgKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBzcGVlZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBjdXJyZW50IGFuZ3VsYXIgc3BlZWQgb2YgdGhlIGJvZHkgYWZ0ZXIgdGhlIGxhc3QgYEJvZHkudXBkYXRlYC4gSXQgaXMgcmVhZC1vbmx5IGFuZCBhbHdheXMgcG9zaXRpdmUgKGl0J3MgdGhlIG1hZ25pdHVkZSBvZiBgYm9keS5hbmd1bGFyVmVsb2NpdHlgKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBhbmd1bGFyU3BlZWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgX21lYXN1cmVzXyB0aGUgY3VycmVudCB2ZWxvY2l0eSBvZiB0aGUgYm9keSBhZnRlciB0aGUgbGFzdCBgQm9keS51cGRhdGVgLiBJdCBpcyByZWFkLW9ubHkuIFxuICAgICAqIElmIHlvdSBuZWVkIHRvIG1vZGlmeSBhIGJvZHkncyB2ZWxvY2l0eSBkaXJlY3RseSwgeW91IHNob3VsZCBlaXRoZXIgYXBwbHkgYSBmb3JjZSBvciBzaW1wbHkgY2hhbmdlIHRoZSBib2R5J3MgYHBvc2l0aW9uYCAoYXMgdGhlIGVuZ2luZSB1c2VzIHBvc2l0aW9uLVZlcmxldCBpbnRlZ3JhdGlvbikuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgdmVsb2NpdHlcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGN1cnJlbnQgYW5ndWxhciB2ZWxvY2l0eSBvZiB0aGUgYm9keSBhZnRlciB0aGUgbGFzdCBgQm9keS51cGRhdGVgLiBJdCBpcyByZWFkLW9ubHkuIFxuICAgICAqIElmIHlvdSBuZWVkIHRvIG1vZGlmeSBhIGJvZHkncyBhbmd1bGFyIHZlbG9jaXR5IGRpcmVjdGx5LCB5b3Ugc2hvdWxkIGFwcGx5IGEgdG9ycXVlIG9yIHNpbXBseSBjaGFuZ2UgdGhlIGJvZHkncyBgYW5nbGVgIChhcyB0aGUgZW5naW5lIHVzZXMgcG9zaXRpb24tVmVybGV0IGludGVncmF0aW9uKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBhbmd1bGFyVmVsb2NpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBhIGJvZHkgaXMgY29uc2lkZXJlZCBzdGF0aWMuIEEgc3RhdGljIGJvZHkgY2FuIG5ldmVyIGNoYW5nZSBwb3NpdGlvbiBvciBhbmdsZSBhbmQgaXMgY29tcGxldGVseSBmaXhlZC5cbiAgICAgKiBJZiB5b3UgbmVlZCB0byBzZXQgYSBib2R5IGFzIHN0YXRpYyBhZnRlciBpdHMgY3JlYXRpb24sIHlvdSBzaG91bGQgdXNlIGBCb2R5LnNldFN0YXRpY2AgYXMgdGhpcyByZXF1aXJlcyBtb3JlIHRoYW4ganVzdCBzZXR0aW5nIHRoaXMgZmxhZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc1N0YXRpY1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYSBib2R5IGlzIGEgc2Vuc29yLiBTZW5zb3IgdHJpZ2dlcnMgY29sbGlzaW9uIGV2ZW50cywgYnV0IGRvZXNuJ3QgcmVhY3Qgd2l0aCBjb2xsaWRpbmcgYm9keSBwaHlzaWNhbGx5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzU2Vuc29yXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgYm9keSBpcyBjb25zaWRlcmVkIHNsZWVwaW5nLiBBIHNsZWVwaW5nIGJvZHkgYWN0cyBzaW1pbGFyIHRvIGEgc3RhdGljIGJvZHksIGV4Y2VwdCBpdCBpcyBvbmx5IHRlbXBvcmFyeSBhbmQgY2FuIGJlIGF3b2tlbi5cbiAgICAgKiBJZiB5b3UgbmVlZCB0byBzZXQgYSBib2R5IGFzIHNsZWVwaW5nLCB5b3Ugc2hvdWxkIHVzZSBgU2xlZXBpbmcuc2V0YCBhcyB0aGlzIHJlcXVpcmVzIG1vcmUgdGhhbiBqdXN0IHNldHRpbmcgdGhpcyBmbGFnLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzU2xlZXBpbmdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBhbW91bnQgb2YgbW92ZW1lbnQgYSBib2R5IGN1cnJlbnRseSBoYXMgKGEgY29tYmluYXRpb24gb2YgYHNwZWVkYCBhbmQgYGFuZ3VsYXJTcGVlZGApLiBJdCBpcyByZWFkLW9ubHkgYW5kIGFsd2F5cyBwb3NpdGl2ZS5cbiAgICAgKiBJdCBpcyB1c2VkIGFuZCB1cGRhdGVkIGJ5IHRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUgZHVyaW5nIHNpbXVsYXRpb24gdG8gZGVjaWRlIGlmIGEgYm9keSBoYXMgY29tZSB0byByZXN0LlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IG1vdGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBudW1iZXIgb2YgdXBkYXRlcyBpbiB3aGljaCB0aGlzIGJvZHkgbXVzdCBoYXZlIG5lYXItemVybyB2ZWxvY2l0eSBiZWZvcmUgaXQgaXMgc2V0IGFzIHNsZWVwaW5nIGJ5IHRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUgKGlmIHNsZWVwaW5nIGlzIGVuYWJsZWQgYnkgdGhlIGVuZ2luZSkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc2xlZXBUaHJlc2hvbGRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA2MFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGRlbnNpdHkgb2YgdGhlIGJvZHksIHRoYXQgaXMgaXRzIG1hc3MgcGVyIHVuaXQgYXJlYS5cbiAgICAgKiBJZiB5b3UgcGFzcyB0aGUgZGVuc2l0eSB2aWEgYEJvZHkuY3JlYXRlYCB0aGUgYG1hc3NgIHByb3BlcnR5IGlzIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmb3IgeW91IGJhc2VkIG9uIHRoZSBzaXplIChhcmVhKSBvZiB0aGUgb2JqZWN0LlxuICAgICAqIFRoaXMgaXMgZ2VuZXJhbGx5IHByZWZlcmFibGUgdG8gc2ltcGx5IHNldHRpbmcgbWFzcyBhbmQgYWxsb3dzIGZvciBtb3JlIGludHVpdGl2ZSBkZWZpbml0aW9uIG9mIG1hdGVyaWFscyAoZS5nLiByb2NrIGhhcyBhIGhpZ2hlciBkZW5zaXR5IHRoYW4gd29vZCkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGVuc2l0eVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuMDAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbWFzcyBvZiB0aGUgYm9keSwgYWx0aG91Z2ggaXQgbWF5IGJlIG1vcmUgYXBwcm9wcmlhdGUgdG8gc3BlY2lmeSB0aGUgYGRlbnNpdHlgIHByb3BlcnR5IGluc3RlYWQuXG4gICAgICogSWYgeW91IG1vZGlmeSB0aGlzIHZhbHVlLCB5b3UgbXVzdCBhbHNvIG1vZGlmeSB0aGUgYGJvZHkuaW52ZXJzZU1hc3NgIHByb3BlcnR5IChgMSAvIG1hc3NgKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBtYXNzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgaW52ZXJzZSBtYXNzIG9mIHRoZSBib2R5IChgMSAvIG1hc3NgKS5cbiAgICAgKiBJZiB5b3UgbW9kaWZ5IHRoaXMgdmFsdWUsIHlvdSBtdXN0IGFsc28gbW9kaWZ5IHRoZSBgYm9keS5tYXNzYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpbnZlcnNlTWFzc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG1vbWVudCBvZiBpbmVydGlhIChpLmUuIHNlY29uZCBtb21lbnQgb2YgYXJlYSkgb2YgdGhlIGJvZHkuXG4gICAgICogSXQgaXMgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZyb20gdGhlIGdpdmVuIGNvbnZleCBodWxsIChgdmVydGljZXNgIGFycmF5KSBhbmQgZGVuc2l0eSBpbiBgQm9keS5jcmVhdGVgLlxuICAgICAqIElmIHlvdSBtb2RpZnkgdGhpcyB2YWx1ZSwgeW91IG11c3QgYWxzbyBtb2RpZnkgdGhlIGBib2R5LmludmVyc2VJbmVydGlhYCBwcm9wZXJ0eSAoYDEgLyBpbmVydGlhYCkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaW5lcnRpYVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGludmVyc2UgbW9tZW50IG9mIGluZXJ0aWEgb2YgdGhlIGJvZHkgKGAxIC8gaW5lcnRpYWApLlxuICAgICAqIElmIHlvdSBtb2RpZnkgdGhpcyB2YWx1ZSwgeW91IG11c3QgYWxzbyBtb2RpZnkgdGhlIGBib2R5LmluZXJ0aWFgIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGludmVyc2VJbmVydGlhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgcmVzdGl0dXRpb24gKGVsYXN0aWNpdHkpIG9mIHRoZSBib2R5LiBUaGUgdmFsdWUgaXMgYWx3YXlzIHBvc2l0aXZlIGFuZCBpcyBpbiB0aGUgcmFuZ2UgYCgwLCAxKWAuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgY29sbGlzaW9ucyBtYXkgYmUgcGVyZmVjdGx5IGluZWxhc3RpYyBhbmQgbm8gYm91bmNpbmcgbWF5IG9jY3VyLiBcbiAgICAgKiBBIHZhbHVlIG9mIGAwLjhgIG1lYW5zIHRoZSBib2R5IG1heSBib3VuY2UgYmFjayB3aXRoIGFwcHJveGltYXRlbHkgODAlIG9mIGl0cyBraW5ldGljIGVuZXJneS5cbiAgICAgKiBOb3RlIHRoYXQgY29sbGlzaW9uIHJlc3BvbnNlIGlzIGJhc2VkIG9uIF9wYWlyc18gb2YgYm9kaWVzLCBhbmQgdGhhdCBgcmVzdGl0dXRpb25gIHZhbHVlcyBhcmUgX2NvbWJpbmVkXyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybXVsYTpcbiAgICAgKlxuICAgICAqICAgICBNYXRoLm1heChib2R5QS5yZXN0aXR1dGlvbiwgYm9keUIucmVzdGl0dXRpb24pXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVzdGl0dXRpb25cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgZnJpY3Rpb24gb2YgdGhlIGJvZHkuIFRoZSB2YWx1ZSBpcyBhbHdheXMgcG9zaXRpdmUgYW5kIGlzIGluIHRoZSByYW5nZSBgKDAsIDEpYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGF0IHRoZSBib2R5IG1heSBzbGlkZSBpbmRlZmluaXRlbHkuXG4gICAgICogQSB2YWx1ZSBvZiBgMWAgbWVhbnMgdGhlIGJvZHkgbWF5IGNvbWUgdG8gYSBzdG9wIGFsbW9zdCBpbnN0YW50bHkgYWZ0ZXIgYSBmb3JjZSBpcyBhcHBsaWVkLlxuICAgICAqXG4gICAgICogVGhlIGVmZmVjdHMgb2YgdGhlIHZhbHVlIG1heSBiZSBub24tbGluZWFyLiBcbiAgICAgKiBIaWdoIHZhbHVlcyBtYXkgYmUgdW5zdGFibGUgZGVwZW5kaW5nIG9uIHRoZSBib2R5LlxuICAgICAqIFRoZSBlbmdpbmUgdXNlcyBhIENvdWxvbWIgZnJpY3Rpb24gbW9kZWwgaW5jbHVkaW5nIHN0YXRpYyBhbmQga2luZXRpYyBmcmljdGlvbi5cbiAgICAgKiBOb3RlIHRoYXQgY29sbGlzaW9uIHJlc3BvbnNlIGlzIGJhc2VkIG9uIF9wYWlyc18gb2YgYm9kaWVzLCBhbmQgdGhhdCBgZnJpY3Rpb25gIHZhbHVlcyBhcmUgX2NvbWJpbmVkXyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybXVsYTpcbiAgICAgKlxuICAgICAqICAgICBNYXRoLm1pbihib2R5QS5mcmljdGlvbiwgYm9keUIuZnJpY3Rpb24pXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzdGF0aWMgZnJpY3Rpb24gb2YgdGhlIGJvZHkgKGluIHRoZSBDb3Vsb21iIGZyaWN0aW9uIG1vZGVsKS4gXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhlIGJvZHkgd2lsbCBuZXZlciAnc3RpY2snIHdoZW4gaXQgaXMgbmVhcmx5IHN0YXRpb25hcnkgYW5kIG9ubHkgZHluYW1pYyBgZnJpY3Rpb25gIGlzIHVzZWQuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUgKGUuZy4gYDEwYCksIHRoZSBtb3JlIGZvcmNlIGl0IHdpbGwgdGFrZSB0byBpbml0aWFsbHkgZ2V0IHRoZSBib2R5IG1vdmluZyB3aGVuIG5lYXJseSBzdGF0aW9uYXJ5LlxuICAgICAqIFRoaXMgdmFsdWUgaXMgbXVsdGlwbGllZCB3aXRoIHRoZSBgZnJpY3Rpb25gIHByb3BlcnR5IHRvIG1ha2UgaXQgZWFzaWVyIHRvIGNoYW5nZSBgZnJpY3Rpb25gIGFuZCBtYWludGFpbiBhbiBhcHByb3ByaWF0ZSBhbW91bnQgb2Ygc3RhdGljIGZyaWN0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZyaWN0aW9uU3RhdGljXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC41XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgYWlyIGZyaWN0aW9uIG9mIHRoZSBib2R5IChhaXIgcmVzaXN0YW5jZSkuIFxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBib2R5IHdpbGwgbmV2ZXIgc2xvdyBhcyBpdCBtb3ZlcyB0aHJvdWdoIHNwYWNlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgZmFzdGVyIGEgYm9keSBzbG93cyB3aGVuIG1vdmluZyB0aHJvdWdoIHNwYWNlLlxuICAgICAqIFRoZSBlZmZlY3RzIG9mIHRoZSB2YWx1ZSBhcmUgbm9uLWxpbmVhci4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25BaXJcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGZpbHRlcmluZyBwcm9wZXJ0aWVzIG9mIHRoaXMgYm9keS5cbiAgICAgKlxuICAgICAqIENvbGxpc2lvbnMgYmV0d2VlbiB0d28gYm9kaWVzIHdpbGwgb2JleSB0aGUgZm9sbG93aW5nIHJ1bGVzOlxuICAgICAqIC0gSWYgdGhlIHR3byBib2RpZXMgaGF2ZSB0aGUgc2FtZSBub24temVybyB2YWx1ZSBvZiBgY29sbGlzaW9uRmlsdGVyLmdyb3VwYCxcbiAgICAgKiAgIHRoZXkgd2lsbCBhbHdheXMgY29sbGlkZSBpZiB0aGUgdmFsdWUgaXMgcG9zaXRpdmUsIGFuZCB0aGV5IHdpbGwgbmV2ZXIgY29sbGlkZVxuICAgICAqICAgaWYgdGhlIHZhbHVlIGlzIG5lZ2F0aXZlLlxuICAgICAqIC0gSWYgdGhlIHR3byBib2RpZXMgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIG9mIGBjb2xsaXNpb25GaWx0ZXIuZ3JvdXBgIG9yIGlmIG9uZVxuICAgICAqICAgKG9yIGJvdGgpIG9mIHRoZSBib2RpZXMgaGFzIGEgdmFsdWUgb2YgMCwgdGhlbiB0aGUgY2F0ZWdvcnkvbWFzayBydWxlcyBhcHBseSBhcyBmb2xsb3dzOlxuICAgICAqXG4gICAgICogRWFjaCBib2R5IGJlbG9uZ3MgdG8gYSBjb2xsaXNpb24gY2F0ZWdvcnksIGdpdmVuIGJ5IGBjb2xsaXNpb25GaWx0ZXIuY2F0ZWdvcnlgLiBUaGlzXG4gICAgICogdmFsdWUgaXMgdXNlZCBhcyBhIGJpdCBmaWVsZCBhbmQgdGhlIGNhdGVnb3J5IHNob3VsZCBoYXZlIG9ubHkgb25lIGJpdCBzZXQsIG1lYW5pbmcgdGhhdFxuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGEgcG93ZXIgb2YgdHdvIGluIHRoZSByYW5nZSBbMSwgMl4zMV0uIFRodXMsIHRoZXJlIGFyZSAzMlxuICAgICAqIGRpZmZlcmVudCBjb2xsaXNpb24gY2F0ZWdvcmllcyBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBFYWNoIGJvZHkgYWxzbyBkZWZpbmVzIGEgY29sbGlzaW9uIGJpdG1hc2ssIGdpdmVuIGJ5IGBjb2xsaXNpb25GaWx0ZXIubWFza2Agd2hpY2ggc3BlY2lmaWVzXG4gICAgICogdGhlIGNhdGVnb3JpZXMgaXQgY29sbGlkZXMgd2l0aCAodGhlIHZhbHVlIGlzIHRoZSBiaXR3aXNlIEFORCB2YWx1ZSBvZiBhbGwgdGhlc2UgY2F0ZWdvcmllcykuXG4gICAgICpcbiAgICAgKiBVc2luZyB0aGUgY2F0ZWdvcnkvbWFzayBydWxlcywgdHdvIGJvZGllcyBgQWAgYW5kIGBCYCBjb2xsaWRlIGlmIGVhY2ggaW5jbHVkZXMgdGhlIG90aGVyJ3NcbiAgICAgKiBjYXRlZ29yeSBpbiBpdHMgbWFzaywgaS5lLiBgKGNhdGVnb3J5QSAmIG1hc2tCKSAhPT0gMGAgYW5kIGAoY2F0ZWdvcnlCICYgbWFza0EpICE9PSAwYFxuICAgICAqIGFyZSBib3RoIHRydWUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBJbnRlZ2VyIGBOdW1iZXJgLCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGdyb3VwIHRoaXMgYm9keSBiZWxvbmdzIHRvLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlci5ncm91cFxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYml0IGZpZWxkIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gY2F0ZWdvcnkgdGhpcyBib2R5IGJlbG9uZ3MgdG8uXG4gICAgICogVGhlIGNhdGVnb3J5IHZhbHVlIHNob3VsZCBoYXZlIG9ubHkgb25lIGJpdCBzZXQsIGZvciBleGFtcGxlIGAweDAwMDFgLlxuICAgICAqIFRoaXMgbWVhbnMgdGhlcmUgYXJlIHVwIHRvIDMyIHVuaXF1ZSBjb2xsaXNpb24gY2F0ZWdvcmllcyBhdmFpbGFibGUuXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLmNhdGVnb3J5XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBiaXQgbWFzayB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGNhdGVnb3JpZXMgdGhpcyBib2R5IG1heSBjb2xsaWRlIHdpdGguXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLm1hc2tcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAtMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyBhIHRvbGVyYW5jZSBvbiBob3cgZmFyIGEgYm9keSBpcyBhbGxvd2VkIHRvICdzaW5rJyBvciByb3RhdGUgaW50byBvdGhlciBib2RpZXMuXG4gICAgICogQXZvaWQgY2hhbmdpbmcgdGhpcyB2YWx1ZSB1bmxlc3MgeW91IHVuZGVyc3RhbmQgdGhlIHB1cnBvc2Ugb2YgYHNsb3BgIGluIHBoeXNpY3MgZW5naW5lcy5cbiAgICAgKiBUaGUgZGVmYXVsdCBzaG91bGQgZ2VuZXJhbGx5IHN1ZmZpY2UsIGFsdGhvdWdoIHZlcnkgbGFyZ2UgYm9kaWVzIG1heSByZXF1aXJlIGxhcmdlciB2YWx1ZXMgZm9yIHN0YWJsZSBzdGFja2luZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzbG9wXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4wNVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGFsbG93cyBwZXItYm9keSB0aW1lIHNjYWxpbmcsIGUuZy4gYSBmb3JjZS1maWVsZCB3aGVyZSBib2RpZXMgaW5zaWRlIGFyZSBpbiBzbG93LW1vdGlvbiwgd2hpbGUgb3RoZXJzIGFyZSBhdCBmdWxsIHNwZWVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWVTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgZGVmaW5lcyB0aGUgcmVuZGVyaW5nIHByb3BlcnRpZXMgdG8gYmUgY29uc3VtZWQgYnkgdGhlIG1vZHVsZSBgTWF0dGVyLlJlbmRlcmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJvZHkgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci52aXNpYmxlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG9wYWNpdHkgdG8gdXNlIHdoZW4gcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5vcGFjaXR5XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IGRlZmluZXMgdGhlIHNwcml0ZSBwcm9wZXJ0aWVzIHRvIHVzZSB3aGVuIHJlbmRlcmluZywgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGVcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgcGF0aCB0byB0aGUgaW1hZ2UgdG8gdXNlIGFzIHRoZSBzcHJpdGUgdGV4dHVyZSwgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUudGV4dHVyZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgICBcbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgc2NhbGluZyBpbiB0aGUgeC1heGlzIGZvciB0aGUgc3ByaXRlLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS54U2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgc2NhbGluZyBpbiB0aGUgeS1heGlzIGZvciB0aGUgc3ByaXRlLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS55U2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAgLyoqXG4gICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBvZmZzZXQgaW4gdGhlIHgtYXhpcyBmb3IgdGhlIHNwcml0ZSAobm9ybWFsaXNlZCBieSB0ZXh0dXJlIHdpZHRoKS5cbiAgICAgICpcbiAgICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueE9mZnNldFxuICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICogQGRlZmF1bHQgMFxuICAgICAgKi9cblxuICAgICAvKipcbiAgICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG9mZnNldCBpbiB0aGUgeS1heGlzIGZvciB0aGUgc3ByaXRlIChub3JtYWxpc2VkIGJ5IHRleHR1cmUgaGVpZ2h0KS5cbiAgICAgICpcbiAgICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueU9mZnNldFxuICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICogQGRlZmF1bHQgMFxuICAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBsaW5lIHdpZHRoIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgYm9keSBvdXRsaW5lIChpZiBhIHNwcml0ZSBpcyBub3QgZGVmaW5lZCkuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgbm8gb3V0bGluZSB3aWxsIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5saW5lV2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgZmlsbCBzdHlsZSB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGJvZHkgKGlmIGEgc3ByaXRlIGlzIG5vdCBkZWZpbmVkKS5cbiAgICAgKiBJdCBpcyB0aGUgc2FtZSBhcyB3aGVuIHVzaW5nIGEgY2FudmFzLCBzbyBpdCBhY2NlcHRzIENTUyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmZpbGxTdHlsZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IGEgcmFuZG9tIGNvbG91clxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIHN0cm9rZSBzdHlsZSB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGJvZHkgb3V0bGluZSAoaWYgYSBzcHJpdGUgaXMgbm90IGRlZmluZWQpLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3Ryb2tlU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBhIHJhbmRvbSBjb2xvdXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIHVuaXF1ZSBheGlzIHZlY3RvcnMgKGVkZ2Ugbm9ybWFscykgdXNlZCBmb3IgY29sbGlzaW9uIGRldGVjdGlvbi5cbiAgICAgKiBUaGVzZSBhcmUgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZyb20gdGhlIGdpdmVuIGNvbnZleCBodWxsIChgdmVydGljZXNgIGFycmF5KSBpbiBgQm9keS5jcmVhdGVgLlxuICAgICAqIFRoZXkgYXJlIGNvbnN0YW50bHkgdXBkYXRlZCBieSBgQm9keS51cGRhdGVgIGR1cmluZyB0aGUgc2ltdWxhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBheGVzXG4gICAgICogQHR5cGUgdmVjdG9yW11cbiAgICAgKi9cbiAgICAgXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGFyZWEgb2YgdGhlIGJvZHkncyBjb252ZXggaHVsbCwgY2FsY3VsYXRlZCBhdCBjcmVhdGlvbiBieSBgQm9keS5jcmVhdGVgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGFyZWFcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvdW5kc2Agb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgQUFCQiByZWdpb24gZm9yIHRoZSBib2R5LlxuICAgICAqIEl0IGlzIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmcm9tIHRoZSBnaXZlbiBjb252ZXggaHVsbCAoYHZlcnRpY2VzYCBhcnJheSkgaW4gYEJvZHkuY3JlYXRlYCBhbmQgY29uc3RhbnRseSB1cGRhdGVkIGJ5IGBCb2R5LnVwZGF0ZWAgZHVyaW5nIHNpbXVsYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm91bmRzXG4gICAgICogQHR5cGUgYm91bmRzXG4gICAgICovXG5cbn0pKCk7XG5cbn0se1wiLi4vY29yZS9Db21tb25cIjoxNCxcIi4uL2NvcmUvU2xlZXBpbmdcIjoyMixcIi4uL2dlb21ldHJ5L0F4ZXNcIjoyNSxcIi4uL2dlb21ldHJ5L0JvdW5kc1wiOjI2LFwiLi4vZ2VvbWV0cnkvVmVjdG9yXCI6MjgsXCIuLi9nZW9tZXRyeS9WZXJ0aWNlc1wiOjI5LFwiLi4vcmVuZGVyL1JlbmRlclwiOjMxfV0sMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuQ29tcG9zaXRlYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb21wb3NpdGUgYm9kaWVzLlxuKiBBIGNvbXBvc2l0ZSBib2R5IGlzIGEgY29sbGVjdGlvbiBvZiBgTWF0dGVyLkJvZHlgLCBgTWF0dGVyLkNvbnN0cmFpbnRgIGFuZCBvdGhlciBgTWF0dGVyLkNvbXBvc2l0ZWAsIHRoZXJlZm9yZSBjb21wb3NpdGVzIGZvcm0gYSB0cmVlIHN0cnVjdHVyZS5cbiogSXQgaXMgaW1wb3J0YW50IHRvIHVzZSB0aGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHRvIG1vZGlmeSBjb21wb3NpdGVzLCByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgdGhlaXIgcHJvcGVydGllcy5cbiogTm90ZSB0aGF0IHRoZSBgTWF0dGVyLldvcmxkYCBvYmplY3QgaXMgYWxzbyBhIHR5cGUgb2YgYE1hdHRlci5Db21wb3NpdGVgIGFuZCBhcyBzdWNoIGFsbCBjb21wb3NpdGUgbWV0aG9kcyBoZXJlIGNhbiBhbHNvIG9wZXJhdGUgb24gYSBgTWF0dGVyLldvcmxkYC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIENvbXBvc2l0ZVxuKi9cblxudmFyIENvbXBvc2l0ZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2l0ZTtcblxudmFyIEV2ZW50cyA9IF9kZXJlcV8oJy4uL2NvcmUvRXZlbnRzJyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcbnZhciBCb3VuZHMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9Cb3VuZHMnKTtcbnZhciBCb2R5ID0gX2RlcmVxXygnLi9Cb2R5Jyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29tcG9zaXRlLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3Blcml0ZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoeyBcbiAgICAgICAgICAgIGlkOiBDb21tb24ubmV4dElkKCksXG4gICAgICAgICAgICB0eXBlOiAnY29tcG9zaXRlJyxcbiAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgIGlzTW9kaWZpZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYm9kaWVzOiBbXSwgXG4gICAgICAgICAgICBjb25zdHJhaW50czogW10sIFxuICAgICAgICAgICAgY29tcG9zaXRlczogW10sXG4gICAgICAgICAgICBsYWJlbDogJ0NvbXBvc2l0ZScsXG4gICAgICAgICAgICBwbHVnaW46IHt9XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb21wb3NpdGUncyBgaXNNb2RpZmllZGAgZmxhZy4gXG4gICAgICogSWYgYHVwZGF0ZVBhcmVudHNgIGlzIHRydWUsIGFsbCBwYXJlbnRzIHdpbGwgYmUgc2V0IChkZWZhdWx0OiBmYWxzZSkuXG4gICAgICogSWYgYHVwZGF0ZUNoaWxkcmVuYCBpcyB0cnVlLCBhbGwgY2hpbGRyZW4gd2lsbCBiZSBzZXQgKGRlZmF1bHQ6IGZhbHNlKS5cbiAgICAgKiBAbWV0aG9kIHNldE1vZGlmaWVkXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNNb2RpZmllZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZVBhcmVudHM9ZmFsc2VdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdXBkYXRlQ2hpbGRyZW49ZmFsc2VdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkID0gZnVuY3Rpb24oY29tcG9zaXRlLCBpc01vZGlmaWVkLCB1cGRhdGVQYXJlbnRzLCB1cGRhdGVDaGlsZHJlbikge1xuICAgICAgICBjb21wb3NpdGUuaXNNb2RpZmllZCA9IGlzTW9kaWZpZWQ7XG5cbiAgICAgICAgaWYgKHVwZGF0ZVBhcmVudHMgJiYgY29tcG9zaXRlLnBhcmVudCkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZS5wYXJlbnQsIGlzTW9kaWZpZWQsIHVwZGF0ZVBhcmVudHMsIHVwZGF0ZUNoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cGRhdGVDaGlsZHJlbikge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkQ29tcG9zaXRlID0gY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV07XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNoaWxkQ29tcG9zaXRlLCBpc01vZGlmaWVkLCB1cGRhdGVQYXJlbnRzLCB1cGRhdGVDaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJpYyBhZGQgZnVuY3Rpb24uIEFkZHMgb25lIG9yIG1hbnkgYm9keShzKSwgY29uc3RyYWludChzKSBvciBhIGNvbXBvc2l0ZShzKSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVBZGRgIGFuZCBgYWZ0ZXJBZGRgIGV2ZW50cyBvbiB0aGUgYGNvbXBvc2l0ZWAuXG4gICAgICogQG1ldGhvZCBhZGRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBvYmplY3RzIGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgb2JqZWN0KSB7XG4gICAgICAgIHZhciBvYmplY3RzID0gW10uY29uY2F0KG9iamVjdCk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYmVmb3JlQWRkJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICAgIC8vIHNraXAgYWRkaW5nIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICAgICAgaWYgKG9iai5wYXJlbnQgIT09IG9iaikge1xuICAgICAgICAgICAgICAgICAgICBDb21tb24ud2FybignQ29tcG9zaXRlLmFkZDogc2tpcHBlZCBhZGRpbmcgYSBjb21wb3VuZCBib2R5IHBhcnQgKHlvdSBtdXN0IGFkZCBpdHMgcGFyZW50IGluc3RlYWQpJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBvc2l0ZSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbXBvc2l0ZShjb21wb3NpdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb3VzZUNvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqLmNvbnN0cmFpbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdhZnRlckFkZCcsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJpYyByZW1vdmUgZnVuY3Rpb24uIFJlbW92ZXMgb25lIG9yIG1hbnkgYm9keShzKSwgY29uc3RyYWludChzKSBvciBhIGNvbXBvc2l0ZShzKSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIE9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBUcmlnZ2VycyBgYmVmb3JlUmVtb3ZlYCBhbmQgYGFmdGVyUmVtb3ZlYCBldmVudHMgb24gdGhlIGBjb21wb3NpdGVgLlxuICAgICAqIEBtZXRob2QgcmVtb3ZlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBvYmplY3RzIHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlID0gZnVuY3Rpb24oY29tcG9zaXRlLCBvYmplY3QsIGRlZXApIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSBbXS5jb25jYXQob2JqZWN0KTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdiZWZvcmVSZW1vdmUnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IG9iamVjdHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29tcG9zaXRlJzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlKGNvbXBvc2l0ZSwgb2JqLCBkZWVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlQ29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmouY29uc3RyYWludCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2FmdGVyUmVtb3ZlJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29tcG9zaXRlIHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGFkZENvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVBXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUJcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGVBIHdpdGggdGhlIG9iamVjdHMgZnJvbSBjb21wb3NpdGVCIGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZENvbXBvc2l0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIGNvbXBvc2l0ZUIpIHtcbiAgICAgICAgY29tcG9zaXRlQS5jb21wb3NpdGVzLnB1c2goY29tcG9zaXRlQik7XG4gICAgICAgIGNvbXBvc2l0ZUIucGFyZW50ID0gY29tcG9zaXRlQTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZUEsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZUE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb21wb3NpdGUgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVCXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGVBIHdpdGggdGhlIGNvbXBvc2l0ZSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZUEsIGNvbXBvc2l0ZUIsIGRlZXApIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gQ29tbW9uLmluZGV4T2YoY29tcG9zaXRlQS5jb21wb3NpdGVzLCBjb21wb3NpdGVCKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZUF0KGNvbXBvc2l0ZUEsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGVBLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGVBLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGUoY29tcG9zaXRlQS5jb21wb3NpdGVzW2ldLCBjb21wb3NpdGVCLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGVBO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29tcG9zaXRlIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29tcG9zaXRlQXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbXBvc2l0ZSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZUF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuY29tcG9zaXRlcy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBib2R5IHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGFkZEJvZHlcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgYWRkZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWRkQm9keSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgYm9keSkge1xuICAgICAgICBjb21wb3NpdGUuYm9kaWVzLnB1c2goYm9keSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVCb2R5XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBib2R5LCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZS5ib2RpZXMsIGJvZHkpO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQm9keUF0KGNvbXBvc2l0ZSwgcG9zaXRpb24pO1xuICAgICAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5KGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldLCBib2R5LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQm9keUF0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBib2R5IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQm9keUF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuYm9kaWVzLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbnN0cmFpbnQgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYWRkQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgY29uc3RyYWludCBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb25zdHJhaW50KSB7XG4gICAgICAgIGNvbXBvc2l0ZS5jb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb25zdHJhaW50IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgYW5kIG9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgY29uc3RyYWludCwgZGVlcCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBDb21tb24uaW5kZXhPZihjb21wb3NpdGUuY29uc3RyYWludHMsIGNvbnN0cmFpbnQpO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludEF0KGNvbXBvc2l0ZSwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50KGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldLCBjb25zdHJhaW50LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29uc3RyYWludEF0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludEF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuY29uc3RyYWludHMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBib2RpZXMsIGNvbnN0cmFpbnRzIGFuZCBjb21wb3NpdGVzIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBPcHRpb25hbGx5IGNsZWFyaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0ga2VlcFN0YXRpY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmNsZWFyID0gZnVuY3Rpb24oY29tcG9zaXRlLCBrZWVwU3RhdGljLCBkZWVwKSB7XG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuY2xlYXIoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGtlZXBTdGF0aWMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoa2VlcFN0YXRpYykge1xuICAgICAgICAgICAgY29tcG9zaXRlLmJvZGllcyA9IGNvbXBvc2l0ZS5ib2RpZXMuZmlsdGVyKGZ1bmN0aW9uKGJvZHkpIHsgcmV0dXJuIGJvZHkuaXNTdGF0aWM7IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcG9zaXRlLmJvZGllcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9zaXRlLmNvbnN0cmFpbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBib2RpZXMgaW4gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIGFsbCBib2RpZXMgaW4gaXRzIGNoaWxkcmVuLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGFsbEJvZGllc1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtib2R5W119IEFsbCB0aGUgYm9kaWVzXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFsbEJvZGllcyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5ib2RpZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBib2RpZXMgPSBib2RpZXMuY29uY2F0KENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0pKTtcblxuICAgICAgICByZXR1cm4gYm9kaWVzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjb25zdHJhaW50cyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGNvbnN0cmFpbnRzIGluIGl0cyBjaGlsZHJlbiwgcmVjdXJzaXZlbHkuXG4gICAgICogQG1ldGhvZCBhbGxDb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb25zdHJhaW50W119IEFsbCB0aGUgY29uc3RyYWludHNcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgdmFyIGNvbnN0cmFpbnRzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5jb25zdHJhaW50cyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gY29uc3RyYWludHMuY29uY2F0KENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUuY29tcG9zaXRlc1tpXSkpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJhaW50cztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgY29tcG9zaXRlcyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGNvbXBvc2l0ZXMgaW4gaXRzIGNoaWxkcmVuLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGFsbENvbXBvc2l0ZXNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlW119IEFsbCB0aGUgY29tcG9zaXRlc1xuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIHZhciBjb21wb3NpdGVzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5jb21wb3NpdGVzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgY29tcG9zaXRlcyA9IGNvbXBvc2l0ZXMuY29uY2F0KENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzKGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldKSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIHRoZSBjb21wb3NpdGUgcmVjdXJzaXZlbHkgZm9yIGFuIG9iamVjdCBtYXRjaGluZyB0aGUgdHlwZSBhbmQgaWQgc3VwcGxpZWQsIG51bGwgaWYgbm90IGZvdW5kLlxuICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcmVxdWVzdGVkIG9iamVjdCwgaWYgZm91bmRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuZ2V0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBpZCwgdHlwZSkge1xuICAgICAgICB2YXIgb2JqZWN0cyxcbiAgICAgICAgICAgIG9iamVjdDtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICBvYmplY3RzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuICAgICAgICAgICAgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbXBvc2l0ZSc6XG4gICAgICAgICAgICBvYmplY3RzID0gQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMoY29tcG9zaXRlKS5jb25jYXQoY29tcG9zaXRlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvYmplY3RzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0cy5maWx0ZXIoZnVuY3Rpb24ob2JqZWN0KSB7IFxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpOyBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdC5sZW5ndGggPT09IDAgPyBudWxsIDogb2JqZWN0WzBdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgZ2l2ZW4gb2JqZWN0KHMpIGZyb20gY29tcG9zaXRlQSB0byBjb21wb3NpdGVCIChlcXVhbCB0byBhIHJlbW92ZSBmb2xsb3dlZCBieSBhbiBhZGQpLlxuICAgICAqIEBtZXRob2QgbW92ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlQX0gY29tcG9zaXRlQVxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IG9iamVjdHNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZUJ9IGNvbXBvc2l0ZUJcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFJldHVybnMgY29tcG9zaXRlQVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5tb3ZlID0gZnVuY3Rpb24oY29tcG9zaXRlQSwgb2JqZWN0cywgY29tcG9zaXRlQikge1xuICAgICAgICBDb21wb3NpdGUucmVtb3ZlKGNvbXBvc2l0ZUEsIG9iamVjdHMpO1xuICAgICAgICBDb21wb3NpdGUuYWRkKGNvbXBvc2l0ZUIsIG9iamVjdHMpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlQTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXNzaWducyBuZXcgaWRzIGZvciBhbGwgb2JqZWN0cyBpbiB0aGUgY29tcG9zaXRlLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIHJlYmFzZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFJldHVybnMgY29tcG9zaXRlXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlYmFzZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChDb21wb3NpdGUuYWxsQ29uc3RyYWludHMoY29tcG9zaXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMoY29tcG9zaXRlKSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmplY3RzW2ldLmlkID0gQ29tbW9uLm5leHRJZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUgYnkgYSBnaXZlbiB2ZWN0b3IgcmVsYXRpdmUgdG8gdGhlaXIgY3VycmVudCBwb3NpdGlvbnMsIFxuICAgICAqIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdHJhbnNsYXRpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUudHJhbnNsYXRlID0gZnVuY3Rpb24oY29tcG9zaXRlLCB0cmFuc2xhdGlvbiwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShib2RpZXNbaV0sIHRyYW5zbGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGFsbCBjaGlsZHJlbiBpbiB0aGUgY29tcG9zaXRlIGJ5IGEgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIGdpdmVuIHBvaW50LCB3aXRob3V0IGltcGFydGluZyBhbnkgYW5ndWxhciB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb25cbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUucm90YXRlID0gZnVuY3Rpb24oY29tcG9zaXRlLCByb3RhdGlvbiwgcG9pbnQsIHJlY3Vyc2l2ZSkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3Mocm90YXRpb24pLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4ocm90YXRpb24pLFxuICAgICAgICAgICAgYm9kaWVzID0gcmVjdXJzaXZlID8gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpIDogY29tcG9zaXRlLmJvZGllcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbiksXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIChkeCAqIHNpbiArIGR5ICogY29zKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkucm90YXRlKGJvZHksIHJvdGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUsIGluY2x1ZGluZyB1cGRhdGluZyBwaHlzaWNhbCBwcm9wZXJ0aWVzIChtYXNzLCBhcmVhLCBheGVzLCBpbmVydGlhKSwgZnJvbSBhIHdvcmxkLXNwYWNlIHBvaW50LlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuc2NhbGUgPSBmdW5jdGlvbihjb21wb3NpdGUsIHNjYWxlWCwgc2NhbGVZLCBwb2ludCwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBkeCA9IGJvZHkucG9zaXRpb24ueCAtIHBvaW50LngsXG4gICAgICAgICAgICAgICAgZHkgPSBib2R5LnBvc2l0aW9uLnkgLSBwb2ludC55O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueCArIGR4ICogc2NhbGVYLFxuICAgICAgICAgICAgICAgIHk6IHBvaW50LnkgKyBkeSAqIHNjYWxlWVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkuc2NhbGUoYm9keSwgc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHVuaW9uIG9mIHRoZSBib3VuZHMgb2YgYWxsIG9mIHRoZSBjb21wb3NpdGUncyBib2RpZXMuXG4gICAgICogQG1ldGhvZCBib3VuZHNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlIFRoZSBjb21wb3NpdGUuXG4gICAgICogQHJldHVybnMge2JvdW5kc30gVGhlIGNvbXBvc2l0ZSBib3VuZHMuXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmJvdW5kcyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpLFxuICAgICAgICAgICAgdmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKGJvZHkuYm91bmRzLm1pbiwgYm9keS5ib3VuZHMubWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb3VuZHMuY3JlYXRlKHZlcnRpY2VzKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5hZGRgIGlzIG1hZGUsIGJlZm9yZSBvYmplY3RzIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlQWRkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdG8gYmUgYWRkZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLmFkZGAgaXMgbWFkZSwgYWZ0ZXIgb2JqZWN0cyBoYXZlIGJlZW4gYWRkZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyQWRkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdGhhdCBoYXZlIGJlZW4gYWRkZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLnJlbW92ZWAgaXMgbWFkZSwgYmVmb3JlIG9iamVjdHMgaGF2ZSBiZWVuIHJlbW92ZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVJlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRvIGJlIHJlbW92ZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLnJlbW92ZWAgaXMgbWFkZSwgYWZ0ZXIgb2JqZWN0cyBoYXZlIGJlZW4gcmVtb3ZlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJSZW1vdmVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0aGF0IGhhdmUgYmVlbiByZW1vdmVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB1bmlxdWVseSBpZGVudGlmeWluZyBudW1iZXIgZ2VuZXJhdGVkIGluIGBDb21wb3NpdGUuY3JlYXRlYCBieSBgQ29tbW9uLm5leHRJZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImNvbXBvc2l0ZVwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgY29tcG9zaXRlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsYWJlbFxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiQ29tcG9zaXRlXCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBjb21wb3NpdGUgaGFzIGJlZW4gbW9kaWZpZWQgZHVyaW5nIHRoZSBjdXJyZW50IHN0ZXAuXG4gICAgICogTW9zdCBgTWF0dGVyLkNvbXBvc2l0ZWAgbWV0aG9kcyB3aWxsIGF1dG9tYXRpY2FsbHkgc2V0IHRoaXMgZmxhZyB0byBgdHJ1ZWAgdG8gaW5mb3JtIHRoZSBlbmdpbmUgb2YgY2hhbmdlcyB0byBiZSBoYW5kbGVkLlxuICAgICAqIElmIHlvdSBuZWVkIHRvIGNoYW5nZSBpdCBtYW51YWxseSwgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuc2V0TW9kaWZpZWRgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc01vZGlmaWVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYENvbXBvc2l0ZWAgdGhhdCBpcyB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9zaXRlLiBJdCBpcyBhdXRvbWF0aWNhbGx5IG1hbmFnZWQgYnkgdGhlIGBNYXR0ZXIuQ29tcG9zaXRlYCBtZXRob2RzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBhcmVudFxuICAgICAqIEB0eXBlIGNvbXBvc2l0ZVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGBCb2R5YCB0aGF0IGFyZSBfZGlyZWN0XyBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvc2l0ZS5cbiAgICAgKiBUbyBhZGQgb3IgcmVtb3ZlIGJvZGllcyB5b3Ugc2hvdWxkIHVzZSBgQ29tcG9zaXRlLmFkZGAgYW5kIGBDb21wb3NpdGUucmVtb3ZlYCBtZXRob2RzIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGlzIHByb3BlcnR5LlxuICAgICAqIElmIHlvdSB3aXNoIHRvIHJlY3Vyc2l2ZWx5IGZpbmQgYWxsIGRlc2NlbmRhbnRzLCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5hbGxCb2RpZXNgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2RpZXNcbiAgICAgKiBAdHlwZSBib2R5W11cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYENvbnN0cmFpbnRgIHRoYXQgYXJlIF9kaXJlY3RfIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9zaXRlLlxuICAgICAqIFRvIGFkZCBvciByZW1vdmUgY29uc3RyYWludHMgeW91IHNob3VsZCB1c2UgYENvbXBvc2l0ZS5hZGRgIGFuZCBgQ29tcG9zaXRlLnJlbW92ZWAgbWV0aG9kcyByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byByZWN1cnNpdmVseSBmaW5kIGFsbCBkZXNjZW5kYW50cywgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuYWxsQ29uc3RyYWludHNgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb25zdHJhaW50c1xuICAgICAqIEB0eXBlIGNvbnN0cmFpbnRbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgQ29tcG9zaXRlYCB0aGF0IGFyZSBfZGlyZWN0XyBjaGlsZHJlbiBvZiB0aGlzIGNvbXBvc2l0ZS5cbiAgICAgKiBUbyBhZGQgb3IgcmVtb3ZlIGNvbXBvc2l0ZXMgeW91IHNob3VsZCB1c2UgYENvbXBvc2l0ZS5hZGRgIGFuZCBgQ29tcG9zaXRlLnJlbW92ZWAgbWV0aG9kcyByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKiBJZiB5b3Ugd2lzaCB0byByZWN1cnNpdmVseSBmaW5kIGFsbCBkZXNjZW5kYW50cywgeW91IHNob3VsZCB1c2UgdGhlIGBDb21wb3NpdGUuYWxsQ29tcG9zaXRlc2AgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbXBvc2l0ZXNcbiAgICAgKiBAdHlwZSBjb21wb3NpdGVbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxufSkoKTtcblxufSx7XCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi4vY29yZS9FdmVudHNcIjoxNixcIi4uL2dlb21ldHJ5L0JvdW5kc1wiOjI2LFwiLi9Cb2R5XCI6MX1dLDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLldvcmxkYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyB0aGUgd29ybGQgY29tcG9zaXRlLlxuKiBBIGBNYXR0ZXIuV29ybGRgIGlzIGEgYE1hdHRlci5Db21wb3NpdGVgIGJvZHksIHdoaWNoIGlzIGEgY29sbGVjdGlvbiBvZiBgTWF0dGVyLkJvZHlgLCBgTWF0dGVyLkNvbnN0cmFpbnRgIGFuZCBvdGhlciBgTWF0dGVyLkNvbXBvc2l0ZWAuXG4qIEEgYE1hdHRlci5Xb3JsZGAgaGFzIGEgZmV3IGFkZGl0aW9uYWwgcHJvcGVydGllcyBpbmNsdWRpbmcgYGdyYXZpdHlgIGFuZCBgYm91bmRzYC5cbiogSXQgaXMgaW1wb3J0YW50IHRvIHVzZSB0aGUgZnVuY3Rpb25zIGluIHRoZSBgTWF0dGVyLkNvbXBvc2l0ZWAgbW9kdWxlIHRvIG1vZGlmeSB0aGUgd29ybGQgY29tcG9zaXRlLCByYXRoZXIgdGhhbiBkaXJlY3RseSBtb2RpZnlpbmcgaXRzIHByb3BlcnRpZXMuXG4qIFRoZXJlIGFyZSBhbHNvIGEgZmV3IG1ldGhvZHMgaGVyZSB0aGF0IGFsaWFzIHRob3NlIGluIGBNYXR0ZXIuQ29tcG9zaXRlYCBmb3IgZWFzaWVyIHJlYWRhYmlsaXR5LlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgV29ybGRcbiogQGV4dGVuZHMgQ29tcG9zaXRlXG4qL1xuXG52YXIgV29ybGQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JsZDtcblxudmFyIENvbXBvc2l0ZSA9IF9kZXJlcV8oJy4vQ29tcG9zaXRlJyk7XG52YXIgQ29uc3RyYWludCA9IF9kZXJlcV8oJy4uL2NvbnN0cmFpbnQvQ29uc3RyYWludCcpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgd29ybGQgY29tcG9zaXRlLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHt3b3JsZH0gQSBuZXcgd29ybGRcbiAgICAgKi9cbiAgICBXb3JsZC5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBjb21wb3NpdGUgPSBDb21wb3NpdGUuY3JlYXRlKCk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGFiZWw6ICdXb3JsZCcsXG4gICAgICAgICAgICBncmF2aXR5OiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgICAgIHNjYWxlOiAwLjAwMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvdW5kczogeyBcbiAgICAgICAgICAgICAgICBtaW46IHsgeDogLUluZmluaXR5LCB5OiAtSW5maW5pdHkgfSwgXG4gICAgICAgICAgICAgICAgbWF4OiB7IHg6IEluZmluaXR5LCB5OiBJbmZpbml0eSB9IFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoY29tcG9zaXRlLCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyYXZpdHkgdG8gYXBwbHkgb24gdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHlcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmF2aXR5IHggY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHkueFxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmF2aXR5IHkgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHkueVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBncmF2aXR5IHNjYWxlIGZhY3Rvci5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnNjYWxlXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMC4wMDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvdW5kc2Agb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgd29ybGQgYm91bmRzIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvdW5kc1xuICAgICAqIEB0eXBlIGJvdW5kc1xuICAgICAqIEBkZWZhdWx0IHsgbWluOiB7IHg6IC1JbmZpbml0eSwgeTogLUluZmluaXR5IH0sIG1heDogeyB4OiBJbmZpbml0eSwgeTogSW5maW5pdHkgfSB9XG4gICAgICovXG5cbiAgICAvLyBXb3JsZCBpcyBhIENvbXBvc2l0ZSBib2R5XG4gICAgLy8gc2VlIHNyYy9tb2R1bGUvT3V0cm8uanMgZm9yIHRoZXNlIGFsaWFzZXM6XG4gICAgXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXMgZm9yIENvbXBvc2l0ZS5hZGRcbiAgICAgKiBAbWV0aG9kIGFkZFxuICAgICAqIEBwYXJhbSB7d29ybGR9IHdvcmxkXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIHdvcmxkIHdpdGggdGhlIG9iamVjdHMgYWRkZWRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFsaWFzIGZvciBDb21wb3NpdGUucmVtb3ZlXG4gICAgICogQG1ldGhvZCByZW1vdmVcbiAgICAgKiBAcGFyYW0ge3dvcmxkfSB3b3JsZFxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIHdvcmxkIHdpdGggdGhlIG9iamVjdHMgcmVtb3ZlZFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXMgZm9yIENvbXBvc2l0ZS5jbGVhclxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge3dvcmxkfSB3b3JsZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0ga2VlcFN0YXRpY1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXMgZm9yIENvbXBvc2l0ZS5hZGRDb21wb3NpdGVcbiAgICAgKiBAbWV0aG9kIGFkZENvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7d29ybGR9IHdvcmxkXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge3dvcmxkfSBUaGUgb3JpZ2luYWwgd29ybGQgd2l0aCB0aGUgb2JqZWN0cyBmcm9tIGNvbXBvc2l0ZSBhZGRlZFxuICAgICAqL1xuICAgIFxuICAgICAvKipcbiAgICAgICogQW4gYWxpYXMgZm9yIENvbXBvc2l0ZS5hZGRCb2R5XG4gICAgICAqIEBtZXRob2QgYWRkQm9keVxuICAgICAgKiBAcGFyYW0ge3dvcmxkfSB3b3JsZFxuICAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgICogQHJldHVybiB7d29ybGR9IFRoZSBvcmlnaW5hbCB3b3JsZCB3aXRoIHRoZSBib2R5IGFkZGVkXG4gICAgICAqL1xuXG4gICAgIC8qKlxuICAgICAgKiBBbiBhbGlhcyBmb3IgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnRcbiAgICAgICogQG1ldGhvZCBhZGRDb25zdHJhaW50XG4gICAgICAqIEBwYXJhbSB7d29ybGR9IHdvcmxkXG4gICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAgKiBAcmV0dXJuIHt3b3JsZH0gVGhlIG9yaWdpbmFsIHdvcmxkIHdpdGggdGhlIGNvbnN0cmFpbnQgYWRkZWRcbiAgICAgICovXG5cbn0pKCk7XG5cbn0se1wiLi4vY29uc3RyYWludC9Db25zdHJhaW50XCI6MTIsXCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi9Db21wb3NpdGVcIjoyfV0sNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuQ29udGFjdGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIGNvbnRhY3RzLlxuKlxuKiBAY2xhc3MgQ29udGFjdFxuKi9cblxudmFyIENvbnRhY3QgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWN0O1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbnRhY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRleH0gdmVydGV4XG4gICAgICogQHJldHVybiB7Y29udGFjdH0gQSBuZXcgY29udGFjdFxuICAgICAqL1xuICAgIENvbnRhY3QuY3JlYXRlID0gZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogQ29udGFjdC5pZCh2ZXJ0ZXgpLFxuICAgICAgICAgICAgdmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICBub3JtYWxJbXB1bHNlOiAwLFxuICAgICAgICAgICAgdGFuZ2VudEltcHVsc2U6IDBcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGNvbnRhY3QgaWQuXG4gICAgICogQG1ldGhvZCBpZFxuICAgICAqIEBwYXJhbSB7dmVydGV4fSB2ZXJ0ZXhcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFVuaXF1ZSBjb250YWN0SURcbiAgICAgKi9cbiAgICBDb250YWN0LmlkID0gZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICAgIHJldHVybiB2ZXJ0ZXguYm9keS5pZCArICdfJyArIHZlcnRleC5pbmRleDtcbiAgICB9O1xuXG59KSgpO1xuXG59LHt9XSw1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5EZXRlY3RvcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGRldGVjdGluZyBjb2xsaXNpb25zIGdpdmVuIGEgc2V0IG9mIHBhaXJzLlxuKlxuKiBAY2xhc3MgRGV0ZWN0b3JcbiovXG5cbi8vIFRPRE86IHNwZWN1bGF0aXZlIGNvbnRhY3RzXG5cbnZhciBEZXRlY3RvciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldGVjdG9yO1xuXG52YXIgU0FUID0gX2RlcmVxXygnLi9TQVQnKTtcbnZhciBQYWlyID0gX2RlcmVxXygnLi9QYWlyJyk7XG52YXIgQm91bmRzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQm91bmRzJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFsbCBjb2xsaXNpb25zIGdpdmVuIGEgbGlzdCBvZiBwYWlycy5cbiAgICAgKiBAbWV0aG9kIGNvbGxpc2lvbnNcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gYnJvYWRwaGFzZVBhaXJzXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEByZXR1cm4ge2FycmF5fSBjb2xsaXNpb25zXG4gICAgICovXG4gICAgRGV0ZWN0b3IuY29sbGlzaW9ucyA9IGZ1bmN0aW9uKGJyb2FkcGhhc2VQYWlycywgZW5naW5lKSB7XG4gICAgICAgIHZhciBjb2xsaXNpb25zID0gW10sXG4gICAgICAgICAgICBwYWlyc1RhYmxlID0gZW5naW5lLnBhaXJzLnRhYmxlO1xuXG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJyb2FkcGhhc2VQYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlBID0gYnJvYWRwaGFzZVBhaXJzW2ldWzBdLCBcbiAgICAgICAgICAgICAgICBib2R5QiA9IGJyb2FkcGhhc2VQYWlyc1tpXVsxXTtcblxuICAgICAgICAgICAgaWYgKChib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nKSAmJiAoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghRGV0ZWN0b3IuY2FuQ29sbGlkZShib2R5QS5jb2xsaXNpb25GaWx0ZXIsIGJvZHlCLmNvbGxpc2lvbkZpbHRlcikpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cblxuICAgICAgICAgICAgLy8gbWlkIHBoYXNlXG4gICAgICAgICAgICBpZiAoQm91bmRzLm92ZXJsYXBzKGJvZHlBLmJvdW5kcywgYm9keUIuYm91bmRzKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBib2R5QS5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBib2R5QS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydEEgPSBib2R5QS5wYXJ0c1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gYm9keUIucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBrIDwgYm9keUIucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QiA9IGJvZHlCLnBhcnRzW2tdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHBhcnRBID09PSBib2R5QSAmJiBwYXJ0QiA9PT0gYm9keUIpIHx8IEJvdW5kcy5vdmVybGFwcyhwYXJ0QS5ib3VuZHMsIHBhcnRCLmJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIGEgcHJldmlvdXMgY29sbGlzaW9uIHdlIGNvdWxkIHJldXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhaXJJZCA9IFBhaXIuaWQocGFydEEsIHBhcnRCKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpciA9IHBhaXJzVGFibGVbcGFpcklkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb2xsaXNpb247XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFpciAmJiBwYWlyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb2xsaXNpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hcnJvdyBwaGFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBTQVQuY29sbGlkZXMocGFydEEsIHBhcnRCLCBwcmV2aW91c0NvbGxpc2lvbik7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24uY29sbGlkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGJvdGggc3VwcGxpZWQgY29sbGlzaW9uIGZpbHRlcnMgd2lsbCBhbGxvdyBhIGNvbGxpc2lvbiB0byBvY2N1ci5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIGNhbkNvbGxpZGVcbiAgICAgKiBAcGFyYW0ge30gZmlsdGVyQVxuICAgICAqIEBwYXJhbSB7fSBmaWx0ZXJCXG4gICAgICogQHJldHVybiB7Ym9vbH0gYHRydWVgIGlmIGNvbGxpc2lvbiBjYW4gb2NjdXJcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jYW5Db2xsaWRlID0gZnVuY3Rpb24oZmlsdGVyQSwgZmlsdGVyQikge1xuICAgICAgICBpZiAoZmlsdGVyQS5ncm91cCA9PT0gZmlsdGVyQi5ncm91cCAmJiBmaWx0ZXJBLmdyb3VwICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckEuZ3JvdXAgPiAwO1xuXG4gICAgICAgIHJldHVybiAoZmlsdGVyQS5tYXNrICYgZmlsdGVyQi5jYXRlZ29yeSkgIT09IDAgJiYgKGZpbHRlckIubWFzayAmIGZpbHRlckEuY2F0ZWdvcnkpICE9PSAwO1xuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi4vZ2VvbWV0cnkvQm91bmRzXCI6MjYsXCIuL1BhaXJcIjo3LFwiLi9TQVRcIjoxMX1dLDY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLkdyaWRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBicm9hZHBoYXNlIGdyaWQgc3RydWN0dXJlcy5cbipcbiogQGNsYXNzIEdyaWRcbiovXG5cbnZhciBHcmlkID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gR3JpZDtcblxudmFyIFBhaXIgPSBfZGVyZXFfKCcuL1BhaXInKTtcbnZhciBEZXRlY3RvciA9IF9kZXJlcV8oJy4vRGV0ZWN0b3InKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGdyaWQuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2dyaWR9IEEgbmV3IGdyaWRcbiAgICAgKi9cbiAgICBHcmlkLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY29udHJvbGxlcjogR3JpZCxcbiAgICAgICAgICAgIGRldGVjdG9yOiBEZXRlY3Rvci5jb2xsaXNpb25zLFxuICAgICAgICAgICAgYnVja2V0czoge30sXG4gICAgICAgICAgICBwYWlyczoge30sXG4gICAgICAgICAgICBwYWlyc0xpc3Q6IFtdLFxuICAgICAgICAgICAgYnVja2V0V2lkdGg6IDQ4LFxuICAgICAgICAgICAgYnVja2V0SGVpZ2h0OiA0OFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIGEgc2luZ2xlIGdyaWQgYnVja2V0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJ1Y2tldFdpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNDhcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgYSBzaW5nbGUgZ3JpZCBidWNrZXQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYnVja2V0SGVpZ2h0XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNDhcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGdyaWQuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2dyaWR9IGdyaWRcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yY2VVcGRhdGVcbiAgICAgKi9cbiAgICBHcmlkLnVwZGF0ZSA9IGZ1bmN0aW9uKGdyaWQsIGJvZGllcywgZW5naW5lLCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICB2YXIgaSwgY29sLCByb3csXG4gICAgICAgICAgICB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIGJ1Y2tldHMgPSBncmlkLmJ1Y2tldHMsXG4gICAgICAgICAgICBidWNrZXQsXG4gICAgICAgICAgICBidWNrZXRJZCxcbiAgICAgICAgICAgIGdyaWRDaGFuZ2VkID0gZmFsc2U7XG5cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTbGVlcGluZyAmJiAhZm9yY2VVcGRhdGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGRvbid0IHVwZGF0ZSBvdXQgb2Ygd29ybGQgYm9kaWVzXG4gICAgICAgICAgICBpZiAoYm9keS5ib3VuZHMubWF4LnggPCB3b3JsZC5ib3VuZHMubWluLnggfHwgYm9keS5ib3VuZHMubWluLnggPiB3b3JsZC5ib3VuZHMubWF4LnhcbiAgICAgICAgICAgICAgICB8fCBib2R5LmJvdW5kcy5tYXgueSA8IHdvcmxkLmJvdW5kcy5taW4ueSB8fCBib2R5LmJvdW5kcy5taW4ueSA+IHdvcmxkLmJvdW5kcy5tYXgueSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIG5ld1JlZ2lvbiA9IEdyaWQuX2dldFJlZ2lvbihncmlkLCBib2R5KTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIGJvZHkgaGFzIGNoYW5nZWQgZ3JpZCByZWdpb25cbiAgICAgICAgICAgIGlmICghYm9keS5yZWdpb24gfHwgbmV3UmVnaW9uLmlkICE9PSBib2R5LnJlZ2lvbi5pZCB8fCBmb3JjZVVwZGF0ZSkge1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoIWJvZHkucmVnaW9uIHx8IGZvcmNlVXBkYXRlKVxuICAgICAgICAgICAgICAgICAgICBib2R5LnJlZ2lvbiA9IG5ld1JlZ2lvbjtcblxuICAgICAgICAgICAgICAgIHZhciB1bmlvbiA9IEdyaWQuX3JlZ2lvblVuaW9uKG5ld1JlZ2lvbiwgYm9keS5yZWdpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGdyaWQgYnVja2V0cyBhZmZlY3RlZCBieSByZWdpb24gY2hhbmdlXG4gICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIHRoZSB1bmlvbiBvZiBib3RoIHJlZ2lvbnNcbiAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IHVuaW9uLnN0YXJ0Q29sOyBjb2wgPD0gdW5pb24uZW5kQ29sOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IHVuaW9uLnN0YXJ0Um93OyByb3cgPD0gdW5pb24uZW5kUm93OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0SWQgPSBHcmlkLl9nZXRCdWNrZXRJZChjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBidWNrZXRzW2J1Y2tldElkXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzSW5zaWRlTmV3UmVnaW9uID0gKGNvbCA+PSBuZXdSZWdpb24uc3RhcnRDb2wgJiYgY29sIDw9IG5ld1JlZ2lvbi5lbmRDb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHJvdyA+PSBuZXdSZWdpb24uc3RhcnRSb3cgJiYgcm93IDw9IG5ld1JlZ2lvbi5lbmRSb3cpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNJbnNpZGVPbGRSZWdpb24gPSAoY29sID49IGJvZHkucmVnaW9uLnN0YXJ0Q29sICYmIGNvbCA8PSBib2R5LnJlZ2lvbi5lbmRDb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHJvdyA+PSBib2R5LnJlZ2lvbi5zdGFydFJvdyAmJiByb3cgPD0gYm9keS5yZWdpb24uZW5kUm93KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZyb20gb2xkIHJlZ2lvbiBidWNrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW5zaWRlTmV3UmVnaW9uICYmIGlzSW5zaWRlT2xkUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5zaWRlT2xkUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWNrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLl9idWNrZXRSZW1vdmVCb2R5KGdyaWQsIGJ1Y2tldCwgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gbmV3IHJlZ2lvbiBidWNrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5yZWdpb24gPT09IG5ld1JlZ2lvbiB8fCAoaXNJbnNpZGVOZXdSZWdpb24gJiYgIWlzSW5zaWRlT2xkUmVnaW9uKSB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnVja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBHcmlkLl9jcmVhdGVCdWNrZXQoYnVja2V0cywgYnVja2V0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyaWQuX2J1Y2tldEFkZEJvZHkoZ3JpZCwgYnVja2V0LCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgbmV3IHJlZ2lvblxuICAgICAgICAgICAgICAgIGJvZHkucmVnaW9uID0gbmV3UmVnaW9uO1xuXG4gICAgICAgICAgICAgICAgLy8gZmxhZyBjaGFuZ2VzIHNvIHdlIGNhbiB1cGRhdGUgcGFpcnNcbiAgICAgICAgICAgICAgICBncmlkQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgcGFpcnMgbGlzdCBvbmx5IGlmIHBhaXJzIGNoYW5nZWQgKGkuZS4gYSBib2R5IGNoYW5nZWQgcmVnaW9uKVxuICAgICAgICBpZiAoZ3JpZENoYW5nZWQpXG4gICAgICAgICAgICBncmlkLnBhaXJzTGlzdCA9IEdyaWQuX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdChncmlkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBncmlkLlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge2dyaWR9IGdyaWRcbiAgICAgKi9cbiAgICBHcmlkLmNsZWFyID0gZnVuY3Rpb24oZ3JpZCkge1xuICAgICAgICBncmlkLmJ1Y2tldHMgPSB7fTtcbiAgICAgICAgZ3JpZC5wYWlycyA9IHt9O1xuICAgICAgICBncmlkLnBhaXJzTGlzdCA9IFtdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgdW5pb24gb2YgdHdvIHJlZ2lvbnMuXG4gICAgICogQG1ldGhvZCBfcmVnaW9uVW5pb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSByZWdpb25BXG4gICAgICogQHBhcmFtIHt9IHJlZ2lvbkJcbiAgICAgKiBAcmV0dXJuIHt9IHJlZ2lvblxuICAgICAqL1xuICAgIEdyaWQuX3JlZ2lvblVuaW9uID0gZnVuY3Rpb24ocmVnaW9uQSwgcmVnaW9uQikge1xuICAgICAgICB2YXIgc3RhcnRDb2wgPSBNYXRoLm1pbihyZWdpb25BLnN0YXJ0Q29sLCByZWdpb25CLnN0YXJ0Q29sKSxcbiAgICAgICAgICAgIGVuZENvbCA9IE1hdGgubWF4KHJlZ2lvbkEuZW5kQ29sLCByZWdpb25CLmVuZENvbCksXG4gICAgICAgICAgICBzdGFydFJvdyA9IE1hdGgubWluKHJlZ2lvbkEuc3RhcnRSb3csIHJlZ2lvbkIuc3RhcnRSb3cpLFxuICAgICAgICAgICAgZW5kUm93ID0gTWF0aC5tYXgocmVnaW9uQS5lbmRSb3csIHJlZ2lvbkIuZW5kUm93KTtcblxuICAgICAgICByZXR1cm4gR3JpZC5fY3JlYXRlUmVnaW9uKHN0YXJ0Q29sLCBlbmRDb2wsIHN0YXJ0Um93LCBlbmRSb3cpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByZWdpb24gYSBnaXZlbiBib2R5IGZhbGxzIGluIGZvciBhIGdpdmVuIGdyaWQuXG4gICAgICogQG1ldGhvZCBfZ2V0UmVnaW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBib2R5XG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9nZXRSZWdpb24gPSBmdW5jdGlvbihncmlkLCBib2R5KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBib2R5LmJvdW5kcyxcbiAgICAgICAgICAgIHN0YXJ0Q29sID0gTWF0aC5mbG9vcihib3VuZHMubWluLnggLyBncmlkLmJ1Y2tldFdpZHRoKSxcbiAgICAgICAgICAgIGVuZENvbCA9IE1hdGguZmxvb3IoYm91bmRzLm1heC54IC8gZ3JpZC5idWNrZXRXaWR0aCksXG4gICAgICAgICAgICBzdGFydFJvdyA9IE1hdGguZmxvb3IoYm91bmRzLm1pbi55IC8gZ3JpZC5idWNrZXRIZWlnaHQpLFxuICAgICAgICAgICAgZW5kUm93ID0gTWF0aC5mbG9vcihib3VuZHMubWF4LnkgLyBncmlkLmJ1Y2tldEhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIEdyaWQuX2NyZWF0ZVJlZ2lvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHJlZ2lvbi5cbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVSZWdpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBzdGFydENvbFxuICAgICAqIEBwYXJhbSB7fSBlbmRDb2xcbiAgICAgKiBAcGFyYW0ge30gc3RhcnRSb3dcbiAgICAgKiBAcGFyYW0ge30gZW5kUm93XG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVSZWdpb24gPSBmdW5jdGlvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgaWQ6IHN0YXJ0Q29sICsgJywnICsgZW5kQ29sICsgJywnICsgc3RhcnRSb3cgKyAnLCcgKyBlbmRSb3csXG4gICAgICAgICAgICBzdGFydENvbDogc3RhcnRDb2wsIFxuICAgICAgICAgICAgZW5kQ29sOiBlbmRDb2wsIFxuICAgICAgICAgICAgc3RhcnRSb3c6IHN0YXJ0Um93LCBcbiAgICAgICAgICAgIGVuZFJvdzogZW5kUm93IFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBidWNrZXQgaWQgYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqIEBtZXRob2QgX2dldEJ1Y2tldElkXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gY29sdW1uXG4gICAgICogQHBhcmFtIHt9IHJvd1xuICAgICAqIEByZXR1cm4ge3N0cmluZ30gYnVja2V0IGlkXG4gICAgICovXG4gICAgR3JpZC5fZ2V0QnVja2V0SWQgPSBmdW5jdGlvbihjb2x1bW4sIHJvdykge1xuICAgICAgICByZXR1cm4gJ0MnICsgY29sdW1uICsgJ1InICsgcm93O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYnVja2V0LlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZUJ1Y2tldFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldHNcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0SWRcbiAgICAgKiBAcmV0dXJuIHt9IGJ1Y2tldFxuICAgICAqL1xuICAgIEdyaWQuX2NyZWF0ZUJ1Y2tldCA9IGZ1bmN0aW9uKGJ1Y2tldHMsIGJ1Y2tldElkKSB7XG4gICAgICAgIHZhciBidWNrZXQgPSBidWNrZXRzW2J1Y2tldElkXSA9IFtdO1xuICAgICAgICByZXR1cm4gYnVja2V0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYm9keSB0byBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9idWNrZXRBZGRCb2R5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqL1xuICAgIEdyaWQuX2J1Y2tldEFkZEJvZHkgPSBmdW5jdGlvbihncmlkLCBidWNrZXQsIGJvZHkpIHtcbiAgICAgICAgLy8gYWRkIG5ldyBwYWlyc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1Y2tldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlCID0gYnVja2V0W2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pZCA9PT0gYm9keUIuaWQgfHwgKGJvZHkuaXNTdGF0aWMgJiYgYm9keUIuaXNTdGF0aWMpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBudW1iZXIgb2YgYnVja2V0cyB0aGUgcGFpciBleGlzdHMgaW5cbiAgICAgICAgICAgIC8vIGltcG9ydGFudCBmb3IgR3JpZC51cGRhdGUgdG8gd29ya1xuICAgICAgICAgICAgdmFyIHBhaXJJZCA9IFBhaXIuaWQoYm9keSwgYm9keUIpLFxuICAgICAgICAgICAgICAgIHBhaXIgPSBncmlkLnBhaXJzW3BhaXJJZF07XG5cbiAgICAgICAgICAgIGlmIChwYWlyKSB7XG4gICAgICAgICAgICAgICAgcGFpclsyXSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkLnBhaXJzW3BhaXJJZF0gPSBbYm9keSwgYm9keUIsIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHRvIGJvZGllcyAoYWZ0ZXIgcGFpcnMsIG90aGVyd2lzZSBwYWlycyB3aXRoIHNlbGYpXG4gICAgICAgIGJ1Y2tldC5wdXNoKGJvZHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYm9keSBmcm9tIGEgYnVja2V0LlxuICAgICAqIEBtZXRob2QgX2J1Y2tldFJlbW92ZUJvZHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBncmlkXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldFxuICAgICAqIEBwYXJhbSB7fSBib2R5XG4gICAgICovXG4gICAgR3JpZC5fYnVja2V0UmVtb3ZlQm9keSA9IGZ1bmN0aW9uKGdyaWQsIGJ1Y2tldCwgYm9keSkge1xuICAgICAgICAvLyByZW1vdmUgZnJvbSBidWNrZXRcbiAgICAgICAgYnVja2V0LnNwbGljZShDb21tb24uaW5kZXhPZihidWNrZXQsIGJvZHkpLCAxKTtcblxuICAgICAgICAvLyB1cGRhdGUgcGFpciBjb3VudHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWNrZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG51bWJlciBvZiBidWNrZXRzIHRoZSBwYWlyIGV4aXN0cyBpblxuICAgICAgICAgICAgLy8gaW1wb3J0YW50IGZvciBfY3JlYXRlQWN0aXZlUGFpcnNMaXN0IHRvIHdvcmtcbiAgICAgICAgICAgIHZhciBib2R5QiA9IGJ1Y2tldFtpXSxcbiAgICAgICAgICAgICAgICBwYWlySWQgPSBQYWlyLmlkKGJvZHksIGJvZHlCKSxcbiAgICAgICAgICAgICAgICBwYWlyID0gZ3JpZC5wYWlyc1twYWlySWRdO1xuXG4gICAgICAgICAgICBpZiAocGFpcilcbiAgICAgICAgICAgICAgICBwYWlyWzJdIC09IDE7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgbGlzdCBvZiB0aGUgYWN0aXZlIHBhaXJzIGluIHRoZSBncmlkLlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGdyaWRcbiAgICAgKiBAcmV0dXJuIFtdIHBhaXJzXG4gICAgICovXG4gICAgR3JpZC5fY3JlYXRlQWN0aXZlUGFpcnNMaXN0ID0gZnVuY3Rpb24oZ3JpZCkge1xuICAgICAgICB2YXIgcGFpcktleXMsXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgcGFpcnMgPSBbXTtcblxuICAgICAgICAvLyBncmlkLnBhaXJzIGlzIHVzZWQgYXMgYSBoYXNobWFwXG4gICAgICAgIHBhaXJLZXlzID0gQ29tbW9uLmtleXMoZ3JpZC5wYWlycyk7XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGdyaWQucGFpcnNcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBwYWlyS2V5cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgcGFpciA9IGdyaWQucGFpcnNbcGFpcktleXNba11dO1xuXG4gICAgICAgICAgICAvLyBpZiBwYWlyIGV4aXN0cyBpbiBhdCBsZWFzdCBvbmUgYnVja2V0XG4gICAgICAgICAgICAvLyBpdCBpcyBhIHBhaXIgdGhhdCBuZWVkcyBmdXJ0aGVyIGNvbGxpc2lvbiB0ZXN0aW5nIHNvIHB1c2ggaXRcbiAgICAgICAgICAgIGlmIChwYWlyWzJdID4gMCkge1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2gocGFpcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBncmlkLnBhaXJzW3BhaXJLZXlzW2tdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWlycztcbiAgICB9O1xuICAgIFxufSkoKTtcblxufSx7XCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi9EZXRlY3RvclwiOjUsXCIuL1BhaXJcIjo3fV0sNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuUGFpcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIHBhaXJzLlxuKlxuKiBAY2xhc3MgUGFpclxuKi9cblxudmFyIFBhaXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWlyO1xuXG52YXIgQ29udGFjdCA9IF9kZXJlcV8oJy4vQ29udGFjdCcpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBhaXIuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbn0gY29sbGlzaW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqIEByZXR1cm4ge3BhaXJ9IEEgbmV3IHBhaXJcbiAgICAgKi9cbiAgICBQYWlyLmNyZWF0ZSA9IGZ1bmN0aW9uKGNvbGxpc2lvbiwgdGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QSxcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCLFxuICAgICAgICAgICAgcGFyZW50QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgcGFyZW50QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuXG4gICAgICAgIHZhciBwYWlyID0ge1xuICAgICAgICAgICAgaWQ6IFBhaXIuaWQoYm9keUEsIGJvZHlCKSxcbiAgICAgICAgICAgIGJvZHlBOiBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCOiBib2R5QixcbiAgICAgICAgICAgIGNvbnRhY3RzOiB7fSxcbiAgICAgICAgICAgIGFjdGl2ZUNvbnRhY3RzOiBbXSxcbiAgICAgICAgICAgIHNlcGFyYXRpb246IDAsXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzU2Vuc29yOiBib2R5QS5pc1NlbnNvciB8fCBib2R5Qi5pc1NlbnNvcixcbiAgICAgICAgICAgIHRpbWVDcmVhdGVkOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICB0aW1lVXBkYXRlZDogdGltZXN0YW1wLFxuICAgICAgICAgICAgaW52ZXJzZU1hc3M6IHBhcmVudEEuaW52ZXJzZU1hc3MgKyBwYXJlbnRCLmludmVyc2VNYXNzLFxuICAgICAgICAgICAgZnJpY3Rpb246IE1hdGgubWluKHBhcmVudEEuZnJpY3Rpb24sIHBhcmVudEIuZnJpY3Rpb24pLFxuICAgICAgICAgICAgZnJpY3Rpb25TdGF0aWM6IE1hdGgubWF4KHBhcmVudEEuZnJpY3Rpb25TdGF0aWMsIHBhcmVudEIuZnJpY3Rpb25TdGF0aWMpLFxuICAgICAgICAgICAgcmVzdGl0dXRpb246IE1hdGgubWF4KHBhcmVudEEucmVzdGl0dXRpb24sIHBhcmVudEIucmVzdGl0dXRpb24pLFxuICAgICAgICAgICAgc2xvcDogTWF0aC5tYXgocGFyZW50QS5zbG9wLCBwYXJlbnRCLnNsb3ApXG4gICAgICAgIH07XG5cbiAgICAgICAgUGFpci51cGRhdGUocGFpciwgY29sbGlzaW9uLCB0aW1lc3RhbXApO1xuXG4gICAgICAgIHJldHVybiBwYWlyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcGFpciBnaXZlbiBhIGNvbGxpc2lvbi5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7cGFpcn0gcGFpclxuICAgICAqIEBwYXJhbSB7Y29sbGlzaW9ufSBjb2xsaXNpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICovXG4gICAgUGFpci51cGRhdGUgPSBmdW5jdGlvbihwYWlyLCBjb2xsaXNpb24sIHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgY29udGFjdHMgPSBwYWlyLmNvbnRhY3RzLFxuICAgICAgICAgICAgc3VwcG9ydHMgPSBjb2xsaXNpb24uc3VwcG9ydHMsXG4gICAgICAgICAgICBhY3RpdmVDb250YWN0cyA9IHBhaXIuYWN0aXZlQ29udGFjdHMsXG4gICAgICAgICAgICBwYXJlbnRBID0gY29sbGlzaW9uLnBhcmVudEEsXG4gICAgICAgICAgICBwYXJlbnRCID0gY29sbGlzaW9uLnBhcmVudEI7XG4gICAgICAgIFxuICAgICAgICBwYWlyLmNvbGxpc2lvbiA9IGNvbGxpc2lvbjtcbiAgICAgICAgcGFpci5pbnZlcnNlTWFzcyA9IHBhcmVudEEuaW52ZXJzZU1hc3MgKyBwYXJlbnRCLmludmVyc2VNYXNzO1xuICAgICAgICBwYWlyLmZyaWN0aW9uID0gTWF0aC5taW4ocGFyZW50QS5mcmljdGlvbiwgcGFyZW50Qi5mcmljdGlvbik7XG4gICAgICAgIHBhaXIuZnJpY3Rpb25TdGF0aWMgPSBNYXRoLm1heChwYXJlbnRBLmZyaWN0aW9uU3RhdGljLCBwYXJlbnRCLmZyaWN0aW9uU3RhdGljKTtcbiAgICAgICAgcGFpci5yZXN0aXR1dGlvbiA9IE1hdGgubWF4KHBhcmVudEEucmVzdGl0dXRpb24sIHBhcmVudEIucmVzdGl0dXRpb24pO1xuICAgICAgICBwYWlyLnNsb3AgPSBNYXRoLm1heChwYXJlbnRBLnNsb3AsIHBhcmVudEIuc2xvcCk7XG4gICAgICAgIGFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA9IDA7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29sbGlzaW9uLmNvbGxpZGVkKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1cHBvcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1cHBvcnQgPSBzdXBwb3J0c1tpXSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdElkID0gQ29udGFjdC5pZChzdXBwb3J0KSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdCA9IGNvbnRhY3RzW2NvbnRhY3RJZF07XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGFjdCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDb250YWN0cy5wdXNoKGNvbnRhY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNvbnRhY3RzLnB1c2goY29udGFjdHNbY29udGFjdElkXSA9IENvbnRhY3QuY3JlYXRlKHN1cHBvcnQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhaXIuc2VwYXJhdGlvbiA9IGNvbGxpc2lvbi5kZXB0aDtcbiAgICAgICAgICAgIFBhaXIuc2V0QWN0aXZlKHBhaXIsIHRydWUsIHRpbWVzdGFtcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFpci5pc0FjdGl2ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICBQYWlyLnNldEFjdGl2ZShwYWlyLCBmYWxzZSwgdGltZXN0YW1wKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogU2V0IGEgcGFpciBhcyBhY3RpdmUgb3IgaW5hY3RpdmUuXG4gICAgICogQG1ldGhvZCBzZXRBY3RpdmVcbiAgICAgKiBAcGFyYW0ge3BhaXJ9IHBhaXJcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IGlzQWN0aXZlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXIuc2V0QWN0aXZlID0gZnVuY3Rpb24ocGFpciwgaXNBY3RpdmUsIHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHBhaXIuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgcGFpci50aW1lVXBkYXRlZCA9IHRpbWVzdGFtcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhaXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlkIGZvciB0aGUgZ2l2ZW4gcGFpci5cbiAgICAgKiBAbWV0aG9kIGlkXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFVuaXF1ZSBwYWlySWRcbiAgICAgKi9cbiAgICBQYWlyLmlkID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCKSB7XG4gICAgICAgIGlmIChib2R5QS5pZCA8IGJvZHlCLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0EnICsgYm9keUEuaWQgKyAnQicgKyBib2R5Qi5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnQScgKyBib2R5Qi5pZCArICdCJyArIGJvZHlBLmlkO1xuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuL0NvbnRhY3RcIjo0fV0sODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuUGFpcnNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbGxpc2lvbiBwYWlyIHNldHMuXG4qXG4qIEBjbGFzcyBQYWlyc1xuKi9cblxudmFyIFBhaXJzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUGFpcnM7XG5cbnZhciBQYWlyID0gX2RlcmVxXygnLi9QYWlyJyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcblxuKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIFBhaXJzLl9wYWlyTWF4SWRsZUxpZmUgPSAxMDAwO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBwYWlycyBzdHJ1Y3R1cmUuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge3BhaXJzfSBBIG5ldyBwYWlycyBzdHJ1Y3R1cmVcbiAgICAgKi9cbiAgICBQYWlycy5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKHsgXG4gICAgICAgICAgICB0YWJsZToge30sXG4gICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0OiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbkFjdGl2ZTogW10sXG4gICAgICAgICAgICBjb2xsaXNpb25FbmQ6IFtdXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHBhaXJzIGdpdmVuIGEgbGlzdCBvZiBjb2xsaXNpb25zLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhaXJzXG4gICAgICogQHBhcmFtIHtjb2xsaXNpb25bXX0gY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBQYWlycy51cGRhdGUgPSBmdW5jdGlvbihwYWlycywgY29sbGlzaW9ucywgdGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBwYWlyc0xpc3QgPSBwYWlycy5saXN0LFxuICAgICAgICAgICAgcGFpcnNUYWJsZSA9IHBhaXJzLnRhYmxlLFxuICAgICAgICAgICAgY29sbGlzaW9uU3RhcnQgPSBwYWlycy5jb2xsaXNpb25TdGFydCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkVuZCA9IHBhaXJzLmNvbGxpc2lvbkVuZCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkFjdGl2ZSA9IHBhaXJzLmNvbGxpc2lvbkFjdGl2ZSxcbiAgICAgICAgICAgIGFjdGl2ZVBhaXJJZHMgPSBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIHBhaXJJZCxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIGNsZWFyIGNvbGxpc2lvbiBzdGF0ZSBhcnJheXMsIGJ1dCBtYWludGFpbiBvbGQgcmVmZXJlbmNlXG4gICAgICAgIGNvbGxpc2lvblN0YXJ0Lmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbGxpc2lvbkVuZC5sZW5ndGggPSAwO1xuICAgICAgICBjb2xsaXNpb25BY3RpdmUubGVuZ3RoID0gMDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29sbGlzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29sbGlzaW9uID0gY29sbGlzaW9uc1tpXTtcblxuICAgICAgICAgICAgaWYgKGNvbGxpc2lvbi5jb2xsaWRlZCkge1xuICAgICAgICAgICAgICAgIHBhaXJJZCA9IFBhaXIuaWQoY29sbGlzaW9uLmJvZHlBLCBjb2xsaXNpb24uYm9keUIpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZVBhaXJJZHMucHVzaChwYWlySWQpO1xuXG4gICAgICAgICAgICAgICAgcGFpciA9IHBhaXJzVGFibGVbcGFpcklkXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocGFpcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWlyIGFscmVhZHkgZXhpc3RzIChidXQgbWF5IG9yIG1heSBub3QgYmUgYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICBpZiAocGFpci5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFpciBleGlzdHMgYW5kIGlzIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlLnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWlyIGV4aXN0cyBidXQgd2FzIGluYWN0aXZlLCBzbyBhIGNvbGxpc2lvbiBoYXMganVzdCBzdGFydGVkIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25TdGFydC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBwYWlyXG4gICAgICAgICAgICAgICAgICAgIFBhaXIudXBkYXRlKHBhaXIsIGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWlyIGRpZCBub3QgZXhpc3QsIGNyZWF0ZSBhIG5ldyBwYWlyXG4gICAgICAgICAgICAgICAgICAgIHBhaXIgPSBQYWlyLmNyZWF0ZShjb2xsaXNpb24sIHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgICAgIHBhaXJzVGFibGVbcGFpcklkXSA9IHBhaXI7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHVzaCB0aGUgbmV3IHBhaXJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uU3RhcnQucHVzaChwYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgcGFpcnNMaXN0LnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVhY3RpdmF0ZSBwcmV2aW91c2x5IGFjdGl2ZSBwYWlycyB0aGF0IGFyZSBub3cgaW5hY3RpdmVcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzTGlzdFtpXTtcbiAgICAgICAgICAgIGlmIChwYWlyLmlzQWN0aXZlICYmIENvbW1vbi5pbmRleE9mKGFjdGl2ZVBhaXJJZHMsIHBhaXIuaWQpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIFBhaXIuc2V0QWN0aXZlKHBhaXIsIGZhbHNlLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkVuZC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbmQgcmVtb3ZlcyBwYWlycyB0aGF0IGhhdmUgYmVlbiBpbmFjdGl2ZSBmb3IgYSBzZXQgYW1vdW50IG9mIHRpbWUuXG4gICAgICogQG1ldGhvZCByZW1vdmVPbGRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICovXG4gICAgUGFpcnMucmVtb3ZlT2xkID0gZnVuY3Rpb24ocGFpcnMsIHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgcGFpcnNMaXN0ID0gcGFpcnMubGlzdCxcbiAgICAgICAgICAgIHBhaXJzVGFibGUgPSBwYWlycy50YWJsZSxcbiAgICAgICAgICAgIGluZGV4ZXNUb1JlbW92ZSA9IFtdLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIHBhaXJJbmRleCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzTGlzdFtpXTtcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBuZXZlciByZW1vdmUgc2xlZXBpbmcgcGFpcnNcbiAgICAgICAgICAgIGlmIChjb2xsaXNpb24uYm9keUEuaXNTbGVlcGluZyB8fCBjb2xsaXNpb24uYm9keUIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHBhaXIudGltZVVwZGF0ZWQgPSB0aW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHBhaXIgaXMgaW5hY3RpdmUgZm9yIHRvbyBsb25nLCBtYXJrIGl0IHRvIGJlIHJlbW92ZWRcbiAgICAgICAgICAgIGlmICh0aW1lc3RhbXAgLSBwYWlyLnRpbWVVcGRhdGVkID4gUGFpcnMuX3BhaXJNYXhJZGxlTGlmZSkge1xuICAgICAgICAgICAgICAgIGluZGV4ZXNUb1JlbW92ZS5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIG1hcmtlZCBwYWlyc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5kZXhlc1RvUmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlySW5kZXggPSBpbmRleGVzVG9SZW1vdmVbaV0gLSBpO1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzTGlzdFtwYWlySW5kZXhdO1xuICAgICAgICAgICAgZGVsZXRlIHBhaXJzVGFibGVbcGFpci5pZF07XG4gICAgICAgICAgICBwYWlyc0xpc3Quc3BsaWNlKHBhaXJJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBnaXZlbiBwYWlycyBzdHJ1Y3R1cmUuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7cGFpcnN9IHBhaXJzXG4gICAgICogQHJldHVybiB7cGFpcnN9IHBhaXJzXG4gICAgICovXG4gICAgUGFpcnMuY2xlYXIgPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICBwYWlycy50YWJsZSA9IHt9O1xuICAgICAgICBwYWlycy5saXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgIHBhaXJzLmNvbGxpc2lvblN0YXJ0Lmxlbmd0aCA9IDA7XG4gICAgICAgIHBhaXJzLmNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPSAwO1xuICAgICAgICBwYWlycy5jb2xsaXNpb25FbmQubGVuZ3RoID0gMDtcbiAgICAgICAgcmV0dXJuIHBhaXJzO1xuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi4vY29yZS9Db21tb25cIjoxNCxcIi4vUGFpclwiOjd9XSw5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5RdWVyeWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIHBlcmZvcm1pbmcgY29sbGlzaW9uIHF1ZXJpZXMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBRdWVyeVxuKi9cblxudmFyIFF1ZXJ5ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbnZhciBWZWN0b3IgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZWN0b3InKTtcbnZhciBTQVQgPSBfZGVyZXFfKCcuL1NBVCcpO1xudmFyIEJvdW5kcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0JvdW5kcycpO1xudmFyIEJvZGllcyA9IF9kZXJlcV8oJy4uL2ZhY3RvcnkvQm9kaWVzJyk7XG52YXIgVmVydGljZXMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZXJ0aWNlcycpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBjb2xsaXNpb25zIGJldHdlZW4gYGJvZHlgIGFuZCBgYm9kaWVzYC5cbiAgICAgKiBAbWV0aG9kIGNvbGxpZGVzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEByZXR1cm4ge29iamVjdFtdfSBDb2xsaXNpb25zXG4gICAgICovXG4gICAgUXVlcnkuY29sbGlkZXMgPSBmdW5jdGlvbihib2R5LCBib2RpZXMpIHtcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlBID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoQm91bmRzLm92ZXJsYXBzKGJvZHlBLmJvdW5kcywgYm9keS5ib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGJvZHlBLnBhcnRzLmxlbmd0aCA9PT0gMSA/IDAgOiAxOyBqIDwgYm9keUEucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5QS5wYXJ0c1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQm91bmRzLm92ZXJsYXBzKHBhcnQuYm91bmRzLCBib2R5LmJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBTQVQuY29sbGlkZXMocGFydCwgYm9keSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24uY29sbGlkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goY29sbGlzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsaXNpb25zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYXN0cyBhIHJheSBzZWdtZW50IGFnYWluc3QgYSBzZXQgb2YgYm9kaWVzIGFuZCByZXR1cm5zIGFsbCBjb2xsaXNpb25zLCByYXkgd2lkdGggaXMgb3B0aW9uYWwuIEludGVyc2VjdGlvbiBwb2ludHMgYXJlIG5vdCBwcm92aWRlZC5cbiAgICAgKiBAbWV0aG9kIHJheVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gc3RhcnRQb2ludFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBlbmRQb2ludFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmF5V2lkdGhdXG4gICAgICogQHJldHVybiB7b2JqZWN0W119IENvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBRdWVyeS5yYXkgPSBmdW5jdGlvbihib2RpZXMsIHN0YXJ0UG9pbnQsIGVuZFBvaW50LCByYXlXaWR0aCkge1xuICAgICAgICByYXlXaWR0aCA9IHJheVdpZHRoIHx8IDFlLTEwMDtcblxuICAgICAgICB2YXIgcmF5QW5nbGUgPSBWZWN0b3IuYW5nbGUoc3RhcnRQb2ludCwgZW5kUG9pbnQpLFxuICAgICAgICAgICAgcmF5TGVuZ3RoID0gVmVjdG9yLm1hZ25pdHVkZShWZWN0b3Iuc3ViKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSksXG4gICAgICAgICAgICByYXlYID0gKGVuZFBvaW50LnggKyBzdGFydFBvaW50LngpICogMC41LFxuICAgICAgICAgICAgcmF5WSA9IChlbmRQb2ludC55ICsgc3RhcnRQb2ludC55KSAqIDAuNSxcbiAgICAgICAgICAgIHJheSA9IEJvZGllcy5yZWN0YW5nbGUocmF5WCwgcmF5WSwgcmF5TGVuZ3RoLCByYXlXaWR0aCwgeyBhbmdsZTogcmF5QW5nbGUgfSksXG4gICAgICAgICAgICBjb2xsaXNpb25zID0gUXVlcnkuY29sbGlkZXMocmF5LCBib2RpZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGlzaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IGNvbGxpc2lvbnNbaV07XG4gICAgICAgICAgICBjb2xsaXNpb24uYm9keSA9IGNvbGxpc2lvbi5ib2R5QiA9IGNvbGxpc2lvbi5ib2R5QTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsaXNpb25zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBib2RpZXMgd2hvc2UgYm91bmRzIGFyZSBpbnNpZGUgKG9yIG91dHNpZGUgaWYgc2V0KSB0aGUgZ2l2ZW4gc2V0IG9mIGJvdW5kcywgZnJvbSB0aGUgZ2l2ZW4gc2V0IG9mIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIHJlZ2lvblxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHtib29sfSBbb3V0c2lkZT1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtib2R5W119IFRoZSBib2RpZXMgbWF0Y2hpbmcgdGhlIHF1ZXJ5XG4gICAgICovXG4gICAgUXVlcnkucmVnaW9uID0gZnVuY3Rpb24oYm9kaWVzLCBib3VuZHMsIG91dHNpZGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBvdmVybGFwcyA9IEJvdW5kcy5vdmVybGFwcyhib2R5LmJvdW5kcywgYm91bmRzKTtcbiAgICAgICAgICAgIGlmICgob3ZlcmxhcHMgJiYgIW91dHNpZGUpIHx8ICghb3ZlcmxhcHMgJiYgb3V0c2lkZSkpXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBib2RpZXMgd2hvc2UgdmVydGljZXMgY29udGFpbiB0aGUgZ2l2ZW4gcG9pbnQsIGZyb20gdGhlIGdpdmVuIHNldCBvZiBib2RpZXMuXG4gICAgICogQG1ldGhvZCBwb2ludFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtib2R5W119IFRoZSBib2RpZXMgbWF0Y2hpbmcgdGhlIHF1ZXJ5XG4gICAgICovXG4gICAgUXVlcnkucG9pbnQgPSBmdW5jdGlvbihib2RpZXMsIHBvaW50KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMoYm9keS5ib3VuZHMsIHBvaW50KSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSA/IDAgOiAxOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhwYXJ0LmJvdW5kcywgcG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBWZXJ0aWNlcy5jb250YWlucyhwYXJ0LnZlcnRpY2VzLCBwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi4vZmFjdG9yeS9Cb2RpZXNcIjoyMyxcIi4uL2dlb21ldHJ5L0JvdW5kc1wiOjI2LFwiLi4vZ2VvbWV0cnkvVmVjdG9yXCI6MjgsXCIuLi9nZW9tZXRyeS9WZXJ0aWNlc1wiOjI5LFwiLi9TQVRcIjoxMX1dLDEwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5SZXNvbHZlcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIHJlc29sdmluZyBjb2xsaXNpb24gcGFpcnMuXG4qXG4qIEBjbGFzcyBSZXNvbHZlclxuKi9cblxudmFyIFJlc29sdmVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzb2x2ZXI7XG5cbnZhciBWZXJ0aWNlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlcnRpY2VzJyk7XG52YXIgVmVjdG9yID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVjdG9yJyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcbnZhciBCb3VuZHMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9Cb3VuZHMnKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2ggPSA0O1xuICAgIFJlc29sdmVyLl9yZXN0aW5nVGhyZXNoVGFuZ2VudCA9IDY7XG4gICAgUmVzb2x2ZXIuX3Bvc2l0aW9uRGFtcGVuID0gMC45O1xuICAgIFJlc29sdmVyLl9wb3NpdGlvbldhcm1pbmcgPSAwLjg7XG4gICAgUmVzb2x2ZXIuX2ZyaWN0aW9uTm9ybWFsTXVsdGlwbGllciA9IDU7XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHBhaXJzIGZvciBwb3NpdGlvbiBzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcHJlU29sdmVQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnByZVNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBhY3RpdmVDb3VudDtcblxuICAgICAgICAvLyBmaW5kIHRvdGFsIGNvbnRhY3RzIG9uIGVhY2ggYm9keVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhY3RpdmVDb3VudCA9IHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoO1xuICAgICAgICAgICAgcGFpci5jb2xsaXNpb24ucGFyZW50QS50b3RhbENvbnRhY3RzICs9IGFjdGl2ZUNvdW50O1xuICAgICAgICAgICAgcGFpci5jb2xsaXNpb24ucGFyZW50Qi50b3RhbENvbnRhY3RzICs9IGFjdGl2ZUNvdW50O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgYSBzb2x1dGlvbiBmb3IgcGFpciBwb3NpdGlvbnMuXG4gICAgICogQG1ldGhvZCBzb2x2ZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIFJlc29sdmVyLnNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihwYWlycywgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICBib2R5QnRvQSxcbiAgICAgICAgICAgIGNvbnRhY3RTaGFyZSxcbiAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSxcbiAgICAgICAgICAgIGNvbnRhY3RDb3VudCA9IHt9LFxuICAgICAgICAgICAgdGVtcEEgPSBWZWN0b3IuX3RlbXBbMF0sXG4gICAgICAgICAgICB0ZW1wQiA9IFZlY3Rvci5fdGVtcFsxXSxcbiAgICAgICAgICAgIHRlbXBDID0gVmVjdG9yLl90ZW1wWzJdLFxuICAgICAgICAgICAgdGVtcEQgPSBWZWN0b3IuX3RlbXBbM107XG5cbiAgICAgICAgLy8gZmluZCBpbXB1bHNlcyByZXF1aXJlZCB0byByZXNvbHZlIHBlbmV0cmF0aW9uXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QjtcbiAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWw7XG5cbiAgICAgICAgICAgIC8vIGdldCBjdXJyZW50IHNlcGFyYXRpb24gYmV0d2VlbiBib2R5IGVkZ2VzIGludm9sdmVkIGluIGNvbGxpc2lvblxuICAgICAgICAgICAgYm9keUJ0b0EgPSBWZWN0b3Iuc3ViKFZlY3Rvci5hZGQoYm9keUIucG9zaXRpb25JbXB1bHNlLCBib2R5Qi5wb3NpdGlvbiwgdGVtcEEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb25JbXB1bHNlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZWN0b3Iuc3ViKGJvZHlCLnBvc2l0aW9uLCBjb2xsaXNpb24ucGVuZXRyYXRpb24sIHRlbXBCKSwgdGVtcEMpLCB0ZW1wRCk7XG5cbiAgICAgICAgICAgIHBhaXIuc2VwYXJhdGlvbiA9IFZlY3Rvci5kb3Qobm9ybWFsLCBib2R5QnRvQSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QjtcbiAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWw7XG4gICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UgPSAocGFpci5zZXBhcmF0aW9uIC0gcGFpci5zbG9wKSAqIHRpbWVTY2FsZTtcblxuICAgICAgICAgICAgaWYgKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlCLmlzU3RhdGljKVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSAqPSAyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIShib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhY3RTaGFyZSA9IFJlc29sdmVyLl9wb3NpdGlvbkRhbXBlbiAvIGJvZHlBLnRvdGFsQ29udGFjdHM7XG4gICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25JbXB1bHNlLnggKz0gbm9ybWFsLnggKiBwb3NpdGlvbkltcHVsc2UgKiBjb250YWN0U2hhcmU7XG4gICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25JbXB1bHNlLnkgKz0gbm9ybWFsLnkgKiBwb3NpdGlvbkltcHVsc2UgKiBjb250YWN0U2hhcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgY29udGFjdFNoYXJlID0gUmVzb2x2ZXIuX3Bvc2l0aW9uRGFtcGVuIC8gYm9keUIudG90YWxDb250YWN0cztcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvbkltcHVsc2UueCAtPSBub3JtYWwueCAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvbkltcHVsc2UueSAtPSBub3JtYWwueSAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBwb3NpdGlvbiByZXNvbHV0aW9uLlxuICAgICAqIEBtZXRob2QgcG9zdFNvbHZlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgUmVzb2x2ZXIucG9zdFNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICAvLyByZXNldCBjb250YWN0IGNvdW50XG4gICAgICAgICAgICBib2R5LnRvdGFsQ29udGFjdHMgPSAwO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5wb3NpdGlvbkltcHVsc2UueCAhPT0gMCB8fCBib2R5LnBvc2l0aW9uSW1wdWxzZS55ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGJvZHkgZ2VvbWV0cnlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgYm9keS5wb3NpdGlvbkltcHVsc2UpO1xuICAgICAgICAgICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi54ICs9IGJvZHkucG9zaXRpb25JbXB1bHNlLng7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBib2R5LnBvc2l0aW9uSW1wdWxzZS55O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG1vdmUgdGhlIGJvZHkgd2l0aG91dCBjaGFuZ2luZyB2ZWxvY2l0eVxuICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggKz0gYm9keS5wb3NpdGlvbkltcHVsc2UueDtcbiAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IGJvZHkucG9zaXRpb25JbXB1bHNlLnk7XG5cbiAgICAgICAgICAgICAgICBpZiAoVmVjdG9yLmRvdChib2R5LnBvc2l0aW9uSW1wdWxzZSwgYm9keS52ZWxvY2l0eSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IGNhY2hlZCBpbXB1bHNlIGlmIHRoZSBib2R5IGhhcyB2ZWxvY2l0eSBhbG9uZyBpdFxuICAgICAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uSW1wdWxzZS54ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5wb3NpdGlvbkltcHVsc2UueSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FybSB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgYm9keS5wb3NpdGlvbkltcHVsc2UueCAqPSBSZXNvbHZlci5fcG9zaXRpb25XYXJtaW5nO1xuICAgICAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uSW1wdWxzZS55ICo9IFJlc29sdmVyLl9wb3NpdGlvbldhcm1pbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgcGFpcnMgZm9yIHZlbG9jaXR5IHNvbHZpbmcuXG4gICAgICogQG1ldGhvZCBwcmVTb2x2ZVZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICovXG4gICAgUmVzb2x2ZXIucHJlU29sdmVWZWxvY2l0eSA9IGZ1bmN0aW9uKHBhaXJzKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBjb250YWN0cyxcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICB0YW5nZW50LFxuICAgICAgICAgICAgY29udGFjdCxcbiAgICAgICAgICAgIGNvbnRhY3RWZXJ0ZXgsXG4gICAgICAgICAgICBub3JtYWxJbXB1bHNlLFxuICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UsXG4gICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICBpbXB1bHNlID0gVmVjdG9yLl90ZW1wWzBdLFxuICAgICAgICAgICAgdGVtcEEgPSBWZWN0b3IuX3RlbXBbMV07XG4gICAgICAgIFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlIHx8IHBhaXIuaXNTZW5zb3IpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRhY3RzID0gcGFpci5hY3RpdmVDb250YWN0cztcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24ucGFyZW50QTtcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLnBhcmVudEI7XG4gICAgICAgICAgICBub3JtYWwgPSBjb2xsaXNpb24ubm9ybWFsO1xuICAgICAgICAgICAgdGFuZ2VudCA9IGNvbGxpc2lvbi50YW5nZW50O1xuXG4gICAgICAgICAgICAvLyByZXNvbHZlIGVhY2ggY29udGFjdFxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvbnRhY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29udGFjdCA9IGNvbnRhY3RzW2pdO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RWZXJ0ZXggPSBjb250YWN0LnZlcnRleDtcbiAgICAgICAgICAgICAgICBub3JtYWxJbXB1bHNlID0gY29udGFjdC5ub3JtYWxJbXB1bHNlO1xuICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gY29udGFjdC50YW5nZW50SW1wdWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChub3JtYWxJbXB1bHNlICE9PSAwIHx8IHRhbmdlbnRJbXB1bHNlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvdGFsIGltcHVsc2UgZnJvbSBjb250YWN0XG4gICAgICAgICAgICAgICAgICAgIGltcHVsc2UueCA9IChub3JtYWwueCAqIG5vcm1hbEltcHVsc2UpICsgKHRhbmdlbnQueCAqIHRhbmdlbnRJbXB1bHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaW1wdWxzZS55ID0gKG5vcm1hbC55ICogbm9ybWFsSW1wdWxzZSkgKyAodGFuZ2VudC55ICogdGFuZ2VudEltcHVsc2UpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwbHkgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoYm9keUEuaXNTdGF0aWMgfHwgYm9keUEuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IFZlY3Rvci5zdWIoY29udGFjdFZlcnRleCwgYm9keUEucG9zaXRpb24sIHRlbXBBKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi54ICs9IGltcHVsc2UueCAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnkgKz0gaW1wdWxzZS55ICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QS5hbmdsZVByZXYgKz0gVmVjdG9yLmNyb3NzKG9mZnNldCwgaW1wdWxzZSkgKiBib2R5QS5pbnZlcnNlSW5lcnRpYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGJvZHlCLmlzU3RhdGljIHx8IGJvZHlCLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBWZWN0b3Iuc3ViKGNvbnRhY3RWZXJ0ZXgsIGJvZHlCLnBvc2l0aW9uLCB0ZW1wQSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueCAtPSBpbXB1bHNlLnggKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi55IC09IGltcHVsc2UueSAqIGJvZHlCLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUIuYW5nbGVQcmV2IC09IFZlY3Rvci5jcm9zcyhvZmZzZXQsIGltcHVsc2UpICogYm9keUIuaW52ZXJzZUluZXJ0aWE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZCBhIHNvbHV0aW9uIGZvciBwYWlyIHZlbG9jaXRpZXMuXG4gICAgICogQG1ldGhvZCBzb2x2ZVZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIFJlc29sdmVyLnNvbHZlVmVsb2NpdHkgPSBmdW5jdGlvbihwYWlycywgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciB0aW1lU2NhbGVTcXVhcmVkID0gdGltZVNjYWxlICogdGltZVNjYWxlLFxuICAgICAgICAgICAgaW1wdWxzZSA9IFZlY3Rvci5fdGVtcFswXSxcbiAgICAgICAgICAgIHRlbXBBID0gVmVjdG9yLl90ZW1wWzFdLFxuICAgICAgICAgICAgdGVtcEIgPSBWZWN0b3IuX3RlbXBbMl0sXG4gICAgICAgICAgICB0ZW1wQyA9IFZlY3Rvci5fdGVtcFszXSxcbiAgICAgICAgICAgIHRlbXBEID0gVmVjdG9yLl90ZW1wWzRdLFxuICAgICAgICAgICAgdGVtcEUgPSBWZWN0b3IuX3RlbXBbNV07XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uLFxuICAgICAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEEsXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QixcbiAgICAgICAgICAgICAgICBub3JtYWwgPSBjb2xsaXNpb24ubm9ybWFsLFxuICAgICAgICAgICAgICAgIHRhbmdlbnQgPSBjb2xsaXNpb24udGFuZ2VudCxcbiAgICAgICAgICAgICAgICBjb250YWN0cyA9IHBhaXIuYWN0aXZlQ29udGFjdHMsXG4gICAgICAgICAgICAgICAgY29udGFjdFNoYXJlID0gMSAvIGNvbnRhY3RzLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvZHkgdmVsb2NpdGllc1xuICAgICAgICAgICAgYm9keUEudmVsb2NpdHkueCA9IGJvZHlBLnBvc2l0aW9uLnggLSBib2R5QS5wb3NpdGlvblByZXYueDtcbiAgICAgICAgICAgIGJvZHlBLnZlbG9jaXR5LnkgPSBib2R5QS5wb3NpdGlvbi55IC0gYm9keUEucG9zaXRpb25QcmV2Lnk7XG4gICAgICAgICAgICBib2R5Qi52ZWxvY2l0eS54ID0gYm9keUIucG9zaXRpb24ueCAtIGJvZHlCLnBvc2l0aW9uUHJldi54O1xuICAgICAgICAgICAgYm9keUIudmVsb2NpdHkueSA9IGJvZHlCLnBvc2l0aW9uLnkgLSBib2R5Qi5wb3NpdGlvblByZXYueTtcbiAgICAgICAgICAgIGJvZHlBLmFuZ3VsYXJWZWxvY2l0eSA9IGJvZHlBLmFuZ2xlIC0gYm9keUEuYW5nbGVQcmV2O1xuICAgICAgICAgICAgYm9keUIuYW5ndWxhclZlbG9jaXR5ID0gYm9keUIuYW5nbGUgLSBib2R5Qi5hbmdsZVByZXY7XG5cbiAgICAgICAgICAgIC8vIHJlc29sdmUgZWFjaCBjb250YWN0XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbnRhY3RzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSBjb250YWN0c1tqXSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdFZlcnRleCA9IGNvbnRhY3QudmVydGV4LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRBID0gVmVjdG9yLnN1Yihjb250YWN0VmVydGV4LCBib2R5QS5wb3NpdGlvbiwgdGVtcEEpLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRCID0gVmVjdG9yLnN1Yihjb250YWN0VmVydGV4LCBib2R5Qi5wb3NpdGlvbiwgdGVtcEIpLFxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eVBvaW50QSA9IFZlY3Rvci5hZGQoYm9keUEudmVsb2NpdHksIFZlY3Rvci5tdWx0KFZlY3Rvci5wZXJwKG9mZnNldEEpLCBib2R5QS5hbmd1bGFyVmVsb2NpdHkpLCB0ZW1wQyksXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5UG9pbnRCID0gVmVjdG9yLmFkZChib2R5Qi52ZWxvY2l0eSwgVmVjdG9yLm11bHQoVmVjdG9yLnBlcnAob2Zmc2V0QiksIGJvZHlCLmFuZ3VsYXJWZWxvY2l0eSksIHRlbXBEKSwgXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlVmVsb2NpdHkgPSBWZWN0b3Iuc3ViKHZlbG9jaXR5UG9pbnRBLCB2ZWxvY2l0eVBvaW50QiwgdGVtcEUpLFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxWZWxvY2l0eSA9IFZlY3Rvci5kb3Qobm9ybWFsLCByZWxhdGl2ZVZlbG9jaXR5KTtcblxuICAgICAgICAgICAgICAgIHZhciB0YW5nZW50VmVsb2NpdHkgPSBWZWN0b3IuZG90KHRhbmdlbnQsIHJlbGF0aXZlVmVsb2NpdHkpLFxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50U3BlZWQgPSBNYXRoLmFicyh0YW5nZW50VmVsb2NpdHkpLFxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50VmVsb2NpdHlEaXJlY3Rpb24gPSBDb21tb24uc2lnbih0YW5nZW50VmVsb2NpdHkpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmF3IGltcHVsc2VzXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbEltcHVsc2UgPSAoMSArIHBhaXIucmVzdGl0dXRpb24pICogbm9ybWFsVmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbEZvcmNlID0gQ29tbW9uLmNsYW1wKHBhaXIuc2VwYXJhdGlvbiArIG5vcm1hbFZlbG9jaXR5LCAwLCAxKSAqIFJlc29sdmVyLl9mcmljdGlvbk5vcm1hbE11bHRpcGxpZXI7XG5cbiAgICAgICAgICAgICAgICAvLyBjb3Vsb21iIGZyaWN0aW9uXG4gICAgICAgICAgICAgICAgdmFyIHRhbmdlbnRJbXB1bHNlID0gdGFuZ2VudFZlbG9jaXR5LFxuICAgICAgICAgICAgICAgICAgICBtYXhGcmljdGlvbiA9IEluZmluaXR5O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRTcGVlZCA+IHBhaXIuZnJpY3Rpb24gKiBwYWlyLmZyaWN0aW9uU3RhdGljICogbm9ybWFsRm9yY2UgKiB0aW1lU2NhbGVTcXVhcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heEZyaWN0aW9uID0gdGFuZ2VudFNwZWVkO1xuICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IENvbW1vbi5jbGFtcChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhaXIuZnJpY3Rpb24gKiB0YW5nZW50VmVsb2NpdHlEaXJlY3Rpb24gKiB0aW1lU2NhbGVTcXVhcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLW1heEZyaWN0aW9uLCBtYXhGcmljdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG1vZGlmeSBpbXB1bHNlcyBhY2NvdW50aW5nIGZvciBtYXNzLCBpbmVydGlhIGFuZCBvZmZzZXRcbiAgICAgICAgICAgICAgICB2YXIgb0FjTiA9IFZlY3Rvci5jcm9zcyhvZmZzZXRBLCBub3JtYWwpLFxuICAgICAgICAgICAgICAgICAgICBvQmNOID0gVmVjdG9yLmNyb3NzKG9mZnNldEIsIG5vcm1hbCksXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlID0gY29udGFjdFNoYXJlIC8gKGJvZHlBLmludmVyc2VNYXNzICsgYm9keUIuaW52ZXJzZU1hc3MgKyBib2R5QS5pbnZlcnNlSW5lcnRpYSAqIG9BY04gKiBvQWNOICArIGJvZHlCLmludmVyc2VJbmVydGlhICogb0JjTiAqIG9CY04pO1xuXG4gICAgICAgICAgICAgICAgbm9ybWFsSW1wdWxzZSAqPSBzaGFyZTtcbiAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSAqPSBzaGFyZTtcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBoaWdoIHZlbG9jaXR5IGFuZCByZXN0aW5nIGNvbGxpc2lvbnMgc2VwYXJhdGVseVxuICAgICAgICAgICAgICAgIGlmIChub3JtYWxWZWxvY2l0eSA8IDAgJiYgbm9ybWFsVmVsb2NpdHkgKiBub3JtYWxWZWxvY2l0eSA+IFJlc29sdmVyLl9yZXN0aW5nVGhyZXNoICogdGltZVNjYWxlU3F1YXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWdoIG5vcm1hbCB2ZWxvY2l0eSBzbyBjbGVhciBjYWNoZWQgY29udGFjdCBub3JtYWwgaW1wdWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0Lm5vcm1hbEltcHVsc2UgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbHZlIHJlc3RpbmcgY29sbGlzaW9uIGNvbnN0cmFpbnRzIHVzaW5nIEVyaW4gQ2F0dG8ncyBtZXRob2QgKEdEQzA4KVxuICAgICAgICAgICAgICAgICAgICAvLyBpbXB1bHNlIGNvbnN0cmFpbnQgdGVuZHMgdG8gMFxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFjdE5vcm1hbEltcHVsc2UgPSBjb250YWN0Lm5vcm1hbEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Qubm9ybWFsSW1wdWxzZSA9IE1hdGgubWluKGNvbnRhY3Qubm9ybWFsSW1wdWxzZSArIG5vcm1hbEltcHVsc2UsIDApO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxJbXB1bHNlID0gY29udGFjdC5ub3JtYWxJbXB1bHNlIC0gY29udGFjdE5vcm1hbEltcHVsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhpZ2ggdmVsb2NpdHkgYW5kIHJlc3RpbmcgY29sbGlzaW9ucyBzZXBhcmF0ZWx5XG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWZWxvY2l0eSAqIHRhbmdlbnRWZWxvY2l0eSA+IFJlc29sdmVyLl9yZXN0aW5nVGhyZXNoVGFuZ2VudCAqIHRpbWVTY2FsZVNxdWFyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlnaCB0YW5nZW50IHZlbG9jaXR5IHNvIGNsZWFyIGNhY2hlZCBjb250YWN0IHRhbmdlbnQgaW1wdWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0LnRhbmdlbnRJbXB1bHNlID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBzb2x2ZSByZXN0aW5nIGNvbGxpc2lvbiBjb25zdHJhaW50cyB1c2luZyBFcmluIENhdHRvJ3MgbWV0aG9kIChHREMwOClcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFuZ2VudCBpbXB1bHNlIHRlbmRzIHRvIC10YW5nZW50U3BlZWQgb3IgK3RhbmdlbnRTcGVlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFjdFRhbmdlbnRJbXB1bHNlID0gY29udGFjdC50YW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC50YW5nZW50SW1wdWxzZSA9IENvbW1vbi5jbGFtcChjb250YWN0LnRhbmdlbnRJbXB1bHNlICsgdGFuZ2VudEltcHVsc2UsIC1tYXhGcmljdGlvbiwgbWF4RnJpY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IGNvbnRhY3QudGFuZ2VudEltcHVsc2UgLSBjb250YWN0VGFuZ2VudEltcHVsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdG90YWwgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICBpbXB1bHNlLnggPSAobm9ybWFsLnggKiBub3JtYWxJbXB1bHNlKSArICh0YW5nZW50LnggKiB0YW5nZW50SW1wdWxzZSk7XG4gICAgICAgICAgICAgICAgaW1wdWxzZS55ID0gKG5vcm1hbC55ICogbm9ybWFsSW1wdWxzZSkgKyAodGFuZ2VudC55ICogdGFuZ2VudEltcHVsc2UpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGFwcGx5IGltcHVsc2UgZnJvbSBjb250YWN0XG4gICAgICAgICAgICAgICAgaWYgKCEoYm9keUEuaXNTdGF0aWMgfHwgYm9keUEuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnggKz0gaW1wdWxzZS54ICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55ICs9IGltcHVsc2UueSAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5QS5hbmdsZVByZXYgKz0gVmVjdG9yLmNyb3NzKG9mZnNldEEsIGltcHVsc2UpICogYm9keUEuaW52ZXJzZUluZXJ0aWE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnggLT0gaW1wdWxzZS54ICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi55IC09IGltcHVsc2UueSAqIGJvZHlCLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICBib2R5Qi5hbmdsZVByZXYgLT0gVmVjdG9yLmNyb3NzKG9mZnNldEIsIGltcHVsc2UpICogYm9keUIuaW52ZXJzZUluZXJ0aWE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi4vZ2VvbWV0cnkvQm91bmRzXCI6MjYsXCIuLi9nZW9tZXRyeS9WZWN0b3JcIjoyOCxcIi4uL2dlb21ldHJ5L1ZlcnRpY2VzXCI6Mjl9XSwxMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuU0FUYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgZGV0ZWN0aW5nIGNvbGxpc2lvbnMgdXNpbmcgdGhlIFNlcGFyYXRpbmcgQXhpcyBUaGVvcmVtLlxuKlxuKiBAY2xhc3MgU0FUXG4qL1xuXG4vLyBUT0RPOiB0cnVlIGNpcmNsZXMgYW5kIGN1cnZlc1xuXG52YXIgU0FUID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gU0FUO1xuXG52YXIgVmVydGljZXMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZXJ0aWNlcycpO1xudmFyIFZlY3RvciA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlY3RvcicpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgY29sbGlzaW9uIGJldHdlZW4gdHdvIGJvZGllcyB1c2luZyB0aGUgU2VwYXJhdGluZyBBeGlzIFRoZW9yZW0uXG4gICAgICogQG1ldGhvZCBjb2xsaWRlc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlCXG4gICAgICogQHBhcmFtIHtjb2xsaXNpb259IHByZXZpb3VzQ29sbGlzaW9uXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9ufSBjb2xsaXNpb25cbiAgICAgKi9cbiAgICBTQVQuY29sbGlkZXMgPSBmdW5jdGlvbihib2R5QSwgYm9keUIsIHByZXZpb3VzQ29sbGlzaW9uKSB7XG4gICAgICAgIHZhciBvdmVybGFwQUIsXG4gICAgICAgICAgICBvdmVybGFwQkEsIFxuICAgICAgICAgICAgbWluT3ZlcmxhcCxcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGNhblJldXNlUHJldkNvbCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChwcmV2aW91c0NvbGxpc2lvbikge1xuICAgICAgICAgICAgLy8gZXN0aW1hdGUgdG90YWwgbW90aW9uXG4gICAgICAgICAgICB2YXIgcGFyZW50QSA9IGJvZHlBLnBhcmVudCxcbiAgICAgICAgICAgICAgICBwYXJlbnRCID0gYm9keUIucGFyZW50LFxuICAgICAgICAgICAgICAgIG1vdGlvbiA9IHBhcmVudEEuc3BlZWQgKiBwYXJlbnRBLnNwZWVkICsgcGFyZW50QS5hbmd1bGFyU3BlZWQgKiBwYXJlbnRBLmFuZ3VsYXJTcGVlZFxuICAgICAgICAgICAgICAgICAgICAgICArIHBhcmVudEIuc3BlZWQgKiBwYXJlbnRCLnNwZWVkICsgcGFyZW50Qi5hbmd1bGFyU3BlZWQgKiBwYXJlbnRCLmFuZ3VsYXJTcGVlZDtcblxuICAgICAgICAgICAgLy8gd2UgbWF5IGJlIGFibGUgdG8gKHBhcnRpYWxseSkgcmV1c2UgY29sbGlzaW9uIHJlc3VsdCBcbiAgICAgICAgICAgIC8vIGJ1dCBvbmx5IHNhZmUgaWYgY29sbGlzaW9uIHdhcyByZXN0aW5nXG4gICAgICAgICAgICBjYW5SZXVzZVByZXZDb2wgPSBwcmV2aW91c0NvbGxpc2lvbiAmJiBwcmV2aW91c0NvbGxpc2lvbi5jb2xsaWRlZCAmJiBtb3Rpb24gPCAwLjI7XG5cbiAgICAgICAgICAgIC8vIHJldXNlIGNvbGxpc2lvbiBvYmplY3RcbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHByZXZpb3VzQ29sbGlzaW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGlzaW9uID0geyBjb2xsaWRlZDogZmFsc2UsIGJvZHlBOiBib2R5QSwgYm9keUI6IGJvZHlCIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJldmlvdXNDb2xsaXNpb24gJiYgY2FuUmV1c2VQcmV2Q29sKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBjYW4gcmV1c2UgdGhlIGNvbGxpc2lvbiByZXN1bHRcbiAgICAgICAgICAgIC8vIHdlIG9ubHkgbmVlZCB0byB0ZXN0IHRoZSBwcmV2aW91c2x5IGZvdW5kIGF4aXNcbiAgICAgICAgICAgIHZhciBheGlzQm9keUEgPSBjb2xsaXNpb24uYXhpc0JvZHksXG4gICAgICAgICAgICAgICAgYXhpc0JvZHlCID0gYXhpc0JvZHlBID09PSBib2R5QSA/IGJvZHlCIDogYm9keUEsXG4gICAgICAgICAgICAgICAgYXhlcyA9IFtheGlzQm9keUEuYXhlc1twcmV2aW91c0NvbGxpc2lvbi5heGlzTnVtYmVyXV07XG5cbiAgICAgICAgICAgIG1pbk92ZXJsYXAgPSBTQVQuX292ZXJsYXBBeGVzKGF4aXNCb2R5QS52ZXJ0aWNlcywgYXhpc0JvZHlCLnZlcnRpY2VzLCBheGVzKTtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5yZXVzZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAobWluT3ZlcmxhcC5vdmVybGFwIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24uY29sbGlkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgd2UgY2FuJ3QgcmV1c2UgYSByZXN1bHQsIHBlcmZvcm0gYSBmdWxsIFNBVCB0ZXN0XG5cbiAgICAgICAgICAgIG92ZXJsYXBBQiA9IFNBVC5fb3ZlcmxhcEF4ZXMoYm9keUEudmVydGljZXMsIGJvZHlCLnZlcnRpY2VzLCBib2R5QS5heGVzKTtcblxuICAgICAgICAgICAgaWYgKG92ZXJsYXBBQi5vdmVybGFwIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24uY29sbGlkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdmVybGFwQkEgPSBTQVQuX292ZXJsYXBBeGVzKGJvZHlCLnZlcnRpY2VzLCBib2R5QS52ZXJ0aWNlcywgYm9keUIuYXhlcyk7XG5cbiAgICAgICAgICAgIGlmIChvdmVybGFwQkEub3ZlcmxhcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uLmNvbGxpZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG92ZXJsYXBBQi5vdmVybGFwIDwgb3ZlcmxhcEJBLm92ZXJsYXApIHtcbiAgICAgICAgICAgICAgICBtaW5PdmVybGFwID0gb3ZlcmxhcEFCO1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbi5heGlzQm9keSA9IGJvZHlBO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaW5PdmVybGFwID0gb3ZlcmxhcEJBO1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbi5heGlzQm9keSA9IGJvZHlCO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgZm9yIHJldXNlIGxhdGVyXG4gICAgICAgICAgICBjb2xsaXNpb24uYXhpc051bWJlciA9IG1pbk92ZXJsYXAuYXhpc051bWJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxpc2lvbi5ib2R5QSA9IGJvZHlBLmlkIDwgYm9keUIuaWQgPyBib2R5QSA6IGJvZHlCO1xuICAgICAgICBjb2xsaXNpb24uYm9keUIgPSBib2R5QS5pZCA8IGJvZHlCLmlkID8gYm9keUIgOiBib2R5QTtcbiAgICAgICAgY29sbGlzaW9uLmNvbGxpZGVkID0gdHJ1ZTtcbiAgICAgICAgY29sbGlzaW9uLmRlcHRoID0gbWluT3ZlcmxhcC5vdmVybGFwO1xuICAgICAgICBjb2xsaXNpb24ucGFyZW50QSA9IGNvbGxpc2lvbi5ib2R5QS5wYXJlbnQ7XG4gICAgICAgIGNvbGxpc2lvbi5wYXJlbnRCID0gY29sbGlzaW9uLmJvZHlCLnBhcmVudDtcbiAgICAgICAgXG4gICAgICAgIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBO1xuICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5QjtcblxuICAgICAgICAvLyBlbnN1cmUgbm9ybWFsIGlzIGZhY2luZyBhd2F5IGZyb20gYm9keUFcbiAgICAgICAgaWYgKFZlY3Rvci5kb3QobWluT3ZlcmxhcC5heGlzLCBWZWN0b3Iuc3ViKGJvZHlCLnBvc2l0aW9uLCBib2R5QS5wb3NpdGlvbikpIDwgMCkge1xuICAgICAgICAgICAgY29sbGlzaW9uLm5vcm1hbCA9IHtcbiAgICAgICAgICAgICAgICB4OiBtaW5PdmVybGFwLmF4aXMueCxcbiAgICAgICAgICAgICAgICB5OiBtaW5PdmVybGFwLmF4aXMueVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5ub3JtYWwgPSB7XG4gICAgICAgICAgICAgICAgeDogLW1pbk92ZXJsYXAuYXhpcy54LFxuICAgICAgICAgICAgICAgIHk6IC1taW5PdmVybGFwLmF4aXMueVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxpc2lvbi50YW5nZW50ID0gVmVjdG9yLnBlcnAoY29sbGlzaW9uLm5vcm1hbCk7XG5cbiAgICAgICAgY29sbGlzaW9uLnBlbmV0cmF0aW9uID0gY29sbGlzaW9uLnBlbmV0cmF0aW9uIHx8IHt9O1xuICAgICAgICBjb2xsaXNpb24ucGVuZXRyYXRpb24ueCA9IGNvbGxpc2lvbi5ub3JtYWwueCAqIGNvbGxpc2lvbi5kZXB0aDtcbiAgICAgICAgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnkgPSBjb2xsaXNpb24ubm9ybWFsLnkgKiBjb2xsaXNpb24uZGVwdGg7IFxuXG4gICAgICAgIC8vIGZpbmQgc3VwcG9ydCBwb2ludHMsIHRoZXJlIGlzIGFsd2F5cyBlaXRoZXIgZXhhY3RseSBvbmUgb3IgdHdvXG4gICAgICAgIHZhciB2ZXJ0aWNlc0IgPSBTQVQuX2ZpbmRTdXBwb3J0cyhib2R5QSwgYm9keUIsIGNvbGxpc2lvbi5ub3JtYWwpLFxuICAgICAgICAgICAgc3VwcG9ydHMgPSBbXTtcblxuICAgICAgICAvLyBmaW5kIHRoZSBzdXBwb3J0cyBmcm9tIGJvZHlCIHRoYXQgYXJlIGluc2lkZSBib2R5QVxuICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMoYm9keUEudmVydGljZXMsIHZlcnRpY2VzQlswXSkpXG4gICAgICAgICAgICBzdXBwb3J0cy5wdXNoKHZlcnRpY2VzQlswXSk7XG5cbiAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlBLnZlcnRpY2VzLCB2ZXJ0aWNlc0JbMV0pKVxuICAgICAgICAgICAgc3VwcG9ydHMucHVzaCh2ZXJ0aWNlc0JbMV0pO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHN1cHBvcnRzIGZyb20gYm9keUEgdGhhdCBhcmUgaW5zaWRlIGJvZHlCXG4gICAgICAgIGlmIChzdXBwb3J0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB2YXIgdmVydGljZXNBID0gU0FULl9maW5kU3VwcG9ydHMoYm9keUIsIGJvZHlBLCBWZWN0b3IubmVnKGNvbGxpc2lvbi5ub3JtYWwpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5Qi52ZXJ0aWNlcywgdmVydGljZXNBWzBdKSlcbiAgICAgICAgICAgICAgICBzdXBwb3J0cy5wdXNoKHZlcnRpY2VzQVswXSk7XG5cbiAgICAgICAgICAgIGlmIChzdXBwb3J0cy5sZW5ndGggPCAyICYmIFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlCLnZlcnRpY2VzLCB2ZXJ0aWNlc0FbMV0pKVxuICAgICAgICAgICAgICAgIHN1cHBvcnRzLnB1c2godmVydGljZXNBWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFjY291bnQgZm9yIHRoZSBlZGdlIGNhc2Ugb2Ygb3ZlcmxhcHBpbmcgYnV0IG5vIHZlcnRleCBjb250YWlubWVudFxuICAgICAgICBpZiAoc3VwcG9ydHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHN1cHBvcnRzID0gW3ZlcnRpY2VzQlswXV07XG4gICAgICAgIFxuICAgICAgICBjb2xsaXNpb24uc3VwcG9ydHMgPSBzdXBwb3J0cztcblxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBvdmVybGFwIGJldHdlZW4gdHdvIHNldHMgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBfb3ZlcmxhcEF4ZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSB2ZXJ0aWNlc0FcbiAgICAgKiBAcGFyYW0ge30gdmVydGljZXNCXG4gICAgICogQHBhcmFtIHt9IGF4ZXNcbiAgICAgKiBAcmV0dXJuIHJlc3VsdFxuICAgICAqL1xuICAgIFNBVC5fb3ZlcmxhcEF4ZXMgPSBmdW5jdGlvbih2ZXJ0aWNlc0EsIHZlcnRpY2VzQiwgYXhlcykge1xuICAgICAgICB2YXIgcHJvamVjdGlvbkEgPSBWZWN0b3IuX3RlbXBbMF0sIFxuICAgICAgICAgICAgcHJvamVjdGlvbkIgPSBWZWN0b3IuX3RlbXBbMV0sXG4gICAgICAgICAgICByZXN1bHQgPSB7IG92ZXJsYXA6IE51bWJlci5NQVhfVkFMVUUgfSxcbiAgICAgICAgICAgIG92ZXJsYXAsXG4gICAgICAgICAgICBheGlzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXhpcyA9IGF4ZXNbaV07XG5cbiAgICAgICAgICAgIFNBVC5fcHJvamVjdFRvQXhpcyhwcm9qZWN0aW9uQSwgdmVydGljZXNBLCBheGlzKTtcbiAgICAgICAgICAgIFNBVC5fcHJvamVjdFRvQXhpcyhwcm9qZWN0aW9uQiwgdmVydGljZXNCLCBheGlzKTtcblxuICAgICAgICAgICAgb3ZlcmxhcCA9IE1hdGgubWluKHByb2plY3Rpb25BLm1heCAtIHByb2plY3Rpb25CLm1pbiwgcHJvamVjdGlvbkIubWF4IC0gcHJvamVjdGlvbkEubWluKTtcblxuICAgICAgICAgICAgaWYgKG92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5vdmVybGFwID0gb3ZlcmxhcDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcCA8IHJlc3VsdC5vdmVybGFwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSBvdmVybGFwO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5heGlzID0gYXhpcztcbiAgICAgICAgICAgICAgICByZXN1bHQuYXhpc051bWJlciA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9qZWN0cyB2ZXJ0aWNlcyBvbiBhbiBheGlzIGFuZCByZXR1cm5zIGFuIGludGVydmFsLlxuICAgICAqIEBtZXRob2QgX3Byb2plY3RUb0F4aXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBwcm9qZWN0aW9uXG4gICAgICogQHBhcmFtIHt9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt9IGF4aXNcbiAgICAgKi9cbiAgICBTQVQuX3Byb2plY3RUb0F4aXMgPSBmdW5jdGlvbihwcm9qZWN0aW9uLCB2ZXJ0aWNlcywgYXhpcykge1xuICAgICAgICB2YXIgbWluID0gVmVjdG9yLmRvdCh2ZXJ0aWNlc1swXSwgYXhpcyksXG4gICAgICAgICAgICBtYXggPSBtaW47XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGRvdCA9IFZlY3Rvci5kb3QodmVydGljZXNbaV0sIGF4aXMpO1xuXG4gICAgICAgICAgICBpZiAoZG90ID4gbWF4KSB7IFxuICAgICAgICAgICAgICAgIG1heCA9IGRvdDsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvdCA8IG1pbikgeyBcbiAgICAgICAgICAgICAgICBtaW4gPSBkb3Q7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdGlvbi5taW4gPSBtaW47XG4gICAgICAgIHByb2plY3Rpb24ubWF4ID0gbWF4O1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogRmluZHMgc3VwcG9ydGluZyB2ZXJ0aWNlcyBnaXZlbiB0d28gYm9kaWVzIGFsb25nIGEgZ2l2ZW4gZGlyZWN0aW9uIHVzaW5nIGhpbGwtY2xpbWJpbmcuXG4gICAgICogQG1ldGhvZCBfZmluZFN1cHBvcnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gYm9keUFcbiAgICAgKiBAcGFyYW0ge30gYm9keUJcbiAgICAgKiBAcGFyYW0ge30gbm9ybWFsXG4gICAgICogQHJldHVybiBbdmVjdG9yXVxuICAgICAqL1xuICAgIFNBVC5fZmluZFN1cHBvcnRzID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCLCBub3JtYWwpIHtcbiAgICAgICAgdmFyIG5lYXJlc3REaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICB2ZXJ0ZXhUb0JvZHkgPSBWZWN0b3IuX3RlbXBbMF0sXG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IGJvZHlCLnZlcnRpY2VzLFxuICAgICAgICAgICAgYm9keUFQb3NpdGlvbiA9IGJvZHlBLnBvc2l0aW9uLFxuICAgICAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICB2ZXJ0ZXhBLFxuICAgICAgICAgICAgdmVydGV4QjtcblxuICAgICAgICAvLyBmaW5kIGNsb3Nlc3QgdmVydGV4IG9uIGJvZHlCXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgdmVydGV4VG9Cb2R5LnggPSB2ZXJ0ZXgueCAtIGJvZHlBUG9zaXRpb24ueDtcbiAgICAgICAgICAgIHZlcnRleFRvQm9keS55ID0gdmVydGV4LnkgLSBib2R5QVBvc2l0aW9uLnk7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IC1WZWN0b3IuZG90KG5vcm1hbCwgdmVydGV4VG9Cb2R5KTtcblxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgbmVhcmVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgbmVhcmVzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgdmVydGV4QSA9IHZlcnRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmQgbmV4dCBjbG9zZXN0IHZlcnRleCB1c2luZyB0aGUgdHdvIGNvbm5lY3RlZCB0byBpdFxuICAgICAgICB2YXIgcHJldkluZGV4ID0gdmVydGV4QS5pbmRleCAtIDEgPj0gMCA/IHZlcnRleEEuaW5kZXggLSAxIDogdmVydGljZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdmVydGV4ID0gdmVydGljZXNbcHJldkluZGV4XTtcbiAgICAgICAgdmVydGV4VG9Cb2R5LnggPSB2ZXJ0ZXgueCAtIGJvZHlBUG9zaXRpb24ueDtcbiAgICAgICAgdmVydGV4VG9Cb2R5LnkgPSB2ZXJ0ZXgueSAtIGJvZHlBUG9zaXRpb24ueTtcbiAgICAgICAgbmVhcmVzdERpc3RhbmNlID0gLVZlY3Rvci5kb3Qobm9ybWFsLCB2ZXJ0ZXhUb0JvZHkpO1xuICAgICAgICB2ZXJ0ZXhCID0gdmVydGV4O1xuXG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAodmVydGV4QS5pbmRleCArIDEpICUgdmVydGljZXMubGVuZ3RoO1xuICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tuZXh0SW5kZXhdO1xuICAgICAgICB2ZXJ0ZXhUb0JvZHkueCA9IHZlcnRleC54IC0gYm9keUFQb3NpdGlvbi54O1xuICAgICAgICB2ZXJ0ZXhUb0JvZHkueSA9IHZlcnRleC55IC0gYm9keUFQb3NpdGlvbi55O1xuICAgICAgICBkaXN0YW5jZSA9IC1WZWN0b3IuZG90KG5vcm1hbCwgdmVydGV4VG9Cb2R5KTtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgbmVhcmVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhCID0gdmVydGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFt2ZXJ0ZXhBLCB2ZXJ0ZXhCXTtcbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4uL2dlb21ldHJ5L1ZlY3RvclwiOjI4LFwiLi4vZ2VvbWV0cnkvVmVydGljZXNcIjoyOX1dLDEyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5Db25zdHJhaW50YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb25zdHJhaW50cy5cbiogQ29uc3RyYWludHMgYXJlIHVzZWQgZm9yIHNwZWNpZnlpbmcgdGhhdCBhIGZpeGVkIGRpc3RhbmNlIG11c3QgYmUgbWFpbnRhaW5lZCBiZXR3ZWVuIHR3byBib2RpZXMgKG9yIGEgYm9keSBhbmQgYSBmaXhlZCB3b3JsZC1zcGFjZSBwb3NpdGlvbikuXG4qIFRoZSBzdGlmZm5lc3Mgb2YgY29uc3RyYWludHMgY2FuIGJlIG1vZGlmaWVkIHRvIGNyZWF0ZSBzcHJpbmdzIG9yIGVsYXN0aWMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBDb25zdHJhaW50XG4qL1xuXG52YXIgQ29uc3RyYWludCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN0cmFpbnQ7XG5cbnZhciBWZXJ0aWNlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlcnRpY2VzJyk7XG52YXIgVmVjdG9yID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVjdG9yJyk7XG52YXIgU2xlZXBpbmcgPSBfZGVyZXFfKCcuLi9jb3JlL1NsZWVwaW5nJyk7XG52YXIgQm91bmRzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQm91bmRzJyk7XG52YXIgQXhlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0F4ZXMnKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBDb25zdHJhaW50Ll93YXJtaW5nID0gMC40O1xuICAgIENvbnN0cmFpbnQuX3RvcnF1ZURhbXBlbiA9IDE7XG4gICAgQ29uc3RyYWludC5fbWluTGVuZ3RoID0gMC4wMDAwMDE7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbnN0cmFpbnQuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBUbyBzaW11bGF0ZSBhIHJldm9sdXRlIGNvbnN0cmFpbnQgKG9yIHBpbiBqb2ludCkgc2V0IGBsZW5ndGg6IDBgIGFuZCBhIGhpZ2ggYHN0aWZmbmVzc2AgdmFsdWUgKGUuZy4gYDAuN2Agb3IgYWJvdmUpLlxuICAgICAqIElmIHRoZSBjb25zdHJhaW50IGlzIHVuc3RhYmxlLCB0cnkgbG93ZXJpbmcgdGhlIGBzdGlmZm5lc3NgIHZhbHVlIGFuZCAvIG9yIGluY3JlYXNpbmcgYGVuZ2luZS5jb25zdHJhaW50SXRlcmF0aW9uc2AuXG4gICAgICogRm9yIGNvbXBvdW5kIGJvZGllcywgY29uc3RyYWludHMgbXVzdCBiZSBhcHBsaWVkIHRvIHRoZSBwYXJlbnQgYm9keSAobm90IG9uZSBvZiBpdHMgcGFydHMpLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBvcHRpb25zO1xuXG4gICAgICAgIC8vIGlmIGJvZGllcyBkZWZpbmVkIGJ1dCBubyBwb2ludHMsIHVzZSBib2R5IGNlbnRyZVxuICAgICAgICBpZiAoY29uc3RyYWludC5ib2R5QSAmJiAhY29uc3RyYWludC5wb2ludEEpXG4gICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QSA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBpZiAoY29uc3RyYWludC5ib2R5QiAmJiAhY29uc3RyYWludC5wb2ludEIpXG4gICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QiA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBzdGF0aWMgbGVuZ3RoIHVzaW5nIGluaXRpYWwgd29ybGQgc3BhY2UgcG9pbnRzXG4gICAgICAgIHZhciBpbml0aWFsUG9pbnRBID0gY29uc3RyYWludC5ib2R5QSA/IFZlY3Rvci5hZGQoY29uc3RyYWludC5ib2R5QS5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEEpIDogY29uc3RyYWludC5wb2ludEEsXG4gICAgICAgICAgICBpbml0aWFsUG9pbnRCID0gY29uc3RyYWludC5ib2R5QiA/IFZlY3Rvci5hZGQoY29uc3RyYWludC5ib2R5Qi5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEIpIDogY29uc3RyYWludC5wb2ludEIsXG4gICAgICAgICAgICBsZW5ndGggPSBWZWN0b3IubWFnbml0dWRlKFZlY3Rvci5zdWIoaW5pdGlhbFBvaW50QSwgaW5pdGlhbFBvaW50QikpO1xuICAgIFxuICAgICAgICBjb25zdHJhaW50Lmxlbmd0aCA9IHR5cGVvZiBjb25zdHJhaW50Lmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcgPyBjb25zdHJhaW50Lmxlbmd0aCA6IGxlbmd0aDtcblxuICAgICAgICAvLyBvcHRpb24gZGVmYXVsdHNcbiAgICAgICAgY29uc3RyYWludC5pZCA9IGNvbnN0cmFpbnQuaWQgfHwgQ29tbW9uLm5leHRJZCgpO1xuICAgICAgICBjb25zdHJhaW50LmxhYmVsID0gY29uc3RyYWludC5sYWJlbCB8fCAnQ29uc3RyYWludCc7XG4gICAgICAgIGNvbnN0cmFpbnQudHlwZSA9ICdjb25zdHJhaW50JztcbiAgICAgICAgY29uc3RyYWludC5zdGlmZm5lc3MgPSBjb25zdHJhaW50LnN0aWZmbmVzcyB8fCAoY29uc3RyYWludC5sZW5ndGggPiAwID8gMSA6IDAuNyk7XG4gICAgICAgIGNvbnN0cmFpbnQuZGFtcGluZyA9IGNvbnN0cmFpbnQuZGFtcGluZyB8fCAwO1xuICAgICAgICBjb25zdHJhaW50LmFuZ3VsYXJTdGlmZm5lc3MgPSBjb25zdHJhaW50LmFuZ3VsYXJTdGlmZm5lc3MgfHwgMDtcbiAgICAgICAgY29uc3RyYWludC5hbmdsZUEgPSBjb25zdHJhaW50LmJvZHlBID8gY29uc3RyYWludC5ib2R5QS5hbmdsZSA6IGNvbnN0cmFpbnQuYW5nbGVBO1xuICAgICAgICBjb25zdHJhaW50LmFuZ2xlQiA9IGNvbnN0cmFpbnQuYm9keUIgPyBjb25zdHJhaW50LmJvZHlCLmFuZ2xlIDogY29uc3RyYWludC5hbmdsZUI7XG4gICAgICAgIGNvbnN0cmFpbnQucGx1Z2luID0ge307XG5cbiAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgIHZhciByZW5kZXIgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgc3Ryb2tlU3R5bGU6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgIGFuY2hvcnM6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY29uc3RyYWludC5sZW5ndGggPT09IDAgJiYgY29uc3RyYWludC5zdGlmZm5lc3MgPiAwLjEpIHtcbiAgICAgICAgICAgIHJlbmRlci50eXBlID0gJ3Bpbic7XG4gICAgICAgICAgICByZW5kZXIuYW5jaG9ycyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnN0cmFpbnQuc3RpZmZuZXNzIDwgMC45KSB7XG4gICAgICAgICAgICByZW5kZXIudHlwZSA9ICdzcHJpbmcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RyYWludC5yZW5kZXIgPSBDb21tb24uZXh0ZW5kKHJlbmRlciwgY29uc3RyYWludC5yZW5kZXIpO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJhaW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlcyBmb3Igc29sdmluZyBieSBjb25zdHJhaW50IHdhcm1pbmcuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHByZVNvbHZlQWxsXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIENvbnN0cmFpbnQucHJlU29sdmVBbGwgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGltcHVsc2UgPSBib2R5LmNvbnN0cmFpbnRJbXB1bHNlO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCAoaW1wdWxzZS54ID09PSAwICYmIGltcHVsc2UueSA9PT0gMCAmJiBpbXB1bHNlLmFuZ2xlID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnggKz0gaW1wdWxzZS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi55ICs9IGltcHVsc2UueTtcbiAgICAgICAgICAgIGJvZHkuYW5nbGUgKz0gaW1wdWxzZS5hbmdsZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb2x2ZXMgYWxsIGNvbnN0cmFpbnRzIGluIGEgbGlzdCBvZiBjb2xsaXNpb25zLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzb2x2ZUFsbFxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludFtdfSBjb25zdHJhaW50c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnNvbHZlQWxsID0gZnVuY3Rpb24oY29uc3RyYWludHMsIHRpbWVTY2FsZSkge1xuICAgICAgICAvLyBTb2x2ZSBmaXhlZCBjb25zdHJhaW50cyBmaXJzdC5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tpXSxcbiAgICAgICAgICAgICAgICBmaXhlZEEgPSAhY29uc3RyYWludC5ib2R5QSB8fCAoY29uc3RyYWludC5ib2R5QSAmJiBjb25zdHJhaW50LmJvZHlBLmlzU3RhdGljKSxcbiAgICAgICAgICAgICAgICBmaXhlZEIgPSAhY29uc3RyYWludC5ib2R5QiB8fCAoY29uc3RyYWludC5ib2R5QiAmJiBjb25zdHJhaW50LmJvZHlCLmlzU3RhdGljKTtcblxuICAgICAgICAgICAgaWYgKGZpeGVkQSB8fCBmaXhlZEIpIHtcbiAgICAgICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlKGNvbnN0cmFpbnRzW2ldLCB0aW1lU2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29sdmUgZnJlZSBjb25zdHJhaW50cyBsYXN0LlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29uc3RyYWludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tpXTtcbiAgICAgICAgICAgIGZpeGVkQSA9ICFjb25zdHJhaW50LmJvZHlBIHx8IChjb25zdHJhaW50LmJvZHlBICYmIGNvbnN0cmFpbnQuYm9keUEuaXNTdGF0aWMpO1xuICAgICAgICAgICAgZml4ZWRCID0gIWNvbnN0cmFpbnQuYm9keUIgfHwgKGNvbnN0cmFpbnQuYm9keUIgJiYgY29uc3RyYWludC5ib2R5Qi5pc1N0YXRpYyk7XG5cbiAgICAgICAgICAgIGlmICghZml4ZWRBICYmICFmaXhlZEIpIHtcbiAgICAgICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlKGNvbnN0cmFpbnRzW2ldLCB0aW1lU2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvbHZlcyBhIGRpc3RhbmNlIGNvbnN0cmFpbnQgd2l0aCBHYXVzcy1TaWVkZWwgbWV0aG9kLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzb2x2ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnNvbHZlID0gZnVuY3Rpb24oY29uc3RyYWludCwgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICBib2R5QiA9IGNvbnN0cmFpbnQuYm9keUIsXG4gICAgICAgICAgICBwb2ludEEgPSBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgIHBvaW50QiA9IGNvbnN0cmFpbnQucG9pbnRCO1xuXG4gICAgICAgIGlmICghYm9keUEgJiYgIWJvZHlCKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIHVwZGF0ZSByZWZlcmVuY2UgYW5nbGVcbiAgICAgICAgaWYgKGJvZHlBICYmICFib2R5QS5pc1N0YXRpYykge1xuICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZShwb2ludEEsIGJvZHlBLmFuZ2xlIC0gY29uc3RyYWludC5hbmdsZUEsIHBvaW50QSk7XG4gICAgICAgICAgICBjb25zdHJhaW50LmFuZ2xlQSA9IGJvZHlBLmFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyB1cGRhdGUgcmVmZXJlbmNlIGFuZ2xlXG4gICAgICAgIGlmIChib2R5QiAmJiAhYm9keUIuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIFZlY3Rvci5yb3RhdGUocG9pbnRCLCBib2R5Qi5hbmdsZSAtIGNvbnN0cmFpbnQuYW5nbGVCLCBwb2ludEIpO1xuICAgICAgICAgICAgY29uc3RyYWludC5hbmdsZUIgPSBib2R5Qi5hbmdsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb2ludEFXb3JsZCA9IHBvaW50QSxcbiAgICAgICAgICAgIHBvaW50QldvcmxkID0gcG9pbnRCO1xuXG4gICAgICAgIGlmIChib2R5QSkgcG9pbnRBV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlBLnBvc2l0aW9uLCBwb2ludEEpO1xuICAgICAgICBpZiAoYm9keUIpIHBvaW50QldvcmxkID0gVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbiwgcG9pbnRCKTtcblxuICAgICAgICBpZiAoIXBvaW50QVdvcmxkIHx8ICFwb2ludEJXb3JsZClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKHBvaW50QVdvcmxkLCBwb2ludEJXb3JsZCksXG4gICAgICAgICAgICBjdXJyZW50TGVuZ3RoID0gVmVjdG9yLm1hZ25pdHVkZShkZWx0YSk7XG5cbiAgICAgICAgLy8gcHJldmVudCBzaW5ndWxhcml0eVxuICAgICAgICBpZiAoY3VycmVudExlbmd0aCA8IENvbnN0cmFpbnQuX21pbkxlbmd0aCkge1xuICAgICAgICAgICAgY3VycmVudExlbmd0aCA9IENvbnN0cmFpbnQuX21pbkxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNvbHZlIGRpc3RhbmNlIGNvbnN0cmFpbnQgd2l0aCBHYXVzcy1TaWVkZWwgbWV0aG9kXG4gICAgICAgIHZhciBkaWZmZXJlbmNlID0gKGN1cnJlbnRMZW5ndGggLSBjb25zdHJhaW50Lmxlbmd0aCkgLyBjdXJyZW50TGVuZ3RoLFxuICAgICAgICAgICAgc3RpZmZuZXNzID0gY29uc3RyYWludC5zdGlmZm5lc3MgPCAxID8gY29uc3RyYWludC5zdGlmZm5lc3MgKiB0aW1lU2NhbGUgOiBjb25zdHJhaW50LnN0aWZmbmVzcyxcbiAgICAgICAgICAgIGZvcmNlID0gVmVjdG9yLm11bHQoZGVsdGEsIGRpZmZlcmVuY2UgKiBzdGlmZm5lc3MpLFxuICAgICAgICAgICAgbWFzc1RvdGFsID0gKGJvZHlBID8gYm9keUEuaW52ZXJzZU1hc3MgOiAwKSArIChib2R5QiA/IGJvZHlCLmludmVyc2VNYXNzIDogMCksXG4gICAgICAgICAgICBpbmVydGlhVG90YWwgPSAoYm9keUEgPyBib2R5QS5pbnZlcnNlSW5lcnRpYSA6IDApICsgKGJvZHlCID8gYm9keUIuaW52ZXJzZUluZXJ0aWEgOiAwKSxcbiAgICAgICAgICAgIHJlc2lzdGFuY2VUb3RhbCA9IG1hc3NUb3RhbCArIGluZXJ0aWFUb3RhbCxcbiAgICAgICAgICAgIHRvcnF1ZSxcbiAgICAgICAgICAgIHNoYXJlLFxuICAgICAgICAgICAgbm9ybWFsLFxuICAgICAgICAgICAgbm9ybWFsVmVsb2NpdHksXG4gICAgICAgICAgICByZWxhdGl2ZVZlbG9jaXR5O1xuXG4gICAgICAgIGlmIChjb25zdHJhaW50LmRhbXBpbmcpIHtcbiAgICAgICAgICAgIHZhciB6ZXJvID0gVmVjdG9yLmNyZWF0ZSgpO1xuICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLmRpdihkZWx0YSwgY3VycmVudExlbmd0aCk7XG5cbiAgICAgICAgICAgIHJlbGF0aXZlVmVsb2NpdHkgPSBWZWN0b3Iuc3ViKFxuICAgICAgICAgICAgICAgIGJvZHlCICYmIFZlY3Rvci5zdWIoYm9keUIucG9zaXRpb24sIGJvZHlCLnBvc2l0aW9uUHJldikgfHwgemVybyxcbiAgICAgICAgICAgICAgICBib2R5QSAmJiBWZWN0b3Iuc3ViKGJvZHlBLnBvc2l0aW9uLCBib2R5QS5wb3NpdGlvblByZXYpIHx8IHplcm9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIG5vcm1hbFZlbG9jaXR5ID0gVmVjdG9yLmRvdChub3JtYWwsIHJlbGF0aXZlVmVsb2NpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlBICYmICFib2R5QS5pc1N0YXRpYykge1xuICAgICAgICAgICAgc2hhcmUgPSBib2R5QS5pbnZlcnNlTWFzcyAvIG1hc3NUb3RhbDtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBhcHBsaWVkIGltcHVsc2VzIGZvciBwb3N0IHNvbHZpbmdcbiAgICAgICAgICAgIGJvZHlBLmNvbnN0cmFpbnRJbXB1bHNlLnggLT0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UueSAtPSBmb3JjZS55ICogc2hhcmU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGZvcmNlc1xuICAgICAgICAgICAgYm9keUEucG9zaXRpb24ueCAtPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5QS5wb3NpdGlvbi55IC09IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZGFtcGluZ1xuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQuZGFtcGluZykge1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi54IC09IGNvbnN0cmFpbnQuZGFtcGluZyAqIG5vcm1hbC54ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueSAtPSBjb25zdHJhaW50LmRhbXBpbmcgKiBub3JtYWwueSAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHRvcnF1ZVxuICAgICAgICAgICAgdG9ycXVlID0gKFZlY3Rvci5jcm9zcyhwb2ludEEsIGZvcmNlKSAvIHJlc2lzdGFuY2VUb3RhbCkgKiBDb25zdHJhaW50Ll90b3JxdWVEYW1wZW4gKiBib2R5QS5pbnZlcnNlSW5lcnRpYSAqICgxIC0gY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzKTtcbiAgICAgICAgICAgIGJvZHlBLmNvbnN0cmFpbnRJbXB1bHNlLmFuZ2xlIC09IHRvcnF1ZTtcbiAgICAgICAgICAgIGJvZHlBLmFuZ2xlIC09IHRvcnF1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5QiAmJiAhYm9keUIuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIHNoYXJlID0gYm9keUIuaW52ZXJzZU1hc3MgLyBtYXNzVG90YWw7XG5cbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgYXBwbGllZCBpbXB1bHNlcyBmb3IgcG9zdCBzb2x2aW5nXG4gICAgICAgICAgICBib2R5Qi5jb25zdHJhaW50SW1wdWxzZS54ICs9IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLnkgKz0gZm9yY2UueSAqIHNoYXJlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhcHBseSBmb3JjZXNcbiAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uLnggKz0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUIucG9zaXRpb24ueSArPSBmb3JjZS55ICogc2hhcmU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGRhbXBpbmdcbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LmRhbXBpbmcpIHtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueCArPSBjb25zdHJhaW50LmRhbXBpbmcgKiBub3JtYWwueCAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnkgKz0gY29uc3RyYWludC5kYW1waW5nICogbm9ybWFsLnkgKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhcHBseSB0b3JxdWVcbiAgICAgICAgICAgIHRvcnF1ZSA9IChWZWN0b3IuY3Jvc3MocG9pbnRCLCBmb3JjZSkgLyByZXNpc3RhbmNlVG90YWwpICogQ29uc3RyYWludC5fdG9ycXVlRGFtcGVuICogYm9keUIuaW52ZXJzZUluZXJ0aWEgKiAoMSAtIGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyk7XG4gICAgICAgICAgICBib2R5Qi5jb25zdHJhaW50SW1wdWxzZS5hbmdsZSArPSB0b3JxdWU7XG4gICAgICAgICAgICBib2R5Qi5hbmdsZSArPSB0b3JxdWU7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBib2R5IHVwZGF0ZXMgcmVxdWlyZWQgYWZ0ZXIgc29sdmluZyBjb25zdHJhaW50cy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcG9zdFNvbHZlQWxsXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIENvbnN0cmFpbnQucG9zdFNvbHZlQWxsID0gZnVuY3Rpb24oYm9kaWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBpbXB1bHNlID0gYm9keS5jb25zdHJhaW50SW1wdWxzZTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTdGF0aWMgfHwgKGltcHVsc2UueCA9PT0gMCAmJiBpbXB1bHNlLnkgPT09IDAgJiYgaW1wdWxzZS5hbmdsZSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGdlb21ldHJ5IGFuZCByZXNldFxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBib2R5LnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCBpbXB1bHNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChqID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gaW1wdWxzZS54O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnkgKz0gaW1wdWxzZS55O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbXB1bHNlLmFuZ2xlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFZlcnRpY2VzLnJvdGF0ZShwYXJ0LnZlcnRpY2VzLCBpbXB1bHNlLmFuZ2xlLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgQXhlcy5yb3RhdGUocGFydC5heGVzLCBpbXB1bHNlLmFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWZWN0b3Iucm90YXRlQWJvdXQocGFydC5wb3NpdGlvbiwgaW1wdWxzZS5hbmdsZSwgYm9keS5wb3NpdGlvbiwgcGFydC5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZGFtcGVuIHRoZSBjYWNoZWQgaW1wdWxzZSBmb3Igd2FybWluZyBuZXh0IHN0ZXBcbiAgICAgICAgICAgIGltcHVsc2UuYW5nbGUgKj0gQ29uc3RyYWludC5fd2FybWluZztcbiAgICAgICAgICAgIGltcHVsc2UueCAqPSBDb25zdHJhaW50Ll93YXJtaW5nO1xuICAgICAgICAgICAgaW1wdWxzZS55ICo9IENvbnN0cmFpbnQuX3dhcm1pbmc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIG51bWJlciBnZW5lcmF0ZWQgaW4gYENvbXBvc2l0ZS5jcmVhdGVgIGJ5IGBDb21tb24ubmV4dElkYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiY29uc3RyYWludFwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgYm9kaWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGxhYmVsXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJDb25zdHJhaW50XCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgZGVmaW5lcyB0aGUgcmVuZGVyaW5nIHByb3BlcnRpZXMgdG8gYmUgY29uc3VtZWQgYnkgdGhlIG1vZHVsZSBgTWF0dGVyLlJlbmRlcmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGNvbnN0cmFpbnQgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci52aXNpYmxlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBsaW5lIHdpZHRoIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgY29uc3RyYWludCBvdXRsaW5lLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIG5vIG91dGxpbmUgd2lsbCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIubGluZVdpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIHN0cm9rZSBzdHlsZSB0byB1c2Ugd2hlbiByZW5kZXJpbmcgdGhlIGNvbnN0cmFpbnQgb3V0bGluZS5cbiAgICAgKiBJdCBpcyB0aGUgc2FtZSBhcyB3aGVuIHVzaW5nIGEgY2FudmFzLCBzbyBpdCBhY2NlcHRzIENTUyBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnN0cm9rZVN0eWxlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgYSByYW5kb20gY29sb3VyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgY29uc3RyYWludCByZW5kZXJpbmcgdHlwZS4gXG4gICAgICogVGhlIHBvc3NpYmxlIHZhbHVlcyBhcmUgJ2xpbmUnLCAncGluJywgJ3NwcmluZycuXG4gICAgICogQW4gYXBwcm9wcmlhdGUgcmVuZGVyIHR5cGUgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNob3NlbiB1bmxlc3Mgb25lIGlzIGdpdmVuIGluIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCAnbGluZSdcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvb2xlYW5gIHRoYXQgZGVmaW5lcyBpZiB0aGUgY29uc3RyYWludCdzIGFuY2hvciBwb2ludHMgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5hbmNob3JzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBmaXJzdCBwb3NzaWJsZSBgQm9keWAgdGhhdCB0aGlzIGNvbnN0cmFpbnQgaXMgYXR0YWNoZWQgdG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keUFcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlY29uZCBwb3NzaWJsZSBgQm9keWAgdGhhdCB0aGlzIGNvbnN0cmFpbnQgaXMgYXR0YWNoZWQgdG8uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keUJcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgb2Zmc2V0IG9mIHRoZSBjb25zdHJhaW50IGZyb20gY2VudGVyIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QWAgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGEgd29ybGQtc3BhY2UgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9pbnRBXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG9mZnNldCBvZiB0aGUgY29uc3RyYWludCBmcm9tIGNlbnRlciBvZiB0aGUgYGNvbnN0cmFpbnQuYm9keUJgIGlmIGRlZmluZWQsIG90aGVyd2lzZSBhIHdvcmxkLXNwYWNlIHBvc2l0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvaW50QlxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBzdGlmZm5lc3Mgb2YgdGhlIGNvbnN0cmFpbnQsIGkuZS4gdGhlIHJhdGUgYXQgd2hpY2ggaXQgcmV0dXJucyB0byBpdHMgcmVzdGluZyBgY29uc3RyYWludC5sZW5ndGhgLlxuICAgICAqIEEgdmFsdWUgb2YgYDFgIG1lYW5zIHRoZSBjb25zdHJhaW50IHNob3VsZCBiZSB2ZXJ5IHN0aWZmLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMmAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgYWN0cyBsaWtlIGEgc29mdCBzcHJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc3RpZmZuZXNzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgZGFtcGluZyBvZiB0aGUgY29uc3RyYWludCwgXG4gICAgICogaS5lLiB0aGUgYW1vdW50IG9mIHJlc2lzdGFuY2UgYXBwbGllZCB0byBlYWNoIGJvZHkgYmFzZWQgb24gdGhlaXIgdmVsb2NpdGllcyB0byBsaW1pdCB0aGUgYW1vdW50IG9mIG9zY2lsbGF0aW9uLlxuICAgICAqIERhbXBpbmcgd2lsbCBvbmx5IGJlIGFwcGFyZW50IHdoZW4gdGhlIGNvbnN0cmFpbnQgYWxzbyBoYXMgYSB2ZXJ5IGxvdyBgc3RpZmZuZXNzYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwLjFgIG1lYW5zIHRoZSBjb25zdHJhaW50IHdpbGwgYXBwbHkgaGVhdnkgZGFtcGluZywgcmVzdWx0aW5nIGluIGxpdHRsZSB0byBubyBvc2NpbGxhdGlvbi5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGUgY29uc3RyYWludCB3aWxsIGFwcGx5IG5vIGRhbXBpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZGFtcGluZ1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHRhcmdldCByZXN0aW5nIGxlbmd0aCBvZiB0aGUgY29uc3RyYWludC4gXG4gICAgICogSXQgaXMgY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGluIGBDb25zdHJhaW50LmNyZWF0ZWAgZnJvbSBpbml0aWFsIHBvc2l0aW9ucyBvZiB0aGUgYGNvbnN0cmFpbnQuYm9keUFgIGFuZCBgY29uc3RyYWludC5ib2R5QmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGVuZ3RoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxufSkoKTtcblxufSx7XCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi4vY29yZS9TbGVlcGluZ1wiOjIyLFwiLi4vZ2VvbWV0cnkvQXhlc1wiOjI1LFwiLi4vZ2VvbWV0cnkvQm91bmRzXCI6MjYsXCIuLi9nZW9tZXRyeS9WZWN0b3JcIjoyOCxcIi4uL2dlb21ldHJ5L1ZlcnRpY2VzXCI6Mjl9XSwxMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuTW91c2VDb25zdHJhaW50YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgbW91c2UgY29uc3RyYWludHMuXG4qIE1vdXNlIGNvbnN0cmFpbnRzIGFyZSB1c2VkIGZvciBhbGxvd2luZyB1c2VyIGludGVyYWN0aW9uLCBwcm92aWRpbmcgdGhlIGFiaWxpdHkgdG8gbW92ZSBib2RpZXMgdmlhIHRoZSBtb3VzZSBvciB0b3VjaC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIE1vdXNlQ29uc3RyYWludFxuKi9cblxudmFyIE1vdXNlQ29uc3RyYWludCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlQ29uc3RyYWludDtcblxudmFyIFZlcnRpY2VzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVydGljZXMnKTtcbnZhciBTbGVlcGluZyA9IF9kZXJlcV8oJy4uL2NvcmUvU2xlZXBpbmcnKTtcbnZhciBNb3VzZSA9IF9kZXJlcV8oJy4uL2NvcmUvTW91c2UnKTtcbnZhciBFdmVudHMgPSBfZGVyZXFfKCcuLi9jb3JlL0V2ZW50cycpO1xudmFyIERldGVjdG9yID0gX2RlcmVxXygnLi4vY29sbGlzaW9uL0RldGVjdG9yJyk7XG52YXIgQ29uc3RyYWludCA9IF9kZXJlcV8oJy4vQ29uc3RyYWludCcpO1xudmFyIENvbXBvc2l0ZSA9IF9kZXJlcV8oJy4uL2JvZHkvQ29tcG9zaXRlJyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcbnZhciBCb3VuZHMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9Cb3VuZHMnKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtb3VzZSBjb25zdHJhaW50LlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge01vdXNlQ29uc3RyYWludH0gQSBuZXcgTW91c2VDb25zdHJhaW50XG4gICAgICovXG4gICAgTW91c2VDb25zdHJhaW50LmNyZWF0ZSA9IGZ1bmN0aW9uKGVuZ2luZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgbW91c2UgPSAoZW5naW5lID8gZW5naW5lLm1vdXNlIDogbnVsbCkgfHwgKG9wdGlvbnMgPyBvcHRpb25zLm1vdXNlIDogbnVsbCk7XG5cbiAgICAgICAgaWYgKCFtb3VzZSkge1xuICAgICAgICAgICAgaWYgKGVuZ2luZSAmJiBlbmdpbmUucmVuZGVyICYmIGVuZ2luZS5yZW5kZXIuY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UgPSBNb3VzZS5jcmVhdGUoZW5naW5lLnJlbmRlci5jYW52YXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKG9wdGlvbnMuZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ01vdXNlQ29uc3RyYWludC5jcmVhdGU6IG9wdGlvbnMubW91c2Ugd2FzIHVuZGVmaW5lZCwgb3B0aW9ucy5lbGVtZW50IHdhcyB1bmRlZmluZWQsIG1heSBub3QgZnVuY3Rpb24gYXMgZXhwZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb25zdHJhaW50ID0gQ29uc3RyYWludC5jcmVhdGUoeyBcbiAgICAgICAgICAgIGxhYmVsOiAnTW91c2UgQ29uc3RyYWludCcsXG4gICAgICAgICAgICBwb2ludEE6IG1vdXNlLnBvc2l0aW9uLFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGxlbmd0aDogMC4wMSwgXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDAuMSxcbiAgICAgICAgICAgIGFuZ3VsYXJTdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogJyM5MEVFOTAnLFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB0eXBlOiAnbW91c2VDb25zdHJhaW50JyxcbiAgICAgICAgICAgIG1vdXNlOiBtb3VzZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgICAgY29uc3RyYWludDogY29uc3RyYWludCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAweDAwMDEsXG4gICAgICAgICAgICAgICAgbWFzazogMHhGRkZGRkZGRixcbiAgICAgICAgICAgICAgICBncm91cDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBtb3VzZUNvbnN0cmFpbnQgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBFdmVudHMub24oZW5naW5lLCAnYmVmb3JlVXBkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYWxsQm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmUud29ybGQpO1xuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50LnVwZGF0ZShtb3VzZUNvbnN0cmFpbnQsIGFsbEJvZGllcyk7XG4gICAgICAgICAgICBNb3VzZUNvbnN0cmFpbnQuX3RyaWdnZXJFdmVudHMobW91c2VDb25zdHJhaW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1vdXNlQ29uc3RyYWludDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZ2l2ZW4gbW91c2UgY29uc3RyYWludC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtNb3VzZUNvbnN0cmFpbnR9IG1vdXNlQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQudXBkYXRlID0gZnVuY3Rpb24obW91c2VDb25zdHJhaW50LCBib2RpZXMpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gbW91c2VDb25zdHJhaW50Lm1vdXNlLFxuICAgICAgICAgICAgY29uc3RyYWludCA9IG1vdXNlQ29uc3RyYWludC5jb25zdHJhaW50LFxuICAgICAgICAgICAgYm9keSA9IG1vdXNlQ29uc3RyYWludC5ib2R5O1xuXG4gICAgICAgIGlmIChtb3VzZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAgIGlmICghY29uc3RyYWludC5ib2R5Qikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMoYm9keS5ib3VuZHMsIG1vdXNlLnBvc2l0aW9uKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBEZXRlY3Rvci5jYW5Db2xsaWRlKGJvZHkuY29sbGlzaW9uRmlsdGVyLCBtb3VzZUNvbnN0cmFpbnQuY29sbGlzaW9uRmlsdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGJvZHkucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMocGFydC52ZXJ0aWNlcywgbW91c2UucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0gbW91c2UucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keUIgPSBtb3VzZUNvbnN0cmFpbnQuYm9keSA9IGJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0geyB4OiBtb3VzZS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvbi54LCB5OiBtb3VzZS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvbi55IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gYm9keS5hbmdsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdzdGFydGRyYWcnLCB7IG1vdXNlOiBtb3VzZSwgYm9keTogYm9keSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChjb25zdHJhaW50LmJvZHlCLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEEgPSBtb3VzZS5wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keUIgPSBtb3VzZUNvbnN0cmFpbnQuYm9keSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QiA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChib2R5KVxuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ2VuZGRyYWcnLCB7IG1vdXNlOiBtb3VzZSwgYm9keTogYm9keSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBtb3VzZSBjb25zdHJhaW50IGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIF90cmlnZ2VyRXZlbnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZUNvbnN0cmFpbnRcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQuX3RyaWdnZXJFdmVudHMgPSBmdW5jdGlvbihtb3VzZUNvbnN0cmFpbnQpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gbW91c2VDb25zdHJhaW50Lm1vdXNlLFxuICAgICAgICAgICAgbW91c2VFdmVudHMgPSBtb3VzZS5zb3VyY2VFdmVudHM7XG5cbiAgICAgICAgaWYgKG1vdXNlRXZlbnRzLm1vdXNlbW92ZSlcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNlbW92ZScsIHsgbW91c2U6IG1vdXNlIH0pO1xuXG4gICAgICAgIGlmIChtb3VzZUV2ZW50cy5tb3VzZWRvd24pXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdtb3VzZWRvd24nLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICBpZiAobW91c2VFdmVudHMubW91c2V1cClcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNldXAnLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICAvLyByZXNldCB0aGUgbW91c2Ugc3RhdGUgcmVhZHkgZm9yIHRoZSBuZXh0IHN0ZXBcbiAgICAgICAgTW91c2UuY2xlYXJTb3VyY2VFdmVudHMobW91c2UpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBoYXMgbW92ZWQgKG9yIGEgdG91Y2ggbW92ZXMpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgbW91c2UgaXMgZG93biAob3IgYSB0b3VjaCBoYXMgc3RhcnRlZCkgZHVyaW5nIHRoZSBsYXN0IHN0ZXBcbiAgICAqXG4gICAgKiBAZXZlbnQgbW91c2Vkb3duXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBpcyB1cCAob3IgYSB0b3VjaCBoYXMgZW5kZWQpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNldXBcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIGEgYm9keVxuICAgICpcbiAgICAqIEBldmVudCBzdGFydGRyYWdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHtib2R5fSBldmVudC5ib2R5IFRoZSBib2R5IGJlaW5nIGRyYWdnZWRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIGVuZHMgZHJhZ2dpbmcgYSBib2R5XG4gICAgKlxuICAgICogQGV2ZW50IGVuZGRyYWdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHtib2R5fSBldmVudC5ib2R5IFRoZSBib2R5IHRoYXQgaGFzIHN0b3BwZWQgYmVpbmcgZHJhZ2dlZFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImNvbnN0cmFpbnRcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBNb3VzZWAgaW5zdGFuY2UgaW4gdXNlLiBJZiBub3Qgc3VwcGxpZWQgaW4gYE1vdXNlQ29uc3RyYWludC5jcmVhdGVgLCBvbmUgd2lsbCBiZSBjcmVhdGVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG1vdXNlXG4gICAgICogQHR5cGUgbW91c2VcbiAgICAgKiBAZGVmYXVsdCBtb3VzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBCb2R5YCB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBtb3ZlZCBieSB0aGUgdXNlciwgb3IgYG51bGxgIGlmIG5vIGJvZHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYENvbnN0cmFpbnRgIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gbW92ZSB0aGUgYm9keSBkdXJpbmcgaW50ZXJhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29uc3RyYWludFxuICAgICAqIEB0eXBlIGNvbnN0cmFpbnRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gZmlsdGVyIHByb3BlcnRpZXMuXG4gICAgICogVGhlIGNvbGxpc2lvbiBmaWx0ZXIgYWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB3aGljaCB0eXBlcyBvZiBib2R5IHRoaXMgbW91c2UgY29uc3RyYWludCBjYW4gaW50ZXJhY3Qgd2l0aC5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxufSkoKTtcblxufSx7XCIuLi9ib2R5L0NvbXBvc2l0ZVwiOjIsXCIuLi9jb2xsaXNpb24vRGV0ZWN0b3JcIjo1LFwiLi4vY29yZS9Db21tb25cIjoxNCxcIi4uL2NvcmUvRXZlbnRzXCI6MTYsXCIuLi9jb3JlL01vdXNlXCI6MTksXCIuLi9jb3JlL1NsZWVwaW5nXCI6MjIsXCIuLi9nZW9tZXRyeS9Cb3VuZHNcIjoyNixcIi4uL2dlb21ldHJ5L1ZlcnRpY2VzXCI6MjksXCIuL0NvbnN0cmFpbnRcIjoxMn1dLDE0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5Db21tb25gIG1vZHVsZSBjb250YWlucyB1dGlsaXR5IGZ1bmN0aW9ucyB0aGF0IGFyZSBjb21tb24gdG8gYWxsIG1vZHVsZXMuXG4qXG4qIEBjbGFzcyBDb21tb25cbiovXG5cbnZhciBDb21tb24gPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb247XG5cbihmdW5jdGlvbigpIHtcblxuICAgIENvbW1vbi5fbmV4dElkID0gMDtcbiAgICBDb21tb24uX3NlZWQgPSAwO1xuICAgIENvbW1vbi5fbm93U3RhcnRUaW1lID0gKyhuZXcgRGF0ZSgpKTtcblxuICAgIC8qKlxuICAgICAqIEV4dGVuZHMgdGhlIG9iamVjdCBpbiB0aGUgZmlyc3QgYXJndW1lbnQgdXNpbmcgdGhlIG9iamVjdCBpbiB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgICAqIEBtZXRob2QgZXh0ZW5kXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVlcFxuICAgICAqIEByZXR1cm4ge30gb2JqIGV4dGVuZGVkXG4gICAgICovXG4gICAgQ29tbW9uLmV4dGVuZCA9IGZ1bmN0aW9uKG9iaiwgZGVlcCkge1xuICAgICAgICB2YXIgYXJnc1N0YXJ0LFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIGRlZXBDbG9uZTtcblxuICAgICAgICBpZiAodHlwZW9mIGRlZXAgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYXJnc1N0YXJ0ID0gMjtcbiAgICAgICAgICAgIGRlZXBDbG9uZSA9IGRlZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzU3RhcnQgPSAxO1xuICAgICAgICAgICAgZGVlcENsb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSBhcmdzU3RhcnQ7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcENsb25lICYmIHNvdXJjZVtwcm9wXSAmJiBzb3VyY2VbcHJvcF0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmpbcHJvcF0gfHwgb2JqW3Byb3BdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBvYmpbcHJvcF0gfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbW9uLmV4dGVuZChvYmpbcHJvcF0sIGRlZXBDbG9uZSwgc291cmNlW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNsb25lIG9mIHRoZSBvYmplY3QsIGlmIGRlZXAgaXMgdHJ1ZSByZWZlcmVuY2VzIHdpbGwgYWxzbyBiZSBjbG9uZWQuXG4gICAgICogQG1ldGhvZCBjbG9uZVxuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IGRlZXBcbiAgICAgKiBAcmV0dXJuIHt9IG9iaiBjbG9uZWRcbiAgICAgKi9cbiAgICBDb21tb24uY2xvbmUgPSBmdW5jdGlvbihvYmosIGRlZXApIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoe30sIGRlZXAsIG9iaik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2Yga2V5cyBmb3IgdGhlIGdpdmVuIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGtleXNcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHJldHVybiB7c3RyaW5nW119IGtleXNcbiAgICAgKi9cbiAgICBDb21tb24ua2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMpXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgICAvLyBhdm9pZCBoYXNPd25Qcm9wZXJ0eSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBvYmplY3QuXG4gICAgICogQG1ldGhvZCB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHJldHVybiB7YXJyYXl9IEFycmF5IG9mIHRoZSBvYmplY3RzIHByb3BlcnR5IHZhbHVlc1xuICAgICAqL1xuICAgIENvbW1vbi52YWx1ZXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChvYmpba2V5c1tpXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gYXZvaWQgaGFzT3duUHJvcGVydHkgZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChvYmpba2V5XSk7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgYSB2YWx1ZSBmcm9tIGBiYXNlYCByZWxhdGl2ZSB0byB0aGUgYHBhdGhgIHN0cmluZy5cbiAgICAgKiBAbWV0aG9kIGdldFxuICAgICAqIEBwYXJhbSB7fSBvYmogVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgLCBlLmcuICdGb28uQmFyLmJheidcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2JlZ2luXSBQYXRoIHNsaWNlIGJlZ2luXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRdIFBhdGggc2xpY2UgZW5kXG4gICAgICogQHJldHVybiB7fSBUaGUgb2JqZWN0IGF0IHRoZSBnaXZlbiBwYXRoXG4gICAgICovXG4gICAgQ29tbW9uLmdldCA9IGZ1bmN0aW9uKG9iaiwgcGF0aCwgYmVnaW4sIGVuZCkge1xuICAgICAgICBwYXRoID0gcGF0aC5zcGxpdCgnLicpLnNsaWNlKGJlZ2luLCBlbmQpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIHZhbHVlIG9uIGBiYXNlYCByZWxhdGl2ZSB0byB0aGUgZ2l2ZW4gYHBhdGhgIHN0cmluZy5cbiAgICAgKiBAbWV0aG9kIHNldFxuICAgICAqIEBwYXJhbSB7fSBvYmogVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgLCBlLmcuICdGb28uQmFyLmJheidcbiAgICAgKiBAcGFyYW0ge30gdmFsIFRoZSB2YWx1ZSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2JlZ2luXSBQYXRoIHNsaWNlIGJlZ2luXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRdIFBhdGggc2xpY2UgZW5kXG4gICAgICogQHJldHVybiB7fSBQYXNzIHRocm91Z2ggYHZhbGAgZm9yIGNoYWluaW5nXG4gICAgICovXG4gICAgQ29tbW9uLnNldCA9IGZ1bmN0aW9uKG9iaiwgcGF0aCwgdmFsLCBiZWdpbiwgZW5kKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKS5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgICAgQ29tbW9uLmdldChvYmosIHBhdGgsIDAsIC0xKVtwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNodWZmbGVzIHRoZSBnaXZlbiBhcnJheSBpbi1wbGFjZS5cbiAgICAgKiBUaGUgZnVuY3Rpb24gdXNlcyBhIHNlZWRlZCByYW5kb20gZ2VuZXJhdG9yLlxuICAgICAqIEBtZXRob2Qgc2h1ZmZsZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gICAgICogQHJldHVybiB7YXJyYXl9IGFycmF5IHNodWZmbGVkIHJhbmRvbWx5XG4gICAgICovXG4gICAgQ29tbW9uLnNodWZmbGUgPSBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKENvbW1vbi5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSYW5kb21seSBjaG9vc2VzIGEgdmFsdWUgZnJvbSBhIGxpc3Qgd2l0aCBlcXVhbCBwcm9iYWJpbGl0eS5cbiAgICAgKiBUaGUgZnVuY3Rpb24gdXNlcyBhIHNlZWRlZCByYW5kb20gZ2VuZXJhdG9yLlxuICAgICAqIEBtZXRob2QgY2hvb3NlXG4gICAgICogQHBhcmFtIHthcnJheX0gY2hvaWNlc1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gQSByYW5kb20gY2hvaWNlIG9iamVjdCBmcm9tIHRoZSBhcnJheVxuICAgICAqL1xuICAgIENvbW1vbi5jaG9vc2UgPSBmdW5jdGlvbihjaG9pY2VzKSB7XG4gICAgICAgIHJldHVybiBjaG9pY2VzW01hdGguZmxvb3IoQ29tbW9uLnJhbmRvbSgpICogY2hvaWNlcy5sZW5ndGgpXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MRWxlbWVudCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICAqIEBtZXRob2QgaXNFbGVtZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIEhUTUxFbGVtZW50LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNFbGVtZW50ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEob2JqICYmIG9iai5ub2RlVHlwZSAmJiBvYmoubm9kZU5hbWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBhcnJheS5cbiAgICAgKiBAbWV0aG9kIGlzQXJyYXlcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb24uXG4gICAgICogQG1ldGhvZCBpc0Z1bmN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHBsYWluIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGlzUGxhaW5PYmplY3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgcGxhaW4gb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxuICAgICAqIEBtZXRob2QgaXNTdHJpbmdcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb21tb24uaXNTdHJpbmcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiB2YWx1ZSBjbGFtcGVkIGJldHdlZW4gYSBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlLlxuICAgICAqIEBtZXRob2QgY2xhbXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGNsYW1wZWQgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVcbiAgICAgKi9cbiAgICBDb21tb24uY2xhbXAgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgbWluKVxuICAgICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgaWYgKHZhbHVlID4gbWF4KVxuICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2lnbiBvZiB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAgICogQG1ldGhvZCBzaWduXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtMSBpZiBuZWdhdGl2ZSwgKzEgaWYgMCBvciBwb3NpdGl2ZVxuICAgICAqL1xuICAgIENvbW1vbi5zaWduID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIDwgMCA/IC0xIDogMTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdGltZXN0YW1wIHNpbmNlIHRoZSB0aW1lIG9yaWdpbiAoZS5nLiBmcm9tIHBhZ2UgbG9hZCkuXG4gICAgICogVGhlIHJlc3VsdCB3aWxsIGJlIGhpZ2gtcmVzb2x1dGlvbiBpbmNsdWRpbmcgZGVjaW1hbCBwbGFjZXMgaWYgYXZhaWxhYmxlLlxuICAgICAqIEBtZXRob2Qgbm93XG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBDb21tb24ubm93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2Uubm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LnBlcmZvcm1hbmNlLndlYmtpdE5vdykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uud2Via2l0Tm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkpIC0gQ29tbW9uLl9ub3dTdGFydFRpbWU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmFuZG9tIHZhbHVlIGJldHdlZW4gYSBtaW5pbXVtIGFuZCBhIG1heGltdW0gdmFsdWUgaW5jbHVzaXZlLlxuICAgICAqIFRoZSBmdW5jdGlvbiB1c2VzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3IuXG4gICAgICogQG1ldGhvZCByYW5kb21cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXggaW5jbHVzaXZlXG4gICAgICovXG4gICAgQ29tbW9uLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9ICh0eXBlb2YgbWluICE9PSBcInVuZGVmaW5lZFwiKSA/IG1pbiA6IDA7XG4gICAgICAgIG1heCA9ICh0eXBlb2YgbWF4ICE9PSBcInVuZGVmaW5lZFwiKSA/IG1heCA6IDE7XG4gICAgICAgIHJldHVybiBtaW4gKyBfc2VlZGVkUmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbiAgICB9O1xuXG4gICAgdmFyIF9zZWVkZWRSYW5kb20gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2NvbmdydWVudGlhbF9nZW5lcmF0b3JcbiAgICAgICAgQ29tbW9uLl9zZWVkID0gKENvbW1vbi5fc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgICAgIHJldHVybiBDb21tb24uX3NlZWQgLyAyMzMyODA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgQ1NTIGhleCBjb2xvdXIgc3RyaW5nIGludG8gYW4gaW50ZWdlci5cbiAgICAgKiBAbWV0aG9kIGNvbG9yVG9OdW1iZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3JTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBDU1MgaGV4IHN0cmluZ1xuICAgICAqL1xuICAgIENvbW1vbi5jb2xvclRvTnVtYmVyID0gZnVuY3Rpb24oY29sb3JTdHJpbmcpIHtcbiAgICAgICAgY29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5yZXBsYWNlKCcjJywnJyk7XG5cbiAgICAgICAgaWYgKGNvbG9yU3RyaW5nLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICBjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLmNoYXJBdCgwKSArIGNvbG9yU3RyaW5nLmNoYXJBdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBjb2xvclN0cmluZy5jaGFyQXQoMSkgKyBjb2xvclN0cmluZy5jaGFyQXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICsgY29sb3JTdHJpbmcuY2hhckF0KDIpICsgY29sb3JTdHJpbmcuY2hhckF0KDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zb2xlIGxvZ2dpbmcgbGV2ZWwgdG8gdXNlLCB3aGVyZSBlYWNoIGxldmVsIGluY2x1ZGVzIGFsbCBsZXZlbHMgYWJvdmUgYW5kIGV4Y2x1ZGVzIHRoZSBsZXZlbHMgYmVsb3cuXG4gICAgICogVGhlIGRlZmF1bHQgbGV2ZWwgaXMgJ2RlYnVnJyB3aGljaCBzaG93cyBhbGwgY29uc29sZSBtZXNzYWdlcy4gIFxuICAgICAqXG4gICAgICogUG9zc2libGUgbGV2ZWwgdmFsdWVzIGFyZTpcbiAgICAgKiAtIDAgPSBOb25lXG4gICAgICogLSAxID0gRGVidWdcbiAgICAgKiAtIDIgPSBJbmZvXG4gICAgICogLSAzID0gV2FyblxuICAgICAqIC0gNCA9IEVycm9yXG4gICAgICogQHByb3BlcnR5IENvbW1vbi5sb2dMZXZlbFxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIENvbW1vbi5sb2dMZXZlbCA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGBjb25zb2xlLmxvZ2AgbWVzc2FnZSBvbmx5IGlmIHRoZSBjdXJyZW50IGBDb21tb24ubG9nTGV2ZWxgIGFsbG93cyBpdC5cbiAgICAgKiBUaGUgbWVzc2FnZSB3aWxsIGJlIHByZWZpeGVkIHdpdGggJ21hdHRlci1qcycgdG8gbWFrZSBpdCBlYXNpbHkgaWRlbnRpZmlhYmxlLlxuICAgICAqIEBtZXRob2QgbG9nXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi5sb2cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgQ29tbW9uLmxvZ0xldmVsID4gMCAmJiBDb21tb24ubG9nTGV2ZWwgPD0gMykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydtYXR0ZXItanM6J10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGBjb25zb2xlLmluZm9gIG1lc3NhZ2Ugb25seSBpZiB0aGUgY3VycmVudCBgQ29tbW9uLmxvZ0xldmVsYCBhbGxvd3MgaXQuXG4gICAgICogVGhlIG1lc3NhZ2Ugd2lsbCBiZSBwcmVmaXhlZCB3aXRoICdtYXR0ZXItanMnIHRvIG1ha2UgaXQgZWFzaWx5IGlkZW50aWZpYWJsZS5cbiAgICAgKiBAbWV0aG9kIGluZm9cbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLmluZm8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgQ29tbW9uLmxvZ0xldmVsID4gMCAmJiBDb21tb24ubG9nTGV2ZWwgPD0gMikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsIFsnbWF0dGVyLWpzOiddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBgY29uc29sZS53YXJuYCBtZXNzYWdlIG9ubHkgaWYgdGhlIGN1cnJlbnQgYENvbW1vbi5sb2dMZXZlbGAgYWxsb3dzIGl0LlxuICAgICAqIFRoZSBtZXNzYWdlIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCAnbWF0dGVyLWpzJyB0byBtYWtlIGl0IGVhc2lseSBpZGVudGlmaWFibGUuXG4gICAgICogQG1ldGhvZCB3YXJuXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi53YXJuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjb25zb2xlICYmIENvbW1vbi5sb2dMZXZlbCA+IDAgJiYgQ29tbW9uLmxvZ0xldmVsIDw9IDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBbJ21hdHRlci1qczonXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdW5pcXVlIHNlcXVlbnRpYWwgSUQuXG4gICAgICogQG1ldGhvZCBuZXh0SWRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFVuaXF1ZSBzZXF1ZW50aWFsIElEXG4gICAgICovXG4gICAgQ29tbW9uLm5leHRJZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gQ29tbW9uLl9uZXh0SWQrKztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBjcm9zcyBicm93c2VyIGNvbXBhdGlibGUgaW5kZXhPZiBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAbWV0aG9kIGluZGV4T2ZcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBoYXlzdGFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZWVkbGVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBuZWVkbGUgaW4gaGF5c3RhY2ssIG90aGVyd2lzZSAtMS5cbiAgICAgKi9cbiAgICBDb21tb24uaW5kZXhPZiA9IGZ1bmN0aW9uKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgICAgICAgaWYgKGhheXN0YWNrLmluZGV4T2YpXG4gICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGF5c3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChoYXlzdGFja1tpXSA9PT0gbmVlZGxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGNyb3NzIGJyb3dzZXIgY29tcGF0aWJsZSBhcnJheSBtYXAgaW1wbGVtZW50YXRpb24uXG4gICAgICogQG1ldGhvZCBtYXBcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBsaXN0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICAgICAqIEByZXR1cm4ge2FycmF5fSBWYWx1ZXMgZnJvbSBsaXN0IHRyYW5zZm9ybWVkIGJ5IGZ1bmMuXG4gICAgICovXG4gICAgQ29tbW9uLm1hcCA9IGZ1bmN0aW9uKGxpc3QsIGZ1bmMpIHtcbiAgICAgICAgaWYgKGxpc3QubWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdC5tYXAoZnVuYyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWFwcGVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBtYXBwZWQucHVzaChmdW5jKGxpc3RbaV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBwZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgZGlyZWN0ZWQgZ3JhcGggYW5kIHJldHVybnMgdGhlIHBhcnRpYWxseSBvcmRlcmVkIHNldCBvZiB2ZXJ0aWNlcyBpbiB0b3BvbG9naWNhbCBvcmRlci5cbiAgICAgKiBDaXJjdWxhciBkZXBlbmRlbmNpZXMgYXJlIGFsbG93ZWQuXG4gICAgICogQG1ldGhvZCB0b3BvbG9naWNhbFNvcnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZ3JhcGhcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gUGFydGlhbGx5IG9yZGVyZWQgc2V0IG9mIHZlcnRpY2VzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAqL1xuICAgIENvbW1vbi50b3BvbG9naWNhbFNvcnQgPSBmdW5jdGlvbihncmFwaCkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWdlY2hldi9qYXZhc2NyaXB0LWFsZ29yaXRobXNcbiAgICAgICAgLy8gQ29weXJpZ2h0IChjKSBNaW5rbyBHZWNoZXYgKE1JVCBsaWNlbnNlKVxuICAgICAgICAvLyBNb2RpZmljYXRpb25zOiB0aWR5IGZvcm1hdHRpbmcgYW5kIG5hbWluZ1xuICAgICAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgICAgICB2aXNpdGVkID0gW10sXG4gICAgICAgICAgICB0ZW1wID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgbm9kZSBpbiBncmFwaCkge1xuICAgICAgICAgICAgaWYgKCF2aXNpdGVkW25vZGVdICYmICF0ZW1wW25vZGVdKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLl90b3BvbG9naWNhbFNvcnQobm9kZSwgdmlzaXRlZCwgdGVtcCwgZ3JhcGgsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDb21tb24uX3RvcG9sb2dpY2FsU29ydCA9IGZ1bmN0aW9uKG5vZGUsIHZpc2l0ZWQsIHRlbXAsIGdyYXBoLCByZXN1bHQpIHtcbiAgICAgICAgdmFyIG5laWdoYm9ycyA9IGdyYXBoW25vZGVdIHx8IFtdO1xuICAgICAgICB0ZW1wW25vZGVdID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5laWdoYm9ycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIG5laWdoYm9yID0gbmVpZ2hib3JzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGVtcFtuZWlnaGJvcl0pIHtcbiAgICAgICAgICAgICAgICAvLyBza2lwIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXZpc2l0ZWRbbmVpZ2hib3JdKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLl90b3BvbG9naWNhbFNvcnQobmVpZ2hib3IsIHZpc2l0ZWQsIHRlbXAsIGdyYXBoLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGVtcFtub2RlXSA9IGZhbHNlO1xuICAgICAgICB2aXNpdGVkW25vZGVdID0gdHJ1ZTtcblxuICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGFrZXMgX25fIGZ1bmN0aW9ucyBhcyBhcmd1bWVudHMgYW5kIHJldHVybnMgYSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGVtIGluIG9yZGVyLlxuICAgICAqIFRoZSBhcmd1bWVudHMgYXBwbGllZCB3aGVuIGNhbGxpbmcgdGhlIG5ldyBmdW5jdGlvbiB3aWxsIGFsc28gYmUgYXBwbGllZCB0byBldmVyeSBmdW5jdGlvbiBwYXNzZWQuXG4gICAgICogVGhlIHZhbHVlIG9mIGB0aGlzYCByZWZlcnMgdG8gdGhlIGxhc3QgdmFsdWUgcmV0dXJuZWQgaW4gdGhlIGNoYWluIHRoYXQgd2FzIG5vdCBgdW5kZWZpbmVkYC5cbiAgICAgKiBUaGVyZWZvcmUgaWYgYSBwYXNzZWQgZnVuY3Rpb24gZG9lcyBub3QgcmV0dXJuIGEgdmFsdWUsIHRoZSBwcmV2aW91c2x5IHJldHVybmVkIHZhbHVlIGlzIG1haW50YWluZWQuXG4gICAgICogQWZ0ZXIgYWxsIHBhc3NlZCBmdW5jdGlvbnMgaGF2ZSBiZWVuIGNhbGxlZCB0aGUgbmV3IGZ1bmN0aW9uIHJldHVybnMgdGhlIGxhc3QgcmV0dXJuZWQgdmFsdWUgKGlmIGFueSkuXG4gICAgICogSWYgYW55IG9mIHRoZSBwYXNzZWQgZnVuY3Rpb25zIGFyZSBhIGNoYWluLCB0aGVuIHRoZSBjaGFpbiB3aWxsIGJlIGZsYXR0ZW5lZC5cbiAgICAgKiBAbWV0aG9kIGNoYWluXG4gICAgICogQHBhcmFtIC4uLmZ1bmNzIHtmdW5jdGlvbn0gVGhlIGZ1bmN0aW9ucyB0byBjaGFpbi5cbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgcGFzc2VkIGZ1bmN0aW9ucyBpbiBvcmRlci5cbiAgICAgKi9cbiAgICBDb21tb24uY2hhaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZ1bmNzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBmdW5jID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZnVuYy5fY2hhaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIGZsYXR0ZW4gYWxyZWFkeSBjaGFpbmVkIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgIGZ1bmNzLnB1c2guYXBwbHkoZnVuY3MsIGZ1bmMuX2NoYWluZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmdW5jcy5wdXNoKGZ1bmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL2RldnRvb2xzLWRvY3MvaXNzdWVzLzUzI2lzc3VlY29tbWVudC01MTk0MTM1OFxuICAgICAgICAgICAgdmFyIGxhc3RSZXN1bHQsXG4gICAgICAgICAgICAgICAgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZ1bmNzW2ldLmFwcGx5KGxhc3RSZXN1bHQsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBjaGFpbi5fY2hhaW5lZCA9IGZ1bmNzO1xuXG4gICAgICAgIHJldHVybiBjaGFpbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGJlZm9yZSB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gb24gdGhlIGdpdmVuIGBwYXRoYCByZWxhdGl2ZSB0byBgYmFzZWAuXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXG4gICAgICogQG1ldGhvZCBjaGFpblBhdGhCZWZvcmVcbiAgICAgKiBAcGFyYW0ge30gYmFzZSBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBiZWZvcmUgdGhlIG9yaWdpbmFsXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXG4gICAgICovXG4gICAgQ29tbW9uLmNoYWluUGF0aEJlZm9yZSA9IGZ1bmN0aW9uKGJhc2UsIHBhdGgsIGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5zZXQoYmFzZSwgcGF0aCwgQ29tbW9uLmNoYWluKFxuICAgICAgICAgICAgZnVuYyxcbiAgICAgICAgICAgIENvbW1vbi5nZXQoYmFzZSwgcGF0aClcbiAgICAgICAgKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBhZnRlciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gb24gdGhlIGdpdmVuIGBwYXRoYCByZWxhdGl2ZSB0byBgYmFzZWAuXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXG4gICAgICogQG1ldGhvZCBjaGFpblBhdGhBZnRlclxuICAgICAqIEBwYXJhbSB7fSBiYXNlIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGFmdGVyIHRoZSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxuICAgICAqL1xuICAgIENvbW1vbi5jaGFpblBhdGhBZnRlciA9IGZ1bmN0aW9uKGJhc2UsIHBhdGgsIGZ1bmMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5zZXQoYmFzZSwgcGF0aCwgQ29tbW9uLmNoYWluKFxuICAgICAgICAgICAgQ29tbW9uLmdldChiYXNlLCBwYXRoKSxcbiAgICAgICAgICAgIGZ1bmNcbiAgICAgICAgKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8gcmVxdWlyZSBleHRlcm5hbCBsaWJyYXJpZXMgb3V0c2lkZSBvZiB0aGUgYnVuZGxlLlxuICAgICAqIEl0IGZpcnN0IGxvb2tzIGZvciB0aGUgYGdsb2JhbE5hbWVgIG9uIHRoZSBlbnZpcm9ubWVudCdzIGdsb2JhbCBuYW1lc3BhY2UuXG4gICAgICogSWYgdGhlIGdsb2JhbCBpcyBub3QgZm91bmQsIGl0IHdpbGwgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBzdGFuZGFyZCBgcmVxdWlyZWAgdXNpbmcgdGhlIGBtb2R1bGVOYW1lYC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgX3JlcXVpcmVHbG9iYWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ2xvYmFsTmFtZSBUaGUgZ2xvYmFsIG1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZU5hbWUgVGhlIGZhbGxiYWNrIENvbW1vbkpTIG1vZHVsZSBuYW1lXG4gICAgICogQHJldHVybiB7fSBUaGUgbG9hZGVkIG1vZHVsZVxuICAgICAqL1xuICAgIENvbW1vbi5fcmVxdWlyZUdsb2JhbCA9IGZ1bmN0aW9uKGdsb2JhbE5hbWUsIG1vZHVsZU5hbWUpIHtcbiAgICAgICAgdmFyIG9iaiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvd1tnbG9iYWxOYW1lXSA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsW2dsb2JhbE5hbWVdIDogbnVsbCk7XG4gICAgICAgIHJldHVybiBvYmogfHwgX2RlcmVxXyhtb2R1bGVOYW1lKTtcbiAgICB9O1xufSkoKTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHt9XSwxNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuRW5naW5lYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBlbmdpbmVzLlxuKiBBbiBlbmdpbmUgaXMgYSBjb250cm9sbGVyIHRoYXQgbWFuYWdlcyB1cGRhdGluZyB0aGUgc2ltdWxhdGlvbiBvZiB0aGUgd29ybGQuXG4qIFNlZSBgTWF0dGVyLlJ1bm5lcmAgZm9yIGFuIG9wdGlvbmFsIGdhbWUgbG9vcCB1dGlsaXR5LlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgRW5naW5lXG4qL1xuXG52YXIgRW5naW5lID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gRW5naW5lO1xuXG52YXIgV29ybGQgPSBfZGVyZXFfKCcuLi9ib2R5L1dvcmxkJyk7XG52YXIgU2xlZXBpbmcgPSBfZGVyZXFfKCcuL1NsZWVwaW5nJyk7XG52YXIgUmVzb2x2ZXIgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vUmVzb2x2ZXInKTtcbnZhciBSZW5kZXIgPSBfZGVyZXFfKCcuLi9yZW5kZXIvUmVuZGVyJyk7XG52YXIgUGFpcnMgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vUGFpcnMnKTtcbnZhciBNZXRyaWNzID0gX2RlcmVxXygnLi9NZXRyaWNzJyk7XG52YXIgR3JpZCA9IF9kZXJlcV8oJy4uL2NvbGxpc2lvbi9HcmlkJyk7XG52YXIgRXZlbnRzID0gX2RlcmVxXygnLi9FdmVudHMnKTtcbnZhciBDb21wb3NpdGUgPSBfZGVyZXFfKCcuLi9ib2R5L0NvbXBvc2l0ZScpO1xudmFyIENvbnN0cmFpbnQgPSBfZGVyZXFfKCcuLi9jb25zdHJhaW50L0NvbnN0cmFpbnQnKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuL0NvbW1vbicpO1xudmFyIEJvZHkgPSBfZGVyZXFfKCcuLi9ib2R5L0JvZHknKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBlbmdpbmUuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqL1xuICAgIEVuZ2luZS5jcmVhdGUgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIG9wdGlvbnMgbWF5IGJlIHBhc3NlZCBhcyB0aGUgZmlyc3QgKGFuZCBvbmx5KSBhcmd1bWVudFxuICAgICAgICBvcHRpb25zID0gQ29tbW9uLmlzRWxlbWVudChlbGVtZW50KSA/IG9wdGlvbnMgOiBlbGVtZW50O1xuICAgICAgICBlbGVtZW50ID0gQ29tbW9uLmlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBudWxsO1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAoZWxlbWVudCB8fCBvcHRpb25zLnJlbmRlcikge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ0VuZ2luZS5jcmVhdGU6IGVuZ2luZS5yZW5kZXIgaXMgZGVwcmVjYXRlZCAoc2VlIGRvY3MpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbkl0ZXJhdGlvbnM6IDYsXG4gICAgICAgICAgICB2ZWxvY2l0eUl0ZXJhdGlvbnM6IDQsXG4gICAgICAgICAgICBjb25zdHJhaW50SXRlcmF0aW9uczogMixcbiAgICAgICAgICAgIGVuYWJsZVNsZWVwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICBwbHVnaW46IHt9LFxuICAgICAgICAgICAgdGltaW5nOiB7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgICAgIHRpbWVTY2FsZTogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyb2FkcGhhc2U6IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBHcmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGVuZ2luZSA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIEBkZXByZWNhdGVkXG4gICAgICAgIGlmIChlbGVtZW50IHx8IGVuZ2luZS5yZW5kZXIpIHtcbiAgICAgICAgICAgIHZhciByZW5kZXJEZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFJlbmRlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZW5naW5lLnJlbmRlciA9IENvbW1vbi5leHRlbmQocmVuZGVyRGVmYXVsdHMsIGVuZ2luZS5yZW5kZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGRlcHJlY2F0ZWRcbiAgICAgICAgaWYgKGVuZ2luZS5yZW5kZXIgJiYgZW5naW5lLnJlbmRlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICBlbmdpbmUucmVuZGVyID0gZW5naW5lLnJlbmRlci5jb250cm9sbGVyLmNyZWF0ZShlbmdpbmUucmVuZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBkZXByZWNhdGVkXG4gICAgICAgIGlmIChlbmdpbmUucmVuZGVyKSB7XG4gICAgICAgICAgICBlbmdpbmUucmVuZGVyLmVuZ2luZSA9IGVuZ2luZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuZ2luZS53b3JsZCA9IG9wdGlvbnMud29ybGQgfHwgV29ybGQuY3JlYXRlKGVuZ2luZS53b3JsZCk7XG4gICAgICAgIGVuZ2luZS5wYWlycyA9IFBhaXJzLmNyZWF0ZSgpO1xuICAgICAgICBlbmdpbmUuYnJvYWRwaGFzZSA9IGVuZ2luZS5icm9hZHBoYXNlLmNvbnRyb2xsZXIuY3JlYXRlKGVuZ2luZS5icm9hZHBoYXNlKTtcbiAgICAgICAgZW5naW5lLm1ldHJpY3MgPSBlbmdpbmUubWV0cmljcyB8fCB7IGV4dGVuZGVkOiBmYWxzZSB9O1xuXG5cbiAgICAgICAgcmV0dXJuIGVuZ2luZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdGhlIHNpbXVsYXRpb24gZm9yd2FyZCBpbiB0aW1lIGJ5IGBkZWx0YWAgbXMuXG4gICAgICogVGhlIGBjb3JyZWN0aW9uYCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgdGltZSBjb3JyZWN0aW9uIGZhY3RvciB0byBhcHBseSB0byB0aGUgdXBkYXRlLlxuICAgICAqIFRoaXMgY2FuIGhlbHAgaW1wcm92ZSB0aGUgYWNjdXJhY3kgb2YgdGhlIHNpbXVsYXRpb24gaW4gY2FzZXMgd2hlcmUgYGRlbHRhYCBpcyBjaGFuZ2luZyBiZXR3ZWVuIHVwZGF0ZXMuXG4gICAgICogVGhlIHZhbHVlIG9mIGBjb3JyZWN0aW9uYCBpcyBkZWZpbmVkIGFzIGBkZWx0YSAvIGxhc3REZWx0YWAsIGkuZS4gdGhlIHBlcmNlbnRhZ2UgY2hhbmdlIG9mIGBkZWx0YWAgb3ZlciB0aGUgbGFzdCBzdGVwLlxuICAgICAqIFRoZXJlZm9yZSB0aGUgdmFsdWUgaXMgYWx3YXlzIGAxYCAobm8gY29ycmVjdGlvbikgd2hlbiBgZGVsdGFgIGNvbnN0YW50IChvciB3aGVuIG5vIGNvcnJlY3Rpb24gaXMgZGVzaXJlZCwgd2hpY2ggaXMgdGhlIGRlZmF1bHQpLlxuICAgICAqIFNlZSB0aGUgcGFwZXIgb24gPGEgaHJlZj1cImh0dHA6Ly9sb25lc29jay5uZXQvYXJ0aWNsZS92ZXJsZXQuaHRtbFwiPlRpbWUgQ29ycmVjdGVkIFZlcmxldDwvYT4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBUcmlnZ2VycyBgYmVmb3JlVXBkYXRlYCBhbmQgYGFmdGVyVXBkYXRlYCBldmVudHMuXG4gICAgICogVHJpZ2dlcnMgYGNvbGxpc2lvblN0YXJ0YCwgYGNvbGxpc2lvbkFjdGl2ZWAgYW5kIGBjb2xsaXNpb25FbmRgIGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbHRhPTE2LjY2Nl1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvcnJlY3Rpb249MV1cbiAgICAgKi9cbiAgICBFbmdpbmUudXBkYXRlID0gZnVuY3Rpb24oZW5naW5lLCBkZWx0YSwgY29ycmVjdGlvbikge1xuICAgICAgICBkZWx0YSA9IGRlbHRhIHx8IDEwMDAgLyA2MDtcbiAgICAgICAgY29ycmVjdGlvbiA9IGNvcnJlY3Rpb24gfHwgMTtcblxuICAgICAgICB2YXIgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICB0aW1pbmcgPSBlbmdpbmUudGltaW5nLFxuICAgICAgICAgICAgYnJvYWRwaGFzZSA9IGVuZ2luZS5icm9hZHBoYXNlLFxuICAgICAgICAgICAgYnJvYWRwaGFzZVBhaXJzID0gW10sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIGluY3JlbWVudCB0aW1lc3RhbXBcbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcCArPSBkZWx0YSAqIHRpbWluZy50aW1lU2NhbGU7XG5cbiAgICAgICAgLy8gY3JlYXRlIGFuIGV2ZW50IG9iamVjdFxuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdiZWZvcmVVcGRhdGUnLCBldmVudCk7XG5cbiAgICAgICAgLy8gZ2V0IGxpc3RzIG9mIGFsbCBib2RpZXMgYW5kIGNvbnN0cmFpbnRzLCBubyBtYXR0ZXIgd2hhdCBjb21wb3NpdGVzIHRoZXkgYXJlIGluXG4gICAgICAgIHZhciBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKTtcblxuXG4gICAgICAgIC8vIGlmIHNsZWVwaW5nIGVuYWJsZWQsIGNhbGwgdGhlIHNsZWVwaW5nIGNvbnRyb2xsZXJcbiAgICAgICAgaWYgKGVuZ2luZS5lbmFibGVTbGVlcGluZylcbiAgICAgICAgICAgIFNsZWVwaW5nLnVwZGF0ZShhbGxCb2RpZXMsIHRpbWluZy50aW1lU2NhbGUpO1xuXG4gICAgICAgIC8vIGFwcGxpZXMgZ3Jhdml0eSB0byBhbGwgYm9kaWVzXG4gICAgICAgIEVuZ2luZS5fYm9kaWVzQXBwbHlHcmF2aXR5KGFsbEJvZGllcywgd29ybGQuZ3Jhdml0eSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBib2R5IHBvc2l0aW9uIGFuZCByb3RhdGlvbiBieSBpbnRlZ3JhdGlvblxuICAgICAgICBFbmdpbmUuX2JvZGllc1VwZGF0ZShhbGxCb2RpZXMsIGRlbHRhLCB0aW1pbmcudGltZVNjYWxlLCBjb3JyZWN0aW9uLCB3b3JsZC5ib3VuZHMpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBhbGwgY29uc3RyYWludHMgKGZpcnN0IHBhc3MpXG4gICAgICAgIENvbnN0cmFpbnQucHJlU29sdmVBbGwoYWxsQm9kaWVzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS5jb25zdHJhaW50SXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlQWxsKGFsbENvbnN0cmFpbnRzLCB0aW1pbmcudGltZVNjYWxlKTtcbiAgICAgICAgfVxuICAgICAgICBDb25zdHJhaW50LnBvc3RTb2x2ZUFsbChhbGxCb2RpZXMpO1xuXG4gICAgICAgIC8vIGJyb2FkcGhhc2UgcGFzczogZmluZCBwb3RlbnRpYWwgY29sbGlzaW9uIHBhaXJzXG4gICAgICAgIGlmIChicm9hZHBoYXNlLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIGlmIHdvcmxkIGlzIGRpcnR5LCB3ZSBtdXN0IGZsdXNoIHRoZSB3aG9sZSBncmlkXG4gICAgICAgICAgICBpZiAod29ybGQuaXNNb2RpZmllZClcbiAgICAgICAgICAgICAgICBicm9hZHBoYXNlLmNvbnRyb2xsZXIuY2xlYXIoYnJvYWRwaGFzZSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZ3JpZCBidWNrZXRzIGJhc2VkIG9uIGN1cnJlbnQgYm9kaWVzXG4gICAgICAgICAgICBicm9hZHBoYXNlLmNvbnRyb2xsZXIudXBkYXRlKGJyb2FkcGhhc2UsIGFsbEJvZGllcywgZW5naW5lLCB3b3JsZC5pc01vZGlmaWVkKTtcbiAgICAgICAgICAgIGJyb2FkcGhhc2VQYWlycyA9IGJyb2FkcGhhc2UucGFpcnNMaXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgbm8gYnJvYWRwaGFzZSBzZXQsIHdlIGp1c3QgcGFzcyBhbGwgYm9kaWVzXG4gICAgICAgICAgICBicm9hZHBoYXNlUGFpcnMgPSBhbGxCb2RpZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbGVhciBhbGwgY29tcG9zaXRlIG1vZGlmaWVkIGZsYWdzXG4gICAgICAgIGlmICh3b3JsZC5pc01vZGlmaWVkKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQod29ybGQsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBuYXJyb3dwaGFzZSBwYXNzOiBmaW5kIGFjdHVhbCBjb2xsaXNpb25zLCB0aGVuIGNyZWF0ZSBvciB1cGRhdGUgY29sbGlzaW9uIHBhaXJzXG4gICAgICAgIHZhciBjb2xsaXNpb25zID0gYnJvYWRwaGFzZS5kZXRlY3Rvcihicm9hZHBoYXNlUGFpcnMsIGVuZ2luZSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGNvbGxpc2lvbiBwYWlyc1xuICAgICAgICB2YXIgcGFpcnMgPSBlbmdpbmUucGFpcnMsXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSB0aW1pbmcudGltZXN0YW1wO1xuICAgICAgICBQYWlycy51cGRhdGUocGFpcnMsIGNvbGxpc2lvbnMsIHRpbWVzdGFtcCk7XG4gICAgICAgIFBhaXJzLnJlbW92ZU9sZChwYWlycywgdGltZXN0YW1wKTtcblxuICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpbnZvbHZlZCBpbiBjb2xsaXNpb25zXG4gICAgICAgIGlmIChlbmdpbmUuZW5hYmxlU2xlZXBpbmcpXG4gICAgICAgICAgICBTbGVlcGluZy5hZnRlckNvbGxpc2lvbnMocGFpcnMubGlzdCwgdGltaW5nLnRpbWVTY2FsZSk7XG5cbiAgICAgICAgLy8gdHJpZ2dlciBjb2xsaXNpb24gZXZlbnRzXG4gICAgICAgIGlmIChwYWlycy5jb2xsaXNpb25TdGFydC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uU3RhcnQnLCB7IHBhaXJzOiBwYWlycy5jb2xsaXNpb25TdGFydCB9KTtcblxuICAgICAgICAvLyBpdGVyYXRpdmVseSByZXNvbHZlIHBvc2l0aW9uIGJldHdlZW4gY29sbGlzaW9uc1xuICAgICAgICBSZXNvbHZlci5wcmVTb2x2ZVBvc2l0aW9uKHBhaXJzLmxpc3QpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLnBvc2l0aW9uSXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBSZXNvbHZlci5zb2x2ZVBvc2l0aW9uKHBhaXJzLmxpc3QsIHRpbWluZy50aW1lU2NhbGUpO1xuICAgICAgICB9XG4gICAgICAgIFJlc29sdmVyLnBvc3RTb2x2ZVBvc2l0aW9uKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBjb25zdHJhaW50cyAoc2Vjb25kIHBhc3MpXG4gICAgICAgIENvbnN0cmFpbnQucHJlU29sdmVBbGwoYWxsQm9kaWVzKTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS5jb25zdHJhaW50SXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJhaW50LnNvbHZlQWxsKGFsbENvbnN0cmFpbnRzLCB0aW1pbmcudGltZVNjYWxlKTtcbiAgICAgICAgfVxuICAgICAgICBDb25zdHJhaW50LnBvc3RTb2x2ZUFsbChhbGxCb2RpZXMpO1xuXG4gICAgICAgIC8vIGl0ZXJhdGl2ZWx5IHJlc29sdmUgdmVsb2NpdHkgYmV0d2VlbiBjb2xsaXNpb25zXG4gICAgICAgIFJlc29sdmVyLnByZVNvbHZlVmVsb2NpdHkocGFpcnMubGlzdCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmdpbmUudmVsb2NpdHlJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIFJlc29sdmVyLnNvbHZlVmVsb2NpdHkocGFpcnMubGlzdCwgdGltaW5nLnRpbWVTY2FsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2VyIGNvbGxpc2lvbiBldmVudHNcbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uQWN0aXZlJywgeyBwYWlyczogcGFpcnMuY29sbGlzaW9uQWN0aXZlIH0pO1xuXG4gICAgICAgIGlmIChwYWlycy5jb2xsaXNpb25FbmQubGVuZ3RoID4gMClcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2NvbGxpc2lvbkVuZCcsIHsgcGFpcnM6IHBhaXJzLmNvbGxpc2lvbkVuZCB9KTtcblxuXG4gICAgICAgIC8vIGNsZWFyIGZvcmNlIGJ1ZmZlcnNcbiAgICAgICAgRW5naW5lLl9ib2RpZXNDbGVhckZvcmNlcyhhbGxCb2RpZXMpO1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2FmdGVyVXBkYXRlJywgZXZlbnQpO1xuXG4gICAgICAgIHJldHVybiBlbmdpbmU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBNZXJnZXMgdHdvIGVuZ2luZXMgYnkga2VlcGluZyB0aGUgY29uZmlndXJhdGlvbiBvZiBgZW5naW5lQWAgYnV0IHJlcGxhY2luZyB0aGUgd29ybGQgd2l0aCB0aGUgb25lIGZyb20gYGVuZ2luZUJgLlxuICAgICAqIEBtZXRob2QgbWVyZ2VcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lQVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVCXG4gICAgICovXG4gICAgRW5naW5lLm1lcmdlID0gZnVuY3Rpb24oZW5naW5lQSwgZW5naW5lQikge1xuICAgICAgICBDb21tb24uZXh0ZW5kKGVuZ2luZUEsIGVuZ2luZUIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGVuZ2luZUIud29ybGQpIHtcbiAgICAgICAgICAgIGVuZ2luZUEud29ybGQgPSBlbmdpbmVCLndvcmxkO1xuXG4gICAgICAgICAgICBFbmdpbmUuY2xlYXIoZW5naW5lQSk7XG5cbiAgICAgICAgICAgIHZhciBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGVuZ2luZUEud29ybGQpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYm9keS5pZCA9IENvbW1vbi5uZXh0SWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGVuZ2luZSBpbmNsdWRpbmcgdGhlIHdvcmxkLCBwYWlycyBhbmQgYnJvYWRwaGFzZS5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqL1xuICAgIEVuZ2luZS5jbGVhciA9IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgICAgICB2YXIgd29ybGQgPSBlbmdpbmUud29ybGQ7XG4gICAgICAgIFxuICAgICAgICBQYWlycy5jbGVhcihlbmdpbmUucGFpcnMpO1xuXG4gICAgICAgIHZhciBicm9hZHBoYXNlID0gZW5naW5lLmJyb2FkcGhhc2U7XG4gICAgICAgIGlmIChicm9hZHBoYXNlLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHZhciBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKTtcbiAgICAgICAgICAgIGJyb2FkcGhhc2UuY29udHJvbGxlci5jbGVhcihicm9hZHBoYXNlKTtcbiAgICAgICAgICAgIGJyb2FkcGhhc2UuY29udHJvbGxlci51cGRhdGUoYnJvYWRwaGFzZSwgYm9kaWVzLCBlbmdpbmUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFplcm9lcyB0aGUgYGJvZHkuZm9yY2VgIGFuZCBgYm9keS50b3JxdWVgIGZvcmNlIGJ1ZmZlcnMuXG4gICAgICogQG1ldGhvZCBfYm9kaWVzQ2xlYXJGb3JjZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBFbmdpbmUuX2JvZGllc0NsZWFyRm9yY2VzID0gZnVuY3Rpb24oYm9kaWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgLy8gcmVzZXQgZm9yY2UgYnVmZmVyc1xuICAgICAgICAgICAgYm9keS5mb3JjZS54ID0gMDtcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueSA9IDA7XG4gICAgICAgICAgICBib2R5LnRvcnF1ZSA9IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbHlzIGEgbWFzcyBkZXBlbmRhbnQgZm9yY2UgdG8gYWxsIGdpdmVuIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNBcHBseUdyYXZpdHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZ3Jhdml0eVxuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzQXBwbHlHcmF2aXR5ID0gZnVuY3Rpb24oYm9kaWVzLCBncmF2aXR5KSB7XG4gICAgICAgIHZhciBncmF2aXR5U2NhbGUgPSB0eXBlb2YgZ3Jhdml0eS5zY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBncmF2aXR5LnNjYWxlIDogMC4wMDE7XG5cbiAgICAgICAgaWYgKChncmF2aXR5LnggPT09IDAgJiYgZ3Jhdml0eS55ID09PSAwKSB8fCBncmF2aXR5U2NhbGUgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCBib2R5LmlzU2xlZXBpbmcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGdyYXZpdHlcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueSArPSBib2R5Lm1hc3MgKiBncmF2aXR5LnkgKiBncmF2aXR5U2NhbGU7XG4gICAgICAgICAgICBib2R5LmZvcmNlLnggKz0gYm9keS5tYXNzICogZ3Jhdml0eS54ICogZ3Jhdml0eVNjYWxlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5cyBgQm9keS51cGRhdGVgIHRvIGFsbCBnaXZlbiBgYm9kaWVzYC5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNVcGRhdGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFUaW1lIFxuICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSBlbGFwc2VkIGJldHdlZW4gdXBkYXRlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29ycmVjdGlvbiBcbiAgICAgKiBUaGUgVmVybGV0IGNvcnJlY3Rpb24gZmFjdG9yIChkZWx0YVRpbWUgLyBsYXN0RGVsdGFUaW1lKVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSB3b3JsZEJvdW5kc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlID0gZnVuY3Rpb24oYm9kaWVzLCBkZWx0YVRpbWUsIHRpbWVTY2FsZSwgY29ycmVjdGlvbiwgd29ybGRCb3VuZHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCBib2R5LmlzU2xlZXBpbmcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIEJvZHkudXBkYXRlKGJvZHksIGRlbHRhVGltZSwgdGltZVNjYWxlLCBjb3JyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhcyBmb3IgYFJ1bm5lci5ydW5gLCBzZWUgYE1hdHRlci5SdW5uZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBtZXRob2QgcnVuXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBqdXN0IGJlZm9yZSBhbiB1cGRhdGVcbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlVXBkYXRlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdXBkYXRlIGFuZCBhbGwgY29sbGlzaW9uIGV2ZW50c1xuICAgICpcbiAgICAqIEBldmVudCBhZnRlclVwZGF0ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGhhdmUgc3RhcnRlZCB0byBjb2xsaWRlIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uU3RhcnRcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdXBkYXRlLCBwcm92aWRlcyBhIGxpc3Qgb2YgYWxsIHBhaXJzIHRoYXQgYXJlIGNvbGxpZGluZyBpbiB0aGUgY3VycmVudCB0aWNrIChpZiBhbnkpXG4gICAgKlxuICAgICogQGV2ZW50IGNvbGxpc2lvbkFjdGl2ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnBhaXJzIExpc3Qgb2YgYWZmZWN0ZWQgcGFpcnNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUsIHByb3ZpZGVzIGEgbGlzdCBvZiBhbGwgcGFpcnMgdGhhdCBoYXZlIGVuZGVkIGNvbGxpc2lvbiBpbiB0aGUgY3VycmVudCB0aWNrIChpZiBhbnkpXG4gICAgKlxuICAgICogQGV2ZW50IGNvbGxpc2lvbkVuZFxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnBhaXJzIExpc3Qgb2YgYWZmZWN0ZWQgcGFpcnNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBwb3NpdGlvbiBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvc2l0aW9uSXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDZcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiB2ZWxvY2l0eSBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHZlbG9jaXR5SXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBjb25zdHJhaW50IGl0ZXJhdGlvbnMgdG8gcGVyZm9ybSBlYWNoIHVwZGF0ZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhpZ2hlciBxdWFsaXR5IHRoZSBzaW11bGF0aW9uIHdpbGwgYmUgYXQgdGhlIGV4cGVuc2Ugb2YgcGVyZm9ybWFuY2UuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgYDJgIGlzIHVzdWFsbHkgdmVyeSBhZGVxdWF0ZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb25zdHJhaW50SXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBlbmdpbmUgc2hvdWxkIGFsbG93IHNsZWVwaW5nIHZpYSB0aGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlLlxuICAgICAqIFNsZWVwaW5nIGNhbiBpbXByb3ZlIHN0YWJpbGl0eSBhbmQgcGVyZm9ybWFuY2UsIGJ1dCBvZnRlbiBhdCB0aGUgZXhwZW5zZSBvZiBhY2N1cmFjeS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgY29udGFpbmluZyBwcm9wZXJ0aWVzIHJlZ2FyZGluZyB0aGUgdGltaW5nIHN5c3RlbXMgb2YgdGhlIGVuZ2luZS4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBnbG9iYWwgc2NhbGluZyBmYWN0b3Igb2YgdGltZSBmb3IgYWxsIGJvZGllcy5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBmcmVlemVzIHRoZSBzaW11bGF0aW9uLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMWAgZ2l2ZXMgYSBzbG93LW1vdGlvbiBlZmZlY3QuXG4gICAgICogQSB2YWx1ZSBvZiBgMS4yYCBnaXZlcyBhIHNwZWVkLXVwIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcudGltZVNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgY3VycmVudCBzaW11bGF0aW9uLXRpbWUgaW4gbWlsbGlzZWNvbmRzIHN0YXJ0aW5nIGZyb20gYDBgLiBcbiAgICAgKiBJdCBpcyBpbmNyZW1lbnRlZCBvbiBldmVyeSBgRW5naW5lLnVwZGF0ZWAgYnkgdGhlIGdpdmVuIGBkZWx0YWAgYXJndW1lbnQuIFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWluZy50aW1lc3RhbXBcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnN0YW5jZSBvZiBhIGBSZW5kZXJgIGNvbnRyb2xsZXIuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGEgYE1hdHRlci5SZW5kZXJgIGluc3RhbmNlIGNyZWF0ZWQgYnkgYEVuZ2luZS5jcmVhdGVgLlxuICAgICAqIE9uZSBtYXkgYWxzbyBkZXZlbG9wIGEgY3VzdG9tIHJlbmRlcmVyIG1vZHVsZSBiYXNlZCBvbiBgTWF0dGVyLlJlbmRlcmAgYW5kIHBhc3MgYW4gaW5zdGFuY2Ugb2YgaXQgdG8gYEVuZ2luZS5jcmVhdGVgIHZpYSBgb3B0aW9ucy5yZW5kZXJgLlxuICAgICAqXG4gICAgICogQSBtaW5pbWFsIGN1c3RvbSByZW5kZXJlciBvYmplY3QgbXVzdCBkZWZpbmUgYXQgbGVhc3QgdGhyZWUgZnVuY3Rpb25zOiBgY3JlYXRlYCwgYGNsZWFyYCBhbmQgYHdvcmxkYCAoc2VlIGBNYXR0ZXIuUmVuZGVyYCkuXG4gICAgICogSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBpbnN0ZWFkIHBhc3MgdGhlIF9tb2R1bGVfIHJlZmVyZW5jZSB2aWEgYG9wdGlvbnMucmVuZGVyLmNvbnRyb2xsZXJgIGFuZCBgRW5naW5lLmNyZWF0ZWAgd2lsbCBpbnN0YW50aWF0ZSBvbmUgZm9yIHlvdS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXJcbiAgICAgKiBAdHlwZSByZW5kZXJcbiAgICAgKiBAZGVwcmVjYXRlZCBzZWUgRGVtby5qcyBmb3IgYW4gZXhhbXBsZSBvZiBjcmVhdGluZyBhIHJlbmRlcmVyXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuUmVuZGVyIGluc3RhbmNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnN0YW5jZSBvZiBhIGJyb2FkcGhhc2UgY29udHJvbGxlci4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgYSBgTWF0dGVyLkdyaWRgIGluc3RhbmNlIGNyZWF0ZWQgYnkgYEVuZ2luZS5jcmVhdGVgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJyb2FkcGhhc2VcbiAgICAgKiBAdHlwZSBncmlkXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuR3JpZCBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgV29ybGRgIGNvbXBvc2l0ZSBvYmplY3QgdGhhdCB3aWxsIGNvbnRhaW4gYWxsIHNpbXVsYXRlZCBib2RpZXMgYW5kIGNvbnN0cmFpbnRzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHdvcmxkXG4gICAgICogQHR5cGUgd29ybGRcbiAgICAgKiBAZGVmYXVsdCBhIE1hdHRlci5Xb3JsZCBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHJlc2VydmVkIGZvciBzdG9yaW5nIHBsdWdpbi1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBsdWdpblxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbn0pKCk7XG5cbn0se1wiLi4vYm9keS9Cb2R5XCI6MSxcIi4uL2JvZHkvQ29tcG9zaXRlXCI6MixcIi4uL2JvZHkvV29ybGRcIjozLFwiLi4vY29sbGlzaW9uL0dyaWRcIjo2LFwiLi4vY29sbGlzaW9uL1BhaXJzXCI6OCxcIi4uL2NvbGxpc2lvbi9SZXNvbHZlclwiOjEwLFwiLi4vY29uc3RyYWludC9Db25zdHJhaW50XCI6MTIsXCIuLi9yZW5kZXIvUmVuZGVyXCI6MzEsXCIuL0NvbW1vblwiOjE0LFwiLi9FdmVudHNcIjoxNixcIi4vTWV0cmljc1wiOjE4LFwiLi9TbGVlcGluZ1wiOjIyfV0sMTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLkV2ZW50c2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgdG8gZmlyZSBhbmQgbGlzdGVuIHRvIGV2ZW50cyBvbiBvdGhlciBvYmplY3RzLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgRXZlbnRzXG4qL1xuXG52YXIgRXZlbnRzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRzO1xuXG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi9Db21tb24nKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHRoZSBnaXZlbiBvYmplY3QncyBgZXZlbnROYW1lYC5cbiAgICAgKiBAbWV0aG9kIG9uXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBFdmVudHMub24gPSBmdW5jdGlvbihvYmplY3QsIGV2ZW50TmFtZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBuYW1lcyA9IGV2ZW50TmFtZXMuc3BsaXQoJyAnKSxcbiAgICAgICAgICAgIG5hbWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50cyA9IG9iamVjdC5ldmVudHMgfHwge307XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzW25hbWVdID0gb2JqZWN0LmV2ZW50c1tuYW1lXSB8fCBbXTtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHNbbmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGdpdmVuIGV2ZW50IGNhbGxiYWNrLiBJZiBubyBjYWxsYmFjaywgY2xlYXJzIGFsbCBjYWxsYmFja3MgaW4gYGV2ZW50TmFtZXNgLiBJZiBubyBgZXZlbnROYW1lc2AsIGNsZWFycyBhbGwgZXZlbnRzLlxuICAgICAqIEBtZXRob2Qgb2ZmXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBFdmVudHMub2ZmID0gZnVuY3Rpb24ob2JqZWN0LCBldmVudE5hbWVzLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHMgPSB7fTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBFdmVudHMub2ZmKG9iamVjdCwgY2FsbGJhY2spXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBldmVudE5hbWVzO1xuICAgICAgICAgICAgZXZlbnROYW1lcyA9IENvbW1vbi5rZXlzKG9iamVjdC5ldmVudHMpLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuYW1lcyA9IGV2ZW50TmFtZXMuc3BsaXQoJyAnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gb2JqZWN0LmV2ZW50c1tuYW1lc1tpXV0sXG4gICAgICAgICAgICAgICAgbmV3Q2FsbGJhY2tzID0gW107XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBjYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNhbGxiYWNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2pdICE9PSBjYWxsYmFjaylcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrc1tqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzW25hbWVzW2ldXSA9IG5ld0NhbGxiYWNrcztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhbGwgdGhlIGNhbGxiYWNrcyBzdWJzY3JpYmVkIHRvIHRoZSBnaXZlbiBvYmplY3QncyBgZXZlbnROYW1lYCwgaW4gdGhlIG9yZGVyIHRoZXkgc3Vic2NyaWJlZCwgaWYgYW55LlxuICAgICAqIEBtZXRob2QgdHJpZ2dlclxuICAgICAqIEBwYXJhbSB7fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lc1xuICAgICAqIEBwYXJhbSB7fSBldmVudFxuICAgICAqL1xuICAgIEV2ZW50cy50cmlnZ2VyID0gZnVuY3Rpb24ob2JqZWN0LCBldmVudE5hbWVzLCBldmVudCkge1xuICAgICAgICB2YXIgbmFtZXMsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICAgICAgZXZlbnRDbG9uZTtcblxuICAgICAgICBpZiAob2JqZWN0LmV2ZW50cykge1xuICAgICAgICAgICAgaWYgKCFldmVudClcbiAgICAgICAgICAgICAgICBldmVudCA9IHt9O1xuXG4gICAgICAgICAgICBuYW1lcyA9IGV2ZW50TmFtZXMuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MgPSBvYmplY3QuZXZlbnRzW25hbWVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgICAgICBldmVudENsb25lID0gQ29tbW9uLmNsb25lKGV2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUuc291cmNlID0gb2JqZWN0O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FsbGJhY2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Nbal0uYXBwbHkob2JqZWN0LCBbZXZlbnRDbG9uZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuL0NvbW1vblwiOjE0fV0sMTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyYCBtb2R1bGUgaXMgdGhlIHRvcCBsZXZlbCBuYW1lc3BhY2UuIEl0IGFsc28gaW5jbHVkZXMgYSBmdW5jdGlvbiBmb3IgaW5zdGFsbGluZyBwbHVnaW5zIG9uIHRvcCBvZiB0aGUgbGlicmFyeS5cbipcbiogQGNsYXNzIE1hdHRlclxuKi9cblxudmFyIE1hdHRlciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hdHRlcjtcblxudmFyIFBsdWdpbiA9IF9kZXJlcV8oJy4vUGx1Z2luJyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi9Db21tb24nKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpYnJhcnkgbmFtZS5cbiAgICAgKiBAcHJvcGVydHkgbmFtZVxuICAgICAqIEByZWFkT25seVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgTWF0dGVyLm5hbWUgPSAnbWF0dGVyLWpzJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaWJyYXJ5IHZlcnNpb24uXG4gICAgICogQHByb3BlcnR5IHZlcnNpb25cbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIE1hdHRlci52ZXJzaW9uID0gJzAuMTQuMic7XG5cbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgcGx1Z2luIGRlcGVuZGVuY2llcyB0byBiZSBpbnN0YWxsZWQuIFRoZXNlIGFyZSBub3JtYWxseSBzZXQgYW5kIGluc3RhbGxlZCB0aHJvdWdoIGBNYXR0ZXIudXNlYC5cbiAgICAgKiBBbHRlcm5hdGl2ZWx5IHlvdSBtYXkgc2V0IGBNYXR0ZXIudXNlc2AgbWFudWFsbHkgYW5kIGluc3RhbGwgdGhlbSBieSBjYWxsaW5nIGBQbHVnaW4udXNlKE1hdHRlcilgLlxuICAgICAqIEBwcm9wZXJ0eSB1c2VzXG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIE1hdHRlci51c2VzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGx1Z2lucyB0aGF0IGhhdmUgYmVlbiBpbnN0YWxsZWQgdGhyb3VnaCBgTWF0dGVyLlBsdWdpbi5pbnN0YWxsYC4gUmVhZCBvbmx5LlxuICAgICAqIEBwcm9wZXJ0eSB1c2VkXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIE1hdHRlci51c2VkID0gW107XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YWxscyB0aGUgZ2l2ZW4gcGx1Z2lucyBvbiB0aGUgYE1hdHRlcmAgbmFtZXNwYWNlLlxuICAgICAqIFRoaXMgaXMgYSBzaG9ydC1oYW5kIGZvciBgUGx1Z2luLnVzZWAsIHNlZSBpdCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBDYWxsIHRoaXMgZnVuY3Rpb24gb25jZSBhdCB0aGUgc3RhcnQgb2YgeW91ciBjb2RlLCB3aXRoIGFsbCBvZiB0aGUgcGx1Z2lucyB5b3Ugd2lzaCB0byBpbnN0YWxsIGFzIGFyZ3VtZW50cy5cbiAgICAgKiBBdm9pZCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gbXVsdGlwbGUgdGltZXMgdW5sZXNzIHlvdSBpbnRlbmQgdG8gbWFudWFsbHkgY29udHJvbCBpbnN0YWxsYXRpb24gb3JkZXIuXG4gICAgICogQG1ldGhvZCB1c2VcbiAgICAgKiBAcGFyYW0gLi4ucGx1Z2luIHtGdW5jdGlvbn0gVGhlIHBsdWdpbihzKSB0byBpbnN0YWxsIG9uIGBiYXNlYCAobXVsdGktYXJndW1lbnQpLlxuICAgICAqL1xuICAgIE1hdHRlci51c2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgUGx1Z2luLnVzZShNYXR0ZXIsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYmVmb3JlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBNYXR0ZXJgLlxuICAgICAqIFNlZSBhbHNvIGRvY3MgZm9yIGBDb21tb24uY2hhaW5gLlxuICAgICAqIEBtZXRob2QgYmVmb3JlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYE1hdHRlcmBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBiZWZvcmUgdGhlIG9yaWdpbmFsXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXG4gICAgICovXG4gICAgTWF0dGVyLmJlZm9yZSA9IGZ1bmN0aW9uKHBhdGgsIGZ1bmMpIHtcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXk1hdHRlci4vLCAnJyk7XG4gICAgICAgIHJldHVybiBDb21tb24uY2hhaW5QYXRoQmVmb3JlKE1hdHRlciwgcGF0aCwgZnVuYyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBhZnRlciB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gb24gdGhlIGdpdmVuIGBwYXRoYCByZWxhdGl2ZSB0byBgTWF0dGVyYC5cbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cbiAgICAgKiBAbWV0aG9kIGFmdGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYE1hdHRlcmBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBhZnRlciB0aGUgb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcbiAgICAgKi9cbiAgICBNYXR0ZXIuYWZ0ZXIgPSBmdW5jdGlvbihwYXRoLCBmdW5jKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL15NYXR0ZXIuLywgJycpO1xuICAgICAgICByZXR1cm4gQ29tbW9uLmNoYWluUGF0aEFmdGVyKE1hdHRlciwgcGF0aCwgZnVuYyk7XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuL0NvbW1vblwiOjE0LFwiLi9QbHVnaW5cIjoyMH1dLDE4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblxufSx7XCIuLi9ib2R5L0NvbXBvc2l0ZVwiOjIsXCIuL0NvbW1vblwiOjE0fV0sMTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLk1vdXNlYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBtb3VzZSBpbnB1dHMuXG4qXG4qIEBjbGFzcyBNb3VzZVxuKi9cblxudmFyIE1vdXNlID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2U7XG5cbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbW91c2UgaW5wdXQuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybiB7bW91c2V9IEEgbmV3IG1vdXNlXG4gICAgICovXG4gICAgTW91c2UuY3JlYXRlID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICB2YXIgbW91c2UgPSB7fTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIENvbW1vbi5sb2coJ01vdXNlLmNyZWF0ZTogZWxlbWVudCB3YXMgdW5kZWZpbmVkLCBkZWZhdWx0aW5nIHRvIGRvY3VtZW50LmJvZHknLCAnd2FybicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBtb3VzZS5lbGVtZW50ID0gZWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICBtb3VzZS5hYnNvbHV0ZSA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5tb3VzZWRvd25Qb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2Uub2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLnNjYWxlID0geyB4OiAxLCB5OiAxIH07XG4gICAgICAgIG1vdXNlLndoZWVsRGVsdGEgPSAwO1xuICAgICAgICBtb3VzZS5idXR0b24gPSAtMTtcbiAgICAgICAgbW91c2UucGl4ZWxSYXRpbyA9IG1vdXNlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBpeGVsLXJhdGlvJykgfHwgMTtcblxuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMgPSB7XG4gICAgICAgICAgICBtb3VzZW1vdmU6IG51bGwsXG4gICAgICAgICAgICBtb3VzZWRvd246IG51bGwsXG4gICAgICAgICAgICBtb3VzZXVwOiBudWxsLFxuICAgICAgICAgICAgbW91c2V3aGVlbDogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbW91c2UubW91c2Vtb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gMDtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZW1vdmUgPSBldmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gMDtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5idXR0b24gPSBldmVudC5idXR0b247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgICAgICAgICAgbW91c2UubW91c2Vkb3duUG9zaXRpb24ueCA9IG1vdXNlLnBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZWRvd25Qb3NpdGlvbi55ID0gbW91c2UucG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZWRvd24gPSBldmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNldXAgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbihldmVudCwgbW91c2UuZWxlbWVudCwgbW91c2UucGl4ZWxSYXRpbyksXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IC0xO1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24ueCA9IG1vdXNlLnBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24ueSA9IG1vdXNlLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V1cCA9IGV2ZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIG1vdXNlLm1vdXNld2hlZWwgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWwpKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgTW91c2Uuc2V0RWxlbWVudChtb3VzZSwgbW91c2UuZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIG1vdXNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50IHRoZSBtb3VzZSBpcyBib3VuZCB0byAoYW5kIHJlbGF0aXZlIHRvKS5cbiAgICAgKiBAbWV0aG9kIHNldEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBNb3VzZS5zZXRFbGVtZW50ID0gZnVuY3Rpb24obW91c2UsIGVsZW1lbnQpIHtcbiAgICAgICAgbW91c2UuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZS5tb3VzZW1vdmUpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlLm1vdXNlZG93bik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlLm1vdXNldXApO1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgbW91c2UubW91c2V3aGVlbCk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBtb3VzZS5tb3VzZXdoZWVsKTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdXNlLm1vdXNlbW92ZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG1vdXNlLm1vdXNlZG93bik7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBtb3VzZS5tb3VzZXVwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBjYXB0dXJlZCBzb3VyY2UgZXZlbnRzLlxuICAgICAqIEBtZXRob2QgY2xlYXJTb3VyY2VFdmVudHNcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqL1xuICAgIE1vdXNlLmNsZWFyU291cmNlRXZlbnRzID0gZnVuY3Rpb24obW91c2UpIHtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNlbW92ZSA9IG51bGw7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZWRvd24gPSBudWxsO1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V1cCA9IG51bGw7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZXdoZWVsID0gbnVsbDtcbiAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IDA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1vdXNlIHBvc2l0aW9uIG9mZnNldC5cbiAgICAgKiBAbWV0aG9kIHNldE9mZnNldFxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IG9mZnNldFxuICAgICAqL1xuICAgIE1vdXNlLnNldE9mZnNldCA9IGZ1bmN0aW9uKG1vdXNlLCBvZmZzZXQpIHtcbiAgICAgICAgbW91c2Uub2Zmc2V0LnggPSBvZmZzZXQueDtcbiAgICAgICAgbW91c2Uub2Zmc2V0LnkgPSBvZmZzZXQueTtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtb3VzZSBwb3NpdGlvbiBzY2FsZS5cbiAgICAgKiBAbWV0aG9kIHNldFNjYWxlXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gc2NhbGVcbiAgICAgKi9cbiAgICBNb3VzZS5zZXRTY2FsZSA9IGZ1bmN0aW9uKG1vdXNlLCBzY2FsZSkge1xuICAgICAgICBtb3VzZS5zY2FsZS54ID0gc2NhbGUueDtcbiAgICAgICAgbW91c2Uuc2NhbGUueSA9IHNjYWxlLnk7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG1vdXNlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIGFuIGVsZW1lbnQgZ2l2ZW4gYSBzY3JlZW4gcGl4ZWwgcmF0aW8uXG4gICAgICogQG1ldGhvZCBfZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZXZlbnRcbiAgICAgKiBAcGFyYW0ge30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvXG4gICAgICogQHJldHVybiB7fVxuICAgICAqL1xuICAgIE1vdXNlLl9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbihldmVudCwgZWxlbWVudCwgcGl4ZWxSYXRpbykge1xuICAgICAgICB2YXIgZWxlbWVudEJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICByb290Tm9kZSA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLFxuICAgICAgICAgICAgc2Nyb2xsWCA9ICh3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiByb290Tm9kZS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsWSA9ICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiByb290Tm9kZS5zY3JvbGxUb3AsXG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgICAgICB4LCB5O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAgIHggPSB0b3VjaGVzWzBdLnBhZ2VYIC0gZWxlbWVudEJvdW5kcy5sZWZ0IC0gc2Nyb2xsWDtcbiAgICAgICAgICAgIHkgPSB0b3VjaGVzWzBdLnBhZ2VZIC0gZWxlbWVudEJvdW5kcy50b3AgLSBzY3JvbGxZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IGV2ZW50LnBhZ2VYIC0gZWxlbWVudEJvdW5kcy5sZWZ0IC0gc2Nyb2xsWDtcbiAgICAgICAgICAgIHkgPSBldmVudC5wYWdlWSAtIGVsZW1lbnRCb3VuZHMudG9wIC0gc2Nyb2xsWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgeDogeCAvIChlbGVtZW50LmNsaWVudFdpZHRoIC8gKGVsZW1lbnQud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCkgKiBwaXhlbFJhdGlvKSxcbiAgICAgICAgICAgIHk6IHkgLyAoZWxlbWVudC5jbGllbnRIZWlnaHQgLyAoZWxlbWVudC5oZWlnaHQgfHwgZWxlbWVudC5jbGllbnRIZWlnaHQpICogcGl4ZWxSYXRpbylcbiAgICAgICAgfTtcbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4uL2NvcmUvQ29tbW9uXCI6MTR9XSwyMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuUGx1Z2luYCBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIGZvciByZWdpc3RlcmluZyBhbmQgaW5zdGFsbGluZyBwbHVnaW5zIG9uIG1vZHVsZXMuXG4qXG4qIEBjbGFzcyBQbHVnaW5cbiovXG5cbnZhciBQbHVnaW4gPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQbHVnaW47XG5cbnZhciBDb21tb24gPSBfZGVyZXFfKCcuL0NvbW1vbicpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBQbHVnaW4uX3JlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBwbHVnaW4gb2JqZWN0IHNvIGl0IGNhbiBiZSByZXNvbHZlZCBsYXRlciBieSBuYW1lLlxuICAgICAqIEBtZXRob2QgcmVnaXN0ZXJcbiAgICAgKiBAcGFyYW0gcGx1Z2luIHt9IFRoZSBwbHVnaW4gdG8gcmVnaXN0ZXIuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcGx1Z2luLlxuICAgICAqL1xuICAgIFBsdWdpbi5yZWdpc3RlciA9IGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICBpZiAoIVBsdWdpbi5pc1BsdWdpbihwbHVnaW4pKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnZG9lcyBub3QgaW1wbGVtZW50IGFsbCByZXF1aXJlZCBmaWVsZHMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGx1Z2luLm5hbWUgaW4gUGx1Z2luLl9yZWdpc3RyeSkge1xuICAgICAgICAgICAgdmFyIHJlZ2lzdGVyZWQgPSBQbHVnaW4uX3JlZ2lzdHJ5W3BsdWdpbi5uYW1lXSxcbiAgICAgICAgICAgICAgICBwbHVnaW5WZXJzaW9uID0gUGx1Z2luLnZlcnNpb25QYXJzZShwbHVnaW4udmVyc2lvbikubnVtYmVyLFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRWZXJzaW9uID0gUGx1Z2luLnZlcnNpb25QYXJzZShyZWdpc3RlcmVkLnZlcnNpb24pLm51bWJlcjtcblxuICAgICAgICAgICAgaWYgKHBsdWdpblZlcnNpb24gPiByZWdpc3RlcmVkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHJlZ2lzdGVyZWQpLCAnd2FzIHVwZ3JhZGVkIHRvJywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgICAgIFBsdWdpbi5fcmVnaXN0cnlbcGx1Z2luLm5hbWVdID0gcGx1Z2luO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW5WZXJzaW9uIDwgcmVnaXN0ZXJlZFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhyZWdpc3RlcmVkKSwgJ2NhbiBub3QgYmUgZG93bmdyYWRlZCB0bycsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGx1Z2luICE9PSByZWdpc3RlcmVkKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2lzIGFscmVhZHkgcmVnaXN0ZXJlZCB0byBkaWZmZXJlbnQgcGx1Z2luIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUGx1Z2luLl9yZWdpc3RyeVtwbHVnaW4ubmFtZV0gPSBwbHVnaW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGx1Z2luO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyBhIGRlcGVuZGVuY3kgdG8gYSBwbHVnaW4gb2JqZWN0IGZyb20gdGhlIHJlZ2lzdHJ5IGlmIGl0IGV4aXN0cy4gXG4gICAgICogVGhlIGBkZXBlbmRlbmN5YCBtYXkgY29udGFpbiBhIHZlcnNpb24sIGJ1dCBvbmx5IHRoZSBuYW1lIG1hdHRlcnMgd2hlbiByZXNvbHZpbmcuXG4gICAgICogQG1ldGhvZCByZXNvbHZlXG4gICAgICogQHBhcmFtIGRlcGVuZGVuY3kge3N0cmluZ30gVGhlIGRlcGVuZGVuY3kuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgcGx1Z2luIGlmIHJlc29sdmVkLCBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gICAgICovXG4gICAgUGx1Z2luLnJlc29sdmUgPSBmdW5jdGlvbihkZXBlbmRlbmN5KSB7XG4gICAgICAgIHJldHVybiBQbHVnaW4uX3JlZ2lzdHJ5W1BsdWdpbi5kZXBlbmRlbmN5UGFyc2UoZGVwZW5kZW5jeSkubmFtZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcmV0dHkgcHJpbnRlZCBwbHVnaW4gbmFtZSBhbmQgdmVyc2lvbi5cbiAgICAgKiBAbWV0aG9kIHRvU3RyaW5nXG4gICAgICogQHBhcmFtIHBsdWdpbiB7fSBUaGUgcGx1Z2luLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gUHJldHR5IHByaW50ZWQgcGx1Z2luIG5hbWUgYW5kIHZlcnNpb24uXG4gICAgICovXG4gICAgUGx1Z2luLnRvU3RyaW5nID0gZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcGx1Z2luID09PSAnc3RyaW5nJyA/IHBsdWdpbiA6IChwbHVnaW4ubmFtZSB8fCAnYW5vbnltb3VzJykgKyAnQCcgKyAocGx1Z2luLnZlcnNpb24gfHwgcGx1Z2luLnJhbmdlIHx8ICcwLjAuMCcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0IG1lZXRzIHRoZSBtaW5pbXVtIHN0YW5kYXJkIHRvIGJlIGNvbnNpZGVyZWQgYSBwbHVnaW4uXG4gICAgICogVGhpcyBtZWFucyBpdCBtdXN0IGRlZmluZSB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICogLSBgbmFtZWBcbiAgICAgKiAtIGB2ZXJzaW9uYFxuICAgICAqIC0gYGluc3RhbGxgXG4gICAgICogQG1ldGhvZCBpc1BsdWdpblxuICAgICAqIEBwYXJhbSBvYmoge30gVGhlIG9iaiB0byB0ZXN0LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgb2JqZWN0IGNhbiBiZSBjb25zaWRlcmVkIGEgcGx1Z2luIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi5pc1BsdWdpbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5uYW1lICYmIG9iai52ZXJzaW9uICYmIG9iai5pbnN0YWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBhIHBsdWdpbiB3aXRoIHRoZSBnaXZlbiBgbmFtZWAgYmVlbiBpbnN0YWxsZWQgb24gYG1vZHVsZWAuXG4gICAgICogQG1ldGhvZCBpc1VzZWRcbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUuXG4gICAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVGhlIHBsdWdpbiBuYW1lLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBhIHBsdWdpbiB3aXRoIHRoZSBnaXZlbiBgbmFtZWAgYmVlbiBpbnN0YWxsZWQgb24gYG1vZHVsZWAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi5pc1VzZWQgPSBmdW5jdGlvbihtb2R1bGUsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS51c2VkLmluZGV4T2YobmFtZSkgPiAtMTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYHBsdWdpbi5mb3JgIGlzIGFwcGxpY2FibGUgdG8gYG1vZHVsZWAgYnkgY29tcGFyaW5nIGFnYWluc3QgYG1vZHVsZS5uYW1lYCBhbmQgYG1vZHVsZS52ZXJzaW9uYC5cbiAgICAgKiBJZiBgcGx1Z2luLmZvcmAgaXMgbm90IHNwZWNpZmllZCB0aGVuIGl0IGlzIGFzc3VtZWQgdG8gYmUgYXBwbGljYWJsZS5cbiAgICAgKiBUaGUgdmFsdWUgb2YgYHBsdWdpbi5mb3JgIGlzIGEgc3RyaW5nIG9mIHRoZSBmb3JtYXQgYCdtb2R1bGUtbmFtZSdgIG9yIGAnbW9kdWxlLW5hbWVAdmVyc2lvbidgLlxuICAgICAqIEBtZXRob2QgaXNGb3JcbiAgICAgKiBAcGFyYW0gcGx1Z2luIHt9IFRoZSBwbHVnaW4uXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBgcGx1Z2luLmZvcmAgaXMgYXBwbGljYWJsZSB0byBgbW9kdWxlYCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLmlzRm9yID0gZnVuY3Rpb24ocGx1Z2luLCBtb2R1bGUpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHBsdWdpbi5mb3IgJiYgUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShwbHVnaW4uZm9yKTtcbiAgICAgICAgcmV0dXJuICFwbHVnaW4uZm9yIHx8IChtb2R1bGUubmFtZSA9PT0gcGFyc2VkLm5hbWUgJiYgUGx1Z2luLnZlcnNpb25TYXRpc2ZpZXMobW9kdWxlLnZlcnNpb24sIHBhcnNlZC5yYW5nZSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnN0YWxscyB0aGUgcGx1Z2lucyBieSBjYWxsaW5nIGBwbHVnaW4uaW5zdGFsbGAgb24gZWFjaCBwbHVnaW4gc3BlY2lmaWVkIGluIGBwbHVnaW5zYCBpZiBwYXNzZWQsIG90aGVyd2lzZSBgbW9kdWxlLnVzZXNgLlxuICAgICAqIEZvciBpbnN0YWxsaW5nIHBsdWdpbnMgb24gYE1hdHRlcmAgc2VlIHRoZSBjb252ZW5pZW5jZSBmdW5jdGlvbiBgTWF0dGVyLnVzZWAuXG4gICAgICogUGx1Z2lucyBtYXkgYmUgc3BlY2lmaWVkIGVpdGhlciBieSB0aGVpciBuYW1lIG9yIGEgcmVmZXJlbmNlIHRvIHRoZSBwbHVnaW4gb2JqZWN0LlxuICAgICAqIFBsdWdpbnMgdGhlbXNlbHZlcyBtYXkgc3BlY2lmeSBmdXJ0aGVyIGRlcGVuZGVuY2llcywgYnV0IGVhY2ggcGx1Z2luIGlzIGluc3RhbGxlZCBvbmx5IG9uY2UuXG4gICAgICogT3JkZXIgaXMgaW1wb3J0YW50LCBhIHRvcG9sb2dpY2FsIHNvcnQgaXMgcGVyZm9ybWVkIHRvIGZpbmQgdGhlIGJlc3QgcmVzdWx0aW5nIG9yZGVyIG9mIGluc3RhbGxhdGlvbi5cbiAgICAgKiBUaGlzIHNvcnRpbmcgYXR0ZW1wdHMgdG8gc2F0aXNmeSBldmVyeSBkZXBlbmRlbmN5J3MgcmVxdWVzdGVkIG9yZGVyaW5nLCBidXQgbWF5IG5vdCBiZSBleGFjdCBpbiBhbGwgY2FzZXMuXG4gICAgICogVGhpcyBmdW5jdGlvbiBsb2dzIHRoZSByZXN1bHRpbmcgc3RhdHVzIG9mIGVhY2ggZGVwZW5kZW5jeSBpbiB0aGUgY29uc29sZSwgYWxvbmcgd2l0aCBhbnkgd2FybmluZ3MuXG4gICAgICogLSBBIGdyZWVuIHRpY2sg4pyFIGluZGljYXRlcyBhIGRlcGVuZGVuY3kgd2FzIHJlc29sdmVkIGFuZCBpbnN0YWxsZWQuXG4gICAgICogLSBBbiBvcmFuZ2UgZGlhbW9uZCDwn5S2IGluZGljYXRlcyBhIGRlcGVuZGVuY3kgd2FzIHJlc29sdmVkIGJ1dCBhIHdhcm5pbmcgd2FzIHRocm93biBmb3IgaXQgb3Igb25lIGlmIGl0cyBkZXBlbmRlbmNpZXMuXG4gICAgICogLSBBIHJlZCBjcm9zcyDinYwgaW5kaWNhdGVzIGEgZGVwZW5kZW5jeSBjb3VsZCBub3QgYmUgcmVzb2x2ZWQuXG4gICAgICogQXZvaWQgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIG1vZHVsZSB1bmxlc3MgeW91IGludGVuZCB0byBtYW51YWxseSBjb250cm9sIGluc3RhbGxhdGlvbiBvcmRlci5cbiAgICAgKiBAbWV0aG9kIHVzZVxuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZSBpbnN0YWxsIHBsdWdpbnMgb24uXG4gICAgICogQHBhcmFtIFtwbHVnaW5zPW1vZHVsZS51c2VzXSB7fSBUaGUgcGx1Z2lucyB0byBpbnN0YWxsIG9uIG1vZHVsZSAob3B0aW9uYWwsIGRlZmF1bHRzIHRvIGBtb2R1bGUudXNlc2ApLlxuICAgICAqL1xuICAgIFBsdWdpbi51c2UgPSBmdW5jdGlvbihtb2R1bGUsIHBsdWdpbnMpIHtcbiAgICAgICAgbW9kdWxlLnVzZXMgPSAobW9kdWxlLnVzZXMgfHwgW10pLmNvbmNhdChwbHVnaW5zIHx8IFtdKTtcblxuICAgICAgICBpZiAobW9kdWxlLnVzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnVzZTonLCBQbHVnaW4udG9TdHJpbmcobW9kdWxlKSwgJ2RvZXMgbm90IHNwZWNpZnkgYW55IGRlcGVuZGVuY2llcyB0byBpbnN0YWxsLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlcGVuZGVuY2llcyA9IFBsdWdpbi5kZXBlbmRlbmNpZXMobW9kdWxlKSxcbiAgICAgICAgICAgIHNvcnRlZERlcGVuZGVuY2llcyA9IENvbW1vbi50b3BvbG9naWNhbFNvcnQoZGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICAgIHN0YXR1cyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc29ydGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoc29ydGVkRGVwZW5kZW5jaWVzW2ldID09PSBtb2R1bGUubmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGx1Z2luID0gUGx1Z2luLnJlc29sdmUoc29ydGVkRGVwZW5kZW5jaWVzW2ldKTtcblxuICAgICAgICAgICAgaWYgKCFwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMucHVzaCgn4p2MICcgKyBzb3J0ZWREZXBlbmRlbmNpZXNbaV0pO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoUGx1Z2luLmlzVXNlZChtb2R1bGUsIHBsdWdpbi5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIVBsdWdpbi5pc0ZvcihwbHVnaW4sIG1vZHVsZSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnVzZTonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2lzIGZvcicsIHBsdWdpbi5mb3IsICdidXQgaW5zdGFsbGVkIG9uJywgUGx1Z2luLnRvU3RyaW5nKG1vZHVsZSkgKyAnLicpO1xuICAgICAgICAgICAgICAgIHBsdWdpbi5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pbnN0YWxsKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluc3RhbGwobW9kdWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi51c2U6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdkb2VzIG5vdCBzcGVjaWZ5IGFuIGluc3RhbGwgZnVuY3Rpb24uJyk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGx1Z2luLl93YXJuZWQpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMucHVzaCgn8J+UtiAnICsgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwbHVnaW4uX3dhcm5lZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzLnB1c2goJ+KchSAnICsgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2R1bGUudXNlZC5wdXNoKHBsdWdpbi5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0dXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQ29tbW9uLmluZm8oc3RhdHVzLmpvaW4oJyAgJykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IGZpbmRzIGFsbCBvZiBhIG1vZHVsZSdzIGRlcGVuZGVuY2llcyBhbmQgcmV0dXJucyBhIGZsYXQgZGVwZW5kZW5jeSBncmFwaC5cbiAgICAgKiBAbWV0aG9kIGRlcGVuZGVuY2llc1xuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IEEgZGVwZW5kZW5jeSBncmFwaC5cbiAgICAgKi9cbiAgICBQbHVnaW4uZGVwZW5kZW5jaWVzID0gZnVuY3Rpb24obW9kdWxlLCB0cmFja2VkKSB7XG4gICAgICAgIHZhciBwYXJzZWRCYXNlID0gUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShtb2R1bGUpLFxuICAgICAgICAgICAgbmFtZSA9IHBhcnNlZEJhc2UubmFtZTtcblxuICAgICAgICB0cmFja2VkID0gdHJhY2tlZCB8fCB7fTtcblxuICAgICAgICBpZiAobmFtZSBpbiB0cmFja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBtb2R1bGUgPSBQbHVnaW4ucmVzb2x2ZShtb2R1bGUpIHx8IG1vZHVsZTtcblxuICAgICAgICB0cmFja2VkW25hbWVdID0gQ29tbW9uLm1hcChtb2R1bGUudXNlcyB8fCBbXSwgZnVuY3Rpb24oZGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgaWYgKFBsdWdpbi5pc1BsdWdpbihkZXBlbmRlbmN5KSkge1xuICAgICAgICAgICAgICAgIFBsdWdpbi5yZWdpc3RlcihkZXBlbmRlbmN5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IFBsdWdpbi5kZXBlbmRlbmN5UGFyc2UoZGVwZW5kZW5jeSksXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSBQbHVnaW4ucmVzb2x2ZShkZXBlbmRlbmN5KTtcblxuICAgICAgICAgICAgaWYgKHJlc29sdmVkICYmICFQbHVnaW4udmVyc2lvblNhdGlzZmllcyhyZXNvbHZlZC52ZXJzaW9uLCBwYXJzZWQucmFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICdQbHVnaW4uZGVwZW5kZW5jaWVzOicsIFBsdWdpbi50b1N0cmluZyhyZXNvbHZlZCksICdkb2VzIG5vdCBzYXRpc2Z5JyxcbiAgICAgICAgICAgICAgICAgICAgUGx1Z2luLnRvU3RyaW5nKHBhcnNlZCksICd1c2VkIGJ5JywgUGx1Z2luLnRvU3RyaW5nKHBhcnNlZEJhc2UpICsgJy4nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmVkLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG1vZHVsZS5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICdQbHVnaW4uZGVwZW5kZW5jaWVzOicsIFBsdWdpbi50b1N0cmluZyhkZXBlbmRlbmN5KSwgJ3VzZWQgYnknLFxuICAgICAgICAgICAgICAgICAgICBQbHVnaW4udG9TdHJpbmcocGFyc2VkQmFzZSksICdjb3VsZCBub3QgYmUgcmVzb2x2ZWQuJ1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBtb2R1bGUuX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQubmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFja2VkW25hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBQbHVnaW4uZGVwZW5kZW5jaWVzKHRyYWNrZWRbbmFtZV1baV0sIHRyYWNrZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYWNrZWQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGRlcGVuZGVuY3kgc3RyaW5nIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICogVGhlIGBkZXBlbmRlbmN5YCBpcyBhIHN0cmluZyBvZiB0aGUgZm9ybWF0IGAnbW9kdWxlLW5hbWUnYCBvciBgJ21vZHVsZS1uYW1lQHZlcnNpb24nYC5cbiAgICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgYFBsdWdpbi52ZXJzaW9uUGFyc2VgIGZvciBhIGRlc2NyaXB0aW9uIG9mIHRoZSBmb3JtYXQuXG4gICAgICogVGhpcyBmdW5jdGlvbiBjYW4gYWxzbyBoYW5kbGUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIGFscmVhZHkgcmVzb2x2ZWQgKGUuZy4gYSBtb2R1bGUgb2JqZWN0KS5cbiAgICAgKiBAbWV0aG9kIGRlcGVuZGVuY3lQYXJzZVxuICAgICAqIEBwYXJhbSBkZXBlbmRlbmN5IHtzdHJpbmd9IFRoZSBkZXBlbmRlbmN5IG9mIHRoZSBmb3JtYXQgYCdtb2R1bGUtbmFtZSdgIG9yIGAnbW9kdWxlLW5hbWVAdmVyc2lvbidgLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIGRlcGVuZGVuY3kgcGFyc2VkIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgUGx1Z2luLmRlcGVuZGVuY3lQYXJzZSA9IGZ1bmN0aW9uKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc1N0cmluZyhkZXBlbmRlbmN5KSkge1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAvXltcXHctXSsoQChcXCp8W1xcXn5dP1xcZCtcXC5cXGQrXFwuXFxkKygtWzAtOUEtWmEtei1dKyk/KSk/JC87XG5cbiAgICAgICAgICAgIGlmICghcGF0dGVybi50ZXN0KGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5kZXBlbmRlbmN5UGFyc2U6JywgZGVwZW5kZW5jeSwgJ2lzIG5vdCBhIHZhbGlkIGRlcGVuZGVuY3kgc3RyaW5nLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGRlcGVuZGVuY3kuc3BsaXQoJ0AnKVswXSxcbiAgICAgICAgICAgICAgICByYW5nZTogZGVwZW5kZW5jeS5zcGxpdCgnQCcpWzFdIHx8ICcqJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBkZXBlbmRlbmN5Lm5hbWUsXG4gICAgICAgICAgICByYW5nZTogZGVwZW5kZW5jeS5yYW5nZSB8fCBkZXBlbmRlbmN5LnZlcnNpb25cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgdmVyc2lvbiBzdHJpbmcgaW50byBpdHMgY29tcG9uZW50cy4gIFxuICAgICAqIFZlcnNpb25zIGFyZSBzdHJpY3RseSBvZiB0aGUgZm9ybWF0IGB4LnkuemAgKGFzIGluIFtzZW12ZXJdKGh0dHA6Ly9zZW12ZXIub3JnLykpLlxuICAgICAqIFZlcnNpb25zIG1heSBvcHRpb25hbGx5IGhhdmUgYSBwcmVyZWxlYXNlIHRhZyBpbiB0aGUgZm9ybWF0IGB4Lnkuei1hbHBoYWAuXG4gICAgICogUmFuZ2VzIGFyZSBhIHN0cmljdCBzdWJzZXQgb2YgW25wbSByYW5nZXNdKGh0dHBzOi8vZG9jcy5ucG1qcy5jb20vbWlzYy9zZW12ZXIjYWR2YW5jZWQtcmFuZ2Utc3ludGF4KS5cbiAgICAgKiBPbmx5IHRoZSBmb2xsb3dpbmcgcmFuZ2UgdHlwZXMgYXJlIHN1cHBvcnRlZDpcbiAgICAgKiAtIFRpbGRlIHJhbmdlcyBlLmcuIGB+MS4yLjNgXG4gICAgICogLSBDYXJldCByYW5nZXMgZS5nLiBgXjEuMi4zYFxuICAgICAqIC0gRXhhY3QgdmVyc2lvbiBlLmcuIGAxLjIuM2BcbiAgICAgKiAtIEFueSB2ZXJzaW9uIGAqYFxuICAgICAqIEBtZXRob2QgdmVyc2lvblBhcnNlXG4gICAgICogQHBhcmFtIHJhbmdlIHtzdHJpbmd9IFRoZSB2ZXJzaW9uIHN0cmluZy5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSB2ZXJzaW9uIHJhbmdlIHBhcnNlZCBpbnRvIGl0cyBjb21wb25lbnRzLlxuICAgICAqL1xuICAgIFBsdWdpbi52ZXJzaW9uUGFyc2UgPSBmdW5jdGlvbihyYW5nZSkge1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eXFwqfFtcXF5+XT9cXGQrXFwuXFxkK1xcLlxcZCsoLVswLTlBLVphLXotXSspPyQvO1xuXG4gICAgICAgIGlmICghcGF0dGVybi50ZXN0KHJhbmdlKSkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi52ZXJzaW9uUGFyc2U6JywgcmFuZ2UsICdpcyBub3QgYSB2YWxpZCB2ZXJzaW9uIG9yIHJhbmdlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlkZW50aWZpZXJzID0gcmFuZ2Uuc3BsaXQoJy0nKTtcbiAgICAgICAgcmFuZ2UgPSBpZGVudGlmaWVyc1swXTtcblxuICAgICAgICB2YXIgaXNSYW5nZSA9IGlzTmFOKE51bWJlcihyYW5nZVswXSkpLFxuICAgICAgICAgICAgdmVyc2lvbiA9IGlzUmFuZ2UgPyByYW5nZS5zdWJzdHIoMSkgOiByYW5nZSxcbiAgICAgICAgICAgIHBhcnRzID0gQ29tbW9uLm1hcCh2ZXJzaW9uLnNwbGl0KCcuJyksIGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHBhcnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzUmFuZ2U6IGlzUmFuZ2UsXG4gICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxuICAgICAgICAgICAgb3BlcmF0b3I6IGlzUmFuZ2UgPyByYW5nZVswXSA6ICcnLFxuICAgICAgICAgICAgcGFydHM6IHBhcnRzLFxuICAgICAgICAgICAgcHJlcmVsZWFzZTogaWRlbnRpZmllcnNbMV0sXG4gICAgICAgICAgICBudW1iZXI6IHBhcnRzWzBdICogMWU4ICsgcGFydHNbMV0gKiAxZTQgKyBwYXJ0c1syXVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBgdmVyc2lvbmAgc2F0aXNmaWVzIHRoZSBnaXZlbiBgcmFuZ2VgLlxuICAgICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBgUGx1Z2luLnZlcnNpb25QYXJzZWAgZm9yIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZvcm1hdC5cbiAgICAgKiBJZiBhIHZlcnNpb24gb3IgcmFuZ2UgaXMgbm90IHNwZWNpZmllZCwgdGhlbiBhbnkgdmVyc2lvbiAoYCpgKSBpcyBhc3N1bWVkIHRvIHNhdGlzZnkuXG4gICAgICogQG1ldGhvZCB2ZXJzaW9uU2F0aXNmaWVzXG4gICAgICogQHBhcmFtIHZlcnNpb24ge3N0cmluZ30gVGhlIHZlcnNpb24gc3RyaW5nLlxuICAgICAqIEBwYXJhbSByYW5nZSB7c3RyaW5nfSBUaGUgcmFuZ2Ugc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBgdmVyc2lvbmAgc2F0aXNmaWVzIGByYW5nZWAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICAgICAqL1xuICAgIFBsdWdpbi52ZXJzaW9uU2F0aXNmaWVzID0gZnVuY3Rpb24odmVyc2lvbiwgcmFuZ2UpIHtcbiAgICAgICAgcmFuZ2UgPSByYW5nZSB8fCAnKic7XG5cbiAgICAgICAgdmFyIHJhbmdlUGFyc2VkID0gUGx1Z2luLnZlcnNpb25QYXJzZShyYW5nZSksXG4gICAgICAgICAgICByYW5nZVBhcnRzID0gcmFuZ2VQYXJzZWQucGFydHMsXG4gICAgICAgICAgICB2ZXJzaW9uUGFyc2VkID0gUGx1Z2luLnZlcnNpb25QYXJzZSh2ZXJzaW9uKSxcbiAgICAgICAgICAgIHZlcnNpb25QYXJ0cyA9IHZlcnNpb25QYXJzZWQucGFydHM7XG5cbiAgICAgICAgaWYgKHJhbmdlUGFyc2VkLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChyYW5nZVBhcnNlZC5vcGVyYXRvciA9PT0gJyonIHx8IHZlcnNpb24gPT09ICcqJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmFuZ2VQYXJzZWQub3BlcmF0b3IgPT09ICd+Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uUGFydHNbMF0gPT09IHJhbmdlUGFydHNbMF0gJiYgdmVyc2lvblBhcnRzWzFdID09PSByYW5nZVBhcnRzWzFdICYmIHZlcnNpb25QYXJ0c1syXSA+PSByYW5nZVBhcnRzWzJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmFuZ2VQYXJzZWQub3BlcmF0b3IgPT09ICdeJykge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVBhcnRzWzBdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmVyc2lvblBhcnRzWzBdID09PSByYW5nZVBhcnRzWzBdICYmIHZlcnNpb25QYXJzZWQubnVtYmVyID49IHJhbmdlUGFyc2VkLm51bWJlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VQYXJ0c1sxXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZlcnNpb25QYXJ0c1sxXSA9PT0gcmFuZ2VQYXJ0c1sxXSAmJiB2ZXJzaW9uUGFydHNbMl0gPj0gcmFuZ2VQYXJ0c1syXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVyc2lvblBhcnRzWzJdID09PSByYW5nZVBhcnRzWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPT09IHJhbmdlIHx8IHZlcnNpb24gPT09ICcqJztcbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4vQ29tbW9uXCI6MTR9XSwyMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuUnVubmVyYCBtb2R1bGUgaXMgYW4gb3B0aW9uYWwgdXRpbGl0eSB3aGljaCBwcm92aWRlcyBhIGdhbWUgbG9vcCwgXG4qIHRoYXQgaGFuZGxlcyBjb250aW51b3VzbHkgdXBkYXRpbmcgYSBgTWF0dGVyLkVuZ2luZWAgZm9yIHlvdSB3aXRoaW4gYSBicm93c2VyLlxuKiBJdCBpcyBpbnRlbmRlZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGRlYnVnZ2luZyBwdXJwb3NlcywgYnV0IG1heSBhbHNvIGJlIHN1aXRhYmxlIGZvciBzaW1wbGUgZ2FtZXMuXG4qIElmIHlvdSBhcmUgdXNpbmcgeW91ciBvd24gZ2FtZSBsb29wIGluc3RlYWQsIHRoZW4geW91IGRvIG5vdCBuZWVkIHRoZSBgTWF0dGVyLlJ1bm5lcmAgbW9kdWxlLlxuKiBJbnN0ZWFkIGp1c3QgY2FsbCBgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGRlbHRhKWAgaW4geW91ciBvd24gbG9vcC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFJ1bm5lclxuKi9cblxudmFyIFJ1bm5lciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bm5lcjtcblxudmFyIEV2ZW50cyA9IF9kZXJlcV8oJy4vRXZlbnRzJyk7XG52YXIgRW5naW5lID0gX2RlcmVxXygnLi9FbmdpbmUnKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuL0NvbW1vbicpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICBcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuICAgIH1cblxuICAgIGlmICghX3JlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB2YXIgX2ZyYW1lVGltZW91dDtcblxuICAgICAgICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2speyBcbiAgICAgICAgICAgIF9mcmFtZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhDb21tb24ubm93KCkpOyBcbiAgICAgICAgICAgIH0sIDEwMDAgLyA2MCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX2ZyYW1lVGltZW91dCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBSdW5uZXIuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBSdW5uZXIuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBmcHM6IDYwLFxuICAgICAgICAgICAgY29ycmVjdGlvbjogMSxcbiAgICAgICAgICAgIGRlbHRhU2FtcGxlU2l6ZTogNjAsXG4gICAgICAgICAgICBjb3VudGVyVGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgZnJhbWVDb3VudGVyOiAwLFxuICAgICAgICAgICAgZGVsdGFIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgIHRpbWVQcmV2OiBudWxsLFxuICAgICAgICAgICAgdGltZVNjYWxlUHJldjogMSxcbiAgICAgICAgICAgIGZyYW1lUmVxdWVzdElkOiBudWxsLFxuICAgICAgICAgICAgaXNGaXhlZDogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJ1bm5lciA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHJ1bm5lci5kZWx0YSA9IHJ1bm5lci5kZWx0YSB8fCAxMDAwIC8gcnVubmVyLmZwcztcbiAgICAgICAgcnVubmVyLmRlbHRhTWluID0gcnVubmVyLmRlbHRhTWluIHx8IDEwMDAgLyBydW5uZXIuZnBzO1xuICAgICAgICBydW5uZXIuZGVsdGFNYXggPSBydW5uZXIuZGVsdGFNYXggfHwgMTAwMCAvIChydW5uZXIuZnBzICogMC41KTtcbiAgICAgICAgcnVubmVyLmZwcyA9IDEwMDAgLyBydW5uZXIuZGVsdGE7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5lcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udGludW91c2x5IHRpY2tzIGEgYE1hdHRlci5FbmdpbmVgIGJ5IGNhbGxpbmcgYFJ1bm5lci50aWNrYCBvbiB0aGUgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgZXZlbnQuXG4gICAgICogQG1ldGhvZCBydW5cbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG4gICAgUnVubmVyLnJ1biA9IGZ1bmN0aW9uKHJ1bm5lciwgZW5naW5lKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBydW5uZXIgaWYgZW5naW5lIGlzIGZpcnN0IGFyZ3VtZW50XG4gICAgICAgIGlmICh0eXBlb2YgcnVubmVyLnBvc2l0aW9uSXRlcmF0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGVuZ2luZSA9IHJ1bm5lcjtcbiAgICAgICAgICAgIHJ1bm5lciA9IFJ1bm5lci5jcmVhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIChmdW5jdGlvbiByZW5kZXIodGltZSl7XG4gICAgICAgICAgICBydW5uZXIuZnJhbWVSZXF1ZXN0SWQgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICYmIHJ1bm5lci5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgUnVubmVyLnRpY2socnVubmVyLCBlbmdpbmUsIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiBydW5uZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEEgZ2FtZSBsb29wIHV0aWxpdHkgdGhhdCB1cGRhdGVzIHRoZSBlbmdpbmUgYW5kIHJlbmRlcmVyIGJ5IG9uZSBzdGVwIChhICd0aWNrJykuXG4gICAgICogRmVhdHVyZXMgZGVsdGEgc21vb3RoaW5nLCB0aW1lIGNvcnJlY3Rpb24gYW5kIGZpeGVkIG9yIGR5bmFtaWMgdGltaW5nLlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVUaWNrYCwgYHRpY2tgIGFuZCBgYWZ0ZXJUaWNrYCBldmVudHMgb24gdGhlIGVuZ2luZS5cbiAgICAgKiBDb25zaWRlciBqdXN0IGBFbmdpbmUudXBkYXRlKGVuZ2luZSwgZGVsdGEpYCBpZiB5b3UncmUgdXNpbmcgeW91ciBvd24gbG9vcC5cbiAgICAgKiBAbWV0aG9kIHRpY2tcbiAgICAgKiBAcGFyYW0ge3J1bm5lcn0gcnVubmVyXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gICAgICovXG4gICAgUnVubmVyLnRpY2sgPSBmdW5jdGlvbihydW5uZXIsIGVuZ2luZSwgdGltZSkge1xuICAgICAgICB2YXIgdGltaW5nID0gZW5naW5lLnRpbWluZyxcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gPSAxLFxuICAgICAgICAgICAgZGVsdGE7XG5cbiAgICAgICAgLy8gY3JlYXRlIGFuIGV2ZW50IG9iamVjdFxuICAgICAgICB2YXIgZXZlbnQgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICdiZWZvcmVUaWNrJywgZXZlbnQpO1xuICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdiZWZvcmVUaWNrJywgZXZlbnQpOyAvLyBAZGVwcmVjYXRlZFxuXG4gICAgICAgIGlmIChydW5uZXIuaXNGaXhlZCkge1xuICAgICAgICAgICAgLy8gZml4ZWQgdGltZXN0ZXBcbiAgICAgICAgICAgIGRlbHRhID0gcnVubmVyLmRlbHRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZHluYW1pYyB0aW1lc3RlcCBiYXNlZCBvbiB3YWxsIGNsb2NrIGJldHdlZW4gY2FsbHNcbiAgICAgICAgICAgIGRlbHRhID0gKHRpbWUgLSBydW5uZXIudGltZVByZXYpIHx8IHJ1bm5lci5kZWx0YTtcbiAgICAgICAgICAgIHJ1bm5lci50aW1lUHJldiA9IHRpbWU7XG5cbiAgICAgICAgICAgIC8vIG9wdGltaXN0aWNhbGx5IGZpbHRlciBkZWx0YSBvdmVyIGEgZmV3IGZyYW1lcywgdG8gaW1wcm92ZSBzdGFiaWxpdHlcbiAgICAgICAgICAgIHJ1bm5lci5kZWx0YUhpc3RvcnkucHVzaChkZWx0YSk7XG4gICAgICAgICAgICBydW5uZXIuZGVsdGFIaXN0b3J5ID0gcnVubmVyLmRlbHRhSGlzdG9yeS5zbGljZSgtcnVubmVyLmRlbHRhU2FtcGxlU2l6ZSk7XG4gICAgICAgICAgICBkZWx0YSA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJ1bm5lci5kZWx0YUhpc3RvcnkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBsaW1pdCBkZWx0YVxuICAgICAgICAgICAgZGVsdGEgPSBkZWx0YSA8IHJ1bm5lci5kZWx0YU1pbiA/IHJ1bm5lci5kZWx0YU1pbiA6IGRlbHRhO1xuICAgICAgICAgICAgZGVsdGEgPSBkZWx0YSA+IHJ1bm5lci5kZWx0YU1heCA/IHJ1bm5lci5kZWx0YU1heCA6IGRlbHRhO1xuXG4gICAgICAgICAgICAvLyBjb3JyZWN0aW9uIGZvciBkZWx0YVxuICAgICAgICAgICAgY29ycmVjdGlvbiA9IGRlbHRhIC8gcnVubmVyLmRlbHRhO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZW5naW5lIHRpbWluZyBvYmplY3RcbiAgICAgICAgICAgIHJ1bm5lci5kZWx0YSA9IGRlbHRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGltZSBjb3JyZWN0aW9uIGZvciB0aW1lIHNjYWxpbmdcbiAgICAgICAgaWYgKHJ1bm5lci50aW1lU2NhbGVQcmV2ICE9PSAwKVxuICAgICAgICAgICAgY29ycmVjdGlvbiAqPSB0aW1pbmcudGltZVNjYWxlIC8gcnVubmVyLnRpbWVTY2FsZVByZXY7XG5cbiAgICAgICAgaWYgKHRpbWluZy50aW1lU2NhbGUgPT09IDApXG4gICAgICAgICAgICBjb3JyZWN0aW9uID0gMDtcblxuICAgICAgICBydW5uZXIudGltZVNjYWxlUHJldiA9IHRpbWluZy50aW1lU2NhbGU7XG4gICAgICAgIHJ1bm5lci5jb3JyZWN0aW9uID0gY29ycmVjdGlvbjtcblxuICAgICAgICAvLyBmcHMgY291bnRlclxuICAgICAgICBydW5uZXIuZnJhbWVDb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aW1lIC0gcnVubmVyLmNvdW50ZXJUaW1lc3RhbXAgPj0gMTAwMCkge1xuICAgICAgICAgICAgcnVubmVyLmZwcyA9IHJ1bm5lci5mcmFtZUNvdW50ZXIgKiAoKHRpbWUgLSBydW5uZXIuY291bnRlclRpbWVzdGFtcCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHJ1bm5lci5jb3VudGVyVGltZXN0YW1wID0gdGltZTtcbiAgICAgICAgICAgIHJ1bm5lci5mcmFtZUNvdW50ZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAndGljaycsIGV2ZW50KTtcbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAndGljaycsIGV2ZW50KTsgLy8gQGRlcHJlY2F0ZWRcblxuICAgICAgICAvLyBpZiB3b3JsZCBoYXMgYmVlbiBtb2RpZmllZCwgY2xlYXIgdGhlIHJlbmRlciBzY2VuZSBncmFwaFxuICAgICAgICBpZiAoZW5naW5lLndvcmxkLmlzTW9kaWZpZWQgXG4gICAgICAgICAgICAmJiBlbmdpbmUucmVuZGVyXG4gICAgICAgICAgICAmJiBlbmdpbmUucmVuZGVyLmNvbnRyb2xsZXJcbiAgICAgICAgICAgICYmIGVuZ2luZS5yZW5kZXIuY29udHJvbGxlci5jbGVhcikge1xuICAgICAgICAgICAgZW5naW5lLnJlbmRlci5jb250cm9sbGVyLmNsZWFyKGVuZ2luZS5yZW5kZXIpOyAvLyBAZGVwcmVjYXRlZFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2JlZm9yZVVwZGF0ZScsIGV2ZW50KTtcbiAgICAgICAgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGRlbHRhLCBjb3JyZWN0aW9uKTtcbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYWZ0ZXJVcGRhdGUnLCBldmVudCk7XG5cbiAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgIC8vIEBkZXByZWNhdGVkXG4gICAgICAgIGlmIChlbmdpbmUucmVuZGVyICYmIGVuZ2luZS5yZW5kZXIuY29udHJvbGxlcikge1xuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYmVmb3JlUmVuZGVyJywgZXZlbnQpO1xuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnYmVmb3JlUmVuZGVyJywgZXZlbnQpOyAvLyBAZGVwcmVjYXRlZFxuXG4gICAgICAgICAgICBlbmdpbmUucmVuZGVyLmNvbnRyb2xsZXIud29ybGQoZW5naW5lLnJlbmRlcik7XG5cbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2FmdGVyUmVuZGVyJywgZXZlbnQpO1xuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnYWZ0ZXJSZW5kZXInLCBldmVudCk7IC8vIEBkZXByZWNhdGVkXG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICdhZnRlclRpY2snLCBldmVudCk7XG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2FmdGVyVGljaycsIGV2ZW50KTsgLy8gQGRlcHJlY2F0ZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW5kcyBleGVjdXRpb24gb2YgYFJ1bm5lci5ydW5gIG9uIHRoZSBnaXZlbiBgcnVubmVyYCwgYnkgY2FuY2VsaW5nIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCBldmVudCBsb29wLlxuICAgICAqIElmIHlvdSB3aXNoIHRvIG9ubHkgdGVtcG9yYXJpbHkgcGF1c2UgdGhlIGVuZ2luZSwgc2VlIGBlbmdpbmUuZW5hYmxlZGAgaW5zdGVhZC5cbiAgICAgKiBAbWV0aG9kIHN0b3BcbiAgICAgKiBAcGFyYW0ge3J1bm5lcn0gcnVubmVyXG4gICAgICovXG4gICAgUnVubmVyLnN0b3AgPSBmdW5jdGlvbihydW5uZXIpIHtcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lKHJ1bm5lci5mcmFtZVJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBgUnVubmVyLnJ1bmAuXG4gICAgICogQG1ldGhvZCBzdGFydFxuICAgICAqIEBwYXJhbSB7cnVubmVyfSBydW5uZXJcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG4gICAgUnVubmVyLnN0YXJ0ID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUpIHtcbiAgICAgICAgUnVubmVyLnJ1bihydW5uZXIsIGVuZ2luZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGF0IHRoZSBzdGFydCBvZiBhIHRpY2ssIGJlZm9yZSBhbnkgdXBkYXRlcyB0byB0aGUgZW5naW5lIG9yIHRpbWluZ1xuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVUaWNrXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdGltaW5nIHVwZGF0ZWQsIGJ1dCBqdXN0IGJlZm9yZSB1cGRhdGVcbiAgICAqXG4gICAgKiBAZXZlbnQgdGlja1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYXQgdGhlIGVuZCBvZiBhIHRpY2ssIGFmdGVyIGVuZ2luZSB1cGRhdGUgYW5kIGFmdGVyIHJlbmRlcmluZ1xuICAgICpcbiAgICAqIEBldmVudCBhZnRlclRpY2tcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGJlZm9yZSB1cGRhdGVcbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlVXBkYXRlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciB1cGRhdGVcbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJVcGRhdGVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGJlZm9yZSByZW5kZXJpbmdcbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlUmVuZGVyXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqIEBkZXByZWNhdGVkXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyUmVuZGVyXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqIEBkZXByZWNhdGVkXG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIHJ1bm5lciBpcyBydW5uaW5nIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvb2xlYW5gIHRoYXQgc3BlY2lmaWVzIGlmIHRoZSBydW5uZXIgc2hvdWxkIHVzZSBhIGZpeGVkIHRpbWVzdGVwIChvdGhlcndpc2UgaXQgaXMgdmFyaWFibGUpLlxuICAgICAqIElmIHRpbWluZyBpcyBmaXhlZCwgdGhlbiB0aGUgYXBwYXJlbnQgc2ltdWxhdGlvbiBzcGVlZCB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlIGZyYW1lIHJhdGUgKGJ1dCBiZWhhdmlvdXIgd2lsbCBiZSBkZXRlcm1pbmlzdGljKS5cbiAgICAgKiBJZiB0aGUgdGltaW5nIGlzIHZhcmlhYmxlLCB0aGVuIHRoZSBhcHBhcmVudCBzaW11bGF0aW9uIHNwZWVkIHdpbGwgYmUgY29uc3RhbnQgKGFwcHJveGltYXRlbHksIGJ1dCBhdCB0aGUgY29zdCBvZiBkZXRlcm1pbmluaXNtKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpc0ZpeGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0aW1lIHN0ZXAgYmV0d2VlbiB1cGRhdGVzIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKiBJZiBgZW5naW5lLnRpbWluZy5pc0ZpeGVkYCBpcyBzZXQgdG8gYHRydWVgLCB0aGVuIGBkZWx0YWAgaXMgZml4ZWQuXG4gICAgICogSWYgaXQgaXMgYGZhbHNlYCwgdGhlbiBgZGVsdGFgIGNhbiBkeW5hbWljYWxseSBjaGFuZ2UgdG8gbWFpbnRhaW4gdGhlIGNvcnJlY3QgYXBwYXJlbnQgc2ltdWxhdGlvbiBzcGVlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZWx0YVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDEwMDAgLyA2MFxuICAgICAqL1xuXG59KSgpO1xuXG59LHtcIi4vQ29tbW9uXCI6MTQsXCIuL0VuZ2luZVwiOjE1LFwiLi9FdmVudHNcIjoxNn1dLDIyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgdG8gbWFuYWdlIHRoZSBzbGVlcGluZyBzdGF0ZSBvZiBib2RpZXMuXG4qXG4qIEBjbGFzcyBTbGVlcGluZ1xuKi9cblxudmFyIFNsZWVwaW5nID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gU2xlZXBpbmc7XG5cbnZhciBFdmVudHMgPSBfZGVyZXFfKCcuL0V2ZW50cycpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBTbGVlcGluZy5fbW90aW9uV2FrZVRocmVzaG9sZCA9IDAuMTg7XG4gICAgU2xlZXBpbmcuX21vdGlvblNsZWVwVGhyZXNob2xkID0gMC4wODtcbiAgICBTbGVlcGluZy5fbWluQmlhcyA9IDAuOTtcblxuICAgIC8qKlxuICAgICAqIFB1dHMgYm9kaWVzIHRvIHNsZWVwIG9yIHdha2VzIHRoZW0gdXAgZGVwZW5kaW5nIG9uIHRoZWlyIG1vdGlvbi5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgU2xlZXBpbmcudXBkYXRlID0gZnVuY3Rpb24oYm9kaWVzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIHRpbWVGYWN0b3IgPSB0aW1lU2NhbGUgKiB0aW1lU2NhbGUgKiB0aW1lU2NhbGU7XG5cbiAgICAgICAgLy8gdXBkYXRlIGJvZGllcyBzbGVlcGluZyBzdGF0dXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIG1vdGlvbiA9IGJvZHkuc3BlZWQgKiBib2R5LnNwZWVkICsgYm9keS5hbmd1bGFyU3BlZWQgKiBib2R5LmFuZ3VsYXJTcGVlZDtcblxuICAgICAgICAgICAgLy8gd2FrZSB1cCBib2RpZXMgaWYgdGhleSBoYXZlIGEgZm9yY2UgYXBwbGllZFxuICAgICAgICAgICAgaWYgKGJvZHkuZm9yY2UueCAhPT0gMCB8fCBib2R5LmZvcmNlLnkgIT09IDApIHtcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbWluTW90aW9uID0gTWF0aC5taW4oYm9keS5tb3Rpb24sIG1vdGlvbiksXG4gICAgICAgICAgICAgICAgbWF4TW90aW9uID0gTWF0aC5tYXgoYm9keS5tb3Rpb24sIG1vdGlvbik7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gYmlhc2VkIGF2ZXJhZ2UgbW90aW9uIGVzdGltYXRpb24gYmV0d2VlbiBmcmFtZXNcbiAgICAgICAgICAgIGJvZHkubW90aW9uID0gU2xlZXBpbmcuX21pbkJpYXMgKiBtaW5Nb3Rpb24gKyAoMSAtIFNsZWVwaW5nLl9taW5CaWFzKSAqIG1heE1vdGlvbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGJvZHkuc2xlZXBUaHJlc2hvbGQgPiAwICYmIGJvZHkubW90aW9uIDwgU2xlZXBpbmcuX21vdGlvblNsZWVwVGhyZXNob2xkICogdGltZUZhY3Rvcikge1xuICAgICAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyICs9IDE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvZHkuc2xlZXBDb3VudGVyID49IGJvZHkuc2xlZXBUaHJlc2hvbGQpXG4gICAgICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9keS5zbGVlcENvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHNldCBvZiBjb2xsaWRpbmcgcGFpcnMsIHdha2VzIHRoZSBzbGVlcGluZyBib2RpZXMgaW52b2x2ZWQuXG4gICAgICogQG1ldGhvZCBhZnRlckNvbGxpc2lvbnNcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgU2xlZXBpbmcuYWZ0ZXJDb2xsaXNpb25zID0gZnVuY3Rpb24ocGFpcnMsIHRpbWVTY2FsZSkge1xuICAgICAgICB2YXIgdGltZUZhY3RvciA9IHRpbWVTY2FsZSAqIHRpbWVTY2FsZSAqIHRpbWVTY2FsZTtcblxuICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpbnZvbHZlZCBpbiBjb2xsaXNpb25zXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGRvbid0IHdha2UgaW5hY3RpdmUgcGFpcnNcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uLFxuICAgICAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBLnBhcmVudCwgXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUIucGFyZW50O1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGRvbid0IHdha2UgaWYgYXQgbGVhc3Qgb25lIGJvZHkgaXMgc3RhdGljXG4gICAgICAgICAgICBpZiAoKGJvZHlBLmlzU2xlZXBpbmcgJiYgYm9keUIuaXNTbGVlcGluZykgfHwgYm9keUEuaXNTdGF0aWMgfHwgYm9keUIuaXNTdGF0aWMpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKGJvZHlBLmlzU2xlZXBpbmcgfHwgYm9keUIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHZhciBzbGVlcGluZ0JvZHkgPSAoYm9keUEuaXNTbGVlcGluZyAmJiAhYm9keUEuaXNTdGF0aWMpID8gYm9keUEgOiBib2R5QixcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nQm9keSA9IHNsZWVwaW5nQm9keSA9PT0gYm9keUEgPyBib2R5QiA6IGJvZHlBO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzbGVlcGluZ0JvZHkuaXNTdGF0aWMgJiYgbW92aW5nQm9keS5tb3Rpb24gPiBTbGVlcGluZy5fbW90aW9uV2FrZVRocmVzaG9sZCAqIHRpbWVGYWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KHNsZWVwaW5nQm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gIFxuICAgIC8qKlxuICAgICAqIFNldCBhIGJvZHkgYXMgc2xlZXBpbmcgb3IgYXdha2UuXG4gICAgICogQG1ldGhvZCBzZXRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2xlZXBpbmdcbiAgICAgKi9cbiAgICBTbGVlcGluZy5zZXQgPSBmdW5jdGlvbihib2R5LCBpc1NsZWVwaW5nKSB7XG4gICAgICAgIHZhciB3YXNTbGVlcGluZyA9IGJvZHkuaXNTbGVlcGluZztcblxuICAgICAgICBpZiAoaXNTbGVlcGluZykge1xuICAgICAgICAgICAgYm9keS5pc1NsZWVwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJvZHkuc2xlZXBDb3VudGVyID0gYm9keS5zbGVlcFRocmVzaG9sZDtcblxuICAgICAgICAgICAgYm9keS5wb3NpdGlvbkltcHVsc2UueCA9IDA7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uSW1wdWxzZS55ID0gMDtcblxuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGJvZHkucG9zaXRpb24ueDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSBib2R5LnBvc2l0aW9uLnk7XG5cbiAgICAgICAgICAgIGJvZHkuYW5nbGVQcmV2ID0gYm9keS5hbmdsZTtcbiAgICAgICAgICAgIGJvZHkuc3BlZWQgPSAwO1xuICAgICAgICAgICAgYm9keS5hbmd1bGFyU3BlZWQgPSAwO1xuICAgICAgICAgICAgYm9keS5tb3Rpb24gPSAwO1xuXG4gICAgICAgICAgICBpZiAoIXdhc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoYm9keSwgJ3NsZWVwU3RhcnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkuaXNTbGVlcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgPSAwO1xuXG4gICAgICAgICAgICBpZiAod2FzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihib2R5LCAnc2xlZXBFbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi9FdmVudHNcIjoxNn1dLDIzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5Cb2RpZXNgIG1vZHVsZSBjb250YWlucyBmYWN0b3J5IG1ldGhvZHMgZm9yIGNyZWF0aW5nIHJpZ2lkIGJvZHkgbW9kZWxzIFxuKiB3aXRoIGNvbW1vbmx5IHVzZWQgYm9keSBjb25maWd1cmF0aW9ucyAoc3VjaCBhcyByZWN0YW5nbGVzLCBjaXJjbGVzIGFuZCBvdGhlciBwb2x5Z29ucykuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBCb2RpZXNcbiovXG5cbi8vIFRPRE86IHRydWUgY2lyY2xlIGJvZGllc1xuXG52YXIgQm9kaWVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQm9kaWVzO1xuXG52YXIgVmVydGljZXMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZXJ0aWNlcycpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG52YXIgQm9keSA9IF9kZXJlcV8oJy4uL2JvZHkvQm9keScpO1xudmFyIEJvdW5kcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0JvdW5kcycpO1xudmFyIFZlY3RvciA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlY3RvcicpO1xudmFyIGRlY29tcDtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSByZWN0YW5nbGUgaHVsbC4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCByZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyByZWN0YW5nbGUgYm9keVxuICAgICAqL1xuICAgIEJvZGllcy5yZWN0YW5nbGUgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciByZWN0YW5nbGUgPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdSZWN0YW5nbGUgQm9keScsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgoJ0wgMCAwIEwgJyArIHdpZHRoICsgJyAwIEwgJyArIHdpZHRoICsgJyAnICsgaGVpZ2h0ICsgJyBMIDAgJyArIGhlaWdodClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhbWZlciA9IG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgICAgIHJlY3RhbmdsZS52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIocmVjdGFuZ2xlLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgcmVjdGFuZ2xlLCBvcHRpb25zKSk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIHRyYXBlem9pZCBodWxsLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHRyYXBlem9pZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNsb3BlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHRyYXBlem9pZCBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnRyYXBlem9pZCA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNsb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHNsb3BlICo9IDAuNTtcbiAgICAgICAgdmFyIHJvb2YgPSAoMSAtIChzbG9wZSAqIDIpKSAqIHdpZHRoO1xuICAgICAgICBcbiAgICAgICAgdmFyIHgxID0gd2lkdGggKiBzbG9wZSxcbiAgICAgICAgICAgIHgyID0geDEgKyByb29mLFxuICAgICAgICAgICAgeDMgPSB4MiArIHgxLFxuICAgICAgICAgICAgdmVydGljZXNQYXRoO1xuXG4gICAgICAgIGlmIChzbG9wZSA8IDAuNSkge1xuICAgICAgICAgICAgdmVydGljZXNQYXRoID0gJ0wgMCAwIEwgJyArIHgxICsgJyAnICsgKC1oZWlnaHQpICsgJyBMICcgKyB4MiArICcgJyArICgtaGVpZ2h0KSArICcgTCAnICsgeDMgKyAnIDAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVydGljZXNQYXRoID0gJ0wgMCAwIEwgJyArIHgyICsgJyAnICsgKC1oZWlnaHQpICsgJyBMICcgKyB4MyArICcgMCc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhcGV6b2lkID0geyBcbiAgICAgICAgICAgIGxhYmVsOiAnVHJhcGV6b2lkIEJvZHknLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKHZlcnRpY2VzUGF0aClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhbWZlciA9IG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgICAgIHRyYXBlem9pZC52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIodHJhcGV6b2lkLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgdHJhcGV6b2lkLCBvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbCB3aXRoIGEgY2lyY2xlIGh1bGwuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY2lyY2xlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXhTaWRlc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyBjaXJjbGUgYm9keVxuICAgICAqL1xuICAgIEJvZGllcy5jaXJjbGUgPSBmdW5jdGlvbih4LCB5LCByYWRpdXMsIG9wdGlvbnMsIG1heFNpZGVzKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciBjaXJjbGUgPSB7XG4gICAgICAgICAgICBsYWJlbDogJ0NpcmNsZSBCb2R5JyxcbiAgICAgICAgICAgIGNpcmNsZVJhZGl1czogcmFkaXVzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBhcHByb3hpbWF0ZSBjaXJjbGVzIHdpdGggcG9seWdvbnMgdW50aWwgdHJ1ZSBjaXJjbGVzIGltcGxlbWVudGVkIGluIFNBVFxuICAgICAgICBtYXhTaWRlcyA9IG1heFNpZGVzIHx8IDI1O1xuICAgICAgICB2YXIgc2lkZXMgPSBNYXRoLmNlaWwoTWF0aC5tYXgoMTAsIE1hdGgubWluKG1heFNpZGVzLCByYWRpdXMpKSk7XG5cbiAgICAgICAgLy8gb3B0aW1pc2F0aW9uOiBhbHdheXMgdXNlIGV2ZW4gbnVtYmVyIG9mIHNpZGVzIChoYWxmIHRoZSBudW1iZXIgb2YgdW5pcXVlIGF4ZXMpXG4gICAgICAgIGlmIChzaWRlcyAlIDIgPT09IDEpXG4gICAgICAgICAgICBzaWRlcyArPSAxO1xuXG4gICAgICAgIHJldHVybiBCb2RpZXMucG9seWdvbih4LCB5LCBzaWRlcywgcmFkaXVzLCBDb21tb24uZXh0ZW5kKHt9LCBjaXJjbGUsIG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSByZWd1bGFyIHBvbHlnb24gaHVsbCB3aXRoIHRoZSBnaXZlbiBudW1iZXIgb2Ygc2lkZXMuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgcG9seWdvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lkZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHJlZ3VsYXIgcG9seWdvbiBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnBvbHlnb24gPSBmdW5jdGlvbih4LCB5LCBzaWRlcywgcmFkaXVzLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGlmIChzaWRlcyA8IDMpXG4gICAgICAgICAgICByZXR1cm4gQm9kaWVzLmNpcmNsZSh4LCB5LCByYWRpdXMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciB0aGV0YSA9IDIgKiBNYXRoLlBJIC8gc2lkZXMsXG4gICAgICAgICAgICBwYXRoID0gJycsXG4gICAgICAgICAgICBvZmZzZXQgPSB0aGV0YSAqIDAuNTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBhbmdsZSA9IG9mZnNldCArIChpICogdGhldGEpLFxuICAgICAgICAgICAgICAgIHh4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxuICAgICAgICAgICAgICAgIHl5ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuXG4gICAgICAgICAgICBwYXRoICs9ICdMICcgKyB4eC50b0ZpeGVkKDMpICsgJyAnICsgeXkudG9GaXhlZCgzKSArICcgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb2x5Z29uID0geyBcbiAgICAgICAgICAgIGxhYmVsOiAnUG9seWdvbiBCb2R5JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aChwYXRoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICAgICAgcG9seWdvbi52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIocG9seWdvbi52ZXJ0aWNlcywgY2hhbWZlci5yYWRpdXMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbWZlci5xdWFsaXR5LCBjaGFtZmVyLnF1YWxpdHlNaW4sIGNoYW1mZXIucXVhbGl0eU1heCk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoe30sIHBvbHlnb24sIG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJvZHkgdXNpbmcgdGhlIHN1cHBsaWVkIHZlcnRpY2VzIChvciBhbiBhcnJheSBjb250YWluaW5nIG11bHRpcGxlIHNldHMgb2YgdmVydGljZXMpLlxuICAgICAqIElmIHRoZSB2ZXJ0aWNlcyBhcmUgY29udmV4LCB0aGV5IHdpbGwgcGFzcyB0aHJvdWdoIGFzIHN1cHBsaWVkLlxuICAgICAqIE90aGVyd2lzZSBpZiB0aGUgdmVydGljZXMgYXJlIGNvbmNhdmUsIHRoZXkgd2lsbCBiZSBkZWNvbXBvc2VkIGlmIFtwb2x5LWRlY29tcC5qc10oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBpcyBhdmFpbGFibGUuXG4gICAgICogTm90ZSB0aGF0IHRoaXMgcHJvY2VzcyBpcyBub3QgZ3VhcmFudGVlZCB0byBzdXBwb3J0IGNvbXBsZXggc2V0cyBvZiB2ZXJ0aWNlcyAoZS5nLiB0aG9zZSB3aXRoIGhvbGVzIG1heSBmYWlsKS5cbiAgICAgKiBCeSBkZWZhdWx0IHRoZSBkZWNvbXBvc2l0aW9uIHdpbGwgZGlzY2FyZCBjb2xsaW5lYXIgZWRnZXMgKHRvIGltcHJvdmUgcGVyZm9ybWFuY2UpLlxuICAgICAqIEl0IGNhbiBhbHNvIG9wdGlvbmFsbHkgZGlzY2FyZCBhbnkgcGFydHMgdGhhdCBoYXZlIGFuIGFyZWEgbGVzcyB0aGFuIGBtaW5pbXVtQXJlYWAuXG4gICAgICogSWYgdGhlIHZlcnRpY2VzIGNhbiBub3QgYmUgZGVjb21wb3NlZCwgdGhlIHJlc3VsdCB3aWxsIGZhbGwgYmFjayB0byB1c2luZyB0aGUgY29udmV4IGh1bGwuXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgYE1hdHRlci5Cb2R5YCBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGZyb21WZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0gW1t2ZWN0b3JdXSB2ZXJ0ZXhTZXRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2ZsYWdJbnRlcm5hbD1mYWxzZV1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3JlbW92ZUNvbGxpbmVhcj0wLjAxXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluaW11bUFyZWE9MTBdXG4gICAgICogQHJldHVybiB7Ym9keX1cbiAgICAgKi9cbiAgICBCb2RpZXMuZnJvbVZlcnRpY2VzID0gZnVuY3Rpb24oeCwgeSwgdmVydGV4U2V0cywgb3B0aW9ucywgZmxhZ0ludGVybmFsLCByZW1vdmVDb2xsaW5lYXIsIG1pbmltdW1BcmVhKSB7XG4gICAgICAgIGlmICghZGVjb21wKSB7XG4gICAgICAgICAgICBkZWNvbXAgPSBDb21tb24uX3JlcXVpcmVHbG9iYWwoJ2RlY29tcCcsICdwb2x5LWRlY29tcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJvZHksXG4gICAgICAgICAgICBwYXJ0cyxcbiAgICAgICAgICAgIGlzQ29udmV4LFxuICAgICAgICAgICAgdmVydGljZXMsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGssXG4gICAgICAgICAgICB2LFxuICAgICAgICAgICAgejtcblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcGFydHMgPSBbXTtcblxuICAgICAgICBmbGFnSW50ZXJuYWwgPSB0eXBlb2YgZmxhZ0ludGVybmFsICE9PSAndW5kZWZpbmVkJyA/IGZsYWdJbnRlcm5hbCA6IGZhbHNlO1xuICAgICAgICByZW1vdmVDb2xsaW5lYXIgPSB0eXBlb2YgcmVtb3ZlQ29sbGluZWFyICE9PSAndW5kZWZpbmVkJyA/IHJlbW92ZUNvbGxpbmVhciA6IDAuMDE7XG4gICAgICAgIG1pbmltdW1BcmVhID0gdHlwZW9mIG1pbmltdW1BcmVhICE9PSAndW5kZWZpbmVkJyA/IG1pbmltdW1BcmVhIDogMTA7XG5cbiAgICAgICAgaWYgKCFkZWNvbXApIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdCb2RpZXMuZnJvbVZlcnRpY2VzOiBwb2x5LWRlY29tcC5qcyByZXF1aXJlZC4gQ291bGQgbm90IGRlY29tcG9zZSB2ZXJ0aWNlcy4gRmFsbGJhY2sgdG8gY29udmV4IGh1bGwuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbnN1cmUgdmVydGV4U2V0cyBpcyBhbiBhcnJheSBvZiBhcnJheXNcbiAgICAgICAgaWYgKCFDb21tb24uaXNBcnJheSh2ZXJ0ZXhTZXRzWzBdKSkge1xuICAgICAgICAgICAgdmVydGV4U2V0cyA9IFt2ZXJ0ZXhTZXRzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodiA9IDA7IHYgPCB2ZXJ0ZXhTZXRzLmxlbmd0aDsgdiArPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRleFNldHNbdl07XG4gICAgICAgICAgICBpc0NvbnZleCA9IFZlcnRpY2VzLmlzQ29udmV4KHZlcnRpY2VzKTtcblxuICAgICAgICAgICAgaWYgKGlzQ29udmV4IHx8ICFkZWNvbXApIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb252ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXMgPSBWZXJ0aWNlcy5jbG9ja3dpc2VTb3J0KHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayB0byBjb252ZXggaHVsbCB3aGVuIGRlY29tcG9zaXRpb24gaXMgbm90IHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gVmVydGljZXMuaHVsbCh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXM6IHZlcnRpY2VzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpc2UgYSBkZWNvbXBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdmFyIGNvbmNhdmUgPSB2ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdmVydGV4LngsIHZlcnRleC55XTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHZlcnRpY2VzIGFyZSBjb25jYXZlIGFuZCBzaW1wbGUsIHdlIGNhbiBkZWNvbXBvc2UgaW50byBwYXJ0c1xuICAgICAgICAgICAgICAgIGRlY29tcC5tYWtlQ0NXKGNvbmNhdmUpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVDb2xsaW5lYXIgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICBkZWNvbXAucmVtb3ZlQ29sbGluZWFyUG9pbnRzKGNvbmNhdmUsIHJlbW92ZUNvbGxpbmVhcik7XG5cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHF1aWNrIGRlY29tcG9zaXRpb24gYWxnb3JpdGhtIChCYXlheml0KVxuICAgICAgICAgICAgICAgIHZhciBkZWNvbXBvc2VkID0gZGVjb21wLnF1aWNrRGVjb21wKGNvbmNhdmUpO1xuXG4gICAgICAgICAgICAgICAgLy8gZm9yIGVhY2ggZGVjb21wb3NlZCBjaHVua1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkZWNvbXBvc2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IGRlY29tcG9zZWRbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCB2ZXJ0aWNlcyBpbnRvIHRoZSBjb3JyZWN0IHN0cnVjdHVyZVxuICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmtWZXJ0aWNlcyA9IGNodW5rLm1hcChmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB2ZXJ0aWNlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB2ZXJ0aWNlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBzbWFsbCBjaHVua3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbmltdW1BcmVhID4gMCAmJiBWZXJ0aWNlcy5hcmVhKGNodW5rVmVydGljZXMpIDwgbWluaW11bUFyZWEpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBjb21wb3VuZCBwYXJ0XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFZlcnRpY2VzLmNlbnRyZShjaHVua1ZlcnRpY2VzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzOiBjaHVua1ZlcnRpY2VzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBib2R5IHBhcnRzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFydHNbaV0gPSBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHBhcnRzW2ldLCBvcHRpb25zKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmbGFnIGludGVybmFsIGVkZ2VzIChjb2luY2lkZW50IHBhcnQgZWRnZXMpXG4gICAgICAgIGlmIChmbGFnSW50ZXJuYWwpIHtcbiAgICAgICAgICAgIHZhciBjb2luY2lkZW50X21heF9kaXN0ID0gNTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRBID0gcGFydHNbaV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QiA9IHBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMub3ZlcmxhcHMocGFydEEuYm91bmRzLCBwYXJ0Qi5ib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF2ID0gcGFydEEudmVydGljZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJ2ID0gcGFydEIudmVydGljZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGUgdmVydGljZXMgb2YgYm90aCBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBhcnRBLnZlcnRpY2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh6ID0gMDsgeiA8IHBhcnRCLnZlcnRpY2VzLmxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgZGlzdGFuY2VzIGJldHdlZW4gdGhlIHZlcnRpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYSA9IFZlY3Rvci5tYWduaXR1ZGVTcXVhcmVkKFZlY3Rvci5zdWIocGF2WyhrICsgMSkgJSBwYXYubGVuZ3RoXSwgcGJ2W3pdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYiA9IFZlY3Rvci5tYWduaXR1ZGVTcXVhcmVkKFZlY3Rvci5zdWIocGF2W2tdLCBwYnZbKHogKyAxKSAlIHBidi5sZW5ndGhdKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgYm90aCB2ZXJ0aWNlcyBhcmUgdmVyeSBjbG9zZSwgY29uc2lkZXIgdGhlIGVkZ2UgY29uY2lkZW50IChpbnRlcm5hbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhIDwgY29pbmNpZGVudF9tYXhfZGlzdCAmJiBkYiA8IGNvaW5jaWRlbnRfbWF4X2Rpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdltrXS5pc0ludGVybmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBidlt6XS5pc0ludGVybmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgcGFyZW50IGJvZHkgdG8gYmUgcmV0dXJuZWQsIHRoYXQgY29udGFpbnMgZ2VuZXJhdGVkIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBib2R5ID0gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IHBhcnRzOiBwYXJ0cy5zbGljZSgwKSB9LCBvcHRpb25zKSk7XG4gICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHsgeDogeCwgeTogeSB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcGFydHNbMF07XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4uL2JvZHkvQm9keVwiOjEsXCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi4vZ2VvbWV0cnkvQm91bmRzXCI6MjYsXCIuLi9nZW9tZXRyeS9WZWN0b3JcIjoyOCxcIi4uL2dlb21ldHJ5L1ZlcnRpY2VzXCI6Mjl9XSwyNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuQ29tcG9zaXRlc2AgbW9kdWxlIGNvbnRhaW5zIGZhY3RvcnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcgY29tcG9zaXRlIGJvZGllc1xuKiB3aXRoIGNvbW1vbmx5IHVzZWQgY29uZmlndXJhdGlvbnMgKHN1Y2ggYXMgc3RhY2tzIGFuZCBjaGFpbnMpLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQ29tcG9zaXRlc1xuKi9cblxudmFyIENvbXBvc2l0ZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb3NpdGVzO1xuXG52YXIgQ29tcG9zaXRlID0gX2RlcmVxXygnLi4vYm9keS9Db21wb3NpdGUnKTtcbnZhciBDb25zdHJhaW50ID0gX2RlcmVxXygnLi4vY29uc3RyYWludC9Db25zdHJhaW50Jyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcbnZhciBCb2R5ID0gX2RlcmVxXygnLi4vYm9keS9Cb2R5Jyk7XG52YXIgQm9kaWVzID0gX2RlcmVxXygnLi9Cb2RpZXMnKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIGJvZGllcyBjcmVhdGVkIGluIHRoZSBjYWxsYmFjayBpbiBhIGdyaWQgYXJyYW5nZW1lbnQuXG4gICAgICogVGhpcyBmdW5jdGlvbiB1c2VzIHRoZSBib2R5J3MgYm91bmRzIHRvIHByZXZlbnQgb3ZlcmxhcHMuXG4gICAgICogQG1ldGhvZCBzdGFja1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uR2FwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0dhcFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5zdGFjayA9IGZ1bmN0aW9uKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdGFjayA9IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ1N0YWNrJyB9KSxcbiAgICAgICAgICAgIHggPSB4eCxcbiAgICAgICAgICAgIHkgPSB5eSxcbiAgICAgICAgICAgIGxhc3RCb2R5LFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gY2FsbGJhY2soeCwgeSwgY29sdW1uLCByb3csIGxhc3RCb2R5LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHlIZWlnaHQgPSBib2R5LmJvdW5kcy5tYXgueSAtIGJvZHkuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keVdpZHRoID0gYm9keS5ib3VuZHMubWF4LnggLSBib2R5LmJvdW5kcy5taW4ueDsgXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlIZWlnaHQgPiBtYXhIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSBib2R5SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQm9keS50cmFuc2xhdGUoYm9keSwgeyB4OiBib2R5V2lkdGggKiAwLjUsIHk6IGJvZHlIZWlnaHQgKiAwLjUgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgeCA9IGJvZHkuYm91bmRzLm1heC54ICsgY29sdW1uR2FwO1xuXG4gICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KHN0YWNrLCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxhc3RCb2R5ID0gYm9keTtcbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHggKz0gY29sdW1uR2FwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeSArPSBtYXhIZWlnaHQgKyByb3dHYXA7XG4gICAgICAgICAgICB4ID0geHg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGFpbnMgYWxsIGJvZGllcyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlIHRvZ2V0aGVyIHVzaW5nIGNvbnN0cmFpbnRzLlxuICAgICAqIEBtZXRob2QgY2hhaW5cbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhPZmZzZXRBXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlPZmZzZXRBXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhPZmZzZXRCXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlPZmZzZXRCXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIG9iamVjdHMgY2hhaW5lZCB0b2dldGhlciB3aXRoIGNvbnN0cmFpbnRzXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5jaGFpbiA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgeE9mZnNldEEsIHlPZmZzZXRBLCB4T2Zmc2V0QiwgeU9mZnNldEIsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IGNvbXBvc2l0ZS5ib2RpZXM7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlBID0gYm9kaWVzW2kgLSAxXSxcbiAgICAgICAgICAgICAgICBib2R5QiA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBib2R5QUhlaWdodCA9IGJvZHlBLmJvdW5kcy5tYXgueSAtIGJvZHlBLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib2R5QVdpZHRoID0gYm9keUEuYm91bmRzLm1heC54IC0gYm9keUEuYm91bmRzLm1pbi54LCBcbiAgICAgICAgICAgICAgICBib2R5QkhlaWdodCA9IGJvZHlCLmJvdW5kcy5tYXgueSAtIGJvZHlCLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgICAgICBib2R5QldpZHRoID0gYm9keUIuYm91bmRzLm1heC54IC0gYm9keUIuYm91bmRzLm1pbi54O1xuICAgICAgICBcbiAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBib2R5QTogYm9keUEsXG4gICAgICAgICAgICAgICAgcG9pbnRBOiB7IHg6IGJvZHlBV2lkdGggKiB4T2Zmc2V0QSwgeTogYm9keUFIZWlnaHQgKiB5T2Zmc2V0QSB9LFxuICAgICAgICAgICAgICAgIGJvZHlCOiBib2R5QixcbiAgICAgICAgICAgICAgICBwb2ludEI6IHsgeDogYm9keUJXaWR0aCAqIHhPZmZzZXRCLCB5OiBib2R5QkhlaWdodCAqIHlPZmZzZXRCIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAgIFxuICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShjb25zdHJhaW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb3NpdGUubGFiZWwgKz0gJyBDaGFpbic7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb25uZWN0cyBib2RpZXMgaW4gdGhlIGNvbXBvc2l0ZSB3aXRoIGNvbnN0cmFpbnRzIGluIGEgZ3JpZCBwYXR0ZXJuLCB3aXRoIG9wdGlvbmFsIGNyb3NzIGJyYWNlcy5cbiAgICAgKiBAbWV0aG9kIG1lc2hcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY3Jvc3NCcmFjZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBtZXNoZWQgdG9nZXRoZXIgd2l0aCBjb25zdHJhaW50c1xuICAgICAqL1xuICAgIENvbXBvc2l0ZXMubWVzaCA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgY29sdW1ucywgcm93cywgY3Jvc3NCcmFjZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcyxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIGNvbCxcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBib2R5QztcbiAgICAgICAgXG4gICAgICAgIGZvciAocm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAoY29sID0gMTsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBib2R5QSA9IGJvZGllc1soY29sIC0gMSkgKyAocm93ICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2NvbCArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlBLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvdyA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IGNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBID0gYm9kaWVzW2NvbCArICgocm93IC0gMSkgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2NvbCArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QSwgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyb3NzQnJhY2UgJiYgY29sID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUMgPSBib2RpZXNbKGNvbCAtIDEpICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QywgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Jvc3NCcmFjZSAmJiBjb2wgPCBjb2x1bW5zIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUMgPSBib2RpZXNbKGNvbCArIDEpICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNvbXBvc2l0ZSwgQ29uc3RyYWludC5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7IGJvZHlBOiBib2R5QywgYm9keUI6IGJvZHlCIH0sIG9wdGlvbnMpKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb3NpdGUubGFiZWwgKz0gJyBNZXNoJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgYm9kaWVzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrIGluIGEgcHlyYW1pZCBhcnJhbmdlbWVudC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHVzZXMgdGhlIGJvZHkncyBib3VuZHMgdG8gcHJldmVudCBvdmVybGFwcy5cbiAgICAgKiBAbWV0aG9kIHB5cmFtaWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkdhcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dHYXBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBjcmVhdGVkIGluIHRoZSBjYWxsYmFja1xuICAgICAqL1xuICAgIENvbXBvc2l0ZXMucHlyYW1pZCA9IGZ1bmN0aW9uKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBDb21wb3NpdGVzLnN0YWNrKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGZ1bmN0aW9uKHgsIHksIGNvbHVtbiwgcm93LCBsYXN0Qm9keSwgaSkge1xuICAgICAgICAgICAgdmFyIGFjdHVhbFJvd3MgPSBNYXRoLm1pbihyb3dzLCBNYXRoLmNlaWwoY29sdW1ucyAvIDIpKSxcbiAgICAgICAgICAgICAgICBsYXN0Qm9keVdpZHRoID0gbGFzdEJvZHkgPyBsYXN0Qm9keS5ib3VuZHMubWF4LnggLSBsYXN0Qm9keS5ib3VuZHMubWluLnggOiAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocm93ID4gYWN0dWFsUm93cylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJldmVyc2Ugcm93IG9yZGVyXG4gICAgICAgICAgICByb3cgPSBhY3R1YWxSb3dzIC0gcm93O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSByb3csXG4gICAgICAgICAgICAgICAgZW5kID0gY29sdW1ucyAtIDEgLSByb3c7XG5cbiAgICAgICAgICAgIGlmIChjb2x1bW4gPCBzdGFydCB8fCBjb2x1bW4gPiBlbmQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyByZXRyb2FjdGl2ZWx5IGZpeCB0aGUgZmlyc3QgYm9keSdzIHBvc2l0aW9uLCBzaW5jZSB3aWR0aCB3YXMgdW5rbm93blxuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShsYXN0Qm9keSwgeyB4OiAoY29sdW1uICsgKGNvbHVtbnMgJSAyID09PSAxID8gMSA6IC0xKSkgKiBsYXN0Qm9keVdpZHRoLCB5OiAwIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeE9mZnNldCA9IGxhc3RCb2R5ID8gY29sdW1uICogbGFzdEJvZHlXaWR0aCA6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh4eCArIHhPZmZzZXQgKyBjb2x1bW4gKiBjb2x1bW5HYXAsIHksIGNvbHVtbiwgcm93LCBsYXN0Qm9keSwgaSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29tcG9zaXRlIHdpdGggYSBOZXd0b24ncyBDcmFkbGUgc2V0dXAgb2YgYm9kaWVzIGFuZCBjb25zdHJhaW50cy5cbiAgICAgKiBAbWV0aG9kIG5ld3RvbnNDcmFkbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgbmV3dG9uc0NyYWRsZSBib2R5XG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5uZXd0b25zQ3JhZGxlID0gZnVuY3Rpb24oeHgsIHl5LCBudW1iZXIsIHNpemUsIGxlbmd0aCkge1xuICAgICAgICB2YXIgbmV3dG9uc0NyYWRsZSA9IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ05ld3RvbnMgQ3JhZGxlJyB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdGlvbiA9IDEuOSxcbiAgICAgICAgICAgICAgICBjaXJjbGUgPSBCb2RpZXMuY2lyY2xlKHh4ICsgaSAqIChzaXplICogc2VwYXJhdGlvbiksIHl5ICsgbGVuZ3RoLCBzaXplLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGluZXJ0aWE6IEluZmluaXR5LCByZXN0aXR1dGlvbjogMSwgZnJpY3Rpb246IDAsIGZyaWN0aW9uQWlyOiAwLjAwMDEsIHNsb3A6IDEgfSksXG4gICAgICAgICAgICAgICAgY29uc3RyYWludCA9IENvbnN0cmFpbnQuY3JlYXRlKHsgcG9pbnRBOiB7IHg6IHh4ICsgaSAqIChzaXplICogc2VwYXJhdGlvbiksIHk6IHl5IH0sIGJvZHlCOiBjaXJjbGUgfSk7XG5cbiAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KG5ld3RvbnNDcmFkbGUsIGNpcmNsZSk7XG4gICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChuZXd0b25zQ3JhZGxlLCBjb25zdHJhaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXd0b25zQ3JhZGxlO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvbXBvc2l0ZSB3aXRoIHNpbXBsZSBjYXIgc2V0dXAgb2YgYm9kaWVzIGFuZCBjb25zdHJhaW50cy5cbiAgICAgKiBAbWV0aG9kIGNhclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2hlZWxTaXplXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY2FyIGJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLmNhciA9IGZ1bmN0aW9uKHh4LCB5eSwgd2lkdGgsIGhlaWdodCwgd2hlZWxTaXplKSB7XG4gICAgICAgIHZhciBncm91cCA9IEJvZHkubmV4dEdyb3VwKHRydWUpLFxuICAgICAgICAgICAgd2hlZWxCYXNlID0gMjAsXG4gICAgICAgICAgICB3aGVlbEFPZmZzZXQgPSAtd2lkdGggKiAwLjUgKyB3aGVlbEJhc2UsXG4gICAgICAgICAgICB3aGVlbEJPZmZzZXQgPSB3aWR0aCAqIDAuNSAtIHdoZWVsQmFzZSxcbiAgICAgICAgICAgIHdoZWVsWU9mZnNldCA9IDA7XG4gICAgXG4gICAgICAgIHZhciBjYXIgPSBDb21wb3NpdGUuY3JlYXRlKHsgbGFiZWw6ICdDYXInIH0pLFxuICAgICAgICAgICAgYm9keSA9IEJvZGllcy5yZWN0YW5nbGUoeHgsIHl5LCB3aWR0aCwgaGVpZ2h0LCB7IFxuICAgICAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoYW1mZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiBoZWlnaHQgKiAwLjVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlbnNpdHk6IDAuMDAwMlxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHZhciB3aGVlbEEgPSBCb2RpZXMuY2lyY2xlKHh4ICsgd2hlZWxBT2Zmc2V0LCB5eSArIHdoZWVsWU9mZnNldCwgd2hlZWxTaXplLCB7IFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IGdyb3VwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuOFxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciB3aGVlbEIgPSBCb2RpZXMuY2lyY2xlKHh4ICsgd2hlZWxCT2Zmc2V0LCB5eSArIHdoZWVsWU9mZnNldCwgd2hlZWxTaXplLCB7IFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IGdyb3VwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuOFxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciBheGVsQSA9IENvbnN0cmFpbnQuY3JlYXRlKHtcbiAgICAgICAgICAgIGJvZHlCOiBib2R5LFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IHdoZWVsQU9mZnNldCwgeTogd2hlZWxZT2Zmc2V0IH0sXG4gICAgICAgICAgICBib2R5QTogd2hlZWxBLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxLFxuICAgICAgICAgICAgbGVuZ3RoOiAwXG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciBheGVsQiA9IENvbnN0cmFpbnQuY3JlYXRlKHtcbiAgICAgICAgICAgIGJvZHlCOiBib2R5LFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IHdoZWVsQk9mZnNldCwgeTogd2hlZWxZT2Zmc2V0IH0sXG4gICAgICAgICAgICBib2R5QTogd2hlZWxCLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxLFxuICAgICAgICAgICAgbGVuZ3RoOiAwXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY2FyLCBib2R5KTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY2FyLCB3aGVlbEEpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjYXIsIHdoZWVsQik7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNhciwgYXhlbEEpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjYXIsIGF4ZWxCKTtcblxuICAgICAgICByZXR1cm4gY2FyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2ltcGxlIHNvZnQgYm9keSBsaWtlIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHNvZnRCb2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5HYXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93R2FwXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjcm9zc0JyYWNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhcnRpY2xlUmFkaXVzXG4gICAgICogQHBhcmFtIHt9IHBhcnRpY2xlT3B0aW9uc1xuICAgICAqIEBwYXJhbSB7fSBjb25zdHJhaW50T3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIHNvZnRCb2R5XG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5zb2Z0Qm9keSA9IGZ1bmN0aW9uKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGNyb3NzQnJhY2UsIHBhcnRpY2xlUmFkaXVzLCBwYXJ0aWNsZU9wdGlvbnMsIGNvbnN0cmFpbnRPcHRpb25zKSB7XG4gICAgICAgIHBhcnRpY2xlT3B0aW9ucyA9IENvbW1vbi5leHRlbmQoeyBpbmVydGlhOiBJbmZpbml0eSB9LCBwYXJ0aWNsZU9wdGlvbnMpO1xuICAgICAgICBjb25zdHJhaW50T3B0aW9ucyA9IENvbW1vbi5leHRlbmQoeyBzdGlmZm5lc3M6IDAuMiwgcmVuZGVyOiB7IHR5cGU6ICdsaW5lJywgYW5jaG9yczogZmFsc2UgfSB9LCBjb25zdHJhaW50T3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHNvZnRCb2R5ID0gQ29tcG9zaXRlcy5zdGFjayh4eCwgeXksIGNvbHVtbnMsIHJvd3MsIGNvbHVtbkdhcCwgcm93R2FwLCBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4gQm9kaWVzLmNpcmNsZSh4LCB5LCBwYXJ0aWNsZVJhZGl1cywgcGFydGljbGVPcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQ29tcG9zaXRlcy5tZXNoKHNvZnRCb2R5LCBjb2x1bW5zLCByb3dzLCBjcm9zc0JyYWNlLCBjb25zdHJhaW50T3B0aW9ucyk7XG5cbiAgICAgICAgc29mdEJvZHkubGFiZWwgPSAnU29mdCBCb2R5JztcblxuICAgICAgICByZXR1cm4gc29mdEJvZHk7XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuLi9ib2R5L0JvZHlcIjoxLFwiLi4vYm9keS9Db21wb3NpdGVcIjoyLFwiLi4vY29uc3RyYWludC9Db25zdHJhaW50XCI6MTIsXCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi9Cb2RpZXNcIjoyM31dLDI1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5BeGVzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBzZXRzIG9mIGF4ZXMuXG4qXG4qIEBjbGFzcyBBeGVzXG4qL1xuXG52YXIgQXhlcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4ZXM7XG5cbnZhciBWZWN0b3IgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZWN0b3InKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHNldCBvZiBheGVzIGZyb20gdGhlIGdpdmVuIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgZnJvbVZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHtheGVzfSBBIG5ldyBheGVzIGZyb20gdGhlIGdpdmVuIHZlcnRpY2VzXG4gICAgICovXG4gICAgQXhlcy5mcm9tVmVydGljZXMgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYXhlcyA9IHt9O1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHVuaXF1ZSBheGVzLCB1c2luZyBlZGdlIG5vcm1hbCBncmFkaWVudHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGogPSAoaSArIDEpICUgdmVydGljZXMubGVuZ3RoLCBcbiAgICAgICAgICAgICAgICBub3JtYWwgPSBWZWN0b3Iubm9ybWFsaXNlKHsgXG4gICAgICAgICAgICAgICAgICAgIHg6IHZlcnRpY2VzW2pdLnkgLSB2ZXJ0aWNlc1tpXS55LCBcbiAgICAgICAgICAgICAgICAgICAgeTogdmVydGljZXNbaV0ueCAtIHZlcnRpY2VzW2pdLnhcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBncmFkaWVudCA9IChub3JtYWwueSA9PT0gMCkgPyBJbmZpbml0eSA6IChub3JtYWwueCAvIG5vcm1hbC55KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbGltaXQgcHJlY2lzaW9uXG4gICAgICAgICAgICBncmFkaWVudCA9IGdyYWRpZW50LnRvRml4ZWQoMykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGF4ZXNbZ3JhZGllbnRdID0gbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENvbW1vbi52YWx1ZXMoYXhlcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgYSBzZXQgb2YgYXhlcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge2F4ZXN9IGF4ZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKi9cbiAgICBBeGVzLnJvdGF0ZSA9IGZ1bmN0aW9uKGF4ZXMsIGFuZ2xlKSB7XG4gICAgICAgIGlmIChhbmdsZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbaV0sXG4gICAgICAgICAgICAgICAgeHg7XG4gICAgICAgICAgICB4eCA9IGF4aXMueCAqIGNvcyAtIGF4aXMueSAqIHNpbjtcbiAgICAgICAgICAgIGF4aXMueSA9IGF4aXMueCAqIHNpbiArIGF4aXMueSAqIGNvcztcbiAgICAgICAgICAgIGF4aXMueCA9IHh4O1xuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi4vZ2VvbWV0cnkvVmVjdG9yXCI6Mjh9XSwyNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuQm91bmRzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBheGlzLWFsaWduZWQgYm91bmRpbmcgYm94ZXMgKEFBQkIpLlxuKlxuKiBAY2xhc3MgQm91bmRzXG4qL1xuXG52YXIgQm91bmRzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGF4aXMtYWxpZ25lZCBib3VuZGluZyBib3ggKEFBQkIpIGZvciB0aGUgZ2l2ZW4gdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge2JvdW5kc30gQSBuZXcgYm91bmRzIG9iamVjdFxuICAgICAqL1xuICAgIEJvdW5kcy5jcmVhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgYm91bmRzID0geyBcbiAgICAgICAgICAgIG1pbjogeyB4OiAwLCB5OiAwIH0sIFxuICAgICAgICAgICAgbWF4OiB7IHg6IDAsIHk6IDAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh2ZXJ0aWNlcylcbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUoYm91bmRzLCB2ZXJ0aWNlcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGJvdW5kcyB1c2luZyB0aGUgZ2l2ZW4gdmVydGljZXMgYW5kIGV4dGVuZHMgdGhlIGJvdW5kcyBnaXZlbiBhIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlbG9jaXR5XG4gICAgICovXG4gICAgQm91bmRzLnVwZGF0ZSA9IGZ1bmN0aW9uKGJvdW5kcywgdmVydGljZXMsIHZlbG9jaXR5KSB7XG4gICAgICAgIGJvdW5kcy5taW4ueCA9IEluZmluaXR5O1xuICAgICAgICBib3VuZHMubWF4LnggPSAtSW5maW5pdHk7XG4gICAgICAgIGJvdW5kcy5taW4ueSA9IEluZmluaXR5O1xuICAgICAgICBib3VuZHMubWF4LnkgPSAtSW5maW5pdHk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgaWYgKHZlcnRleC54ID4gYm91bmRzLm1heC54KSBib3VuZHMubWF4LnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueCA8IGJvdW5kcy5taW4ueCkgYm91bmRzLm1pbi54ID0gdmVydGV4Lng7XG4gICAgICAgICAgICBpZiAodmVydGV4LnkgPiBib3VuZHMubWF4LnkpIGJvdW5kcy5tYXgueSA9IHZlcnRleC55O1xuICAgICAgICAgICAgaWYgKHZlcnRleC55IDwgYm91bmRzLm1pbi55KSBib3VuZHMubWluLnkgPSB2ZXJ0ZXgueTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHZlbG9jaXR5KSB7XG4gICAgICAgICAgICBpZiAodmVsb2NpdHkueCA+IDApIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWF4LnggKz0gdmVsb2NpdHkueDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1pbi54ICs9IHZlbG9jaXR5Lng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eS55ID4gMCkge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueSArPSB2ZWxvY2l0eS55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWluLnkgKz0gdmVsb2NpdHkueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJvdW5kcyBjb250YWlucyB0aGUgZ2l2ZW4gcG9pbnQuXG4gICAgICogQG1ldGhvZCBjb250YWluc1xuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBib3VuZHMgY29udGFpbiB0aGUgcG9pbnQsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIEJvdW5kcy5jb250YWlucyA9IGZ1bmN0aW9uKGJvdW5kcywgcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPj0gYm91bmRzLm1pbi54ICYmIHBvaW50LnggPD0gYm91bmRzLm1heC54IFxuICAgICAgICAgICAgICAgJiYgcG9pbnQueSA+PSBib3VuZHMubWluLnkgJiYgcG9pbnQueSA8PSBib3VuZHMubWF4Lnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIGJvdW5kcyBpbnRlcnNlY3QuXG4gICAgICogQG1ldGhvZCBvdmVybGFwc1xuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNBXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc0JcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBib3VuZHMgb3ZlcmxhcCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQm91bmRzLm92ZXJsYXBzID0gZnVuY3Rpb24oYm91bmRzQSwgYm91bmRzQikge1xuICAgICAgICByZXR1cm4gKGJvdW5kc0EubWluLnggPD0gYm91bmRzQi5tYXgueCAmJiBib3VuZHNBLm1heC54ID49IGJvdW5kc0IubWluLnhcbiAgICAgICAgICAgICAgICAmJiBib3VuZHNBLm1heC55ID49IGJvdW5kc0IubWluLnkgJiYgYm91bmRzQS5taW4ueSA8PSBib3VuZHNCLm1heC55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyB0aGUgYm91bmRzIGJ5IHRoZSBnaXZlbiB2ZWN0b3IuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqL1xuICAgIEJvdW5kcy50cmFuc2xhdGUgPSBmdW5jdGlvbihib3VuZHMsIHZlY3Rvcikge1xuICAgICAgICBib3VuZHMubWluLnggKz0gdmVjdG9yLng7XG4gICAgICAgIGJvdW5kcy5tYXgueCArPSB2ZWN0b3IueDtcbiAgICAgICAgYm91bmRzLm1pbi55ICs9IHZlY3Rvci55O1xuICAgICAgICBib3VuZHMubWF4LnkgKz0gdmVjdG9yLnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNoaWZ0cyB0aGUgYm91bmRzIHRvIHRoZSBnaXZlbiBwb3NpdGlvbi5cbiAgICAgKiBAbWV0aG9kIHNoaWZ0XG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb3NpdGlvblxuICAgICAqL1xuICAgIEJvdW5kcy5zaGlmdCA9IGZ1bmN0aW9uKGJvdW5kcywgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIGRlbHRhWCA9IGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgIGRlbHRhWSA9IGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueTtcbiAgICAgICAgICAgIFxuICAgICAgICBib3VuZHMubWluLnggPSBwb3NpdGlvbi54O1xuICAgICAgICBib3VuZHMubWF4LnggPSBwb3NpdGlvbi54ICsgZGVsdGFYO1xuICAgICAgICBib3VuZHMubWluLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICBib3VuZHMubWF4LnkgPSBwb3NpdGlvbi55ICsgZGVsdGFZO1xuICAgIH07XG4gICAgXG59KSgpO1xuXG59LHt9XSwyNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuU3ZnYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY29udmVydGluZyBTVkcgaW1hZ2VzIGludG8gYW4gYXJyYXkgb2YgdmVjdG9yIHBvaW50cy5cbipcbiogVG8gdXNlIHRoaXMgbW9kdWxlIHlvdSBhbHNvIG5lZWQgdGhlIFNWR1BhdGhTZWcgcG9seWZpbGw6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9nZXJzL3BhdGhzZWdcbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFN2Z1xuKi9cblxudmFyIFN2ZyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN2ZztcblxudmFyIEJvdW5kcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0JvdW5kcycpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFuIFNWRyBwYXRoIGludG8gYW4gYXJyYXkgb2YgdmVjdG9yIHBvaW50cy5cbiAgICAgKiBJZiB0aGUgaW5wdXQgcGF0aCBmb3JtcyBhIGNvbmNhdmUgc2hhcGUsIHlvdSBtdXN0IGRlY29tcG9zZSB0aGUgcmVzdWx0IGludG8gY29udmV4IHBhcnRzIGJlZm9yZSB1c2UuXG4gICAgICogU2VlIGBCb2RpZXMuZnJvbVZlcnRpY2VzYCB3aGljaCBwcm92aWRlcyBzdXBwb3J0IGZvciB0aGlzLlxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBndWFyYW50ZWVkIHRvIHN1cHBvcnQgY29tcGxleCBwYXRocyAoc3VjaCBhcyB0aG9zZSB3aXRoIGhvbGVzKS5cbiAgICAgKiBZb3UgbXVzdCBsb2FkIHRoZSBgcGF0aHNlZy5qc2AgcG9seWZpbGwgb24gbmV3ZXIgYnJvd3NlcnMuXG4gICAgICogQG1ldGhvZCBwYXRoVG9WZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7U1ZHUGF0aEVsZW1lbnR9IHBhdGhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3NhbXBsZUxlbmd0aD0xNV1cbiAgICAgKiBAcmV0dXJuIHtWZWN0b3JbXX0gcG9pbnRzXG4gICAgICovXG4gICAgU3ZnLnBhdGhUb1ZlcnRpY2VzID0gZnVuY3Rpb24ocGF0aCwgc2FtcGxlTGVuZ3RoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhKCdTVkdQYXRoU2VnJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignU3ZnLnBhdGhUb1ZlcnRpY2VzOiBTVkdQYXRoU2VnIG5vdCBkZWZpbmVkLCBhIHBvbHlmaWxsIGlzIHJlcXVpcmVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dvdXQvc3ZnLnRvcG9seS5qcy9ibG9iL21hc3Rlci9zdmcudG9wb2x5LmpzXG4gICAgICAgIHZhciBpLCBpbCwgdG90YWwsIHBvaW50LCBzZWdtZW50LCBzZWdtZW50cywgXG4gICAgICAgICAgICBzZWdtZW50c1F1ZXVlLCBsYXN0U2VnbWVudCwgXG4gICAgICAgICAgICBsYXN0UG9pbnQsIHNlZ21lbnRJbmRleCwgcG9pbnRzID0gW10sXG4gICAgICAgICAgICBseCwgbHksIGxlbmd0aCA9IDAsIHggPSAwLCB5ID0gMDtcblxuICAgICAgICBzYW1wbGVMZW5ndGggPSBzYW1wbGVMZW5ndGggfHwgMTU7XG5cbiAgICAgICAgdmFyIGFkZFBvaW50ID0gZnVuY3Rpb24ocHgsIHB5LCBwYXRoU2VnVHlwZSkge1xuICAgICAgICAgICAgLy8gYWxsIG9kZC1udW1iZXJlZCBwYXRoIHR5cGVzIGFyZSByZWxhdGl2ZSBleGNlcHQgUEFUSFNFR19DTE9TRVBBVEggKDEpXG4gICAgICAgICAgICB2YXIgaXNSZWxhdGl2ZSA9IHBhdGhTZWdUeXBlICUgMiA9PT0gMSAmJiBwYXRoU2VnVHlwZSA+IDE7XG5cbiAgICAgICAgICAgIC8vIHdoZW4gdGhlIGxhc3QgcG9pbnQgZG9lc24ndCBlcXVhbCB0aGUgY3VycmVudCBwb2ludCBhZGQgdGhlIGN1cnJlbnQgcG9pbnRcbiAgICAgICAgICAgIGlmICghbGFzdFBvaW50IHx8IHB4ICE9IGxhc3RQb2ludC54IHx8IHB5ICE9IGxhc3RQb2ludC55KSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RQb2ludCAmJiBpc1JlbGF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGx4ID0gbGFzdFBvaW50Lng7XG4gICAgICAgICAgICAgICAgICAgIGx5ID0gbGFzdFBvaW50Lnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbHggPSAwO1xuICAgICAgICAgICAgICAgICAgICBseSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBseCArIHB4LFxuICAgICAgICAgICAgICAgICAgICB5OiBseSArIHB5XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHNldCBsYXN0IHBvaW50XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVsYXRpdmUgfHwgIWxhc3RQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBsYXN0UG9pbnQgPSBwb2ludDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaChwb2ludCk7XG5cbiAgICAgICAgICAgICAgICB4ID0gbHggKyBweDtcbiAgICAgICAgICAgICAgICB5ID0gbHkgKyBweTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYWRkU2VnbWVudFBvaW50ID0gZnVuY3Rpb24oc2VnbWVudCkge1xuICAgICAgICAgICAgdmFyIHNlZ1R5cGUgPSBzZWdtZW50LnBhdGhTZWdUeXBlQXNMZXR0ZXIudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAgICAgLy8gc2tpcCBwYXRoIGVuZHNcbiAgICAgICAgICAgIGlmIChzZWdUeXBlID09PSAnWicpIFxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy8gbWFwIHNlZ21lbnQgdG8geCBhbmQgeVxuICAgICAgICAgICAgc3dpdGNoIChzZWdUeXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICB4ID0gc2VnbWVudC54O1xuICAgICAgICAgICAgICAgIHkgPSBzZWdtZW50Lnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB4ID0gc2VnbWVudC54O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAgeSA9IHNlZ21lbnQueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkUG9pbnQoeCwgeSwgc2VnbWVudC5wYXRoU2VnVHlwZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZW5zdXJlIHBhdGggaXMgYWJzb2x1dGVcbiAgICAgICAgU3ZnLl9zdmdQYXRoVG9BYnNvbHV0ZShwYXRoKTtcblxuICAgICAgICAvLyBnZXQgdG90YWwgbGVuZ3RoXG4gICAgICAgIHRvdGFsID0gcGF0aC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgICAgIC8vIHF1ZXVlIHNlZ21lbnRzXG4gICAgICAgIHNlZ21lbnRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXRoLnBhdGhTZWdMaXN0Lm51bWJlck9mSXRlbXM7IGkgKz0gMSlcbiAgICAgICAgICAgIHNlZ21lbnRzLnB1c2gocGF0aC5wYXRoU2VnTGlzdC5nZXRJdGVtKGkpKTtcblxuICAgICAgICBzZWdtZW50c1F1ZXVlID0gc2VnbWVudHMuY29uY2F0KCk7XG5cbiAgICAgICAgLy8gc2FtcGxlIHRocm91Z2ggcGF0aFxuICAgICAgICB3aGlsZSAobGVuZ3RoIDwgdG90YWwpIHtcbiAgICAgICAgICAgIC8vIGdldCBzZWdtZW50IGF0IHBvc2l0aW9uXG4gICAgICAgICAgICBzZWdtZW50SW5kZXggPSBwYXRoLmdldFBhdGhTZWdBdExlbmd0aChsZW5ndGgpO1xuICAgICAgICAgICAgc2VnbWVudCA9IHNlZ21lbnRzW3NlZ21lbnRJbmRleF07XG5cbiAgICAgICAgICAgIC8vIG5ldyBzZWdtZW50XG4gICAgICAgICAgICBpZiAoc2VnbWVudCAhPSBsYXN0U2VnbWVudCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChzZWdtZW50c1F1ZXVlLmxlbmd0aCAmJiBzZWdtZW50c1F1ZXVlWzBdICE9IHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICAgIGFkZFNlZ21lbnRQb2ludChzZWdtZW50c1F1ZXVlLnNoaWZ0KCkpO1xuXG4gICAgICAgICAgICAgICAgbGFzdFNlZ21lbnQgPSBzZWdtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgcG9pbnRzIGluIGJldHdlZW4gd2hlbiBjdXJ2aW5nXG4gICAgICAgICAgICAvLyBUT0RPOiBhZGFwdGl2ZSBzYW1wbGluZ1xuICAgICAgICAgICAgc3dpdGNoIChzZWdtZW50LnBhdGhTZWdUeXBlQXNMZXR0ZXIudG9VcHBlckNhc2UoKSkge1xuXG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICAgIHBvaW50ID0gcGF0aC5nZXRQb2ludEF0TGVuZ3RoKGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYWRkUG9pbnQocG9pbnQueCwgcG9pbnQueSwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaW5jcmVtZW50IGJ5IHNhbXBsZSB2YWx1ZVxuICAgICAgICAgICAgbGVuZ3RoICs9IHNhbXBsZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCByZW1haW5pbmcgc2VnbWVudHMgbm90IHBhc3NlZCBieSBzYW1wbGluZ1xuICAgICAgICBmb3IgKGkgPSAwLCBpbCA9IHNlZ21lbnRzUXVldWUubGVuZ3RoOyBpIDwgaWw7ICsraSlcbiAgICAgICAgICAgIGFkZFNlZ21lbnRQb2ludChzZWdtZW50c1F1ZXVlW2ldKTtcblxuICAgICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH07XG5cbiAgICBTdmcuX3N2Z1BhdGhUb0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICAvLyBodHRwOi8vcGhyb2d6Lm5ldC9jb252ZXJ0LXN2Zy1wYXRoLXRvLWFsbC1hYnNvbHV0ZS1jb21tYW5kc1xuICAgICAgICAvLyBDb3B5cmlnaHQgKGMpIEdhdmluIEtpc3RuZXJcbiAgICAgICAgLy8gaHR0cDovL3Bocm9nei5uZXQvanMvX1JldXNlTGljZW5zZS50eHRcbiAgICAgICAgLy8gTW9kaWZpY2F0aW9uczogdGlkeSBmb3JtYXR0aW5nIGFuZCBuYW1pbmdcbiAgICAgICAgdmFyIHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHNlZ3MgPSBwYXRoLnBhdGhTZWdMaXN0LFxuICAgICAgICAgICAgeCA9IDAsIHkgPSAwLCBsZW4gPSBzZWdzLm51bWJlck9mSXRlbXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdmFyIHNlZyA9IHNlZ3MuZ2V0SXRlbShpKSxcbiAgICAgICAgICAgICAgICBzZWdUeXBlID0gc2VnLnBhdGhTZWdUeXBlQXNMZXR0ZXI7XG5cbiAgICAgICAgICAgIGlmICgvW01MSFZDU1FUQV0vLnRlc3Qoc2VnVHlwZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3gnIGluIHNlZykgeCA9IHNlZy54O1xuICAgICAgICAgICAgICAgIGlmICgneScgaW4gc2VnKSB5ID0gc2VnLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgneDEnIGluIHNlZykgeDEgPSB4ICsgc2VnLngxO1xuICAgICAgICAgICAgICAgIGlmICgneDInIGluIHNlZykgeDIgPSB4ICsgc2VnLngyO1xuICAgICAgICAgICAgICAgIGlmICgneTEnIGluIHNlZykgeTEgPSB5ICsgc2VnLnkxO1xuICAgICAgICAgICAgICAgIGlmICgneTInIGluIHNlZykgeTIgPSB5ICsgc2VnLnkyO1xuICAgICAgICAgICAgICAgIGlmICgneCcgaW4gc2VnKSB4ICs9IHNlZy54O1xuICAgICAgICAgICAgICAgIGlmICgneScgaW4gc2VnKSB5ICs9IHNlZy55O1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzZWdUeXBlKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdNb3ZldG9BYnMoeCwgeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9BYnMoeCwgeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9Ib3Jpem9udGFsQWJzKHgpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnTGluZXRvVmVydGljYWxBYnMoeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvQ3ViaWNBYnMoeCwgeSwgeDEsIHkxLCB4MiwgeTIpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQ3VydmV0b0N1YmljU21vb3RoQWJzKHgsIHksIHgyLCB5MiksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvUXVhZHJhdGljQWJzKHgsIHksIHgxLCB5MSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvUXVhZHJhdGljU21vb3RoQWJzKHgsIHkpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQXJjQWJzKHgsIHksIHNlZy5yMSwgc2VnLnIyLCBzZWcuYW5nbGUsIHNlZy5sYXJnZUFyY0ZsYWcsIHNlZy5zd2VlcEZsYWcpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAneic6XG4gICAgICAgICAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgICAgICAgICAgIHggPSB4MDtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHkwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlZ1R5cGUgPT0gJ00nIHx8IHNlZ1R5cGUgPT0gJ20nKSB7XG4gICAgICAgICAgICAgICAgeDAgPSB4O1xuICAgICAgICAgICAgICAgIHkwID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG59LHtcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuLi9nZW9tZXRyeS9Cb3VuZHNcIjoyNn1dLDI4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5WZWN0b3JgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHZlY3RvcnMuXG4qIFZlY3RvcnMgYXJlIHRoZSBiYXNpcyBvZiBhbGwgdGhlIGdlb21ldHJ5IHJlbGF0ZWQgb3BlcmF0aW9ucyBpbiB0aGUgZW5naW5lLlxuKiBBIGBNYXR0ZXIuVmVjdG9yYCBvYmplY3QgaXMgb2YgdGhlIGZvcm0gYHsgeDogMCwgeTogMCB9YC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFZlY3RvclxuKi9cblxuLy8gVE9ETzogY29uc2lkZXIgcGFyYW1zIGZvciByZXVzaW5nIHZlY3RvciBvYmplY3RzXG5cbnZhciBWZWN0b3IgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgdmVjdG9yLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLmNyZWF0ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogeCB8fCAwLCB5OiB5IHx8IDAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyB2ZWN0b3Igd2l0aCBgeGAgYW5kIGB5YCBjb3BpZWQgZnJvbSB0aGUgZ2l2ZW4gYHZlY3RvcmAuXG4gICAgICogQG1ldGhvZCBjbG9uZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IGNsb25lZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IuY2xvbmUgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLngsIHk6IHZlY3Rvci55IH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiBhIHZlY3Rvci5cbiAgICAgKiBAbWV0aG9kIG1hZ25pdHVkZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5tYWduaXR1ZGUgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgodmVjdG9yLnggKiB2ZWN0b3IueCkgKyAodmVjdG9yLnkgKiB2ZWN0b3IueSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgYSB2ZWN0b3IgKHRoZXJlZm9yZSBzYXZpbmcgYSBgc3FydGAgb3BlcmF0aW9uKS5cbiAgICAgKiBAbWV0aG9kIG1hZ25pdHVkZVNxdWFyZWRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgc3F1YXJlZCBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5tYWduaXR1ZGVTcXVhcmVkID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yLnggKiB2ZWN0b3IueCkgKyAodmVjdG9yLnkgKiB2ZWN0b3IueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZlY3RvciBhYm91dCAoMCwgMCkgYnkgc3BlY2lmaWVkIGFuZ2xlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIHZlY3RvciByb3RhdGVkIGFib3V0ICgwLCAwKVxuICAgICAqL1xuICAgIFZlY3Rvci5yb3RhdGUgPSBmdW5jdGlvbih2ZWN0b3IsIGFuZ2xlLCBvdXRwdXQpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSwgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciB4ID0gdmVjdG9yLnggKiBjb3MgLSB2ZWN0b3IueSAqIHNpbjtcbiAgICAgICAgb3V0cHV0LnkgPSB2ZWN0b3IueCAqIHNpbiArIHZlY3Rvci55ICogY29zO1xuICAgICAgICBvdXRwdXQueCA9IHg7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZlY3RvciBhYm91dCBhIHNwZWNpZmllZCBwb2ludCBieSBzcGVjaWZpZWQgYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVBYm91dFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciByb3RhdGVkIGFib3V0IHRoZSBwb2ludFxuICAgICAqL1xuICAgIFZlY3Rvci5yb3RhdGVBYm91dCA9IGZ1bmN0aW9uKHZlY3RvciwgYW5nbGUsIHBvaW50LCBvdXRwdXQpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSwgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciB4ID0gcG9pbnQueCArICgodmVjdG9yLnggLSBwb2ludC54KSAqIGNvcyAtICh2ZWN0b3IueSAtIHBvaW50LnkpICogc2luKTtcbiAgICAgICAgb3V0cHV0LnkgPSBwb2ludC55ICsgKCh2ZWN0b3IueCAtIHBvaW50LngpICogc2luICsgKHZlY3Rvci55IC0gcG9pbnQueSkgKiBjb3MpO1xuICAgICAgICBvdXRwdXQueCA9IHg7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGlzZXMgYSB2ZWN0b3IgKHN1Y2ggdGhhdCBpdHMgbWFnbml0dWRlIGlzIGAxYCkuXG4gICAgICogQG1ldGhvZCBub3JtYWxpc2VcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3Igbm9ybWFsaXNlZFxuICAgICAqL1xuICAgIFZlY3Rvci5ub3JtYWxpc2UgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgdmFyIG1hZ25pdHVkZSA9IFZlY3Rvci5tYWduaXR1ZGUodmVjdG9yKTtcbiAgICAgICAgaWYgKG1hZ25pdHVkZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLnggLyBtYWduaXR1ZGUsIHk6IHZlY3Rvci55IC8gbWFnbml0dWRlIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRvdC1wcm9kdWN0IG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgZG90XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGRvdCBwcm9kdWN0IG9mIHRoZSB0d28gdmVjdG9yc1xuICAgICAqL1xuICAgIFZlY3Rvci5kb3QgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yQS54ICogdmVjdG9yQi54KSArICh2ZWN0b3JBLnkgKiB2ZWN0b3JCLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcy1wcm9kdWN0IG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgY3Jvc3NcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGUgdHdvIHZlY3RvcnNcbiAgICAgKi9cbiAgICBWZWN0b3IuY3Jvc3MgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yQS54ICogdmVjdG9yQi55KSAtICh2ZWN0b3JBLnkgKiB2ZWN0b3JCLngpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcy1wcm9kdWN0IG9mIHRocmVlIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBjcm9zczNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoZSB0aHJlZSB2ZWN0b3JzXG4gICAgICovXG4gICAgVmVjdG9yLmNyb3NzMyA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIsIHZlY3RvckMpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3JCLnggLSB2ZWN0b3JBLngpICogKHZlY3RvckMueSAtIHZlY3RvckEueSkgLSAodmVjdG9yQi55IC0gdmVjdG9yQS55KSAqICh2ZWN0b3JDLnggLSB2ZWN0b3JBLngpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGFkZFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBvZiB2ZWN0b3JBIGFuZCB2ZWN0b3JCIGFkZGVkXG4gICAgICovXG4gICAgVmVjdG9yLmFkZCA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIsIG91dHB1dCkge1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIG91dHB1dC54ID0gdmVjdG9yQS54ICsgdmVjdG9yQi54O1xuICAgICAgICBvdXRwdXQueSA9IHZlY3RvckEueSArIHZlY3RvckIueTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIHN1YlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBvZiB2ZWN0b3JBIGFuZCB2ZWN0b3JCIHN1YnRyYWN0ZWRcbiAgICAgKi9cbiAgICBWZWN0b3Iuc3ViID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQiwgb3V0cHV0KSB7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgb3V0cHV0LnggPSB2ZWN0b3JBLnggLSB2ZWN0b3JCLng7XG4gICAgICAgIG91dHB1dC55ID0gdmVjdG9yQS55IC0gdmVjdG9yQi55O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGFuZCBhIHNjYWxhci5cbiAgICAgKiBAbWV0aG9kIG11bHRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxhclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG11bHRpcGxpZWQgYnkgc2NhbGFyXG4gICAgICovXG4gICAgVmVjdG9yLm11bHQgPSBmdW5jdGlvbih2ZWN0b3IsIHNjYWxhcikge1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCAqIHNjYWxhciwgeTogdmVjdG9yLnkgKiBzY2FsYXIgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBhbmQgYSBzY2FsYXIuXG4gICAgICogQG1ldGhvZCBkaXZcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxhclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIGRpdmlkZWQgYnkgc2NhbGFyXG4gICAgICovXG4gICAgVmVjdG9yLmRpdiA9IGZ1bmN0aW9uKHZlY3Rvciwgc2NhbGFyKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54IC8gc2NhbGFyLCB5OiB2ZWN0b3IueSAvIHNjYWxhciB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwZXJwZW5kaWN1bGFyIHZlY3Rvci4gU2V0IGBuZWdhdGVgIHRvIHRydWUgZm9yIHRoZSBwZXJwZW5kaWN1bGFyIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4gICAgICogQG1ldGhvZCBwZXJwXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW25lZ2F0ZT1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBwZXJwZW5kaWN1bGFyIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5wZXJwID0gZnVuY3Rpb24odmVjdG9yLCBuZWdhdGUpIHtcbiAgICAgICAgbmVnYXRlID0gbmVnYXRlID09PSB0cnVlID8gLTEgOiAxO1xuICAgICAgICByZXR1cm4geyB4OiBuZWdhdGUgKiAtdmVjdG9yLnksIHk6IG5lZ2F0ZSAqIHZlY3Rvci54IH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5lZ2F0ZXMgYm90aCBjb21wb25lbnRzIG9mIGEgdmVjdG9yIHN1Y2ggdGhhdCBpdCBwb2ludHMgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgICAgKiBAbWV0aG9kIG5lZ1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBuZWdhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5uZWcgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogLXZlY3Rvci54LCB5OiAtdmVjdG9yLnkgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5nbGUgYmV0d2VlbiB0aGUgdmVjdG9yIGB2ZWN0b3JCIC0gdmVjdG9yQWAgYW5kIHRoZSB4LWF4aXMgaW4gcmFkaWFucy5cbiAgICAgKiBAbWV0aG9kIGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAgICAgKi9cbiAgICBWZWN0b3IuYW5nbGUgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHZlY3RvckIueSAtIHZlY3RvckEueSwgdmVjdG9yQi54IC0gdmVjdG9yQS54KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IHZlY3RvciBwb29sIChub3QgdGhyZWFkLXNhZmUpLlxuICAgICAqIEBwcm9wZXJ0eSBfdGVtcFxuICAgICAqIEB0eXBlIHt2ZWN0b3JbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIFZlY3Rvci5fdGVtcCA9IFtcbiAgICAgICAgVmVjdG9yLmNyZWF0ZSgpLCBWZWN0b3IuY3JlYXRlKCksIFxuICAgICAgICBWZWN0b3IuY3JlYXRlKCksIFZlY3Rvci5jcmVhdGUoKSwgXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoKSwgVmVjdG9yLmNyZWF0ZSgpXG4gICAgXTtcblxufSkoKTtcbn0se31dLDI5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5WZXJ0aWNlc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgc2V0cyBvZiB2ZXJ0aWNlcy5cbiogQSBzZXQgb2YgdmVydGljZXMgaXMgYW4gYXJyYXkgb2YgYE1hdHRlci5WZWN0b3JgIHdpdGggYWRkaXRpb25hbCBpbmRleGluZyBwcm9wZXJ0aWVzIGluc2VydGVkIGJ5IGBWZXJ0aWNlcy5jcmVhdGVgLlxuKiBBIGBNYXR0ZXIuQm9keWAgbWFpbnRhaW5zIGEgc2V0IG9mIHZlcnRpY2VzIHRvIHJlcHJlc2VudCB0aGUgc2hhcGUgb2YgdGhlIG9iamVjdCAoaXRzIGNvbnZleCBodWxsKS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFZlcnRpY2VzXG4qL1xuXG52YXIgVmVydGljZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNlcztcblxudmFyIFZlY3RvciA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlY3RvcicpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc2V0IG9mIGBNYXR0ZXIuQm9keWAgY29tcGF0aWJsZSB2ZXJ0aWNlcy5cbiAgICAgKiBUaGUgYHBvaW50c2AgYXJndW1lbnQgYWNjZXB0cyBhbiBhcnJheSBvZiBgTWF0dGVyLlZlY3RvcmAgcG9pbnRzIG9yaWVudGF0ZWQgYXJvdW5kIHRoZSBvcmlnaW4gYCgwLCAwKWAsIGZvciBleGFtcGxlOlxuICAgICAqXG4gICAgICogICAgIFt7IHg6IDAsIHk6IDAgfSwgeyB4OiAyNSwgeTogNTAgfSwgeyB4OiA1MCwgeTogMCB9XVxuICAgICAqXG4gICAgICogVGhlIGBWZXJ0aWNlcy5jcmVhdGVgIG1ldGhvZCByZXR1cm5zIGEgbmV3IGFycmF5IG9mIHZlcnRpY2VzLCB3aGljaCBhcmUgc2ltaWxhciB0byBNYXR0ZXIuVmVjdG9yIG9iamVjdHMsXG4gICAgICogYnV0IHdpdGggc29tZSBhZGRpdGlvbmFsIHJlZmVyZW5jZXMgcmVxdWlyZWQgZm9yIGVmZmljaWVudCBjb2xsaXNpb24gZGV0ZWN0aW9uIHJvdXRpbmVzLlxuICAgICAqXG4gICAgICogVmVydGljZXMgbXVzdCBiZSBzcGVjaWZpZWQgaW4gY2xvY2t3aXNlIG9yZGVyLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoZSBgYm9keWAgYXJndW1lbnQgaXMgbm90IG9wdGlvbmFsLCBhIGBNYXR0ZXIuQm9keWAgcmVmZXJlbmNlIG11c3QgYmUgcHJvdmlkZWQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yW119IHBvaW50c1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNyZWF0ZSA9IGZ1bmN0aW9uKHBvaW50cywgYm9keSkge1xuICAgICAgICB2YXIgdmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzW2ldLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogcG9pbnQueCxcbiAgICAgICAgICAgICAgICAgICAgeTogcG9pbnQueSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgIGlzSW50ZXJuYWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBzdHJpbmcgY29udGFpbmluZyBvcmRlcmVkIHggeSBwYWlycyBzZXBhcmF0ZWQgYnkgc3BhY2VzIChhbmQgb3B0aW9uYWxseSBjb21tYXMpLCBcbiAgICAgKiBpbnRvIGEgYE1hdHRlci5WZXJ0aWNlc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gYE1hdHRlci5Cb2R5YC5cbiAgICAgKiBGb3IgcGFyc2luZyBTVkcgcGF0aHMsIHNlZSBgU3ZnLnBhdGhUb1ZlcnRpY2VzYC5cbiAgICAgKiBAbWV0aG9kIGZyb21QYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5mcm9tUGF0aCA9IGZ1bmN0aW9uKHBhdGgsIGJvZHkpIHtcbiAgICAgICAgdmFyIHBhdGhQYXR0ZXJuID0gL0w/XFxzKihbXFwtXFxkXFwuZV0rKVtcXHMsXSooW1xcLVxcZFxcLmVdKykqL2lnLFxuICAgICAgICAgICAgcG9pbnRzID0gW107XG5cbiAgICAgICAgcGF0aC5yZXBsYWNlKHBhdGhQYXR0ZXJuLCBmdW5jdGlvbihtYXRjaCwgeCwgeSkge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiBwYXJzZUZsb2F0KHgpLCB5OiBwYXJzZUZsb2F0KHkpIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gVmVydGljZXMuY3JlYXRlKHBvaW50cywgYm9keSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNlbnRyZSAoY2VudHJvaWQpIG9mIHRoZSBzZXQgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBjZW50cmVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIGNlbnRyZSBwb2ludFxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNlbnRyZSA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBhcmVhID0gVmVydGljZXMuYXJlYSh2ZXJ0aWNlcywgdHJ1ZSksXG4gICAgICAgICAgICBjZW50cmUgPSB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGNyb3NzLFxuICAgICAgICAgICAgdGVtcCxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaiA9IChpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgICAgICBjcm9zcyA9IFZlY3Rvci5jcm9zcyh2ZXJ0aWNlc1tpXSwgdmVydGljZXNbal0pO1xuICAgICAgICAgICAgdGVtcCA9IFZlY3Rvci5tdWx0KFZlY3Rvci5hZGQodmVydGljZXNbaV0sIHZlcnRpY2VzW2pdKSwgY3Jvc3MpO1xuICAgICAgICAgICAgY2VudHJlID0gVmVjdG9yLmFkZChjZW50cmUsIHRlbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFZlY3Rvci5kaXYoY2VudHJlLCA2ICogYXJlYSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGF2ZXJhZ2UgKG1lYW4pIG9mIHRoZSBzZXQgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBtZWFuXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBhdmVyYWdlIHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMubWVhbiA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBhdmVyYWdlID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXZlcmFnZS54ICs9IHZlcnRpY2VzW2ldLng7XG4gICAgICAgICAgICBhdmVyYWdlLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBWZWN0b3IuZGl2KGF2ZXJhZ2UsIHZlcnRpY2VzLmxlbmd0aCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFyZWEgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGFyZWFcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gc2lnbmVkXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgYXJlYVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmFyZWEgPSBmdW5jdGlvbih2ZXJ0aWNlcywgc2lnbmVkKSB7XG4gICAgICAgIHZhciBhcmVhID0gMCxcbiAgICAgICAgICAgIGogPSB2ZXJ0aWNlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZWEgKz0gKHZlcnRpY2VzW2pdLnggLSB2ZXJ0aWNlc1tpXS54KSAqICh2ZXJ0aWNlc1tqXS55ICsgdmVydGljZXNbaV0ueSk7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduZWQpXG4gICAgICAgICAgICByZXR1cm4gYXJlYSAvIDI7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFyZWEpIC8gMjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbW9tZW50IG9mIGluZXJ0aWEgKHNlY29uZCBtb21lbnQgb2YgYXJlYSkgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcyBnaXZlbiB0aGUgdG90YWwgbWFzcy5cbiAgICAgKiBAbWV0aG9kIGluZXJ0aWFcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXNzXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9seWdvbidzIG1vbWVudCBvZiBpbmVydGlhXG4gICAgICovXG4gICAgVmVydGljZXMuaW5lcnRpYSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBtYXNzKSB7XG4gICAgICAgIHZhciBudW1lcmF0b3IgPSAwLFxuICAgICAgICAgICAgZGVub21pbmF0b3IgPSAwLFxuICAgICAgICAgICAgdiA9IHZlcnRpY2VzLFxuICAgICAgICAgICAgY3Jvc3MsXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHBvbHlnb24ncyBtb21lbnQgb2YgaW5lcnRpYSwgdXNpbmcgc2Vjb25kIG1vbWVudCBvZiBhcmVhXG4gICAgICAgIC8vIGZyb20gZXF1YXRpb25zIGF0IGh0dHA6Ly93d3cucGh5c2ljc2ZvcnVtcy5jb20vc2hvd3RocmVhZC5waHA/dD0yNTI5M1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHYubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIGogPSAobiArIDEpICUgdi5sZW5ndGg7XG4gICAgICAgICAgICBjcm9zcyA9IE1hdGguYWJzKFZlY3Rvci5jcm9zcyh2W2pdLCB2W25dKSk7XG4gICAgICAgICAgICBudW1lcmF0b3IgKz0gY3Jvc3MgKiAoVmVjdG9yLmRvdCh2W2pdLCB2W2pdKSArIFZlY3Rvci5kb3QodltqXSwgdltuXSkgKyBWZWN0b3IuZG90KHZbbl0sIHZbbl0pKTtcbiAgICAgICAgICAgIGRlbm9taW5hdG9yICs9IGNyb3NzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChtYXNzIC8gNikgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIHRoZSBzZXQgb2YgdmVydGljZXMgaW4tcGxhY2UuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGFyXG4gICAgICovXG4gICAgVmVydGljZXMudHJhbnNsYXRlID0gZnVuY3Rpb24odmVydGljZXMsIHZlY3Rvciwgc2NhbGFyKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAoc2NhbGFyKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlc1tpXS54ICs9IHZlY3Rvci54ICogc2NhbGFyO1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzW2ldLnkgKz0gdmVjdG9yLnkgKiBzY2FsYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlc1tpXS54ICs9IHZlY3Rvci54O1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzW2ldLnkgKz0gdmVjdG9yLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHNldCBvZiB2ZXJ0aWNlcyBpbi1wbGFjZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMucm90YXRlID0gZnVuY3Rpb24odmVydGljZXMsIGFuZ2xlLCBwb2ludCkge1xuICAgICAgICBpZiAoYW5nbGUgPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmVydGljZSA9IHZlcnRpY2VzW2ldLFxuICAgICAgICAgICAgICAgIGR4ID0gdmVydGljZS54IC0gcG9pbnQueCxcbiAgICAgICAgICAgICAgICBkeSA9IHZlcnRpY2UueSAtIHBvaW50Lnk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB2ZXJ0aWNlLnggPSBwb2ludC54ICsgKGR4ICogY29zIC0gZHkgKiBzaW4pO1xuICAgICAgICAgICAgdmVydGljZS55ID0gcG9pbnQueSArIChkeCAqIHNpbiArIGR5ICogY29zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBwb2ludGAgaXMgaW5zaWRlIHRoZSBzZXQgb2YgYHZlcnRpY2VzYC5cbiAgICAgKiBAbWV0aG9kIGNvbnRhaW5zXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2ZXJ0aWNlcyBjb250YWlucyBwb2ludCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgVmVydGljZXMuY29udGFpbnMgPSBmdW5jdGlvbih2ZXJ0aWNlcywgcG9pbnQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZlcnRpY2UgPSB2ZXJ0aWNlc1tpXSxcbiAgICAgICAgICAgICAgICBuZXh0VmVydGljZSA9IHZlcnRpY2VzWyhpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGhdO1xuICAgICAgICAgICAgaWYgKChwb2ludC54IC0gdmVydGljZS54KSAqIChuZXh0VmVydGljZS55IC0gdmVydGljZS55KSArIChwb2ludC55IC0gdmVydGljZS55KSAqICh2ZXJ0aWNlLnggLSBuZXh0VmVydGljZS54KSA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2NhbGVzIHRoZSB2ZXJ0aWNlcyBmcm9tIGEgcG9pbnQgKGRlZmF1bHQgaXMgY2VudHJlKSBpbi1wbGFjZS5cbiAgICAgKiBAbWV0aG9kIHNjYWxlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqL1xuICAgIFZlcnRpY2VzLnNjYWxlID0gZnVuY3Rpb24odmVydGljZXMsIHNjYWxlWCwgc2NhbGVZLCBwb2ludCkge1xuICAgICAgICBpZiAoc2NhbGVYID09PSAxICYmIHNjYWxlWSA9PT0gMSlcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNlcztcblxuICAgICAgICBwb2ludCA9IHBvaW50IHx8IFZlcnRpY2VzLmNlbnRyZSh2ZXJ0aWNlcyk7XG5cbiAgICAgICAgdmFyIHZlcnRleCxcbiAgICAgICAgICAgIGRlbHRhO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgZGVsdGEgPSBWZWN0b3Iuc3ViKHZlcnRleCwgcG9pbnQpO1xuICAgICAgICAgICAgdmVydGljZXNbaV0ueCA9IHBvaW50LnggKyBkZWx0YS54ICogc2NhbGVYO1xuICAgICAgICAgICAgdmVydGljZXNbaV0ueSA9IHBvaW50LnkgKyBkZWx0YS55ICogc2NhbGVZO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGFtZmVycyBhIHNldCBvZiB2ZXJ0aWNlcyBieSBnaXZpbmcgdGhlbSByb3VuZGVkIGNvcm5lcnMsIHJldHVybnMgYSBuZXcgc2V0IG9mIHZlcnRpY2VzLlxuICAgICAqIFRoZSByYWRpdXMgcGFyYW1ldGVyIGlzIGEgc2luZ2xlIG51bWJlciBvciBhbiBhcnJheSB0byBzcGVjaWZ5IHRoZSByYWRpdXMgZm9yIGVhY2ggdmVydGV4LlxuICAgICAqIEBtZXRob2QgY2hhbWZlclxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gcmFkaXVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHF1YWxpdHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbGl0eU1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFsaXR5TWF4XG4gICAgICovXG4gICAgVmVydGljZXMuY2hhbWZlciA9IGZ1bmN0aW9uKHZlcnRpY2VzLCByYWRpdXMsIHF1YWxpdHksIHF1YWxpdHlNaW4sIHF1YWxpdHlNYXgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByYWRpdXMgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByYWRpdXMgPSBbcmFkaXVzXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhZGl1cyA9IHJhZGl1cyB8fCBbOF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBxdWFsaXR5IGRlZmF1bHRzIHRvIC0xLCB3aGljaCBpcyBhdXRvXG4gICAgICAgIHF1YWxpdHkgPSAodHlwZW9mIHF1YWxpdHkgIT09ICd1bmRlZmluZWQnKSA/IHF1YWxpdHkgOiAtMTtcbiAgICAgICAgcXVhbGl0eU1pbiA9IHF1YWxpdHlNaW4gfHwgMjtcbiAgICAgICAgcXVhbGl0eU1heCA9IHF1YWxpdHlNYXggfHwgMTQ7XG5cbiAgICAgICAgdmFyIG5ld1ZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByZXZWZXJ0ZXggPSB2ZXJ0aWNlc1tpIC0gMSA+PSAwID8gaSAtIDEgOiB2ZXJ0aWNlcy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXSxcbiAgICAgICAgICAgICAgICBuZXh0VmVydGV4ID0gdmVydGljZXNbKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aF0sXG4gICAgICAgICAgICAgICAgY3VycmVudFJhZGl1cyA9IHJhZGl1c1tpIDwgcmFkaXVzLmxlbmd0aCA/IGkgOiByYWRpdXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UmFkaXVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV3VmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcHJldk5vcm1hbCA9IFZlY3Rvci5ub3JtYWxpc2UoeyBcbiAgICAgICAgICAgICAgICB4OiB2ZXJ0ZXgueSAtIHByZXZWZXJ0ZXgueSwgXG4gICAgICAgICAgICAgICAgeTogcHJldlZlcnRleC54IC0gdmVydGV4LnhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgbmV4dE5vcm1hbCA9IFZlY3Rvci5ub3JtYWxpc2UoeyBcbiAgICAgICAgICAgICAgICB4OiBuZXh0VmVydGV4LnkgLSB2ZXJ0ZXgueSwgXG4gICAgICAgICAgICAgICAgeTogdmVydGV4LnggLSBuZXh0VmVydGV4LnhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgZGlhZ29uYWxSYWRpdXMgPSBNYXRoLnNxcnQoMiAqIE1hdGgucG93KGN1cnJlbnRSYWRpdXMsIDIpKSxcbiAgICAgICAgICAgICAgICByYWRpdXNWZWN0b3IgPSBWZWN0b3IubXVsdChDb21tb24uY2xvbmUocHJldk5vcm1hbCksIGN1cnJlbnRSYWRpdXMpLFxuICAgICAgICAgICAgICAgIG1pZE5vcm1hbCA9IFZlY3Rvci5ub3JtYWxpc2UoVmVjdG9yLm11bHQoVmVjdG9yLmFkZChwcmV2Tm9ybWFsLCBuZXh0Tm9ybWFsKSwgMC41KSksXG4gICAgICAgICAgICAgICAgc2NhbGVkVmVydGV4ID0gVmVjdG9yLnN1Yih2ZXJ0ZXgsIFZlY3Rvci5tdWx0KG1pZE5vcm1hbCwgZGlhZ29uYWxSYWRpdXMpKTtcblxuICAgICAgICAgICAgdmFyIHByZWNpc2lvbiA9IHF1YWxpdHk7XG5cbiAgICAgICAgICAgIGlmIChxdWFsaXR5ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHByZWNpc2lvblxuICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IE1hdGgucG93KGN1cnJlbnRSYWRpdXMsIDAuMzIpICogMS43NTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJlY2lzaW9uID0gQ29tbW9uLmNsYW1wKHByZWNpc2lvbiwgcXVhbGl0eU1pbiwgcXVhbGl0eU1heCk7XG5cbiAgICAgICAgICAgIC8vIHVzZSBhbiBldmVuIHZhbHVlIGZvciBwcmVjaXNpb24sIG1vcmUgbGlrZWx5IHRvIHJlZHVjZSBheGVzIGJ5IHVzaW5nIHN5bW1ldHJ5XG4gICAgICAgICAgICBpZiAocHJlY2lzaW9uICUgMiA9PT0gMSlcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24gKz0gMTtcblxuICAgICAgICAgICAgdmFyIGFscGhhID0gTWF0aC5hY29zKFZlY3Rvci5kb3QocHJldk5vcm1hbCwgbmV4dE5vcm1hbCkpLFxuICAgICAgICAgICAgICAgIHRoZXRhID0gYWxwaGEgLyBwcmVjaXNpb247XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcHJlY2lzaW9uOyBqKyspIHtcbiAgICAgICAgICAgICAgICBuZXdWZXJ0aWNlcy5wdXNoKFZlY3Rvci5hZGQoVmVjdG9yLnJvdGF0ZShyYWRpdXNWZWN0b3IsIHRoZXRhICogaiksIHNjYWxlZFZlcnRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0cyB0aGUgaW5wdXQgdmVydGljZXMgaW50byBjbG9ja3dpc2Ugb3JkZXIgaW4gcGxhY2UuXG4gICAgICogQG1ldGhvZCBjbG9ja3dpc2VTb3J0XG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jbG9ja3dpc2VTb3J0ID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGNlbnRyZSA9IFZlcnRpY2VzLm1lYW4odmVydGljZXMpO1xuXG4gICAgICAgIHZlcnRpY2VzLnNvcnQoZnVuY3Rpb24odmVydGV4QSwgdmVydGV4Qikge1xuICAgICAgICAgICAgcmV0dXJuIFZlY3Rvci5hbmdsZShjZW50cmUsIHZlcnRleEEpIC0gVmVjdG9yLmFuZ2xlKGNlbnRyZSwgdmVydGV4Qik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB2ZXJ0aWNlcyBmb3JtIGEgY29udmV4IHNoYXBlICh2ZXJ0aWNlcyBtdXN0IGJlIGluIGNsb2Nrd2lzZSBvcmRlcikuXG4gICAgICogQG1ldGhvZCBpc0NvbnZleFxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7Ym9vbH0gYHRydWVgIGlmIHRoZSBgdmVydGljZXNgIGFyZSBjb252ZXgsIGBmYWxzZWAgaWYgbm90IChvciBgbnVsbGAgaWYgbm90IGNvbXB1dGFibGUpLlxuICAgICAqL1xuICAgIFZlcnRpY2VzLmlzQ29udmV4ID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgLy8gaHR0cDovL3BhdWxib3Vya2UubmV0L2dlb21ldHJ5L3BvbHlnb25tZXNoL1xuICAgICAgICAvLyBDb3B5cmlnaHQgKGMpIFBhdWwgQm91cmtlICh1c2UgcGVybWl0dGVkKVxuXG4gICAgICAgIHZhciBmbGFnID0gMCxcbiAgICAgICAgICAgIG4gPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGssXG4gICAgICAgICAgICB6O1xuXG4gICAgICAgIGlmIChuIDwgMylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGogPSAoaSArIDEpICUgbjtcbiAgICAgICAgICAgIGsgPSAoaSArIDIpICUgbjtcbiAgICAgICAgICAgIHogPSAodmVydGljZXNbal0ueCAtIHZlcnRpY2VzW2ldLngpICogKHZlcnRpY2VzW2tdLnkgLSB2ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgIHogLT0gKHZlcnRpY2VzW2pdLnkgLSB2ZXJ0aWNlc1tpXS55KSAqICh2ZXJ0aWNlc1trXS54IC0gdmVydGljZXNbal0ueCk7XG5cbiAgICAgICAgICAgIGlmICh6IDwgMCkge1xuICAgICAgICAgICAgICAgIGZsYWcgfD0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeiA+IDApIHtcbiAgICAgICAgICAgICAgICBmbGFnIHw9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmbGFnID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZsYWcgIT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjb252ZXggaHVsbCBvZiB0aGUgaW5wdXQgdmVydGljZXMgYXMgYSBuZXcgYXJyYXkgb2YgcG9pbnRzLlxuICAgICAqIEBtZXRob2QgaHVsbFxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiBbdmVydGV4XSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIFZlcnRpY2VzLmh1bGwgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICAvLyBodHRwOi8vZ2VvbWFsZ29yaXRobXMuY29tL2ExMC1faHVsbC0xLmh0bWxcblxuICAgICAgICB2YXIgdXBwZXIgPSBbXSxcbiAgICAgICAgICAgIGxvd2VyID0gW10sIFxuICAgICAgICAgICAgdmVydGV4LFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyBzb3J0IHZlcnRpY2VzIG9uIHgtYXhpcyAoeS1heGlzIGZvciB0aWVzKVxuICAgICAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLnNsaWNlKDApO1xuICAgICAgICB2ZXJ0aWNlcy5zb3J0KGZ1bmN0aW9uKHZlcnRleEEsIHZlcnRleEIpIHtcbiAgICAgICAgICAgIHZhciBkeCA9IHZlcnRleEEueCAtIHZlcnRleEIueDtcbiAgICAgICAgICAgIHJldHVybiBkeCAhPT0gMCA/IGR4IDogdmVydGV4QS55IC0gdmVydGV4Qi55O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBidWlsZCBsb3dlciBodWxsXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG5cbiAgICAgICAgICAgIHdoaWxlIChsb3dlci5sZW5ndGggPj0gMiBcbiAgICAgICAgICAgICAgICAgICAmJiBWZWN0b3IuY3Jvc3MzKGxvd2VyW2xvd2VyLmxlbmd0aCAtIDJdLCBsb3dlcltsb3dlci5sZW5ndGggLSAxXSwgdmVydGV4KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgbG93ZXIucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvd2VyLnB1c2godmVydGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJ1aWxkIHVwcGVyIGh1bGxcbiAgICAgICAgZm9yIChpID0gdmVydGljZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuXG4gICAgICAgICAgICB3aGlsZSAodXBwZXIubGVuZ3RoID49IDIgXG4gICAgICAgICAgICAgICAgICAgJiYgVmVjdG9yLmNyb3NzMyh1cHBlclt1cHBlci5sZW5ndGggLSAyXSwgdXBwZXJbdXBwZXIubGVuZ3RoIC0gMV0sIHZlcnRleCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHVwcGVyLnBvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cHBlci5wdXNoKHZlcnRleCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25jYXRlbmF0aW9uIG9mIHRoZSBsb3dlciBhbmQgdXBwZXIgaHVsbHMgZ2l2ZXMgdGhlIGNvbnZleCBodWxsXG4gICAgICAgIC8vIG9taXQgbGFzdCBwb2ludHMgYmVjYXVzZSB0aGV5IGFyZSByZXBlYXRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBvdGhlciBsaXN0XG4gICAgICAgIHVwcGVyLnBvcCgpO1xuICAgICAgICBsb3dlci5wb3AoKTtcblxuICAgICAgICByZXR1cm4gdXBwZXIuY29uY2F0KGxvd2VyKTtcbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuLi9nZW9tZXRyeS9WZWN0b3JcIjoyOH1dLDMwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBNYXR0ZXIgPSBtb2R1bGUuZXhwb3J0cyA9IF9kZXJlcV8oJy4uL2NvcmUvTWF0dGVyJyk7XG5cbk1hdHRlci5Cb2R5ID0gX2RlcmVxXygnLi4vYm9keS9Cb2R5Jyk7XG5NYXR0ZXIuQ29tcG9zaXRlID0gX2RlcmVxXygnLi4vYm9keS9Db21wb3NpdGUnKTtcbk1hdHRlci5Xb3JsZCA9IF9kZXJlcV8oJy4uL2JvZHkvV29ybGQnKTtcblxuTWF0dGVyLkNvbnRhY3QgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vQ29udGFjdCcpO1xuTWF0dGVyLkRldGVjdG9yID0gX2RlcmVxXygnLi4vY29sbGlzaW9uL0RldGVjdG9yJyk7XG5NYXR0ZXIuR3JpZCA9IF9kZXJlcV8oJy4uL2NvbGxpc2lvbi9HcmlkJyk7XG5NYXR0ZXIuUGFpcnMgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vUGFpcnMnKTtcbk1hdHRlci5QYWlyID0gX2RlcmVxXygnLi4vY29sbGlzaW9uL1BhaXInKTtcbk1hdHRlci5RdWVyeSA9IF9kZXJlcV8oJy4uL2NvbGxpc2lvbi9RdWVyeScpO1xuTWF0dGVyLlJlc29sdmVyID0gX2RlcmVxXygnLi4vY29sbGlzaW9uL1Jlc29sdmVyJyk7XG5NYXR0ZXIuU0FUID0gX2RlcmVxXygnLi4vY29sbGlzaW9uL1NBVCcpO1xuXG5NYXR0ZXIuQ29uc3RyYWludCA9IF9kZXJlcV8oJy4uL2NvbnN0cmFpbnQvQ29uc3RyYWludCcpO1xuTWF0dGVyLk1vdXNlQ29uc3RyYWludCA9IF9kZXJlcV8oJy4uL2NvbnN0cmFpbnQvTW91c2VDb25zdHJhaW50Jyk7XG5cbk1hdHRlci5Db21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xuTWF0dGVyLkVuZ2luZSA9IF9kZXJlcV8oJy4uL2NvcmUvRW5naW5lJyk7XG5NYXR0ZXIuRXZlbnRzID0gX2RlcmVxXygnLi4vY29yZS9FdmVudHMnKTtcbk1hdHRlci5Nb3VzZSA9IF9kZXJlcV8oJy4uL2NvcmUvTW91c2UnKTtcbk1hdHRlci5SdW5uZXIgPSBfZGVyZXFfKCcuLi9jb3JlL1J1bm5lcicpO1xuTWF0dGVyLlNsZWVwaW5nID0gX2RlcmVxXygnLi4vY29yZS9TbGVlcGluZycpO1xuTWF0dGVyLlBsdWdpbiA9IF9kZXJlcV8oJy4uL2NvcmUvUGx1Z2luJyk7XG5cblxuTWF0dGVyLkJvZGllcyA9IF9kZXJlcV8oJy4uL2ZhY3RvcnkvQm9kaWVzJyk7XG5NYXR0ZXIuQ29tcG9zaXRlcyA9IF9kZXJlcV8oJy4uL2ZhY3RvcnkvQ29tcG9zaXRlcycpO1xuXG5NYXR0ZXIuQXhlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0F4ZXMnKTtcbk1hdHRlci5Cb3VuZHMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9Cb3VuZHMnKTtcbk1hdHRlci5TdmcgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9TdmcnKTtcbk1hdHRlci5WZWN0b3IgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZWN0b3InKTtcbk1hdHRlci5WZXJ0aWNlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlcnRpY2VzJyk7XG5cbk1hdHRlci5SZW5kZXIgPSBfZGVyZXFfKCcuLi9yZW5kZXIvUmVuZGVyJyk7XG5NYXR0ZXIuUmVuZGVyUGl4aSA9IF9kZXJlcV8oJy4uL3JlbmRlci9SZW5kZXJQaXhpJyk7XG5cbi8vIGFsaWFzZXNcblxuTWF0dGVyLldvcmxkLmFkZCA9IE1hdHRlci5Db21wb3NpdGUuYWRkO1xuTWF0dGVyLldvcmxkLnJlbW92ZSA9IE1hdHRlci5Db21wb3NpdGUucmVtb3ZlO1xuTWF0dGVyLldvcmxkLmFkZENvbXBvc2l0ZSA9IE1hdHRlci5Db21wb3NpdGUuYWRkQ29tcG9zaXRlO1xuTWF0dGVyLldvcmxkLmFkZEJvZHkgPSBNYXR0ZXIuQ29tcG9zaXRlLmFkZEJvZHk7XG5NYXR0ZXIuV29ybGQuYWRkQ29uc3RyYWludCA9IE1hdHRlci5Db21wb3NpdGUuYWRkQ29uc3RyYWludDtcbk1hdHRlci5Xb3JsZC5jbGVhciA9IE1hdHRlci5Db21wb3NpdGUuY2xlYXI7XG5NYXR0ZXIuRW5naW5lLnJ1biA9IE1hdHRlci5SdW5uZXIucnVuO1xuXG59LHtcIi4uL2JvZHkvQm9keVwiOjEsXCIuLi9ib2R5L0NvbXBvc2l0ZVwiOjIsXCIuLi9ib2R5L1dvcmxkXCI6MyxcIi4uL2NvbGxpc2lvbi9Db250YWN0XCI6NCxcIi4uL2NvbGxpc2lvbi9EZXRlY3RvclwiOjUsXCIuLi9jb2xsaXNpb24vR3JpZFwiOjYsXCIuLi9jb2xsaXNpb24vUGFpclwiOjcsXCIuLi9jb2xsaXNpb24vUGFpcnNcIjo4LFwiLi4vY29sbGlzaW9uL1F1ZXJ5XCI6OSxcIi4uL2NvbGxpc2lvbi9SZXNvbHZlclwiOjEwLFwiLi4vY29sbGlzaW9uL1NBVFwiOjExLFwiLi4vY29uc3RyYWludC9Db25zdHJhaW50XCI6MTIsXCIuLi9jb25zdHJhaW50L01vdXNlQ29uc3RyYWludFwiOjEzLFwiLi4vY29yZS9Db21tb25cIjoxNCxcIi4uL2NvcmUvRW5naW5lXCI6MTUsXCIuLi9jb3JlL0V2ZW50c1wiOjE2LFwiLi4vY29yZS9NYXR0ZXJcIjoxNyxcIi4uL2NvcmUvTWV0cmljc1wiOjE4LFwiLi4vY29yZS9Nb3VzZVwiOjE5LFwiLi4vY29yZS9QbHVnaW5cIjoyMCxcIi4uL2NvcmUvUnVubmVyXCI6MjEsXCIuLi9jb3JlL1NsZWVwaW5nXCI6MjIsXCIuLi9mYWN0b3J5L0JvZGllc1wiOjIzLFwiLi4vZmFjdG9yeS9Db21wb3NpdGVzXCI6MjQsXCIuLi9nZW9tZXRyeS9BeGVzXCI6MjUsXCIuLi9nZW9tZXRyeS9Cb3VuZHNcIjoyNixcIi4uL2dlb21ldHJ5L1N2Z1wiOjI3LFwiLi4vZ2VvbWV0cnkvVmVjdG9yXCI6MjgsXCIuLi9nZW9tZXRyeS9WZXJ0aWNlc1wiOjI5LFwiLi4vcmVuZGVyL1JlbmRlclwiOjMxLFwiLi4vcmVuZGVyL1JlbmRlclBpeGlcIjozMn1dLDMxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5SZW5kZXJgIG1vZHVsZSBpcyBhIHNpbXBsZSBIVE1MNSBjYW52YXMgYmFzZWQgcmVuZGVyZXIgZm9yIHZpc3VhbGlzaW5nIGluc3RhbmNlcyBvZiBgTWF0dGVyLkVuZ2luZWAuXG4qIEl0IGlzIGludGVuZGVkIGZvciBkZXZlbG9wbWVudCBhbmQgZGVidWdnaW5nIHB1cnBvc2VzLCBidXQgbWF5IGFsc28gYmUgc3VpdGFibGUgZm9yIHNpbXBsZSBnYW1lcy5cbiogSXQgaW5jbHVkZXMgYSBudW1iZXIgb2YgZHJhd2luZyBvcHRpb25zIGluY2x1ZGluZyB3aXJlZnJhbWUsIHZlY3RvciB3aXRoIHN1cHBvcnQgZm9yIHNwcml0ZXMgYW5kIHZpZXdwb3J0cy5cbipcbiogQGNsYXNzIFJlbmRlclxuKi9cblxudmFyIFJlbmRlciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcjtcblxudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG52YXIgQ29tcG9zaXRlID0gX2RlcmVxXygnLi4vYm9keS9Db21wb3NpdGUnKTtcbnZhciBCb3VuZHMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9Cb3VuZHMnKTtcbnZhciBFdmVudHMgPSBfZGVyZXFfKCcuLi9jb3JlL0V2ZW50cycpO1xudmFyIEdyaWQgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vR3JpZCcpO1xudmFyIFZlY3RvciA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlY3RvcicpO1xudmFyIE1vdXNlID0gX2RlcmVxXygnLi4vY29yZS9Nb3VzZScpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZnVuY3Rpb24oY2FsbGJhY2speyB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soQ29tbW9uLm5vdygpKTsgfSwgMTAwMCAvIDYwKTsgfTtcblxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJlbmRlcmVyLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7cmVuZGVyfSBBIG5ldyByZW5kZXJlclxuICAgICAqL1xuICAgIFJlbmRlci5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFJlbmRlcixcbiAgICAgICAgICAgIGVuZ2luZTogbnVsbCxcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBjYW52YXM6IG51bGwsXG4gICAgICAgICAgICBtb3VzZTogbnVsbCxcbiAgICAgICAgICAgIGZyYW1lUmVxdWVzdElkOiBudWxsLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgcGl4ZWxSYXRpbzogMSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzE4MTgxZCcsXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lQmFja2dyb3VuZDogJyMwZjBmMTMnLFxuICAgICAgICAgICAgICAgIGhhc0JvdW5kczogISFvcHRpb25zLmJvdW5kcyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpcmVmcmFtZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd1NsZWVwaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dEZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0Jyb2FkcGhhc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dCb3VuZHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dWZWxvY2l0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0NvbGxpc2lvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dTZXBhcmF0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0F4ZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dQb3NpdGlvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0lkczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1NoYWRvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dWZXJ0ZXhOdW1iZXJzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Q29udmV4SHVsbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dJbnRlcm5hbEVkZ2VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93TW91c2VQb3NpdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVuZGVyID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHJlbmRlci5jYW52YXMpIHtcbiAgICAgICAgICAgIHJlbmRlci5jYW52YXMud2lkdGggPSByZW5kZXIub3B0aW9ucy53aWR0aCB8fCByZW5kZXIuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgcmVuZGVyLmNhbnZhcy5oZWlnaHQgPSByZW5kZXIub3B0aW9ucy5oZWlnaHQgfHwgcmVuZGVyLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIubW91c2UgPSBvcHRpb25zLm1vdXNlO1xuICAgICAgICByZW5kZXIuZW5naW5lID0gb3B0aW9ucy5lbmdpbmU7XG4gICAgICAgIHJlbmRlci5jYW52YXMgPSByZW5kZXIuY2FudmFzIHx8IF9jcmVhdGVDYW52YXMocmVuZGVyLm9wdGlvbnMud2lkdGgsIHJlbmRlci5vcHRpb25zLmhlaWdodCk7XG4gICAgICAgIHJlbmRlci5jb250ZXh0ID0gcmVuZGVyLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICByZW5kZXIudGV4dHVyZXMgPSB7fTtcblxuICAgICAgICByZW5kZXIuYm91bmRzID0gcmVuZGVyLmJvdW5kcyB8fCB7XG4gICAgICAgICAgICBtaW46IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgICAgICB4OiByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIHk6IHJlbmRlci5jYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gIT09IDEpIHtcbiAgICAgICAgICAgIFJlbmRlci5zZXRQaXhlbFJhdGlvKHJlbmRlciwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tbW9uLmlzRWxlbWVudChyZW5kZXIuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJlbmRlci5lbGVtZW50LmFwcGVuZENoaWxkKHJlbmRlci5jYW52YXMpO1xuICAgICAgICB9IGVsc2UgaWYgKCFyZW5kZXIuY2FudmFzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIENvbW1vbi5sb2coJ1JlbmRlci5jcmVhdGU6IG9wdGlvbnMuZWxlbWVudCB3YXMgdW5kZWZpbmVkLCByZW5kZXIuY2FudmFzIHdhcyBjcmVhdGVkIGJ1dCBub3QgYXBwZW5kZWQnLCAnd2FybicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udGludW91c2x5IHVwZGF0ZXMgdGhlIHJlbmRlciBjYW52YXMgb24gdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGV2ZW50LlxuICAgICAqIEBtZXRob2QgcnVuXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5ydW4gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgKGZ1bmN0aW9uIGxvb3AodGltZSl7XG4gICAgICAgICAgICByZW5kZXIuZnJhbWVSZXF1ZXN0SWQgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgUmVuZGVyLndvcmxkKHJlbmRlcik7XG4gICAgICAgIH0pKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVuZHMgZXhlY3V0aW9uIG9mIGBSZW5kZXIucnVuYCBvbiB0aGUgZ2l2ZW4gYHJlbmRlcmAsIGJ5IGNhbmNlbGluZyB0aGUgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QgZXZlbnQgbG9vcC5cbiAgICAgKiBAbWV0aG9kIHN0b3BcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLnN0b3AgPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lKHJlbmRlci5mcmFtZVJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBpeGVsIHJhdGlvIG9mIHRoZSByZW5kZXJlciBhbmQgdXBkYXRlcyB0aGUgY2FudmFzLlxuICAgICAqIFRvIGF1dG9tYXRpY2FsbHkgZGV0ZWN0IHRoZSBjb3JyZWN0IHJhdGlvLCBwYXNzIHRoZSBzdHJpbmcgYCdhdXRvJ2AgZm9yIGBwaXhlbFJhdGlvYC5cbiAgICAgKiBAbWV0aG9kIHNldFBpeGVsUmF0aW9cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW9cbiAgICAgKi9cbiAgICBSZW5kZXIuc2V0UGl4ZWxSYXRpbyA9IGZ1bmN0aW9uKHJlbmRlciwgcGl4ZWxSYXRpbykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgY2FudmFzID0gcmVuZGVyLmNhbnZhcztcblxuICAgICAgICBpZiAocGl4ZWxSYXRpbyA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICBwaXhlbFJhdGlvID0gX2dldFBpeGVsUmF0aW8oY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMucGl4ZWxSYXRpbyA9IHBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGl4ZWwtcmF0aW8nLCBwaXhlbFJhdGlvKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gb3B0aW9ucy53aWR0aCAqIHBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCAqIHBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuICAgICAgICByZW5kZXIuY29udGV4dC5zY2FsZShwaXhlbFJhdGlvLCBwaXhlbFJhdGlvKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUG9zaXRpb25zIGFuZCBzaXplcyB0aGUgdmlld3BvcnQgYXJvdW5kIHRoZSBnaXZlbiBvYmplY3QgYm91bmRzLlxuICAgICAqIE9iamVjdHMgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gICAgICogLSBgb2JqZWN0LmJvdW5kc2BcbiAgICAgKiAtIGBvYmplY3QucG9zaXRpb25gXG4gICAgICogLSBgb2JqZWN0Lm1pbmAgYW5kIGBvYmplY3QubWF4YFxuICAgICAqIC0gYG9iamVjdC54YCBhbmQgYG9iamVjdC55YFxuICAgICAqIEBtZXRob2QgbG9va0F0XG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IG9iamVjdHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW3BhZGRpbmddXG4gICAgICogQHBhcmFtIHtib29sfSBbY2VudGVyPXRydWVdXG4gICAgICovXG4gICAgUmVuZGVyLmxvb2tBdCA9IGZ1bmN0aW9uKHJlbmRlciwgb2JqZWN0cywgcGFkZGluZywgY2VudGVyKSB7XG4gICAgICAgIGNlbnRlciA9IHR5cGVvZiBjZW50ZXIgIT09ICd1bmRlZmluZWQnID8gY2VudGVyIDogdHJ1ZTtcbiAgICAgICAgb2JqZWN0cyA9IENvbW1vbi5pc0FycmF5KG9iamVjdHMpID8gb2JqZWN0cyA6IFtvYmplY3RzXTtcbiAgICAgICAgcGFkZGluZyA9IHBhZGRpbmcgfHwge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmaW5kIGJvdW5kcyBvZiBhbGwgb2JqZWN0c1xuICAgICAgICB2YXIgYm91bmRzID0ge1xuICAgICAgICAgICAgbWluOiB7IHg6IEluZmluaXR5LCB5OiBJbmZpbml0eSB9LFxuICAgICAgICAgICAgbWF4OiB7IHg6IC1JbmZpbml0eSwgeTogLUluZmluaXR5IH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBvYmplY3RzW2ldLFxuICAgICAgICAgICAgICAgIG1pbiA9IG9iamVjdC5ib3VuZHMgPyBvYmplY3QuYm91bmRzLm1pbiA6IChvYmplY3QubWluIHx8IG9iamVjdC5wb3NpdGlvbiB8fCBvYmplY3QpLFxuICAgICAgICAgICAgICAgIG1heCA9IG9iamVjdC5ib3VuZHMgPyBvYmplY3QuYm91bmRzLm1heCA6IChvYmplY3QubWF4IHx8IG9iamVjdC5wb3NpdGlvbiB8fCBvYmplY3QpO1xuXG4gICAgICAgICAgICBpZiAobWluICYmIG1heCkge1xuICAgICAgICAgICAgICAgIGlmIChtaW4ueCA8IGJvdW5kcy5taW4ueClcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1pbi54ID0gbWluLng7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4LnggPiBib3VuZHMubWF4LngpXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueCA9IG1heC54O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pbi55IDwgYm91bmRzLm1pbi55KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWluLnkgPSBtaW4ueTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXgueSA+IGJvdW5kcy5tYXgueSlcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1heC55ID0gbWF4Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kIHJhdGlvc1xuICAgICAgICB2YXIgd2lkdGggPSAoYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54KSArIDIgKiBwYWRkaW5nLngsXG4gICAgICAgICAgICBoZWlnaHQgPSAoYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55KSArIDIgKiBwYWRkaW5nLnksXG4gICAgICAgICAgICB2aWV3SGVpZ2h0ID0gcmVuZGVyLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICB2aWV3V2lkdGggPSByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgb3V0ZXJSYXRpbyA9IHZpZXdXaWR0aCAvIHZpZXdIZWlnaHQsXG4gICAgICAgICAgICBpbm5lclJhdGlvID0gd2lkdGggLyBoZWlnaHQsXG4gICAgICAgICAgICBzY2FsZVggPSAxLFxuICAgICAgICAgICAgc2NhbGVZID0gMTtcblxuICAgICAgICAvLyBmaW5kIHNjYWxlIGZhY3RvclxuICAgICAgICBpZiAoaW5uZXJSYXRpbyA+IG91dGVyUmF0aW8pIHtcbiAgICAgICAgICAgIHNjYWxlWSA9IGlubmVyUmF0aW8gLyBvdXRlclJhdGlvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NhbGVYID0gb3V0ZXJSYXRpbyAvIGlubmVyUmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbmFibGUgYm91bmRzXG4gICAgICAgIHJlbmRlci5vcHRpb25zLmhhc0JvdW5kcyA9IHRydWU7XG5cbiAgICAgICAgLy8gcG9zaXRpb24gYW5kIHNpemVcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueCA9IGJvdW5kcy5taW4ueDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueCA9IGJvdW5kcy5taW4ueCArIHdpZHRoICogc2NhbGVYO1xuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55ID0gYm91bmRzLm1pbi55O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC55ID0gYm91bmRzLm1pbi55ICsgaGVpZ2h0ICogc2NhbGVZO1xuXG4gICAgICAgIC8vIGNlbnRlclxuICAgICAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1pbi54ICs9IHdpZHRoICogMC41IC0gKHdpZHRoICogc2NhbGVYKSAqIDAuNTtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnggKz0gd2lkdGggKiAwLjUgLSAod2lkdGggKiBzY2FsZVgpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueSArPSBoZWlnaHQgKiAwLjUgLSAoaGVpZ2h0ICogc2NhbGVZKSAqIDAuNTtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgKz0gaGVpZ2h0ICogMC41IC0gKGhlaWdodCAqIHNjYWxlWSkgKiAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYWRkaW5nXG4gICAgICAgIHJlbmRlci5ib3VuZHMubWluLnggLT0gcGFkZGluZy54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC54IC09IHBhZGRpbmcueDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueSAtPSBwYWRkaW5nLnk7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgLT0gcGFkZGluZy55O1xuXG4gICAgICAgIC8vIHVwZGF0ZSBtb3VzZVxuICAgICAgICBpZiAocmVuZGVyLm1vdXNlKSB7XG4gICAgICAgICAgICBNb3VzZS5zZXRTY2FsZShyZW5kZXIubW91c2UsIHtcbiAgICAgICAgICAgICAgICB4OiAocmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngpIC8gcmVuZGVyLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICB5OiAocmVuZGVyLmJvdW5kcy5tYXgueSAtIHJlbmRlci5ib3VuZHMubWluLnkpIC8gcmVuZGVyLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBNb3VzZS5zZXRPZmZzZXQocmVuZGVyLm1vdXNlLCByZW5kZXIuYm91bmRzLm1pbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB2aWV3cG9ydCB0cmFuc2Zvcm1zIGJhc2VkIG9uIGByZW5kZXIuYm91bmRzYCB0byBhIHJlbmRlciBjb250ZXh0LlxuICAgICAqIEBtZXRob2Qgc3RhcnRWaWV3VHJhbnNmb3JtXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5zdGFydFZpZXdUcmFuc2Zvcm0gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgdmFyIGJvdW5kc1dpZHRoID0gcmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngsXG4gICAgICAgICAgICBib3VuZHNIZWlnaHQgPSByZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgIGJvdW5kc1NjYWxlWCA9IGJvdW5kc1dpZHRoIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICBib3VuZHNTY2FsZVkgPSBib3VuZHNIZWlnaHQgLyByZW5kZXIub3B0aW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgcmVuZGVyLmNvbnRleHQuc2NhbGUoMSAvIGJvdW5kc1NjYWxlWCwgMSAvIGJvdW5kc1NjYWxlWSk7XG4gICAgICAgIHJlbmRlci5jb250ZXh0LnRyYW5zbGF0ZSgtcmVuZGVyLmJvdW5kcy5taW4ueCwgLXJlbmRlci5ib3VuZHMubWluLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgYWxsIHRyYW5zZm9ybXMgb24gdGhlIHJlbmRlciBjb250ZXh0LlxuICAgICAqIEBtZXRob2QgZW5kVmlld1RyYW5zZm9ybVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuZW5kVmlld1RyYW5zZm9ybSA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICByZW5kZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0ocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdpdmVuIGBlbmdpbmVgJ3MgYE1hdHRlci5Xb3JsZGAgb2JqZWN0LlxuICAgICAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBhbGwgcmVuZGVyaW5nIGFuZCBzaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHNjZW5lIGNoYW5nZXMuXG4gICAgICogQG1ldGhvZCB3b3JsZFxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIud29ybGQgPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIGNhbnZhcyA9IHJlbmRlci5jYW52YXMsXG4gICAgICAgICAgICBjb250ZXh0ID0gcmVuZGVyLmNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKSxcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSBvcHRpb25zLndpcmVmcmFtZXMgPyBvcHRpb25zLndpcmVmcmFtZUJhY2tncm91bmQgOiBvcHRpb25zLmJhY2tncm91bmQsXG4gICAgICAgICAgICBib2RpZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gW10sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZW5naW5lLnRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihyZW5kZXIsICdiZWZvcmVSZW5kZXInLCBldmVudCk7XG5cbiAgICAgICAgLy8gYXBwbHkgYmFja2dyb3VuZCBpZiBpdCBoYXMgY2hhbmdlZFxuICAgICAgICBpZiAocmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kICE9PSBiYWNrZ3JvdW5kKVxuICAgICAgICAgICAgX2FwcGx5QmFja2dyb3VuZChyZW5kZXIsIGJhY2tncm91bmQpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSBjYW52YXMgd2l0aCBhIHRyYW5zcGFyZW50IGZpbGwsIHRvIGFsbG93IHRoZSBjYW52YXMgYmFja2dyb3VuZCB0byBzaG93XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgICAgICAvLyBoYW5kbGUgYm91bmRzXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcykge1xuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBib2RpZXMgdGhhdCBhcmUgbm90IGluIHZpZXdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxCb2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGFsbEJvZGllc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoQm91bmRzLm92ZXJsYXBzKGJvZHkuYm91bmRzLCByZW5kZXIuYm91bmRzKSlcbiAgICAgICAgICAgICAgICAgICAgYm9kaWVzLnB1c2goYm9keSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgY29uc3RyYWludHMgdGhhdCBhcmUgbm90IGluIHZpZXdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxDb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gYWxsQ29uc3RyYWludHNbaV0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEFXb3JsZCA9IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEJXb3JsZCA9IGNvbnN0cmFpbnQucG9pbnRCO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvZHlBKSBwb2ludEFXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRBKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9keUIpIHBvaW50QldvcmxkID0gVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwb2ludEFXb3JsZCB8fCAhcG9pbnRCV29ybGQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhyZW5kZXIuYm91bmRzLCBwb2ludEFXb3JsZCkgfHwgQm91bmRzLmNvbnRhaW5zKHJlbmRlci5ib3VuZHMsIHBvaW50QldvcmxkKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtIHRoZSB2aWV3XG4gICAgICAgICAgICBSZW5kZXIuc3RhcnRWaWV3VHJhbnNmb3JtKHJlbmRlcik7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBtb3VzZVxuICAgICAgICAgICAgaWYgKHJlbmRlci5tb3VzZSkge1xuICAgICAgICAgICAgICAgIE1vdXNlLnNldFNjYWxlKHJlbmRlci5tb3VzZSwge1xuICAgICAgICAgICAgICAgICAgICB4OiAocmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngpIC8gcmVuZGVyLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgeTogKHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55KSAvIHJlbmRlci5jYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBNb3VzZS5zZXRPZmZzZXQocmVuZGVyLm1vdXNlLCByZW5kZXIuYm91bmRzLm1pbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJhaW50cyA9IGFsbENvbnN0cmFpbnRzO1xuICAgICAgICAgICAgYm9kaWVzID0gYWxsQm9kaWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLndpcmVmcmFtZXMgfHwgKGVuZ2luZS5lbmFibGVTbGVlcGluZyAmJiBvcHRpb25zLnNob3dTbGVlcGluZykpIHtcbiAgICAgICAgICAgIC8vIGZ1bGx5IGZlYXR1cmVkIHJlbmRlcmluZyBvZiBib2RpZXNcbiAgICAgICAgICAgIFJlbmRlci5ib2RpZXMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0NvbnZleEh1bGxzKVxuICAgICAgICAgICAgICAgIFJlbmRlci5ib2R5Q29udmV4SHVsbHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAvLyBvcHRpbWlzZWQgbWV0aG9kIGZvciB3aXJlZnJhbWVzIG9ubHlcbiAgICAgICAgICAgIFJlbmRlci5ib2R5V2lyZWZyYW1lcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93Qm91bmRzKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlCb3VuZHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dBeGVzIHx8IG9wdGlvbnMuc2hvd0FuZ2xlSW5kaWNhdG9yKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlBeGVzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93UG9zaXRpb25zKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlQb3NpdGlvbnMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dWZWxvY2l0eSlcbiAgICAgICAgICAgIFJlbmRlci5ib2R5VmVsb2NpdHkocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dJZHMpXG4gICAgICAgICAgICBSZW5kZXIuYm9keUlkcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1NlcGFyYXRpb25zKVxuICAgICAgICAgICAgUmVuZGVyLnNlcGFyYXRpb25zKHJlbmRlciwgZW5naW5lLnBhaXJzLmxpc3QsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dDb2xsaXNpb25zKVxuICAgICAgICAgICAgUmVuZGVyLmNvbGxpc2lvbnMocmVuZGVyLCBlbmdpbmUucGFpcnMubGlzdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1ZlcnRleE51bWJlcnMpXG4gICAgICAgICAgICBSZW5kZXIudmVydGV4TnVtYmVycyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd01vdXNlUG9zaXRpb24pXG4gICAgICAgICAgICBSZW5kZXIubW91c2VQb3NpdGlvbihyZW5kZXIsIHJlbmRlci5tb3VzZSwgY29udGV4dCk7XG5cbiAgICAgICAgUmVuZGVyLmNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93QnJvYWRwaGFzZSAmJiBlbmdpbmUuYnJvYWRwaGFzZS5jb250cm9sbGVyID09PSBHcmlkKVxuICAgICAgICAgICAgUmVuZGVyLmdyaWQocmVuZGVyLCBlbmdpbmUuYnJvYWRwaGFzZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0RlYnVnKVxuICAgICAgICAgICAgUmVuZGVyLmRlYnVnKHJlbmRlciwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKSB7XG4gICAgICAgICAgICAvLyByZXZlcnQgdmlldyB0cmFuc2Zvcm1zXG4gICAgICAgICAgICBSZW5kZXIuZW5kVmlld1RyYW5zZm9ybShyZW5kZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocmVuZGVyLCAnYWZ0ZXJSZW5kZXInLCBldmVudCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGRlYnVnXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5kZWJ1ZyA9IGZ1bmN0aW9uKHJlbmRlciwgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBtZXRyaWNzID0gZW5naW5lLm1ldHJpY3MsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIHNwYWNlID0gXCIgICAgXCI7XG5cbiAgICAgICAgaWYgKGVuZ2luZS50aW1pbmcudGltZXN0YW1wIC0gKHJlbmRlci5kZWJ1Z1RpbWVzdGFtcCB8fCAwKSA+PSA1MDApIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gXCJcIjtcblxuICAgICAgICAgICAgaWYgKG1ldHJpY3MudGltaW5nKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBcImZwczogXCIgKyBNYXRoLnJvdW5kKG1ldHJpY3MudGltaW5nLmZwcykgKyBzcGFjZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICByZW5kZXIuZGVidWdTdHJpbmcgPSB0ZXh0O1xuICAgICAgICAgICAgcmVuZGVyLmRlYnVnVGltZXN0YW1wID0gZW5naW5lLnRpbWluZy50aW1lc3RhbXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVuZGVyLmRlYnVnU3RyaW5nKSB7XG4gICAgICAgICAgICBjLmZvbnQgPSBcIjEycHggQXJpYWxcIjtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC41KSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzcGxpdCA9IHJlbmRlci5kZWJ1Z1N0cmluZy5zcGxpdCgnXFxuJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjLmZpbGxUZXh0KHNwbGl0W2ldLCA1MCwgNTAgKyBpICogMTgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGNvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50W119IGNvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmNvbnN0cmFpbnRzID0gZnVuY3Rpb24oY29uc3RyYWludHMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uc3RyYWludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gY29uc3RyYWludHNbaV07XG5cbiAgICAgICAgICAgIGlmICghY29uc3RyYWludC5yZW5kZXIudmlzaWJsZSB8fCAhY29uc3RyYWludC5wb2ludEEgfHwgIWNvbnN0cmFpbnQucG9pbnRCKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgYm9keUEgPSBjb25zdHJhaW50LmJvZHlBLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gY29uc3RyYWludC5ib2R5QixcbiAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICBlbmQ7XG5cbiAgICAgICAgICAgIGlmIChib2R5QSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gVmVjdG9yLmFkZChib2R5QS5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IGNvbnN0cmFpbnQucG9pbnRBO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIudHlwZSA9PT0gJ3BpbicpIHtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMuYXJjKHN0YXJ0LngsIHN0YXJ0LnksIDMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9keUIpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGNvbnN0cmFpbnQucG9pbnRCO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIudHlwZSA9PT0gJ3NwcmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gVmVjdG9yLnN1YihlbmQsIHN0YXJ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbCA9IFZlY3Rvci5wZXJwKFZlY3Rvci5ub3JtYWxpc2UoZGVsdGEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvaWxzID0gTWF0aC5jZWlsKENvbW1vbi5jbGFtcChjb25zdHJhaW50Lmxlbmd0aCAvIDUsIDEyLCAyMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgY29pbHM7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gaiAlIDIgPT09IDAgPyAxIDogLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0LnggKyBkZWx0YS54ICogKGogLyBjb2lscykgKyBub3JtYWwueCAqIG9mZnNldCAqIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQueSArIGRlbHRhLnkgKiAoaiAvIGNvaWxzKSArIG5vcm1hbC55ICogb2Zmc2V0ICogNFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMubGluZVRvKGVuZC54LCBlbmQueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci5saW5lV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBjLmxpbmVXaWR0aCA9IGNvbnN0cmFpbnQucmVuZGVyLmxpbmVXaWR0aDtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gY29uc3RyYWludC5yZW5kZXIuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLmFuY2hvcnMpIHtcbiAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9IGNvbnN0cmFpbnQucmVuZGVyLnN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5hcmMoc3RhcnQueCwgc3RhcnQueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMuYXJjKGVuZC54LCBlbmQueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keVNoYWRvd3NcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5U2hhZG93cyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGlmIChib2R5LmNpcmNsZVJhZGl1cykge1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5hcmMoYm9keS5wb3NpdGlvbi54LCBib2R5LnBvc2l0aW9uLnksIGJvZHkuY2lyY2xlUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLm1vdmVUbyhib2R5LnZlcnRpY2VzWzBdLngsIGJvZHkudmVydGljZXNbMF0ueSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBib2R5LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGMubGluZVRvKGJvZHkudmVydGljZXNbal0ueCwgYm9keS52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGJvZHkucG9zaXRpb24ueCAtIHJlbmRlci5vcHRpb25zLndpZHRoICogMC41LFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9IGJvZHkucG9zaXRpb24ueSAtIHJlbmRlci5vcHRpb25zLmhlaWdodCAqIDAuMixcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGRpc3RhbmNlWCkgKyBNYXRoLmFicyhkaXN0YW5jZVkpO1xuXG4gICAgICAgICAgICBjLnNoYWRvd0NvbG9yID0gJ3JnYmEoMCwwLDAsMC4xNSknO1xuICAgICAgICAgICAgYy5zaGFkb3dPZmZzZXRYID0gMC4wNSAqIGRpc3RhbmNlWDtcbiAgICAgICAgICAgIGMuc2hhZG93T2Zmc2V0WSA9IDAuMDUgKiBkaXN0YW5jZVk7XG4gICAgICAgICAgICBjLnNoYWRvd0JsdXIgPSAxICsgMTIgKiBNYXRoLm1pbigxLCBkaXN0YW5jZSAvIDEwMDApO1xuXG4gICAgICAgICAgICBjLmZpbGwoKTtcblxuICAgICAgICAgICAgYy5zaGFkb3dDb2xvciA9IG51bGw7XG4gICAgICAgICAgICBjLnNoYWRvd09mZnNldFggPSBudWxsO1xuICAgICAgICAgICAgYy5zaGFkb3dPZmZzZXRZID0gbnVsbDtcbiAgICAgICAgICAgIGMuc2hhZG93Qmx1ciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9kaWVzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9kaWVzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHNob3dJbnRlcm5hbEVkZ2VzID0gb3B0aW9ucy5zaG93SW50ZXJuYWxFZGdlcyB8fCAhb3B0aW9ucy53aXJlZnJhbWVzLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgZm9yIChrID0gYm9keS5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBib2R5LnBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IGJvZHkucGFydHNba107XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBhcnQucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1NsZWVwaW5nICYmIGJvZHkuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgICAgICBjLmdsb2JhbEFscGhhID0gMC41ICogcGFydC5yZW5kZXIub3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQucmVuZGVyLm9wYWNpdHkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5nbG9iYWxBbHBoYSA9IHBhcnQucmVuZGVyLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnQucmVuZGVyLnNwcml0ZSAmJiBwYXJ0LnJlbmRlci5zcHJpdGUudGV4dHVyZSAmJiAhb3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnQgc3ByaXRlXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgPSBwYXJ0LnJlbmRlci5zcHJpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlID0gX2dldFRleHR1cmUocmVuZGVyLCBzcHJpdGUudGV4dHVyZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYy50cmFuc2xhdGUocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICBjLnJvdGF0ZShwYXJ0LmFuZ2xlKTtcblxuICAgICAgICAgICAgICAgICAgICBjLmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLndpZHRoICogLXNwcml0ZS54T2Zmc2V0ICogc3ByaXRlLnhTY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUuaGVpZ2h0ICogLXNwcml0ZS55T2Zmc2V0ICogc3ByaXRlLnlTY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUud2lkdGggKiBzcHJpdGUueFNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5oZWlnaHQgKiBzcHJpdGUueVNjYWxlXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV2ZXJ0IHRyYW5zbGF0aW9uLCBob3BlZnVsbHkgZmFzdGVyIHRoYW4gc2F2ZSAvIHJlc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgYy5yb3RhdGUoLXBhcnQuYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZSgtcGFydC5wb3NpdGlvbi54LCAtcGFydC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYXJ0IHBvbHlnb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQuY2lyY2xlUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5hcmMocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnksIHBhcnQuY2lyY2xlUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHBhcnQudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcnQudmVydGljZXNbaiAtIDFdLmlzSW50ZXJuYWwgfHwgc2hvd0ludGVybmFsRWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydC52ZXJ0aWNlc1tqXS5pc0ludGVybmFsICYmICFzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueCwgcGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9IHBhcnQucmVuZGVyLmZpbGxTdHlsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQucmVuZGVyLmxpbmVXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVdpZHRoID0gcGFydC5yZW5kZXIubGluZVdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSBwYXJ0LnJlbmRlci5zdHJva2VTdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnI2JiYic7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogT3B0aW1pc2VkIG1ldGhvZCBmb3IgZHJhd2luZyBib2R5IHdpcmVmcmFtZXMgaW4gb25lIHBhc3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keVdpcmVmcmFtZXNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5V2lyZWZyYW1lcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIHNob3dJbnRlcm5hbEVkZ2VzID0gcmVuZGVyLm9wdGlvbnMuc2hvd0ludGVybmFsRWRnZXMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBhbGwgYm9kaWVzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGsgPSBib2R5LnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcblxuICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbMF0ueCwgcGFydC52ZXJ0aWNlc1swXS55KTtcblxuICAgICAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCBwYXJ0LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFydC52ZXJ0aWNlc1tqIC0gMV0uaXNJbnRlcm5hbCB8fCBzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQudmVydGljZXNbal0uaXNJbnRlcm5hbCAmJiAhc2hvd0ludGVybmFsRWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS54LCBwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnI2JiYic7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE9wdGltaXNlZCBtZXRob2QgZm9yIGRyYXdpbmcgYm9keSBjb252ZXggaHVsbCB3aXJlZnJhbWVzIGluIG9uZSBwYXNzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlDb252ZXhIdWxsc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlDb252ZXhIdWxscyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNvbnZleCBodWxsc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUgfHwgYm9keS5wYXJ0cy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHkudmVydGljZXNbMF0ueCwgYm9keS52ZXJ0aWNlc1swXS55KTtcblxuICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IGJvZHkudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhib2R5LnZlcnRpY2VzW2pdLngsIGJvZHkudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGMubGluZVRvKGJvZHkudmVydGljZXNbMF0ueCwgYm9keS52ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMiknO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGJvZHkgdmVydGV4IG51bWJlcnMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHZlcnRleE51bWJlcnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci52ZXJ0ZXhOdW1iZXJzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGJvZGllc1tpXS5wYXJ0cztcbiAgICAgICAgICAgIGZvciAoayA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IHBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1trXTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMiknO1xuICAgICAgICAgICAgICAgICAgICBjLmZpbGxUZXh0KGkgKyAnXycgKyBqLCBwYXJ0LnBvc2l0aW9uLnggKyAocGFydC52ZXJ0aWNlc1tqXS54IC0gcGFydC5wb3NpdGlvbi54KSAqIDAuOCwgcGFydC5wb3NpdGlvbi55ICsgKHBhcnQudmVydGljZXNbal0ueSAtIHBhcnQucG9zaXRpb24ueSkgKiAwLjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIG1vdXNlIHBvc2l0aW9uLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBtb3VzZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLm1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbihyZW5kZXIsIG1vdXNlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dDtcbiAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJztcbiAgICAgICAgYy5maWxsVGV4dChtb3VzZS5wb3NpdGlvbi54ICsgJyAgJyArIG1vdXNlLnBvc2l0aW9uLnksIG1vdXNlLnBvc2l0aW9uLnggKyA1LCBtb3VzZS5wb3NpdGlvbi55IC0gNSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgYm91bmRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlCb3VuZHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5Qm91bmRzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkucmVuZGVyLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBib2RpZXNbaV0ucGFydHM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIGMucmVjdChwYXJ0LmJvdW5kcy5taW4ueCwgcGFydC5ib3VuZHMubWluLnksIHBhcnQuYm91bmRzLm1heC54IC0gcGFydC5ib3VuZHMubWluLngsIHBhcnQuYm91bmRzLm1heC55IC0gcGFydC5ib3VuZHMubWluLnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwwLDAsMC4xKSc7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgYW5nbGUgaW5kaWNhdG9ycyBhbmQgYXhlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5QXhlc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlBeGVzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGJvZHkucGFydHM7XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0F4ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgYWxsIGF4ZXNcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBwYXJ0LmF4ZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBheGlzID0gcGFydC5heGVzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC5wb3NpdGlvbi54ICsgYXhpcy54ICogMjAsIHBhcnQucG9zaXRpb24ueSArIGF4aXMueSAqIDIwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcGFydC5heGVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgYSBzaW5nbGUgYXhpcyBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKChwYXJ0LnZlcnRpY2VzWzBdLnggKyBwYXJ0LnZlcnRpY2VzW3BhcnQudmVydGljZXMubGVuZ3RoLTFdLngpIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXJ0LnZlcnRpY2VzWzBdLnkgKyBwYXJ0LnZlcnRpY2VzW3BhcnQudmVydGljZXMubGVuZ3RoLTFdLnkpIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ2luZGlhbnJlZCc7XG4gICAgICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XG4gICAgICAgICAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdvdmVybGF5JztcbiAgICAgICAgICAgIGMubGluZVdpZHRoID0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgIGMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBwb3NpdGlvbnNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keVBvc2l0aW9uc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlQb3NpdGlvbnMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjdXJyZW50IHBvc2l0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcbiAgICAgICAgICAgICAgICBjLmFyYyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSwgMywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAnaW5kaWFucmVkJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC41KSc7XG4gICAgICAgIH1cbiAgICAgICAgYy5maWxsKCk7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgcHJldmlvdXMgcG9zaXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICBpZiAoYm9keS5yZW5kZXIudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGMuYXJjKGJvZHkucG9zaXRpb25QcmV2LngsIGJvZHkucG9zaXRpb25QcmV2LnksIDIsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuOCknO1xuICAgICAgICBjLmZpbGwoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSB2ZWxvY2l0eVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5VmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5VmVsb2NpdHkgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQ7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keS5wb3NpdGlvbi54LCBib2R5LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgYy5saW5lVG8oYm9keS5wb3NpdGlvbi54ICsgKGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngpICogMiwgYm9keS5wb3NpdGlvbi55ICsgKGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2LnkpICogMik7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDM7XG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnY29ybmZsb3dlcmJsdWUnO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IGlkc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5SWRzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUlkcyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghYm9kaWVzW2ldLnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgcGFydHMgPSBib2RpZXNbaV0ucGFydHM7XG4gICAgICAgICAgICBmb3IgKGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgYy5mb250ID0gXCIxMnB4IEFyaWFsXCI7XG4gICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgICAgICAgICAgICBjLmZpbGxUZXh0KHBhcnQuaWQsIHBhcnQucG9zaXRpb24ueCArIDEwLCBwYXJ0LnBvc2l0aW9uLnkgLSAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuY29sbGlzaW9ucyA9IGZ1bmN0aW9uKHJlbmRlciwgcGFpcnMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGNvcnJlY3RlZCxcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjb2xsaXNpb24gcG9zaXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdCA9IHBhaXIuYWN0aXZlQ29udGFjdHNbal0sXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleCA9IGNvbnRhY3QudmVydGV4O1xuICAgICAgICAgICAgICAgIGMucmVjdCh2ZXJ0ZXgueCAtIDEuNSwgdmVydGV4LnkgLSAxLjUsIDMuNSwgMy41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC43KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGMuZmlsbCgpO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNvbGxpc2lvbiBub3JtYWxzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuXG4gICAgICAgICAgICBpZiAocGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbFBvc1ggPSBwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC54LFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxQb3NZID0gcGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueTtcblxuICAgICAgICAgICAgICAgIGlmIChwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxQb3NYID0gKHBhaXIuYWN0aXZlQ29udGFjdHNbMF0udmVydGV4LnggKyBwYWlyLmFjdGl2ZUNvbnRhY3RzWzFdLnZlcnRleC54KSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFBvc1kgPSAocGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueSArIHBhaXIuYWN0aXZlQ29udGFjdHNbMV0udmVydGV4LnkpIC8gMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uLmJvZHlCID09PSBjb2xsaXNpb24uc3VwcG9ydHNbMF0uYm9keSB8fCBjb2xsaXNpb24uYm9keUEuaXNTdGF0aWMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8obm9ybWFsUG9zWCAtIGNvbGxpc2lvbi5ub3JtYWwueCAqIDgsIG5vcm1hbFBvc1kgLSBjb2xsaXNpb24ubm9ybWFsLnkgKiA4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhub3JtYWxQb3NYICsgY29sbGlzaW9uLm5vcm1hbC54ICogOCwgbm9ybWFsUG9zWSArIGNvbGxpc2lvbi5ub3JtYWwueSAqIDgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMubGluZVRvKG5vcm1hbFBvc1gsIG5vcm1hbFBvc1kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnb3JhbmdlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc2VwYXJhdGlvbnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLnNlcGFyYXRpb25zID0gZnVuY3Rpb24ocmVuZGVyLCBwYWlycywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgY29ycmVjdGVkLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHNlcGFyYXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uO1xuICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24uYm9keUE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5QjtcblxuICAgICAgICAgICAgdmFyIGsgPSAxO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHlCLmlzU3RhdGljICYmICFib2R5QS5pc1N0YXRpYykgayA9IDAuNTtcbiAgICAgICAgICAgIGlmIChib2R5Qi5pc1N0YXRpYykgayA9IDA7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHlCLnBvc2l0aW9uLngsIGJvZHlCLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgYy5saW5lVG8oYm9keUIucG9zaXRpb24ueCAtIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54ICogaywgYm9keUIucG9zaXRpb24ueSAtIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi55ICogayk7XG5cbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHlCLmlzU3RhdGljICYmICFib2R5QS5pc1N0YXRpYykgayA9IDAuNTtcbiAgICAgICAgICAgIGlmIChib2R5QS5pc1N0YXRpYykgayA9IDA7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHlBLnBvc2l0aW9uLngsIGJvZHlBLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgYy5saW5lVG8oYm9keUEucG9zaXRpb24ueCArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54ICogaywgYm9keUEucG9zaXRpb24ueSArIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi55ICogayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNSknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICB9XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGdyaWRcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtncmlkfSBncmlkXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmdyaWQgPSBmdW5jdGlvbihyZW5kZXIsIGdyaWQsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zO1xuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTgwLDAsMC4xKSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE4MCwwLDAuNSknO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICB2YXIgYnVja2V0S2V5cyA9IENvbW1vbi5rZXlzKGdyaWQuYnVja2V0cyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWNrZXRLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYnVja2V0SWQgPSBidWNrZXRLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZ3JpZC5idWNrZXRzW2J1Y2tldElkXS5sZW5ndGggPCAyKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgcmVnaW9uID0gYnVja2V0SWQuc3BsaXQoL0N8Ui8pO1xuICAgICAgICAgICAgYy5yZWN0KDAuNSArIHBhcnNlSW50KHJlZ2lvblsxXSwgMTApICogZ3JpZC5idWNrZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgMC41ICsgcGFyc2VJbnQocmVnaW9uWzJdLCAxMCkgKiBncmlkLmJ1Y2tldEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5idWNrZXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC5idWNrZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBpbnNwZWN0b3JcbiAgICAgKiBAcGFyYW0ge2luc3BlY3Rvcn0gaW5zcGVjdG9yXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmluc3BlY3RvciA9IGZ1bmN0aW9uKGluc3BlY3RvciwgY29udGV4dCkge1xuICAgICAgICB2YXIgZW5naW5lID0gaW5zcGVjdG9yLmVuZ2luZSxcbiAgICAgICAgICAgIHNlbGVjdGVkID0gaW5zcGVjdG9yLnNlbGVjdGVkLFxuICAgICAgICAgICAgcmVuZGVyID0gaW5zcGVjdG9yLnJlbmRlcixcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGJvdW5kcztcblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIHZhciBib3VuZHNXaWR0aCA9IHJlbmRlci5ib3VuZHMubWF4LnggLSByZW5kZXIuYm91bmRzLm1pbi54LFxuICAgICAgICAgICAgICAgIGJvdW5kc0hlaWdodCA9IHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvdW5kc1NjYWxlWCA9IGJvdW5kc1dpZHRoIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgYm91bmRzU2NhbGVZID0gYm91bmRzSGVpZ2h0IC8gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgICAgICAgICBjb250ZXh0LnNjYWxlKDEgLyBib3VuZHNTY2FsZVgsIDEgLyBib3VuZHNTY2FsZVkpO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLXJlbmRlci5ib3VuZHMubWluLngsIC1yZW5kZXIuYm91bmRzLm1pbi55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZWN0ZWRbaV0uZGF0YTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjkpJztcbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goWzEsMl0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdib2R5JzpcblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBib2R5IHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICBib3VuZHMgPSBpdGVtLmJvdW5kcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucmVjdChNYXRoLmZsb29yKGJvdW5kcy5taW4ueCAtIDMpLCBNYXRoLmZsb29yKGJvdW5kcy5taW4ueSAtIDMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCArIDYpLCBNYXRoLmZsb29yKGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueSArIDYpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgY29uc3RyYWludCBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gaXRlbS5wb2ludEE7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uYm9keUEpXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ID0gaXRlbS5wb2ludEI7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCAxMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLTAuNSwgLTAuNSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW5kZXIgc2VsZWN0aW9uIHJlZ2lvblxuICAgICAgICBpZiAoaW5zcGVjdG9yLnNlbGVjdFN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNiknO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC4xKSc7XG4gICAgICAgICAgICBib3VuZHMgPSBpbnNwZWN0b3Iuc2VsZWN0Qm91bmRzO1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQucmVjdChNYXRoLmZsb29yKGJvdW5kcy5taW4ueCksIE1hdGguZmxvb3IoYm91bmRzLm1pbi55KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCksIE1hdGguZmxvb3IoYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55KSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLTAuNSwgLTAuNSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpXG4gICAgICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVDYW52YXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSB3aWR0aFxuICAgICAqIEBwYXJhbSB7fSBoZWlnaHRcbiAgICAgKiBAcmV0dXJuIGNhbnZhc1xuICAgICAqL1xuICAgIHZhciBfY3JlYXRlQ2FudmFzID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgICAgIGNhbnZhcy5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcGl4ZWwgcmF0aW8gb2YgdGhlIGNhbnZhcy5cbiAgICAgKiBAbWV0aG9kIF9nZXRQaXhlbFJhdGlvXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjYW52YXNcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHBpeGVsIHJhdGlvXG4gICAgICovXG4gICAgdmFyIF9nZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24oY2FudmFzKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgICAgICAgICBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcbiAgICAgICAgICAgIGJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gPSBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XG5cbiAgICAgICAgcmV0dXJuIGRldmljZVBpeGVsUmF0aW8gLyBiYWNraW5nU3RvcmVQaXhlbFJhdGlvO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByZXF1ZXN0ZWQgdGV4dHVyZSAoYW4gSW1hZ2UpIHZpYSBpdHMgcGF0aFxuICAgICAqIEBtZXRob2QgX2dldFRleHR1cmVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VQYXRoXG4gICAgICogQHJldHVybiB7SW1hZ2V9IHRleHR1cmVcbiAgICAgKi9cbiAgICB2YXIgX2dldFRleHR1cmUgPSBmdW5jdGlvbihyZW5kZXIsIGltYWdlUGF0aCkge1xuICAgICAgICB2YXIgaW1hZ2UgPSByZW5kZXIudGV4dHVyZXNbaW1hZ2VQYXRoXTtcblxuICAgICAgICBpZiAoaW1hZ2UpXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2U7XG5cbiAgICAgICAgaW1hZ2UgPSByZW5kZXIudGV4dHVyZXNbaW1hZ2VQYXRoXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZVBhdGg7XG5cbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIHRvIHRoZSBjYW52YXMgdXNpbmcgQ1NTLlxuICAgICAqIEBtZXRob2QgYXBwbHlCYWNrZ3JvdW5kXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmRcbiAgICAgKi9cbiAgICB2YXIgX2FwcGx5QmFja2dyb3VuZCA9IGZ1bmN0aW9uKHJlbmRlciwgYmFja2dyb3VuZCkge1xuICAgICAgICB2YXIgY3NzQmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cbiAgICAgICAgaWYgKC8oanBnfGdpZnxwbmcpJC8udGVzdChiYWNrZ3JvdW5kKSlcbiAgICAgICAgICAgIGNzc0JhY2tncm91bmQgPSAndXJsKCcgKyBiYWNrZ3JvdW5kICsgJyknO1xuXG4gICAgICAgIHJlbmRlci5jYW52YXMuc3R5bGUuYmFja2dyb3VuZCA9IGNzc0JhY2tncm91bmQ7XG4gICAgICAgIHJlbmRlci5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvbnRhaW5cIjtcbiAgICAgICAgcmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYmVmb3JlIHJlbmRlcmluZ1xuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVSZW5kZXJcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIHJlbmRlcmluZ1xuICAgICpcbiAgICAqIEBldmVudCBhZnRlclJlbmRlclxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBiYWNrLXJlZmVyZW5jZSB0byB0aGUgYE1hdHRlci5SZW5kZXJgIG1vZHVsZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb250cm9sbGVyXG4gICAgICogQHR5cGUgcmVuZGVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgYE1hdHRlci5FbmdpbmVgIGluc3RhbmNlIHRvIGJlIHVzZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZW5naW5lXG4gICAgICogQHR5cGUgZW5naW5lXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB3aGVyZSB0aGUgY2FudmFzIGlzIHRvIGJlIGluc2VydGVkIChpZiBgcmVuZGVyLmNhbnZhc2AgaGFzIG5vdCBiZWVuIHNwZWNpZmllZClcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbGVtZW50XG4gICAgICogQHR5cGUgSFRNTEVsZW1lbnRcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FudmFzIGVsZW1lbnQgdG8gcmVuZGVyIHRvLiBJZiBub3Qgc3BlY2lmaWVkLCBvbmUgd2lsbCBiZSBjcmVhdGVkIGlmIGByZW5kZXIuZWxlbWVudGAgaGFzIGJlZW4gc3BlY2lmaWVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNhbnZhc1xuICAgICAqIEB0eXBlIEhUTUxDYW52YXNFbGVtZW50XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvZiB0aGUgcmVuZGVyZXIuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9uc1xuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IHdpZHRoIGluIHBpeGVscyBvZiB0aGUgYHJlbmRlci5jYW52YXNgIHRvIGJlIGNyZWF0ZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy53aWR0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDgwMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBoZWlnaHQgaW4gcGl4ZWxzIG9mIHRoZSBgcmVuZGVyLmNhbnZhc2AgdG8gYmUgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmhlaWdodFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDYwMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIGlmIGByZW5kZXIuYm91bmRzYCBzaG91bGQgYmUgdXNlZCB3aGVuIHJlbmRlcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmhhc0JvdW5kc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm91bmRzYCBvYmplY3QgdGhhdCBzcGVjaWZpZXMgdGhlIGRyYXdpbmcgdmlldyByZWdpb24uXG4gICAgICogUmVuZGVyaW5nIHdpbGwgYmUgYXV0b21hdGljYWxseSB0cmFuc2Zvcm1lZCBhbmQgc2NhbGVkIHRvIGZpdCB3aXRoaW4gdGhlIGNhbnZhcyBzaXplIChgcmVuZGVyLm9wdGlvbnMud2lkdGhgIGFuZCBgcmVuZGVyLm9wdGlvbnMuaGVpZ2h0YCkuXG4gICAgICogVGhpcyBhbGxvd3MgZm9yIGNyZWF0aW5nIHZpZXdzIHRoYXQgY2FuIHBhbiBvciB6b29tIGFyb3VuZCB0aGUgc2NlbmUuXG4gICAgICogWW91IG11c3QgYWxzbyBzZXQgYHJlbmRlci5vcHRpb25zLmhhc0JvdW5kc2AgdG8gYHRydWVgIHRvIGVuYWJsZSBib3VuZGVkIHJlbmRlcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib3VuZHNcbiAgICAgKiBAdHlwZSBib3VuZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSAyZCByZW5kZXJpbmcgY29udGV4dCBmcm9tIHRoZSBgcmVuZGVyLmNhbnZhc2AgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb250ZXh0XG4gICAgICogQHR5cGUgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3ByaXRlIHRleHR1cmUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGV4dHVyZXNcbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG59KSgpO1xuXG59LHtcIi4uL2JvZHkvQ29tcG9zaXRlXCI6MixcIi4uL2NvbGxpc2lvbi9HcmlkXCI6NixcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuLi9jb3JlL0V2ZW50c1wiOjE2LFwiLi4vY29yZS9Nb3VzZVwiOjE5LFwiLi4vZ2VvbWV0cnkvQm91bmRzXCI6MjYsXCIuLi9nZW9tZXRyeS9WZWN0b3JcIjoyOH1dLDMyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5SZW5kZXJQaXhpYCBtb2R1bGUgaXMgYW4gZXhhbXBsZSByZW5kZXJlciB1c2luZyBwaXhpLmpzLlxuKiBTZWUgYWxzbyBgTWF0dGVyLlJlbmRlcmAgZm9yIGEgY2FudmFzIGJhc2VkIHJlbmRlcmVyLlxuKlxuKiBAY2xhc3MgUmVuZGVyUGl4aVxuKiBAZGVwcmVjYXRlZCB0aGUgTWF0dGVyLlJlbmRlclBpeGkgbW9kdWxlIHdpbGwgc29vbiBiZSByZW1vdmVkIGZyb20gdGhlIE1hdHRlci5qcyBjb3JlLlxuKiBJdCB3aWxsIGxpa2VseSBiZSBtb3ZlZCB0byBpdHMgb3duIHJlcG9zaXRvcnkgKGJ1dCBtYWludGVuYW5jZSB3aWxsIGJlIGxpbWl0ZWQpLlxuKi9cblxudmFyIFJlbmRlclBpeGkgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJQaXhpO1xuXG52YXIgQm91bmRzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQm91bmRzJyk7XG52YXIgQ29tcG9zaXRlID0gX2RlcmVxXygnLi4vYm9keS9Db21wb3NpdGUnKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xudmFyIEV2ZW50cyA9IF9kZXJlcV8oJy4uL2NvcmUvRXZlbnRzJyk7XG52YXIgVmVjdG9yID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVjdG9yJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZnVuY3Rpb24oY2FsbGJhY2speyB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soQ29tbW9uLm5vdygpKTsgfSwgMTAwMCAvIDYwKTsgfTtcbiAgIFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgUGl4aS5qcyBXZWJHTCByZW5kZXJlclxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtSZW5kZXJQaXhpfSBBIG5ldyByZW5kZXJlclxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgUmVuZGVyUGl4aS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIENvbW1vbi53YXJuKCdSZW5kZXJQaXhpLmNyZWF0ZTogTWF0dGVyLlJlbmRlclBpeGkgaXMgZGVwcmVjYXRlZCAoc2VlIGRvY3MpJyk7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY29udHJvbGxlcjogUmVuZGVyUGl4aSxcbiAgICAgICAgICAgIGVuZ2luZTogbnVsbCxcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBmcmFtZVJlcXVlc3RJZDogbnVsbCxcbiAgICAgICAgICAgIGNhbnZhczogbnVsbCxcbiAgICAgICAgICAgIHJlbmRlcmVyOiBudWxsLFxuICAgICAgICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgICAgICAgc3ByaXRlQ29udGFpbmVyOiBudWxsLFxuICAgICAgICAgICAgcGl4aU9wdGlvbnM6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZhZmFmYScsXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lQmFja2dyb3VuZDogJyMyMjInLFxuICAgICAgICAgICAgICAgIGhhc0JvdW5kczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aXJlZnJhbWVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dTbGVlcGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93RGVidWc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dCcm9hZHBoYXNlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Qm91bmRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93VmVsb2NpdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dDb2xsaXNpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QXhlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1Bvc2l0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0FuZ2xlSW5kaWNhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93SWRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93U2hhZG93czogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVuZGVyID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyksXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA9ICFyZW5kZXIub3B0aW9ucy53aXJlZnJhbWVzICYmIHJlbmRlci5vcHRpb25zLmJhY2tncm91bmQgPT09ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgICAgLy8gaW5pdCBwaXhpXG4gICAgICAgIHJlbmRlci5waXhpT3B0aW9ucyA9IHJlbmRlci5waXhpT3B0aW9ucyB8fCB7XG4gICAgICAgICAgICB2aWV3OiByZW5kZXIuY2FudmFzLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBvcHRpb25zLmJhY2tncm91bmRcbiAgICAgICAgfTtcblxuICAgICAgICByZW5kZXIubW91c2UgPSBvcHRpb25zLm1vdXNlO1xuICAgICAgICByZW5kZXIuZW5naW5lID0gb3B0aW9ucy5lbmdpbmU7XG4gICAgICAgIHJlbmRlci5yZW5kZXJlciA9IHJlbmRlci5yZW5kZXJlciB8fCBuZXcgUElYSS5XZWJHTFJlbmRlcmVyKHJlbmRlci5vcHRpb25zLndpZHRoLCByZW5kZXIub3B0aW9ucy5oZWlnaHQsIHJlbmRlci5waXhpT3B0aW9ucyk7XG4gICAgICAgIHJlbmRlci5jb250YWluZXIgPSByZW5kZXIuY29udGFpbmVyIHx8IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXIuc3ByaXRlQ29udGFpbmVyID0gcmVuZGVyLnNwcml0ZUNvbnRhaW5lciB8fCBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgcmVuZGVyLmNhbnZhcyA9IHJlbmRlci5jYW52YXMgfHwgcmVuZGVyLnJlbmRlcmVyLnZpZXc7XG4gICAgICAgIHJlbmRlci5ib3VuZHMgPSByZW5kZXIuYm91bmRzIHx8IHsgXG4gICAgICAgICAgICBtaW46IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgbWF4OiB7IFxuICAgICAgICAgICAgICAgIHg6IHJlbmRlci5vcHRpb25zLndpZHRoLFxuICAgICAgICAgICAgICAgIHk6IHJlbmRlci5vcHRpb25zLmhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBFdmVudHMub24ocmVuZGVyLmVuZ2luZSwgJ2JlZm9yZVVwZGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUmVuZGVyUGl4aS5jbGVhcihyZW5kZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYWNoZXNcbiAgICAgICAgcmVuZGVyLnRleHR1cmVzID0ge307XG4gICAgICAgIHJlbmRlci5zcHJpdGVzID0ge307XG4gICAgICAgIHJlbmRlci5wcmltaXRpdmVzID0ge307XG5cbiAgICAgICAgLy8gdXNlIGEgc3ByaXRlIGJhdGNoIGZvciBwZXJmb3JtYW5jZVxuICAgICAgICByZW5kZXIuY29udGFpbmVyLmFkZENoaWxkKHJlbmRlci5zcHJpdGVDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGluc2VydCBjYW52YXNcbiAgICAgICAgaWYgKENvbW1vbi5pc0VsZW1lbnQocmVuZGVyLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZW5kZXIuZWxlbWVudC5hcHBlbmRDaGlsZChyZW5kZXIuY2FudmFzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdObyBcInJlbmRlci5lbGVtZW50XCIgcGFzc2VkLCBcInJlbmRlci5jYW52YXNcIiB3YXMgbm90IGluc2VydGVkIGludG8gZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50IG1lbnVzIG9uIGNhbnZhc1xuICAgICAgICByZW5kZXIuY2FudmFzLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICByZW5kZXIuY2FudmFzLm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG4gICAgICAgIHJldHVybiByZW5kZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnRpbnVvdXNseSB1cGRhdGVzIHRoZSByZW5kZXIgY2FudmFzIG9uIHRoZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBldmVudC5cbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIFJlbmRlclBpeGkucnVuID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIChmdW5jdGlvbiBsb29wKHRpbWUpe1xuICAgICAgICAgICAgcmVuZGVyLmZyYW1lUmVxdWVzdElkID0gX3JlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgICAgIFJlbmRlclBpeGkud29ybGQocmVuZGVyKTtcbiAgICAgICAgfSkoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW5kcyBleGVjdXRpb24gb2YgYFJlbmRlci5ydW5gIG9uIHRoZSBnaXZlbiBgcmVuZGVyYCwgYnkgY2FuY2VsaW5nIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCBldmVudCBsb29wLlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIFJlbmRlclBpeGkuc3RvcCA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVuZGVyLmZyYW1lUmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBzY2VuZSBncmFwaFxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge1JlbmRlclBpeGl9IHJlbmRlclxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgUmVuZGVyUGl4aS5jbGVhciA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gcmVuZGVyLmNvbnRhaW5lcixcbiAgICAgICAgICAgIHNwcml0ZUNvbnRhaW5lciA9IHJlbmRlci5zcHJpdGVDb250YWluZXI7XG5cbiAgICAgICAgLy8gY2xlYXIgc3RhZ2UgY29udGFpbmVyXG4gICAgICAgIHdoaWxlIChjb250YWluZXIuY2hpbGRyZW5bMF0pIHsgXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmNoaWxkcmVuWzBdKTsgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbGVhciBzcHJpdGUgYmF0Y2hcbiAgICAgICAgd2hpbGUgKHNwcml0ZUNvbnRhaW5lci5jaGlsZHJlblswXSkgeyBcbiAgICAgICAgICAgIHNwcml0ZUNvbnRhaW5lci5yZW1vdmVDaGlsZChzcHJpdGVDb250YWluZXIuY2hpbGRyZW5bMF0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiZ1Nwcml0ZSA9IHJlbmRlci5zcHJpdGVzWydiZy0wJ107XG5cbiAgICAgICAgLy8gY2xlYXIgY2FjaGVzXG4gICAgICAgIHJlbmRlci50ZXh0dXJlcyA9IHt9O1xuICAgICAgICByZW5kZXIuc3ByaXRlcyA9IHt9O1xuICAgICAgICByZW5kZXIucHJpbWl0aXZlcyA9IHt9O1xuXG4gICAgICAgIC8vIHNldCBiYWNrZ3JvdW5kIHNwcml0ZVxuICAgICAgICByZW5kZXIuc3ByaXRlc1snYmctMCddID0gYmdTcHJpdGU7XG4gICAgICAgIGlmIChiZ1Nwcml0ZSlcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZEF0KGJnU3ByaXRlLCAwKTtcblxuICAgICAgICAvLyBhZGQgc3ByaXRlIGJhdGNoIGJhY2sgaW50byBjb250YWluZXJcbiAgICAgICAgcmVuZGVyLmNvbnRhaW5lci5hZGRDaGlsZChyZW5kZXIuc3ByaXRlQ29udGFpbmVyKTtcblxuICAgICAgICAvLyByZXNldCBiYWNrZ3JvdW5kIHN0YXRlXG4gICAgICAgIHJlbmRlci5jdXJyZW50QmFja2dyb3VuZCA9IG51bGw7XG5cbiAgICAgICAgLy8gcmVzZXQgYm91bmRzIHRyYW5zZm9ybXNcbiAgICAgICAgY29udGFpbmVyLnNjYWxlLnNldCgxLCAxKTtcbiAgICAgICAgY29udGFpbmVyLnBvc2l0aW9uLnNldCgwLCAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYmFja2dyb3VuZCBvZiB0aGUgY2FudmFzIFxuICAgICAqIEBtZXRob2Qgc2V0QmFja2dyb3VuZFxuICAgICAqIEBwYXJhbSB7UmVuZGVyUGl4aX0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmRcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIFJlbmRlclBpeGkuc2V0QmFja2dyb3VuZCA9IGZ1bmN0aW9uKHJlbmRlciwgYmFja2dyb3VuZCkge1xuICAgICAgICBpZiAocmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kICE9PSBiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICB2YXIgaXNDb2xvciA9IGJhY2tncm91bmQuaW5kZXhPZiAmJiBiYWNrZ3JvdW5kLmluZGV4T2YoJyMnKSAhPT0gLTEsXG4gICAgICAgICAgICAgICAgYmdTcHJpdGUgPSByZW5kZXIuc3ByaXRlc1snYmctMCddO1xuXG4gICAgICAgICAgICBpZiAoaXNDb2xvcikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHNvbGlkIGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSBDb21tb24uY29sb3JUb051bWJlcihiYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgICAgICByZW5kZXIucmVuZGVyZXIuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYmFja2dyb3VuZCBzcHJpdGUgaWYgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICBpZiAoYmdTcHJpdGUpXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlci5jb250YWluZXIucmVtb3ZlQ2hpbGQoYmdTcHJpdGUpOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGlzZSBiYWNrZ3JvdW5kIHNwcml0ZSBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoIWJnU3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0dXJlID0gX2dldFRleHR1cmUocmVuZGVyLCBiYWNrZ3JvdW5kKTtcblxuICAgICAgICAgICAgICAgICAgICBiZ1Nwcml0ZSA9IHJlbmRlci5zcHJpdGVzWydiZy0wJ10gPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGJnU3ByaXRlLnBvc2l0aW9uLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICBiZ1Nwcml0ZS5wb3NpdGlvbi55ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyLmNvbnRhaW5lci5hZGRDaGlsZEF0KGJnU3ByaXRlLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbmRlci5jdXJyZW50QmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAbWV0aG9kIHdvcmxkXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgUmVuZGVyUGl4aS53b3JsZCA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICB2YXIgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgcmVuZGVyZXIgPSByZW5kZXIucmVuZGVyZXIsXG4gICAgICAgICAgICBjb250YWluZXIgPSByZW5kZXIuY29udGFpbmVyLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgYm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyh3b3JsZCksXG4gICAgICAgICAgICBhbGxDb25zdHJhaW50cyA9IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyh3b3JsZCksXG4gICAgICAgICAgICBjb25zdHJhaW50cyA9IFtdLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBSZW5kZXJQaXhpLnNldEJhY2tncm91bmQocmVuZGVyLCBvcHRpb25zLndpcmVmcmFtZUJhY2tncm91bmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUmVuZGVyUGl4aS5zZXRCYWNrZ3JvdW5kKHJlbmRlciwgb3B0aW9ucy5iYWNrZ3JvdW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBib3VuZHNcbiAgICAgICAgdmFyIGJvdW5kc1dpZHRoID0gcmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngsXG4gICAgICAgICAgICBib3VuZHNIZWlnaHQgPSByZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSxcbiAgICAgICAgICAgIGJvdW5kc1NjYWxlWCA9IGJvdW5kc1dpZHRoIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICBib3VuZHNTY2FsZVkgPSBib3VuZHNIZWlnaHQgLyByZW5kZXIub3B0aW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKSB7XG4gICAgICAgICAgICAvLyBIaWRlIGJvZGllcyB0aGF0IGFyZSBub3QgaW4gdmlld1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgICAgIGJvZHkucmVuZGVyLnNwcml0ZS52aXNpYmxlID0gQm91bmRzLm92ZXJsYXBzKGJvZHkuYm91bmRzLCByZW5kZXIuYm91bmRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBjb25zdHJhaW50cyB0aGF0IGFyZSBub3QgaW4gdmlld1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFsbENvbnN0cmFpbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBhbGxDb25zdHJhaW50c1tpXSxcbiAgICAgICAgICAgICAgICAgICAgYm9keUEgPSBjb25zdHJhaW50LmJvZHlBLFxuICAgICAgICAgICAgICAgICAgICBib2R5QiA9IGNvbnN0cmFpbnQuYm9keUIsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QVdvcmxkID0gY29uc3RyYWludC5wb2ludEEsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QldvcmxkID0gY29uc3RyYWludC5wb2ludEI7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm9keUEpIHBvaW50QVdvcmxkID0gVmVjdG9yLmFkZChib2R5QS5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEEpO1xuICAgICAgICAgICAgICAgIGlmIChib2R5QikgcG9pbnRCV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50Qik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBvaW50QVdvcmxkIHx8ICFwb2ludEJXb3JsZClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKHJlbmRlci5ib3VuZHMsIHBvaW50QVdvcmxkKSB8fCBCb3VuZHMuY29udGFpbnMocmVuZGVyLmJvdW5kcywgcG9pbnRCV29ybGQpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm0gdGhlIHZpZXdcbiAgICAgICAgICAgIGNvbnRhaW5lci5zY2FsZS5zZXQoMSAvIGJvdW5kc1NjYWxlWCwgMSAvIGJvdW5kc1NjYWxlWSk7XG4gICAgICAgICAgICBjb250YWluZXIucG9zaXRpb24uc2V0KC1yZW5kZXIuYm91bmRzLm1pbi54ICogKDEgLyBib3VuZHNTY2FsZVgpLCAtcmVuZGVyLmJvdW5kcy5taW4ueSAqICgxIC8gYm91bmRzU2NhbGVZKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJhaW50cyA9IGFsbENvbnN0cmFpbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIFJlbmRlclBpeGkuYm9keShyZW5kZXIsIGJvZGllc1tpXSk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnN0cmFpbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgUmVuZGVyUGl4aS5jb25zdHJhaW50KHJlbmRlciwgY29uc3RyYWludHNbaV0pO1xuXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihjb250YWluZXIpO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQG1ldGhvZCBjb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgUmVuZGVyUGl4aS5jb25zdHJhaW50ID0gZnVuY3Rpb24ocmVuZGVyLCBjb25zdHJhaW50KSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgYm9keUEgPSBjb25zdHJhaW50LmJvZHlBLFxuICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgcG9pbnRBID0gY29uc3RyYWludC5wb2ludEEsXG4gICAgICAgICAgICBwb2ludEIgPSBjb25zdHJhaW50LnBvaW50QixcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHJlbmRlci5jb250YWluZXIsXG4gICAgICAgICAgICBjb25zdHJhaW50UmVuZGVyID0gY29uc3RyYWludC5yZW5kZXIsXG4gICAgICAgICAgICBwcmltaXRpdmVJZCA9ICdjLScgKyBjb25zdHJhaW50LmlkLFxuICAgICAgICAgICAgcHJpbWl0aXZlID0gcmVuZGVyLnByaW1pdGl2ZXNbcHJpbWl0aXZlSWRdO1xuXG4gICAgICAgIC8vIGluaXRpYWxpc2UgY29uc3RyYWludCBwcmltaXRpdmUgaWYgbm90IGV4aXN0aW5nXG4gICAgICAgIGlmICghcHJpbWl0aXZlKVxuICAgICAgICAgICAgcHJpbWl0aXZlID0gcmVuZGVyLnByaW1pdGl2ZXNbcHJpbWl0aXZlSWRdID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcblxuICAgICAgICAvLyBkb24ndCByZW5kZXIgaWYgY29uc3RyYWludCBkb2VzIG5vdCBoYXZlIHR3byBlbmQgcG9pbnRzXG4gICAgICAgIGlmICghY29uc3RyYWludFJlbmRlci52aXNpYmxlIHx8ICFjb25zdHJhaW50LnBvaW50QSB8fCAhY29uc3RyYWludC5wb2ludEIpIHtcbiAgICAgICAgICAgIHByaW1pdGl2ZS5jbGVhcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHRvIHNjZW5lIGdyYXBoIGlmIG5vdCBhbHJlYWR5IHRoZXJlXG4gICAgICAgIGlmIChDb21tb24uaW5kZXhPZihjb250YWluZXIuY2hpbGRyZW4sIHByaW1pdGl2ZSkgPT09IC0xKVxuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHByaW1pdGl2ZSk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHRoZSBjb25zdHJhaW50IG9uIGV2ZXJ5IHVwZGF0ZSwgc2luY2UgdGhleSBjYW4gY2hhbmdlIGR5bmFtaWNhbGx5XG4gICAgICAgIHByaW1pdGl2ZS5jbGVhcigpO1xuICAgICAgICBwcmltaXRpdmUuYmVnaW5GaWxsKDAsIDApO1xuICAgICAgICBwcmltaXRpdmUubGluZVN0eWxlKGNvbnN0cmFpbnRSZW5kZXIubGluZVdpZHRoLCBDb21tb24uY29sb3JUb051bWJlcihjb25zdHJhaW50UmVuZGVyLnN0cm9rZVN0eWxlKSwgMSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoYm9keUEpIHtcbiAgICAgICAgICAgIHByaW1pdGl2ZS5tb3ZlVG8oYm9keUEucG9zaXRpb24ueCArIHBvaW50QS54LCBib2R5QS5wb3NpdGlvbi55ICsgcG9pbnRBLnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJpbWl0aXZlLm1vdmVUbyhwb2ludEEueCwgcG9pbnRBLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlCKSB7XG4gICAgICAgICAgICBwcmltaXRpdmUubGluZVRvKGJvZHlCLnBvc2l0aW9uLnggKyBwb2ludEIueCwgYm9keUIucG9zaXRpb24ueSArIHBvaW50Qi55KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByaW1pdGl2ZS5saW5lVG8ocG9pbnRCLngsIHBvaW50Qi55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaW1pdGl2ZS5lbmRGaWxsKCk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBtZXRob2QgYm9keVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIFJlbmRlclBpeGkuYm9keSA9IGZ1bmN0aW9uKHJlbmRlciwgYm9keSkge1xuICAgICAgICB2YXIgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIGJvZHlSZW5kZXIgPSBib2R5LnJlbmRlcjtcblxuICAgICAgICBpZiAoIWJvZHlSZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAoYm9keVJlbmRlci5zcHJpdGUgJiYgYm9keVJlbmRlci5zcHJpdGUudGV4dHVyZSkge1xuICAgICAgICAgICAgdmFyIHNwcml0ZUlkID0gJ2ItJyArIGJvZHkuaWQsXG4gICAgICAgICAgICAgICAgc3ByaXRlID0gcmVuZGVyLnNwcml0ZXNbc3ByaXRlSWRdLFxuICAgICAgICAgICAgICAgIHNwcml0ZUNvbnRhaW5lciA9IHJlbmRlci5zcHJpdGVDb250YWluZXI7XG5cbiAgICAgICAgICAgIC8vIGluaXRpYWxpc2UgYm9keSBzcHJpdGUgaWYgbm90IGV4aXN0aW5nXG4gICAgICAgICAgICBpZiAoIXNwcml0ZSlcbiAgICAgICAgICAgICAgICBzcHJpdGUgPSByZW5kZXIuc3ByaXRlc1tzcHJpdGVJZF0gPSBfY3JlYXRlQm9keVNwcml0ZShyZW5kZXIsIGJvZHkpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdG8gc2NlbmUgZ3JhcGggaWYgbm90IGFscmVhZHkgdGhlcmVcbiAgICAgICAgICAgIGlmIChDb21tb24uaW5kZXhPZihzcHJpdGVDb250YWluZXIuY2hpbGRyZW4sIHNwcml0ZSkgPT09IC0xKVxuICAgICAgICAgICAgICAgIHNwcml0ZUNvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm9keSBzcHJpdGVcbiAgICAgICAgICAgIHNwcml0ZS5wb3NpdGlvbi54ID0gYm9keS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnkgPSBib2R5LnBvc2l0aW9uLnk7XG4gICAgICAgICAgICBzcHJpdGUucm90YXRpb24gPSBib2R5LmFuZ2xlO1xuICAgICAgICAgICAgc3ByaXRlLnNjYWxlLnggPSBib2R5UmVuZGVyLnNwcml0ZS54U2NhbGUgfHwgMTtcbiAgICAgICAgICAgIHNwcml0ZS5zY2FsZS55ID0gYm9keVJlbmRlci5zcHJpdGUueVNjYWxlIHx8IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJpbWl0aXZlSWQgPSAnYi0nICsgYm9keS5pZCxcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUgPSByZW5kZXIucHJpbWl0aXZlc1twcmltaXRpdmVJZF0sXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gcmVuZGVyLmNvbnRhaW5lcjtcblxuICAgICAgICAgICAgLy8gaW5pdGlhbGlzZSBib2R5IHByaW1pdGl2ZSBpZiBub3QgZXhpc3RpbmdcbiAgICAgICAgICAgIGlmICghcHJpbWl0aXZlKSB7XG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlID0gcmVuZGVyLnByaW1pdGl2ZXNbcHJpbWl0aXZlSWRdID0gX2NyZWF0ZUJvZHlQcmltaXRpdmUocmVuZGVyLCBib2R5KTtcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuaW5pdGlhbEFuZ2xlID0gYm9keS5hbmdsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIHRvIHNjZW5lIGdyYXBoIGlmIG5vdCBhbHJlYWR5IHRoZXJlXG4gICAgICAgICAgICBpZiAoQ29tbW9uLmluZGV4T2YoY29udGFpbmVyLmNoaWxkcmVuLCBwcmltaXRpdmUpID09PSAtMSlcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQocHJpbWl0aXZlKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvZHkgcHJpbWl0aXZlXG4gICAgICAgICAgICBwcmltaXRpdmUucG9zaXRpb24ueCA9IGJvZHkucG9zaXRpb24ueDtcbiAgICAgICAgICAgIHByaW1pdGl2ZS5wb3NpdGlvbi55ID0gYm9keS5wb3NpdGlvbi55O1xuICAgICAgICAgICAgcHJpbWl0aXZlLnJvdGF0aW9uID0gYm9keS5hbmdsZSAtIHByaW1pdGl2ZS5pbml0aWFsQW5nbGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJvZHkgc3ByaXRlXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQm9keVNwcml0ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSZW5kZXJQaXhpfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHtQSVhJLlNwcml0ZX0gc3ByaXRlXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICB2YXIgX2NyZWF0ZUJvZHlTcHJpdGUgPSBmdW5jdGlvbihyZW5kZXIsIGJvZHkpIHtcbiAgICAgICAgdmFyIGJvZHlSZW5kZXIgPSBib2R5LnJlbmRlcixcbiAgICAgICAgICAgIHRleHR1cmVQYXRoID0gYm9keVJlbmRlci5zcHJpdGUudGV4dHVyZSxcbiAgICAgICAgICAgIHRleHR1cmUgPSBfZ2V0VGV4dHVyZShyZW5kZXIsIHRleHR1cmVQYXRoKSxcbiAgICAgICAgICAgIHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKTtcblxuICAgICAgICBzcHJpdGUuYW5jaG9yLnggPSBib2R5LnJlbmRlci5zcHJpdGUueE9mZnNldDtcbiAgICAgICAgc3ByaXRlLmFuY2hvci55ID0gYm9keS5yZW5kZXIuc3ByaXRlLnlPZmZzZXQ7XG5cbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJvZHkgcHJpbWl0aXZlXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQm9keVByaW1pdGl2ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSZW5kZXJQaXhpfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHtQSVhJLkdyYXBoaWNzfSBncmFwaGljc1xuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgdmFyIF9jcmVhdGVCb2R5UHJpbWl0aXZlID0gZnVuY3Rpb24ocmVuZGVyLCBib2R5KSB7XG4gICAgICAgIHZhciBib2R5UmVuZGVyID0gYm9keS5yZW5kZXIsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBwcmltaXRpdmUgPSBuZXcgUElYSS5HcmFwaGljcygpLFxuICAgICAgICAgICAgZmlsbFN0eWxlID0gQ29tbW9uLmNvbG9yVG9OdW1iZXIoYm9keVJlbmRlci5maWxsU3R5bGUpLFxuICAgICAgICAgICAgc3Ryb2tlU3R5bGUgPSBDb21tb24uY29sb3JUb051bWJlcihib2R5UmVuZGVyLnN0cm9rZVN0eWxlKSxcbiAgICAgICAgICAgIHN0cm9rZVN0eWxlSW5kaWNhdG9yID0gQ29tbW9uLmNvbG9yVG9OdW1iZXIoYm9keVJlbmRlci5zdHJva2VTdHlsZSksXG4gICAgICAgICAgICBzdHJva2VTdHlsZVdpcmVmcmFtZSA9IENvbW1vbi5jb2xvclRvTnVtYmVyKCcjYmJiJyksXG4gICAgICAgICAgICBzdHJva2VTdHlsZVdpcmVmcmFtZUluZGljYXRvciA9IENvbW1vbi5jb2xvclRvTnVtYmVyKCcjQ0Q1QzVDJyksXG4gICAgICAgICAgICBwYXJ0O1xuXG4gICAgICAgIHByaW1pdGl2ZS5jbGVhcigpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBjb21wb3VuZCBwYXJ0c1xuICAgICAgICBmb3IgKHZhciBrID0gYm9keS5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBib2R5LnBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuYmVnaW5GaWxsKGZpbGxTdHlsZSwgMSk7XG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlLmxpbmVTdHlsZShib2R5UmVuZGVyLmxpbmVXaWR0aCwgc3Ryb2tlU3R5bGUsIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuYmVnaW5GaWxsKDAsIDApO1xuICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5saW5lU3R5bGUoMSwgc3Ryb2tlU3R5bGVXaXJlZnJhbWUsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmltaXRpdmUubW92ZVRvKHBhcnQudmVydGljZXNbMF0ueCAtIGJvZHkucG9zaXRpb24ueCwgcGFydC52ZXJ0aWNlc1swXS55IC0gYm9keS5wb3NpdGlvbi55KTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBwYXJ0LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlLmxpbmVUbyhwYXJ0LnZlcnRpY2VzW2pdLnggLSBib2R5LnBvc2l0aW9uLngsIHBhcnQudmVydGljZXNbal0ueSAtIGJvZHkucG9zaXRpb24ueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByaW1pdGl2ZS5saW5lVG8ocGFydC52ZXJ0aWNlc1swXS54IC0gYm9keS5wb3NpdGlvbi54LCBwYXJ0LnZlcnRpY2VzWzBdLnkgLSBib2R5LnBvc2l0aW9uLnkpO1xuXG4gICAgICAgICAgICBwcmltaXRpdmUuZW5kRmlsbCgpO1xuXG4gICAgICAgICAgICAvLyBhbmdsZSBpbmRpY2F0b3JcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNob3dBbmdsZUluZGljYXRvciB8fCBvcHRpb25zLnNob3dBeGVzKSB7XG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlLmJlZ2luRmlsbCgwLCAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlLmxpbmVTdHlsZSgxLCBzdHJva2VTdHlsZVdpcmVmcmFtZUluZGljYXRvciwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlLmxpbmVTdHlsZSgxLCBzdHJva2VTdHlsZUluZGljYXRvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlLm1vdmVUbyhwYXJ0LnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlLmxpbmVUbygoKHBhcnQudmVydGljZXNbMF0ueCArIHBhcnQudmVydGljZXNbcGFydC52ZXJ0aWNlcy5sZW5ndGgtMV0ueCkgLyAyIC0gYm9keS5wb3NpdGlvbi54KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHBhcnQudmVydGljZXNbMF0ueSArIHBhcnQudmVydGljZXNbcGFydC52ZXJ0aWNlcy5sZW5ndGgtMV0ueSkgLyAyIC0gYm9keS5wb3NpdGlvbi55KSk7XG5cbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuZW5kRmlsbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcmVxdWVzdGVkIHRleHR1cmUgKGEgUElYSS5UZXh0dXJlKSB2aWEgaXRzIHBhdGhcbiAgICAgKiBAbWV0aG9kIF9nZXRUZXh0dXJlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlbmRlclBpeGl9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZVBhdGhcbiAgICAgKiBAcmV0dXJuIHtQSVhJLlRleHR1cmV9IHRleHR1cmVcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIHZhciBfZ2V0VGV4dHVyZSA9IGZ1bmN0aW9uKHJlbmRlciwgaW1hZ2VQYXRoKSB7XG4gICAgICAgIHZhciB0ZXh0dXJlID0gcmVuZGVyLnRleHR1cmVzW2ltYWdlUGF0aF07XG5cbiAgICAgICAgaWYgKCF0ZXh0dXJlKVxuICAgICAgICAgICAgdGV4dHVyZSA9IHJlbmRlci50ZXh0dXJlc1tpbWFnZVBhdGhdID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZShpbWFnZVBhdGgpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi4vYm9keS9Db21wb3NpdGVcIjoyLFwiLi4vY29yZS9Db21tb25cIjoxNCxcIi4uL2NvcmUvRXZlbnRzXCI6MTYsXCIuLi9nZW9tZXRyeS9Cb3VuZHNcIjoyNixcIi4uL2dlb21ldHJ5L1ZlY3RvclwiOjI4fV19LHt9LFszMF0pKDMwKVxufSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgTWF0dGVyIGZyb20gJ21hdHRlci1qcyc7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXJCb2R5IH0gZnJvbSAnLi91dGlsLmpzJztcblxuY29uc3QgeyBFbmdpbmUsIFdvcmxkLCBCb2R5LCBCb2RpZXMsIFJlbmRlciwgRXZlbnRzIH0gPSBNYXR0ZXI7XG5cbmNvbnN0IGVuZ2luZSA9IEVuZ2luZS5jcmVhdGUoKTtcblxuY29uc3QgcmVuZGVyID0gUmVuZGVyLmNyZWF0ZSh7XG4gICAgZWxlbWVudDogZG9jdW1lbnQuYm9keSxcbiAgICBlbmdpbmU6IGVuZ2luZSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgIGhlaWdodDogNjAwLFxuICAgIH1cbn0pO1xuXG5jbGFzcyBJbnB1dENvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLlBSRVNTRUQgPSAxO1xuICAgICAgICB0aGlzLlJFTEVBU0VEID0gMDtcblxuICAgICAgICB0aGlzLmtleXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGFkZE1hcHBpbmcoa2V5TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmtleXMuZ2V0KGtleU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVW5hY3RpdmUga2V5Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnQm91bmQga2V5Jyk7XG4gICAgfVxuXG5cbn1cblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMuYm9keSA9IGNyZWF0ZVBsYXllckJvZHkoeCwgeSwgNTAsIHsgcmVzdGl0dXRpb246IDAuMSB9KTtcbiAgICAgICAgdGhpcy5ib2R5LmxhYmVsID0gJ3BsYXllcic7XG4gICAgICAgIC8vIHRoaXMuYm9keSA9IEJvZGllcy5jaXJjbGUoeCwgeSwgNDAsIHsgaW5zZXJ0aWE6IEluZmluaXR5IH0pO1xuICAgICAgICB0aGlzLmlucHV0ID0ge1xuICAgICAgICAgICAgLy8gdXA6IGZhbHNlLFxuICAgICAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0OiBmYWxzZSxcbiAgICAgICAgICAgIHJpZ2h0OiBmYWxzZSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW5Eb3VibGVKdW1wID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQuZG93biA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubGVmdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5yaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnVwID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBFdmVudHMub24oZW5naW5lLCAnYmVmb3JlVXBkYXRlJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cblxuICAgICAgICBFdmVudHMub24oZW5naW5lLCAnY29sbGlzaW9uQWN0aXZlJywgZXZlbnQgPT4ge1xuXG5cbiAgICAgICAgICAgIGV2ZW50LnBhaXJzLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhaXIuYm9keUEubGFiZWwgPT09ICdncm91bmQnICYmIHBhaXIuYm9keUIubGFiZWwgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbycsIHBhaXIpXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHRoaXMuYm9keSwgJ2dyb3VuZGVkJywgeyBwYWlyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBFdmVudHMub24odGhpcy5ib2R5LCAnZ3JvdW5kZWQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW0gZ3JvdW5kZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBXb3JsZC5hZGRCb2R5KGVuZ2luZS53b3JsZCwgdGhpcy5ib2R5KTtcbiAgICB9XG5cbiAgICBqdW1wKCkge1xuICAgICAgICBpZiAodGhpcy5ncm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICAgICAgQm9keS5hcHBseUZvcmNlKHRoaXMuYm9keSwgdGhpcy5ib2R5LnBvc2l0aW9uLCB7IHg6IDAsIHk6IC0xICogMC4xMyB9KTtcbiAgICAgICAgICAgIHRoaXMuY2FuRG91YmxlSnVtcCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5Eb3VibGVKdW1wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Eb3VibGVKdW1wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xuICAgICAgICAgICAgICAgIEJvZHkuYXBwbHlGb3JjZSh0aGlzLmJvZHksIHRoaXMuYm9keS5wb3NpdGlvbiwgeyB4OiAwLCB5OiAtMSAqIDAuMTMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIC8vIFJlYWN0IHRvIHBsYXllciBpbnB1dFxuICAgICAgICBjb25zdCBzcGVlZCA9IDQwMDAgKiAwLjAwMjtcbiAgICAgICAgLy8gaWYgKHRoaXMuaW5wdXQudXApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuanVtcCgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLmlucHV0LnJpZ2h0KSB7XG4gICAgICAgICAgICBCb2R5LnNldFZlbG9jaXR5KHRoaXMuYm9keSwgeyB4OiAtc3BlZWQsIHk6IHRoaXMuYm9keS52ZWxvY2l0eS55IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlucHV0LmxlZnQpIHtcbiAgICAgICAgICAgIEJvZHkuc2V0VmVsb2NpdHkodGhpcy5ib2R5LCB7IHg6IHNwZWVkLCB5OiB0aGlzLmJvZHkudmVsb2NpdHkueSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnB1dC5kb3duKSB7XG4gICAgICAgICAgICBCb2R5LnNldFZlbG9jaXR5KHRoaXMuYm9keSwgeyB4OiB0aGlzLmJvZHkudmVsb2NpdHkueCwgeTogc3BlZWQgKyAzMDAwICogMC4wMDIgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBjaXJjbGUgPSBCb2RpZXMuY2lyY2xlKHJlbmRlci5jYW52YXMud2lkdGgsIDUwLCAzMCwgeyByZXN0aXR1dGlvbjogMC45IH0pO1xuY29uc3QgdG9wID0gQm9kaWVzLnJlY3RhbmdsZShyZW5kZXIuY2FudmFzLndpZHRoIC8gMiwgLTIwLCByZW5kZXIuY2FudmFzLndpZHRoLCA0MCwgeyBpc1N0YXRpYzogdHJ1ZSB9KTtcbmNvbnN0IGJvdHRvbSA9IEJvZGllcy5yZWN0YW5nbGUocmVuZGVyLmNhbnZhcy53aWR0aCAvIDIsIHJlbmRlci5jYW52YXMuaGVpZ2h0ICsgMjAsIHJlbmRlci5jYW52YXMud2lkdGgsIDQwLCB7IGlzU3RhdGljOiB0cnVlIH0pO1xuYm90dG9tLmxhYmVsID0gJ2dyb3VuZCc7XG5jb25zdCBsZWZ0ID0gQm9kaWVzLnJlY3RhbmdsZSgtMjAsIHJlbmRlci5jYW52YXMuaGVpZ2h0IC8gMiwgNDAsIHJlbmRlci5jYW52YXMuaGVpZ2h0LCB7IGlzU3RhdGljOiB0cnVlIH0pO1xuY29uc3QgcmlnaHQgPSBCb2RpZXMucmVjdGFuZ2xlKHJlbmRlci5jYW52YXMud2lkdGggKyAyMCwgcmVuZGVyLmNhbnZhcy5oZWlnaHQgLyAyLCA0MCwgcmVuZGVyLmNhbnZhcy5oZWlnaHQsIHsgaXNTdGF0aWM6IHRydWUgfSk7XG5Xb3JsZC5hZGQoZW5naW5lLndvcmxkLCBbdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0LCBjaXJjbGVdKTtcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoNTAsIDUwKTtcblxuXG5FbmdpbmUucnVuKGVuZ2luZSk7XG5SZW5kZXIucnVuKHJlbmRlcik7IiwiaW1wb3J0IHsgVmVydGljZXMsIEJvZHksIENvbW1vbiB9IGZyb20gJ21hdHRlci1qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2R5KHgsIHksIHJhZGl1cywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMuaW5lcnRpYSA9IEluZmluaXR5O1xuICAgIGxldCBzaWRlcyA9IDIwO1xuICAgIGxldCB0aGV0YSA9IE1hdGguUEkgLyBzaWRlcztcbiAgICBsZXQgcGF0aCA9ICcnO1xuICAgIGxldCBvZmZzZXQgPSB0aGV0YSAqIDIwLjU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVzOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gb2Zmc2V0ICsgKGkgKiB0aGV0YSksXG4gICAgICAgICAgICB4eCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgICAgICAgIHl5ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuXG4gICAgICAgIHBhdGggKz0gJ0wgJyArIHh4LnRvRml4ZWQoMykgKyAnICcgKyB5eS50b0ZpeGVkKDMpICsgJyAnO1xuICAgIH1cblxuICAgIHZhciBwb2x5Z29uID0geyBcbiAgICAgICAgbGFiZWw6ICdQb2x5Z29uIEJvZHknLFxuICAgICAgICBwb3NpdGlvbjogeyB4LCB5IH0sXG4gICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aChwYXRoKVxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICBwb2x5Z29uLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcihwb2x5Z29uLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuY2hhbWZlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgcG9seWdvbiwgb3B0aW9ucykpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=