const pug = require('gulp-pug'),
      gulp = require('gulp'),
      bs = require('browser-sync').create();


function buildHTML() {
    return gulp.src('index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./_site'))
    .pipe(bs.stream());
}

function browserSync(done) {
    bs.init(
        {
        server: 
        {
            baseDir: './_site',
            index: 'index.html',
            notify: false
        }
    });
    done();
}

function css() {
    return gulp.src('main.css')
    .pipe(gulp.dest('./_site'))
    .pipe(bs.stream());
}

function watch() {
    gulp.watch('./**', gulp.parallel(buildHTML, css));
}

gulp.task("default", gulp.series(buildHTML, css, browserSync, watch));