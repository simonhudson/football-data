'use strict';

module.exports = [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		options: {
			presets: ['@babel/react']
		}
	},
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		loader: 'file-loader'
	},
	{
		test: /\.json$/,
		exclude: /node_modules/,
		loader: 'json-loader'
	},
	{
		test: /\.(woff|woff2)$/,
		exclude: /node_modules/,
		loader: 'url-loader?prefix=font/&limit=5000'
	},
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
	},
	{
		test: /\.(jpe?g|png|gif|svg)$/i,
		use: ['url-loader?limit=10000', 'img-loader']
	}
];