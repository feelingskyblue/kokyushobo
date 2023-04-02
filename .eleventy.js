const markdownIt = require("markdown-it");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Output directory: _site
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/css");
  
  // markdown options
  let markdownOptions = {
    html: true,
    breaks: true,
    linkify: true
  };
  eleventyConfig.setLibrary("md", markdownIt(markdownOptions));

  // add watch target
  eleventyConfig.addWatchTarget("assets/scss/*.{scss}");
  eleventyConfig.addWatchTarget("assets/img/*.{svg,webp,png,jpeg}");

  // Render Plugin
  eleventyConfig.addPlugin(EleventyRenderPlugin);
};
