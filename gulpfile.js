let gulp = require("gulp");
let clean = require("gulp-clean");
let imagemin = require("gulp-imagemin");

gulp.task("clean", function () {
  return gulp.src("build", { read: false }).pipe(clean());
});

gulp.task("html", function () {
  return gulp.src("./*.html").pipe(gulp.dest("build"));
});

gulp.task("css", function () {
  return gulp.src("./src/css/*.css").pipe(gulp.dest("build/src/css"));
});

gulp.task("img", function () {
  return gulp.src("./src/**/*.{png,jpg}").pipe(imagemin()).pipe(gulp.dest("build/src/"));
});

gulp.task("icon", function () {
  return gulp.src("./src/icon/*.{gif,ico}").pipe(gulp.dest("build/src/icon"));
});

gulp.task("js", function () {
  return gulp.src("./src/js/costume.js").pipe(gulp.dest("build/src/js"));
});

gulp.task("build", gulp.series("css", "html", "icon", "img"));
