const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const brandPath = `src/brands/${process.env.APP_BRAND}`;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin( {
        inject: true,
        template: 'public/index.html',
    })
  ],
  resolve: {
    modules: [brandPath, 'src/brands/default', 'node_modules']
  }
};