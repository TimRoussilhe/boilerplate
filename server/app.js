var express 	= require('express');
var exphbs  	= require('express-handlebars');
var compression = require('compression');
var helmet 		= require('helmet');
var path 		= require('path');
var parser 		= require('ua-parser-js');
var MobileDetect = require('mobile-detect');
var helpers 	= require('../shared/helpers/helpers');
var menuData 	= require(path.join(__dirname, '../shared/jsons/menu.json'));
var svgs 		= require(path.join(__dirname, '../shared/jsons/svgs.json'));

// Shared routes management between server and FE rendering
var ROUTES = require(path.join(__dirname, '../shared/routes/routes.js'));

// Enviromnent detection
var env = process.env.NODE_ENV || 'development';

var app = express();
app.use(compression());
app.use(helmet());

app.set('views', path.join(__dirname, '../shared/templates'));

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	helpers: helpers,
	layoutsDir: path.join(__dirname, '/layouts'),
	partialsDir: path.join(__dirname, '/partials'),
	extname: '.hbs'
}));

app.set('view engine', '.hbs');

var pathPublic = env === 'development' ? path.join(__dirname, '../public') : path.join(__dirname, '../build');
app.use(express.static(pathPublic));

app.get('/*', function(req, res) {

	var currentRoute = ROUTES.getRouteByUrl(req.url);
	if (currentRoute === null) currentRoute = ROUTES.getRouteByID('404');

	var json = require(path.join(__dirname, currentRoute.jsonUrl));

	// the ID needs to be the template name
	res.render(currentRoute.id, {
		data: json,
		env: env,
		production : process.env.NODE_ENV === 'production',
		menu: menuData,
		svgs: svgs,
		webpAvailable : detectWebP(req),
		isMobile: detectMobile(req)
	});
});

app.listen(4040, function() {

	console.log('App running on port 4040!');

});

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
