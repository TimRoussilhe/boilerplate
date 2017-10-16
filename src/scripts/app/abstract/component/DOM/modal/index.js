import AbstractDOMComponent from 'abstract/component/DOM';
// import $ from 'zepto';
import {TweenLite, TimelineLite, Cubic} from 'gsap';


/**
 * Modal Component: Defines a modal
 * @extends Component
 * @constructor
 */
class ModalComponent extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.pendingHide = false;

        this.events = {
            'click .close': ::this._onClose
        };
    }

    setupDOM() {
        TweenLite.set(this.$el, {autoAlpha: 0});
    }

    initTL() {
        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL.show.to(this.$el, 0.3, {autoAlpha: 1, ease: Cubic.easeOut});

        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$el, 0.3, {autoAlpha: 0, ease: Cubic.easeOut});
    }

    showComponent() {
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

export default ModalComponent;
