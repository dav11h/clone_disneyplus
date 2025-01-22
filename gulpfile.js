const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles'))
}
function minCSS() {
    return gulp.src('./dist/styles/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/styles'))
}


exports.watch = function(){
    gulp.watch('./src/styles/*scss',gulp.series(styles , minCSS))
}