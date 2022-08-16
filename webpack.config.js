const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // extract css to files
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    watchFiles: ["./src/**/*.hbs", "./resume.json"],
    static: './dist',
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        type: 'json',
      },

      {
        test: /\.hbs$/,
        use: [{
          loader: "handlebars-loader",
          options: {
            runtime: path.resolve(__dirname, "src", "runtime"),
            partialDirs: [path.join(__dirname, "src", "partials")],
            helperDirs: path.join(__dirname, "src", "helpers"),
            precompileOptions: {
                knownHelpersOnly: false,
            },
          },
        }],
      },
      
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'assets',
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: "src/template.js",
      filename: "index.html",
    }),
  ],
};
