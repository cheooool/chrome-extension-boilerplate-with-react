/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    background: path.resolve('src/background/background.ts'),
    contentScript: path.resolve('src/contentScript/contentScript.tsx'),
    popup: path.resolve('src/popup/popup.tsx'),
    options: path.resolve('src/options/options.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist'),
        },
      ],
    }),
    new HtmlPlugin({
      title: 'Chrome Extension',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlPlugin({
      title: 'Chrome Extension',
      filename: 'options.html',
      chunks: ['options'],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: (chunk) => {
        return chunk.name !== 'contentScript' && chunk.name !== 'background';
      },
    },
  },
};
