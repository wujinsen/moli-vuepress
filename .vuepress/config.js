const head = require("./config/head");
const { zhNav, enNav, jaNav } = require("./config/nav");
const { zhSidebar, enSidebar, jaSidebar } = require("./config/sidebar");

module.exports = {
  title: "茉莉",
  description: "茉莉的个人网站",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "茉莉",
      description: "茉莉的个人网站",
    },
    "/en/": {
      lang: "en-US",
      title: "Moli",
      description: "Moli personal blog",
    },
    "/ja/": {
      lang: "ja-JP",
      title: "モリ",
      description: "モリの個人ブログ",
    },
  },
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
    searchMaxSuggestions: 10,
    logo: "/logo.jpg",
    locales: {
      "/": {
        selectText: "语言",
        label: "简体中文",
        nav: zhNav,
        sidebar: zhSidebar,
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        nav: enNav,
        sidebar: enSidebar,
      },
      "/ja/": {
        selectText: "言語",
        label: "日本語",
        nav: jaNav,
        sidebar: jaSidebar,
      },
    },
  },
};
