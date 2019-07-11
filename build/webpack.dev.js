'use strict';

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: [
			path.resolve(__dirname, '../test/index.js')
		]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: 'style-loader!css-loader!sass-loader'
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: 'babel-loader'
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf)$/,
				loader: 'file-loader'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(['css-loader'])
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue']
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './template/index.html'),
			inject: 'head'
		})
	],
	devtool: "source-map"
};
