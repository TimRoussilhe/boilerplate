import AbstractPageComponent from 'abstract/component/DOM/page';
import Tpl from './parade-detail.twig';
import ShareUtil from 'utils/share.js';
import {zoomInCity} from 'containers/mini-map/actions';

import {TweenLite, TimelineLite, Expo, Cubic, Power2} from 'gsap';

// import {PARADE_DETAIL} from 'constants/locations';
// import GlobalShare from 'components/global-share/GlobalShare';

import {PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';
import {getRoute} from 'containers/app/selectors';

import {trackEvent} from 'utils/analytics';

import {setHotspotId} from 'containers/experience/actions';

class ParadeDetail extends AbstractPageComponent {

    template = Tpl;

    // Should be useless because we don't pre-render
    // but if we do at some point... It's here.
    // SET SELECTOR ONLY ON !APPLOADED
    // selector = '.app-parade-detail';

    constructor(props) {
        super(props);

        this.watchers = {
            'browser': ::this.onBrowserMediatypeUpdate,
            'minimap.hotspotsShown': ::this.onBrowserMediatypeUpdate
        };

        this.events = {
            'click .btn-show-up': ::this._IShowUp,
            'click .calendar-icon': ::this._calendarClick,
            'click .hotspots-list button': ::this._clickHotspot,
            'click .btn-trailer': ::this._showTrailer,
            'click .about': ::this._about,
            'click .home': ::this._home,
            'click .parade-detail-link': ::this._paradeDetailExternalLinkClick,
            'click .parade-detail-wrapper .twitter button': ::this._sharePopup,
            'click .parade-detail-wrapper .facebook button': ::this._sharePopup,
            'click .about-footer': ::this._aboutFooterClick,
            'click .privacy': ::this._privacyFooterClick,
            'click .terms': ::this._termsFooterClick
        };
    }

    initDOM() {
        // this.$el.css({zIndex: 1});
        this.$els.wrapper = this.$el.find('.parade-detail-container');
        // this.$els.footer = this.$el.find('.parade-detail-footer');
        // this.$els.twitterBtn = this.$el.find('.social-item.twitter button');
        // this.$els.facebookBtn = this.$el.find('.social-item.facebook button');
    }

    setupDOM() {
        const inExperience = this.getState().get('experience').get('hotspot_id');

        if (!inExperience) {
            TweenLite.set(this.$els.wrapper, {xPercent: -100});
        }
        // TweenLite.set(this.$els.footer, {xPercent: -100});
    }

    initTL() {
        const gmapsIsInit = this.getState().get('gmaps').get('isInit');
        const appLoaded = this.getState().get('app').get('appLoaded');

        const delay = !gmapsIsInit && appLoaded ? 0.7 : 0.4;

        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL.show.to(this.$els.wrapper, 0.9, {xPercent: 0, force3D: true, ease: Expo.easeInOut, delay: delay});
        // this.TL.show.to(this.$els.footer, 0.9, {xPercent: 0, ease: Expo.easeInOut}, 0);

        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$els.wrapper, 0.7, {xPercent: -100, ease: Expo.easeOut});
        // this.TL.hide.to(this.$els.footer, 0.7, {xPercent: -100, ease: Expo.easeOut}, 0);
    }

    showComponent() {
        const inExperience = this.getState().get('experience').get('hotspot_id');

        this.actions.showGmaps();

        // zoom in the minimap
        const city = this.getState().get('app').get('prms').get('id');
        this.dispatch(zoomInCity(city));

        // No need t oshow anything
        if (inExperience) {
            super.onShown();
            return;
        }
        // set initial state
        this.onBrowserMediatypeUpdate();

        window.scrollTo(0, 0);

        super.showComponent();
    }

    onShown() {
        // Open the experience if coming from homepage
        const openIt = this.getState().get('experience').get('openIt');
        super.onShown();

        if (openIt) {
            setTimeout(() => {
                this.actions.openFirstHotspot();
            }, 500);
        }
    }

    onHidden() {
        window.scrollTo(0, 0);
        super.onHidden();
    }

    hide() {
        // console.log('parade detail hide');
        this.actions.hideGmaps();
        // this.actions.updateFooterTheme('white');

        // const inExperience = this.getState().get('experience').get('hotspot_id');

        // // No need t oshow anything
        // if (inExperience) {
        //     super.onHidden();
        //     return;
        // }

        return super.hide();
    }

    onBrowserMediatypeUpdate() {
        const lessThan = this.getState().get('browser').lessThan;
        // const inExperience = this.getState().get('experience').get('hotspot_id');

        // console.log('++++onBrowserMediatypeUpdate');

        // if (inExperience) return;

        if (lessThan.tabletH === true) {
            this.actions.updateScroll(true);
            this.actions.showHeader();
            // this.actions.updateFooterTheme('white');
        } else {
            this.actions.updateScroll(false);
            this.actions.hideHeader();
            this.actions.hideFooter();
            // this.actions.updateFooterTheme('black');
        }
    }

    _home() {
        trackEvent({category: 'header', action: 'click', label: 'home click'});
    }

    _about() {
        trackEvent({category: 'header', action: 'click', label: 'why showup click'});
        this.actions.aboutModal();
    }

    _showTrailer() {
        this.actions.showTrailer();
    }

    _IShowUp() {
        trackEvent({category: 'body', action: 'click', label: `sharecard open ${this.data.id}`});
        this.actions.gifModal();
    }

    _clickHotspot(e) {
        const id = e.currentTarget.getAttribute('hotspot-id');
        this.navigate(getRoute(PARADE_EXPERIENCE_HOTSPOT, {id_hotspot: id}).url);
        // this.dispatch(setHotspotId(id));
    }

    _sharePopup(e) {
        ShareUtil.openPopup(e.currentTarget);
        e.preventDefault();
    }

    _privacyFooterClick() {
        trackEvent({category: 'footer', action: 'click', label: 'privacy policy'});
    }

    _aboutFooterClick() {
        trackEvent({category: 'footer', action: 'click', label: 'about google'});
    }

    _termsFooterClick() {
        trackEvent({category: 'footer', action: 'click', label: 'terms'});
    }

    _paradeDetailExternalLinkClick() {
        trackEvent({category: 'body', action: 'click', label: `parade-external-link ${this.data.id}`});
    }
    _calendarClick() {
        trackEvent({category: 'body', action: 'click', label: `google-calendar-link ${this.data.id}`});
    }

    dispose() {
        // console.log('parade detail dispose');
        // this.actions.showHeader();
        // this.actions.showFooter();
        // this.actions.updateScroll(false);
        super.dispose();
    }

}

export default ParadeDetail;
