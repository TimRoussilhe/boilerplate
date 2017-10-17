// Abstract
// import AbstractPageComponent from 'abstract/component/DOM/page';

// Containers
// import Layout from 'containers/layout/Layout';
// import HomepageContainer from 'containers/homepage/Homepage';
// import ParadeDetailContainer from 'containers/parade-detail/ParadeDetail';
// import ExperiencePageContainer from 'containers/experience-page/ExperiencePage';
// import NotFoundContainer from 'containers/not-found/NotFound';

// Constants
import {HOMEPAGE, PARADE_DETAIL, NOT_FOUND, PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';
// import {SEARCH_MODAL, ABOUT_MODAL} from 'containers/modal/constants';

// Watchers
// import Loader from 'containers/loader/Loader';

// Actions
import {setAppLoaded} from './actions';
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

		console.log('store.getState()', store.getState());
		let w = watch(store.getState, 'app.location');

		store.subscribe(w((newVal, oldVal, objectPath) => {
			console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
			// admin.name changed from JP to JOE
		}));

	}

	init() {
		this.layout = new Layout();
		// this.loader = new Loader();


		// return layout promise
		return this.layout.init();
	}

	onIdChanged(id, prevId) {
		const location = this.getState().get('app').get('location');
		if (id !== prevId && id && prevId && this.location === location) {
			this.routing(location, true);
		}
	}

	onLocationChanged(location, prevLocation) {
		this.prevLocation = prevLocation;
		if (location !== prevLocation) {
			this.location = location;
			this.routing(location, false);
		}
	}

	routing(location, fromSamePage = false) {
		let page = null;

		switch (location) {
		case HOMEPAGE: page = new HomepageContainer(); break;
		case PARADE_DETAIL: page = new ParadeDetailContainer(); break;
		case PARADE_EXPERIENCE_HOTSPOT: page = new ExperiencePageContainer(); break;
		case NOT_FOUND: page = new NotFoundContainer(); break;
		default: page = new AbstractPageComponent();
		}

		if (page === null) {
			console.error('Error: page is null');
			return;
		}

		this.oldPage = this.page;
		this.page = page;

		// Init the next page now
		console.log('INIT PAGE', this.page);
		this.page.init().then(() => {
			// Resize the current page for position
			// this.page.resize();
			this.layout.triggerResize();

			// Meta
			this.layout.setMeta();

			if (this.oldPage && hideNow) {
				console.log('HIDE OLD PAGE', this.oldPage);
				this.oldPage.hide()
					.then(() => {
						this.oldPage.dispose();
						this.oldPage = null;
					});
			}

			// Show next
			this.page.show().then(() => {
				if (!this.getState().get('app').get('appLoaded')) this.dispatch(setAppLoaded(true));

				// at this point, dispose
				if (this.oldPage && !hideNow) {
					console.log('dispose again?');
					this.oldPage.dispose();
					this.oldPage = null;
				}
			});

			// If there was data already, we are not waiting for a loader screen to finish
			// we show it now!

			// if (hasData) {
			//     this.page.show().then(() => {
			//         if (!this.getState().get('app').get('appLoaded')) this.dispatch(setAppLoaded(true));
			//     });
			// }
		});
	}

}

export default App;
