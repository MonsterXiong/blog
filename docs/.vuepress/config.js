const { sidebarConfig } = require("../config/sidebar/index");
const navConfig = require("../config/nav/index");

module.exports = {
  title: "Monster",
  description: "个人收藏夹",
  base: "/", // 配合部署项目
  head: [["link", { rel: "icon", href: "/assets/favicon.ico" }]],
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
    // // 最后更新时间
    // lastUpdated: "最后更新",
  },
  plugins: [
    // 回到顶部git
    ["@vuepress-reco/vuepress-plugin-back-to-top"],
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["haru2"],
        clean: true,

        width: 240,
        height: 352,
      },
    ],
    //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
    // [
    //   "cursor-effects",
    //   {
    //     size: 3, // size of the particle, default: 2
    //     shape: ["circle"], // shape of the particle, default: 'star'
    //     zIndex: 999999999, // z-index property of the canvas, default: 999999999
    //   },
    // ],
    //音乐播放器
    // [
    //   "meting",
    //   {
    //     // metingApi: "https://meting.sigure.xyz/api/music",
    //     meting: {
    //       // 网易
    //       server: "netease",
    //       // 读取歌单
    //       type: "playlist",
    //       mid: "13529775",
    //     },
    //     // 不配置该项的话不会出现全局播放器
    //     aplayer: {
    //       // 吸底模式
    //       fixed: true,
    //       mini: true,
    //       // 自动播放
    //       autoplay: true,
    //       // 歌曲栏折叠
    //       listFolded: true,
    //       // 颜色
    //       theme: "#f9bcdd",
    //       // 播放顺序为随机
    //       order: "random",
    //       // 初始音量
    //       volume: 0.7,
    //       // 关闭歌词显示
    //       lrcType: 0,
    //     },
    //     mobile: {
    //       // 手机端去掉cover图
    //       cover: false,
    //     },
    //   },
    // ],
    //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
    // [
    //   "@vuepressplugin-medium-zoom",
    //   {
    //     selector: ".page img",
    //     delay: 1000,
    //     options: {
    //       margin: 24,
    //       background: "rgba(25,18,25,0.9)",
    //       scrollOffset: 40,
    //     },
    //   },
    // ],
    //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
    // [
    //   "vuepress-plugin-nuggets-style-copy",
    //   {
    //     copyText: "复制代码",
    //     tip: {
    //       content: "复制成功!",
    //     },
    //   },
    // ],
    // 公告弹出
    // [
    //   "@vuepress-reco/vuepress-plugin-bulletin-popover",
    //   {
    //     width: "200px", // 默认 260px
    //     title: "消息提示",
    //     body: [
    //       {
    //         type: "title",
    //         content: "欢迎加入QQ交流群 🎉🎉🎉",
    //         style: "text-aligin: center;",
    //       },
    //       {
    //         type: "image",
    //         src: "/assets/logo.jpg",
    //       },
    //     ],
    //     footer: [
    //       {
    //         type: "button",
    //         text: "打赏",
    //         link: "/Git/",
    //       },
    //     ],
    //   },
    // ],
  ],
};
