import AbstractPageContainer from 'abstract/container/page';
import ExperiencePage from 'components/experience-page/ExperiencePage';

// Actions
import {setHotspotId, setIsShownHotspot} from 'containers/experience/actions';
import {zoomInCity} from 'containers/mini-map/actions';
import {setCurrentCity} from 'actions/cities';

// Selector
import {getHotspotData} from 'containers/experience/selectors';

// Constant
import {PARADE_EXPERIENCE_HOTSPOT} from 'constants/locations';

class ExperiencePageContainer extends AbstractPageContainer {

    component = ExperiencePage;

    constructor(options) {
        super(options);

        this.watchers = {
            'experience.isNextHotspotInit': ::this._onHotspotInit
        };
    }

    fetchData() {
        const currentHotspotId = this.getState().get('app').get('prms').get('id_hotspot');
        this.data = getHotspotData(currentHotspotId);
        this.promises.data.resolve();
    }

    onInit() {
        this.dispatch(zoomInCity(this.data.city_id));
        this.dispatch(setCurrentCity(this.data.city_id));
        this.dispatch(setHotspotId(this.data.id));

        const experienceShown = this.getState().get('experience').get('isShown');
        if (experienceShown) {
            this.unsubscribe('experience.isNextHotspotInit');
            super.onInit();
        }
    }

    show() {
        this.dispatch(setIsShownHotspot(true));
        return super.show();
    }

    hide() {
        console.log('>> hide');
        const location = this.getState().get('app').get('location');
        if (location !== PARADE_EXPERIENCE_HOTSPOT) {
            console.log('hostpos null');
            this.dispatch(setIsShownHotspot(false));
        }

        return super.hide();
    }

    _onHotspotInit(isInit) {
        const currentHotspotId = this.getState().get('experience').get('hotspot_id');
        if (isInit && currentHotspotId === this.data.id && currentHotspotId !== null) {
            this.unsubscribe('experience.isNextHotspotInit');
            super.onInit();
        }
    }
}

export default ExperiencePageContainer;
