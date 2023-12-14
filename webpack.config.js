const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//const devtool = devMode ? 'inline-source-map' : undefined

module.exports = {
  //для ошибок
  devtool : 'inline-source-map',
  mode : 'development',
  devServer: {
    //contentBase: './dist',
    port: 3030,
    open: false,
    hot: true, // Включает автоматическую перезагрузку страницы при изменениях
    historyApiFallback: true, //перенаправит ошибки 404 на /index.html.
  },
  entry: './src/index.tsx',
  output : {
    //название бандла
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react', '@babel/preset-typescript'
            ]
          }
        }
      },
      //CSS
      {
        test: /\.(css|scss)$/i,
        //use: [MiniCssExtractPlugin.loader, 'css-loader']
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      // Loading pictures
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        type: 'asset/resource',
      },
      // Loading fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  }
}