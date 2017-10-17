import AbstractContainer from './container';
import store from 'store';

// Constants
// import {END_POINT} from 'constants/api';
// import {BAR_LOADER} from 'containers/loader/constants';

// Utils
// import {loadJSON} from 'utils/load';

// Actions
// import {setMeta} from 'containers/app/actions';

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
		const endPoint = store.getState().app.endPoint;

		if (!endPoint) {
			this.promises.data.resolve();
			return;
		}

		// this.subscribe({
		// 	path: 'loader.isShown',
		// 	cb: () => this._isLoaderShown(),
		// });

		// // display a loader
		// this.showLoader(this.TYPE_LOADER);

		// // loadJSON(`${END_POINT}${endPoint}`).then((data) => {
		// //     if (!data) {
		// //         console.info('data are empty', this);
		// //         this.promises.data.resolve();
		// //         return;
		// //     }

		// //     this.data = data;
		// //     this.loadAssets();
		// // });
	}

	loadAssets() {
		this.promises.data.resolve();
	}

	initData() {
		// this.dispatch(setMeta(this.data.meta));
	}

	onInit() {
		super.onInit();
	}

}

export default PageContainer;
