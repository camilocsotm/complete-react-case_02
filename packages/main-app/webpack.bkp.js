const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies } = require("../../package.json");

module.exports = (config, context) => {
  // config.module.rules.push(
  //   {
  //     test: /\.(jpg|png|gif|jpeg)$/,
  //     loader: "url-loader",
  //   },
  //   {
  //     test: /\.jsx?$/,
  //     loader: "babel-loader",
  //     exclude: /node_modules/,
  //     options: {
  //       presets: ["@babel/preset-react"],
  //     },
  //   }
  // );
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "main_app",
      remotes: {
        "lib-app": "lib_app@http://localhost:3000/remoteEntry.js",
        "component-app": "component_app@http://localhost:3001/remoteEntry.js",
      },
      shared: { ...dependencies },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  );
  // config.plugins.push(

  // );
  config.output.publicPath = "http://localhost:3002/";

  return config;
};
