import Component from 'abstract/component';
import $ from 'zepto';
import _ from 'underscore';
// import {router} from 'router';
import page from 'page';

const requireAll = (requireContext) => {
    const r = {};
    const a = requireContext.keys().map(requireContext);
    for (const i in requireContext.keys()) {
        if (requireContext.keys()[i]) {
            const id = requireContext.keys()[i].replace('./', '').replace('.svg', '');
            r[id] = a[i];
        }
    }
    return r;
};

const SVG = requireAll(require.context('components/svg/', true, /^\.\/.*\.svg$/));
const delegateEventSplitter = /^(\S+)\s*(.*)$/;

/**
 * DOMComponent: Defines a component with basic methods for DOM
 * @extends Component
 * @constructor
 */
class DOMComponent extends Component {

    /**
     * Object as associative array of all the <DOM.events> objects
     * @type {Object}
     */
    _events = {};

    set events(events) {
        for (const event in events) { // eslint-disable-line guard-for-in
            this._events[event] = events[event];
        }
        this.delegateEvents();
    }

    get events() {
        return this._events;
    }

    /**
     * Object as associative array of all the <DOM.events> objects
     * @type {Object}
     */
    _actions = {};

    set actions(actions) {
        for (const action in actions) { // eslint-disable-line guard-for-in
            this._actions[action] = actions[action];
        }
    }

    get actions() {
        return this._actions;
    }

	/**
     * Object as associative array of all the <DOM.elements> objects
     * @type {Object}
     */
    $els = {};

    /**
     * Object as associative array of all the <DOM.elements> objects
     * @type {Object}
     */
    els = {};

    /**
     * Selector to scope the main element to the component
     * @type {Object}
     */
    selector = null;

    /**
     * main element scoped to the component
     * @type {Object}
     */
    el = null;

    /**
     * main element scoped to the component
     * @type {Object}
     */
    $el = null;

    /**
     * Template if provided
     * @type {Object}
     */
    template = null;

    /**
     * Data if provided
     * @type {Object}
     */
    data = {};

    /**
     * Object as associative array of all the <Timeline> objects
     * @type {Object}
     */
    TL = {};

    /**
     * raf id
     * @type {String}
     */
    rafID = null;

    constructor(options = {}) {
        super();
        this.selector = options.selector ? options.selector : this.selector;
        this.el = options.el ? options.el : this.el;
        this.$el = options.$el ? options.$el : this.$el;
        this.template = options.template ? options.template : this.template;
        this.data = options.data ? options.data : this.data;
        this.actions = options.actions ? options.actions : {};

        this.events = {
            'click a': ::this.hyperlink
        };

        this.watchers = {
            'browser': ::this.resize,
            'app.scroll': ::this.onScroll
        };
    }

	/**
	 * Render your component
	 * This is where we scope the main elements
	 */
    setElement() {
        if (this.$el === null && this.el === null && this.selector === null && this.template === null) {
            console.error('You must provide a template or an el or an $el or a selector to scope a component. Creating an empty div instead', this); // @preserve eslint-disable-line no-console
            this.el = document.createElement('div');
        }

        if (this.el !== null) {
            this.$el = $(this.el);
            return;
        }

        if (this.$el !== null) {
            this.el = this.$el[0];
            return;
        }

        if (this.selector !== null) {
            this.$el = $(this.selector);
            if (this.$el[0]) {
                this.el = this.$el[0];
                return;
            }
        }

        if (this.template !== null) {
            this.renderTemplate();
            return;
        }
    }

	/**
	 * Render your template
	 */
    renderTemplate() {
        // Add SVG files to the render
        this.data.SVG = SVG;

        // Add global UI copy
        this.data.ui = this.getState().get('app').get('ui').toJS();

        // console.log('renderTemplate', this);

        this.$el = $(this.template(this.data));
        this.el = this.$el[0];
    }

	/**
	 * Re Render your template
	 */
    updateRender() {
        this.undelegateEvents();
        this.$el = $(this.template(this.data));
        this.el = this.$el[0];
        this.initDOM();
        this.delegateEvents();
    }

	/**
	 * Init the component.
	 * Override and trigger onInit when we have to wait for computer procesing, like canvas initialization for instance.
	 */
    initComponent() {
        this.bindUpdate();
        this.initData();
        this.setElement();
        setTimeout(::this.onRender, 0);
    }

    bindUpdate() {
        this.handlers.raf = ::this.update;
        this.rafID = window.requestAnimationFrame(this.handlers.raf);
    }

    /**
     * Unbind update
     */
    unbindUpdate() {
        window.cancelAnimationFrame(this.rafID);
    }

    onRender() {
        this.initDOM();
        this.setupDOM();
        this.initTL();
        this.delegateEvents();
        setTimeout(::this.onDOMInit, 0);
    }

    /**
     * Init the Timeline here
     */
    initTL() {}

    /**
     * Init your data here if needed
     */
    initData() {}

    /**
     * Init all your DOM elements here
     */
    initDOM() {}

    /**
     * Setup your DOM elements here
     */
    setupDOM() {}

	/**
	 * Init the Timeline here
	 */
    onDOMInit() {
        super.initComponent();
    }

    /**
     * Called on request animation frame
     */
    update() {
        if (this.states.canUpdate) this.onUpdate();
        this.rafID = window.requestAnimationFrame(this.handlers.raf);
    }

    resize() {
        // console.log('resize', this);
        // if (this.states.isAnimating) return;
        this.onResize(this.getState().get('browser'));
    }

    onResize(browser) {}

    onScroll(scroll, previousScroll) {}

	/**
	 * Auto binding with this.events
	 */
    delegateEvents() {
        if (this.el === null || this.$el === null) return this;
        if (!this.events) return this;

        this.undelegateEvents();

        for (const key in this.events) {
            if (!this.events[key]) continue;
            let method = this.events[key];
            if (!_.isFunction(method)) method = this[method];
            if (!method) continue;
            const match = key.match(delegateEventSplitter);
            this.delegate(match[1], match[2], _.bind(method, this));
        }

        return this;
    }

	/**
	 *  Add a single event listener to the component's element (or a child element
	 *  using `selector`). This only works for delegate-able events: not `focus`,
	 *  `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	 */
    delegate(eventName, selector, listener) {
        this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
        return this;
    }

    undelegateEvents() {
        if (this.$el) this.$el.off('.delegateEvents' + this.cid);
        return this;
    }

	/**
	 *  A finer-grained `undelegateEvents` for removing a single delegated event.
	 *  `selector` and `listener` are both optional.
	 */
    undelegate(eventName, selector, listener) {
        this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
        return this;
    }

    /**
     * Navigate using the router
     */
    navigate(url, options = {}) {
        // if absolute, make sure to add the root
        if (url.indexOf(window.location.origin) >= 0) {
          url = url.replace(window.location.origin, '');
        }

        const re = new RegExp(/^.*\//);
        const rootUrl = re.exec(window.location.href);

        // If internal
        if (url.indexOf(rootUrl) >= 0) {
            // make it relative
            url = url.replace(window.location.origin, '');
            url = url.replace(rootUrl, '');
        }

        page(url);
    }

    hyperlink(e) {
        const href = e.currentTarget.href;
        const route = !e.currentTarget.classList.contains('no-route');

        // internal link
        if ((href.substr(0, 4) !== 'http' || href.indexOf(window.location.origin) >= 0) && route) {
            e.preventDefault();

            // if is loading or loader still shown, we block the navigation
            const isLoading = this.getState().get('loader').get('isLoading');
            const isLoaderShown = this.getState().get('loader').get('isShown');

            if (!isLoading && !isLoaderShown) {
                this.navigate(href);
            }
        }
    }

    /**
     * Kill a timeline by name
     * @param {string} name of the timeline stocked in this.TL.
     */
    killTL(name) {
        if (this.TL[name] === undefined || this.TL[name] === null) return;

        let tl = this.TL[name];

        tl.stop();
        tl.kill();
        tl.clear();
        tl = null;

        this.TL[name] = null;
    }

    /**
     * Kill all the timelines
     */
    destroyTL() {
        for (const name in this.TL) {
            if (this.TL[name]) this.killTL(name);
        }
        this.TL = {};
    }

	/**
	 * Dispose the component
	 */
    dispose() {
        this.undelegateEvents();
        this.unbindUpdate();
        this.destroyTL();
        this.$el.remove();
        this.$el = null;
        this.$els = {};
        this._events = {};
        super.dispose();
    }
}

export default DOMComponent;
