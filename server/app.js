var express 	= require('express');
var exphbs  	= require('express-handlebars');
var compression = require('compression');
var helmet 		= require('helmet');
var path        = require('path');
var parser      = require('ua-parser-js');
var connect      = require('connect-livereload')
var MobileDetect = require('mobile-detect');

// WE LOAD JSON MANUALLY FOR THE EXAMPLE
// Can use dynamic routing system or external API
var jsonHome = require(path.join(__dirname, '../shared/jsons/index.json'));

var app = express();
app.use(compression());
app.use(helmet());
// app.use(connect({
//     port: 3000
//   }));

app.set('views', path.join(__dirname, '../shared/templates'));

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, '/layouts'),
	partialsDir: path.join(__dirname, '/partials'),
	extname: '.hbs'
}));

app.set('view engine', '.hbs');

var pathPublic = path.join(__dirname, '../public');
app.use(express.static(pathPublic));

app.get('/', function (req, res) {

		res.render('index', {
				datas: jsonHome,
				webpAvailable : DetectWebP(req),
				isMobile: DetectMobile(req)
		});

});

app.get('/about', function (req, res) {
	 res.render('about', {
				datas: jsonAbout,
				webpAvailable : DetectWebP(req),
				isMobile: DetectMobile(req)
		});
});

app.listen(3000, function () {
	console.log('App running on port 3000!');
});

function DetectWebP(req){

		var ua = parser(req.headers['user-agent']);
		var browserName = ua.browser.name;
		var browserVersion = parseInt(ua.browser.version);

		if( (browserName==='Chrome' && browserVersion >23) || (browserName==='Android' && browserVersion>4 ) || (browserName ==='Opera' && browserVersion > 8)) return true;
		return false;
}

function DetectMobile(req){

	var md = new MobileDetect(req.headers['user-agent']);
	return (md.phone() != null);

}