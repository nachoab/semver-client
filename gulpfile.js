var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('scripts', function () {
  return gulp.src('./index.js', { read: false })
             .pipe(browserify())
             .pipe(concat('semver.js'))
             .pipe(gulp.dest('./build'));

});

gulp.task('default', function () {
  gulp.run('scripts');
});
