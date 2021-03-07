const path = require("path");
const fs = require("fs");
const { optimize } = require("svgo");

const config = {
  plugins: [
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeXMLNS",
    "removeEditorsNSData",
    "cleanupAttrs",
    "inlineStyles",
    "minifyStyles",
    "convertStyleToAttrs",
    "cleanupIDs",
    "removeRasterImages",
    "removeUselessDefs",
    "cleanupNumericValues",
    "cleanupListOfValues",
    "convertColors",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "removeViewBox",
    "cleanupEnableBackground",
    "removeHiddenElems",
    "removeEmptyText",
    "convertShapeToPath",
    "moveElemsAttrsToGroup",
    "moveGroupAttrsToElems",
    "collapseGroups",
    "convertPathData",
    "convertEllipseToCircle",
    "convertTransform",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "mergePaths",
    "removeUnusedNS",
    "reusePaths",
    "sortAttrs",
    "sortDefsChildren",
    "removeTitle",
    "removeDesc",
    "removeDimensions",
    "removeStyleElement",
    "removeScriptElement",
  ],
};

// const result = optimize(data, { path: filepath, ...config });

module.exports = (eleventyConfig, options) => {

  eleventyConfig.addAsyncShortcode("svg", async (svgName) => {
    const svgData = fs.readFileSync(
      path.join(options.baseUrl, `${svgName}.svg`),
      "utf8"
    );
    const { data } = await optimize(svgData, { ...config });
    return data;
  });
};
