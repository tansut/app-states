var gulp = require('gulp');
var uglify = require('gulp-uglify');
var vulcanize = require('gulp-vulcanize');
var gulpFilter = require('gulp-filter');

gulp.task('merge', function() {
  return gulp.src('src/app-states.html')
    .pipe(vulcanize({
      dest: './src',
      strip: true,
      csp: true
    }))
    .pipe(gulp.dest('.'))
    .pipe(gulpFilter(['*.js']))
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('uglify', function() {
  gulp.src(['src/core.js'])
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});


gulp.task('default', ['merge', 'uglify']);
