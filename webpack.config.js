module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },

      {
        test: /.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
    ],
  },
};
