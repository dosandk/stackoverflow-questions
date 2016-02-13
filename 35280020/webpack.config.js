'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        app: 'app/js/main.js'
    },
    output: {
        path: __dirname + 'dist/js',
        filename: 'main.js'
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ],
    resolve: {
        modulesDirectories: ['./'],
        alias: {
            jquery: 'app/js/libs/jquery',
            underscore: 'app/js/libs/underscore',
            backbone: 'app/js/libs/backbone',
            text: 'app/js/libs/text'
        }
    },
    resolveLoader: {
        alias: {
            text: 'raw-loader'
        }
    }
};