const { sidebarConfig } = require("../config/sidebar/index");
const navConfig = require("../config/nav/index");

module.exports = {
  title: "Monster",
  description: "个人收藏夹",
  base: "/blog/", // 配合部署项目
  head: [["link", { rel: "icon", href: "/assets/logo.jpg" }]],
  repo: "https://github.com/MonsterXiong/blog.git",
  themeConfig: {
    // 导航栏配置
    // 数组:[{},{}]
    nav: navConfig,
    // 侧边栏配置:
    // 对象：{key:value}
    sidebar: sidebarConfig,
    // 侧边栏深度2=>h3
    sidebarDepth: 3,
    // 是否展开所有标题
    displayAllHeaders: true,
    collapsable: false,
    // 页面滚动效果
    smoothScroll: true,
    // 最后更新时间
    lastUpdated: "最后更新",
  },
};
