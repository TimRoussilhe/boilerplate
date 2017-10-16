import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './header.twig';

import {toggleSidebar} from 'containers/sidebar/actions';
import {hideHamburgerMenu, toggleHamburgerMenu} from 'containers/header/actions';
import {setCurrentCity} from 'actions/cities';

import $ from 'zepto';

import {trackEvent} from 'utils/analytics';

class Header extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.template = Tpl;

        this.watchers = {
            'header.isShown': ::this.render,
            'header.isHamburgerActive': ::this.render,
            'header.isLogoShown': ::this.render
        };

        this.events = {
            'click .btn-menu': ::this._clickToggle,
            'click .main-logo': ::this._clickMainLogo,
            'click .home': ::this._clickHome,
            'click .about': ::this._clickAbout
        };
    }

    initDOM() {
        this.$els.logo = this.el.querySelector('.main-logo');
    }

    onDOMInit() {
        document.getElementById('header-container').appendChild(this.el);
        this.$els.menuEl = document.getElementById('btn-menu');
        this.$els.navgiationHeader = this.$el.find('.navigation-header');
        super.onDOMInit();
    }

    render() {
        // const {isShown, isLogoShown, isHamburgerActive} = this.states;
        const isShown = this.getState().get('header').get('isShown');
        // const isLogoShown = this.getState().get('header').get('isLogoShown');
        const isHamburgerActive = this.getState().get('header').get('isHamburgerActive');
        console.log('render ------', isShown);

        isShown ? this.el.classList.add('show') : this.el.classList.remove('show');
        // isLogoShown ? this.el.classList.add('show-logo') : this.el.classList.remove('show-logo');
        isHamburgerActive ? this.$els.menuEl.classList.add('active') : this.$els.menuEl.classList.remove('active');
        isHamburgerActive ? this.$els.navgiationHeader.addClass('active') : this.$els.navgiationHeader.removeClass('active');
    }

    hyperlink(e) {
        const target = e.currentTarget;

        if (this.$els.logo === target) {
            // set the current city to 0
            this.dispatch(setCurrentCity(null));
            this.dispatch(hideHamburgerMenu());
        }

        super.hyperlink(e);
    }

    _clickToggle() {
        this.dispatch(toggleHamburgerMenu());
    }

    _clickAbout() {
        if (this.getState().get('browser').is.tablet || this.getState().get('browser').is.mobile) {
            this.dispatch(toggleHamburgerMenu());
        }
        trackEvent({category: 'header', action: 'click', label: 'why showup click'});
        this.actions.about();
    }

    _clickMainLogo() {
        trackEvent({category: 'header', action: 'click', label: 'google logo click'});
    }

    _clickHome() {
        trackEvent({category: 'header', action: 'click', label: 'home click'});
    }
}

export default Header;
