/* global window  */
// var Routes = require('jsons/routes.json');

class Config {

	constructor(){
		/**
		 * name of the app
		 * @type {String}
		 */
		this.appName = 'Boilerplate';

		/**
		 * Google Analytic ID
		 * @type {String}
		 * The id is tied to
		 */
		this.gaID = null;

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
	}

	init(){
		// Detectizr.detect();
	}
};


let single = new Config();
export default single;
