/* global  _ Backbone TweenLite TimelineMax Cubic window*/

import BaseView from './baseView';
import EVENT from 'events/events';
// import CV from 'config/currentValues';

class PageView extends BaseView {

	constructor(options = {}, datas) {
		console.log('PageView constructor', datas);
		super(options, datas);

	}

	initialize(options, dataP) {

		console.log('Pageview initialize', this);

		/**
		* Model
		* @type {Backbone Model}
		*/
		this.model = (this.model !== undefined) ? this.model : new Backbone.Model({asynchronous: false});

		/**
		* Current Id View
		* @type {string}
		*/
		this.idView = (options.idView !== undefined) ? options.idView : this.idView;

		// Checking if data passed as attributes and merging them with model attributes
		let data = (dataP !== undefined) ? dataP : null; // put in a page property to match the templating data style
		if (data !== null) this.model.set(data);

		super.initialize(options, data);

	}

	initializeRender() {
		// Asyncronous rendering checking
		// We check if we are on the server ( and data are here ) or if we need to fecth model before render
		if (this.model.get('asyncronous') === true) {
			this.model.fetch({
				success: this.render.bind(this)
			});
		} else {
			this.render();
		}
	};

	onRendered() {
		this.$el.addClass('next-page');
		BaseView.prototype.onRendered.call(this);
	};

	/**
	 * Handles the initialization of DOM element
	 * Here we should create reference of DOM elements we want to manipulate
	 */

	initDOM() {

		BaseView.prototype.initDOM.call(this);
	};

	onDOMInit() {

		this.onResize();
		BaseView.prototype.onDOMInit.call(this);
	};

	setupDOM() {
		TweenLite.set(this.$el, {autoAlpha: 0});
	};

	initTLShow() {

		this.initTLBaseShow();

	};

	initTLHide() {

		this.initTLBaseHide();

	};

	initTLBaseShow() {
		this.TL.show = new TimelineMax({paused: true, onComplete: this.onShown.bind(this)});
		this.TL.show.to(this.$el, 0.3, {autoAlpha: 1, ease: Cubic.easeInOut}, 0);
	};

	initTLBaseHide() {
		this.TL.hide = new TimelineMax({paused: true, onComplete: this.onHidden.bind(this)});
		this.TL.hide.to(this.$el, 0.3, {autoAlpha: 0, ease: Cubic.easeInOut}, 0);
	};

	/**
	 * Bind events
	 */

	show(direct) {
		this.$el.removeClass('next-page');
		console.log('PageView show');
		// call now to have a transition based on the viewport size (desktop/mobile)
		this.initTLShow();

		// scrolltop
		window.scrollTo(0, 0);

		setTimeout((function() {
			this.TL.show.play(0);
		}).bind(this), 0);
	};

	onShown() {
		BaseView.prototype.onShown.call(this);
		this.onResize();
	};

	onHidden() {
		// display: none
		this.$el.addClass('undisplay');
		BaseView.prototype.onHidden.call(this);
	};

	hide(direct) {
		// No need to replay the timeline, just trigger the hidden event
		if (!this.isShown) {
			this.trigger(EVENT.HIDDEN);
			return;
		}

		// call now to have a transition based on the viewport size (desktop/mobile)
		this.initTLHide();

		setTimeout((function() {
			this.TL.hide.play(0);
		}).bind(this));
	};

	onResize() {

	};

	onKeyDown(e) {

	};

	dispose() {
		if (this.model !== null) this.model.stopListening();
		this.model = null;

		BaseView.prototype.dispose.call(this);
	};

}


export default PageView;
