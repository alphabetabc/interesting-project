class AbstractApp {
    constructor() {
        this.init = this.init.bind(this);
        this.render = this.render.bind(this);
        this.beforeDispose = this.beforeDispose.bind(this);
    }

    domElement = document.createElement("div");

    #state = {
        init: false,
        updateTimer: null,
        dispose: false,
        nextState: null,
    };

    #updateCallback = () => {
        if (this.#state.dispose) return;

        if (this.#state.nextState) {
            this.state = Object.assign({}, this.state, this.#state.nextState);
        }

        this.#state.nextState = null;
        this.#render();
    };

    #update = () => {
        if (this.#state.dispose) return;
        cancelIdleCallback(this.#state.updateTimer);
        this.#state.updateTimer = requestIdleCallback(this.#updateCallback, { timeout: 100 });
    };

    #render = () => {
        try {
            if (!this.#state.init) {
                this.#state.init = true;
                this.init();
                this.init = null;
            }
            this.render();
        } catch (e) {
            this.catch(e);
        }
    };

    state = {};

    init() {}
    render() {}
    beforeDispose() {}
    catch(e) {}

    update = () => {
        this.#update();
    };

    setState = (state) => {
        this.#state.nextState = state;
        this.#update();
    };

    dispose = () => {
        this.#state.dispose = true;
    };

    renderTo(container = document.body) {
        if (container) {
            container.innerHTML = "";
            container.appendChild(this.domElement);
            this.#update();
        }
    }
}

export { AbstractApp };
