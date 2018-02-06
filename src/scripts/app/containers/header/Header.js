import AbstractContainer from 'abstract/container.js';
import Header from 'components/header/Header';

import {
	HOMEPAGE,
	// ABOUT,
	// PARADE_DETAIL
} from 'constants/locations';

import {getRoute} from 'containers/app/selectors';

class HeaderContainer extends AbstractContainer {

	constructor(options) {
		super(options);
		this.Component = Header;
	}

	initData() {
		this.data = {
			home: getRoute(HOMEPAGE),
		};
	}

}

export default HeaderContainer;
