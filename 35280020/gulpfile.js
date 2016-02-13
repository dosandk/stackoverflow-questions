var gulp = require('gulp');
var webpack = require('gulp-webpack');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('clean', function () {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});

gulp.task('runLocalServer', function() {
    connect.server({
        port: 6042,
        root: './'
    });
});

gulp.task('build:require', ['clean'], function () {
    return gulp.src(['./app/js/main.js'])
        .pipe(requirejsOptimize({
            baseUrl: './',
            name: 'app/js/main',
            mainConfigFile: 'app/js/main.js',
            optimize: 'none',
            throwWhen: {
                optimize: true
            },
            findNestedDependencies: true,
            paths: {
                requireLib: 'app/js/libs/require'
            },
            include: ['requireLib'],
            optimizeAllPluginResources: true,
            preserveLicenseComments: false
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build:webpack', ['clean'], function () {
    return gulp.src(['./app/js/main.js'])

        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['build:require', 'runLocalServer']);
