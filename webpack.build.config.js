const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.jsx?$/,
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader:
                            'file-loader?name=img/[name]__[hash:base64:5].[ext]',
                    },
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader:
                            'file-loader?name=font/[name]__[hash:base64:5].[ext]',
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: [{ loader: 'ts-loader' }],
            },
            {
                test: /\.scss?$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
        ],
    },
    target: 'electron-renderer',
    plugins: [
        new HtmlWebpackPlugin({ title: 'Typing Test' }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'bundle.css',
            chunkFilename: '[id].css',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
    stats: {
        colors: true,
        children: false,
        chunks: false,
        modules: false,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            Assets: path.resolve(__dirname, 'assets'),
            Util: path.resolve(__dirname, 'src', 'util'),
            Store: path.resolve(__dirname, 'src', 'store'),
        },
    },
}
