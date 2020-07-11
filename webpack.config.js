module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./src/plugin.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      }
    ]
  },
  output: {
    filename: 'plugin.js',
    library: 'VueKeepAliveDev',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue',
    },
  },
};
