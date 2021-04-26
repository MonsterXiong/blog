const { CssSidebarConfig, JsSidebarConfig } = require("../config/sidebar/css");
module.exports = {
  title: "Monster",
  description: "个人收藏夹",
  base: "/blog/", // 配合部署项目
  head: [["link", { rel: "icon", href: "/assets/logo.jpg" }]],
  repo: "https://github.com/MonsterXiong/blog.git",
  themeConfig: {
    nav: [
      { text: "日常", link: "/Daily/" },
      // CSS
      {
        text: "CSS",
        items: [
          { text: "介绍", link: "/CSS/Introduce/" },
          { text: "基础", link: "/CSS/Original/Base/" },
          {
            text: "预处理",
            items: [
              { text: "Less", link: "/CSS/Preprocessing/Less/" },
              { text: "Sass", link: "/CSS/Preprocessing/Sass/" },
              { text: "Stylus", link: "/CSS/Preprocessing/Stylus/" },
            ],
          },
          { text: "工具", link: "/CSS/Tools/" },
        ],
      },
      // JavaScript
      {
        text: "JS",
        items: [
          { text: "基础", link: "/JavaScript/Base/" },
          { text: "ES6", link: "/JavaScript/ES6/" },
          { text: "手撕代码", link: "/JavaScript/Code/" },
          {
            text: "框架",
            items: [
              { text: "Vue", link: "/JavaScript/FrameWork/Vue/" },
              { text: "React", link: "/JavaScript/FrameWork/React/" },
            ],
          },
        ],
      },
      // NodeJS
      {
        text: "NodeJS",
        items: [
          {
            text: "原生",
            items: [
              { text: "http", link: "/NOdeJS/Original/http/" },
              { text: "path", link: "/NOdeJS/Original/path/" },
            ],
          },
          {
            text: "框架",
            items: [
              { text: "Koa", link: "/NodeJS/FrameWork/Koa/" },
              { text: "Egg", link: "/NodeJS/FrameWork/Egg/" },
            ],
          },
        ],
      },
      // 工程化
      {
        text: "工程化",
        items: [
          {
            text: "Vite",
            link: "/Engineering/Vite/",
          },
          {
            text: "Webpack",
            link: "/Engineering/Webpack/",
          },
          {
            text: "Rollup",
            link: "/Engineering/Rollup/",
          },
          {
            text: "Gulp",
            link: "/Engineering/Gulp/",
          },
        ],
      },
      // 网络
      {
        text: "网络",
        items: [
          {
            text: "HTTP",
            link: "/Internet/HTTP/",
          },
          {
            text: "WebSocket",
            link: "/Internet/WebSocket/",
          },
          {
            text: "TCP",
            link: "/Internet/TCP/",
          },
        ],
      },
      // 其它
      {
        text: "其它",
        items: [
          {
            text: "设计模式",
            link: "/Other/DesignModel/",
          },
          {
            text: "数据结构",
            link: "/Other/DataStructure/",
          },
          {
            text: "性能优化",
            link: "/Other/Performance/",
          },
          {
            text: "安全",
            link: "/Other/Safe/",
          },
          {
            text: "小程序",
            link: "/Other/MiniProgram/",
          },
          {
            text: "计划",
            link: "/Other/Plan/",
          },
          {
            text: "了解",
            link: "/Other/Understand/",
          },
        ],
      },
    ],

    sidebar: {
      ...CssSidebarConfig,
      ...JsSidebarConfig,
      "/": [""],
    },
    sidebarDepth: 3,
    displayAllHeaders: true,
    collapsable: false,
    smoothScroll: true, //页面滚动
    lastUpdated: "最后更新", // 最后更新时间
  },
};
