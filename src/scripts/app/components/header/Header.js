import AbstractDOMComponent from 'abstract/DOMcomponent';

// import {toggleSidebar} from 'containers/sidebar/actions';

import {trackEvent} from 'utils/analytics';

class Header extends AbstractDOMComponent {

	constructor(props) {
		super(props);

		this.events = {
			'click .btn-menu': () => this._clickToggle(),
			'click .main-logo': () => this._clickMainLogo(),
			'click .home': () => this._clickHome(),
			'click .about': () => this._clickAbout(),
		};
	}

	initDOM() {
		console.log('this.el', this.el);
		this.$logo = this.el.querySelector('.main-logo');
	}

	onDOMInit() {
		console.log('HEADER ONDOMINIT');

		// document.getElementById('header-container').appendChild(this.el);
		this.$menuEl = document.getElementById('btn-menu');
		this.$navgiationHeader = this.$el.find('.navigation-header');
		super.onDOMInit();
	}
}

export default Header;
