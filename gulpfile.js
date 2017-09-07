(function() {
    'use strict';
    var gulp = require('gulp'),
        less = require('gulp-less'),
        minifycss = require('gulp-minify-css');


    // CSS预处理
    gulp.task('less-task', function() {
        return gulp.src('./source/css/less/*.less')
        .pipe(less())
        .pipe(minifycss())
        .pipe(gulp.dest('./source/css/'))
    });

    // 默认执行的任务
    gulp.task('default',['less-task'])

})();

