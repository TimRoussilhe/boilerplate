import {
	SET_QUERY,
	SET_ROUTES,
	SET_META,
	NAVIGATION,
	SET_HASH,
	CHANGE_LANG,
	SET_UI,
	APP_LOADED,
} from './constants';

// import {
// 	LANGS,
// } from 'constants/langs';

const InitialState = {
	routes: [],
	params: null,
	location: null,
};

// const initialState = new InitialState();

// Updates an entity cache in response to any action with response.entities.
export const app = (state = InitialState, action) => {
	switch (action.type) {
	// case SET_META: {
	// 	// Set default meta
	// 	if (action.isDefault) {
	// 		const meta = {};
	// 		meta.default_title = action.meta.title;
	// 		meta.default_description = action.meta.description;

	// 		state = state.set('meta', fromJS(meta));
	// 	}

	// 	let stateMeta = state.get('meta');

	// 	const defaultTitle = stateMeta.default_title;
	// 	const defaultDescription = stateMeta.default_description;
	// 	const title = action.meta && action.meta.title ? action.meta.title : defaultTitle;
	// 	const description = action.meta && action.meta.description ? action.meta.description : defaultDescription;

	// 	stateMeta = stateMeta.set('title', title);
	// 	stateMeta = stateMeta.set('description', description);

	// 	return state.set('meta', stateMeta);
	// }
	// case SET_UI: {
	// 	return state.set('ui', fromJS(action.data));
	// }
	// case SET_HASH: {
	// 	return state.set('hash', action.hash);
	// }
	// case SET_QUERY: {
	// 	return state.set('query', fromJS(action.query));
	// }
	// case APP_LOADED: {
	// 	return state.set('appLoaded', action.appLoaded);
	// }
	// case CHANGE_LANG: {
	// 	if (LANGS.indexOf(action.lang) > -1) return state.set('lang', action.lang);
	// 	return state;
	// }

	case SET_ROUTES: {
		return Object.assign({}, state, {
			routes: action.routes,
		});
	}
	case NAVIGATION: {
		return Object.assign({}, state, {
			params: action.params,
			location: action.location,
		});
	}

	default: {
		return state;
	}
	}
};

export default app;
