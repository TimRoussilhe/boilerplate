var gulp = require('gulp');

var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');

var filesToJson = require('gulp-files-to-json');
var svgmin = require('gulp-svgmin');

var autoprefixer = require('autoprefixer');
var poststylus = require('poststylus');
var fs = require('fs');

// Using gulp watch to look for added / removed file
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

// Compile sass into CSS & auto-inject into browsers
gulp.task('stylus', () => {
	var options = JSON.parse(fs.readFileSync('./postcss-options.json'));
	return gulp.src('./src/css/app.styl')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.init())
		.pipe(stylus({
			use: [
				poststylus([
					autoprefixer({browsers: options.autoprefixer.browsers})
				])
			]
		})
		)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/assets/css/'))
		.pipe(browserSync.stream());
});

gulp.task('nodemon', (cb) => {
	var started = false;
	return nodemon({
		script: './server/app.js',
		watch: ['./shared', './server'],
		env: {NODE_ENV: 'development'}
	}).on('start', () => {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task('browser-sync', ['nodemon'], () => {
	browserSync.init(null, {
		proxy: 'http://localhost:4040',
		files: ['public/**/*.*'],
		browser: 'google chrome',
		port: 7000
	});
	gulp.watch('./src/css/**/**/*.styl', ['stylus']);
	watch('./public/assets/svgs/**/*.svg', () => {
		runSequence('svgs-to-jsons');
	});
});


gulp.task('svgs-to-jsons', () => {
	gulp.src('./public/assets/svgs/**/*.svg')
		.pipe(svgmin({
			plugins: [
				{
					convertStyleToAttrs: true
				},
				{
					removeStyleElement: true
				},
				{
					removeXMLNS: true
				},
				{
					removeXMLNS: true
				}
			]
		}))
		.pipe(filesToJson('svgs.json'))
		.pipe(gulp.dest('./shared/jsons'));
});
