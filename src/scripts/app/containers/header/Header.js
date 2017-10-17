import AbstractContainer from 'abstract/container.js';
import Header from 'components/header/Header';
import store from 'store';

import {
	HOMEPAGE,
	// ABOUT,
	// PARADE_DETAIL
} from 'constants/locations';

import {getRoute} from 'containers/app/selectors';

import {showModal} from 'containers/modal/actions';
import {ABOUT_MODAL} from 'containers/modal/constants';

class HeaderContainer extends AbstractContainer {

	constructor() {
		super();
		this.Component = Header;
	}

	initData() {
		this.data = {
			home: getRoute(HOMEPAGE),
		};
		// // test
		// const about = getRoute(ABOUT);
		// const paradeNYC = getRoute(PARADE_DETAIL, {id: 'new-york-city'});
	}

	initActions() {
		this.options.actions.about = () => this._about();
	}

	_about() {
		store.dispatch(showModal(ABOUT_MODAL));
	}

}

export default HeaderContainer;
