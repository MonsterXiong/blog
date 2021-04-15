module.exports = {
  title: "Monster-bookmarks",
  description: "个人收藏夹",
  base: "/blog/", // 配合部署项目
  head: [["link", { rel: "icon", href: "/assets/logo.jpg" }]],
  repo: "https://github.com/MonsterXiong/blog.git",
  themeConfig: {
    nav: [
      { text: "日常", link: "/Daily/" },
      { text: "JS", link: "/JavaScript/" },
      { text: "CSS", link: "/CSS/" },
      { text: "VUE", link: "/Vue/" },
      { text: "ES6", link: "/ES6/" },
      { text: "小程序", link: "/MiniProgram/" },
      { text: "网络", link: "/Internet/" },
      { text: "安全", link: "/Safe/" },
      { text: "手撕代码", link: "/Code/" },
      { text: "工程化", link: "/Engineering/" },
      { text: "设计模式", link: "/DesignModel/" },
      { text: "数据结构", link: "/DataStructure/" },
      { text: "性能优化", link: "/Performance/" },
    ],
    sidebar: "auto",
    collapsable: true,
  },
};
