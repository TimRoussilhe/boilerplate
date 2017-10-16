import configureStore from 'store/configure-store';
import {setStore, setCompareFn} from 'utils/redux-watch-immutable';
import _ from 'underscore';

const store = configureStore();

// IMPORTANT
const compare = (a, b) => {
	return _.isEqual(a, b);
};

// Config redux watch
setStore(store);
setCompareFn(compare);

export default store;
