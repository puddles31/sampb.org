const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
    plugins: [
        new Dotenv(),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    ]
}
