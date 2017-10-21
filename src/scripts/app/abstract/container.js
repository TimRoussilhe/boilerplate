/**
 * Container: Handles actions and data for a component
 * @constructor
 */

import Base from './Base';

class AbstractContainer extends Base {

	constructor(options = {}) {

		console.log('options', options);
		super(options);

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

		// /**
		// * El
		// * @type {DOM}
		// */
		// this.options.el = options.el ? options.el : null;

		this.promises = {
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
