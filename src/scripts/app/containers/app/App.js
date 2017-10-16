import Watcher from 'abstract/watcher';

// Abstract
import AbstractPageComponent from 'abstract/component/DOM/page';

// Containers
import Layout from 'containers/layout/Layout';
import HomepageContainer from 'containers/homepage/Homepage';
import ParadeDetailContainer from 'containers/parade-detail/ParadeDetail';
import ExperiencePageContainer from 'containers/experience-page/ExperiencePage';
import NotFoundContainer from 'containers/not-found/NotFound';

// Constants
import {HOMEPAGE, PARADE_DETAIL, NOT_FOUND, PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';
import {SEARCH_MODAL, ABOUT_MODAL} from 'containers/modal/constants';

// Watchers
import Loader from 'containers/loader/Loader';

// Actions
import {setAppLoaded, setHash} from './actions';
import {showModal} from 'containers/modal/actions';


class App extends Watcher {

    constructor() {
        super();

        this.prevLocation = null;
        this.location = null;
        this.layout = null;
        this.loader = null;
        this.page = null;
        this.oldPage = null;

        this.watchers = {
            'app.location': ::this.onLocationChanged,
            'app.prms.id': ::this.onIdChanged,
            'app.prms.id_hotspot': ::this.onIdChanged,
            'loader.isShown': ::this.loaderIsDisplayed
        };
    }

    init() {
        this.layout = new Layout();
        this.loader = new Loader();

        return this.layout.init();
    }

    onIdChanged(id, prevId) {
        const location = this.getState().get('app').get('location');
        if (id !== prevId && id && prevId && this.location === location) {
            this.routing(location, true);
        }
    }

    // onIdHotspotChanged(id, prevId) {
    //     const location = this.getState().get('app').get('location');
    //     if (id !== prevId && id && prevId && this.location === location) {
    //         this.routing(location, true);
    //     }
    // }

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
            case HOMEPAGE : page = new HomepageContainer(); break;
            case PARADE_DETAIL : page = new ParadeDetailContainer(); break;
            case PARADE_EXPERIENCE_HOTSPOT : page = new ExperiencePageContainer(); break;
            case NOT_FOUND : page = new NotFoundContainer(); break;
            default: page = new AbstractPageComponent();
        }

        if (page === null) {
            console.error('Error: page is null');
            return;
        }

        this.oldPage = this.page;
        this.page = page;

        // Have to do it here!
        // SPECIAL CASES
        if (fromSamePage && location === PARADE_DETAIL) {
            this.oldPage.hide()
                .then(() => {
                    this.oldPage.dispose();
                    this.oldPage = null;

                    // Init the next page now
                    this.page.init().then(() => {
                        this.layout.triggerResize();

                        // Meta
                        this.layout.setMeta();
                    });
                });

            return;
        }

        // Init the next page now
        console.log('INIT PAGE', this.page);
        this.page.init().then(() => {
            // Resize the current page for position
            // this.page.resize();
            this.layout.triggerResize();

            // Meta
            this.layout.setMeta();

            // If there was data already, we are not waiting for a loader screen to finish
            // we show it now!

            // if (hasData) {
            //     this.page.show().then(() => {
            //         if (!this.getState().get('app').get('appLoaded')) this.dispatch(setAppLoaded(true));
            //     });
            // }
        });
    }

    loaderIsDisplayed(isShown) {
        if (!isShown && this.page && !this.page.getComponent().states.isShown) {
            console.log('loaderIsDisplayed');
            // Hide current
            let hideNow = true;

            // exceptions
            if (this.prevLocation === PARADE_DETAIL && this.location === HOMEPAGE) hideNow = false;
            // console.log('this.prevLocation', this.prevLocation, 'this.location', this.location, 'hideNow', hideNow);
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

                // chechout hash and trigger custom action
                const hash = this.getState().get('app').get('hash');

                if (hash) {
                    switch (hash) {
                        case 'search': this.dispatch(showModal(SEARCH_MODAL)); break;
                        case 'about': this.dispatch(showModal(ABOUT_MODAL)); break;
                        default: break;
                    }
                }

                // set the hash back to null
                this.dispatch(setHash(null));

                // at this point, dispose
                if (this.oldPage && !hideNow) {
                    console.log('dispose again?');
                    this.oldPage.dispose();
                    this.oldPage = null;
                }
            });

            // show layout
            this.layout.show();
        }
    }

}

export default App;
