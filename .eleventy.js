module.exports = function(eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy("assets/img");

  eleventyConfig.addPassthroughCopy("assets/css");

};