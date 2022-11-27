const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "ngMfNotification",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name: "ngMfNotification",
      filename: "remoteEntry.js",
      exposes: {
        "./OverviewModule": "./src/app/overview/overview.module.ts",
        "./AddAlertButtonComponent": "./src/app/single-components/add-alert-button/add-alert-button.component.ts",
      },

      shared: {
        "@angular/core": { singleton: true, strictVersion: false, requiredVersion: "auto" },
        "@angular/common": { singleton: true, strictVersion: false, requiredVersion: "auto" },
        "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: "auto" },
        "@angular/router": { singleton: true, strictVersion: false, requiredVersion: "auto" },
        "@ng-mf/shared": { singleton: true, strictVersion: false, requiredVersion: "auto" },
      },
    }),
  ],
};
