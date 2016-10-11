/* global  _ Backbone window  */
var Config = require('config/config');
var EVENT = require('events/events');
var CV = require('config/currentValues');
var MainView = require('views/mainView');

var Router = function() {
	this.routes = {
		':page/?:subpage'						: 'default',
		':page/?:subpage/'						: 'default',
		':page'									: 'default',
		':page/'								: 'default',
		'(/)'									: 'default',
		//	http://stackoverflow.com/questions/11236338/is-there-a-way-to-catch-all-non-matched-routes-with-backbone
		'*notFound'								: 'notFound'
	};

	this.baseURL = '/';

	this.history = [];

	this.mainView = MainView;

	Backbone.Router.call(this);
};

_.extend(Router, Backbone.Router);
_.extend(Router.prototype, Backbone.Router.prototype);

Router.prototype.init = function() {
	this.listenToOnce(this.mainView, EVENT.INIT, _onMainViewInit.bind(this));
	this.mainView.init();
};


var _onMainViewInit = function() {
	Backbone.history.start({
		pushState: true,
		root: this.baseURL
	});
};

Router.prototype.default = function(page_, subpage_) {
	var page = (page_ !== undefined) ? page_ : 'error';
	var subpage = (subpage_ !== undefined) ? subpage_ : 'null';
	var query = (Backbone.history.location.search) ? _parseQueryString(Backbone.history.location.search) : null;
	this.mainView.navigateTo(page, subpage, query);

	this.history.push(page);
};

Router.prototype.currentPage = function() {
	return _.last(this.history);
};

Router.prototype.back = function() {
	console.log('Router.prototype.back');
	Backbone.history.navigate(this.previousPage(), {trigger: false});
};

Router.prototype.previousPage = function() {
	if (this.history.length <= 1) return null;
	return this.history[this.history.length - 2];
};

var _parseQueryString = function(queryString) {
	var params = {};
	if (queryString) {
		_.each(
			_.map(decodeURI(queryString).split(/&/g), function(el, i) {
				var aux = el.split('=');
				var o = {};
				if (aux.length >= 1) {
					var val;
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
};

module.exports = new Router();
