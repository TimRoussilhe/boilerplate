import DOMComponent from 'abstract/DOMcomponent';

// Containers
import Header from 'containers/header/Header';
// import Footer from 'containers/footer/Footer';
// import Sidebar from 'containers/sidebar/Sidebar';
// import Modal from 'containers/modal/Modal';
// import Experience from 'containers/experience/Experience';
// import RotateScreen from 'components/rotate-screen/RotateScreen';
// import ParadeDetailGMaps from 'containers/parade-detail-gmaps/ParadeDetailGMaps';

import $ from 'zepto';

// Actions
// import {showSidebar} from 'containers/sidebar/actions';
// import {showHeader} from 'containers/header/actions';
// import {showFooter} from 'containers/footer/actions';

// import {getScriptGmaps} from 'containers/parade-detail-gmaps/actions';

// Constants
// import {NOT_FOUND, PARADE_DETAIL, PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';

// Utils
// import {trackPage} from 'utils/analytics';
import {debounce} from 'utils/misc';

// import Detectizr from 'detectizr';
// import FastClick from 'fastclick';

class Layout extends DOMComponent {

	constructor(props) {
		super(props);

		// this.watchers = {
		//     'layout.modalScroll': ::this.updateModal,
		//     'layout.scrollEnabled': ::this.updateScroll,
		//     'layout.scrollDisabled': ::this.disableScroll,
		//     'app.location': ::this.setContentClass,
		//     'gmaps.hasScript': ::this.gmapsHasScript,
		//     'header.isHamburgerActive': ::this.toggleScrollPast
		// };
		this.scrollTicket = false;

		this.header = null;
		// this.sidebar = null;
		// this.rotateScreen = null;
		// this.footer = null;
		// this.modal = null;
		// this.experience = null;
		// this.paradeDetailGMaps = null;

		this.el = document.body;
		console.log('this.$el', this.$el);

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

		// this.sidebar = new Sidebar();
		// aInitPromises.push(this.sidebar.init());

		// this.modal = new Modal();
		// aInitPromises.push(this.modal.init());

		// this.experience = new Experience();
		// aInitPromises.push(this.experience.init());

		// this.footer = new Footer();
		// aInitPromises.push(this.footer.init());

		// this.rotateScreen = new RotateScreen();
		// aInitPromises.push(this.rotateScreen.init());

		// this.paradeDetailGMaps = new ParadeDetailGMaps();
		// aInitPromises.push(this.paradeDetailGMaps.init());

		// scroll top
		window.scrollTo(0, 0);

		Promise.all(aInitPromises).then(() => {
			// Load Gmaps script now!
			// this.dispatch(getScriptGmaps());
			super.onDOMInit();

		});
	}

	toggleScrollPast(isHamburgerActive) {
		isHamburgerActive ? this.el.classList.add('u-scroll-past') : this.el.classList.remove('u-scroll-past');
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

	setMeta() {

		// here display currentpage meta


		// const meta = this.getState().get('app').get('meta');

		// document.title = meta.get('title');
		// this.$els.title.text(meta.get('title'));
		// this.$els.metaDescription.val(meta.get('description'));

		// // Analytics
		// trackPage();
	}

	setContentClass(location) {
		this.el.setAttribute('location', location);
	}

	updateScroll() {
		const isScrollEnabled = this.getState().get('layout').get('scrollEnabled');
		if (isScrollEnabled) {
			this.$el.addClass('scroll-enabled');
		} else {
			this.$el.removeClass('scroll-enabled');
		}
	}

	disableScroll() {
		const isScrollDisabled = this.getState().get('layout').get('scrollDisabled');
		if (isScrollDisabled) {
			this.$el.addClass('scroll-disabled');
		} else {
			this.$el.removeClass('scroll-disabled');
		}
	}

	updateModal() {
		const isModalScroll = this.getState().get('layout').get('modalScroll');
		if (isModalScroll) {
			this.$el.addClass('modal-scroll');
		} else {
			this.$el.removeClass('modal-scroll');
		}
	}

	resize() {
		if (!this.states.isShown) return;
	}
}

export default Layout;
