'use strict';

var webpack = require('webpack');

var customResolverPlugin = {
    apply: function (resolver) {
        resolver.plugin('resolve', function (context, request) {
            const matchLoadRequest = /^\[(.+)]$/.exec(request.path);

            if (matchLoadRequest) {
                request.query = '?' + JSON.stringify(matchLoadRequest[1].split(', '));
                request.path = __filename;
            }
        });
    }
};

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
        }),
        {
            apply: function (compiler) {
                compiler.resolvers.normal.apply(customResolverPlugin);
            }
        }
    ],
    resolve: {
        root: __dirname,
        modulesDirectories: ['./'],
        alias: {
            jquery: 'app/js/libs/jquery',
            underscore: 'app/js/libs/underscore',
            backbone: 'app/js/libs/backbone',
            text: 'app/js/libs/text',
            load: 'app/js/libs/load'
        }
    },
    resolveLoader: {
        alias: {
            text: 'raw-loader',
            load: require.resolve('./loadLoader.js')
        }
    }
};