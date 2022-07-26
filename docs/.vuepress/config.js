module.exports = {
  title: '小董的Blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/favicon.webp' }], // 增加一个自定义的 favicon(网页标签的图标)
    // ['link', { rel: 'manifest', href: '/photo.jpg' }],
    // ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],  
    // "script",{
    //   src:"https://at.alicdn.com/t/font_2849934_v6y652peian.js"
    // }
  ],
  
serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  theme:'aurora',
  themeConfig:{
    darkMode:false,
    logo:'/avicon.webp',
    nav:[
      //导航栏配置
      {text:'首页',link:'/'},
      {text:'技术文档',link:'/tech/interview'},
    ],
    sidebar:'auto', //侧边栏配置
  }

};