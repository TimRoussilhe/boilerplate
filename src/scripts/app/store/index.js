// import configureStore from 'store/configure-store';
// import {setStore, setCompareFn} from 'utils/redux-watch-immutable';
// import _ from 'underscore';

// const store = configureStore();

// // IMPORTANT
// const compare = (a, b) => {
// 	return _.isEqual(a, b);
// };

// // Config redux watch
// setStore(store);
// setCompareFn(compare);

// export default store;

import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from 'reducers';
// import {createLogger} from 'redux-logger';
import {responsiveStoreEnhancer} from 'redux-responsive';

const USE_DEV_TOOLS =
	process.env.DEV &&
	process.env.IS_BROWSER &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const stateTransformer = (state) => {
// 	if (Iterable.isIterable(state)) return state.toJS();
// 	return state;
// };

const middlewares = [];

const composeEnhancers = USE_DEV_TOOLS ?
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
	compose;

const store = createStore(rootReducer, {}, composeEnhancers(
	responsiveStoreEnhancer,
	applyMiddleware(...middlewares)
));

export default store;
