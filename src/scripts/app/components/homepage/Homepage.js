import AbstractPageComponent from 'abstract/Pagecomponent';
import Tpl from './homepage.twig';

// import HomepageIntroPageContainer from 'containers/homepage-intro-page/HomepageIntroPage';

// Constants
// import {HOMEPAGE} from 'constants/locations';

// Utils
// import ScrollPrevent from 'utils/scrollPrevent';
// import {getAssetByDevice} from 'utils/misc';
// import {loadAsset} from 'utils/load';
// import {trackEvent} from 'utils/analytics';

// Selectors
// import {getNextCities} from 'selectors/cities';
// import {isAssetLoaded} from 'containers/homepage/selectors';

// Actions
// import {setCurrentCity} from 'actions/cities';
// import {zoomOutAll} from 'containers/mini-map/actions';
// import {loadedIntroHomepage} from 'containers/homepage/actions';
// import {blockSidebar, unBlockSidebar} from 'containers/sidebar/actions';

// Lib
// import Hammer from 'hammerjs';
// import Detectizr from 'detectizr';

class Homepage extends AbstractPageComponent {
	constructor(options) {
		super(options);

		// this.template = Tpl;

		this.selector = '#homepage';

		this.states = {
			isAnimating: false,
		};
	}

	dispose() {
		super.dispose();
	}

}

export default Homepage;
