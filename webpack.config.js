const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode: mode,
    target: target,
    devtool: devtool,
    entry: path.resolve(__dirname, 'src/js/entries', 'index.js'),
    output: {
        filename: 'script.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin(
            template = path.resolve(__dirname, 'src', 'index.html')
        )
    ],
}