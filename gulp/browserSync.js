const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const runSequence = require('run-sequence');

module.exports = function(gulp, $) {

	return {
		default: () => {
			browserSync.init(null, {
				proxy: 'http://localhost:4040',
				files: ['public/**/*.*'],
				browser: 'google chrome',
				port: 7000
			});
			gulp.watch('./src/css/**/**/*.styl', ['stylus']);
			watch('./public/assets/svgs/**/*.svg', () => {
				runSequence('svgs-to-json');
			});
		}
	};
};
