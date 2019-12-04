const PRESSED = true;
const RELEASED = false;

export default class InputContext {
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