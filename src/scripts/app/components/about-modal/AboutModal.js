import AbstractModalComponent from 'abstract/component/DOM/modal';
import Tpl from './about-modal.twig';
import {hideHamburgerMenu} from 'containers/header/actions';

class AboutModal extends AbstractModalComponent {
  constructor(options) {
    super(options);

    this.template = Tpl;

    this.watchers = {
        browser: ::this.onBrowserMediatypeUpdate
    };

    this.events = {
        'click .modal-overlay': ::this._onOverlayClick,
        'click .main-logo ': ::this._close
    };
  }

  onBrowserMediatypeUpdate() {
    console.log('onBrowserMediatypeUpdate');

    const lessThan = this.getState().get('browser').lessThan;

    if (lessThan.tabletH === true) {
        this.actions.updateModal(true);
        this.dispatch(hideHamburgerMenu());
    } else {
        this.actions.updateModal(false);
    }
  }

  onShown() {
      this.onBrowserMediatypeUpdate();
      super.onShown();
  }

  onHidden() {
      this.actions.updateModal(false);
      super.onHidden();
  }

  _close() {
    this.actions.close();
  }

  _onOverlayClick() {
    this.actions.close();
  }

}

export default AboutModal;
