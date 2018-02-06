const browserSync = require('browser-sync');
const watch = require('gulp-watch');
const runSequence = require('run-sequence');

const connect = require('gulp-connect-php');

module.exports = function(gulp, $) {

	return {
		default: () => {

			connect.server({
				base: './public/.',
			}, function(){
				browserSync({
					proxy: '127.0.0.1:8000',
					files: ['public/**/*.*'],
					browser: 'google chrome',
				});
			});

			gulp.watch('./src/css/**/**/*.scss', ['sass']);
			watch('./public/assets/svgs/**/*.svg', () => {
				runSequence('svgs-to-json');
			});
		},
	};
};
