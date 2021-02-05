const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/dist/',
        filename: 'js/app.js'
  },
  resolve:{
    alias: {
      page: path.resolve(__dirname, 'src/page'),
      component: path.resolve(__dirname, 'src/component')
    }
  },
  module: {
  rules: [
    {
      test: /\.m?jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    },
    {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
      },
    {
        test: /\.scss$/i,
        use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader","sass-loader"]
      })
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'resource/[name].[ext]'
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'resource/[name].[ext]'
            },
          },
        ],
      }
  ]
},
  plugins: [
    //process html
      new HtmlWebpackPlugin({
          template:  './src/index.html',
          favicon: './src/favicon.ico'
        }),
        //package css
      new ExtractTextPlugin("css/[name].css"),
      //new ExtractTextPlugin("index.css"),
      new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'js/base.js'
      })
    ],
  devServer: {
    port:3000,
    historyApiFallback: {
      index:'/dist/index.html'
    }
  }

};


