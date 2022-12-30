const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
	mode: 'development',
	entry: './src/style/index.scss',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new FixStyleOnlyEntriesPlugin(),
	],
};
