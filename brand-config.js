import StyleDictionary from 'style-dictionary';

export default {
  source: ["src/style-tokens/base/**/*.json", "src/style-tokens/brands/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/style-tokens/build/brand/css/",
      files: [
        {
          destination: "brand-variables.css",
          format: "css/variables"
        },
        // {
        //   destination: "brand-variables.css",
        //   format: "css/variables",
        //   filter: "isBrandToken",
        //   options: {
        //     showFileHeader: false,
        //     outputReferences: true
        //   }
        // }
      ]
    },
  }
};