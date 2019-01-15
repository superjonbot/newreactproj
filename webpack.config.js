//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var cachebuster = Math.round(new Date().getTime() / 1000);

console.log('cachebuster:'+cachebuster)
module.exports = {
    mode: 'none',
    entry: {    'main':['./build/main.js']
    },
    output:{
        path:__dirname,
        filename: './dist/[name].js'
    },
    plugins: [
     /*   new UglifyJsPlugin(),*/
/*        new HtmlWebpackPlugin({
            template: './templates/index.ejs',

            title: 'A+E CAF Player',
            vars:{cachebuster:cachebuster},

            filename: './build/player.html',
            inject: false,
            minify: {
                collapseWhitespace: false,
                conservativeCollapse: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './templates/data.json',

            title: 'A+E CAF Player',
            vars:{cachebuster:cachebuster},

            filename: './build/data.json',
            inject: false,
            minify: {
                collapseWhitespace: false,
                conservativeCollapse: true
            }
        }),
        new ExtractTextPlugin({
            filename: './build/css/page.css',
            allChunks: true,
        }),*/
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })


    ],
    module:{
        rules: [
 /*           {test: /\.css$/, loader:"style-loader!css-loader"},
            {test: /\.(sass|scss)$/, loader:'style-loader!css-loader!sass-loader', exclude: /page.scss/},
            {test: /\.js$/, loader:"babel-loader", exclude: /node_modules/, query:{presets:[["es2015"]]}},
            { // sass / scss loader for webpack
                test: /page\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {test: /\.vue$/, loader: 'vue-loader'}*/

        ]

    }
}