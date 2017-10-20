import AbstractContainer from './container';
import store from 'store';

// Constants
// import {END_POINT} from 'constants/api';
// import {BAR_LOADER} from 'containers/loader/constants';

// Utils
// import {loadJSON} from 'utils/load';

// Actions
import {setMeta} from 'containers/app/actions';

// Config
import {JSON_ENDPOINTS} from 'constants/config';

/**
 * PageContainer: Defines a page container
 * @extends AbstractContainer
 * @constructor
 */
class PageContainer extends AbstractContainer {

	constructor(options) {
		super(options);

		// this.watchers = {
		//     'loader.isShown': this._isLoaderShown
		// };
	}

	// to override if needed
	fetchData() {
		// console.log('PAge:fetchData');
		const endPoint = this.options.endPoint;

		if (!endPoint) {
			this.promises.data.resolve();
			return;
		}

		// this.promises.data.resolve();
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: JSON_ENDPOINTS + this.options.endPoint,
			success: (data) => {
				this.data = data;
				this.promises.data.resolve();
			},
			error: (xhr, type) => {
				this.promises.data.reject();
			},
		});


	}

	loadAssets() {
		this.promises.data.resolve();
	}

	initData() {
		store.dispatch(setMeta(this.data.meta));
	}

	onInit() {
		super.onInit();
	}

}

export default PageContainer;
