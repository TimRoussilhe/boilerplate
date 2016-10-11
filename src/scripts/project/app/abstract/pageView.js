/* global  _ Backbone TweenLite TimelineMax Cubic window*/

var EVENT = require('events/events');
var CV = require('config/currentValues');
var BaseView = require('./baseView');

var PageView = function(options, data) {
	/**
	* Model
	* @type {Backbone Model}
	*/
	this.model = (this.model !== undefined) ? this.model : new Backbone.Model({asynchronous: false});

	/**
	* Associative object containing get params
	* @type {Object}
	*/
	this.params = {};

	/**
	* Current Id View
	* @type {string}
	*/
	this.idView = (options.idView !== undefined) ? options.idView : this.idView;

	BaseView.call(this, options, data);
};

_.extend(PageView, BaseView);
_.extend(PageView.prototype, BaseView.prototype);

PageView.prototype.initialize = function(options, dataP) {
	// Checking if data passed as attributes and merging them with model attributes
	var data = (dataP !== undefined) ? dataP : null; // put in a page property to match the templating data style
	if (data !== null) this.model.set(data);

	BaseView.prototype.initialize.call(this, options, data);
};

PageView.prototype.initializeRender = function() {
	// Asyncronous rendering checking
	// We check if we are on the server ( and data are here ) or if we need to fecth model before render
	if (this.model.get('asyncronous') === true) {
		this.model.fetch({
			success: this.render.bind(this)
		});
	} else {
		this.render();
	}
};

PageView.prototype.onRendered = function() {

	BaseView.prototype.onRendered.call(this);
};

/**
 * Handles the initialization of DOM element
 * Here we should create reference of DOM elements we want to manipulate
 */

PageView.prototype.initDOM = function() {

	BaseView.prototype.initDOM.call(this);
};

PageView.prototype.onDOMInit = function() {

	this.onResize();
	BaseView.prototype.onDOMInit.call(this);
};

PageView.prototype.setupDOM = function() {
	TweenLite.set(this.$el, {autoAlpha: 0});
};

PageView.prototype.initTLShow = function() {
	
	this.initTLBaseShow();
	
};

PageView.prototype.initTLHide = function() {
	
	this.initTLBaseHide();
	
};

PageView.prototype.initTLBaseShow = function() {
	this.TL.show = new TimelineMax({paused: true, onComplete: this.onShown.bind(this)});
	this.TL.show.to(this.$el, 0.3, {autoAlpha: 1, ease: Cubic.easeInOut}, 0);
};

PageView.prototype.initTLBaseHide = function() {
	this.TL.hide = new TimelineMax({paused: true, onComplete: this.onHidden.bind(this)});
	this.TL.hide.to(this.$el, 0.3, {autoAlpha: 0, ease: Cubic.easeInOut}, 0);
};

/**
 * Bind events
 */

PageView.prototype.show = function(direct) {
	console.log('PageView show');
	// call now to have a transition based on the viewport size (desktop/mobile)
	this.initTLShow();

	// scrolltop
	window.scrollTo(0, 0);

	setTimeout((function() {
		this.TL.show.play(0);
	}).bind(this), 0);
};

PageView.prototype.onShown = function() {
	BaseView.prototype.onShown.call(this);
	this.onResize();
};

PageView.prototype.onHidden = function() {
	// display: none
	this.$el.addClass('undisplay');
	BaseView.prototype.onHidden.call(this);
};

PageView.prototype.hide = function(direct) {
	// No need to replay the timeline, just trigger the hidden event
	if (!this.isShown) {
		this.trigger(EVENT.HIDDEN);
		return;
	}

	// call now to have a transition based on the viewport size (desktop/mobile)
	this.initTLHide();

	setTimeout((function() {
		this.TL.hide.play(0);
	}).bind(this));
};

PageView.prototype.onResize = function() {

};


PageView.prototype.onKeyDown = function(e) {

};

PageView.prototype.dispose = function() {
	if (this.model !== null) this.model.stopListening();
	this.model = null;

	BaseView.prototype.dispose.call(this);
};

module.exports = PageView;
