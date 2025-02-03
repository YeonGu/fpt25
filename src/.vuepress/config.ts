import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/fpt25/",

  lang: "en-US",
  title: "FPT 2025",
  description: "FPT 2025 Conference Homepage",

  theme,

  // theme: hopeTheme({
  //   markdown: {
  //     math: {
  //       type: "katex", // 或 'mathjax'
  //     },
  //   },
  // }),

  // Enable it with pwa
  // shouldPrefetch: false,
});
