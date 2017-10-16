import AbstractContainer from 'abstract/container';
import Sidebar from 'components/sidebar/Sidebar';
import {
    showSidebar,
    hideSidebar,
    hoverCity
} from 'containers/sidebar/actions';
import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR
} from 'containers/sidebar/constants';

import {showModal} from 'containers/modal/actions';
import {SEARCH_MODAL, ABOUT_MODAL} from 'containers/modal/constants';
import {PARADE_DETAIL, HOMEPAGE} from 'constants/locations';
import {getRoute} from 'containers/app/selectors';

class SidebarContainer extends AbstractContainer {

    component = Sidebar;

    // Get copy from global
    initData() {
        this.data = this.getState().get('sidebar').get('data').toJS();
        this.data.cities = this.getState().get('cities').get('list').toJS().map((city) => {
            return getRoute(PARADE_DETAIL, {id: city});
        });
        this.data.secondaryNavLinks = this.getState().get('footer').get('data').get('links').toJS();
        this.data.home = getRoute(HOMEPAGE);
        this.data.homeLabel = this.getState().get('app').get('ui').toJS().label_menu_home;

        this.data.footerLinks = this.getState().get('footer').get('data').toJS().links;
        console.log('this.data', this.data);
    }

    initActions() {
        this.options.actions.findYourParade = ::this._findYourParadeAction;
        this.options.actions.about = ::this._about;
        this.options.actions.showSidebar = ::this._showSidebarAction;
        this.options.actions.hideSidebar = ::this._hideSidebarAction;
        this.options.actions.hoverCity = ::this._hoverCityAction;
    }

    _findYourParadeAction() {
        this.dispatch(showModal(SEARCH_MODAL));
    }

    _hoverCityAction(city) {
        this.dispatch(hoverCity(city));
    }

    _about() {
        this.dispatch(showModal(ABOUT_MODAL));
    }

    _showSidebarAction() {
        this.dispatch(showSidebar(SHOW_SIDEBAR));
    }

    _hideSidebarAction() {
        this.dispatch(hideSidebar(HIDE_SIDEBAR));
    }
}

export default SidebarContainer;
