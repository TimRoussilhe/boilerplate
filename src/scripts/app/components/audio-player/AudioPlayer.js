import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './audio-player.twig';

import plyr from 'plyr';

import {TweenLite, TimelineLite, Cubic} from 'gsap';

class AudioPlayer extends AbstractDOMComponent {

    constructor(options) {
        super(options);

        this.template = Tpl;

        this.player = null;
    }

    setupDOM() {
        TweenLite.set(this.$el, {opacity: 0, yPercent: 10});
    }

    initTL() {
        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL.show.to(this.$el, 0.3, {opacity: 1, yPercent: 0, ease: Cubic.easeOut});

        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$el, 0.3, {opacity: 0, ease: Cubic.easeOut});
    }

    _initPlayer() {
        return new Promise((resolve, reject) => {
            this.player = plyr.setup(this.el.querySelectorAll('.js-player'), {
                autoplay: true,
                hideControls: false,
                iconUrl: 'https://storage.googleapis.com/gpride-assets/svgs/plyr.svg',
                controls: ['play-large', 'play', 'progress', 'current-time'],
                tooltips: {
                    controls: true
                }
            })[0];

            this._bindPlayerEvents();

            this.player.on('ready', (event) => {
                // this.player.off('canplaythrough');
                // durty but works
                if (this.data.title) this.$el.find('.plyr__controls').append(`<span class="plyr_title">${this.data.title}</span>`);
                resolve();
            });

            // resolve();
        });
    }

    _bindPlayerEvents() {
        //
    }

    showComponent() {
        this._initPlayer().then(() => {
            this.TL.show.play(0);
        });
    }

    dispose() {
        this.player.destroy();
        this.player = null;

        super.dispose();
    }
}

export default AudioPlayer;
