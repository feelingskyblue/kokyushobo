module.exports = function(eleventyConfig) {
  // Output directory: _site
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/css");
};

const markdownIt = require("markdown-it");
module.exports = function(eleventyConfig) {
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
};
