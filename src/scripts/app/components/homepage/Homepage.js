import AbstractPageComponent from 'abstract/component/DOM/page';
import Tpl from './homepage.twig';

import HomepageIntroPageContainer from 'containers/homepage-intro-page/HomepageIntroPage';

// Constants
import {HOMEPAGE} from 'constants/locations';

// Utils
import ScrollPrevent from 'utils/scrollPrevent';
import {getAssetByDevice} from 'utils/misc';
import {loadAsset} from 'utils/load';
import {trackEvent} from 'utils/analytics';

// Selectors
import {getNextCities} from 'selectors/cities';
import {isAssetLoaded} from 'containers/homepage/selectors';

// Actions
import {setCurrentCity} from 'actions/cities';
import {zoomOutAll} from 'containers/mini-map/actions';
import {loadedIntroHomepage} from 'containers/homepage/actions';
import {blockSidebar, unBlockSidebar} from 'containers/sidebar/actions';

// Lib
import Hammer from 'hammerjs';
import Detectizr from 'detectizr';

class Homepage extends AbstractPageComponent {
    constructor(options) {
        super(options);

        this.template = Tpl;

        this.selector = '#app-index';

        this.currentHIP = null;
        this.oldHIP = null;

        this.mc = null;
        this.scrollPrevent = null;

        this.watchers = {
            'cities.current': ::this._currentCity,
            'loader.isShown': ::this._loaderIsDisplayed
        };

        this.events = {
           'click .down-arrow-wrapper': ::this._clickDownArrow
        };

        this.states = {
            isAnimating: false
        };
    }

    onDOMInit() {
        // Scroll
        this.scrollPrevent = new ScrollPrevent();

        // Swipe
        this.mc = new Hammer.Manager(this.el);

        // create a recognizer
        const Swipe = new Hammer.Swipe({
            threshold: 5
        });

        // add the recognizer
        this.mc.add(Swipe);

        // Block;
        this.dispatch(blockSidebar());

        // Load all assets if not mobile
        if (Detectizr.device.type !== 'mobile') {
            this._loadAllAssets();
        } else {
            this._initFirstTimeHP();
        }
    }

    _initFirstTimeHP() {
        this._initHIP().then((currentHIP) => {
            this.$el.append(currentHIP.getComponent().el);
            this.currentHIP = currentHIP;
            console.log('currentHIP init!');
            super.onDOMInit();
            currentHIP.getComponent().resize();
        });
    }

    _loadAllAssets() {
        const list = this.getState().get('homepage').get('intro_list');

        let allLoaded = true;

        list.entrySeq().forEach(([key, value]) => {
            if (!value) allLoaded = false;
        });

        if (allLoaded) {
            this._initFirstTimeHP();
        } else {
            const aPromises = [];

            // get all the promises of loads
            list.entrySeq().forEach(([key, value]) => {
                let d = this.data[key];

                if (!d) {
                    // it's a city
                    this.data.cities.forEach((obj) => {
                        if (obj.id === key) d = obj;
                    });
                }

                // COPY FOR LOADING PUPOSE
                // const data = JSON.parse(JSON.stringify(d));
                // console.log('d', d, 'key', key, this.data);
                d.asset = getAssetByDevice(d.bg);
                // console.log('d.asset', d.asset);
                // don't load video here
                aPromises.push(loadAsset(d.asset));
            });

            // all loaded!
            Promise.all(aPromises).then(() => {
                console.log('>> assets loaded!');
                // update the list
                list.entrySeq().forEach(([key, value]) => {
                    this.dispatch(loadedIntroHomepage(key));
                });

                this._initFirstTimeHP();
            });
        }
    }

    // Override
    setupDOM() {}
    initTL() {}

    bindEvents() {
        this.handlers.onScroll = ::this._onScroll;
        this.handlers.swipeUp = ::this._swipeUp;
        this.handlers.swipeDown = ::this._swipeDown;
        this.handlers.keydown = ::this._onKeyDown;

        this.scrollPrevent.watch(this.el, this.handlers.onScroll);
        this.mc.on('swipeup', this.handlers.swipeUp);
        this.mc.on('swipedown', this.handlers.swipeDown);
        document.addEventListener('keydown', this.handlers.keydown, false);

        super.bindEvents();
    }

    unbindEvents() {
        document.removeEventListener('keydown', this.handlers.keydown, false);
        super.unbindEvents();
    }

    showComponent() {
        this.dispatch(zoomOutAll());
        // console.log('this.currentHIP', this.currentHIP, this);
        this.currentHIP.show().then(() => {
            this.onShown();
        });
    }

    onShown() {
        // unblock;
        this.dispatch(unBlockSidebar());

        super.onShown();
    }

    hideComponent() {
        this.currentHIP.hide().then(() => {
            this.onHidden();
        });
    }

    _onKeyDown(e) {
        if (!this.states.isShown || this.states.isAnimating) return;

        let nextCity = null;
        let canDispatch = false;

        switch (e.keyCode) {
            // up
            case 38 :
                canDispatch = true;
                nextCity = getNextCities(false, true); break;
            // down
            case 40 :
                canDispatch = true;
                nextCity = getNextCities(true, true); break;
            default: break;
        }

        if (canDispatch) {
            trackEvent({category: 'nav', action: 'keyboard', label: `next ${nextCity}`});
            this.dispatch(setCurrentCity(nextCity));
        }
    }

    _clickDownArrow() {
        if (!this.states.isShown || this.states.isAnimating) return;

        const nextCity = getNextCities(true, true);

        // set the current city then
        trackEvent({category: 'nav', action: 'click', label: `next ${nextCity}`});
        this.dispatch(setCurrentCity(nextCity));
    }

    _swipeUp(e) {
        if (!this.states.isShown || this.states.isAnimating) return;

        const nextCity = getNextCities(true, true);

        // set the current city then
        trackEvent({category: 'nav', action: 'swipe', label: `next ${nextCity}`});
        this.dispatch(setCurrentCity(nextCity));
    }

    _swipeDown(e) {
        if (!this.states.isShown || this.states.isAnimating) return;

        const nextCity = getNextCities(false, true);

        // set the current city then
        trackEvent({category: 'nav', action: 'swipe', label: `next ${nextCity}`});
        this.dispatch(setCurrentCity(nextCity));
    }

    _onScroll(e) {
        if (!this.states.isShown || this.states.isAnimating) return;

        const nextCity = getNextCities(e.direction === this.scrollPrevent.DOWN, true);

        // set the current city then
        trackEvent({category: 'nav', action: 'scroll', label: `next ${nextCity}`});
        this.dispatch(setCurrentCity(nextCity));
    }

    _getCity(id) {
        let city = null;
        this.data.cities.forEach((c) => {
            if (c.id === id) city = c;
        });
        return city;
    }

    _initHIP() {
        const currentCity = this.getState().get('cities').get('current');
        const dataHIP = currentCity ? this._getCity(currentCity) : this.data.default_landing;

        return new Promise((resolve, reject) => {
            // If same city, no need.
            // Shouldn't happen, just in case
            if (this.currentHIP && this.currentHIP.data.id === dataHIP) {
                resolve();
                return;
            }

            const direction = this.currentHIP ? this._getDirection(this.currentHIP.data, dataHIP) : null;
            dataHIP.direction = direction;
            // console.log('direction', direction);

            const currentHIP = new HomepageIntroPageContainer({data: dataHIP});
            currentHIP.wasLoadedOnce = isAssetLoaded(dataHIP.id);

            currentHIP.init().then(() => {
                resolve(currentHIP);
            });
        });
    }

    _getDirection(dataOne, dataTwo) {
        let idxOne = -1;
        let idxTwo = -1;

        const list = this.getState().get('cities').get('list');

        list.forEach((id, i) => {
            if (id === dataOne.id) idxOne = i;
            if (id === dataTwo.id) idxTwo = i;
        });

        // this.data.cities.forEach((c, i) => {
        // });

        // exception
        if (idxOne === this.data.cities.length - 1 && idxTwo === 0) idxTwo = idxOne + 1;
        if (idxOne === this.data.cities.length - 1 && idxTwo === -1) idxTwo = idxOne + 1;
        if (idxOne === 0 && idxTwo === this.data.cities.length - 1) idxTwo = idxOne - 1;
        if (idxOne === -1 && idxTwo === this.data.cities.length - 1) idxTwo = idxOne - 1;

        return idxOne < idxTwo ? 'NEXT' : 'PREV';
    }

    _showHIP() {
        this.currentHIP.show().then(() => {
            if (this.oldHIP) this.oldHIP.dispose();
            this.oldHIP = null;
            this.setState({isAnimating: false});

            // unblock;
            this.dispatch(unBlockSidebar());
        });
    }

    _currentCity(city) {
        // don't do anything if it's not the homepage anymore!
        const currentLocation = this.getState().get('app').get('location');
        if (currentLocation !== HOMEPAGE) return;

        this._goToCity();
    }

    _goToCity() {
        if (this.states.isAnimating) return;
        this.setState({isAnimating: true});

        // Block;
        this.dispatch(blockSidebar());

        this._initHIP().then((currentHIP) => {
            this.$el.append(currentHIP.getComponent().el);

            currentHIP.getComponent().resize();

            const direction = this._getDirection(this.currentHIP.data, currentHIP.data);

            this.oldHIP = this.currentHIP;
            this.oldHIP.getComponent().direction = direction;

            if (this.oldHIP && this.currentHIP.wasLoadedOnce) {
                this.oldHIP.hide();
            }
            this.currentHIP = currentHIP;

            // We are not waiting for a loader to hide
            if (this.currentHIP.wasLoadedOnce) this._showHIP();
        });
    }

    _loaderIsDisplayed(isShown) {
        if (isShown || !this.states.isShown || !this.currentHIP || this.currentHIP.getComponent().states.isShown) return;

        if (this.oldHIP && this.oldHIP.getComponent().states.isShown) {
            this.oldHIP.hide();
        }

        if (this.currentHIP && !this.currentHIP.getComponent().states.isShown) {
            this._showHIP();
        }
    }

    dispose() {
        // uind events
        this.mc.off('swipeup', this.handlers.swipeUp);
        this.mc.off('swipedown', this.handlers.swipeDown);
        this.mc.destroy();
        this.mc = null;

        this.scrollPrevent.dispose();
        this.scrollPrevent = null;

        super.dispose();
    }

}

export default Homepage;
