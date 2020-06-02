let gulp = require("gulp");
let clean = require("gulp-clean");
let imagemin = require("gulp-imagemin");
let fileinclude = require("gulp-file-include");

let browserSync = require("browser-sync").create();
let reload = browserSync.reload;

gulp.task("clean", function () {
  return gulp.src("build", { read: false }).pipe(clean());
});

gulp.task("html", function () {
  return gulp.src("./*.html").pipe(fileinclude()).pipe(gulp.dest("build"));
});

gulp.task("css", function () {
  return gulp.src("./src/css/*.css").pipe(gulp.dest("build/src/css"));
});

gulp.task("img", function () {
  // return gulp.src("./src/**/*.{png,jpg}").pipe(imagemin()).pipe(gulp.dest("build/src/"));
  return gulp.src("./src/**/*.{png,jpg}").pipe(gulp.dest("build/src/"));
});

gulp.task("icon", function () {
  return gulp.src("./src/icon/*.{gif,ico}").pipe(gulp.dest("build/src/icon"));
});

gulp.task("js", function () {
  return gulp.src("./src/js/*.js").pipe(gulp.dest("build/src/js"));
});

gulp.task("webserver", function () {
  browserSync.init({
    server: "./build",
  });

  gulp.watch("./*.html", gulp.series("html")).on("change", reload);
  gulp.watch("./src/css/*.css", gulp.series("css")).on("change", reload);
  gulp.watch("./src/js/*.js", gulp.series("js")).on("change", reload);
  gulp.watch("./src/icon/*.*", gulp.series("icon", "img")).on("change", reload);
  gulp.watch("./src/img/*.*", gulp.series("icon", "img")).on("change", reload);
});

gulp.task("build", gulp.series("css", "html", "icon", "img", "js"));

gulp.task("default", gulp.series("build", "webserver"));
