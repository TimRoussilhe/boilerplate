var routes = require('jsons/routes.json');

var Routes = function() {
	this.routes = routes;
};

Routes.prototype.getRouteByUrl = function(url) {
	console.log(url);
	for (var id in this.routes) {
		if (this.routes[id].url === url || this.routes[id].url === '/' + url || this.routes[id].url === '/' + url + '/') {
			return this.routes[id];
		}
	}
	return null;
};

Routes.prototype.getRouteByID = function(id_) {
	for (var id in this.routes) {
		if (id === id_) return this.routes[id];
	}
	return null;
};

module.exports = new Routes();
