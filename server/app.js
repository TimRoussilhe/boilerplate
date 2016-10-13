var express 	= require('express');
var exphbs  	= require('express-handlebars');
var compression = require('compression');
var helmet 		= require('helmet');
var path = require('path');
var parser = require('ua-parser-js');
// var connect = require('connect-livereload');
var MobileDetect = require('mobile-detect');
var helpers = require('../shared/helpers/helpers');
var routes = require(path.join(__dirname, '../shared/jsons/routes.json'));

var app = express();
app.use(compression());
app.use(helmet());
// app.use(connect({
//     port: 3000
//   }));

app.set('views', path.join(__dirname, '../shared/templates'));

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	helpers: helpers,
	layoutsDir: path.join(__dirname, '/layouts'),
	partialsDir: path.join(__dirname, '/partials'),
	extname: '.hbs'
}));

app.set('view engine', '.hbs');

var pathPublic = path.join(__dirname, '../public');
app.use(express.static(pathPublic));

// app.get('/', function(req, res) {
//
// 	res.render('index', {
// 		datas: jsonHome,
// 		routes: routes,
// 		webpAvailable : detectWebP(req),
// 		isMobile: detectMobile(req)
// 	});
//
// });
//
// app.get('/about', function(req, res) {
//
// 	res.render('about', {
// 		datas: jsonAbout,
// 		routes: routes,
// 		webpAvailable : detectWebP(req),
// 		isMobile: detectMobile(req)
// 	});
//
// });

app.get('/*', function(req, res) {
	var currentRoute = getRouteByUrl(req.url);
	var json = require(path.join(__dirname, currentRoute.jsonUrl));

	// the ID needs to be the template name
	res.render(currentRoute.id, {
		datas: json,
		routes: routes,
		webpAvailable : detectWebP(req),
		isMobile: detectMobile(req)
	});
});

app.listen(3000, function() {

	console.log('App running on port 3000!');

});

function getRouteByUrl(url) {
	for (var id in routes) {
		if (routes[id].url === url || routes[id].url === '/' + url || routes[id].url === '/' + url + '/') {
			return routes[id];
		}
	}
	return null;
}

function detectWebP(req) {

	var ua = parser(req.headers['user-agent']);
	var browserName = ua.browser.name;
	var browserVersion = parseInt(ua.browser.version, 10);

	if ((browserName === 'Chrome' && browserVersion > 23) || (browserName === 'Android' && browserVersion > 4) || (browserName === 'Opera' && browserVersion > 8)) return true;
	return false;

}

function detectMobile(req) {

	var md = new MobileDetect(req.headers['user-agent']);
	return (md.phone() !== null);

}
