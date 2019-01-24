var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();

gulp.task("print-error", ["cssInject"], function() {
  gulp.watch("errorz.log")
})
