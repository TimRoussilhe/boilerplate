import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './global-share.twig';
import ShareUtil from 'utils/share.js';

class GlobalShare extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.template = Tpl;

        this.events = {
            'click .twitter button': ::this._sharePopup,
            'click .facebook button': ::this._sharePopup
        };
    }

    _sharePopup(e) {
        console.log('_sharePopup');
        ShareUtil.openPopup(e.currentTarget);
        e.preventDefault();
    }

    onDOMInit() {
        console.log('onDOMInit');
        super.onDOMInit();
    }

}

export default GlobalShare;
