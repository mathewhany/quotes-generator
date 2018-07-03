module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
