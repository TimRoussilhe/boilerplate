// Compile sass into CSS & auto-inject into browsers
const fs = require('fs');
const options = JSON.parse(fs.readFileSync('./postcss-options.json'));

const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const poststylus = require('poststylus');

module.exports = (gulp, $) => {
	return () => {
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
	};
};