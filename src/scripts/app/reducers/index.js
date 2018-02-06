import {combineReducers} from 'redux';
import {createResponsiveStateReducer} from 'redux-responsive';

// import layout from 'containers/layout/reducers';
// import loader from 'containers/loader/reducers';
import app from 'containers/app/reducers';

const rootReducer = combineReducers({
	app,
	browser: createResponsiveStateReducer({
		mobile: 640,
		tablet: 768,
		tabletH: 1024,
		desktop: 1280,
		desktopM: 1440,
		desktopL: 1680,
		desktopXL: 1920,
	}, {
		extraFields: () => ({
			width: window.innerWidth,
			height: window.innerHeight,
		}),
	}),
});

export default rootReducer;
