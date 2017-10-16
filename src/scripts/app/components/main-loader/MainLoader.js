import AbstractLoaderComponent from 'abstract/component/DOM/loader';
import Tpl from './mainLoader.twig';

import _ from 'underscore';
import $ from 'zepto';

import {TweenLite, TimelineLite, Expo, Cubic} from 'gsap';
import {shownLoader, hiddenLoader} from 'containers/loader/actions';

import Cookies from 'js-cookie';

import {HOMEPAGE} from 'constants/locations';

class MainLoader extends AbstractLoaderComponent {
    constructor(options) {
        super(options);

        this.template = Tpl;

        // this.colors = [RED, GREEN, BLUE, ORANGE];
        this.cptStatementTL = 0;
        this.nbStatementsShown = 0;
        this.MIN_STATEMENTS_SHOWN = Cookies.get('visited') ? 1 : 6; // => 'value' 6;

        this.$aLetterLineOne = [];
        this.$aLetterLineTwo = [];

        Cookies.set('visited', true);
    }

    // initData() {
    //     let cptColor = -1;
    //     this.data.listStatements = _.map(this.data.statements, (statement) => {
    //         cptColor++;
    //         if (cptColor > this.colors.length - 1) cptColor = -1;
    //         return {
    //             text: statement,
    //             bgColor: this.colors[cptColor]
    //         };
    //     });
    // }

    initDOM() {
        // this.$els.statements = this.$el.find('.statement');
        // this.$els.bgs = this.$el.find('.bg');
        this.$els.iShowUp = this.$el.find('.i-show-up');
        // this.$els.because = this.$el.find('.because');
        this.$els.bg = this.$el.find('.bg');

        this.$els.lineOneOne = this.$el.find('.line-one-one');
        this.$els.lineOneTwo = this.$el.find('.line-one-two');
        this.$els.lineTwoOne = this.$el.find('.line-two-one');
        this.$els.lineTwoTwo = this.$el.find('.line-two-two');

        this.$els.bar = this.$el.find('.bar');
        this.$els.barContainer = this.$el.find('.bar-container');

        this.$els.author = this.$el.find('.author');
    }

    setupDOM() {
        // TweenLite.set(this.$els.iShowUp.find(, {autoAlpha: 0});
        // TweenLite.set(this.$els.because, {autoAlpha: 0});
        TweenLite.set(this.$els.iShowUp.find('svg path'), {autoAlpha: 0, yPercent: 100, force3D: 'auto'});

        // because
        // let strSpan = '';
        // const label = this.data.label_because;
        // for (let i = 0; i < label.length; i++) {
        //     const letter = label[i] === ' ' ? '&nbsp;' : label[i];
        //     strSpan += `<span class="--ff-intro-title --c-cool-grey">${letter}</span>`;
        // }
        // this.$els.because.append(strSpan);
        // TweenLite.set(this.$els.because.find('span'), {autoAlpha: 0, yPercent: 100, force3D: 'auto'});

        // bar
        TweenLite.set(this.$els.bar, {xPercent: -100});
        TweenLite.set(this.$els.barContainer, {scaleY: 0});
    }

    initTL() {
        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});

        this.TL.show.to(this.$els.barContainer, 0.3, {scaleY: 1, ease: Cubic.easeOut}, 0);
        this.TL.show.to(this.$els.bar, 0.3, {xPercent: -20, ease: Expo.easeOut}, 0.2);

        // this.TL.show.to(this.$els.iShowUp, 0.3, {autoAlpha: 1, ease: Cubic.easeOut});
        // this.TL.show.to(this.$els.because, 0.3, {autoAlpha: 1, ease: Cubic.easeOut}, '-=0.2');
        console.log(this.$els.iShowUp.find('svg path'));
        this.TL.show.staggerTo(this.$els.iShowUp.find('svg path'), 0.3, {autoAlpha: 1, yPercent: 0, ease: Cubic.easeOut}, 0.05, 0);
        // this.TL.show.staggerTo(this.$els.because.find('span'), 0.3, {autoAlpha: 1, yPercent: 0, ease: Cubic.easeOut}, 0.05, 0.2);

        const location = this.getState().get('app').get('location');
        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$els.bar, 0.3, {xPercent: 0, ease: Expo.easeOut});
        this.TL.hide.to(this.$els.barContainer, 0.3, {scaleY: 0, ease: Expo.easeOut});

        if (location !== HOMEPAGE) {
            this.TL.hide.call(() => {
                setTimeout(() => {
                    this.dispatch(hiddenLoader()); // dispatch now for animation in
                }, 0);
                // this.$el.addClass('white-letter');
            });
            this.TL.hide.to(this.$el, 0.7, {autoAlpha: 0, delay: 0.3, ease: Cubic.easeOut});
        } else {
            this.TL.hide.to(this.$els.bg, 0.7, {autoAlpha: 0, ease: Cubic.easeOut}, '-=0.3');
            this.TL.hide.to(this.$els.iShowUp.find('svg path'), 0.3, {fill: '#FFF', ease: Cubic.easeOut}, '-=0.7');
            // this.TL.hide.staggerTo(this.$els.iShowUp.find('span'), 0.3, {autoAlpha: 0, color: '#FFF', yPercent: -100, ease: Cubic.easeOut}, 0.05);
            this.TL.hide.to(this.$els.iShowUp, 0.3, {autoAlpha: 0, ease: Cubic.easeOut});
            this.TL.hide.call(() => {
                setTimeout(() => {
                    this.dispatch(hiddenLoader()); // dispatch now for animation in
                }, 0);
                // this.$el.addClass('white-letter');
            });
            // this.TL.hide.addPause(0.8);
            // this.TL.hide.staggerTo(this.$els.iShowUp.find('span'), 0.3, {autoAlpha: 0, delay: 0.8, yPercent: -100, ease: Cubic.easeOut}, 0.05);
        }
    }

    _onPctChanged(pct) {
        TweenLite.to(this.$els.bar, 0.5, {xPercent: -100 + pct, ease: Cubic.easeOut});
    }

    showComponent() {
        setTimeout(() => {
          // this.TL[`show_${this.cptStatementTL}`].play(0);
          this.TL.show.play(0);
        }, 0);
        // adding delay to avoind junk at the begging ( might need to play with this)
    }

    onShown() {
        this.dispatch(shownLoader());
        super.onShown();
    }
}

export default MainLoader;
