const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  favicon: "./public/favicon.ico",
});

module.exports = {
  entry: "./src/index.tsx",
  target: ["web", "es5"], // "es5" as a single value can break hot reload
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|swf)$/i,
        loader: "file-loader",
        options: {
          name: "img/[name]-[hash:6].[ext]",
          esModule: false,
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name]-[hash:6].[ext]",
          esModule: false,
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
    alias: {
      images: path.resolve(__dirname, "src/assets/images"),
      fonts: path.resolve(__dirname, "src/assets/fonts"),
    },
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "/", // nested routes redirect is working
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin()],
  devServer: {
    historyApiFallback: true,
  },
};
