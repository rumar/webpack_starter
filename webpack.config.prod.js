process.env.NODE_ENV = 'production';

const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
let Config = require("./webpack.config.js");

Config.devtool = "cheap-source-map";

Config.mode = 'production';

Config.optimization = {
    minimizer: [
        new UglifyJsPlugin(),
	    new OptimizeCSSAssetsPlugin({})
    ]
};

Config.plugins = (Config.plugins || []).concat([
	new CopyWebpackPlugin([
		{
			from: path.resolve(__dirname, "./assets/"),
			to: path.resolve(__dirname, "./dist/assets/")
		}
	])
]);

module.exports = Config;
