import $ from 'zepto';
import is from 'is_js';

import {configureRoute, initRouter} from 'router';
import App from 'containers/app/App';
// import {configureAnalytics} from 'utils/analytics';

class Entry {

	constructor() {
		console.log('--- APP ---');
		console.log('\n\n\n');
		this.app = null;
		// configureAnalytics();
	}

	init() {

		console.log('init');

		const router = configureRoute();
		this.app = new App();
		// custom Detectizr setup
		const root = $('html');

		is.mobile() && root.addClass('isMobile');
		is.tablet() && root.addClass('isTablet');

		console.log('initRouter Done');

		initRouter().then(() => {
			this.app.init()
				.then(() => {
					console.log('init then');
					router.start();
				});
		});
	}

}

// initialize the APP do not make a global reference to it.
const entry = module.exports = new Entry();
$(document).ready(() => entry.init());
