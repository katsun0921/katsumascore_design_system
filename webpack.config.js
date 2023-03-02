const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
	mode: 'development',
	entry: './src/scss/index.scss',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
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
			filename: 'build.css'
		}),
		new FixStyleOnlyEntriesPlugin(),
	],
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss')
    }
  }
};
