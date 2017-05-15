var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports =
{
    entry: {
        // 第三方包
        'index': './src/index.js',
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        path : __dirname + '/dist',
        filename: '[name].[hash].js',
        publicPath: '/',
        chunkFilename:'[name].[hash].js'
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
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "[name].[hash].js"}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                'screw_ie8': true,
                'warnings': false,
                'unused': true,
                'dead_code': true,
            },
            output: {
                comments: false,
            },
            sourceMap: false,
        })
    ]
};