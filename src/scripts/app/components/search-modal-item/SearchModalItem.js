import AbstractModalComponent from 'abstract/component/DOM/modal';
import Tpl from './search-modal-item.twig';

import {TweenLite, TimelineLite, Expo, Cubic} from 'gsap';

import {setOpenNextTimeYTModal} from 'containers/yt-modal/actions';

import {trackEvent} from 'utils/analytics';
import {hideHamburgerMenu} from 'containers/header/actions';

class SearchModalItem extends AbstractModalComponent {

    constructor(options) {
        super(options);

        this.template = Tpl;

        this.events = {
            'click .item-parade': ::this._clickItemParade,
            'click .item-ngo': ::this._clickItemNGO,
            'click .item-experience': ::this._clickItemExperience
        };
    }

    setupDOM() {
        if (this.data.has_experience) console.log('dataaaa', this.data);
        TweenLite.set(this.$el, {autoAlpha: 0, xPercent: -15});
    }

    initTL() {
        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL.show.to(this.$el, 0.9, {autoAlpha: 1, xPercent: 0, ease: Expo.easeInOut, delay: (this.data.index) * 0.1});

        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$el, 0.3, {autoAlpha: 0, ease: Cubic.easeOut});
    }

    //  _clickTrailer() {
    //     this.dispatch(setOpenNextTimeYTModal(true));
    // }

    // to the parent
    navigate(url) {
        if (!this.data.is_ngo) {
            this.dispatch(hideHamburgerMenu());
            this.actions.navigate(url);
        }
    }

    showComponent() {
        setTimeout(() => {
          this.TL.show.play(0);
        }, 0);
    }

    hideComponent() {
        setTimeout(() => {
          this.TL.hide.play(0);
        }, 0);
    }

    _clickItemParade() {
        trackEvent({category: 'search', action: 'click', label: `parade ${this.data.id}`});
    }

    _clickItemNGO() {
        trackEvent({category: 'search', action: 'click', label: `ngo ${this.data.title}`});
    }

    _clickItemExperience() {
        trackEvent({category: 'search', action: 'click', label: `experience ${this.data.id}`});
    }

}

export default SearchModalItem;
