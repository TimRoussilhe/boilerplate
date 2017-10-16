import {combineReducers} from 'redux-immutable';
import {createResponsiveStateReducer} from 'redux-responsive';

import layout from 'containers/layout/reducers';
import loader from 'containers/loader/reducers';
import footer from 'containers/footer/reducers';
import homepage from 'containers/homepage/reducers';
import sidebar from 'containers/sidebar/reducers';
import header from 'containers/header/reducers';
import modal from 'containers/modal/reducers';
import search from 'containers/search-modal/reducers';
import gif from 'containers/gif-modal/reducers';
import ytmodal from 'containers/yt-modal/reducers';
import gmaps from 'containers/parade-detail-gmaps/reducers';
import minimap from 'containers/mini-map/reducers';
import app from 'containers/app/reducers';
import experience from 'containers/experience/reducers';
import cities from './cities';

const rootReducer = combineReducers({
    app,
    layout,
    footer,
    homepage,
    loader,
    gif,
    ytmodal,
    gmaps,
    header,
    modal,
    search,
    minimap,
    sidebar,
    cities,
    experience,
    browser: createResponsiveStateReducer({
        mobile: 640,
        tablet: 768,
        tabletH: 1024,
        desktop: 1280,
        desktopM: 1440,
        desktopL: 1680,
        desktopXL: 1920
        }, {
        extraFields: () => ({
            width: window.innerWidth,
            height: window.innerHeight
        })
    })
});

export default rootReducer;
