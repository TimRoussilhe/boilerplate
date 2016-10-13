var path = require('path');
var webpack = require('webpack');
var appEntryPoint = './src/scripts/project/main.js';
var includePath = path.join(__dirname, 'src/scripts');
// var templatePath = path.join(__dirname, 'public/templates');
// var nodeModulesPath = path.join(__dirname, 'node_modules');
var outputPath = path.join(__dirname, '/public/assets/js/');
// var vendorPath = path.join(__dirname, '/vendors');
var devTool = 'source-map';

var PROD = JSON.parse(process.env.ENV_PROD || 0);

// variables shared
var env = {
	prod : PROD
};

var plugins = [
	// Avoid publishing files when compilation failed
	new webpack.NoErrorsPlugin()
];

var filename = 'bundle.js';

if (PROD) {

	plugins.push(
			// new webpack.optimize.DedupePlugin(),
			// new webpack.optimize.OccurenceOrderPlugin(),
			// new webpack.optimize.UglifyJsPlugin({minimize: true})
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: false,
				mangle:    true,
				compress:  {
					drop_console: true
				},
				output: {
					comments: false
				}
			})
		);

	outputPath = path.join(__dirname, '/public/assets/js/');

	filename = 'bundle.min.js';

	devTool = null;
	// 'hidden-source-map';

	// devTool = 'inline-source-map';
	console.log('\n ---- WEBPACK ----\n \n running in production \n');

} else {

	console.log('\n ---- WEBPACK ---- \n \n running in development \n');

}

console.log(path.join(' running webpack in ', __dirname));
console.log(' filename: ' + filename);
console.log(' devTool: ' + devTool);
console.log(' include path ' + includePath);
console.log(' outputPath path ' + outputPath + '\n');

var entryPoints = appEntryPoint;

plugins.push(new webpack.DefinePlugin({
	ENV : JSON.stringify(env)
}));

// This plugin makes a module available as variable in every module.
plugins.push(new webpack.ProvidePlugin({
	$           : 'jquery',
	jQuery      : 'jquery',
	_           : 'underscore',
	Backbone    : 'backbone',
	gsap        : 'gsap'
}));

module.exports = {

		/*
		http://webpack.github.io/docs/configuration.html

	ENTRY
	If you pass a string: The string is resolved to a module which is loaded upon startup.
	If you pass an array: All modules are loaded upon startup. The last one is exported.
	If you pass an object: Multiple entry bundles are created. The key is the chunk name. The value can be a string or an array.
	*/
	node: {
		fs: 'empty'
	},
	// context: './src/js',
	// context: includePath,

	entry: entryPoints,

	// if multiple outputs, use [name] and it will use the name of the entry point, and loop through them
	output: {
		path:       outputPath,
		filename:   filename,
		publicPath: 'assets/js/'
	},

	plugins: plugins,

	// make 'zepto' resolve to your local copy of the library
	// i. e. through the resolve.alias option
	// will be included in the bundle, no need to add and load vendor
	resolve: {
		alias: {
			// jquery:   	includePath + '/vendors/zepto',
			jquery: 'npm-zepto',
			$: 'npm-zepto',
			zepto:     'jquery',
			// Detectizr: includePath + '/vendors/detectizr',
			Modernizr: includePath + '/vendors/modernizr.custom'
		},
		modulesDirectories: [
			'src/scripts/project/app/',
			'src/scripts/vendors/',
			'shared/',
			'public/assets/',
			'node_modules'
		]
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel', // 'babel-loader' is also a valid name to reference
				query: {
					presets: ['es2015']
				}
			},
			{test: /\.json$/, loader: 'json-loader'},
			{test: /zepto\.js$/, loader: 'exports?Zepto; delete window.$; delete window.Zepto;'},
			{test: /detectizr\.js$/, loader: 'imports?this=>window!exports?window.Detectizr;'},
			{test: /modernizr.custom\.js$/, loader: 'imports?this=>window!exports?window.Modernizr;'},
			{test: /\.hbs$/, loader: 'handlebars-loader', query: {
				helperDirs: [
					__dirname + "/shared/helpers",
				]
			}}
			//{test: /\.js$/, loader: 'eslint-loader', exclude: [/node_modules/, /vendors/]}
		]
	},

	stats: {
		// Nice colored output
		colors: true
	},

	// Create Sourcemaps for the bundle
	devtool: devTool

};
