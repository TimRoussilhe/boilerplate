const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

function getTask(task, options) {
	return require('./gulp/' + task)(gulp, plugins, options);
}

gulp.task('browserSync', getTask('browserSync').default);
gulp.task('svgs-to-json', getTask('svgs-to-json'));
gulp.task('sass', getTask('sass'));
// gulp.task('nodemon:dev', getTask('nodemon', {env:'development'}));
// gulp.task('nodemon:prod', getTask('nodemon', {env:'production'}));
gulp.task('copyAssets', getTask('copyAssets'));
gulp.task('imageMin', getTask('imageMin'));

gulp.task('dev', () => {
	runSequence('nodemon:dev', 'browserSync');
});
gulp.task('build', () => {
	runSequence('copyAssets', 'imageMin', 'nodemon:prod');
});
