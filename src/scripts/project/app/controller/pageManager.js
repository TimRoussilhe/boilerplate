/* global  _ Backbone document window */

var EVENT = require('events/events');
var CV = require('config/currentValues');
var Config = require('config/config');
var ROUTES = require('router/routes');
var IndexView = require('views/pages/indexView');
var AboutView = require('views/pages/aboutView');

var PageManager = function() {
	/*
	* Instance of Page
	* @type {abstract/controller}
	*/
	this.currentPage = null;

	/*
	* Instance of Page
	* @type {abstract/controller}
	*/
	this.oldPage = null;

	/*
	* object as an associative array
	* @type {Object}
	*/
	this.pages = {};
	window.CONFIG = Config;
	_.extend(this, Backbone.Events);
};

/*
 * Handles the initialization
 */
PageManager.prototype.init = function() {

};

/*
 * Entry point to change pages
 * @param {Object} page of the page to navigate to.
 */
PageManager.prototype.navigateTo = function(page, params, hash) {

	var el = null;

	if (this.oldPage === null && this.currentPage === null) {

		el = document.getElementsByClassName('page-wrapper')[0];

		if (el && el.id === 'app-error') {

			page = '404';
			params = null;

		}

	}

	var newPage = this.getCurrentPage(page, params);

	CV.isAnimating = true;

	// console.log('PageManager.prototype.navigateTo', page,params,filters);
	// console.log('this.oldPage', this.oldPage);
	// console.log('this.currentPage', this.currentPage);

	if (this.currentPage) {

		this.oldPage = this.currentPage;
		CV.oldPage = this.currentPage.idView;

	}

	CV.currentPage = newPage.id;

	this.currentPage = new newPage.View({
		slug:    params,
		el:      this.currentPage ? null : el,
		idView:  newPage.id
	}, {});

	this.renderCurrentPage();
};

PageManager.prototype.renderCurrentPage = function() {
	this.listenToOnce(this.currentPage, EVENT.PAGE_RENDERED, _onPageRendered.bind(this));
	this.currentPage.initializeRender();
};

PageManager.prototype.getCurrentPage = function(page, params) {
	if (page === null || page === undefined) page = '/';

	var route = ROUTES.getRouteByUrl(page);
	var view = null;

	if (!route) {
		view = IndexView;
		return {id: 'index', View: view};
	}

	switch (route.id) {
	case 'index':
		view = IndexView;
		break;
	case 'about':
		view = AboutView;
		break;
	default:
		view = IndexView;
		break;
	}

	return {id: route.id, View: view};
};

PageManager.prototype.onError = function() {
	Backbone.history.navigate('404', {trigger: false});
	this.navigateTo('404');
};

var _onPageRendered = function() {

	//Back-end rendered here
	if (this.oldPage !== null) {
		this.trigger(EVENT.PAGE_RENDERED);
	}
	var title = this.currentPage.model.attributes.metas.title;
	document.title = title ? title : 'Framework | Default Title here';

	this.listenToOnce(this.currentPage, EVENT.INIT, _onPageReady.bind(this));
	this.currentPage.init();

	document.body.setAttribute('data-page', CV.currentPage);
};

var _onPageReady = function () {

	this.stopListening( this.currentPage, EVENT.INIT);

	if (this.oldPage) {

		this.trigger(EVENT.HIDE_PAGE)
		this.listenToOnce( this.oldPage, EVENT.HIDDEN , _onPageHidden.bind(this));
		this.oldPage.hide();

	} else {

		//first page
		//direct Show
		this.trigger(EVENT.SHOW_PAGE)
		this.listenToOnce(this.currentPage, EVENT.SHOWN , _onPageShown.bind(this));
		this.currentPage.show(true);
	}

}

var _onPageHidden = function () {

		//console.log('pageManager _onPageHidden')
		this.listenToOnce(this.currentPage, EVENT.SHOWN , _onPageShown.bind(this));

		// dispose now!
		if (this.oldPage){
				_removeOldPage.call(this);
		}

		//here we hide old page so it's not direct
		//we appended the new page on the DOM
		setTimeout( (function(){

				this.trigger(EVENT.SHOW_PAGE)
				this.currentPage.show(false);

		}).bind(this), 0 )

}

var _onPageShown = function() {

		CV.isAnimating = false;
		CV.firstTime = false;

		this.trigger(EVENT.PAGE_SHOWN);

}

var _removeOldPage = function() {
	if (this.oldPage) {
		this.stopListening(this.oldPage, EVENT.HIDDEN);
		this.stopListening(this.oldPage, EVENT.SHOWN);
		this.stopListening(this.oldPage, EVENT.SHOW_TILE_TRANSITION);
		this.stopListening(this.oldPage, EVENT.HIDE_TILE_TRANSITION);
		this.stopListening(this.oldPage, EVENT.RELAYOUT);
		this.stopListening(this.oldPage, EVENT.OVERLAY);
		this.stopListening(this.oldPage, EVENT.OVERLAY_CLOSE);

		this.oldPage.dispose();
	}

	this.oldPage = null;
};

module.exports = PageManager;
