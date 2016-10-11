/* global window  */
var Routes = require('jsons/routes.json');

var Config = function() {
	/**
	 * name of the app
	 * @type {String}
	 */
	this.appName = 'Framework';

	/*
	 * this pulls from routes so there is only one place to change things.
	 * unfortunately there is no easy way to dynamically import/require
	 * with webpack so we need to do some hard coding/repetition.
	 */

	this.paths = [
		{
			name: 'index',
			url: Routes.index.url.replace('/', '')
		},
		{
			name: 'bolt-everyday',
			url: Routes['bolt-everyday'].url.replace('/', '')
		},
		{
			name: 'charging-101',
			url: Routes['charging-101'].url.replace('/', '')
		},
		{
			name: 'charging-locator',
			url: Routes['charging-locator'].url.replace('/', '')
		},
		{
			name: 'real-talk',
			url: Routes['real-talk'].url.replace('/', '')
		},
		{
			name: 'savings-calculator',
			url: Routes['savings-calculator'].url.replace('/', '')
		},
		{
			name: 'legacy',
			url: Routes.legacy.url.replace('/', '')
		},
		{
			name: 'error',
			url: Routes.error.url.replace('/', '')
		}
	];

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
