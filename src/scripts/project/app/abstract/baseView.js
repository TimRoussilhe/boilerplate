/* global  _ Backbone location  */

import EVENT from 'events/events';
import CV from 'config/currentValues';

class BaseView extends Backbone.View {

	constructor(options = {}, datas) {
		console.log('BaseView constructor');

		_.defaults(options, {
			el: options.el,
			// These options are assigned to the instance by Backbone
			events: {
			 'click a': 'onLinkClicked'
			}
		});

		super(options, datas);

		this.options = options;

	}

	initialize(options, data) {
		console.log('baseview initialize',this);
		/*
		* Params object from router
		* @type {Objet}
		*/
		this.params = (this.params) ? this.params : {};

		/**
		* Option object
		* @type {Objet}
		*/
		this.options = (options) ? options : {};

		/**
		* Model
		* @type {Backbone Model}
		*/
		this.model = (this.model) ? this.model : null;

		/**
		* Assets object template
		* @type {Objet}
		*/
		this.assets = {};

		/**
		* Handlers object
		* @type {Objet}
		*/
		this.handlers = (this.handlers) ? this.handlers : {};

		/**
		* template
		* @type {Twig Template}
		*/
		this.template = (this.template) ? this.template : null;

		/**
		* Object as associative array of all the <Timeline> objects
		* @type {Object}
		*/
		this.TL = {};

		/**
		* Object as associative array of all the <$> objects
		* @type {Object}
		*/
		this.a$ = (this.a$) ? this.a$ : {};

		/**
		* Can update the current view on request animation frame?
		* @type {boolean}
		*/
		this.canUpdate = (this.canUpdate) ? this.canUpdate : false;

		/**
		* classname
		* @type {String}
		*/
		this.className = (this.className) ? this.className : null;

		/**
		* is init ?
		* @type {Boolean}
		*/
		this.isInit = false;

		/**
		* is shown ?
		* @type {Boolean}
		*/
		this.isShown = false;

		this.options = (typeof options !== 'undefined') ? options : {};

		if (this.options.id !== undefined) this.id = this.options.id;

		if (this.options.dataID !== undefined) this.dataID = this.options.dataID;
		if (this.options.template !== undefined) this.template = this.options.template;
		if (this.options.className !== undefined) this.className = this.options.className;

		// Render now if you don't have to fetch anything
		if (this.model === null) {
			this.render();
		}

		// Backbone.View.prototype.initialize.call(this);
	};

	/*
	 * @override
	 * Handles the rendering.
	 * If this.id is provided, it tries to get the element from the DOM
	 * If not, it generates the element based on the tempalte provided, and append it to the container
	 */
	render(){

		console.log('this.options.el', this.options.el);

		if (this.options.el) {
			this.setElement(this.options.el);
			setTimeout(this.onRendered.bind(this), 0);
			return;
		}

		this.renderTemplate();

		setTimeout(this.onRendered.bind(this), 0);
	};

	renderTemplate(){
		console.log('renderTemplate');
		if (this.template === null) return;
		let html = (this.model !== null) ? this.template({datas: this.model.attributes}) : this.template();
		this.setElement(html);
	};

	onRendered(){
		if (this.className !== null) {
			this.$el.addClass(this.className);
		}
		this.trigger(EVENT.PAGE_RENDERED);
	};

	/**
	 * @override
	 */

	init(params, assets) {
		// if (this.isInit) return;

		this.params = params || {};
		this.assets = assets;

		this.initDOM();
	};

	/**
	 * Handles the initialization of DOM element
	 * Here we should create reference of DOM elements we want to manipulate
	 */

	initDOM(){
		console.log('initDOM baseview');
		setTimeout(this.onDOMInit.bind(this), 0);
	};

	setupDOM(){

	}

	initTL(){

	}

	/**
	 * After the DOM is fully init
	 */
	onDOMInit(){

		this.setupDOM();
		this.initTL();
		this.bindEvents();

		this.onInit();
	};

	onInit(){
		this.isInit = true;
		this.trigger(EVENT.INIT);
	};

	/**
	 * Bind events
	 */
	bindEvents(){};

	onLinkClicked(e) {

		console.log('onLinkClicked');

		const root = location.protocol + '//' + location.host;
		const href = e.currentTarget.href;

		// external link
		if (
			(href.substr(0, 4) === 'http' && href.indexOf(root) === -1) ||
			(href.substr(0, 5) === 'https' && href.indexOf(root) === -1) ||
			e.currentTarget.getAttribute('target') === '_blank' ||
			(href.substr(0, 6) === 'mailto' && href.indexOf(root) === -1)) {
			// do nothing
		} else if ((e.metaKey === undefined && e.ctrlKey === undefined) || (!e.metaKey && !e.ctrlKey)) {
			e.preventDefault();
			CV.navigate(e.currentTarget.href);
		} // allow command-click and control-click to open new tab
	};

	/**
	 * Unbind events
	 */
	unbindEvents(){};

	show(){
		this.onShown();
	};

	onShown(){
		this.canUpdate = true;
		this.isShown = true;

		this.trigger(EVENT.SHOWN);
	};

	hide(){
		this.onHidden();
	};

	onHidden(){
		this.isShown 	 = false;
		this.canUpdate = false;

		this.trigger(EVENT.HIDDEN);
	};

	onResize() {};

	/**
	 * Called on request animation frame
	 */
	update() {
		if (this.canUpdate) this.onUpdate();
	};

	/**
	 * Called on request animation frame
	 */
	onUpdate() {};

	/**
	 * Kill a timeline
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
	};

	/**
	 * Kill all the timelines
	 */
	destroyTL(){
		for (let name in this.TL) {
			if (this.TL.hasOwnProperty(name)) {
				this.killTL(name);
			}
		}

		this.TL = {};
	};

	/**
	 * @override
	 */
	dispose() {

		this.undelegateEvents();
		this.stopListening();

		this.unbindEvents();
		this.destroyTL();

		// Kill all parameters, like assets references
		this.params = {};
		this.a$ = {};
		this.assets = {};
		this.handlers = {};

		this.params = null;
		this.assets = null;
		this.handlers = null;
		this.a$ = null;

		this.canUpdate = false;
		this.isInit = false;

		// then destroy the element
		this.remove();

		Backbone.View.prototype.remove.call(this);
	}

}

export default BaseView;
