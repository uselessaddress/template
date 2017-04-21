var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
module.exports = {
    stats: {
        colors: true,
        chunks: true,
        children: false
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/pub/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0'],

                }
            },
            // {
            //     test: /\.(less|css)$/,
            //     loader: ExtractTextPlugin.extract({
            //         use: [{
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //                 localIdentName: '[name]_[local]-[hash:base64:5]'
            //             }
            //         }, {
            //             loader: 'less-loader'
            //         }]
            //     })
            // },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            // { test: /\.css$/, loader:ExtractTextPlugin.extract({
            //                             fallback: 'style-loader',
            //                             use: 'css-loader?modules' 
            //                             })},
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader', 'sass-loader']
            //     })
            // },
            // {
            //     test: /\.(png|jpg|ico)$/,
            //     loader: 'url-loader?limit=10000&name=img/[name].[hash:8].[ext]'
            // },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)\w*/,
            //     loader: 'file-loader'
            // },
            {　　　　　　
                test: /\.(png|jpg)$/,
                loader: 'file-loader?limit=8192&name=images/[hash:8].[name].[ext]'　　　　
            }
        ]
    },
    devServer: {
        contentBase: "./pub/"
    },
    resolve: {
        alias: {
            'jquery': path.resolve(__dirname, './src/js/jquery-1.12.0.min.js')
        }
    },
    plugins: [
        new ExtractTextPlugin({ filename: '[name].css' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: 'html-withimg-loader!' + './index.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'news.html',
            template: 'html-withimg-loader!' + './src/html/news.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'department.html',
            template: 'html-withimg-loader!' + './src/html/department.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'member.html',
            template: 'html-withimg-loader!' + './src/html/member.html'
        }),
        new TransferWebpackPlugin([]),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
        // new webpack.DllReferencePlugin({
        //     context: __dirname+'/pub',
        //     manifest: require("./pub/bundle.manifest.json"),
        // }),
    ]
}



// const path = require('path'),
//     HtmlWebpackPlugin = require('html-webpack-plugin'),
//     ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//     stats: {
//         colors: true,
//         children: false
//     },
//     entry: {
//         index: '.c/app/index.jsx'
//     },
//     output: {
//         path: path.join(__dirname, '/dist/'),
//         filename: 'js/[name].[hash:8].js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(less|css)$/,
//                 loader: ExtractTextPlugin.extract({
//                     use: [
//                         {
//                             loader: 'css-loader',
//                             options: {
//                                 modules: true,
//                                 localIdentName: '[name]_[local]-[hash:base64:5]'
//                             }
//                         }, {
//                             loader: 'less-loader'
//                         }
//                     ]
//                 })
//             }, {
//                 test: /\.js(x)?$/,
//                 exclude: de_modules/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015', 'stage-0', 'stage-2', 'react']
//                 }
//             }, {
//                 test: /\.(png|jpg|ico)$/,
//                 loader: 'url-loader?limit=10000&name=img/[name].[hash:8].[ext]'
//             }, {
//                 test: /\.(eot|svg|ttf|woff|woff2)\w*/,
//                 loader: 'file-loader'
//             }
//         ]
//     },
//     devServer: {
//         contentBase: "./dist"
//     },
//     plugins: [
//         new ExtractTextPlugin({filename: 'css/[name].[hash:8].css'}),
//         new HtmlWebpackPlugin({inject: 'body', chunks: ['index'], filename: 'index.html', template: '.c/index.html'})
//     ]
// };