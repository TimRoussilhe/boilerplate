import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './footer.twig';
// import GlobalShare from 'components/global-share/GlobalShare';

import {trackEvent} from 'utils/analytics';

class Footer extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.template = Tpl;

        this.watchers = {
            'footer.isShown': ::this.render,
            'footer.UITheme': ::this.render
        };

        this.events = {
            'click .about': ::this._aboutClick,
            'click .privacy': ::this._privacyClick,
            'click .terms': ::this._termsClick
        };
    }

    onDOMInit() {
        document.getElementById('footer-container').appendChild(this.el);
        super.onDOMInit();
    }

    render() {
        const isShown = this.getState().get('footer').get('isShown');
        // const UITheme = this.getState().get('footer').get('UITheme');
        isShown ? this.el.classList.add('show') : this.el.classList.remove('show');

        // We removed this for now!
        // switch (UITheme) {
        //     case 'white':
        //         this.el.classList.add('white-theme');
        //         this.el.classList.remove('black-theme');
        //         break;
        //     case 'black':
        //         this.el.classList.add('black-theme');
        //         this.el.classList.remove('white-theme');
        //         break;
        //     default:
        //         this.el.classList.add('white-theme');
        //         this.el.classList.remove('black-theme');
        //         break;
        // }
    }

    _privacyClick() {
        trackEvent({category: 'footer', action: 'click', label: 'privacy policy'});
    }

    _aboutClick() {
        trackEvent({category: 'footer', action: 'click', label: 'about google'});
    }

    _termsClick() {
        trackEvent({category: 'footer', action: 'click', label: 'terms'});
    }

}

export default Footer;
