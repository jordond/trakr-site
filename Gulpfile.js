'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp-files');

gulp.task('dev', ['build'], function () {
  gulp.start('browserSync');
  gulp.start('watch');
});

gulp.task('default', ['dev']);
