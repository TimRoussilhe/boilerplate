import AbstractModalContainer from 'abstract/container/modal';
import GifModal from 'components/gif-modal/GifModal';
import {updateModal} from 'containers/layout/actions';

// Actions
import {setCity} from './actions';

class GifModalContainer extends AbstractModalContainer {

    component = GifModal;

    // Get copy from global
    initData() {
        // const data = this.getState().get('modal').get('data').get('gifs').toJS();
        // const city = this.getState().get('gif').get('city');
        // this.data = data;
        // this.data.city = city && data[city] ? data[city] : [];
        // this.data.mainGif = this.data[this.getState().get('cities').get('current')][0];

        const gifs = this.getState().get('modal').get('data').get('gifs').toJS();
        const currentCity = this.getState().get('app').get('prms').get('id');
        this.data = {
            mainGif: gifs[currentCity][0]
        };
        console.log(this.data.mainGif);

        // const getUrl = window.location;
        // const baseUrl = getUrl.protocol + '//' + getUrl.host + '/' + getUrl.pathname.split('/')[1];
        const base = window.location.origin === 'http://localhost:8080' ? 'https://dev-dot-gweb-pride.appspot.com' : window.location.origin;
        // https://dev-dot-gweb-pride.appspot.com/api/gif/?gif=cc7c6bad-d509-458b-b30e-108f10efbb12&locale=en-US
        this.data.shareUrl = base + '/api/gif/?gif=' + this.data.mainGif.id + '&locale=' + this.getState().get('app').get('lang');

        console.log(' this.data.shareUrl', this.data.shareUrl);
    }

    initActions() {
        this.options.actions.updateModal = ::this._updateModal;
        super.initActions();
    }

    _updateModal(modalState) {
        this.dispatch(updateModal(modalState));
    }

    dispose() {
        // reset for next time
        this.dispatch(setCity(null));
        super.dispose();
    }
}

export default GifModalContainer;
