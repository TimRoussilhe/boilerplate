import {
    RESET_GMAPS,
    SHOW_GMAPS,
    HIDE_GMAPS,
    INIT_GMAPS,
    IS_DISPOSED_GMAPS,
    RESET_POSITION_GMAPS,
    GET_SCRIPT_GMAPS,
    HAS_SCRIPT_GMAPS,
    IS_INIT_POSITION_GMAPS,
    INIT_POSITION_GMAPS,
    DISPOSE_GMAPS,
    IS_INIT_GMAPS
} from './constants';

import {Record, fromJS} from 'immutable';

const InitialState = Record({
    isGettingScript: false,
    hasScript: false,
    isInitializing: false,
    isInit: false,
    isInitializingPosition: false,
    isInitPosition: false,
    isShown: false,
    data: null
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const gmaps = (state = initialState, action) => {
    switch (action.type) {
        case INIT_GMAPS: {
            // if (action.data) state = state.set('data', fromJS(action.data));
            state = state.set('isInitializing', true);
            return state.set('isInit', false);
        }
        case GET_SCRIPT_GMAPS: {
            return state.set('isGettingScript', true);
        }
        case HAS_SCRIPT_GMAPS: {
            state = state.set('isGettingScript', false);
            return state.set('hasScript', true);
        }
        case INIT_POSITION_GMAPS: {
            state = state.set('data', fromJS(action.data));
            state = state.set('isInitPosition', false);
            return state.set('isInitializingPosition', true);
        }
        case IS_INIT_POSITION_GMAPS: {
            state = state.set('isInitializingPosition', false);
            return state.set('isInitPosition', true);
        }
        case IS_INIT_GMAPS: {
            state = state.set('isInitializing', false);
            return state.set('isInit', true);
        }
        case IS_DISPOSED_GMAPS: {
            return state.set('isInit', false);
        }
        case SHOW_GMAPS: {
            // state = state.set('data', fromJS(action.data));
            return state.set('isShown', true);
        }
        case HIDE_GMAPS: {
            return state.set('isShown', false);
        }
        case RESET_POSITION_GMAPS: {
            state = state.set('isInitializingPosition', false);
            return state.set('isInitPosition', false);
        }
        case DISPOSE_GMAPS: {
            return state.set('data', null);
        }
        case RESET_GMAPS: {
            state = state.set('isInitializingPosition', false);
            state = state.set('isInitializing', false);
            state = state.set('isInitPosition', false);
            state = state.set('isShown', false);
            return state.set('isInit', false);
        }
        default: {
            return state;
        }
    }
};

export default gmaps;
