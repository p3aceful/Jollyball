import { Events, Runner } from 'matter-js';


export default class MyRunner {
    constructor() {
        this.runner = Runner.create({ isFixed: true });
        this.tickNumber = 0;
        Events.on(this.runner, 'tick', _ => {
            this.tickNumber++;
        });
        
    }

    run(engine) {
        Runner.run(this.runner, engine);
    }
}