const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
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
    //Чтобы работали пути ("paths": {"#api/*": ["src/services/*"]}),
    //которые указаны в текст tsconfig.json
    plugins: [
      new TsconfigPathsPlugin({ configFile: path.resolve(process.cwd(), 'tsconfig.json') }),
    ],
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
        use: [
          // Creates `style` nodes from JS strings
          "style-loader", 
          // Translates CSS into CommonJS
          "css-loader", 

          //Кроссбраузерность
          //Браузеры не имеют единого стандарта 
          //и могут по-разному отображать один и тот же элемент.
          // В некоторых случаях для этого используют вендорные 
          // префиксы перед новыми CSS-свойствами. Например, 
          // не все браузеры могут одинаково хорошо прочитать время срабатывания анимации. 
          // Чтобы решить этот вопрос, ставят префикс — приставку. 
          // Таким образом создается отдельное свойство под конкретный браузер, 
          // и вместо нормального transition-duration:0.76s, мы получаем:
          // -webkit-transition-duration:0.76s;
          // -moz-transition-duration:0.76s;
          // -o-transition-duration:0.76s;
          // -ms-transition-duration:0.76s;
          // где webkit, moz, o, ms — это префикс.
          "postcss-loader",

          // Compiles Sass to CSS
          "sass-loader",
          
          // compiles Less to CSS
          //"less-loader",
        ],
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