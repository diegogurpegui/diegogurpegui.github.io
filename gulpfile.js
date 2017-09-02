'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('libs', function () {
    let libFiles = [
        './node_modules/font-awesome/css/font-awesome.min.css',
        './node_modules/font-awesome/fonts/*.*'
    ];

    return gulp
        .src(libFiles, { base: './node_modules/' })
        .pipe(gulp.dest('./libs'));
});
