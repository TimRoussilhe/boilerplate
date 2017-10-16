import {
    SET_DATA_LOADER,
    SET_PCT_LOADING,
    SHOW_LOADER,
    SHOWN_LOADER,
    HIDE_LOADER,
    HIDDEN_LOADER,
    SET_TYPE_LOADER
} from './constants';

import {Record, fromJS} from 'immutable';

const InitialState = Record({
    type: 'main',
    isLoading: false,
    isShown: false,
    pct: 0,

    // specific data
    data: null
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const loader = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_LOADER: {
            return state.set('data', fromJS(action.data));
        }
        case SHOW_LOADER: {
            if (action.typeLoader) state = state.set('type', action.typeLoader);
            state = state.set('pct', 0); // reset
            return state.set('isLoading', true);
        }
        case SHOWN_LOADER: {
            return state.set('isShown', true);
        }
        case HIDE_LOADER: {
            return state.set('isLoading', false);
        }
        case HIDDEN_LOADER: {
            return state.set('isShown', false);
        }
        case SET_TYPE_LOADER: {
            return state.set('type', action.typeLoader);
        }
        case SET_PCT_LOADING: {
            return state.set('pct', action.pct);
        }
        default: {
            return state;
        }
    }
};

export default loader;
