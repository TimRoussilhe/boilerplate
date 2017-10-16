import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './experience.twig';

import $ from 'zepto';

import VideoPlayer from 'components/video-player/VideoPlayer';

import {trackEvent} from 'utils/analytics';

class Experience extends AbstractDOMComponent {

    constructor(options) {
        super(options);

        this.template = Tpl;
        this.videoPlayer = null;

        this.events = {
            // 'click .close': ::this.actions.close,
            // 'click .overlay': ::this.actions.close,
            'click .next-hotspot': ::this._nextHotspot
        };

        // Has to do it this way to add a delay
        // regarding if the modal is open
        // for the escape key
        this.states = {
            isModalOpen: false
        };

        this.watchers = {
            'modal.isShown': ::this._modalOpen,
            'experience.backButton_url': ::this._backButtonUpdate
        };

        this.timerModalOpen = null;
    }

    initDOM() {
        this.$els.contentContainer = this.$el.find('.experience-content-container');
        // this.$els.overlay = this.$el.find('.experience-overlay');
        this.$els.experienceContainer = $('#experience-container');
        this.$els.backButton = this.$el.find('.back-wrapper a');
    }

    onDOMInit() {
        // append
        this.$els.experienceContainer.append(this.el);
        console.log('--------- Scroll DISABLED');
        super.onDOMInit();
    }

    // bindEvents() {
    //     this.handlers.keydown = ::this._onKeyDown;
    //     document.addEventListener('keydown', this.handlers.keydown, false);
    //     super.bindEvents();
    // }

    // unbindEvents() {
    //     document.removeEventListener('keydown', this.handlers.keydown, false);
    //     super.unbindEvents();
    // }

    appendHotspot(el) {
        this.$els.contentContainer.append(el);
    }

    pausePlayer() {
        if (this.videoPlayer) this.videoPlayer.pause();
    }

    playPlayer() {
        if (this.videoPlayer) this.videoPlayer.play();
    }

    showComponent() {
        this.$els.experienceContainer.addClass('show');
        // this.actions.disableScroll(true);
        // console.log('showComponent');

        setTimeout(() => {
            super.showComponent();
        }, 300);
    }

    hideComponent() {
        this.$els.experienceContainer.removeClass('show');
        // super.hideComponent();
        // this.actions.disableScroll(false);
        // console.log('hideComponent');

        setTimeout(() => {
            super.hideComponent();
            console.log('hide experience!!');
        }, 300);
    }

    initPlayer(playerData) {
        return new Promise((resolve, reject) => {
            const playerOptions = {
                autoplay: false,
                hideControls: true,
                controls: ['play-large', 'play', 'progress', 'current-time'],
                tooltips: {
                    controls: true
                }
            };

            this.videoPlayer = new VideoPlayer({
                data: playerData,
                playerOptions: playerOptions,
                actions: this.actions
            });

            this.videoPlayer.init().then(() => {
                this.$els.contentContainer.append(this.videoPlayer.el);

                this.videoPlayer.initPlayer().then(() => {
                    resolve();
                });
            });
        });
    }

    setSRC(conf) {
        console.log('conf', conf);
        return this.videoPlayer !== null ? this.videoPlayer.setSRC(conf) : this.initPlayer(conf);
    }

    disposePlayer() {
        console.log('disposePlayer');
        this.videoPlayer.dispose();
        this.videoPlayer = null;
    }

    _nextHotspot() {
        this.actions.nextHotspot();
    }

    _modalOpen(isShown) {
        if (isShown) {
            if (this.timerModalOpen) clearTimeout(this.timerModalOpen);
            this.setState({isModalOpen: true});
        } else {
            this.timerModalOpen = setTimeout(() => {
                this.setState({isModalOpen: false});
            }, 300);
        }
    }

    _onKeyDown(e) {
        if (!this.states.isShown || this.states.isModalOpen) return;

        // Escape
        if (e.keyCode === 27) {
            this.actions.close();
        }
    }

    _onOverlayClicked() {
        this.actions.close();
    }

    _backButtonUpdate(callbackUrl) {
        this.$els.backButton.attr('href', callbackUrl);
    }
}

export default Experience;
