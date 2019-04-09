const path = require('path'); 
const HtmlWebPackPlugin = require('html-webpack-plugin'); 


module.exports = {
  entry: './src/index.js',
  output: {       
    filename: 'main.js',      
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })
], 
};           