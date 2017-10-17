import store from 'store';

export const getRoute = (location, params = null) => {
	const routes = store.getState().app.routes;
	// console.log('routes', routes);

	let route = null;

	for (let key in routes) {

		if (!routes.hasOwnProperty(key)) continue;

		let route = routes[key];
		if (route.id === location) route = route;
	}

	// routes.entrySeq().forEach(([key, value]) => {
	// 	// all pages
	// 	if (!route && value.get('location') === location && (!params ||
	//           (params.id && params.id === value.get('params').get('id')))) {
	// 		route = {url: key, info: value.toJS()};
	// 	}

	// 	// experience
	// 	if (!route && value.get('location') === location && (params && params.id_hotspot &&
	//           params.id_hotspot === value.get('params').get('id_hotspot'))) {
	// 		route = {url: key, info: value.toJS()};
	// 	}
	// });

	return route;
};
