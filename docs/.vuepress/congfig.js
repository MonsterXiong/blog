module.exports = {
  title: 'Monster-Blog',
  base: '/blog/',  // 配合部署项目
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  repo: 'https://github.com/MonsterXiong/blog.git',
  themeConfig: {
    logo:'/assets/logo.jpg',
    nav: [
      { text: '日常', link: './daily/' }
    ]
  }
}