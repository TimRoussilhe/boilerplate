import AbstractPageContainer from 'abstract/container/page';
import ParadeDetail from 'components/parade-detail/ParadeDetail';

// Actions
import {showHeader, hideHeader} from 'containers/header/actions';
import {updateScroll} from 'containers/layout/actions';
import {showFooter, hideFooter} from 'containers/footer/actions';
import {setCurrentCity} from 'actions/cities';
import {initGmaps, initPositionGmaps, showGmaps, hideGmaps, disposeGmaps} from 'containers/parade-detail-gmaps/actions';
import {showModal} from 'containers/modal/actions';
import {setCity} from 'containers/gif-modal/actions';
import {setDataYTModal} from 'containers/yt-modal/actions';
import {setHotspotId} from 'containers/experience/actions';

// Constants
import {PARADE_DETAIL, HOMEPAGE, PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';
import {GIF_MODAL, YT_MODAL, ABOUT_MODAL} from 'containers/modal/constants';

// Selectors
import {getRoute} from 'containers/app/selectors';
import {isFeatured, getNextCities} from 'selectors/cities';
import {getFirstHotspotData} from 'containers/experience/selectors';

// Utils
import {getDate} from 'utils/misc';
import {stringify} from 'utils/query-string';

class ParadeDetailContainer extends AbstractPageContainer {

    component = ParadeDetail;

    constructor(props) {
        super(props);

        this.watchers = {
            'gmaps.isInitPosition': ::this._isInitPosition
        };
    }

    init() {
        const currentCityId = this.getState().get('app').get('prms').get('id');
        const gmapsIsInit = this.getState().get('gmaps').get('isInit');
        // this.TYPE_LOADER = gmapsIsInit ? BAR_LOADER : PAGE_LOADER;
        this.dispatch(setCurrentCity(currentCityId));
        return super.init();
    }

    initData() {
        this.data.home = getRoute(HOMEPAGE);
        const currentCityId = this.getState().get('app').get('prms').get('id');

        // console.log('this.data', this.data);

        // date
        const date = new Date(parseInt(this.data.parade_start_date, 10));
        // console.log('date', date);
        // console.log('this.data.parade_start_date', this.data.parade_start_date);

        const locale = this.getState().get('app').get('lang');
        this.data.dateObject = getDate(locale, date);

        // console.log('this.data.dateObject', this.data.dateObject);
        // console.log('this.data.dateObject', date);
        // console.log('this.data.parade_start_date', this.data.parade_start_date);

        // has past?
        this.data.hasPast = parseInt(this.data.parade_start_date, 10) < Date.now();
        this.data.isFeatured = isFeatured(currentCityId);

        // Next city
        const nextCity = getNextCities();
        this.data.nextCity = getRoute(PARADE_DETAIL, {id: nextCity});

        // if no cordinates in maps
        if (!this.data.maps.coordinates || !this.data.maps.coordinates.length) {
            // Have to reverse :/
            this.data.maps.coordinates = [
                Number(this.data.coordinates[1]),
                Number(this.data.coordinates[0])
            ];
        }

        // calendar link
        this.data.calendar_link = this._getCalendarLink();

        // footer
        this.data.footer = this.getState().get('footer').get('data').toJS();

        const gifs = this.getState().get('modal').get('data').get('gifs').toJS();
        const currentCity = this.getState().get('app').get('prms').get('id');
        this.data.hasGif = gifs[currentCity] !== undefined;

        this.data.baseUrl = window.location.origin;

        // hostpost list
        // if (this.data.hotspots && this.data.hotspots.length) this.dispatch(setHotspotsList(this.data.hotspots));

        super.initData();

        // // test
        // const about = getRoute(ABOUT);
        // const paradeNYC = getRoute(PARADE_DETAIL, {id: 'new-york-city'});
    }

    _getCalendarLink() {
        const locale = this.getState().get('app').get('lang');

        const params = {};
        params.action = 'TEMPLATE';
        params.text = this.data.title;

        const startDate = this.data.time.start_time !== undefined ? new Date(parseInt(this.data.time.start_time, 10)) : new Date(parseInt(this.data.parade_start_date, 10));
        const startDateObject = getDate(locale, startDate);
        // console.log('startDateObject', this.data.time.start_time, startDateObject);
        params.dates = startDateObject.tz;

        if (this.data.time.end_time) {
            const endDate = new Date(parseInt(this.data.time.end_time, 10));
            const endDateObject = getDate(locale, endDate);
            params.dates += '/' + endDateObject.tz;
        } else {
            params.dates += '/' + startDateObject.tz;
        }

        // if (this.data.description) {
        //     params.details = this.data.calendar.description;
        // }

        if (this.data.location.start) {
            params.location = this.data.location.start + ', ' + this.data.city;
        }

        // stringify
        let paramsStr = stringify(params);
        paramsStr = paramsStr.replace(/%20/g, '+');
        paramsStr = paramsStr.replace(/%2C/g, ',');
        paramsStr = paramsStr.replace(/%2F/g, '/');
        paramsStr = paramsStr.replace(/%3A/g, ':');
        // paramsStr = paramsStr.replace(/%27/g, '+');
        // paramsStr = encodeURIComponent(paramsStr);

        // ref: https://calendar.google.com/calendar/render?action=TEMPLATE&text=Your+Event+Name&dates=20140127T224000Z/20140320T221500Z&details=For+details,+link+here:+http://www.example.com&location=Waldorf+Astoria,+301+Park+Ave+,+New+York,+NY+10022
        return 'https://calendar.google.com/calendar/render?' + paramsStr;
    }

    initActions() {
        // this.options.actions.hideLogo = ::this._hideLogo;
        // this.options.actions.showLogo = ::this._showLogo;
        this.options.actions.showHeader = ::this._showHeader;
        this.options.actions.hideHeader = ::this._hideHeader;
        this.options.actions.showFooter = ::this._showFooter;
        this.options.actions.hideFooter = ::this._hideFooter;
        this.options.actions.hideGmaps = ::this._hideGmaps;
        this.options.actions.showGmaps = ::this._showGmaps;
        this.options.actions.updateScroll = ::this._updateScroll;
        // this.options.actions.updateFooterTheme = ::this._updateFooterTheme;
        this.options.actions.gifModal = ::this._gifModal;
        this.options.actions.aboutModal = ::this._aboutModal;
        this.options.actions.showTrailer = ::this._showTrailer;
        this.options.actions.openFirstHotspot = ::this._openFirstHotspot;
    }

    onInit() {
        if (!this.getState().get('gmaps').get('isInit')) {
            // console.log('subscribe gmaps.isInit');
            this.subscribe({
                path: 'gmaps.isInit',
                cb: ::this._gmapsIsInit
            });
            this.dispatch(initGmaps());
            return;
        }

        // is Init already
        this._gmapsIsInit();
    }

    _gmapsIsInit() {
        // console.log('_gmapsIsInit');
        if (this.watchers['gmaps.isInit']) {
            this.unsubscribe('gmaps.isInit');
        }

        // Now, init position with new data
        const data = this.data.maps;

        if ((!this.data.hotspots || !this.data.hotspots.length) && this.data.isFeatured) data.overlay = this.data.coming_soon;
        if (this.data.hasPast && this.data.isFeatured) {
            data.hotspots = this.data.hotspots;
        }
        data.hasPast = this.data.hasPast;
        data.id = this.data.id;

        this.dispatch(initPositionGmaps(data));
    }

    _isInitPosition(isInitPosition) {
        // finally!
        if (isInitPosition) {
            // unsubsribe now so no conflict
            this.unsubscribe('gmaps.isInitPosition');

            // const inExperience = this.getState().get('experience').get('hotspot_id');

            // if (inExperience) {
            //     this._openFirstHotspot();
            // }

            super.onInit();
        }
    }

    _openFirstHotspot() {
        // set the first hotspot.
        // If no hotspot, escape the experience!
        const firstHotspot = getFirstHotspotData(this.data.id);
        if (firstHotspot) this.getComponent().navigate(getRoute(PARADE_EXPERIENCE_HOTSPOT, {id_hotspot: firstHotspot.id}).url);
        // else this.dispatch(setHotspotId(null));
    }

    _aboutModal() {
        this.dispatch(showModal(ABOUT_MODAL));
    }

    _showGmaps() {
        this.dispatch(showGmaps());
    }

    _hideGmaps() {
        this.dispatch(hideGmaps());
    }

    _gifModal() {
        const currentCityId = this.getState().get('cities').get('current');
        this.dispatch(setCity(currentCityId));
        this.dispatch(showModal(GIF_MODAL));
    }

    // _hideLogo() {
    //     this.dispatch(hideLogo());
    // }

    // _showLogo() {
    //     this.dispatch(showLogo());
    // }

    _hideHeader() {
        this.dispatch(hideHeader());
    }

    _showHeader() {
        this.dispatch(showHeader());
    }

    _hideFooter() {
        this.dispatch(hideFooter());
    }

    _showFooter() {
        this.dispatch(showFooter());
    }

    _updateScroll(scrollState) {
        this.dispatch(updateScroll(scrollState));
    }

    // _updateFooterTheme(color) {
    //     this.dispatch(updateUITheme(color));
    // }

    _showTrailer() {
        this.dispatch(setDataYTModal(this.data.trailer));
        this.dispatch(showModal(YT_MODAL));
    }

    dispose() {
        const location = this.getState().get('app').get('location');

        // hide the map and show the logo!
        if (location !== PARADE_DETAIL) {
            // this._showLogo();
            // reset hostpost list
            // this.dispatch(resetHotspots());

            // this._showHeader();
            // this._showFooter();
            this._updateScroll(false);
            this.dispatch(disposeGmaps());
        }

        super.dispose();
    }
}

export default ParadeDetailContainer;
