const path = require('path');
const webpack = require('webpack');
const devTool = 'source-map';
const FriendlyErrorsWebpackPlugin = require( 'friendly-errors-webpack-plugin' );
const notifier = require( 'node-notifier' );


const appEntryPoint = path.join(__dirname, '../src/scripts/app/index.js');
const outputPath = path.join(__dirname, '../public/assets/js/');
const filename = 'bundle.js';

console.log('\n ---- WEBPACK ---- \n \n running in development \n');
console.log(path.join(' running webpack in ', __dirname));
console.log(' filename: ' + filename);
console.log(' devTool: ' + devTool);
console.log(' outputPath path ' + outputPath + '\n');

const entryPoints = appEntryPoint;

module.exports = {

	/*
	ENTRY
	If you pass a string: The string is resolved to a module which is loaded upon startup.
	If you pass an array: All modules are loaded upon startup. The last one is exported.
	If you pass an object: Multiple entry bundles are created. The key is the chunk name. The value can be a string or an array.
	*/
	node: {
		fs: 'empty',
	},

	entry: entryPoints,

	// if multiple outputs, use [name] and it will use the name of the entry point, and loop through them
	output: {
		path:       outputPath,
		filename:   filename,
		publicPath: 'assets/js/',
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				DEV: (process.env.NODE_ENV !== 'production'),
				IS_BROWSER: true,
			},
		}),
		new FriendlyErrorsWebpackPlugin({
			onErrors: ( severity, errors ) => {
				if ( severity !== 'error' ) return;

				const error = errors[0];
				notifier.notify({
					title: 'Compilation Failed',
					message: severity + ': ' + error.name,
					subtitle: error.file || '',
				});
			},
		}),
	],

	// make 'zepto' resolve to your local copy of the library
	// i. e. through the resolve.alias option
	// will be included in the bundle, no need to add and load vendor
	resolve: {
		extensions: ['.js', '.json', '.twig', '.html'],
		modules: [
			'src/scripts/app/',
			'src/scripts/vendors/',
			'shared/',
			'public/assets/',
			'node_modules',
		],
		alias: {
			// Modernizr: path.join(__dirname, '/../src/js/vendors/modernizr.custom'),
		},
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
			},
			{test: /\.json$/, loader: 'json-loader'},
			{test: /\.twig$/, loader: 'twig-loader'},
			{
				test: path.join(__dirname, '/../node_modules/zepto/dist/zepto.js'),
				use: 'imports-loader?this=>window',
			},
		],
	},

	stats: {
		// Nice colored output
		colors: true,
	},

	// Create Sourcemaps for the bundle
	devtool: devTool,

};
