import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './homepage-intro-page.twig';

import {TweenLite, TimelineLite, Cubic, Expo, Quint} from 'gsap';

import {HOMEPAGE} from 'constants/locations';


// Utils
import {fitAsset} from 'utils/misc';
import {trackEvent} from 'utils/analytics';

class HomepageIntroPage extends AbstractDOMComponent {

    constructor(options) {
        super(options);

        this.template = Tpl;

        this.events = {
            'click .find-your-parade': ::this._clickFindYourParade,
            'click .learn-more': ::this._clickLearnMore,
            'click .trailer': ::this._clickTrailer
        };

        this.direction = null;
    }

    initData() {
        // console.log('>>>> this.data', this.data);
        this.direction = this.data.direction ? this.data.direction : null;
    }

    initDOM() {
        this.$els.bg = this.$el.find('.bg-container');
        this.$els.textContainer = this.$el.find('.text-container');
        this.$els.date = this.$el.find('.date');
        this.$els.title = this.$el.find('.title');
        this.$els.author = this.$el.find('.author');
        this.$els.description = this.$el.find('.main-description');
        this.$els.ctas = this.$el.find('.ctas');
        this.$els.video = this.$el.find('video');
        this.$els.image = this.$el.find('.bg img');
        this.$els.downArrow = this.$el.find('.down-arrow-wrapper');

        // video
        if (this.$els.video[0] !== undefined) {
            this.$els.video[0].autoplay = true;
            this.$els.video[0].controls = false;
        }
    }

    setupDOM() {
        switch (this.direction) {
            case 'NEXT' :
                this.$el.addClass('z-index-below');
                TweenLite.set(this.$el, {yPercent: 30});
                if (this.$els.date[0] !== undefined) TweenLite.set(this.$els.date, {autoAlpha: 0, force3D: true, y: 30});
                TweenLite.set(this.$els.title, {autoAlpha: 0, force3D: true, y: 30});
                if (this.$els.author[0] !== undefined) TweenLite.set(this.$els.author, {autoAlpha: 0, force3D: true, y: 30});
                TweenLite.set(this.$els.description, {autoAlpha: 0, force3D: true, y: 30});
                TweenLite.set(this.$els.ctas, {autoAlpha: 0, force3D: true, y: 30});
                break;
            case 'PREV' :
                this.$el.addClass('z-index-below');
                TweenLite.set(this.$el, {yPercent: -30});
                if (this.$els.date[0] !== undefined) TweenLite.set(this.$els.date, {autoAlpha: 0, y: -30});
                TweenLite.set(this.$els.title, {autoAlpha: 0, y: -30});
                if (this.$els.author[0] !== undefined) TweenLite.set(this.$els.author, {autoAlpha: 0, y: -30});
                TweenLite.set(this.$els.description, {autoAlpha: 0, y: -30});
                TweenLite.set(this.$els.ctas, {autoAlpha: 0, y: -30});
                break;
            default:
                TweenLite.set(this.$els.bg, {autoAlpha: 0, scaleX: 1.2, scaleY: 1.2});
                if (this.$els.date[0] !== undefined) TweenLite.set(this.$els.date, {autoAlpha: 0, force3D: true, y: 100});
                TweenLite.set(this.$els.title, {autoAlpha: 0, force3D: true, y: 100});
                if (this.$els.author[0] !== undefined) TweenLite.set(this.$els.author, {autoAlpha: 0, force3D: true, y: 100});
                TweenLite.set(this.$els.description, {autoAlpha: 0, force3D: true, y: 100});
                TweenLite.set(this.$els.ctas, {autoAlpha: 0, force3D: true, y: 100});
                TweenLite.set(this.$els.downArrow, {autoAlpha: 0, force3D: true, y: 30});

        }

        // first time
        const appLoaded = this.getState().get('app').get('appLoaded');
        if (!appLoaded) {
            TweenLite.set(this.$els.bg, {autoAlpha: 1, scaleX: 1, scaleY: 1});
        }
    }

    onResize(browser) {
        if (this.$els.video[0] !== undefined) {
            const conf = {
                width: 1920,
                height: 1080,
                containerWidth: browser.width,
                containerHeight: browser.height
            };
            const size = fitAsset(conf);

            this.$els.video.css({
                width: size.w,
                height: size.h,
                top: size.top,
                left: size.left
            });
            // console.log('size', size, 'conf', conf);
        }

        if (this.$els.image[0] !== undefined) {
            const conf = {
                width: this.$els.image[0].dataset.width,
                height: this.$els.image[0].dataset.height,
                containerWidth: browser.width,
                containerHeight: browser.height
            };
            const size = fitAsset(conf);
            this.$els.image.css({
                width: size.w,
                height: size.h,
                top: size.top,
                left: size.left
            });
            // console.log('image size', size, 'image conf', conf);
        }
    }

    // setDirection(direction) {
    //     this.direction = direction;
    // }

    initTL() {
        const appLoaded = this.getState().get('app').get('appLoaded');

        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
        let delayFirst = 0.5;
        if (appLoaded) {
            delayFirst = '-=0.65';
            this.TL.show.to(this.$els.bg, 0.3, {autoAlpha: 1, ease: Cubic.easeOut}, 0);
            this.TL.show.to(this.$els.bg, 0.9, {scaleX: 1, scaleY: 1, ease: Expo.easeOut}, 0);
        }
        if (this.$els.date[0] !== undefined) this.TL.show.to(this.$els.date, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut});
        this.TL.show.to(this.$els.title, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, delayFirst);
        if (this.$els.author[0] !== undefined) this.TL.show.to(this.$els.author, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        this.TL.show.to(this.$els.description, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        this.TL.show.to(this.$els.ctas, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        this.TL.show.to(this.$els.downArrow, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.15');

        this.TL['show-NEXT'] = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL['show-NEXT'].to(this.$el, 0.8, {yPercent: 0, ease: Quint.easeInOut});
        if (this.$els.date[0] !== undefined) this.TL['show-NEXT'].to(this.$els.date, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.35');
        this.TL['show-NEXT'].to(this.$els.title, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        if (this.$els.author[0] !== undefined) this.TL['show-NEXT'].to(this.$els.author, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        this.TL['show-NEXT'].to(this.$els.description, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        this.TL['show-NEXT'].to(this.$els.ctas, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        this.TL['show-NEXT'].to(this.$els.downArrow, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.7');

        this.TL['show-PREV'] = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL['show-PREV'].to(this.$el, 0.8, {yPercent: 0, ease: Quint.easeInOut});
        this.TL['show-PREV'].to(this.$els.ctas, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.35');
        this.TL['show-PREV'].to(this.$els.downArrow, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        this.TL['show-PREV'].to(this.$els.description, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        if (this.$els.author[0] !== undefined) this.TL['show-PREV'].to(this.$els.author, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        this.TL['show-PREV'].to(this.$els.title, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');
        if (this.$els.date[0] !== undefined) this.TL['show-PREV'].to(this.$els.date, 0.7, {y: 0, force3D: true, autoAlpha: 1, ease: Expo.easeOut}, '-=0.65');

        // this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        // this.TL.hide.to(this.$el, 0.3, {autoAlpha: 0, ease: Cubic.easeOut});

        this.TL['hide-NEXT'] = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL['hide-NEXT'].to(this.$el, 0.8, {yPercent: -100, ease: Quint.easeInOut}, 0);
        this.TL['hide-NEXT'].to(this.$els.bg, 0.8, {yPercent: 90, ease: Quint.easeInOut}, 0);
        this.TL['hide-NEXT'].to(this.$els.textContainer, 0.8, {yPercent: 100, ease: Quint.easeInOut}, 0);

        this.TL['hide-PREV'] = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL['hide-PREV'].to(this.$el, 0.8, {yPercent: 100, ease: Quint.easeInOut}, 0);
        this.TL['hide-PREV'].to(this.$els.bg, 0.8, {yPercent: -90, ease: Quint.easeInOut}, 0);
        this.TL['hide-PREV'].to(this.$els.textContainer, 0.8, {yPercent: -100, ease: Quint.easeInOut}, 0);

        // this.TL['hide-NEXT'].duration = 4;

        // this.TL['hide-NEXT'] = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        // this.TL['hide-NEXT'].to(this.$el, 0.8, {yPercent: -100, ease: Quint.easeInOut}, 0);
        // this.TL['hide-NEXT'].to(this.$els.bg, 0.8, {yPercent: 90, ease: Quint.easeInOut}, 0);
        // this.TL['hide-NEXT'].to(this.$els.textContainer, 0.8, {yPercent: 100, ease: Quint.easeInOut}, 0);

        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$el, 1.2, {yPercent: -100, ease: Expo.easeInOut}, 0);
    }

    showComponent() {
        // if (this.direction === 'NEXT') this.$el.addClass('z-index-below');
        // console.log('shooow', this.direction);
        // this.resize();

        // play video
        if (this.$els.video[0] !== undefined) this.$els.video[0].play();

        setTimeout(() => {
            this.direction && this.TL['show-' + this.direction] ? this.TL['show-' + this.direction].play(0) : this.TL.show.play(0);
        }, 0);
    }

    onShown() {
        this.$el.removeClass('z-index-top');
        this.$el.removeClass('z-index-below');
        this.$el.css('zIndex', 3); // because of GSAP zIndex behavior
        this.$els.downArrow.css('zIndex', 3); // because of GSAP zIndex behavior
        super.onShown();
    }

    onHidden() {
        this.$el.removeClass('z-index-top');
        this.$el.removeClass('z-index-below');
        super.onHidden();
    }

    hideComponent() {
        // if (this.direction === 'NEXT') this.$el.addClass('z-index-top');
        const location = this.getState().get('app').get('location');
        // if (this.$els.video[0] !== undefined) this.$els.video[0].pause();

        if (location !== HOMEPAGE) {
            setTimeout(() => {
                // this.direction && this.TL['hide-' + this.direction] ? this.TL['hide-' + this.direction].play(0) : this.TL.hide.play(0);
                this.TL.hide.play(0);
            }, 0);
        } else {
            // this.$el.removeClass('current');
            // console.log('hide: this.direction', this.direction, this);
            setTimeout(() => {
                this.direction && this.TL['hide-' + this.direction] ? this.TL['hide-' + this.direction].play(0) : this.TL.hide.play(0);
            }, 0);
            // this.onHidden();
        }
    }

    _clickFindYourParade() {
        trackEvent({category: 'body', action: 'click', label: 'search open'});
        this.actions.findYourParade();
    }

    _clickTrailer() {
        trackEvent({category: 'body', action: 'click', label: `watch ${this.data.id} stories`});
        this.actions.showTrailer();
    }

    _clickLearnMore() {
        trackEvent({category: 'body', action: 'click', label: `learn more about ${this.data.id}`});
    }

}

export default HomepageIntroPage;
