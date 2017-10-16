import AbstractHotspotComponent from 'abstract/component/DOM/hotspot';
import Tpl from './hotspot-photo.twig';
import HotspotPhotoItem from 'containers/hotspot-photo-item/HotspotPhotoItem';

import AudioPlayer from 'components/audio-player/AudioPlayer';

// Utils
import {getAssetByDevice} from 'utils/misc';
import {loadAsset} from 'utils/load';

// Lib
import Hammer from 'hammerjs';
import Detectizr from 'detectizr';

class HotspotPhotoComponent extends AbstractHotspotComponent {
    constructor(options) {
        super(options);

        this.template = Tpl;

        this.audioPlayer = null;

        this.currentHPI = null;
        this.oldHPI = null;

        this.mc = null;
        this.scrollPrevent = null;

        // this.currentIdx = 0;

        this.states = {
            index: 0,
            isAnimating: false
        };

        this.events = {
            'click .prev': ::this._onPrev,
            'click .next': ::this._onNext
        };
    }

    initDOM() {
        this.$els.containerPhoto = this.$el.find('.photo-items-container');
        this.$els.containerAudio = this.$el.find('.audio-container');
    }

    onDOMInit() {
        // Swipe
        this.mc = new Hammer.Manager(this.$els.containerPhoto[0]);

        // create a recognizer
        const Swipe = new Hammer.Swipe();

        // add the recognizer
        this.mc.add(Swipe);

        // Load all assets if not mobile
        // if (Detectizr.device.type !== 'mobile') {
            this._loadAllAssets();
        // } else {
            // this._initFirstTimeHPI();
        // }
    }

    _initFirstTimeHPI() {
        this._initHPI().then((currentHPI) => {
            this.$els.containerPhoto.append(currentHPI.getComponent().el);
            this.currentHPI = currentHPI;

            // Audio ?

            if (this.data.audio.audio_url) {
                const AudioPlayerData = {
                    title: this.data.title,
                    src: this.data.audio.audio_url
                };

                this.audioPlayer = new AudioPlayer({data: AudioPlayerData});
                this.audioPlayer.init().then(() => {
                    this.$els.containerAudio.append(this.audioPlayer.el);
                    super.onDOMInit();
                });
            } else {
                super.onDOMInit();
            }
        });
    }

    _initHPI() {
        const {index} = this.states;
        const dataHPI = this.data.photos[index];

        return new Promise((resolve, reject) => {
            const direction = this.currentHPI ? this._getDirection(this.currentHPI.data, dataHPI) : null;
            dataHPI.direction = direction;
            // console.log('direction', direction);

            const currentHPI = new HotspotPhotoItem({data: dataHPI});
            currentHPI.wasLoadedOnce = dataHPI.isLoaded;

            currentHPI.init().then(() => {
                resolve(currentHPI);
            });
        });
    }

    _getDirection(dataOne, dataTwo) {
        let idxOne = -1;
        let idxTwo = -1;

        this.data.photos.forEach((photo, i) => {
            if (photo === dataOne) idxOne = i;
            if (photo === dataTwo) idxTwo = i;
        });

        // exception
        if (idxOne === this.data.photos.length - 1 && idxTwo === 0) idxTwo = idxOne + 1;
        if (idxOne === this.data.photos.length - 1 && idxTwo === -1) idxTwo = idxOne + 1;
        if (idxOne === 0 && idxTwo === this.data.photos.length - 1) idxTwo = idxOne - 1;
        if (idxOne === -1 && idxTwo === this.data.photos.length - 1) idxTwo = idxOne - 1;

        return idxOne > idxTwo ? 'NEXT' : 'PREV';
    }

    _loadAllAssets() {
        const aPromises = [];

        let allLoaded = true;

        this.data.photos.forEach((photo, i) => {
            if (!photo.isLoaded) allLoaded = false;
        });

        if (allLoaded) {
            this._initFirstTimeHPI();
        } else {
            // get all the promises of loads
            this.data.photos.forEach((photo, i) => {
                // COPY FOR LOADING PUPOSE
                // const data = Object.assign({}, photo);
                photo.asset = getAssetByDevice(photo.bg);

                aPromises.push(loadAsset(photo.asset));
            });

            // all loaded!
            Promise.all(aPromises).then(() => {
                // update the list
                this.data.photos.forEach((photo, i) => {
                    photo.isLoaded = true;
                });

                this._initFirstTimeHPI();
            });
        }
    }

    bindEvents() {
        this.handlers.swipeLeft = ::this._swipeLeft;
        this.handlers.swipeRight = ::this._swipeRight;
        this.handlers.keydown = ::this._onKeyDown;

        this.mc.on('swipeleft', this.handlers.swipeLeft);
        this.mc.on('swiperight', this.handlers.swipeRight);
        document.addEventListener('keydown', this.handlers.keydown, false);

        super.bindEvents();
    }

    unbindEvents() {
        document.removeEventListener('keydown', this.handlers.keydown, false);
        super.unbindEvents();
    }

    _onPrev() {
        if (!this.states.isShown || this.states.isAnimating) return;

        this._showNextPhoto();
    }

    _swipeLeft(e) {
        if (!this.states.isShown || this.states.isAnimating) return;

        this._showNextPhoto(false);
    }

    _onNext() {
        if (!this.states.isShown || this.states.isAnimating) return;

        this._showNextPhoto(false);
    }

    _swipeRight(e) {
        if (!this.states.isShown || this.states.isAnimating) return;

        this._showNextPhoto();
    }

    _onKeyDown(e) {
        if (!this.states.isShown || this.states.isAnimating) return;

        switch (e.keyCode) {
            // left
            case 37 : this._showNextPhoto(); break;
            // right
            case 39 : this._showNextPhoto(false); break;
            default: break;
        }
    }

    _showNextPhoto(next = true) {
        let {index} = this.states;
        index = next ? index + 1 : index - 1;

        if (index < 0) index = this.data.photos.length - 1;
        if (index > this.data.photos.length - 1) index = 0;

        this.setState({index: index});
        this._goToPhoto();
    }

    _goToPhoto() {
        if (this.states.isAnimating) return;
        this.setState({isAnimating: true});

        this._initHPI().then((currentHPI) => {
            this.$els.containerPhoto.append(currentHPI.getComponent().el);

            const direction = this._getDirection(this.currentHPI.data, currentHPI.data);

            this.oldHPI = this.currentHPI;
            this.oldHPI.getComponent().direction = direction;

            if (this.oldHPI && this.currentHPI.wasLoadedOnce) {
                this.oldHPI.hide();
            }
            this.currentHPI = currentHPI;

            // We are not waiting for a loader to hide
            if (this.currentHPI.wasLoadedOnce) this._showHPI();
        });
    }

    onShown() {
        const aPromise = [this.currentHPI.show()];

        if (this.audioPlayer) aPromise.push(this.audioPlayer.show());

        Promise.all(aPromise).then(() => {
            super.onShown();
        });
        // super.showComponent();
    }

    _showHPI() {
        this.currentHPI.show().then(() => {
            if (this.oldHPI) this.oldHPI.dispose();
            this.oldHPI = null;
            this.setState({isAnimating: false});
        });
    }

    dispose() {
        this.currentHPI.dispose();
        this.currentHPI = null;

        // uind events
        this.mc.off('swipeleft', this.handlers.swipeLeft);
        this.mc.off('swiperight', this.handlers.swipeRight);
        this.mc.destroy();
        this.mc = null;

        if (this.audioPlayer) this.audioPlayer.dispose();
        this.audioPlayer = null;

        super.dispose();
    }

}

export default HotspotPhotoComponent;
