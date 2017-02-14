var webpack = require('webpack');

module.exports =
{
    entry: {
        // 第三方包
        'index': './src/index.js',
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path : __dirname + '/dist',
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.png$/,
            loader: "url-loader",
            query: { mimetype: "image/png" }
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"}),
        new webpack.HotModuleReplacementPlugin()
    ]
};