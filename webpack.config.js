// HTML LUGIN
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './js/app.js',
    mode: 'development',
    devServer: {
        open: true
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'Images'
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin()

    ]
};