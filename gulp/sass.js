// Compile sass into CSS & auto-inject into browsers
const fs = require('fs');
const options = JSON.parse(fs.readFileSync('./postcss-options.json'));

const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
// const stylus = require('gulp-stylus');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
// const poststylus = require('poststylus');

const sass = require('gulp-sass');

console.log('options.autoprefixer', options.autoprefixer);

module.exports = (gulp, $) => {
	return () => {
		return gulp.src('./src/css/app.scss')
			.pipe(plumber())
			.pipe(sourcemaps.init())
      .pipe(sass())
			.pipe(sourcemaps.write())
      .pipe(autoprefixer(options.autoprefixer))
			.pipe(gulp.dest('./public/assets/css/'))
			.pipe(browserSync.stream());
	};
};