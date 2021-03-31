module.exports = {
  title: 'Monster-bookmarks',
  description: '个人收藏夹',
  base: '/blog/',  // 配合部署项目
  head: [
    ['link', { rel: 'icon', href: '/assets/logo.jpg' }]
  ],
  repo: 'https://github.com/MonsterXiong/blog.git',
  themeConfig: {

    nav: [
      { text: '日常', link: '/daily/' },
      { text: 'JS', link: '/JS/' },
      { text: 'VUE', link: '/Vue/' },
      { text: 'CSS', link: '/CSS/' }
    ]
  }
}