var routes = require('jsons/routes.json');

class Routes {

	constructor(routes) {
		this.routes = routes;
	}

	getRouteByUrl(url) {
		console.log(url);
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
	};

}

let single = new Routes(routes);
export default single;
