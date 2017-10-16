import Watcher from 'abstract/watcher';

import MainLoader from 'components/main-loader/MainLoader';
import PageLoader from 'components/page-loader/PageLoader';
import BarLoader from 'components/bar-loader/BarLoader';

import {
    MAIN_LOADER,
    PAGE_LOADER,
    BAR_LOADER
} from './constants';

class Loader extends Watcher {

    constructor(options) {
        super(options);

        this.loader = null;

        this.mainLoadedOnce = false;

        this.watchers = {
            'loader.isLoading': ::this.toggleDisplayLoader
        };

        // this.setLoaderType(options.typeLoader);
    }

    newLoader(type = MAIN_LOADER) {
        if (this.loader) {
            this.loader.dispose();
        }
        switch (type) {
            case MAIN_LOADER: this.loader = new MainLoader({data: this._getMainLoaderData()}); break;
            case PAGE_LOADER: this.loader = new PageLoader(); break;
            case BAR_LOADER: this.loader = new BarLoader(); break;
            default: this.loader = new BarLoader(); break;
        }
    }

    _getMainLoaderData() {
        const data = this.getState().get('loader').get('data').get('main').toJS();
        return data;
    }

    toggleDisplayLoader(isLoading) {
        if (isLoading) {
            // get current typeLoader
            let type = this.getState().get('loader').get('type');

            // Force to main one if app not loaded yet
            if (!this.getState().get('app').get('appLoaded') && !this.mainLoadedOnce) type = MAIN_LOADER;

            this.mainLoadedOnce = true;

            // display loader
            this.newLoader(type);

            this.loader.init().then(() => {
                this.loader.show();
            });
        } else {
            if (!this.loader) return;
            this.loader.hide().then(() => {
                this.loader.dispose();
                this.loader = null;
            });
        }
    }

}

export default Loader;
