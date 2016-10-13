/* global Backbone _*/

import Router from 'router/router';
import Config from 'config/config';

/**
 * app: Init the app
 * @constructor
 */
var App = function() {
	_.extend(this, Backbone.Events);
};

/**
 * Handles the init
 */
App.prototype.init = function() {
	console.log('**** Begin App ****');

	Config.init();
	Router.init();
};

module.exports = App;
