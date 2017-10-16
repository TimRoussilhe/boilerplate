import AbstractContainer from 'abstract/container';

import SearchModal from 'containers/search-modal/SearchModal';
import AboutModal from 'containers/about-modal/AboutModal';
import GifModal from 'containers/gif-modal/GifModal';
import YTModal from 'containers/yt-modal/YTModal';
import ModalComponent from 'components/modal/Modal';

import {SEARCH_MODAL, ABOUT_MODAL, GIF_MODAL, YT_MODAL} from './constants';
import {hideModal} from './actions';

class Modal extends AbstractContainer {

    constructor(options) {
        super(options);

        this.component = ModalComponent;

        this.modal = null;
        this.type = null;

        this.watchers = {
            'modal.isShown': ::this.toggleDisplayModal
        };
    }

    initActions() {
        this.options.actions.close = ::this._close;
    }

    _close() {
        this.dispatch(hideModal());
    }

    newModal() {
        // get current modal
        const type = this.getState().get('modal').get('type');

        if (!type || type === this.type) {
            console.error('No current type of modal set up');
            return null;
        }

        this.type = type;

        let modal = null;
        switch (type) {
            case SEARCH_MODAL: modal = new SearchModal(); break;
            case ABOUT_MODAL: modal = new AboutModal(); break;
            case GIF_MODAL: modal = new GifModal(); break;
            case YT_MODAL: modal = new YTModal(); break;
            default: modal = null; break;
        }

        return modal;
    }

    _getMainLoaderData() {
        const data = this.getState().get('loader').get('data').get('main').toJS();
        return data;
    }

    toggleDisplayModal(isShown) {
        if (isShown && !this.modal) {
            // display loader
            const modal = this.newModal();

            if (!modal) return;

            if (this.modal) {
                this.modal.hide().then(() => {
                    this.modal.dispose();
                    this._showModal(modal);
                });
            } else {
                this._showModal(modal);
            }
        } else {
            if (!this.modal) return;

            this.modal.hide().then(() => {
                this.hide();
                this.modal.dispose();
                this.modal = null;
                this.type = null;
            });
        }
    }

    _showModal(modal) {
        this.modal = modal;
        this.show();
        this.modal.init().then(() => {
            this._component.appendModal(this.modal.getComponent().el);
            this.modal.show();
        });
    }

}

export default Modal;
