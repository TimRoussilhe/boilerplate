import AbstractModalComponent from 'abstract/component/DOM/modal';
import Tpl from './yt-modal.twig';

import YTlayer from 'components/yt-player/YTPlayer';

class YTModal extends AbstractModalComponent {
    constructor(options) {
        super(options);

        this.template = Tpl;

        this.ytPlayer = null;

        this.events = {
            'click .overlay': this.actions.close
        };
    }

    initDOM() {
        this.$els.container = this.$el.find('.yt-modal-container');
    }

    onDOMInit() {
        const data = this.getState().get('ytmodal').get('data').toJS();

        this.ytPlayer = new YTlayer({data: data});

        this.ytPlayer.init().then(() => {
            this.$els.container.append(this.ytPlayer.el);
            super.onDOMInit();
        });
    }

    showComponent() {
        this.ytPlayer.show();
        super.showComponent();
    }

    dispose() {
        this.ytPlayer.dispose();
        this.ytPlayer = null;
        super.dispose();
    }

}

export default YTModal;
