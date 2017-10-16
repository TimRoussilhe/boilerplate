import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './hotspot-photo-item.twig';

import {TweenLite, TimelineLite, Cubic, Expo, Quint} from 'gsap';

class HomepageIntroPage extends AbstractDOMComponent {

    constructor(options) {
        super(options);

        this.template = Tpl;

        this.direction = null;
    }

    initData() {
        this.direction = this.data.direction ? this.data.direction : null;
    }

    initDOM() {
        this.$els.bg = this.$el.find('.bg-container');
        this.$els.textContainer = this.$el.find('.text-container');
        this.$els.title = this.$el.find('.title');
    }

    setupDOM() {
        switch (this.direction) {
            case 'NEXT' :
                this.$el.addClass('z-index-below');
                TweenLite.set(this.$el, {xPercent: 30});
                TweenLite.set(this.$els.title, {autoAlpha: 0, force3D: true, x: 30});
                break;
            case 'PREV' :
                this.$el.addClass('z-index-below');
                TweenLite.set(this.$el, {xPercent: -30});
                TweenLite.set(this.$els.title, {autoAlpha: 0, x: -30});
                break;
            default:
                TweenLite.set(this.$els.bg, {autoAlpha: 0, scaleX: 1.2, scaleY: 1.2});
                TweenLite.set(this.$els.title, {autoAlpha: 0, force3D: true, x: 50});
        }
    }

    initTL() {
        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL.show.to(this.$els.bg, 0.5, {autoAlpha: 1, scaleX: 1, scaleY: 1, ease: Cubic.easeOut});
        this.TL.show.to(this.$els.title, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');

        this.TL['show-NEXT'] = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL['show-NEXT'].to(this.$el, 0.8, {xPercent: 0, ease: Quint.easeInOut});
        this.TL['show-NEXT'].to(this.$els.title, 0.7, {x: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');

        this.TL['show-PREV'] = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL['show-PREV'].to(this.$el, 0.8, {xPercent: 0, ease: Quint.easeInOut});
        this.TL['show-PREV'].to(this.$els.title, 0.7, {x: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');

        // hide
        this.TL['hide-NEXT'] = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL['hide-NEXT'].to(this.$el, 0.8, {xPercent: -100, ease: Quint.easeInOut}, 0);
        this.TL['hide-NEXT'].to(this.$els.bg, 0.8, {xPercent: 90, ease: Quint.easeInOut}, 0);
        this.TL['hide-NEXT'].to(this.$els.textContainer, 0.8, {yPercent: 100, ease: Quint.easeInOut}, 0);

        this.TL['hide-PREV'] = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL['hide-PREV'].to(this.$el, 0.8, {xPercent: 100, ease: Quint.easeInOut}, 0);
        this.TL['hide-PREV'].to(this.$els.bg, 0.8, {xPercent: -90, ease: Quint.easeInOut}, 0);
        this.TL['hide-PREV'].to(this.$els.textContainer, 0.8, {xPercent: -100, ease: Quint.easeInOut}, 0);

        this.TL['hide-NEXT'] = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL['hide-NEXT'].to(this.$el, 0.8, {xPercent: -100, ease: Quint.easeInOut}, 0);
        this.TL['hide-NEXT'].to(this.$els.bg, 0.8, {xPercent: 90, ease: Quint.easeInOut}, 0);
        this.TL['hide-NEXT'].to(this.$els.textContainer, 0.8, {yPercent: 100, ease: Quint.easeInOut}, 0);

        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$el, 1.2, {yPercent: -100, ease: Quint.easeInOut}, 0);
    }

    showComponent() {
        setTimeout(() => {
            this.direction && this.TL['show-' + this.direction] ? this.TL['show-' + this.direction].play(0) : this.TL.show.play(0);
        }, 0);
    }

    onShown() {
        this.$el.css('zIndex', 3); // because of GSAP zIndex behavior
        this.$el.removeClass('z-index-top');
        this.$el.removeClass('z-index-below');
        super.onShown();
    }

    onHidden() {
        this.$el.removeClass('z-index-top');
        this.$el.removeClass('z-index-below');
        super.onHidden();
    }

    hideComponent() {
        setTimeout(() => {
            this.direction && this.TL['hide-' + this.direction] ? this.TL['hide-' + this.direction].play(0) : this.TL.hide.play(0);
        }, 0);
    }
}

export default HomepageIntroPage;
