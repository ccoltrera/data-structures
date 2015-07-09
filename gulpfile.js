var gulp = require("gulp");
var mocha = require("gulp-mocha");
var jshint = require("gulp-jshint");

gulp.task("test", function() {
  return gulp.src("./test/*Test.js")
              .pipe(mocha());
});

gulp.task("lint", function() {
  return gulp.src(["./*.js", "./lib/*.js", "./test/*.js"])
              .pipe(jshint())
              .pipe(jshint.reporter("default"));
});

gulp.task("watch", function(){
  gulp.watch(["./*.js", "./lib/*.js", "./test/*.js"], ["test", "lint"]);
});
