import { Events } from 'matter-js';

const timestep = 1000 / 60;

var requestAnimationFrame = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : (function() {
    let lastTimestamp = Date.now();
    let now;
    let timeout;

    return function(callback) {
        now = Date.now();
        timeout = Math.max(0, timestep - (now - lastTimestamp));
        lastTimestamp = now + timeout;
        return setTimeout(function() {
            callback(now + timeout);
        }, timeout);
    };
})();

var cancelAnimationFrame = typeof cancelAnimationFrame === 'function' ? cancelAnimationFrame : clearTimeout;

export default class Runner {
    constructor(timestep = 1000 / 60) {
        this.timestep = timestep;

        this._lastFrameTimeMs = 0;
        this._maxFPS = 60;
        this._delta = 0;
    }

    tick(timestamp) {

        this._delta += timestamp - this._lastFrameTimeMs;
        this._lastFrameTimeMs = timestamp;

        let numUpdateSteps = 0;
        while (this._delta >= this.timestep) {
            Events.trigger(this, 'beforeUpdate', { timestamp, timestep: this.timestep });
            this._delta -= this.timestep;

            if (++numUpdateSteps >= 240) {
                this.panic();
                break;
            }
        }

        Events.trigger(this, 'beforeRender');
        requestAnimationFrame(this.tick.bind(this));
    }

    run() {
        requestAnimationFrame(this.tick.bind(this));
    }

    panic() {
        this._delta = 0;
    }
}