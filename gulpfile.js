const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

function getTask(task, options) {
	return require('./gulp/' + task)(gulp, plugins, options);
}

gulp.task('browserSync:default', getTask('browserSync').default);
gulp.task('svgs-to-json', getTask('svgs-to-json'));
gulp.task('stylus', getTask('stylus'));
gulp.task('nodemon', getTask('nodemon'));

gulp.task('dev', runSequence('nodemon', 'browserSync:default'));
