// Abstract
// import AbstractPageComponent from 'abstract/component/DOM/page';

// Containers
import Layout from 'containers/layout/Layout';
import HomepageContainer from 'containers/homepage/Homepage';
import AboutContainer from 'containers/about/About';
// import ParadeDetailContainer from 'containers/parade-detail/ParadeDetail';
// import ExperiencePageContainer from 'containers/experience-page/ExperiencePage';
import NotFoundContainer from 'containers/not-found/NotFound';

// Constants
import {HOMEPAGE, ABOUT, NOT_FOUND} from 'constants/locations';
// import {SEARCH_MODAL, ABOUT_MODAL} from 'containers/modal/constants';

// Watchers
// import Loader from 'containers/loader/Loader';

// Actions
import {setAnimating, setPage, setOldPage} from './actions';
// import {showModal} from 'containers/modal/actions';
import store from 'store';
import watch from 'redux-watch';


class App {

	constructor() {

		this.prevLocation = null;
		this.location = null;
		this.layout = null;
		this.loader = null;
		this.page = null;
		this.oldPage = null;

		this.bindStoreEvents();

	}

	init() {
		this.layout = new Layout();

		// return layout promise
		return this.layout.init();
	}


	// TODO refactor this into the base component
	// add proper bind undinb store listener
	bindStoreEvents() {

		let w = watch(store.getState, 'app.location');

		store.subscribe(w((newVal, oldVal, objectPath) => this.onLocationChanged(newVal, oldVal)));
		// 	console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
		// 	// admin.name changed from JP to JOE
		// }));

	}

	// onIdChanged(id, prevId) {
	// 	const location = this.getState().get('app').get('location');
	// 	if (id !== prevId && id && prevId && this.location === location) {
	// 		this.routing(location, true);
	// 	}
	// }

	onLocationChanged(location, prevLocation) {

		console.log('location', location);
		console.log('prevLocation', prevLocation);

		this.prevLocation = prevLocation;
		if (location !== prevLocation) {
			this.location = location;
			this.routing(location, false);
		}
	}

	routing(location, fromSamePage = false) {
		let Page = null;
		console.log('location', location);

		switch (location) {
		case HOMEPAGE: Page = HomepageContainer; break;
		case ABOUT: Page = AboutContainer; break;
		case NOT_FOUND: Page = NotFoundContainer; break;
		default: Page = AbstractPageComponent;
		}

		if (Page === null) {
			console.error('Error: page is null');
			return;
		}
		store.dispatch(setAnimating(true));

		// First Render from the server
		let el = null;
		if (this.oldPage === null && this.page === null) {
			el = document.getElementsByClassName('page-wrapper')[0];
		}
		console.log('el', el);

		if (this.page) {

			this.oldPage = this.page;
			store.dispatch(setOldPage(this.oldPage));

		}

		// Define first page and pass el if the page el is allready in the dom
		this.page = new Page({
			el: el ? el : null,
		});

		store.dispatch(setPage(this.page));

		// Init the next page now

		this.page.init().then(() => {

			console.log('ON PAGE INIT');

			// Resize the current page for position
			// this.page.resize();
			this.layout.triggerResize();

			// Meta
			this.layout.setMeta();

			if (this.oldPage) {
				console.log('HIDE OLD PAGE', this.oldPage);
				this.oldPage.hide()
					.then(() => {
						console.log('OLD PAGE HIDDEN');
						this.oldPage.dispose();
						this.oldPage = null;
					});
			}

			// Show next
			this.page.show().then(() => {
				// if (!this.getState().get('app').get('appLoaded')) this.dispatch(setAppLoaded(true));
				console.log('CURRENT PAGE SHOW');

				store.dispatch(setAnimating(false));

				// at this point, dispose
				if (this.oldPage) {
					console.log('dispose again?');
					this.oldPage.dispose();
					this.oldPage = null;
				}
			});

		});
	}

}

export default App;
