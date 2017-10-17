/**
 * Container: Handles actions and data for a component
 * @constructor
 */
class AbstractContainer{

	set promises(newPromises) {
		if (!this._promises) this._promises = {};
		for (const promise in newPromises) {
			this._promises[promise] = newPromises[promise];
		}
	}
	get promises() {
		return this._promises;
	}

	constructor(options = {}) {

		/**
    * Component asociated to the container
    * @type {Object}
    */
		this._component = null;

		/**
		* Component Class
		* @type {Object}
		*/
		this.Component = null;

		/**
		* Data Object
		* @type {Object}
		*/
		this.data = null;

		/**
		* Options Object
		* @type {Object}
		*/
		this.options = null;

		this.options = options;
		this.data = options.data ? options.data : null;
		this.options.actions = options.actions ? options.actions : {};

		this._promises = {
			init: {
				resolve: null,
				reject: null,
			},
			data: {
				resolve: null,
				reject: null,
			},
		};

		this.states = {
			canUpdate: false,
			isInit: false,
			isAnimating: false,
			isShown: false,
		};

	}

	/**
	 * Init
	 * @return Promise a Promise the component is init
	 */
	init() {

		console.log('this', this);
		console.log('this.Component', this.Component);

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

	getComponent() {
		return this._component;
	}

	initComponent() {
		this.getData().then(() => {
			this.initActions();
			this.initData();

			this.options.data = this.data;
			this._component = new this.Component(this.options);
			this._component.init().then(() => {
				this.onInit();
			});
		});
	}

	/**
	 * Once the component is init
	 */
	onInit() {
		console.log('ONInit');
		this.setState({isInit: true, canUpdate: true});
		this.promises.init.resolve();
	}

	setState(partialState = {}, callback, needRender = false) {
		if (typeof partialState !== 'object' &&
            typeof partialState !== 'function' &&
            partialState !== null
		) {
			console.error('setState(...): takes an object of state variables to update or a ' +
            'function which returns an object of state variables.');
			return;
		}

		for (const key in partialState) { // eslint-disable-line guard-for-in
			this.states[key] = partialState[key];
		}

		if (callback) callback();
		if (needRender) this.render();
	}

	getData() {
		return new Promise((resolve, reject) => {
			this.promises.data.resolve = resolve;
			this.promises.data.reject = reject;

			this.fetchData();
		});
	}

	fetchData() {
		this.promises.data.resolve();
	}

	// If we went to parse and do something with the data
	initData() {}

	// Reference any actions here to pass to the component after
	initActions() {}

	resize() {
		return this._component.resize();
	}

	show() {
		return this._component.show();
	}

	hide() {
		return this._component.hide();
	}

	dispose() {
		this._component.dispose();
		this._component = null;
		return this;
	}

	reRender() {
		this.hide().then(() => {
			this.dispose();
			this.init().then(() => {
				this.show();
			});
		});
	}
}

export default AbstractContainer;
