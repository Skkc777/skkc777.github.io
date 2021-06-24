function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask;

const gulp        = require('gulp');
const browserSync = require('browser-sync'); 

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});
