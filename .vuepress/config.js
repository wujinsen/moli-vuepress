const head = require("./config/head");
const nav = require("./config/nav");
const sidebar = require("./config/sidebar");

module.exports = {
  title: "茉莉",
  description: "茉莉的个人网站",
  head,
  serviceWorker: true,
  base: "/",
  markdown: {
    lineNumbers: false,
  },
  plugins: [
    [
      "sitemap",
      {
        hostname: "https://wujinsen.github.io",
      },
    ],
    [
      "feed",
      {
        canonical_base: "https://wujinsen.github.io",
      },
    ],
  ],
  themeConfig: {
    nav,
    searchMaxSuggestions: 10,
    logo: "/logo.jpg",
    sidebar,
  },
};
