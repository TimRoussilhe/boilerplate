import Component from 'abstract/component';
import {showLoader, hideLoader} from 'containers/loader/actions';

/**
 * Container: Handles actions and data for a component
 * @constructor
 */
class AbstractContainer extends Component {

	/**
    * Component asociated to the container
    * @type {Object}
    */
    _component = null;

    /**
    * Component Class
    * @type {Object}
    */
    component = null;

    /**
    * Data Object
    * @type {Object}
    */
    data = null;

    /**
    * Options Object
    * @type {Object}
    */
    options = null;

    constructor(options = {}) {
        super();
        this.options = options;
        this.data = options.data ? options.data : null;
        this.options.actions = options.actions ? options.actions : {};

        this.promises.data = {
            resolve: null,
            reject: null
        };
    }

    getComponent() {
        return this._component;
    }

    initComponent() {
        this.getData().then(() => {
            this.initActions();
            this.initData();

            this.options.data = this.data;
            this._component = new this.component(this.options);
            this._component.init().then(() => {
                this.onInit();
            });
        });
    }

    getData() {
        return new Promise((resolve, reject) => {
            this.promises.data.resolve = resolve;
            this.promises.data.reject = reject;

            this.fetchData();
        });
    }

    fetchData() {
        this.promises.data.resolve();
    }

    // If we went to parse and do something with the data
    initData() {}

    // Reference any actions here to pass to the component after
    initActions() {}

    showLoader(type) {
        this.dispatch(showLoader(type));
    }

    hideLoader() {
        this.dispatch(hideLoader());
    }

    resize() {
        // this.hideLoader();
        return this._component.resize();
    }

    show() {
        // this.hideLoader();
        return this._component.show();
    }

    hide() {
        return this._component.hide();
    }

    dispose() {
        this._component.dispose();
        this._component = null;
        return this;
    }

    reRender() {
        this.hide().then(() => {
            this.dispose();
            this.init().then(() => {
                this.show();
            });
        });
    }
}

export default AbstractContainer;
