module.exports = {
  title: '茉莉',
  description: '茉莉的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {rel: 'icon', href: '/logo.jpg'}], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', {rel: 'apple-touch-icon', href: '/logo.jpg'}], //PWA
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {

    nav: [ // 导航栏配置
      {text: '首页', link: '/'},
      {text: '图虫', link: 'https://tuchong.com/16557320/'},
      {text: 'github', link: 'https://github.com/wujinsen/'}
    ],
    searchMaxSuggestions: 10,
    logo: '/logo.jpg',
    sidebar: [
      {
        title: '目录',
        collapsable: false,
        path: '/SUMMARY'
      },
      {
        title: '简介',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        path: '/personal',
        children:[
            '/personal/personal-avocation'
        ]
      },
      {
        title: ' 第一章 论增进劳动生产力的因素及分配劳动(1)',
        collapsable: false, // 可选的, 默认值是 true,
        path: '/personal',
        children:[
          '/personal/personal-production'
        ]
      }
    ]
  }
};
