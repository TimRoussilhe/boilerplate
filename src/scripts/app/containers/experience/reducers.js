import {
    SET_HOTSPOTS_LIST,
    SET_HOTSPOT_ID,
    SET_HOTSPOT_OPEN_IT,
    SET_IS_SHOWN_HOTSPOT,
    SET_NEXT_HOTSPOT_INIT,
    RESET_HOTSPOTS,
    SET_BACK_BUTTON_URL
} from './constants';

import {Record, List} from 'immutable';

const InitialState = Record({
    openIt: false,
    isShown: false,
    isNextHotspotInit: false,
    hotspot_id: null,
    backButton_url: null,
    hotspots_list: new List([])
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const experience = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOTSPOT_OPEN_IT: {
            return state.set('openIt', action.openIt);
        }
        case SET_NEXT_HOTSPOT_INIT: {
            return state.set('isNextHotspotInit', action.isInit);
        }
        case SET_IS_SHOWN_HOTSPOT: {
            return state.set('isShown', action.isShown);
        }
        case SET_HOTSPOT_ID: {
            return state.set('hotspot_id', action.id);
        }
        case SET_HOTSPOTS_LIST: {
            return state.set('hotspots_list', new List(action.list));
        }
        case RESET_HOTSPOTS: {
            return state.set('hotspot_id', null);
            // return state.set('hotspots_list', new List([]));
        }
        case SET_BACK_BUTTON_URL: {
            return state.set('backButton_url', action.url);
        }
        default: {
            return state;
        }
    }
};

export default experience;
