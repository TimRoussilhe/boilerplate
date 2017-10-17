import {
	SET_ROUTES,
	SET_QUERY,
	SET_META,
	SET_HASH,
	SET_UI,
	APP_LOADED,
	CHANGE_LANG,
	NAVIGATION,
} from './constants';

export function navigate(location, params = {}) {
	return {
		type: NAVIGATION,
		location: location,
		params: params,
	};
}

export function setMeta(meta = null, isDefault = false) {
	return {
		type: SET_META,
		meta: meta,
		isDefault: isDefault,
	};
}

export function setHash(hash) {
	return {
		type: SET_HASH,
		hash: hash || null,
	};
}

export function setUIData(data) {
	return {
		type: SET_UI,
		data: data,
	};
}

export function setQuery(query) {
	return {
		type: SET_QUERY,
		query: query || {},
	};
}

export function setRoutes(routes) {
	return {
		type: SET_ROUTES,
		routes: routes,
	};
}

export function setAppLoaded(appLoaded) {
	return {
		type: APP_LOADED,
		appLoaded: appLoaded,
	};
}

export function setLang(lang) {
	return {
		type: CHANGE_LANG,
		lang: lang,
	};
}
