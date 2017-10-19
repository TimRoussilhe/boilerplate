/* global  _ Backbone document window */

import EVENT from 'events/events';
import Config from 'config/config';
import ROUTES from 'routes/routes';
import IndexView from 'views/pages/indexView';
import AboutView from 'views/pages/aboutView';
import ErrorView from 'views/pages/404View';
import GlobalStore from 'state/globalStore';

class PageManager {

	constructor() {
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
	}

	/*
	 * Entry point to change pages
	 * @param {Object} page of the page to navigate to.
	 */
	navigateTo(page, params, hash) {

		// Safety here
		// We make sure we kill the currentPage is there is a change in the url but animation are still playing (page show / hide)
		// Usually means that user is clikcing fast on arrows
		if (GlobalStore.get('isAnimating')){

			if (this.oldPage){
				this.oldPage.dispose();
			}
			GlobalStore.set('isAnimating', false);
			this.oldPage = null;
		}

		let el = null;

		if (this.oldPage === null && this.currentPage === null) {

			el = document.getElementsByClassName('page-wrapper')[0];

		}

		let newPage = this.getCurrentPage(page, params);

		GlobalStore.set('isAnimating', true);

		if (this.currentPage) {

			this.oldPage = this.currentPage;
			// CV.oldPage = this.currentPage.idView;
			GlobalStore.set('oldPage', this.currentPage.idView);

		}

		// CV.currentPage = newPage.id;
		GlobalStore.set('currentPage', newPage.id);
		this.currentPage = new newPage.View({
			slug:    params,
			el:      this.currentPage ? null : el,
			idView:  newPage.id,
		}, {});

		console.log('this.currentPage -----------------------------', this.currentPage);

		this.renderCurrentPage();
	}

	renderCurrentPage() {
		this.listenToOnce(this.currentPage, EVENT.PAGE_RENDERED, () => this._onPageRendered(this));
		this.currentPage.initializeRender();
	}

	getCurrentPage(page, params) {
		if (page === null || page === undefined) page = '/';

		const route = ROUTES.getRouteByUrl(page);
		let view = null;

		if (!route) {
			view = ErrorView;
			return {id: '404', View: view};
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
	}

	onError() {
		Backbone.history.navigate('404', {trigger: false});
		this.navigateTo('404');
	}

	_onPageRendered() {

		console.log('_onPageRendered');

		// FE render here
		if (this.oldPage !== null) {

			// will append page into the DOM
			this.trigger(EVENT.PAGE_RENDERED);

		}
		console.log('this.currentPage------', this.currentPage);

		const title = this.currentPage.model.attributes.metas.title;
		document.title = title ? title : 'Framework | Default Title here';

		this.listenToOnce(this.currentPage, EVENT.INIT, () => this._onPageReady());
		this.currentPage.init();

		document.body.setAttribute('data-page', GlobalStore.get('currentPage'));

	}

	_onPageReady() {

		this.stopListening(this.currentPage, EVENT.INIT);

		if (this.oldPage) {

			this.trigger(EVENT.HIDE_PAGE);
			this.listenToOnce(this.oldPage, EVENT.HIDDEN, () => this._onPageHidden());
			this.oldPage.hide();

		} else {

			// first page
			// direct Show
			this.trigger(EVENT.SHOW_PAGE);
			this.listenToOnce(this.currentPage, EVENT.SHOWN, () => this._onPageShown());
			this.currentPage.show(true);
		}

	}

	_onPageHidden() {

		// console.log('pageManager _onPageHidden')
		this.listenToOnce(this.currentPage, EVENT.SHOWN, () => this._onPageShown());

		// dispose now!
		if (this.oldPage) {
			this._removeOldPage(this);
		}

		// here we hide old page so it's not direct
		// we appended the new page on the DOM
		setTimeout((function(){

			this.trigger(EVENT.SHOW_PAGE);
			this.currentPage.show(false);

		}).bind(this), 0);

	}

	_onPageShown() {

		// CV.isAnimating = false;
		// CV.firstTime = false;
		GlobalStore.set('isAnimating', false);
		GlobalStore.set('firstTime', false);

		this.trigger(EVENT.PAGE_SHOWN);

	}

	_removeOldPage() {

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
	}

}

export default PageManager;
