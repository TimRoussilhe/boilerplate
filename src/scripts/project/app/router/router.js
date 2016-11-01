/* global  _ Backbone  */

import EVENTS from 'events/events';
import MainView from 'views/mainView';

class Router extends Backbone.Router {

	constructor(routes = {}) {

		_.defaults(routes, {
			':page/?:subpage'						: 'default',
			 ':page/?:subpage/'						: 'default',
			 ':page'									: 'default',
			 ':page/'								: 'default',
			 '(/)'									: 'default',
			 //	http://stackoverflow.com/questions/11236338/is-there-a-way-to-catch-all-non-matched-routes-with-backbone
			 '*notFound'								: 'notFound'
		});

		super({routes: routes});

		// this.options = options;
		this.baseURL = '/';
		this.history = [];
		this.mainView = MainView;

	}

	init() {
		this.listenToOnce(this.mainView, EVENTS.INIT, this._onMainViewInit.bind(this));
		this.mainView.init();
	};


	_onMainViewInit() {
		Backbone.history.start({
			pushState: true,
			root: this.baseURL
		});
	};

	default(page_, subpage_) {

		const page = (page_ !== undefined) ? page_ : 'error';
		const subpage = (subpage_ !== undefined) ? subpage_ : 'null';
		const query = (Backbone.history.location.search) ? this._parseQueryString(Backbone.history.location.search) : null;
		this.mainView.navigateTo(page, subpage, query);

		this.history.push(page);
	};

	currentPage() {
		return _.last(this.history);
	};

	back() {
		console.log('back');
		Backbone.history.navigate(this.previousPage(), {trigger: false});
	};

	previousPage() {
		if (this.history.length <= 1) return null;
		return this.history[this.history.length - 2];
	};

	_parseQueryString(queryString) {
		let params = {};
		if (queryString) {
			_.each(
				_.map(decodeURI(queryString).split(/&/g), function(el, i) {
					let aux = el.split('=');
					let o = {};
					if (aux.length >= 1) {
						let val;
						if (aux.length === 2) val = aux[1];
						o[aux[0]] = val;
					}
					return o;
				}),
				function(o) {
					_.extend(params, o);
				}
		);
		}
		return params;
	}

}

export default new Router();
