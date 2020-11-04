/* eslint-disable */

const path = require('path');

const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: false,
  entry: {
    main: ['@babel/polyfill', './src/app/index.js', './src/css/main.sass'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react',
                {
                  plugins: ['@babel/plugin-proposal-class-properties'],
                },
              ],
            },
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [autoprefixer],
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/img', to: 'img' }]),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({ sourceMap: true }),
      new ImageMinPlugin({
        test: /\.(png|cur|jpe?g|gif|svg)$/,
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { sourceMap: true },
      }),
    ],
  },
};
