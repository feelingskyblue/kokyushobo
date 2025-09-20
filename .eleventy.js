import markdownIt from "markdown-it";
import { RenderPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Output directory: _site
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/js");
  
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
  eleventyConfig.addPlugin(RenderPlugin);

};

