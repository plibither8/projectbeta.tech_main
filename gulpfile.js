const autoprefix = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const gulp = require("gulp");
const pug = require("gulp-pug");
const stylus = require("gulp-stylus");
const surge = require("gulp-surge");
const webserver = require("gulp-webserver");

gulp.task('webserver', function () {
	return gulp.src("dist")
		.pipe(webserver({
			livereload: true,
			open: true
		}))
})

gulp.task('pug', function() {
	return gulp.src('src/pug/pages/**/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('dist/'));
})

gulp.task('stylus', function() {
	return gulp.src('src/styl/*.styl')
	.pipe(stylus({
		compress: true
	}))
	.pipe(autoprefix({
		cascade: false
	}))
	.pipe(gulp.dest('dist/assets/css'));
})

gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
	.pipe(babel({
		comments: false,
		presets: ['env'],
		minified: true
	}))
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('dist/assets/js'))
})

gulp.task('deploy', function() {
	return surge({
		project: './dist/',
		domain: 'projectbeta.surge.sh'
	})
})

gulp.task('deployWatch', ['pug', 'stylus', 'scripts', 'deploy'], function() {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/**/*.js'], ['pug', 'stylus', 'scripts', 'deploy']);
})

gulp.task('default', ['webserver', 'pug', 'stylus', 'scripts'], function () {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/**/*.js'], ['pug', 'stylus', 'scripts']);
})