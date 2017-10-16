import AbstractContainer from 'abstract/container';
import HotspotPhotoItem from 'components/hotspot-photo-item/HotspotPhotoItem';

// Constants
import {BAR_LOADER} from 'containers/loader/constants';

// Actions
// import {loadedIntroHomepage} from 'containers/homepage/actions';

// Utils
import {getAssetByDevice} from 'utils/misc';
import {loadAsset} from 'utils/load';

// Selectors
// import {isAssetLoaded} from 'containers/homepage/selectors';

class HotspotPhotoItemContainer extends AbstractContainer {
    component = HotspotPhotoItem;

    fetchData() {
        // get the correct size depending of the device
        if (!this.data.asset) this.data.asset = getAssetByDevice(this.data.bg);

        // if already loaded, no need
        // const isLoaded = isAssetLoaded(this.data.id);

        // load the video all the time
        if (this.data.isLoaded) {
            super.fetchData();
            return;
        }

        // show the bar loader if there's no loader at this point (we come from an other intro homepage)
        const isLoading = this.getState().get('loader').get('isLoading');
        if (!isLoading) this.showLoader(BAR_LOADER);

        loadAsset(this.data.asset).then((asset) => {
            if (!isLoading) this.hideLoader();

            this.data.isLoaded = true;
            // this.dispatch(loadedIntroHomepage(this.data.id));

            // all good, now we can resolve the current promise
            super.fetchData();
        });
    }

}

export default HotspotPhotoItemContainer;
