import {
    SET_DATA_SIDEBAR,
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    TOGGLE_SIDEBAR,
    HOVER_CITY,
    BLOCK_SIDEBAR,
    UNBLOCK_SIDEBAR
} from './constants';

import {Record, fromJS} from 'immutable';

const InitialState = Record({
    isShown: false,
    // specific data
    data: null,
    nextCity: null,
    hoverCity: null,
    blocked: false
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const sidebar = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR: {
            return state.set('isShown', true);
        }
        case HIDE_SIDEBAR: {
            return state.set('isShown', false);
        }
        case TOGGLE_SIDEBAR: {
            return state.set('isShown', !state.get('isShown'));
        }
        case SET_DATA_SIDEBAR: {
            return state.set('data', fromJS(action.data));
        }
        case HOVER_CITY: {
            return state.set('hoverCity', fromJS(action.city));
        }
        case BLOCK_SIDEBAR: {
            return state.set('blocked', true);
        }
        case UNBLOCK_SIDEBAR: {
            return state.set('blocked', false);
        }
        default: {
            return state;
        }
    }
};

export default sidebar;
