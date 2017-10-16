import AbstractContainers from 'abstract/container';
import {calculateResponsiveState} from 'redux-responsive';

// Components
import Layout from 'components/layout/Layout';

// Actions
import {scroll} from './actions';

class LayoutContainer extends AbstractContainers {

    component = Layout;

    initActions() {
        this.options.actions.resize = ::this.resizeAction;
        this.options.actions.scroll = ::this.scrollAction;
    }

    resizeAction(wdw) {
        this.dispatch(calculateResponsiveState(wdw));
    }

    scrollAction(scrollObj) {
        this.dispatch(scroll(scrollObj));
    }

    triggerResize() {
        this._component.triggerResize();
    }

    setMeta() {
        this._component.setMeta();
    }
}

export default LayoutContainer;
