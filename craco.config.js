const CracoLessPlugin = require("craco-less");

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
};
