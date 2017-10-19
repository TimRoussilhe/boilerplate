import _ from 'underscore';
import store from 'store';

const delegateEventSplitter = /^(\S+)\s*(.*)$/;

/**
 * Component: Defines a component with basic methods
 * @constructor
 */
class Component {

	set events(events) {
		for (const event in events) { // eslint-disable-line guard-for-in
			this._events[event] = events[event];
		}
		this.delegateEvents();
	}

	get events() {
		return this._events;
	}

	set promises(promises) {
		for (const promise in promises) {
			this.promises[promise] = promises[promise];
		}
	}
	get promises() {
		return this._promises;
	}

	set states(states) {
		for (const state in states) { // eslint-disable-line guard-for-in
			this._states[state] = states[state];
		}
	}

	get states() {
		return this._states;
	}

	constructor(props) {

		/**
			 * Object as associative array of all the <handlers> objects
			 * @type {Object}
			 */
		this.handlers = {};

		/**
			 * Object as associative array of all the <DOM.events> objects
			 * @type {Object}
			 */
		this._events = {};

			 /**
     * Object as associative array of all the <promises> objects
     * @type {Object}
     */
		this._promises = {
			init: {
				resolve: null,
				reject: null,
			},
			show: {
				resolve: null,
				reject: null,
			},
			hidden: {
				resolve: null,
				reject: null,
			},
		};

		/**
			 * Object as associative array of all the states
			 * @type {Object}
			 */
		this._states = {};

		/**
		 * Object as associative array of all the timelines
		 * @type {Object}
		 */
		this.TL = {};

		/**
     * uniqueId
     * @type {String}
     */
		this.cid = _.uniqueId('component');

		this.props = props;
		this.states = {
			canUpdate: false,
			isInit: false,
			isAnimating: false,
			isShown: false,
		};


		/**
		* El
		* If el is passed from parent, this means the DOM is allready render
		and we just need to scope it
		* @type {DOM}
		*/
		this.el = props.el ? props.el : null;
		this.$el = props.$el ? props.$el : null;
		console.log('this.el', this.el);
		console.log('props.el', props.el);

		this.template = props.template ? props.template : null;

		this.data = props.data ? props.data : this.data;
		this.actions = props.actions ? props.actions : {};

		this.events = {
			'click a': (e) => this.hyperlink(e),
		};

	}

	/**
	 * Init
	 * @return {Promise} A Promise the component is init
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
		this.render();
	}

	/**
     * Init all your DOM elements here
     */
	initDOM() {}

	/**
     * Setup your DOM elements here ( for example defaut style before animation )
     */
	setupDOM() {}

	/**
	 * Init the Timeline here
	 */
	initTL() {}

	onDOMInit() {
		this.bindEvents();
		this.bindGlobalStoreEvents();
		this.onInit();
	}

	/**
	 * Once the component is init
	 */
	onInit() {
		console.log('ONInit');
		this.setState({isInit: true, canUpdate: true});
		this.promises.init.resolve();
	}

	/**
	 * Bind your events here
	 */
	bindEvents() {}

	/**
	 * Bind your store events here
	 */
	bindGlobalStoreEvents() {}

	/**
	 * Unbind yout events here
	 */
	unbindEvents() {}

	/**
	 * Set callbacks, where `this.events` is a hash of
	 *
	 * *{"event selector": "callback"}*
	 *
	 *  {
	 *      'mousedown .title':  'edit',
	 *      'click .button':     'save',
	 *      'click .open':       function(e) { ... }
	 *   }
	 * @param {Object} Events Objcets
	 */
	delegateEvents(events) {

		events || (events = _.result(this, 'events'));
		if (!events) return this;
		this.undelegateEvents();
		for (let key in events) {
			let method = events[key];
			if (!_.isFunction(method)) method = this[method];
			if (!method) continue;
			let match = key.match(delegateEventSplitter);
			this.delegate(match[1], match[2], _.bind(method, this));
		}
		return this;
	}

	/**
     * Add a single event listener to the view's element (or a child element
     * using `selector`). This only works for delegate-able events: not `focus`,
     * `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
     */
	delegate(eventName, selector, listener) {
		if (this.$el) this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
		return this;
	}

	// Clears all callbacks previously bound to the view by `delegateEvents`.
	// You usually don't need to use this, but may wish to if you have multiple
	// Backbone views attached to the same DOM element.
	undelegateEvents() {
		if (this.$el) this.$el.off('.delegateEvents' + this.cid);
		return this;
	}

	// A finer-grained `undelegateEvents` for removing a single delegated event.
	// `selector` and `listener` are both optional.
	undelegate(eventName, selector, listener) {
		this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
		return this;
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

	/**
	 * Call render function if you wanna change the component
	 * based on states/data
	 */
	render() {
		// Default components just need to scope a piece of DOM from constructor
		this.setElement();
		setTimeout(() => this.onRender(), 0);
	}

	/**
	 * Render your component
	 * This is where we scope the main elements
	 */
	setElement() {
		console.log('this.el', this.el);

		if (this.el === null && this.template === null) {
			console.error('You must provide a template or an el to scope a component. Creating an empty div instead', this);
			this.el = document.createElement('div');
		}

		if (this.el !== null) {
			this.$el = $(this.el);
			return;
		}

		if (this.$el !== null) {
			this.el = this.$el[0];
			return;
		}

		if (this.template !== null) {
			this.renderTemplate();
			return;
		}
	}

	/**
	 * Render your template
	 */
	renderTemplate() {
		this.$el = $(this.template());
		this.el = this.$el[0];
	}

	onRender() {
		console.log('onRender');

		this.initDOM();
		this.setupDOM();
		this.initTL();
		this.delegateEvents();
		setTimeout(() => this.onDOMInit(), 0);
	}


	/**
	 * Update
     *
	 */
	update() {
		if (this.states.canUpdate) this.onUpdate();
	}

	/**
	 * Called on scroll
	 */
	onScroll() {}

	/**
	 * Called on update
	 */
	onUpdate() {}

	/**
	 * Called on resize
     * In our scenario this will listen to the GlobalStore Events
	 */
	onResize() {}

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
	 * Navigate using the router
	 */
	navigate(url, options = {}) {
		// if absolute, make sure to add the root
		if (url.indexOf(window.location.origin) >= 0) {
			url = url.replace(window.location.origin, '');
		}

		const re = new RegExp(/^.*\//);
		const rootUrl = re.exec(window.location.href);

		// If internal
		if (url.indexOf(rootUrl) >= 0) {
			// make it relative
			url = url.replace(window.location.origin, '');
			url = url.replace(rootUrl, '');
		}

		page(url);
	}

	// TODO : add connection to isAnimating
	hyperlink(e) {
		// const href = e.currentTarget.href;
		// const route = !e.currentTarget.classList.contains('no-route');

		// // internal link
		// if ((href.substr(0, 4) !== 'http' || href.indexOf(window.location.origin) >= 0) && route) {
		// 	e.preventDefault();

		// 	// // if is loading or loader still shown, we block the navigation
		// 	// const isLoading = this.getState().get('loader').get('isLoading');
		// 	// const isLoaderShown = this.getState().get('loader').get('isShown');

		// 	if (!isLoading && !isLoaderShown) {
		// 		this.navigate(href);
		// 	}
		// }
		const isAnimating = store.getState().app.isAnimating;
		if (isAnimating){
			e.preventDefault();
		}

	}

	/**
	 * Kill a timeline by name
	 * @param {string} name of the timeline stocked in this.TL.
	 */
	killTL(name) {
		if (this.TL[name] === undefined || this.TL[name] === null) return;

		let tl = this.TL[name];

		tl.stop();
		tl.kill();
		tl.clear();
		tl = null;

		this.TL[name] = null;
	}

	/**
	 * Kill all the timelines
	 */
	destroyTL() {
		for (const name in this.TL) {
			if (this.TL[name]) this.killTL(name);
		}
		this.TL = {};
	}

	/**
	 * Dispose the component
	 */
	dispose() {
		this.setState({isInit: false, isShown: false, canUpdate: false});
		this.unbindEvents();
		this.handlers = {};
		this.promises = {};

		this.undelegateEvents();
		this.destroyTL();
		this.$el.remove();
		this.$el = null;
		this.$els = {};
		this._events = {};

		// TODO : unsubscribe redux-watch
	}
}

export default Component;
