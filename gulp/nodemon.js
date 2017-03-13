const nodemon = require('gulp-nodemon');

module.exports = (gulp, $, options) => {
	return (cb) => {
		var started = false;
		return nodemon({
			script: './server/app.js',
			watch: ['./shared', './server'],
			env: {NODE_ENV: options.env ? options.env : 'development'}
		}).on('start', () => {
			// to avoid nodemon being started multiple times
			if (!started) {
				cb();
				started = true;
			}
		});
	};
};

