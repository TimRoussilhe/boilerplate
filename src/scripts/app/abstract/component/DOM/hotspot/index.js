import AbstractDOMComponent from 'abstract/component/DOM';
// import $ from 'zepto';
import {TweenLite, TimelineLite, Cubic} from 'gsap';


/**
 * Hotspot Component: Defines a modal
 * @extends Component
 * @constructor
 */
class HotspotComponent extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.pendingHide = false;

        this.events = {
            'click .close': ::this._onClose,
            'click .overlay': ::this._onClose
        };
    }

    setupDOM() {
        TweenLite.set(this.$el, {opacity: 0});
    }

    initTL() {
        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL.show.to(this.$el, 0.3, {opacity: 1, ease: Cubic.easeOut});

        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$el, 0.3, {opacity: 0, ease: Cubic.easeOut});
    }

    // Special init if we need to wait for the elent to be append in the DOM
    initAfterRender() {
        return new Promise((resolve, reject) => {
            this.initAfterRender__(resolve, reject);
        });
    }

    // to override
    initAfterRender__(resolve, reject) {
        resolve();
    }

    showComponent() {
        console.log('show hotspot');
        setTimeout(() => {
          this.TL.show.play(0);
        }, 0);
    }

    onShown() {
        super.onShown();

        if (this.pendingHide) this.hideComponent();
    }

    hideComponent() {
        // wait at least for the loader to be shown
        if (!this.states.isShown) {
            this.pendingHide = true;
            return;
        }

        this.pendingHide = false;
        setTimeout(() => {
          this.TL.hide.play(0);
        }, 0);
    }

    _onClose() {
        this.actions.close();
    }
}

export default HotspotComponent;
