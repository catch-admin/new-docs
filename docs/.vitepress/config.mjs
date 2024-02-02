import { defineConfig } from 'vitepress'

const root = '/docs'
const version2root = `${root}/catchadmin`
const version3root = `${root}/3.0`
const version3server = `${version3root}/server`
const version3start = `${version3root}/start`
const version3front = `${version3root}/front`
const api = `${root}/api`
const apiUser = `${api}/user`
const apiPermission = `${api}/permission`

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CatchAdmin文档',
  description: 'CatchAdmin后台管理系统文档',
  assetsDir: 'docs/assets',
  cleanUrls: true,
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-ETX73YSQ1V' }],
    ['script', { async: '', src: '/docs/assets/star.js' }],
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
    'api/(.*)': 'docs/api/(.*)',
    '2.0/(.*)': 'docs/(.*)',
    '2.0/catchadmin/(.*)': 'docs/catchadmin/(.*)',
    '3.0/(.*)': 'docs/3.0/(.*)',
    '3.0/start/(.*)': 'docs/3.0/start/(.*)',
    '3.0/server/(.*)': 'docs/3.0/server/(.*)',
    '3.0/front/(.*)': 'docs/3.0/front/(.*)'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '接口文档',
        link: '/docs/api/intro'
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
      '/docs/api/': {
        items: [
          { text: '介绍', link: `${api}/intro.md` },
          {
            text: '认证',
            items: [
              { text: '登录', link: `${api}/auth/login.md` },
              { text: '登出', link: `${api}/auth/logout.md` }
            ]
          },
          {
            text: '用户管理',
            collapsed: true,
            items: [
              { text: '列表', link: `${apiUser}/index.md` },
              { text: '新增', link: `${apiUser}/store.md` },
              { text: '更新', link: `${apiUser}/update.md` },
              { text: '删除', link: `${apiUser}/delete.md` },
              { text: '在线', link: `${apiUser}/online.md` },
              { text: '操作日志', link: `${apiUser}/operatelog.md` },
              { text: '登录日志', link: `${apiUser}/loginlog.md` }
            ]
          },
          {
            text: '角色管理',
            collapsed: true,
            items: [
              { text: '列表', link: `${apiPermission}/role/index.md` },
              { text: '新增', link: `${apiPermission}/role/store.md` },
              { text: '更新', link: `${apiPermission}/role/update.md` },
              { text: '删除', link: `${apiPermission}/role/delete.md` }
            ]
          },
          {
            text: '菜单管理',
            collapsed: true,
            items: [
              { text: '列表', link: `${apiPermission}/permissions/index.md` },
              { text: '新增', link: `${apiPermission}/permissions/store.md` },
              { text: '更新', link: `${apiPermission}/permissions/update.md` },
              { text: '删除', link: `${apiPermission}/permissions/delete.md` }
            ]
          },
          {
            text: '部门管理',
            collapsed: true,
            items: [
              { text: '列表', link: `${apiPermission}/department/index.md` },
              { text: '新增', link: `${apiPermission}/department/store.md` },
              { text: '更新', link: `${apiPermission}/department/update.md` },
              { text: '删除', link: `${apiPermission}/department/delete.md` }
            ]
          },
          {
            text: '岗位管理',
            collapsed: true,
            items: [
              { text: '列表', link: `${apiPermission}/job/index.md` },
              { text: '新增', link: `${apiPermission}/job/store.md` },
              { text: '更新', link: `${apiPermission}/job/update.md` },
              { text: '删除', link: `${apiPermission}/job/delete.md` }
            ]
          }
        ]
      },
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
        appId: '1JRPGQ44JC',
        apiKey: '150489741e0052b72a9dbfc4aca92518',
        indexName: 'catchadmindocs'
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
