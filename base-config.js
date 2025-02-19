import StyleDictionary from 'style-dictionary';

export default {
  source: ["src/style-tokens/base/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/style-tokens/build/base/css/",

      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true
          }
        },
      ]
    },
    scss: {
      transformGroup: "scss",
      buildPath: "src/style-tokens/build/base/scss/",
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables",
          options: {
            outputReferences: true
          }
        },
      ]
    },
  }
};