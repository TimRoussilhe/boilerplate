import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './yt-player.twig';

import plyr from 'plyr';
// import enableInlineVideo from 'iphone-inline-video';

import Detectizr from 'detectizr';

class YTPlayer extends AbstractDOMComponent {

    constructor(options) {
        super(options);

        this.template = Tpl;

        this.callbacks = options.callbacks ? options.callbacks : {};
        this.playerOptions = options.playerOptions ? options.playerOptions : {};
        this.playerOptions.iconUrl = 'https://storage.googleapis.com/gpride-assets/svgs/plyr.svg';

        this.player = null;
    }

    // setupDOM() {
    //     TweenLite.set(this.$el, {opacity: 0, yPercent: 10});
    // }

    // initTL() {
    //     this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
    //     this.TL.show.to(this.$el, 0.3, {opacity: 1, yPercent: 0, ease: Cubic.easeOut});

    //     this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
    //     this.TL.hide.to(this.$el, 0.3, {opacity: 0, ease: Cubic.easeOut});
    // }

    initPlayer() {
        return new Promise((resolve, reject) => {
            console.log('>> SETUP');

            this.player = plyr.setup(this.el.querySelectorAll('.js-player'), this.playerOptions)[0];

            this._bindPlayerEvents();

            if (Detectizr.device.type === 'mobile' && Detectizr.os.name === 'ios') {
                if (this.data.title) this.$el.find('.plyr__controls').append(`<span class="plyr_title">${this.data.title}</span>`);
                resolve();
            } else {
                this.player.on('ready', (event) => {
                    // durty but works
                    if (this.data.title) this.$el.find('.plyr__controls').append(`<span class="plyr_title">${this.data.title}</span>`);
                    resolve();
                });
            }
            // resolve();
        });
    }

    _bindPlayerEvents() {
        this.player.on('ended', (event) => {
            if (this.callbacks.ended) this.callbacks.ended();
        });
    }

    // showComponent() {
    //     this._initPlayer().then(() => {
    //         this.TL.show.play(0);
    //     });
    // }

    dispose() {
        if (this.player) this.player.destroy();
        this.player = null;

        super.dispose();
    }
}

export default YTPlayer;
