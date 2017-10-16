import AbstractDOMComponent from 'abstract/component/DOM';
// import $ from 'zepto';
import {TweenLite, TimelineLite, Cubic} from 'gsap';
import {shownLoader, hiddenLoader} from 'containers/loader/actions';

/**
 * Loader Component: Defines a loader
 * @extends Component
 * @constructor
 */
class LoaderComponent extends AbstractDOMComponent {

    pendingHide = false;

    setupDOM() {
        TweenLite.set(this.$el, {autoAlpha: 0});
    }

    initTL() {
        this.TL.show = new TimelineLite({paused: true, onComplete: ::this.onShown});
        this.TL.show.to(this.$el, 0.3, {autoAlpha: 1, ease: Cubic.easeOut});

        this.TL.hide = new TimelineLite({paused: true, onComplete: ::this.onHidden});
        this.TL.hide.to(this.$el, 0.3, {autoAlpha: 0, ease: Cubic.easeOut});
    }

    onDOMInit() {
        // append to main container
        document.body.appendChild(this.el);
        super.onDOMInit();
    }

    showComponent() {
        this.dispatch(shownLoader());
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

    onHidden() {
        this.dispatch(hiddenLoader());
        super.onHidden();
    }
}

export default LoaderComponent;
