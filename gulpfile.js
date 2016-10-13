var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var spritesmith = require('gulp.spritesmith');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var csso = require('gulp-csso');
var merge = require('merge-stream');
var buffer = require('vinyl-buffer');
var fontName = 'iconfont';
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

//iconfont
gulp.task('iconfont', function() {
	gulp.src(['public/assets/svgs/*.svg'])
		.pipe(iconfontCss({
			fontName:   fontName,
			path:       'src/css/iconfont-template/iconfont-template.css',
			targetPath: '../../css/iconfont.css',
			fontPath:   '../fonts/iconfont/'
		}))
		.pipe(iconfont({
			fontName:  fontName,
			normalize: true
		 }))
		.pipe(gulp.dest('public/assets/fonts/iconfont/'));
});

gulp.task('optiIconFontCSS', function() {
	return gulp.src('public/assets/css/iconfont.css')
		.pipe(csso())
		.pipe(gulp.dest('public/assets/css/'));
});


// Retina PNG Sprite
gulp.task('spriteGlobal', function() {
	var spriteData = gulp.src('public/assets/pngs-global/*.png').pipe(spritesmith({
		imgName:         'spriteGlobal.png',
		cssName:         'spriteGlobal.css',
		retinaSrcFilter: ['public/assets/pngs-global/*@2x.png'],
		retinaImgName:   'spriteGlobal@2x.png'
	}));

	// Pipe image stream through image optimizer and onto disk
	var imgStream = spriteData.img
		.pipe(buffer())
		.pipe(imagemin())
		.pipe(gulp.dest('public/assets/css/'));

	var cssStream = spriteData.css
		.pipe(csso())
		.pipe(gulp.dest('public/assets/css/'));

	return merge(imgStream, cssStream);
});

gulp.task('png2Sprite', function(callback) {
	runSequence('spriteGlobal');
});

gulp.task('iconfontSequence', function(callback) {
	runSequence('iconfont', 'optiIconFontCSS');
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: 'http://localhost:3000',
		files: ['public/**/*.*'],
		browser: 'google chrome',
		port: 7000
	});
});

gulp.task('nodemon', function(cb) {
	var started = false;
	return nodemon({
		script: './server/app.js',
		watch: ['./shared','./server']
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true;
		}
	});
});
