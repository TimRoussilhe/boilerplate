/* global document $ Backbone _ window*/

import FastClick from 'FastClick';
// import CV from 'config/currentValues';
import GlobalStore from 'state/globalStore';
import PageManager from 'controller/pageManager';
import EVENTS from 'events/events';
import NavigationView from 'views/components/navigationView';

/*
 * MainView: Handles the main view logic - window/document event
 * @extend {abstract/view/DOM/DOMview}
 * @constructor
 */

class MainView extends Backbone.View {

	constructor(options = {}) {

		_.defaults(options, {
			 // These options are assigned to the instance by Backbone
			 el: document.body,
			 $el: $(document.body),
			 className: 'test',
			 idView: 'mainpage'
		 });

		 super(options);
		 this.options = options;
	}

	/*
	 * @override
	 */
	initialize(options) {

		this.el    	= document.body;
		this.$el   	= $(this.el);

		this.idView = 'mainpage';

		this.a$ = {
			container : null,
			html : null,
			body : null
		};

		this.pageManager = null;

		this.handlers = {};
		this.bindMainEvents();

	}

	init() {

		if (GlobalStore.get('isMobile')) {
			$('body').addClass('isMobile');
			$('body').addClass('isTouch');
			let needsClick = FastClick.prototype.needsClick;
			FastClick.prototype.needsClick = function(target) {
				if ((target.className || '').indexOf('pac-item') > -1) {
					return true;
				} else if ((target.parentNode.className || '').indexOf('pac-item') > -1) {
					return true;
				}
				return needsClick.apply(this, arguments);
			};
			FastClick.attach(this.el);
		}

		this.pageManager = new PageManager();

		this.listenTo(this.pageManager, EVENTS.PAGE_RENDERED, () => this._appendPage());
		this.listenTo(this.pageManager, EVENTS.SHOW_PAGE, () => this._onShowPage());
		this.listenTo(this.pageManager, EVENTS.PAGE_SHOWN, () => this._onPageShown());
		this.listenTo(this.pageManager, EVENTS.HIDE_PAGE, () => this._onHidePage());

		this.navigationView = new NavigationView({el: this.$el.find('#main-nav')[0]});
		this.navigationView.init();

		this.handlers.onUpdate = () => this._onUpdate();
		this.trigger(EVENTS.INIT);

	}

	_onShowPage() {

		this._onResize();

	}

	_onHidePage() {

	}

	_appendPage() {
		console.log('_appendPage', this);
		this.a$.container.append(this.pageManager.currentPage.el);
	}

	_onPageShown() {

		this.$el.addClass('shown');

	}

	/*
	 * Bind all the main window/document event here.
	 */
	bindMainEvents() {

		this.a$.html = $('html');
		this.a$.container = $('#content');
		this.a$.body = $('body');

		window.addEventListener('resize', _.throttle(() => this._onResize(), 300), false);
		window.addEventListener('scroll', () => this._onScroll, false);

		// document.addEventListener('keydown',() => this._onKeyDown(e), false);
		// document.addEventListener("mouseout",	() => this._onMouseOut(e), false);
		// this.$.body[0].addEventListener("mousemove",	() => this._onMouseMove(e), false);
		// this.$.body[0].addEventListener("mousedown",	() => this._onMouseDown(e), false);
		// this.$.body[0].addEventListener("mouseup",	() => this._onMouseUp(e), false);

		// this.$.body[0].addEventListener("touchstart",	() => this._onTouchStart(e), false);
		// this.$.body[0].addEventListener("touchmove",	 () => this._onTouchMove(e), false);
		// this.$.body[0].addEventListener("touchend",		() => this._onTouchEnd(e), false);
	}

	navigateTo(page, params, hash) {
		this.pageManager.navigateTo(page, params, hash);
		this.navigationView.setNavLayout(page);
	}

	_onScroll() {
		this.ticketScroll = true;
	}

	_onUpdate() {

		if (this.ticketScroll) {
			this.ticketScroll = false;

			let scrollY = window.scrollY || window.pageYOffset;

			if (scrollY < GlobalStore.get('scrollY')) {
				GlobalStore.set('scrollYDirection', 'up');
			} else {
				GlobalStore.set('scrollYDirection', 'down');
			}
			GlobalStore.set('scrollY', scrollY);
		}

		// if (this.pageManager && this.pageManager.currentPage && this.pageManager.currentPage.canUpdate) this.pageManager.currentPage.onUpdate();

		// update run through the RAF call stack:
		for ( var c = 0; c < GlobalStore.get('rafCallStack').length; c++) {
			GlobalStore.get('rafCallStack')[c]();
		}

		this.navigationView.onUpdate();

		window.requestAnimationFrame(this.handlers.onUpdate);

	}

	_onResize() {

		// windoz resize
		const width = this.getWidth();
		const height = this.getHeight();

		GlobalStore.set('viewport', {
			width: width,
			height: height
		});

		// CV.viewport.height = $(window).height();
		// CV.breakpoint = (CV.viewport.width <= 960) ? 'sml' : 'default';

		// if (this.pageManager && this.pageManager.currentPage) this.pageManager.currentPage.onResize();

		// if (this.navigationView) {
			// this.navigationView.onResize();
		// }
	}

	getHeight() {
		return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	}

	getWidth() {
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	}

	_onKeyDown(evt) {

		GlobalStore.set('onKeyDown', evt.keyCode || evt.which);
		// if (this.pageManager && this.pageManager.currentPage) this.pageManager.currentPage.onKeyDown(e);
	}

}

export default new MainView();
