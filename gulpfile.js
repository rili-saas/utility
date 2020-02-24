var gulp = require("gulp"),
  bump = require("gulp-bump");

function dist() {
  function clean() {
    return del([
      "./dist/**/*"
      // '!./developer/assets',
      // '!./developer/assets/**'
    ]);
  }

  function js() {
    return gulp
      .src(["./src/components/**/*.js"])
      .pipe(
        babel({
          presets: ["es2015", "stage-0", "react"],
          plugins: ["transform-es2015-modules-commonjs"]
        })
      )
      .pipe(gulp.dest("./dist/"));
  }

  function version() {
    return gulp
      .src(["./package.json"])
      .pipe(
        bump({
          type: "patch"
        })
      )
      .pipe(gulp.dest("./"));
  }
  // major: 1.0.0
  // minor: 0.1.0
  // patch: 0.0.2
  // prerelease: 0.0.1-2

  return gulp.series(version);
}

gulp.task("dist", dist());
