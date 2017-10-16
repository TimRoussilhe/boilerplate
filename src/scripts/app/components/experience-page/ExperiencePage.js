import AbstractPageComponent from 'abstract/component/DOM/page';
import Tpl from './experience-page.twig';

// import {trackEvent} from 'utils/analytics';

class ExperiencePage extends AbstractPageComponent {

    template = Tpl;

    setupDOM() {}
    initTL() {}

    showComponent() {
        this.onShown();
    }

    hideComponent() {
        this.onHidden();
    }
}

export default ExperiencePage;
