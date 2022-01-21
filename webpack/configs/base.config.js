const { DefinePlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const paths = require('../utils/paths');
const modes = require('../utils/modes');

dotenv.config();

module.exports = (env, args) => {
  const { mode } = args;
  // console.log(11111111111, mode);

  const prodMode = mode === modes.PRODUCTION;

  return {
    mode,
    stats: 'minimal',
    devtool: prodMode ? 'source-map' : 'eval-cheap-source-map',
    target: ['web', 'es5'],
    context: paths.SRC_DIR,

    entry: '/index.tsx',

    output: {
      path: paths.BUILD_DIR,
      filename: prodMode
        ? 'js/[name].[contenthash].bundle.js'
        : './[name].bundle.js',
      publicPath: '',
      clean: true,
      assetModuleFilename: 'images/[name].[hash].[ext][query]',
    },

    module: {
      rules: [
        {
          test: /\.html$/,
          use: 'html-loader',
        },
        {
          test: /\.(js|jsx)$/,
          include: /src/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          include: /src/,
          use: ['babel-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
          generator: {
            filename: 'images/[name].[hash].[ext][query]',
          },
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|)$/,
          type: 'asset/inline',
        },
        {
          test: /\.txt$/,
          type: 'asset/source',
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: prodMode ? 'index.[contenthash].html' : 'index.html',
        template: `${paths.PUBLIC_DIR}/index.html`,
        inject: 'body',
        minify: prodMode,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: `${paths.PUBLIC_DIR}/favicon.ico`,
            to: paths.BUILD_DIR,
          },
        ],
      }),

      new ProvidePlugin({
        process: 'process/browser',
      }),

      new DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        process: 'process/browser',
        '@src': paths.SRC_DIR,
      },
    },
  };
};
