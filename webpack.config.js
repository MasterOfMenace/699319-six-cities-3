const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    publicPath: `/`,
    proxy: {
      '/offer': {
        target: `http://localhost:1337/`,
        pathRewrite: {'^/offer': ``},
      },
    },
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: {
          loader: `babel-loader`,
        },
      },
    ],
  },
  devtool: `source-map`,
};
