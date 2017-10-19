import AbstractPageContainer from 'abstract/container.js';
import NotFound from 'components/not-found/NotFound';
import {getRoute} from 'containers/app/selectors';
import {HOMEPAGE} from 'constants/locations';

class NotFoundContainer extends AbstractPageContainer {

	constructor(options){
		super(options);

		this.Component = NotFound;
	}

	init() {
		// this.dispatch(showLoader());
		return super.init();
	}

	initData() {
		this.data = {
			home: getRoute(HOMEPAGE),
		};
	}
}

export default NotFoundContainer;
