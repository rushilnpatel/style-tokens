import StyleDictionary from 'style-dictionary';

// Filter to check if a token is from the brand folder
StyleDictionary.registerFilter({
  name: "isBrandToken",
  filter: function (token) {
    // console.log("🚀 ~ ", token.filePath && token.filePath.includes("brands/") ? token :null)
    return token.filePath && token.filePath.includes("brands/");
  }
});
export default {
  source: ["src/style-tokens/base/**/*.json", "src/style-tokens/brands/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/style-tokens/build/css/",

      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true
          }
        },
        {
          destination: "fusion-variables.css",
          format: "css/variables",
          // filter: "isBrandToken",
          options: {
            prefix: "fusion",
            // outputReferences: false
            outputReferences: true
          }
        }
      ]
    },
    // brandCSS: {
    //   transformGroup: "css",
    //   buildPath: "src/style-tokens/build/css/",
    //   prefix: "fusion",

    //   files: [
    //     {
    //       destination: "fusion-variables.css",
    //       format: "css/variables",
    //       prefix: "fusion",
    //       // filter: "isBrandToken",
    //       options: {
    //         // outputReferences: false
    //         outputReferences: true
    //       }
    //     }
    //   ]
    // },
    scss: {
      transformGroup: "scss",
      buildPath: "src/style-tokens/build/scss/",
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables"
        },
        {
          destination: "fusion-variables.scss",
          format: "scss/variables",
          options: {
            prefix: "fusion",
            outputReferences: true
          }
          // filter: "isBrandToken",
        }
      ]
    },
  }
};