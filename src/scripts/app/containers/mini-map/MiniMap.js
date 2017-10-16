import AbstractContainer from 'abstract/container';
import MiniMapComponent from 'components/mini-map/MiniMap';
import {hoverCity} from 'containers/sidebar/actions';
import {ZOOM_OUT, SHOW_HOTSPOTS, HIDE_HOTSPOTS, TOGGLE_HOTSPOTS} from './constants';
import {zoomInCity, zoomOutAll, showHotspots, hideHotspots, toggleHotspots} from './actions';
import {PARADE_DETAIL} from 'constants/locations';
import {showModal} from 'containers/modal/actions';
import {SEARCH_MODAL} from 'containers/modal/constants';
import {getRoute} from 'containers/app/selectors';

class MiniMap extends AbstractContainer {

    component = MiniMapComponent;

    initData() {
        this.data = {
            cities: this.getState().get('cities').get('list').toJS().map((city) => {
                return getRoute(PARADE_DETAIL, {id: city});
            })
        };
    }

    initActions() {
        this.options.actions.findYourParade = ::this._findYourParadeAction;
        this.options.actions.hoverCity = ::this._hoverCityAction;
        this.options.actions.zoomIn = ::this._zoomInAction;
        this.options.actions.zoomOut = ::this._zoomOutAction;
        this.options.actions.showHotspots = ::this._showHotspotsAction;
        this.options.actions.hideHotspots = ::this._hideHotspotsAction;
        this.options.actions.toggleHotspots = ::this._toggleHotspotsAction;
    }

    _findYourParadeAction() {
        this.dispatch(showModal(SEARCH_MODAL));
    }

    _hoverCityAction(city) {
        this.dispatch(hoverCity(city));
    }

    _zoomInAction(city) {
        this.dispatch(zoomInCity(city));
    }

    _zoomOutAction() {
        this.dispatch(zoomOutAll(ZOOM_OUT));
    }

    _showHotspotsAction() {
        this.dispatch(showHotspots(SHOW_HOTSPOTS));
    }

    _hideHotspotsAction() {
        this.dispatch(hideHotspots(HIDE_HOTSPOTS));
    }

    _toggleHotspotsAction() {
        this.dispatch(toggleHotspots(TOGGLE_HOTSPOTS));
    }
}

export default MiniMap;
