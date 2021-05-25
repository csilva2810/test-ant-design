const { whenProd } = require("@craco/craco");
const CracoLessPlugin = require("craco-less");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const primaryColor = "#000E5C";

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": primaryColor },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    plugins: {
      add: [...whenProd(() => [new BundleAnalyzerPlugin()], [])],
    },
  },
};
