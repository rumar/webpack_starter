process.env.NODE_ENV = "development";

const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let Config = require('./webpack.config.js');

Config.devtool = 'cheap-module-source-map';
Config.mode = 'development';

Config.watch = true;

Config.devServer = {
	contentBase: __dirname,
	publicPath: "/",
	hot: true,
	open: true,
	// proxy: [{
	// 	context: ['**', '!/assets/**'],
	// 	target: 'http://localhost:5000'
	// }]
};


module.exports = Config;