import AbstractModalContainer from 'abstract/container/modal';
import AboutModal from 'components/about-modal/AboutModal';
import {ASSET_DIR} from 'constants/api';
import {updateModal} from 'containers/layout/actions';
import {HOMEPAGE} from 'constants/locations';
import {getRoute} from 'containers/app/selectors';

class AboutModalContainer extends AbstractModalContainer {

    component = AboutModal;

    // Get copy from global
    initData() {
        this.data = this.getState().get('modal').get('data').get('about').toJS();
        this.data.home = getRoute(HOMEPAGE);
    }

    initActions() {
        this.options.actions.updateModal = ::this._updateModal;
        super.initActions();
    }

    _updateModal(modalState) {
        this.dispatch(updateModal(modalState));
    }

}

export default AboutModalContainer;
