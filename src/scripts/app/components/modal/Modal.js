import AbstractDOMComponent from 'abstract/component/DOM';
import Tpl from './modal.twig';

import $ from 'zepto';

class Modal extends AbstractDOMComponent {

    constructor(props) {
        super(props);

        this.template = Tpl;

        // this.events = {
        //     'click .close': ::this._onClose
        // };
    }

    initDOM() {
        this.$els.contentContainer = this.$el.find('.modal-content-container');
        // this.$els.overlay = this.$el.find('.modal-overlay');
        this.$els.modalContainer = $('#modal-container');
    }

    onDOMInit() {
        // append
        this.$els.modalContainer.append(this.el);
        super.onDOMInit();
    }

    bindEvents() {
        this.handlers.keydown = ::this._onKeyDown;
        // this.handlers.onOverlayClicked = ::this._onOverlayClicked;
        document.addEventListener('keydown', this.handlers.keydown, false);
        // this.$els.overlay.on('click', this.handlers.onOverlayClicked);
        super.bindEvents();
    }

    unbindEvents() {
        document.removeEventListener('keydown', this.handlers.keydown, false);
        super.unbindEvents();
    }

    appendModal(el) {
        this.$els.contentContainer.append(el);
    }

    showComponent() {
        this.$els.modalContainer.addClass('show');

        setTimeout(() => {
            super.showComponent();
        }, 300);
    }

    hideComponent() {
        this.$els.modalContainer.removeClass('show');

        setTimeout(() => {
            super.hideComponent();
        }, 300);
    }

    _onKeyDown(e) {
        if (!this.states.isShown) return;

        // Escape
        if (e.keyCode === 27) {
            this.actions.close();
        }
    }

    _onOverlayClicked() {
        this.actions.close();
    }

    // _onClose() {
    //     this.actions.close();
    // }
}

export default Modal;
