import {
    SET_TYPE_MODAL,
    SET_DATA_MODAL,
    SHOW_MODAL,
    HIDE_MODAL
} from './constants';

import {Record, fromJS} from 'immutable';

const InitialState = Record({
    type: null,
    isShown: false,
    data: null
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const modal = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL: {
            if (action.typeModal) state = state.set('type', action.typeModal);
            return state.set('isShown', true);
        }
        case HIDE_MODAL: {
            return state.set('isShown', false);
        }
        case SET_TYPE_MODAL: {
            return state.set('type', action.typeModal);
        }
        case SET_DATA_MODAL: {
            return state.set('data', fromJS(action.data));
        }
        default: {
            return state;
        }
    }
};

export default modal;
