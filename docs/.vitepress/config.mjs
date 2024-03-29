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
  title: 'CatchAdmin 文档',
  titleTemplate: 'CatchAdmin 文档 - CatchAdmin 后台管理系统框架 - 最新技术的 Laravel Admin Management System',
  description:
    'CatchAdmin 是一款基于 Laravel 和 Vue3 新的技术栈而成 Laravel Admin 管理后台系统框架。CatchAdmin 采用前后端分离策略，Laravel 框架仅仅作为 Api 输出。系统设计充分考虑了模块间的解耦，每个模块之间都有独立的控制器，路由，模型，数据表。在开发上尽可能将模块之间的影响降到最低，降低了开发上的难度，提高后期维护的效率。',
  assetsDir: 'docs/assets',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
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
    ],
    [
      'script',
      {},
      `window.$crisp=[];window.CRISP_WEBSITE_ID="3b932646-67e5-49a8-b7ee-6aa67f65879f";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
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
        link: 'https://catchadmin.com/pro/docs/start/overview'
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
        indexName: 'catchadmindocs',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/JaguarJack/catch-admin' }]
  }
})
