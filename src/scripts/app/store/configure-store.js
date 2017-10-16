import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from 'reducers';
import {createLogger} from 'redux-logger';
import {responsiveStoreEnhancer} from 'redux-responsive';
import {Map, Iterable} from 'immutable';

const USE_DEV_TOOLS =
	process.env.DEV &&
	process.env.IS_BROWSER &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const stateTransformer = (state) => {
	if (Iterable.isIterable(state)) return state.toJS();
	return state;
};

export default function configureStore(options = {}) {
	const {
		initialState = Map(),
	} = options;

	const middlewares = [];

	if (USE_DEV_TOOLS) {
		// middlewares.push(createLogger({stateTransformer}));
	}

	const composeEnhancers = USE_DEV_TOOLS ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
		compose;

	const store = createStore(rootReducer, initialState, composeEnhancers(
		responsiveStoreEnhancer,
		applyMiddleware(...middlewares)
	));

	return store;
}
