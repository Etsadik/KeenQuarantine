const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');


module.exports = {
  entry: `${SRC_DIR}/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: `${SRC_DIR}/dist`,
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: [/\.css$/],
        use: {
          loader: 'style-loader',
        },
      },
      {
        test: [/\.css$/],
        use: {
          loader: 'css-loader',
          query: {
            modules: true,
          },
        },
      },
    ]
  }
};

