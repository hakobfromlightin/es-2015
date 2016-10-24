var webpack = require('webpack');

module.exports = {
    entry: './src/modules.js',
    devtool: 'source-map',
    output: {
        filename: './dist/modules.js'
    },
    module: {
        loaders: [
            { test: "/\.js$/", loader: 'buble'}
        ]
    }
};