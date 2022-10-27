// HTML LUGIN
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './js/app.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './index.html',
            filename: 'index.html'
        })

    ]
};