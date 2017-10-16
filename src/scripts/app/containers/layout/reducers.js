import {
    SCROLL,
    UI_NAV_HIDE,
    UI_NAV_SHOW,
    UI_NAV_TOGGLE,
    UI_SHOW_LOADING,
    UI_HIDE_LOADING,
    SCROLL_ENABLED,
    SCROLL_DISABLED,
    MODAL_SCROLL
} from './constants';

import {Record, Map} from 'immutable';

const InitialState = Record({
    scroll: new Map({
        x: 0,
        y: 0
    }),
    scrollEnabled: false,
    scrollDisabled: false,
    modalScroll: false,
    navOpen: false,
    showLoader: false
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const layout = (state = initialState, action) => {
    switch (action.type) {
        case SCROLL: {
            return state.set('scroll', new Map(action.scroll));
        }
        case SCROLL_ENABLED: {
            return state.set('scrollEnabled', action.scrollState);
        }
        case SCROLL_DISABLED: {
            return state.set('scrollDisabled', action.scrollState);
        }
        case MODAL_SCROLL: {
            return state.set('modalScroll', action.modalState);
        }
        case UI_NAV_SHOW: {
            return state.set('navOpen', true);
        }
        case UI_NAV_HIDE: {
            return state.set('navOpen', false);
        }
        case UI_NAV_TOGGLE: {
            return state.set('navOpen', !state.get('navOpen'));
        }
        case UI_SHOW_LOADING: {
            return state.set('showLoader', true);
        }
        case UI_HIDE_LOADING: {
            return state.set('showLoader', false);
        }
        default: {
            return state;
        }
    }
};

export default layout;
