/* global Backbone location $ */
//var Detectizr = require('Detectizr');

var CurrentValues = function() {
	/**
	 * Viewport object
	 * @type {Object}
	 */
	 this.viewport = {width: 0, height: 0, wrapperWidth: 0};

	/**
	 * Mouse object
	 * @type {Object}
	 */
	 this.mouse = {x: 0, y: 0};

	/**
	 * Touch object
	 * @type {Object}
	 */
	 this.touch = {x: 0, y: 0, startX: 0, startY: 0, deltaX: 0, deltaY: 0};

	/**
	 * Is mouse out of window?
	 * @type {boolean}
	 */
	 this.outWindow = false;

	/**
	 * scroll Y value
	 * @type {number}
	 */
	 this.scrollY = 0;

	/**
	 * scroll Y direction
	 * @type {number}
	 */
	this.scrollYDirection = 'down';

	/**
	 * current page
	 * @type {string}
	 */
	this.currentPage = null;

	/**
	 * old page
	 * @type {string}
	 */
	this.oldPage = null;

	/**
	 * delta Y value
	 * @type {number}
	 */
	this.deltaY = 0;

	/**
	 * Is is first time?
	 * @type {boolean}
	 */
	this.firstTime = true;

	/**
	 * Block mouse wheel?
	 * @type {boolean}
	 */
	this.mouseWheelBlock = false;

	/**
	 * Is mobile size?
	 * @type {Boolean}
	 */
	 this.isMobileSize = false;

	 /**
	* Is overlay open?
	* @type {Boolean}
	*/
	 this.overlayOpen = false;

	 /**
	 * Is mobile?
	 * @type {Boolean}
	 */
	 // this.isMobile = (Detectizr.device.type === 'mobile');
	 this.isMobile = $('body').hasClass('mobile');

	/**
	 * Is tablet?
	 * @type {Boolean}
	 */
	 // this.isTablet = (Detectizr.device.type === 'tablet' && Detectizr.browser.name !== 'ie');
	 this.isTablet = $('body').hasClass('tablet');

	 /**
		* Is isTouch?
		* @type {Boolean}
		*/
	 this.isTouch = this.isMobile || this.isTablet;

	/**
	 * Breakpoint
	 * @type {Boolean}
	 */
	 this.breakpoint = null;

	/**
	 * main datas
	 * @type {Object}
	 */
	this.mainDatas = null;

	/**
	 * main assets
	 * @type {Object}
	 */
	this.isAnimating = null;

};

CurrentValues.prototype.init = function() {

};

CurrentValues.prototype.navigate = function(href) {

	var root = location.protocol + '//' + location.host;

	// Ensure the root is part of the anchor href, meaning it's relative.
	if (href && href.slice(0, root.length) === root) {

		href = href.replace(root, '');
		if (this.isAnimating === false) Backbone.history.navigate(href, true);

	}

};

module.exports = new CurrentValues();
