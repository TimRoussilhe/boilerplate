import AbstractContainer from 'abstract/container';
import ParadeDetailGMaps from 'components/parade-detail-gmaps/ParadeDetailGMaps';

import {hasScriptGmaps, isInitGmaps, isInitPositionGmaps, resetGmaps} from './actions';

class ParadeDetailGMapsContainer extends AbstractContainer {

    component = ParadeDetailGMaps;

    initActions() {
        this.options.actions.hasScriptGmaps = ::this._hasScriptGmaps;
        this.options.actions.isInitGmaps = ::this._isInitGmaps;
        this.options.actions.isInitPositionGmaps = ::this._isInitPositionGmaps;
        this.options.actions.resetGmaps = ::this._resetGmaps;
    }

    _hasScriptGmaps() {
        this.dispatch(hasScriptGmaps());
    }

    _isInitGmaps() {
        this.dispatch(isInitGmaps());
    }

    _isInitPositionGmaps() {
        this.dispatch(isInitPositionGmaps());
    }

    _resetGmaps() {
        this.dispatch(resetGmaps());
    }
}

export default ParadeDetailGMapsContainer;
