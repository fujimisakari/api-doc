const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    jsx: './index.jsx',
    html: './index.html',
    js: './resizer.js',
  },

  output: {
    path: path.join(__dirname, '/static'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      // Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.md$/, loader: 'raw-loader' },
      { test: /resizer\.js$/, loader: 'file?name=[name].[ext]' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.md'],
  },
};
