/* global document $ Backbone _ window*/

import FastClick from 'FastClick';
import CV from 'config/currentValues';
import PageManager from 'controller/pageManager';
import EVENTS from 'events/events';
import NavigationView from 'views/ui/navigationView';

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

		if (CV.isMobile) {
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

		this.listenTo(this.pageManager, EVENTS.PAGE_RENDERED,() => this._appendPage());
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
		console.log('_appendPage',this);
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

		window.addEventListener('resize', _.throttle( () => this._onResize(), 300), false);
		window.addEventListener('scroll', () => this._onScroll , false);
		document.addEventListener('keydown',() => this._onKeyDown(), false);

		// document.addEventListener("mouseout",	$.proxy(_onMouseOut, this), false);
		// this.$.body[0].addEventListener("mousemove",	$.proxy(_onMouseMove, this), false);
		// this.$.body[0].addEventListener("mousedown",	$.proxy(_onMouseDown, this), false);
		// this.$.body[0].addEventListener("mouseup",	$.proxy(_onMouseUp, this), false);

		// this.$.body[0].addEventListener("touchstart",	$.proxy(_onTouchStart, this), false);
		// this.$.body[0].addEventListener("touchmove",	 $.proxy(_onTouchMove, this), false);
		// this.$.body[0].addEventListener("touchend",		$.proxy(_onTouchEnd, this), false);
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

			if (scrollY < CV.scrollY) {
				CV.scrollYDirection = 'up';
			} else {
				CV.scrollYDirection = 'down';
			}

			CV.scrollY = scrollY;
		}

		if (this.pageManager && this.pageManager.currentPage && this.pageManager.currentPage.canUpdate) this.pageManager.currentPage.onUpdate();

		this.navigationView.onUpdate();

		window.requestAnimationFrame(this.handlers.onUpdate);

	}

	_onResize() {

		CV.viewport.height = $(window).height();
		CV.breakpoint = (CV.viewport.width <= 960) ? 'sml' : 'default';

		if (this.pageManager && this.pageManager.currentPage) this.pageManager.currentPage.onResize();

		if (this.navigationView) {
			this.navigationView.onResize();
		}
	}

	_onKeyDown(e) {
		if (this.pageManager && this.pageManager.currentPage) this.pageManager.currentPage.onKeyDown(e);
	}

}

export default new MainView();
