const path = require("path");
var webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {
  performance : {
    hints : false
},
  devServer: {
    watchFiles: ["src/**/*"],
    port: 1200,
    hot: true,
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
       new HtmlMinimizerPlugin(),
       new CssMinimizerPlugin(),
       new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  stats: {
    children: true,
  },
  entry:{
    index: {
      import:'./src/index.js',
      filename: 'static/js/bundle.js' // Tên file được build ra
    }
  }, // Dẫn tới file index.js ta đã tạo
  output: {
    clean: true,
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(sass|scss|css)$/, // Sử dụng style-loader, css-loader cho file .css
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new webpack.BannerPlugin('Name: WEB-12 ; Version-Deployment : v1.0; Version-Test: v1.1'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/views/contact.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'doctor.html',
      template: './src/views/doctor.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'introduce.html',
      template: './src/views/introduce.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'news.html',
      template: './src/views/news.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'news-detail.html',
      template: './src/views/news-detail.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'price.html',
      template: './src/views/price.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'service.html',
      template: './src/views/service.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/views/404.html',
      inject: "body",
      chunks: ['index'],
    }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].min.css",
      }),
  ]
};
