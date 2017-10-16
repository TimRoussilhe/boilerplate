import AbstractContainer from 'abstract/container';
import HomepageIntroPage from 'components/homepage-intro-page/HomepageIntroPage';

// Constants
import {BAR_LOADER} from 'containers/loader/constants';
import {ASSET_DIR} from 'constants/api';
import {SEARCH_MODAL, YT_MODAL} from 'containers/modal/constants';
import {PARADE_DETAIL} from 'constants/locations';

// Actions
import {showModal} from 'containers/modal/actions';
import {loadedIntroHomepage} from 'containers/homepage/actions';
import {setDataYTModal, setOpenNextTimeYTModal} from 'containers/yt-modal/actions';
import {setHotspotOpenIt} from 'containers/experience/actions';

// Utils
import {getAssetByDevice, getDate} from 'utils/misc';
import {loadAsset} from 'utils/load';

// Selectors
import {getRoute} from 'containers/app/selectors';
import {isAssetLoaded} from 'containers/homepage/selectors';
import {getNextCities} from 'selectors/cities';

class HomepageIntroPageContainer extends AbstractContainer {
    component = HomepageIntroPage;

    fetchData() {
        // get the correct size depending of the device
        if (!this.data.asset) this.data.asset = getAssetByDevice(this.data.bg);
        // else console.log('no need to load, asset is here', this.data.asset); // console.log('!!this.data.asset', this.data.asset);

        const currentCity = this.getState().get('cities').get('current');
        if (currentCity) {
            // add route
            this.data.route = getRoute(PARADE_DETAIL, {id: this.data.id});
        }

        // if already loaded, no need
        const isLoaded = isAssetLoaded(this.data.id);

        // load the video all the time
        if (isLoaded) {
            super.fetchData();
            return;
        }

        // show the bar loader if there's no loader at this point (we come from an other intro homepage)
        const isLoading = this.getState().get('loader').get('isLoading');
        if (!isLoading) this.showLoader(BAR_LOADER);

        loadAsset(this.data.asset).then((asset) => {
            if (!isLoading) this.hideLoader();

            // this.data.isLoaded = true;
            this.dispatch(loadedIntroHomepage(this.data.id));

            // all good, now we can resolve the current promise
            super.fetchData();
        });
    }

    initData() {
        if (this.data.date) {
            const date = new Date(parseInt(this.data.date, 10));
            const locale = this.getState().get('app').get('lang');
            this.data.dateObject = getDate(locale, date);
        }

        // has past?
        this.data.hasPast = parseInt(this.data.date, 10) < Date.now();

        // is landing page ?
        const currentCity = this.getState().get('cities').get('current');
        this.data.isLandingPage = currentCity === null;

        // Next city
        const nextCity = getNextCities();
        this.data.nextCity = getRoute(PARADE_DETAIL, {id: nextCity});
        // console.log('this.data.isLandingPage', this.data.isLandingPage);
        // console.log('this.data.nextCity', this.data.nextCity);

        if (!this.data.hasPast) {
            this.data.has_experience = false;
        }

        // if cities, adjust data regarding the CMS
        // if (this.data.statement) {
        //     this.data.author = this.data.statement.author;
        //     this.data.description = this.data.statement.line01;
        //     if (this.data.statement.line02) this.data.description += ' ' + this.data.statement.line02;
        // }
        if (this.data.intro_description) {
            // this.data.author = this.data.statement.author;
            this.data.description = this.data.intro_description;
            // if (this.data.statement.line02) this.data.description += ' ' + this.data.statement.line02;
        }
        console.log('this.data --------------', this.data);

        super.initData();
    }

    initActions() {
        this.options.actions.findYourParade = ::this._findYourParadeAction;
        this.options.actions.showTrailer = ::this._showTrailer;
    }

    _findYourParadeAction() {
        this.dispatch(showModal(SEARCH_MODAL));
    }

    _showTrailer() {
        // this.dispatch(setOpenNextTimeYTModal(true));
        this.dispatch(setHotspotOpenIt(true));
        // this.dispatch(showModal(YT_MODAL));
    }
}

export default HomepageIntroPageContainer;
