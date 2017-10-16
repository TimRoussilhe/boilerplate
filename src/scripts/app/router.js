import page from 'page';
// import store from 'store';

// Actions
// import {navigate, setRoutes, setQuery, setMeta, setLang, setUIData, setHash} from 'containers/app/actions';
// import {setLoaderData} from 'containers/loader/actions';
// import {setSidebarData} from 'containers/sidebar/actions';
// import {setFooterData} from 'containers/footer/actions';
// import {setModalsData} from 'containers/modal/actions';
// import {setListCities, setCurrentCity} from 'actions/cities';

// Selectors
// import {getRoute} from 'containers/app/selectors';

// Constants
// import {JSON_DIR, SET_END_POINT, SET_SEARCH_END_POINT} from 'constants/api';
// import {LIST_CITIES} from 'constants/cities';

// import {
// 	HOMEPAGE,
// 	NOT_FOUND,
// 	ABOUT,
// 	PARADE_DETAIL,
// 	PARADE_EXPERIENCE_HOTSPOT,
// 	REDIRECT,
// } from 'constants/locations';

// Utils
// import {loadJSON} from 'utils/load';
// import qs from 'utils/query-string';

// import {setHotspotsList} from 'containers/experience/actions';

const preRouting = (ctx, next) => {
	// // If there's a query string
	// ctx.query = qs.parse(window.location.search.slice(1));

	// store.dispatch(setQuery(ctx.query));

	// // store current hash. Only set if not null to not remove it dureing a redirection
	// if (ctx.hash) store.dispatch(setHash(ctx.hash));

	next();
};

// const _initHotspots = (hotspots) => {
// 	const aHotspots = [];
// 	LIST_CITIES.forEach((city) => {
// 		// now, find the hotspots related
// 		hotspots.forEach((hotspot) => {
// 			if (hotspot.city_id === city) aHotspots.push(hotspot);
// 		});
// 	});

// 	store.dispatch(setHotspotsList(aHotspots));
// };

const routesFn = {
	ROOT: (ctx) => {
		// Roots redirect to the current lang
		// const lang = store.getState().get('app').get('lang');
		// page('/');
	},
	// HOMEPAGE: (ctx) => {
	// 	const appLoaded = store.getState().get('app').get('appLoaded');
	// 	// If coming from an other page, reset the current city to null!
	// 	// if (appLoaded) store.dispatch(setCurrentCity(null));

	// 	store.dispatch(navigate(HOMEPAGE, ctx.params));
	// },
	// PARADE_DETAIL: (ctx) => {
	// 	// set current city
	// 	// store.dispatch(setCurrentCity(ctx.params.id));
	// 	// console.log('ctx.params', ctx.params);
	// 	store.dispatch(navigate(PARADE_DETAIL, ctx.params));
	// },
	// PARADE_EXPERIENCE_HOTSPOT: (ctx) => {
	// 	// set current city
	// 	// store.dispatch(setCurrentCity(ctx.params.id));
	// 	// console.log('ctx.params', ctx.params);
	// 	store.dispatch(navigate(PARADE_EXPERIENCE_HOTSPOT, ctx.params));
	// },
	// REDIRECT: (ctx) => {
	// 	// set current city
	// 	// store.dispatch(setCurrentCity(ctx.params.id));
	// 	// console.log('ctx.params', ctx.params);
	// 	page(ctx.params.redirect);
	// },
	NOT_FOUND: (ctx) => {
		console.log('404!');
		// store.dispatch(navigate(NOT_FOUND, ctx.params));
	},
};

// Load app.json to get all the routes + some global variables/copy
// Then dynamically create routes using page();
// export function initRouter() {

// 	return new Promise((resolve, reject) => {
// 		// const urlConfig = `${JSON_DIR}${'/config.json'}`;
// 		const urlConfig = '/api/manifest/?format=json&tp=' + Date.now();

// 		// Load config first
// 		loadJSON(urlConfig).then((config) => {
// 			if (!config) {
// 				reject();
// 				return;
// 			}

// 			const lang = store.getState().get('app').get('lang');
// 			// console.log('config', config);

// 			// Set endPoints
// 			// SET_END_POINT(config.endpoint);
// 			// SET_SEARCH_END_POINT(config[lang].search);

// 			// store.dispatch(setLang(config.lang));
// 			console.log('END_POINT', config.endpoint);

// 			// Load app.json
// 			const url = config[lang].app;

// 			loadJSON(url).then((data) => {
// 				if (!data) {
// 					reject();
// 					return;
// 				}

// 				// console.log('data', data);

// 				// Set routes

// 				// EXCEPTION ROUTES
// 				const routes_ = {};
// 				for (const key in data.routes) {
// 					if (data.routes[key]) {
// 						const value = data.routes[key];
// 						routes_[key] = value;
// 						if (value.location === PARADE_DETAIL) {
// 							const key_ = key.replace('/' + lang, '');
// 							const value_ = {
// 								location: REDIRECT,
// 								params: {
// 									redirect: key,
// 								},
// 							};
// 							routes_[key_] = value_;
// 						}
// 					}
// 				}

// 				console.log('routes_', routes_);

// 				// store.dispatch(setRoutes(data.routes));
// 				store.dispatch(setRoutes(routes_));

// 				// Set Cities
// 				// store.dispatch(setListCities(LIST_CITIES));
// 				// store.dispatch(setCurrentCity(data.global.current_city));

// 				// Set Globals
// 				// store.dispatch(setLoaderData(data.global.loader));
// 				// store.dispatch(setSidebarData(data.global.sidebar));
// 				// store.dispatch(setFooterData(data.global.footer));
// 				// store.dispatch(setModalsData(data.global.modals));
// 				// store.dispatch(setUIData(data.global.ui));
// 				// store.dispatch(setMeta(data.global.default.meta, true));

// 				// Set hotposts
// 				// _initHotspots(data.hotspots);

// 				// Setup routes dynamically
// 				const routes = store.getState().get('app').get('routes');

// 				routes.entrySeq().forEach(([key, value]) => {
// 					page(key, preRouting, (ctx) => {
// 						ctx.params = value.get('params') ? value.get('params').toJS() : {};
// 						routesFn[value.get('location')](ctx);
// 					});
// 				});

// 				// Roots redirect to the current lang
// 				page('/', preRouting, routesFn.ROOT);

// 				// 404
// 				page('*', preRouting, routesFn.NOT_FOUND);

// 				resolve();
// 			});
// 		});
// 	});

// }

export function initRouter() {

	return new Promise((resolve, reject) => {

		// Roots redirect to the current lang
		page('/', preRouting, routesFn.ROOT);

		// 404
		page('*', preRouting, routesFn.NOT_FOUND);

		resolve();

	});

}


export function configureRoute(options = {}) {
	if (options.base) page.base(options.base);
	return page;
}
