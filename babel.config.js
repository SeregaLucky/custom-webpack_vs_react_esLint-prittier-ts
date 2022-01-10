const { NODE_ENV, DEVELOPMENT } = process.env;

const plugins = ['@babel/plugin-transform-runtime'];
if (NODE_ENV === DEVELOPMENT) {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    // '@babel/preset-env',
    ['@babel/preset-env', { modules: false }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],

  plugins,
};

// babel.config.js;
// .babelrc

// {
//   "presets": [
//     "@babel/preset-env",
//     ["@babel/preset-react", { "runtime": "automatic" }]
//   ],

//   "plugins": ["react-refresh/babel"]
// }
