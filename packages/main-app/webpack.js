const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies } = require("../../package.json");
const path = require("path");

module.exports = (config, context) => {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "main_app",
      filename: "remoteEntry.js",
      remotes: {
        "lib-app": "lib_app@http://localhost:3000/remoteEntry.js",
        "component-app": "component_app@http://localhost:3001/remoteEntry.js",
      },
      shared: { ...dependencies },
    })
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    // })
  );
  config.output.publicPath = "http://localhost:3002/";

  return config;
};
