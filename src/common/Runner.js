import { Events } from 'matter-js';

const raf = typeof window !== 'undefined' ? requestAnimationFrame : (function () {
    console.log('Node environment detected.');
    const startTime = Date.now();
    return function (callback) {
        setImmediate(() => callback(Date.now() - startTime));
    }
})();

const caf = typeof window !== 'undefined' ? cancelAnimationFrame : clearImmediate;

export default class Runner {
    constructor(timestep = 1000 / 60) {

        this._lastFrameTimeMs = 0;
        this._delta = 0;

        this.tickNumber = 0;
        this.timestep = timestep;
    }

    tick(timestamp) {
        this._delta += timestamp - this._lastFrameTimeMs;
        this._lastFrameTimeMs = timestamp;

        let numUpdateSteps = 0;
        while (this._delta >= this.timestep) {
            this._delta -= this.timestep;

            const event = {
                timestamp,
                delta: this.timestep,
                tickNumber: this.tickNumber
            };

            Events.trigger(this, 'beforeTick', event);
            Events.trigger(this, 'tick', event);
            Events.trigger(this, 'afterTick', event);

            if (++numUpdateSteps >= 240) {
                this.panic();
                break;
            }
            this.tickNumber++;
        }

        raf(this.tick.bind(this));
    }

    run() {
        raf(this.tick.bind(this));
    }

    panic() {
        console.log('Panic!');
        this._delta = 0;
    }
}