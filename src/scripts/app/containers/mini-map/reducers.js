import {
    ZOOM_IN,
    ZOOM_OUT,
    SHOW_HOTSPOTS,
    HIDE_HOTSPOTS,
    TOGGLE_HOTSPOTS
} from './constants';

import {Record} from 'immutable';

const InitialState = Record({
    isMapZoomed: false,
    zoomedCity: null,
    hotspotsShown: false
});
const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const minimap = (state = initialState, action) => {
    switch (action.type) {
        case ZOOM_IN: {
            return state.set('zoomedCity', action.city);
        }
        case ZOOM_OUT: {
            return state.set('zoomedCity', null);
        }
        case SHOW_HOTSPOTS: {
            return state.set('hotspotsShown', true);
        }
        case HIDE_HOTSPOTS: {
            return state.set('hotspotsShown', false);
        }
        case TOGGLE_HOTSPOTS: {
            return state.set('hotspotsShown', !state.get('hotspotsShown'));
        }
        default: {
            return state;
        }
    }
};

export default minimap;
