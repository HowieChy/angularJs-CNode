/**
 * Created by chenhaoyun on 2016/4/29.
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: ( './js/entry.js'),
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader!less-loader")},
            {test: /\.css$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")},
            {test: /\.(png|jpg|gif)$/, loader: "url?limit=8192&name=images/[name].[ext]" },
            {test: /\.eot/, loader: "file?name=font/[name].[ext]"},
            {test: /\.woff/,loader: "url?limit=10000&minetype=application/font-woff&name=font/[name].[ext]"},
            {test: /\.ttf/, loader: "file?name=font/[name].[ext]"},
            {test: /\.svg/, loader: "file?name=font/[name].[ext]"}
        ]
    },
    postcss:function(){
        return [require('autoprefixer'),require('precss')];
    },
    resolve: {
        alias: {
            jquery: "./jquery.min.js"
        }
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]

};