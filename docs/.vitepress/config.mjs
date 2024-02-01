import { defineConfig } from 'vitepress'

const root = '/docs'
const version2root = `${root}/catchadmin`
const version3root = `${root}/3.0`
const version3server = `${version3root}/server`
const version3start = `${version3root}/start`
const version3front = `${version3root}/front`
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CatchAdmin文档',
  description: 'CatchAdmin后台管理系统文档',
  assetsDir: 'docs/assets',
  cleanUrls: true,
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-ETX73YSQ1V' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ETX73YSQ1V');
      setTimeout(() => {
        const title = document.querySelector('.VPNavBarTitle .title')
      
        title.href = 'javascript:void(0)'
        title.onclick = () => {
          window.location.href = 'https://catchadmin.com/'
        }
      }, 500);
      `
    ]
  ],
  rewrites: {
    '2.0/(.*)': 'docs/(.*)',
    '2.0/catchadmin/(.*)': 'docs/catchadmin/(.*)',
    '3.0/(.*)': 'docs/3.0/(.*)',
    '3.0/start/(.*)': 'docs/3.0/start/(.*)',
    '3.0/server/(.*)': 'docs/3.0/server/(.*)',
    '3.0/front/(.*)': 'docs/3.0/front/(.*)'
  },
  themeConfig: {
    onContentUpdated: (content) => {
      console.log('Content updated:', content)

      // 在这里执行你的自定义逻辑
      // 例如，触发某个事件、更新状态等
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '官网',
        link: 'https://catchadmin.com/',
        target: '_self'
      },
      {
        text: '专业版文档',
        link: 'https://catchadmin.com/pro/docs'
      },
      {
        text: '版本',
        items: [
          { text: '2.6', link: `${root}/intro` },
          { text: '3.0', link: `${version3root}/intro` }
          // 添加其他版本链接...
        ]
      }
    ],

    sidebar: {
      '/docs/': {
        items: [
          { text: '介绍', link: `${root}/intro.md` },
          {
            text: '项目介绍',
            items: [
              { text: '项目安装', link: `${version2root}/install.md` },
              { text: '项目目录', link: `${version2root}/project-intro.md` },
              { text: '命令介绍', link: `${version2root}/console.md` },
              { text: '请求介绍', link: `${version2root}/request.md` },
              { text: '模型介绍', link: `${version2root}/model.md` },
              { text: '权限介绍', link: `${version2root}/data-scope.md` },
              { text: '项目扩展', link: `${version2root}/extend.md` },
              { text: 'HTTP客户端', link: `${version2root}/http.md` },
              { text: '导出Excel', link: `${version2root}/export-excel.md` },
              { text: '敏感词', link: `${version2root}/sensitive-word.md` },
              { text: '定时任务', link: `${version2root}/crontab.md` },
              { text: '表格组件', link: `${version2root}/catch-table.md` },
              { text: '前端开发', link: `${version2root}/front.md` }
            ]
          },
          {
            text: '综合',
            items: [
              {
                text: '常见问题',
                link: `${root}/faq.md`
              }
            ]
          }
        ]
      },
      '/docs/3.0/': {
        items: [
          { text: '介绍', link: `${version3root}/intro.md` },
          {
            text: '项目文档',
            items: [
              { text: '项目安装', link: `${version3start}/install.md` },
              { text: '项目介绍', link: `${version3start}/project_intro.md` }
            ]
          },
          {
            text: '服务端',
            items: [
              { text: '配置', link: `${version3server}/config.md` },
              { text: '约定', link: `${version3server}/promise.md` },
              { text: '模块化', link: `${version3server}/modules.md` },
              { text: '模型介绍', link: `${version3server}/model.md` },
              { text: '权限介绍', link: `${version3server}/permission.md` },
              { text: '数据权限', link: `${version3server}/data_permission.md` },
              { text: '代码生成', link: `${version3server}/generate.md` },
              { text: '命令介绍', link: `${version3server}/command.md` },
              { text: '小技巧', link: `${version3server}/tips.md` }
            ]
          },
          {
            text: '前端',
            items: [
              { text: '简介', link: `${version3front}/intro.md` },
              { text: '入口', link: `${version3front}/entry.md` },
              { text: '布局', link: `${version3front}/layout.md` },
              { text: '侧边栏&路由', link: `${version3front}/side-menu.md` },
              { text: '权限认证', link: `${version3front}/permissions.md` },
              { text: '样式', link: `${version3front}/style.md` },
              { text: '请求', link: `${version3front}/request.md` }
            ]
          },
          {
            text: '综合',
            items: [
              { text: '视频教程', link: `${version3root}/video.md` },
              { text: '常见问题', link: `${version3root}/faq.md` }
            ]
          }
        ]
      }
    },

    search: {
      provider: 'algolia',
      options: {
        appId: 'Z82AVC6OQ9',
        apiKey: '5883216465758859a57ee9d7332d79c3',
        indexName: 'catchadmin'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    editLink: {
      pattern: 'https://github.com/catch-admin/new-docs/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最近更新'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/catch-admin/new-docs' }]
  }
})
