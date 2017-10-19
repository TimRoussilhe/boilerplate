import AbstractContainer from 'abstract/container.js';
import {calculateResponsiveState} from 'redux-responsive';
import store from 'store';

// Components
import Layout from 'components/layout/Layout';

// Actions
import {scroll} from './actions';

class LayoutContainer extends AbstractContainer {

	constructor() {
		super();
		this.Component = Layout;

	}

	// init(){
	// 	console.log('laoyut init');

	// }

	initActions() {
		this.options.actions.resize = () => this.resizeAction();
		this.options.actions.scroll = () => this.scrollAction();
	}

	resizeAction(wdw) {
		store.dispatch(calculateResponsiveState(wdw));
	}

	scrollAction(scrollObj) {
		store.dispatch(scroll(scrollObj));
	}

	triggerResize() {
		this._component.triggerResize();
	}

	setMeta() {
		this._component.setMeta();
	}
}

export default LayoutContainer;
