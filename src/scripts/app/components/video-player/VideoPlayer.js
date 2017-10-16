import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './video-player.twig';

import plyr from 'plyr';

import Detectizr from 'detectizr';

import enableInlineVideo from 'iphone-inline-video';

class VideoPlayer extends AbstractDOMComponent {

    constructor(options) {
        super(options);

        this.template = Tpl;

        this.playerOptions = options.playerOptions ? options.playerOptions : {};
        this.playerOptions.iconUrl = 'https://storage.googleapis.com/gpride-assets/svgs/plyr.svg';
        this.playerOptions.blankUrl = 'https://storage.googleapis.com/gpride-assets/videos/blank.mp4';

        this.player = null;

        this.promisesVideoPlayer = {
            initPlayer: {
                resolve: null,
                reject: null
            },
            setSRC: {
                resolve: null,
                reject: null
            }
        };
    }

    initPlayer() {
        return new Promise((resolve, reject) => {
            // console.log('>> SETUP');
            const video = this.el.querySelector('.js-player');
            this.player = plyr.setup(video, this.playerOptions)[0];

            this.promisesVideoPlayer.initPlayer.resolve = resolve;
            this.promisesVideoPlayer.initPlayer.reject = reject;

            this._bindPlayerEvents();

            if (Detectizr.device.type === 'mobile' && Detectizr.os.name === 'ios') {
                enableInlineVideo(video, false, false);
                resolve();
            } else {
                console.log('GETTING READY');
                // to not have the play button flickering
                if (Detectizr.device.type === 'desktop') {
                    this.$el.addClass('hide-large-play-button');
                }
            }
        });
    }

    setSRC(conf) {
        return new Promise((resolve, reject) => {
            // promises
            this.promisesVideoPlayer.setSRC.resolve = resolve;
            this.promisesVideoPlayer.setSRC.reject = reject;
            // console.log('--setSRC Promise', conf);

            // update title and label
            this.$el.find('.plyr__controls .plyr_category').text(conf.parentLabel);
            this.$el.find('.plyr__controls .plyr_category').attr('href', conf.parentUrl);

            this.player.source({
                autoplay: true,
                type: 'video',
                title: conf.title,
                sources: [{
                  src: conf.src,
                  type: 'video/mp4'
                }]
            });

            if (Detectizr.device.type === 'mobile' && Detectizr.os.name === 'ios') {
                // enable inline again
                enableInlineVideo(this.player.getOriginal(), false, false);
                // custom title
                this.$el.find('h2').html(conf.title);
                this.promisesVideoPlayer.setSRC.resolve();
            }

            if (this.data.title && this.$els.plyrTitle[0] !== undefined) this.$els.plyrTitle.text(conf.title);
        });
    }

    play() {
        if (this.player) this.player.play();
    }

    pause() {
        if (this.player) this.player.pause();
    }

    _bindPlayerEvents() {
        if (!this.player) return;

        this.handlers.onEnded = ::this._onEnded;
        this.handlers.onPlaying = ::this._onPlaying;
        this.handlers.onPause = ::this._onPause;
        this.handlers.onReady = ::this._onReady;
        this.handlers.onCanPlay = ::this._onCanPlay;

        this.player.on('ended', this.handlers.onEnded);
        this.player.on('playing', this.handlers.onPlaying);
        this.player.on('pause', this.handlers.onPause);
        this.player.on('ready', this.handlers.onReady);
        this.player.on('canplay', this.handlers.onCanPlay);
    }

    _unbindPlayerEvents() {
        this.player.on('ended', null);
        this.player.on('playing', null);
        this.player.on('pause', null);
        this.player.on('ready', null);
        this.player.on('canplay', null);

        this.handlers = null;
    }

    _onReady() {
        if (!this.player || !this.promisesVideoPlayer.initPlayer.resolve) return;

        // console.log('>> Ready', this.data);

        this.$el.find('.plyr__controls').append(`<a class="plyr_category" href="${this.data.parentUrl}">${this.data.parentLabel}</span>`);
        this.$el.find('.plyr__controls').append(`<span class="plyr_title">${this.data.title}</span>`);
        this.$el.find('.plyr__controls').parent().append('<span class="gradient gradient-top"></span><span class="gradient gradient-bottom"></span>');
        this.$els.plyrTitle = this.$el.find('.plyr_title');

        this.promisesVideoPlayer.initPlayer.resolve();
        this.promisesVideoPlayer.initPlayer.resolve = null;
    }

    _onCanPlay() {
        if (!this.player || !this.promisesVideoPlayer.setSRC.resolve) return;

        // console.log('>> canplay SRC');

        this.$el.removeClass('hide-controls');
        this.$el.removeClass('hide-large-play-button');

        this.promisesVideoPlayer.setSRC.resolve();
        this.promisesVideoPlayer.setSRC.resolve = null;
    }

    _onEnded() {
        if (!this.player) return;
        this.$el.addClass('hide-controls');
        if (this.actions.ended) this.actions.ended();
    }

    _onPlaying() {
        if (!this.player) return;
        this.$el.addClass('hide-large-play-button');
    }

    _onPause() {
        if (!this.player) return;
        const isEnded = this.player.getCurrentTime() / this.player.getDuration() === 1;
        if (!isEnded) this.$el.removeClass('hide-large-play-button');
    }

    dispose() {
        if (this.player) {
            this._unbindPlayerEvents();
            this.player.destroy();
        }
        this.player = null;

        super.dispose();
    }
}

export default VideoPlayer;
