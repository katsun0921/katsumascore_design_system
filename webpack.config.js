const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const enabledSourceMap = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: './src/js/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'ts-loader'
        ]
      },
      {
        test: /.(jpg|png|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '../img/[name].[ext]',
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          // CSSファイルを抽出するように MiniCssExtractPlugin のローダーを指定
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするためのローダー
          {
            loader: 'css-loader',
            options: {
              //URL の解決を無効に
              url: false,
              // production モードでなければソースマップを有効に
              sourceMap: enabledSourceMap,
              // postcss-loader と sass-loader の場合は2を指定
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          // PostCSS（autoprefixer）の設定
          {
            loader: 'postcss-loader',
            options: {
              // PostCSS でもソースマップを有効に
              sourceMap: enabledSourceMap,
              postcssOptions: {
                // ベンダープレフィックスを自動付与
                plugins: [
                  require('autoprefixer')({
                    // Specify autoprefixer options, if any
                    grid: true
                  }),
                  require('css-declaration-sorter')({
                    order: 'concentric-css'
                  }),
                  require('postcss-sort-media-queries')({
                    sort: 'mobile-first',
                  }),
                ],
              },
            },
          },
          // Sass を CSS へ変換するローダー
          {
            loader: 'sass-loader',
            options: {
              //  production モードでなければソースマップを有効に
              sourceMap: enabledSourceMap,
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'build.css'
    }),
    new StylelintPlugin({
      fix: true,
    }),
  ],
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss')
    },
    extensions: [
      '.ts', '.js',
    ],
  }
};
