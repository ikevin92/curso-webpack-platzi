const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      // {
      //   test: /\.scss$/,
      //   loader: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
      // },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ['file-loader'],
      // },
    ],
  },
};
