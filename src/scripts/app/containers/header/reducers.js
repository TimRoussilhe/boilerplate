import {
    SHOW_HEADER,
    HIDE_HEADER,
    SHOW_LOGO,
    HIDE_LOGO,
    TOGGLE_HAMBURGER_MENU,
    SHOW_HAMBURGER_MENU,
    HIDE_HAMBURGER_MENU
} from './constants';

import {Record} from 'immutable';

const InitialState = Record({
    isShown: false,
    isLogoShown: true,
    isHamburgerActive: false
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const header = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HEADER: {
            console.log('--SHOW_HEADER');
            return state.set('isShown', true);
        }
        case HIDE_HEADER: {
            console.log('--HIDE_HEADER');
            return state.set('isShown', false);
        }
        case SHOW_LOGO: {
            return state.set('isLogoShown', true);
        }
        case HIDE_LOGO: {
            return state.set('isLogoShown', false);
        }
        case SHOW_HAMBURGER_MENU: {
            return state.set('isHamburgerActive', true);
        }
        case HIDE_HAMBURGER_MENU: {
            return state.set('isHamburgerActive', false);
        }
        case TOGGLE_HAMBURGER_MENU: {
            return state.set('isHamburgerActive', !state.get('isHamburgerActive'));
        }
        default: {
            return state;
        }
    }
};

export default header;
