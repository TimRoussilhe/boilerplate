import DOMComponent from 'abstract/DOMcomponent';
import store from 'store';
import watch from 'redux-watch';

// Containers
import Header from 'containers/header/Header';

import $ from 'zepto';

import {debounce} from 'utils/misc';

class Layout extends DOMComponent {

	constructor(props) {
		super(props);

		this.scrollTicket = false;

		this.header = null;

		this.el = document.documentElement;

		let w = watch(store.getState, 'app.meta');
		store.subscribe(w((newVal, oldVal, objectPath) => this.setMeta(newVal, oldVal)));

		let watchLocation = watch(store.getState, 'app.location');
		store.subscribe(watchLocation((newVal, oldVal, objectPath) => this.setLocationClass(newVal)));

	}

	initDOM() {
		const scrollObj = {
			x: window.scrollX || window.pageXOffset,
			y: window.scrollY || window.pageYOffset,
		};

		this.$content = this.$el.find('#content');
		this.$title = this.$el.find('head > title');

		this.$metaDescription = this.$el.find('head > meta[name=description]');

		// if you need to remove fastclick event of an element
		// just add needsclick as a class
		// const needsClick = FastClick.prototype.needsClick;
		// FastClick.prototype.needsClick = function(target) {
		//     return needsClick.apply(this, arguments);
		// };
		// FastClick.attach(this.el);

		this.actions.scroll(scrollObj);
	}

	onDOMInit() {
		const aInitPromises = [];

		this.header = new Header({
			el: document.getElementById('main-nav'),
		});
		aInitPromises.push(this.header.init());

		// scroll top
		window.scrollTo(0, 0);

		Promise.all(aInitPromises).then(() => {
			// Load Gmaps script now!
			// this.dispatch(getScriptGmaps());
			super.onDOMInit();

		});
	}

	bindEvents() {

		window.addEventListener('orientationchange', debounce(() => {
			// this._calcVH();
			this.actions.resize(window);
		}, 300), false);

		window.addEventListener('resize', debounce(() => {
			// this._calcVH();
			this.actions.resize(window);
		}, 300), false);

		window.addEventListener('scroll', () => {
			this.scrollTicket = true;
		}, false);

		// Actually, unsubscribe to any this.events to avoid any double trigger because of body
		this.undelegateEvents();
	}

	onUpdate() {
		if (this.scrollTicket) {
			this.scrollTicket = false;
			const scrollObj = {
				x: window.scrollX || window.pageXOffset,
				y: window.scrollY || window.pageYOffset,
			};
			this.actions.scroll(scrollObj);
		}
	}

	showComponent() {
		// if (this.states.isShown) return;
		const location = this.getState().get('app').get('location');

		setTimeout(() => {
			if (location !== NOT_FOUND) this.dispatch(showSidebar());
			if (location !== PARADE_DETAIL) this.dispatch(showHeader());
			if (location !== PARADE_DETAIL && location !== PARADE_EXPERIENCE_HOTSPOT) this.dispatch(showFooter());
			super.showComponent();
		}, 0);
	}

	triggerResize() {
		$(window).trigger('resize');
	}

	setMeta(meta, oldMeta) {

		this.$title.text(meta.title);
		this.$metaDescription.val(meta.description);

		// // Analytics
		// trackPage();
	}

	setLocationClass(location) {
		this.el.setAttribute('location', location);
	}

	resize() {
		if (!this.states.isShown) return;
	}
}

export default Layout;
