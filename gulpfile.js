var gulp = require('gulp');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var typescript = require('gulp-typescript');
var annotate = require('gulp-ng-annotate');
var connect = require('gulp-connect');

var pathToBower = '/home/rafal/Git/ls/bower_components/' // Change to your absolute path

gulp.task('inject-bower', function () {
  gulp.src('./app/index.jade')
    .pipe(inject(gulp.src(mainBowerFiles(), {read: false, base: pathToBower}), {relative: true, addRootSlash: false}))
    .pipe(gulp.dest('./app'));
});

gulp.task('sass', function () {
  gulp.src('./app/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('jade', function() {
  gulp.src(['./app/components/**/*.jade', './app/states/**/*.jade', './app/index.jade'])
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./build'))
});

gulp.task('typescript', function() {
  gulp.src('./app/**/*.ts')
    .pipe(typescript({
      out: 'app.js'
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('annotate', function() {
  gulp.src('./build/app.js')
    .pipe(annotate())
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
  gulp.watch('./app/styles/**/*.scss', ['sass', 'reload']);
  gulp.watch(['./app/components/**/*.jade', './app/states/**/*.jade', './app/index.jade'], ['jade', 'reload']);
  gulp.watch('./bower_components', ['inject-bower']);
  gulp.watch(['./app/components/**/*.ts', './app/states/**/*.ts', './app/app.ts'], ['typescript', 'reload']);
  gulp.watch('./build/app.js', ['annotate']);
});

gulp.task('serve', ['watch'], function() {
  connect.server({
    root: './build',
    port: 8000,
    livereload: true,
    fallback: './build/index.html',
    middleware: function(connect, options) {
      return [
        connect.static('bower_components'),
        connect().use(
              '/bower_components',
              connect.static('./bower_components')
            )
      ]
    }
  });
});

gulp.task('reload', function() {
  gulp.src('./build')
    .pipe(connect.reload());
});

gulp.task('default',['inject-bower', 'sass', 'jade', 'typescript', 'annotate', 'serve'], function() {

});
