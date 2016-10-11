/* global document $ Backbone _ window*/

var EVENT 						= require('events/events');
var PageManager              	= require('controller/pageManager');
var CV                       	= require('config/currentValues');
var NavigationView           	= require('views/ui/navigationView');
var Analytics                	= require('tools/analytics');
var FastClick					= require('FastClick');
/*
 * MainView: Handles the main view logic - window/document event
 * @extend {abstract/view/DOM/DOMview}
 * @constructor
 */

var MainView = function(options, datas) {
	this.el    	= document.body;
	this.$el   	= $(this.el);

	this.idView = 'mainpage';

	/**
	 * Meta viewport element
	 * @type {element}
	 * @private
	 */
	this.metaViewport = null;

	this.a$ = {};
	/**
	 * Main container
	 * @type {jQuery element}
	 * @private
	 */
	this.a$.container = null;

	/**
	 * html element
	 * @type {jQuery element}
	 * @private
	 */
	this.a$.html = null;

	/**
	 * body element
	 * @type {jQuery element}
	 * @private
	 */
	this.a$.body = null;


	this.pageManager = null;

	this.handlers = {};
	Backbone.View.call(this, options, datas);
};

_.extend(MainView, Backbone.View);
_.extend(MainView.prototype, Backbone.View.prototype);

/*
 * @override
 */
MainView.prototype.initialize = function() {

	this.bindMainEvents();
};

MainView.prototype.init = function() {

	if (CV.isMobile) {
		$('body').addClass('isMobile');
		$('body').addClass('isTouch');
		var needsClick = FastClick.prototype.needsClick;
		FastClick.prototype.needsClick = function(target) {
			if ((target.className || '').indexOf('pac-item') > -1) {
				return true;
			} else if ((target.parentNode.className || '').indexOf('pac-item') > -1) {
				return true;
			}
			return needsClick.apply(this, arguments);
		};

		FastClick.attach(this.el);
	}

	this.pageManager = new PageManager();
	this.listenTo(this.pageManager, EVENT.PAGE_RENDERED,	_appendPage.bind(this));
	this.listenTo(this.pageManager, EVENT.SHOW_PAGE, 		_onShowPage.bind(this));
	this.listenTo(this.pageManager, EVENT.PAGE_SHOWN,		_onPageShown.bind(this));
	this.listenTo(this.pageManager, EVENT.HIDE_PAGE,		_onHidePage.bind(this));

	this.navigationView = new NavigationView({el: this.$el.find('#nav-wrapper')[0]});
	this.navigationView.init();

	this.handlers.onUpdate = _onUpdate.bind(this);
	this.trigger(EVENT.INIT);
};


var _onShowPage = function() {
	
	_onResize.call(this);
	
};

var _onHidePage = function() {
	
};

var _appendPage = function() {
	this.$.container.append(this.pageManager.currentPage.el);
};

var _onPageShown = function() {
	
	this.$el.addClass('shown');
};

/*
 * Bind all the main window/document event here.
 */
MainView.prototype.bindMainEvents = function() {
	this.$.html = $('html');
	this.$.container = $('#content');
	this.$.body = $('body');

	window.addEventListener('resize', _.throttle(_onResize.bind(this), 300), false);
	window.addEventListener('scroll', _onScroll.bind(this), false);
	document.addEventListener('keydown', $.proxy(_onKeyDown, this), false);

	// document.addEventListener("mouseout",  $.proxy(_onMouseOut, this), false);
	// this.$.body[0].addEventListener("mousemove",  $.proxy(_onMouseMove, this), false);
	// this.$.body[0].addEventListener("mousedown",  $.proxy(_onMouseDown, this), false);
	// this.$.body[0].addEventListener("mouseup",  $.proxy(_onMouseUp, this), false);

	// this.$.body[0].addEventListener("touchstart",  $.proxy(_onTouchStart, this), false);
	// this.$.body[0].addEventListener("touchmove",   $.proxy(_onTouchMove, this), false);
	// this.$.body[0].addEventListener("touchend",    $.proxy(_onTouchEnd, this), false);
};


MainView.prototype.navigateTo = function(page, params, hash) {
	this.pageManager.navigateTo(page, params, hash);
};

var _onScroll = function() {
	this.ticketScroll = true;
};

var _onUpdate = function() {
	if (this.ticketScroll) {
		this.ticketScroll = false;

		var scrollY = window.scrollY || window.pageYOffset;

		if (scrollY < CV.scrollY) {
			CV.scrollYDirection = 'up';
		} else {
			CV.scrollYDirection = 'down';
		}

		CV.scrollY = scrollY;
	}

	if (this.pageManager && this.pageManager.currentPage && this.pageManager.currentPage.canUpdate) this.pageManager.currentPage.onUpdate();

	this.navigationView.onUpdate();

	window.requestAnimationFrame(this.handlers.onUpdate);
};

var _onResize = function() {

	CV.viewport.width = CV.viewport.wrapperWidth = $(window).width();
	CV.viewport.height = $(window).height();
	CV.breakpoint = (CV.viewport.width <= 960) ? 'sml' : 'default';

	if (this.pageManager && this.pageManager.currentPage) this.pageManager.currentPage.onResize();

	if (this.navigationView) {
		this.navigationView.onResize();
	}
};

var _onKeyDown = function(e) {
	if (this.pageManager && this.pageManager.currentPage) this.pageManager.currentPage.onKeyDown(e);
};

module.exports = new MainView();
