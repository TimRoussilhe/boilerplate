const nodemon = require('gulp-nodemon');

module.exports = (gulp, $) => {
	return (cb) => {
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
	};
};