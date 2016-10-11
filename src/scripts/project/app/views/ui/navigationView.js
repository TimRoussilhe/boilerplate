/* global Power2 TweenMax $ Backbone _ TimelineMax Cubic */

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
	this.a$.nav 				= this.$el.find('.nav-container');
	this.a$.navItems			= this.a$.nav.find('nav li a');

	BaseView.prototype.initDOM.call(this);
};

NavigationView.prototype.setupDOM = function() {
	this.setNavLayout();
};

NavigationView.prototype.onLinkClicked = function(e) {
	this.href = $(e.currentTarget).attr('href');
	var pageID = $(e.currentTarget).data('page');
	if (
		(this.href.substr(0, 4) === 'http' && this.href.indexOf(root) === -1) ||
		(this.href.substr(0, 5) === 'https' && this.href.indexOf(root) === -1) ||
		e.currentTarget.getAttribute('target') === '_blank' ||
		(this.href.substr(0, 6) === 'mailto' && this.href.indexOf(root) === -1)) {
		// do nothing
	} else {
		e.preventDefault();

		if (CV.currentPage === this.href || this.href === '/' && CV.currentPage === 'index') {
			this.href = null;
			return false;
		}
		// this.hide(link);
		this.setNavLayout(pageID, true);
	}
};

NavigationView.prototype.setNavLayout = function(pageID, hideAfter_) {

	this.resetCurrentNavItem();

	var currentPage = pageID ? ROUTES.getRouteByID(pageID) : ROUTES.getRouteByID(CV.currentPage);

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
