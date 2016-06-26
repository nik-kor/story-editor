var path = require('path');
module.exports = {
	entry: {
		app: ['./src/entry.js']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: "./dist"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: [
					'style-loader',
					'css-loader?sourceMap',
					'postcss-loader'
				].join('!')
			},
	 		{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel', // 'babel-loader' is also a legal name to reference
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolveLoader: {
		root: [
			path.join(__dirname, 'node_modules')
		]
	},
	devtool: 'source-map',
	resolve: {
		root: [
			path.join(__dirname, 'node_modules'),
		],
		extensions: ['', '.js', '.jsx', '.css'],
	},
    postcss: [
		require('postcss-nested'),
		require('postcss-custom-properties'),
		require('autoprefixer'),
	]
};
