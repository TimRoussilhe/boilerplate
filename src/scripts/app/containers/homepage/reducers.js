import {
    LOADED_INTRO_HOMEPAGE,
    SET_INTRO_LIST_HOMEPAGE
} from './constants';

import {Record, Map} from 'immutable';

const InitialState = Record({
    intro_list: null
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const homepage = (state = initialState, action) => {
    switch (action.type) {
        case SET_INTRO_LIST_HOMEPAGE: {
            // only set once
            return state.get('intro_list') ? state : state.set('intro_list', new Map(action.list));
        }
        case LOADED_INTRO_HOMEPAGE: {
            return state.setIn(['intro_list', action.id], true);
        }
        default: {
            return state;
        }
    }
};

export default homepage;
