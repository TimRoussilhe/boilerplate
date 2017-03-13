'use strict';

var routes = require('./routes.json');
class Routes {

	constructor(routes) {
		this.routes = routes;
	}

	getRouteByUrl(url) {

		for (let id in this.routes) {
			if (this.routes[id].url === url || this.routes[id].url === '/' + url || this.routes[id].url === '/' + url + '/') {
				return this.routes[id];
			}
		}
		return null;
	}

	getRouteByID(id_) {
		for (var id in this.routes) {
			if (id === id_) return this.routes[id];
		}
		return null;
	}

}

module.exports = new Routes(routes);
// export default single;
