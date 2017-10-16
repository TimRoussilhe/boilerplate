import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './rotate-screen.twig';

import Detectizr from 'detectizr';
import $ from 'zepto';

import {PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';

const LANDSCAPE = 'LANDSCAPE';
const PORTRAIT = 'PORTRAIT';

class RotatScreen extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.template = Tpl;

        this.watchers = {
            'app.location': ::this.render
        };
    }

    initDOM() {
        this.$els.container = $('#rotate-screen-container');
    }

    onDOMInit() {
        this.$els.container.append(this.el);
        if (window.screen && window.screen.lockOrientation) window.screen.lockOrientation('portrait');
        super.onDOMInit();
    }

    onResize() {
        this.render();
    }

    _getOrientation() {
        // exception
        const location = this.getState().get('app').get('location');
        if (location === PARADE_EXPERIENCE_HOTSPOT) return PORTRAIT;

        // real test
        if (Detectizr.device.type !== 'mobile') return PORTRAIT;
        if (window.screen && window.screen.orientation) {
            if (window.screen.orientation.type.indexOf('landscape') > -1) return LANDSCAPE;
            return PORTRAIT;
        }
        if (window.orientation !== undefined) {
            return window.orientation === 0 || window.orientation === 180 ? PORTRAIT : LANDSCAPE;
        }
        // last resort
        window.innerWidth > window.innerHeight ? LANDSCAPE : PORTRAIT;
        return PORTRAIT;
    }

    render() {
        const orientation = this._getOrientation();
        orientation === LANDSCAPE ? this.$els.container.addClass('show') : this.$els.container.removeClass('show');
    }
}

export default RotatScreen;
