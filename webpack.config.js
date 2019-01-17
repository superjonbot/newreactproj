//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    }
};

var cachebuster = Math.round(new Date().getTime() / 1000);

console.log('cachebuster:'+cachebuster)
module.exports = {
    mode: 'none',
    entry: {    'main':['babel-polyfill','./build/main.js']
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


/*        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })*/

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })

/*

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJsPlugin()

*/

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