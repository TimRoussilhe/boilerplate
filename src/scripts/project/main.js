/* global Backbone $ document */

Backbone.$ = $;
var App = require('./app/app');

/**
 * Main module - App entry point
 * @module Main
 */

var Main = function() {};

/**
 * Callback fired once the document is ready
 * @public
 */
Main.prototype.onReady = function() {
	var app = new App();
	app.init();
};

var main = module.exports = new Main();
$(document).ready(main.onReady.bind(main));
