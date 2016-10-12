/* global window  */
// var Routes = require('jsons/routes.json');

var Config = function() {
	/**
	 * name of the app
	 * @type {String}
	 */
	this.appName = 'Framework';

	/**
	 * Does the browser has audio available ?
	 * @type {boolean}
	 */
	this.hasAudio = false;

	/**
	 * Does the browser is an IE browser ?
	 * @type {boolean}
	 */
	this.isIE = false;

	/**
	 * Google Analytic ID
	 * @type {String}
	 * The id is tied to
	 */
	this.gaID = null;

	/**
	 * Does the browser is an OLD IE browser ?
	 * @type {boolean}
	 */
	this.isOldIE = false;

	/**
	 * Does the browser has webgl ?
	 * @type {boolean}
	 */
	this.hasWEBGL = true;

	/**
	 * Base URL of the website
	 * @type {string}
	 */
	this.baseUrl = window.location.origin || window.location.protocol + '//' + window.location.host;

	/**
	 * Root used by Backbone.history
	 * @type {string}
	 */
	this.root = '';

	/**
	 * Is an High resolution screen ?
	 * @type {boolean}
	 */
	this.isHighRes = false;

	/**
	 * Object containing device informations (based on Detectizr)
	 * @type {Object}
	 */
	this.device = null;

	/**
	 * Save performance for browser in need
	 * @type {boolean}
	 */
	this.savePerformance = false;

};

Config.prototype.init = function() {
	//Detectizr.detect();
};

module.exports = new Config();
