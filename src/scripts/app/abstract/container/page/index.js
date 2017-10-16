import AbstractContainer from 'abstract/container';

// Constants
import {END_POINT} from 'constants/api';
import {BAR_LOADER} from 'containers/loader/constants';

// Utils
import {loadJSON} from 'utils/load';

// Actions
import {setMeta} from 'containers/app/actions';

/**
 * PageContainer: Defines a page container
 * @extends AbstractContainer
 * @constructor
 */
class PageContainer extends AbstractContainer {

    constructor(options) {
        super(options);
        this.TYPE_LOADER = BAR_LOADER;

        // this.watchers = {
        //     'loader.isShown': this._isLoaderShown
        // };
    }

    // to override if needed
    fetchData() {
        console.log('PAge:fetchData');
        const endPoint = this.getState().get('app').get('prms').get('end_point');

        if (!endPoint) {
            this.promises.data.resolve();
            return;
        }

        this.subscribe({
            path: 'loader.isShown',
            cb: ::this._isLoaderShown
        });

        // display a loader
        this.showLoader(this.TYPE_LOADER);

        // loadJSON(`${END_POINT}${endPoint}`).then((data) => {
        //     if (!data) {
        //         console.info('data are empty', this);
        //         this.promises.data.resolve();
        //         return;
        //     }

        //     this.data = data;
        //     this.loadAssets();
        // });
    }

    _isLoaderShown(isShown) {
        if (isShown && !this.states.isInit) {
            this.unsubscribe('loader.isShown');
            const endPoint = this.getState().get('app').get('prms').get('end_point');

            loadJSON(`${END_POINT}${endPoint}`).then((data) => {
                if (!data) {
                    console.info('data are empty', this);
                    this.promises.data.resolve();
                    return;
                }

                this.data = data;
                this.loadAssets();
            });
        }
    }

    loadAssets() {
        this.promises.data.resolve();
    }

    initData() {
        this.dispatch(setMeta(this.data.meta));
    }

    onInit() {
        // hide loader if there's one
        const isLoading = this.getState().get('loader').get('isLoading');
        if (isLoading) this.hideLoader();

        super.onInit();
    }

}

export default PageContainer;
