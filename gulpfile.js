/* jshint esnext: true */
const gulp = require("gulp");
const sass = require('gulp-sass');
const react = require('gulp-react');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');
const rimraf = require('rimraf');

// Clean
gulp.task('clean', function(cb) {
  rimraf('./dest', cb);
});

// Copy
gulp.task('copy', function() {
  return gulp.src('./js/*.js')
    .pipe(gulp.dest('./dest/'));
});

// SASS
gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest/'));
});

// React.js
gulp.task('react', function() {
  return gulp.src('./js/*.jsx')
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest/'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./js/*.jsx', ['react']);
});

// Build
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['sass', 'react'],
    'copy',
    callback
  );
});
