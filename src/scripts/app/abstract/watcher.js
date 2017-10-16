import store from 'store';
// import watch from 'redux-watch';
// import {Watch} from 'utils/watch';
import {watch} from 'utils/redux-watch-immutable';

class Watcher {

	/**
     * Object as associative array of all <watcher> objects
     * @type {Object}
     */
    _watchers = {};

    set watchers(watchers) {
        for (const objectPath in watchers) {
            if (!watchers[objectPath]) continue;
            this._watchers[objectPath] = watchers[objectPath];
        }
        this.subscribe();
    }

    get watchers() {
        return this._watchers;
    }

	/**
     * Object as associative array of all <subscriptions> objects
     * @type {Object}
     */
    subscriptions = {};

    dispose() {
        this.unsubscribe();
    }

    subscribe(o) {
        // When an object is givin for a specific subscription
        if (o) {
            if (this.subscriptions[o.path]) {
                this.subscriptions[o.path]();
            }

            let method = o.cb;

            if (typeof method !== 'function') method = this[method];
            if (!method) return;

            this._watchers[o.path] = method;

            // const watcher = new Watch(o.path, method);
            this.subscriptions[o.path] = watch(o.path, method); // new Watch(o.path, method); // store.subscribe(watcher.watch());

            // console.log('subscribe DIRECT', o.path, this.subscriptions[o.path]);
            return;
        }

        for (const path in this.watchers) {
            if (!this.watchers[path]) continue;
            if (this.subscriptions[path]) this.subscriptions[path]();

            let method = this.watchers[path];

            if (typeof method !== 'function') method = this[method];
            if (!method) continue;

            // const watcher = new Watch(path, method);
            this.subscriptions[path] = watch(path, method); // new Watch(path, method); // store.subscribe(watcher.watch());
        }
    }

    unsubscribe(path_ = null) {
        if (path_) {
            // console.log('unsubscribe DIRECT', path_, this.subscriptions[path_]);
            if (this.subscriptions[path_]) {
                this.subscriptions[path_]();
                delete this.subscriptions[path_];
            }
            return;
        }

        for (const path in this.subscriptions) {
            if (!this.subscriptions[path]) continue;
            this.subscriptions[path]();
        }
        this.subscriptions = {};
    }

    getState() {
        return store.getState();
    }

    dispatch(action) {
        store.dispatch(action);
    }
}

export default Watcher;
