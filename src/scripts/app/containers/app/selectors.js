import store from 'store';

export const getRoute = (location, params = null) => {
	const routes = store.getState().get('app').get('routes');

	let route = null;

	routes.entrySeq().forEach(([key, value]) => {
		// all pages
		if (!route && value.get('location') === location && (!params ||
            (params.id && params.id === value.get('params').get('id')))) {
			route = {url: key, info: value.toJS()};
		}

		// experience
		if (!route && value.get('location') === location && (params && params.id_hotspot &&
            params.id_hotspot === value.get('params').get('id_hotspot'))) {
			route = {url: key, info: value.toJS()};
		}
	});

	return route;
};
