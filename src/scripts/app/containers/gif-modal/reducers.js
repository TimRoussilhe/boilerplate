import {
    SET_CITY_SEARCH
} from './constants';

import {Record} from 'immutable';

const InitialState = Record({
    city: null
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const gif = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY_SEARCH: {
            return state.set('city', action.city);
        }
        default: {
            return state;
        }
    }
};

export default gif;
