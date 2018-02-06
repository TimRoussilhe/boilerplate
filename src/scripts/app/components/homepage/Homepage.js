import AbstractPageComponent from 'abstract/Pagecomponent';
import Tpl from 'templates/index.twig';

// Constants
// import {HOMEPAGE} from 'constants/locations';

// Utils
// import ScrollPrevent from 'utils/scrollPrevent';

// Selectors
// import {isAssetLoaded} from 'containers/homepage/selectors';

// Actions
// import {setCurrentCity} from 'actions/cities';

// Lib
// import Hammer from 'hammerjs';

class Homepage extends AbstractPageComponent {
	constructor(options) {
		super(options);

		this.template = Tpl;

		this.states = {
			isAnimating: false,
		};
	}

	dispose() {
		super.dispose();
	}

}

export default Homepage;
