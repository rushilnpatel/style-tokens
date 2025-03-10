export default {
  source: ["src/style-tokens/base/**/*.json", "src/style-tokens/brands/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/style-tokens/build/brand/css/",
      prefix: "fusion",

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
      buildPath: "src/style-tokens/build/brand/scss/",
      prefix: "fusion",
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
        }
      ]
    },
  }
};