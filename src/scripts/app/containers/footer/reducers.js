import {
    SET_DATA_FOOTER,
    SHOW_FOOTER,
    HIDE_FOOTER,
    UPDATE_UI_THEME
} from './constants';

import {Record, fromJS} from 'immutable';

const InitialState = Record({
    isShown: false,
    data: null,
    UITheme: 'white'
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const footer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FOOTER: {
            console.log('SHOW_FOOTER Reducer');
            return state.set('isShown', true);
        }
        case HIDE_FOOTER: {
            console.log('HIDE_FOOTER Reducer');
            return state.set('isShown', false);
        }
        case SET_DATA_FOOTER: {
            return state.set('data', fromJS(action.data));
        }
        case UPDATE_UI_THEME: {
            return state.set('UITheme', action.color);
        }
        default: {
            return state;
        }
    }
};

export default footer;
