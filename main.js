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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
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

/***/ "./node_modules/resurrect-js/resurrect.js":
/*!************************************************!*\
  !*** ./node_modules/resurrect-js/resurrect.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * # ResurrectJS
 * @version 1.0.3
 * @license Public Domain
 *
 * ResurrectJS preserves object behavior (prototypes) and reference
 * circularity with a special JSON encoding. Unlike regular JSON,
 * Date, RegExp, DOM objects, and `undefined` are also properly
 * preserved.
 *
 * ## Examples
 *
 * function Foo() {}
 * Foo.prototype.greet = function() { return "hello"; };
 *
 * // Behavior is preserved:
 * var necromancer = new Resurrect();
 * var json = necromancer.stringify(new Foo());
 * var foo = necromancer.resurrect(json);
 * foo.greet();  // => "hello"
 *
 * // References to the same object are preserved:
 * json = necromancer.stringify([foo, foo]);
 * var array = necromancer.resurrect(json);
 * array[0] === array[1];  // => true
 * array[1].greet();  // => "hello"
 *
 * // Dates are restored properly
 * json = necromancer.stringify(new Date());
 * var date = necromancer.resurrect(json);
 * Object.prototype.toString.call(date);  // => "[object Date]"
 *
 * ## Options
 *
 * Options are provided to the constructor as an object with these
 * properties:
 *
 *   prefix ('#'): A prefix string used for temporary properties added
 *     to objects during serialization and deserialization. It is
 *     important that you don't use any properties beginning with this
 *     string. This option must be consistent between both
 *     serialization and deserialization.
 *
 *   cleanup (false): Perform full property cleanup after both
 *     serialization and deserialization using the `delete`
 *     operator. This may cause performance penalties (breaking hidden
 *     classes in V8) on objects that ResurrectJS touches, so enable
 *     with care.
 *
 *   revive (true): Restore behavior (__proto__) to objects that have
 *     been resurrected. If this is set to false during serialization,
 *     resurrection information will not be encoded. You still get
 *     circularity and Date support.
 *
 *   resolver (Resurrect.NamespaceResolver(window)): Converts between
 *     a name and a prototype. Create a custom resolver if your
 *     constructors are not stored in global variables. The resolver
 *     has two methods: getName(object) and getPrototype(string).
 *
 * For example,
 *
 * var necromancer = new Resurrect({
 *     prefix: '__#',
 *     cleanup: true
 * });
 *
 * ## Caveats
 *
 *   * With the default resolver, all constructors must be named and
 *   stored in the global variable under that name. This is required
 *   so that the prototypes can be looked up and reconnected at
 *   resurrection time.
 *
 *   * The wrapper objects Boolean, String, and Number will be
 *   unwrapped. This means extra properties added to these objects
 *   will not be preserved.
 *
 *   * Functions cannot ever be serialized. Resurrect will throw an
 *   error if a function is found when traversing a data structure.
 *
 * @see http://nullprogram.com/blog/2013/03/28/
 */

/**
 * @param {Object} [options] See options documentation.
 * @namespace
 * @constructor
 */
function Resurrect(options) {
    this.table = null;
    this.prefix = '#';
    this.cleanup = false;
    this.revive = true;
    for (var option in options) {
        if (options.hasOwnProperty(option)) {
            this[option] = options[option];
        }
    }
    this.refcode = this.prefix + 'id';
    this.origcode = this.prefix + 'original';
    this.buildcode = this.prefix + '.';
    this.valuecode = this.prefix + 'v';
}

/**
 * Portable access to the global object (window, global).
 * Uses indirect eval.
 * @constant
 */
Resurrect.GLOBAL = (0, eval)('this');

/**
 * Escape special regular expression characters in a string.
 * @param {string} string
 * @returns {string} The string escaped for exact matches.
 * @see http://stackoverflow.com/a/6969486
 */
Resurrect.escapeRegExp = function (string) {
    return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};

/* Helper Objects */

/**
 * @param {string} [message]
 * @constructor
 */
Resurrect.prototype.Error = function ResurrectError(message) {
    this.message = message || '';
    this.stack = new Error().stack;
};
Resurrect.prototype.Error.prototype = Object.create(Error.prototype);
Resurrect.prototype.Error.prototype.name = 'ResurrectError';

/**
 * Resolves prototypes through the properties on an object and
 * constructor names.
 * @param {Object} scope
 * @constructor
 */
Resurrect.NamespaceResolver = function(scope) {
    this.scope = scope;
};

/**
 * Gets the prototype of the given property name from an object. If
 * not found, it throws an error.
 * @param {string} name
 * @returns {Object}
 * @method
 */
Resurrect.NamespaceResolver.prototype.getPrototype = function(name) {
    var constructor = this.scope[name];
    if (constructor) {
        return constructor.prototype;
    } else {
        throw new Resurrect.prototype.Error('Unknown constructor: ' + name);
    }
};

/**
 * Get the prototype name for an object, to be fetched later with getPrototype.
 * @param {Object} object
 * @returns {?string} Null if the constructor is Object.
 * @method
 */
Resurrect.NamespaceResolver.prototype.getName = function(object) {
    var constructor = object.constructor.name;
    if (constructor == null) { // IE
        var funcPattern = /^\s*function\s*([A-Za-z0-9_$]*)/;
        constructor = funcPattern.exec(object.constructor)[1];
    }

    if (constructor === '') {
        var msg = "Can't serialize objects with anonymous constructors.";
        throw new Resurrect.prototype.Error(msg);
    } else if (constructor === 'Object' || constructor === 'Array') {
        return null;
    } else {
        return constructor;
    }
};

/* Set the default resolver searches the global object. */
Resurrect.prototype.resolver =
    new Resurrect.NamespaceResolver(Resurrect.GLOBAL);

/**
 * Create a DOM node from HTML source; behaves like a constructor.
 * @param {string} html
 * @constructor
 */
Resurrect.Node = function(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
};

/* Type Tests */

/**
 * @param {string} type
 * @returns {Function} A function that tests for type.
 */
Resurrect.is = function(type) {
    var string = '[object ' + type + ']';
    return function(object) {
        return Object.prototype.toString.call(object) === string;
    };
};

Resurrect.isArray = Resurrect.is('Array');
Resurrect.isString = Resurrect.is('String');
Resurrect.isBoolean = Resurrect.is('Boolean');
Resurrect.isNumber = Resurrect.is('Number');
Resurrect.isFunction = Resurrect.is('Function');
Resurrect.isDate = Resurrect.is('Date');
Resurrect.isRegExp = Resurrect.is('RegExp');
Resurrect.isObject = Resurrect.is('Object');

Resurrect.isAtom = function(object) {
    return !Resurrect.isObject(object) && !Resurrect.isArray(object);
};

/**
 * @param {*} object
 * @returns {boolean} True if object is a primitive or a primitive wrapper.
 */
Resurrect.isPrimitive = function(object) {
    return object == null ||
        Resurrect.isNumber(object) ||
        Resurrect.isString(object) ||
        Resurrect.isBoolean(object);
};

/* Methods */

/**
 * Create a reference (encoding) to an object.
 * @param {(Object|undefined)} object
 * @returns {Object}
 * @method
 */
Resurrect.prototype.ref = function(object) {
    var ref = {};
    if (object === undefined) {
        ref[this.prefix] = -1;
    } else {
        ref[this.prefix] = object[this.refcode];
    }
    return ref;
};

/**
 * Lookup an object in the table by reference object.
 * @param {Object} ref
 * @returns {(Object|undefined)}
 * @method
 */
Resurrect.prototype.deref = function(ref) {
    return this.table[ref[this.prefix]];
};

/**
 * Put a temporary identifier on an object and store it in the table.
 * @param {Object} object
 * @returns {number} The unique identifier number.
 * @method
 */
Resurrect.prototype.tag = function(object) {
    if (this.revive) {
        var constructor = this.resolver.getName(object);
        if (constructor) {
            var proto = Object.getPrototypeOf(object);
            if (this.resolver.getPrototype(constructor) !== proto) {
                throw new this.Error('Constructor mismatch!');
            } else {
                object[this.prefix] = constructor;
            }
        }
    }
    object[this.refcode] = this.table.length;
    this.table.push(object);
    return object[this.refcode];
};

/**
 * Create a builder object (encoding) for serialization.
 * @param {string} name The name of the constructor.
 * @param value The value to pass to the constructor.
 * @returns {Object}
 * @method
 */
Resurrect.prototype.builder = function(name, value) {
    var builder = {};
    builder[this.buildcode] = name;
    builder[this.valuecode] = value;
    return builder;
};

/**
 * Build a value from a deserialized builder.
 * @param {Object} ref
 * @returns {Object}
 * @method
 * @see http://stackoverflow.com/a/14378462
 * @see http://nullprogram.com/blog/2013/03/24/
 */
Resurrect.prototype.build = function(ref) {
    var type = ref[this.buildcode].split(/\./).reduce(function(object, name) {
        return object[name];
    }, Resurrect.GLOBAL);
    /* Brilliant hack by kybernetikos: */
    var args = [null].concat(ref[this.valuecode]);
    var factory = type.bind.apply(type, args);
    var result = new factory();
    if (Resurrect.isPrimitive(result)) {
        return result.valueOf(); // unwrap
    } else {
        return result;
    }
};

/**
 * Dereference or build an object or value from an encoding.
 * @param {Object} ref
 * @returns {(Object|undefined)}
 * @method
 */
Resurrect.prototype.decode = function(ref) {
    if (this.prefix in ref) {
        return this.deref(ref);
    } else if (this.buildcode in ref) {
        return this.build(ref);
    } else {
        throw new this.Error('Unknown encoding.');
    }
};

/**
 * @param {Object} object
 * @returns {boolean} True if the provided object is tagged for serialization.
 * @method
 */
Resurrect.prototype.isTagged = function(object) {
    return (this.refcode in object) && (object[this.refcode] != null);
};

/**
 * Visit root and all its ancestors, visiting atoms with f.
 * @param {*} root
 * @param {Function} f
 * @param {Function} replacer
 * @returns {*} A fresh copy of root to be serialized.
 * @method
 */
Resurrect.prototype.visit = function(root, f, replacer) {
    if (Resurrect.isAtom(root)) {
        return f(root);
    } else if (!this.isTagged(root)) {
        var copy = null;
        if (Resurrect.isArray(root)) {
            copy = [];
            root[this.refcode] = this.tag(copy);
            for (var i = 0; i < root.length; i++) {
                copy.push(this.visit(root[i], f, replacer));
            }
        } else { /* Object */
            copy = Object.create(Object.getPrototypeOf(root));
            root[this.refcode] = this.tag(copy);
            for (var key in root) {
                var value = root[key];
                if (root.hasOwnProperty(key)) {
                    if (replacer && value !== undefined) {
                        // Call replacer like JSON.stringify's replacer
                        value = replacer.call(root, key, root[key]);
                        if (value === undefined) {
                            continue; // Omit from result
                        }
                    }
                    copy[key] = this.visit(value, f, replacer);
                }
            }
        }
        copy[this.origcode] = root;
        return this.ref(copy);
    } else {
        return this.ref(root);
    }
};

/**
 * Manage special atom values, possibly returning an encoding.
 * @param {*} atom
 * @returns {*}
 * @method
 */
Resurrect.prototype.handleAtom = function(atom) {
    var Node = Resurrect.GLOBAL.Node || function() {};
    if (Resurrect.isFunction(atom)) {
        throw new this.Error("Can't serialize functions.");
    } else if (atom instanceof Node) {
        var xmls = new XMLSerializer();
        return this.builder('Resurrect.Node', [xmls.serializeToString(atom)]);
    } else if (Resurrect.isDate(atom)) {
        return this.builder('Date', [atom.toISOString()]);
    } else if (Resurrect.isRegExp(atom)) {
        var args = atom.toString().match(/\/(.+)\/([gimy]*)/).slice(1);
        return this.builder('RegExp', args);
    } else if (atom === undefined) {
        return this.ref(undefined);
    } else if (Resurrect.isNumber(atom) && (isNaN(atom) || !isFinite(atom))) {
        return this.builder('Number', [atom.toString()]);
    } else {
        return atom;
    }
};

/**
 * Hides intrusive keys from a user-supplied replacer.
 * @param {Function} replacer function of two arguments (key, value)
 * @returns {Function} A function that skips the replacer for intrusive keys.
 * @method
 */
Resurrect.prototype.replacerWrapper = function(replacer) {
    var skip = new RegExp('^' + Resurrect.escapeRegExp(this.prefix));
    return function(k, v) {
        if (skip.test(k)) {
            return v;
        } else {
            return replacer(k, v);
        }
    };
};

/**
 * Serialize an arbitrary JavaScript object, carefully preserving it.
 * @param {*} object
 * @param {(Function|Array)} replacer
 * @param {string} space
 * @method
 */
Resurrect.prototype.stringify = function(object, replacer, space) {
    if (Resurrect.isFunction(replacer)) {
        replacer = this.replacerWrapper(replacer);
    } else if (Resurrect.isArray(replacer)) {
        var acceptKeys = replacer;
        replacer = function(k, v) {
            return acceptKeys.indexOf(k) >= 0 ? v : undefined;
        };
    }
    if (Resurrect.isAtom(object)) {
        return JSON.stringify(this.handleAtom(object), replacer, space);
    } else {
        this.table = [];
        this.visit(object, this.handleAtom.bind(this), replacer);
        for (var i = 0; i < this.table.length; i++) {
            if (this.cleanup) {
                delete this.table[i][this.origcode][this.refcode];
            } else {
                this.table[i][this.origcode][this.refcode] = null;
            }
            delete this.table[i][this.refcode];
            delete this.table[i][this.origcode];
        }
        var table = this.table;
        this.table = null;
        return JSON.stringify(table, null, space);
    }
};

/**
 * Restore the __proto__ of the given object to the proper value.
 * @param {Object} object
 * @returns {Object} Its argument, or a copy, with the prototype restored.
 * @method
 */
Resurrect.prototype.fixPrototype = function(object) {
    if (this.prefix in object) {
        var name = object[this.prefix];
        var prototype = this.resolver.getPrototype(name);
        if ('__proto__' in object) {
            object.__proto__ = prototype;
            if (this.cleanup) {
                delete object[this.prefix];
            }
            return object;
        } else { // IE
            var copy = Object.create(prototype);
            for (var key in object) {
                if (object.hasOwnProperty(key) && key !== this.prefix) {
                    copy[key] = object[key];
                }
            }
            return copy;
        }
    } else {
        return object;
    }
};

/**
 * Deserialize an encoded object, restoring circularity and behavior.
 * @param {string} string
 * @returns {*} The decoded object or value.
 * @method
 */
Resurrect.prototype.resurrect = function(string) {
    var result = null;
    var data = JSON.parse(string);
    if (Resurrect.isArray(data)) {
        this.table = data;
        /* Restore __proto__. */
        if (this.revive) {
            for (var i = 0; i < this.table.length; i++) {
                this.table[i] = this.fixPrototype(this.table[i]);
            }
        }
        /* Re-establish object references and construct atoms. */
        for (i = 0; i < this.table.length; i++) {
            var object = this.table[i];
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    if (!(Resurrect.isAtom(object[key]))) {
                        object[key] = this.decode(object[key]);
                    }
                }
            }
        }
        result = this.table[0];
    } else if (Resurrect.isObject(data)) {
        this.table = [];
        result = this.decode(data);
    } else {
        result = data;
    }
    this.table = null;
    return result;
};

module.exports = Resurrect;


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

/***/ "./src/client/InputContext.js":
/*!************************************!*\
  !*** ./src/client/InputContext.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputContext; });
const PRESSED = true;
const RELEASED = false;

class InputContext {
    constructor() {

        this.keyStates = new Map();
        this.callbacks = new Map();
    }

    addMapping(keyName, callback) {
        this.callbacks.set(keyName, callback);
    }

    handleEvent(event) {
        const { key, type } = event;
        if (!this.callbacks.has(key)) {
            return;
        }
        event.preventDefault();

        const keyState = type === 'keydown' ? PRESSED : RELEASED;

        if (this.keyStates.get(key) === keyState) {
            return;
        }

        this.keyStates.set(key, keyState);

        this.callbacks.get(key)(keyState);
    }

    listen(element) {
        ['keyup', 'keydown'].forEach(eventName => {
            element.addEventListener(eventName, event => {
                this.handleEvent(event);
            });
        });
    }
}

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Game */ "./src/shared/Game.js");
/* harmony import */ var _shared_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Player */ "./src/shared/Player.js");
/* harmony import */ var _shared_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/config.json */ "./src/shared/config.json");
var _shared_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../shared/config.json */ "./src/shared/config.json", 1);
/* harmony import */ var _InputContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputContext */ "./src/client/InputContext.js");
/* harmony import */ var resurrect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! resurrect-js */ "./node_modules/resurrect-js/resurrect.js");
/* harmony import */ var resurrect_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(resurrect_js__WEBPACK_IMPORTED_MODULE_5__);







const necromancer = new resurrect_js__WEBPACK_IMPORTED_MODULE_5___default.a();
const { player1Keys, player2Keys } = _shared_config_json__WEBPACK_IMPORTED_MODULE_3__["keybinds"];
const { screenWidth, screenHeight } = _shared_config_json__WEBPACK_IMPORTED_MODULE_3__["arena"];

const fakeLag = 0;

function setupPlayerKeyboard(keyboard, player, keys) {
    const { jump, right, left, dive } = keys;

    keyboard.addMapping(jump, isPressed => {
        const last = new Date().getTime() || player.lastTimestamp
        const delta = (new Date().getTime() - last) / 1000;
        const input = { type: 'jump', isPressed, inputSequenceNumber: player.inputSequenceNumber++, delta}

        setTimeout(() => {
            ws.send(JSON.stringify({
                type: 'input',
                data: input,
            }));
        }, fakeLag);


        player.applyInput(input);

        // save for later reconciliation
        player.pendingInputs.push(input);
    });

    keyboard.addMapping(right, isPressed => {
        const last = new Date().getTime() || player.lastTimestamp
        const delta = (new Date().getTime() - last) / 1000;
        const input = { type: 'move-right', isPressed, inputSequenceNumber: player.inputSequenceNumber++, delta}
        setTimeout(() => {
            ws.send(JSON.stringify({
                type: 'input',
                data: input,
            }));
        }, fakeLag);

        player.applyInput(input);

        player.pendingInputs.push(input);
    });

    keyboard.addMapping(left, isPressed => {
        const last = new Date().getTime() || player.lastTimestamp
        const delta = (new Date().getTime() - last) / 1000;

        const input = { type: 'move-left', isPressed, inputSequenceNumber: player.inputSequenceNumber++, delta}
        setTimeout(() => {
            ws.send(JSON.stringify({
                type: 'input',
                data: input,
            }));
        }, fakeLag);
        player.applyInput(input);
        player.pendingInputs.push(input);
    });

    keyboard.addMapping(dive, isPressed => {
        const last = new Date().getTime() || player.lastTimestamp
        const delta = (new Date().getTime() - last) / 1000;
        const input = { type: 'dive', isPressed, inputSequenceNumber: player.inputSequenceNumber++, delta}
        setTimeout(() => {
            ws.send(JSON.stringify({
                type: 'input',
                data: input,
            }));
        }, fakeLag);
        player.applyInput(input);
        player.pendingInputs.push(input);
    });

}

const engine = matter_js__WEBPACK_IMPORTED_MODULE_0__["Engine"].create();
const game = new _shared_Game__WEBPACK_IMPORTED_MODULE_1__["default"](engine);
const keyboard = new _InputContext__WEBPACK_IMPORTED_MODULE_4__["default"]();
// let scoreboard = updateScoreboard();

const render = matter_js__WEBPACK_IMPORTED_MODULE_0__["Render"].create({
    element: document.body,
    engine: game.engine,
    options: {
        width: screenWidth,
        height: screenHeight,
        wireframes: false,
        background: '#133377',
    },
});

// Events.on(render, 'afterRender', event => {
//     render.context.drawImage(
//         scoreboard,
//         (screenWidth / 2) - (scoreboard.width / 2),
//         (screenHeight / 8) - (scoreboard.height / 2)
//     );
// });

// Events.on(game, 'update-score', event => {
//     scoreboard = updateScoreboard();
// });

// function updateScoreboard() {
//     const buffer = document.createElement('canvas');
//     buffer.width = 300;
//     buffer.height = 100;
//     const context = buffer.getContext('2d');
//     context.font = 'bold 40px Arial'
//     context.textAlign = 'center';
//     context.fillStyle = 'white';
//     context.fillText(`${game.score.left} - ${game.score.right}`, buffer.width / 2, buffer.height / 2);
//     return buffer;
// }

matter_js__WEBPACK_IMPORTED_MODULE_0__["Render"].run(render);
keyboard.listen(window);

// const ws = new WebSocket('ws://localhost:9000');
const ws = new WebSocket('wss://morning-reef-06070.herokuapp.com');

ws.addEventListener('open', () => {
    console.log('Connection established');
});

const entities = new Map();
let me;
ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);

    if (message.type === 'world-state') {


        message.state.map(body => necromancer.resurrect(body)).forEach(body => {
            if (!entities.has(body.id)) {
                console.log('dont have that');
                throw new Error('I have a received a body which is not in my list of entities');
            }

            matter_js__WEBPACK_IMPORTED_MODULE_0__["Body"].set(entities.get(body.id), body);

            // if (body.id === me.body.id) {

            //     // Server corrected my position. Re-apply all inputs that are not processed by server.
            //     let i = 0;
            //     while(i < me.pendingInputs.length) {

            //         const input = me.pendingInputs[i];

            //         if (input.inputSequenceNumber <= message.lastProcessedInput) {
            //             // Already processed
            //             me.pendingInputs.splice(i, 1);
            //         } else {
            //             // Not processed yet. apply it.
            //             me.applyInput(input);
            //             // Body.update(me.body, input.delta, 1, 0);
            //             i++;
            //         }
            //     }
            // }
        });


    } else if (message.type === 'player-created') {
        console.log('Initiating game...')
        console.log(message);

        const player = new _shared_Player__WEBPACK_IMPORTED_MODULE_2__["default"](necromancer.resurrect(message.entity));
        me = player;
        setupPlayerKeyboard(keyboard, player, player2Keys);

        entities.set(player.body.id, player.body);

        message.state.map(body => necromancer.resurrect(body)).forEach(body => {
            entities.set(body.id, body);

            matter_js__WEBPACK_IMPORTED_MODULE_0__["World"].addBody(game.engine.world, body);
        });

        const bottomWall = entities.get('bottom-wall');

        Object(_shared_Game__WEBPACK_IMPORTED_MODULE_1__["callbackOnCollisionStart"])(game.engine, player.body, bottomWall, () => {
            matter_js__WEBPACK_IMPORTED_MODULE_0__["Events"].trigger(player.body, 'grounded');
        });

        matter_js__WEBPACK_IMPORTED_MODULE_0__["Events"].on(game.engine, 'beforeUpdate', player.update.bind(player));
        matter_js__WEBPACK_IMPORTED_MODULE_0__["Events"].on(player.body, 'grounded', _event => {

            if (!player.state.isGrounded) {
                player.state.isGrounded = true;
            }
        });

        matter_js__WEBPACK_IMPORTED_MODULE_0__["World"].addBody(game.engine.world, player.body);
        console.log(entities);
        game.run();
        ws.send(JSON.stringify({ type: 'player-created' }));
        console.log('Game initiated.')

    } else if (message.type === 'other-connected') {
        const body = necromancer.resurrect(message.entity);
        entities.set(body.id, body);
        matter_js__WEBPACK_IMPORTED_MODULE_0__["World"].addBody(game.engine.world, body);
    } else if (message.type === 'other-disconnected') {
        const body = necromancer.resurrect(message.entity);
        const localBody = entities.get(body.id);
        entities.delete(localBody.id);
        matter_js__WEBPACK_IMPORTED_MODULE_0__["World"].remove(game.engine.world, localBody);
    }
});

/***/ }),

/***/ "./src/shared/Game.js":
/*!****************************!*\
  !*** ./src/shared/Game.js ***!
  \****************************/
/*! exports provided: callbackOnCollisionStart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callbackOnCollisionStart", function() { return callbackOnCollisionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_InputContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/InputContext */ "./src/client/InputContext.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ "./src/shared/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./src/shared/config.json", 1);
/* harmony import */ var resurrect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! resurrect-js */ "./node_modules/resurrect-js/resurrect.js");
/* harmony import */ var resurrect_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(resurrect_js__WEBPACK_IMPORTED_MODULE_3__);





const { screenHeight, screenWidth, wallThickness, halfThickness } = _config_json__WEBPACK_IMPORTED_MODULE_2__.arena;

function createWall(x, y, w, h, label) {
    return matter_js__WEBPACK_IMPORTED_MODULE_0__["Bodies"].rectangle(x, y, w, h, { isStatic: true, id: label });
}

function callbackOnCollisionStart(engine, collider, collidee, callback) {
    matter_js__WEBPACK_IMPORTED_MODULE_0__["Events"].on(engine, 'collisionStart', event => {
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

class Game {
    constructor(engine) {

        this.engine = engine;

        this.score = {
            left: 0,
            right: 0,
        }
    }

    setupBodies() {

        const bottomWall = createWall(screenWidth / 2, screenHeight + halfThickness, screenWidth, wallThickness, 'bottom-wall');
        const topWall = createWall(screenWidth / 2, -halfThickness, screenWidth, wallThickness, 'top-wall');
        const leftWall = createWall(-halfThickness, screenHeight / 2, wallThickness, screenHeight, 'left-wall');
        const rightWall = createWall(screenWidth + halfThickness, screenHeight / 2, wallThickness, screenHeight, 'right-wall');

        const ball = matter_js__WEBPACK_IMPORTED_MODULE_0__["Bodies"].circle(screenWidth / 2, 50, 30, { restitution: 0.9, id: 'ball' });

        const bodies = [topWall, bottomWall, leftWall, rightWall, ball]
        this.bodies = new Map(bodies.map(body => ([body.id, body])));
        matter_js__WEBPACK_IMPORTED_MODULE_0__["World"].add(this.engine.world, bodies);
    }

    run() {
        matter_js__WEBPACK_IMPORTED_MODULE_0__["Engine"].run(this.engine);
    }
}

/***/ }),

/***/ "./src/shared/Player.js":
/*!******************************!*\
  !*** ./src/shared/Player.js ***!
  \******************************/
/*! exports provided: default, createPlayerBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayerBody", function() { return createPlayerBody; });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);


const WalkStates = Object.freeze({
    WALK_RIGHT: Symbol('walk_right'),
    WALK_LEFT: Symbol('walk_left'),
    STANDING: Symbol('standing'),
});

class Player {

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

        // Update player
        let currentWalkState = this.getCurrentWalkState();

        if (currentWalkState === WalkStates.STANDING) {
            return;
        }

        const stats = Player.stats();

        if (currentWalkState === WalkStates.WALK_LEFT) {
            matter_js__WEBPACK_IMPORTED_MODULE_0__["Body"].setVelocity(this.body, { x: -stats.speed, y: this.body.velocity.y });
        } else {
            // Body.setVelocity(this.body, { x: this.stats.speed, y: this.body.velocity.y });
            matter_js__WEBPACK_IMPORTED_MODULE_0__["Body"].setVelocity(this.body, { x: stats.speed, y: this.body.velocity.y })
        }
    }

    startWalkRight() {
        this.state.walkStateStack.push(WalkStates.WALK_RIGHT);
    }

    stopWalkRight() {
        this.state.walkStateStack = this.state.walkStateStack.filter(state => state !== WalkStates.WALK_RIGHT);
        matter_js__WEBPACK_IMPORTED_MODULE_0__["Body"].setVelocity(this.body, { x: 0, y: this.body.velocity.y })
    }

    startWalkLeft() {
        this.state.walkStateStack.push(WalkStates.WALK_LEFT);
    }

    stopWalkLeft() {
        this.state.walkStateStack = this.state.walkStateStack.filter(state => state !== WalkStates.WALK_LEFT);
        matter_js__WEBPACK_IMPORTED_MODULE_0__["Body"].setVelocity(this.body, { x: 0, y: this.body.velocity.y })
    }

    dive(isPressed) {
        if (isPressed) {
            matter_js__WEBPACK_IMPORTED_MODULE_0__["Body"].setVelocity(this.body, { x: 0, y: 10 });
        }
    }

    jump(isPressed) {
        if (!isPressed) {
            return;
        }

        const stats = Player.stats();
        if (this.state.isGrounded) {
            this.state.isGrounded = false;
            matter_js__WEBPACK_IMPORTED_MODULE_0__["Body"].setVelocity(this.body, { x: this.body.velocity.x, y: stats.jumpPower });
            this.state.canDoubleJump = true;
        } else if (this.state.canDoubleJump) {
            this.state.canDoubleJump = false;
            matter_js__WEBPACK_IMPORTED_MODULE_0__["Body"].setVelocity(this.body, { x: this.body.velocity.x, y: stats.jumpPower });
        }
    }

    getCurrentWalkState() {
        return this.state.walkStateStack[this.state.walkStateStack.length - 1];
    }
}


function createPlayerBody(x, y, radius, options = {}) {
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

/***/ }),

/***/ "./src/shared/config.json":
/*!********************************!*\
  !*** ./src/shared/config.json ***!
  \********************************/
/*! exports provided: arena, keybinds, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"arena\":{\"wallThickness\":50,\"screenWidth\":900,\"screenHeight\":600,\"halfThickness\":25},\"keybinds\":{\"player1Keys\":{\"left\":\"a\",\"right\":\"d\",\"jump\":\"w\",\"dive\":\"s\"},\"player2Keys\":{\"left\":\"ArrowLeft\",\"right\":\"ArrowRight\",\"jump\":\"ArrowUp\",\"dive\":\"ArrowDown\"}}}");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdHRlci1qcy9idWlsZC9tYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Jlc3VycmVjdC1qcy9yZXN1cnJlY3QuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L0lucHV0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1BsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhLEdBQUcsZUFBZSxHQUFHLGNBQWM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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OztBQUVBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxDQUFDLEVBQUUsMElBQTBJO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxj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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFD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QUNBLDZDO0FBQ0EscUU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0Qzs7QUFFQSxtQkFBbUIsd0JBQXdCO0FBQzNDOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FB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QTtBQUNBOztBQUVBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixrQkFBa0Isa0RBQVE7QUFDMUI7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixrREFBUTtBQUNuQztBQUNBO0FBQ0E7O0FBRUEsV0FBVyw4Q0FBSSxRQUFRLGdEQUFNLFVBQVU7QUFDdkMsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2xpZW50L2luZGV4LmpzXCIpO1xuIiwiLyoqXG4qIG1hdHRlci1qcyAwLjE0LjIgYnkgQGxpYWJydSAyMDE4LTA2LTExXG4qIGh0dHA6Ly9icm0uaW8vbWF0dGVyLWpzL1xuKiBMaWNlbnNlIE1JVFxuKi9cblxuLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSBMaWFtIEJydW1taXR0IGFuZCBjb250cmlidXRvcnMuXG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4oZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zy5NYXR0ZXIgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBib2R5IG1vZGVscy5cbiogQSBgTWF0dGVyLkJvZHlgIGlzIGEgcmlnaWQgYm9keSB0aGF0IGNhbiBiZSBzaW11bGF0ZWQgYnkgYSBgTWF0dGVyLkVuZ2luZWAuXG4qIEZhY3RvcmllcyBmb3IgY29tbW9ubHkgdXNlZCBib2R5IGNvbmZpZ3VyYXRpb25zIChzdWNoIGFzIHJlY3RhbmdsZXMsIGNpcmNsZXMgYW5kIG90aGVyIHBvbHlnb25zKSBjYW4gYmUgZm91bmQgaW4gdGhlIG1vZHVsZSBgTWF0dGVyLkJvZGllc2AuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG5cbiogQGNsYXNzIEJvZHlcbiovXG5cbnZhciBCb2R5ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcblxudmFyIFZlcnRpY2VzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVydGljZXMnKTtcbnZhciBWZWN0b3IgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZWN0b3InKTtcbnZhciBTbGVlcGluZyA9IF9kZXJlcV8oJy4uL2NvcmUvU2xlZXBpbmcnKTtcbnZhciBSZW5kZXIgPSBfZGVyZXFfKCcuLi9yZW5kZXIvUmVuZGVyJyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcbnZhciBCb3VuZHMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9Cb3VuZHMnKTtcbnZhciBBeGVzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQXhlcycpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBCb2R5Ll9pbmVydGlhU2NhbGUgPSA0O1xuICAgIEJvZHkuX25leHRDb2xsaWRpbmdHcm91cElkID0gMTtcbiAgICBCb2R5Ll9uZXh0Tm9uQ29sbGlkaW5nR3JvdXBJZCA9IC0xO1xuICAgIEJvZHkuX25leHRDYXRlZ29yeSA9IDB4MDAwMTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbC4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBWZXJ0aWNlcyBtdXN0IGJlIHNwZWNpZmllZCBpbiBjbG9ja3dpc2Ugb3JkZXIuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Ym9keX0gYm9keVxuICAgICAqL1xuICAgIEJvZHkuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBpZDogQ29tbW9uLm5leHRJZCgpLFxuICAgICAgICAgICAgdHlwZTogJ2JvZHknLFxuICAgICAgICAgICAgbGFiZWw6ICdCb2R5JyxcbiAgICAgICAgICAgIHBhcnRzOiBbXSxcbiAgICAgICAgICAgIHBsdWdpbjoge30sXG4gICAgICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aCgnTCAwIDAgTCA0MCAwIEwgNDAgNDAgTCAwIDQwJyksXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBmb3JjZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICB0b3JxdWU6IDAsXG4gICAgICAgICAgICBwb3NpdGlvbkltcHVsc2U6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgY29uc3RyYWludEltcHVsc2U6IHsgeDogMCwgeTogMCwgYW5nbGU6IDAgfSxcbiAgICAgICAgICAgIHRvdGFsQ29udGFjdHM6IDAsXG4gICAgICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgICAgIGFuZ3VsYXJTcGVlZDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGFuZ3VsYXJWZWxvY2l0eTogMCxcbiAgICAgICAgICAgIGlzU2Vuc29yOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU3RhdGljOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU2xlZXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbW90aW9uOiAwLFxuICAgICAgICAgICAgc2xlZXBUaHJlc2hvbGQ6IDYwLFxuICAgICAgICAgICAgZGVuc2l0eTogMC4wMDEsXG4gICAgICAgICAgICByZXN0aXR1dGlvbjogMCxcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLjEsXG4gICAgICAgICAgICBmcmljdGlvblN0YXRpYzogMC41LFxuICAgICAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDEsXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogMHgwMDAxLFxuICAgICAgICAgICAgICAgIG1hc2s6IDB4RkZGRkZGRkYsXG4gICAgICAgICAgICAgICAgZ3JvdXA6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbG9wOiAwLjA1LFxuICAgICAgICAgICAgdGltZVNjYWxlOiAxLFxuICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgICAgICB4U2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIHlTY2FsZTogMSxcbiAgICAgICAgICAgICAgICAgICAgeE9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGJvZHkgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBfaW5pdFByb3BlcnRpZXMoYm9keSwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdW5pcXVlIGdyb3VwIGluZGV4IGZvciB3aGljaCBib2RpZXMgd2lsbCBjb2xsaWRlLlxuICAgICAqIElmIGBpc05vbkNvbGxpZGluZ2AgaXMgYHRydWVgLCByZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBncm91cCBpbmRleCBmb3Igd2hpY2ggYm9kaWVzIHdpbGwgX25vdF8gY29sbGlkZS5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIG5leHRHcm91cFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2lzTm9uQ29sbGlkaW5nPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIGdyb3VwIGluZGV4XG4gICAgICovXG4gICAgQm9keS5uZXh0R3JvdXAgPSBmdW5jdGlvbihpc05vbkNvbGxpZGluZykge1xuICAgICAgICBpZiAoaXNOb25Db2xsaWRpbmcpXG4gICAgICAgICAgICByZXR1cm4gQm9keS5fbmV4dE5vbkNvbGxpZGluZ0dyb3VwSWQtLTtcblxuICAgICAgICByZXR1cm4gQm9keS5fbmV4dENvbGxpZGluZ0dyb3VwSWQrKztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgY2F0ZWdvcnkgYml0ZmllbGQgKHN0YXJ0aW5nIGFmdGVyIHRoZSBpbml0aWFsIGRlZmF1bHQgY2F0ZWdvcnkgYDB4MDAwMWApLlxuICAgICAqIFRoZXJlIGFyZSAzMiBhdmFpbGFibGUuIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBtZXRob2QgbmV4dENhdGVnb3J5XG4gICAgICogQHJldHVybiB7TnVtYmVyfSBVbmlxdWUgY2F0ZWdvcnkgYml0ZmllbGRcbiAgICAgKi9cbiAgICBCb2R5Lm5leHRDYXRlZ29yeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBCb2R5Ll9uZXh0Q2F0ZWdvcnkgPSBCb2R5Ll9uZXh0Q2F0ZWdvcnkgPDwgMTtcbiAgICAgICAgcmV0dXJuIEJvZHkuX25leHRDYXRlZ29yeTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgYm9keSBwcm9wZXJ0aWVzLlxuICAgICAqIEBtZXRob2QgX2luaXRQcm9wZXJ0aWVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge30gW29wdGlvbnNdXG4gICAgICovXG4gICAgdmFyIF9pbml0UHJvcGVydGllcyA9IGZ1bmN0aW9uKGJvZHksIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgLy8gaW5pdCByZXF1aXJlZCBwcm9wZXJ0aWVzIChvcmRlciBpcyBpbXBvcnRhbnQpXG4gICAgICAgIEJvZHkuc2V0KGJvZHksIHtcbiAgICAgICAgICAgIGJvdW5kczogYm9keS5ib3VuZHMgfHwgQm91bmRzLmNyZWF0ZShib2R5LnZlcnRpY2VzKSxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJldjogYm9keS5wb3NpdGlvblByZXYgfHwgVmVjdG9yLmNsb25lKGJvZHkucG9zaXRpb24pLFxuICAgICAgICAgICAgYW5nbGVQcmV2OiBib2R5LmFuZ2xlUHJldiB8fCBib2R5LmFuZ2xlLFxuICAgICAgICAgICAgdmVydGljZXM6IGJvZHkudmVydGljZXMsXG4gICAgICAgICAgICBwYXJ0czogYm9keS5wYXJ0cyB8fCBbYm9keV0sXG4gICAgICAgICAgICBpc1N0YXRpYzogYm9keS5pc1N0YXRpYyxcbiAgICAgICAgICAgIGlzU2xlZXBpbmc6IGJvZHkuaXNTbGVlcGluZyxcbiAgICAgICAgICAgIHBhcmVudDogYm9keS5wYXJlbnQgfHwgYm9keVxuICAgICAgICB9KTtcblxuICAgICAgICBWZXJ0aWNlcy5yb3RhdGUoYm9keS52ZXJ0aWNlcywgYm9keS5hbmdsZSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgIEF4ZXMucm90YXRlKGJvZHkuYXhlcywgYm9keS5hbmdsZSk7XG4gICAgICAgIEJvdW5kcy51cGRhdGUoYm9keS5ib3VuZHMsIGJvZHkudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuXG4gICAgICAgIC8vIGFsbG93IG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBwcm9wZXJ0aWVzXG4gICAgICAgIEJvZHkuc2V0KGJvZHksIHtcbiAgICAgICAgICAgIGF4ZXM6IG9wdGlvbnMuYXhlcyB8fCBib2R5LmF4ZXMsXG4gICAgICAgICAgICBhcmVhOiBvcHRpb25zLmFyZWEgfHwgYm9keS5hcmVhLFxuICAgICAgICAgICAgbWFzczogb3B0aW9ucy5tYXNzIHx8IGJvZHkubWFzcyxcbiAgICAgICAgICAgIGluZXJ0aWE6IG9wdGlvbnMuaW5lcnRpYSB8fCBib2R5LmluZXJ0aWFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHByb3BlcnRpZXNcbiAgICAgICAgdmFyIGRlZmF1bHRGaWxsU3R5bGUgPSAoYm9keS5pc1N0YXRpYyA/ICcjMmUyYjQ0JyA6IENvbW1vbi5jaG9vc2UoWycjMDA2QkE2JywgJyMwNDk2RkYnLCAnI0ZGQkM0MicsICcjRDgxMTU5JywgJyM4RjJENTYnXSkpLFxuICAgICAgICAgICAgZGVmYXVsdFN0cm9rZVN0eWxlID0gJyMwMDAnO1xuICAgICAgICBib2R5LnJlbmRlci5maWxsU3R5bGUgPSBib2R5LnJlbmRlci5maWxsU3R5bGUgfHwgZGVmYXVsdEZpbGxTdHlsZTtcbiAgICAgICAgYm9keS5yZW5kZXIuc3Ryb2tlU3R5bGUgPSBib2R5LnJlbmRlci5zdHJva2VTdHlsZSB8fCBkZWZhdWx0U3Ryb2tlU3R5bGU7XG4gICAgICAgIGJvZHkucmVuZGVyLnNwcml0ZS54T2Zmc2V0ICs9IC0oYm9keS5ib3VuZHMubWluLnggLSBib2R5LnBvc2l0aW9uLngpIC8gKGJvZHkuYm91bmRzLm1heC54IC0gYm9keS5ib3VuZHMubWluLngpO1xuICAgICAgICBib2R5LnJlbmRlci5zcHJpdGUueU9mZnNldCArPSAtKGJvZHkuYm91bmRzLm1pbi55IC0gYm9keS5wb3NpdGlvbi55KSAvIChib2R5LmJvdW5kcy5tYXgueSAtIGJvZHkuYm91bmRzLm1pbi55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBwcm9wZXJ0eSBhbmQgYSB2YWx1ZSAob3IgbWFwIG9mKSwgc2V0cyB0aGUgcHJvcGVydHkocykgb24gdGhlIGJvZHksIHVzaW5nIHRoZSBhcHByb3ByaWF0ZSBzZXR0ZXIgZnVuY3Rpb25zIGlmIHRoZXkgZXhpc3QuXG4gICAgICogUHJlZmVyIHRvIHVzZSB0aGUgYWN0dWFsIHNldHRlciBmdW5jdGlvbnMgaW4gcGVyZm9ybWFuY2UgY3JpdGljYWwgc2l0dWF0aW9ucy5cbiAgICAgKiBAbWV0aG9kIHNldFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7fSBzZXR0aW5ncyBBIHByb3BlcnR5IG5hbWUgKG9yIG1hcCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMpIHRvIHNldCBvbiB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0ge30gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBpZiBgc2V0dGluZ3NgIGlzIGEgc2luZ2xlIHByb3BlcnR5IG5hbWUuXG4gICAgICovXG4gICAgQm9keS5zZXQgPSBmdW5jdGlvbihib2R5LCBzZXR0aW5ncywgdmFsdWUpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHNldHRpbmdzO1xuICAgICAgICAgICAgc2V0dGluZ3MgPSB7fTtcbiAgICAgICAgICAgIHNldHRpbmdzW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBzZXR0aW5ncykge1xuICAgICAgICAgICAgdmFsdWUgPSBzZXR0aW5nc1twcm9wZXJ0eV07XG5cbiAgICAgICAgICAgIGlmICghc2V0dGluZ3MuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2lzU3RhdGljJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFN0YXRpYyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpc1NsZWVwaW5nJzpcbiAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWFzcyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RlbnNpdHknOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0RGVuc2l0eShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbmVydGlhJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmVydGljZXMnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0VmVydGljZXMoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncG9zaXRpb24nOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYW5nbGUnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0QW5nbGUoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmVsb2NpdHknOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0VmVsb2NpdHkoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYW5ndWxhclZlbG9jaXR5JzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEFuZ3VsYXJWZWxvY2l0eShib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXJ0cyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRQYXJ0cyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJvZHlbcHJvcGVydHldID0gdmFsdWU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBib2R5IGFzIHN0YXRpYywgaW5jbHVkaW5nIGlzU3RhdGljIGZsYWcgYW5kIHNldHRpbmcgbWFzcyBhbmQgaW5lcnRpYSB0byBJbmZpbml0eS5cbiAgICAgKiBAbWV0aG9kIHNldFN0YXRpY1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbH0gaXNTdGF0aWNcbiAgICAgKi9cbiAgICBCb2R5LnNldFN0YXRpYyA9IGZ1bmN0aW9uKGJvZHksIGlzU3RhdGljKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuICAgICAgICAgICAgcGFydC5pc1N0YXRpYyA9IGlzU3RhdGljO1xuXG4gICAgICAgICAgICBpZiAoaXNTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBwYXJ0Ll9vcmlnaW5hbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdGl0dXRpb246IHBhcnQucmVzdGl0dXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZyaWN0aW9uOiBwYXJ0LmZyaWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBtYXNzOiBwYXJ0Lm1hc3MsXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWE6IHBhcnQuaW5lcnRpYSxcbiAgICAgICAgICAgICAgICAgICAgZGVuc2l0eTogcGFydC5kZW5zaXR5LFxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlTWFzczogcGFydC5pbnZlcnNlTWFzcyxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZUluZXJ0aWE6IHBhcnQuaW52ZXJzZUluZXJ0aWFcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcGFydC5yZXN0aXR1dGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5mcmljdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgcGFydC5tYXNzID0gcGFydC5pbmVydGlhID0gcGFydC5kZW5zaXR5ID0gSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgcGFydC5pbnZlcnNlTWFzcyA9IHBhcnQuaW52ZXJzZUluZXJ0aWEgPSAwO1xuXG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvblByZXYueCA9IHBhcnQucG9zaXRpb24ueDtcbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uUHJldi55ID0gcGFydC5wb3NpdGlvbi55O1xuICAgICAgICAgICAgICAgIHBhcnQuYW5nbGVQcmV2ID0gcGFydC5hbmdsZTtcbiAgICAgICAgICAgICAgICBwYXJ0LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5hbmd1bGFyU3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQubW90aW9uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5fb3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnJlc3RpdHV0aW9uID0gcGFydC5fb3JpZ2luYWwucmVzdGl0dXRpb247XG4gICAgICAgICAgICAgICAgcGFydC5mcmljdGlvbiA9IHBhcnQuX29yaWdpbmFsLmZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIHBhcnQubWFzcyA9IHBhcnQuX29yaWdpbmFsLm1hc3M7XG4gICAgICAgICAgICAgICAgcGFydC5pbmVydGlhID0gcGFydC5fb3JpZ2luYWwuaW5lcnRpYTtcbiAgICAgICAgICAgICAgICBwYXJ0LmRlbnNpdHkgPSBwYXJ0Ll9vcmlnaW5hbC5kZW5zaXR5O1xuICAgICAgICAgICAgICAgIHBhcnQuaW52ZXJzZU1hc3MgPSBwYXJ0Ll9vcmlnaW5hbC5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICBwYXJ0LmludmVyc2VJbmVydGlhID0gcGFydC5fb3JpZ2luYWwuaW52ZXJzZUluZXJ0aWE7XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgcGFydC5fb3JpZ2luYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbWFzcyBvZiB0aGUgYm9keS4gSW52ZXJzZSBtYXNzLCBkZW5zaXR5IGFuZCBpbmVydGlhIGFyZSBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlLlxuICAgICAqIEBtZXRob2Qgc2V0TWFzc1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXNzXG4gICAgICovXG4gICAgQm9keS5zZXRNYXNzID0gZnVuY3Rpb24oYm9keSwgbWFzcykge1xuICAgICAgICB2YXIgbW9tZW50ID0gYm9keS5pbmVydGlhIC8gKGJvZHkubWFzcyAvIDYpO1xuICAgICAgICBib2R5LmluZXJ0aWEgPSBtb21lbnQgKiAobWFzcyAvIDYpO1xuICAgICAgICBib2R5LmludmVyc2VJbmVydGlhID0gMSAvIGJvZHkuaW5lcnRpYTtcblxuICAgICAgICBib2R5Lm1hc3MgPSBtYXNzO1xuICAgICAgICBib2R5LmludmVyc2VNYXNzID0gMSAvIGJvZHkubWFzcztcbiAgICAgICAgYm9keS5kZW5zaXR5ID0gYm9keS5tYXNzIC8gYm9keS5hcmVhO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkZW5zaXR5IG9mIHRoZSBib2R5LiBNYXNzIGFuZCBpbmVydGlhIGFyZSBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlLlxuICAgICAqIEBtZXRob2Qgc2V0RGVuc2l0eVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZW5zaXR5XG4gICAgICovXG4gICAgQm9keS5zZXREZW5zaXR5ID0gZnVuY3Rpb24oYm9keSwgZGVuc2l0eSkge1xuICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgZGVuc2l0eSAqIGJvZHkuYXJlYSk7XG4gICAgICAgIGJvZHkuZGVuc2l0eSA9IGRlbnNpdHk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1vbWVudCBvZiBpbmVydGlhIChpLmUuIHNlY29uZCBtb21lbnQgb2YgYXJlYSkgb2YgdGhlIGJvZHkgb2YgdGhlIGJvZHkuIFxuICAgICAqIEludmVyc2UgaW5lcnRpYSBpcyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlLiBNYXNzIGlzIG5vdCBjaGFuZ2VkLlxuICAgICAqIEBtZXRob2Qgc2V0SW5lcnRpYVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmVydGlhXG4gICAgICovXG4gICAgQm9keS5zZXRJbmVydGlhID0gZnVuY3Rpb24oYm9keSwgaW5lcnRpYSkge1xuICAgICAgICBib2R5LmluZXJ0aWEgPSBpbmVydGlhO1xuICAgICAgICBib2R5LmludmVyc2VJbmVydGlhID0gMSAvIGJvZHkuaW5lcnRpYTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYm9keSdzIHZlcnRpY2VzIGFuZCB1cGRhdGVzIGJvZHkgcHJvcGVydGllcyBhY2NvcmRpbmdseSwgaW5jbHVkaW5nIGluZXJ0aWEsIGFyZWEgYW5kIG1hc3MgKHdpdGggcmVzcGVjdCB0byBgYm9keS5kZW5zaXR5YCkuXG4gICAgICogVmVydGljZXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHRyYW5zZm9ybWVkIHRvIGJlIG9yaWVudGF0ZWQgYXJvdW5kIHRoZWlyIGNlbnRyZSBvZiBtYXNzIGFzIHRoZSBvcmlnaW4uXG4gICAgICogVGhleSBhcmUgdGhlbiBhdXRvbWF0aWNhbGx5IHRyYW5zbGF0ZWQgdG8gd29ybGQgc3BhY2UgYmFzZWQgb24gYGJvZHkucG9zaXRpb25gLlxuICAgICAqXG4gICAgICogVGhlIGB2ZXJ0aWNlc2AgYXJndW1lbnQgc2hvdWxkIGJlIHBhc3NlZCBhcyBhbiBhcnJheSBvZiBgTWF0dGVyLlZlY3RvcmAgcG9pbnRzIChvciBhIGBNYXR0ZXIuVmVydGljZXNgIGFycmF5KS5cbiAgICAgKiBWZXJ0aWNlcyBtdXN0IGZvcm0gYSBjb252ZXggaHVsbCwgY29uY2F2ZSBodWxscyBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2V0VmVydGljZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3RvcltdfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIEJvZHkuc2V0VmVydGljZXMgPSBmdW5jdGlvbihib2R5LCB2ZXJ0aWNlcykge1xuICAgICAgICAvLyBjaGFuZ2UgdmVydGljZXNcbiAgICAgICAgaWYgKHZlcnRpY2VzWzBdLmJvZHkgPT09IGJvZHkpIHtcbiAgICAgICAgICAgIGJvZHkudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkudmVydGljZXMgPSBWZXJ0aWNlcy5jcmVhdGUodmVydGljZXMsIGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHByb3BlcnRpZXNcbiAgICAgICAgYm9keS5heGVzID0gQXhlcy5mcm9tVmVydGljZXMoYm9keS52ZXJ0aWNlcyk7XG4gICAgICAgIGJvZHkuYXJlYSA9IFZlcnRpY2VzLmFyZWEoYm9keS52ZXJ0aWNlcyk7XG4gICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCBib2R5LmRlbnNpdHkgKiBib2R5LmFyZWEpO1xuXG4gICAgICAgIC8vIG9yaWVudCB2ZXJ0aWNlcyBhcm91bmQgdGhlIGNlbnRyZSBvZiBtYXNzIGF0IG9yaWdpbiAoMCwgMClcbiAgICAgICAgdmFyIGNlbnRyZSA9IFZlcnRpY2VzLmNlbnRyZShib2R5LnZlcnRpY2VzKTtcbiAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKGJvZHkudmVydGljZXMsIGNlbnRyZSwgLTEpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBpbmVydGlhIHdoaWxlIHZlcnRpY2VzIGFyZSBhdCBvcmlnaW4gKDAsIDApXG4gICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCBCb2R5Ll9pbmVydGlhU2NhbGUgKiBWZXJ0aWNlcy5pbmVydGlhKGJvZHkudmVydGljZXMsIGJvZHkubWFzcykpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBnZW9tZXRyeVxuICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUoYm9keS52ZXJ0aWNlcywgYm9keS5wb3NpdGlvbik7XG4gICAgICAgIEJvdW5kcy51cGRhdGUoYm9keS5ib3VuZHMsIGJvZHkudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwYXJ0cyBvZiB0aGUgYGJvZHlgIGFuZCB1cGRhdGVzIG1hc3MsIGluZXJ0aWEgYW5kIGNlbnRyb2lkLlxuICAgICAqIEVhY2ggcGFydCB3aWxsIGhhdmUgaXRzIHBhcmVudCBzZXQgdG8gYGJvZHlgLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIGNvbnZleCBodWxsIHdpbGwgYmUgYXV0b21hdGljYWxseSBjb21wdXRlZCBhbmQgc2V0IG9uIGBib2R5YCwgdW5sZXNzIGBhdXRvSHVsbGAgaXMgc2V0IHRvIGBmYWxzZS5gXG4gICAgICogTm90ZSB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgZW5zdXJlIHRoYXQgdGhlIGZpcnN0IHBhcnQgaW4gYGJvZHkucGFydHNgIHdpbGwgYWx3YXlzIGJlIHRoZSBgYm9keWAuXG4gICAgICogQG1ldGhvZCBzZXRQYXJ0c1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSBbYm9keV0gcGFydHNcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFthdXRvSHVsbD10cnVlXVxuICAgICAqL1xuICAgIEJvZHkuc2V0UGFydHMgPSBmdW5jdGlvbihib2R5LCBwYXJ0cywgYXV0b0h1bGwpIHtcbiAgICAgICAgdmFyIGk7XG5cbiAgICAgICAgLy8gYWRkIGFsbCB0aGUgcGFydHMsIGVuc3VyaW5nIHRoYXQgdGhlIGZpcnN0IHBhcnQgaXMgYWx3YXlzIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDApO1xuICAgICAgICBib2R5LnBhcnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGJvZHkucGFydHMucHVzaChib2R5KTtcbiAgICAgICAgYm9keS5wYXJlbnQgPSBib2R5O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSBib2R5KSB7XG4gICAgICAgICAgICAgICAgcGFydC5wYXJlbnQgPSBib2R5O1xuICAgICAgICAgICAgICAgIGJvZHkucGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBhdXRvSHVsbCA9IHR5cGVvZiBhdXRvSHVsbCAhPT0gJ3VuZGVmaW5lZCcgPyBhdXRvSHVsbCA6IHRydWU7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgY29udmV4IGh1bGwgb2YgYWxsIHBhcnRzIHRvIHNldCBvbiB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgaWYgKGF1dG9IdWxsKSB7XG4gICAgICAgICAgICB2YXIgdmVydGljZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gdmVydGljZXMuY29uY2F0KHBhcnRzW2ldLnZlcnRpY2VzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVmVydGljZXMuY2xvY2t3aXNlU29ydCh2ZXJ0aWNlcyk7XG5cbiAgICAgICAgICAgIHZhciBodWxsID0gVmVydGljZXMuaHVsbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgICAgICAgaHVsbENlbnRyZSA9IFZlcnRpY2VzLmNlbnRyZShodWxsKTtcblxuICAgICAgICAgICAgQm9keS5zZXRWZXJ0aWNlcyhib2R5LCBodWxsKTtcbiAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShib2R5LnZlcnRpY2VzLCBodWxsQ2VudHJlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1bSB0aGUgcHJvcGVydGllcyBvZiBhbGwgY29tcG91bmQgcGFydHMgb2YgdGhlIHBhcmVudCBib2R5XG4gICAgICAgIHZhciB0b3RhbCA9IEJvZHkuX3RvdGFsUHJvcGVydGllcyhib2R5KTtcblxuICAgICAgICBib2R5LmFyZWEgPSB0b3RhbC5hcmVhO1xuICAgICAgICBib2R5LnBhcmVudCA9IGJvZHk7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueCA9IHRvdGFsLmNlbnRyZS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnkgPSB0b3RhbC5jZW50cmUueTtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IHRvdGFsLmNlbnRyZS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gdG90YWwuY2VudHJlLnk7XG5cbiAgICAgICAgQm9keS5zZXRNYXNzKGJvZHksIHRvdGFsLm1hc3MpO1xuICAgICAgICBCb2R5LnNldEluZXJ0aWEoYm9keSwgdG90YWwuaW5lcnRpYSk7XG4gICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgdG90YWwuY2VudHJlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIGJvZHkgaW5zdGFudGx5LiBWZWxvY2l0eSwgYW5nbGUsIGZvcmNlIGV0Yy4gYXJlIHVuY2hhbmdlZC5cbiAgICAgKiBAbWV0aG9kIHNldFBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uXG4gICAgICovXG4gICAgQm9keS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKGJvZHksIHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IFZlY3Rvci5zdWIocG9zaXRpb24sIGJvZHkucG9zaXRpb24pO1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ICs9IGRlbHRhLng7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgKz0gZGVsdGEueTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBkZWx0YS54O1xuICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IGRlbHRhLnk7XG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgZGVsdGEpO1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYW5nbGUgb2YgdGhlIGJvZHkgaW5zdGFudGx5LiBBbmd1bGFyIHZlbG9jaXR5LCBwb3NpdGlvbiwgZm9yY2UgZXRjLiBhcmUgdW5jaGFuZ2VkLlxuICAgICAqIEBtZXRob2Qgc2V0QW5nbGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKi9cbiAgICBCb2R5LnNldEFuZ2xlID0gZnVuY3Rpb24oYm9keSwgYW5nbGUpIHtcbiAgICAgICAgdmFyIGRlbHRhID0gYW5nbGUgLSBib2R5LmFuZ2xlO1xuICAgICAgICBib2R5LmFuZ2xlUHJldiArPSBkZWx0YTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcbiAgICAgICAgICAgIHBhcnQuYW5nbGUgKz0gZGVsdGE7XG4gICAgICAgICAgICBWZXJ0aWNlcy5yb3RhdGUocGFydC52ZXJ0aWNlcywgZGVsdGEsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICAgICAgQXhlcy5yb3RhdGUocGFydC5heGVzLCBkZWx0YSk7XG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBkZWx0YSwgYm9keS5wb3NpdGlvbiwgcGFydC5wb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbGluZWFyIHZlbG9jaXR5IG9mIHRoZSBib2R5IGluc3RhbnRseS4gUG9zaXRpb24sIGFuZ2xlLCBmb3JjZSBldGMuIGFyZSB1bmNoYW5nZWQuIFNlZSBhbHNvIGBCb2R5LmFwcGx5Rm9yY2VgLlxuICAgICAqIEBtZXRob2Qgc2V0VmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldFZlbG9jaXR5ID0gZnVuY3Rpb24oYm9keSwgdmVsb2NpdHkpIHtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGJvZHkucG9zaXRpb24ueCAtIHZlbG9jaXR5Lng7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSBib2R5LnBvc2l0aW9uLnkgLSB2ZWxvY2l0eS55O1xuICAgICAgICBib2R5LnZlbG9jaXR5LnggPSB2ZWxvY2l0eS54O1xuICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSB2ZWxvY2l0eS55O1xuICAgICAgICBib2R5LnNwZWVkID0gVmVjdG9yLm1hZ25pdHVkZShib2R5LnZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYW5ndWxhciB2ZWxvY2l0eSBvZiB0aGUgYm9keSBpbnN0YW50bHkuIFBvc2l0aW9uLCBhbmdsZSwgZm9yY2UgZXRjLiBhcmUgdW5jaGFuZ2VkLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKiBAbWV0aG9kIHNldEFuZ3VsYXJWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eVxuICAgICAqL1xuICAgIEJvZHkuc2V0QW5ndWxhclZlbG9jaXR5ID0gZnVuY3Rpb24oYm9keSwgdmVsb2NpdHkpIHtcbiAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlIC0gdmVsb2NpdHk7XG4gICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgIGJvZHkuYW5ndWxhclNwZWVkID0gTWF0aC5hYnMoYm9keS5hbmd1bGFyVmVsb2NpdHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhIGJvZHkgYnkgYSBnaXZlbiB2ZWN0b3IgcmVsYXRpdmUgdG8gaXRzIGN1cnJlbnQgcG9zaXRpb24sIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB0cmFuc2xhdGlvblxuICAgICAqL1xuICAgIEJvZHkudHJhbnNsYXRlID0gZnVuY3Rpb24oYm9keSwgdHJhbnNsYXRpb24pIHtcbiAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCBWZWN0b3IuYWRkKGJvZHkucG9zaXRpb24sIHRyYW5zbGF0aW9uKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgYSBib2R5IGJ5IGEgZ2l2ZW4gYW5nbGUgcmVsYXRpdmUgdG8gaXRzIGN1cnJlbnQgYW5nbGUsIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSBhbmd1bGFyIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtwb2ludF1cbiAgICAgKi9cbiAgICBCb2R5LnJvdGF0ZSA9IGZ1bmN0aW9uKGJvZHksIHJvdGF0aW9uLCBwb2ludCkge1xuICAgICAgICBpZiAoIXBvaW50KSB7XG4gICAgICAgICAgICBCb2R5LnNldEFuZ2xlKGJvZHksIGJvZHkuYW5nbGUgKyByb3RhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY29zID0gTWF0aC5jb3Mocm90YXRpb24pLFxuICAgICAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKHJvdGF0aW9uKSxcbiAgICAgICAgICAgICAgICBkeCA9IGJvZHkucG9zaXRpb24ueCAtIHBvaW50LngsXG4gICAgICAgICAgICAgICAgZHkgPSBib2R5LnBvc2l0aW9uLnkgLSBwb2ludC55O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueCArIChkeCAqIGNvcyAtIGR5ICogc2luKSxcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55ICsgKGR4ICogc2luICsgZHkgKiBjb3MpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgQm9keS5zZXRBbmdsZShib2R5LCBib2R5LmFuZ2xlICsgcm90YXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB0aGUgYm9keSwgaW5jbHVkaW5nIHVwZGF0aW5nIHBoeXNpY2FsIHByb3BlcnRpZXMgKG1hc3MsIGFyZWEsIGF4ZXMsIGluZXJ0aWEpLCBmcm9tIGEgd29ybGQtc3BhY2UgcG9pbnQgKGRlZmF1bHQgaXMgYm9keSBjZW50cmUpLlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcG9pbnRdXG4gICAgICovXG4gICAgQm9keS5zY2FsZSA9IGZ1bmN0aW9uKGJvZHksIHNjYWxlWCwgc2NhbGVZLCBwb2ludCkge1xuICAgICAgICB2YXIgdG90YWxBcmVhID0gMCxcbiAgICAgICAgICAgIHRvdGFsSW5lcnRpYSA9IDA7XG5cbiAgICAgICAgcG9pbnQgPSBwb2ludCB8fCBib2R5LnBvc2l0aW9uO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuXG4gICAgICAgICAgICAvLyBzY2FsZSB2ZXJ0aWNlc1xuICAgICAgICAgICAgVmVydGljZXMuc2NhbGUocGFydC52ZXJ0aWNlcywgc2NhbGVYLCBzY2FsZVksIHBvaW50KTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHByb3BlcnRpZXNcbiAgICAgICAgICAgIHBhcnQuYXhlcyA9IEF4ZXMuZnJvbVZlcnRpY2VzKHBhcnQudmVydGljZXMpO1xuICAgICAgICAgICAgcGFydC5hcmVhID0gVmVydGljZXMuYXJlYShwYXJ0LnZlcnRpY2VzKTtcbiAgICAgICAgICAgIEJvZHkuc2V0TWFzcyhwYXJ0LCBib2R5LmRlbnNpdHkgKiBwYXJ0LmFyZWEpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgaW5lcnRpYSAocmVxdWlyZXMgdmVydGljZXMgdG8gYmUgYXQgb3JpZ2luKVxuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIHsgeDogLXBhcnQucG9zaXRpb24ueCwgeTogLXBhcnQucG9zaXRpb24ueSB9KTtcbiAgICAgICAgICAgIEJvZHkuc2V0SW5lcnRpYShwYXJ0LCBCb2R5Ll9pbmVydGlhU2NhbGUgKiBWZXJ0aWNlcy5pbmVydGlhKHBhcnQudmVydGljZXMsIHBhcnQubWFzcykpO1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIHsgeDogcGFydC5wb3NpdGlvbi54LCB5OiBwYXJ0LnBvc2l0aW9uLnkgfSk7XG5cbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsQXJlYSArPSBwYXJ0LmFyZWE7XG4gICAgICAgICAgICAgICAgdG90YWxJbmVydGlhICs9IHBhcnQuaW5lcnRpYTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2NhbGUgcG9zaXRpb25cbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCA9IHBvaW50LnggKyAocGFydC5wb3NpdGlvbi54IC0gcG9pbnQueCkgKiBzY2FsZVg7XG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnkgPSBwb2ludC55ICsgKHBhcnQucG9zaXRpb24ueSAtIHBvaW50LnkpICogc2NhbGVZO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm91bmRzXG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBwYXJlbnQgYm9keVxuICAgICAgICBpZiAoYm9keS5wYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBib2R5LmFyZWEgPSB0b3RhbEFyZWE7XG5cbiAgICAgICAgICAgIGlmICghYm9keS5pc1N0YXRpYykge1xuICAgICAgICAgICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCBib2R5LmRlbnNpdHkgKiB0b3RhbEFyZWEpO1xuICAgICAgICAgICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCB0b3RhbEluZXJ0aWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIGNpcmNsZXNcbiAgICAgICAgaWYgKGJvZHkuY2lyY2xlUmFkaXVzKSB7IFxuICAgICAgICAgICAgaWYgKHNjYWxlWCA9PT0gc2NhbGVZKSB7XG4gICAgICAgICAgICAgICAgYm9keS5jaXJjbGVSYWRpdXMgKj0gc2NhbGVYO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBib2R5IGlzIG5vIGxvbmdlciBhIGNpcmNsZVxuICAgICAgICAgICAgICAgIGJvZHkuY2lyY2xlUmFkaXVzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHNpbXVsYXRpb24gc3RlcCBmb3IgdGhlIGdpdmVuIGBib2R5YCwgaW5jbHVkaW5nIHVwZGF0aW5nIHBvc2l0aW9uIGFuZCBhbmdsZSB1c2luZyBWZXJsZXQgaW50ZWdyYXRpb24uXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFUaW1lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3JyZWN0aW9uXG4gICAgICovXG4gICAgQm9keS51cGRhdGUgPSBmdW5jdGlvbihib2R5LCBkZWx0YVRpbWUsIHRpbWVTY2FsZSwgY29ycmVjdGlvbikge1xuICAgICAgICB2YXIgZGVsdGFUaW1lU3F1YXJlZCA9IE1hdGgucG93KGRlbHRhVGltZSAqIHRpbWVTY2FsZSAqIGJvZHkudGltZVNjYWxlLCAyKTtcblxuICAgICAgICAvLyBmcm9tIHRoZSBwcmV2aW91cyBzdGVwXG4gICAgICAgIHZhciBmcmljdGlvbkFpciA9IDEgLSBib2R5LmZyaWN0aW9uQWlyICogdGltZVNjYWxlICogYm9keS50aW1lU2NhbGUsXG4gICAgICAgICAgICB2ZWxvY2l0eVByZXZYID0gYm9keS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvblByZXYueCxcbiAgICAgICAgICAgIHZlbG9jaXR5UHJldlkgPSBib2R5LnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uUHJldi55O1xuXG4gICAgICAgIC8vIHVwZGF0ZSB2ZWxvY2l0eSB3aXRoIFZlcmxldCBpbnRlZ3JhdGlvblxuICAgICAgICBib2R5LnZlbG9jaXR5LnggPSAodmVsb2NpdHlQcmV2WCAqIGZyaWN0aW9uQWlyICogY29ycmVjdGlvbikgKyAoYm9keS5mb3JjZS54IC8gYm9keS5tYXNzKSAqIGRlbHRhVGltZVNxdWFyZWQ7XG4gICAgICAgIGJvZHkudmVsb2NpdHkueSA9ICh2ZWxvY2l0eVByZXZZICogZnJpY3Rpb25BaXIgKiBjb3JyZWN0aW9uKSArIChib2R5LmZvcmNlLnkgLyBib2R5Lm1hc3MpICogZGVsdGFUaW1lU3F1YXJlZDtcblxuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gYm9keS5wb3NpdGlvbi54O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnggKz0gYm9keS52ZWxvY2l0eS54O1xuICAgICAgICBib2R5LnBvc2l0aW9uLnkgKz0gYm9keS52ZWxvY2l0eS55O1xuXG4gICAgICAgIC8vIHVwZGF0ZSBhbmd1bGFyIHZlbG9jaXR5IHdpdGggVmVybGV0IGludGVncmF0aW9uXG4gICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gKChib2R5LmFuZ2xlIC0gYm9keS5hbmdsZVByZXYpICogZnJpY3Rpb25BaXIgKiBjb3JyZWN0aW9uKSArIChib2R5LnRvcnF1ZSAvIGJvZHkuaW5lcnRpYSkgKiBkZWx0YVRpbWVTcXVhcmVkO1xuICAgICAgICBib2R5LmFuZ2xlUHJldiA9IGJvZHkuYW5nbGU7XG4gICAgICAgIGJvZHkuYW5nbGUgKz0gYm9keS5hbmd1bGFyVmVsb2NpdHk7XG5cbiAgICAgICAgLy8gdHJhY2sgc3BlZWQgYW5kIGFjY2VsZXJhdGlvblxuICAgICAgICBib2R5LnNwZWVkID0gVmVjdG9yLm1hZ25pdHVkZShib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgYm9keS5hbmd1bGFyU3BlZWQgPSBNYXRoLmFicyhib2R5LmFuZ3VsYXJWZWxvY2l0eSk7XG5cbiAgICAgICAgLy8gdHJhbnNmb3JtIHRoZSBib2R5IGdlb21ldHJ5XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuXG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBib2R5LnZlbG9jaXR5Lng7XG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IGJvZHkudmVsb2NpdHkueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJvZHkuYW5ndWxhclZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGJvZHkuYW5ndWxhclZlbG9jaXR5LCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBBeGVzLnJvdGF0ZShwYXJ0LmF4ZXMsIGJvZHkuYW5ndWxhclZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZUFib3V0KHBhcnQucG9zaXRpb24sIGJvZHkuYW5ndWxhclZlbG9jaXR5LCBib2R5LnBvc2l0aW9uLCBwYXJ0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYSBmb3JjZSB0byBhIGJvZHkgZnJvbSBhIGdpdmVuIHdvcmxkLXNwYWNlIHBvc2l0aW9uLCBpbmNsdWRpbmcgcmVzdWx0aW5nIHRvcnF1ZS5cbiAgICAgKiBAbWV0aG9kIGFwcGx5Rm9yY2VcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZm9yY2VcbiAgICAgKi9cbiAgICBCb2R5LmFwcGx5Rm9yY2UgPSBmdW5jdGlvbihib2R5LCBwb3NpdGlvbiwgZm9yY2UpIHtcbiAgICAgICAgYm9keS5mb3JjZS54ICs9IGZvcmNlLng7XG4gICAgICAgIGJvZHkuZm9yY2UueSArPSBmb3JjZS55O1xuICAgICAgICB2YXIgb2Zmc2V0ID0geyB4OiBwb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvbi55IH07XG4gICAgICAgIGJvZHkudG9ycXVlICs9IG9mZnNldC54ICogZm9yY2UueSAtIG9mZnNldC55ICogZm9yY2UueDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3VtcyBvZiB0aGUgcHJvcGVydGllcyBvZiBhbGwgY29tcG91bmQgcGFydHMgb2YgdGhlIHBhcmVudCBib2R5LlxuICAgICAqIEBtZXRob2QgX3RvdGFsUHJvcGVydGllc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHJldHVybiB7fVxuICAgICAqL1xuICAgIEJvZHkuX3RvdGFsUHJvcGVydGllcyA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgICAgLy8gZnJvbSBlcXVhdGlvbnMgYXQ6XG4gICAgICAgIC8vIGh0dHBzOi8vZWNvdXJzZXMub3UuZWR1L2NnaS1iaW4vZWJvb2suY2dpP2RvYz0mdG9waWM9c3QmY2hhcF9zZWM9MDcuMiZwYWdlPXRoZW9yeVxuICAgICAgICAvLyBodHRwOi8vb3V0cHV0LnRvL3NpZGV3YXkvZGVmYXVsdC5hc3A/cW5vPTEyMTEwMDA4N1xuXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgbWFzczogMCxcbiAgICAgICAgICAgIGFyZWE6IDAsXG4gICAgICAgICAgICBpbmVydGlhOiAwLFxuICAgICAgICAgICAgY2VudHJlOiB7IHg6IDAsIHk6IDAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHN1bSB0aGUgcHJvcGVydGllcyBvZiBhbGwgY29tcG91bmQgcGFydHMgb2YgdGhlIHBhcmVudCBib2R5XG4gICAgICAgIGZvciAodmFyIGkgPSBib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSA/IDAgOiAxOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldLFxuICAgICAgICAgICAgICAgIG1hc3MgPSBwYXJ0Lm1hc3MgIT09IEluZmluaXR5ID8gcGFydC5tYXNzIDogMTtcblxuICAgICAgICAgICAgcHJvcGVydGllcy5tYXNzICs9IG1hc3M7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmFyZWEgKz0gcGFydC5hcmVhO1xuICAgICAgICAgICAgcHJvcGVydGllcy5pbmVydGlhICs9IHBhcnQuaW5lcnRpYTtcbiAgICAgICAgICAgIHByb3BlcnRpZXMuY2VudHJlID0gVmVjdG9yLmFkZChwcm9wZXJ0aWVzLmNlbnRyZSwgVmVjdG9yLm11bHQocGFydC5wb3NpdGlvbiwgbWFzcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcGVydGllcy5jZW50cmUgPSBWZWN0b3IuZGl2KHByb3BlcnRpZXMuY2VudHJlLCBwcm9wZXJ0aWVzLm1hc3MpO1xuXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgYm9keSBzdGFydHMgc2xlZXBpbmcgKHdoZXJlIGB0aGlzYCBpcyB0aGUgYm9keSkuXG4gICAgKlxuICAgICogQGV2ZW50IHNsZWVwU3RhcnRcbiAgICAqIEB0aGlzIHtib2R5fSBUaGUgYm9keSB0aGF0IGhhcyBzdGFydGVkIHNsZWVwaW5nXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGJvZHkgZW5kcyBzbGVlcGluZyAod2hlcmUgYHRoaXNgIGlzIHRoZSBib2R5KS5cbiAgICAqXG4gICAgKiBAZXZlbnQgc2xlZXBFbmRcbiAgICAqIEB0aGlzIHtib2R5fSBUaGUgYm9keSB0aGF0IGhhcyBlbmRlZCBzbGVlcGluZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdW5pcXVlbHkgaWRlbnRpZnlpbmcgbnVtYmVyIGdlbmVyYXRlZCBpbiBgQm9keS5jcmVhdGVgIGJ5IGBDb21tb24ubmV4dElkYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiYm9keVwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcmJpdHJhcnkgYFN0cmluZ2AgbmFtZSB0byBoZWxwIHRoZSB1c2VyIGlkZW50aWZ5IGFuZCBtYW5hZ2UgYm9kaWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGxhYmVsXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJCb2R5XCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGJvZGllcyB0aGF0IG1ha2UgdXAgdGhpcyBib2R5LiBcbiAgICAgKiBUaGUgZmlyc3QgYm9keSBpbiB0aGUgYXJyYXkgbXVzdCBhbHdheXMgYmUgYSBzZWxmIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBib2R5IGluc3RhbmNlLlxuICAgICAqIEFsbCBib2RpZXMgaW4gdGhlIGBwYXJ0c2AgYXJyYXkgdG9nZXRoZXIgZm9ybSBhIHNpbmdsZSByaWdpZCBjb21wb3VuZCBib2R5LlxuICAgICAqIFBhcnRzIGFyZSBhbGxvd2VkIHRvIG92ZXJsYXAsIGhhdmUgZ2FwcyBvciBob2xlcyBvciBldmVuIGZvcm0gY29uY2F2ZSBib2RpZXMuXG4gICAgICogUGFydHMgdGhlbXNlbHZlcyBzaG91bGQgbmV2ZXIgYmUgYWRkZWQgdG8gYSBgV29ybGRgLCBvbmx5IHRoZSBwYXJlbnQgYm9keSBzaG91bGQgYmUuXG4gICAgICogVXNlIGBCb2R5LnNldFBhcnRzYCB3aGVuIHNldHRpbmcgcGFydHMgdG8gZW5zdXJlIGNvcnJlY3QgdXBkYXRlcyBvZiBhbGwgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYXJ0c1xuICAgICAqIEB0eXBlIGJvZHlbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHJlc2VydmVkIGZvciBzdG9yaW5nIHBsdWdpbi1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBsdWdpblxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGYgcmVmZXJlbmNlIGlmIHRoZSBib2R5IGlzIF9ub3RfIGEgcGFydCBvZiBhbm90aGVyIGJvZHkuXG4gICAgICogT3RoZXJ3aXNlIHRoaXMgaXMgYSByZWZlcmVuY2UgdG8gdGhlIGJvZHkgdGhhdCB0aGlzIGlzIGEgcGFydCBvZi5cbiAgICAgKiBTZWUgYGJvZHkucGFydHNgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBhcmVudFxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgc3BlY2lmeWluZyB0aGUgYW5nbGUgb2YgdGhlIGJvZHksIGluIHJhZGlhbnMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYW5nbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgVmVjdG9yYCBvYmplY3RzIHRoYXQgc3BlY2lmeSB0aGUgY29udmV4IGh1bGwgb2YgdGhlIHJpZ2lkIGJvZHkuXG4gICAgICogVGhlc2Ugc2hvdWxkIGJlIHByb3ZpZGVkIGFib3V0IHRoZSBvcmlnaW4gYCgwLCAwKWAuIEUuZy5cbiAgICAgKlxuICAgICAqICAgICBbeyB4OiAwLCB5OiAwIH0sIHsgeDogMjUsIHk6IDUwIH0sIHsgeDogNTAsIHk6IDAgfV1cbiAgICAgKlxuICAgICAqIFdoZW4gcGFzc2VkIHZpYSBgQm9keS5jcmVhdGVgLCB0aGUgdmVydGljZXMgYXJlIHRyYW5zbGF0ZWQgcmVsYXRpdmUgdG8gYGJvZHkucG9zaXRpb25gIChpLmUuIHdvcmxkLXNwYWNlLCBhbmQgY29uc3RhbnRseSB1cGRhdGVkIGJ5IGBCb2R5LnVwZGF0ZWAgZHVyaW5nIHNpbXVsYXRpb24pLlxuICAgICAqIFRoZSBgVmVjdG9yYCBvYmplY3RzIGFyZSBhbHNvIGF1Z21lbnRlZCB3aXRoIGFkZGl0aW9uYWwgcHJvcGVydGllcyByZXF1aXJlZCBmb3IgZWZmaWNpZW50IGNvbGxpc2lvbiBkZXRlY3Rpb24uIFxuICAgICAqXG4gICAgICogT3RoZXIgcHJvcGVydGllcyBzdWNoIGFzIGBpbmVydGlhYCBhbmQgYGJvdW5kc2AgYXJlIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBmcm9tIHRoZSBwYXNzZWQgdmVydGljZXMgKHVubGVzcyBwcm92aWRlZCB2aWEgYG9wdGlvbnNgKS5cbiAgICAgKiBDb25jYXZlIGh1bGxzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZC4gVGhlIG1vZHVsZSBgTWF0dGVyLlZlcnRpY2VzYCBjb250YWlucyB1c2VmdWwgbWV0aG9kcyBmb3Igd29ya2luZyB3aXRoIHZlcnRpY2VzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHZlcnRpY2VzXG4gICAgICogQHR5cGUgdmVjdG9yW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGN1cnJlbnQgd29ybGQtc3BhY2UgcG9zaXRpb24gb2YgdGhlIGJvZHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9zaXRpb25cbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgZm9yY2UgdG8gYXBwbHkgaW4gdGhlIGN1cnJlbnQgc3RlcC4gSXQgaXMgemVyb2VkIGFmdGVyIGV2ZXJ5IGBCb2R5LnVwZGF0ZWAuIFNlZSBhbHNvIGBCb2R5LmFwcGx5Rm9yY2VgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZvcmNlXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHRvcnF1ZSAodHVybmluZyBmb3JjZSkgdG8gYXBwbHkgaW4gdGhlIGN1cnJlbnQgc3RlcC4gSXQgaXMgemVyb2VkIGFmdGVyIGV2ZXJ5IGBCb2R5LnVwZGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdG9ycXVlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGN1cnJlbnQgc3BlZWQgb2YgdGhlIGJvZHkgYWZ0ZXIgdGhlIGxhc3QgYEJvZHkudXBkYXRlYC4gSXQgaXMgcmVhZC1vbmx5IGFuZCBhbHdheXMgcG9zaXRpdmUgKGl0J3MgdGhlIG1hZ25pdHVkZSBvZiBgYm9keS52ZWxvY2l0eWApLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IHNwZWVkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGN1cnJlbnQgYW5ndWxhciBzcGVlZCBvZiB0aGUgYm9keSBhZnRlciB0aGUgbGFzdCBgQm9keS51cGRhdGVgLiBJdCBpcyByZWFkLW9ubHkgYW5kIGFsd2F5cyBwb3NpdGl2ZSAoaXQncyB0aGUgbWFnbml0dWRlIG9mIGBib2R5LmFuZ3VsYXJWZWxvY2l0eWApLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGFuZ3VsYXJTcGVlZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFZlY3RvcmAgdGhhdCBfbWVhc3VyZXNfIHRoZSBjdXJyZW50IHZlbG9jaXR5IG9mIHRoZSBib2R5IGFmdGVyIHRoZSBsYXN0IGBCb2R5LnVwZGF0ZWAuIEl0IGlzIHJlYWQtb25seS4gXG4gICAgICogSWYgeW91IG5lZWQgdG8gbW9kaWZ5IGEgYm9keSdzIHZlbG9jaXR5IGRpcmVjdGx5LCB5b3Ugc2hvdWxkIGVpdGhlciBhcHBseSBhIGZvcmNlIG9yIHNpbXBseSBjaGFuZ2UgdGhlIGJvZHkncyBgcG9zaXRpb25gIChhcyB0aGUgZW5naW5lIHVzZXMgcG9zaXRpb24tVmVybGV0IGludGVncmF0aW9uKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSB2ZWxvY2l0eVxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgX21lYXN1cmVzXyB0aGUgY3VycmVudCBhbmd1bGFyIHZlbG9jaXR5IG9mIHRoZSBib2R5IGFmdGVyIHRoZSBsYXN0IGBCb2R5LnVwZGF0ZWAuIEl0IGlzIHJlYWQtb25seS4gXG4gICAgICogSWYgeW91IG5lZWQgdG8gbW9kaWZ5IGEgYm9keSdzIGFuZ3VsYXIgdmVsb2NpdHkgZGlyZWN0bHksIHlvdSBzaG91bGQgYXBwbHkgYSB0b3JxdWUgb3Igc2ltcGx5IGNoYW5nZSB0aGUgYm9keSdzIGBhbmdsZWAgKGFzIHRoZSBlbmdpbmUgdXNlcyBwb3NpdGlvbi1WZXJsZXQgaW50ZWdyYXRpb24pLlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGFuZ3VsYXJWZWxvY2l0eVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyB3aGV0aGVyIGEgYm9keSBpcyBjb25zaWRlcmVkIHN0YXRpYy4gQSBzdGF0aWMgYm9keSBjYW4gbmV2ZXIgY2hhbmdlIHBvc2l0aW9uIG9yIGFuZ2xlIGFuZCBpcyBjb21wbGV0ZWx5IGZpeGVkLlxuICAgICAqIElmIHlvdSBuZWVkIHRvIHNldCBhIGJvZHkgYXMgc3RhdGljIGFmdGVyIGl0cyBjcmVhdGlvbiwgeW91IHNob3VsZCB1c2UgYEJvZHkuc2V0U3RhdGljYCBhcyB0aGlzIHJlcXVpcmVzIG1vcmUgdGhhbiBqdXN0IHNldHRpbmcgdGhpcyBmbGFnLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzU3RhdGljXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBhIGJvZHkgaXMgYSBzZW5zb3IuIFNlbnNvciB0cmlnZ2VycyBjb2xsaXNpb24gZXZlbnRzLCBidXQgZG9lc24ndCByZWFjdCB3aXRoIGNvbGxpZGluZyBib2R5IHBoeXNpY2FsbHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaXNTZW5zb3JcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBib2R5IGlzIGNvbnNpZGVyZWQgc2xlZXBpbmcuIEEgc2xlZXBpbmcgYm9keSBhY3RzIHNpbWlsYXIgdG8gYSBzdGF0aWMgYm9keSwgZXhjZXB0IGl0IGlzIG9ubHkgdGVtcG9yYXJ5IGFuZCBjYW4gYmUgYXdva2VuLlxuICAgICAqIElmIHlvdSBuZWVkIHRvIHNldCBhIGJvZHkgYXMgc2xlZXBpbmcsIHlvdSBzaG91bGQgdXNlIGBTbGVlcGluZy5zZXRgIGFzIHRoaXMgcmVxdWlyZXMgbW9yZSB0aGFuIGp1c3Qgc2V0dGluZyB0aGlzIGZsYWcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaXNTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IF9tZWFzdXJlc18gdGhlIGFtb3VudCBvZiBtb3ZlbWVudCBhIGJvZHkgY3VycmVudGx5IGhhcyAoYSBjb21iaW5hdGlvbiBvZiBgc3BlZWRgIGFuZCBgYW5ndWxhclNwZWVkYCkuIEl0IGlzIHJlYWQtb25seSBhbmQgYWx3YXlzIHBvc2l0aXZlLlxuICAgICAqIEl0IGlzIHVzZWQgYW5kIHVwZGF0ZWQgYnkgdGhlIGBNYXR0ZXIuU2xlZXBpbmdgIG1vZHVsZSBkdXJpbmcgc2ltdWxhdGlvbiB0byBkZWNpZGUgaWYgYSBib2R5IGhhcyBjb21lIHRvIHJlc3QuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgbW90aW9uXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG51bWJlciBvZiB1cGRhdGVzIGluIHdoaWNoIHRoaXMgYm9keSBtdXN0IGhhdmUgbmVhci16ZXJvIHZlbG9jaXR5IGJlZm9yZSBpdCBpcyBzZXQgYXMgc2xlZXBpbmcgYnkgdGhlIGBNYXR0ZXIuU2xlZXBpbmdgIG1vZHVsZSAoaWYgc2xlZXBpbmcgaXMgZW5hYmxlZCBieSB0aGUgZW5naW5lKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzbGVlcFRocmVzaG9sZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDYwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgZGVuc2l0eSBvZiB0aGUgYm9keSwgdGhhdCBpcyBpdHMgbWFzcyBwZXIgdW5pdCBhcmVhLlxuICAgICAqIElmIHlvdSBwYXNzIHRoZSBkZW5zaXR5IHZpYSBgQm9keS5jcmVhdGVgIHRoZSBgbWFzc2AgcHJvcGVydHkgaXMgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZvciB5b3UgYmFzZWQgb24gdGhlIHNpemUgKGFyZWEpIG9mIHRoZSBvYmplY3QuXG4gICAgICogVGhpcyBpcyBnZW5lcmFsbHkgcHJlZmVyYWJsZSB0byBzaW1wbHkgc2V0dGluZyBtYXNzIGFuZCBhbGxvd3MgZm9yIG1vcmUgaW50dWl0aXZlIGRlZmluaXRpb24gb2YgbWF0ZXJpYWxzIChlLmcuIHJvY2sgaGFzIGEgaGlnaGVyIGRlbnNpdHkgdGhhbiB3b29kKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZW5zaXR5XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC4wMDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBtYXNzIG9mIHRoZSBib2R5LCBhbHRob3VnaCBpdCBtYXkgYmUgbW9yZSBhcHByb3ByaWF0ZSB0byBzcGVjaWZ5IHRoZSBgZGVuc2l0eWAgcHJvcGVydHkgaW5zdGVhZC5cbiAgICAgKiBJZiB5b3UgbW9kaWZ5IHRoaXMgdmFsdWUsIHlvdSBtdXN0IGFsc28gbW9kaWZ5IHRoZSBgYm9keS5pbnZlcnNlTWFzc2AgcHJvcGVydHkgKGAxIC8gbWFzc2ApLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG1hc3NcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBpbnZlcnNlIG1hc3Mgb2YgdGhlIGJvZHkgKGAxIC8gbWFzc2ApLlxuICAgICAqIElmIHlvdSBtb2RpZnkgdGhpcyB2YWx1ZSwgeW91IG11c3QgYWxzbyBtb2RpZnkgdGhlIGBib2R5Lm1hc3NgIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGludmVyc2VNYXNzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbW9tZW50IG9mIGluZXJ0aWEgKGkuZS4gc2Vjb25kIG1vbWVudCBvZiBhcmVhKSBvZiB0aGUgYm9keS5cbiAgICAgKiBJdCBpcyBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gY29udmV4IGh1bGwgKGB2ZXJ0aWNlc2AgYXJyYXkpIGFuZCBkZW5zaXR5IGluIGBCb2R5LmNyZWF0ZWAuXG4gICAgICogSWYgeW91IG1vZGlmeSB0aGlzIHZhbHVlLCB5b3UgbXVzdCBhbHNvIG1vZGlmeSB0aGUgYGJvZHkuaW52ZXJzZUluZXJ0aWFgIHByb3BlcnR5IChgMSAvIGluZXJ0aWFgKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpbmVydGlhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgaW52ZXJzZSBtb21lbnQgb2YgaW5lcnRpYSBvZiB0aGUgYm9keSAoYDEgLyBpbmVydGlhYCkuXG4gICAgICogSWYgeW91IG1vZGlmeSB0aGlzIHZhbHVlLCB5b3UgbXVzdCBhbHNvIG1vZGlmeSB0aGUgYGJvZHkuaW5lcnRpYWAgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaW52ZXJzZUluZXJ0aWFcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSByZXN0aXR1dGlvbiAoZWxhc3RpY2l0eSkgb2YgdGhlIGJvZHkuIFRoZSB2YWx1ZSBpcyBhbHdheXMgcG9zaXRpdmUgYW5kIGlzIGluIHRoZSByYW5nZSBgKDAsIDEpYC5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyBjb2xsaXNpb25zIG1heSBiZSBwZXJmZWN0bHkgaW5lbGFzdGljIGFuZCBubyBib3VuY2luZyBtYXkgb2NjdXIuIFxuICAgICAqIEEgdmFsdWUgb2YgYDAuOGAgbWVhbnMgdGhlIGJvZHkgbWF5IGJvdW5jZSBiYWNrIHdpdGggYXBwcm94aW1hdGVseSA4MCUgb2YgaXRzIGtpbmV0aWMgZW5lcmd5LlxuICAgICAqIE5vdGUgdGhhdCBjb2xsaXNpb24gcmVzcG9uc2UgaXMgYmFzZWQgb24gX3BhaXJzXyBvZiBib2RpZXMsIGFuZCB0aGF0IGByZXN0aXR1dGlvbmAgdmFsdWVzIGFyZSBfY29tYmluZWRfIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtdWxhOlxuICAgICAqXG4gICAgICogICAgIE1hdGgubWF4KGJvZHlBLnJlc3RpdHV0aW9uLCBib2R5Qi5yZXN0aXR1dGlvbilcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZXN0aXR1dGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBmcmljdGlvbiBvZiB0aGUgYm9keS4gVGhlIHZhbHVlIGlzIGFsd2F5cyBwb3NpdGl2ZSBhbmQgaXMgaW4gdGhlIHJhbmdlIGAoMCwgMSlgLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoYXQgdGhlIGJvZHkgbWF5IHNsaWRlIGluZGVmaW5pdGVseS5cbiAgICAgKiBBIHZhbHVlIG9mIGAxYCBtZWFucyB0aGUgYm9keSBtYXkgY29tZSB0byBhIHN0b3AgYWxtb3N0IGluc3RhbnRseSBhZnRlciBhIGZvcmNlIGlzIGFwcGxpZWQuXG4gICAgICpcbiAgICAgKiBUaGUgZWZmZWN0cyBvZiB0aGUgdmFsdWUgbWF5IGJlIG5vbi1saW5lYXIuIFxuICAgICAqIEhpZ2ggdmFsdWVzIG1heSBiZSB1bnN0YWJsZSBkZXBlbmRpbmcgb24gdGhlIGJvZHkuXG4gICAgICogVGhlIGVuZ2luZSB1c2VzIGEgQ291bG9tYiBmcmljdGlvbiBtb2RlbCBpbmNsdWRpbmcgc3RhdGljIGFuZCBraW5ldGljIGZyaWN0aW9uLlxuICAgICAqIE5vdGUgdGhhdCBjb2xsaXNpb24gcmVzcG9uc2UgaXMgYmFzZWQgb24gX3BhaXJzXyBvZiBib2RpZXMsIGFuZCB0aGF0IGBmcmljdGlvbmAgdmFsdWVzIGFyZSBfY29tYmluZWRfIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtdWxhOlxuICAgICAqXG4gICAgICogICAgIE1hdGgubWluKGJvZHlBLmZyaWN0aW9uLCBib2R5Qi5mcmljdGlvbilcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmcmljdGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIHN0YXRpYyBmcmljdGlvbiBvZiB0aGUgYm9keSAoaW4gdGhlIENvdWxvbWIgZnJpY3Rpb24gbW9kZWwpLiBcbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyB0aGUgYm9keSB3aWxsIG5ldmVyICdzdGljaycgd2hlbiBpdCBpcyBuZWFybHkgc3RhdGlvbmFyeSBhbmQgb25seSBkeW5hbWljIGBmcmljdGlvbmAgaXMgdXNlZC5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSAoZS5nLiBgMTBgKSwgdGhlIG1vcmUgZm9yY2UgaXQgd2lsbCB0YWtlIHRvIGluaXRpYWxseSBnZXQgdGhlIGJvZHkgbW92aW5nIHdoZW4gbmVhcmx5IHN0YXRpb25hcnkuXG4gICAgICogVGhpcyB2YWx1ZSBpcyBtdWx0aXBsaWVkIHdpdGggdGhlIGBmcmljdGlvbmAgcHJvcGVydHkgdG8gbWFrZSBpdCBlYXNpZXIgdG8gY2hhbmdlIGBmcmljdGlvbmAgYW5kIG1haW50YWluIGFuIGFwcHJvcHJpYXRlIGFtb3VudCBvZiBzdGF0aWMgZnJpY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25TdGF0aWNcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBhaXIgZnJpY3Rpb24gb2YgdGhlIGJvZHkgKGFpciByZXNpc3RhbmNlKS4gXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhlIGJvZHkgd2lsbCBuZXZlciBzbG93IGFzIGl0IG1vdmVzIHRocm91Z2ggc3BhY2UuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBmYXN0ZXIgYSBib2R5IHNsb3dzIHdoZW4gbW92aW5nIHRocm91Z2ggc3BhY2UuXG4gICAgICogVGhlIGVmZmVjdHMgb2YgdGhlIHZhbHVlIGFyZSBub24tbGluZWFyLiBcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBmcmljdGlvbkFpclxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDAuMDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gZmlsdGVyaW5nIHByb3BlcnRpZXMgb2YgdGhpcyBib2R5LlxuICAgICAqXG4gICAgICogQ29sbGlzaW9ucyBiZXR3ZWVuIHR3byBib2RpZXMgd2lsbCBvYmV5IHRoZSBmb2xsb3dpbmcgcnVsZXM6XG4gICAgICogLSBJZiB0aGUgdHdvIGJvZGllcyBoYXZlIHRoZSBzYW1lIG5vbi16ZXJvIHZhbHVlIG9mIGBjb2xsaXNpb25GaWx0ZXIuZ3JvdXBgLFxuICAgICAqICAgdGhleSB3aWxsIGFsd2F5cyBjb2xsaWRlIGlmIHRoZSB2YWx1ZSBpcyBwb3NpdGl2ZSwgYW5kIHRoZXkgd2lsbCBuZXZlciBjb2xsaWRlXG4gICAgICogICBpZiB0aGUgdmFsdWUgaXMgbmVnYXRpdmUuXG4gICAgICogLSBJZiB0aGUgdHdvIGJvZGllcyBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgb2YgYGNvbGxpc2lvbkZpbHRlci5ncm91cGAgb3IgaWYgb25lXG4gICAgICogICAob3IgYm90aCkgb2YgdGhlIGJvZGllcyBoYXMgYSB2YWx1ZSBvZiAwLCB0aGVuIHRoZSBjYXRlZ29yeS9tYXNrIHJ1bGVzIGFwcGx5IGFzIGZvbGxvd3M6XG4gICAgICpcbiAgICAgKiBFYWNoIGJvZHkgYmVsb25ncyB0byBhIGNvbGxpc2lvbiBjYXRlZ29yeSwgZ2l2ZW4gYnkgYGNvbGxpc2lvbkZpbHRlci5jYXRlZ29yeWAuIFRoaXNcbiAgICAgKiB2YWx1ZSBpcyB1c2VkIGFzIGEgYml0IGZpZWxkIGFuZCB0aGUgY2F0ZWdvcnkgc2hvdWxkIGhhdmUgb25seSBvbmUgYml0IHNldCwgbWVhbmluZyB0aGF0XG4gICAgICogdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgYSBwb3dlciBvZiB0d28gaW4gdGhlIHJhbmdlIFsxLCAyXjMxXS4gVGh1cywgdGhlcmUgYXJlIDMyXG4gICAgICogZGlmZmVyZW50IGNvbGxpc2lvbiBjYXRlZ29yaWVzIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIEVhY2ggYm9keSBhbHNvIGRlZmluZXMgYSBjb2xsaXNpb24gYml0bWFzaywgZ2l2ZW4gYnkgYGNvbGxpc2lvbkZpbHRlci5tYXNrYCB3aGljaCBzcGVjaWZpZXNcbiAgICAgKiB0aGUgY2F0ZWdvcmllcyBpdCBjb2xsaWRlcyB3aXRoICh0aGUgdmFsdWUgaXMgdGhlIGJpdHdpc2UgQU5EIHZhbHVlIG9mIGFsbCB0aGVzZSBjYXRlZ29yaWVzKS5cbiAgICAgKlxuICAgICAqIFVzaW5nIHRoZSBjYXRlZ29yeS9tYXNrIHJ1bGVzLCB0d28gYm9kaWVzIGBBYCBhbmQgYEJgIGNvbGxpZGUgaWYgZWFjaCBpbmNsdWRlcyB0aGUgb3RoZXInc1xuICAgICAqIGNhdGVnb3J5IGluIGl0cyBtYXNrLCBpLmUuIGAoY2F0ZWdvcnlBICYgbWFza0IpICE9PSAwYCBhbmQgYChjYXRlZ29yeUIgJiBtYXNrQSkgIT09IDBgXG4gICAgICogYXJlIGJvdGggdHJ1ZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIEludGVnZXIgYE51bWJlcmAsIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gZ3JvdXAgdGhpcyBib2R5IGJlbG9uZ3MgdG8uXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLmdyb3VwXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBiaXQgZmllbGQgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBjYXRlZ29yeSB0aGlzIGJvZHkgYmVsb25ncyB0by5cbiAgICAgKiBUaGUgY2F0ZWdvcnkgdmFsdWUgc2hvdWxkIGhhdmUgb25seSBvbmUgYml0IHNldCwgZm9yIGV4YW1wbGUgYDB4MDAwMWAuXG4gICAgICogVGhpcyBtZWFucyB0aGVyZSBhcmUgdXAgdG8gMzIgdW5pcXVlIGNvbGxpc2lvbiBjYXRlZ29yaWVzIGF2YWlsYWJsZS5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXIuY2F0ZWdvcnlcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGJpdCBtYXNrIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gY2F0ZWdvcmllcyB0aGlzIGJvZHkgbWF5IGNvbGxpZGUgd2l0aC5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXIubWFza1xuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IC0xXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIGEgdG9sZXJhbmNlIG9uIGhvdyBmYXIgYSBib2R5IGlzIGFsbG93ZWQgdG8gJ3NpbmsnIG9yIHJvdGF0ZSBpbnRvIG90aGVyIGJvZGllcy5cbiAgICAgKiBBdm9pZCBjaGFuZ2luZyB0aGlzIHZhbHVlIHVubGVzcyB5b3UgdW5kZXJzdGFuZCB0aGUgcHVycG9zZSBvZiBgc2xvcGAgaW4gcGh5c2ljcyBlbmdpbmVzLlxuICAgICAqIFRoZSBkZWZhdWx0IHNob3VsZCBnZW5lcmFsbHkgc3VmZmljZSwgYWx0aG91Z2ggdmVyeSBsYXJnZSBib2RpZXMgbWF5IHJlcXVpcmUgbGFyZ2VyIHZhbHVlcyBmb3Igc3RhYmxlIHN0YWNraW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHNsb3BcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjA1XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgYWxsb3dzIHBlci1ib2R5IHRpbWUgc2NhbGluZywgZS5nLiBhIGZvcmNlLWZpZWxkIHdoZXJlIGJvZGllcyBpbnNpZGUgYXJlIGluIHNsb3ctbW90aW9uLCB3aGlsZSBvdGhlcnMgYXJlIGF0IGZ1bGwgc3BlZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltZVNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBkZWZpbmVzIHRoZSByZW5kZXJpbmcgcHJvcGVydGllcyB0byBiZSBjb25zdW1lZCBieSB0aGUgbW9kdWxlIGBNYXR0ZXIuUmVuZGVyYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyBpZiB0aGUgYm9keSBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnZpc2libGVcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgb3BhY2l0eSB0byB1c2Ugd2hlbiByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLm9wYWNpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgZGVmaW5lcyB0aGUgc3ByaXRlIHByb3BlcnRpZXMgdG8gdXNlIHdoZW4gcmVuZGVyaW5nLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBwYXRoIHRvIHRoZSBpbWFnZSB0byB1c2UgYXMgdGhlIHNwcml0ZSB0ZXh0dXJlLCBpZiBhbnkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS50ZXh0dXJlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgIFxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzY2FsaW5nIGluIHRoZSB4LWF4aXMgZm9yIHRoZSBzcHJpdGUsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnhTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzY2FsaW5nIGluIHRoZSB5LWF4aXMgZm9yIHRoZSBzcHJpdGUsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnlTY2FsZVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgICAvKipcbiAgICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIG9mZnNldCBpbiB0aGUgeC1heGlzIGZvciB0aGUgc3ByaXRlIChub3JtYWxpc2VkIGJ5IHRleHR1cmUgd2lkdGgpLlxuICAgICAgKlxuICAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS54T2Zmc2V0XG4gICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAqL1xuXG4gICAgIC8qKlxuICAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgb2Zmc2V0IGluIHRoZSB5LWF4aXMgZm9yIHRoZSBzcHJpdGUgKG5vcm1hbGlzZWQgYnkgdGV4dHVyZSBoZWlnaHQpLlxuICAgICAgKlxuICAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS55T2Zmc2V0XG4gICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGxpbmUgd2lkdGggdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBib2R5IG91dGxpbmUgKGlmIGEgc3ByaXRlIGlzIG5vdCBkZWZpbmVkKS5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyBubyBvdXRsaW5lIHdpbGwgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmxpbmVXaWR0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBmaWxsIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgYm9keSAoaWYgYSBzcHJpdGUgaXMgbm90IGRlZmluZWQpLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuZmlsbFN0eWxlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgYSByYW5kb20gY29sb3VyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgc3Ryb2tlIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgYm9keSBvdXRsaW5lIChpZiBhIHNwcml0ZSBpcyBub3QgZGVmaW5lZCkuXG4gICAgICogSXQgaXMgdGhlIHNhbWUgYXMgd2hlbiB1c2luZyBhIGNhbnZhcywgc28gaXQgYWNjZXB0cyBDU1Mgc3R5bGUgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zdHJva2VTdHlsZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IGEgcmFuZG9tIGNvbG91clxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgdW5pcXVlIGF4aXMgdmVjdG9ycyAoZWRnZSBub3JtYWxzKSB1c2VkIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxuICAgICAqIFRoZXNlIGFyZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gY29udmV4IGh1bGwgKGB2ZXJ0aWNlc2AgYXJyYXkpIGluIGBCb2R5LmNyZWF0ZWAuXG4gICAgICogVGhleSBhcmUgY29uc3RhbnRseSB1cGRhdGVkIGJ5IGBCb2R5LnVwZGF0ZWAgZHVyaW5nIHRoZSBzaW11bGF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGF4ZXNcbiAgICAgKiBAdHlwZSB2ZWN0b3JbXVxuICAgICAqL1xuICAgICBcbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgX21lYXN1cmVzXyB0aGUgYXJlYSBvZiB0aGUgYm9keSdzIGNvbnZleCBodWxsLCBjYWxjdWxhdGVkIGF0IGNyZWF0aW9uIGJ5IGBCb2R5LmNyZWF0ZWAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYXJlYVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm91bmRzYCBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBBQUJCIHJlZ2lvbiBmb3IgdGhlIGJvZHkuXG4gICAgICogSXQgaXMgYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGZyb20gdGhlIGdpdmVuIGNvbnZleCBodWxsIChgdmVydGljZXNgIGFycmF5KSBpbiBgQm9keS5jcmVhdGVgIGFuZCBjb25zdGFudGx5IHVwZGF0ZWQgYnkgYEJvZHkudXBkYXRlYCBkdXJpbmcgc2ltdWxhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib3VuZHNcbiAgICAgKiBAdHlwZSBib3VuZHNcbiAgICAgKi9cblxufSkoKTtcblxufSx7XCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi4vY29yZS9TbGVlcGluZ1wiOjIyLFwiLi4vZ2VvbWV0cnkvQXhlc1wiOjI1LFwiLi4vZ2VvbWV0cnkvQm91bmRzXCI6MjYsXCIuLi9nZW9tZXRyeS9WZWN0b3JcIjoyOCxcIi4uL2dlb21ldHJ5L1ZlcnRpY2VzXCI6MjksXCIuLi9yZW5kZXIvUmVuZGVyXCI6MzF9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5Db21wb3NpdGVgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbXBvc2l0ZSBib2RpZXMuXG4qIEEgY29tcG9zaXRlIGJvZHkgaXMgYSBjb2xsZWN0aW9uIG9mIGBNYXR0ZXIuQm9keWAsIGBNYXR0ZXIuQ29uc3RyYWludGAgYW5kIG90aGVyIGBNYXR0ZXIuQ29tcG9zaXRlYCwgdGhlcmVmb3JlIGNvbXBvc2l0ZXMgZm9ybSBhIHRyZWUgc3RydWN0dXJlLlxuKiBJdCBpcyBpbXBvcnRhbnQgdG8gdXNlIHRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgdG8gbW9kaWZ5IGNvbXBvc2l0ZXMsIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGVpciBwcm9wZXJ0aWVzLlxuKiBOb3RlIHRoYXQgdGhlIGBNYXR0ZXIuV29ybGRgIG9iamVjdCBpcyBhbHNvIGEgdHlwZSBvZiBgTWF0dGVyLkNvbXBvc2l0ZWAgYW5kIGFzIHN1Y2ggYWxsIGNvbXBvc2l0ZSBtZXRob2RzIGhlcmUgY2FuIGFsc28gb3BlcmF0ZSBvbiBhIGBNYXR0ZXIuV29ybGRgLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQ29tcG9zaXRlXG4qL1xuXG52YXIgQ29tcG9zaXRlID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9zaXRlO1xuXG52YXIgRXZlbnRzID0gX2RlcmVxXygnLi4vY29yZS9FdmVudHMnKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xudmFyIEJvdW5kcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0JvdW5kcycpO1xudmFyIEJvZHkgPSBfZGVyZXFfKCcuL0JvZHknKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb21wb3NpdGUuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVyaXRlcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGVcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZCh7IFxuICAgICAgICAgICAgaWQ6IENvbW1vbi5uZXh0SWQoKSxcbiAgICAgICAgICAgIHR5cGU6ICdjb21wb3NpdGUnLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgaXNNb2RpZmllZDogZmFsc2UsXG4gICAgICAgICAgICBib2RpZXM6IFtdLCBcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSwgXG4gICAgICAgICAgICBjb21wb3NpdGVzOiBbXSxcbiAgICAgICAgICAgIGxhYmVsOiAnQ29tcG9zaXRlJyxcbiAgICAgICAgICAgIHBsdWdpbjoge31cbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbXBvc2l0ZSdzIGBpc01vZGlmaWVkYCBmbGFnLiBcbiAgICAgKiBJZiBgdXBkYXRlUGFyZW50c2AgaXMgdHJ1ZSwgYWxsIHBhcmVudHMgd2lsbCBiZSBzZXQgKGRlZmF1bHQ6IGZhbHNlKS5cbiAgICAgKiBJZiBgdXBkYXRlQ2hpbGRyZW5gIGlzIHRydWUsIGFsbCBjaGlsZHJlbiB3aWxsIGJlIHNldCAoZGVmYXVsdDogZmFsc2UpLlxuICAgICAqIEBtZXRob2Qgc2V0TW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc01vZGlmaWVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdXBkYXRlUGFyZW50cz1mYWxzZV1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1cGRhdGVDaGlsZHJlbj1mYWxzZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGlzTW9kaWZpZWQsIHVwZGF0ZVBhcmVudHMsIHVwZGF0ZUNoaWxkcmVuKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5pc01vZGlmaWVkID0gaXNNb2RpZmllZDtcblxuICAgICAgICBpZiAodXBkYXRlUGFyZW50cyAmJiBjb21wb3NpdGUucGFyZW50KSB7XG4gICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLnBhcmVudCwgaXNNb2RpZmllZCwgdXBkYXRlUGFyZW50cywgdXBkYXRlQ2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVwZGF0ZUNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRDb21wb3NpdGUgPSBjb21wb3NpdGUuY29tcG9zaXRlc1tpXTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY2hpbGRDb21wb3NpdGUsIGlzTW9kaWZpZWQsIHVwZGF0ZVBhcmVudHMsIHVwZGF0ZUNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIGFkZCBmdW5jdGlvbi4gQWRkcyBvbmUgb3IgbWFueSBib2R5KHMpLCBjb25zdHJhaW50KHMpIG9yIGEgY29tcG9zaXRlKHMpIHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogVHJpZ2dlcnMgYGJlZm9yZUFkZGAgYW5kIGBhZnRlckFkZGAgZXZlbnRzIG9uIHRoZSBgY29tcG9zaXRlYC5cbiAgICAgKiBAbWV0aG9kIGFkZFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIG9iamVjdHMgYWRkZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWRkID0gZnVuY3Rpb24oY29tcG9zaXRlLCBvYmplY3QpIHtcbiAgICAgICAgdmFyIG9iamVjdHMgPSBbXS5jb25jYXQob2JqZWN0KTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdiZWZvcmVBZGQnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IG9iamVjdHNbaV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAob2JqLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBhZGRpbmcgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgICAgICBpZiAob2JqLnBhcmVudCAhPT0gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdDb21wb3NpdGUuYWRkOiBza2lwcGVkIGFkZGluZyBhIGNvbXBvdW5kIGJvZHkgcGFydCAoeW91IG11c3QgYWRkIGl0cyBwYXJlbnQgaW5zdGVhZCknKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY29tcG9zaXRlLCBvYmopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29tcG9zaXRlJzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29tcG9zaXRlKGNvbXBvc2l0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlQ29uc3RyYWludCc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBvYmouY29uc3RyYWludCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2FmdGVyQWRkJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIHJlbW92ZSBmdW5jdGlvbi4gUmVtb3ZlcyBvbmUgb3IgbWFueSBib2R5KHMpLCBjb25zdHJhaW50KHMpIG9yIGEgY29tcG9zaXRlKHMpIHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogT3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVSZW1vdmVgIGFuZCBgYWZ0ZXJSZW1vdmVgIGV2ZW50cyBvbiB0aGUgYGNvbXBvc2l0ZWAuXG4gICAgICogQG1ldGhvZCByZW1vdmVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIG9iamVjdHMgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmUgPSBmdW5jdGlvbihjb21wb3NpdGUsIG9iamVjdCwgZGVlcCkge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IFtdLmNvbmNhdChvYmplY3QpO1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2JlZm9yZVJlbW92ZScsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gb2JqZWN0c1tpXTtcblxuICAgICAgICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQm9keShjb21wb3NpdGUsIG9iaiwgZGVlcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb25zdHJhaW50JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludChjb21wb3NpdGUsIG9iaiwgZGVlcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb21wb3NpdGUnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGUoY29tcG9zaXRlLCBvYmosIGRlZXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW91c2VDb25zdHJhaW50JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludChjb21wb3NpdGUsIG9iai5jb25zdHJhaW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYWZ0ZXJSZW1vdmUnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBjb21wb3NpdGUgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYWRkQ29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUFcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQlxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZUEgd2l0aCB0aGUgb2JqZWN0cyBmcm9tIGNvbXBvc2l0ZUIgYWRkZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWRkQ29tcG9zaXRlID0gZnVuY3Rpb24oY29tcG9zaXRlQSwgY29tcG9zaXRlQikge1xuICAgICAgICBjb21wb3NpdGVBLmNvbXBvc2l0ZXMucHVzaChjb21wb3NpdGVCKTtcbiAgICAgICAgY29tcG9zaXRlQi5wYXJlbnQgPSBjb21wb3NpdGVBO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlQSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlQTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbXBvc2l0ZSBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUsIGFuZCBvcHRpb25hbGx5IHNlYXJjaGluZyBpdHMgY2hpbGRyZW4gcmVjdXJzaXZlbHkuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVBXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZUEgd2l0aCB0aGUgY29tcG9zaXRlIHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlID0gZnVuY3Rpb24oY29tcG9zaXRlQSwgY29tcG9zaXRlQiwgZGVlcCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBDb21tb24uaW5kZXhPZihjb21wb3NpdGVBLmNvbXBvc2l0ZXMsIGNvbXBvc2l0ZUIpO1xuICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlQXQoY29tcG9zaXRlQSwgcG9zaXRpb24pO1xuICAgICAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZUEsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZUEuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZShjb21wb3NpdGVBLmNvbXBvc2l0ZXNbaV0sIGNvbXBvc2l0ZUIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZUE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb21wb3NpdGUgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb21wb3NpdGVBdFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgY29tcG9zaXRlIHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29tcG9zaXRlQXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5jb21wb3NpdGVzLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJvZHkgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYWRkQm9keVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgYm9keSBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGRCb2R5ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBib2R5KSB7XG4gICAgICAgIGNvbXBvc2l0ZS5ib2RpZXMucHVzaChib2R5KTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYm9keSBmcm9tIHRoZSBnaXZlbiBjb21wb3NpdGUsIGFuZCBvcHRpb25hbGx5IHNlYXJjaGluZyBpdHMgY2hpbGRyZW4gcmVjdXJzaXZlbHkuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZUJvZHlcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgYm9keSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkgPSBmdW5jdGlvbihjb21wb3NpdGUsIGJvZHksIGRlZXApIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gQ29tbW9uLmluZGV4T2YoY29tcG9zaXRlLmJvZGllcywgYm9keSk7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5QXQoY29tcG9zaXRlLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGJvZHksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVCb2R5QXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5QXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5ib2RpZXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29uc3RyYWludCB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBhZGRDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGNvbnN0cmFpbnQpIHtcbiAgICAgICAgY29tcG9zaXRlLmNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbnN0cmFpbnQgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbnN0cmFpbnQgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb25zdHJhaW50LCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZS5jb25zdHJhaW50cywgY29uc3RyYWludCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50QXQoY29tcG9zaXRlLCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbnN0cmFpbnQoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGNvbnN0cmFpbnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb25zdHJhaW50QXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbnN0cmFpbnQgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50QXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5jb25zdHJhaW50cy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGJvZGllcywgY29uc3RyYWludHMgYW5kIGNvbXBvc2l0ZXMgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIE9wdGlvbmFsbHkgY2xlYXJpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBrZWVwU3RhdGljXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuY2xlYXIgPSBmdW5jdGlvbihjb21wb3NpdGUsIGtlZXBTdGF0aWMsIGRlZXApIHtcbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5jbGVhcihjb21wb3NpdGUuY29tcG9zaXRlc1tpXSwga2VlcFN0YXRpYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChrZWVwU3RhdGljKSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcy5maWx0ZXIoZnVuY3Rpb24oYm9keSkgeyByZXR1cm4gYm9keS5pc1N0YXRpYzsgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuYm9kaWVzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb3NpdGUuY29uc3RyYWludHMubGVuZ3RoID0gMDtcbiAgICAgICAgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGJvZGllcyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGJvZGllcyBpbiBpdHMgY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgYWxsQm9kaWVzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2JvZHlbXX0gQWxsIHRoZSBib2RpZXNcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWxsQm9kaWVzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSBbXS5jb25jYXQoY29tcG9zaXRlLmJvZGllcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGJvZGllcyA9IGJvZGllcy5jb25jYXQoQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUuY29tcG9zaXRlc1tpXSkpO1xuXG4gICAgICAgIHJldHVybiBib2RpZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGNvbnN0cmFpbnRzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUsIGluY2x1ZGluZyBhbGwgY29uc3RyYWludHMgaW4gaXRzIGNoaWxkcmVuLCByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGFsbENvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2NvbnN0cmFpbnRbXX0gQWxsIHRoZSBjb25zdHJhaW50c1xuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSkge1xuICAgICAgICB2YXIgY29uc3RyYWludHMgPSBbXS5jb25jYXQoY29tcG9zaXRlLmNvbnN0cmFpbnRzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgY29uc3RyYWludHMgPSBjb25zdHJhaW50cy5jb25jYXQoQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldKSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnRzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjb21wb3NpdGVzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUsIGluY2x1ZGluZyBhbGwgY29tcG9zaXRlcyBpbiBpdHMgY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgYWxsQ29tcG9zaXRlc1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGVbXX0gQWxsIHRoZSBjb21wb3NpdGVzXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgdmFyIGNvbXBvc2l0ZXMgPSBbXS5jb25jYXQoY29tcG9zaXRlLmNvbXBvc2l0ZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBjb21wb3NpdGVzID0gY29tcG9zaXRlcy5jb25jYXQoQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0pKTtcblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgdGhlIGNvbXBvc2l0ZSByZWN1cnNpdmVseSBmb3IgYW4gb2JqZWN0IG1hdGNoaW5nIHRoZSB0eXBlIGFuZCBpZCBzdXBwbGllZCwgbnVsbCBpZiBub3QgZm91bmQuXG4gICAgICogQG1ldGhvZCBnZXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSByZXF1ZXN0ZWQgb2JqZWN0LCBpZiBmb3VuZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5nZXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGlkLCB0eXBlKSB7XG4gICAgICAgIHZhciBvYmplY3RzLFxuICAgICAgICAgICAgb2JqZWN0O1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgICAgIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG4gICAgICAgICAgICBvYmplY3RzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKGNvbXBvc2l0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29tcG9zaXRlJzpcbiAgICAgICAgICAgIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyhjb21wb3NpdGUpLmNvbmNhdChjb21wb3NpdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9iamVjdHMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICBvYmplY3QgPSBvYmplY3RzLmZpbHRlcihmdW5jdGlvbihvYmplY3QpIHsgXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmlkLnRvU3RyaW5nKCkgPT09IGlkLnRvU3RyaW5nKCk7IFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb2JqZWN0Lmxlbmd0aCA9PT0gMCA/IG51bGwgOiBvYmplY3RbMF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBnaXZlbiBvYmplY3QocykgZnJvbSBjb21wb3NpdGVBIHRvIGNvbXBvc2l0ZUIgKGVxdWFsIHRvIGEgcmVtb3ZlIGZvbGxvd2VkIGJ5IGFuIGFkZCkuXG4gICAgICogQG1ldGhvZCBtb3ZlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGVBfSBjb21wb3NpdGVBXG4gICAgICogQHBhcmFtIHtvYmplY3RbXX0gb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlQn0gY29tcG9zaXRlQlxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gUmV0dXJucyBjb21wb3NpdGVBXG4gICAgICovXG4gICAgQ29tcG9zaXRlLm1vdmUgPSBmdW5jdGlvbihjb21wb3NpdGVBLCBvYmplY3RzLCBjb21wb3NpdGVCKSB7XG4gICAgICAgIENvbXBvc2l0ZS5yZW1vdmUoY29tcG9zaXRlQSwgb2JqZWN0cyk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGQoY29tcG9zaXRlQiwgb2JqZWN0cyk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGVBO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ25zIG5ldyBpZHMgZm9yIGFsbCBvYmplY3RzIGluIHRoZSBjb21wb3NpdGUsIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgcmViYXNlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gUmV0dXJucyBjb21wb3NpdGVcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmViYXNlID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIHZhciBvYmplY3RzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyhjb21wb3NpdGUpKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9iamVjdHNbaV0uaWQgPSBDb21tb24ubmV4dElkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyBhbGwgY2hpbGRyZW4gaW4gdGhlIGNvbXBvc2l0ZSBieSBhIGdpdmVuIHZlY3RvciByZWxhdGl2ZSB0byB0aGVpciBjdXJyZW50IHBvc2l0aW9ucywgXG4gICAgICogd2l0aG91dCBpbXBhcnRpbmcgYW55IHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2QgdHJhbnNsYXRlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB0cmFuc2xhdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW3JlY3Vyc2l2ZT10cnVlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS50cmFuc2xhdGUgPSBmdW5jdGlvbihjb21wb3NpdGUsIHRyYW5zbGF0aW9uLCByZWN1cnNpdmUpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IHJlY3Vyc2l2ZSA/IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKSA6IGNvbXBvc2l0ZS5ib2RpZXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIEJvZHkudHJhbnNsYXRlKGJvZGllc1tpXSwgdHJhbnNsYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgYWxsIGNoaWxkcmVuIGluIHRoZSBjb21wb3NpdGUgYnkgYSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgZ2l2ZW4gcG9pbnQsIHdpdGhvdXQgaW1wYXJ0aW5nIGFueSBhbmd1bGFyIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvblxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW3JlY3Vyc2l2ZT10cnVlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yb3RhdGUgPSBmdW5jdGlvbihjb21wb3NpdGUsIHJvdGF0aW9uLCBwb2ludCwgcmVjdXJzaXZlKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyb3RhdGlvbiksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbiksXG4gICAgICAgICAgICBib2RpZXMgPSByZWN1cnNpdmUgPyBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSkgOiBjb21wb3NpdGUuYm9kaWVzO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBkeCA9IGJvZHkucG9zaXRpb24ueCAtIHBvaW50LngsXG4gICAgICAgICAgICAgICAgZHkgPSBib2R5LnBvc2l0aW9uLnkgLSBwb2ludC55O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7XG4gICAgICAgICAgICAgICAgeDogcG9pbnQueCArIChkeCAqIGNvcyAtIGR5ICogc2luKSxcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55ICsgKGR4ICogc2luICsgZHkgKiBjb3MpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgQm9keS5yb3RhdGUoYm9keSwgcm90YXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNjYWxlcyBhbGwgY2hpbGRyZW4gaW4gdGhlIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIHVwZGF0aW5nIHBoeXNpY2FsIHByb3BlcnRpZXMgKG1hc3MsIGFyZWEsIGF4ZXMsIGluZXJ0aWEpLCBmcm9tIGEgd29ybGQtc3BhY2UgcG9pbnQuXG4gICAgICogQG1ldGhvZCBzY2FsZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW3JlY3Vyc2l2ZT10cnVlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5zY2FsZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgc2NhbGVYLCBzY2FsZVksIHBvaW50LCByZWN1cnNpdmUpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IHJlY3Vyc2l2ZSA/IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKSA6IGNvbXBvc2l0ZS5ib2RpZXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGR4ID0gYm9keS5wb3NpdGlvbi54IC0gcG9pbnQueCxcbiAgICAgICAgICAgICAgICBkeSA9IGJvZHkucG9zaXRpb24ueSAtIHBvaW50Lnk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHtcbiAgICAgICAgICAgICAgICB4OiBwb2ludC54ICsgZHggKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIGR5ICogc2NhbGVZXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgQm9keS5zY2FsZShib2R5LCBzY2FsZVgsIHNjYWxlWSk7XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdW5pb24gb2YgdGhlIGJvdW5kcyBvZiBhbGwgb2YgdGhlIGNvbXBvc2l0ZSdzIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIGJvdW5kc1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGUgVGhlIGNvbXBvc2l0ZS5cbiAgICAgKiBAcmV0dXJucyB7Ym91bmRzfSBUaGUgY29tcG9zaXRlIGJvdW5kcy5cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYm91bmRzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSksXG4gICAgICAgICAgICB2ZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goYm9keS5ib3VuZHMubWluLCBib2R5LmJvdW5kcy5tYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvdW5kcy5jcmVhdGUodmVydGljZXMpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIGEgY2FsbCB0byBgQ29tcG9zaXRlLmFkZGAgaXMgbWFkZSwgYmVmb3JlIG9iamVjdHMgaGF2ZSBiZWVuIGFkZGVkLlxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVBZGRcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0byBiZSBhZGRlZCAobWF5IGJlIGEgc2luZ2xlIGJvZHksIGNvbnN0cmFpbnQsIGNvbXBvc2l0ZSBvciBhIG1peGVkIGFycmF5IG9mIHRoZXNlKVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBjYWxsIHRvIGBDb21wb3NpdGUuYWRkYCBpcyBtYWRlLCBhZnRlciBvYmplY3RzIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJBZGRcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0aGF0IGhhdmUgYmVlbiBhZGRlZCAobWF5IGJlIGEgc2luZ2xlIGJvZHksIGNvbnN0cmFpbnQsIGNvbXBvc2l0ZSBvciBhIG1peGVkIGFycmF5IG9mIHRoZXNlKVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBjYWxsIHRvIGBDb21wb3NpdGUucmVtb3ZlYCBpcyBtYWRlLCBiZWZvcmUgb2JqZWN0cyBoYXZlIGJlZW4gcmVtb3ZlZC5cbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlUmVtb3ZlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdG8gYmUgcmVtb3ZlZCAobWF5IGJlIGEgc2luZ2xlIGJvZHksIGNvbnN0cmFpbnQsIGNvbXBvc2l0ZSBvciBhIG1peGVkIGFycmF5IG9mIHRoZXNlKVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBjYWxsIHRvIGBDb21wb3NpdGUucmVtb3ZlYCBpcyBtYWRlLCBhZnRlciBvYmplY3RzIGhhdmUgYmVlbiByZW1vdmVkLlxuICAgICpcbiAgICAqIEBldmVudCBhZnRlclJlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgKG1heSBiZSBhIHNpbmdsZSBib2R5LCBjb25zdHJhaW50LCBjb21wb3NpdGUgb3IgYSBtaXhlZCBhcnJheSBvZiB0aGVzZSlcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIG51bWJlciBnZW5lcmF0ZWQgaW4gYENvbXBvc2l0ZS5jcmVhdGVgIGJ5IGBDb21tb24ubmV4dElkYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBpZFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiY29tcG9zaXRlXCJcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFyYml0cmFyeSBgU3RyaW5nYCBuYW1lIHRvIGhlbHAgdGhlIHVzZXIgaWRlbnRpZnkgYW5kIG1hbmFnZSBjb21wb3NpdGVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGxhYmVsXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJDb21wb3NpdGVcIlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIGNvbXBvc2l0ZSBoYXMgYmVlbiBtb2RpZmllZCBkdXJpbmcgdGhlIGN1cnJlbnQgc3RlcC5cbiAgICAgKiBNb3N0IGBNYXR0ZXIuQ29tcG9zaXRlYCBtZXRob2RzIHdpbGwgYXV0b21hdGljYWxseSBzZXQgdGhpcyBmbGFnIHRvIGB0cnVlYCB0byBpbmZvcm0gdGhlIGVuZ2luZSBvZiBjaGFuZ2VzIHRvIGJlIGhhbmRsZWQuXG4gICAgICogSWYgeW91IG5lZWQgdG8gY2hhbmdlIGl0IG1hbnVhbGx5LCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5zZXRNb2RpZmllZGAgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzTW9kaWZpZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBgQ29tcG9zaXRlYCB0aGF0IGlzIHRoZSBwYXJlbnQgb2YgdGhpcyBjb21wb3NpdGUuIEl0IGlzIGF1dG9tYXRpY2FsbHkgbWFuYWdlZCBieSB0aGUgYE1hdHRlci5Db21wb3NpdGVgIG1ldGhvZHMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFyZW50XG4gICAgICogQHR5cGUgY29tcG9zaXRlXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYEJvZHlgIHRoYXQgYXJlIF9kaXJlY3RfIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9zaXRlLlxuICAgICAqIFRvIGFkZCBvciByZW1vdmUgYm9kaWVzIHlvdSBzaG91bGQgdXNlIGBDb21wb3NpdGUuYWRkYCBhbmQgYENvbXBvc2l0ZS5yZW1vdmVgIG1ldGhvZHMgcmF0aGVyIHRoYW4gZGlyZWN0bHkgbW9kaWZ5aW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICogSWYgeW91IHdpc2ggdG8gcmVjdXJzaXZlbHkgZmluZCBhbGwgZGVzY2VuZGFudHMsIHlvdSBzaG91bGQgdXNlIHRoZSBgQ29tcG9zaXRlLmFsbEJvZGllc2AgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvZGllc1xuICAgICAqIEB0eXBlIGJvZHlbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgQ29uc3RyYWludGAgdGhhdCBhcmUgX2RpcmVjdF8gY2hpbGRyZW4gb2YgdGhpcyBjb21wb3NpdGUuXG4gICAgICogVG8gYWRkIG9yIHJlbW92ZSBjb25zdHJhaW50cyB5b3Ugc2hvdWxkIHVzZSBgQ29tcG9zaXRlLmFkZGAgYW5kIGBDb21wb3NpdGUucmVtb3ZlYCBtZXRob2RzIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGlzIHByb3BlcnR5LlxuICAgICAqIElmIHlvdSB3aXNoIHRvIHJlY3Vyc2l2ZWx5IGZpbmQgYWxsIGRlc2NlbmRhbnRzLCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5hbGxDb25zdHJhaW50c2AgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnN0cmFpbnRzXG4gICAgICogQHR5cGUgY29uc3RyYWludFtdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGBDb21wb3NpdGVgIHRoYXQgYXJlIF9kaXJlY3RfIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9zaXRlLlxuICAgICAqIFRvIGFkZCBvciByZW1vdmUgY29tcG9zaXRlcyB5b3Ugc2hvdWxkIHVzZSBgQ29tcG9zaXRlLmFkZGAgYW5kIGBDb21wb3NpdGUucmVtb3ZlYCBtZXRob2RzIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGlzIHByb3BlcnR5LlxuICAgICAqIElmIHlvdSB3aXNoIHRvIHJlY3Vyc2l2ZWx5IGZpbmQgYWxsIGRlc2NlbmRhbnRzLCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzYCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29tcG9zaXRlc1xuICAgICAqIEB0eXBlIGNvbXBvc2l0ZVtdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG59KSgpO1xuXG59LHtcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuLi9jb3JlL0V2ZW50c1wiOjE2LFwiLi4vZ2VvbWV0cnkvQm91bmRzXCI6MjYsXCIuL0JvZHlcIjoxfV0sMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuV29ybGRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHRoZSB3b3JsZCBjb21wb3NpdGUuXG4qIEEgYE1hdHRlci5Xb3JsZGAgaXMgYSBgTWF0dGVyLkNvbXBvc2l0ZWAgYm9keSwgd2hpY2ggaXMgYSBjb2xsZWN0aW9uIG9mIGBNYXR0ZXIuQm9keWAsIGBNYXR0ZXIuQ29uc3RyYWludGAgYW5kIG90aGVyIGBNYXR0ZXIuQ29tcG9zaXRlYC5cbiogQSBgTWF0dGVyLldvcmxkYCBoYXMgYSBmZXcgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIGluY2x1ZGluZyBgZ3Jhdml0eWAgYW5kIGBib3VuZHNgLlxuKiBJdCBpcyBpbXBvcnRhbnQgdG8gdXNlIHRoZSBmdW5jdGlvbnMgaW4gdGhlIGBNYXR0ZXIuQ29tcG9zaXRlYCBtb2R1bGUgdG8gbW9kaWZ5IHRoZSB3b3JsZCBjb21wb3NpdGUsIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyBpdHMgcHJvcGVydGllcy5cbiogVGhlcmUgYXJlIGFsc28gYSBmZXcgbWV0aG9kcyBoZXJlIHRoYXQgYWxpYXMgdGhvc2UgaW4gYE1hdHRlci5Db21wb3NpdGVgIGZvciBlYXNpZXIgcmVhZGFiaWxpdHkuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBXb3JsZFxuKiBAZXh0ZW5kcyBDb21wb3NpdGVcbiovXG5cbnZhciBXb3JsZCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmxkO1xuXG52YXIgQ29tcG9zaXRlID0gX2RlcmVxXygnLi9Db21wb3NpdGUnKTtcbnZhciBDb25zdHJhaW50ID0gX2RlcmVxXygnLi4vY29uc3RyYWludC9Db25zdHJhaW50Jyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyB3b3JsZCBjb21wb3NpdGUuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge3dvcmxkfSBBIG5ldyB3b3JsZFxuICAgICAqL1xuICAgIFdvcmxkLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNvbXBvc2l0ZSA9IENvbXBvc2l0ZS5jcmVhdGUoKTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBsYWJlbDogJ1dvcmxkJyxcbiAgICAgICAgICAgIGdyYXZpdHk6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuMDAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm91bmRzOiB7IFxuICAgICAgICAgICAgICAgIG1pbjogeyB4OiAtSW5maW5pdHksIHk6IC1JbmZpbml0eSB9LCBcbiAgICAgICAgICAgICAgICBtYXg6IHsgeDogSW5maW5pdHksIHk6IEluZmluaXR5IH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZChjb21wb3NpdGUsIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0eSB0byBhcHBseSBvbiB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZ3Jhdml0eVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyYXZpdHkgeCBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZ3Jhdml0eS54XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyYXZpdHkgeSBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZ3Jhdml0eS55XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyYXZpdHkgc2NhbGUgZmFjdG9yLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHkuc2NhbGVcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAwLjAwMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm91bmRzYCBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSB3b3JsZCBib3VuZHMgZm9yIGNvbGxpc2lvbiBkZXRlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm91bmRzXG4gICAgICogQHR5cGUgYm91bmRzXG4gICAgICogQGRlZmF1bHQgeyBtaW46IHsgeDogLUluZmluaXR5LCB5OiAtSW5maW5pdHkgfSwgbWF4OiB7IHg6IEluZmluaXR5LCB5OiBJbmZpbml0eSB9IH1cbiAgICAgKi9cblxuICAgIC8vIFdvcmxkIGlzIGEgQ29tcG9zaXRlIGJvZHlcbiAgICAvLyBzZWUgc3JjL21vZHVsZS9PdXRyby5qcyBmb3IgdGhlc2UgYWxpYXNlczpcbiAgICBcbiAgICAvKipcbiAgICAgKiBBbiBhbGlhcyBmb3IgQ29tcG9zaXRlLmFkZFxuICAgICAqIEBtZXRob2QgYWRkXG4gICAgICogQHBhcmFtIHt3b3JsZH0gd29ybGRcbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgd29ybGQgd2l0aCB0aGUgb2JqZWN0cyBhZGRlZFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXMgZm9yIENvbXBvc2l0ZS5yZW1vdmVcbiAgICAgKiBAbWV0aG9kIHJlbW92ZVxuICAgICAqIEBwYXJhbSB7d29ybGR9IHdvcmxkXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgd29ybGQgd2l0aCB0aGUgb2JqZWN0cyByZW1vdmVkXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhcyBmb3IgQ29tcG9zaXRlLmNsZWFyXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7d29ybGR9IHdvcmxkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBrZWVwU3RhdGljXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhcyBmb3IgQ29tcG9zaXRlLmFkZENvbXBvc2l0ZVxuICAgICAqIEBtZXRob2QgYWRkQ29tcG9zaXRlXG4gICAgICogQHBhcmFtIHt3b3JsZH0gd29ybGRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7d29ybGR9IFRoZSBvcmlnaW5hbCB3b3JsZCB3aXRoIHRoZSBvYmplY3RzIGZyb20gY29tcG9zaXRlIGFkZGVkXG4gICAgICovXG4gICAgXG4gICAgIC8qKlxuICAgICAgKiBBbiBhbGlhcyBmb3IgQ29tcG9zaXRlLmFkZEJvZHlcbiAgICAgICogQG1ldGhvZCBhZGRCb2R5XG4gICAgICAqIEBwYXJhbSB7d29ybGR9IHdvcmxkXG4gICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAgKiBAcmV0dXJuIHt3b3JsZH0gVGhlIG9yaWdpbmFsIHdvcmxkIHdpdGggdGhlIGJvZHkgYWRkZWRcbiAgICAgICovXG5cbiAgICAgLyoqXG4gICAgICAqIEFuIGFsaWFzIGZvciBDb21wb3NpdGUuYWRkQ29uc3RyYWludFxuICAgICAgKiBAbWV0aG9kIGFkZENvbnN0cmFpbnRcbiAgICAgICogQHBhcmFtIHt3b3JsZH0gd29ybGRcbiAgICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICAqIEByZXR1cm4ge3dvcmxkfSBUaGUgb3JpZ2luYWwgd29ybGQgd2l0aCB0aGUgY29uc3RyYWludCBhZGRlZFxuICAgICAgKi9cblxufSkoKTtcblxufSx7XCIuLi9jb25zdHJhaW50L0NvbnN0cmFpbnRcIjoxMixcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuL0NvbXBvc2l0ZVwiOjJ9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5Db250YWN0YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gY29udGFjdHMuXG4qXG4qIEBjbGFzcyBDb250YWN0XG4qL1xuXG52YXIgQ29udGFjdCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhY3Q7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29udGFjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGV4fSB2ZXJ0ZXhcbiAgICAgKiBAcmV0dXJuIHtjb250YWN0fSBBIG5ldyBjb250YWN0XG4gICAgICovXG4gICAgQ29udGFjdC5jcmVhdGUgPSBmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBDb250YWN0LmlkKHZlcnRleCksXG4gICAgICAgICAgICB2ZXJ0ZXg6IHZlcnRleCxcbiAgICAgICAgICAgIG5vcm1hbEltcHVsc2U6IDAsXG4gICAgICAgICAgICB0YW5nZW50SW1wdWxzZTogMFxuICAgICAgICB9O1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgY29udGFjdCBpZC5cbiAgICAgKiBAbWV0aG9kIGlkXG4gICAgICogQHBhcmFtIHt2ZXJ0ZXh9IHZlcnRleFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVW5pcXVlIGNvbnRhY3RJRFxuICAgICAqL1xuICAgIENvbnRhY3QuaWQgPSBmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHZlcnRleC5ib2R5LmlkICsgJ18nICsgdmVydGV4LmluZGV4O1xuICAgIH07XG5cbn0pKCk7XG5cbn0se31dLDU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLkRldGVjdG9yYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgZGV0ZWN0aW5nIGNvbGxpc2lvbnMgZ2l2ZW4gYSBzZXQgb2YgcGFpcnMuXG4qXG4qIEBjbGFzcyBEZXRlY3RvclxuKi9cblxuLy8gVE9ETzogc3BlY3VsYXRpdmUgY29udGFjdHNcblxudmFyIERldGVjdG9yID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gRGV0ZWN0b3I7XG5cbnZhciBTQVQgPSBfZGVyZXFfKCcuL1NBVCcpO1xudmFyIFBhaXIgPSBfZGVyZXFfKCcuL1BhaXInKTtcbnZhciBCb3VuZHMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9Cb3VuZHMnKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogRmluZHMgYWxsIGNvbGxpc2lvbnMgZ2l2ZW4gYSBsaXN0IG9mIHBhaXJzLlxuICAgICAqIEBtZXRob2QgY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7cGFpcltdfSBicm9hZHBoYXNlUGFpcnNcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHJldHVybiB7YXJyYXl9IGNvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jb2xsaXNpb25zID0gZnVuY3Rpb24oYnJvYWRwaGFzZVBhaXJzLCBlbmdpbmUpIHtcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBbXSxcbiAgICAgICAgICAgIHBhaXJzVGFibGUgPSBlbmdpbmUucGFpcnMudGFibGU7XG5cbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnJvYWRwaGFzZVBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBicm9hZHBoYXNlUGFpcnNbaV1bMF0sIFxuICAgICAgICAgICAgICAgIGJvZHlCID0gYnJvYWRwaGFzZVBhaXJzW2ldWzFdO1xuXG4gICAgICAgICAgICBpZiAoKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpICYmIChib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFEZXRlY3Rvci5jYW5Db2xsaWRlKGJvZHlBLmNvbGxpc2lvbkZpbHRlciwgYm9keUIuY29sbGlzaW9uRmlsdGVyKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuXG4gICAgICAgICAgICAvLyBtaWQgcGhhc2VcbiAgICAgICAgICAgIGlmIChCb3VuZHMub3ZlcmxhcHMoYm9keUEuYm91bmRzLCBib2R5Qi5ib3VuZHMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGJvZHlBLnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IGJvZHlBLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QSA9IGJvZHlBLnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSBib2R5Qi5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBib2R5Qi5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRCID0gYm9keUIucGFydHNba107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocGFydEEgPT09IGJvZHlBICYmIHBhcnRCID09PSBib2R5QikgfHwgQm91bmRzLm92ZXJsYXBzKHBhcnRBLmJvdW5kcywgcGFydEIuYm91bmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgYSBwcmV2aW91cyBjb2xsaXNpb24gd2UgY291bGQgcmV1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFpcklkID0gUGFpci5pZChwYXJ0QSwgcGFydEIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlyID0gcGFpcnNUYWJsZVtwYWlySWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbGxpc2lvbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWlyICYmIHBhaXIuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbGxpc2lvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmFycm93IHBoYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IFNBVC5jb2xsaWRlcyhwYXJ0QSwgcGFydEIsIHByZXZpb3VzQ29sbGlzaW9uKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbi5jb2xsaWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zLnB1c2goY29sbGlzaW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYm90aCBzdXBwbGllZCBjb2xsaXNpb24gZmlsdGVycyB3aWxsIGFsbG93IGEgY29sbGlzaW9uIHRvIG9jY3VyLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBtZXRob2QgY2FuQ29sbGlkZVxuICAgICAqIEBwYXJhbSB7fSBmaWx0ZXJBXG4gICAgICogQHBhcmFtIHt9IGZpbHRlckJcbiAgICAgKiBAcmV0dXJuIHtib29sfSBgdHJ1ZWAgaWYgY29sbGlzaW9uIGNhbiBvY2N1clxuICAgICAqL1xuICAgIERldGVjdG9yLmNhbkNvbGxpZGUgPSBmdW5jdGlvbihmaWx0ZXJBLCBmaWx0ZXJCKSB7XG4gICAgICAgIGlmIChmaWx0ZXJBLmdyb3VwID09PSBmaWx0ZXJCLmdyb3VwICYmIGZpbHRlckEuZ3JvdXAgIT09IDApXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyQS5ncm91cCA+IDA7XG5cbiAgICAgICAgcmV0dXJuIChmaWx0ZXJBLm1hc2sgJiBmaWx0ZXJCLmNhdGVnb3J5KSAhPT0gMCAmJiAoZmlsdGVyQi5tYXNrICYgZmlsdGVyQS5jYXRlZ29yeSkgIT09IDA7XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuLi9nZW9tZXRyeS9Cb3VuZHNcIjoyNixcIi4vUGFpclwiOjcsXCIuL1NBVFwiOjExfV0sNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuR3JpZGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIGJyb2FkcGhhc2UgZ3JpZCBzdHJ1Y3R1cmVzLlxuKlxuKiBAY2xhc3MgR3JpZFxuKi9cblxudmFyIEdyaWQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBHcmlkO1xuXG52YXIgUGFpciA9IF9kZXJlcV8oJy4vUGFpcicpO1xudmFyIERldGVjdG9yID0gX2RlcmVxXygnLi9EZXRlY3RvcicpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZ3JpZC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Z3JpZH0gQSBuZXcgZ3JpZFxuICAgICAqL1xuICAgIEdyaWQuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb250cm9sbGVyOiBHcmlkLFxuICAgICAgICAgICAgZGV0ZWN0b3I6IERldGVjdG9yLmNvbGxpc2lvbnMsXG4gICAgICAgICAgICBidWNrZXRzOiB7fSxcbiAgICAgICAgICAgIHBhaXJzOiB7fSxcbiAgICAgICAgICAgIHBhaXJzTGlzdDogW10sXG4gICAgICAgICAgICBidWNrZXRXaWR0aDogNDgsXG4gICAgICAgICAgICBidWNrZXRIZWlnaHQ6IDQ4XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgYSBzaW5nbGUgZ3JpZCBidWNrZXQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYnVja2V0V2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA0OFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiBhIHNpbmdsZSBncmlkIGJ1Y2tldC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBidWNrZXRIZWlnaHRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA0OFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZ3JpZC5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Z3JpZH0gZ3JpZFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHtib29sZWFufSBmb3JjZVVwZGF0ZVxuICAgICAqL1xuICAgIEdyaWQudXBkYXRlID0gZnVuY3Rpb24oZ3JpZCwgYm9kaWVzLCBlbmdpbmUsIGZvcmNlVXBkYXRlKSB7XG4gICAgICAgIHZhciBpLCBjb2wsIHJvdyxcbiAgICAgICAgICAgIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgYnVja2V0cyA9IGdyaWQuYnVja2V0cyxcbiAgICAgICAgICAgIGJ1Y2tldCxcbiAgICAgICAgICAgIGJ1Y2tldElkLFxuICAgICAgICAgICAgZ3JpZENoYW5nZWQgPSBmYWxzZTtcblxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1NsZWVwaW5nICYmICFmb3JjZVVwZGF0ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gZG9uJ3QgdXBkYXRlIG91dCBvZiB3b3JsZCBib2RpZXNcbiAgICAgICAgICAgIGlmIChib2R5LmJvdW5kcy5tYXgueCA8IHdvcmxkLmJvdW5kcy5taW4ueCB8fCBib2R5LmJvdW5kcy5taW4ueCA+IHdvcmxkLmJvdW5kcy5tYXgueFxuICAgICAgICAgICAgICAgIHx8IGJvZHkuYm91bmRzLm1heC55IDwgd29ybGQuYm91bmRzLm1pbi55IHx8IGJvZHkuYm91bmRzLm1pbi55ID4gd29ybGQuYm91bmRzLm1heC55KVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgbmV3UmVnaW9uID0gR3JpZC5fZ2V0UmVnaW9uKGdyaWQsIGJvZHkpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgYm9keSBoYXMgY2hhbmdlZCBncmlkIHJlZ2lvblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlZ2lvbiB8fCBuZXdSZWdpb24uaWQgIT09IGJvZHkucmVnaW9uLmlkIHx8IGZvcmNlVXBkYXRlKSB7XG5cblxuICAgICAgICAgICAgICAgIGlmICghYm9keS5yZWdpb24gfHwgZm9yY2VVcGRhdGUpXG4gICAgICAgICAgICAgICAgICAgIGJvZHkucmVnaW9uID0gbmV3UmVnaW9uO1xuXG4gICAgICAgICAgICAgICAgdmFyIHVuaW9uID0gR3JpZC5fcmVnaW9uVW5pb24obmV3UmVnaW9uLCBib2R5LnJlZ2lvbik7XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZ3JpZCBidWNrZXRzIGFmZmVjdGVkIGJ5IHJlZ2lvbiBjaGFuZ2VcbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgdGhlIHVuaW9uIG9mIGJvdGggcmVnaW9uc1xuICAgICAgICAgICAgICAgIGZvciAoY29sID0gdW5pb24uc3RhcnRDb2w7IGNvbCA8PSB1bmlvbi5lbmRDb2w7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAocm93ID0gdW5pb24uc3RhcnRSb3c7IHJvdyA8PSB1bmlvbi5lbmRSb3c7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXRJZCA9IEdyaWQuX2dldEJ1Y2tldElkKGNvbCwgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldCA9IGJ1Y2tldHNbYnVja2V0SWRdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNJbnNpZGVOZXdSZWdpb24gPSAoY29sID49IG5ld1JlZ2lvbi5zdGFydENvbCAmJiBjb2wgPD0gbmV3UmVnaW9uLmVuZENvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgcm93ID49IG5ld1JlZ2lvbi5zdGFydFJvdyAmJiByb3cgPD0gbmV3UmVnaW9uLmVuZFJvdyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0luc2lkZU9sZFJlZ2lvbiA9IChjb2wgPj0gYm9keS5yZWdpb24uc3RhcnRDb2wgJiYgY29sIDw9IGJvZHkucmVnaW9uLmVuZENvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgcm93ID49IGJvZHkucmVnaW9uLnN0YXJ0Um93ICYmIHJvdyA8PSBib2R5LnJlZ2lvbi5lbmRSb3cpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZnJvbSBvbGQgcmVnaW9uIGJ1Y2tldHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNJbnNpZGVOZXdSZWdpb24gJiYgaXNJbnNpZGVPbGRSZWdpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnNpZGVPbGRSZWdpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1Y2tldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyaWQuX2J1Y2tldFJlbW92ZUJvZHkoZ3JpZCwgYnVja2V0LCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBuZXcgcmVnaW9uIGJ1Y2tldHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5LnJlZ2lvbiA9PT0gbmV3UmVnaW9uIHx8IChpc0luc2lkZU5ld1JlZ2lvbiAmJiAhaXNJbnNpZGVPbGRSZWdpb24pIHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFidWNrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldCA9IEdyaWQuX2NyZWF0ZUJ1Y2tldChidWNrZXRzLCBidWNrZXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5fYnVja2V0QWRkQm9keShncmlkLCBidWNrZXQsIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBuZXcgcmVnaW9uXG4gICAgICAgICAgICAgICAgYm9keS5yZWdpb24gPSBuZXdSZWdpb247XG5cbiAgICAgICAgICAgICAgICAvLyBmbGFnIGNoYW5nZXMgc28gd2UgY2FuIHVwZGF0ZSBwYWlyc1xuICAgICAgICAgICAgICAgIGdyaWRDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBwYWlycyBsaXN0IG9ubHkgaWYgcGFpcnMgY2hhbmdlZCAoaS5lLiBhIGJvZHkgY2hhbmdlZCByZWdpb24pXG4gICAgICAgIGlmIChncmlkQ2hhbmdlZClcbiAgICAgICAgICAgIGdyaWQucGFpcnNMaXN0ID0gR3JpZC5fY3JlYXRlQWN0aXZlUGFpcnNMaXN0KGdyaWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdyaWQuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7Z3JpZH0gZ3JpZFxuICAgICAqL1xuICAgIEdyaWQuY2xlYXIgPSBmdW5jdGlvbihncmlkKSB7XG4gICAgICAgIGdyaWQuYnVja2V0cyA9IHt9O1xuICAgICAgICBncmlkLnBhaXJzID0ge307XG4gICAgICAgIGdyaWQucGFpcnNMaXN0ID0gW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSB1bmlvbiBvZiB0d28gcmVnaW9ucy5cbiAgICAgKiBAbWV0aG9kIF9yZWdpb25VbmlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHJlZ2lvbkFcbiAgICAgKiBAcGFyYW0ge30gcmVnaW9uQlxuICAgICAqIEByZXR1cm4ge30gcmVnaW9uXG4gICAgICovXG4gICAgR3JpZC5fcmVnaW9uVW5pb24gPSBmdW5jdGlvbihyZWdpb25BLCByZWdpb25CKSB7XG4gICAgICAgIHZhciBzdGFydENvbCA9IE1hdGgubWluKHJlZ2lvbkEuc3RhcnRDb2wsIHJlZ2lvbkIuc3RhcnRDb2wpLFxuICAgICAgICAgICAgZW5kQ29sID0gTWF0aC5tYXgocmVnaW9uQS5lbmRDb2wsIHJlZ2lvbkIuZW5kQ29sKSxcbiAgICAgICAgICAgIHN0YXJ0Um93ID0gTWF0aC5taW4ocmVnaW9uQS5zdGFydFJvdywgcmVnaW9uQi5zdGFydFJvdyksXG4gICAgICAgICAgICBlbmRSb3cgPSBNYXRoLm1heChyZWdpb25BLmVuZFJvdywgcmVnaW9uQi5lbmRSb3cpO1xuXG4gICAgICAgIHJldHVybiBHcmlkLl9jcmVhdGVSZWdpb24oc3RhcnRDb2wsIGVuZENvbCwgc3RhcnRSb3csIGVuZFJvdyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJlZ2lvbiBhIGdpdmVuIGJvZHkgZmFsbHMgaW4gZm9yIGEgZ2l2ZW4gZ3JpZC5cbiAgICAgKiBAbWV0aG9kIF9nZXRSZWdpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBncmlkXG4gICAgICogQHBhcmFtIHt9IGJvZHlcbiAgICAgKiBAcmV0dXJuIHt9IHJlZ2lvblxuICAgICAqL1xuICAgIEdyaWQuX2dldFJlZ2lvbiA9IGZ1bmN0aW9uKGdyaWQsIGJvZHkpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IGJvZHkuYm91bmRzLFxuICAgICAgICAgICAgc3RhcnRDb2wgPSBNYXRoLmZsb29yKGJvdW5kcy5taW4ueCAvIGdyaWQuYnVja2V0V2lkdGgpLFxuICAgICAgICAgICAgZW5kQ29sID0gTWF0aC5mbG9vcihib3VuZHMubWF4LnggLyBncmlkLmJ1Y2tldFdpZHRoKSxcbiAgICAgICAgICAgIHN0YXJ0Um93ID0gTWF0aC5mbG9vcihib3VuZHMubWluLnkgLyBncmlkLmJ1Y2tldEhlaWdodCksXG4gICAgICAgICAgICBlbmRSb3cgPSBNYXRoLmZsb29yKGJvdW5kcy5tYXgueSAvIGdyaWQuYnVja2V0SGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gR3JpZC5fY3JlYXRlUmVnaW9uKHN0YXJ0Q29sLCBlbmRDb2wsIHN0YXJ0Um93LCBlbmRSb3cpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcmVnaW9uLlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZVJlZ2lvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHN0YXJ0Q29sXG4gICAgICogQHBhcmFtIHt9IGVuZENvbFxuICAgICAqIEBwYXJhbSB7fSBzdGFydFJvd1xuICAgICAqIEBwYXJhbSB7fSBlbmRSb3dcbiAgICAgKiBAcmV0dXJuIHt9IHJlZ2lvblxuICAgICAqL1xuICAgIEdyaWQuX2NyZWF0ZVJlZ2lvbiA9IGZ1bmN0aW9uKHN0YXJ0Q29sLCBlbmRDb2wsIHN0YXJ0Um93LCBlbmRSb3cpIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBpZDogc3RhcnRDb2wgKyAnLCcgKyBlbmRDb2wgKyAnLCcgKyBzdGFydFJvdyArICcsJyArIGVuZFJvdyxcbiAgICAgICAgICAgIHN0YXJ0Q29sOiBzdGFydENvbCwgXG4gICAgICAgICAgICBlbmRDb2w6IGVuZENvbCwgXG4gICAgICAgICAgICBzdGFydFJvdzogc3RhcnRSb3csIFxuICAgICAgICAgICAgZW5kUm93OiBlbmRSb3cgXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGJ1Y2tldCBpZCBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24uXG4gICAgICogQG1ldGhvZCBfZ2V0QnVja2V0SWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBjb2x1bW5cbiAgICAgKiBAcGFyYW0ge30gcm93XG4gICAgICogQHJldHVybiB7c3RyaW5nfSBidWNrZXQgaWRcbiAgICAgKi9cbiAgICBHcmlkLl9nZXRCdWNrZXRJZCA9IGZ1bmN0aW9uKGNvbHVtbiwgcm93KSB7XG4gICAgICAgIHJldHVybiAnQycgKyBjb2x1bW4gKyAnUicgKyByb3c7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBidWNrZXQuXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQnVja2V0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0c1xuICAgICAqIEBwYXJhbSB7fSBidWNrZXRJZFxuICAgICAqIEByZXR1cm4ge30gYnVja2V0XG4gICAgICovXG4gICAgR3JpZC5fY3JlYXRlQnVja2V0ID0gZnVuY3Rpb24oYnVja2V0cywgYnVja2V0SWQpIHtcbiAgICAgICAgdmFyIGJ1Y2tldCA9IGJ1Y2tldHNbYnVja2V0SWRdID0gW107XG4gICAgICAgIHJldHVybiBidWNrZXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBib2R5IHRvIGEgYnVja2V0LlxuICAgICAqIEBtZXRob2QgX2J1Y2tldEFkZEJvZHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBncmlkXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldFxuICAgICAqIEBwYXJhbSB7fSBib2R5XG4gICAgICovXG4gICAgR3JpZC5fYnVja2V0QWRkQm9keSA9IGZ1bmN0aW9uKGdyaWQsIGJ1Y2tldCwgYm9keSkge1xuICAgICAgICAvLyBhZGQgbmV3IHBhaXJzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnVja2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUIgPSBidWNrZXRbaV07XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlkID09PSBib2R5Qi5pZCB8fCAoYm9keS5pc1N0YXRpYyAmJiBib2R5Qi5pc1N0YXRpYykpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIG51bWJlciBvZiBidWNrZXRzIHRoZSBwYWlyIGV4aXN0cyBpblxuICAgICAgICAgICAgLy8gaW1wb3J0YW50IGZvciBHcmlkLnVwZGF0ZSB0byB3b3JrXG4gICAgICAgICAgICB2YXIgcGFpcklkID0gUGFpci5pZChib2R5LCBib2R5QiksXG4gICAgICAgICAgICAgICAgcGFpciA9IGdyaWQucGFpcnNbcGFpcklkXTtcblxuICAgICAgICAgICAgaWYgKHBhaXIpIHtcbiAgICAgICAgICAgICAgICBwYWlyWzJdICs9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyaWQucGFpcnNbcGFpcklkXSA9IFtib2R5LCBib2R5QiwgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgdG8gYm9kaWVzIChhZnRlciBwYWlycywgb3RoZXJ3aXNlIHBhaXJzIHdpdGggc2VsZilcbiAgICAgICAgYnVja2V0LnB1c2goYm9keSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gYSBidWNrZXQuXG4gICAgICogQG1ldGhvZCBfYnVja2V0UmVtb3ZlQm9keVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGdyaWRcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0XG4gICAgICogQHBhcmFtIHt9IGJvZHlcbiAgICAgKi9cbiAgICBHcmlkLl9idWNrZXRSZW1vdmVCb2R5ID0gZnVuY3Rpb24oZ3JpZCwgYnVja2V0LCBib2R5KSB7XG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIGJ1Y2tldFxuICAgICAgICBidWNrZXQuc3BsaWNlKENvbW1vbi5pbmRleE9mKGJ1Y2tldCwgYm9keSksIDEpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBwYWlyIGNvdW50c1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1Y2tldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIGJ1Y2tldHMgdGhlIHBhaXIgZXhpc3RzIGluXG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgZm9yIF9jcmVhdGVBY3RpdmVQYWlyc0xpc3QgdG8gd29ya1xuICAgICAgICAgICAgdmFyIGJvZHlCID0gYnVja2V0W2ldLFxuICAgICAgICAgICAgICAgIHBhaXJJZCA9IFBhaXIuaWQoYm9keSwgYm9keUIpLFxuICAgICAgICAgICAgICAgIHBhaXIgPSBncmlkLnBhaXJzW3BhaXJJZF07XG5cbiAgICAgICAgICAgIGlmIChwYWlyKVxuICAgICAgICAgICAgICAgIHBhaXJbMl0gLT0gMTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHRoZSBhY3RpdmUgcGFpcnMgaW4gdGhlIGdyaWQuXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQWN0aXZlUGFpcnNMaXN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEByZXR1cm4gW10gcGFpcnNcbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVBY3RpdmVQYWlyc0xpc3QgPSBmdW5jdGlvbihncmlkKSB7XG4gICAgICAgIHZhciBwYWlyS2V5cyxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBwYWlycyA9IFtdO1xuXG4gICAgICAgIC8vIGdyaWQucGFpcnMgaXMgdXNlZCBhcyBhIGhhc2htYXBcbiAgICAgICAgcGFpcktleXMgPSBDb21tb24ua2V5cyhncmlkLnBhaXJzKTtcblxuICAgICAgICAvLyBpdGVyYXRlIG92ZXIgZ3JpZC5wYWlyc1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHBhaXJLZXlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBwYWlyID0gZ3JpZC5wYWlyc1twYWlyS2V5c1trXV07XG5cbiAgICAgICAgICAgIC8vIGlmIHBhaXIgZXhpc3RzIGluIGF0IGxlYXN0IG9uZSBidWNrZXRcbiAgICAgICAgICAgIC8vIGl0IGlzIGEgcGFpciB0aGF0IG5lZWRzIGZ1cnRoZXIgY29sbGlzaW9uIHRlc3Rpbmcgc28gcHVzaCBpdFxuICAgICAgICAgICAgaWYgKHBhaXJbMl0gPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaChwYWlyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGdyaWQucGFpcnNbcGFpcktleXNba11dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhaXJzO1xuICAgIH07XG4gICAgXG59KSgpO1xuXG59LHtcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuL0RldGVjdG9yXCI6NSxcIi4vUGFpclwiOjd9XSw3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5QYWlyYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gcGFpcnMuXG4qXG4qIEBjbGFzcyBQYWlyXG4qL1xuXG52YXIgUGFpciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhaXI7XG5cbnZhciBDb250YWN0ID0gX2RlcmVxXygnLi9Db250YWN0Jyk7XG5cbihmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcGFpci5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7Y29sbGlzaW9ufSBjb2xsaXNpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICogQHJldHVybiB7cGFpcn0gQSBuZXcgcGFpclxuICAgICAqL1xuICAgIFBhaXIuY3JlYXRlID0gZnVuY3Rpb24oY29sbGlzaW9uLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBLFxuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUIsXG4gICAgICAgICAgICBwYXJlbnRBID0gY29sbGlzaW9uLnBhcmVudEEsXG4gICAgICAgICAgICBwYXJlbnRCID0gY29sbGlzaW9uLnBhcmVudEI7XG5cbiAgICAgICAgdmFyIHBhaXIgPSB7XG4gICAgICAgICAgICBpZDogUGFpci5pZChib2R5QSwgYm9keUIpLFxuICAgICAgICAgICAgYm9keUE6IGJvZHlBLFxuICAgICAgICAgICAgYm9keUI6IGJvZHlCLFxuICAgICAgICAgICAgY29udGFjdHM6IHt9LFxuICAgICAgICAgICAgYWN0aXZlQ29udGFjdHM6IFtdLFxuICAgICAgICAgICAgc2VwYXJhdGlvbjogMCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgaXNTZW5zb3I6IGJvZHlBLmlzU2Vuc29yIHx8IGJvZHlCLmlzU2Vuc29yLFxuICAgICAgICAgICAgdGltZUNyZWF0ZWQ6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIHRpbWVVcGRhdGVkOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICBpbnZlcnNlTWFzczogcGFyZW50QS5pbnZlcnNlTWFzcyArIHBhcmVudEIuaW52ZXJzZU1hc3MsXG4gICAgICAgICAgICBmcmljdGlvbjogTWF0aC5taW4ocGFyZW50QS5mcmljdGlvbiwgcGFyZW50Qi5mcmljdGlvbiksXG4gICAgICAgICAgICBmcmljdGlvblN0YXRpYzogTWF0aC5tYXgocGFyZW50QS5mcmljdGlvblN0YXRpYywgcGFyZW50Qi5mcmljdGlvblN0YXRpYyksXG4gICAgICAgICAgICByZXN0aXR1dGlvbjogTWF0aC5tYXgocGFyZW50QS5yZXN0aXR1dGlvbiwgcGFyZW50Qi5yZXN0aXR1dGlvbiksXG4gICAgICAgICAgICBzbG9wOiBNYXRoLm1heChwYXJlbnRBLnNsb3AsIHBhcmVudEIuc2xvcClcbiAgICAgICAgfTtcblxuICAgICAgICBQYWlyLnVwZGF0ZShwYWlyLCBjb2xsaXNpb24sIHRpbWVzdGFtcCk7XG5cbiAgICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBwYWlyIGdpdmVuIGEgY29sbGlzaW9uLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtwYWlyfSBwYWlyXG4gICAgICogQHBhcmFtIHtjb2xsaXNpb259IGNvbGxpc2lvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBQYWlyLnVwZGF0ZSA9IGZ1bmN0aW9uKHBhaXIsIGNvbGxpc2lvbiwgdGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBjb250YWN0cyA9IHBhaXIuY29udGFjdHMsXG4gICAgICAgICAgICBzdXBwb3J0cyA9IGNvbGxpc2lvbi5zdXBwb3J0cyxcbiAgICAgICAgICAgIGFjdGl2ZUNvbnRhY3RzID0gcGFpci5hY3RpdmVDb250YWN0cyxcbiAgICAgICAgICAgIHBhcmVudEEgPSBjb2xsaXNpb24ucGFyZW50QSxcbiAgICAgICAgICAgIHBhcmVudEIgPSBjb2xsaXNpb24ucGFyZW50QjtcbiAgICAgICAgXG4gICAgICAgIHBhaXIuY29sbGlzaW9uID0gY29sbGlzaW9uO1xuICAgICAgICBwYWlyLmludmVyc2VNYXNzID0gcGFyZW50QS5pbnZlcnNlTWFzcyArIHBhcmVudEIuaW52ZXJzZU1hc3M7XG4gICAgICAgIHBhaXIuZnJpY3Rpb24gPSBNYXRoLm1pbihwYXJlbnRBLmZyaWN0aW9uLCBwYXJlbnRCLmZyaWN0aW9uKTtcbiAgICAgICAgcGFpci5mcmljdGlvblN0YXRpYyA9IE1hdGgubWF4KHBhcmVudEEuZnJpY3Rpb25TdGF0aWMsIHBhcmVudEIuZnJpY3Rpb25TdGF0aWMpO1xuICAgICAgICBwYWlyLnJlc3RpdHV0aW9uID0gTWF0aC5tYXgocGFyZW50QS5yZXN0aXR1dGlvbiwgcGFyZW50Qi5yZXN0aXR1dGlvbik7XG4gICAgICAgIHBhaXIuc2xvcCA9IE1hdGgubWF4KHBhcmVudEEuc2xvcCwgcGFyZW50Qi5zbG9wKTtcbiAgICAgICAgYWN0aXZlQ29udGFjdHMubGVuZ3RoID0gMDtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2xsaXNpb24uY29sbGlkZWQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VwcG9ydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VwcG9ydCA9IHN1cHBvcnRzW2ldLFxuICAgICAgICAgICAgICAgICAgICBjb250YWN0SWQgPSBDb250YWN0LmlkKHN1cHBvcnQpLFxuICAgICAgICAgICAgICAgICAgICBjb250YWN0ID0gY29udGFjdHNbY29udGFjdElkXTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250YWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNvbnRhY3RzLnB1c2goY29udGFjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ29udGFjdHMucHVzaChjb250YWN0c1tjb250YWN0SWRdID0gQ29udGFjdC5jcmVhdGUoc3VwcG9ydCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFpci5zZXBhcmF0aW9uID0gY29sbGlzaW9uLmRlcHRoO1xuICAgICAgICAgICAgUGFpci5zZXRBY3RpdmUocGFpciwgdHJ1ZSwgdGltZXN0YW1wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYWlyLmlzQWN0aXZlID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIFBhaXIuc2V0QWN0aXZlKHBhaXIsIGZhbHNlLCB0aW1lc3RhbXApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgYSBwYWlyIGFzIGFjdGl2ZSBvciBpbmFjdGl2ZS5cbiAgICAgKiBAbWV0aG9kIHNldEFjdGl2ZVxuICAgICAqIEBwYXJhbSB7cGFpcn0gcGFpclxuICAgICAqIEBwYXJhbSB7Ym9vbH0gaXNBY3RpdmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICovXG4gICAgUGFpci5zZXRBY3RpdmUgPSBmdW5jdGlvbihwYWlyLCBpc0FjdGl2ZSwgdGltZXN0YW1wKSB7XG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgcGFpci5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwYWlyLnRpbWVVcGRhdGVkID0gdGltZXN0YW1wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFpci5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWQgZm9yIHRoZSBnaXZlbiBwYWlyLlxuICAgICAqIEBtZXRob2QgaWRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVW5pcXVlIHBhaXJJZFxuICAgICAqL1xuICAgIFBhaXIuaWQgPSBmdW5jdGlvbihib2R5QSwgYm9keUIpIHtcbiAgICAgICAgaWYgKGJvZHlBLmlkIDwgYm9keUIuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnQScgKyBib2R5QS5pZCArICdCJyArIGJvZHlCLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdBJyArIGJvZHlCLmlkICsgJ0InICsgYm9keUEuaWQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4vQ29udGFjdFwiOjR9XSw4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5QYWlyc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIHBhaXIgc2V0cy5cbipcbiogQGNsYXNzIFBhaXJzXG4qL1xuXG52YXIgUGFpcnMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWlycztcblxudmFyIFBhaXIgPSBfZGVyZXFfKCcuL1BhaXInKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgUGFpcnMuX3BhaXJNYXhJZGxlTGlmZSA9IDEwMDA7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHBhaXJzIHN0cnVjdHVyZS5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7cGFpcnN9IEEgbmV3IHBhaXJzIHN0cnVjdHVyZVxuICAgICAqL1xuICAgIFBhaXJzLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5leHRlbmQoeyBcbiAgICAgICAgICAgIHRhYmxlOiB7fSxcbiAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgY29sbGlzaW9uU3RhcnQ6IFtdLFxuICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlOiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbkVuZDogW11cbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgcGFpcnMgZ2l2ZW4gYSBsaXN0IG9mIGNvbGxpc2lvbnMuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbltdfSBjb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXJzLnVwZGF0ZSA9IGZ1bmN0aW9uKHBhaXJzLCBjb2xsaXNpb25zLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIHBhaXJzTGlzdCA9IHBhaXJzLmxpc3QsXG4gICAgICAgICAgICBwYWlyc1RhYmxlID0gcGFpcnMudGFibGUsXG4gICAgICAgICAgICBjb2xsaXNpb25TdGFydCA9IHBhaXJzLmNvbGxpc2lvblN0YXJ0LFxuICAgICAgICAgICAgY29sbGlzaW9uRW5kID0gcGFpcnMuY29sbGlzaW9uRW5kLFxuICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlID0gcGFpcnMuY29sbGlzaW9uQWN0aXZlLFxuICAgICAgICAgICAgYWN0aXZlUGFpcklkcyA9IFtdLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgcGFpcklkLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gY2xlYXIgY29sbGlzaW9uIHN0YXRlIGFycmF5cywgYnV0IG1haW50YWluIG9sZCByZWZlcmVuY2VcbiAgICAgICAgY29sbGlzaW9uU3RhcnQubGVuZ3RoID0gMDtcbiAgICAgICAgY29sbGlzaW9uRW5kLmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPSAwO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb2xsaXNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSBjb2xsaXNpb25zW2ldO1xuXG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uLmNvbGxpZGVkKSB7XG4gICAgICAgICAgICAgICAgcGFpcklkID0gUGFpci5pZChjb2xsaXNpb24uYm9keUEsIGNvbGxpc2lvbi5ib2R5Qik7XG4gICAgICAgICAgICAgICAgYWN0aXZlUGFpcklkcy5wdXNoKHBhaXJJZCk7XG5cbiAgICAgICAgICAgICAgICBwYWlyID0gcGFpcnNUYWJsZVtwYWlySWRdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwYWlyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhaXIgYWxyZWFkeSBleGlzdHMgKGJ1dCBtYXkgb3IgbWF5IG5vdCBiZSBhY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWlyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWlyIGV4aXN0cyBhbmQgaXMgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25BY3RpdmUucHVzaChwYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhaXIgZXhpc3RzIGJ1dCB3YXMgaW5hY3RpdmUsIHNvIGEgY29sbGlzaW9uIGhhcyBqdXN0IHN0YXJ0ZWQgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0LnB1c2gocGFpcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHBhaXJcbiAgICAgICAgICAgICAgICAgICAgUGFpci51cGRhdGUocGFpciwgY29sbGlzaW9uLCB0aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhaXIgZGlkIG5vdCBleGlzdCwgY3JlYXRlIGEgbmV3IHBhaXJcbiAgICAgICAgICAgICAgICAgICAgcGFpciA9IFBhaXIuY3JlYXRlKGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICAgICAgcGFpcnNUYWJsZVtwYWlySWRdID0gcGFpcjtcblxuICAgICAgICAgICAgICAgICAgICAvLyBwdXNoIHRoZSBuZXcgcGFpclxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25TdGFydC5wdXNoKHBhaXIpO1xuICAgICAgICAgICAgICAgICAgICBwYWlyc0xpc3QucHVzaChwYWlyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWFjdGl2YXRlIHByZXZpb3VzbHkgYWN0aXZlIHBhaXJzIHRoYXQgYXJlIG5vdyBpbmFjdGl2ZVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNMaXN0W2ldO1xuICAgICAgICAgICAgaWYgKHBhaXIuaXNBY3RpdmUgJiYgQ29tbW9uLmluZGV4T2YoYWN0aXZlUGFpcklkcywgcGFpci5pZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgUGFpci5zZXRBY3RpdmUocGFpciwgZmFsc2UsIHRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRW5kLnB1c2gocGFpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZW1vdmVzIHBhaXJzIHRoYXQgaGF2ZSBiZWVuIGluYWN0aXZlIGZvciBhIHNldCBhbW91bnQgb2YgdGltZS5cbiAgICAgKiBAbWV0aG9kIHJlbW92ZU9sZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYWlyc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBQYWlycy5yZW1vdmVPbGQgPSBmdW5jdGlvbihwYWlycywgdGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBwYWlyc0xpc3QgPSBwYWlycy5saXN0LFxuICAgICAgICAgICAgcGFpcnNUYWJsZSA9IHBhaXJzLnRhYmxlLFxuICAgICAgICAgICAgaW5kZXhlc1RvUmVtb3ZlID0gW10sXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgcGFpckluZGV4LFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNMaXN0W2ldO1xuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIG5ldmVyIHJlbW92ZSBzbGVlcGluZyBwYWlyc1xuICAgICAgICAgICAgaWYgKGNvbGxpc2lvbi5ib2R5QS5pc1NsZWVwaW5nIHx8IGNvbGxpc2lvbi5ib2R5Qi5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgcGFpci50aW1lVXBkYXRlZCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgcGFpciBpcyBpbmFjdGl2ZSBmb3IgdG9vIGxvbmcsIG1hcmsgaXQgdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgICAgaWYgKHRpbWVzdGFtcCAtIHBhaXIudGltZVVwZGF0ZWQgPiBQYWlycy5fcGFpck1heElkbGVMaWZlKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhlc1RvUmVtb3ZlLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgbWFya2VkIHBhaXJzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmRleGVzVG9SZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXJJbmRleCA9IGluZGV4ZXNUb1JlbW92ZVtpXSAtIGk7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNMaXN0W3BhaXJJbmRleF07XG4gICAgICAgICAgICBkZWxldGUgcGFpcnNUYWJsZVtwYWlyLmlkXTtcbiAgICAgICAgICAgIHBhaXJzTGlzdC5zcGxpY2UocGFpckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdpdmVuIHBhaXJzIHN0cnVjdHVyZS5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtwYWlyc30gcGFpcnNcbiAgICAgKiBAcmV0dXJuIHtwYWlyc30gcGFpcnNcbiAgICAgKi9cbiAgICBQYWlycy5jbGVhciA9IGZ1bmN0aW9uKHBhaXJzKSB7XG4gICAgICAgIHBhaXJzLnRhYmxlID0ge307XG4gICAgICAgIHBhaXJzLmxpc3QubGVuZ3RoID0gMDtcbiAgICAgICAgcGFpcnMuY29sbGlzaW9uU3RhcnQubGVuZ3RoID0gMDtcbiAgICAgICAgcGFpcnMuY29sbGlzaW9uQWN0aXZlLmxlbmd0aCA9IDA7XG4gICAgICAgIHBhaXJzLmNvbGxpc2lvbkVuZC5sZW5ndGggPSAwO1xuICAgICAgICByZXR1cm4gcGFpcnM7XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi9QYWlyXCI6N31dLDk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLlF1ZXJ5YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgcGVyZm9ybWluZyBjb2xsaXNpb24gcXVlcmllcy5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFF1ZXJ5XG4qL1xuXG52YXIgUXVlcnkgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxudmFyIFZlY3RvciA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlY3RvcicpO1xudmFyIFNBVCA9IF9kZXJlcV8oJy4vU0FUJyk7XG52YXIgQm91bmRzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQm91bmRzJyk7XG52YXIgQm9kaWVzID0gX2RlcmVxXygnLi4vZmFjdG9yeS9Cb2RpZXMnKTtcbnZhciBWZXJ0aWNlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlcnRpY2VzJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGNvbGxpc2lvbnMgYmV0d2VlbiBgYm9keWAgYW5kIGBib2RpZXNgLlxuICAgICAqIEBtZXRob2QgY29sbGlkZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHJldHVybiB7b2JqZWN0W119IENvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBRdWVyeS5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHksIGJvZGllcykge1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChCb3VuZHMub3ZlcmxhcHMoYm9keUEuYm91bmRzLCBib2R5LmJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gYm9keUEucGFydHMubGVuZ3RoID09PSAxID8gMCA6IDE7IGogPCBib2R5QS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHlBLnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMub3ZlcmxhcHMocGFydC5ib3VuZHMsIGJvZHkuYm91bmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IFNBVC5jb2xsaWRlcyhwYXJ0LCBib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbi5jb2xsaWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbnMucHVzaChjb2xsaXNpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhc3RzIGEgcmF5IHNlZ21lbnQgYWdhaW5zdCBhIHNldCBvZiBib2RpZXMgYW5kIHJldHVybnMgYWxsIGNvbGxpc2lvbnMsIHJheSB3aWR0aCBpcyBvcHRpb25hbC4gSW50ZXJzZWN0aW9uIHBvaW50cyBhcmUgbm90IHByb3ZpZGVkLlxuICAgICAqIEBtZXRob2QgcmF5XG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBzdGFydFBvaW50XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGVuZFBvaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtyYXlXaWR0aF1cbiAgICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gQ29sbGlzaW9uc1xuICAgICAqL1xuICAgIFF1ZXJ5LnJheSA9IGZ1bmN0aW9uKGJvZGllcywgc3RhcnRQb2ludCwgZW5kUG9pbnQsIHJheVdpZHRoKSB7XG4gICAgICAgIHJheVdpZHRoID0gcmF5V2lkdGggfHwgMWUtMTAwO1xuXG4gICAgICAgIHZhciByYXlBbmdsZSA9IFZlY3Rvci5hbmdsZShzdGFydFBvaW50LCBlbmRQb2ludCksXG4gICAgICAgICAgICByYXlMZW5ndGggPSBWZWN0b3IubWFnbml0dWRlKFZlY3Rvci5zdWIoc3RhcnRQb2ludCwgZW5kUG9pbnQpKSxcbiAgICAgICAgICAgIHJheVggPSAoZW5kUG9pbnQueCArIHN0YXJ0UG9pbnQueCkgKiAwLjUsXG4gICAgICAgICAgICByYXlZID0gKGVuZFBvaW50LnkgKyBzdGFydFBvaW50LnkpICogMC41LFxuICAgICAgICAgICAgcmF5ID0gQm9kaWVzLnJlY3RhbmdsZShyYXlYLCByYXlZLCByYXlMZW5ndGgsIHJheVdpZHRoLCB7IGFuZ2xlOiByYXlBbmdsZSB9KSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnMgPSBRdWVyeS5jb2xsaWRlcyhyYXksIGJvZGllcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsaXNpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gY29sbGlzaW9uc1tpXTtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5ib2R5ID0gY29sbGlzaW9uLmJvZHlCID0gY29sbGlzaW9uLmJvZHlBOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGJvZGllcyB3aG9zZSBib3VuZHMgYXJlIGluc2lkZSAob3Igb3V0c2lkZSBpZiBzZXQpIHRoZSBnaXZlbiBzZXQgb2YgYm91bmRzLCBmcm9tIHRoZSBnaXZlbiBzZXQgb2YgYm9kaWVzLlxuICAgICAqIEBtZXRob2QgcmVnaW9uXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtvdXRzaWRlPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge2JvZHlbXX0gVGhlIGJvZGllcyBtYXRjaGluZyB0aGUgcXVlcnlcbiAgICAgKi9cbiAgICBRdWVyeS5yZWdpb24gPSBmdW5jdGlvbihib2RpZXMsIGJvdW5kcywgb3V0c2lkZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIG92ZXJsYXBzID0gQm91bmRzLm92ZXJsYXBzKGJvZHkuYm91bmRzLCBib3VuZHMpO1xuICAgICAgICAgICAgaWYgKChvdmVybGFwcyAmJiAhb3V0c2lkZSkgfHwgKCFvdmVybGFwcyAmJiBvdXRzaWRlKSlcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGJvZGllcyB3aG9zZSB2ZXJ0aWNlcyBjb250YWluIHRoZSBnaXZlbiBwb2ludCwgZnJvbSB0aGUgZ2l2ZW4gc2V0IG9mIGJvZGllcy5cbiAgICAgKiBAbWV0aG9kIHBvaW50XG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEByZXR1cm4ge2JvZHlbXX0gVGhlIGJvZGllcyBtYXRjaGluZyB0aGUgcXVlcnlcbiAgICAgKi9cbiAgICBRdWVyeS5wb2ludCA9IGZ1bmN0aW9uKGJvZGllcywgcG9pbnQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhib2R5LmJvdW5kcywgcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGJvZHkucGFydHMubGVuZ3RoID09PSAxID8gMCA6IDE7IGogPCBib2R5LnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKHBhcnQuYm91bmRzLCBwb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIFZlcnRpY2VzLmNvbnRhaW5zKHBhcnQudmVydGljZXMsIHBvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuLi9mYWN0b3J5L0JvZGllc1wiOjIzLFwiLi4vZ2VvbWV0cnkvQm91bmRzXCI6MjYsXCIuLi9nZW9tZXRyeS9WZWN0b3JcIjoyOCxcIi4uL2dlb21ldHJ5L1ZlcnRpY2VzXCI6MjksXCIuL1NBVFwiOjExfV0sMTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLlJlc29sdmVyYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgcmVzb2x2aW5nIGNvbGxpc2lvbiBwYWlycy5cbipcbiogQGNsYXNzIFJlc29sdmVyXG4qL1xuXG52YXIgUmVzb2x2ZXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvbHZlcjtcblxudmFyIFZlcnRpY2VzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVydGljZXMnKTtcbnZhciBWZWN0b3IgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZWN0b3InKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xudmFyIEJvdW5kcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0JvdW5kcycpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBSZXNvbHZlci5fcmVzdGluZ1RocmVzaCA9IDQ7XG4gICAgUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2hUYW5nZW50ID0gNjtcbiAgICBSZXNvbHZlci5fcG9zaXRpb25EYW1wZW4gPSAwLjk7XG4gICAgUmVzb2x2ZXIuX3Bvc2l0aW9uV2FybWluZyA9IDAuODtcbiAgICBSZXNvbHZlci5fZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyID0gNTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgcGFpcnMgZm9yIHBvc2l0aW9uIHNvbHZpbmcuXG4gICAgICogQG1ldGhvZCBwcmVTb2x2ZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICovXG4gICAgUmVzb2x2ZXIucHJlU29sdmVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBhaXJzKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50O1xuXG4gICAgICAgIC8vIGZpbmQgdG90YWwgY29udGFjdHMgb24gZWFjaCBib2R5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50ID0gcGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGg7XG4gICAgICAgICAgICBwYWlyLmNvbGxpc2lvbi5wYXJlbnRBLnRvdGFsQ29udGFjdHMgKz0gYWN0aXZlQ291bnQ7XG4gICAgICAgICAgICBwYWlyLmNvbGxpc2lvbi5wYXJlbnRCLnRvdGFsQ29udGFjdHMgKz0gYWN0aXZlQ291bnQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZCBhIHNvbHV0aW9uIGZvciBwYWlyIHBvc2l0aW9ucy5cbiAgICAgKiBAbWV0aG9kIHNvbHZlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgUmVzb2x2ZXIuc29sdmVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBhaXJzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIG5vcm1hbCxcbiAgICAgICAgICAgIGJvZHlCdG9BLFxuICAgICAgICAgICAgY29udGFjdFNoYXJlLFxuICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLFxuICAgICAgICAgICAgY29udGFjdENvdW50ID0ge30sXG4gICAgICAgICAgICB0ZW1wQSA9IFZlY3Rvci5fdGVtcFswXSxcbiAgICAgICAgICAgIHRlbXBCID0gVmVjdG9yLl90ZW1wWzFdLFxuICAgICAgICAgICAgdGVtcEMgPSBWZWN0b3IuX3RlbXBbMl0sXG4gICAgICAgICAgICB0ZW1wRCA9IFZlY3Rvci5fdGVtcFszXTtcblxuICAgICAgICAvLyBmaW5kIGltcHVsc2VzIHJlcXVpcmVkIHRvIHJlc29sdmUgcGVuZXRyYXRpb25cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbDtcblxuICAgICAgICAgICAgLy8gZ2V0IGN1cnJlbnQgc2VwYXJhdGlvbiBiZXR3ZWVuIGJvZHkgZWRnZXMgaW52b2x2ZWQgaW4gY29sbGlzaW9uXG4gICAgICAgICAgICBib2R5QnRvQSA9IFZlY3Rvci5zdWIoVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbkltcHVsc2UsIGJvZHlCLnBvc2l0aW9uLCB0ZW1wQSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yLmFkZChib2R5QS5wb3NpdGlvbkltcHVsc2UsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlY3Rvci5zdWIoYm9keUIucG9zaXRpb24sIGNvbGxpc2lvbi5wZW5ldHJhdGlvbiwgdGVtcEIpLCB0ZW1wQyksIHRlbXBEKTtcblxuICAgICAgICAgICAgcGFpci5zZXBhcmF0aW9uID0gVmVjdG9yLmRvdChub3JtYWwsIGJvZHlCdG9BKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEE7XG4gICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbDtcbiAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSA9IChwYWlyLnNlcGFyYXRpb24gLSBwYWlyLnNsb3ApICogdGltZVNjYWxlO1xuXG4gICAgICAgICAgICBpZiAoYm9keUEuaXNTdGF0aWMgfHwgYm9keUIuaXNTdGF0aWMpXG4gICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlICo9IDI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgY29udGFjdFNoYXJlID0gUmVzb2x2ZXIuX3Bvc2l0aW9uRGFtcGVuIC8gYm9keUEudG90YWxDb250YWN0cztcbiAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvbkltcHVsc2UueCArPSBub3JtYWwueCAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvbkltcHVsc2UueSArPSBub3JtYWwueSAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICBjb250YWN0U2hhcmUgPSBSZXNvbHZlci5fcG9zaXRpb25EYW1wZW4gLyBib2R5Qi50b3RhbENvbnRhY3RzO1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uSW1wdWxzZS54IC09IG5vcm1hbC54ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uSW1wdWxzZS55IC09IG5vcm1hbC55ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHBvc2l0aW9uIHJlc29sdXRpb24uXG4gICAgICogQG1ldGhvZCBwb3N0U29sdmVQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBSZXNvbHZlci5wb3N0U29sdmVQb3NpdGlvbiA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IGNvbnRhY3QgY291bnRcbiAgICAgICAgICAgIGJvZHkudG90YWxDb250YWN0cyA9IDA7XG5cbiAgICAgICAgICAgIGlmIChib2R5LnBvc2l0aW9uSW1wdWxzZS54ICE9PSAwIHx8IGJvZHkucG9zaXRpb25JbXB1bHNlLnkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgYm9keSBnZW9tZXRyeVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIFZlcnRpY2VzLnRyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCBib2R5LnBvc2l0aW9uSW1wdWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnggKz0gYm9keS5wb3NpdGlvbkltcHVsc2UueDtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IGJvZHkucG9zaXRpb25JbXB1bHNlLnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbW92ZSB0aGUgYm9keSB3aXRob3V0IGNoYW5naW5nIHZlbG9jaXR5XG4gICAgICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCArPSBib2R5LnBvc2l0aW9uSW1wdWxzZS54O1xuICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgKz0gYm9keS5wb3NpdGlvbkltcHVsc2UueTtcblxuICAgICAgICAgICAgICAgIGlmIChWZWN0b3IuZG90KGJvZHkucG9zaXRpb25JbXB1bHNlLCBib2R5LnZlbG9jaXR5KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgY2FjaGVkIGltcHVsc2UgaWYgdGhlIGJvZHkgaGFzIHZlbG9jaXR5IGFsb25nIGl0XG4gICAgICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uSW1wdWxzZS55ID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3YXJtIHRoZSBuZXh0IGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uSW1wdWxzZS54ICo9IFJlc29sdmVyLl9wb3NpdGlvbldhcm1pbmc7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnkgKj0gUmVzb2x2ZXIuX3Bvc2l0aW9uV2FybWluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSBwYWlycyBmb3IgdmVsb2NpdHkgc29sdmluZy5cbiAgICAgKiBAbWV0aG9kIHByZVNvbHZlVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKi9cbiAgICBSZXNvbHZlci5wcmVTb2x2ZVZlbG9jaXR5ID0gZnVuY3Rpb24ocGFpcnMpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbnRhY3RzLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIG5vcm1hbCxcbiAgICAgICAgICAgIHRhbmdlbnQsXG4gICAgICAgICAgICBjb250YWN0LFxuICAgICAgICAgICAgY29udGFjdFZlcnRleCxcbiAgICAgICAgICAgIG5vcm1hbEltcHVsc2UsXG4gICAgICAgICAgICB0YW5nZW50SW1wdWxzZSxcbiAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgIGltcHVsc2UgPSBWZWN0b3IuX3RlbXBbMF0sXG4gICAgICAgICAgICB0ZW1wQSA9IFZlY3Rvci5fdGVtcFsxXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29udGFjdHMgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzO1xuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QjtcbiAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWw7XG4gICAgICAgICAgICB0YW5nZW50ID0gY29sbGlzaW9uLnRhbmdlbnQ7XG5cbiAgICAgICAgICAgIC8vIHJlc29sdmUgZWFjaCBjb250YWN0XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29udGFjdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb250YWN0ID0gY29udGFjdHNbal07XG4gICAgICAgICAgICAgICAgY29udGFjdFZlcnRleCA9IGNvbnRhY3QudmVydGV4O1xuICAgICAgICAgICAgICAgIG5vcm1hbEltcHVsc2UgPSBjb250YWN0Lm5vcm1hbEltcHVsc2U7XG4gICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBjb250YWN0LnRhbmdlbnRJbXB1bHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbEltcHVsc2UgIT09IDAgfHwgdGFuZ2VudEltcHVsc2UgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG90YWwgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgaW1wdWxzZS54ID0gKG5vcm1hbC54ICogbm9ybWFsSW1wdWxzZSkgKyAodGFuZ2VudC54ICogdGFuZ2VudEltcHVsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpbXB1bHNlLnkgPSAobm9ybWFsLnkgKiBub3JtYWxJbXB1bHNlKSArICh0YW5nZW50LnkgKiB0YW5nZW50SW1wdWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBseSBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgICAgICBpZiAoIShib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gVmVjdG9yLnN1Yihjb250YWN0VmVydGV4LCBib2R5QS5wb3NpdGlvbiwgdGVtcEEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnggKz0gaW1wdWxzZS54ICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueSArPSBpbXB1bHNlLnkgKiBib2R5QS5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBLmFuZ2xlUHJldiArPSBWZWN0b3IuY3Jvc3Mob2Zmc2V0LCBpbXB1bHNlKSAqIGJvZHlBLmludmVyc2VJbmVydGlhO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IFZlY3Rvci5zdWIoY29udGFjdFZlcnRleCwgYm9keUIucG9zaXRpb24sIHRlbXBBKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi54IC09IGltcHVsc2UueCAqIGJvZHlCLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnkgLT0gaW1wdWxzZS55ICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Qi5hbmdsZVByZXYgLT0gVmVjdG9yLmNyb3NzKG9mZnNldCwgaW1wdWxzZSkgKiBib2R5Qi5pbnZlcnNlSW5lcnRpYTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGEgc29sdXRpb24gZm9yIHBhaXIgdmVsb2NpdGllcy5cbiAgICAgKiBAbWV0aG9kIHNvbHZlVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgUmVzb2x2ZXIuc29sdmVWZWxvY2l0eSA9IGZ1bmN0aW9uKHBhaXJzLCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIHRpbWVTY2FsZVNxdWFyZWQgPSB0aW1lU2NhbGUgKiB0aW1lU2NhbGUsXG4gICAgICAgICAgICBpbXB1bHNlID0gVmVjdG9yLl90ZW1wWzBdLFxuICAgICAgICAgICAgdGVtcEEgPSBWZWN0b3IuX3RlbXBbMV0sXG4gICAgICAgICAgICB0ZW1wQiA9IFZlY3Rvci5fdGVtcFsyXSxcbiAgICAgICAgICAgIHRlbXBDID0gVmVjdG9yLl90ZW1wWzNdLFxuICAgICAgICAgICAgdGVtcEQgPSBWZWN0b3IuX3RlbXBbNF0sXG4gICAgICAgICAgICB0ZW1wRSA9IFZlY3Rvci5fdGVtcFs1XTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSB8fCBwYWlyLmlzU2Vuc29yKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb24sXG4gICAgICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24ucGFyZW50QSxcbiAgICAgICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5wYXJlbnRCLFxuICAgICAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWwsXG4gICAgICAgICAgICAgICAgdGFuZ2VudCA9IGNvbGxpc2lvbi50YW5nZW50LFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzID0gcGFpci5hY3RpdmVDb250YWN0cyxcbiAgICAgICAgICAgICAgICBjb250YWN0U2hhcmUgPSAxIC8gY29udGFjdHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm9keSB2ZWxvY2l0aWVzXG4gICAgICAgICAgICBib2R5QS52ZWxvY2l0eS54ID0gYm9keUEucG9zaXRpb24ueCAtIGJvZHlBLnBvc2l0aW9uUHJldi54O1xuICAgICAgICAgICAgYm9keUEudmVsb2NpdHkueSA9IGJvZHlBLnBvc2l0aW9uLnkgLSBib2R5QS5wb3NpdGlvblByZXYueTtcbiAgICAgICAgICAgIGJvZHlCLnZlbG9jaXR5LnggPSBib2R5Qi5wb3NpdGlvbi54IC0gYm9keUIucG9zaXRpb25QcmV2Lng7XG4gICAgICAgICAgICBib2R5Qi52ZWxvY2l0eS55ID0gYm9keUIucG9zaXRpb24ueSAtIGJvZHlCLnBvc2l0aW9uUHJldi55O1xuICAgICAgICAgICAgYm9keUEuYW5ndWxhclZlbG9jaXR5ID0gYm9keUEuYW5nbGUgLSBib2R5QS5hbmdsZVByZXY7XG4gICAgICAgICAgICBib2R5Qi5hbmd1bGFyVmVsb2NpdHkgPSBib2R5Qi5hbmdsZSAtIGJvZHlCLmFuZ2xlUHJldjtcblxuICAgICAgICAgICAgLy8gcmVzb2x2ZSBlYWNoIGNvbnRhY3RcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY29udGFjdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdCA9IGNvbnRhY3RzW2pdLFxuICAgICAgICAgICAgICAgICAgICBjb250YWN0VmVydGV4ID0gY29udGFjdC52ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEEgPSBWZWN0b3Iuc3ViKGNvbnRhY3RWZXJ0ZXgsIGJvZHlBLnBvc2l0aW9uLCB0ZW1wQSksXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEIgPSBWZWN0b3Iuc3ViKGNvbnRhY3RWZXJ0ZXgsIGJvZHlCLnBvc2l0aW9uLCB0ZW1wQiksXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5UG9pbnRBID0gVmVjdG9yLmFkZChib2R5QS52ZWxvY2l0eSwgVmVjdG9yLm11bHQoVmVjdG9yLnBlcnAob2Zmc2V0QSksIGJvZHlBLmFuZ3VsYXJWZWxvY2l0eSksIHRlbXBDKSxcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHlQb2ludEIgPSBWZWN0b3IuYWRkKGJvZHlCLnZlbG9jaXR5LCBWZWN0b3IubXVsdChWZWN0b3IucGVycChvZmZzZXRCKSwgYm9keUIuYW5ndWxhclZlbG9jaXR5KSwgdGVtcEQpLCBcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmVWZWxvY2l0eSA9IFZlY3Rvci5zdWIodmVsb2NpdHlQb2ludEEsIHZlbG9jaXR5UG9pbnRCLCB0ZW1wRSksXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFZlbG9jaXR5ID0gVmVjdG9yLmRvdChub3JtYWwsIHJlbGF0aXZlVmVsb2NpdHkpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRhbmdlbnRWZWxvY2l0eSA9IFZlY3Rvci5kb3QodGFuZ2VudCwgcmVsYXRpdmVWZWxvY2l0eSksXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRTcGVlZCA9IE1hdGguYWJzKHRhbmdlbnRWZWxvY2l0eSksXG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRWZWxvY2l0eURpcmVjdGlvbiA9IENvbW1vbi5zaWduKHRhbmdlbnRWZWxvY2l0eSk7XG5cbiAgICAgICAgICAgICAgICAvLyByYXcgaW1wdWxzZXNcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsSW1wdWxzZSA9ICgxICsgcGFpci5yZXN0aXR1dGlvbikgKiBub3JtYWxWZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsRm9yY2UgPSBDb21tb24uY2xhbXAocGFpci5zZXBhcmF0aW9uICsgbm9ybWFsVmVsb2NpdHksIDAsIDEpICogUmVzb2x2ZXIuX2ZyaWN0aW9uTm9ybWFsTXVsdGlwbGllcjtcblxuICAgICAgICAgICAgICAgIC8vIGNvdWxvbWIgZnJpY3Rpb25cbiAgICAgICAgICAgICAgICB2YXIgdGFuZ2VudEltcHVsc2UgPSB0YW5nZW50VmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgIG1heEZyaWN0aW9uID0gSW5maW5pdHk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFNwZWVkID4gcGFpci5mcmljdGlvbiAqIHBhaXIuZnJpY3Rpb25TdGF0aWMgKiBub3JtYWxGb3JjZSAqIHRpbWVTY2FsZVNxdWFyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4RnJpY3Rpb24gPSB0YW5nZW50U3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gQ29tbW9uLmNsYW1wKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFpci5mcmljdGlvbiAqIHRhbmdlbnRWZWxvY2l0eURpcmVjdGlvbiAqIHRpbWVTY2FsZVNxdWFyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAtbWF4RnJpY3Rpb24sIG1heEZyaWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbW9kaWZ5IGltcHVsc2VzIGFjY291bnRpbmcgZm9yIG1hc3MsIGluZXJ0aWEgYW5kIG9mZnNldFxuICAgICAgICAgICAgICAgIHZhciBvQWNOID0gVmVjdG9yLmNyb3NzKG9mZnNldEEsIG5vcm1hbCksXG4gICAgICAgICAgICAgICAgICAgIG9CY04gPSBWZWN0b3IuY3Jvc3Mob2Zmc2V0Qiwgbm9ybWFsKSxcbiAgICAgICAgICAgICAgICAgICAgc2hhcmUgPSBjb250YWN0U2hhcmUgLyAoYm9keUEuaW52ZXJzZU1hc3MgKyBib2R5Qi5pbnZlcnNlTWFzcyArIGJvZHlBLmludmVyc2VJbmVydGlhICogb0FjTiAqIG9BY04gICsgYm9keUIuaW52ZXJzZUluZXJ0aWEgKiBvQmNOICogb0JjTik7XG5cbiAgICAgICAgICAgICAgICBub3JtYWxJbXB1bHNlICo9IHNoYXJlO1xuICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlICo9IHNoYXJlO1xuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhpZ2ggdmVsb2NpdHkgYW5kIHJlc3RpbmcgY29sbGlzaW9ucyBzZXBhcmF0ZWx5XG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbFZlbG9jaXR5IDwgMCAmJiBub3JtYWxWZWxvY2l0eSAqIG5vcm1hbFZlbG9jaXR5ID4gUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2ggKiB0aW1lU2NhbGVTcXVhcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZ2ggbm9ybWFsIHZlbG9jaXR5IHNvIGNsZWFyIGNhY2hlZCBjb250YWN0IG5vcm1hbCBpbXB1bHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Qubm9ybWFsSW1wdWxzZSA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29sdmUgcmVzdGluZyBjb2xsaXNpb24gY29uc3RyYWludHMgdXNpbmcgRXJpbiBDYXR0bydzIG1ldGhvZCAoR0RDMDgpXG4gICAgICAgICAgICAgICAgICAgIC8vIGltcHVsc2UgY29uc3RyYWludCB0ZW5kcyB0byAwXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWN0Tm9ybWFsSW1wdWxzZSA9IGNvbnRhY3Qubm9ybWFsSW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC5ub3JtYWxJbXB1bHNlID0gTWF0aC5taW4oY29udGFjdC5ub3JtYWxJbXB1bHNlICsgbm9ybWFsSW1wdWxzZSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbEltcHVsc2UgPSBjb250YWN0Lm5vcm1hbEltcHVsc2UgLSBjb250YWN0Tm9ybWFsSW1wdWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaGlnaCB2ZWxvY2l0eSBhbmQgcmVzdGluZyBjb2xsaXNpb25zIHNlcGFyYXRlbHlcbiAgICAgICAgICAgICAgICBpZiAodGFuZ2VudFZlbG9jaXR5ICogdGFuZ2VudFZlbG9jaXR5ID4gUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2hUYW5nZW50ICogdGltZVNjYWxlU3F1YXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWdoIHRhbmdlbnQgdmVsb2NpdHkgc28gY2xlYXIgY2FjaGVkIGNvbnRhY3QgdGFuZ2VudCBpbXB1bHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbHZlIHJlc3RpbmcgY29sbGlzaW9uIGNvbnN0cmFpbnRzIHVzaW5nIEVyaW4gQ2F0dG8ncyBtZXRob2QgKEdEQzA4KVxuICAgICAgICAgICAgICAgICAgICAvLyB0YW5nZW50IGltcHVsc2UgdGVuZHMgdG8gLXRhbmdlbnRTcGVlZCBvciArdGFuZ2VudFNwZWVkXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWN0VGFuZ2VudEltcHVsc2UgPSBjb250YWN0LnRhbmdlbnRJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0LnRhbmdlbnRJbXB1bHNlID0gQ29tbW9uLmNsYW1wKGNvbnRhY3QudGFuZ2VudEltcHVsc2UgKyB0YW5nZW50SW1wdWxzZSwgLW1heEZyaWN0aW9uLCBtYXhGcmljdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gY29udGFjdC50YW5nZW50SW1wdWxzZSAtIGNvbnRhY3RUYW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0b3RhbCBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgIGltcHVsc2UueCA9IChub3JtYWwueCAqIG5vcm1hbEltcHVsc2UpICsgKHRhbmdlbnQueCAqIHRhbmdlbnRJbXB1bHNlKTtcbiAgICAgICAgICAgICAgICBpbXB1bHNlLnkgPSAobm9ybWFsLnkgKiBub3JtYWxJbXB1bHNlKSArICh0YW5nZW50LnkgKiB0YW5nZW50SW1wdWxzZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gYXBwbHkgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICBpZiAoIShib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueCArPSBpbXB1bHNlLnggKiBib2R5QS5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnkgKz0gaW1wdWxzZS55ICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBLmFuZ2xlUHJldiArPSBWZWN0b3IuY3Jvc3Mob2Zmc2V0QSwgaW1wdWxzZSkgKiBib2R5QS5pbnZlcnNlSW5lcnRpYTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIShib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueCAtPSBpbXB1bHNlLnggKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnkgLT0gaW1wdWxzZS55ICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlCLmFuZ2xlUHJldiAtPSBWZWN0b3IuY3Jvc3Mob2Zmc2V0QiwgaW1wdWxzZSkgKiBib2R5Qi5pbnZlcnNlSW5lcnRpYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuLi9nZW9tZXRyeS9Cb3VuZHNcIjoyNixcIi4uL2dlb21ldHJ5L1ZlY3RvclwiOjI4LFwiLi4vZ2VvbWV0cnkvVmVydGljZXNcIjoyOX1dLDExOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5TQVRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBkZXRlY3RpbmcgY29sbGlzaW9ucyB1c2luZyB0aGUgU2VwYXJhdGluZyBBeGlzIFRoZW9yZW0uXG4qXG4qIEBjbGFzcyBTQVRcbiovXG5cbi8vIFRPRE86IHRydWUgY2lyY2xlcyBhbmQgY3VydmVzXG5cbnZhciBTQVQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBTQVQ7XG5cbnZhciBWZXJ0aWNlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlcnRpY2VzJyk7XG52YXIgVmVjdG9yID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVjdG9yJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBjb2xsaXNpb24gYmV0d2VlbiB0d28gYm9kaWVzIHVzaW5nIHRoZSBTZXBhcmF0aW5nIEF4aXMgVGhlb3JlbS5cbiAgICAgKiBAbWV0aG9kIGNvbGxpZGVzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbn0gcHJldmlvdXNDb2xsaXNpb25cbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb259IGNvbGxpc2lvblxuICAgICAqL1xuICAgIFNBVC5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5QiwgcHJldmlvdXNDb2xsaXNpb24pIHtcbiAgICAgICAgdmFyIG92ZXJsYXBBQixcbiAgICAgICAgICAgIG92ZXJsYXBCQSwgXG4gICAgICAgICAgICBtaW5PdmVybGFwLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgY2FuUmV1c2VQcmV2Q29sID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzQ29sbGlzaW9uKSB7XG4gICAgICAgICAgICAvLyBlc3RpbWF0ZSB0b3RhbCBtb3Rpb25cbiAgICAgICAgICAgIHZhciBwYXJlbnRBID0gYm9keUEucGFyZW50LFxuICAgICAgICAgICAgICAgIHBhcmVudEIgPSBib2R5Qi5wYXJlbnQsXG4gICAgICAgICAgICAgICAgbW90aW9uID0gcGFyZW50QS5zcGVlZCAqIHBhcmVudEEuc3BlZWQgKyBwYXJlbnRBLmFuZ3VsYXJTcGVlZCAqIHBhcmVudEEuYW5ndWxhclNwZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICsgcGFyZW50Qi5zcGVlZCAqIHBhcmVudEIuc3BlZWQgKyBwYXJlbnRCLmFuZ3VsYXJTcGVlZCAqIHBhcmVudEIuYW5ndWxhclNwZWVkO1xuXG4gICAgICAgICAgICAvLyB3ZSBtYXkgYmUgYWJsZSB0byAocGFydGlhbGx5KSByZXVzZSBjb2xsaXNpb24gcmVzdWx0IFxuICAgICAgICAgICAgLy8gYnV0IG9ubHkgc2FmZSBpZiBjb2xsaXNpb24gd2FzIHJlc3RpbmdcbiAgICAgICAgICAgIGNhblJldXNlUHJldkNvbCA9IHByZXZpb3VzQ29sbGlzaW9uICYmIHByZXZpb3VzQ29sbGlzaW9uLmNvbGxpZGVkICYmIG1vdGlvbiA8IDAuMjtcblxuICAgICAgICAgICAgLy8gcmV1c2UgY29sbGlzaW9uIG9iamVjdFxuICAgICAgICAgICAgY29sbGlzaW9uID0gcHJldmlvdXNDb2xsaXNpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSB7IGNvbGxpZGVkOiBmYWxzZSwgYm9keUE6IGJvZHlBLCBib2R5QjogYm9keUIgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2aW91c0NvbGxpc2lvbiAmJiBjYW5SZXVzZVByZXZDb2wpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGNhbiByZXVzZSB0aGUgY29sbGlzaW9uIHJlc3VsdFxuICAgICAgICAgICAgLy8gd2Ugb25seSBuZWVkIHRvIHRlc3QgdGhlIHByZXZpb3VzbHkgZm91bmQgYXhpc1xuICAgICAgICAgICAgdmFyIGF4aXNCb2R5QSA9IGNvbGxpc2lvbi5heGlzQm9keSxcbiAgICAgICAgICAgICAgICBheGlzQm9keUIgPSBheGlzQm9keUEgPT09IGJvZHlBID8gYm9keUIgOiBib2R5QSxcbiAgICAgICAgICAgICAgICBheGVzID0gW2F4aXNCb2R5QS5heGVzW3ByZXZpb3VzQ29sbGlzaW9uLmF4aXNOdW1iZXJdXTtcblxuICAgICAgICAgICAgbWluT3ZlcmxhcCA9IFNBVC5fb3ZlcmxhcEF4ZXMoYXhpc0JvZHlBLnZlcnRpY2VzLCBheGlzQm9keUIudmVydGljZXMsIGF4ZXMpO1xuICAgICAgICAgICAgY29sbGlzaW9uLnJldXNlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChtaW5PdmVybGFwLm92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbi5jb2xsaWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBjYW4ndCByZXVzZSBhIHJlc3VsdCwgcGVyZm9ybSBhIGZ1bGwgU0FUIHRlc3RcblxuICAgICAgICAgICAgb3ZlcmxhcEFCID0gU0FULl9vdmVybGFwQXhlcyhib2R5QS52ZXJ0aWNlcywgYm9keUIudmVydGljZXMsIGJvZHlBLmF4ZXMpO1xuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcEFCLm92ZXJsYXAgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbi5jb2xsaWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG92ZXJsYXBCQSA9IFNBVC5fb3ZlcmxhcEF4ZXMoYm9keUIudmVydGljZXMsIGJvZHlBLnZlcnRpY2VzLCBib2R5Qi5heGVzKTtcblxuICAgICAgICAgICAgaWYgKG92ZXJsYXBCQS5vdmVybGFwIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24uY29sbGlkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcEFCLm92ZXJsYXAgPCBvdmVybGFwQkEub3ZlcmxhcCkge1xuICAgICAgICAgICAgICAgIG1pbk92ZXJsYXAgPSBvdmVybGFwQUI7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uLmF4aXNCb2R5ID0gYm9keUE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1pbk92ZXJsYXAgPSBvdmVybGFwQkE7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uLmF4aXNCb2R5ID0gYm9keUI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGltcG9ydGFudCBmb3IgcmV1c2UgbGF0ZXJcbiAgICAgICAgICAgIGNvbGxpc2lvbi5heGlzTnVtYmVyID0gbWluT3ZlcmxhcC5heGlzTnVtYmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGlzaW9uLmJvZHlBID0gYm9keUEuaWQgPCBib2R5Qi5pZCA/IGJvZHlBIDogYm9keUI7XG4gICAgICAgIGNvbGxpc2lvbi5ib2R5QiA9IGJvZHlBLmlkIDwgYm9keUIuaWQgPyBib2R5QiA6IGJvZHlBO1xuICAgICAgICBjb2xsaXNpb24uY29sbGlkZWQgPSB0cnVlO1xuICAgICAgICBjb2xsaXNpb24uZGVwdGggPSBtaW5PdmVybGFwLm92ZXJsYXA7XG4gICAgICAgIGNvbGxpc2lvbi5wYXJlbnRBID0gY29sbGlzaW9uLmJvZHlBLnBhcmVudDtcbiAgICAgICAgY29sbGlzaW9uLnBhcmVudEIgPSBjb2xsaXNpb24uYm9keUIucGFyZW50O1xuICAgICAgICBcbiAgICAgICAgYm9keUEgPSBjb2xsaXNpb24uYm9keUE7XG4gICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCO1xuXG4gICAgICAgIC8vIGVuc3VyZSBub3JtYWwgaXMgZmFjaW5nIGF3YXkgZnJvbSBib2R5QVxuICAgICAgICBpZiAoVmVjdG9yLmRvdChtaW5PdmVybGFwLmF4aXMsIFZlY3Rvci5zdWIoYm9keUIucG9zaXRpb24sIGJvZHlBLnBvc2l0aW9uKSkgPCAwKSB7XG4gICAgICAgICAgICBjb2xsaXNpb24ubm9ybWFsID0ge1xuICAgICAgICAgICAgICAgIHg6IG1pbk92ZXJsYXAuYXhpcy54LFxuICAgICAgICAgICAgICAgIHk6IG1pbk92ZXJsYXAuYXhpcy55XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGlzaW9uLm5vcm1hbCA9IHtcbiAgICAgICAgICAgICAgICB4OiAtbWluT3ZlcmxhcC5heGlzLngsXG4gICAgICAgICAgICAgICAgeTogLW1pbk92ZXJsYXAuYXhpcy55XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGlzaW9uLnRhbmdlbnQgPSBWZWN0b3IucGVycChjb2xsaXNpb24ubm9ybWFsKTtcblxuICAgICAgICBjb2xsaXNpb24ucGVuZXRyYXRpb24gPSBjb2xsaXNpb24ucGVuZXRyYXRpb24gfHwge307XG4gICAgICAgIGNvbGxpc2lvbi5wZW5ldHJhdGlvbi54ID0gY29sbGlzaW9uLm5vcm1hbC54ICogY29sbGlzaW9uLmRlcHRoO1xuICAgICAgICBjb2xsaXNpb24ucGVuZXRyYXRpb24ueSA9IGNvbGxpc2lvbi5ub3JtYWwueSAqIGNvbGxpc2lvbi5kZXB0aDsgXG5cbiAgICAgICAgLy8gZmluZCBzdXBwb3J0IHBvaW50cywgdGhlcmUgaXMgYWx3YXlzIGVpdGhlciBleGFjdGx5IG9uZSBvciB0d29cbiAgICAgICAgdmFyIHZlcnRpY2VzQiA9IFNBVC5fZmluZFN1cHBvcnRzKGJvZHlBLCBib2R5QiwgY29sbGlzaW9uLm5vcm1hbCksXG4gICAgICAgICAgICBzdXBwb3J0cyA9IFtdO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHN1cHBvcnRzIGZyb20gYm9keUIgdGhhdCBhcmUgaW5zaWRlIGJvZHlBXG4gICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5QS52ZXJ0aWNlcywgdmVydGljZXNCWzBdKSlcbiAgICAgICAgICAgIHN1cHBvcnRzLnB1c2godmVydGljZXNCWzBdKTtcblxuICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMoYm9keUEudmVydGljZXMsIHZlcnRpY2VzQlsxXSkpXG4gICAgICAgICAgICBzdXBwb3J0cy5wdXNoKHZlcnRpY2VzQlsxXSk7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgc3VwcG9ydHMgZnJvbSBib2R5QSB0aGF0IGFyZSBpbnNpZGUgYm9keUJcbiAgICAgICAgaWYgKHN1cHBvcnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNlc0EgPSBTQVQuX2ZpbmRTdXBwb3J0cyhib2R5QiwgYm9keUEsIFZlY3Rvci5uZWcoY29sbGlzaW9uLm5vcm1hbCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlCLnZlcnRpY2VzLCB2ZXJ0aWNlc0FbMF0pKVxuICAgICAgICAgICAgICAgIHN1cHBvcnRzLnB1c2godmVydGljZXNBWzBdKTtcblxuICAgICAgICAgICAgaWYgKHN1cHBvcnRzLmxlbmd0aCA8IDIgJiYgVmVydGljZXMuY29udGFpbnMoYm9keUIudmVydGljZXMsIHZlcnRpY2VzQVsxXSkpXG4gICAgICAgICAgICAgICAgc3VwcG9ydHMucHVzaCh2ZXJ0aWNlc0FbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWNjb3VudCBmb3IgdGhlIGVkZ2UgY2FzZSBvZiBvdmVybGFwcGluZyBidXQgbm8gdmVydGV4IGNvbnRhaW5tZW50XG4gICAgICAgIGlmIChzdXBwb3J0cy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgc3VwcG9ydHMgPSBbdmVydGljZXNCWzBdXTtcbiAgICAgICAgXG4gICAgICAgIGNvbGxpc2lvbi5zdXBwb3J0cyA9IHN1cHBvcnRzO1xuXG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIG92ZXJsYXAgYmV0d2VlbiB0d28gc2V0cyBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIF9vdmVybGFwQXhlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHZlcnRpY2VzQVxuICAgICAqIEBwYXJhbSB7fSB2ZXJ0aWNlc0JcbiAgICAgKiBAcGFyYW0ge30gYXhlc1xuICAgICAqIEByZXR1cm4gcmVzdWx0XG4gICAgICovXG4gICAgU0FULl9vdmVybGFwQXhlcyA9IGZ1bmN0aW9uKHZlcnRpY2VzQSwgdmVydGljZXNCLCBheGVzKSB7XG4gICAgICAgIHZhciBwcm9qZWN0aW9uQSA9IFZlY3Rvci5fdGVtcFswXSwgXG4gICAgICAgICAgICBwcm9qZWN0aW9uQiA9IFZlY3Rvci5fdGVtcFsxXSxcbiAgICAgICAgICAgIHJlc3VsdCA9IHsgb3ZlcmxhcDogTnVtYmVyLk1BWF9WQUxVRSB9LFxuICAgICAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgICAgIGF4aXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBheGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBheGlzID0gYXhlc1tpXTtcblxuICAgICAgICAgICAgU0FULl9wcm9qZWN0VG9BeGlzKHByb2plY3Rpb25BLCB2ZXJ0aWNlc0EsIGF4aXMpO1xuICAgICAgICAgICAgU0FULl9wcm9qZWN0VG9BeGlzKHByb2plY3Rpb25CLCB2ZXJ0aWNlc0IsIGF4aXMpO1xuXG4gICAgICAgICAgICBvdmVybGFwID0gTWF0aC5taW4ocHJvamVjdGlvbkEubWF4IC0gcHJvamVjdGlvbkIubWluLCBwcm9qZWN0aW9uQi5tYXggLSBwcm9qZWN0aW9uQS5taW4pO1xuXG4gICAgICAgICAgICBpZiAob3ZlcmxhcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm92ZXJsYXAgPSBvdmVybGFwO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvdmVybGFwIDwgcmVzdWx0Lm92ZXJsYXApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQub3ZlcmxhcCA9IG92ZXJsYXA7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmF4aXMgPSBheGlzO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5heGlzTnVtYmVyID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb2plY3RzIHZlcnRpY2VzIG9uIGFuIGF4aXMgYW5kIHJldHVybnMgYW4gaW50ZXJ2YWwuXG4gICAgICogQG1ldGhvZCBfcHJvamVjdFRvQXhpc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHByb2plY3Rpb25cbiAgICAgKiBAcGFyYW0ge30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge30gYXhpc1xuICAgICAqL1xuICAgIFNBVC5fcHJvamVjdFRvQXhpcyA9IGZ1bmN0aW9uKHByb2plY3Rpb24sIHZlcnRpY2VzLCBheGlzKSB7XG4gICAgICAgIHZhciBtaW4gPSBWZWN0b3IuZG90KHZlcnRpY2VzWzBdLCBheGlzKSxcbiAgICAgICAgICAgIG1heCA9IG1pbjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZG90ID0gVmVjdG9yLmRvdCh2ZXJ0aWNlc1tpXSwgYXhpcyk7XG5cbiAgICAgICAgICAgIGlmIChkb3QgPiBtYXgpIHsgXG4gICAgICAgICAgICAgICAgbWF4ID0gZG90OyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG90IDwgbWluKSB7IFxuICAgICAgICAgICAgICAgIG1pbiA9IGRvdDsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0aW9uLm1pbiA9IG1pbjtcbiAgICAgICAgcHJvamVjdGlvbi5tYXggPSBtYXg7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBGaW5kcyBzdXBwb3J0aW5nIHZlcnRpY2VzIGdpdmVuIHR3byBib2RpZXMgYWxvbmcgYSBnaXZlbiBkaXJlY3Rpb24gdXNpbmcgaGlsbC1jbGltYmluZy5cbiAgICAgKiBAbWV0aG9kIF9maW5kU3VwcG9ydHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBib2R5QVxuICAgICAqIEBwYXJhbSB7fSBib2R5QlxuICAgICAqIEBwYXJhbSB7fSBub3JtYWxcbiAgICAgKiBAcmV0dXJuIFt2ZWN0b3JdXG4gICAgICovXG4gICAgU0FULl9maW5kU3VwcG9ydHMgPSBmdW5jdGlvbihib2R5QSwgYm9keUIsIG5vcm1hbCkge1xuICAgICAgICB2YXIgbmVhcmVzdERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIHZlcnRleFRvQm9keSA9IFZlY3Rvci5fdGVtcFswXSxcbiAgICAgICAgICAgIHZlcnRpY2VzID0gYm9keUIudmVydGljZXMsXG4gICAgICAgICAgICBib2R5QVBvc2l0aW9uID0gYm9keUEucG9zaXRpb24sXG4gICAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICAgIHZlcnRleCxcbiAgICAgICAgICAgIHZlcnRleEEsXG4gICAgICAgICAgICB2ZXJ0ZXhCO1xuXG4gICAgICAgIC8vIGZpbmQgY2xvc2VzdCB2ZXJ0ZXggb24gYm9keUJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICB2ZXJ0ZXhUb0JvZHkueCA9IHZlcnRleC54IC0gYm9keUFQb3NpdGlvbi54O1xuICAgICAgICAgICAgdmVydGV4VG9Cb2R5LnkgPSB2ZXJ0ZXgueSAtIGJvZHlBUG9zaXRpb24ueTtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gLVZlY3Rvci5kb3Qobm9ybWFsLCB2ZXJ0ZXhUb0JvZHkpO1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBuZWFyZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhBID0gdmVydGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCBuZXh0IGNsb3Nlc3QgdmVydGV4IHVzaW5nIHRoZSB0d28gY29ubmVjdGVkIHRvIGl0XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSB2ZXJ0ZXhBLmluZGV4IC0gMSA+PSAwID8gdmVydGV4QS5pbmRleCAtIDEgOiB2ZXJ0aWNlcy5sZW5ndGggLSAxO1xuICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1twcmV2SW5kZXhdO1xuICAgICAgICB2ZXJ0ZXhUb0JvZHkueCA9IHZlcnRleC54IC0gYm9keUFQb3NpdGlvbi54O1xuICAgICAgICB2ZXJ0ZXhUb0JvZHkueSA9IHZlcnRleC55IC0gYm9keUFQb3NpdGlvbi55O1xuICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSAtVmVjdG9yLmRvdChub3JtYWwsIHZlcnRleFRvQm9keSk7XG4gICAgICAgIHZlcnRleEIgPSB2ZXJ0ZXg7XG5cbiAgICAgICAgdmFyIG5leHRJbmRleCA9ICh2ZXJ0ZXhBLmluZGV4ICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW25leHRJbmRleF07XG4gICAgICAgIHZlcnRleFRvQm9keS54ID0gdmVydGV4LnggLSBib2R5QVBvc2l0aW9uLng7XG4gICAgICAgIHZlcnRleFRvQm9keS55ID0gdmVydGV4LnkgLSBib2R5QVBvc2l0aW9uLnk7XG4gICAgICAgIGRpc3RhbmNlID0gLVZlY3Rvci5kb3Qobm9ybWFsLCB2ZXJ0ZXhUb0JvZHkpO1xuICAgICAgICBpZiAoZGlzdGFuY2UgPCBuZWFyZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHZlcnRleEIgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3ZlcnRleEEsIHZlcnRleEJdO1xuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi4vZ2VvbWV0cnkvVmVjdG9yXCI6MjgsXCIuLi9nZW9tZXRyeS9WZXJ0aWNlc1wiOjI5fV0sMTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbnN0cmFpbnRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGNvbnN0cmFpbnRzLlxuKiBDb25zdHJhaW50cyBhcmUgdXNlZCBmb3Igc3BlY2lmeWluZyB0aGF0IGEgZml4ZWQgZGlzdGFuY2UgbXVzdCBiZSBtYWludGFpbmVkIGJldHdlZW4gdHdvIGJvZGllcyAob3IgYSBib2R5IGFuZCBhIGZpeGVkIHdvcmxkLXNwYWNlIHBvc2l0aW9uKS5cbiogVGhlIHN0aWZmbmVzcyBvZiBjb25zdHJhaW50cyBjYW4gYmUgbW9kaWZpZWQgdG8gY3JlYXRlIHNwcmluZ3Mgb3IgZWxhc3RpYy5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIENvbnN0cmFpbnRcbiovXG5cbnZhciBDb25zdHJhaW50ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3RyYWludDtcblxudmFyIFZlcnRpY2VzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVydGljZXMnKTtcbnZhciBWZWN0b3IgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZWN0b3InKTtcbnZhciBTbGVlcGluZyA9IF9kZXJlcV8oJy4uL2NvcmUvU2xlZXBpbmcnKTtcbnZhciBCb3VuZHMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9Cb3VuZHMnKTtcbnZhciBBeGVzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQXhlcycpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIENvbnN0cmFpbnQuX3dhcm1pbmcgPSAwLjQ7XG4gICAgQ29uc3RyYWludC5fdG9ycXVlRGFtcGVuID0gMTtcbiAgICBDb25zdHJhaW50Ll9taW5MZW5ndGggPSAwLjAwMDAwMTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29uc3RyYWludC5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFRvIHNpbXVsYXRlIGEgcmV2b2x1dGUgY29uc3RyYWludCAob3IgcGluIGpvaW50KSBzZXQgYGxlbmd0aDogMGAgYW5kIGEgaGlnaCBgc3RpZmZuZXNzYCB2YWx1ZSAoZS5nLiBgMC43YCBvciBhYm92ZSkuXG4gICAgICogSWYgdGhlIGNvbnN0cmFpbnQgaXMgdW5zdGFibGUsIHRyeSBsb3dlcmluZyB0aGUgYHN0aWZmbmVzc2AgdmFsdWUgYW5kIC8gb3IgaW5jcmVhc2luZyBgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zYC5cbiAgICAgKiBGb3IgY29tcG91bmQgYm9kaWVzLCBjb25zdHJhaW50cyBtdXN0IGJlIGFwcGxpZWQgdG8gdGhlIHBhcmVudCBib2R5IChub3Qgb25lIG9mIGl0cyBwYXJ0cykuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICB2YXIgY29uc3RyYWludCA9IG9wdGlvbnM7XG5cbiAgICAgICAgLy8gaWYgYm9kaWVzIGRlZmluZWQgYnV0IG5vIHBvaW50cywgdXNlIGJvZHkgY2VudHJlXG4gICAgICAgIGlmIChjb25zdHJhaW50LmJvZHlBICYmICFjb25zdHJhaW50LnBvaW50QSlcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIGlmIChjb25zdHJhaW50LmJvZHlCICYmICFjb25zdHJhaW50LnBvaW50QilcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHN0YXRpYyBsZW5ndGggdXNpbmcgaW5pdGlhbCB3b3JsZCBzcGFjZSBwb2ludHNcbiAgICAgICAgdmFyIGluaXRpYWxQb2ludEEgPSBjb25zdHJhaW50LmJvZHlBID8gVmVjdG9yLmFkZChjb25zdHJhaW50LmJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSkgOiBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgIGluaXRpYWxQb2ludEIgPSBjb25zdHJhaW50LmJvZHlCID8gVmVjdG9yLmFkZChjb25zdHJhaW50LmJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QikgOiBjb25zdHJhaW50LnBvaW50QixcbiAgICAgICAgICAgIGxlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoVmVjdG9yLnN1Yihpbml0aWFsUG9pbnRBLCBpbml0aWFsUG9pbnRCKSk7XG4gICAgXG4gICAgICAgIGNvbnN0cmFpbnQubGVuZ3RoID0gdHlwZW9mIGNvbnN0cmFpbnQubGVuZ3RoICE9PSAndW5kZWZpbmVkJyA/IGNvbnN0cmFpbnQubGVuZ3RoIDogbGVuZ3RoO1xuXG4gICAgICAgIC8vIG9wdGlvbiBkZWZhdWx0c1xuICAgICAgICBjb25zdHJhaW50LmlkID0gY29uc3RyYWludC5pZCB8fCBDb21tb24ubmV4dElkKCk7XG4gICAgICAgIGNvbnN0cmFpbnQubGFiZWwgPSBjb25zdHJhaW50LmxhYmVsIHx8ICdDb25zdHJhaW50JztcbiAgICAgICAgY29uc3RyYWludC50eXBlID0gJ2NvbnN0cmFpbnQnO1xuICAgICAgICBjb25zdHJhaW50LnN0aWZmbmVzcyA9IGNvbnN0cmFpbnQuc3RpZmZuZXNzIHx8IChjb25zdHJhaW50Lmxlbmd0aCA+IDAgPyAxIDogMC43KTtcbiAgICAgICAgY29uc3RyYWludC5kYW1waW5nID0gY29uc3RyYWludC5kYW1waW5nIHx8IDA7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyA9IGNvbnN0cmFpbnQuYW5ndWxhclN0aWZmbmVzcyB8fCAwO1xuICAgICAgICBjb25zdHJhaW50LmFuZ2xlQSA9IGNvbnN0cmFpbnQuYm9keUEgPyBjb25zdHJhaW50LmJvZHlBLmFuZ2xlIDogY29uc3RyYWludC5hbmdsZUE7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIuYW5nbGUgOiBjb25zdHJhaW50LmFuZ2xlQjtcbiAgICAgICAgY29uc3RyYWludC5wbHVnaW4gPSB7fTtcblxuICAgICAgICAvLyByZW5kZXJcbiAgICAgICAgdmFyIHJlbmRlciA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICBzdHJva2VTdHlsZTogJyNmZmZmZmYnLFxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgYW5jaG9yczogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjb25zdHJhaW50Lmxlbmd0aCA9PT0gMCAmJiBjb25zdHJhaW50LnN0aWZmbmVzcyA+IDAuMSkge1xuICAgICAgICAgICAgcmVuZGVyLnR5cGUgPSAncGluJztcbiAgICAgICAgICAgIHJlbmRlci5hbmNob3JzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uc3RyYWludC5zdGlmZm5lc3MgPCAwLjkpIHtcbiAgICAgICAgICAgIHJlbmRlci50eXBlID0gJ3NwcmluZyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJhaW50LnJlbmRlciA9IENvbW1vbi5leHRlbmQocmVuZGVyLCBjb25zdHJhaW50LnJlbmRlcik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByZXBhcmVzIGZvciBzb2x2aW5nIGJ5IGNvbnN0cmFpbnQgd2FybWluZy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcHJlU29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbCA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgaW1wdWxzZSA9IGJvZHkuY29uc3RyYWludEltcHVsc2U7XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IChpbXB1bHNlLnggPT09IDAgJiYgaW1wdWxzZS55ID09PSAwICYmIGltcHVsc2UuYW5nbGUgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueCArPSBpbXB1bHNlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnkgKz0gaW1wdWxzZS55O1xuICAgICAgICAgICAgYm9keS5hbmdsZSArPSBpbXB1bHNlLmFuZ2xlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvbHZlcyBhbGwgY29uc3RyYWludHMgaW4gYSBsaXN0IG9mIGNvbGxpc2lvbnMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNvbHZlQWxsXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50W119IGNvbnN0cmFpbnRzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuc29sdmVBbGwgPSBmdW5jdGlvbihjb25zdHJhaW50cywgdGltZVNjYWxlKSB7XG4gICAgICAgIC8vIFNvbHZlIGZpeGVkIGNvbnN0cmFpbnRzIGZpcnN0LlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnN0cmFpbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldLFxuICAgICAgICAgICAgICAgIGZpeGVkQSA9ICFjb25zdHJhaW50LmJvZHlBIHx8IChjb25zdHJhaW50LmJvZHlBICYmIGNvbnN0cmFpbnQuYm9keUEuaXNTdGF0aWMpLFxuICAgICAgICAgICAgICAgIGZpeGVkQiA9ICFjb25zdHJhaW50LmJvZHlCIHx8IChjb25zdHJhaW50LmJvZHlCICYmIGNvbnN0cmFpbnQuYm9keUIuaXNTdGF0aWMpO1xuXG4gICAgICAgICAgICBpZiAoZml4ZWRBIHx8IGZpeGVkQikge1xuICAgICAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmUoY29uc3RyYWludHNbaV0sIHRpbWVTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb2x2ZSBmcmVlIGNvbnN0cmFpbnRzIGxhc3QuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3RyYWludCA9IGNvbnN0cmFpbnRzW2ldO1xuICAgICAgICAgICAgZml4ZWRBID0gIWNvbnN0cmFpbnQuYm9keUEgfHwgKGNvbnN0cmFpbnQuYm9keUEgJiYgY29uc3RyYWludC5ib2R5QS5pc1N0YXRpYyk7XG4gICAgICAgICAgICBmaXhlZEIgPSAhY29uc3RyYWludC5ib2R5QiB8fCAoY29uc3RyYWludC5ib2R5QiAmJiBjb25zdHJhaW50LmJvZHlCLmlzU3RhdGljKTtcblxuICAgICAgICAgICAgaWYgKCFmaXhlZEEgJiYgIWZpeGVkQikge1xuICAgICAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmUoY29uc3RyYWludHNbaV0sIHRpbWVTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29sdmVzIGEgZGlzdGFuY2UgY29uc3RyYWludCB3aXRoIEdhdXNzLVNpZWRlbCBtZXRob2QuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNvbHZlXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuc29sdmUgPSBmdW5jdGlvbihjb25zdHJhaW50LCB0aW1lU2NhbGUpIHtcbiAgICAgICAgdmFyIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgIGJvZHlCID0gY29uc3RyYWludC5ib2R5QixcbiAgICAgICAgICAgIHBvaW50QSA9IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgcG9pbnRCID0gY29uc3RyYWludC5wb2ludEI7XG5cbiAgICAgICAgaWYgKCFib2R5QSAmJiAhYm9keUIpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgLy8gdXBkYXRlIHJlZmVyZW5jZSBhbmdsZVxuICAgICAgICBpZiAoYm9keUEgJiYgIWJvZHlBLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBWZWN0b3Iucm90YXRlKHBvaW50QSwgYm9keUEuYW5nbGUgLSBjb25zdHJhaW50LmFuZ2xlQSwgcG9pbnRBKTtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVBID0gYm9keUEuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSByZWZlcmVuY2UgYW5nbGVcbiAgICAgICAgaWYgKGJvZHlCICYmICFib2R5Qi5pc1N0YXRpYykge1xuICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZShwb2ludEIsIGJvZHlCLmFuZ2xlIC0gY29uc3RyYWludC5hbmdsZUIsIHBvaW50Qik7XG4gICAgICAgICAgICBjb25zdHJhaW50LmFuZ2xlQiA9IGJvZHlCLmFuZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvaW50QVdvcmxkID0gcG9pbnRBLFxuICAgICAgICAgICAgcG9pbnRCV29ybGQgPSBwb2ludEI7XG5cbiAgICAgICAgaWYgKGJvZHlBKSBwb2ludEFXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIHBvaW50QSk7XG4gICAgICAgIGlmIChib2R5QikgcG9pbnRCV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBwb2ludEIpO1xuXG4gICAgICAgIGlmICghcG9pbnRBV29ybGQgfHwgIXBvaW50QldvcmxkKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHZhciBkZWx0YSA9IFZlY3Rvci5zdWIocG9pbnRBV29ybGQsIHBvaW50QldvcmxkKSxcbiAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggPSBWZWN0b3IubWFnbml0dWRlKGRlbHRhKTtcblxuICAgICAgICAvLyBwcmV2ZW50IHNpbmd1bGFyaXR5XG4gICAgICAgIGlmIChjdXJyZW50TGVuZ3RoIDwgQ29uc3RyYWludC5fbWluTGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyZW50TGVuZ3RoID0gQ29uc3RyYWludC5fbWluTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc29sdmUgZGlzdGFuY2UgY29uc3RyYWludCB3aXRoIEdhdXNzLVNpZWRlbCBtZXRob2RcbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSAoY3VycmVudExlbmd0aCAtIGNvbnN0cmFpbnQubGVuZ3RoKSAvIGN1cnJlbnRMZW5ndGgsXG4gICAgICAgICAgICBzdGlmZm5lc3MgPSBjb25zdHJhaW50LnN0aWZmbmVzcyA8IDEgPyBjb25zdHJhaW50LnN0aWZmbmVzcyAqIHRpbWVTY2FsZSA6IGNvbnN0cmFpbnQuc3RpZmZuZXNzLFxuICAgICAgICAgICAgZm9yY2UgPSBWZWN0b3IubXVsdChkZWx0YSwgZGlmZmVyZW5jZSAqIHN0aWZmbmVzcyksXG4gICAgICAgICAgICBtYXNzVG90YWwgPSAoYm9keUEgPyBib2R5QS5pbnZlcnNlTWFzcyA6IDApICsgKGJvZHlCID8gYm9keUIuaW52ZXJzZU1hc3MgOiAwKSxcbiAgICAgICAgICAgIGluZXJ0aWFUb3RhbCA9IChib2R5QSA/IGJvZHlBLmludmVyc2VJbmVydGlhIDogMCkgKyAoYm9keUIgPyBib2R5Qi5pbnZlcnNlSW5lcnRpYSA6IDApLFxuICAgICAgICAgICAgcmVzaXN0YW5jZVRvdGFsID0gbWFzc1RvdGFsICsgaW5lcnRpYVRvdGFsLFxuICAgICAgICAgICAgdG9ycXVlLFxuICAgICAgICAgICAgc2hhcmUsXG4gICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICBub3JtYWxWZWxvY2l0eSxcbiAgICAgICAgICAgIHJlbGF0aXZlVmVsb2NpdHk7XG5cbiAgICAgICAgaWYgKGNvbnN0cmFpbnQuZGFtcGluZykge1xuICAgICAgICAgICAgdmFyIHplcm8gPSBWZWN0b3IuY3JlYXRlKCk7XG4gICAgICAgICAgICBub3JtYWwgPSBWZWN0b3IuZGl2KGRlbHRhLCBjdXJyZW50TGVuZ3RoKTtcblxuICAgICAgICAgICAgcmVsYXRpdmVWZWxvY2l0eSA9IFZlY3Rvci5zdWIoXG4gICAgICAgICAgICAgICAgYm9keUIgJiYgVmVjdG9yLnN1Yihib2R5Qi5wb3NpdGlvbiwgYm9keUIucG9zaXRpb25QcmV2KSB8fCB6ZXJvLFxuICAgICAgICAgICAgICAgIGJvZHlBICYmIFZlY3Rvci5zdWIoYm9keUEucG9zaXRpb24sIGJvZHlBLnBvc2l0aW9uUHJldikgfHwgemVyb1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbm9ybWFsVmVsb2NpdHkgPSBWZWN0b3IuZG90KG5vcm1hbCwgcmVsYXRpdmVWZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keUEgJiYgIWJvZHlBLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBzaGFyZSA9IGJvZHlBLmludmVyc2VNYXNzIC8gbWFzc1RvdGFsO1xuXG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIGFwcGxpZWQgaW1wdWxzZXMgZm9yIHBvc3Qgc29sdmluZ1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UueCAtPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5QS5jb25zdHJhaW50SW1wdWxzZS55IC09IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZm9yY2VzXG4gICAgICAgICAgICBib2R5QS5wb3NpdGlvbi54IC09IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uLnkgLT0gZm9yY2UueSAqIHNoYXJlO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBkYW1waW5nXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5kYW1waW5nKSB7XG4gICAgICAgICAgICAgICAgYm9keUEucG9zaXRpb25QcmV2LnggLT0gY29uc3RyYWludC5kYW1waW5nICogbm9ybWFsLnggKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55IC09IGNvbnN0cmFpbnQuZGFtcGluZyAqIG5vcm1hbC55ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYXBwbHkgdG9ycXVlXG4gICAgICAgICAgICB0b3JxdWUgPSAoVmVjdG9yLmNyb3NzKHBvaW50QSwgZm9yY2UpIC8gcmVzaXN0YW5jZVRvdGFsKSAqIENvbnN0cmFpbnQuX3RvcnF1ZURhbXBlbiAqIGJvZHlBLmludmVyc2VJbmVydGlhICogKDEgLSBjb25zdHJhaW50LmFuZ3VsYXJTdGlmZm5lc3MpO1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UuYW5nbGUgLT0gdG9ycXVlO1xuICAgICAgICAgICAgYm9keUEuYW5nbGUgLT0gdG9ycXVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlCICYmICFib2R5Qi5pc1N0YXRpYykge1xuICAgICAgICAgICAgc2hhcmUgPSBib2R5Qi5pbnZlcnNlTWFzcyAvIG1hc3NUb3RhbDtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBhcHBsaWVkIGltcHVsc2VzIGZvciBwb3N0IHNvbHZpbmdcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLnggKz0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUIuY29uc3RyYWludEltcHVsc2UueSArPSBmb3JjZS55ICogc2hhcmU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGFwcGx5IGZvcmNlc1xuICAgICAgICAgICAgYm9keUIucG9zaXRpb24ueCArPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5Qi5wb3NpdGlvbi55ICs9IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZGFtcGluZ1xuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQuZGFtcGluZykge1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi54ICs9IGNvbnN0cmFpbnQuZGFtcGluZyAqIG5vcm1hbC54ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvblByZXYueSArPSBjb25zdHJhaW50LmRhbXBpbmcgKiBub3JtYWwueSAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHRvcnF1ZVxuICAgICAgICAgICAgdG9ycXVlID0gKFZlY3Rvci5jcm9zcyhwb2ludEIsIGZvcmNlKSAvIHJlc2lzdGFuY2VUb3RhbCkgKiBDb25zdHJhaW50Ll90b3JxdWVEYW1wZW4gKiBib2R5Qi5pbnZlcnNlSW5lcnRpYSAqICgxIC0gY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzKTtcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLmFuZ2xlICs9IHRvcnF1ZTtcbiAgICAgICAgICAgIGJvZHlCLmFuZ2xlICs9IHRvcnF1ZTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGJvZHkgdXBkYXRlcyByZXF1aXJlZCBhZnRlciBzb2x2aW5nIGNvbnN0cmFpbnRzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBwb3N0U29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wb3N0U29sdmVBbGwgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGltcHVsc2UgPSBib2R5LmNvbnN0cmFpbnRJbXB1bHNlO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCAoaW1wdWxzZS54ID09PSAwICYmIGltcHVsc2UueSA9PT0gMCAmJiBpbXB1bHNlLmFuZ2xlID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZ2VvbWV0cnkgYW5kIHJlc2V0XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIGltcHVsc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBpbXB1bHNlLng7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBpbXB1bHNlLnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGltcHVsc2UuYW5nbGUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGltcHVsc2UuYW5nbGUsIGJvZHkucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBBeGVzLnJvdGF0ZShwYXJ0LmF4ZXMsIGltcHVsc2UuYW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZlY3Rvci5yb3RhdGVBYm91dChwYXJ0LnBvc2l0aW9uLCBpbXB1bHNlLmFuZ2xlLCBib2R5LnBvc2l0aW9uLCBwYXJ0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkYW1wZW4gdGhlIGNhY2hlZCBpbXB1bHNlIGZvciB3YXJtaW5nIG5leHQgc3RlcFxuICAgICAgICAgICAgaW1wdWxzZS5hbmdsZSAqPSBDb25zdHJhaW50Ll93YXJtaW5nO1xuICAgICAgICAgICAgaW1wdWxzZS54ICo9IENvbnN0cmFpbnQuX3dhcm1pbmc7XG4gICAgICAgICAgICBpbXB1bHNlLnkgKj0gQ29uc3RyYWludC5fd2FybWluZztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdW5pcXVlbHkgaWRlbnRpZnlpbmcgbnVtYmVyIGdlbmVyYXRlZCBpbiBgQ29tcG9zaXRlLmNyZWF0ZWAgYnkgYENvbW1vbi5uZXh0SWRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJjb25zdHJhaW50XCJcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFyYml0cmFyeSBgU3RyaW5nYCBuYW1lIHRvIGhlbHAgdGhlIHVzZXIgaWRlbnRpZnkgYW5kIG1hbmFnZSBib2RpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGFiZWxcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcIkNvbnN0cmFpbnRcIlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBkZWZpbmVzIHRoZSByZW5kZXJpbmcgcHJvcGVydGllcyB0byBiZSBjb25zdW1lZCBieSB0aGUgbW9kdWxlIGBNYXR0ZXIuUmVuZGVyYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyBpZiB0aGUgY29uc3RyYWludCBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnZpc2libGVcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGxpbmUgd2lkdGggdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBjb25zdHJhaW50IG91dGxpbmUuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgbm8gb3V0bGluZSB3aWxsIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5saW5lV2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgc3Ryb2tlIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgY29uc3RyYWludCBvdXRsaW5lLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3Ryb2tlU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBhIHJhbmRvbSBjb2xvdXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBjb25zdHJhaW50IHJlbmRlcmluZyB0eXBlLiBcbiAgICAgKiBUaGUgcG9zc2libGUgdmFsdWVzIGFyZSAnbGluZScsICdwaW4nLCAnc3ByaW5nJy5cbiAgICAgKiBBbiBhcHByb3ByaWF0ZSByZW5kZXIgdHlwZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY2hvc2VuIHVubGVzcyBvbmUgaXMgZ2l2ZW4gaW4gb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIudHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0ICdsaW5lJ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm9vbGVhbmAgdGhhdCBkZWZpbmVzIGlmIHRoZSBjb25zdHJhaW50J3MgYW5jaG9yIHBvaW50cyBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmFuY2hvcnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IHBvc3NpYmxlIGBCb2R5YCB0aGF0IHRoaXMgY29uc3RyYWludCBpcyBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5QVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2Vjb25kIHBvc3NpYmxlIGBCb2R5YCB0aGF0IHRoaXMgY29uc3RyYWludCBpcyBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5QlxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBvZmZzZXQgb2YgdGhlIGNvbnN0cmFpbnQgZnJvbSBjZW50ZXIgb2YgdGhlIGBjb25zdHJhaW50LmJvZHlBYCBpZiBkZWZpbmVkLCBvdGhlcndpc2UgYSB3b3JsZC1zcGFjZSBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwb2ludEFcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgb2Zmc2V0IG9mIHRoZSBjb25zdHJhaW50IGZyb20gY2VudGVyIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QmAgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGEgd29ybGQtc3BhY2UgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9pbnRCXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHN0aWZmbmVzcyBvZiB0aGUgY29uc3RyYWludCwgaS5lLiB0aGUgcmF0ZSBhdCB3aGljaCBpdCByZXR1cm5zIHRvIGl0cyByZXN0aW5nIGBjb25zdHJhaW50Lmxlbmd0aGAuXG4gICAgICogQSB2YWx1ZSBvZiBgMWAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgc2hvdWxkIGJlIHZlcnkgc3RpZmYuXG4gICAgICogQSB2YWx1ZSBvZiBgMC4yYCBtZWFucyB0aGUgY29uc3RyYWludCBhY3RzIGxpa2UgYSBzb2Z0IHNwcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzdGlmZm5lc3NcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBkYW1waW5nIG9mIHRoZSBjb25zdHJhaW50LCBcbiAgICAgKiBpLmUuIHRoZSBhbW91bnQgb2YgcmVzaXN0YW5jZSBhcHBsaWVkIHRvIGVhY2ggYm9keSBiYXNlZCBvbiB0aGVpciB2ZWxvY2l0aWVzIHRvIGxpbWl0IHRoZSBhbW91bnQgb2Ygb3NjaWxsYXRpb24uXG4gICAgICogRGFtcGluZyB3aWxsIG9ubHkgYmUgYXBwYXJlbnQgd2hlbiB0aGUgY29uc3RyYWludCBhbHNvIGhhcyBhIHZlcnkgbG93IGBzdGlmZm5lc3NgLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMWAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgd2lsbCBhcHBseSBoZWF2eSBkYW1waW5nLCByZXN1bHRpbmcgaW4gbGl0dGxlIHRvIG5vIG9zY2lsbGF0aW9uLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBjb25zdHJhaW50IHdpbGwgYXBwbHkgbm8gZGFtcGluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlc3RpbmcgbGVuZ3RoIG9mIHRoZSBjb25zdHJhaW50LiBcbiAgICAgKiBJdCBpcyBjYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgaW4gYENvbnN0cmFpbnQuY3JlYXRlYCBmcm9tIGluaXRpYWwgcG9zaXRpb25zIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QWAgYW5kIGBjb25zdHJhaW50LmJvZHlCYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsZW5ndGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG59KSgpO1xuXG59LHtcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuLi9jb3JlL1NsZWVwaW5nXCI6MjIsXCIuLi9nZW9tZXRyeS9BeGVzXCI6MjUsXCIuLi9nZW9tZXRyeS9Cb3VuZHNcIjoyNixcIi4uL2dlb21ldHJ5L1ZlY3RvclwiOjI4LFwiLi4vZ2VvbWV0cnkvVmVydGljZXNcIjoyOX1dLDEzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5Nb3VzZUNvbnN0cmFpbnRgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBtb3VzZSBjb25zdHJhaW50cy5cbiogTW91c2UgY29uc3RyYWludHMgYXJlIHVzZWQgZm9yIGFsbG93aW5nIHVzZXIgaW50ZXJhY3Rpb24sIHByb3ZpZGluZyB0aGUgYWJpbGl0eSB0byBtb3ZlIGJvZGllcyB2aWEgdGhlIG1vdXNlIG9yIHRvdWNoLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgTW91c2VDb25zdHJhaW50XG4qL1xuXG52YXIgTW91c2VDb25zdHJhaW50ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VDb25zdHJhaW50O1xuXG52YXIgVmVydGljZXMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZXJ0aWNlcycpO1xudmFyIFNsZWVwaW5nID0gX2RlcmVxXygnLi4vY29yZS9TbGVlcGluZycpO1xudmFyIE1vdXNlID0gX2RlcmVxXygnLi4vY29yZS9Nb3VzZScpO1xudmFyIEV2ZW50cyA9IF9kZXJlcV8oJy4uL2NvcmUvRXZlbnRzJyk7XG52YXIgRGV0ZWN0b3IgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vRGV0ZWN0b3InKTtcbnZhciBDb25zdHJhaW50ID0gX2RlcmVxXygnLi9Db25zdHJhaW50Jyk7XG52YXIgQ29tcG9zaXRlID0gX2RlcmVxXygnLi4vYm9keS9Db21wb3NpdGUnKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xudmFyIEJvdW5kcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0JvdW5kcycpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IG1vdXNlIGNvbnN0cmFpbnQuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7TW91c2VDb25zdHJhaW50fSBBIG5ldyBNb3VzZUNvbnN0cmFpbnRcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlID0gZnVuY3Rpb24oZW5naW5lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBtb3VzZSA9IChlbmdpbmUgPyBlbmdpbmUubW91c2UgOiBudWxsKSB8fCAob3B0aW9ucyA/IG9wdGlvbnMubW91c2UgOiBudWxsKTtcblxuICAgICAgICBpZiAoIW1vdXNlKSB7XG4gICAgICAgICAgICBpZiAoZW5naW5lICYmIGVuZ2luZS5yZW5kZXIgJiYgZW5naW5lLnJlbmRlci5jYW52YXMpIHtcbiAgICAgICAgICAgICAgICBtb3VzZSA9IE1vdXNlLmNyZWF0ZShlbmdpbmUucmVuZGVyLmNhbnZhcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbW91c2UgPSBNb3VzZS5jcmVhdGUob3B0aW9ucy5lbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW91c2UgPSBNb3VzZS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignTW91c2VDb25zdHJhaW50LmNyZWF0ZTogb3B0aW9ucy5tb3VzZSB3YXMgdW5kZWZpbmVkLCBvcHRpb25zLmVsZW1lbnQgd2FzIHVuZGVmaW5lZCwgbWF5IG5vdCBmdW5jdGlvbiBhcyBleHBlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBDb25zdHJhaW50LmNyZWF0ZSh7IFxuICAgICAgICAgICAgbGFiZWw6ICdNb3VzZSBDb25zdHJhaW50JyxcbiAgICAgICAgICAgIHBvaW50QTogbW91c2UucG9zaXRpb24sXG4gICAgICAgICAgICBwb2ludEI6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgbGVuZ3RoOiAwLjAxLCBcbiAgICAgICAgICAgIHN0aWZmbmVzczogMC4xLFxuICAgICAgICAgICAgYW5ndWxhclN0aWZmbmVzczogMSxcbiAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgIHN0cm9rZVN0eWxlOiAnIzkwRUU5MCcsXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3VzZUNvbnN0cmFpbnQnLFxuICAgICAgICAgICAgbW91c2U6IG1vdXNlLFxuICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgICAgIGJvZHk6IG51bGwsXG4gICAgICAgICAgICBjb25zdHJhaW50OiBjb25zdHJhaW50LFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IDB4MDAwMSxcbiAgICAgICAgICAgICAgICBtYXNrOiAweEZGRkZGRkZGLFxuICAgICAgICAgICAgICAgIGdyb3VwOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG1vdXNlQ29uc3RyYWludCA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIEV2ZW50cy5vbihlbmdpbmUsICdiZWZvcmVVcGRhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGVuZ2luZS53b3JsZCk7XG4gICAgICAgICAgICBNb3VzZUNvbnN0cmFpbnQudXBkYXRlKG1vdXNlQ29uc3RyYWludCwgYWxsQm9kaWVzKTtcbiAgICAgICAgICAgIE1vdXNlQ29uc3RyYWludC5fdHJpZ2dlckV2ZW50cyhtb3VzZUNvbnN0cmFpbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbW91c2VDb25zdHJhaW50O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBnaXZlbiBtb3VzZSBjb25zdHJhaW50LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge01vdXNlQ29uc3RyYWludH0gbW91c2VDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIE1vdXNlQ29uc3RyYWludC51cGRhdGUgPSBmdW5jdGlvbihtb3VzZUNvbnN0cmFpbnQsIGJvZGllcykge1xuICAgICAgICB2YXIgbW91c2UgPSBtb3VzZUNvbnN0cmFpbnQubW91c2UsXG4gICAgICAgICAgICBjb25zdHJhaW50ID0gbW91c2VDb25zdHJhaW50LmNvbnN0cmFpbnQsXG4gICAgICAgICAgICBib2R5ID0gbW91c2VDb25zdHJhaW50LmJvZHk7XG5cbiAgICAgICAgaWYgKG1vdXNlLmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKCFjb25zdHJhaW50LmJvZHlCKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhib2R5LmJvdW5kcywgbW91c2UucG9zaXRpb24pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIERldGVjdG9yLmNhbkNvbGxpZGUoYm9keS5jb2xsaXNpb25GaWx0ZXIsIG1vdXNlQ29uc3RyYWludC5jb2xsaXNpb25GaWx0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gYm9keS5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBib2R5LnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhwYXJ0LnZlcnRpY2VzLCBtb3VzZS5wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEEgPSBtb3VzZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludC5ib2R5QiA9IG1vdXNlQ29uc3RyYWludC5ib2R5ID0gYm9keTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEIgPSB7IHg6IG1vdXNlLnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uLngsIHk6IG1vdXNlLnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uLnkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludC5hbmdsZUIgPSBib2R5LmFuZ2xlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ3N0YXJ0ZHJhZycsIHsgbW91c2U6IG1vdXNlLCBib2R5OiBib2R5IH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGNvbnN0cmFpbnQuYm9keUIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QSA9IG1vdXNlLnBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3RyYWludC5ib2R5QiA9IG1vdXNlQ29uc3RyYWludC5ib2R5ID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGJvZHkpXG4gICAgICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnZW5kZHJhZycsIHsgbW91c2U6IG1vdXNlLCBib2R5OiBib2R5IH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIG1vdXNlIGNvbnN0cmFpbnQgZXZlbnRzLlxuICAgICAqIEBtZXRob2QgX3RyaWdnZXJFdmVudHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlQ29uc3RyYWludFxuICAgICAqL1xuICAgIE1vdXNlQ29uc3RyYWludC5fdHJpZ2dlckV2ZW50cyA9IGZ1bmN0aW9uKG1vdXNlQ29uc3RyYWludCkge1xuICAgICAgICB2YXIgbW91c2UgPSBtb3VzZUNvbnN0cmFpbnQubW91c2UsXG4gICAgICAgICAgICBtb3VzZUV2ZW50cyA9IG1vdXNlLnNvdXJjZUV2ZW50cztcblxuICAgICAgICBpZiAobW91c2VFdmVudHMubW91c2Vtb3ZlKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnbW91c2Vtb3ZlJywgeyBtb3VzZTogbW91c2UgfSk7XG5cbiAgICAgICAgaWYgKG1vdXNlRXZlbnRzLm1vdXNlZG93bilcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNlZG93bicsIHsgbW91c2U6IG1vdXNlIH0pO1xuXG4gICAgICAgIGlmIChtb3VzZUV2ZW50cy5tb3VzZXVwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIobW91c2VDb25zdHJhaW50LCAnbW91c2V1cCcsIHsgbW91c2U6IG1vdXNlIH0pO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBtb3VzZSBzdGF0ZSByZWFkeSBmb3IgdGhlIG5leHQgc3RlcFxuICAgICAgICBNb3VzZS5jbGVhclNvdXJjZUV2ZW50cyhtb3VzZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIG1vdXNlIGhhcyBtb3ZlZCAob3IgYSB0b3VjaCBtb3ZlcykgZHVyaW5nIHRoZSBsYXN0IHN0ZXBcbiAgICAqXG4gICAgKiBAZXZlbnQgbW91c2Vtb3ZlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBpcyBkb3duIChvciBhIHRvdWNoIGhhcyBzdGFydGVkKSBkdXJpbmcgdGhlIGxhc3Qgc3RlcFxuICAgICpcbiAgICAqIEBldmVudCBtb3VzZWRvd25cbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIG1vdXNlIGlzIHVwIChvciBhIHRvdWNoIGhhcyBlbmRlZCkgZHVyaW5nIHRoZSBsYXN0IHN0ZXBcbiAgICAqXG4gICAgKiBAZXZlbnQgbW91c2V1cFxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgYSBib2R5XG4gICAgKlxuICAgICogQGV2ZW50IHN0YXJ0ZHJhZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge2JvZHl9IGV2ZW50LmJvZHkgVGhlIGJvZHkgYmVpbmcgZHJhZ2dlZFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgZW5kcyBkcmFnZ2luZyBhIGJvZHlcbiAgICAqXG4gICAgKiBAZXZlbnQgZW5kZHJhZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge2JvZHl9IGV2ZW50LmJvZHkgVGhlIGJvZHkgdGhhdCBoYXMgc3RvcHBlZCBiZWluZyBkcmFnZ2VkXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgU3RyaW5nYCBkZW5vdGluZyB0aGUgdHlwZSBvZiBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IFwiY29uc3RyYWludFwiXG4gICAgICogQHJlYWRPbmx5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYE1vdXNlYCBpbnN0YW5jZSBpbiB1c2UuIElmIG5vdCBzdXBwbGllZCBpbiBgTW91c2VDb25zdHJhaW50LmNyZWF0ZWAsIG9uZSB3aWxsIGJlIGNyZWF0ZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbW91c2VcbiAgICAgKiBAdHlwZSBtb3VzZVxuICAgICAqIEBkZWZhdWx0IG1vdXNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYEJvZHlgIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIG1vdmVkIGJ5IHRoZSB1c2VyLCBvciBgbnVsbGAgaWYgbm8gYm9keS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5XG4gICAgICogQHR5cGUgYm9keVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBgQ29uc3RyYWludGAgb2JqZWN0IHRoYXQgaXMgdXNlZCB0byBtb3ZlIHRoZSBib2R5IGR1cmluZyBpbnRlcmFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb25zdHJhaW50XG4gICAgICogQHR5cGUgY29uc3RyYWludFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBzcGVjaWZpZXMgdGhlIGNvbGxpc2lvbiBmaWx0ZXIgcHJvcGVydGllcy5cbiAgICAgKiBUaGUgY29sbGlzaW9uIGZpbHRlciBhbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIHdoaWNoIHR5cGVzIG9mIGJvZHkgdGhpcyBtb3VzZSBjb25zdHJhaW50IGNhbiBpbnRlcmFjdCB3aXRoLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlclxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG59KSgpO1xuXG59LHtcIi4uL2JvZHkvQ29tcG9zaXRlXCI6MixcIi4uL2NvbGxpc2lvbi9EZXRlY3RvclwiOjUsXCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi4vY29yZS9FdmVudHNcIjoxNixcIi4uL2NvcmUvTW91c2VcIjoxOSxcIi4uL2NvcmUvU2xlZXBpbmdcIjoyMixcIi4uL2dlb21ldHJ5L0JvdW5kc1wiOjI2LFwiLi4vZ2VvbWV0cnkvVmVydGljZXNcIjoyOSxcIi4vQ29uc3RyYWludFwiOjEyfV0sMTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbW1vbmAgbW9kdWxlIGNvbnRhaW5zIHV0aWxpdHkgZnVuY3Rpb25zIHRoYXQgYXJlIGNvbW1vbiB0byBhbGwgbW9kdWxlcy5cbipcbiogQGNsYXNzIENvbW1vblxuKi9cblxudmFyIENvbW1vbiA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbjtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgQ29tbW9uLl9uZXh0SWQgPSAwO1xuICAgIENvbW1vbi5fc2VlZCA9IDA7XG4gICAgQ29tbW9uLl9ub3dTdGFydFRpbWUgPSArKG5ldyBEYXRlKCkpO1xuXG4gICAgLyoqXG4gICAgICogRXh0ZW5kcyB0aGUgb2JqZWN0IGluIHRoZSBmaXJzdCBhcmd1bWVudCB1c2luZyB0aGUgb2JqZWN0IGluIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gICAgICogQG1ldGhvZCBleHRlbmRcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkZWVwXG4gICAgICogQHJldHVybiB7fSBvYmogZXh0ZW5kZWRcbiAgICAgKi9cbiAgICBDb21tb24uZXh0ZW5kID0gZnVuY3Rpb24ob2JqLCBkZWVwKSB7XG4gICAgICAgIHZhciBhcmdzU3RhcnQsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgZGVlcENsb25lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGVlcCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhcmdzU3RhcnQgPSAyO1xuICAgICAgICAgICAgZGVlcENsb25lID0gZGVlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZ3NTdGFydCA9IDE7XG4gICAgICAgICAgICBkZWVwQ2xvbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGFyZ3NTdGFydDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWVwQ2xvbmUgJiYgc291cmNlW3Byb3BdICYmIHNvdXJjZVtwcm9wXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9ialtwcm9wXSB8fCBvYmpbcHJvcF0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IG9ialtwcm9wXSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tb24uZXh0ZW5kKG9ialtwcm9wXSwgZGVlcENsb25lLCBzb3VyY2VbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY2xvbmUgb2YgdGhlIG9iamVjdCwgaWYgZGVlcCBpcyB0cnVlIHJlZmVyZW5jZXMgd2lsbCBhbHNvIGJlIGNsb25lZC5cbiAgICAgKiBAbWV0aG9kIGNsb25lXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEBwYXJhbSB7Ym9vbH0gZGVlcFxuICAgICAqIEByZXR1cm4ge30gb2JqIGNsb25lZFxuICAgICAqL1xuICAgIENvbW1vbi5jbG9uZSA9IGZ1bmN0aW9uKG9iaiwgZGVlcCkge1xuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZCh7fSwgZGVlcCwgb2JqKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBrZXlzIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgICAqIEBtZXRob2Qga2V5c1xuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0ga2V5c1xuICAgICAqL1xuICAgIENvbW1vbi5rZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cylcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuXG4gICAgICAgIC8vIGF2b2lkIGhhc093blByb3BlcnR5IGZvciBwZXJmb3JtYW5jZVxuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHZhbHVlcyBmb3IgdGhlIGdpdmVuIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gQXJyYXkgb2YgdGhlIG9iamVjdHMgcHJvcGVydHkgdmFsdWVzXG4gICAgICovXG4gICAgQ29tbW9uLnZhbHVlcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9ialtrZXlzW2ldXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBhdm9pZCBoYXNPd25Qcm9wZXJ0eSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iailcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKG9ialtrZXldKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHZhbHVlIGZyb20gYGJhc2VgIHJlbGF0aXZlIHRvIHRoZSBgcGF0aGAgc3RyaW5nLlxuICAgICAqIEBtZXRob2QgZ2V0XG4gICAgICogQHBhcmFtIHt9IG9iaiBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWAsIGUuZy4gJ0Zvby5CYXIuYmF6J1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYmVnaW5dIFBhdGggc2xpY2UgYmVnaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2VuZF0gUGF0aCBzbGljZSBlbmRcbiAgICAgKiBAcmV0dXJuIHt9IFRoZSBvYmplY3QgYXQgdGhlIGdpdmVuIHBhdGhcbiAgICAgKi9cbiAgICBDb21tb24uZ2V0ID0gZnVuY3Rpb24ob2JqLCBwYXRoLCBiZWdpbiwgZW5kKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnNwbGl0KCcuJykuc2xpY2UoYmVnaW4sIGVuZCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBvYmogPSBvYmpbcGF0aFtpXV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgdmFsdWUgb24gYGJhc2VgIHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBgcGF0aGAgc3RyaW5nLlxuICAgICAqIEBtZXRob2Qgc2V0XG4gICAgICogQHBhcmFtIHt9IG9iaiBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWAsIGUuZy4gJ0Zvby5CYXIuYmF6J1xuICAgICAqIEBwYXJhbSB7fSB2YWwgVGhlIHZhbHVlIHRvIHNldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYmVnaW5dIFBhdGggc2xpY2UgYmVnaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2VuZF0gUGF0aCBzbGljZSBlbmRcbiAgICAgKiBAcmV0dXJuIHt9IFBhc3MgdGhyb3VnaCBgdmFsYCBmb3IgY2hhaW5pbmdcbiAgICAgKi9cbiAgICBDb21tb24uc2V0ID0gZnVuY3Rpb24ob2JqLCBwYXRoLCB2YWwsIGJlZ2luLCBlbmQpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gcGF0aC5zcGxpdCgnLicpLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgICAgICBDb21tb24uZ2V0KG9iaiwgcGF0aCwgMCwgLTEpW3BhcnRzW3BhcnRzLmxlbmd0aCAtIDFdXSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2h1ZmZsZXMgdGhlIGdpdmVuIGFycmF5IGluLXBsYWNlLlxuICAgICAqIFRoZSBmdW5jdGlvbiB1c2VzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3IuXG4gICAgICogQG1ldGhvZCBzaHVmZmxlXG4gICAgICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gYXJyYXkgc2h1ZmZsZWQgcmFuZG9tbHlcbiAgICAgKi9cbiAgICBDb21tb24uc2h1ZmZsZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoQ29tbW9uLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJhbmRvbWx5IGNob29zZXMgYSB2YWx1ZSBmcm9tIGEgbGlzdCB3aXRoIGVxdWFsIHByb2JhYmlsaXR5LlxuICAgICAqIFRoZSBmdW5jdGlvbiB1c2VzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3IuXG4gICAgICogQG1ldGhvZCBjaG9vc2VcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjaG9pY2VzXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBBIHJhbmRvbSBjaG9pY2Ugb2JqZWN0IGZyb20gdGhlIGFycmF5XG4gICAgICovXG4gICAgQ29tbW9uLmNob29zZSA9IGZ1bmN0aW9uKGNob2ljZXMpIHtcbiAgICAgICAgcmV0dXJuIGNob2ljZXNbTWF0aC5mbG9vcihDb21tb24ucmFuZG9tKCkgKiBjaG9pY2VzLmxlbmd0aCldO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIEhUTUxFbGVtZW50LCBvdGhlcndpc2UgZmFsc2UuXG4gICAgICogQG1ldGhvZCBpc0VsZW1lbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgSFRNTEVsZW1lbnQsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc0VsZW1lbnQgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhIShvYmogJiYgb2JqLm5vZGVUeXBlICYmIG9iai5ub2RlTmFtZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGFycmF5LlxuICAgICAqIEBtZXRob2QgaXNBcnJheVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gYXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc0FycmF5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvbi5cbiAgICAgKiBAbWV0aG9kIGlzRnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgcGxhaW4gb2JqZWN0LlxuICAgICAqIEBtZXRob2QgaXNQbGFpbk9iamVjdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBwbGFpbiBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXG4gICAgICogQG1ldGhvZCBpc1N0cmluZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIENvbW1vbi5pc1N0cmluZyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGNsYW1wZWQgYmV0d2VlbiBhIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWUuXG4gICAgICogQG1ldGhvZCBjbGFtcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgY2xhbXBlZCBiZXR3ZWVuIG1pbiBhbmQgbWF4IGluY2x1c2l2ZVxuICAgICAqL1xuICAgIENvbW1vbi5jbGFtcCA9IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuICAgICAgICBpZiAodmFsdWUgPCBtaW4pXG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICBpZiAodmFsdWUgPiBtYXgpXG4gICAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzaWduIG9mIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICAgKiBAbWV0aG9kIHNpZ25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0xIGlmIG5lZ2F0aXZlLCArMSBpZiAwIG9yIHBvc2l0aXZlXG4gICAgICovXG4gICAgQ29tbW9uLnNpZ24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPCAwID8gLTEgOiAxO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCB0aW1lc3RhbXAgc2luY2UgdGhlIHRpbWUgb3JpZ2luIChlLmcuIGZyb20gcGFnZSBsb2FkKS5cbiAgICAgKiBUaGUgcmVzdWx0IHdpbGwgYmUgaGlnaC1yZXNvbHV0aW9uIGluY2x1ZGluZyBkZWNpbWFsIHBsYWNlcyBpZiBhdmFpbGFibGUuXG4gICAgICogQG1ldGhvZCBub3dcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIENvbW1vbi5ub3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGVyZm9ybWFuY2Uud2Via2l0Tm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS53ZWJraXROb3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAobmV3IERhdGUoKSkgLSBDb21tb24uX25vd1N0YXJ0VGltZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByYW5kb20gdmFsdWUgYmV0d2VlbiBhIG1pbmltdW0gYW5kIGEgbWF4aW11bSB2YWx1ZSBpbmNsdXNpdmUuXG4gICAgICogVGhlIGZ1bmN0aW9uIHVzZXMgYSBzZWVkZWQgcmFuZG9tIGdlbmVyYXRvci5cbiAgICAgKiBAbWV0aG9kIHJhbmRvbVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gICAgICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heCBpbmNsdXNpdmVcbiAgICAgKi9cbiAgICBDb21tb24ucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gKHR5cGVvZiBtaW4gIT09IFwidW5kZWZpbmVkXCIpID8gbWluIDogMDtcbiAgICAgICAgbWF4ID0gKHR5cGVvZiBtYXggIT09IFwidW5kZWZpbmVkXCIpID8gbWF4IDogMTtcbiAgICAgICAgcmV0dXJuIG1pbiArIF9zZWVkZWRSYW5kb20oKSAqIChtYXggLSBtaW4pO1xuICAgIH07XG5cbiAgICB2YXIgX3NlZWRlZFJhbmRvbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5lYXJfY29uZ3J1ZW50aWFsX2dlbmVyYXRvclxuICAgICAgICBDb21tb24uX3NlZWQgPSAoQ29tbW9uLl9zZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5fc2VlZCAvIDIzMzI4MDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBDU1MgaGV4IGNvbG91ciBzdHJpbmcgaW50byBhbiBpbnRlZ2VyLlxuICAgICAqIEBtZXRob2QgY29sb3JUb051bWJlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvclN0cmluZ1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIENTUyBoZXggc3RyaW5nXG4gICAgICovXG4gICAgQ29tbW9uLmNvbG9yVG9OdW1iZXIgPSBmdW5jdGlvbihjb2xvclN0cmluZykge1xuICAgICAgICBjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnJlcGxhY2UoJyMnLCcnKTtcblxuICAgICAgICBpZiAoY29sb3JTdHJpbmcubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuY2hhckF0KDApICsgY29sb3JTdHJpbmcuY2hhckF0KDApXG4gICAgICAgICAgICAgICAgICAgICAgICArIGNvbG9yU3RyaW5nLmNoYXJBdCgxKSArIGNvbG9yU3RyaW5nLmNoYXJBdCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBjb2xvclN0cmluZy5jaGFyQXQoMikgKyBjb2xvclN0cmluZy5jaGFyQXQoMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnNvbGUgbG9nZ2luZyBsZXZlbCB0byB1c2UsIHdoZXJlIGVhY2ggbGV2ZWwgaW5jbHVkZXMgYWxsIGxldmVscyBhYm92ZSBhbmQgZXhjbHVkZXMgdGhlIGxldmVscyBiZWxvdy5cbiAgICAgKiBUaGUgZGVmYXVsdCBsZXZlbCBpcyAnZGVidWcnIHdoaWNoIHNob3dzIGFsbCBjb25zb2xlIG1lc3NhZ2VzLiAgXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSBsZXZlbCB2YWx1ZXMgYXJlOlxuICAgICAqIC0gMCA9IE5vbmVcbiAgICAgKiAtIDEgPSBEZWJ1Z1xuICAgICAqIC0gMiA9IEluZm9cbiAgICAgKiAtIDMgPSBXYXJuXG4gICAgICogLSA0ID0gRXJyb3JcbiAgICAgKiBAcHJvcGVydHkgQ29tbW9uLmxvZ0xldmVsXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgQ29tbW9uLmxvZ0xldmVsID0gMTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgYGNvbnNvbGUubG9nYCBtZXNzYWdlIG9ubHkgaWYgdGhlIGN1cnJlbnQgYENvbW1vbi5sb2dMZXZlbGAgYWxsb3dzIGl0LlxuICAgICAqIFRoZSBtZXNzYWdlIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCAnbWF0dGVyLWpzJyB0byBtYWtlIGl0IGVhc2lseSBpZGVudGlmaWFibGUuXG4gICAgICogQG1ldGhvZCBsb2dcbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLmxvZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uc29sZSAmJiBDb21tb24ubG9nTGV2ZWwgPiAwICYmIENvbW1vbi5sb2dMZXZlbCA8PSAzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ21hdHRlci1qczonXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgYGNvbnNvbGUuaW5mb2AgbWVzc2FnZSBvbmx5IGlmIHRoZSBjdXJyZW50IGBDb21tb24ubG9nTGV2ZWxgIGFsbG93cyBpdC5cbiAgICAgKiBUaGUgbWVzc2FnZSB3aWxsIGJlIHByZWZpeGVkIHdpdGggJ21hdHRlci1qcycgdG8gbWFrZSBpdCBlYXNpbHkgaWRlbnRpZmlhYmxlLlxuICAgICAqIEBtZXRob2QgaW5mb1xuICAgICAqIEBwYXJhbSAuLi5vYmpzIHt9IFRoZSBvYmplY3RzIHRvIGxvZy5cbiAgICAgKi9cbiAgICBDb21tb24uaW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY29uc29sZSAmJiBDb21tb24ubG9nTGV2ZWwgPiAwICYmIENvbW1vbi5sb2dMZXZlbCA8PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSwgWydtYXR0ZXItanM6J10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGBjb25zb2xlLndhcm5gIG1lc3NhZ2Ugb25seSBpZiB0aGUgY3VycmVudCBgQ29tbW9uLmxvZ0xldmVsYCBhbGxvd3MgaXQuXG4gICAgICogVGhlIG1lc3NhZ2Ugd2lsbCBiZSBwcmVmaXhlZCB3aXRoICdtYXR0ZXItanMnIHRvIG1ha2UgaXQgZWFzaWx5IGlkZW50aWZpYWJsZS5cbiAgICAgKiBAbWV0aG9kIHdhcm5cbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLndhcm4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgQ29tbW9uLmxvZ0xldmVsID4gMCAmJiBDb21tb24ubG9nTGV2ZWwgPD0gMykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIFsnbWF0dGVyLWpzOiddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgc2VxdWVudGlhbCBJRC5cbiAgICAgKiBAbWV0aG9kIG5leHRJZFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIHNlcXVlbnRpYWwgSURcbiAgICAgKi9cbiAgICBDb21tb24ubmV4dElkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uX25leHRJZCsrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGNyb3NzIGJyb3dzZXIgY29tcGF0aWJsZSBpbmRleE9mIGltcGxlbWVudGF0aW9uLlxuICAgICAqIEBtZXRob2QgaW5kZXhPZlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGhheXN0YWNrXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5lZWRsZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIG5lZWRsZSBpbiBoYXlzdGFjaywgb3RoZXJ3aXNlIC0xLlxuICAgICAqL1xuICAgIENvbW1vbi5pbmRleE9mID0gZnVuY3Rpb24oaGF5c3RhY2ssIG5lZWRsZSkge1xuICAgICAgICBpZiAoaGF5c3RhY2suaW5kZXhPZilcbiAgICAgICAgICAgIHJldHVybiBoYXlzdGFjay5pbmRleE9mKG5lZWRsZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXlzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhheXN0YWNrW2ldID09PSBuZWVkbGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEEgY3Jvc3MgYnJvd3NlciBjb21wYXRpYmxlIGFycmF5IG1hcCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAbWV0aG9kIG1hcFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGxpc3RcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jXG4gICAgICogQHJldHVybiB7YXJyYXl9IFZhbHVlcyBmcm9tIGxpc3QgdHJhbnNmb3JtZWQgYnkgZnVuYy5cbiAgICAgKi9cbiAgICBDb21tb24ubWFwID0gZnVuY3Rpb24obGlzdCwgZnVuYykge1xuICAgICAgICBpZiAobGlzdC5tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0Lm1hcChmdW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXBwZWQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG1hcHBlZC5wdXNoKGZ1bmMobGlzdFtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcHBlZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBkaXJlY3RlZCBncmFwaCBhbmQgcmV0dXJucyB0aGUgcGFydGlhbGx5IG9yZGVyZWQgc2V0IG9mIHZlcnRpY2VzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAqIENpcmN1bGFyIGRlcGVuZGVuY2llcyBhcmUgYWxsb3dlZC5cbiAgICAgKiBAbWV0aG9kIHRvcG9sb2dpY2FsU29ydFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBncmFwaFxuICAgICAqIEByZXR1cm4ge2FycmF5fSBQYXJ0aWFsbHkgb3JkZXJlZCBzZXQgb2YgdmVydGljZXMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG4gICAgICovXG4gICAgQ29tbW9uLnRvcG9sb2dpY2FsU29ydCA9IGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tZ2VjaGV2L2phdmFzY3JpcHQtYWxnb3JpdGhtc1xuICAgICAgICAvLyBDb3B5cmlnaHQgKGMpIE1pbmtvIEdlY2hldiAoTUlUIGxpY2Vuc2UpXG4gICAgICAgIC8vIE1vZGlmaWNhdGlvbnM6IHRpZHkgZm9ybWF0dGluZyBhbmQgbmFtaW5nXG4gICAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIHZpc2l0ZWQgPSBbXSxcbiAgICAgICAgICAgIHRlbXAgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBub2RlIGluIGdyYXBoKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2l0ZWRbbm9kZV0gJiYgIXRlbXBbbm9kZV0pIHtcbiAgICAgICAgICAgICAgICBDb21tb24uX3RvcG9sb2dpY2FsU29ydChub2RlLCB2aXNpdGVkLCB0ZW1wLCBncmFwaCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENvbW1vbi5fdG9wb2xvZ2ljYWxTb3J0ID0gZnVuY3Rpb24obm9kZSwgdmlzaXRlZCwgdGVtcCwgZ3JhcGgsIHJlc3VsdCkge1xuICAgICAgICB2YXIgbmVpZ2hib3JzID0gZ3JhcGhbbm9kZV0gfHwgW107XG4gICAgICAgIHRlbXBbbm9kZV0gPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmVpZ2hib3JzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XG5cbiAgICAgICAgICAgIGlmICh0ZW1wW25laWdoYm9yXSkge1xuICAgICAgICAgICAgICAgIC8vIHNraXAgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdmlzaXRlZFtuZWlnaGJvcl0pIHtcbiAgICAgICAgICAgICAgICBDb21tb24uX3RvcG9sb2dpY2FsU29ydChuZWlnaGJvciwgdmlzaXRlZCwgdGVtcCwgZ3JhcGgsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wW25vZGVdID0gZmFsc2U7XG4gICAgICAgIHZpc2l0ZWRbbm9kZV0gPSB0cnVlO1xuXG4gICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBfbl8gZnVuY3Rpb25zIGFzIGFyZ3VtZW50cyBhbmQgcmV0dXJucyBhIG5ldyBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZW0gaW4gb3JkZXIuXG4gICAgICogVGhlIGFyZ3VtZW50cyBhcHBsaWVkIHdoZW4gY2FsbGluZyB0aGUgbmV3IGZ1bmN0aW9uIHdpbGwgYWxzbyBiZSBhcHBsaWVkIHRvIGV2ZXJ5IGZ1bmN0aW9uIHBhc3NlZC5cbiAgICAgKiBUaGUgdmFsdWUgb2YgYHRoaXNgIHJlZmVycyB0byB0aGUgbGFzdCB2YWx1ZSByZXR1cm5lZCBpbiB0aGUgY2hhaW4gdGhhdCB3YXMgbm90IGB1bmRlZmluZWRgLlxuICAgICAqIFRoZXJlZm9yZSBpZiBhIHBhc3NlZCBmdW5jdGlvbiBkb2VzIG5vdCByZXR1cm4gYSB2YWx1ZSwgdGhlIHByZXZpb3VzbHkgcmV0dXJuZWQgdmFsdWUgaXMgbWFpbnRhaW5lZC5cbiAgICAgKiBBZnRlciBhbGwgcGFzc2VkIGZ1bmN0aW9ucyBoYXZlIGJlZW4gY2FsbGVkIHRoZSBuZXcgZnVuY3Rpb24gcmV0dXJucyB0aGUgbGFzdCByZXR1cm5lZCB2YWx1ZSAoaWYgYW55KS5cbiAgICAgKiBJZiBhbnkgb2YgdGhlIHBhc3NlZCBmdW5jdGlvbnMgYXJlIGEgY2hhaW4sIHRoZW4gdGhlIGNoYWluIHdpbGwgYmUgZmxhdHRlbmVkLlxuICAgICAqIEBtZXRob2QgY2hhaW5cbiAgICAgKiBAcGFyYW0gLi4uZnVuY3Mge2Z1bmN0aW9ufSBUaGUgZnVuY3Rpb25zIHRvIGNoYWluLlxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBwYXNzZWQgZnVuY3Rpb25zIGluIG9yZGVyLlxuICAgICAqL1xuICAgIENvbW1vbi5jaGFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZnVuY3MgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGZ1bmMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIGlmIChmdW5jLl9jaGFpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gZmxhdHRlbiBhbHJlYWR5IGNoYWluZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgZnVuY3MucHVzaC5hcHBseShmdW5jcywgZnVuYy5fY2hhaW5lZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZ1bmNzLnB1c2goZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhaW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvZGV2dG9vbHMtZG9jcy9pc3N1ZXMvNTMjaXNzdWVjb21tZW50LTUxOTQxMzU4XG4gICAgICAgICAgICB2YXIgbGFzdFJlc3VsdCxcbiAgICAgICAgICAgICAgICBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZnVuY3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZnVuY3NbaV0uYXBwbHkobGFzdFJlc3VsdCwgYXJncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNoYWluLl9jaGFpbmVkID0gZnVuY3M7XG5cbiAgICAgICAgcmV0dXJuIGNoYWluO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYmVmb3JlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBiYXNlYC5cbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cbiAgICAgKiBAbWV0aG9kIGNoYWluUGF0aEJlZm9yZVxuICAgICAqIEBwYXJhbSB7fSBiYXNlIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGJlZm9yZSB0aGUgb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcbiAgICAgKi9cbiAgICBDb21tb24uY2hhaW5QYXRoQmVmb3JlID0gZnVuY3Rpb24oYmFzZSwgcGF0aCwgZnVuYykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLnNldChiYXNlLCBwYXRoLCBDb21tb24uY2hhaW4oXG4gICAgICAgICAgICBmdW5jLFxuICAgICAgICAgICAgQ29tbW9uLmdldChiYXNlLCBwYXRoKVxuICAgICAgICApKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGFmdGVyIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBiYXNlYC5cbiAgICAgKiBTZWUgYWxzbyBkb2NzIGZvciBgQ29tbW9uLmNoYWluYC5cbiAgICAgKiBAbWV0aG9kIGNoYWluUGF0aEFmdGVyXG4gICAgICogQHBhcmFtIHt9IGJhc2UgVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYWZ0ZXIgdGhlIG9yaWdpbmFsXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBjaGFpbmVkIGZ1bmN0aW9uIHRoYXQgcmVwbGFjZWQgdGhlIG9yaWdpbmFsXG4gICAgICovXG4gICAgQ29tbW9uLmNoYWluUGF0aEFmdGVyID0gZnVuY3Rpb24oYmFzZSwgcGF0aCwgZnVuYykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLnNldChiYXNlLCBwYXRoLCBDb21tb24uY2hhaW4oXG4gICAgICAgICAgICBDb21tb24uZ2V0KGJhc2UsIHBhdGgpLFxuICAgICAgICAgICAgZnVuY1xuICAgICAgICApKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXNlZCB0byByZXF1aXJlIGV4dGVybmFsIGxpYnJhcmllcyBvdXRzaWRlIG9mIHRoZSBidW5kbGUuXG4gICAgICogSXQgZmlyc3QgbG9va3MgZm9yIHRoZSBgZ2xvYmFsTmFtZWAgb24gdGhlIGVudmlyb25tZW50J3MgZ2xvYmFsIG5hbWVzcGFjZS5cbiAgICAgKiBJZiB0aGUgZ2xvYmFsIGlzIG5vdCBmb3VuZCwgaXQgd2lsbCBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIHN0YW5kYXJkIGByZXF1aXJlYCB1c2luZyB0aGUgYG1vZHVsZU5hbWVgLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBfcmVxdWlyZUdsb2JhbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBnbG9iYWxOYW1lIFRoZSBnbG9iYWwgbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlTmFtZSBUaGUgZmFsbGJhY2sgQ29tbW9uSlMgbW9kdWxlIG5hbWVcbiAgICAgKiBAcmV0dXJuIHt9IFRoZSBsb2FkZWQgbW9kdWxlXG4gICAgICovXG4gICAgQ29tbW9uLl9yZXF1aXJlR2xvYmFsID0gZnVuY3Rpb24oZ2xvYmFsTmFtZSwgbW9kdWxlTmFtZSkge1xuICAgICAgICB2YXIgb2JqID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93W2dsb2JhbE5hbWVdIDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxbZ2xvYmFsTmFtZV0gOiBudWxsKTtcbiAgICAgICAgcmV0dXJuIG9iaiB8fCBfZGVyZXFfKG1vZHVsZU5hbWUpO1xuICAgIH07XG59KSgpO1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se31dLDE1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5FbmdpbmVgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGVuZ2luZXMuXG4qIEFuIGVuZ2luZSBpcyBhIGNvbnRyb2xsZXIgdGhhdCBtYW5hZ2VzIHVwZGF0aW5nIHRoZSBzaW11bGF0aW9uIG9mIHRoZSB3b3JsZC5cbiogU2VlIGBNYXR0ZXIuUnVubmVyYCBmb3IgYW4gb3B0aW9uYWwgZ2FtZSBsb29wIHV0aWxpdHkuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBFbmdpbmVcbiovXG5cbnZhciBFbmdpbmUgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbmdpbmU7XG5cbnZhciBXb3JsZCA9IF9kZXJlcV8oJy4uL2JvZHkvV29ybGQnKTtcbnZhciBTbGVlcGluZyA9IF9kZXJlcV8oJy4vU2xlZXBpbmcnKTtcbnZhciBSZXNvbHZlciA9IF9kZXJlcV8oJy4uL2NvbGxpc2lvbi9SZXNvbHZlcicpO1xudmFyIFJlbmRlciA9IF9kZXJlcV8oJy4uL3JlbmRlci9SZW5kZXInKTtcbnZhciBQYWlycyA9IF9kZXJlcV8oJy4uL2NvbGxpc2lvbi9QYWlycycpO1xudmFyIE1ldHJpY3MgPSBfZGVyZXFfKCcuL01ldHJpY3MnKTtcbnZhciBHcmlkID0gX2RlcmVxXygnLi4vY29sbGlzaW9uL0dyaWQnKTtcbnZhciBFdmVudHMgPSBfZGVyZXFfKCcuL0V2ZW50cycpO1xudmFyIENvbXBvc2l0ZSA9IF9kZXJlcV8oJy4uL2JvZHkvQ29tcG9zaXRlJyk7XG52YXIgQ29uc3RyYWludCA9IF9kZXJlcV8oJy4uL2NvbnN0cmFpbnQvQ29uc3RyYWludCcpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4vQ29tbW9uJyk7XG52YXIgQm9keSA9IF9kZXJlcV8oJy4uL2JvZHkvQm9keScpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGVuZ2luZS4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG4gICAgRW5naW5lLmNyZWF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gb3B0aW9ucyBtYXkgYmUgcGFzc2VkIGFzIHRoZSBmaXJzdCAoYW5kIG9ubHkpIGFyZ3VtZW50XG4gICAgICAgIG9wdGlvbnMgPSBDb21tb24uaXNFbGVtZW50KGVsZW1lbnQpID8gb3B0aW9ucyA6IGVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQgPSBDb21tb24uaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IG51bGw7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGlmIChlbGVtZW50IHx8IG9wdGlvbnMucmVuZGVyKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignRW5naW5lLmNyZWF0ZTogZW5naW5lLnJlbmRlciBpcyBkZXByZWNhdGVkIChzZWUgZG9jcyknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uSXRlcmF0aW9uczogNixcbiAgICAgICAgICAgIHZlbG9jaXR5SXRlcmF0aW9uczogNCxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRJdGVyYXRpb25zOiAyLFxuICAgICAgICAgICAgZW5hYmxlU2xlZXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgIHBsdWdpbjoge30sXG4gICAgICAgICAgICB0aW1pbmc6IHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IDAsXG4gICAgICAgICAgICAgICAgdGltZVNjYWxlOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJvYWRwaGFzZToge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IEdyaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZW5naW5lID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gQGRlcHJlY2F0ZWRcbiAgICAgICAgaWYgKGVsZW1lbnQgfHwgZW5naW5lLnJlbmRlcikge1xuICAgICAgICAgICAgdmFyIHJlbmRlckRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogUmVuZGVyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbmdpbmUucmVuZGVyID0gQ29tbW9uLmV4dGVuZChyZW5kZXJEZWZhdWx0cywgZW5naW5lLnJlbmRlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAZGVwcmVjYXRlZFxuICAgICAgICBpZiAoZW5naW5lLnJlbmRlciAmJiBlbmdpbmUucmVuZGVyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIGVuZ2luZS5yZW5kZXIgPSBlbmdpbmUucmVuZGVyLmNvbnRyb2xsZXIuY3JlYXRlKGVuZ2luZS5yZW5kZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGRlcHJlY2F0ZWRcbiAgICAgICAgaWYgKGVuZ2luZS5yZW5kZXIpIHtcbiAgICAgICAgICAgIGVuZ2luZS5yZW5kZXIuZW5naW5lID0gZW5naW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5naW5lLndvcmxkID0gb3B0aW9ucy53b3JsZCB8fCBXb3JsZC5jcmVhdGUoZW5naW5lLndvcmxkKTtcbiAgICAgICAgZW5naW5lLnBhaXJzID0gUGFpcnMuY3JlYXRlKCk7XG4gICAgICAgIGVuZ2luZS5icm9hZHBoYXNlID0gZW5naW5lLmJyb2FkcGhhc2UuY29udHJvbGxlci5jcmVhdGUoZW5naW5lLmJyb2FkcGhhc2UpO1xuICAgICAgICBlbmdpbmUubWV0cmljcyA9IGVuZ2luZS5tZXRyaWNzIHx8IHsgZXh0ZW5kZWQ6IGZhbHNlIH07XG5cblxuICAgICAgICByZXR1cm4gZW5naW5lO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgc2ltdWxhdGlvbiBmb3J3YXJkIGluIHRpbWUgYnkgYGRlbHRhYCBtcy5cbiAgICAgKiBUaGUgYGNvcnJlY3Rpb25gIGFyZ3VtZW50IGlzIGFuIG9wdGlvbmFsIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSB0aW1lIGNvcnJlY3Rpb24gZmFjdG9yIHRvIGFwcGx5IHRvIHRoZSB1cGRhdGUuXG4gICAgICogVGhpcyBjYW4gaGVscCBpbXByb3ZlIHRoZSBhY2N1cmFjeSBvZiB0aGUgc2ltdWxhdGlvbiBpbiBjYXNlcyB3aGVyZSBgZGVsdGFgIGlzIGNoYW5naW5nIGJldHdlZW4gdXBkYXRlcy5cbiAgICAgKiBUaGUgdmFsdWUgb2YgYGNvcnJlY3Rpb25gIGlzIGRlZmluZWQgYXMgYGRlbHRhIC8gbGFzdERlbHRhYCwgaS5lLiB0aGUgcGVyY2VudGFnZSBjaGFuZ2Ugb2YgYGRlbHRhYCBvdmVyIHRoZSBsYXN0IHN0ZXAuXG4gICAgICogVGhlcmVmb3JlIHRoZSB2YWx1ZSBpcyBhbHdheXMgYDFgIChubyBjb3JyZWN0aW9uKSB3aGVuIGBkZWx0YWAgY29uc3RhbnQgKG9yIHdoZW4gbm8gY29ycmVjdGlvbiBpcyBkZXNpcmVkLCB3aGljaCBpcyB0aGUgZGVmYXVsdCkuXG4gICAgICogU2VlIHRoZSBwYXBlciBvbiA8YSBocmVmPVwiaHR0cDovL2xvbmVzb2NrLm5ldC9hcnRpY2xlL3ZlcmxldC5odG1sXCI+VGltZSBDb3JyZWN0ZWQgVmVybGV0PC9hPiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIFRyaWdnZXJzIGBiZWZvcmVVcGRhdGVgIGFuZCBgYWZ0ZXJVcGRhdGVgIGV2ZW50cy5cbiAgICAgKiBUcmlnZ2VycyBgY29sbGlzaW9uU3RhcnRgLCBgY29sbGlzaW9uQWN0aXZlYCBhbmQgYGNvbGxpc2lvbkVuZGAgZXZlbnRzLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGE9MTYuNjY2XVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29ycmVjdGlvbj0xXVxuICAgICAqL1xuICAgIEVuZ2luZS51cGRhdGUgPSBmdW5jdGlvbihlbmdpbmUsIGRlbHRhLCBjb3JyZWN0aW9uKSB7XG4gICAgICAgIGRlbHRhID0gZGVsdGEgfHwgMTAwMCAvIDYwO1xuICAgICAgICBjb3JyZWN0aW9uID0gY29ycmVjdGlvbiB8fCAxO1xuXG4gICAgICAgIHZhciB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIHRpbWluZyA9IGVuZ2luZS50aW1pbmcsXG4gICAgICAgICAgICBicm9hZHBoYXNlID0gZW5naW5lLmJyb2FkcGhhc2UsXG4gICAgICAgICAgICBicm9hZHBoYXNlUGFpcnMgPSBbXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gaW5jcmVtZW50IHRpbWVzdGFtcFxuICAgICAgICB0aW1pbmcudGltZXN0YW1wICs9IGRlbHRhICogdGltaW5nLnRpbWVTY2FsZTtcblxuICAgICAgICAvLyBjcmVhdGUgYW4gZXZlbnQgb2JqZWN0XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltaW5nLnRpbWVzdGFtcFxuICAgICAgICB9O1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2JlZm9yZVVwZGF0ZScsIGV2ZW50KTtcblxuICAgICAgICAvLyBnZXQgbGlzdHMgb2YgYWxsIGJvZGllcyBhbmQgY29uc3RyYWludHMsIG5vIG1hdHRlciB3aGF0IGNvbXBvc2l0ZXMgdGhleSBhcmUgaW5cbiAgICAgICAgdmFyIGFsbEJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMod29ybGQpLFxuICAgICAgICAgICAgYWxsQ29uc3RyYWludHMgPSBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMod29ybGQpO1xuXG5cbiAgICAgICAgLy8gaWYgc2xlZXBpbmcgZW5hYmxlZCwgY2FsbCB0aGUgc2xlZXBpbmcgY29udHJvbGxlclxuICAgICAgICBpZiAoZW5naW5lLmVuYWJsZVNsZWVwaW5nKVxuICAgICAgICAgICAgU2xlZXBpbmcudXBkYXRlKGFsbEJvZGllcywgdGltaW5nLnRpbWVTY2FsZSk7XG5cbiAgICAgICAgLy8gYXBwbGllcyBncmF2aXR5IHRvIGFsbCBib2RpZXNcbiAgICAgICAgRW5naW5lLl9ib2RpZXNBcHBseUdyYXZpdHkoYWxsQm9kaWVzLCB3b3JsZC5ncmF2aXR5KTtcblxuICAgICAgICAvLyB1cGRhdGUgYWxsIGJvZHkgcG9zaXRpb24gYW5kIHJvdGF0aW9uIGJ5IGludGVncmF0aW9uXG4gICAgICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlKGFsbEJvZGllcywgZGVsdGEsIHRpbWluZy50aW1lU2NhbGUsIGNvcnJlY3Rpb24sIHdvcmxkLmJvdW5kcyk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBjb25zdHJhaW50cyAoZmlyc3QgcGFzcylcbiAgICAgICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbChhbGxCb2RpZXMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmVBbGwoYWxsQ29uc3RyYWludHMsIHRpbWluZy50aW1lU2NhbGUpO1xuICAgICAgICB9XG4gICAgICAgIENvbnN0cmFpbnQucG9zdFNvbHZlQWxsKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gYnJvYWRwaGFzZSBwYXNzOiBmaW5kIHBvdGVudGlhbCBjb2xsaXNpb24gcGFpcnNcbiAgICAgICAgaWYgKGJyb2FkcGhhc2UuY29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gaWYgd29ybGQgaXMgZGlydHksIHdlIG11c3QgZmx1c2ggdGhlIHdob2xlIGdyaWRcbiAgICAgICAgICAgIGlmICh3b3JsZC5pc01vZGlmaWVkKVxuICAgICAgICAgICAgICAgIGJyb2FkcGhhc2UuY29udHJvbGxlci5jbGVhcihicm9hZHBoYXNlKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBncmlkIGJ1Y2tldHMgYmFzZWQgb24gY3VycmVudCBib2RpZXNcbiAgICAgICAgICAgIGJyb2FkcGhhc2UuY29udHJvbGxlci51cGRhdGUoYnJvYWRwaGFzZSwgYWxsQm9kaWVzLCBlbmdpbmUsIHdvcmxkLmlzTW9kaWZpZWQpO1xuICAgICAgICAgICAgYnJvYWRwaGFzZVBhaXJzID0gYnJvYWRwaGFzZS5wYWlyc0xpc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBubyBicm9hZHBoYXNlIHNldCwgd2UganVzdCBwYXNzIGFsbCBib2RpZXNcbiAgICAgICAgICAgIGJyb2FkcGhhc2VQYWlycyA9IGFsbEJvZGllcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyIGFsbCBjb21wb3NpdGUgbW9kaWZpZWQgZmxhZ3NcbiAgICAgICAgaWYgKHdvcmxkLmlzTW9kaWZpZWQpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZCh3b3JsZCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5hcnJvd3BoYXNlIHBhc3M6IGZpbmQgYWN0dWFsIGNvbGxpc2lvbnMsIHRoZW4gY3JlYXRlIG9yIHVwZGF0ZSBjb2xsaXNpb24gcGFpcnNcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBicm9hZHBoYXNlLmRldGVjdG9yKGJyb2FkcGhhc2VQYWlycywgZW5naW5lKTtcblxuICAgICAgICAvLyB1cGRhdGUgY29sbGlzaW9uIHBhaXJzXG4gICAgICAgIHZhciBwYWlycyA9IGVuZ2luZS5wYWlycyxcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IHRpbWluZy50aW1lc3RhbXA7XG4gICAgICAgIFBhaXJzLnVwZGF0ZShwYWlycywgY29sbGlzaW9ucywgdGltZXN0YW1wKTtcbiAgICAgICAgUGFpcnMucmVtb3ZlT2xkKHBhaXJzLCB0aW1lc3RhbXApO1xuXG4gICAgICAgIC8vIHdha2UgdXAgYm9kaWVzIGludm9sdmVkIGluIGNvbGxpc2lvbnNcbiAgICAgICAgaWYgKGVuZ2luZS5lbmFibGVTbGVlcGluZylcbiAgICAgICAgICAgIFNsZWVwaW5nLmFmdGVyQ29sbGlzaW9ucyhwYWlycy5saXN0LCB0aW1pbmcudGltZVNjYWxlKTtcblxuICAgICAgICAvLyB0cmlnZ2VyIGNvbGxpc2lvbiBldmVudHNcbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvblN0YXJ0Lmxlbmd0aCA+IDApXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdjb2xsaXNpb25TdGFydCcsIHsgcGFpcnM6IHBhaXJzLmNvbGxpc2lvblN0YXJ0IH0pO1xuXG4gICAgICAgIC8vIGl0ZXJhdGl2ZWx5IHJlc29sdmUgcG9zaXRpb24gYmV0d2VlbiBjb2xsaXNpb25zXG4gICAgICAgIFJlc29sdmVyLnByZVNvbHZlUG9zaXRpb24ocGFpcnMubGlzdCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmdpbmUucG9zaXRpb25JdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIFJlc29sdmVyLnNvbHZlUG9zaXRpb24ocGFpcnMubGlzdCwgdGltaW5nLnRpbWVTY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgUmVzb2x2ZXIucG9zdFNvbHZlUG9zaXRpb24oYWxsQm9kaWVzKTtcblxuICAgICAgICAvLyB1cGRhdGUgYWxsIGNvbnN0cmFpbnRzIChzZWNvbmQgcGFzcylcbiAgICAgICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbChhbGxCb2RpZXMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmVBbGwoYWxsQ29uc3RyYWludHMsIHRpbWluZy50aW1lU2NhbGUpO1xuICAgICAgICB9XG4gICAgICAgIENvbnN0cmFpbnQucG9zdFNvbHZlQWxsKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gaXRlcmF0aXZlbHkgcmVzb2x2ZSB2ZWxvY2l0eSBiZXR3ZWVuIGNvbGxpc2lvbnNcbiAgICAgICAgUmVzb2x2ZXIucHJlU29sdmVWZWxvY2l0eShwYWlycy5saXN0KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS52ZWxvY2l0eUl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgUmVzb2x2ZXIuc29sdmVWZWxvY2l0eShwYWlycy5saXN0LCB0aW1pbmcudGltZVNjYWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyaWdnZXIgY29sbGlzaW9uIGV2ZW50c1xuICAgICAgICBpZiAocGFpcnMuY29sbGlzaW9uQWN0aXZlLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdjb2xsaXNpb25BY3RpdmUnLCB7IHBhaXJzOiBwYWlycy5jb2xsaXNpb25BY3RpdmUgfSk7XG5cbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvbkVuZC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnY29sbGlzaW9uRW5kJywgeyBwYWlyczogcGFpcnMuY29sbGlzaW9uRW5kIH0pO1xuXG5cbiAgICAgICAgLy8gY2xlYXIgZm9yY2UgYnVmZmVyc1xuICAgICAgICBFbmdpbmUuX2JvZGllc0NsZWFyRm9yY2VzKGFsbEJvZGllcyk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnYWZ0ZXJVcGRhdGUnLCBldmVudCk7XG5cbiAgICAgICAgcmV0dXJuIGVuZ2luZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIE1lcmdlcyB0d28gZW5naW5lcyBieSBrZWVwaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIGBlbmdpbmVBYCBidXQgcmVwbGFjaW5nIHRoZSB3b3JsZCB3aXRoIHRoZSBvbmUgZnJvbSBgZW5naW5lQmAuXG4gICAgICogQG1ldGhvZCBtZXJnZVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVBXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZUJcbiAgICAgKi9cbiAgICBFbmdpbmUubWVyZ2UgPSBmdW5jdGlvbihlbmdpbmVBLCBlbmdpbmVCKSB7XG4gICAgICAgIENvbW1vbi5leHRlbmQoZW5naW5lQSwgZW5naW5lQik7XG4gICAgICAgIFxuICAgICAgICBpZiAoZW5naW5lQi53b3JsZCkge1xuICAgICAgICAgICAgZW5naW5lQS53b3JsZCA9IGVuZ2luZUIud29ybGQ7XG5cbiAgICAgICAgICAgIEVuZ2luZS5jbGVhcihlbmdpbmVBKTtcblxuICAgICAgICAgICAgdmFyIGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoZW5naW5lQS53b3JsZCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBib2R5LmlkID0gQ29tbW9uLm5leHRJZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZW5naW5lIGluY2x1ZGluZyB0aGUgd29ybGQsIHBhaXJzIGFuZCBicm9hZHBoYXNlLlxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG4gICAgRW5naW5lLmNsZWFyID0gZnVuY3Rpb24oZW5naW5lKSB7XG4gICAgICAgIHZhciB3b3JsZCA9IGVuZ2luZS53b3JsZDtcbiAgICAgICAgXG4gICAgICAgIFBhaXJzLmNsZWFyKGVuZ2luZS5wYWlycyk7XG5cbiAgICAgICAgdmFyIGJyb2FkcGhhc2UgPSBlbmdpbmUuYnJvYWRwaGFzZTtcbiAgICAgICAgaWYgKGJyb2FkcGhhc2UuY29udHJvbGxlcikge1xuICAgICAgICAgICAgdmFyIGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMod29ybGQpO1xuICAgICAgICAgICAgYnJvYWRwaGFzZS5jb250cm9sbGVyLmNsZWFyKGJyb2FkcGhhc2UpO1xuICAgICAgICAgICAgYnJvYWRwaGFzZS5jb250cm9sbGVyLnVwZGF0ZShicm9hZHBoYXNlLCBib2RpZXMsIGVuZ2luZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogWmVyb2VzIHRoZSBgYm9keS5mb3JjZWAgYW5kIGBib2R5LnRvcnF1ZWAgZm9yY2UgYnVmZmVycy5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNDbGVhckZvcmNlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzQ2xlYXJGb3JjZXMgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICAvLyByZXNldCBmb3JjZSBidWZmZXJzXG4gICAgICAgICAgICBib2R5LmZvcmNlLnggPSAwO1xuICAgICAgICAgICAgYm9keS5mb3JjZS55ID0gMDtcbiAgICAgICAgICAgIGJvZHkudG9ycXVlID0gMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBseXMgYSBtYXNzIGRlcGVuZGFudCBmb3JjZSB0byBhbGwgZ2l2ZW4gYm9kaWVzLlxuICAgICAqIEBtZXRob2QgX2JvZGllc0FwcGx5R3Jhdml0eVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBncmF2aXR5XG4gICAgICovXG4gICAgRW5naW5lLl9ib2RpZXNBcHBseUdyYXZpdHkgPSBmdW5jdGlvbihib2RpZXMsIGdyYXZpdHkpIHtcbiAgICAgICAgdmFyIGdyYXZpdHlTY2FsZSA9IHR5cGVvZiBncmF2aXR5LnNjYWxlICE9PSAndW5kZWZpbmVkJyA/IGdyYXZpdHkuc2NhbGUgOiAwLjAwMTtcblxuICAgICAgICBpZiAoKGdyYXZpdHkueCA9PT0gMCAmJiBncmF2aXR5LnkgPT09IDApIHx8IGdyYXZpdHlTY2FsZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IGJvZHkuaXNTbGVlcGluZylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZ3Jhdml0eVxuICAgICAgICAgICAgYm9keS5mb3JjZS55ICs9IGJvZHkubWFzcyAqIGdyYXZpdHkueSAqIGdyYXZpdHlTY2FsZTtcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueCArPSBib2R5Lm1hc3MgKiBncmF2aXR5LnggKiBncmF2aXR5U2NhbGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbHlzIGBCb2R5LnVwZGF0ZWAgdG8gYWxsIGdpdmVuIGBib2RpZXNgLlxuICAgICAqIEBtZXRob2QgX2JvZGllc1VwZGF0ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVRpbWUgXG4gICAgICogVGhlIGFtb3VudCBvZiB0aW1lIGVsYXBzZWQgYmV0d2VlbiB1cGRhdGVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTY2FsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3JyZWN0aW9uIFxuICAgICAqIFRoZSBWZXJsZXQgY29ycmVjdGlvbiBmYWN0b3IgKGRlbHRhVGltZSAvIGxhc3REZWx0YVRpbWUpXG4gICAgICogQHBhcmFtIHtib3VuZHN9IHdvcmxkQm91bmRzXG4gICAgICovXG4gICAgRW5naW5lLl9ib2RpZXNVcGRhdGUgPSBmdW5jdGlvbihib2RpZXMsIGRlbHRhVGltZSwgdGltZVNjYWxlLCBjb3JyZWN0aW9uLCB3b3JsZEJvdW5kcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IGJvZHkuaXNTbGVlcGluZylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgQm9keS51cGRhdGUoYm9keSwgZGVsdGFUaW1lLCB0aW1lU2NhbGUsIGNvcnJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFsaWFzIGZvciBgUnVubmVyLnJ1bmAsIHNlZSBgTWF0dGVyLlJ1bm5lcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICogQG1ldGhvZCBydW5cbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGp1c3QgYmVmb3JlIGFuIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVVcGRhdGVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUgYW5kIGFsbCBjb2xsaXNpb24gZXZlbnRzXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyVXBkYXRlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciBlbmdpbmUgdXBkYXRlLCBwcm92aWRlcyBhIGxpc3Qgb2YgYWxsIHBhaXJzIHRoYXQgaGF2ZSBzdGFydGVkIHRvIGNvbGxpZGUgaW4gdGhlIGN1cnJlbnQgdGljayAoaWYgYW55KVxuICAgICpcbiAgICAqIEBldmVudCBjb2xsaXNpb25TdGFydFxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnBhaXJzIExpc3Qgb2YgYWZmZWN0ZWQgcGFpcnNcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUsIHByb3ZpZGVzIGEgbGlzdCBvZiBhbGwgcGFpcnMgdGhhdCBhcmUgY29sbGlkaW5nIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uQWN0aXZlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQucGFpcnMgTGlzdCBvZiBhZmZlY3RlZCBwYWlyc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGhhdmUgZW5kZWQgY29sbGlzaW9uIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uRW5kXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQucGFpcnMgTGlzdCBvZiBhZmZlY3RlZCBwYWlyc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHBvc2l0aW9uIGl0ZXJhdGlvbnMgdG8gcGVyZm9ybSBlYWNoIHVwZGF0ZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhpZ2hlciBxdWFsaXR5IHRoZSBzaW11bGF0aW9uIHdpbGwgYmUgYXQgdGhlIGV4cGVuc2Ugb2YgcGVyZm9ybWFuY2UuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9zaXRpb25JdGVyYXRpb25zXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIHZlbG9jaXR5IGl0ZXJhdGlvbnMgdG8gcGVyZm9ybSBlYWNoIHVwZGF0ZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhpZ2hlciBxdWFsaXR5IHRoZSBzaW11bGF0aW9uIHdpbGwgYmUgYXQgdGhlIGV4cGVuc2Ugb2YgcGVyZm9ybWFuY2UuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdmVsb2NpdHlJdGVyYXRpb25zXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZWdlciBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIGNvbnN0cmFpbnQgaXRlcmF0aW9ucyB0byBwZXJmb3JtIGVhY2ggdXBkYXRlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgaGlnaGVyIHF1YWxpdHkgdGhlIHNpbXVsYXRpb24gd2lsbCBiZSBhdCB0aGUgZXhwZW5zZSBvZiBwZXJmb3JtYW5jZS5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiBgMmAgaXMgdXN1YWxseSB2ZXJ5IGFkZXF1YXRlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnN0cmFpbnRJdGVyYXRpb25zXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgc3BlY2lmaWVzIHdoZXRoZXIgdGhlIGVuZ2luZSBzaG91bGQgYWxsb3cgc2xlZXBpbmcgdmlhIHRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUuXG4gICAgICogU2xlZXBpbmcgY2FuIGltcHJvdmUgc3RhYmlsaXR5IGFuZCBwZXJmb3JtYW5jZSwgYnV0IG9mdGVuIGF0IHRoZSBleHBlbnNlIG9mIGFjY3VyYWN5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVuYWJsZVNsZWVwaW5nXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCBjb250YWluaW5nIHByb3BlcnRpZXMgcmVnYXJkaW5nIHRoZSB0aW1pbmcgc3lzdGVtcyBvZiB0aGUgZW5naW5lLiBcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmdcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIGdsb2JhbCBzY2FsaW5nIGZhY3RvciBvZiB0aW1lIGZvciBhbGwgYm9kaWVzLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIGZyZWV6ZXMgdGhlIHNpbXVsYXRpb24uXG4gICAgICogQSB2YWx1ZSBvZiBgMC4xYCBnaXZlcyBhIHNsb3ctbW90aW9uIGVmZmVjdC5cbiAgICAgKiBBIHZhbHVlIG9mIGAxLjJgIGdpdmVzIGEgc3BlZWQtdXAgZWZmZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHRpbWluZy50aW1lU2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBjdXJyZW50IHNpbXVsYXRpb24tdGltZSBpbiBtaWxsaXNlY29uZHMgc3RhcnRpbmcgZnJvbSBgMGAuIFxuICAgICAqIEl0IGlzIGluY3JlbWVudGVkIG9uIGV2ZXJ5IGBFbmdpbmUudXBkYXRlYCBieSB0aGUgZ2l2ZW4gYGRlbHRhYCBhcmd1bWVudC4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nLnRpbWVzdGFtcFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGluc3RhbmNlIG9mIGEgYFJlbmRlcmAgY29udHJvbGxlci4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgYSBgTWF0dGVyLlJlbmRlcmAgaW5zdGFuY2UgY3JlYXRlZCBieSBgRW5naW5lLmNyZWF0ZWAuXG4gICAgICogT25lIG1heSBhbHNvIGRldmVsb3AgYSBjdXN0b20gcmVuZGVyZXIgbW9kdWxlIGJhc2VkIG9uIGBNYXR0ZXIuUmVuZGVyYCBhbmQgcGFzcyBhbiBpbnN0YW5jZSBvZiBpdCB0byBgRW5naW5lLmNyZWF0ZWAgdmlhIGBvcHRpb25zLnJlbmRlcmAuXG4gICAgICpcbiAgICAgKiBBIG1pbmltYWwgY3VzdG9tIHJlbmRlcmVyIG9iamVjdCBtdXN0IGRlZmluZSBhdCBsZWFzdCB0aHJlZSBmdW5jdGlvbnM6IGBjcmVhdGVgLCBgY2xlYXJgIGFuZCBgd29ybGRgIChzZWUgYE1hdHRlci5SZW5kZXJgKS5cbiAgICAgKiBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIGluc3RlYWQgcGFzcyB0aGUgX21vZHVsZV8gcmVmZXJlbmNlIHZpYSBgb3B0aW9ucy5yZW5kZXIuY29udHJvbGxlcmAgYW5kIGBFbmdpbmUuY3JlYXRlYCB3aWxsIGluc3RhbnRpYXRlIG9uZSBmb3IgeW91LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlclxuICAgICAqIEB0eXBlIHJlbmRlclxuICAgICAqIEBkZXByZWNhdGVkIHNlZSBEZW1vLmpzIGZvciBhbiBleGFtcGxlIG9mIGNyZWF0aW5nIGEgcmVuZGVyZXJcbiAgICAgKiBAZGVmYXVsdCBhIE1hdHRlci5SZW5kZXIgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGluc3RhbmNlIG9mIGEgYnJvYWRwaGFzZSBjb250cm9sbGVyLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGBNYXR0ZXIuR3JpZGAgaW5zdGFuY2UgY3JlYXRlZCBieSBgRW5naW5lLmNyZWF0ZWAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYnJvYWRwaGFzZVxuICAgICAqIEB0eXBlIGdyaWRcbiAgICAgKiBAZGVmYXVsdCBhIE1hdHRlci5HcmlkIGluc3RhbmNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBXb3JsZGAgY29tcG9zaXRlIG9iamVjdCB0aGF0IHdpbGwgY29udGFpbiBhbGwgc2ltdWxhdGVkIGJvZGllcyBhbmQgY29uc3RyYWludHMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgd29ybGRcbiAgICAgKiBAdHlwZSB3b3JsZFxuICAgICAqIEBkZWZhdWx0IGEgTWF0dGVyLldvcmxkIGluc3RhbmNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvYmplY3QgcmVzZXJ2ZWQgZm9yIHN0b3JpbmcgcGx1Z2luLXNwZWNpZmljIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGx1Z2luXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxufSkoKTtcblxufSx7XCIuLi9ib2R5L0JvZHlcIjoxLFwiLi4vYm9keS9Db21wb3NpdGVcIjoyLFwiLi4vYm9keS9Xb3JsZFwiOjMsXCIuLi9jb2xsaXNpb24vR3JpZFwiOjYsXCIuLi9jb2xsaXNpb24vUGFpcnNcIjo4LFwiLi4vY29sbGlzaW9uL1Jlc29sdmVyXCI6MTAsXCIuLi9jb25zdHJhaW50L0NvbnN0cmFpbnRcIjoxMixcIi4uL3JlbmRlci9SZW5kZXJcIjozMSxcIi4vQ29tbW9uXCI6MTQsXCIuL0V2ZW50c1wiOjE2LFwiLi9NZXRyaWNzXCI6MTgsXCIuL1NsZWVwaW5nXCI6MjJ9XSwxNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuRXZlbnRzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyB0byBmaXJlIGFuZCBsaXN0ZW4gdG8gZXZlbnRzIG9uIG90aGVyIG9iamVjdHMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBFdmVudHNcbiovXG5cbnZhciBFdmVudHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudHM7XG5cbnZhciBDb21tb24gPSBfZGVyZXFfKCcuL0NvbW1vbicpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGhlIGdpdmVuIG9iamVjdCdzIGBldmVudE5hbWVgLlxuICAgICAqIEBtZXRob2Qgb25cbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZXNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIEV2ZW50cy5vbiA9IGZ1bmN0aW9uKG9iamVjdCwgZXZlbnROYW1lcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5hbWVzID0gZXZlbnROYW1lcy5zcGxpdCgnICcpLFxuICAgICAgICAgICAgbmFtZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzID0gb2JqZWN0LmV2ZW50cyB8fCB7fTtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHNbbmFtZV0gPSBvYmplY3QuZXZlbnRzW25hbWVdIHx8IFtdO1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50c1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgY2FsbGJhY2suIElmIG5vIGNhbGxiYWNrLCBjbGVhcnMgYWxsIGNhbGxiYWNrcyBpbiBgZXZlbnROYW1lc2AuIElmIG5vIGBldmVudE5hbWVzYCwgY2xlYXJzIGFsbCBldmVudHMuXG4gICAgICogQG1ldGhvZCBvZmZcbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZXNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIEV2ZW50cy5vZmYgPSBmdW5jdGlvbihvYmplY3QsIGV2ZW50TmFtZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghZXZlbnROYW1lcykge1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50cyA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIEV2ZW50cy5vZmYob2JqZWN0LCBjYWxsYmFjaylcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGV2ZW50TmFtZXM7XG4gICAgICAgICAgICBldmVudE5hbWVzID0gQ29tbW9uLmtleXMob2JqZWN0LmV2ZW50cykuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5hbWVzID0gZXZlbnROYW1lcy5zcGxpdCgnICcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBvYmplY3QuZXZlbnRzW25hbWVzW2ldXSxcbiAgICAgICAgICAgICAgICBuZXdDYWxsYmFja3MgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FsbGJhY2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Nbal0gIT09IGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FsbGJhY2tzLnB1c2goY2FsbGJhY2tzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9iamVjdC5ldmVudHNbbmFtZXNbaV1dID0gbmV3Q2FsbGJhY2tzO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFsbCB0aGUgY2FsbGJhY2tzIHN1YnNjcmliZWQgdG8gdGhlIGdpdmVuIG9iamVjdCdzIGBldmVudE5hbWVgLCBpbiB0aGUgb3JkZXIgdGhleSBzdWJzY3JpYmVkLCBpZiBhbnkuXG4gICAgICogQG1ldGhvZCB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVzXG4gICAgICogQHBhcmFtIHt9IGV2ZW50XG4gICAgICovXG4gICAgRXZlbnRzLnRyaWdnZXIgPSBmdW5jdGlvbihvYmplY3QsIGV2ZW50TmFtZXMsIGV2ZW50KSB7XG4gICAgICAgIHZhciBuYW1lcyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgICAgICBldmVudENsb25lO1xuXG4gICAgICAgIGlmIChvYmplY3QuZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoIWV2ZW50KVxuICAgICAgICAgICAgICAgIGV2ZW50ID0ge307XG5cbiAgICAgICAgICAgIG5hbWVzID0gZXZlbnROYW1lcy5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyA9IG9iamVjdC5ldmVudHNbbmFtZV07XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUgPSBDb21tb24uY2xvbmUoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbG9uZS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDbG9uZS5zb3VyY2UgPSBvYmplY3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjYWxsYmFja3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tqXS5hcHBseShvYmplY3QsIFtldmVudENsb25lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4vQ29tbW9uXCI6MTR9XSwxNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXJgIG1vZHVsZSBpcyB0aGUgdG9wIGxldmVsIG5hbWVzcGFjZS4gSXQgYWxzbyBpbmNsdWRlcyBhIGZ1bmN0aW9uIGZvciBpbnN0YWxsaW5nIHBsdWdpbnMgb24gdG9wIG9mIHRoZSBsaWJyYXJ5LlxuKlxuKiBAY2xhc3MgTWF0dGVyXG4qL1xuXG52YXIgTWF0dGVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gTWF0dGVyO1xuXG52YXIgUGx1Z2luID0gX2RlcmVxXygnLi9QbHVnaW4nKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuL0NvbW1vbicpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlicmFyeSBuYW1lLlxuICAgICAqIEBwcm9wZXJ0eSBuYW1lXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICBNYXR0ZXIubmFtZSA9ICdtYXR0ZXItanMnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpYnJhcnkgdmVyc2lvbi5cbiAgICAgKiBAcHJvcGVydHkgdmVyc2lvblxuICAgICAqIEByZWFkT25seVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgTWF0dGVyLnZlcnNpb24gPSAnMC4xNC4yJztcblxuICAgIC8qKlxuICAgICAqIEEgbGlzdCBvZiBwbHVnaW4gZGVwZW5kZW5jaWVzIHRvIGJlIGluc3RhbGxlZC4gVGhlc2UgYXJlIG5vcm1hbGx5IHNldCBhbmQgaW5zdGFsbGVkIHRocm91Z2ggYE1hdHRlci51c2VgLlxuICAgICAqIEFsdGVybmF0aXZlbHkgeW91IG1heSBzZXQgYE1hdHRlci51c2VzYCBtYW51YWxseSBhbmQgaW5zdGFsbCB0aGVtIGJ5IGNhbGxpbmcgYFBsdWdpbi51c2UoTWF0dGVyKWAuXG4gICAgICogQHByb3BlcnR5IHVzZXNcbiAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICovXG4gICAgTWF0dGVyLnVzZXMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbHVnaW5zIHRoYXQgaGF2ZSBiZWVuIGluc3RhbGxlZCB0aHJvdWdoIGBNYXR0ZXIuUGx1Z2luLmluc3RhbGxgLiBSZWFkIG9ubHkuXG4gICAgICogQHByb3BlcnR5IHVzZWRcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICovXG4gICAgTWF0dGVyLnVzZWQgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEluc3RhbGxzIHRoZSBnaXZlbiBwbHVnaW5zIG9uIHRoZSBgTWF0dGVyYCBuYW1lc3BhY2UuXG4gICAgICogVGhpcyBpcyBhIHNob3J0LWhhbmQgZm9yIGBQbHVnaW4udXNlYCwgc2VlIGl0IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIENhbGwgdGhpcyBmdW5jdGlvbiBvbmNlIGF0IHRoZSBzdGFydCBvZiB5b3VyIGNvZGUsIHdpdGggYWxsIG9mIHRoZSBwbHVnaW5zIHlvdSB3aXNoIHRvIGluc3RhbGwgYXMgYXJndW1lbnRzLlxuICAgICAqIEF2b2lkIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBtdWx0aXBsZSB0aW1lcyB1bmxlc3MgeW91IGludGVuZCB0byBtYW51YWxseSBjb250cm9sIGluc3RhbGxhdGlvbiBvcmRlci5cbiAgICAgKiBAbWV0aG9kIHVzZVxuICAgICAqIEBwYXJhbSAuLi5wbHVnaW4ge0Z1bmN0aW9ufSBUaGUgcGx1Z2luKHMpIHRvIGluc3RhbGwgb24gYGJhc2VgIChtdWx0aS1hcmd1bWVudCkuXG4gICAgICovXG4gICAgTWF0dGVyLnVzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBQbHVnaW4udXNlKE1hdHRlciwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBiZWZvcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYE1hdHRlcmAuXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXG4gICAgICogQG1ldGhvZCBiZWZvcmVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgTWF0dGVyYFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGJlZm9yZSB0aGUgb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcbiAgICAgKi9cbiAgICBNYXR0ZXIuYmVmb3JlID0gZnVuY3Rpb24ocGF0aCwgZnVuYykge1xuICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eTWF0dGVyLi8sICcnKTtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5jaGFpblBhdGhCZWZvcmUoTWF0dGVyLCBwYXRoLCBmdW5jKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGFmdGVyIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBNYXR0ZXJgLlxuICAgICAqIFNlZSBhbHNvIGRvY3MgZm9yIGBDb21tb24uY2hhaW5gLlxuICAgICAqIEBtZXRob2QgYWZ0ZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgTWF0dGVyYFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGFmdGVyIHRoZSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxuICAgICAqL1xuICAgIE1hdHRlci5hZnRlciA9IGZ1bmN0aW9uKHBhdGgsIGZ1bmMpIHtcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXk1hdHRlci4vLCAnJyk7XG4gICAgICAgIHJldHVybiBDb21tb24uY2hhaW5QYXRoQWZ0ZXIoTWF0dGVyLCBwYXRoLCBmdW5jKTtcbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4vQ29tbW9uXCI6MTQsXCIuL1BsdWdpblwiOjIwfV0sMTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXG59LHtcIi4uL2JvZHkvQ29tcG9zaXRlXCI6MixcIi4vQ29tbW9uXCI6MTR9XSwxOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vKipcbiogVGhlIGBNYXR0ZXIuTW91c2VgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIG1vdXNlIGlucHV0cy5cbipcbiogQGNsYXNzIE1vdXNlXG4qL1xuXG52YXIgTW91c2UgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZTtcblxudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBtb3VzZSBpbnB1dC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJuIHttb3VzZX0gQSBuZXcgbW91c2VcbiAgICAgKi9cbiAgICBNb3VzZS5jcmVhdGUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBtb3VzZSA9IHt9O1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgQ29tbW9uLmxvZygnTW91c2UuY3JlYXRlOiBlbGVtZW50IHdhcyB1bmRlZmluZWQsIGRlZmF1bHRpbmcgdG8gZG9jdW1lbnQuYm9keScsICd3YXJuJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1vdXNlLmVsZW1lbnQgPSBlbGVtZW50IHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIG1vdXNlLmFic29sdXRlID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLm1vdXNlZG93blBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLm1vdXNldXBQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5vZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2Uuc2NhbGUgPSB7IHg6IDEsIHk6IDEgfTtcbiAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IDA7XG4gICAgICAgIG1vdXNlLmJ1dHRvbiA9IC0xO1xuICAgICAgICBtb3VzZS5waXhlbFJhdGlvID0gbW91c2UuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGl4ZWwtcmF0aW8nKSB8fCAxO1xuXG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cyA9IHtcbiAgICAgICAgICAgIG1vdXNlbW92ZTogbnVsbCxcbiAgICAgICAgICAgIG1vdXNlZG93bjogbnVsbCxcbiAgICAgICAgICAgIG1vdXNldXA6IG51bGwsXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBtb3VzZS5tb3VzZW1vdmUgPSBmdW5jdGlvbihldmVudCkgeyBcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IE1vdXNlLl9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb24oZXZlbnQsIG1vdXNlLmVsZW1lbnQsIG1vdXNlLnBpeGVsUmF0aW8pLFxuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcblxuICAgICAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5idXR0b24gPSAwO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgICAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNlbW92ZSA9IGV2ZW50O1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbW91c2UubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IE1vdXNlLl9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb24oZXZlbnQsIG1vdXNlLmVsZW1lbnQsIG1vdXNlLnBpeGVsUmF0aW8pLFxuICAgICAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcblxuICAgICAgICAgICAgaWYgKHRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5idXR0b24gPSAwO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZWRvd25Qb3NpdGlvbi54ID0gbW91c2UucG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLm1vdXNlZG93blBvc2l0aW9uLnkgPSBtb3VzZS5wb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNlZG93biA9IGV2ZW50O1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbW91c2UubW91c2V1cCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gLTE7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICAgICAgICAgIG1vdXNlLm1vdXNldXBQb3NpdGlvbi54ID0gbW91c2UucG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLm1vdXNldXBQb3NpdGlvbi55ID0gbW91c2UucG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZXVwID0gZXZlbnQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgbW91c2UubW91c2V3aGVlbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBtb3VzZS53aGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGV2ZW50LndoZWVsRGVsdGEgfHwgLWV2ZW50LmRldGFpbCkpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBNb3VzZS5zZXRFbGVtZW50KG1vdXNlLCBtb3VzZS5lbGVtZW50KTtcblxuICAgICAgICByZXR1cm4gbW91c2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgdGhlIG1vdXNlIGlzIGJvdW5kIHRvIChhbmQgcmVsYXRpdmUgdG8pLlxuICAgICAqIEBtZXRob2Qgc2V0RWxlbWVudFxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqL1xuICAgIE1vdXNlLnNldEVsZW1lbnQgPSBmdW5jdGlvbihtb3VzZSwgZWxlbWVudCkge1xuICAgICAgICBtb3VzZS5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlLm1vdXNlbW92ZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2UubW91c2Vkb3duKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2UubW91c2V1cCk7XG4gICAgICAgIFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBtb3VzZS5tb3VzZXdoZWVsKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIG1vdXNlLm1vdXNld2hlZWwpO1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgbW91c2UubW91c2Vtb3ZlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbW91c2UubW91c2Vkb3duKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG1vdXNlLm1vdXNldXApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGNhcHR1cmVkIHNvdXJjZSBldmVudHMuXG4gICAgICogQG1ldGhvZCBjbGVhclNvdXJjZUV2ZW50c1xuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICovXG4gICAgTW91c2UuY2xlYXJTb3VyY2VFdmVudHMgPSBmdW5jdGlvbihtb3VzZSkge1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2Vtb3ZlID0gbnVsbDtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNlZG93biA9IG51bGw7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZXVwID0gbnVsbDtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNld2hlZWwgPSBudWxsO1xuICAgICAgICBtb3VzZS53aGVlbERlbHRhID0gMDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbW91c2UgcG9zaXRpb24gb2Zmc2V0LlxuICAgICAqIEBtZXRob2Qgc2V0T2Zmc2V0XG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gb2Zmc2V0XG4gICAgICovXG4gICAgTW91c2Uuc2V0T2Zmc2V0ID0gZnVuY3Rpb24obW91c2UsIG9mZnNldCkge1xuICAgICAgICBtb3VzZS5vZmZzZXQueCA9IG9mZnNldC54O1xuICAgICAgICBtb3VzZS5vZmZzZXQueSA9IG9mZnNldC55O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG1vdXNlIHBvc2l0aW9uIHNjYWxlLlxuICAgICAqIEBtZXRob2Qgc2V0U2NhbGVcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBzY2FsZVxuICAgICAqL1xuICAgIE1vdXNlLnNldFNjYWxlID0gZnVuY3Rpb24obW91c2UsIHNjYWxlKSB7XG4gICAgICAgIG1vdXNlLnNjYWxlLnggPSBzY2FsZS54O1xuICAgICAgICBtb3VzZS5zY2FsZS55ID0gc2NhbGUueTtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbW91c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gYW4gZWxlbWVudCBnaXZlbiBhIHNjcmVlbiBwaXhlbCByYXRpby5cbiAgICAgKiBAbWV0aG9kIF9nZXRSZWxhdGl2ZU1vdXNlUG9zaXRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBldmVudFxuICAgICAqIEBwYXJhbSB7fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsUmF0aW9cbiAgICAgKiBAcmV0dXJuIHt9XG4gICAgICovXG4gICAgTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbiA9IGZ1bmN0aW9uKGV2ZW50LCBlbGVtZW50LCBwaXhlbFJhdGlvKSB7XG4gICAgICAgIHZhciBlbGVtZW50Qm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHJvb3ROb2RlID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSksXG4gICAgICAgICAgICBzY3JvbGxYID0gKHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkKSA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IHJvb3ROb2RlLnNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxZID0gKHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKSA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IHJvb3ROb2RlLnNjcm9sbFRvcCxcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgICAgIHgsIHk7XG4gICAgICAgIFxuICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgeCA9IHRvdWNoZXNbMF0ucGFnZVggLSBlbGVtZW50Qm91bmRzLmxlZnQgLSBzY3JvbGxYO1xuICAgICAgICAgICAgeSA9IHRvdWNoZXNbMF0ucGFnZVkgLSBlbGVtZW50Qm91bmRzLnRvcCAtIHNjcm9sbFk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gZXZlbnQucGFnZVggLSBlbGVtZW50Qm91bmRzLmxlZnQgLSBzY3JvbGxYO1xuICAgICAgICAgICAgeSA9IGV2ZW50LnBhZ2VZIC0gZWxlbWVudEJvdW5kcy50b3AgLSBzY3JvbGxZO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICB4OiB4IC8gKGVsZW1lbnQuY2xpZW50V2lkdGggLyAoZWxlbWVudC53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoKSAqIHBpeGVsUmF0aW8pLFxuICAgICAgICAgICAgeTogeSAvIChlbGVtZW50LmNsaWVudEhlaWdodCAvIChlbGVtZW50LmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCkgKiBwaXhlbFJhdGlvKVxuICAgICAgICB9O1xuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi4vY29yZS9Db21tb25cIjoxNH1dLDIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5QbHVnaW5gIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgZm9yIHJlZ2lzdGVyaW5nIGFuZCBpbnN0YWxsaW5nIHBsdWdpbnMgb24gbW9kdWxlcy5cbipcbiogQGNsYXNzIFBsdWdpblxuKi9cblxudmFyIFBsdWdpbiA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsdWdpbjtcblxudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4vQ29tbW9uJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIFBsdWdpbi5fcmVnaXN0cnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIHBsdWdpbiBvYmplY3Qgc28gaXQgY2FuIGJlIHJlc29sdmVkIGxhdGVyIGJ5IG5hbWUuXG4gICAgICogQG1ldGhvZCByZWdpc3RlclxuICAgICAqIEBwYXJhbSBwbHVnaW4ge30gVGhlIHBsdWdpbiB0byByZWdpc3Rlci5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBwbHVnaW4uXG4gICAgICovXG4gICAgUGx1Z2luLnJlZ2lzdGVyID0gZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgIGlmICghUGx1Z2luLmlzUGx1Z2luKHBsdWdpbikpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdkb2VzIG5vdCBpbXBsZW1lbnQgYWxsIHJlcXVpcmVkIGZpZWxkcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbHVnaW4ubmFtZSBpbiBQbHVnaW4uX3JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICB2YXIgcmVnaXN0ZXJlZCA9IFBsdWdpbi5fcmVnaXN0cnlbcGx1Z2luLm5hbWVdLFxuICAgICAgICAgICAgICAgIHBsdWdpblZlcnNpb24gPSBQbHVnaW4udmVyc2lvblBhcnNlKHBsdWdpbi52ZXJzaW9uKS5udW1iZXIsXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFZlcnNpb24gPSBQbHVnaW4udmVyc2lvblBhcnNlKHJlZ2lzdGVyZWQudmVyc2lvbikubnVtYmVyO1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luVmVyc2lvbiA+IHJlZ2lzdGVyZWRWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocmVnaXN0ZXJlZCksICd3YXMgdXBncmFkZWQgdG8nLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICAgICAgUGx1Z2luLl9yZWdpc3RyeVtwbHVnaW4ubmFtZV0gPSBwbHVnaW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsdWdpblZlcnNpb24gPCByZWdpc3RlcmVkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHJlZ2lzdGVyZWQpLCAnY2FuIG5vdCBiZSBkb3duZ3JhZGVkIHRvJywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW4gIT09IHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnaXMgYWxyZWFkeSByZWdpc3RlcmVkIHRvIGRpZmZlcmVudCBwbHVnaW4gb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQbHVnaW4uX3JlZ2lzdHJ5W3BsdWdpbi5uYW1lXSA9IHBsdWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbHVnaW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIGEgZGVwZW5kZW5jeSB0byBhIHBsdWdpbiBvYmplY3QgZnJvbSB0aGUgcmVnaXN0cnkgaWYgaXQgZXhpc3RzLiBcbiAgICAgKiBUaGUgYGRlcGVuZGVuY3lgIG1heSBjb250YWluIGEgdmVyc2lvbiwgYnV0IG9ubHkgdGhlIG5hbWUgbWF0dGVycyB3aGVuIHJlc29sdmluZy5cbiAgICAgKiBAbWV0aG9kIHJlc29sdmVcbiAgICAgKiBAcGFyYW0gZGVwZW5kZW5jeSB7c3RyaW5nfSBUaGUgZGVwZW5kZW5jeS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBwbHVnaW4gaWYgcmVzb2x2ZWQsIG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAgICAgKi9cbiAgICBQbHVnaW4ucmVzb2x2ZSA9IGZ1bmN0aW9uKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgcmV0dXJuIFBsdWdpbi5fcmVnaXN0cnlbUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShkZXBlbmRlbmN5KS5uYW1lXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByZXR0eSBwcmludGVkIHBsdWdpbiBuYW1lIGFuZCB2ZXJzaW9uLlxuICAgICAqIEBtZXRob2QgdG9TdHJpbmdcbiAgICAgKiBAcGFyYW0gcGx1Z2luIHt9IFRoZSBwbHVnaW4uXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBQcmV0dHkgcHJpbnRlZCBwbHVnaW4gbmFtZSBhbmQgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBQbHVnaW4udG9TdHJpbmcgPSBmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwbHVnaW4gPT09ICdzdHJpbmcnID8gcGx1Z2luIDogKHBsdWdpbi5uYW1lIHx8ICdhbm9ueW1vdXMnKSArICdAJyArIChwbHVnaW4udmVyc2lvbiB8fCBwbHVnaW4ucmFuZ2UgfHwgJzAuMC4wJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3QgbWVldHMgdGhlIG1pbmltdW0gc3RhbmRhcmQgdG8gYmUgY29uc2lkZXJlZCBhIHBsdWdpbi5cbiAgICAgKiBUaGlzIG1lYW5zIGl0IG11c3QgZGVmaW5lIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgKiAtIGBuYW1lYFxuICAgICAqIC0gYHZlcnNpb25gXG4gICAgICogLSBgaW5zdGFsbGBcbiAgICAgKiBAbWV0aG9kIGlzUGx1Z2luXG4gICAgICogQHBhcmFtIG9iaiB7fSBUaGUgb2JqIHRvIHRlc3QuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBvYmplY3QgY2FuIGJlIGNvbnNpZGVyZWQgYSBwbHVnaW4gb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLmlzUGx1Z2luID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLm5hbWUgJiYgb2JqLnZlcnNpb24gJiYgb2JqLmluc3RhbGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGEgcGx1Z2luIHdpdGggdGhlIGdpdmVuIGBuYW1lYCBiZWVuIGluc3RhbGxlZCBvbiBgbW9kdWxlYC5cbiAgICAgKiBAbWV0aG9kIGlzVXNlZFxuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZS5cbiAgICAgKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBUaGUgcGx1Z2luIG5hbWUuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIGEgcGx1Z2luIHdpdGggdGhlIGdpdmVuIGBuYW1lYCBiZWVuIGluc3RhbGxlZCBvbiBgbW9kdWxlYCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLmlzVXNlZCA9IGZ1bmN0aW9uKG1vZHVsZSwgbmFtZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlLnVzZWQuaW5kZXhPZihuYW1lKSA+IC0xO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBgcGx1Z2luLmZvcmAgaXMgYXBwbGljYWJsZSB0byBgbW9kdWxlYCBieSBjb21wYXJpbmcgYWdhaW5zdCBgbW9kdWxlLm5hbWVgIGFuZCBgbW9kdWxlLnZlcnNpb25gLlxuICAgICAqIElmIGBwbHVnaW4uZm9yYCBpcyBub3Qgc3BlY2lmaWVkIHRoZW4gaXQgaXMgYXNzdW1lZCB0byBiZSBhcHBsaWNhYmxlLlxuICAgICAqIFRoZSB2YWx1ZSBvZiBgcGx1Z2luLmZvcmAgaXMgYSBzdHJpbmcgb2YgdGhlIGZvcm1hdCBgJ21vZHVsZS1uYW1lJ2Agb3IgYCdtb2R1bGUtbmFtZUB2ZXJzaW9uJ2AuXG4gICAgICogQG1ldGhvZCBpc0ZvclxuICAgICAqIEBwYXJhbSBwbHVnaW4ge30gVGhlIHBsdWdpbi5cbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIGBwbHVnaW4uZm9yYCBpcyBhcHBsaWNhYmxlIHRvIGBtb2R1bGVgLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBQbHVnaW4uaXNGb3IgPSBmdW5jdGlvbihwbHVnaW4sIG1vZHVsZSkge1xuICAgICAgICB2YXIgcGFyc2VkID0gcGx1Z2luLmZvciAmJiBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKHBsdWdpbi5mb3IpO1xuICAgICAgICByZXR1cm4gIXBsdWdpbi5mb3IgfHwgKG1vZHVsZS5uYW1lID09PSBwYXJzZWQubmFtZSAmJiBQbHVnaW4udmVyc2lvblNhdGlzZmllcyhtb2R1bGUudmVyc2lvbiwgcGFyc2VkLnJhbmdlKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluc3RhbGxzIHRoZSBwbHVnaW5zIGJ5IGNhbGxpbmcgYHBsdWdpbi5pbnN0YWxsYCBvbiBlYWNoIHBsdWdpbiBzcGVjaWZpZWQgaW4gYHBsdWdpbnNgIGlmIHBhc3NlZCwgb3RoZXJ3aXNlIGBtb2R1bGUudXNlc2AuXG4gICAgICogRm9yIGluc3RhbGxpbmcgcGx1Z2lucyBvbiBgTWF0dGVyYCBzZWUgdGhlIGNvbnZlbmllbmNlIGZ1bmN0aW9uIGBNYXR0ZXIudXNlYC5cbiAgICAgKiBQbHVnaW5zIG1heSBiZSBzcGVjaWZpZWQgZWl0aGVyIGJ5IHRoZWlyIG5hbWUgb3IgYSByZWZlcmVuY2UgdG8gdGhlIHBsdWdpbiBvYmplY3QuXG4gICAgICogUGx1Z2lucyB0aGVtc2VsdmVzIG1heSBzcGVjaWZ5IGZ1cnRoZXIgZGVwZW5kZW5jaWVzLCBidXQgZWFjaCBwbHVnaW4gaXMgaW5zdGFsbGVkIG9ubHkgb25jZS5cbiAgICAgKiBPcmRlciBpcyBpbXBvcnRhbnQsIGEgdG9wb2xvZ2ljYWwgc29ydCBpcyBwZXJmb3JtZWQgdG8gZmluZCB0aGUgYmVzdCByZXN1bHRpbmcgb3JkZXIgb2YgaW5zdGFsbGF0aW9uLlxuICAgICAqIFRoaXMgc29ydGluZyBhdHRlbXB0cyB0byBzYXRpc2Z5IGV2ZXJ5IGRlcGVuZGVuY3kncyByZXF1ZXN0ZWQgb3JkZXJpbmcsIGJ1dCBtYXkgbm90IGJlIGV4YWN0IGluIGFsbCBjYXNlcy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGxvZ3MgdGhlIHJlc3VsdGluZyBzdGF0dXMgb2YgZWFjaCBkZXBlbmRlbmN5IGluIHRoZSBjb25zb2xlLCBhbG9uZyB3aXRoIGFueSB3YXJuaW5ncy5cbiAgICAgKiAtIEEgZ3JlZW4gdGljayDinIUgaW5kaWNhdGVzIGEgZGVwZW5kZW5jeSB3YXMgcmVzb2x2ZWQgYW5kIGluc3RhbGxlZC5cbiAgICAgKiAtIEFuIG9yYW5nZSBkaWFtb25kIPCflLYgaW5kaWNhdGVzIGEgZGVwZW5kZW5jeSB3YXMgcmVzb2x2ZWQgYnV0IGEgd2FybmluZyB3YXMgdGhyb3duIGZvciBpdCBvciBvbmUgaWYgaXRzIGRlcGVuZGVuY2llcy5cbiAgICAgKiAtIEEgcmVkIGNyb3NzIOKdjCBpbmRpY2F0ZXMgYSBkZXBlbmRlbmN5IGNvdWxkIG5vdCBiZSByZXNvbHZlZC5cbiAgICAgKiBBdm9pZCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgbW9kdWxlIHVubGVzcyB5b3UgaW50ZW5kIHRvIG1hbnVhbGx5IGNvbnRyb2wgaW5zdGFsbGF0aW9uIG9yZGVyLlxuICAgICAqIEBtZXRob2QgdXNlXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlIGluc3RhbGwgcGx1Z2lucyBvbi5cbiAgICAgKiBAcGFyYW0gW3BsdWdpbnM9bW9kdWxlLnVzZXNdIHt9IFRoZSBwbHVnaW5zIHRvIGluc3RhbGwgb24gbW9kdWxlIChvcHRpb25hbCwgZGVmYXVsdHMgdG8gYG1vZHVsZS51c2VzYCkuXG4gICAgICovXG4gICAgUGx1Z2luLnVzZSA9IGZ1bmN0aW9uKG1vZHVsZSwgcGx1Z2lucykge1xuICAgICAgICBtb2R1bGUudXNlcyA9IChtb2R1bGUudXNlcyB8fCBbXSkuY29uY2F0KHBsdWdpbnMgfHwgW10pO1xuXG4gICAgICAgIGlmIChtb2R1bGUudXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udXNlOicsIFBsdWdpbi50b1N0cmluZyhtb2R1bGUpLCAnZG9lcyBub3Qgc3BlY2lmeSBhbnkgZGVwZW5kZW5jaWVzIHRvIGluc3RhbGwuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVwZW5kZW5jaWVzID0gUGx1Z2luLmRlcGVuZGVuY2llcyhtb2R1bGUpLFxuICAgICAgICAgICAgc29ydGVkRGVwZW5kZW5jaWVzID0gQ29tbW9uLnRvcG9sb2dpY2FsU29ydChkZXBlbmRlbmNpZXMpLFxuICAgICAgICAgICAgc3RhdHVzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3J0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChzb3J0ZWREZXBlbmRlbmNpZXNbaV0gPT09IG1vZHVsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwbHVnaW4gPSBQbHVnaW4ucmVzb2x2ZShzb3J0ZWREZXBlbmRlbmNpZXNbaV0pO1xuXG4gICAgICAgICAgICBpZiAoIXBsdWdpbikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5wdXNoKCfinYwgJyArIHNvcnRlZERlcGVuZGVuY2llc1tpXSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChQbHVnaW4uaXNVc2VkKG1vZHVsZSwgcGx1Z2luLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghUGx1Z2luLmlzRm9yKHBsdWdpbiwgbW9kdWxlKSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udXNlOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnaXMgZm9yJywgcGx1Z2luLmZvciwgJ2J1dCBpbnN0YWxsZWQgb24nLCBQbHVnaW4udG9TdHJpbmcobW9kdWxlKSArICcuJyk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmluc3RhbGwpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5zdGFsbChtb2R1bGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnVzZTonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2RvZXMgbm90IHNwZWNpZnkgYW4gaW5zdGFsbCBmdW5jdGlvbi4nKTtcbiAgICAgICAgICAgICAgICBwbHVnaW4uX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uX3dhcm5lZCkge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5wdXNoKCfwn5S2ICcgKyBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBsdWdpbi5fd2FybmVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMucHVzaCgn4pyFICcgKyBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZHVsZS51c2VkLnB1c2gocGx1Z2luLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXR1cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBDb21tb24uaW5mbyhzdGF0dXMuam9pbignICAnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgZmluZHMgYWxsIG9mIGEgbW9kdWxlJ3MgZGVwZW5kZW5jaWVzIGFuZCByZXR1cm5zIGEgZmxhdCBkZXBlbmRlbmN5IGdyYXBoLlxuICAgICAqIEBtZXRob2QgZGVwZW5kZW5jaWVzXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gQSBkZXBlbmRlbmN5IGdyYXBoLlxuICAgICAqL1xuICAgIFBsdWdpbi5kZXBlbmRlbmNpZXMgPSBmdW5jdGlvbihtb2R1bGUsIHRyYWNrZWQpIHtcbiAgICAgICAgdmFyIHBhcnNlZEJhc2UgPSBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKG1vZHVsZSksXG4gICAgICAgICAgICBuYW1lID0gcGFyc2VkQmFzZS5uYW1lO1xuXG4gICAgICAgIHRyYWNrZWQgPSB0cmFja2VkIHx8IHt9O1xuXG4gICAgICAgIGlmIChuYW1lIGluIHRyYWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZHVsZSA9IFBsdWdpbi5yZXNvbHZlKG1vZHVsZSkgfHwgbW9kdWxlO1xuXG4gICAgICAgIHRyYWNrZWRbbmFtZV0gPSBDb21tb24ubWFwKG1vZHVsZS51c2VzIHx8IFtdLCBmdW5jdGlvbihkZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICBpZiAoUGx1Z2luLmlzUGx1Z2luKGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICAgICAgUGx1Z2luLnJlZ2lzdGVyKGRlcGVuZGVuY3kpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShkZXBlbmRlbmN5KSxcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IFBsdWdpbi5yZXNvbHZlKGRlcGVuZGVuY3kpO1xuXG4gICAgICAgICAgICBpZiAocmVzb2x2ZWQgJiYgIVBsdWdpbi52ZXJzaW9uU2F0aXNmaWVzKHJlc29sdmVkLnZlcnNpb24sIHBhcnNlZC5yYW5nZSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybihcbiAgICAgICAgICAgICAgICAgICAgJ1BsdWdpbi5kZXBlbmRlbmNpZXM6JywgUGx1Z2luLnRvU3RyaW5nKHJlc29sdmVkKSwgJ2RvZXMgbm90IHNhdGlzZnknLFxuICAgICAgICAgICAgICAgICAgICBQbHVnaW4udG9TdHJpbmcocGFyc2VkKSwgJ3VzZWQgYnknLCBQbHVnaW4udG9TdHJpbmcocGFyc2VkQmFzZSkgKyAnLidcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQuX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbW9kdWxlLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybihcbiAgICAgICAgICAgICAgICAgICAgJ1BsdWdpbi5kZXBlbmRlbmNpZXM6JywgUGx1Z2luLnRvU3RyaW5nKGRlcGVuZGVuY3kpLCAndXNlZCBieScsXG4gICAgICAgICAgICAgICAgICAgIFBsdWdpbi50b1N0cmluZyhwYXJzZWRCYXNlKSwgJ2NvdWxkIG5vdCBiZSByZXNvbHZlZC4nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIG1vZHVsZS5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5uYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrZWRbbmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIFBsdWdpbi5kZXBlbmRlbmNpZXModHJhY2tlZFtuYW1lXVtpXSwgdHJhY2tlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhY2tlZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgZGVwZW5kZW5jeSBzdHJpbmcgaW50byBpdHMgY29tcG9uZW50cy5cbiAgICAgKiBUaGUgYGRlcGVuZGVuY3lgIGlzIGEgc3RyaW5nIG9mIHRoZSBmb3JtYXQgYCdtb2R1bGUtbmFtZSdgIG9yIGAnbW9kdWxlLW5hbWVAdmVyc2lvbidgLlxuICAgICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBgUGx1Z2luLnZlcnNpb25QYXJzZWAgZm9yIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZvcm1hdC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIGhhbmRsZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgYWxyZWFkeSByZXNvbHZlZCAoZS5nLiBhIG1vZHVsZSBvYmplY3QpLlxuICAgICAqIEBtZXRob2QgZGVwZW5kZW5jeVBhcnNlXG4gICAgICogQHBhcmFtIGRlcGVuZGVuY3kge3N0cmluZ30gVGhlIGRlcGVuZGVuY3kgb2YgdGhlIGZvcm1hdCBgJ21vZHVsZS1uYW1lJ2Agb3IgYCdtb2R1bGUtbmFtZUB2ZXJzaW9uJ2AuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgZGVwZW5kZW5jeSBwYXJzZWQgaW50byBpdHMgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlID0gZnVuY3Rpb24oZGVwZW5kZW5jeSkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzU3RyaW5nKGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC9eW1xcdy1dKyhAKFxcKnxbXFxefl0/XFxkK1xcLlxcZCtcXC5cXGQrKC1bMC05QS1aYS16LV0rKT8pKT8kLztcblxuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3QoZGVwZW5kZW5jeSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLmRlcGVuZGVuY3lQYXJzZTonLCBkZXBlbmRlbmN5LCAnaXMgbm90IGEgdmFsaWQgZGVwZW5kZW5jeSBzdHJpbmcuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogZGVwZW5kZW5jeS5zcGxpdCgnQCcpWzBdLFxuICAgICAgICAgICAgICAgIHJhbmdlOiBkZXBlbmRlbmN5LnNwbGl0KCdAJylbMV0gfHwgJyonXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGRlcGVuZGVuY3kubmFtZSxcbiAgICAgICAgICAgIHJhbmdlOiBkZXBlbmRlbmN5LnJhbmdlIHx8IGRlcGVuZGVuY3kudmVyc2lvblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSB2ZXJzaW9uIHN0cmluZyBpbnRvIGl0cyBjb21wb25lbnRzLiAgXG4gICAgICogVmVyc2lvbnMgYXJlIHN0cmljdGx5IG9mIHRoZSBmb3JtYXQgYHgueS56YCAoYXMgaW4gW3NlbXZlcl0oaHR0cDovL3NlbXZlci5vcmcvKSkuXG4gICAgICogVmVyc2lvbnMgbWF5IG9wdGlvbmFsbHkgaGF2ZSBhIHByZXJlbGVhc2UgdGFnIGluIHRoZSBmb3JtYXQgYHgueS56LWFscGhhYC5cbiAgICAgKiBSYW5nZXMgYXJlIGEgc3RyaWN0IHN1YnNldCBvZiBbbnBtIHJhbmdlc10oaHR0cHM6Ly9kb2NzLm5wbWpzLmNvbS9taXNjL3NlbXZlciNhZHZhbmNlZC1yYW5nZS1zeW50YXgpLlxuICAgICAqIE9ubHkgdGhlIGZvbGxvd2luZyByYW5nZSB0eXBlcyBhcmUgc3VwcG9ydGVkOlxuICAgICAqIC0gVGlsZGUgcmFuZ2VzIGUuZy4gYH4xLjIuM2BcbiAgICAgKiAtIENhcmV0IHJhbmdlcyBlLmcuIGBeMS4yLjNgXG4gICAgICogLSBFeGFjdCB2ZXJzaW9uIGUuZy4gYDEuMi4zYFxuICAgICAqIC0gQW55IHZlcnNpb24gYCpgXG4gICAgICogQG1ldGhvZCB2ZXJzaW9uUGFyc2VcbiAgICAgKiBAcGFyYW0gcmFuZ2Uge3N0cmluZ30gVGhlIHZlcnNpb24gc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHZlcnNpb24gcmFuZ2UgcGFyc2VkIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgUGx1Z2luLnZlcnNpb25QYXJzZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL15cXCp8W1xcXn5dP1xcZCtcXC5cXGQrXFwuXFxkKygtWzAtOUEtWmEtei1dKyk/JC87XG5cbiAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3QocmFuZ2UpKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnZlcnNpb25QYXJzZTonLCByYW5nZSwgJ2lzIG5vdCBhIHZhbGlkIHZlcnNpb24gb3IgcmFuZ2UuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaWRlbnRpZmllcnMgPSByYW5nZS5zcGxpdCgnLScpO1xuICAgICAgICByYW5nZSA9IGlkZW50aWZpZXJzWzBdO1xuXG4gICAgICAgIHZhciBpc1JhbmdlID0gaXNOYU4oTnVtYmVyKHJhbmdlWzBdKSksXG4gICAgICAgICAgICB2ZXJzaW9uID0gaXNSYW5nZSA/IHJhbmdlLnN1YnN0cigxKSA6IHJhbmdlLFxuICAgICAgICAgICAgcGFydHMgPSBDb21tb24ubWFwKHZlcnNpb24uc3BsaXQoJy4nKSwgZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIocGFydCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNSYW5nZTogaXNSYW5nZSxcbiAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICByYW5nZTogcmFuZ2UsXG4gICAgICAgICAgICBvcGVyYXRvcjogaXNSYW5nZSA/IHJhbmdlWzBdIDogJycsXG4gICAgICAgICAgICBwYXJ0czogcGFydHMsXG4gICAgICAgICAgICBwcmVyZWxlYXNlOiBpZGVudGlmaWVyc1sxXSxcbiAgICAgICAgICAgIG51bWJlcjogcGFydHNbMF0gKiAxZTggKyBwYXJ0c1sxXSAqIDFlNCArIHBhcnRzWzJdXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGB2ZXJzaW9uYCBzYXRpc2ZpZXMgdGhlIGdpdmVuIGByYW5nZWAuXG4gICAgICogU2VlIGRvY3VtZW50YXRpb24gZm9yIGBQbHVnaW4udmVyc2lvblBhcnNlYCBmb3IgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZm9ybWF0LlxuICAgICAqIElmIGEgdmVyc2lvbiBvciByYW5nZSBpcyBub3Qgc3BlY2lmaWVkLCB0aGVuIGFueSB2ZXJzaW9uIChgKmApIGlzIGFzc3VtZWQgdG8gc2F0aXNmeS5cbiAgICAgKiBAbWV0aG9kIHZlcnNpb25TYXRpc2ZpZXNcbiAgICAgKiBAcGFyYW0gdmVyc2lvbiB7c3RyaW5nfSBUaGUgdmVyc2lvbiBzdHJpbmcuXG4gICAgICogQHBhcmFtIHJhbmdlIHtzdHJpbmd9IFRoZSByYW5nZSBzdHJpbmcuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIGB2ZXJzaW9uYCBzYXRpc2ZpZXMgYHJhbmdlYCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLnZlcnNpb25TYXRpc2ZpZXMgPSBmdW5jdGlvbih2ZXJzaW9uLCByYW5nZSkge1xuICAgICAgICByYW5nZSA9IHJhbmdlIHx8ICcqJztcblxuICAgICAgICB2YXIgcmFuZ2VQYXJzZWQgPSBQbHVnaW4udmVyc2lvblBhcnNlKHJhbmdlKSxcbiAgICAgICAgICAgIHJhbmdlUGFydHMgPSByYW5nZVBhcnNlZC5wYXJ0cyxcbiAgICAgICAgICAgIHZlcnNpb25QYXJzZWQgPSBQbHVnaW4udmVyc2lvblBhcnNlKHZlcnNpb24pLFxuICAgICAgICAgICAgdmVyc2lvblBhcnRzID0gdmVyc2lvblBhcnNlZC5wYXJ0cztcblxuICAgICAgICBpZiAocmFuZ2VQYXJzZWQuaXNSYW5nZSkge1xuICAgICAgICAgICAgaWYgKHJhbmdlUGFyc2VkLm9wZXJhdG9yID09PSAnKicgfHwgdmVyc2lvbiA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyYW5nZVBhcnNlZC5vcGVyYXRvciA9PT0gJ34nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcnNpb25QYXJ0c1swXSA9PT0gcmFuZ2VQYXJ0c1swXSAmJiB2ZXJzaW9uUGFydHNbMV0gPT09IHJhbmdlUGFydHNbMV0gJiYgdmVyc2lvblBhcnRzWzJdID49IHJhbmdlUGFydHNbMl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyYW5nZVBhcnNlZC5vcGVyYXRvciA9PT0gJ14nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlUGFydHNbMF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uUGFydHNbMF0gPT09IHJhbmdlUGFydHNbMF0gJiYgdmVyc2lvblBhcnNlZC5udW1iZXIgPj0gcmFuZ2VQYXJzZWQubnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyYW5nZVBhcnRzWzFdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmVyc2lvblBhcnRzWzFdID09PSByYW5nZVBhcnRzWzFdICYmIHZlcnNpb25QYXJ0c1syXSA+PSByYW5nZVBhcnRzWzJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uUGFydHNbMl0gPT09IHJhbmdlUGFydHNbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVyc2lvbiA9PT0gcmFuZ2UgfHwgdmVyc2lvbiA9PT0gJyonO1xuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi9Db21tb25cIjoxNH1dLDIxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5SdW5uZXJgIG1vZHVsZSBpcyBhbiBvcHRpb25hbCB1dGlsaXR5IHdoaWNoIHByb3ZpZGVzIGEgZ2FtZSBsb29wLCBcbiogdGhhdCBoYW5kbGVzIGNvbnRpbnVvdXNseSB1cGRhdGluZyBhIGBNYXR0ZXIuRW5naW5lYCBmb3IgeW91IHdpdGhpbiBhIGJyb3dzZXIuXG4qIEl0IGlzIGludGVuZGVkIGZvciBkZXZlbG9wbWVudCBhbmQgZGVidWdnaW5nIHB1cnBvc2VzLCBidXQgbWF5IGFsc28gYmUgc3VpdGFibGUgZm9yIHNpbXBsZSBnYW1lcy5cbiogSWYgeW91IGFyZSB1c2luZyB5b3VyIG93biBnYW1lIGxvb3AgaW5zdGVhZCwgdGhlbiB5b3UgZG8gbm90IG5lZWQgdGhlIGBNYXR0ZXIuUnVubmVyYCBtb2R1bGUuXG4qIEluc3RlYWQganVzdCBjYWxsIGBFbmdpbmUudXBkYXRlKGVuZ2luZSwgZGVsdGEpYCBpbiB5b3VyIG93biBsb29wLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgUnVubmVyXG4qL1xuXG52YXIgUnVubmVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUnVubmVyO1xuXG52YXIgRXZlbnRzID0gX2RlcmVxXygnLi9FdmVudHMnKTtcbnZhciBFbmdpbmUgPSBfZGVyZXFfKCcuL0VuZ2luZScpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4vQ29tbW9uJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgIFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWU7XG4gICAgfVxuXG4gICAgaWYgKCFfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHZhciBfZnJhbWVUaW1lb3V0O1xuXG4gICAgICAgIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjayl7IFxuICAgICAgICAgICAgX2ZyYW1lVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKENvbW1vbi5ub3coKSk7IFxuICAgICAgICAgICAgfSwgMTAwMCAvIDYwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfZnJhbWVUaW1lb3V0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFJ1bm5lci4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqL1xuICAgIFJ1bm5lci5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGZwczogNjAsXG4gICAgICAgICAgICBjb3JyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZGVsdGFTYW1wbGVTaXplOiA2MCxcbiAgICAgICAgICAgIGNvdW50ZXJUaW1lc3RhbXA6IDAsXG4gICAgICAgICAgICBmcmFtZUNvdW50ZXI6IDAsXG4gICAgICAgICAgICBkZWx0YUhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgdGltZVByZXY6IG51bGwsXG4gICAgICAgICAgICB0aW1lU2NhbGVQcmV2OiAxLFxuICAgICAgICAgICAgZnJhbWVSZXF1ZXN0SWQ6IG51bGwsXG4gICAgICAgICAgICBpc0ZpeGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcnVubmVyID0gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgcnVubmVyLmRlbHRhID0gcnVubmVyLmRlbHRhIHx8IDEwMDAgLyBydW5uZXIuZnBzO1xuICAgICAgICBydW5uZXIuZGVsdGFNaW4gPSBydW5uZXIuZGVsdGFNaW4gfHwgMTAwMCAvIHJ1bm5lci5mcHM7XG4gICAgICAgIHJ1bm5lci5kZWx0YU1heCA9IHJ1bm5lci5kZWx0YU1heCB8fCAxMDAwIC8gKHJ1bm5lci5mcHMgKiAwLjUpO1xuICAgICAgICBydW5uZXIuZnBzID0gMTAwMCAvIHJ1bm5lci5kZWx0YTtcblxuICAgICAgICByZXR1cm4gcnVubmVyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb250aW51b3VzbHkgdGlja3MgYSBgTWF0dGVyLkVuZ2luZWAgYnkgY2FsbGluZyBgUnVubmVyLnRpY2tgIG9uIHRoZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBldmVudC5cbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBSdW5uZXIucnVuID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUpIHtcbiAgICAgICAgLy8gY3JlYXRlIHJ1bm5lciBpZiBlbmdpbmUgaXMgZmlyc3QgYXJndW1lbnRcbiAgICAgICAgaWYgKHR5cGVvZiBydW5uZXIucG9zaXRpb25JdGVyYXRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZW5naW5lID0gcnVubmVyO1xuICAgICAgICAgICAgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgKGZ1bmN0aW9uIHJlbmRlcih0aW1lKXtcbiAgICAgICAgICAgIHJ1bm5lci5mcmFtZVJlcXVlc3RJZCA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgJiYgcnVubmVyLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBSdW5uZXIudGljayhydW5uZXIsIGVuZ2luZSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5lcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBnYW1lIGxvb3AgdXRpbGl0eSB0aGF0IHVwZGF0ZXMgdGhlIGVuZ2luZSBhbmQgcmVuZGVyZXIgYnkgb25lIHN0ZXAgKGEgJ3RpY2snKS5cbiAgICAgKiBGZWF0dXJlcyBkZWx0YSBzbW9vdGhpbmcsIHRpbWUgY29ycmVjdGlvbiBhbmQgZml4ZWQgb3IgZHluYW1pYyB0aW1pbmcuXG4gICAgICogVHJpZ2dlcnMgYGJlZm9yZVRpY2tgLCBgdGlja2AgYW5kIGBhZnRlclRpY2tgIGV2ZW50cyBvbiB0aGUgZW5naW5lLlxuICAgICAqIENvbnNpZGVyIGp1c3QgYEVuZ2luZS51cGRhdGUoZW5naW5lLCBkZWx0YSlgIGlmIHlvdSdyZSB1c2luZyB5b3VyIG93biBsb29wLlxuICAgICAqIEBtZXRob2QgdGlja1xuICAgICAqIEBwYXJhbSB7cnVubmVyfSBydW5uZXJcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAgICAgKi9cbiAgICBSdW5uZXIudGljayA9IGZ1bmN0aW9uKHJ1bm5lciwgZW5naW5lLCB0aW1lKSB7XG4gICAgICAgIHZhciB0aW1pbmcgPSBlbmdpbmUudGltaW5nLFxuICAgICAgICAgICAgY29ycmVjdGlvbiA9IDEsXG4gICAgICAgICAgICBkZWx0YTtcblxuICAgICAgICAvLyBjcmVhdGUgYW4gZXZlbnQgb2JqZWN0XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltaW5nLnRpbWVzdGFtcFxuICAgICAgICB9O1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2JlZm9yZVRpY2snLCBldmVudCk7XG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2JlZm9yZVRpY2snLCBldmVudCk7IC8vIEBkZXByZWNhdGVkXG5cbiAgICAgICAgaWYgKHJ1bm5lci5pc0ZpeGVkKSB7XG4gICAgICAgICAgICAvLyBmaXhlZCB0aW1lc3RlcFxuICAgICAgICAgICAgZGVsdGEgPSBydW5uZXIuZGVsdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkeW5hbWljIHRpbWVzdGVwIGJhc2VkIG9uIHdhbGwgY2xvY2sgYmV0d2VlbiBjYWxsc1xuICAgICAgICAgICAgZGVsdGEgPSAodGltZSAtIHJ1bm5lci50aW1lUHJldikgfHwgcnVubmVyLmRlbHRhO1xuICAgICAgICAgICAgcnVubmVyLnRpbWVQcmV2ID0gdGltZTtcblxuICAgICAgICAgICAgLy8gb3B0aW1pc3RpY2FsbHkgZmlsdGVyIGRlbHRhIG92ZXIgYSBmZXcgZnJhbWVzLCB0byBpbXByb3ZlIHN0YWJpbGl0eVxuICAgICAgICAgICAgcnVubmVyLmRlbHRhSGlzdG9yeS5wdXNoKGRlbHRhKTtcbiAgICAgICAgICAgIHJ1bm5lci5kZWx0YUhpc3RvcnkgPSBydW5uZXIuZGVsdGFIaXN0b3J5LnNsaWNlKC1ydW5uZXIuZGVsdGFTYW1wbGVTaXplKTtcbiAgICAgICAgICAgIGRlbHRhID0gTWF0aC5taW4uYXBwbHkobnVsbCwgcnVubmVyLmRlbHRhSGlzdG9yeSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGxpbWl0IGRlbHRhXG4gICAgICAgICAgICBkZWx0YSA9IGRlbHRhIDwgcnVubmVyLmRlbHRhTWluID8gcnVubmVyLmRlbHRhTWluIDogZGVsdGE7XG4gICAgICAgICAgICBkZWx0YSA9IGRlbHRhID4gcnVubmVyLmRlbHRhTWF4ID8gcnVubmVyLmRlbHRhTWF4IDogZGVsdGE7XG5cbiAgICAgICAgICAgIC8vIGNvcnJlY3Rpb24gZm9yIGRlbHRhXG4gICAgICAgICAgICBjb3JyZWN0aW9uID0gZGVsdGEgLyBydW5uZXIuZGVsdGE7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBlbmdpbmUgdGltaW5nIG9iamVjdFxuICAgICAgICAgICAgcnVubmVyLmRlbHRhID0gZGVsdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aW1lIGNvcnJlY3Rpb24gZm9yIHRpbWUgc2NhbGluZ1xuICAgICAgICBpZiAocnVubmVyLnRpbWVTY2FsZVByZXYgIT09IDApXG4gICAgICAgICAgICBjb3JyZWN0aW9uICo9IHRpbWluZy50aW1lU2NhbGUgLyBydW5uZXIudGltZVNjYWxlUHJldjtcblxuICAgICAgICBpZiAodGltaW5nLnRpbWVTY2FsZSA9PT0gMClcbiAgICAgICAgICAgIGNvcnJlY3Rpb24gPSAwO1xuXG4gICAgICAgIHJ1bm5lci50aW1lU2NhbGVQcmV2ID0gdGltaW5nLnRpbWVTY2FsZTtcbiAgICAgICAgcnVubmVyLmNvcnJlY3Rpb24gPSBjb3JyZWN0aW9uO1xuXG4gICAgICAgIC8vIGZwcyBjb3VudGVyXG4gICAgICAgIHJ1bm5lci5mcmFtZUNvdW50ZXIgKz0gMTtcbiAgICAgICAgaWYgKHRpbWUgLSBydW5uZXIuY291bnRlclRpbWVzdGFtcCA+PSAxMDAwKSB7XG4gICAgICAgICAgICBydW5uZXIuZnBzID0gcnVubmVyLmZyYW1lQ291bnRlciAqICgodGltZSAtIHJ1bm5lci5jb3VudGVyVGltZXN0YW1wKSAvIDEwMDApO1xuICAgICAgICAgICAgcnVubmVyLmNvdW50ZXJUaW1lc3RhbXAgPSB0aW1lO1xuICAgICAgICAgICAgcnVubmVyLmZyYW1lQ291bnRlciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICd0aWNrJywgZXZlbnQpO1xuICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICd0aWNrJywgZXZlbnQpOyAvLyBAZGVwcmVjYXRlZFxuXG4gICAgICAgIC8vIGlmIHdvcmxkIGhhcyBiZWVuIG1vZGlmaWVkLCBjbGVhciB0aGUgcmVuZGVyIHNjZW5lIGdyYXBoXG4gICAgICAgIGlmIChlbmdpbmUud29ybGQuaXNNb2RpZmllZCBcbiAgICAgICAgICAgICYmIGVuZ2luZS5yZW5kZXJcbiAgICAgICAgICAgICYmIGVuZ2luZS5yZW5kZXIuY29udHJvbGxlclxuICAgICAgICAgICAgJiYgZW5naW5lLnJlbmRlci5jb250cm9sbGVyLmNsZWFyKSB7XG4gICAgICAgICAgICBlbmdpbmUucmVuZGVyLmNvbnRyb2xsZXIuY2xlYXIoZW5naW5lLnJlbmRlcik7IC8vIEBkZXByZWNhdGVkXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYmVmb3JlVXBkYXRlJywgZXZlbnQpO1xuICAgICAgICBFbmdpbmUudXBkYXRlKGVuZ2luZSwgZGVsdGEsIGNvcnJlY3Rpb24pO1xuICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICdhZnRlclVwZGF0ZScsIGV2ZW50KTtcblxuICAgICAgICAvLyByZW5kZXJcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWRcbiAgICAgICAgaWYgKGVuZ2luZS5yZW5kZXIgJiYgZW5naW5lLnJlbmRlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihydW5uZXIsICdiZWZvcmVSZW5kZXInLCBldmVudCk7XG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdiZWZvcmVSZW5kZXInLCBldmVudCk7IC8vIEBkZXByZWNhdGVkXG5cbiAgICAgICAgICAgIGVuZ2luZS5yZW5kZXIuY29udHJvbGxlci53b3JsZChlbmdpbmUucmVuZGVyKTtcblxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYWZ0ZXJSZW5kZXInLCBldmVudCk7XG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdhZnRlclJlbmRlcicsIGV2ZW50KTsgLy8gQGRlcHJlY2F0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2FmdGVyVGljaycsIGV2ZW50KTtcbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnYWZ0ZXJUaWNrJywgZXZlbnQpOyAvLyBAZGVwcmVjYXRlZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIGV4ZWN1dGlvbiBvZiBgUnVubmVyLnJ1bmAgb24gdGhlIGdpdmVuIGBydW5uZXJgLCBieSBjYW5jZWxpbmcgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IGV2ZW50IGxvb3AuXG4gICAgICogSWYgeW91IHdpc2ggdG8gb25seSB0ZW1wb3JhcmlseSBwYXVzZSB0aGUgZW5naW5lLCBzZWUgYGVuZ2luZS5lbmFibGVkYCBpbnN0ZWFkLlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwYXJhbSB7cnVubmVyfSBydW5uZXJcbiAgICAgKi9cbiAgICBSdW5uZXIuc3RvcCA9IGZ1bmN0aW9uKHJ1bm5lcikge1xuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUocnVubmVyLmZyYW1lUmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGBSdW5uZXIucnVuYC5cbiAgICAgKiBAbWV0aG9kIHN0YXJ0XG4gICAgICogQHBhcmFtIHtydW5uZXJ9IHJ1bm5lclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBSdW5uZXIuc3RhcnQgPSBmdW5jdGlvbihydW5uZXIsIGVuZ2luZSkge1xuICAgICAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYXQgdGhlIHN0YXJ0IG9mIGEgdGljaywgYmVmb3JlIGFueSB1cGRhdGVzIHRvIHRoZSBlbmdpbmUgb3IgdGltaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVRpY2tcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB0aW1pbmcgdXBkYXRlZCwgYnV0IGp1c3QgYmVmb3JlIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCB0aWNrXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhdCB0aGUgZW5kIG9mIGEgdGljaywgYWZ0ZXIgZW5naW5lIHVwZGF0ZSBhbmQgYWZ0ZXIgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyVGlja1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYmVmb3JlIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVVcGRhdGVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIHVwZGF0ZVxuICAgICpcbiAgICAqIEBldmVudCBhZnRlclVwZGF0ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYmVmb3JlIHJlbmRlcmluZ1xuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVSZW5kZXJcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICogQGRlcHJlY2F0ZWRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBhZnRlciByZW5kZXJpbmdcbiAgICAqXG4gICAgKiBAZXZlbnQgYWZ0ZXJSZW5kZXJcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICogQGRlcHJlY2F0ZWRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgd2hldGhlciB0aGUgcnVubmVyIGlzIHJ1bm5pbmcgb3Igbm90LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVuYWJsZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm9vbGVhbmAgdGhhdCBzcGVjaWZpZXMgaWYgdGhlIHJ1bm5lciBzaG91bGQgdXNlIGEgZml4ZWQgdGltZXN0ZXAgKG90aGVyd2lzZSBpdCBpcyB2YXJpYWJsZSkuXG4gICAgICogSWYgdGltaW5nIGlzIGZpeGVkLCB0aGVuIHRoZSBhcHBhcmVudCBzaW11bGF0aW9uIHNwZWVkIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGUgZnJhbWUgcmF0ZSAoYnV0IGJlaGF2aW91ciB3aWxsIGJlIGRldGVybWluaXN0aWMpLlxuICAgICAqIElmIHRoZSB0aW1pbmcgaXMgdmFyaWFibGUsIHRoZW4gdGhlIGFwcGFyZW50IHNpbXVsYXRpb24gc3BlZWQgd2lsbCBiZSBjb25zdGFudCAoYXBwcm94aW1hdGVseSwgYnV0IGF0IHRoZSBjb3N0IG9mIGRldGVybWluaW5pc20pLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzRml4ZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHRpbWUgc3RlcCBiZXR3ZWVuIHVwZGF0ZXMgaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqIElmIGBlbmdpbmUudGltaW5nLmlzRml4ZWRgIGlzIHNldCB0byBgdHJ1ZWAsIHRoZW4gYGRlbHRhYCBpcyBmaXhlZC5cbiAgICAgKiBJZiBpdCBpcyBgZmFsc2VgLCB0aGVuIGBkZWx0YWAgY2FuIGR5bmFtaWNhbGx5IGNoYW5nZSB0byBtYWludGFpbiB0aGUgY29ycmVjdCBhcHBhcmVudCBzaW11bGF0aW9uIHNwZWVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGRlbHRhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMTAwMCAvIDYwXG4gICAgICovXG5cbn0pKCk7XG5cbn0se1wiLi9Db21tb25cIjoxNCxcIi4vRW5naW5lXCI6MTUsXCIuL0V2ZW50c1wiOjE2fV0sMjI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyB0byBtYW5hZ2UgdGhlIHNsZWVwaW5nIHN0YXRlIG9mIGJvZGllcy5cbipcbiogQGNsYXNzIFNsZWVwaW5nXG4qL1xuXG52YXIgU2xlZXBpbmcgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGVlcGluZztcblxudmFyIEV2ZW50cyA9IF9kZXJlcV8oJy4vRXZlbnRzJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIFNsZWVwaW5nLl9tb3Rpb25XYWtlVGhyZXNob2xkID0gMC4xODtcbiAgICBTbGVlcGluZy5fbW90aW9uU2xlZXBUaHJlc2hvbGQgPSAwLjA4O1xuICAgIFNsZWVwaW5nLl9taW5CaWFzID0gMC45O1xuXG4gICAgLyoqXG4gICAgICogUHV0cyBib2RpZXMgdG8gc2xlZXAgb3Igd2FrZXMgdGhlbSB1cCBkZXBlbmRpbmcgb24gdGhlaXIgbW90aW9uLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBTbGVlcGluZy51cGRhdGUgPSBmdW5jdGlvbihib2RpZXMsIHRpbWVTY2FsZSkge1xuICAgICAgICB2YXIgdGltZUZhY3RvciA9IHRpbWVTY2FsZSAqIHRpbWVTY2FsZSAqIHRpbWVTY2FsZTtcblxuICAgICAgICAvLyB1cGRhdGUgYm9kaWVzIHNsZWVwaW5nIHN0YXR1c1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgbW90aW9uID0gYm9keS5zcGVlZCAqIGJvZHkuc3BlZWQgKyBib2R5LmFuZ3VsYXJTcGVlZCAqIGJvZHkuYW5ndWxhclNwZWVkO1xuXG4gICAgICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpZiB0aGV5IGhhdmUgYSBmb3JjZSBhcHBsaWVkXG4gICAgICAgICAgICBpZiAoYm9keS5mb3JjZS54ICE9PSAwIHx8IGJvZHkuZm9yY2UueSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtaW5Nb3Rpb24gPSBNYXRoLm1pbihib2R5Lm1vdGlvbiwgbW90aW9uKSxcbiAgICAgICAgICAgICAgICBtYXhNb3Rpb24gPSBNYXRoLm1heChib2R5Lm1vdGlvbiwgbW90aW9uKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyBiaWFzZWQgYXZlcmFnZSBtb3Rpb24gZXN0aW1hdGlvbiBiZXR3ZWVuIGZyYW1lc1xuICAgICAgICAgICAgYm9keS5tb3Rpb24gPSBTbGVlcGluZy5fbWluQmlhcyAqIG1pbk1vdGlvbiArICgxIC0gU2xlZXBpbmcuX21pbkJpYXMpICogbWF4TW90aW9uO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYm9keS5zbGVlcFRocmVzaG9sZCA+IDAgJiYgYm9keS5tb3Rpb24gPCBTbGVlcGluZy5fbW90aW9uU2xlZXBUaHJlc2hvbGQgKiB0aW1lRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9keS5zbGVlcENvdW50ZXIgPj0gYm9keS5zbGVlcFRocmVzaG9sZClcbiAgICAgICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChib2R5LnNsZWVwQ291bnRlciA+IDApIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgc2V0IG9mIGNvbGxpZGluZyBwYWlycywgd2FrZXMgdGhlIHNsZWVwaW5nIGJvZGllcyBpbnZvbHZlZC5cbiAgICAgKiBAbWV0aG9kIGFmdGVyQ29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU2NhbGVcbiAgICAgKi9cbiAgICBTbGVlcGluZy5hZnRlckNvbGxpc2lvbnMgPSBmdW5jdGlvbihwYWlycywgdGltZVNjYWxlKSB7XG4gICAgICAgIHZhciB0aW1lRmFjdG9yID0gdGltZVNjYWxlICogdGltZVNjYWxlICogdGltZVNjYWxlO1xuXG4gICAgICAgIC8vIHdha2UgdXAgYm9kaWVzIGludm9sdmVkIGluIGNvbGxpc2lvbnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZG9uJ3Qgd2FrZSBpbmFjdGl2ZSBwYWlyc1xuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb24sXG4gICAgICAgICAgICAgICAgYm9keUEgPSBjb2xsaXNpb24uYm9keUEucGFyZW50LCBcbiAgICAgICAgICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5Qi5wYXJlbnQ7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gZG9uJ3Qgd2FrZSBpZiBhdCBsZWFzdCBvbmUgYm9keSBpcyBzdGF0aWNcbiAgICAgICAgICAgIGlmICgoYm9keUEuaXNTbGVlcGluZyAmJiBib2R5Qi5pc1NsZWVwaW5nKSB8fCBib2R5QS5pc1N0YXRpYyB8fCBib2R5Qi5pc1N0YXRpYylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoYm9keUEuaXNTbGVlcGluZyB8fCBib2R5Qi5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsZWVwaW5nQm9keSA9IChib2R5QS5pc1NsZWVwaW5nICYmICFib2R5QS5pc1N0YXRpYykgPyBib2R5QSA6IGJvZHlCLFxuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdCb2R5ID0gc2xlZXBpbmdCb2R5ID09PSBib2R5QSA/IGJvZHlCIDogYm9keUE7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNsZWVwaW5nQm9keS5pc1N0YXRpYyAmJiBtb3ZpbmdCb2R5Lm1vdGlvbiA+IFNsZWVwaW5nLl9tb3Rpb25XYWtlVGhyZXNob2xkICogdGltZUZhY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoc2xlZXBpbmdCb2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgXG4gICAgLyoqXG4gICAgICogU2V0IGEgYm9keSBhcyBzbGVlcGluZyBvciBhd2FrZS5cbiAgICAgKiBAbWV0aG9kIHNldFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTbGVlcGluZ1xuICAgICAqL1xuICAgIFNsZWVwaW5nLnNldCA9IGZ1bmN0aW9uKGJvZHksIGlzU2xlZXBpbmcpIHtcbiAgICAgICAgdmFyIHdhc1NsZWVwaW5nID0gYm9keS5pc1NsZWVwaW5nO1xuXG4gICAgICAgIGlmIChpc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICBib2R5LmlzU2xlZXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgPSBib2R5LnNsZWVwVGhyZXNob2xkO1xuXG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uSW1wdWxzZS54ID0gMDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnkgPSAwO1xuXG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gYm9keS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGJvZHkucG9zaXRpb24ueTtcblxuICAgICAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlO1xuICAgICAgICAgICAgYm9keS5zcGVlZCA9IDA7XG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJTcGVlZCA9IDA7XG4gICAgICAgICAgICBib2R5Lm1vdGlvbiA9IDA7XG5cbiAgICAgICAgICAgIGlmICghd2FzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihib2R5LCAnc2xlZXBTdGFydCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keS5pc1NsZWVwaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciA9IDA7XG5cbiAgICAgICAgICAgIGlmICh3YXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGJvZHksICdzbGVlcEVuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuL0V2ZW50c1wiOjE2fV0sMjM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLkJvZGllc2AgbW9kdWxlIGNvbnRhaW5zIGZhY3RvcnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcgcmlnaWQgYm9keSBtb2RlbHMgXG4qIHdpdGggY29tbW9ubHkgdXNlZCBib2R5IGNvbmZpZ3VyYXRpb25zIChzdWNoIGFzIHJlY3RhbmdsZXMsIGNpcmNsZXMgYW5kIG90aGVyIHBvbHlnb25zKS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIEJvZGllc1xuKi9cblxuLy8gVE9ETzogdHJ1ZSBjaXJjbGUgYm9kaWVzXG5cbnZhciBCb2RpZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2RpZXM7XG5cbnZhciBWZXJ0aWNlcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlcnRpY2VzJyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcbnZhciBCb2R5ID0gX2RlcmVxXygnLi4vYm9keS9Cb2R5Jyk7XG52YXIgQm91bmRzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQm91bmRzJyk7XG52YXIgVmVjdG9yID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVjdG9yJyk7XG52YXIgZGVjb21wO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIHJlY3RhbmdsZSBodWxsLiBcbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBvZiB0aGUgYE1hdHRlci5Cb2R5YCBtb2R1bGUgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIHJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHJlY3RhbmdsZSBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnJlY3RhbmdsZSA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIHJlY3RhbmdsZSA9IHsgXG4gICAgICAgICAgICBsYWJlbDogJ1JlY3RhbmdsZSBCb2R5JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aCgnTCAwIDAgTCAnICsgd2lkdGggKyAnIDAgTCAnICsgd2lkdGggKyAnICcgKyBoZWlnaHQgKyAnIEwgMCAnICsgaGVpZ2h0KVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICAgICAgcmVjdGFuZ2xlLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcihyZWN0YW5nbGUudmVydGljZXMsIGNoYW1mZXIucmFkaXVzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1mZXIucXVhbGl0eSwgY2hhbWZlci5xdWFsaXR5TWluLCBjaGFtZmVyLnF1YWxpdHlNYXgpO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHt9LCByZWN0YW5nbGUsIG9wdGlvbnMpKTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbCB3aXRoIGEgdHJhcGV6b2lkIGh1bGwuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgdHJhcGV6b2lkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2xvcGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7Ym9keX0gQSBuZXcgdHJhcGV6b2lkIGJvZHlcbiAgICAgKi9cbiAgICBCb2RpZXMudHJhcGV6b2lkID0gZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgc2xvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgc2xvcGUgKj0gMC41O1xuICAgICAgICB2YXIgcm9vZiA9ICgxIC0gKHNsb3BlICogMikpICogd2lkdGg7XG4gICAgICAgIFxuICAgICAgICB2YXIgeDEgPSB3aWR0aCAqIHNsb3BlLFxuICAgICAgICAgICAgeDIgPSB4MSArIHJvb2YsXG4gICAgICAgICAgICB4MyA9IHgyICsgeDEsXG4gICAgICAgICAgICB2ZXJ0aWNlc1BhdGg7XG5cbiAgICAgICAgaWYgKHNsb3BlIDwgMC41KSB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1BhdGggPSAnTCAwIDAgTCAnICsgeDEgKyAnICcgKyAoLWhlaWdodCkgKyAnIEwgJyArIHgyICsgJyAnICsgKC1oZWlnaHQpICsgJyBMICcgKyB4MyArICcgMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1BhdGggPSAnTCAwIDAgTCAnICsgeDIgKyAnICcgKyAoLWhlaWdodCkgKyAnIEwgJyArIHgzICsgJyAwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFwZXpvaWQgPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdUcmFwZXpvaWQgQm9keScsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgodmVydGljZXNQYXRoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICAgICAgdHJhcGV6b2lkLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcih0cmFwZXpvaWQudmVydGljZXMsIGNoYW1mZXIucmFkaXVzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1mZXIucXVhbGl0eSwgY2hhbWZlci5xdWFsaXR5TWluLCBjaGFtZmVyLnF1YWxpdHlNYXgpO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHt9LCB0cmFwZXpvaWQsIG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSBjaXJjbGUgaHVsbC4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjaXJjbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1c1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFNpZGVzXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IGNpcmNsZSBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLmNpcmNsZSA9IGZ1bmN0aW9uKHgsIHksIHJhZGl1cywgb3B0aW9ucywgbWF4U2lkZXMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIGNpcmNsZSA9IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2lyY2xlIEJvZHknLFxuICAgICAgICAgICAgY2lyY2xlUmFkaXVzOiByYWRpdXNcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFwcHJveGltYXRlIGNpcmNsZXMgd2l0aCBwb2x5Z29ucyB1bnRpbCB0cnVlIGNpcmNsZXMgaW1wbGVtZW50ZWQgaW4gU0FUXG4gICAgICAgIG1heFNpZGVzID0gbWF4U2lkZXMgfHwgMjU7XG4gICAgICAgIHZhciBzaWRlcyA9IE1hdGguY2VpbChNYXRoLm1heCgxMCwgTWF0aC5taW4obWF4U2lkZXMsIHJhZGl1cykpKTtcblxuICAgICAgICAvLyBvcHRpbWlzYXRpb246IGFsd2F5cyB1c2UgZXZlbiBudW1iZXIgb2Ygc2lkZXMgKGhhbGYgdGhlIG51bWJlciBvZiB1bmlxdWUgYXhlcylcbiAgICAgICAgaWYgKHNpZGVzICUgMiA9PT0gMSlcbiAgICAgICAgICAgIHNpZGVzICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIEJvZGllcy5wb2x5Z29uKHgsIHksIHNpZGVzLCByYWRpdXMsIENvbW1vbi5leHRlbmQoe30sIGNpcmNsZSwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwgd2l0aCBhIHJlZ3VsYXIgcG9seWdvbiBodWxsIHdpdGggdGhlIGdpdmVuIG51bWJlciBvZiBzaWRlcy4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBwb2x5Z29uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWRlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7Ym9keX0gQSBuZXcgcmVndWxhciBwb2x5Z29uIGJvZHlcbiAgICAgKi9cbiAgICBCb2RpZXMucG9seWdvbiA9IGZ1bmN0aW9uKHgsIHksIHNpZGVzLCByYWRpdXMsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgaWYgKHNpZGVzIDwgMylcbiAgICAgICAgICAgIHJldHVybiBCb2RpZXMuY2lyY2xlKHgsIHksIHJhZGl1cywgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHRoZXRhID0gMiAqIE1hdGguUEkgLyBzaWRlcyxcbiAgICAgICAgICAgIHBhdGggPSAnJyxcbiAgICAgICAgICAgIG9mZnNldCA9IHRoZXRhICogMC41O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lkZXM7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGFuZ2xlID0gb2Zmc2V0ICsgKGkgKiB0aGV0YSksXG4gICAgICAgICAgICAgICAgeHggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXG4gICAgICAgICAgICAgICAgeXkgPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG5cbiAgICAgICAgICAgIHBhdGggKz0gJ0wgJyArIHh4LnRvRml4ZWQoMykgKyAnICcgKyB5eS50b0ZpeGVkKDMpICsgJyAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBvbHlnb24gPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdQb2x5Z29uIEJvZHknLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKHBhdGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhbWZlcikge1xuICAgICAgICAgICAgdmFyIGNoYW1mZXIgPSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgICAgICBwb2x5Z29uLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcihwb2x5Z29uLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgcG9seWdvbiwgb3B0aW9ucykpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYm9keSB1c2luZyB0aGUgc3VwcGxpZWQgdmVydGljZXMgKG9yIGFuIGFycmF5IGNvbnRhaW5pbmcgbXVsdGlwbGUgc2V0cyBvZiB2ZXJ0aWNlcykuXG4gICAgICogSWYgdGhlIHZlcnRpY2VzIGFyZSBjb252ZXgsIHRoZXkgd2lsbCBwYXNzIHRocm91Z2ggYXMgc3VwcGxpZWQuXG4gICAgICogT3RoZXJ3aXNlIGlmIHRoZSB2ZXJ0aWNlcyBhcmUgY29uY2F2ZSwgdGhleSB3aWxsIGJlIGRlY29tcG9zZWQgaWYgW3BvbHktZGVjb21wLmpzXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIGlzIGF2YWlsYWJsZS5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBwcm9jZXNzIGlzIG5vdCBndWFyYW50ZWVkIHRvIHN1cHBvcnQgY29tcGxleCBzZXRzIG9mIHZlcnRpY2VzIChlLmcuIHRob3NlIHdpdGggaG9sZXMgbWF5IGZhaWwpLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIGRlY29tcG9zaXRpb24gd2lsbCBkaXNjYXJkIGNvbGxpbmVhciBlZGdlcyAodG8gaW1wcm92ZSBwZXJmb3JtYW5jZSkuXG4gICAgICogSXQgY2FuIGFsc28gb3B0aW9uYWxseSBkaXNjYXJkIGFueSBwYXJ0cyB0aGF0IGhhdmUgYW4gYXJlYSBsZXNzIHRoYW4gYG1pbmltdW1BcmVhYC5cbiAgICAgKiBJZiB0aGUgdmVydGljZXMgY2FuIG5vdCBiZSBkZWNvbXBvc2VkLCB0aGUgcmVzdWx0IHdpbGwgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBjb252ZXggaHVsbC5cbiAgICAgKiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBgTWF0dGVyLkJvZHlgIHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgZnJvbVZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSBbW3ZlY3Rvcl1dIHZlcnRleFNldHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtib29sfSBbZmxhZ0ludGVybmFsPWZhbHNlXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmVtb3ZlQ29sbGluZWFyPTAuMDFdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttaW5pbXVtQXJlYT0xMF1cbiAgICAgKiBAcmV0dXJuIHtib2R5fVxuICAgICAqL1xuICAgIEJvZGllcy5mcm9tVmVydGljZXMgPSBmdW5jdGlvbih4LCB5LCB2ZXJ0ZXhTZXRzLCBvcHRpb25zLCBmbGFnSW50ZXJuYWwsIHJlbW92ZUNvbGxpbmVhciwgbWluaW11bUFyZWEpIHtcbiAgICAgICAgaWYgKCFkZWNvbXApIHtcbiAgICAgICAgICAgIGRlY29tcCA9IENvbW1vbi5fcmVxdWlyZUdsb2JhbCgnZGVjb21wJywgJ3BvbHktZGVjb21wJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYm9keSxcbiAgICAgICAgICAgIHBhcnRzLFxuICAgICAgICAgICAgaXNDb252ZXgsXG4gICAgICAgICAgICB2ZXJ0aWNlcyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIHYsXG4gICAgICAgICAgICB6O1xuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBwYXJ0cyA9IFtdO1xuXG4gICAgICAgIGZsYWdJbnRlcm5hbCA9IHR5cGVvZiBmbGFnSW50ZXJuYWwgIT09ICd1bmRlZmluZWQnID8gZmxhZ0ludGVybmFsIDogZmFsc2U7XG4gICAgICAgIHJlbW92ZUNvbGxpbmVhciA9IHR5cGVvZiByZW1vdmVDb2xsaW5lYXIgIT09ICd1bmRlZmluZWQnID8gcmVtb3ZlQ29sbGluZWFyIDogMC4wMTtcbiAgICAgICAgbWluaW11bUFyZWEgPSB0eXBlb2YgbWluaW11bUFyZWEgIT09ICd1bmRlZmluZWQnID8gbWluaW11bUFyZWEgOiAxMDtcblxuICAgICAgICBpZiAoIWRlY29tcCkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ0JvZGllcy5mcm9tVmVydGljZXM6IHBvbHktZGVjb21wLmpzIHJlcXVpcmVkLiBDb3VsZCBub3QgZGVjb21wb3NlIHZlcnRpY2VzLiBGYWxsYmFjayB0byBjb252ZXggaHVsbC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuc3VyZSB2ZXJ0ZXhTZXRzIGlzIGFuIGFycmF5IG9mIGFycmF5c1xuICAgICAgICBpZiAoIUNvbW1vbi5pc0FycmF5KHZlcnRleFNldHNbMF0pKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTZXRzID0gW3ZlcnRleFNldHNdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2ID0gMDsgdiA8IHZlcnRleFNldHMubGVuZ3RoOyB2ICs9IDEpIHtcbiAgICAgICAgICAgIHZlcnRpY2VzID0gdmVydGV4U2V0c1t2XTtcbiAgICAgICAgICAgIGlzQ29udmV4ID0gVmVydGljZXMuaXNDb252ZXgodmVydGljZXMpO1xuXG4gICAgICAgICAgICBpZiAoaXNDb252ZXggfHwgIWRlY29tcCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbnZleCkge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlcyA9IFZlcnRpY2VzLmNsb2Nrd2lzZVNvcnQodmVydGljZXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIHRvIGNvbnZleCBodWxsIHdoZW4gZGVjb21wb3NpdGlvbiBpcyBub3QgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXMgPSBWZXJ0aWNlcy5odWxsKHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHsgeDogeCwgeTogeSB9LFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlczogdmVydGljZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGlzZSBhIGRlY29tcG9zaXRpb25cbiAgICAgICAgICAgICAgICB2YXIgY29uY2F2ZSA9IHZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt2ZXJ0ZXgueCwgdmVydGV4LnldO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gdmVydGljZXMgYXJlIGNvbmNhdmUgYW5kIHNpbXBsZSwgd2UgY2FuIGRlY29tcG9zZSBpbnRvIHBhcnRzXG4gICAgICAgICAgICAgICAgZGVjb21wLm1ha2VDQ1coY29uY2F2ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZUNvbGxpbmVhciAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIGRlY29tcC5yZW1vdmVDb2xsaW5lYXJQb2ludHMoY29uY2F2ZSwgcmVtb3ZlQ29sbGluZWFyKTtcblxuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgcXVpY2sgZGVjb21wb3NpdGlvbiBhbGdvcml0aG0gKEJheWF6aXQpXG4gICAgICAgICAgICAgICAgdmFyIGRlY29tcG9zZWQgPSBkZWNvbXAucXVpY2tEZWNvbXAoY29uY2F2ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBkZWNvbXBvc2VkIGNodW5rXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRlY29tcG9zZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNodW5rID0gZGVjb21wb3NlZFtpXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHZlcnRpY2VzIGludG8gdGhlIGNvcnJlY3Qgc3RydWN0dXJlXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaHVua1ZlcnRpY2VzID0gY2h1bmsubWFwKGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHZlcnRpY2VzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHZlcnRpY2VzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIHNtYWxsIGNodW5rc1xuICAgICAgICAgICAgICAgICAgICBpZiAobWluaW11bUFyZWEgPiAwICYmIFZlcnRpY2VzLmFyZWEoY2h1bmtWZXJ0aWNlcykgPCBtaW5pbXVtQXJlYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGNvbXBvdW5kIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogVmVydGljZXMuY2VudHJlKGNodW5rVmVydGljZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljZXM6IGNodW5rVmVydGljZXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIGJvZHkgcGFydHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXJ0c1tpXSA9IEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQocGFydHNbaV0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZsYWcgaW50ZXJuYWwgZWRnZXMgKGNvaW5jaWRlbnQgcGFydCBlZGdlcylcbiAgICAgICAgaWYgKGZsYWdJbnRlcm5hbCkge1xuICAgICAgICAgICAgdmFyIGNvaW5jaWRlbnRfbWF4X2Rpc3QgPSA1O1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydEEgPSBwYXJ0c1tpXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRCID0gcGFydHNbal07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5vdmVybGFwcyhwYXJ0QS5ib3VuZHMsIHBhcnRCLmJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXYgPSBwYXJ0QS52ZXJ0aWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYnYgPSBwYXJ0Qi52ZXJ0aWNlcztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSB2ZXJ0aWNlcyBvZiBib3RoIHBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcGFydEEudmVydGljZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHogPSAwOyB6IDwgcGFydEIudmVydGljZXMubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBkaXN0YW5jZXMgYmV0d2VlbiB0aGUgdmVydGljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhID0gVmVjdG9yLm1hZ25pdHVkZVNxdWFyZWQoVmVjdG9yLnN1YihwYXZbKGsgKyAxKSAlIHBhdi5sZW5ndGhdLCBwYnZbel0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiID0gVmVjdG9yLm1hZ25pdHVkZVNxdWFyZWQoVmVjdG9yLnN1YihwYXZba10sIHBidlsoeiArIDEpICUgcGJ2Lmxlbmd0aF0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBib3RoIHZlcnRpY2VzIGFyZSB2ZXJ5IGNsb3NlLCBjb25zaWRlciB0aGUgZWRnZSBjb25jaWRlbnQgKGludGVybmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGEgPCBjb2luY2lkZW50X21heF9kaXN0ICYmIGRiIDwgY29pbmNpZGVudF9tYXhfZGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF2W2tdLmlzSW50ZXJuYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGJ2W3pdLmlzSW50ZXJuYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBwYXJlbnQgYm9keSB0byBiZSByZXR1cm5lZCwgdGhhdCBjb250YWlucyBnZW5lcmF0ZWQgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGJvZHkgPSBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgcGFydHM6IHBhcnRzLnNsaWNlKDApIH0sIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwgeyB4OiB4LCB5OiB5IH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi4vYm9keS9Cb2R5XCI6MSxcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuLi9nZW9tZXRyeS9Cb3VuZHNcIjoyNixcIi4uL2dlb21ldHJ5L1ZlY3RvclwiOjI4LFwiLi4vZ2VvbWV0cnkvVmVydGljZXNcIjoyOX1dLDI0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5Db21wb3NpdGVzYCBtb2R1bGUgY29udGFpbnMgZmFjdG9yeSBtZXRob2RzIGZvciBjcmVhdGluZyBjb21wb3NpdGUgYm9kaWVzXG4qIHdpdGggY29tbW9ubHkgdXNlZCBjb25maWd1cmF0aW9ucyAoc3VjaCBhcyBzdGFja3MgYW5kIGNoYWlucykuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBDb21wb3NpdGVzXG4qL1xuXG52YXIgQ29tcG9zaXRlcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvc2l0ZXM7XG5cbnZhciBDb21wb3NpdGUgPSBfZGVyZXFfKCcuLi9ib2R5L0NvbXBvc2l0ZScpO1xudmFyIENvbnN0cmFpbnQgPSBfZGVyZXFfKCcuLi9jb25zdHJhaW50L0NvbnN0cmFpbnQnKTtcbnZhciBDb21tb24gPSBfZGVyZXFfKCcuLi9jb3JlL0NvbW1vbicpO1xudmFyIEJvZHkgPSBfZGVyZXFfKCcuLi9ib2R5L0JvZHknKTtcbnZhciBCb2RpZXMgPSBfZGVyZXFfKCcuL0JvZGllcycpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgYm9kaWVzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrIGluIGEgZ3JpZCBhcnJhbmdlbWVudC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHVzZXMgdGhlIGJvZHkncyBib3VuZHMgdG8gcHJldmVudCBvdmVybGFwcy5cbiAgICAgKiBAbWV0aG9kIHN0YWNrXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5HYXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93R2FwXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIG9iamVjdHMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLnN0YWNrID0gZnVuY3Rpb24oeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN0YWNrID0gQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnU3RhY2snIH0pLFxuICAgICAgICAgICAgeCA9IHh4LFxuICAgICAgICAgICAgeSA9IHl5LFxuICAgICAgICAgICAgbGFzdEJvZHksXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICAgICAgdmFyIG1heEhlaWdodCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBjYWxsYmFjayh4LCB5LCBjb2x1bW4sIHJvdywgbGFzdEJvZHksIGkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keUhlaWdodCA9IGJvZHkuYm91bmRzLm1heC55IC0gYm9keS5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5V2lkdGggPSBib2R5LmJvdW5kcy5tYXgueCAtIGJvZHkuYm91bmRzLm1pbi54OyBcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keUhlaWdodCA+IG1heEhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IGJvZHlIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShib2R5LCB7IHg6IGJvZHlXaWR0aCAqIDAuNSwgeTogYm9keUhlaWdodCAqIDAuNSB9KTtcblxuICAgICAgICAgICAgICAgICAgICB4ID0gYm9keS5ib3VuZHMubWF4LnggKyBjb2x1bW5HYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoc3RhY2ssIGJvZHkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGFzdEJvZHkgPSBib2R5O1xuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgeCArPSBjb2x1bW5HYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB5ICs9IG1heEhlaWdodCArIHJvd0dhcDtcbiAgICAgICAgICAgIHggPSB4eDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFjaztcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENoYWlucyBhbGwgYm9kaWVzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUgdG9nZXRoZXIgdXNpbmcgY29uc3RyYWludHMuXG4gICAgICogQG1ldGhvZCBjaGFpblxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geE9mZnNldEFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geU9mZnNldEFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geE9mZnNldEJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geU9mZnNldEJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBjaGFpbmVkIHRvZ2V0aGVyIHdpdGggY29uc3RyYWludHNcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLmNoYWluID0gZnVuY3Rpb24oY29tcG9zaXRlLCB4T2Zmc2V0QSwgeU9mZnNldEEsIHhPZmZzZXRCLCB5T2Zmc2V0Qiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcztcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaSAtIDFdLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGJvZHlBSGVpZ2h0ID0gYm9keUEuYm91bmRzLm1heC55IC0gYm9keUEuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvZHlBV2lkdGggPSBib2R5QS5ib3VuZHMubWF4LnggLSBib2R5QS5ib3VuZHMubWluLngsIFxuICAgICAgICAgICAgICAgIGJvZHlCSGVpZ2h0ID0gYm9keUIuYm91bmRzLm1heC55IC0gYm9keUIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvZHlCV2lkdGggPSBib2R5Qi5ib3VuZHMubWF4LnggLSBib2R5Qi5ib3VuZHMubWluLng7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGJvZHlBOiBib2R5QSxcbiAgICAgICAgICAgICAgICBwb2ludEE6IHsgeDogYm9keUFXaWR0aCAqIHhPZmZzZXRBLCB5OiBib2R5QUhlaWdodCAqIHlPZmZzZXRBIH0sXG4gICAgICAgICAgICAgICAgYm9keUI6IGJvZHlCLFxuICAgICAgICAgICAgICAgIHBvaW50QjogeyB4OiBib2R5QldpZHRoICogeE9mZnNldEIsIHk6IGJvZHlCSGVpZ2h0ICogeU9mZnNldEIgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgXG4gICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKGNvbnN0cmFpbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvc2l0ZS5sYWJlbCArPSAnIENoYWluJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbm5lY3RzIGJvZGllcyBpbiB0aGUgY29tcG9zaXRlIHdpdGggY29uc3RyYWludHMgaW4gYSBncmlkIHBhdHRlcm4sIHdpdGggb3B0aW9uYWwgY3Jvc3MgYnJhY2VzLlxuICAgICAqIEBtZXRob2QgbWVzaFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjcm9zc0JyYWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIG1lc2hlZCB0b2dldGhlciB3aXRoIGNvbnN0cmFpbnRzXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5tZXNoID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb2x1bW5zLCByb3dzLCBjcm9zc0JyYWNlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSBjb21wb3NpdGUuYm9kaWVzLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgY29sLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGJvZHlDO1xuICAgICAgICBcbiAgICAgICAgZm9yIChyb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChjb2wgPSAxOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGJvZHlBID0gYm9kaWVzWyhjb2wgLSAxKSArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgYm9keUIgPSBib2RpZXNbY29sICsgKHJvdyAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKENvbW1vbi5leHRlbmQoeyBib2R5QTogYm9keUEsIGJvZHlCOiBib2R5QiB9LCBvcHRpb25zKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm93ID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUEgPSBib2RpZXNbY29sICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgYm9keUIgPSBib2RpZXNbY29sICsgKHJvdyAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlBLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Jvc3NCcmFjZSAmJiBjb2wgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QyA9IGJvZGllc1soY29sIC0gMSkgKyAoKHJvdyAtIDEpICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlDLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcm9zc0JyYWNlICYmIGNvbCA8IGNvbHVtbnMgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QyA9IGJvZGllc1soY29sICsgMSkgKyAoKHJvdyAtIDEpICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlDLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvc2l0ZS5sYWJlbCArPSAnIE1lc2gnO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBib2RpZXMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2sgaW4gYSBweXJhbWlkIGFycmFuZ2VtZW50LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXNlcyB0aGUgYm9keSdzIGJvdW5kcyB0byBwcmV2ZW50IG92ZXJsYXBzLlxuICAgICAqIEBtZXRob2QgcHlyYW1pZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uR2FwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0dhcFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIGNyZWF0ZWQgaW4gdGhlIGNhbGxiYWNrXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5weXJhbWlkID0gZnVuY3Rpb24oeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIENvbXBvc2l0ZXMuc3RhY2soeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgZnVuY3Rpb24oeCwgeSwgY29sdW1uLCByb3csIGxhc3RCb2R5LCBpKSB7XG4gICAgICAgICAgICB2YXIgYWN0dWFsUm93cyA9IE1hdGgubWluKHJvd3MsIE1hdGguY2VpbChjb2x1bW5zIC8gMikpLFxuICAgICAgICAgICAgICAgIGxhc3RCb2R5V2lkdGggPSBsYXN0Qm9keSA/IGxhc3RCb2R5LmJvdW5kcy5tYXgueCAtIGxhc3RCb2R5LmJvdW5kcy5taW4ueCA6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyb3cgPiBhY3R1YWxSb3dzKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcmV2ZXJzZSByb3cgb3JkZXJcbiAgICAgICAgICAgIHJvdyA9IGFjdHVhbFJvd3MgLSByb3c7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHJvdyxcbiAgICAgICAgICAgICAgICBlbmQgPSBjb2x1bW5zIC0gMSAtIHJvdztcblxuICAgICAgICAgICAgaWYgKGNvbHVtbiA8IHN0YXJ0IHx8IGNvbHVtbiA+IGVuZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJldHJvYWN0aXZlbHkgZml4IHRoZSBmaXJzdCBib2R5J3MgcG9zaXRpb24sIHNpbmNlIHdpZHRoIHdhcyB1bmtub3duXG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIEJvZHkudHJhbnNsYXRlKGxhc3RCb2R5LCB7IHg6IChjb2x1bW4gKyAoY29sdW1ucyAlIDIgPT09IDEgPyAxIDogLTEpKSAqIGxhc3RCb2R5V2lkdGgsIHk6IDAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB4T2Zmc2V0ID0gbGFzdEJvZHkgPyBjb2x1bW4gKiBsYXN0Qm9keVdpZHRoIDogMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHh4ICsgeE9mZnNldCArIGNvbHVtbiAqIGNvbHVtbkdhcCwgeSwgY29sdW1uLCByb3csIGxhc3RCb2R5LCBpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb21wb3NpdGUgd2l0aCBhIE5ld3RvbidzIENyYWRsZSBzZXR1cCBvZiBib2RpZXMgYW5kIGNvbnN0cmFpbnRzLlxuICAgICAqIEBtZXRob2QgbmV3dG9uc0NyYWRsZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4eFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBuZXd0b25zQ3JhZGxlIGJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLm5ld3RvbnNDcmFkbGUgPSBmdW5jdGlvbih4eCwgeXksIG51bWJlciwgc2l6ZSwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXd0b25zQ3JhZGxlID0gQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnTmV3dG9ucyBDcmFkbGUnIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0aW9uID0gMS45LFxuICAgICAgICAgICAgICAgIGNpcmNsZSA9IEJvZGllcy5jaXJjbGUoeHggKyBpICogKHNpemUgKiBzZXBhcmF0aW9uKSwgeXkgKyBsZW5ndGgsIHNpemUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaW5lcnRpYTogSW5maW5pdHksIHJlc3RpdHV0aW9uOiAxLCBmcmljdGlvbjogMCwgZnJpY3Rpb25BaXI6IDAuMDAwMSwgc2xvcDogMSB9KSxcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50ID0gQ29uc3RyYWludC5jcmVhdGUoeyBwb2ludEE6IHsgeDogeHggKyBpICogKHNpemUgKiBzZXBhcmF0aW9uKSwgeTogeXkgfSwgYm9keUI6IGNpcmNsZSB9KTtcblxuICAgICAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkobmV3dG9uc0NyYWRsZSwgY2lyY2xlKTtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KG5ld3RvbnNDcmFkbGUsIGNvbnN0cmFpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld3RvbnNDcmFkbGU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29tcG9zaXRlIHdpdGggc2ltcGxlIGNhciBzZXR1cCBvZiBib2RpZXMgYW5kIGNvbnN0cmFpbnRzLlxuICAgICAqIEBtZXRob2QgY2FyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHh4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHl5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aGVlbFNpemVcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjYXIgYm9keVxuICAgICAqL1xuICAgIENvbXBvc2l0ZXMuY2FyID0gZnVuY3Rpb24oeHgsIHl5LCB3aWR0aCwgaGVpZ2h0LCB3aGVlbFNpemUpIHtcbiAgICAgICAgdmFyIGdyb3VwID0gQm9keS5uZXh0R3JvdXAodHJ1ZSksXG4gICAgICAgICAgICB3aGVlbEJhc2UgPSAyMCxcbiAgICAgICAgICAgIHdoZWVsQU9mZnNldCA9IC13aWR0aCAqIDAuNSArIHdoZWVsQmFzZSxcbiAgICAgICAgICAgIHdoZWVsQk9mZnNldCA9IHdpZHRoICogMC41IC0gd2hlZWxCYXNlLFxuICAgICAgICAgICAgd2hlZWxZT2Zmc2V0ID0gMDtcbiAgICBcbiAgICAgICAgdmFyIGNhciA9IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ0NhcicgfSksXG4gICAgICAgICAgICBib2R5ID0gQm9kaWVzLnJlY3RhbmdsZSh4eCwgeXksIHdpZHRoLCBoZWlnaHQsIHsgXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiBncm91cFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhbWZlcjoge1xuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IGhlaWdodCAqIDAuNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVuc2l0eTogMC4wMDAyXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgdmFyIHdoZWVsQSA9IEJvZGllcy5jaXJjbGUoeHggKyB3aGVlbEFPZmZzZXQsIHl5ICsgd2hlZWxZT2Zmc2V0LCB3aGVlbFNpemUsIHsgXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmljdGlvbjogMC44XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIHdoZWVsQiA9IEJvZGllcy5jaXJjbGUoeHggKyB3aGVlbEJPZmZzZXQsIHl5ICsgd2hlZWxZT2Zmc2V0LCB3aGVlbFNpemUsIHsgXG4gICAgICAgICAgICBjb2xsaXNpb25GaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmljdGlvbjogMC44XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIGF4ZWxBID0gQ29uc3RyYWludC5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keUI6IGJvZHksXG4gICAgICAgICAgICBwb2ludEI6IHsgeDogd2hlZWxBT2Zmc2V0LCB5OiB3aGVlbFlPZmZzZXQgfSxcbiAgICAgICAgICAgIGJvZHlBOiB3aGVlbEEsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICBsZW5ndGg6IDBcbiAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIGF4ZWxCID0gQ29uc3RyYWludC5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keUI6IGJvZHksXG4gICAgICAgICAgICBwb2ludEI6IHsgeDogd2hlZWxCT2Zmc2V0LCB5OiB3aGVlbFlPZmZzZXQgfSxcbiAgICAgICAgICAgIGJvZHlBOiB3aGVlbEIsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICBsZW5ndGg6IDBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjYXIsIGJvZHkpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjYXIsIHdoZWVsQSk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNhciwgd2hlZWxCKTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY2FyLCBheGVsQSk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KGNhciwgYXhlbEIpO1xuXG4gICAgICAgIHJldHVybiBjYXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzaW1wbGUgc29mdCBib2R5IGxpa2Ugb2JqZWN0LlxuICAgICAqIEBtZXRob2Qgc29mdEJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geXlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkdhcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dHYXBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNyb3NzQnJhY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFydGljbGVSYWRpdXNcbiAgICAgKiBAcGFyYW0ge30gcGFydGljbGVPcHRpb25zXG4gICAgICogQHBhcmFtIHt9IGNvbnN0cmFpbnRPcHRpb25zXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgc29mdEJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLnNvZnRCb2R5ID0gZnVuY3Rpb24oeHgsIHl5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY3Jvc3NCcmFjZSwgcGFydGljbGVSYWRpdXMsIHBhcnRpY2xlT3B0aW9ucywgY29uc3RyYWludE9wdGlvbnMpIHtcbiAgICAgICAgcGFydGljbGVPcHRpb25zID0gQ29tbW9uLmV4dGVuZCh7IGluZXJ0aWE6IEluZmluaXR5IH0sIHBhcnRpY2xlT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0cmFpbnRPcHRpb25zID0gQ29tbW9uLmV4dGVuZCh7IHN0aWZmbmVzczogMC4yLCByZW5kZXI6IHsgdHlwZTogJ2xpbmUnLCBhbmNob3JzOiBmYWxzZSB9IH0sIGNvbnN0cmFpbnRPcHRpb25zKTtcblxuICAgICAgICB2YXIgc29mdEJvZHkgPSBDb21wb3NpdGVzLnN0YWNrKHh4LCB5eSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiBCb2RpZXMuY2lyY2xlKHgsIHksIHBhcnRpY2xlUmFkaXVzLCBwYXJ0aWNsZU9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBDb21wb3NpdGVzLm1lc2goc29mdEJvZHksIGNvbHVtbnMsIHJvd3MsIGNyb3NzQnJhY2UsIGNvbnN0cmFpbnRPcHRpb25zKTtcblxuICAgICAgICBzb2Z0Qm9keS5sYWJlbCA9ICdTb2Z0IEJvZHknO1xuXG4gICAgICAgIHJldHVybiBzb2Z0Qm9keTtcbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4uL2JvZHkvQm9keVwiOjEsXCIuLi9ib2R5L0NvbXBvc2l0ZVwiOjIsXCIuLi9jb25zdHJhaW50L0NvbnN0cmFpbnRcIjoxMixcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuL0JvZGllc1wiOjIzfV0sMjU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLkF4ZXNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHNldHMgb2YgYXhlcy5cbipcbiogQGNsYXNzIEF4ZXNcbiovXG5cbnZhciBBeGVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQXhlcztcblxudmFyIFZlY3RvciA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlY3RvcicpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgc2V0IG9mIGF4ZXMgZnJvbSB0aGUgZ2l2ZW4gdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBmcm9tVmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge2F4ZXN9IEEgbmV3IGF4ZXMgZnJvbSB0aGUgZ2l2ZW4gdmVydGljZXNcbiAgICAgKi9cbiAgICBBeGVzLmZyb21WZXJ0aWNlcyA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBheGVzID0ge307XG5cbiAgICAgICAgLy8gZmluZCB0aGUgdW5pcXVlIGF4ZXMsIHVzaW5nIGVkZ2Ugbm9ybWFsIGdyYWRpZW50c1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaiA9IChpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGgsIFxuICAgICAgICAgICAgICAgIG5vcm1hbCA9IFZlY3Rvci5ub3JtYWxpc2UoeyBcbiAgICAgICAgICAgICAgICAgICAgeDogdmVydGljZXNbal0ueSAtIHZlcnRpY2VzW2ldLnksIFxuICAgICAgICAgICAgICAgICAgICB5OiB2ZXJ0aWNlc1tpXS54IC0gdmVydGljZXNbal0ueFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGdyYWRpZW50ID0gKG5vcm1hbC55ID09PSAwKSA/IEluZmluaXR5IDogKG5vcm1hbC54IC8gbm9ybWFsLnkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBsaW1pdCBwcmVjaXNpb25cbiAgICAgICAgICAgIGdyYWRpZW50ID0gZ3JhZGllbnQudG9GaXhlZCgzKS50b1N0cmluZygpO1xuICAgICAgICAgICAgYXhlc1tncmFkaWVudF0gPSBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ29tbW9uLnZhbHVlcyhheGVzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyBhIHNldCBvZiBheGVzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7YXhlc30gYXhlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqL1xuICAgIEF4ZXMucm90YXRlID0gZnVuY3Rpb24oYXhlcywgYW5nbGUpIHtcbiAgICAgICAgaWYgKGFuZ2xlID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1tpXSxcbiAgICAgICAgICAgICAgICB4eDtcbiAgICAgICAgICAgIHh4ID0gYXhpcy54ICogY29zIC0gYXhpcy55ICogc2luO1xuICAgICAgICAgICAgYXhpcy55ID0gYXhpcy54ICogc2luICsgYXhpcy55ICogY29zO1xuICAgICAgICAgICAgYXhpcy54ID0geHg7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG59LHtcIi4uL2NvcmUvQ29tbW9uXCI6MTQsXCIuLi9nZW9tZXRyeS9WZWN0b3JcIjoyOH1dLDI2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5Cb3VuZHNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGF4aXMtYWxpZ25lZCBib3VuZGluZyBib3hlcyAoQUFCQikuXG4qXG4qIEBjbGFzcyBCb3VuZHNcbiovXG5cbnZhciBCb3VuZHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgYXhpcy1hbGlnbmVkIGJvdW5kaW5nIGJveCAoQUFCQikgZm9yIHRoZSBnaXZlbiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7Ym91bmRzfSBBIG5ldyBib3VuZHMgb2JqZWN0XG4gICAgICovXG4gICAgQm91bmRzLmNyZWF0ZSA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBib3VuZHMgPSB7IFxuICAgICAgICAgICAgbWluOiB7IHg6IDAsIHk6IDAgfSwgXG4gICAgICAgICAgICBtYXg6IHsgeDogMCwgeTogMCB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZlcnRpY2VzKVxuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShib3VuZHMsIHZlcnRpY2VzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYm91bmRzIHVzaW5nIHRoZSBnaXZlbiB2ZXJ0aWNlcyBhbmQgZXh0ZW5kcyB0aGUgYm91bmRzIGdpdmVuIGEgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb3VuZHMudXBkYXRlID0gZnVuY3Rpb24oYm91bmRzLCB2ZXJ0aWNlcywgdmVsb2NpdHkpIHtcbiAgICAgICAgYm91bmRzLm1pbi54ID0gSW5maW5pdHk7XG4gICAgICAgIGJvdW5kcy5tYXgueCA9IC1JbmZpbml0eTtcbiAgICAgICAgYm91bmRzLm1pbi55ID0gSW5maW5pdHk7XG4gICAgICAgIGJvdW5kcy5tYXgueSA9IC1JbmZpbml0eTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBpZiAodmVydGV4LnggPiBib3VuZHMubWF4LngpIGJvdW5kcy5tYXgueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgaWYgKHZlcnRleC54IDwgYm91bmRzLm1pbi54KSBib3VuZHMubWluLnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueSA+IGJvdW5kcy5tYXgueSkgYm91bmRzLm1heC55ID0gdmVydGV4Lnk7XG4gICAgICAgICAgICBpZiAodmVydGV4LnkgPCBib3VuZHMubWluLnkpIGJvdW5kcy5taW4ueSA9IHZlcnRleC55O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodmVsb2NpdHkpIHtcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eS54ID4gMCkge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueCArPSB2ZWxvY2l0eS54O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWluLnggKz0gdmVsb2NpdHkueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1heC55ICs9IHZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueSArPSB2ZWxvY2l0eS55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYm91bmRzIGNvbnRhaW5zIHRoZSBnaXZlbiBwb2ludC5cbiAgICAgKiBAbWV0aG9kIGNvbnRhaW5zXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGJvdW5kcyBjb250YWluIHRoZSBwb2ludCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQm91bmRzLmNvbnRhaW5zID0gZnVuY3Rpb24oYm91bmRzLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA+PSBib3VuZHMubWluLnggJiYgcG9pbnQueCA8PSBib3VuZHMubWF4LnggXG4gICAgICAgICAgICAgICAmJiBwb2ludC55ID49IGJvdW5kcy5taW4ueSAmJiBwb2ludC55IDw9IGJvdW5kcy5tYXgueTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gYm91bmRzIGludGVyc2VjdC5cbiAgICAgKiBAbWV0aG9kIG92ZXJsYXBzXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc0FcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzQlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGJvdW5kcyBvdmVybGFwLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBCb3VuZHMub3ZlcmxhcHMgPSBmdW5jdGlvbihib3VuZHNBLCBib3VuZHNCKSB7XG4gICAgICAgIHJldHVybiAoYm91bmRzQS5taW4ueCA8PSBib3VuZHNCLm1heC54ICYmIGJvdW5kc0EubWF4LnggPj0gYm91bmRzQi5taW4ueFxuICAgICAgICAgICAgICAgICYmIGJvdW5kc0EubWF4LnkgPj0gYm91bmRzQi5taW4ueSAmJiBib3VuZHNBLm1pbi55IDw9IGJvdW5kc0IubWF4LnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIHRoZSBib3VuZHMgYnkgdGhlIGdpdmVuIHZlY3Rvci5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICovXG4gICAgQm91bmRzLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGJvdW5kcywgdmVjdG9yKSB7XG4gICAgICAgIGJvdW5kcy5taW4ueCArPSB2ZWN0b3IueDtcbiAgICAgICAgYm91bmRzLm1heC54ICs9IHZlY3Rvci54O1xuICAgICAgICBib3VuZHMubWluLnkgKz0gdmVjdG9yLnk7XG4gICAgICAgIGJvdW5kcy5tYXgueSArPSB2ZWN0b3IueTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hpZnRzIHRoZSBib3VuZHMgdG8gdGhlIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqIEBtZXRob2Qgc2hpZnRcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uXG4gICAgICovXG4gICAgQm91bmRzLnNoaWZ0ID0gZnVuY3Rpb24oYm91bmRzLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgZGVsdGFYID0gYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54LFxuICAgICAgICAgICAgZGVsdGFZID0gYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55O1xuICAgICAgICAgICAgXG4gICAgICAgIGJvdW5kcy5taW4ueCA9IHBvc2l0aW9uLng7XG4gICAgICAgIGJvdW5kcy5tYXgueCA9IHBvc2l0aW9uLnggKyBkZWx0YVg7XG4gICAgICAgIGJvdW5kcy5taW4ueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIGJvdW5kcy5tYXgueSA9IHBvc2l0aW9uLnkgKyBkZWx0YVk7XG4gICAgfTtcbiAgICBcbn0pKCk7XG5cbn0se31dLDI3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qKlxuKiBUaGUgYE1hdHRlci5TdmdgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjb252ZXJ0aW5nIFNWRyBpbWFnZXMgaW50byBhbiBhcnJheSBvZiB2ZWN0b3IgcG9pbnRzLlxuKlxuKiBUbyB1c2UgdGhpcyBtb2R1bGUgeW91IGFsc28gbmVlZCB0aGUgU1ZHUGF0aFNlZyBwb2x5ZmlsbDogaHR0cHM6Ly9naXRodWIuY29tL3Byb2dlcnMvcGF0aHNlZ1xuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgU3ZnXG4qL1xuXG52YXIgU3ZnID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gU3ZnO1xuXG52YXIgQm91bmRzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQm91bmRzJyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYW4gU1ZHIHBhdGggaW50byBhbiBhcnJheSBvZiB2ZWN0b3IgcG9pbnRzLlxuICAgICAqIElmIHRoZSBpbnB1dCBwYXRoIGZvcm1zIGEgY29uY2F2ZSBzaGFwZSwgeW91IG11c3QgZGVjb21wb3NlIHRoZSByZXN1bHQgaW50byBjb252ZXggcGFydHMgYmVmb3JlIHVzZS5cbiAgICAgKiBTZWUgYEJvZGllcy5mcm9tVmVydGljZXNgIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnQgZm9yIHRoaXMuXG4gICAgICogTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IGd1YXJhbnRlZWQgdG8gc3VwcG9ydCBjb21wbGV4IHBhdGhzIChzdWNoIGFzIHRob3NlIHdpdGggaG9sZXMpLlxuICAgICAqIFlvdSBtdXN0IGxvYWQgdGhlIGBwYXRoc2VnLmpzYCBwb2x5ZmlsbCBvbiBuZXdlciBicm93c2Vycy5cbiAgICAgKiBAbWV0aG9kIHBhdGhUb1ZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtTVkdQYXRoRWxlbWVudH0gcGF0aFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc2FtcGxlTGVuZ3RoPTE1XVxuICAgICAqIEByZXR1cm4ge1ZlY3RvcltdfSBwb2ludHNcbiAgICAgKi9cbiAgICBTdmcucGF0aFRvVmVydGljZXMgPSBmdW5jdGlvbihwYXRoLCBzYW1wbGVMZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEoJ1NWR1BhdGhTZWcnIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdTdmcucGF0aFRvVmVydGljZXM6IFNWR1BhdGhTZWcgbm90IGRlZmluZWQsIGEgcG9seWZpbGwgaXMgcmVxdWlyZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd291dC9zdmcudG9wb2x5LmpzL2Jsb2IvbWFzdGVyL3N2Zy50b3BvbHkuanNcbiAgICAgICAgdmFyIGksIGlsLCB0b3RhbCwgcG9pbnQsIHNlZ21lbnQsIHNlZ21lbnRzLCBcbiAgICAgICAgICAgIHNlZ21lbnRzUXVldWUsIGxhc3RTZWdtZW50LCBcbiAgICAgICAgICAgIGxhc3RQb2ludCwgc2VnbWVudEluZGV4LCBwb2ludHMgPSBbXSxcbiAgICAgICAgICAgIGx4LCBseSwgbGVuZ3RoID0gMCwgeCA9IDAsIHkgPSAwO1xuXG4gICAgICAgIHNhbXBsZUxlbmd0aCA9IHNhbXBsZUxlbmd0aCB8fCAxNTtcblxuICAgICAgICB2YXIgYWRkUG9pbnQgPSBmdW5jdGlvbihweCwgcHksIHBhdGhTZWdUeXBlKSB7XG4gICAgICAgICAgICAvLyBhbGwgb2RkLW51bWJlcmVkIHBhdGggdHlwZXMgYXJlIHJlbGF0aXZlIGV4Y2VwdCBQQVRIU0VHX0NMT1NFUEFUSCAoMSlcbiAgICAgICAgICAgIHZhciBpc1JlbGF0aXZlID0gcGF0aFNlZ1R5cGUgJSAyID09PSAxICYmIHBhdGhTZWdUeXBlID4gMTtcblxuICAgICAgICAgICAgLy8gd2hlbiB0aGUgbGFzdCBwb2ludCBkb2Vzbid0IGVxdWFsIHRoZSBjdXJyZW50IHBvaW50IGFkZCB0aGUgY3VycmVudCBwb2ludFxuICAgICAgICAgICAgaWYgKCFsYXN0UG9pbnQgfHwgcHggIT0gbGFzdFBvaW50LnggfHwgcHkgIT0gbGFzdFBvaW50LnkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFBvaW50ICYmIGlzUmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbHggPSBsYXN0UG9pbnQueDtcbiAgICAgICAgICAgICAgICAgICAgbHkgPSBsYXN0UG9pbnQueTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBseCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGx5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGx4ICsgcHgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGx5ICsgcHlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0IGxhc3QgcG9pbnRcbiAgICAgICAgICAgICAgICBpZiAoaXNSZWxhdGl2ZSB8fCAhbGFzdFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RQb2ludCA9IHBvaW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcblxuICAgICAgICAgICAgICAgIHggPSBseCArIHB4O1xuICAgICAgICAgICAgICAgIHkgPSBseSArIHB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhZGRTZWdtZW50UG9pbnQgPSBmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgICAgICAgICB2YXIgc2VnVHlwZSA9IHNlZ21lbnQucGF0aFNlZ1R5cGVBc0xldHRlci50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgICAgICAvLyBza2lwIHBhdGggZW5kc1xuICAgICAgICAgICAgaWYgKHNlZ1R5cGUgPT09ICdaJykgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBtYXAgc2VnbWVudCB0byB4IGFuZCB5XG4gICAgICAgICAgICBzd2l0Y2ggKHNlZ1R5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgICAgIHggPSBzZWdtZW50Lng7XG4gICAgICAgICAgICAgICAgeSA9IHNlZ21lbnQueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgIHggPSBzZWdtZW50Lng7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICB5ID0gc2VnbWVudC55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRQb2ludCh4LCB5LCBzZWdtZW50LnBhdGhTZWdUeXBlKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBlbnN1cmUgcGF0aCBpcyBhYnNvbHV0ZVxuICAgICAgICBTdmcuX3N2Z1BhdGhUb0Fic29sdXRlKHBhdGgpO1xuXG4gICAgICAgIC8vIGdldCB0b3RhbCBsZW5ndGhcbiAgICAgICAgdG90YWwgPSBwYXRoLmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICAgICAgLy8gcXVldWUgc2VnbWVudHNcbiAgICAgICAgc2VnbWVudHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhdGgucGF0aFNlZ0xpc3QubnVtYmVyT2ZJdGVtczsgaSArPSAxKVxuICAgICAgICAgICAgc2VnbWVudHMucHVzaChwYXRoLnBhdGhTZWdMaXN0LmdldEl0ZW0oaSkpO1xuXG4gICAgICAgIHNlZ21lbnRzUXVldWUgPSBzZWdtZW50cy5jb25jYXQoKTtcblxuICAgICAgICAvLyBzYW1wbGUgdGhyb3VnaCBwYXRoXG4gICAgICAgIHdoaWxlIChsZW5ndGggPCB0b3RhbCkge1xuICAgICAgICAgICAgLy8gZ2V0IHNlZ21lbnQgYXQgcG9zaXRpb25cbiAgICAgICAgICAgIHNlZ21lbnRJbmRleCA9IHBhdGguZ2V0UGF0aFNlZ0F0TGVuZ3RoKGxlbmd0aCk7XG4gICAgICAgICAgICBzZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudEluZGV4XTtcblxuICAgICAgICAgICAgLy8gbmV3IHNlZ21lbnRcbiAgICAgICAgICAgIGlmIChzZWdtZW50ICE9IGxhc3RTZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNlZ21lbnRzUXVldWUubGVuZ3RoICYmIHNlZ21lbnRzUXVldWVbMF0gIT0gc2VnbWVudClcbiAgICAgICAgICAgICAgICAgICAgYWRkU2VnbWVudFBvaW50KHNlZ21lbnRzUXVldWUuc2hpZnQoKSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0U2VnbWVudCA9IHNlZ21lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBwb2ludHMgaW4gYmV0d2VlbiB3aGVuIGN1cnZpbmdcbiAgICAgICAgICAgIC8vIFRPRE86IGFkYXB0aXZlIHNhbXBsaW5nXG4gICAgICAgICAgICBzd2l0Y2ggKHNlZ21lbnQucGF0aFNlZ1R5cGVBc0xldHRlci50b1VwcGVyQ2FzZSgpKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgcG9pbnQgPSBwYXRoLmdldFBvaW50QXRMZW5ndGgobGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBhZGRQb2ludChwb2ludC54LCBwb2ludC55LCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgYnkgc2FtcGxlIHZhbHVlXG4gICAgICAgICAgICBsZW5ndGggKz0gc2FtcGxlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHJlbWFpbmluZyBzZWdtZW50cyBub3QgcGFzc2VkIGJ5IHNhbXBsaW5nXG4gICAgICAgIGZvciAoaSA9IDAsIGlsID0gc2VnbWVudHNRdWV1ZS5sZW5ndGg7IGkgPCBpbDsgKytpKVxuICAgICAgICAgICAgYWRkU2VnbWVudFBvaW50KHNlZ21lbnRzUXVldWVbaV0pO1xuXG4gICAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfTtcblxuICAgIFN2Zy5fc3ZnUGF0aFRvQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9waHJvZ3oubmV0L2NvbnZlcnQtc3ZnLXBhdGgtdG8tYWxsLWFic29sdXRlLWNvbW1hbmRzXG4gICAgICAgIC8vIENvcHlyaWdodCAoYykgR2F2aW4gS2lzdG5lclxuICAgICAgICAvLyBodHRwOi8vcGhyb2d6Lm5ldC9qcy9fUmV1c2VMaWNlbnNlLnR4dFxuICAgICAgICAvLyBNb2RpZmljYXRpb25zOiB0aWR5IGZvcm1hdHRpbmcgYW5kIG5hbWluZ1xuICAgICAgICB2YXIgeDAsIHkwLCB4MSwgeTEsIHgyLCB5Miwgc2VncyA9IHBhdGgucGF0aFNlZ0xpc3QsXG4gICAgICAgICAgICB4ID0gMCwgeSA9IDAsIGxlbiA9IHNlZ3MubnVtYmVyT2ZJdGVtcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgc2VnID0gc2Vncy5nZXRJdGVtKGkpLFxuICAgICAgICAgICAgICAgIHNlZ1R5cGUgPSBzZWcucGF0aFNlZ1R5cGVBc0xldHRlcjtcblxuICAgICAgICAgICAgaWYgKC9bTUxIVkNTUVRBXS8udGVzdChzZWdUeXBlKSkge1xuICAgICAgICAgICAgICAgIGlmICgneCcgaW4gc2VnKSB4ID0gc2VnLng7XG4gICAgICAgICAgICAgICAgaWYgKCd5JyBpbiBzZWcpIHkgPSBzZWcueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCd4MScgaW4gc2VnKSB4MSA9IHggKyBzZWcueDE7XG4gICAgICAgICAgICAgICAgaWYgKCd4MicgaW4gc2VnKSB4MiA9IHggKyBzZWcueDI7XG4gICAgICAgICAgICAgICAgaWYgKCd5MScgaW4gc2VnKSB5MSA9IHkgKyBzZWcueTE7XG4gICAgICAgICAgICAgICAgaWYgKCd5MicgaW4gc2VnKSB5MiA9IHkgKyBzZWcueTI7XG4gICAgICAgICAgICAgICAgaWYgKCd4JyBpbiBzZWcpIHggKz0gc2VnLng7XG4gICAgICAgICAgICAgICAgaWYgKCd5JyBpbiBzZWcpIHkgKz0gc2VnLnk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNlZ1R5cGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ01vdmV0b0Ficyh4LCB5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0xpbmV0b0Ficyh4LCB5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0xpbmV0b0hvcml6b250YWxBYnMoeCksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9WZXJ0aWNhbEFicyh5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9DdWJpY0Ficyh4LCB5LCB4MSwgeTEsIHgyLCB5MiksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdDdXJ2ZXRvQ3ViaWNTbW9vdGhBYnMoeCwgeSwgeDIsIHkyKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNBYnMoeCwgeSwgeDEsIHkxKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNTbW9vdGhBYnMoeCwgeSksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICAgICAgc2Vncy5yZXBsYWNlSXRlbShwYXRoLmNyZWF0ZVNWR1BhdGhTZWdBcmNBYnMoeCwgeSwgc2VnLnIxLCBzZWcucjIsIHNlZy5hbmdsZSwgc2VnLmxhcmdlQXJjRmxhZywgc2VnLnN3ZWVwRmxhZyksIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICAgICAgICAgICAgeCA9IHgwO1xuICAgICAgICAgICAgICAgICAgICB5ID0geTA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VnVHlwZSA9PSAnTScgfHwgc2VnVHlwZSA9PSAnbScpIHtcbiAgICAgICAgICAgICAgICB4MCA9IHg7XG4gICAgICAgICAgICAgICAgeTAgPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcbn0se1wiLi4vY29yZS9Db21tb25cIjoxNCxcIi4uL2dlb21ldHJ5L0JvdW5kc1wiOjI2fV0sMjg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLlZlY3RvcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgdmVjdG9ycy5cbiogVmVjdG9ycyBhcmUgdGhlIGJhc2lzIG9mIGFsbCB0aGUgZ2VvbWV0cnkgcmVsYXRlZCBvcGVyYXRpb25zIGluIHRoZSBlbmdpbmUuXG4qIEEgYE1hdHRlci5WZWN0b3JgIG9iamVjdCBpcyBvZiB0aGUgZm9ybSBgeyB4OiAwLCB5OiAwIH1gLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgVmVjdG9yXG4qL1xuXG4vLyBUT0RPOiBjb25zaWRlciBwYXJhbXMgZm9yIHJldXNpbmcgdmVjdG9yIG9iamVjdHNcblxudmFyIFZlY3RvciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvcjtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyB2ZWN0b3IuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IuY3JlYXRlID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4geyB4OiB4IHx8IDAsIHk6IHkgfHwgMCB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IHZlY3RvciB3aXRoIGB4YCBhbmQgYHlgIGNvcGllZCBmcm9tIHRoZSBnaXZlbiBgdmVjdG9yYC5cbiAgICAgKiBAbWV0aG9kIGNsb25lXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgY2xvbmVkIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5jbG9uZSA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCwgeTogdmVjdG9yLnkgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWFnbml0dWRlIChsZW5ndGgpIG9mIGEgdmVjdG9yLlxuICAgICAqIEBtZXRob2QgbWFnbml0dWRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLm1hZ25pdHVkZSA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh2ZWN0b3IueCAqIHZlY3Rvci54KSArICh2ZWN0b3IueSAqIHZlY3Rvci55KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiBhIHZlY3RvciAodGhlcmVmb3JlIHNhdmluZyBhIGBzcXJ0YCBvcGVyYXRpb24pLlxuICAgICAqIEBtZXRob2QgbWFnbml0dWRlU3F1YXJlZFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzcXVhcmVkIG1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLm1hZ25pdHVkZVNxdWFyZWQgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3IueCAqIHZlY3Rvci54KSArICh2ZWN0b3IueSAqIHZlY3Rvci55KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgdmVjdG9yIGFib3V0ICgwLCAwKSBieSBzcGVjaWZpZWQgYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IFtvdXRwdXRdXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgdmVjdG9yIHJvdGF0ZWQgYWJvdXQgKDAsIDApXG4gICAgICovXG4gICAgVmVjdG9yLnJvdGF0ZSA9IGZ1bmN0aW9uKHZlY3RvciwgYW5nbGUsIG91dHB1dCkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgdmFyIHggPSB2ZWN0b3IueCAqIGNvcyAtIHZlY3Rvci55ICogc2luO1xuICAgICAgICBvdXRwdXQueSA9IHZlY3Rvci54ICogc2luICsgdmVjdG9yLnkgKiBjb3M7XG4gICAgICAgIG91dHB1dC54ID0geDtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgdmVjdG9yIGFib3V0IGEgc3BlY2lmaWVkIHBvaW50IGJ5IHNwZWNpZmllZCBhbmdsZS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZUFib3V0XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIHJvdGF0ZWQgYWJvdXQgdGhlIHBvaW50XG4gICAgICovXG4gICAgVmVjdG9yLnJvdGF0ZUFib3V0ID0gZnVuY3Rpb24odmVjdG9yLCBhbmdsZSwgcG9pbnQsIG91dHB1dCkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgdmFyIHggPSBwb2ludC54ICsgKCh2ZWN0b3IueCAtIHBvaW50LngpICogY29zIC0gKHZlY3Rvci55IC0gcG9pbnQueSkgKiBzaW4pO1xuICAgICAgICBvdXRwdXQueSA9IHBvaW50LnkgKyAoKHZlY3Rvci54IC0gcG9pbnQueCkgKiBzaW4gKyAodmVjdG9yLnkgLSBwb2ludC55KSAqIGNvcyk7XG4gICAgICAgIG91dHB1dC54ID0geDtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXNlcyBhIHZlY3RvciAoc3VjaCB0aGF0IGl0cyBtYWduaXR1ZGUgaXMgYDFgKS5cbiAgICAgKiBAbWV0aG9kIG5vcm1hbGlzZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBub3JtYWxpc2VkXG4gICAgICovXG4gICAgVmVjdG9yLm5vcm1hbGlzZSA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICB2YXIgbWFnbml0dWRlID0gVmVjdG9yLm1hZ25pdHVkZSh2ZWN0b3IpO1xuICAgICAgICBpZiAobWFnbml0dWRlID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCAvIG1hZ25pdHVkZSwgeTogdmVjdG9yLnkgLyBtYWduaXR1ZGUgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZG90LXByb2R1Y3Qgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBkb3RcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZG90IHByb2R1Y3Qgb2YgdGhlIHR3byB2ZWN0b3JzXG4gICAgICovXG4gICAgVmVjdG9yLmRvdCA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3JBLnggKiB2ZWN0b3JCLngpICsgKHZlY3RvckEueSAqIHZlY3RvckIueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzLXByb2R1Y3Qgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBjcm9zc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoZSB0d28gdmVjdG9yc1xuICAgICAqL1xuICAgIFZlY3Rvci5jcm9zcyA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3JBLnggKiB2ZWN0b3JCLnkpIC0gKHZlY3RvckEueSAqIHZlY3RvckIueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzLXByb2R1Y3Qgb2YgdGhyZWUgdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGNyb3NzM1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQ1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGNyb3NzIHByb2R1Y3Qgb2YgdGhlIHRocmVlIHZlY3RvcnNcbiAgICAgKi9cbiAgICBWZWN0b3IuY3Jvc3MzID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQiwgdmVjdG9yQykge1xuICAgICAgICByZXR1cm4gKHZlY3RvckIueCAtIHZlY3RvckEueCkgKiAodmVjdG9yQy55IC0gdmVjdG9yQS55KSAtICh2ZWN0b3JCLnkgLSB2ZWN0b3JBLnkpICogKHZlY3RvckMueCAtIHZlY3RvckEueCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgYWRkXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG9mIHZlY3RvckEgYW5kIHZlY3RvckIgYWRkZWRcbiAgICAgKi9cbiAgICBWZWN0b3IuYWRkID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQiwgb3V0cHV0KSB7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgb3V0cHV0LnggPSB2ZWN0b3JBLnggKyB2ZWN0b3JCLng7XG4gICAgICAgIG91dHB1dC55ID0gdmVjdG9yQS55ICsgdmVjdG9yQi55O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdGhlIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2Qgc3ViXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG9mIHZlY3RvckEgYW5kIHZlY3RvckIgc3VidHJhY3RlZFxuICAgICAqL1xuICAgIFZlY3Rvci5zdWIgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCLCBvdXRwdXQpIHtcbiAgICAgICAgaWYgKCFvdXRwdXQpIG91dHB1dCA9IHt9O1xuICAgICAgICBvdXRwdXQueCA9IHZlY3RvckEueCAtIHZlY3RvckIueDtcbiAgICAgICAgb3V0cHV0LnkgPSB2ZWN0b3JBLnkgLSB2ZWN0b3JCLnk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYW5kIGEgc2NhbGFyLlxuICAgICAqIEBtZXRob2QgbXVsdFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGFyXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3IgbXVsdGlwbGllZCBieSBzY2FsYXJcbiAgICAgKi9cbiAgICBWZWN0b3IubXVsdCA9IGZ1bmN0aW9uKHZlY3Rvciwgc2NhbGFyKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54ICogc2NhbGFyLCB5OiB2ZWN0b3IueSAqIHNjYWxhciB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGFuZCBhIHNjYWxhci5cbiAgICAgKiBAbWV0aG9kIGRpdlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGFyXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3IgZGl2aWRlZCBieSBzY2FsYXJcbiAgICAgKi9cbiAgICBWZWN0b3IuZGl2ID0gZnVuY3Rpb24odmVjdG9yLCBzY2FsYXIpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLnggLyBzY2FsYXIsIHk6IHZlY3Rvci55IC8gc2NhbGFyIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlcnBlbmRpY3VsYXIgdmVjdG9yLiBTZXQgYG5lZ2F0ZWAgdG8gdHJ1ZSBmb3IgdGhlIHBlcnBlbmRpY3VsYXIgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgICAgKiBAbWV0aG9kIHBlcnBcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtib29sfSBbbmVnYXRlPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIHBlcnBlbmRpY3VsYXIgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLnBlcnAgPSBmdW5jdGlvbih2ZWN0b3IsIG5lZ2F0ZSkge1xuICAgICAgICBuZWdhdGUgPSBuZWdhdGUgPT09IHRydWUgPyAtMSA6IDE7XG4gICAgICAgIHJldHVybiB7IHg6IG5lZ2F0ZSAqIC12ZWN0b3IueSwgeTogbmVnYXRlICogdmVjdG9yLnggfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTmVnYXRlcyBib3RoIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3Igc3VjaCB0aGF0IGl0IHBvaW50cyBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuICAgICAqIEBtZXRob2QgbmVnXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIG5lZ2F0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLm5lZyA9IGZ1bmN0aW9uKHZlY3Rvcikge1xuICAgICAgICByZXR1cm4geyB4OiAtdmVjdG9yLngsIHk6IC12ZWN0b3IueSB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbmdsZSBiZXR3ZWVuIHRoZSB2ZWN0b3IgYHZlY3RvckIgLSB2ZWN0b3JBYCBhbmQgdGhlIHgtYXhpcyBpbiByYWRpYW5zLlxuICAgICAqIEBtZXRob2QgYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICAgICAqL1xuICAgIFZlY3Rvci5hbmdsZSA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodmVjdG9yQi55IC0gdmVjdG9yQS55LCB2ZWN0b3JCLnggLSB2ZWN0b3JBLngpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgdmVjdG9yIHBvb2wgKG5vdCB0aHJlYWQtc2FmZSkuXG4gICAgICogQHByb3BlcnR5IF90ZW1wXG4gICAgICogQHR5cGUge3ZlY3RvcltdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgVmVjdG9yLl90ZW1wID0gW1xuICAgICAgICBWZWN0b3IuY3JlYXRlKCksIFZlY3Rvci5jcmVhdGUoKSwgXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoKSwgVmVjdG9yLmNyZWF0ZSgpLCBcbiAgICAgICAgVmVjdG9yLmNyZWF0ZSgpLCBWZWN0b3IuY3JlYXRlKClcbiAgICBdO1xuXG59KSgpO1xufSx7fV0sMjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLlZlcnRpY2VzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBzZXRzIG9mIHZlcnRpY2VzLlxuKiBBIHNldCBvZiB2ZXJ0aWNlcyBpcyBhbiBhcnJheSBvZiBgTWF0dGVyLlZlY3RvcmAgd2l0aCBhZGRpdGlvbmFsIGluZGV4aW5nIHByb3BlcnRpZXMgaW5zZXJ0ZWQgYnkgYFZlcnRpY2VzLmNyZWF0ZWAuXG4qIEEgYE1hdHRlci5Cb2R5YCBtYWludGFpbnMgYSBzZXQgb2YgdmVydGljZXMgdG8gcmVwcmVzZW50IHRoZSBzaGFwZSBvZiB0aGUgb2JqZWN0IChpdHMgY29udmV4IGh1bGwpLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgVmVydGljZXNcbiovXG5cbnZhciBWZXJ0aWNlcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2VzO1xuXG52YXIgVmVjdG9yID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVjdG9yJyk7XG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzZXQgb2YgYE1hdHRlci5Cb2R5YCBjb21wYXRpYmxlIHZlcnRpY2VzLlxuICAgICAqIFRoZSBgcG9pbnRzYCBhcmd1bWVudCBhY2NlcHRzIGFuIGFycmF5IG9mIGBNYXR0ZXIuVmVjdG9yYCBwb2ludHMgb3JpZW50YXRlZCBhcm91bmQgdGhlIG9yaWdpbiBgKDAsIDApYCwgZm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAgW3sgeDogMCwgeTogMCB9LCB7IHg6IDI1LCB5OiA1MCB9LCB7IHg6IDUwLCB5OiAwIH1dXG4gICAgICpcbiAgICAgKiBUaGUgYFZlcnRpY2VzLmNyZWF0ZWAgbWV0aG9kIHJldHVybnMgYSBuZXcgYXJyYXkgb2YgdmVydGljZXMsIHdoaWNoIGFyZSBzaW1pbGFyIHRvIE1hdHRlci5WZWN0b3Igb2JqZWN0cyxcbiAgICAgKiBidXQgd2l0aCBzb21lIGFkZGl0aW9uYWwgcmVmZXJlbmNlcyByZXF1aXJlZCBmb3IgZWZmaWNpZW50IGNvbGxpc2lvbiBkZXRlY3Rpb24gcm91dGluZXMuXG4gICAgICpcbiAgICAgKiBWZXJ0aWNlcyBtdXN0IGJlIHNwZWNpZmllZCBpbiBjbG9ja3dpc2Ugb3JkZXIuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGhlIGBib2R5YCBhcmd1bWVudCBpcyBub3Qgb3B0aW9uYWwsIGEgYE1hdHRlci5Cb2R5YCByZWZlcmVuY2UgbXVzdCBiZSBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3JbXX0gcG9pbnRzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICovXG4gICAgVmVydGljZXMuY3JlYXRlID0gZnVuY3Rpb24ocG9pbnRzLCBib2R5KSB7XG4gICAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG9pbnQgPSBwb2ludHNbaV0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBwb2ludC54LFxuICAgICAgICAgICAgICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgICAgICAgICAgaXNJbnRlcm5hbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIHN0cmluZyBjb250YWluaW5nIG9yZGVyZWQgeCB5IHBhaXJzIHNlcGFyYXRlZCBieSBzcGFjZXMgKGFuZCBvcHRpb25hbGx5IGNvbW1hcyksIFxuICAgICAqIGludG8gYSBgTWF0dGVyLlZlcnRpY2VzYCBvYmplY3QgZm9yIHRoZSBnaXZlbiBgTWF0dGVyLkJvZHlgLlxuICAgICAqIEZvciBwYXJzaW5nIFNWRyBwYXRocywgc2VlIGBTdmcucGF0aFRvVmVydGljZXNgLlxuICAgICAqIEBtZXRob2QgZnJvbVBhdGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIFZlcnRpY2VzLmZyb21QYXRoID0gZnVuY3Rpb24ocGF0aCwgYm9keSkge1xuICAgICAgICB2YXIgcGF0aFBhdHRlcm4gPSAvTD9cXHMqKFtcXC1cXGRcXC5lXSspW1xccyxdKihbXFwtXFxkXFwuZV0rKSovaWcsXG4gICAgICAgICAgICBwb2ludHMgPSBbXTtcblxuICAgICAgICBwYXRoLnJlcGxhY2UocGF0aFBhdHRlcm4sIGZ1bmN0aW9uKG1hdGNoLCB4LCB5KSB7XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHBhcnNlRmxvYXQoeCksIHk6IHBhcnNlRmxvYXQoeSkgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBWZXJ0aWNlcy5jcmVhdGUocG9pbnRzLCBib2R5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2VudHJlIChjZW50cm9pZCkgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGNlbnRyZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBUaGUgY2VudHJlIHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMuY2VudHJlID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGFyZWEgPSBWZXJ0aWNlcy5hcmVhKHZlcnRpY2VzLCB0cnVlKSxcbiAgICAgICAgICAgIGNlbnRyZSA9IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgY3Jvc3MsXG4gICAgICAgICAgICB0ZW1wLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBqID0gKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIGNyb3NzID0gVmVjdG9yLmNyb3NzKHZlcnRpY2VzW2ldLCB2ZXJ0aWNlc1tqXSk7XG4gICAgICAgICAgICB0ZW1wID0gVmVjdG9yLm11bHQoVmVjdG9yLmFkZCh2ZXJ0aWNlc1tpXSwgdmVydGljZXNbal0pLCBjcm9zcyk7XG4gICAgICAgICAgICBjZW50cmUgPSBWZWN0b3IuYWRkKGNlbnRyZSwgdGVtcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVmVjdG9yLmRpdihjZW50cmUsIDYgKiBhcmVhKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXZlcmFnZSAobWVhbikgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIG1lYW5cbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIGF2ZXJhZ2UgcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5tZWFuID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGF2ZXJhZ2UgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhdmVyYWdlLnggKz0gdmVydGljZXNbaV0ueDtcbiAgICAgICAgICAgIGF2ZXJhZ2UueSArPSB2ZXJ0aWNlc1tpXS55O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFZlY3Rvci5kaXYoYXZlcmFnZSwgdmVydGljZXMubGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXJlYSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzLlxuICAgICAqIEBtZXRob2QgYXJlYVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtib29sfSBzaWduZWRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhcmVhXG4gICAgICovXG4gICAgVmVydGljZXMuYXJlYSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBzaWduZWQpIHtcbiAgICAgICAgdmFyIGFyZWEgPSAwLFxuICAgICAgICAgICAgaiA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJlYSArPSAodmVydGljZXNbal0ueCAtIHZlcnRpY2VzW2ldLngpICogKHZlcnRpY2VzW2pdLnkgKyB2ZXJ0aWNlc1tpXS55KTtcbiAgICAgICAgICAgIGogPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpZ25lZClcbiAgICAgICAgICAgIHJldHVybiBhcmVhIC8gMjtcblxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoYXJlYSkgLyAyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtb21lbnQgb2YgaW5lcnRpYSAoc2Vjb25kIG1vbWVudCBvZiBhcmVhKSBvZiB0aGUgc2V0IG9mIHZlcnRpY2VzIGdpdmVuIHRoZSB0b3RhbCBtYXNzLlxuICAgICAqIEBtZXRob2QgaW5lcnRpYVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1hc3NcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb2x5Z29uJ3MgbW9tZW50IG9mIGluZXJ0aWFcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5pbmVydGlhID0gZnVuY3Rpb24odmVydGljZXMsIG1hc3MpIHtcbiAgICAgICAgdmFyIG51bWVyYXRvciA9IDAsXG4gICAgICAgICAgICBkZW5vbWluYXRvciA9IDAsXG4gICAgICAgICAgICB2ID0gdmVydGljZXMsXG4gICAgICAgICAgICBjcm9zcyxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgcG9seWdvbidzIG1vbWVudCBvZiBpbmVydGlhLCB1c2luZyBzZWNvbmQgbW9tZW50IG9mIGFyZWFcbiAgICAgICAgLy8gZnJvbSBlcXVhdGlvbnMgYXQgaHR0cDovL3d3dy5waHlzaWNzZm9ydW1zLmNvbS9zaG93dGhyZWFkLnBocD90PTI1MjkzXG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdi5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgaiA9IChuICsgMSkgJSB2Lmxlbmd0aDtcbiAgICAgICAgICAgIGNyb3NzID0gTWF0aC5hYnMoVmVjdG9yLmNyb3NzKHZbal0sIHZbbl0pKTtcbiAgICAgICAgICAgIG51bWVyYXRvciArPSBjcm9zcyAqIChWZWN0b3IuZG90KHZbal0sIHZbal0pICsgVmVjdG9yLmRvdCh2W2pdLCB2W25dKSArIFZlY3Rvci5kb3QodltuXSwgdltuXSkpO1xuICAgICAgICAgICAgZGVub21pbmF0b3IgKz0gY3Jvc3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG1hc3MgLyA2KSAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgdGhlIHNldCBvZiB2ZXJ0aWNlcyBpbi1wbGFjZS5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsYXJcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy50cmFuc2xhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgdmVjdG9yLCBzY2FsYXIpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGlmIChzY2FsYXIpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzW2ldLnggKz0gdmVjdG9yLnggKiBzY2FsYXI7XG4gICAgICAgICAgICAgICAgdmVydGljZXNbaV0ueSArPSB2ZWN0b3IueSAqIHNjYWxhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZlcnRpY2VzW2ldLnggKz0gdmVjdG9yLng7XG4gICAgICAgICAgICAgICAgdmVydGljZXNbaV0ueSArPSB2ZWN0b3IueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgc2V0IG9mIHZlcnRpY2VzIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5yb3RhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgYW5nbGUsIHBvaW50KSB7XG4gICAgICAgIGlmIChhbmdsZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNlID0gdmVydGljZXNbaV0sXG4gICAgICAgICAgICAgICAgZHggPSB2ZXJ0aWNlLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gdmVydGljZS55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHZlcnRpY2UueCA9IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbik7XG4gICAgICAgICAgICB2ZXJ0aWNlLnkgPSBwb2ludC55ICsgKGR4ICogc2luICsgZHkgKiBjb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHBvaW50YCBpcyBpbnNpZGUgdGhlIHNldCBvZiBgdmVydGljZXNgLlxuICAgICAqIEBtZXRob2QgY29udGFpbnNcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZlcnRpY2VzIGNvbnRhaW5zIHBvaW50LCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jb250YWlucyA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBwb2ludCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmVydGljZSA9IHZlcnRpY2VzW2ldLFxuICAgICAgICAgICAgICAgIG5leHRWZXJ0aWNlID0gdmVydGljZXNbKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aF07XG4gICAgICAgICAgICBpZiAoKHBvaW50LnggLSB2ZXJ0aWNlLngpICogKG5leHRWZXJ0aWNlLnkgLSB2ZXJ0aWNlLnkpICsgKHBvaW50LnkgLSB2ZXJ0aWNlLnkpICogKHZlcnRpY2UueCAtIG5leHRWZXJ0aWNlLngpID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIHZlcnRpY2VzIGZyb20gYSBwb2ludCAoZGVmYXVsdCBpcyBjZW50cmUpIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMuc2NhbGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgc2NhbGVYLCBzY2FsZVksIHBvaW50KSB7XG4gICAgICAgIGlmIChzY2FsZVggPT09IDEgJiYgc2NhbGVZID09PSAxKVxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuXG4gICAgICAgIHBvaW50ID0gcG9pbnQgfHwgVmVydGljZXMuY2VudHJlKHZlcnRpY2VzKTtcblxuICAgICAgICB2YXIgdmVydGV4LFxuICAgICAgICAgICAgZGVsdGE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBkZWx0YSA9IFZlY3Rvci5zdWIodmVydGV4LCBwb2ludCk7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS54ID0gcG9pbnQueCArIGRlbHRhLnggKiBzY2FsZVg7XG4gICAgICAgICAgICB2ZXJ0aWNlc1tpXS55ID0gcG9pbnQueSArIGRlbHRhLnkgKiBzY2FsZVk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYW1mZXJzIGEgc2V0IG9mIHZlcnRpY2VzIGJ5IGdpdmluZyB0aGVtIHJvdW5kZWQgY29ybmVycywgcmV0dXJucyBhIG5ldyBzZXQgb2YgdmVydGljZXMuXG4gICAgICogVGhlIHJhZGl1cyBwYXJhbWV0ZXIgaXMgYSBzaW5nbGUgbnVtYmVyIG9yIGFuIGFycmF5IHRvIHNwZWNpZnkgdGhlIHJhZGl1cyBmb3IgZWFjaCB2ZXJ0ZXguXG4gICAgICogQG1ldGhvZCBjaGFtZmVyXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbGl0eVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFsaXR5TWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHF1YWxpdHlNYXhcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5jaGFtZmVyID0gZnVuY3Rpb24odmVydGljZXMsIHJhZGl1cywgcXVhbGl0eSwgcXVhbGl0eU1pbiwgcXVhbGl0eU1heCkge1xuICAgICAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJhZGl1cyA9IFtyYWRpdXNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFkaXVzID0gcmFkaXVzIHx8IFs4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHF1YWxpdHkgZGVmYXVsdHMgdG8gLTEsIHdoaWNoIGlzIGF1dG9cbiAgICAgICAgcXVhbGl0eSA9ICh0eXBlb2YgcXVhbGl0eSAhPT0gJ3VuZGVmaW5lZCcpID8gcXVhbGl0eSA6IC0xO1xuICAgICAgICBxdWFsaXR5TWluID0gcXVhbGl0eU1pbiB8fCAyO1xuICAgICAgICBxdWFsaXR5TWF4ID0gcXVhbGl0eU1heCB8fCAxNDtcblxuICAgICAgICB2YXIgbmV3VmVydGljZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJldlZlcnRleCA9IHZlcnRpY2VzW2kgLSAxID49IDAgPyBpIC0gMSA6IHZlcnRpY2VzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldLFxuICAgICAgICAgICAgICAgIG5leHRWZXJ0ZXggPSB2ZXJ0aWNlc1soaSArIDEpICUgdmVydGljZXMubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFkaXVzID0gcmFkaXVzW2kgPCByYWRpdXMubGVuZ3RoID8gaSA6IHJhZGl1cy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRSYWRpdXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXdWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwcmV2Tm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgIHg6IHZlcnRleC55IC0gcHJldlZlcnRleC55LCBcbiAgICAgICAgICAgICAgICB5OiBwcmV2VmVydGV4LnggLSB2ZXJ0ZXgueFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBuZXh0Tm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgIHg6IG5leHRWZXJ0ZXgueSAtIHZlcnRleC55LCBcbiAgICAgICAgICAgICAgICB5OiB2ZXJ0ZXgueCAtIG5leHRWZXJ0ZXgueFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBkaWFnb25hbFJhZGl1cyA9IE1hdGguc3FydCgyICogTWF0aC5wb3coY3VycmVudFJhZGl1cywgMikpLFxuICAgICAgICAgICAgICAgIHJhZGl1c1ZlY3RvciA9IFZlY3Rvci5tdWx0KENvbW1vbi5jbG9uZShwcmV2Tm9ybWFsKSwgY3VycmVudFJhZGl1cyksXG4gICAgICAgICAgICAgICAgbWlkTm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZShWZWN0b3IubXVsdChWZWN0b3IuYWRkKHByZXZOb3JtYWwsIG5leHROb3JtYWwpLCAwLjUpKSxcbiAgICAgICAgICAgICAgICBzY2FsZWRWZXJ0ZXggPSBWZWN0b3Iuc3ViKHZlcnRleCwgVmVjdG9yLm11bHQobWlkTm9ybWFsLCBkaWFnb25hbFJhZGl1cykpO1xuXG4gICAgICAgICAgICB2YXIgcHJlY2lzaW9uID0gcXVhbGl0eTtcblxuICAgICAgICAgICAgaWYgKHF1YWxpdHkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSBkZWNpZGUgcHJlY2lzaW9uXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gTWF0aC5wb3coY3VycmVudFJhZGl1cywgMC4zMikgKiAxLjc1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmVjaXNpb24gPSBDb21tb24uY2xhbXAocHJlY2lzaW9uLCBxdWFsaXR5TWluLCBxdWFsaXR5TWF4KTtcblxuICAgICAgICAgICAgLy8gdXNlIGFuIGV2ZW4gdmFsdWUgZm9yIHByZWNpc2lvbiwgbW9yZSBsaWtlbHkgdG8gcmVkdWNlIGF4ZXMgYnkgdXNpbmcgc3ltbWV0cnlcbiAgICAgICAgICAgIGlmIChwcmVjaXNpb24gJSAyID09PSAxKVxuICAgICAgICAgICAgICAgIHByZWNpc2lvbiArPSAxO1xuXG4gICAgICAgICAgICB2YXIgYWxwaGEgPSBNYXRoLmFjb3MoVmVjdG9yLmRvdChwcmV2Tm9ybWFsLCBuZXh0Tm9ybWFsKSksXG4gICAgICAgICAgICAgICAgdGhldGEgPSBhbHBoYSAvIHByZWNpc2lvbjtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcmVjaXNpb247IGorKykge1xuICAgICAgICAgICAgICAgIG5ld1ZlcnRpY2VzLnB1c2goVmVjdG9yLmFkZChWZWN0b3Iucm90YXRlKHJhZGl1c1ZlY3RvciwgdGhldGEgKiBqKSwgc2NhbGVkVmVydGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSBpbnB1dCB2ZXJ0aWNlcyBpbnRvIGNsb2Nrd2lzZSBvcmRlciBpbiBwbGFjZS5cbiAgICAgKiBAbWV0aG9kIGNsb2Nrd2lzZVNvcnRcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIFZlcnRpY2VzLmNsb2Nrd2lzZVNvcnQgPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICB2YXIgY2VudHJlID0gVmVydGljZXMubWVhbih2ZXJ0aWNlcyk7XG5cbiAgICAgICAgdmVydGljZXMuc29ydChmdW5jdGlvbih2ZXJ0ZXhBLCB2ZXJ0ZXhCKSB7XG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yLmFuZ2xlKGNlbnRyZSwgdmVydGV4QSkgLSBWZWN0b3IuYW5nbGUoY2VudHJlLCB2ZXJ0ZXhCKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZlcnRpY2VzIGZvcm0gYSBjb252ZXggc2hhcGUgKHZlcnRpY2VzIG11c3QgYmUgaW4gY2xvY2t3aXNlIG9yZGVyKS5cbiAgICAgKiBAbWV0aG9kIGlzQ29udmV4XG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHtib29sfSBgdHJ1ZWAgaWYgdGhlIGB2ZXJ0aWNlc2AgYXJlIGNvbnZleCwgYGZhbHNlYCBpZiBub3QgKG9yIGBudWxsYCBpZiBub3QgY29tcHV0YWJsZSkuXG4gICAgICovXG4gICAgVmVydGljZXMuaXNDb252ZXggPSBmdW5jdGlvbih2ZXJ0aWNlcykge1xuICAgICAgICAvLyBodHRwOi8vcGF1bGJvdXJrZS5uZXQvZ2VvbWV0cnkvcG9seWdvbm1lc2gvXG4gICAgICAgIC8vIENvcHlyaWdodCAoYykgUGF1bCBCb3Vya2UgKHVzZSBwZXJtaXR0ZWQpXG5cbiAgICAgICAgdmFyIGZsYWcgPSAwLFxuICAgICAgICAgICAgbiA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIHo7XG5cbiAgICAgICAgaWYgKG4gPCAzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaiA9IChpICsgMSkgJSBuO1xuICAgICAgICAgICAgayA9IChpICsgMikgJSBuO1xuICAgICAgICAgICAgeiA9ICh2ZXJ0aWNlc1tqXS54IC0gdmVydGljZXNbaV0ueCkgKiAodmVydGljZXNba10ueSAtIHZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgeiAtPSAodmVydGljZXNbal0ueSAtIHZlcnRpY2VzW2ldLnkpICogKHZlcnRpY2VzW2tdLnggLSB2ZXJ0aWNlc1tqXS54KTtcblxuICAgICAgICAgICAgaWYgKHogPCAwKSB7XG4gICAgICAgICAgICAgICAgZmxhZyB8PSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh6ID4gMCkge1xuICAgICAgICAgICAgICAgIGZsYWcgfD0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZsYWcgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmxhZyAhPT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnZleCBodWxsIG9mIHRoZSBpbnB1dCB2ZXJ0aWNlcyBhcyBhIG5ldyBhcnJheSBvZiBwb2ludHMuXG4gICAgICogQG1ldGhvZCBodWxsXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIFt2ZXJ0ZXhdIHZlcnRpY2VzXG4gICAgICovXG4gICAgVmVydGljZXMuaHVsbCA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9nZW9tYWxnb3JpdGhtcy5jb20vYTEwLV9odWxsLTEuaHRtbFxuXG4gICAgICAgIHZhciB1cHBlciA9IFtdLFxuICAgICAgICAgICAgbG93ZXIgPSBbXSwgXG4gICAgICAgICAgICB2ZXJ0ZXgsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIHNvcnQgdmVydGljZXMgb24geC1heGlzICh5LWF4aXMgZm9yIHRpZXMpXG4gICAgICAgIHZlcnRpY2VzID0gdmVydGljZXMuc2xpY2UoMCk7XG4gICAgICAgIHZlcnRpY2VzLnNvcnQoZnVuY3Rpb24odmVydGV4QSwgdmVydGV4Qikge1xuICAgICAgICAgICAgdmFyIGR4ID0gdmVydGV4QS54IC0gdmVydGV4Qi54O1xuICAgICAgICAgICAgcmV0dXJuIGR4ICE9PSAwID8gZHggOiB2ZXJ0ZXhBLnkgLSB2ZXJ0ZXhCLnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGJ1aWxkIGxvd2VyIGh1bGxcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcblxuICAgICAgICAgICAgd2hpbGUgKGxvd2VyLmxlbmd0aCA+PSAyIFxuICAgICAgICAgICAgICAgICAgICYmIFZlY3Rvci5jcm9zczMobG93ZXJbbG93ZXIubGVuZ3RoIC0gMl0sIGxvd2VyW2xvd2VyLmxlbmd0aCAtIDFdLCB2ZXJ0ZXgpIDw9IDApIHtcbiAgICAgICAgICAgICAgICBsb3dlci5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG93ZXIucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYnVpbGQgdXBwZXIgaHVsbFxuICAgICAgICBmb3IgKGkgPSB2ZXJ0aWNlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV07XG5cbiAgICAgICAgICAgIHdoaWxlICh1cHBlci5sZW5ndGggPj0gMiBcbiAgICAgICAgICAgICAgICAgICAmJiBWZWN0b3IuY3Jvc3MzKHVwcGVyW3VwcGVyLmxlbmd0aCAtIDJdLCB1cHBlclt1cHBlci5sZW5ndGggLSAxXSwgdmVydGV4KSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdXBwZXIucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwcGVyLnB1c2godmVydGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbmNhdGVuYXRpb24gb2YgdGhlIGxvd2VyIGFuZCB1cHBlciBodWxscyBnaXZlcyB0aGUgY29udmV4IGh1bGxcbiAgICAgICAgLy8gb21pdCBsYXN0IHBvaW50cyBiZWNhdXNlIHRoZXkgYXJlIHJlcGVhdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG90aGVyIGxpc3RcbiAgICAgICAgdXBwZXIucG9wKCk7XG4gICAgICAgIGxvd2VyLnBvcCgpO1xuXG4gICAgICAgIHJldHVybiB1cHBlci5jb25jYXQobG93ZXIpO1xuICAgIH07XG5cbn0pKCk7XG5cbn0se1wiLi4vY29yZS9Db21tb25cIjoxNCxcIi4uL2dlb21ldHJ5L1ZlY3RvclwiOjI4fV0sMzA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIE1hdHRlciA9IG1vZHVsZS5leHBvcnRzID0gX2RlcmVxXygnLi4vY29yZS9NYXR0ZXInKTtcblxuTWF0dGVyLkJvZHkgPSBfZGVyZXFfKCcuLi9ib2R5L0JvZHknKTtcbk1hdHRlci5Db21wb3NpdGUgPSBfZGVyZXFfKCcuLi9ib2R5L0NvbXBvc2l0ZScpO1xuTWF0dGVyLldvcmxkID0gX2RlcmVxXygnLi4vYm9keS9Xb3JsZCcpO1xuXG5NYXR0ZXIuQ29udGFjdCA9IF9kZXJlcV8oJy4uL2NvbGxpc2lvbi9Db250YWN0Jyk7XG5NYXR0ZXIuRGV0ZWN0b3IgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vRGV0ZWN0b3InKTtcbk1hdHRlci5HcmlkID0gX2RlcmVxXygnLi4vY29sbGlzaW9uL0dyaWQnKTtcbk1hdHRlci5QYWlycyA9IF9kZXJlcV8oJy4uL2NvbGxpc2lvbi9QYWlycycpO1xuTWF0dGVyLlBhaXIgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vUGFpcicpO1xuTWF0dGVyLlF1ZXJ5ID0gX2RlcmVxXygnLi4vY29sbGlzaW9uL1F1ZXJ5Jyk7XG5NYXR0ZXIuUmVzb2x2ZXIgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vUmVzb2x2ZXInKTtcbk1hdHRlci5TQVQgPSBfZGVyZXFfKCcuLi9jb2xsaXNpb24vU0FUJyk7XG5cbk1hdHRlci5Db25zdHJhaW50ID0gX2RlcmVxXygnLi4vY29uc3RyYWludC9Db25zdHJhaW50Jyk7XG5NYXR0ZXIuTW91c2VDb25zdHJhaW50ID0gX2RlcmVxXygnLi4vY29uc3RyYWludC9Nb3VzZUNvbnN0cmFpbnQnKTtcblxuTWF0dGVyLkNvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG5NYXR0ZXIuRW5naW5lID0gX2RlcmVxXygnLi4vY29yZS9FbmdpbmUnKTtcbk1hdHRlci5FdmVudHMgPSBfZGVyZXFfKCcuLi9jb3JlL0V2ZW50cycpO1xuTWF0dGVyLk1vdXNlID0gX2RlcmVxXygnLi4vY29yZS9Nb3VzZScpO1xuTWF0dGVyLlJ1bm5lciA9IF9kZXJlcV8oJy4uL2NvcmUvUnVubmVyJyk7XG5NYXR0ZXIuU2xlZXBpbmcgPSBfZGVyZXFfKCcuLi9jb3JlL1NsZWVwaW5nJyk7XG5NYXR0ZXIuUGx1Z2luID0gX2RlcmVxXygnLi4vY29yZS9QbHVnaW4nKTtcblxuXG5NYXR0ZXIuQm9kaWVzID0gX2RlcmVxXygnLi4vZmFjdG9yeS9Cb2RpZXMnKTtcbk1hdHRlci5Db21wb3NpdGVzID0gX2RlcmVxXygnLi4vZmFjdG9yeS9Db21wb3NpdGVzJyk7XG5cbk1hdHRlci5BeGVzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvQXhlcycpO1xuTWF0dGVyLkJvdW5kcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0JvdW5kcycpO1xuTWF0dGVyLlN2ZyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1N2ZycpO1xuTWF0dGVyLlZlY3RvciA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L1ZlY3RvcicpO1xuTWF0dGVyLlZlcnRpY2VzID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVydGljZXMnKTtcblxuTWF0dGVyLlJlbmRlciA9IF9kZXJlcV8oJy4uL3JlbmRlci9SZW5kZXInKTtcbk1hdHRlci5SZW5kZXJQaXhpID0gX2RlcmVxXygnLi4vcmVuZGVyL1JlbmRlclBpeGknKTtcblxuLy8gYWxpYXNlc1xuXG5NYXR0ZXIuV29ybGQuYWRkID0gTWF0dGVyLkNvbXBvc2l0ZS5hZGQ7XG5NYXR0ZXIuV29ybGQucmVtb3ZlID0gTWF0dGVyLkNvbXBvc2l0ZS5yZW1vdmU7XG5NYXR0ZXIuV29ybGQuYWRkQ29tcG9zaXRlID0gTWF0dGVyLkNvbXBvc2l0ZS5hZGRDb21wb3NpdGU7XG5NYXR0ZXIuV29ybGQuYWRkQm9keSA9IE1hdHRlci5Db21wb3NpdGUuYWRkQm9keTtcbk1hdHRlci5Xb3JsZC5hZGRDb25zdHJhaW50ID0gTWF0dGVyLkNvbXBvc2l0ZS5hZGRDb25zdHJhaW50O1xuTWF0dGVyLldvcmxkLmNsZWFyID0gTWF0dGVyLkNvbXBvc2l0ZS5jbGVhcjtcbk1hdHRlci5FbmdpbmUucnVuID0gTWF0dGVyLlJ1bm5lci5ydW47XG5cbn0se1wiLi4vYm9keS9Cb2R5XCI6MSxcIi4uL2JvZHkvQ29tcG9zaXRlXCI6MixcIi4uL2JvZHkvV29ybGRcIjozLFwiLi4vY29sbGlzaW9uL0NvbnRhY3RcIjo0LFwiLi4vY29sbGlzaW9uL0RldGVjdG9yXCI6NSxcIi4uL2NvbGxpc2lvbi9HcmlkXCI6NixcIi4uL2NvbGxpc2lvbi9QYWlyXCI6NyxcIi4uL2NvbGxpc2lvbi9QYWlyc1wiOjgsXCIuLi9jb2xsaXNpb24vUXVlcnlcIjo5LFwiLi4vY29sbGlzaW9uL1Jlc29sdmVyXCI6MTAsXCIuLi9jb2xsaXNpb24vU0FUXCI6MTEsXCIuLi9jb25zdHJhaW50L0NvbnN0cmFpbnRcIjoxMixcIi4uL2NvbnN0cmFpbnQvTW91c2VDb25zdHJhaW50XCI6MTMsXCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi4vY29yZS9FbmdpbmVcIjoxNSxcIi4uL2NvcmUvRXZlbnRzXCI6MTYsXCIuLi9jb3JlL01hdHRlclwiOjE3LFwiLi4vY29yZS9NZXRyaWNzXCI6MTgsXCIuLi9jb3JlL01vdXNlXCI6MTksXCIuLi9jb3JlL1BsdWdpblwiOjIwLFwiLi4vY29yZS9SdW5uZXJcIjoyMSxcIi4uL2NvcmUvU2xlZXBpbmdcIjoyMixcIi4uL2ZhY3RvcnkvQm9kaWVzXCI6MjMsXCIuLi9mYWN0b3J5L0NvbXBvc2l0ZXNcIjoyNCxcIi4uL2dlb21ldHJ5L0F4ZXNcIjoyNSxcIi4uL2dlb21ldHJ5L0JvdW5kc1wiOjI2LFwiLi4vZ2VvbWV0cnkvU3ZnXCI6MjcsXCIuLi9nZW9tZXRyeS9WZWN0b3JcIjoyOCxcIi4uL2dlb21ldHJ5L1ZlcnRpY2VzXCI6MjksXCIuLi9yZW5kZXIvUmVuZGVyXCI6MzEsXCIuLi9yZW5kZXIvUmVuZGVyUGl4aVwiOjMyfV0sMzE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLlJlbmRlcmAgbW9kdWxlIGlzIGEgc2ltcGxlIEhUTUw1IGNhbnZhcyBiYXNlZCByZW5kZXJlciBmb3IgdmlzdWFsaXNpbmcgaW5zdGFuY2VzIG9mIGBNYXR0ZXIuRW5naW5lYC5cbiogSXQgaXMgaW50ZW5kZWQgZm9yIGRldmVsb3BtZW50IGFuZCBkZWJ1Z2dpbmcgcHVycG9zZXMsIGJ1dCBtYXkgYWxzbyBiZSBzdWl0YWJsZSBmb3Igc2ltcGxlIGdhbWVzLlxuKiBJdCBpbmNsdWRlcyBhIG51bWJlciBvZiBkcmF3aW5nIG9wdGlvbnMgaW5jbHVkaW5nIHdpcmVmcmFtZSwgdmVjdG9yIHdpdGggc3VwcG9ydCBmb3Igc3ByaXRlcyBhbmQgdmlld3BvcnRzLlxuKlxuKiBAY2xhc3MgUmVuZGVyXG4qL1xuXG52YXIgUmVuZGVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyO1xuXG52YXIgQ29tbW9uID0gX2RlcmVxXygnLi4vY29yZS9Db21tb24nKTtcbnZhciBDb21wb3NpdGUgPSBfZGVyZXFfKCcuLi9ib2R5L0NvbXBvc2l0ZScpO1xudmFyIEJvdW5kcyA9IF9kZXJlcV8oJy4uL2dlb21ldHJ5L0JvdW5kcycpO1xudmFyIEV2ZW50cyA9IF9kZXJlcV8oJy4uL2NvcmUvRXZlbnRzJyk7XG52YXIgR3JpZCA9IF9kZXJlcV8oJy4uL2NvbGxpc2lvbi9HcmlkJyk7XG52YXIgVmVjdG9yID0gX2RlcmVxXygnLi4vZ2VvbWV0cnkvVmVjdG9yJyk7XG52YXIgTW91c2UgPSBfZGVyZXFfKCcuLi9jb3JlL01vdXNlJyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBmdW5jdGlvbihjYWxsYmFjayl7IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhDb21tb24ubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xuXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmVuZGVyZXIuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtyZW5kZXJ9IEEgbmV3IHJlbmRlcmVyXG4gICAgICovXG4gICAgUmVuZGVyLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY29udHJvbGxlcjogUmVuZGVyLFxuICAgICAgICAgICAgZW5naW5lOiBudWxsLFxuICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgICAgIGNhbnZhczogbnVsbCxcbiAgICAgICAgICAgIG1vdXNlOiBudWxsLFxuICAgICAgICAgICAgZnJhbWVSZXF1ZXN0SWQ6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICBwaXhlbFJhdGlvOiAxLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMTgxODFkJyxcbiAgICAgICAgICAgICAgICB3aXJlZnJhbWVCYWNrZ3JvdW5kOiAnIzBmMGYxMycsXG4gICAgICAgICAgICAgICAgaGFzQm91bmRzOiAhIW9wdGlvbnMuYm91bmRzLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93U2xlZXBpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd0RlYnVnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QnJvYWRwaGFzZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0JvdW5kczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1ZlbG9jaXR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Q29sbGlzaW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1NlcGFyYXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QXhlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1Bvc2l0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0FuZ2xlSW5kaWNhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93SWRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93U2hhZG93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1ZlcnRleE51bWJlcnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dDb252ZXhIdWxsczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dNb3VzZVBvc2l0aW9uOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZW5kZXIgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAocmVuZGVyLmNhbnZhcykge1xuICAgICAgICAgICAgcmVuZGVyLmNhbnZhcy53aWR0aCA9IHJlbmRlci5vcHRpb25zLndpZHRoIHx8IHJlbmRlci5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICByZW5kZXIuY2FudmFzLmhlaWdodCA9IHJlbmRlci5vcHRpb25zLmhlaWdodCB8fCByZW5kZXIuY2FudmFzLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlci5tb3VzZSA9IG9wdGlvbnMubW91c2U7XG4gICAgICAgIHJlbmRlci5lbmdpbmUgPSBvcHRpb25zLmVuZ2luZTtcbiAgICAgICAgcmVuZGVyLmNhbnZhcyA9IHJlbmRlci5jYW52YXMgfHwgX2NyZWF0ZUNhbnZhcyhyZW5kZXIub3B0aW9ucy53aWR0aCwgcmVuZGVyLm9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgcmVuZGVyLmNvbnRleHQgPSByZW5kZXIuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHJlbmRlci50ZXh0dXJlcyA9IHt9O1xuXG4gICAgICAgIHJlbmRlci5ib3VuZHMgPSByZW5kZXIuYm91bmRzIHx8IHtcbiAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1heDoge1xuICAgICAgICAgICAgICAgIHg6IHJlbmRlci5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogcmVuZGVyLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyAhPT0gMSkge1xuICAgICAgICAgICAgUmVuZGVyLnNldFBpeGVsUmF0aW8ocmVuZGVyLCByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21tb24uaXNFbGVtZW50KHJlbmRlci5lbGVtZW50KSkge1xuICAgICAgICAgICAgcmVuZGVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQocmVuZGVyLmNhbnZhcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXJlbmRlci5jYW52YXMucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgQ29tbW9uLmxvZygnUmVuZGVyLmNyZWF0ZTogb3B0aW9ucy5lbGVtZW50IHdhcyB1bmRlZmluZWQsIHJlbmRlci5jYW52YXMgd2FzIGNyZWF0ZWQgYnV0IG5vdCBhcHBlbmRlZCcsICd3YXJuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVuZGVyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb250aW51b3VzbHkgdXBkYXRlcyB0aGUgcmVuZGVyIGNhbnZhcyBvbiB0aGUgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgZXZlbnQuXG4gICAgICogQG1ldGhvZCBydW5cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLnJ1biA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICAoZnVuY3Rpb24gbG9vcCh0aW1lKXtcbiAgICAgICAgICAgIHJlbmRlci5mcmFtZVJlcXVlc3RJZCA9IF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgICAgICBSZW5kZXIud29ybGQocmVuZGVyKTtcbiAgICAgICAgfSkoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRW5kcyBleGVjdXRpb24gb2YgYFJlbmRlci5ydW5gIG9uIHRoZSBnaXZlbiBgcmVuZGVyYCwgYnkgY2FuY2VsaW5nIHRoZSBhbmltYXRpb24gZnJhbWUgcmVxdWVzdCBldmVudCBsb29wLlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuc3RvcCA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVuZGVyLmZyYW1lUmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcGl4ZWwgcmF0aW8gb2YgdGhlIHJlbmRlcmVyIGFuZCB1cGRhdGVzIHRoZSBjYW52YXMuXG4gICAgICogVG8gYXV0b21hdGljYWxseSBkZXRlY3QgdGhlIGNvcnJlY3QgcmF0aW8sIHBhc3MgdGhlIHN0cmluZyBgJ2F1dG8nYCBmb3IgYHBpeGVsUmF0aW9gLlxuICAgICAqIEBtZXRob2Qgc2V0UGl4ZWxSYXRpb1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpb1xuICAgICAqL1xuICAgIFJlbmRlci5zZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24ocmVuZGVyLCBwaXhlbFJhdGlvKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBjYW52YXMgPSByZW5kZXIuY2FudmFzO1xuXG4gICAgICAgIGlmIChwaXhlbFJhdGlvID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgIHBpeGVsUmF0aW8gPSBfZ2V0UGl4ZWxSYXRpbyhjYW52YXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5waXhlbFJhdGlvID0gcGl4ZWxSYXRpbztcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnZGF0YS1waXhlbC1yYXRpbycsIHBpeGVsUmF0aW8pO1xuICAgICAgICBjYW52YXMud2lkdGggPSBvcHRpb25zLndpZHRoICogcGl4ZWxSYXRpbztcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICogcGl4ZWxSYXRpbztcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCArICdweCc7XG4gICAgICAgIHJlbmRlci5jb250ZXh0LnNjYWxlKHBpeGVsUmF0aW8sIHBpeGVsUmF0aW8pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgYW5kIHNpemVzIHRoZSB2aWV3cG9ydCBhcm91bmQgdGhlIGdpdmVuIG9iamVjdCBib3VuZHMuXG4gICAgICogT2JqZWN0cyBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgKiAtIGBvYmplY3QuYm91bmRzYFxuICAgICAqIC0gYG9iamVjdC5wb3NpdGlvbmBcbiAgICAgKiAtIGBvYmplY3QubWluYCBhbmQgYG9iamVjdC5tYXhgXG4gICAgICogLSBgb2JqZWN0LnhgIGFuZCBgb2JqZWN0LnlgXG4gICAgICogQG1ldGhvZCBsb29rQXRcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtvYmplY3RbXX0gb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcGFkZGluZ11cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtjZW50ZXI9dHJ1ZV1cbiAgICAgKi9cbiAgICBSZW5kZXIubG9va0F0ID0gZnVuY3Rpb24ocmVuZGVyLCBvYmplY3RzLCBwYWRkaW5nLCBjZW50ZXIpIHtcbiAgICAgICAgY2VudGVyID0gdHlwZW9mIGNlbnRlciAhPT0gJ3VuZGVmaW5lZCcgPyBjZW50ZXIgOiB0cnVlO1xuICAgICAgICBvYmplY3RzID0gQ29tbW9uLmlzQXJyYXkob2JqZWN0cykgPyBvYmplY3RzIDogW29iamVjdHNdO1xuICAgICAgICBwYWRkaW5nID0gcGFkZGluZyB8fCB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZpbmQgYm91bmRzIG9mIGFsbCBvYmplY3RzXG4gICAgICAgIHZhciBib3VuZHMgPSB7XG4gICAgICAgICAgICBtaW46IHsgeDogSW5maW5pdHksIHk6IEluZmluaXR5IH0sXG4gICAgICAgICAgICBtYXg6IHsgeDogLUluZmluaXR5LCB5OiAtSW5maW5pdHkgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV0sXG4gICAgICAgICAgICAgICAgbWluID0gb2JqZWN0LmJvdW5kcyA/IG9iamVjdC5ib3VuZHMubWluIDogKG9iamVjdC5taW4gfHwgb2JqZWN0LnBvc2l0aW9uIHx8IG9iamVjdCksXG4gICAgICAgICAgICAgICAgbWF4ID0gb2JqZWN0LmJvdW5kcyA/IG9iamVjdC5ib3VuZHMubWF4IDogKG9iamVjdC5tYXggfHwgb2JqZWN0LnBvc2l0aW9uIHx8IG9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmIChtaW4gJiYgbWF4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbi54IDwgYm91bmRzLm1pbi54KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWluLnggPSBtaW4ueDtcblxuICAgICAgICAgICAgICAgIGlmIChtYXgueCA+IGJvdW5kcy5tYXgueClcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1heC54ID0gbWF4Lng7XG5cbiAgICAgICAgICAgICAgICBpZiAobWluLnkgPCBib3VuZHMubWluLnkpXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueSA9IG1pbi55O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heC55ID4gYm91bmRzLm1heC55KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWF4LnkgPSBtYXgueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmQgcmF0aW9zXG4gICAgICAgIHZhciB3aWR0aCA9IChib3VuZHMubWF4LnggLSBib3VuZHMubWluLngpICsgMiAqIHBhZGRpbmcueCxcbiAgICAgICAgICAgIGhlaWdodCA9IChib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnkpICsgMiAqIHBhZGRpbmcueSxcbiAgICAgICAgICAgIHZpZXdIZWlnaHQgPSByZW5kZXIuY2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgIHZpZXdXaWR0aCA9IHJlbmRlci5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICBvdXRlclJhdGlvID0gdmlld1dpZHRoIC8gdmlld0hlaWdodCxcbiAgICAgICAgICAgIGlubmVyUmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICAgIHNjYWxlWCA9IDEsXG4gICAgICAgICAgICBzY2FsZVkgPSAxO1xuXG4gICAgICAgIC8vIGZpbmQgc2NhbGUgZmFjdG9yXG4gICAgICAgIGlmIChpbm5lclJhdGlvID4gb3V0ZXJSYXRpbykge1xuICAgICAgICAgICAgc2NhbGVZID0gaW5uZXJSYXRpbyAvIG91dGVyUmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2FsZVggPSBvdXRlclJhdGlvIC8gaW5uZXJSYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuYWJsZSBib3VuZHNcbiAgICAgICAgcmVuZGVyLm9wdGlvbnMuaGFzQm91bmRzID0gdHJ1ZTtcblxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgc2l6ZVxuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi54ID0gYm91bmRzLm1pbi54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC54ID0gYm91bmRzLm1pbi54ICsgd2lkdGggKiBzY2FsZVg7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWluLnkgPSBib3VuZHMubWluLnk7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgPSBib3VuZHMubWluLnkgKyBoZWlnaHQgKiBzY2FsZVk7XG5cbiAgICAgICAgLy8gY2VudGVyXG4gICAgICAgIGlmIChjZW50ZXIpIHtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWluLnggKz0gd2lkdGggKiAwLjUgLSAod2lkdGggKiBzY2FsZVgpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueCArPSB3aWR0aCAqIDAuNSAtICh3aWR0aCAqIHNjYWxlWCkgKiAwLjU7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55ICs9IGhlaWdodCAqIDAuNSAtIChoZWlnaHQgKiBzY2FsZVkpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSArPSBoZWlnaHQgKiAwLjUgLSAoaGVpZ2h0ICogc2NhbGVZKSAqIDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhZGRpbmdcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueCAtPSBwYWRkaW5nLng7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnggLT0gcGFkZGluZy54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55IC09IHBhZGRpbmcueTtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSAtPSBwYWRkaW5nLnk7XG5cbiAgICAgICAgLy8gdXBkYXRlIG1vdXNlXG4gICAgICAgIGlmIChyZW5kZXIubW91c2UpIHtcbiAgICAgICAgICAgIE1vdXNlLnNldFNjYWxlKHJlbmRlci5tb3VzZSwge1xuICAgICAgICAgICAgICAgIHg6IChyZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCkgLyByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIHk6IChyZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSkgLyByZW5kZXIuY2FudmFzLmhlaWdodFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE1vdXNlLnNldE9mZnNldChyZW5kZXIubW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHZpZXdwb3J0IHRyYW5zZm9ybXMgYmFzZWQgb24gYHJlbmRlci5ib3VuZHNgIHRvIGEgcmVuZGVyIGNvbnRleHQuXG4gICAgICogQG1ldGhvZCBzdGFydFZpZXdUcmFuc2Zvcm1cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLnN0YXJ0Vmlld1RyYW5zZm9ybSA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICB2YXIgYm91bmRzV2lkdGggPSByZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgIGJvdW5kc0hlaWdodCA9IHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgYm91bmRzU2NhbGVYID0gYm91bmRzV2lkdGggLyByZW5kZXIub3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgIGJvdW5kc1NjYWxlWSA9IGJvdW5kc0hlaWdodCAvIHJlbmRlci5vcHRpb25zLmhlaWdodDtcblxuICAgICAgICByZW5kZXIuY29udGV4dC5zY2FsZSgxIC8gYm91bmRzU2NhbGVYLCAxIC8gYm91bmRzU2NhbGVZKTtcbiAgICAgICAgcmVuZGVyLmNvbnRleHQudHJhbnNsYXRlKC1yZW5kZXIuYm91bmRzLm1pbi54LCAtcmVuZGVyLmJvdW5kcy5taW4ueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyBhbGwgdHJhbnNmb3JtcyBvbiB0aGUgcmVuZGVyIGNvbnRleHQuXG4gICAgICogQG1ldGhvZCBlbmRWaWV3VHJhbnNmb3JtXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5lbmRWaWV3VHJhbnNmb3JtID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIHJlbmRlci5jb250ZXh0LnNldFRyYW5zZm9ybShyZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvLCAwLCAwLCByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvLCAwLCAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgZ2l2ZW4gYGVuZ2luZWAncyBgTWF0dGVyLldvcmxkYCBvYmplY3QuXG4gICAgICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGFsbCByZW5kZXJpbmcgYW5kIHNob3VsZCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGUgc2NlbmUgY2hhbmdlcy5cbiAgICAgKiBAbWV0aG9kIHdvcmxkXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci53b3JsZCA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICB2YXIgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIHdvcmxkID0gZW5naW5lLndvcmxkLFxuICAgICAgICAgICAgY2FudmFzID0gcmVuZGVyLmNhbnZhcyxcbiAgICAgICAgICAgIGNvbnRleHQgPSByZW5kZXIuY29udGV4dCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGFsbEJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMod29ybGQpLFxuICAgICAgICAgICAgYWxsQ29uc3RyYWludHMgPSBDb21wb3NpdGUuYWxsQ29uc3RyYWludHMod29ybGQpLFxuICAgICAgICAgICAgYmFja2dyb3VuZCA9IG9wdGlvbnMud2lyZWZyYW1lcyA/IG9wdGlvbnMud2lyZWZyYW1lQmFja2dyb3VuZCA6IG9wdGlvbnMuYmFja2dyb3VuZCxcbiAgICAgICAgICAgIGJvZGllcyA9IFtdLFxuICAgICAgICAgICAgY29uc3RyYWludHMgPSBbXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgdmFyIGV2ZW50ID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiBlbmdpbmUudGltaW5nLnRpbWVzdGFtcFxuICAgICAgICB9O1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJlbmRlciwgJ2JlZm9yZVJlbmRlcicsIGV2ZW50KTtcblxuICAgICAgICAvLyBhcHBseSBiYWNrZ3JvdW5kIGlmIGl0IGhhcyBjaGFuZ2VkXG4gICAgICAgIGlmIChyZW5kZXIuY3VycmVudEJhY2tncm91bmQgIT09IGJhY2tncm91bmQpXG4gICAgICAgICAgICBfYXBwbHlCYWNrZ3JvdW5kKHJlbmRlciwgYmFja2dyb3VuZCk7XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIGNhbnZhcyB3aXRoIGEgdHJhbnNwYXJlbnQgZmlsbCwgdG8gYWxsb3cgdGhlIGNhbnZhcyBiYWNrZ3JvdW5kIHRvIHNob3dcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLWluJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuXG4gICAgICAgIC8vIGhhbmRsZSBib3VuZHNcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzQm91bmRzKSB7XG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IGJvZGllcyB0aGF0IGFyZSBub3QgaW4gdmlld1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFsbEJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gYWxsQm9kaWVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChCb3VuZHMub3ZlcmxhcHMoYm9keS5ib3VuZHMsIHJlbmRlci5ib3VuZHMpKVxuICAgICAgICAgICAgICAgICAgICBib2RpZXMucHVzaChib2R5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBjb25zdHJhaW50cyB0aGF0IGFyZSBub3QgaW4gdmlld1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFsbENvbnN0cmFpbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBhbGxDb25zdHJhaW50c1tpXSxcbiAgICAgICAgICAgICAgICAgICAgYm9keUEgPSBjb25zdHJhaW50LmJvZHlBLFxuICAgICAgICAgICAgICAgICAgICBib2R5QiA9IGNvbnN0cmFpbnQuYm9keUIsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QVdvcmxkID0gY29uc3RyYWludC5wb2ludEEsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50QldvcmxkID0gY29uc3RyYWludC5wb2ludEI7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm9keUEpIHBvaW50QVdvcmxkID0gVmVjdG9yLmFkZChib2R5QS5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEEpO1xuICAgICAgICAgICAgICAgIGlmIChib2R5QikgcG9pbnRCV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50Qik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBvaW50QVdvcmxkIHx8ICFwb2ludEJXb3JsZClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKHJlbmRlci5ib3VuZHMsIHBvaW50QVdvcmxkKSB8fCBCb3VuZHMuY29udGFpbnMocmVuZGVyLmJvdW5kcywgcG9pbnRCV29ybGQpKVxuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm0gdGhlIHZpZXdcbiAgICAgICAgICAgIFJlbmRlci5zdGFydFZpZXdUcmFuc2Zvcm0ocmVuZGVyKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIG1vdXNlXG4gICAgICAgICAgICBpZiAocmVuZGVyLm1vdXNlKSB7XG4gICAgICAgICAgICAgICAgTW91c2Uuc2V0U2NhbGUocmVuZGVyLm1vdXNlLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IChyZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCkgLyByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICB5OiAocmVuZGVyLmJvdW5kcy5tYXgueSAtIHJlbmRlci5ib3VuZHMubWluLnkpIC8gcmVuZGVyLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIE1vdXNlLnNldE9mZnNldChyZW5kZXIubW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gYWxsQ29uc3RyYWludHM7XG4gICAgICAgICAgICBib2RpZXMgPSBhbGxCb2RpZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMud2lyZWZyYW1lcyB8fCAoZW5naW5lLmVuYWJsZVNsZWVwaW5nICYmIG9wdGlvbnMuc2hvd1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgLy8gZnVsbHkgZmVhdHVyZWQgcmVuZGVyaW5nIG9mIGJvZGllc1xuICAgICAgICAgICAgUmVuZGVyLmJvZGllcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93Q29udmV4SHVsbHMpXG4gICAgICAgICAgICAgICAgUmVuZGVyLmJvZHlDb252ZXhIdWxscyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIC8vIG9wdGltaXNlZCBtZXRob2QgZm9yIHdpcmVmcmFtZXMgb25seVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlXaXJlZnJhbWVzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dCb3VuZHMpXG4gICAgICAgICAgICBSZW5kZXIuYm9keUJvdW5kcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0F4ZXMgfHwgb3B0aW9ucy5zaG93QW5nbGVJbmRpY2F0b3IpXG4gICAgICAgICAgICBSZW5kZXIuYm9keUF4ZXMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dQb3NpdGlvbnMpXG4gICAgICAgICAgICBSZW5kZXIuYm9keVBvc2l0aW9ucyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1ZlbG9jaXR5KVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlWZWxvY2l0eShyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0lkcylcbiAgICAgICAgICAgIFJlbmRlci5ib2R5SWRzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93U2VwYXJhdGlvbnMpXG4gICAgICAgICAgICBSZW5kZXIuc2VwYXJhdGlvbnMocmVuZGVyLCBlbmdpbmUucGFpcnMubGlzdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0NvbGxpc2lvbnMpXG4gICAgICAgICAgICBSZW5kZXIuY29sbGlzaW9ucyhyZW5kZXIsIGVuZ2luZS5wYWlycy5saXN0LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93VmVydGV4TnVtYmVycylcbiAgICAgICAgICAgIFJlbmRlci52ZXJ0ZXhOdW1iZXJzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93TW91c2VQb3NpdGlvbilcbiAgICAgICAgICAgIFJlbmRlci5tb3VzZVBvc2l0aW9uKHJlbmRlciwgcmVuZGVyLm1vdXNlLCBjb250ZXh0KTtcblxuICAgICAgICBSZW5kZXIuY29uc3RyYWludHMoY29uc3RyYWludHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dCcm9hZHBoYXNlICYmIGVuZ2luZS5icm9hZHBoYXNlLmNvbnRyb2xsZXIgPT09IEdyaWQpXG4gICAgICAgICAgICBSZW5kZXIuZ3JpZChyZW5kZXIsIGVuZ2luZS5icm9hZHBoYXNlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93RGVidWcpXG4gICAgICAgICAgICBSZW5kZXIuZGVidWcocmVuZGVyLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIC8vIHJldmVydCB2aWV3IHRyYW5zZm9ybXNcbiAgICAgICAgICAgIFJlbmRlci5lbmRWaWV3VHJhbnNmb3JtKHJlbmRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihyZW5kZXIsICdhZnRlclJlbmRlcicsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgZGVidWdcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmRlYnVnID0gZnVuY3Rpb24ocmVuZGVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIG1ldHJpY3MgPSBlbmdpbmUubWV0cmljcyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMod29ybGQpLFxuICAgICAgICAgICAgc3BhY2UgPSBcIiAgICBcIjtcblxuICAgICAgICBpZiAoZW5naW5lLnRpbWluZy50aW1lc3RhbXAgLSAocmVuZGVyLmRlYnVnVGltZXN0YW1wIHx8IDApID49IDUwMCkge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZiAobWV0cmljcy50aW1pbmcpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiZnBzOiBcIiArIE1hdGgucm91bmQobWV0cmljcy50aW1pbmcuZnBzKSArIHNwYWNlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHJlbmRlci5kZWJ1Z1N0cmluZyA9IHRleHQ7XG4gICAgICAgICAgICByZW5kZXIuZGVidWdUaW1lc3RhbXAgPSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZW5kZXIuZGVidWdTdHJpbmcpIHtcbiAgICAgICAgICAgIGMuZm9udCA9IFwiMTJweCBBcmlhbFwiO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjUpJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNwbGl0ID0gcmVuZGVyLmRlYnVnU3RyaW5nLnNwbGl0KCdcXG4nKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGMuZmlsbFRleHQoc3BsaXRbaV0sIDUwLCA1MCArIGkgKiAxOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnRbXX0gY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuY29uc3RyYWludHMgPSBmdW5jdGlvbihjb25zdHJhaW50cywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQ7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKCFjb25zdHJhaW50LnJlbmRlci52aXNpYmxlIHx8ICFjb25zdHJhaW50LnBvaW50QSB8fCAhY29uc3RyYWludC5wb2ludEIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDtcblxuICAgICAgICAgICAgaWYgKGJvZHlBKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBWZWN0b3IuYWRkKGJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gY29uc3RyYWludC5wb2ludEE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci50eXBlID09PSAncGluJykge1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5hcmMoc3RhcnQueCwgc3RhcnQueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2R5Qikge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50Qik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gY29uc3RyYWludC5wb2ludEI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci50eXBlID09PSAnc3ByaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKGVuZCwgc3RhcnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLnBlcnAoVmVjdG9yLm5vcm1hbGlzZShkZWx0YSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29pbHMgPSBNYXRoLmNlaWwoQ29tbW9uLmNsYW1wKGNvbnN0cmFpbnQubGVuZ3RoIC8gNSwgMTIsIDIwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBjb2lsczsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBqICUgMiA9PT0gMCA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQueCArIGRlbHRhLnggKiAoaiAvIGNvaWxzKSArIG5vcm1hbC54ICogb2Zmc2V0ICogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydC55ICsgZGVsdGEueSAqIChqIC8gY29pbHMpICsgbm9ybWFsLnkgKiBvZmZzZXQgKiA0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8oZW5kLngsIGVuZC55KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLmxpbmVXaWR0aCkge1xuICAgICAgICAgICAgICAgIGMubGluZVdpZHRoID0gY29uc3RyYWludC5yZW5kZXIubGluZVdpZHRoO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSBjb25zdHJhaW50LnJlbmRlci5zdHJva2VTdHlsZTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIuYW5jaG9ycykge1xuICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gY29uc3RyYWludC5yZW5kZXIuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmFyYyhzdGFydC54LCBzdGFydC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5hcmMoZW5kLngsIGVuZC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5U2hhZG93c1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlTaGFkb3dzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuY2lyY2xlUmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmFyYyhib2R5LnBvc2l0aW9uLngsIGJvZHkucG9zaXRpb24ueSwgYm9keS5jaXJjbGVSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMubW92ZVRvKGJvZHkudmVydGljZXNbMF0ueCwgYm9keS52ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IGJvZHkudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8oYm9keS52ZXJ0aWNlc1tqXS54LCBib2R5LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gYm9keS5wb3NpdGlvbi54IC0gcmVuZGVyLm9wdGlvbnMud2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gYm9keS5wb3NpdGlvbi55IC0gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0ICogMC4yLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoZGlzdGFuY2VYKSArIE1hdGguYWJzKGRpc3RhbmNlWSk7XG5cbiAgICAgICAgICAgIGMuc2hhZG93Q29sb3IgPSAncmdiYSgwLDAsMCwwLjE1KSc7XG4gICAgICAgICAgICBjLnNoYWRvd09mZnNldFggPSAwLjA1ICogZGlzdGFuY2VYO1xuICAgICAgICAgICAgYy5zaGFkb3dPZmZzZXRZID0gMC4wNSAqIGRpc3RhbmNlWTtcbiAgICAgICAgICAgIGMuc2hhZG93Qmx1ciA9IDEgKyAxMiAqIE1hdGgubWluKDEsIGRpc3RhbmNlIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIGMuZmlsbCgpO1xuXG4gICAgICAgICAgICBjLnNoYWRvd0NvbG9yID0gbnVsbDtcbiAgICAgICAgICAgIGMuc2hhZG93T2Zmc2V0WCA9IG51bGw7XG4gICAgICAgICAgICBjLnNoYWRvd09mZnNldFkgPSBudWxsO1xuICAgICAgICAgICAgYy5zaGFkb3dCbHVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2RpZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXMgPSBvcHRpb25zLnNob3dJbnRlcm5hbEVkZ2VzIHx8ICFvcHRpb25zLndpcmVmcmFtZXMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGsgPSBib2R5LnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcblxuICAgICAgICAgICAgICAgIGlmICghcGFydC5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93U2xlZXBpbmcgJiYgYm9keS5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuZ2xvYmFsQWxwaGEgPSAwLjUgKiBwYXJ0LnJlbmRlci5vcGFjaXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5yZW5kZXIub3BhY2l0eSAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjLmdsb2JhbEFscGhhID0gcGFydC5yZW5kZXIub3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFydC5yZW5kZXIuc3ByaXRlICYmIHBhcnQucmVuZGVyLnNwcml0ZS50ZXh0dXJlICYmICFvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydCBzcHJpdGVcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSA9IHBhcnQucmVuZGVyLnNwcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSBfZ2V0VGV4dHVyZShyZW5kZXIsIHNwcml0ZS50ZXh0dXJlKTtcblxuICAgICAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZShwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgIGMucm90YXRlKHBhcnQuYW5nbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUud2lkdGggKiAtc3ByaXRlLnhPZmZzZXQgKiBzcHJpdGUueFNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5oZWlnaHQgKiAtc3ByaXRlLnlPZmZzZXQgKiBzcHJpdGUueVNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS53aWR0aCAqIHNwcml0ZS54U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmhlaWdodCAqIHNwcml0ZS55U2NhbGVcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXZlcnQgdHJhbnNsYXRpb24sIGhvcGVmdWxseSBmYXN0ZXIgdGhhbiBzYXZlIC8gcmVzdG9yZVxuICAgICAgICAgICAgICAgICAgICBjLnJvdGF0ZSgtcGFydC5hbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGMudHJhbnNsYXRlKC1wYXJ0LnBvc2l0aW9uLngsIC1wYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnQgcG9seWdvblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5jaXJjbGVSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmFyYyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSwgcGFydC5jaXJjbGVSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFydC52ZXJ0aWNlc1tqIC0gMV0uaXNJbnRlcm5hbCB8fCBzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnZlcnRpY2VzW2pdLmlzSW50ZXJuYWwgJiYgIXNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS54LCBwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gcGFydC5yZW5kZXIuZmlsbFN0eWxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5yZW5kZXIubGluZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSBwYXJ0LnJlbmRlci5saW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHBhcnQucmVuZGVyLnN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGMuZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICcjYmJiJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmdsb2JhbEFscGhhID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBPcHRpbWlzZWQgbWV0aG9kIGZvciBkcmF3aW5nIGJvZHkgd2lyZWZyYW1lcyBpbiBvbmUgcGFzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5V2lyZWZyYW1lc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlXaXJlZnJhbWVzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXMgPSByZW5kZXIub3B0aW9ucy5zaG93SW50ZXJuYWxFZGdlcyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGFsbCBib2RpZXNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGZvciAoayA9IGJvZHkucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBrIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHBhcnQgPSBib2R5LnBhcnRzW2tdO1xuXG4gICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IHBhcnQudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJ0LnZlcnRpY2VzW2ogLSAxXS5pc0ludGVybmFsIHx8IHNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC52ZXJ0aWNlc1tqXS5pc0ludGVybmFsICYmICFzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLngsIHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbMF0ueCwgcGFydC52ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9ICcjYmJiJztcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogT3B0aW1pc2VkIG1ldGhvZCBmb3IgZHJhd2luZyBib2R5IGNvbnZleCBodWxsIHdpcmVmcmFtZXMgaW4gb25lIHBhc3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUNvbnZleEh1bGxzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUNvbnZleEh1bGxzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY29udmV4IGh1bGxzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSB8fCBib2R5LnBhcnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keS52ZXJ0aWNlc1swXS54LCBib2R5LnZlcnRpY2VzWzBdLnkpO1xuXG4gICAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgYm9keS52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGMubGluZVRvKGJvZHkudmVydGljZXNbal0ueCwgYm9keS52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYy5saW5lVG8oYm9keS52ZXJ0aWNlc1swXS54LCBib2R5LnZlcnRpY2VzWzBdLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yKSc7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYm9keSB2ZXJ0ZXggbnVtYmVycy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgdmVydGV4TnVtYmVyc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLnZlcnRleE51bWJlcnMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gYm9kaWVzW2ldLnBhcnRzO1xuICAgICAgICAgICAgZm9yIChrID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBrIDwgcGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2tdO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBwYXJ0LnZlcnRpY2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yKSc7XG4gICAgICAgICAgICAgICAgICAgIGMuZmlsbFRleHQoaSArICdfJyArIGosIHBhcnQucG9zaXRpb24ueCArIChwYXJ0LnZlcnRpY2VzW2pdLnggLSBwYXJ0LnBvc2l0aW9uLngpICogMC44LCBwYXJ0LnBvc2l0aW9uLnkgKyAocGFydC52ZXJ0aWNlc1tqXS55IC0gcGFydC5wb3NpdGlvbi55KSAqIDAuOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgbW91c2UgcG9zaXRpb24uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIG1vdXNlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIubW91c2VQb3NpdGlvbiA9IGZ1bmN0aW9uKHJlbmRlciwgbW91c2UsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0O1xuICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknO1xuICAgICAgICBjLmZpbGxUZXh0KG1vdXNlLnBvc2l0aW9uLnggKyAnICAnICsgbW91c2UucG9zaXRpb24ueSwgbW91c2UucG9zaXRpb24ueCArIDUsIG1vdXNlLnBvc2l0aW9uLnkgLSA1KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBib3VuZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUJvdW5kc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlCb3VuZHMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5yZW5kZXIudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGJvZGllc1tpXS5wYXJ0cztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYy5yZWN0KHBhcnQuYm91bmRzLm1pbi54LCBwYXJ0LmJvdW5kcy5taW4ueSwgcGFydC5ib3VuZHMubWF4LnggLSBwYXJ0LmJvdW5kcy5taW4ueCwgcGFydC5ib3VuZHMubWF4LnkgLSBwYXJ0LmJvdW5kcy5taW4ueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgwLDAsMCwwLjEpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBhbmdsZSBpbmRpY2F0b3JzIGFuZCBheGVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlBeGVzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keUF4ZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgaztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gYm9keS5wYXJ0cztcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93QXhlcykge1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBhbGwgYXhlc1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IHBhcnQuYXhlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF4aXMgPSBwYXJ0LmF4ZXNba107XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnBvc2l0aW9uLnggKyBheGlzLnggKiAyMCwgcGFydC5wb3NpdGlvbi55ICsgYXhpcy55ICogMjApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBwYXJ0LmF4ZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciBhIHNpbmdsZSBheGlzIGluZGljYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8oKHBhcnQudmVydGljZXNbMF0ueCArIHBhcnQudmVydGljZXNbcGFydC52ZXJ0aWNlcy5sZW5ndGgtMV0ueCkgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhcnQudmVydGljZXNbMF0ueSArIHBhcnQudmVydGljZXNbcGFydC52ZXJ0aWNlcy5sZW5ndGgtMV0ueSkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnaW5kaWFucmVkJztcbiAgICAgICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJztcbiAgICAgICAgICAgIGMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ292ZXJsYXknO1xuICAgICAgICAgICAgYy5saW5lV2lkdGggPSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgYy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IHBvc2l0aW9uc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5UG9zaXRpb25zXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keVBvc2l0aW9ucyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGN1cnJlbnQgcG9zaXRpb25zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIHBhcnQgPSBib2R5LnBhcnRzW2tdO1xuICAgICAgICAgICAgICAgIGMuYXJjKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55LCAzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdpbmRpYW5yZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjUpJztcbiAgICAgICAgfVxuICAgICAgICBjLmZpbGwoKTtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBwcmV2aW91cyBwb3NpdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcbiAgICAgICAgICAgIGlmIChib2R5LnJlbmRlci52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgYy5hcmMoYm9keS5wb3NpdGlvblByZXYueCwgYm9keS5wb3NpdGlvblByZXYueSwgMiwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC44KSc7XG4gICAgICAgIGMuZmlsbCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyBib2R5IHZlbG9jaXR5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlWZWxvY2l0eSA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dDtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjLm1vdmVUbyhib2R5LnBvc2l0aW9uLngsIGJvZHkucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5LnBvc2l0aW9uLnggKyAoYm9keS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvblByZXYueCkgKiAyLCBib2R5LnBvc2l0aW9uLnkgKyAoYm9keS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvblByZXYueSkgKiAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMztcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdjb3JuZmxvd2VyYmx1ZSc7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgaWRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlJZHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5SWRzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFib2RpZXNbaV0ucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGJvZGllc1tpXS5wYXJ0cztcbiAgICAgICAgICAgIGZvciAoaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICBjLmZvbnQgPSBcIjEycHggQXJpYWxcIjtcbiAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuICAgICAgICAgICAgICAgIGMuZmlsbFRleHQocGFydC5pZCwgcGFydC5wb3NpdGlvbi54ICsgMTAsIHBhcnQucG9zaXRpb24ueSAtIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBjb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5jb2xsaXNpb25zID0gZnVuY3Rpb24ocmVuZGVyLCBwYWlycywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgY29ycmVjdGVkLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNvbGxpc2lvbiBwb3NpdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGFpci5hY3RpdmVDb250YWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWN0ID0gcGFpci5hY3RpdmVDb250YWN0c1tqXSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4ID0gY29udGFjdC52ZXJ0ZXg7XG4gICAgICAgICAgICAgICAgYy5yZWN0KHZlcnRleC54IC0gMS41LCB2ZXJ0ZXgueSAtIDEuNSwgMy41LCAzLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ29yYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgYy5maWxsKCk7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY29sbGlzaW9uIG5vcm1hbHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG5cbiAgICAgICAgICAgIGlmIChwYWlyLmFjdGl2ZUNvbnRhY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsUG9zWCA9IHBhaXIuYWN0aXZlQ29udGFjdHNbMF0udmVydGV4LngsXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFBvc1kgPSBwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC55O1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhaXIuYWN0aXZlQ29udGFjdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbFBvc1ggPSAocGFpci5hY3RpdmVDb250YWN0c1swXS52ZXJ0ZXgueCArIHBhaXIuYWN0aXZlQ29udGFjdHNbMV0udmVydGV4LngpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsUG9zWSA9IChwYWlyLmFjdGl2ZUNvbnRhY3RzWzBdLnZlcnRleC55ICsgcGFpci5hY3RpdmVDb250YWN0c1sxXS52ZXJ0ZXgueSkgLyAyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24uYm9keUIgPT09IGNvbGxpc2lvbi5zdXBwb3J0c1swXS5ib2R5IHx8IGNvbGxpc2lvbi5ib2R5QS5pc1N0YXRpYyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhub3JtYWxQb3NYIC0gY29sbGlzaW9uLm5vcm1hbC54ICogOCwgbm9ybWFsUG9zWSAtIGNvbGxpc2lvbi5ub3JtYWwueSAqIDgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKG5vcm1hbFBvc1ggKyBjb2xsaXNpb24ubm9ybWFsLnggKiA4LCBub3JtYWxQb3NZICsgY29sbGlzaW9uLm5vcm1hbC55ICogOCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8obm9ybWFsUG9zWCwgbm9ybWFsUG9zWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdvcmFuZ2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBzZXBhcmF0aW9uc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuc2VwYXJhdGlvbnMgPSBmdW5jdGlvbihyZW5kZXIsIHBhaXJzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBjb2xsaXNpb24sXG4gICAgICAgICAgICBjb3JyZWN0ZWQsXG4gICAgICAgICAgICBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgc2VwYXJhdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWlyID0gcGFpcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QTtcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCO1xuXG4gICAgICAgICAgICB2YXIgayA9IDE7XG5cbiAgICAgICAgICAgIGlmICghYm9keUIuaXNTdGF0aWMgJiYgIWJvZHlBLmlzU3RhdGljKSBrID0gMC41O1xuICAgICAgICAgICAgaWYgKGJvZHlCLmlzU3RhdGljKSBrID0gMDtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keUIucG9zaXRpb24ueCwgYm9keUIucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5Qi5wb3NpdGlvbi54IC0gY29sbGlzaW9uLnBlbmV0cmF0aW9uLnggKiBrLCBib2R5Qi5wb3NpdGlvbi55IC0gY29sbGlzaW9uLnBlbmV0cmF0aW9uLnkgKiBrKTtcblxuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGlmICghYm9keUIuaXNTdGF0aWMgJiYgIWJvZHlBLmlzU3RhdGljKSBrID0gMC41O1xuICAgICAgICAgICAgaWYgKGJvZHlBLmlzU3RhdGljKSBrID0gMDtcblxuICAgICAgICAgICAgYy5tb3ZlVG8oYm9keUEucG9zaXRpb24ueCwgYm9keUEucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBjLmxpbmVUbyhib2R5QS5wb3NpdGlvbi54ICsgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnggKiBrLCBib2R5QS5wb3NpdGlvbi55ICsgY29sbGlzaW9uLnBlbmV0cmF0aW9uLnkgKiBrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC41KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ29yYW5nZSc7XG4gICAgICAgIH1cbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgZ3JpZFxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2dyaWR9IGdyaWRcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuZ3JpZCA9IGZ1bmN0aW9uKHJlbmRlciwgZ3JpZCwgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxODAsMCwwLjEpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTgwLDAsMC41KSc7XG4gICAgICAgIH1cblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIHZhciBidWNrZXRLZXlzID0gQ29tbW9uLmtleXMoZ3JpZC5idWNrZXRzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1Y2tldEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBidWNrZXRJZCA9IGJ1Y2tldEtleXNbaV07XG5cbiAgICAgICAgICAgIGlmIChncmlkLmJ1Y2tldHNbYnVja2V0SWRdLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciByZWdpb24gPSBidWNrZXRJZC5zcGxpdCgvQ3xSLyk7XG4gICAgICAgICAgICBjLnJlY3QoMC41ICsgcGFyc2VJbnQocmVnaW9uWzFdLCAxMCkgKiBncmlkLmJ1Y2tldFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAwLjUgKyBwYXJzZUludChyZWdpb25bMl0sIDEwKSAqIGdyaWQuYnVja2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBncmlkLmJ1Y2tldFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBncmlkLmJ1Y2tldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGluc3BlY3RvclxuICAgICAqIEBwYXJhbSB7aW5zcGVjdG9yfSBpbnNwZWN0b3JcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuaW5zcGVjdG9yID0gZnVuY3Rpb24oaW5zcGVjdG9yLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSBpbnNwZWN0b3IuZW5naW5lLFxuICAgICAgICAgICAgc2VsZWN0ZWQgPSBpbnNwZWN0b3Iuc2VsZWN0ZWQsXG4gICAgICAgICAgICByZW5kZXIgPSBpbnNwZWN0b3IucmVuZGVyLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgYm91bmRzO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcykge1xuICAgICAgICAgICAgdmFyIGJvdW5kc1dpZHRoID0gcmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngsXG4gICAgICAgICAgICAgICAgYm91bmRzSGVpZ2h0ID0gcmVuZGVyLmJvdW5kcy5tYXgueSAtIHJlbmRlci5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgYm91bmRzU2NhbGVYID0gYm91bmRzV2lkdGggLyByZW5kZXIub3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgICAgICBib3VuZHNTY2FsZVkgPSBib3VuZHNIZWlnaHQgLyByZW5kZXIub3B0aW9ucy5oZWlnaHQ7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoMSAvIGJvdW5kc1NjYWxlWCwgMSAvIGJvdW5kc1NjYWxlWSk7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgtcmVuZGVyLmJvdW5kcy5taW4ueCwgLXJlbmRlci5ib3VuZHMubWluLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWxlY3RlZFtpXS5kYXRhO1xuXG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuOSknO1xuICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbMSwyXSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGJvZHkgc2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgIGJvdW5kcyA9IGl0ZW0uYm91bmRzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5yZWN0KE1hdGguZmxvb3IoYm91bmRzLm1pbi54IC0gMyksIE1hdGguZmxvb3IoYm91bmRzLm1pbi55IC0gMyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54ICsgNiksIE1hdGguZmxvb3IoYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55ICsgNikpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjb25zdHJhaW50JzpcblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBjb25zdHJhaW50IHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBpdGVtLnBvaW50QTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5ib2R5QSlcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQgPSBpdGVtLnBvaW50QjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYXJjKHBvaW50LngsIHBvaW50LnksIDEwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbXSk7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgtMC41LCAtMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbmRlciBzZWxlY3Rpb24gcmVnaW9uXG4gICAgICAgIGlmIChpbnNwZWN0b3Iuc2VsZWN0U3RhcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC42KSc7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjEpJztcbiAgICAgICAgICAgIGJvdW5kcyA9IGluc3BlY3Rvci5zZWxlY3RCb3VuZHM7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5yZWN0KE1hdGguZmxvb3IoYm91bmRzLm1pbi54KSwgTWF0aC5mbG9vcihib3VuZHMubWluLnkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54KSwgTWF0aC5mbG9vcihib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnkpKTtcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgtMC41LCAtMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcylcbiAgICAgICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBtZXRob2QgX2NyZWF0ZUNhbnZhc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IHdpZHRoXG4gICAgICogQHBhcmFtIHt9IGhlaWdodFxuICAgICAqIEByZXR1cm4gY2FudmFzXG4gICAgICovXG4gICAgdmFyIF9jcmVhdGVDYW52YXMgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhcy5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICAgY2FudmFzLm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwaXhlbCByYXRpbyBvZiB0aGUgY2FudmFzLlxuICAgICAqIEBtZXRob2QgX2dldFBpeGVsUmF0aW9cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNhbnZhc1xuICAgICAqIEByZXR1cm4ge051bWJlcn0gcGl4ZWwgcmF0aW9cbiAgICAgKi9cbiAgICB2YXIgX2dldFBpeGVsUmF0aW8gPSBmdW5jdGlvbihjYW52YXMpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgICAgICAgIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxuICAgICAgICAgICAgYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyA9IGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fCBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcblxuICAgICAgICByZXR1cm4gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVBpeGVsUmF0aW87XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJlcXVlc3RlZCB0ZXh0dXJlIChhbiBJbWFnZSkgdmlhIGl0cyBwYXRoXG4gICAgICogQG1ldGhvZCBfZ2V0VGV4dHVyZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZVBhdGhcbiAgICAgKiBAcmV0dXJuIHtJbWFnZX0gdGV4dHVyZVxuICAgICAqL1xuICAgIHZhciBfZ2V0VGV4dHVyZSA9IGZ1bmN0aW9uKHJlbmRlciwgaW1hZ2VQYXRoKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IHJlbmRlci50ZXh0dXJlc1tpbWFnZVBhdGhdO1xuXG4gICAgICAgIGlmIChpbWFnZSlcbiAgICAgICAgICAgIHJldHVybiBpbWFnZTtcblxuICAgICAgICBpbWFnZSA9IHJlbmRlci50ZXh0dXJlc1tpbWFnZVBhdGhdID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGltYWdlUGF0aDtcblxuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgdG8gdGhlIGNhbnZhcyB1c2luZyBDU1MuXG4gICAgICogQG1ldGhvZCBhcHBseUJhY2tncm91bmRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFja2dyb3VuZFxuICAgICAqL1xuICAgIHZhciBfYXBwbHlCYWNrZ3JvdW5kID0gZnVuY3Rpb24ocmVuZGVyLCBiYWNrZ3JvdW5kKSB7XG4gICAgICAgIHZhciBjc3NCYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcblxuICAgICAgICBpZiAoLyhqcGd8Z2lmfHBuZykkLy50ZXN0KGJhY2tncm91bmQpKVxuICAgICAgICAgICAgY3NzQmFja2dyb3VuZCA9ICd1cmwoJyArIGJhY2tncm91bmQgKyAnKSc7XG5cbiAgICAgICAgcmVuZGVyLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kID0gY3NzQmFja2dyb3VuZDtcbiAgICAgICAgcmVuZGVyLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY29udGFpblwiO1xuICAgICAgICByZW5kZXIuY3VycmVudEJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBiZWZvcmUgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVJlbmRlclxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgcmVuZGVyaW5nXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyUmVuZGVyXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGJhY2stcmVmZXJlbmNlIHRvIHRoZSBgTWF0dGVyLlJlbmRlcmAgbW9kdWxlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnRyb2xsZXJcbiAgICAgKiBAdHlwZSByZW5kZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBgTWF0dGVyLkVuZ2luZWAgaW5zdGFuY2UgdG8gYmUgdXNlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmdpbmVcbiAgICAgKiBAdHlwZSBlbmdpbmVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHdoZXJlIHRoZSBjYW52YXMgaXMgdG8gYmUgaW5zZXJ0ZWQgKGlmIGByZW5kZXIuY2FudmFzYCBoYXMgbm90IGJlZW4gc3BlY2lmaWVkKVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVsZW1lbnRcbiAgICAgKiBAdHlwZSBIVE1MRWxlbWVudFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBjYW52YXMgZWxlbWVudCB0byByZW5kZXIgdG8uIElmIG5vdCBzcGVjaWZpZWQsIG9uZSB3aWxsIGJlIGNyZWF0ZWQgaWYgYHJlbmRlci5lbGVtZW50YCBoYXMgYmVlbiBzcGVjaWZpZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY2FudmFzXG4gICAgICogQHR5cGUgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG9mIHRoZSByZW5kZXJlci5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zXG4gICAgICogQHR5cGUge31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgd2lkdGggaW4gcGl4ZWxzIG9mIHRoZSBgcmVuZGVyLmNhbnZhc2AgdG8gYmUgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLndpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgODAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGhlaWdodCBpbiBwaXhlbHMgb2YgdGhlIGByZW5kZXIuY2FudmFzYCB0byBiZSBjcmVhdGVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuaGVpZ2h0XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNjAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgaWYgYHJlbmRlci5ib3VuZHNgIHNob3VsZCBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuaGFzQm91bmRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBCb3VuZHNgIG9iamVjdCB0aGF0IHNwZWNpZmllcyB0aGUgZHJhd2luZyB2aWV3IHJlZ2lvbi5cbiAgICAgKiBSZW5kZXJpbmcgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHRyYW5zZm9ybWVkIGFuZCBzY2FsZWQgdG8gZml0IHdpdGhpbiB0aGUgY2FudmFzIHNpemUgKGByZW5kZXIub3B0aW9ucy53aWR0aGAgYW5kIGByZW5kZXIub3B0aW9ucy5oZWlnaHRgKS5cbiAgICAgKiBUaGlzIGFsbG93cyBmb3IgY3JlYXRpbmcgdmlld3MgdGhhdCBjYW4gcGFuIG9yIHpvb20gYXJvdW5kIHRoZSBzY2VuZS5cbiAgICAgKiBZb3UgbXVzdCBhbHNvIHNldCBgcmVuZGVyLm9wdGlvbnMuaGFzQm91bmRzYCB0byBgdHJ1ZWAgdG8gZW5hYmxlIGJvdW5kZWQgcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvdW5kc1xuICAgICAqIEB0eXBlIGJvdW5kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IGZyb20gdGhlIGByZW5kZXIuY2FudmFzYCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnRleHRcbiAgICAgKiBAdHlwZSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBzcHJpdGUgdGV4dHVyZSBjYWNoZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0ZXh0dXJlc1xuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbn0pKCk7XG5cbn0se1wiLi4vYm9keS9Db21wb3NpdGVcIjoyLFwiLi4vY29sbGlzaW9uL0dyaWRcIjo2LFwiLi4vY29yZS9Db21tb25cIjoxNCxcIi4uL2NvcmUvRXZlbnRzXCI6MTYsXCIuLi9jb3JlL01vdXNlXCI6MTksXCIuLi9nZW9tZXRyeS9Cb3VuZHNcIjoyNixcIi4uL2dlb21ldHJ5L1ZlY3RvclwiOjI4fV0sMzI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLyoqXG4qIFRoZSBgTWF0dGVyLlJlbmRlclBpeGlgIG1vZHVsZSBpcyBhbiBleGFtcGxlIHJlbmRlcmVyIHVzaW5nIHBpeGkuanMuXG4qIFNlZSBhbHNvIGBNYXR0ZXIuUmVuZGVyYCBmb3IgYSBjYW52YXMgYmFzZWQgcmVuZGVyZXIuXG4qXG4qIEBjbGFzcyBSZW5kZXJQaXhpXG4qIEBkZXByZWNhdGVkIHRoZSBNYXR0ZXIuUmVuZGVyUGl4aSBtb2R1bGUgd2lsbCBzb29uIGJlIHJlbW92ZWQgZnJvbSB0aGUgTWF0dGVyLmpzIGNvcmUuXG4qIEl0IHdpbGwgbGlrZWx5IGJlIG1vdmVkIHRvIGl0cyBvd24gcmVwb3NpdG9yeSAoYnV0IG1haW50ZW5hbmNlIHdpbGwgYmUgbGltaXRlZCkuXG4qL1xuXG52YXIgUmVuZGVyUGl4aSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlclBpeGk7XG5cbnZhciBCb3VuZHMgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9Cb3VuZHMnKTtcbnZhciBDb21wb3NpdGUgPSBfZGVyZXFfKCcuLi9ib2R5L0NvbXBvc2l0ZScpO1xudmFyIENvbW1vbiA9IF9kZXJlcV8oJy4uL2NvcmUvQ29tbW9uJyk7XG52YXIgRXZlbnRzID0gX2RlcmVxXygnLi4vY29yZS9FdmVudHMnKTtcbnZhciBWZWN0b3IgPSBfZGVyZXFfKCcuLi9nZW9tZXRyeS9WZWN0b3InKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBmdW5jdGlvbihjYWxsYmFjayl7IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayhDb21tb24ubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xuICAgXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBQaXhpLmpzIFdlYkdMIHJlbmRlcmVyXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge1JlbmRlclBpeGl9IEEgbmV3IHJlbmRlcmVyXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBSZW5kZXJQaXhpLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgQ29tbW9uLndhcm4oJ1JlbmRlclBpeGkuY3JlYXRlOiBNYXR0ZXIuUmVuZGVyUGl4aSBpcyBkZXByZWNhdGVkIChzZWUgZG9jcyknKTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBjb250cm9sbGVyOiBSZW5kZXJQaXhpLFxuICAgICAgICAgICAgZW5naW5lOiBudWxsLFxuICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgICAgIGZyYW1lUmVxdWVzdElkOiBudWxsLFxuICAgICAgICAgICAgY2FudmFzOiBudWxsLFxuICAgICAgICAgICAgcmVuZGVyZXI6IG51bGwsXG4gICAgICAgICAgICBjb250YWluZXI6IG51bGwsXG4gICAgICAgICAgICBzcHJpdGVDb250YWluZXI6IG51bGwsXG4gICAgICAgICAgICBwaXhpT3B0aW9uczogbnVsbCxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmFmYWZhJyxcbiAgICAgICAgICAgICAgICB3aXJlZnJhbWVCYWNrZ3JvdW5kOiAnIzIyMicsXG4gICAgICAgICAgICAgICAgaGFzQm91bmRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpcmVmcmFtZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd1NsZWVwaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dEZWJ1ZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0Jyb2FkcGhhc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dCb3VuZHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dWZWxvY2l0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0NvbGxpc2lvbnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dBeGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UG9zaXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QW5nbGVJbmRpY2F0b3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dJZHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dTaGFkb3dzOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZW5kZXIgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50ID0gIXJlbmRlci5vcHRpb25zLndpcmVmcmFtZXMgJiYgcmVuZGVyLm9wdGlvbnMuYmFja2dyb3VuZCA9PT0gJ3RyYW5zcGFyZW50JztcblxuICAgICAgICAvLyBpbml0IHBpeGlcbiAgICAgICAgcmVuZGVyLnBpeGlPcHRpb25zID0gcmVuZGVyLnBpeGlPcHRpb25zIHx8IHtcbiAgICAgICAgICAgIHZpZXc6IHJlbmRlci5jYW52YXMsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbnMuYmFja2dyb3VuZFxuICAgICAgICB9O1xuXG4gICAgICAgIHJlbmRlci5tb3VzZSA9IG9wdGlvbnMubW91c2U7XG4gICAgICAgIHJlbmRlci5lbmdpbmUgPSBvcHRpb25zLmVuZ2luZTtcbiAgICAgICAgcmVuZGVyLnJlbmRlcmVyID0gcmVuZGVyLnJlbmRlcmVyIHx8IG5ldyBQSVhJLldlYkdMUmVuZGVyZXIocmVuZGVyLm9wdGlvbnMud2lkdGgsIHJlbmRlci5vcHRpb25zLmhlaWdodCwgcmVuZGVyLnBpeGlPcHRpb25zKTtcbiAgICAgICAgcmVuZGVyLmNvbnRhaW5lciA9IHJlbmRlci5jb250YWluZXIgfHwgbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgICAgIHJlbmRlci5zcHJpdGVDb250YWluZXIgPSByZW5kZXIuc3ByaXRlQ29udGFpbmVyIHx8IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICByZW5kZXIuY2FudmFzID0gcmVuZGVyLmNhbnZhcyB8fCByZW5kZXIucmVuZGVyZXIudmlldztcbiAgICAgICAgcmVuZGVyLmJvdW5kcyA9IHJlbmRlci5ib3VuZHMgfHwgeyBcbiAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBtYXg6IHsgXG4gICAgICAgICAgICAgICAgeDogcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogcmVuZGVyLm9wdGlvbnMuaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIEV2ZW50cy5vbihyZW5kZXIuZW5naW5lLCAnYmVmb3JlVXBkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBSZW5kZXJQaXhpLmNsZWFyKHJlbmRlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhY2hlc1xuICAgICAgICByZW5kZXIudGV4dHVyZXMgPSB7fTtcbiAgICAgICAgcmVuZGVyLnNwcml0ZXMgPSB7fTtcbiAgICAgICAgcmVuZGVyLnByaW1pdGl2ZXMgPSB7fTtcblxuICAgICAgICAvLyB1c2UgYSBzcHJpdGUgYmF0Y2ggZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgIHJlbmRlci5jb250YWluZXIuYWRkQ2hpbGQocmVuZGVyLnNwcml0ZUNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gaW5zZXJ0IGNhbnZhc1xuICAgICAgICBpZiAoQ29tbW9uLmlzRWxlbWVudChyZW5kZXIuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJlbmRlci5lbGVtZW50LmFwcGVuZENoaWxkKHJlbmRlci5jYW52YXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ05vIFwicmVuZGVyLmVsZW1lbnRcIiBwYXNzZWQsIFwicmVuZGVyLmNhbnZhc1wiIHdhcyBub3QgaW5zZXJ0ZWQgaW50byBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXZlbnQgbWVudXMgb24gY2FudmFzXG4gICAgICAgIHJlbmRlci5jYW52YXMub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgICAgIHJlbmRlci5jYW52YXMub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udGludW91c2x5IHVwZGF0ZXMgdGhlIHJlbmRlciBjYW52YXMgb24gdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGV2ZW50LlxuICAgICAqIEBtZXRob2QgcnVuXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgUmVuZGVyUGl4aS5ydW4gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgKGZ1bmN0aW9uIGxvb3AodGltZSl7XG4gICAgICAgICAgICByZW5kZXIuZnJhbWVSZXF1ZXN0SWQgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgUmVuZGVyUGl4aS53b3JsZChyZW5kZXIpO1xuICAgICAgICB9KSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIGV4ZWN1dGlvbiBvZiBgUmVuZGVyLnJ1bmAgb24gdGhlIGdpdmVuIGByZW5kZXJgLCBieSBjYW5jZWxpbmcgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IGV2ZW50IGxvb3AuXG4gICAgICogQG1ldGhvZCBzdG9wXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgUmVuZGVyUGl4aS5zdG9wID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZShyZW5kZXIuZnJhbWVSZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIHNjZW5lIGdyYXBoXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7UmVuZGVyUGl4aX0gcmVuZGVyXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBSZW5kZXJQaXhpLmNsZWFyID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSByZW5kZXIuY29udGFpbmVyLFxuICAgICAgICAgICAgc3ByaXRlQ29udGFpbmVyID0gcmVuZGVyLnNwcml0ZUNvbnRhaW5lcjtcblxuICAgICAgICAvLyBjbGVhciBzdGFnZSBjb250YWluZXJcbiAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZHJlblswXSkgeyBcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuY2hpbGRyZW5bMF0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyIHNwcml0ZSBiYXRjaFxuICAgICAgICB3aGlsZSAoc3ByaXRlQ29udGFpbmVyLmNoaWxkcmVuWzBdKSB7IFxuICAgICAgICAgICAgc3ByaXRlQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNwcml0ZUNvbnRhaW5lci5jaGlsZHJlblswXSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJnU3ByaXRlID0gcmVuZGVyLnNwcml0ZXNbJ2JnLTAnXTtcblxuICAgICAgICAvLyBjbGVhciBjYWNoZXNcbiAgICAgICAgcmVuZGVyLnRleHR1cmVzID0ge307XG4gICAgICAgIHJlbmRlci5zcHJpdGVzID0ge307XG4gICAgICAgIHJlbmRlci5wcmltaXRpdmVzID0ge307XG5cbiAgICAgICAgLy8gc2V0IGJhY2tncm91bmQgc3ByaXRlXG4gICAgICAgIHJlbmRlci5zcHJpdGVzWydiZy0wJ10gPSBiZ1Nwcml0ZTtcbiAgICAgICAgaWYgKGJnU3ByaXRlKVxuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkQXQoYmdTcHJpdGUsIDApO1xuXG4gICAgICAgIC8vIGFkZCBzcHJpdGUgYmF0Y2ggYmFjayBpbnRvIGNvbnRhaW5lclxuICAgICAgICByZW5kZXIuY29udGFpbmVyLmFkZENoaWxkKHJlbmRlci5zcHJpdGVDb250YWluZXIpO1xuXG4gICAgICAgIC8vIHJlc2V0IGJhY2tncm91bmQgc3RhdGVcbiAgICAgICAgcmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kID0gbnVsbDtcblxuICAgICAgICAvLyByZXNldCBib3VuZHMgdHJhbnNmb3Jtc1xuICAgICAgICBjb250YWluZXIuc2NhbGUuc2V0KDEsIDEpO1xuICAgICAgICBjb250YWluZXIucG9zaXRpb24uc2V0KDAsIDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSBjYW52YXMgXG4gICAgICogQG1ldGhvZCBzZXRCYWNrZ3JvdW5kXG4gICAgICogQHBhcmFtIHtSZW5kZXJQaXhpfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFja2dyb3VuZFxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgUmVuZGVyUGl4aS5zZXRCYWNrZ3JvdW5kID0gZnVuY3Rpb24ocmVuZGVyLCBiYWNrZ3JvdW5kKSB7XG4gICAgICAgIGlmIChyZW5kZXIuY3VycmVudEJhY2tncm91bmQgIT09IGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHZhciBpc0NvbG9yID0gYmFja2dyb3VuZC5pbmRleE9mICYmIGJhY2tncm91bmQuaW5kZXhPZignIycpICE9PSAtMSxcbiAgICAgICAgICAgICAgICBiZ1Nwcml0ZSA9IHJlbmRlci5zcHJpdGVzWydiZy0wJ107XG5cbiAgICAgICAgICAgIGlmIChpc0NvbG9yKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgc29saWQgYmFja2dyb3VuZCBjb2xvclxuICAgICAgICAgICAgICAgIHZhciBjb2xvciA9IENvbW1vbi5jb2xvclRvTnVtYmVyKGJhY2tncm91bmQpO1xuICAgICAgICAgICAgICAgIHJlbmRlci5yZW5kZXJlci5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBiYWNrZ3JvdW5kIHNwcml0ZSBpZiBleGlzdGluZ1xuICAgICAgICAgICAgICAgIGlmIChiZ1Nwcml0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyLmNvbnRhaW5lci5yZW1vdmVDaGlsZChiZ1Nwcml0ZSk7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXNlIGJhY2tncm91bmQgc3ByaXRlIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmICghYmdTcHJpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHR1cmUgPSBfZ2V0VGV4dHVyZShyZW5kZXIsIGJhY2tncm91bmQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJnU3ByaXRlID0gcmVuZGVyLnNwcml0ZXNbJ2JnLTAnXSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgYmdTcHJpdGUucG9zaXRpb24ueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJnU3ByaXRlLnBvc2l0aW9uLnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXIuY29udGFpbmVyLmFkZENoaWxkQXQoYmdTcHJpdGUsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBtZXRob2Qgd29ybGRcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBSZW5kZXJQaXhpLndvcmxkID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICByZW5kZXJlciA9IHJlbmRlci5yZW5kZXJlcixcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHJlbmRlci5jb250YWluZXIsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gW10sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIFJlbmRlclBpeGkuc2V0QmFja2dyb3VuZChyZW5kZXIsIG9wdGlvbnMud2lyZWZyYW1lQmFja2dyb3VuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBSZW5kZXJQaXhpLnNldEJhY2tncm91bmQocmVuZGVyLCBvcHRpb25zLmJhY2tncm91bmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIGJvdW5kc1xuICAgICAgICB2YXIgYm91bmRzV2lkdGggPSByZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgIGJvdW5kc0hlaWdodCA9IHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgYm91bmRzU2NhbGVYID0gYm91bmRzV2lkdGggLyByZW5kZXIub3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgIGJvdW5kc1NjYWxlWSA9IGJvdW5kc0hlaWdodCAvIHJlbmRlci5vcHRpb25zLmhlaWdodDtcblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIC8vIEhpZGUgYm9kaWVzIHRoYXQgYXJlIG5vdCBpbiB2aWV3XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICAgICAgYm9keS5yZW5kZXIuc3ByaXRlLnZpc2libGUgPSBCb3VuZHMub3ZlcmxhcHMoYm9keS5ib3VuZHMsIHJlbmRlci5ib3VuZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IGNvbnN0cmFpbnRzIHRoYXQgYXJlIG5vdCBpbiB2aWV3XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWxsQ29uc3RyYWludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uc3RyYWludCA9IGFsbENvbnN0cmFpbnRzW2ldLFxuICAgICAgICAgICAgICAgICAgICBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICAgICAgICAgIGJvZHlCID0gY29uc3RyYWludC5ib2R5QixcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRBV29ybGQgPSBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRCV29ybGQgPSBjb25zdHJhaW50LnBvaW50QjtcblxuICAgICAgICAgICAgICAgIGlmIChib2R5QSkgcG9pbnRBV29ybGQgPSBWZWN0b3IuYWRkKGJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSk7XG4gICAgICAgICAgICAgICAgaWYgKGJvZHlCKSBwb2ludEJXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUIucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRCKTtcblxuICAgICAgICAgICAgICAgIGlmICghcG9pbnRBV29ybGQgfHwgIXBvaW50QldvcmxkKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMocmVuZGVyLmJvdW5kcywgcG9pbnRBV29ybGQpIHx8IEJvdW5kcy5jb250YWlucyhyZW5kZXIuYm91bmRzLCBwb2ludEJXb3JsZCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybSB0aGUgdmlld1xuICAgICAgICAgICAgY29udGFpbmVyLnNjYWxlLnNldCgxIC8gYm91bmRzU2NhbGVYLCAxIC8gYm91bmRzU2NhbGVZKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wb3NpdGlvbi5zZXQoLXJlbmRlci5ib3VuZHMubWluLnggKiAoMSAvIGJvdW5kc1NjYWxlWCksIC1yZW5kZXIuYm91bmRzLm1pbi55ICogKDEgLyBib3VuZHNTY2FsZVkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gYWxsQ29uc3RyYWludHM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgUmVuZGVyUGl4aS5ib2R5KHJlbmRlciwgYm9kaWVzW2ldKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29uc3RyYWludHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBSZW5kZXJQaXhpLmNvbnN0cmFpbnQocmVuZGVyLCBjb25zdHJhaW50c1tpXSk7XG5cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKGNvbnRhaW5lcik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAbWV0aG9kIGNvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICBSZW5kZXJQaXhpLmNvbnN0cmFpbnQgPSBmdW5jdGlvbihyZW5kZXIsIGNvbnN0cmFpbnQpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICBib2R5QiA9IGNvbnN0cmFpbnQuYm9keUIsXG4gICAgICAgICAgICBwb2ludEEgPSBjb25zdHJhaW50LnBvaW50QSxcbiAgICAgICAgICAgIHBvaW50QiA9IGNvbnN0cmFpbnQucG9pbnRCLFxuICAgICAgICAgICAgY29udGFpbmVyID0gcmVuZGVyLmNvbnRhaW5lcixcbiAgICAgICAgICAgIGNvbnN0cmFpbnRSZW5kZXIgPSBjb25zdHJhaW50LnJlbmRlcixcbiAgICAgICAgICAgIHByaW1pdGl2ZUlkID0gJ2MtJyArIGNvbnN0cmFpbnQuaWQsXG4gICAgICAgICAgICBwcmltaXRpdmUgPSByZW5kZXIucHJpbWl0aXZlc1twcmltaXRpdmVJZF07XG5cbiAgICAgICAgLy8gaW5pdGlhbGlzZSBjb25zdHJhaW50IHByaW1pdGl2ZSBpZiBub3QgZXhpc3RpbmdcbiAgICAgICAgaWYgKCFwcmltaXRpdmUpXG4gICAgICAgICAgICBwcmltaXRpdmUgPSByZW5kZXIucHJpbWl0aXZlc1twcmltaXRpdmVJZF0gPSBuZXcgUElYSS5HcmFwaGljcygpO1xuXG4gICAgICAgIC8vIGRvbid0IHJlbmRlciBpZiBjb25zdHJhaW50IGRvZXMgbm90IGhhdmUgdHdvIGVuZCBwb2ludHNcbiAgICAgICAgaWYgKCFjb25zdHJhaW50UmVuZGVyLnZpc2libGUgfHwgIWNvbnN0cmFpbnQucG9pbnRBIHx8ICFjb25zdHJhaW50LnBvaW50Qikge1xuICAgICAgICAgICAgcHJpbWl0aXZlLmNsZWFyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgdG8gc2NlbmUgZ3JhcGggaWYgbm90IGFscmVhZHkgdGhlcmVcbiAgICAgICAgaWYgKENvbW1vbi5pbmRleE9mKGNvbnRhaW5lci5jaGlsZHJlbiwgcHJpbWl0aXZlKSA9PT0gLTEpXG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQocHJpbWl0aXZlKTtcblxuICAgICAgICAvLyByZW5kZXIgdGhlIGNvbnN0cmFpbnQgb24gZXZlcnkgdXBkYXRlLCBzaW5jZSB0aGV5IGNhbiBjaGFuZ2UgZHluYW1pY2FsbHlcbiAgICAgICAgcHJpbWl0aXZlLmNsZWFyKCk7XG4gICAgICAgIHByaW1pdGl2ZS5iZWdpbkZpbGwoMCwgMCk7XG4gICAgICAgIHByaW1pdGl2ZS5saW5lU3R5bGUoY29uc3RyYWludFJlbmRlci5saW5lV2lkdGgsIENvbW1vbi5jb2xvclRvTnVtYmVyKGNvbnN0cmFpbnRSZW5kZXIuc3Ryb2tlU3R5bGUpLCAxKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChib2R5QSkge1xuICAgICAgICAgICAgcHJpbWl0aXZlLm1vdmVUbyhib2R5QS5wb3NpdGlvbi54ICsgcG9pbnRBLngsIGJvZHlBLnBvc2l0aW9uLnkgKyBwb2ludEEueSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmltaXRpdmUubW92ZVRvKHBvaW50QS54LCBwb2ludEEueSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keUIpIHtcbiAgICAgICAgICAgIHByaW1pdGl2ZS5saW5lVG8oYm9keUIucG9zaXRpb24ueCArIHBvaW50Qi54LCBib2R5Qi5wb3NpdGlvbi55ICsgcG9pbnRCLnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJpbWl0aXZlLmxpbmVUbyhwb2ludEIueCwgcG9pbnRCLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpbWl0aXZlLmVuZEZpbGwoKTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQG1ldGhvZCBib2R5XG4gICAgICogQHBhcmFtIHtlbmdpbmV9IGVuZ2luZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgUmVuZGVyUGl4aS5ib2R5ID0gZnVuY3Rpb24ocmVuZGVyLCBib2R5KSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgYm9keVJlbmRlciA9IGJvZHkucmVuZGVyO1xuXG4gICAgICAgIGlmICghYm9keVJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmIChib2R5UmVuZGVyLnNwcml0ZSAmJiBib2R5UmVuZGVyLnNwcml0ZS50ZXh0dXJlKSB7XG4gICAgICAgICAgICB2YXIgc3ByaXRlSWQgPSAnYi0nICsgYm9keS5pZCxcbiAgICAgICAgICAgICAgICBzcHJpdGUgPSByZW5kZXIuc3ByaXRlc1tzcHJpdGVJZF0sXG4gICAgICAgICAgICAgICAgc3ByaXRlQ29udGFpbmVyID0gcmVuZGVyLnNwcml0ZUNvbnRhaW5lcjtcblxuICAgICAgICAgICAgLy8gaW5pdGlhbGlzZSBib2R5IHNwcml0ZSBpZiBub3QgZXhpc3RpbmdcbiAgICAgICAgICAgIGlmICghc3ByaXRlKVxuICAgICAgICAgICAgICAgIHNwcml0ZSA9IHJlbmRlci5zcHJpdGVzW3Nwcml0ZUlkXSA9IF9jcmVhdGVCb2R5U3ByaXRlKHJlbmRlciwgYm9keSk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0byBzY2VuZSBncmFwaCBpZiBub3QgYWxyZWFkeSB0aGVyZVxuICAgICAgICAgICAgaWYgKENvbW1vbi5pbmRleE9mKHNwcml0ZUNvbnRhaW5lci5jaGlsZHJlbiwgc3ByaXRlKSA9PT0gLTEpXG4gICAgICAgICAgICAgICAgc3ByaXRlQ29udGFpbmVyLmFkZENoaWxkKHNwcml0ZSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBib2R5IHNwcml0ZVxuICAgICAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnggPSBib2R5LnBvc2l0aW9uLng7XG4gICAgICAgICAgICBzcHJpdGUucG9zaXRpb24ueSA9IGJvZHkucG9zaXRpb24ueTtcbiAgICAgICAgICAgIHNwcml0ZS5yb3RhdGlvbiA9IGJvZHkuYW5nbGU7XG4gICAgICAgICAgICBzcHJpdGUuc2NhbGUueCA9IGJvZHlSZW5kZXIuc3ByaXRlLnhTY2FsZSB8fCAxO1xuICAgICAgICAgICAgc3ByaXRlLnNjYWxlLnkgPSBib2R5UmVuZGVyLnNwcml0ZS55U2NhbGUgfHwgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmltaXRpdmVJZCA9ICdiLScgKyBib2R5LmlkLFxuICAgICAgICAgICAgICAgIHByaW1pdGl2ZSA9IHJlbmRlci5wcmltaXRpdmVzW3ByaW1pdGl2ZUlkXSxcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSByZW5kZXIuY29udGFpbmVyO1xuXG4gICAgICAgICAgICAvLyBpbml0aWFsaXNlIGJvZHkgcHJpbWl0aXZlIGlmIG5vdCBleGlzdGluZ1xuICAgICAgICAgICAgaWYgKCFwcmltaXRpdmUpIHtcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUgPSByZW5kZXIucHJpbWl0aXZlc1twcmltaXRpdmVJZF0gPSBfY3JlYXRlQm9keVByaW1pdGl2ZShyZW5kZXIsIGJvZHkpO1xuICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5pbml0aWFsQW5nbGUgPSBib2R5LmFuZ2xlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgdG8gc2NlbmUgZ3JhcGggaWYgbm90IGFscmVhZHkgdGhlcmVcbiAgICAgICAgICAgIGlmIChDb21tb24uaW5kZXhPZihjb250YWluZXIuY2hpbGRyZW4sIHByaW1pdGl2ZSkgPT09IC0xKVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChwcmltaXRpdmUpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm9keSBwcmltaXRpdmVcbiAgICAgICAgICAgIHByaW1pdGl2ZS5wb3NpdGlvbi54ID0gYm9keS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgcHJpbWl0aXZlLnBvc2l0aW9uLnkgPSBib2R5LnBvc2l0aW9uLnk7XG4gICAgICAgICAgICBwcmltaXRpdmUucm90YXRpb24gPSBib2R5LmFuZ2xlIC0gcHJpbWl0aXZlLmluaXRpYWxBbmdsZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYm9keSBzcHJpdGVcbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVCb2R5U3ByaXRlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlbmRlclBpeGl9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge1BJWEkuU3ByaXRlfSBzcHJpdGVcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIHZhciBfY3JlYXRlQm9keVNwcml0ZSA9IGZ1bmN0aW9uKHJlbmRlciwgYm9keSkge1xuICAgICAgICB2YXIgYm9keVJlbmRlciA9IGJvZHkucmVuZGVyLFxuICAgICAgICAgICAgdGV4dHVyZVBhdGggPSBib2R5UmVuZGVyLnNwcml0ZS50ZXh0dXJlLFxuICAgICAgICAgICAgdGV4dHVyZSA9IF9nZXRUZXh0dXJlKHJlbmRlciwgdGV4dHVyZVBhdGgpLFxuICAgICAgICAgICAgc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmUpO1xuXG4gICAgICAgIHNwcml0ZS5hbmNob3IueCA9IGJvZHkucmVuZGVyLnNwcml0ZS54T2Zmc2V0O1xuICAgICAgICBzcHJpdGUuYW5jaG9yLnkgPSBib2R5LnJlbmRlci5zcHJpdGUueU9mZnNldDtcblxuICAgICAgICByZXR1cm4gc3ByaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYm9keSBwcmltaXRpdmVcbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVCb2R5UHJpbWl0aXZlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlbmRlclBpeGl9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge1BJWEkuR3JhcGhpY3N9IGdyYXBoaWNzXG4gICAgICogQGRlcHJlY2F0ZWRcbiAgICAgKi9cbiAgICB2YXIgX2NyZWF0ZUJvZHlQcmltaXRpdmUgPSBmdW5jdGlvbihyZW5kZXIsIGJvZHkpIHtcbiAgICAgICAgdmFyIGJvZHlSZW5kZXIgPSBib2R5LnJlbmRlcixcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHByaW1pdGl2ZSA9IG5ldyBQSVhJLkdyYXBoaWNzKCksXG4gICAgICAgICAgICBmaWxsU3R5bGUgPSBDb21tb24uY29sb3JUb051bWJlcihib2R5UmVuZGVyLmZpbGxTdHlsZSksXG4gICAgICAgICAgICBzdHJva2VTdHlsZSA9IENvbW1vbi5jb2xvclRvTnVtYmVyKGJvZHlSZW5kZXIuc3Ryb2tlU3R5bGUpLFxuICAgICAgICAgICAgc3Ryb2tlU3R5bGVJbmRpY2F0b3IgPSBDb21tb24uY29sb3JUb051bWJlcihib2R5UmVuZGVyLnN0cm9rZVN0eWxlKSxcbiAgICAgICAgICAgIHN0cm9rZVN0eWxlV2lyZWZyYW1lID0gQ29tbW9uLmNvbG9yVG9OdW1iZXIoJyNiYmInKSxcbiAgICAgICAgICAgIHN0cm9rZVN0eWxlV2lyZWZyYW1lSW5kaWNhdG9yID0gQ29tbW9uLmNvbG9yVG9OdW1iZXIoJyNDRDVDNUMnKSxcbiAgICAgICAgICAgIHBhcnQ7XG5cbiAgICAgICAgcHJpbWl0aXZlLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgIGZvciAodmFyIGsgPSBib2R5LnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHBhcnQgPSBib2R5LnBhcnRzW2tdO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5iZWdpbkZpbGwoZmlsbFN0eWxlLCAxKTtcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUubGluZVN0eWxlKGJvZHlSZW5kZXIubGluZVdpZHRoLCBzdHJva2VTdHlsZSwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5iZWdpbkZpbGwoMCwgMCk7XG4gICAgICAgICAgICAgICAgcHJpbWl0aXZlLmxpbmVTdHlsZSgxLCBzdHJva2VTdHlsZVdpcmVmcmFtZSwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByaW1pdGl2ZS5tb3ZlVG8ocGFydC52ZXJ0aWNlc1swXS54IC0gYm9keS5wb3NpdGlvbi54LCBwYXJ0LnZlcnRpY2VzWzBdLnkgLSBib2R5LnBvc2l0aW9uLnkpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHBhcnQudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUubGluZVRvKHBhcnQudmVydGljZXNbal0ueCAtIGJvZHkucG9zaXRpb24ueCwgcGFydC52ZXJ0aWNlc1tqXS55IC0gYm9keS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJpbWl0aXZlLmxpbmVUbyhwYXJ0LnZlcnRpY2VzWzBdLnggLSBib2R5LnBvc2l0aW9uLngsIHBhcnQudmVydGljZXNbMF0ueSAtIGJvZHkucG9zaXRpb24ueSk7XG5cbiAgICAgICAgICAgIHByaW1pdGl2ZS5lbmRGaWxsKCk7XG5cbiAgICAgICAgICAgIC8vIGFuZ2xlIGluZGljYXRvclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0FuZ2xlSW5kaWNhdG9yIHx8IG9wdGlvbnMuc2hvd0F4ZXMpIHtcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUuYmVnaW5GaWxsKDAsIDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubGluZVN0eWxlKDEsIHN0cm9rZVN0eWxlV2lyZWZyYW1lSW5kaWNhdG9yLCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmUubGluZVN0eWxlKDEsIHN0cm9rZVN0eWxlSW5kaWNhdG9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcmltaXRpdmUubW92ZVRvKHBhcnQucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICBwcmltaXRpdmUubGluZVRvKCgocGFydC52ZXJ0aWNlc1swXS54ICsgcGFydC52ZXJ0aWNlc1twYXJ0LnZlcnRpY2VzLmxlbmd0aC0xXS54KSAvIDIgLSBib2R5LnBvc2l0aW9uLngpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgocGFydC52ZXJ0aWNlc1swXS55ICsgcGFydC52ZXJ0aWNlc1twYXJ0LnZlcnRpY2VzLmxlbmd0aC0xXS55KSAvIDIgLSBib2R5LnBvc2l0aW9uLnkpKTtcblxuICAgICAgICAgICAgICAgIHByaW1pdGl2ZS5lbmRGaWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJpbWl0aXZlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByZXF1ZXN0ZWQgdGV4dHVyZSAoYSBQSVhJLlRleHR1cmUpIHZpYSBpdHMgcGF0aFxuICAgICAqIEBtZXRob2QgX2dldFRleHR1cmVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmVuZGVyUGl4aX0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlUGF0aFxuICAgICAqIEByZXR1cm4ge1BJWEkuVGV4dHVyZX0gdGV4dHVyZVxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgdmFyIF9nZXRUZXh0dXJlID0gZnVuY3Rpb24ocmVuZGVyLCBpbWFnZVBhdGgpIHtcbiAgICAgICAgdmFyIHRleHR1cmUgPSByZW5kZXIudGV4dHVyZXNbaW1hZ2VQYXRoXTtcblxuICAgICAgICBpZiAoIXRleHR1cmUpXG4gICAgICAgICAgICB0ZXh0dXJlID0gcmVuZGVyLnRleHR1cmVzW2ltYWdlUGF0aF0gPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKGltYWdlUGF0aCk7XG5cbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XG4gICAgfTtcblxufSkoKTtcblxufSx7XCIuLi9ib2R5L0NvbXBvc2l0ZVwiOjIsXCIuLi9jb3JlL0NvbW1vblwiOjE0LFwiLi4vY29yZS9FdmVudHNcIjoxNixcIi4uL2dlb21ldHJ5L0JvdW5kc1wiOjI2LFwiLi4vZ2VvbWV0cnkvVmVjdG9yXCI6Mjh9XX0se30sWzMwXSkoMzApXG59KTtcbiIsIi8qKlxuICogIyBSZXN1cnJlY3RKU1xuICogQHZlcnNpb24gMS4wLjNcbiAqIEBsaWNlbnNlIFB1YmxpYyBEb21haW5cbiAqXG4gKiBSZXN1cnJlY3RKUyBwcmVzZXJ2ZXMgb2JqZWN0IGJlaGF2aW9yIChwcm90b3R5cGVzKSBhbmQgcmVmZXJlbmNlXG4gKiBjaXJjdWxhcml0eSB3aXRoIGEgc3BlY2lhbCBKU09OIGVuY29kaW5nLiBVbmxpa2UgcmVndWxhciBKU09OLFxuICogRGF0ZSwgUmVnRXhwLCBET00gb2JqZWN0cywgYW5kIGB1bmRlZmluZWRgIGFyZSBhbHNvIHByb3Blcmx5XG4gKiBwcmVzZXJ2ZWQuXG4gKlxuICogIyMgRXhhbXBsZXNcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7fVxuICogRm9vLnByb3RvdHlwZS5ncmVldCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJoZWxsb1wiOyB9O1xuICpcbiAqIC8vIEJlaGF2aW9yIGlzIHByZXNlcnZlZDpcbiAqIHZhciBuZWNyb21hbmNlciA9IG5ldyBSZXN1cnJlY3QoKTtcbiAqIHZhciBqc29uID0gbmVjcm9tYW5jZXIuc3RyaW5naWZ5KG5ldyBGb28oKSk7XG4gKiB2YXIgZm9vID0gbmVjcm9tYW5jZXIucmVzdXJyZWN0KGpzb24pO1xuICogZm9vLmdyZWV0KCk7ICAvLyA9PiBcImhlbGxvXCJcbiAqXG4gKiAvLyBSZWZlcmVuY2VzIHRvIHRoZSBzYW1lIG9iamVjdCBhcmUgcHJlc2VydmVkOlxuICoganNvbiA9IG5lY3JvbWFuY2VyLnN0cmluZ2lmeShbZm9vLCBmb29dKTtcbiAqIHZhciBhcnJheSA9IG5lY3JvbWFuY2VyLnJlc3VycmVjdChqc29uKTtcbiAqIGFycmF5WzBdID09PSBhcnJheVsxXTsgIC8vID0+IHRydWVcbiAqIGFycmF5WzFdLmdyZWV0KCk7ICAvLyA9PiBcImhlbGxvXCJcbiAqXG4gKiAvLyBEYXRlcyBhcmUgcmVzdG9yZWQgcHJvcGVybHlcbiAqIGpzb24gPSBuZWNyb21hbmNlci5zdHJpbmdpZnkobmV3IERhdGUoKSk7XG4gKiB2YXIgZGF0ZSA9IG5lY3JvbWFuY2VyLnJlc3VycmVjdChqc29uKTtcbiAqIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRlKTsgIC8vID0+IFwiW29iamVjdCBEYXRlXVwiXG4gKlxuICogIyMgT3B0aW9uc1xuICpcbiAqIE9wdGlvbnMgYXJlIHByb3ZpZGVkIHRvIHRoZSBjb25zdHJ1Y3RvciBhcyBhbiBvYmplY3Qgd2l0aCB0aGVzZVxuICogcHJvcGVydGllczpcbiAqXG4gKiAgIHByZWZpeCAoJyMnKTogQSBwcmVmaXggc3RyaW5nIHVzZWQgZm9yIHRlbXBvcmFyeSBwcm9wZXJ0aWVzIGFkZGVkXG4gKiAgICAgdG8gb2JqZWN0cyBkdXJpbmcgc2VyaWFsaXphdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uLiBJdCBpc1xuICogICAgIGltcG9ydGFudCB0aGF0IHlvdSBkb24ndCB1c2UgYW55IHByb3BlcnRpZXMgYmVnaW5uaW5nIHdpdGggdGhpc1xuICogICAgIHN0cmluZy4gVGhpcyBvcHRpb24gbXVzdCBiZSBjb25zaXN0ZW50IGJldHdlZW4gYm90aFxuICogICAgIHNlcmlhbGl6YXRpb24gYW5kIGRlc2VyaWFsaXphdGlvbi5cbiAqXG4gKiAgIGNsZWFudXAgKGZhbHNlKTogUGVyZm9ybSBmdWxsIHByb3BlcnR5IGNsZWFudXAgYWZ0ZXIgYm90aFxuICogICAgIHNlcmlhbGl6YXRpb24gYW5kIGRlc2VyaWFsaXphdGlvbiB1c2luZyB0aGUgYGRlbGV0ZWBcbiAqICAgICBvcGVyYXRvci4gVGhpcyBtYXkgY2F1c2UgcGVyZm9ybWFuY2UgcGVuYWx0aWVzIChicmVha2luZyBoaWRkZW5cbiAqICAgICBjbGFzc2VzIGluIFY4KSBvbiBvYmplY3RzIHRoYXQgUmVzdXJyZWN0SlMgdG91Y2hlcywgc28gZW5hYmxlXG4gKiAgICAgd2l0aCBjYXJlLlxuICpcbiAqICAgcmV2aXZlICh0cnVlKTogUmVzdG9yZSBiZWhhdmlvciAoX19wcm90b19fKSB0byBvYmplY3RzIHRoYXQgaGF2ZVxuICogICAgIGJlZW4gcmVzdXJyZWN0ZWQuIElmIHRoaXMgaXMgc2V0IHRvIGZhbHNlIGR1cmluZyBzZXJpYWxpemF0aW9uLFxuICogICAgIHJlc3VycmVjdGlvbiBpbmZvcm1hdGlvbiB3aWxsIG5vdCBiZSBlbmNvZGVkLiBZb3Ugc3RpbGwgZ2V0XG4gKiAgICAgY2lyY3VsYXJpdHkgYW5kIERhdGUgc3VwcG9ydC5cbiAqXG4gKiAgIHJlc29sdmVyIChSZXN1cnJlY3QuTmFtZXNwYWNlUmVzb2x2ZXIod2luZG93KSk6IENvbnZlcnRzIGJldHdlZW5cbiAqICAgICBhIG5hbWUgYW5kIGEgcHJvdG90eXBlLiBDcmVhdGUgYSBjdXN0b20gcmVzb2x2ZXIgaWYgeW91clxuICogICAgIGNvbnN0cnVjdG9ycyBhcmUgbm90IHN0b3JlZCBpbiBnbG9iYWwgdmFyaWFibGVzLiBUaGUgcmVzb2x2ZXJcbiAqICAgICBoYXMgdHdvIG1ldGhvZHM6IGdldE5hbWUob2JqZWN0KSBhbmQgZ2V0UHJvdG90eXBlKHN0cmluZykuXG4gKlxuICogRm9yIGV4YW1wbGUsXG4gKlxuICogdmFyIG5lY3JvbWFuY2VyID0gbmV3IFJlc3VycmVjdCh7XG4gKiAgICAgcHJlZml4OiAnX18jJyxcbiAqICAgICBjbGVhbnVwOiB0cnVlXG4gKiB9KTtcbiAqXG4gKiAjIyBDYXZlYXRzXG4gKlxuICogICAqIFdpdGggdGhlIGRlZmF1bHQgcmVzb2x2ZXIsIGFsbCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBuYW1lZCBhbmRcbiAqICAgc3RvcmVkIGluIHRoZSBnbG9iYWwgdmFyaWFibGUgdW5kZXIgdGhhdCBuYW1lLiBUaGlzIGlzIHJlcXVpcmVkXG4gKiAgIHNvIHRoYXQgdGhlIHByb3RvdHlwZXMgY2FuIGJlIGxvb2tlZCB1cCBhbmQgcmVjb25uZWN0ZWQgYXRcbiAqICAgcmVzdXJyZWN0aW9uIHRpbWUuXG4gKlxuICogICAqIFRoZSB3cmFwcGVyIG9iamVjdHMgQm9vbGVhbiwgU3RyaW5nLCBhbmQgTnVtYmVyIHdpbGwgYmVcbiAqICAgdW53cmFwcGVkLiBUaGlzIG1lYW5zIGV4dHJhIHByb3BlcnRpZXMgYWRkZWQgdG8gdGhlc2Ugb2JqZWN0c1xuICogICB3aWxsIG5vdCBiZSBwcmVzZXJ2ZWQuXG4gKlxuICogICAqIEZ1bmN0aW9ucyBjYW5ub3QgZXZlciBiZSBzZXJpYWxpemVkLiBSZXN1cnJlY3Qgd2lsbCB0aHJvdyBhblxuICogICBlcnJvciBpZiBhIGZ1bmN0aW9uIGlzIGZvdW5kIHdoZW4gdHJhdmVyc2luZyBhIGRhdGEgc3RydWN0dXJlLlxuICpcbiAqIEBzZWUgaHR0cDovL251bGxwcm9ncmFtLmNvbS9ibG9nLzIwMTMvMDMvMjgvXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFNlZSBvcHRpb25zIGRvY3VtZW50YXRpb24uXG4gKiBAbmFtZXNwYWNlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmVzdXJyZWN0KG9wdGlvbnMpIHtcbiAgICB0aGlzLnRhYmxlID0gbnVsbDtcbiAgICB0aGlzLnByZWZpeCA9ICcjJztcbiAgICB0aGlzLmNsZWFudXAgPSBmYWxzZTtcbiAgICB0aGlzLnJldml2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgICAgICAgdGhpc1tvcHRpb25dID0gb3B0aW9uc1tvcHRpb25dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVmY29kZSA9IHRoaXMucHJlZml4ICsgJ2lkJztcbiAgICB0aGlzLm9yaWdjb2RlID0gdGhpcy5wcmVmaXggKyAnb3JpZ2luYWwnO1xuICAgIHRoaXMuYnVpbGRjb2RlID0gdGhpcy5wcmVmaXggKyAnLic7XG4gICAgdGhpcy52YWx1ZWNvZGUgPSB0aGlzLnByZWZpeCArICd2Jztcbn1cblxuLyoqXG4gKiBQb3J0YWJsZSBhY2Nlc3MgdG8gdGhlIGdsb2JhbCBvYmplY3QgKHdpbmRvdywgZ2xvYmFsKS5cbiAqIFVzZXMgaW5kaXJlY3QgZXZhbC5cbiAqIEBjb25zdGFudFxuICovXG5SZXN1cnJlY3QuR0xPQkFMID0gKDAsIGV2YWwpKCd0aGlzJyk7XG5cbi8qKlxuICogRXNjYXBlIHNwZWNpYWwgcmVndWxhciBleHByZXNzaW9uIGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIGVzY2FwZWQgZm9yIGV4YWN0IG1hdGNoZXMuXG4gKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzY5Njk0ODZcbiAqL1xuUmVzdXJyZWN0LmVzY2FwZVJlZ0V4cCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCBcIlxcXFwkJlwiKTtcbn07XG5cbi8qIEhlbHBlciBPYmplY3RzICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblJlc3VycmVjdC5wcm90b3R5cGUuRXJyb3IgPSBmdW5jdGlvbiBSZXN1cnJlY3RFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnJztcbiAgICB0aGlzLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG59O1xuUmVzdXJyZWN0LnByb3RvdHlwZS5FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5SZXN1cnJlY3QucHJvdG90eXBlLkVycm9yLnByb3RvdHlwZS5uYW1lID0gJ1Jlc3VycmVjdEVycm9yJztcblxuLyoqXG4gKiBSZXNvbHZlcyBwcm90b3R5cGVzIHRocm91Z2ggdGhlIHByb3BlcnRpZXMgb24gYW4gb2JqZWN0IGFuZFxuICogY29uc3RydWN0b3IgbmFtZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5SZXN1cnJlY3QuTmFtZXNwYWNlUmVzb2x2ZXIgPSBmdW5jdGlvbihzY29wZSkge1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvdG90eXBlIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGZyb20gYW4gb2JqZWN0LiBJZlxuICogbm90IGZvdW5kLCBpdCB0aHJvd3MgYW4gZXJyb3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge09iamVjdH1cbiAqIEBtZXRob2RcbiAqL1xuUmVzdXJyZWN0Lk5hbWVzcGFjZVJlc29sdmVyLnByb3RvdHlwZS5nZXRQcm90b3R5cGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5zY29wZVtuYW1lXTtcbiAgICBpZiAoY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgUmVzdXJyZWN0LnByb3RvdHlwZS5FcnJvcignVW5rbm93biBjb25zdHJ1Y3RvcjogJyArIG5hbWUpO1xuICAgIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBwcm90b3R5cGUgbmFtZSBmb3IgYW4gb2JqZWN0LCB0byBiZSBmZXRjaGVkIGxhdGVyIHdpdGggZ2V0UHJvdG90eXBlLlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgez9zdHJpbmd9IE51bGwgaWYgdGhlIGNvbnN0cnVjdG9yIGlzIE9iamVjdC5cbiAqIEBtZXRob2RcbiAqL1xuUmVzdXJyZWN0Lk5hbWVzcGFjZVJlc29sdmVyLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKGNvbnN0cnVjdG9yID09IG51bGwpIHsgLy8gSUVcbiAgICAgICAgdmFyIGZ1bmNQYXR0ZXJuID0gL15cXHMqZnVuY3Rpb25cXHMqKFtBLVphLXowLTlfJF0qKS87XG4gICAgICAgIGNvbnN0cnVjdG9yID0gZnVuY1BhdHRlcm4uZXhlYyhvYmplY3QuY29uc3RydWN0b3IpWzFdO1xuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3RvciA9PT0gJycpIHtcbiAgICAgICAgdmFyIG1zZyA9IFwiQ2FuJ3Qgc2VyaWFsaXplIG9iamVjdHMgd2l0aCBhbm9ueW1vdXMgY29uc3RydWN0b3JzLlwiO1xuICAgICAgICB0aHJvdyBuZXcgUmVzdXJyZWN0LnByb3RvdHlwZS5FcnJvcihtc2cpO1xuICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3IgPT09ICdPYmplY3QnIHx8IGNvbnN0cnVjdG9yID09PSAnQXJyYXknKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9XG59O1xuXG4vKiBTZXQgdGhlIGRlZmF1bHQgcmVzb2x2ZXIgc2VhcmNoZXMgdGhlIGdsb2JhbCBvYmplY3QuICovXG5SZXN1cnJlY3QucHJvdG90eXBlLnJlc29sdmVyID1cbiAgICBuZXcgUmVzdXJyZWN0Lk5hbWVzcGFjZVJlc29sdmVyKFJlc3VycmVjdC5HTE9CQUwpO1xuXG4vKipcbiAqIENyZWF0ZSBhIERPTSBub2RlIGZyb20gSFRNTCBzb3VyY2U7IGJlaGF2ZXMgbGlrZSBhIGNvbnN0cnVjdG9yLlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5SZXN1cnJlY3QuTm9kZSA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xufTtcblxuLyogVHlwZSBUZXN0cyAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCB0ZXN0cyBmb3IgdHlwZS5cbiAqL1xuUmVzdXJyZWN0LmlzID0gZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBzdHJpbmcgPSAnW29iamVjdCAnICsgdHlwZSArICddJztcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PT0gc3RyaW5nO1xuICAgIH07XG59O1xuXG5SZXN1cnJlY3QuaXNBcnJheSA9IFJlc3VycmVjdC5pcygnQXJyYXknKTtcblJlc3VycmVjdC5pc1N0cmluZyA9IFJlc3VycmVjdC5pcygnU3RyaW5nJyk7XG5SZXN1cnJlY3QuaXNCb29sZWFuID0gUmVzdXJyZWN0LmlzKCdCb29sZWFuJyk7XG5SZXN1cnJlY3QuaXNOdW1iZXIgPSBSZXN1cnJlY3QuaXMoJ051bWJlcicpO1xuUmVzdXJyZWN0LmlzRnVuY3Rpb24gPSBSZXN1cnJlY3QuaXMoJ0Z1bmN0aW9uJyk7XG5SZXN1cnJlY3QuaXNEYXRlID0gUmVzdXJyZWN0LmlzKCdEYXRlJyk7XG5SZXN1cnJlY3QuaXNSZWdFeHAgPSBSZXN1cnJlY3QuaXMoJ1JlZ0V4cCcpO1xuUmVzdXJyZWN0LmlzT2JqZWN0ID0gUmVzdXJyZWN0LmlzKCdPYmplY3QnKTtcblxuUmVzdXJyZWN0LmlzQXRvbSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiAhUmVzdXJyZWN0LmlzT2JqZWN0KG9iamVjdCkgJiYgIVJlc3VycmVjdC5pc0FycmF5KG9iamVjdCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Kn0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBvYmplY3QgaXMgYSBwcmltaXRpdmUgb3IgYSBwcmltaXRpdmUgd3JhcHBlci5cbiAqL1xuUmVzdXJyZWN0LmlzUHJpbWl0aXZlID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsIHx8XG4gICAgICAgIFJlc3VycmVjdC5pc051bWJlcihvYmplY3QpIHx8XG4gICAgICAgIFJlc3VycmVjdC5pc1N0cmluZyhvYmplY3QpIHx8XG4gICAgICAgIFJlc3VycmVjdC5pc0Jvb2xlYW4ob2JqZWN0KTtcbn07XG5cbi8qIE1ldGhvZHMgKi9cblxuLyoqXG4gKiBDcmVhdGUgYSByZWZlcmVuY2UgKGVuY29kaW5nKSB0byBhbiBvYmplY3QuXG4gKiBAcGFyYW0geyhPYmplY3R8dW5kZWZpbmVkKX0gb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICogQG1ldGhvZFxuICovXG5SZXN1cnJlY3QucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciByZWYgPSB7fTtcbiAgICBpZiAob2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVmW3RoaXMucHJlZml4XSA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZlt0aGlzLnByZWZpeF0gPSBvYmplY3RbdGhpcy5yZWZjb2RlXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZjtcbn07XG5cbi8qKlxuICogTG9va3VwIGFuIG9iamVjdCBpbiB0aGUgdGFibGUgYnkgcmVmZXJlbmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZcbiAqIEByZXR1cm5zIHsoT2JqZWN0fHVuZGVmaW5lZCl9XG4gKiBAbWV0aG9kXG4gKi9cblJlc3VycmVjdC5wcm90b3R5cGUuZGVyZWYgPSBmdW5jdGlvbihyZWYpIHtcbiAgICByZXR1cm4gdGhpcy50YWJsZVtyZWZbdGhpcy5wcmVmaXhdXTtcbn07XG5cbi8qKlxuICogUHV0IGEgdGVtcG9yYXJ5IGlkZW50aWZpZXIgb24gYW4gb2JqZWN0IGFuZCBzdG9yZSBpdCBpbiB0aGUgdGFibGUuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgdW5pcXVlIGlkZW50aWZpZXIgbnVtYmVyLlxuICogQG1ldGhvZFxuICovXG5SZXN1cnJlY3QucHJvdG90eXBlLnRhZyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmICh0aGlzLnJldml2ZSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLnJlc29sdmVyLmdldE5hbWUob2JqZWN0KTtcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc29sdmVyLmdldFByb3RvdHlwZShjb25zdHJ1Y3RvcikgIT09IHByb3RvKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IHRoaXMuRXJyb3IoJ0NvbnN0cnVjdG9yIG1pc21hdGNoIScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3RbdGhpcy5wcmVmaXhdID0gY29uc3RydWN0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb2JqZWN0W3RoaXMucmVmY29kZV0gPSB0aGlzLnRhYmxlLmxlbmd0aDtcbiAgICB0aGlzLnRhYmxlLnB1c2gob2JqZWN0KTtcbiAgICByZXR1cm4gb2JqZWN0W3RoaXMucmVmY29kZV07XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGJ1aWxkZXIgb2JqZWN0IChlbmNvZGluZykgZm9yIHNlcmlhbGl6YXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29uc3RydWN0b3IuXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHBhc3MgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICogQHJldHVybnMge09iamVjdH1cbiAqIEBtZXRob2RcbiAqL1xuUmVzdXJyZWN0LnByb3RvdHlwZS5idWlsZGVyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgYnVpbGRlciA9IHt9O1xuICAgIGJ1aWxkZXJbdGhpcy5idWlsZGNvZGVdID0gbmFtZTtcbiAgICBidWlsZGVyW3RoaXMudmFsdWVjb2RlXSA9IHZhbHVlO1xuICAgIHJldHVybiBidWlsZGVyO1xufTtcblxuLyoqXG4gKiBCdWlsZCBhIHZhbHVlIGZyb20gYSBkZXNlcmlhbGl6ZWQgYnVpbGRlci5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiBAbWV0aG9kXG4gKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0Mzc4NDYyXG4gKiBAc2VlIGh0dHA6Ly9udWxscHJvZ3JhbS5jb20vYmxvZy8yMDEzLzAzLzI0L1xuICovXG5SZXN1cnJlY3QucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24ocmVmKSB7XG4gICAgdmFyIHR5cGUgPSByZWZbdGhpcy5idWlsZGNvZGVdLnNwbGl0KC9cXC4vKS5yZWR1Y2UoZnVuY3Rpb24ob2JqZWN0LCBuYW1lKSB7XG4gICAgICAgIHJldHVybiBvYmplY3RbbmFtZV07XG4gICAgfSwgUmVzdXJyZWN0LkdMT0JBTCk7XG4gICAgLyogQnJpbGxpYW50IGhhY2sgYnkga3liZXJuZXRpa29zOiAqL1xuICAgIHZhciBhcmdzID0gW251bGxdLmNvbmNhdChyZWZbdGhpcy52YWx1ZWNvZGVdKTtcbiAgICB2YXIgZmFjdG9yeSA9IHR5cGUuYmluZC5hcHBseSh0eXBlLCBhcmdzKTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IGZhY3RvcnkoKTtcbiAgICBpZiAoUmVzdXJyZWN0LmlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC52YWx1ZU9mKCk7IC8vIHVud3JhcFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZXJlZmVyZW5jZSBvciBidWlsZCBhbiBvYmplY3Qgb3IgdmFsdWUgZnJvbSBhbiBlbmNvZGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZcbiAqIEByZXR1cm5zIHsoT2JqZWN0fHVuZGVmaW5lZCl9XG4gKiBAbWV0aG9kXG4gKi9cblJlc3VycmVjdC5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24ocmVmKSB7XG4gICAgaWYgKHRoaXMucHJlZml4IGluIHJlZikge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXJlZihyZWYpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWlsZGNvZGUgaW4gcmVmKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKHJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IHRoaXMuRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcuJyk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcHJvdmlkZWQgb2JqZWN0IGlzIHRhZ2dlZCBmb3Igc2VyaWFsaXphdGlvbi5cbiAqIEBtZXRob2RcbiAqL1xuUmVzdXJyZWN0LnByb3RvdHlwZS5pc1RhZ2dlZCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiAodGhpcy5yZWZjb2RlIGluIG9iamVjdCkgJiYgKG9iamVjdFt0aGlzLnJlZmNvZGVdICE9IG51bGwpO1xufTtcblxuLyoqXG4gKiBWaXNpdCByb290IGFuZCBhbGwgaXRzIGFuY2VzdG9ycywgdmlzaXRpbmcgYXRvbXMgd2l0aCBmLlxuICogQHBhcmFtIHsqfSByb290XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXBsYWNlclxuICogQHJldHVybnMgeyp9IEEgZnJlc2ggY29weSBvZiByb290IHRvIGJlIHNlcmlhbGl6ZWQuXG4gKiBAbWV0aG9kXG4gKi9cblJlc3VycmVjdC5wcm90b3R5cGUudmlzaXQgPSBmdW5jdGlvbihyb290LCBmLCByZXBsYWNlcikge1xuICAgIGlmIChSZXN1cnJlY3QuaXNBdG9tKHJvb3QpKSB7XG4gICAgICAgIHJldHVybiBmKHJvb3QpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNUYWdnZWQocm9vdCkpIHtcbiAgICAgICAgdmFyIGNvcHkgPSBudWxsO1xuICAgICAgICBpZiAoUmVzdXJyZWN0LmlzQXJyYXkocm9vdCkpIHtcbiAgICAgICAgICAgIGNvcHkgPSBbXTtcbiAgICAgICAgICAgIHJvb3RbdGhpcy5yZWZjb2RlXSA9IHRoaXMudGFnKGNvcHkpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb290Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29weS5wdXNoKHRoaXMudmlzaXQocm9vdFtpXSwgZiwgcmVwbGFjZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHsgLyogT2JqZWN0ICovXG4gICAgICAgICAgICBjb3B5ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yocm9vdCkpO1xuICAgICAgICAgICAgcm9vdFt0aGlzLnJlZmNvZGVdID0gdGhpcy50YWcoY29weSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcm9vdCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJvb3Rba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAocm9vdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlciAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIHJlcGxhY2VyIGxpa2UgSlNPTi5zdHJpbmdpZnkncyByZXBsYWNlclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXBsYWNlci5jYWxsKHJvb3QsIGtleSwgcm9vdFtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIE9taXQgZnJvbSByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3B5W2tleV0gPSB0aGlzLnZpc2l0KHZhbHVlLCBmLCByZXBsYWNlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvcHlbdGhpcy5vcmlnY29kZV0gPSByb290O1xuICAgICAgICByZXR1cm4gdGhpcy5yZWYoY29weSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmKHJvb3QpO1xuICAgIH1cbn07XG5cbi8qKlxuICogTWFuYWdlIHNwZWNpYWwgYXRvbSB2YWx1ZXMsIHBvc3NpYmx5IHJldHVybmluZyBhbiBlbmNvZGluZy5cbiAqIEBwYXJhbSB7Kn0gYXRvbVxuICogQHJldHVybnMgeyp9XG4gKiBAbWV0aG9kXG4gKi9cblJlc3VycmVjdC5wcm90b3R5cGUuaGFuZGxlQXRvbSA9IGZ1bmN0aW9uKGF0b20pIHtcbiAgICB2YXIgTm9kZSA9IFJlc3VycmVjdC5HTE9CQUwuTm9kZSB8fCBmdW5jdGlvbigpIHt9O1xuICAgIGlmIChSZXN1cnJlY3QuaXNGdW5jdGlvbihhdG9tKSkge1xuICAgICAgICB0aHJvdyBuZXcgdGhpcy5FcnJvcihcIkNhbid0IHNlcmlhbGl6ZSBmdW5jdGlvbnMuXCIpO1xuICAgIH0gZWxzZSBpZiAoYXRvbSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgdmFyIHhtbHMgPSBuZXcgWE1MU2VyaWFsaXplcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyKCdSZXN1cnJlY3QuTm9kZScsIFt4bWxzLnNlcmlhbGl6ZVRvU3RyaW5nKGF0b20pXSk7XG4gICAgfSBlbHNlIGlmIChSZXN1cnJlY3QuaXNEYXRlKGF0b20pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkZXIoJ0RhdGUnLCBbYXRvbS50b0lTT1N0cmluZygpXSk7XG4gICAgfSBlbHNlIGlmIChSZXN1cnJlY3QuaXNSZWdFeHAoYXRvbSkpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhdG9tLnRvU3RyaW5nKCkubWF0Y2goL1xcLyguKylcXC8oW2dpbXldKikvKS5zbGljZSgxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRlcignUmVnRXhwJywgYXJncyk7XG4gICAgfSBlbHNlIGlmIChhdG9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmKHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIGlmIChSZXN1cnJlY3QuaXNOdW1iZXIoYXRvbSkgJiYgKGlzTmFOKGF0b20pIHx8ICFpc0Zpbml0ZShhdG9tKSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRlcignTnVtYmVyJywgW2F0b20udG9TdHJpbmcoKV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhdG9tO1xuICAgIH1cbn07XG5cbi8qKlxuICogSGlkZXMgaW50cnVzaXZlIGtleXMgZnJvbSBhIHVzZXItc3VwcGxpZWQgcmVwbGFjZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXBsYWNlciBmdW5jdGlvbiBvZiB0d28gYXJndW1lbnRzIChrZXksIHZhbHVlKVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgc2tpcHMgdGhlIHJlcGxhY2VyIGZvciBpbnRydXNpdmUga2V5cy5cbiAqIEBtZXRob2RcbiAqL1xuUmVzdXJyZWN0LnByb3RvdHlwZS5yZXBsYWNlcldyYXBwZXIgPSBmdW5jdGlvbihyZXBsYWNlcikge1xuICAgIHZhciBza2lwID0gbmV3IFJlZ0V4cCgnXicgKyBSZXN1cnJlY3QuZXNjYXBlUmVnRXhwKHRoaXMucHJlZml4KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGssIHYpIHtcbiAgICAgICAgaWYgKHNraXAudGVzdChrKSkge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZXIoaywgdik7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLyoqXG4gKiBTZXJpYWxpemUgYW4gYXJiaXRyYXJ5IEphdmFTY3JpcHQgb2JqZWN0LCBjYXJlZnVsbHkgcHJlc2VydmluZyBpdC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0XG4gKiBAcGFyYW0geyhGdW5jdGlvbnxBcnJheSl9IHJlcGxhY2VyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3BhY2VcbiAqIEBtZXRob2RcbiAqL1xuUmVzdXJyZWN0LnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbihvYmplY3QsIHJlcGxhY2VyLCBzcGFjZSkge1xuICAgIGlmIChSZXN1cnJlY3QuaXNGdW5jdGlvbihyZXBsYWNlcikpIHtcbiAgICAgICAgcmVwbGFjZXIgPSB0aGlzLnJlcGxhY2VyV3JhcHBlcihyZXBsYWNlcik7XG4gICAgfSBlbHNlIGlmIChSZXN1cnJlY3QuaXNBcnJheShyZXBsYWNlcikpIHtcbiAgICAgICAgdmFyIGFjY2VwdEtleXMgPSByZXBsYWNlcjtcbiAgICAgICAgcmVwbGFjZXIgPSBmdW5jdGlvbihrLCB2KSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjZXB0S2V5cy5pbmRleE9mKGspID49IDAgPyB2IDogdW5kZWZpbmVkO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoUmVzdXJyZWN0LmlzQXRvbShvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmhhbmRsZUF0b20ob2JqZWN0KSwgcmVwbGFjZXIsIHNwYWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhYmxlID0gW107XG4gICAgICAgIHRoaXMudmlzaXQob2JqZWN0LCB0aGlzLmhhbmRsZUF0b20uYmluZCh0aGlzKSwgcmVwbGFjZXIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGFibGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFudXApIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy50YWJsZVtpXVt0aGlzLm9yaWdjb2RlXVt0aGlzLnJlZmNvZGVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlW2ldW3RoaXMub3JpZ2NvZGVdW3RoaXMucmVmY29kZV0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMudGFibGVbaV1bdGhpcy5yZWZjb2RlXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRhYmxlW2ldW3RoaXMub3JpZ2NvZGVdO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YWJsZSA9IHRoaXMudGFibGU7XG4gICAgICAgIHRoaXMudGFibGUgPSBudWxsO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGFibGUsIG51bGwsIHNwYWNlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJlc3RvcmUgdGhlIF9fcHJvdG9fXyBvZiB0aGUgZ2l2ZW4gb2JqZWN0IHRvIHRoZSBwcm9wZXIgdmFsdWUuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBJdHMgYXJndW1lbnQsIG9yIGEgY29weSwgd2l0aCB0aGUgcHJvdG90eXBlIHJlc3RvcmVkLlxuICogQG1ldGhvZFxuICovXG5SZXN1cnJlY3QucHJvdG90eXBlLmZpeFByb3RvdHlwZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmICh0aGlzLnByZWZpeCBpbiBvYmplY3QpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBvYmplY3RbdGhpcy5wcmVmaXhdO1xuICAgICAgICB2YXIgcHJvdG90eXBlID0gdGhpcy5yZXNvbHZlci5nZXRQcm90b3R5cGUobmFtZSk7XG4gICAgICAgIGlmICgnX19wcm90b19fJyBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIG9iamVjdC5fX3Byb3RvX18gPSBwcm90b3R5cGU7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhbnVwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdFt0aGlzLnByZWZpeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9IGVsc2UgeyAvLyBJRVxuICAgICAgICAgICAgdmFyIGNvcHkgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPT0gdGhpcy5wcmVmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29weVtrZXldID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cbn07XG5cbi8qKlxuICogRGVzZXJpYWxpemUgYW4gZW5jb2RlZCBvYmplY3QsIHJlc3RvcmluZyBjaXJjdWxhcml0eSBhbmQgYmVoYXZpb3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJucyB7Kn0gVGhlIGRlY29kZWQgb2JqZWN0IG9yIHZhbHVlLlxuICogQG1ldGhvZFxuICovXG5SZXN1cnJlY3QucHJvdG90eXBlLnJlc3VycmVjdCA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzdHJpbmcpO1xuICAgIGlmIChSZXN1cnJlY3QuaXNBcnJheShkYXRhKSkge1xuICAgICAgICB0aGlzLnRhYmxlID0gZGF0YTtcbiAgICAgICAgLyogUmVzdG9yZSBfX3Byb3RvX18uICovXG4gICAgICAgIGlmICh0aGlzLnJldml2ZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYmxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZVtpXSA9IHRoaXMuZml4UHJvdG90eXBlKHRoaXMudGFibGVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIFJlLWVzdGFibGlzaCBvYmplY3QgcmVmZXJlbmNlcyBhbmQgY29uc3RydWN0IGF0b21zLiAqL1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50YWJsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iamVjdCA9IHRoaXMudGFibGVbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKFJlc3VycmVjdC5pc0F0b20ob2JqZWN0W2tleV0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSB0aGlzLmRlY29kZShvYmplY3Rba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gdGhpcy50YWJsZVswXTtcbiAgICB9IGVsc2UgaWYgKFJlc3VycmVjdC5pc09iamVjdChkYXRhKSkge1xuICAgICAgICB0aGlzLnRhYmxlID0gW107XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuZGVjb2RlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMudGFibGUgPSBudWxsO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3VycmVjdDtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IFBSRVNTRUQgPSB0cnVlO1xuY29uc3QgUkVMRUFTRUQgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgYWRkTWFwcGluZyhrZXlOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5zZXQoa2V5TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCB0eXBlIH0gPSBldmVudDtcbiAgICAgICAgaWYgKCF0aGlzLmNhbGxiYWNrcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3Qga2V5U3RhdGUgPSB0eXBlID09PSAna2V5ZG93bicgPyBQUkVTU0VEIDogUkVMRUFTRUQ7XG5cbiAgICAgICAgaWYgKHRoaXMua2V5U3RhdGVzLmdldChrZXkpID09PSBrZXlTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMuc2V0KGtleSwga2V5U3RhdGUpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmdldChrZXkpKGtleVN0YXRlKTtcbiAgICB9XG5cbiAgICBsaXN0ZW4oZWxlbWVudCkge1xuICAgICAgICBbJ2tleXVwJywgJ2tleWRvd24nXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IFJlbmRlciwgRXZlbnRzLCBCb2R5LCBXb3JsZCwgRW5naW5lIH0gZnJvbSAnbWF0dGVyLWpzJztcbmltcG9ydCBHYW1lLCB7IGNhbGxiYWNrT25Db2xsaXNpb25TdGFydCB9IGZyb20gJy4uL3NoYXJlZC9HYW1lJztcbmltcG9ydCBQbGF5ZXIsIHsgY3JlYXRlUGxheWVyQm9keSB9IGZyb20gJy4uL3NoYXJlZC9QbGF5ZXInO1xuaW1wb3J0IHsga2V5YmluZHMsIGFyZW5hIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZy5qc29uJztcbmltcG9ydCBJbnB1dENvbnRleHQgZnJvbSAnLi9JbnB1dENvbnRleHQnO1xuaW1wb3J0IFJlc3VycmVjdCBmcm9tICdyZXN1cnJlY3QtanMnO1xuXG5jb25zdCBuZWNyb21hbmNlciA9IG5ldyBSZXN1cnJlY3QoKTtcbmNvbnN0IHsgcGxheWVyMUtleXMsIHBsYXllcjJLZXlzIH0gPSBrZXliaW5kcztcbmNvbnN0IHsgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCB9ID0gYXJlbmE7XG5cbmNvbnN0IGZha2VMYWcgPSAwO1xuXG5mdW5jdGlvbiBzZXR1cFBsYXllcktleWJvYXJkKGtleWJvYXJkLCBwbGF5ZXIsIGtleXMpIHtcbiAgICBjb25zdCB7IGp1bXAsIHJpZ2h0LCBsZWZ0LCBkaXZlIH0gPSBrZXlzO1xuXG4gICAga2V5Ym9hcmQuYWRkTWFwcGluZyhqdW1wLCBpc1ByZXNzZWQgPT4ge1xuICAgICAgICBjb25zdCBsYXN0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgfHwgcGxheWVyLmxhc3RUaW1lc3RhbXBcbiAgICAgICAgY29uc3QgZGVsdGEgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsYXN0KSAvIDEwMDA7XG4gICAgICAgIGNvbnN0IGlucHV0ID0geyB0eXBlOiAnanVtcCcsIGlzUHJlc3NlZCwgaW5wdXRTZXF1ZW5jZU51bWJlcjogcGxheWVyLmlucHV0U2VxdWVuY2VOdW1iZXIrKywgZGVsdGF9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LCBmYWtlTGFnKTtcblxuXG4gICAgICAgIHBsYXllci5hcHBseUlucHV0KGlucHV0KTtcblxuICAgICAgICAvLyBzYXZlIGZvciBsYXRlciByZWNvbmNpbGlhdGlvblxuICAgICAgICBwbGF5ZXIucGVuZGluZ0lucHV0cy5wdXNoKGlucHV0KTtcbiAgICB9KTtcblxuICAgIGtleWJvYXJkLmFkZE1hcHBpbmcocmlnaHQsIGlzUHJlc3NlZCA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSB8fCBwbGF5ZXIubGFzdFRpbWVzdGFtcFxuICAgICAgICBjb25zdCBkZWx0YSA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxhc3QpIC8gMTAwMDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB7IHR5cGU6ICdtb3ZlLXJpZ2h0JywgaXNQcmVzc2VkLCBpbnB1dFNlcXVlbmNlTnVtYmVyOiBwbGF5ZXIuaW5wdXRTZXF1ZW5jZU51bWJlcisrLCBkZWx0YX1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LCBmYWtlTGFnKTtcblxuICAgICAgICBwbGF5ZXIuYXBwbHlJbnB1dChpbnB1dCk7XG5cbiAgICAgICAgcGxheWVyLnBlbmRpbmdJbnB1dHMucHVzaChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICBrZXlib2FyZC5hZGRNYXBwaW5nKGxlZnQsIGlzUHJlc3NlZCA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSB8fCBwbGF5ZXIubGFzdFRpbWVzdGFtcFxuICAgICAgICBjb25zdCBkZWx0YSA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxhc3QpIC8gMTAwMDtcblxuICAgICAgICBjb25zdCBpbnB1dCA9IHsgdHlwZTogJ21vdmUtbGVmdCcsIGlzUHJlc3NlZCwgaW5wdXRTZXF1ZW5jZU51bWJlcjogcGxheWVyLmlucHV0U2VxdWVuY2VOdW1iZXIrKywgZGVsdGF9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBkYXRhOiBpbnB1dCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSwgZmFrZUxhZyk7XG4gICAgICAgIHBsYXllci5hcHBseUlucHV0KGlucHV0KTtcbiAgICAgICAgcGxheWVyLnBlbmRpbmdJbnB1dHMucHVzaChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICBrZXlib2FyZC5hZGRNYXBwaW5nKGRpdmUsIGlzUHJlc3NlZCA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSB8fCBwbGF5ZXIubGFzdFRpbWVzdGFtcFxuICAgICAgICBjb25zdCBkZWx0YSA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxhc3QpIC8gMTAwMDtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB7IHR5cGU6ICdkaXZlJywgaXNQcmVzc2VkLCBpbnB1dFNlcXVlbmNlTnVtYmVyOiBwbGF5ZXIuaW5wdXRTZXF1ZW5jZU51bWJlcisrLCBkZWx0YX1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGlucHV0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LCBmYWtlTGFnKTtcbiAgICAgICAgcGxheWVyLmFwcGx5SW5wdXQoaW5wdXQpO1xuICAgICAgICBwbGF5ZXIucGVuZGluZ0lucHV0cy5wdXNoKGlucHV0KTtcbiAgICB9KTtcblxufVxuXG5jb25zdCBlbmdpbmUgPSBFbmdpbmUuY3JlYXRlKCk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoZW5naW5lKTtcbmNvbnN0IGtleWJvYXJkID0gbmV3IElucHV0Q29udGV4dCgpO1xuLy8gbGV0IHNjb3JlYm9hcmQgPSB1cGRhdGVTY29yZWJvYXJkKCk7XG5cbmNvbnN0IHJlbmRlciA9IFJlbmRlci5jcmVhdGUoe1xuICAgIGVsZW1lbnQ6IGRvY3VtZW50LmJvZHksXG4gICAgZW5naW5lOiBnYW1lLmVuZ2luZSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIHdpZHRoOiBzY3JlZW5XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzY3JlZW5IZWlnaHQsXG4gICAgICAgIHdpcmVmcmFtZXM6IGZhbHNlLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzEzMzM3NycsXG4gICAgfSxcbn0pO1xuXG4vLyBFdmVudHMub24ocmVuZGVyLCAnYWZ0ZXJSZW5kZXInLCBldmVudCA9PiB7XG4vLyAgICAgcmVuZGVyLmNvbnRleHQuZHJhd0ltYWdlKFxuLy8gICAgICAgICBzY29yZWJvYXJkLFxuLy8gICAgICAgICAoc2NyZWVuV2lkdGggLyAyKSAtIChzY29yZWJvYXJkLndpZHRoIC8gMiksXG4vLyAgICAgICAgIChzY3JlZW5IZWlnaHQgLyA4KSAtIChzY29yZWJvYXJkLmhlaWdodCAvIDIpXG4vLyAgICAgKTtcbi8vIH0pO1xuXG4vLyBFdmVudHMub24oZ2FtZSwgJ3VwZGF0ZS1zY29yZScsIGV2ZW50ID0+IHtcbi8vICAgICBzY29yZWJvYXJkID0gdXBkYXRlU2NvcmVib2FyZCgpO1xuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZVNjb3JlYm9hcmQoKSB7XG4vLyAgICAgY29uc3QgYnVmZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4vLyAgICAgYnVmZmVyLndpZHRoID0gMzAwO1xuLy8gICAgIGJ1ZmZlci5oZWlnaHQgPSAxMDA7XG4vLyAgICAgY29uc3QgY29udGV4dCA9IGJ1ZmZlci5nZXRDb250ZXh0KCcyZCcpO1xuLy8gICAgIGNvbnRleHQuZm9udCA9ICdib2xkIDQwcHggQXJpYWwnXG4vLyAgICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbi8vICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4vLyAgICAgY29udGV4dC5maWxsVGV4dChgJHtnYW1lLnNjb3JlLmxlZnR9IC0gJHtnYW1lLnNjb3JlLnJpZ2h0fWAsIGJ1ZmZlci53aWR0aCAvIDIsIGJ1ZmZlci5oZWlnaHQgLyAyKTtcbi8vICAgICByZXR1cm4gYnVmZmVyO1xuLy8gfVxuXG5SZW5kZXIucnVuKHJlbmRlcik7XG5rZXlib2FyZC5saXN0ZW4od2luZG93KTtcblxuLy8gY29uc3Qgd3MgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo5MDAwJyk7XG5jb25zdCB3cyA9IG5ldyBXZWJTb2NrZXQoJ3dzczovL21vcm5pbmctcmVlZi0wNjA3MC5oZXJva3VhcHAuY29tJyk7XG5cbndzLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Nvbm5lY3Rpb24gZXN0YWJsaXNoZWQnKTtcbn0pO1xuXG5jb25zdCBlbnRpdGllcyA9IG5ldyBNYXAoKTtcbmxldCBtZTtcbndzLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudCA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnd29ybGQtc3RhdGUnKSB7XG5cblxuICAgICAgICBtZXNzYWdlLnN0YXRlLm1hcChib2R5ID0+IG5lY3JvbWFuY2VyLnJlc3VycmVjdChib2R5KSkuZm9yRWFjaChib2R5ID0+IHtcbiAgICAgICAgICAgIGlmICghZW50aXRpZXMuaGFzKGJvZHkuaWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbnQgaGF2ZSB0aGF0Jyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJIGhhdmUgYSByZWNlaXZlZCBhIGJvZHkgd2hpY2ggaXMgbm90IGluIG15IGxpc3Qgb2YgZW50aXRpZXMnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQm9keS5zZXQoZW50aXRpZXMuZ2V0KGJvZHkuaWQpLCBib2R5KTtcblxuICAgICAgICAgICAgLy8gaWYgKGJvZHkuaWQgPT09IG1lLmJvZHkuaWQpIHtcblxuICAgICAgICAgICAgLy8gICAgIC8vIFNlcnZlciBjb3JyZWN0ZWQgbXkgcG9zaXRpb24uIFJlLWFwcGx5IGFsbCBpbnB1dHMgdGhhdCBhcmUgbm90IHByb2Nlc3NlZCBieSBzZXJ2ZXIuXG4gICAgICAgICAgICAvLyAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgLy8gICAgIHdoaWxlKGkgPCBtZS5wZW5kaW5nSW5wdXRzLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGlucHV0ID0gbWUucGVuZGluZ0lucHV0c1tpXTtcblxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoaW5wdXQuaW5wdXRTZXF1ZW5jZU51bWJlciA8PSBtZXNzYWdlLmxhc3RQcm9jZXNzZWRJbnB1dCkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gQWxyZWFkeSBwcm9jZXNzZWRcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1lLnBlbmRpbmdJbnB1dHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gTm90IHByb2Nlc3NlZCB5ZXQuIGFwcGx5IGl0LlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWUuYXBwbHlJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBCb2R5LnVwZGF0ZShtZS5ib2R5LCBpbnB1dC5kZWx0YSwgMSwgMCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuXG5cbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ3BsYXllci1jcmVhdGVkJykge1xuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhdGluZyBnYW1lLi4uJylcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihuZWNyb21hbmNlci5yZXN1cnJlY3QobWVzc2FnZS5lbnRpdHkpKTtcbiAgICAgICAgbWUgPSBwbGF5ZXI7XG4gICAgICAgIHNldHVwUGxheWVyS2V5Ym9hcmQoa2V5Ym9hcmQsIHBsYXllciwgcGxheWVyMktleXMpO1xuXG4gICAgICAgIGVudGl0aWVzLnNldChwbGF5ZXIuYm9keS5pZCwgcGxheWVyLmJvZHkpO1xuXG4gICAgICAgIG1lc3NhZ2Uuc3RhdGUubWFwKGJvZHkgPT4gbmVjcm9tYW5jZXIucmVzdXJyZWN0KGJvZHkpKS5mb3JFYWNoKGJvZHkgPT4ge1xuICAgICAgICAgICAgZW50aXRpZXMuc2V0KGJvZHkuaWQsIGJvZHkpO1xuXG4gICAgICAgICAgICBXb3JsZC5hZGRCb2R5KGdhbWUuZW5naW5lLndvcmxkLCBib2R5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYm90dG9tV2FsbCA9IGVudGl0aWVzLmdldCgnYm90dG9tLXdhbGwnKTtcblxuICAgICAgICBjYWxsYmFja09uQ29sbGlzaW9uU3RhcnQoZ2FtZS5lbmdpbmUsIHBsYXllci5ib2R5LCBib3R0b21XYWxsLCAoKSA9PiB7XG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihwbGF5ZXIuYm9keSwgJ2dyb3VuZGVkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV2ZW50cy5vbihnYW1lLmVuZ2luZSwgJ2JlZm9yZVVwZGF0ZScsIHBsYXllci51cGRhdGUuYmluZChwbGF5ZXIpKTtcbiAgICAgICAgRXZlbnRzLm9uKHBsYXllci5ib2R5LCAnZ3JvdW5kZWQnLCBfZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXBsYXllci5zdGF0ZS5pc0dyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnN0YXRlLmlzR3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBXb3JsZC5hZGRCb2R5KGdhbWUuZW5naW5lLndvcmxkLCBwbGF5ZXIuYm9keSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVudGl0aWVzKTtcbiAgICAgICAgZ2FtZS5ydW4oKTtcbiAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdwbGF5ZXItY3JlYXRlZCcgfSkpO1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBpbml0aWF0ZWQuJylcblxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnb3RoZXItY29ubmVjdGVkJykge1xuICAgICAgICBjb25zdCBib2R5ID0gbmVjcm9tYW5jZXIucmVzdXJyZWN0KG1lc3NhZ2UuZW50aXR5KTtcbiAgICAgICAgZW50aXRpZXMuc2V0KGJvZHkuaWQsIGJvZHkpO1xuICAgICAgICBXb3JsZC5hZGRCb2R5KGdhbWUuZW5naW5lLndvcmxkLCBib2R5KTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ290aGVyLWRpc2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IG5lY3JvbWFuY2VyLnJlc3VycmVjdChtZXNzYWdlLmVudGl0eSk7XG4gICAgICAgIGNvbnN0IGxvY2FsQm9keSA9IGVudGl0aWVzLmdldChib2R5LmlkKTtcbiAgICAgICAgZW50aXRpZXMuZGVsZXRlKGxvY2FsQm9keS5pZCk7XG4gICAgICAgIFdvcmxkLnJlbW92ZShnYW1lLmVuZ2luZS53b3JsZCwgbG9jYWxCb2R5KTtcbiAgICB9XG59KTsiLCJpbXBvcnQgeyBFbmdpbmUsIFdvcmxkLCBCb2RpZXMsIEJvZHksIEV2ZW50cyB9IGZyb20gJ21hdHRlci1qcyc7XG5pbXBvcnQgSW5wdXRDb250ZXh0IGZyb20gJy4uL2NsaWVudC9JbnB1dENvbnRleHQnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qc29uJztcbmltcG9ydCBSZXN1cnJlY3QgZnJvbSAncmVzdXJyZWN0LWpzJztcblxuY29uc3QgeyBzY3JlZW5IZWlnaHQsIHNjcmVlbldpZHRoLCB3YWxsVGhpY2tuZXNzLCBoYWxmVGhpY2tuZXNzIH0gPSBjb25maWcuYXJlbmE7XG5cbmZ1bmN0aW9uIGNyZWF0ZVdhbGwoeCwgeSwgdywgaCwgbGFiZWwpIHtcbiAgICByZXR1cm4gQm9kaWVzLnJlY3RhbmdsZSh4LCB5LCB3LCBoLCB7IGlzU3RhdGljOiB0cnVlLCBpZDogbGFiZWwgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFja09uQ29sbGlzaW9uU3RhcnQoZW5naW5lLCBjb2xsaWRlciwgY29sbGlkZWUsIGNhbGxiYWNrKSB7XG4gICAgRXZlbnRzLm9uKGVuZ2luZSwgJ2NvbGxpc2lvblN0YXJ0JywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wYWlycy5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBhaXIuYm9keUEgPT09IGNvbGxpZGVyICYmIHBhaXIuYm9keUIgPT09IGNvbGxpZGVlXG4gICAgICAgICAgICAgICAgfHwgcGFpci5ib2R5QSA9PT0gY29sbGlkZWUgJiYgcGFpci5ib2R5QiA9PT0gY29sbGlkZXJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcblxuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcblxuICAgICAgICB0aGlzLnNjb3JlID0ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBCb2RpZXMoKSB7XG5cbiAgICAgICAgY29uc3QgYm90dG9tV2FsbCA9IGNyZWF0ZVdhbGwoc2NyZWVuV2lkdGggLyAyLCBzY3JlZW5IZWlnaHQgKyBoYWxmVGhpY2tuZXNzLCBzY3JlZW5XaWR0aCwgd2FsbFRoaWNrbmVzcywgJ2JvdHRvbS13YWxsJyk7XG4gICAgICAgIGNvbnN0IHRvcFdhbGwgPSBjcmVhdGVXYWxsKHNjcmVlbldpZHRoIC8gMiwgLWhhbGZUaGlja25lc3MsIHNjcmVlbldpZHRoLCB3YWxsVGhpY2tuZXNzLCAndG9wLXdhbGwnKTtcbiAgICAgICAgY29uc3QgbGVmdFdhbGwgPSBjcmVhdGVXYWxsKC1oYWxmVGhpY2tuZXNzLCBzY3JlZW5IZWlnaHQgLyAyLCB3YWxsVGhpY2tuZXNzLCBzY3JlZW5IZWlnaHQsICdsZWZ0LXdhbGwnKTtcbiAgICAgICAgY29uc3QgcmlnaHRXYWxsID0gY3JlYXRlV2FsbChzY3JlZW5XaWR0aCArIGhhbGZUaGlja25lc3MsIHNjcmVlbkhlaWdodCAvIDIsIHdhbGxUaGlja25lc3MsIHNjcmVlbkhlaWdodCwgJ3JpZ2h0LXdhbGwnKTtcblxuICAgICAgICBjb25zdCBiYWxsID0gQm9kaWVzLmNpcmNsZShzY3JlZW5XaWR0aCAvIDIsIDUwLCAzMCwgeyByZXN0aXR1dGlvbjogMC45LCBpZDogJ2JhbGwnIH0pO1xuXG4gICAgICAgIGNvbnN0IGJvZGllcyA9IFt0b3BXYWxsLCBib3R0b21XYWxsLCBsZWZ0V2FsbCwgcmlnaHRXYWxsLCBiYWxsXVxuICAgICAgICB0aGlzLmJvZGllcyA9IG5ldyBNYXAoYm9kaWVzLm1hcChib2R5ID0+IChbYm9keS5pZCwgYm9keV0pKSk7XG4gICAgICAgIFdvcmxkLmFkZCh0aGlzLmVuZ2luZS53b3JsZCwgYm9kaWVzKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIEVuZ2luZS5ydW4odGhpcy5lbmdpbmUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCb2R5LCBCb2RpZXMsIFZlcnRpY2VzLCBDb21tb24gfSBmcm9tICdtYXR0ZXItanMnO1xuXG5jb25zdCBXYWxrU3RhdGVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgV0FMS19SSUdIVDogU3ltYm9sKCd3YWxrX3JpZ2h0JyksXG4gICAgV0FMS19MRUZUOiBTeW1ib2woJ3dhbGtfbGVmdCcpLFxuICAgIFNUQU5ESU5HOiBTeW1ib2woJ3N0YW5kaW5nJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcblxuICAgIHN0YXRpYyBzdGF0cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGp1bXBQb3dlcjogLTEwLFxuICAgICAgICAgICAgc3BlZWQ6IDUsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihib2R5KSB7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzR3JvdW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY2FuRG91YmxlSnVtcDogZmFsc2UsXG4gICAgICAgICAgICB3YWxrU3RhdGVTdGFjazogW1dhbGtTdGF0ZXMuU1RBTkRJTkddLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dFNlcXVlbmNlTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5wZW5kaW5nSW5wdXRzID0gW107XG4gICAgfVxuXG4gICAgcXVldWVJbnB1dChpbnB1dCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdJbnB1dHMucHVzaChpbnB1dCk7XG4gICAgfVxuXG5cbiAgICBhcHBseUlucHV0KGlucHV0KSB7XG4gICAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGl2ZSc6IHRoaXMuZGl2ZShpbnB1dC5pc1ByZXNzZWQpOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2p1bXAnOiB0aGlzLmp1bXAoaW5wdXQuaXNQcmVzc2VkKTsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb3ZlLWxlZnQnOiBpbnB1dC5pc1ByZXNzZWQgPyB0aGlzLnN0YXJ0V2Fsa0xlZnQoKSA6IHRoaXMuc3RvcFdhbGtMZWZ0KCk7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW92ZS1yaWdodCc6IGlucHV0LmlzUHJlc3NlZCA/IHRoaXMuc3RhcnRXYWxrUmlnaHQoKSA6IHRoaXMuc3RvcFdhbGtSaWdodCgpOyBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSh0aWNrTWV0YURhdGEpIHtcblxuICAgICAgICAvLyBVcGRhdGUgcGxheWVyXG4gICAgICAgIGxldCBjdXJyZW50V2Fsa1N0YXRlID0gdGhpcy5nZXRDdXJyZW50V2Fsa1N0YXRlKCk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRXYWxrU3RhdGUgPT09IFdhbGtTdGF0ZXMuU1RBTkRJTkcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXRzID0gUGxheWVyLnN0YXRzKCk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRXYWxrU3RhdGUgPT09IFdhbGtTdGF0ZXMuV0FMS19MRUZUKSB7XG4gICAgICAgICAgICBCb2R5LnNldFZlbG9jaXR5KHRoaXMuYm9keSwgeyB4OiAtc3RhdHMuc3BlZWQsIHk6IHRoaXMuYm9keS52ZWxvY2l0eS55IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQm9keS5zZXRWZWxvY2l0eSh0aGlzLmJvZHksIHsgeDogdGhpcy5zdGF0cy5zcGVlZCwgeTogdGhpcy5ib2R5LnZlbG9jaXR5LnkgfSk7XG4gICAgICAgICAgICBCb2R5LnNldFZlbG9jaXR5KHRoaXMuYm9keSwgeyB4OiBzdGF0cy5zcGVlZCwgeTogdGhpcy5ib2R5LnZlbG9jaXR5LnkgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0V2Fsa1JpZ2h0KCkge1xuICAgICAgICB0aGlzLnN0YXRlLndhbGtTdGF0ZVN0YWNrLnB1c2goV2Fsa1N0YXRlcy5XQUxLX1JJR0hUKTtcbiAgICB9XG5cbiAgICBzdG9wV2Fsa1JpZ2h0KCkge1xuICAgICAgICB0aGlzLnN0YXRlLndhbGtTdGF0ZVN0YWNrID0gdGhpcy5zdGF0ZS53YWxrU3RhdGVTdGFjay5maWx0ZXIoc3RhdGUgPT4gc3RhdGUgIT09IFdhbGtTdGF0ZXMuV0FMS19SSUdIVCk7XG4gICAgICAgIEJvZHkuc2V0VmVsb2NpdHkodGhpcy5ib2R5LCB7IHg6IDAsIHk6IHRoaXMuYm9keS52ZWxvY2l0eS55IH0pXG4gICAgfVxuXG4gICAgc3RhcnRXYWxrTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS53YWxrU3RhdGVTdGFjay5wdXNoKFdhbGtTdGF0ZXMuV0FMS19MRUZUKTtcbiAgICB9XG5cbiAgICBzdG9wV2Fsa0xlZnQoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUud2Fsa1N0YXRlU3RhY2sgPSB0aGlzLnN0YXRlLndhbGtTdGF0ZVN0YWNrLmZpbHRlcihzdGF0ZSA9PiBzdGF0ZSAhPT0gV2Fsa1N0YXRlcy5XQUxLX0xFRlQpO1xuICAgICAgICBCb2R5LnNldFZlbG9jaXR5KHRoaXMuYm9keSwgeyB4OiAwLCB5OiB0aGlzLmJvZHkudmVsb2NpdHkueSB9KVxuICAgIH1cblxuICAgIGRpdmUoaXNQcmVzc2VkKSB7XG4gICAgICAgIGlmIChpc1ByZXNzZWQpIHtcbiAgICAgICAgICAgIEJvZHkuc2V0VmVsb2NpdHkodGhpcy5ib2R5LCB7IHg6IDAsIHk6IDEwIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAganVtcChpc1ByZXNzZWQpIHtcbiAgICAgICAgaWYgKCFpc1ByZXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXRzID0gUGxheWVyLnN0YXRzKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzR3JvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNHcm91bmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgQm9keS5zZXRWZWxvY2l0eSh0aGlzLmJvZHksIHsgeDogdGhpcy5ib2R5LnZlbG9jaXR5LngsIHk6IHN0YXRzLmp1bXBQb3dlciB9KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FuRG91YmxlSnVtcCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jYW5Eb3VibGVKdW1wKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhbkRvdWJsZUp1bXAgPSBmYWxzZTtcbiAgICAgICAgICAgIEJvZHkuc2V0VmVsb2NpdHkodGhpcy5ib2R5LCB7IHg6IHRoaXMuYm9keS52ZWxvY2l0eS54LCB5OiBzdGF0cy5qdW1wUG93ZXIgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDdXJyZW50V2Fsa1N0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS53YWxrU3RhdGVTdGFja1t0aGlzLnN0YXRlLndhbGtTdGF0ZVN0YWNrLmxlbmd0aCAtIDFdO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVyQm9keSh4LCB5LCByYWRpdXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBzaWRlcyA9IDIwO1xuICAgIGxldCB0aGV0YSA9IE1hdGguUEkgLyBzaWRlcztcbiAgICBsZXQgcGF0aCA9ICcnO1xuICAgIGxldCBvZmZzZXQgPSB0aGV0YSAqIDIwLjU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVzOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gb2Zmc2V0ICsgKGkgKiB0aGV0YSksXG4gICAgICAgICAgICB4eCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgICAgICAgIHl5ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuXG4gICAgICAgIHBhdGggKz0gJ0wgJyArIHh4LnRvRml4ZWQoMykgKyAnICcgKyB5eS50b0ZpeGVkKDMpICsgJyAnO1xuICAgIH1cblxuICAgIHZhciBwb2x5Z29uID0ge1xuICAgICAgICBsYWJlbDogJ1BvbHlnb24gQm9keScsXG4gICAgICAgIHBvc2l0aW9uOiB7IHgsIHkgfSxcbiAgICAgICAgdmVydGljZXM6IFZlcnRpY2VzLmZyb21QYXRoKHBhdGgpXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgdmFyIGNoYW1mZXIgPSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIHBvbHlnb24udmVydGljZXMgPSBWZXJ0aWNlcy5jaGFtZmVyKHBvbHlnb24udmVydGljZXMsIGNoYW1mZXIucmFkaXVzLFxuICAgICAgICAgICAgY2hhbWZlci5xdWFsaXR5LCBjaGFtZmVyLnF1YWxpdHlNaW4sIGNoYW1mZXIucXVhbGl0eU1heCk7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoe30sIHBvbHlnb24sIG9wdGlvbnMpKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9