const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const clientConfig = {
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist.client'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist.client',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Jollyball',
        }),
    ],
};

module.exports = clientConfig;