const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: './src/index.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'env', 
							'react'
						]
					}
				}          
			}, {
				test: /\.(css)|(scss)$/,
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			inject: false,
			template: require('html-webpack-template'),
			lang: 'en-US',
			title: 'Fufu\'s Restaurant',
			link: [{
				href: '/style.css',
				rel: 'stylesheet',
				type: 'text/css'
			},{
				href: 'https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900',
				rel: 'stylesheet'
			}]
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			disable: process.env.NODE_ENV === "development",
			allChunks : true
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
