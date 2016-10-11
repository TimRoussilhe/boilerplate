/* global Backbone _*/

require('underscore');
require('Modernizr');
require('gsap');

var Router  = require('router/router');
var Config  = require('config/config');

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
