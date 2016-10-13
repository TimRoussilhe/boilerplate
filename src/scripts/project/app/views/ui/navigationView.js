/* global $ _ */

var CV      		= require('config/currentValues');
var ROUTES 			= require('router/routes');
var BaseView  	= require('abstract/baseView');

var NavigationView = function(options, datas) {

	this.href = null;

	BaseView.call(this, options, datas);
};

_.extend(NavigationView, BaseView);
_.extend(NavigationView.prototype, BaseView.prototype);

/*
 * Handles the initialization of DOM element
 * Here we should create reference of DOM elements we want to manipulate
 */
NavigationView.prototype.initDOM = function() {
	this.a$.nav 				= this.$el.find('ul');
	this.a$.navItems		= this.a$.nav.find('li a');

	BaseView.prototype.initDOM.call(this);
};

NavigationView.prototype.setupDOM = function() {
	this.setNavLayout();
};

NavigationView.prototype.onLinkClicked = function(e) {
	BaseView.prototype.onLinkClicked.call(this, e);
};

NavigationView.prototype.setNavLayout = function(pageURL) {
	console.log('setNavLayout', pageURL);
	this.resetCurrentNavItem();

	var currentPage = pageURL ? ROUTES.getRouteByUrl(pageURL) : ROUTES.getRouteByID(CV.currentPage);
	if (currentPage === null) return;

	var $currentNavItem = this.a$.nav.find('*[data-page="' + currentPage.id + '"]');
	// if no nav item SKIP. this would happen when rendering legacy and 404.
	if ($currentNavItem.length === 0) return;
	$currentNavItem.addClass('active');
};

NavigationView.prototype.resetCurrentNavItem = function() {
	for (var i = 0; i < this.a$.navItems.length; i++) {
		$(this.a$.navItems[i]).removeClass('active');
	}
};

module.exports = NavigationView;
