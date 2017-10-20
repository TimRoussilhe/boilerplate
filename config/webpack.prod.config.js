const path = require('path');
const webpack = require('webpack');
// const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

const appEntryPoint = path.join(__dirname, '../src/scripts/app/index.js');
const outputPath = path.join(__dirname, '../build/assets/js/');
const reportPath = path.join(__dirname, '../reports/plain-report.txt');
const filename = 'bundle.min.js';

const devTool = false;
// 'hidden-source-map';

// devTool = 'inline-source-map';
console.log('\n ---- WEBPACK ----\n \n running in production \n');

console.log(path.join(' running webpack in ', __dirname));
console.log(' filename: ' + filename);
console.log(' devTool: ' + devTool);
console.log(' outputPath path ' + outputPath + '\n');

const entryPoints = appEntryPoint;

module.exports = {
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
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
				 'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				drop_console: true,
				warnings: false,
			},
			mangle: {
				screw_ie8: true,
			},
			output: {
				comments: false,
				screw_ie8: true,
			},
		}),
		// new ManifestPlugin({
		// 	fileName: 'assets.json',
		// }),
		new WebpackBundleSizeAnalyzerPlugin(reportPath),
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
		],
	},

	stats: {
		// Nice colored output
		colors: true,
	},

	// Create Sourcemaps for the bundle
	devtool: devTool,

};
