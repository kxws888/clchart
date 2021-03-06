const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const commonConfig = {
  entry: {
    app: './src/cl.api'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: 'clchart.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ClChart',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
}

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './samples'),
          to: path.resolve(__dirname, './dist/')
        }
      ])
    ],
    devServer: {
      contentBase: path.join(__dirname, './dist')
    }
  })
} else {
  module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          }
        },
        sourceMap: true,
        parallel: true
      })
    ]
  })
}