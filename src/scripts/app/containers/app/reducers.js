import {
    SET_QUERY,
    SET_ROUTES,
    SET_META,
    NAVIGATION,
    SET_HASH,
    CHANGE_LANG,
    SET_UI,
	APP_LOADED
} from './constants';

import {
    LANGS
} from 'constants/langs';

import {Record, Map, fromJS} from 'immutable';

const InitialState = Record({
    appLoaded: false,
    lang: document.documentElement.getAttribute('lang') || 'en-US',
    location: null,
    ui: null,
    hash: null,
    query: fromJS({}),
    prms: fromJS({
        id: null,
        end_point: null
    }),
    routes: new Map({}),
    meta: fromJS({
        title: null,
        default_title: null,
        description: null,
        default_description: null
    })
});

const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const app = (state = initialState, action) => {
    switch (action.type) {
        case SET_META: {
            // Set default meta
            if (action.isDefault) {
                const meta = {};
                meta.default_title = action.meta.title;
                meta.default_description = action.meta.description;

                state = state.set('meta', fromJS(meta));
            }

            let stateMeta = state.get('meta');

            const defaultTitle = stateMeta.default_title;
            const defaultDescription = stateMeta.default_description;
            const title = action.meta && action.meta.title ? action.meta.title : defaultTitle;
            const description = action.meta && action.meta.description ? action.meta.description : defaultDescription;

            stateMeta = stateMeta.set('title', title);
            stateMeta = stateMeta.set('description', description);

            return state.set('meta', stateMeta);
        }
        case SET_UI: {
            return state.set('ui', fromJS(action.data));
        }
        case SET_HASH: {
            return state.set('hash', action.hash);
        }
        case SET_ROUTES: {
            return state.set('routes', new Map(fromJS(action.routes)));
        }
        case SET_QUERY: {
            return state.set('query', fromJS(action.query));
        }
        case NAVIGATION: {
            state = state.set('prms', fromJS(action.params));
            return state.set('location', action.location);
        }
        case APP_LOADED: {
            return state.set('appLoaded', action.appLoaded);
        }
        case CHANGE_LANG: {
            if (LANGS.indexOf(action.lang) > -1) return state.set('lang', action.lang);
            return state;
        }
        default: {
            return state;
        }
    }
};

export default app;
