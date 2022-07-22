module.exports = {
  title: 'DL\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],  
  ],
  
serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig:{
    nav: [{text: "主页", link: "/"      },
        { text: "node", link: "/node/" },
        { text: "前端", 
          items: [ 
            { text: "html", link:"/web/html/"},
            { text: "css", link:"/web/css/"},
            ]
        },
        { text: "数据库", link: "/database/"   },
        { text: "android", link: "/android/"   },
        { text: "面试问题", link: "/interview/" }
      ],
  }

};