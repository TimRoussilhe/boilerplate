// import _ from 'underscore';
import Watcher from 'abstract/watcher';

/**
 * Component: Defines a component with basic methods
 * @constructor
 */
class Component extends Watcher {

    /**
     * Object as associative array of all the <handlers> objects
     * @type {Object}
     */
    handlers = {};

    /**
     * Object as associative array of all the <promises> objects
     * @type {Object}
     */
    _promises = {
        init: {
            resolve: null,
            reject: null
        },
        show: {
            resolve: null,
            reject: null
        },
        hidden: {
            resolve: null,
            reject: null
        }
    };

    set promises(promises) {
        for (const promise in promises) { // eslint-disable-line guard-for-in
            this.promises[promise] = promises[promise];
        }
    }

    get promises() {
        return this._promises;
    }

    /**
     * Object as associative array of all the states
     * @type {Object}
     */
    _states = {}

    set states(states) {
        for (const state in states) { // eslint-disable-line guard-for-in
            this._states[state] = states[state];
        }
    }

    get states() {
        return this._states;
    }

	/**
     * uniqueId
     * @type {String}
     */
    cid = null;

    constructor() {
        super();

        this.states = {
            canUpdate: false,
            isInit: false,
            isAnimating: false,
            isShown: false
        };

        this.cid = _.uniqueId('component');
    }

	/**
	 * Init
	 * @return Promise a Promise the component is init
	 */
    init() {
        return new Promise((resolve, reject) => {
            this.promises.init.resolve = resolve;
            this.promises.init.reject = reject;

            const {isInit} = this.states;

            if (isInit) {
                this.promises.init.reject();
                return;
            }

            this.initComponent();
        });
    }

	/**
	 * Init the component.
	 * Override and trigger onInit when we have to wait for computer procesing, like canvas initialization for instance.
	 */
    initComponent() {
        this.bindEvents();
        this.onInit();
    }

	/**
	 * Once the component is init
	 */
    onInit() {
        this.setState({isInit: true, canUpdate: true});
        this.promises.init.resolve();
    }

	/**
	 * Bind yout events here
	 */
    bindEvents() {}

	/**
	 * Unbind yout events here
	 */
    unbindEvents() {}

    setState(partialState = {}, callback) {
        if (typeof partialState !== 'object' &&
            typeof partialState !== 'function' &&
            partialState !== null
        ) {
            console.error('setState(...): takes an object of state variables to update or a ' +
            'function which returns an object of state variables.');
            return;
        }

        for (const key in partialState) {  // eslint-disable-line guard-for-in
            this.states[key] = partialState[key];
        }

        if (callback) callback();
        this.render();
    }

	/**
	 * Update
	 */
    update() {}

    /**
     * Resize
     */
    resize() {}

	/**
	 * Called on scroll
	 */
    onScroll() {}

	/**
	 * Called on update
	 */
    onUpdate() {}

	/**
	 * Called on orientation change
	 */
    onOrientationChange() {}

	/**
	 * Called on resize
	 */
    onResize() {}

	/**
	 * Call render function if you wanna change the component
	 * based on states/data
	 */
    render() {}

	/**
	 * Show the component
	 */
    show() {
        return new Promise((resolve, reject) => {
            this.promises.show.resolve = resolve;
            this.promises.show.reject = reject;
            this.setState({isAnimating: true, canUpdate: true});
            this.showComponent();
        });
    }

    showComponent() {
        this.onShown();
    }

	/**
	 * The component is shown
	 */
    onShown() {
        this.setState({isShown: true, isAnimating: false});
        this.promises.show.resolve();
    }

	/**
	 * Hide the component
	 */
    hide() {
        return new Promise((resolve, reject) => {
            this.promises.hidden.resolve = resolve;
            this.promises.hidden.reject = reject;
            this.setState({isAnimating: true});
            this.hideComponent();
        });
    }

    hideComponent() {
        this.onHidden();
    }

	/**
	 * The component is shown
	 */
    onHidden() {
        this.setState({isAnimating: false, isShown: false, canUpdate: false});
        this.promises.hidden.resolve();
    }

	/**
	 * Dispose the component
	 */
    dispose() {
        this.setState({isInit: false, isShown: false, canUpdate: false});
        this.unbindEvents();
        this.handlers = {};
        this.promises = {};
        super.dispose();
    }
}

export default Component;
