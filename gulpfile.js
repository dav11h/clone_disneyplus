const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleanCSS = require('gulp-clean-css')
const minimages = require('gulp-imagemin')

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

function minIMAGENS() {
    return gulp.src('./src/images/**/*')
        .pipe(minimages())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.series(styles,minCSS)

exports.watch = function(){
    gulp.watch('./src/styles/*scss',gulp.series(styles , minCSS))
}