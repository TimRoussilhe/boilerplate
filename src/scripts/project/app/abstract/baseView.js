/* global  _ Backbone $ location  */

// Example of dynamic require 

// var requireAll = function(requireContext) {
// 	var r = {};
// 	var a = requireContext.keys().map(requireContext);
// 	for (var i in requireContext.keys()) {
// 		if (requireContext.keys()[i]) {
// 			var id = requireContext.keys()[i].replace('./', '').replace('.svg', '');
// 			r[id] = a[i];
// 		}
// 	}
// 	return r;
// };

var EVENT = require('events/events');
var CV = require('config/currentValues');

var BaseView = function(options, data) {
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

	/**
	* Handlers object
	* @type {Objet}
	*/
	this.events = this.events ? this.events : {};
	this.events['click a'] = 'onLinkClicked'; // global link

	Backbone.View.call(this, options, data);
};

_.extend(BaseView, Backbone.View);
_.extend(BaseView.prototype, Backbone.View.prototype);

BaseView.prototype.initialize = function(options, data) {
	this.options = (typeof options !== 'undefined') ? options : {};

	if (this.options.id !== undefined) this.id = this.options.id;

	if (this.options.dataID !== undefined) this.dataID = this.options.dataID;
	if (this.options.template !== undefined) this.template = this.options.template;
	if (this.options.className !== undefined) this.className = this.options.className;

	// console.log(this.className);

	// Render now if you don't have to fetch anything
	if (this.model === null) {
		this.render();
	}

	Backbone.View.prototype.initialize.call(this);
};

/*
 * @override
 * Handles the rendering.
 * If this.id is provided, it tries to get the element from the DOM
 * If not, it generates the element based on the tempalte provided, and append it to the container
 */
BaseView.prototype.render = function() {
	// console.log('this.options.el', this.options.el);
	if (this.options.el) {
		this.setElement(this.options.el);
		setTimeout(this.onRendered.bind(this), 0);
		return;
	}

	this.renderTemplate();

	setTimeout(this.onRendered.bind(this), 0);
};

BaseView.prototype.renderTemplate = function() {

	if (this.template === null) return;
	var html = (this.model !== null) ? this.template({datas: this.model.attributes, svgFiles: SvgFiles}) : this.template({svgFiles : SvgFiles});
	this.setElement(html);

};

BaseView.prototype.onRendered = function() {
	if (this.className !== null) {
		this.$el.addClass(this.className);
	}
	this.trigger(EVENT.PAGE_RENDERED);
};

/**
 * @override
 */
BaseView.prototype.init = function(params, assets) {
	// if (this.isInit) return;

	this.params = params || {};
	this.assets = assets;

	this.initDOM();
};

/**
 * Handles the initialization of DOM element
 * Here we should create reference of DOM elements we want to manipulate
 */

BaseView.prototype.initDOM = function() {
	setTimeout(this.onDOMInit.bind(this), 0);
};

BaseView.prototype.setupDOM = function() {};

BaseView.prototype.initTL = function() {};

/**
 * After the DOM is fully init
 */
BaseView.prototype.onDOMInit = function() {

	this.setupDOM();
	this.initTL();
	this.bindEvents();

	this.onInit();
};

BaseView.prototype.onInit = function() {
	this.isInit = true;
	this.trigger(EVENT.INIT);
};

/**
 * Bind events
 */
BaseView.prototype.bindEvents = function() {};

BaseView.prototype.onLinkClicked = function(e) {
	var root = location.protocol + '//' + location.host;
	var href = e.currentTarget.href;

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
BaseView.prototype.unbindEvents = function() {};

BaseView.prototype.show = function() {
	this.onShown();
};

BaseView.prototype.onShown = function() {
	this.canUpdate = true;
	this.isShown = true;

	this.trigger(EVENT.SHOWN);
};

BaseView.prototype.hide = function() {
	this.onHidden();
};

BaseView.prototype.onHidden = function() {
	this.isShown 	 = false;
	this.canUpdate = false;

	this.trigger(EVENT.HIDDEN);
};

BaseView.prototype.onResize = function() {

};

/**
 * Called on request animation frame
 */
BaseView.prototype.update = function() {
	if (this.canUpdate) this.onUpdate();
};

/**
 * Called on request animation frame
 */
BaseView.prototype.onUpdate = function() {

};

/**
 * Kill a timeline
 * @param {string} name of the timeline stocked in this.TL.
 */
BaseView.prototype.killTL = function(name) {
	if (this.TL[name] === undefined || this.TL[name] === null) return;

	var tl = this.TL[name];

	tl.stop();
	tl.kill();
	tl.clear();
	tl = null;

	this.TL[name] = null;
};

/**
 * Kill all the timelines
 */
BaseView.prototype.destroyTL = function() {
	for (var name in this.TL) {
		if (this.TL.hasOwnProperty(name)) {
			this.killTL(name);
		}
	}

	this.TL = {};
};

/**
 * @override
 */
BaseView.prototype.dispose = function() {
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
};

module.exports = BaseView;
