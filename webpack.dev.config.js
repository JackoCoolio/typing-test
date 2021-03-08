const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
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
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.scss?$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
        ],
    },
    target: 'electron-renderer',
    plugins: [
        new HtmlWebpackPlugin({ title: 'Typing Test [DEV]' }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        stats: {
            colors: true,
            chunks: false,
            children: false,
        },
        before() {
            spawn('electron', ['.'], {
                shell: true,
                env: process.env,
                stdio: 'inherit',
            })
                .on('close', code => process.exit(0))
                .on('error', spawnError => console.error(spawnError))
        },
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
