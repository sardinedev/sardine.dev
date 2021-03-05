const sassBuild = require('./lib/sass.11ty');
const tailwindBuild = require('./lib/tailwind.11ty');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const htmlmin = require('./lib/html-minify.11ty');
const dateFormat = require('./lib/date.11ty');
const eleventyRollup = require('./lib/rollup.11ty');

module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: _site

  // Add filters to Nunjucks
  eleventyConfig.addFilter('date', dateFormat);
  eleventyConfig.addFilter('sass', sassBuild);
  eleventyConfig.addNunjucksAsyncFilter('rollup', eleventyRollup);
  eleventyConfig.addNunjucksAsyncFilter('tailwind', tailwindBuild);

  // The following copies to `_site/assets`
  eleventyConfig.addPassthroughCopy('site/assets');
  eleventyConfig.addPassthroughCopy('site/uploads');

  // eleventyConfig.addTransform('htmlmin', htmlmin);

  eleventyConfig.addPlugin(pluginRss);
};
