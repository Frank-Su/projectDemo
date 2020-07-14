const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const Config = require('../SystemConfig');

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  optimization: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    // new WorkboxPlugin.GenerateSW({
    //   cacheId: 'ekasVendingMachine', // set prefix
    //   skipWaiting: true, // wait for Service Worker to be active
    //   clientsClaim: true, // Service Worker active and get the contorl of the page
    //   swDest: 'service-wroker.js', // output  Service worker file
    //   importWorkboxFrom: 'cdn',
    //   runtimeCaching: [
    //     // router ask for cache
    //     {
    //       urlPattern: /.*\.js/, // match file
    //       handler: 'NetworkFirst' // network first
    //     }
    //   ]
    // }),
    // new WebpackPwaManifest({
    //   ...Config.prod.WebpackPwaManifestConfig
    // }),
    new MiniCssExtractPlugin({}),
    new CompressionPlugin({ test: /\.js(\?.*)?$/i, algorithm: 'gzip' })
  ],
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  }
};

module.exports = env => {
  return merge(commonConfig, prodConfig);
};
