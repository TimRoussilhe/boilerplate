import AbstractModalContainer from 'abstract/container/modal';
import YTModal from 'components/yt-modal/YTModal';

import {setOpenNextTimeYTModal} from './actions';

class YTModalContainer extends AbstractModalContainer {

    component = YTModal;

    initData() {
        this.data = this.getState().get('ytmodal').get('data').toJS();
    }

    onInit() {
        this.dispatch(setOpenNextTimeYTModal(false));
        super.onInit();
    }

}

export default YTModalContainer;
