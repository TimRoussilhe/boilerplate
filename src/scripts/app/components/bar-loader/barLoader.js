import AbstractLoaderComponent from 'abstract/component/DOM/loader';
import Tpl from './barloader.twig';

import {TweenLite, TimelineLite, Cubic, Expo} from 'gsap';

import {shownLoader} from 'containers/loader/actions';

class BarLoader extends AbstractLoaderComponent {
    constructor(options) {
        super(options);

        this.template = Tpl;

        this.watchers = {
            'loader.pct': ::this._onPctChanged
        };
    }

    initDOM() {
        const isModalOpen = this.getState().get('modal').get('isShown') || this.getState().get('experience').get('hotspot_idx');
        if (isModalOpen) this.$el.addClass('modal-open');

        const isZoomedCity = this.getState().get('minimap').get('zoomedCity');
        if (!isZoomedCity) this.$el.addClass('sidebar-homepage');

        this.$els.bar = this.$el.find('.bar');
        this.$els.barContainer = this.$el.find('.bar-container');
    }

    setupDOM() {
        TweenLite.set(this.$els.bar, {xPercent: -100});
        TweenLite.set(this.$els.barContainer, {scaleY: 0});
    }

    initTL() {
        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL.show.to(this.$els.barContainer, 0.3, {scaleY: 1, ease: Cubic.easeOut});
        this.TL.show.call(() => {
            this._onPctChanged(60);
        });

        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$els.bar, 0.3, {xPercent: 0, ease: Expo.easeOut});
        this.TL.hide.to(this.$els.barContainer, 0.3, {scaleY: 0, ease: Cubic.easeOut}, '-=0.1');
    }

    showComponent() {
        this.dispatch(shownLoader());
        setTimeout(() => {
          this.TL.show.play(0);
        }, 0);
    }

    _onPctChanged(pct) {
        TweenLite.to(this.$els.bar, 0.5, {xPercent: -100 + pct, ease: Cubic.easeOut, onComplete: ::this._onPctComplete});
    }

    _onPctComplete() {
        if (!this.states.isShown) this.onShown();
    }
}

export default BarLoader;
