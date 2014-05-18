var gulp = require('gulp')
  , express = require('express')
  , stylus = require('gulp-stylus');

var lr;
gulp.task('stylus', function () {
  return gulp.src('src/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('.'));
});

gulp.task('startServers', function (cb) {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(__dirname));
  app.listen(3333);

  lr = require('tiny-lr')()
  lr.listen(35729);
});

function notifyLivereload(event) {
  console.log('asdfsad');
  gulp.src(event.path, {read: false})
    .pipe(require('gulp-livereload')(lr));
}

gulp.task('default', ['stylus', 'startServers'], function () {
  gulp.watch([
    '*.html'
  ], notifyLivereload);
});