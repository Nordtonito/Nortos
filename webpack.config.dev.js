/* eslint-disable */

const path = require('path');

const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: false,
  entry: {
    main: ['./src/app/index.js', './src/css/main.sass'],
  },
  output: {
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react'],
              cacheDirectory: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader',
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
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          'img-loader',
        ],
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        devServer: true,
      },
    }),
    new CopyWebpackPlugin([{ from: 'src/img', to: 'img' }]),
    new CopyWebpackPlugin([{ from: 'public/favicon.ico', to: '.' }]),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
    }),
  ],
};
