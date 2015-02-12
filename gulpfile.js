'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var inline = require('gulp-inline');
var karma = require('gulp-karma');
var vulcanize = require('gulp-vulcanize');

var files = ['src/*.js', 'src/*.html', 'tests/spec/*.js'];

gulp.task('merge', function () {
    return gulp.src('src/app-states.html')
        .pipe(vulcanize({
            dest: 'src/app-states-merged.html',
            strip: true
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(jshint.extract('always'))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', function() {
  return gulp.src('src/app-states-merged.html')
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(gulp.dest('app-states.html'));
});

gulp.task('minify', function() {
  return gulp.src('src/app-states-merged.html')
    .pipe(inline({
      base: 'src/',
      js: uglify()
    }))
    .pipe(gulp.dest('app-states.html'));
});


// watch
gulp.task('watch', function() {
  gulp.watch(files, ['lint', 'merge', 'build', 'minify'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// default
gulp.task('default', ['lint', 'merge', 'build', 'minify']);

// Travis CI
gulp.task('ci', ['lint']);
