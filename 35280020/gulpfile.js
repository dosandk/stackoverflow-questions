var gulp = require('gulp');
var webpack = require('gulp-webpack');
var connect = require('gulp-connect');

gulp.task('runLocalServer', function() {
    connect.server({
        port: 6042,
        root: './'
    });
});