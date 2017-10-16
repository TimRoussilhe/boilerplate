import AbstractHotspotComponent from 'abstract/component/DOM/hotspot';
import Tpl from './hotspot-video.twig';

import VideoPlayer from 'components/video-player/VideoPlayer';

// Selectors
import {getNextHotspotData} from 'containers/experience/selectors';

// Actions
import {setHotspotId} from 'containers/experience/actions';

import Detectizr from 'detectizr';

// import {TweenLite, TimelineLite, Cubic} from 'gsap';

class HotspotVideoComponent extends AbstractHotspotComponent {
    constructor(options) {
        super(options);

        this.template = Tpl;

        this.videoPlayer = null;

        // this.events = {
        //     'click .overlay': this.actions.close
        // };
    }

    initDOM() {
        this.$els.container = this.$el.find('.hotspot-video-container');
        super.initDOM();
    }

    onDOMInit() {
        // const data = this.getState().get('ytmodal').get('data').toJS();
        const playerOptions = {
            autoplay: true,
            hideControls: true,
            controls: ['play-large', 'play', 'progress', 'current-time'],
            tooltips: {
                controls: true
            }
        };

        let src = this.data.video_desktop;

        if (Detectizr.device.type === 'tablet' && this.data.video_tablet) src = this.data.video_tablet;
        if (Detectizr.device.type === 'mobile' && this.data.video_mobile) src = this.data.video_mobile;

        const YTPlayerData = {
            title: this.data.title,
            src: this.data.video_desktop
        };

        this.videoPlayer = new VideoPlayer({
            data: YTPlayerData,
            playerOptions: playerOptions,
            callbacks: {
                ended: ::this._ended
            }
        });

        this.videoPlayer.init().then(() => {
            this.$els.container.append(this.videoPlayer.el);

            super.onDOMInit();
        });
    }

    _ended() {
        console.log('_ended');
        // const nextHotspot = getNextHotspotData();

        // if (nextHotspot) this.dispatch(setHotspotId(nextHotspot.id));

        this.actions.ended();
    }

    initAfterRender__(resolve, reject) {
        this.videoPlayer.initPlayer().then(() => {
            super.initAfterRender__(resolve, reject);
        });
    }


    dispose() {
        this.videoPlayer.dispose();
        this.videoPlayer = null;
        super.dispose();
    }

}

export default HotspotVideoComponent;
