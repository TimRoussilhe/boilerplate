
import AbstractDOMComponent from 'abstract/DOMcomponent';
// import $ from 'zepto';
// import {TweenLite} from 'gsap';
import TweenLite from 'TweenLite';
import TimelineLite from 'TimelineLite';
import CSSPlugin from 'CSSPlugin';

/**
 * PageComponent: Defines a page
 * @extends Component
 * @constructor
 */
class PageComponent extends AbstractDOMComponent {

	setupDOM() {
		TweenLite.set(this.$el, {autoAlpha: 0});
	}

	initTL() {
		console.log('==================== initTL');

		this.TL.show = new TimelineLite({paused: true, onComplete: () => this.onShown()});
		// this.TL.show.set(this.$el, {autoAlpha: 0, ease: Cubic.easeOut});
		this.TL.show.to(this.$el, 0.3, {autoAlpha: 1, ease: Cubic.easeOut});

		console.log('this.$el', this.$el);

		this.TL.hide = new TimelineLite({paused: true, onComplete: () => this.onHidden()});
		this.TL.hide.to(this.$el, 0.3, {autoAlpha: 0, ease: Cubic.easeOut});
	}

	onDOMInit() {
		// append to main container
		document.getElementById('content').appendChild(this.el);
		super.onDOMInit();
	}

	showComponent() {
		setTimeout(() => {
			this.TL.show.play(0);
		}, 0);
	}

	hideComponent() {
		console.log('hideComponent');
		setTimeout(() => {
			this.TL.hide.play(0);
		}, 0);
	}
}

export default PageComponent;
