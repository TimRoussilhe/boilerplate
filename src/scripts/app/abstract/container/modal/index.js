import AbstractContainer from 'abstract/container';

// Actions
import {hideModal} from 'containers/modal/actions';

/**
 * ModalContainer: Defines a modal container
 * @extends AbstractContainer
 * @constructor
 */
class ModalContainer extends AbstractContainer {

    initActions() {
        this.options.actions.close = ::this._close;
    }

    _close() {
        this.dispatch(hideModal());
    }
}

export default ModalContainer;
