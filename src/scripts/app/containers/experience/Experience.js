// Components/Containers
import AbstractContainer from 'abstract/container';
import ExperienceComponent from 'components/experience/Experience';
// import HotspotVideo from 'containers/hotspot-video/HotspotVideo';
// import HotspotPhoto from 'containers/hotspot-photo/HotspotPhoto';

// Constants
// import {VIDEO_HOTSPOT, PHOTO_HOTSPOT} from './constants';
import {HOMEPAGE, PARADE_EXPERIENCE_HOTSPOT, PARADE_DETAIL} from 'constants/locations';
import {BAR_LOADER} from 'containers/loader/constants';

// Selectors
import {getCurrentHotspotData, getNextHotspotData} from './selectors';
import {getRoute} from 'containers/app/selectors';
import {getNextCities} from 'selectors/cities';

// Actions
import {hideExperience, setHotspotId, setHotspotOpenIt, setNextHotspotInit, setIsShownHotspot, setBackButtonUrl} from './actions';
import {showHotspots, hideHotspots} from 'containers/mini-map/actions';
import {showHeader, hideHeader} from 'containers/header/actions';
import {showFooter, hideFooter} from 'containers/footer/actions';
// import {disableScroll} from 'containers/layout/actions';

import {trackEvent} from 'utils/analytics';

import Detectizr from 'detectizr';

class ExperienceContainer extends AbstractContainer {

    component = ExperienceComponent;

    constructor(options) {
        super(options);

        this.hotspotData = null;
        this.type = null;
        this.videoPlayer = null;

        this.watchers = {
            'experience.hotspot_id': ::this.toggleDisplayExperience,
            'experience.isShown': ::this._toggleShow,
            'modal.isShown': ::this._onModalOpen
            // 'cities.current': ::this._handleCityChange,
            // 'app.prms.id_hotspot': ::this._onIdRouteChanged
        };
    }

    initActions() {
        this.options.actions.close = ::this._close;
        this.options.actions.ended = ::this._ended;
        this.options.actions.nextHotspot = ::this._nextHotspot;
        // this.options.actions.disableScroll = ::this._disableScroll;
    }

    _close() {
        this.dispatch(hideExperience());
    }

    _getCurrentPlayerData() {
        const hotspotData = getCurrentHotspotData();

        let src = hotspotData.video_desktop;

        if (Detectizr.device.type === 'tablet' && hotspotData.video_tablet) src = hotspotData.video_tablet;
        if (Detectizr.device.type === 'mobile' && hotspotData.video_mobile) src = hotspotData.video_mobile;

        const city = this.getState().get('cities').get('current');
        const parent = getRoute(PARADE_DETAIL, {id: city});

        return {
            title: hotspotData.title,
            src: src,
            parentUrl: parent.url,
            parentLabel: parent.info.label
        };
    }

    toggleDisplayExperience(hotspotId, prevHotspotId) {
        if (hotspotId !== null && hotspotId !== prevHotspotId) {
            // Show loader
            this.showLoader(BAR_LOADER);

            const currentHotspotData = getCurrentHotspotData();
            const parentUrl = getRoute(PARADE_DETAIL, {id: currentHotspotData.city_id}).url;
            // console.log('parentUrl', parentUrl);

            this.dispatch(setBackButtonUrl(parentUrl));
            this.dispatch(setHotspotOpenIt(false));

            this.setState({isAnimating: true});

            const playerData = this._getCurrentPlayerData();

            // let's do it here
            this.dispatch(hideFooter());

            this.getComponent().setSRC(playerData).then(() => {
                this.setState({isAnimating: false});

                this.dispatch(setNextHotspotInit(true));
                this.dispatch(showHotspots());
                this.hideLoader();
            });
        }
    }

    _toggleShow(isShown) {
        isShown ? this.show() : this.hide();
    }

    hide() {
        // const lessThan = this.getState().get('browser').lessThan;
        // if (lessThan.tabletH === false) this.dispatch(hideHeader());

        this.hotspotData = null;

        // hide!
        this.dispatch(setHotspotId(null));

        super.hide().then(() => {
            this.dispatch(hideHotspots());
            this.dispatch(showFooter());
            this.getComponent().disposePlayer();
        });
    }

    show() {
        this.getComponent().playPlayer();

        this.dispatch(setNextHotspotInit(false));
        this.dispatch(showHeader());

        super.show();
    }

    _onModalOpen(isShown) {
        if (isShown) this.getComponent().pausePlayer();
    }

    _nextHotspot() {
        if (this.states.isAnimating) return;
        this._ended(true);
    }

    _ended(fromNextHotspot = false) {
        const nextHotspotData = getNextHotspotData();
        const nextCity = getNextCities(true, true);

        if (fromNextHotspot && nextHotspotData) {
            trackEvent({category: 'maps', action: 'click', label: `next-hotspot ${nextHotspotData.title}`});
        }

        if (nextHotspotData) this.getComponent().navigate(getRoute(PARADE_EXPERIENCE_HOTSPOT, {id_hotspot: nextHotspotData.id}).url);
        else if (nextCity) this.getComponent().navigate(getRoute(PARADE_DETAIL, {id: nextCity}).url);
        else this.getComponent().navigate(getRoute(HOMEPAGE).url);
    }
}

export default ExperienceContainer;
