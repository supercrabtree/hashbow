var gulp = require('gulp')
  , gutil = require('gulp-util')
  , prefix = require('gulp-autoprefixer')
  , express = require('express')
  , stylus = require('gulp-stylus');

var lr;
gulp.task('stylus', function () {
  return gulp.src('src/style.styl')
    .pipe(stylus())
    .on('error', stylusErr)
    .pipe(prefix('last 2 versions'))
    .on('error', err)
    .pipe(gulp.dest('.'))
});

gulp.task('startServers', function (cb) {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(__dirname));
  app.listen(3333);

  lr = require('tiny-lr')();
  lr.listen(35729);
  cb();
});

function stylusErr(err) {
  var splitErr = err.message.match(/(.*?)([0-9]*)(?:\n)((?:.+\n)+)(?:\n)((?:.+\n)+)/);
  var file = splitErr[1];
  var line = splitErr[2];
  var location = splitErr[3];
  var theErr = splitErr[4];
  
  console.log('\n', gutil.colors.cyan(file) + gutil.colors.red(line));
  console.log(location); 
  console.log(gutil.colors.red(theErr));
  gutil.beep();
  this.emit('end');
}

function err() {
  gutil.beep();
  this.emit('end');
}

function notifyLivereload(event) {
  gulp.src(event.path, {read: false})
    .pipe(require('gulp-livereload')(lr));
}

gulp.task('default', ['stylus', 'startServers'], function () {
  gulp.watch(['*.html', 'style.css', 'img/*'], notifyLivereload);
  gulp.watch('./src/style.styl', ['stylus']);
});