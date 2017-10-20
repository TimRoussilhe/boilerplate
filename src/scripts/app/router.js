import page from 'page';
import store from 'store';
import routes from 'routes/routes.json';

// Actions
import {navigate, setRoutes} from 'containers/app/actions';
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

import {
	HOMEPAGE,
	ABOUT,
	NOT_FOUND,
} from 'constants/locations';

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


const routesFn = {
	ROOT: (ctx) => {
		// Roots redirect to the current lang
		// const lang = store.getState().get('app').get('lang');
		// page('/');
		// store.dispatch(navigate(HOMEPAGE, ctx.params));
	},
	HOMEPAGE: (ctx) => {
		console.log('index navigate');
		store.dispatch(navigate(HOMEPAGE, ctx.params));
	},
	ABOUT: (ctx) => {
		console.log('about navigate');
		store.dispatch(navigate(ABOUT, ctx.params));
	},
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
	NOT_FOUND: (ctx) => {
		console.log('404!');
		store.dispatch(navigate(NOT_FOUND, ctx.params));
	},
};

export function initRouter() {

	return new Promise((resolve, reject) => {

		// // store.dispatch(setRoutes(data.routes));
		store.dispatch(setRoutes(routes));

		//  // Set Cities
		// store.dispatch(setListCities(LIST_CITIES));
		// store.dispatch(setCurrentCity(data.global.current_city));

		// // Set Globals
		// store.dispatch(setLoaderData(data.global.loader));
		// store.dispatch(setSidebarData(data.global.sidebar));
		// store.dispatch(setFooterData(data.global.footer));
		// store.dispatch(setModalsData(data.global.modals));
		// store.dispatch(setUIData(data.global.ui));
		// store.dispatch(setMeta(data.global.default.meta, true));

		// Setup routes dynamically
		for (let key in routes) {

			if (!routes.hasOwnProperty(key)) continue;
			let route = routes[key];

			page(route.url, preRouting, (ctx) => {
				routesFn[route.id](ctx);
			});

		}

		// // Roots redirect to the current lang
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
