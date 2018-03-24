/*jshint esversion: 6 */

const autoprefixer = require("autoprefixer");
const babel        = require("gulp-babel");
const cachebust    = require('gulp-cache-bust');
const concat       = require("gulp-concat");
const cssnano      = require("cssnano");
const gulp         = require("gulp");
const pug          = require("gulp-pug");
const postcss      = require('gulp-postcss');
const pxtorem      = require('postcss-pxtorem');
const rucksack     = require('rucksack-css');
const sourcemaps   = require('gulp-sourcemaps');
const stylus       = require("gulp-stylus");
const surge        = require("gulp-surge");
const webserver    = require("gulp-webserver");

gulp.task('webserver', function () {
	return gulp.src("dist")
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

gulp.task('html', function() {
	return gulp.src('src/pug/pages/**/*.pug')
	.pipe(pug())
	.pipe(cachebust({
		type: 'timestamp'
	}))
	.pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
	return gulp.src('src/styl/*.styl')
	.pipe(sourcemaps.init())
	.pipe(stylus())
	.pipe(postcss([autoprefixer, rucksack, pxtorem, cssnano]))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist/assets/css'));
});

gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
	.pipe(babel({
		comments: false,
		presets: ['env'],
		minified: true
	}))
	.pipe(concat('scripts.js'))
	.pipe(gulp.dest('dist/assets/js'));
});

gulp.task('deploy', function() {
	return surge({
		project: './dist/',
		domain: 'projectbeta.surge.sh'
	});
});

gulp.task('default', ['html', 'css', 'js'], function () {
	gulp.watch(['src/pug/**/*.pug', 'src/styl/**/*.styl', 'src/js/**/*.js'], ['html', 'css', 'js']);
});