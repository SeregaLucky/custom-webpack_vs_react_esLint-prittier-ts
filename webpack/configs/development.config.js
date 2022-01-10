const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, args) => {
  return {
    stats: 'minimal',
    devtool: 'eval-cheap-source-map',

    module: {
      rules: [
        {
          test: /\.js$/,
          include: /src/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },

    plugins: [new ReactRefreshWebpackPlugin()],

    devServer: {
      port: 3000,
      compress: true,
      historyApiFallback: true,
      hot: true,
    },
  };
};
