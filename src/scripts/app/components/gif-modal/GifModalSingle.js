import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './gif-modal-single.twig';
import ShareUtil from 'utils/share.js';

class GifModalSingle extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.template = Tpl;

        this.events = {
            'click .twitter a': ::this._shareTwitter,
            'click .facebook a': ::this._shareFacebook
        };
    }

    _shareTwitter(e) {
        ShareUtil.openPopup(this.$els.twitterBtn[0]);
        e.preventDefault();
    }

    _shareFacebook(e) {
        ShareUtil.openPopup(this.$els.facebookBtn[0]);
        e.preventDefault();
    }

    // initData() {
    //     console.log('initData');
    // }

    initDOM() {
        this.$els.twitterBtn = this.$el.find('.social-item.twitter a');
        this.$els.facebookBtn = this.$el.find('.social-item.facebook a');
    }

    onDOMInit() {
        super.onDOMInit();
    }

}

export default GifModalSingle;
