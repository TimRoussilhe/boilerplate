import AbstractDOMComponent from 'abstract/component/DOM';
import $ from 'zepto';
import Tpl from './sidebar.twig';
import MiniMap from 'containers/mini-map/MiniMap';

// Constants
import {PARADE_DETAIL, HOMEPAGE} from 'constants/locations';

// Selectors
import {getRoute} from 'containers/app/selectors';

// Actions
import {toggleHamburgerMenu} from 'containers/header/actions';
import {setHotspotOpenIt} from 'containers/experience/actions';
import {setCurrentCity} from 'actions/cities';

// Utils
import {trackEvent} from 'utils/analytics';

class Sidebar extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.template = Tpl;

        this.minimap = null;

        this.watchers = {
            'minimap.zoomedCity': ::this._hideCitiesNav,
            'sidebar.isShown': ::this._display,
            'sidebar.hoverCity': ::this._toggleHover,
            'sidebar.blocked': ::this._handleBlocker,
            'cities.current': ::this._currentCity,
            'header.isHamburgerActive': ::this._toggleHamburger
        };

        this.states = {
            isShown: false,
            hoverCity: null,
            blocked: false
        };

        this.events = {
            'click .find-your-parade': ::this._clickFindYourParade,
            'click .about': ::this._aboutClick,
            'click .cities-nav a': ::this._cityNavClick
            // 'mouseover .cities-nav a': ::this._cityHover,
            // 'mouseout .cities-nav a': ::this._cityMouseLeave
        };
    }

    initDOM() {
        this.$els.nextCity = this.$el.find('.next-city');
        this.$els.cityNav = this.$el.find('.cities-nav')[0];
        this.$els.cityLinks = this.$el.find('.cities-nav a');

        // Store the reference of the cities now
        const cities = this.getState().get('cities').get('list');

        cities.forEach((city) => {
            this.$els['city-' + city] = $(this.$els.cityNav).find('#' + city); // this.$el.find('.' + city);
        });

        this._currentCity();
    }

    onDOMInit() {
        // append
        document.getElementById('sidebar-container').appendChild(this.el);

        const aInitPromises = [];

        this.minimap = new MiniMap();
        aInitPromises.push(this.minimap.init());

        Promise.all(aInitPromises).then(() => {
            super.onDOMInit();
        });
    }

    _display(isShown) {
        this.setState({isShown});
    }

    _getNextCity() {
        const currentCity = this.getState().get('cities').get('current');
        const listCities = this.getState().get('cities').get('list').toJS();

        const idx = listCities.indexOf(currentCity);
        const nextCity = idx + 1 > listCities.length - 1 ? listCities[0] : listCities[idx + 1];

        return getRoute(PARADE_DETAIL, {id: nextCity});
    }

    _currentCity(currentCity) {
        const nextCity = this._getNextCity();
        this.$els.nextCity.attr('href', nextCity.url);
        this.$els.nextCity.attr('id', nextCity.info.params.id);

        this.render();
    }

    render() {
        const {isShown} = this.states;
        const currentCity = this.getState().get('cities').get('current');
        isShown ? this.el.classList.add('show') : this.el.classList.remove('show');

        // Set active classes on city menu
        // currentCity ? this.$els.cityNav.classList.add('active') : this.$els.cityNav.classList.remove('active');
        // this.$els.cityLinks.forEach((link) => {
        //     link.id === currentCity ? link.classList.add('active') : link.classList.remove('active');
        // });
    }

    resize() {
        this._hideCitiesNav(this.getState().get('minimap').get('zoomedCity'));
    }

    _clickCity(e) {
        const city = e.currentTarget.id;
        city ? this.dispatch(setCurrentCity(city)) : this.dispatch(setCurrentCity(null));
    }

    _handleBlocker(blocked) {
        blocked ? this.el.classList.add('block-events') : this.el.classList.remove('block-events');
    }

    _clickFindYourParade() {
        trackEvent({category: 'nav', action: 'click', label: 'search open'});
        this.actions.findYourParade();

        // if (this._isMobile()) this.dispatch(toggleHamburgerMenu());
    }

    _hideCitiesNav(zoomedCity) {
        zoomedCity && !this._isMobile() ? this.$el[0].classList.add('zoomed') : this.$el[0].classList.remove('zoomed');
    }

    _isMobile() {
        return this.getState().get('browser').is.tablet || this.getState().get('browser').is.mobile;
    }

    _isCurrentPage(page) {
        return this.getState().get('app').get('location') === page;
    }

    _cityHover(e) {
        this.actions.hoverCity(e.currentTarget.id);
    }

    _cityMouseLeave() {
        this.actions.hoverCity(null);
    }

    _aboutClick() {
        trackEvent({category: 'nav', action: 'click', label: 'why showup click'});
        this.actions.about();
        if (this._isMobile()) this.dispatch(toggleHamburgerMenu());
    }

    _toggleHover(city, prevCity) {
        // console.log('city, prevCity', city, prevCity);
        // const cityID = String('#' + city);

        // this._clearHover();
        if (prevCity) this.$els['city-' + prevCity].removeClass('hover');
        if (city) this.$els['city-' + city].addClass('hover');
    }

    // _clearHover() {
    //     this.$els.cityLinks.forEach((link) => {
    //         link.classList.remove('hover');
    //     });
    // }

    _toggleHamburger(hamburgerState) {
        hamburgerState ? this.el.classList.add('mobile-show') : this.el.classList.remove('mobile-show');
    }

    _cityNavClick(e) {
        const id = e.currentTarget.id;
        trackEvent({category: 'nav', action: 'click', label: id});
        this.dispatch(setHotspotOpenIt(true));
    }

    // ARNAUD: experimenting click to city on every sizes for clients
    hyperlink(e) {
        // const linkIsActive = this._isMobile() || !this._isCurrentPage(HOMEPAGE);

        // console.log('hyperlink', e);

        // if (linkIsActive) {
        // console.log('hyperlink');
        this.dispatch(toggleHamburgerMenu());
        // } else {
            // this._clickCity(e);
        // }
        // return linkIsActive;
        super.hyperlink(e);
    }

}

export default Sidebar;
