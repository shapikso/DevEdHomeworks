import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config: Configuration = {
  entry: "./src/js/index.ts",
  mode: "development",
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
      new HtmlWebpackPlugin({ template: "./src/index.html" }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        eslint: {
          files: "./src/js/*",
        },
      }),
      new HtmlWebpackPlugin( {
        filename: "descriptionFilm.html",
        template: "./src/description.html",
        chunks: [ 'page' ]
    } ),
],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};
export default config;