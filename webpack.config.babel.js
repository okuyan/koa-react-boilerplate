const config = {
  entry: [
    './src/client/index.js',
  ],
  output: {
    path: `${__dirname}/dist/client/`,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
};

export default config;
