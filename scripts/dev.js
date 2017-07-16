/**
 * 开发脚本
 */

process.env.NODE_ENV = 'development'
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const compiler = webpack(require('../webpack.config.js'))

const devServer = new WebpackDevServer(compiler, {
    hot: true,
    historyApiFallback: true,
})

devServer.listen(8080, '0.0.0.0', err => {
    if (err) {
        return console.error(err)
    }
    console.log('开发服务器启动完成')
})