var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();

function watchActions() {
  watch("./index.html", function(){
    browserSync.reload();
  });
  watch("./src/styles/*.css", function(){
    gulp.start("cssInject");
  });
  watch('./src/js/*.js', function(){
    gulp.start('scriptsRefresh');
  });
}

gulp.task("watch", function(){

  browserSync.init({
    server: {
      baseDir: "./",
    }
  });

  watchActions();

});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./src/styles/*.css")
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
