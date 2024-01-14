import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CatchAdmin',
  description: 'CatchAdmin',
  assetsDir: 'docs/assets',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '版本',
        items: [
          { text: '2.6', link: '/intro' },
          { text: '3.0', link: '/3.0/intro' }
          // 添加其他版本链接...
        ]
      }
    ],

    sidebar: {
      '/': {
        base: '',
        items: [
          { text: '介绍', link: '/intro' },
          {
            text: '项目介绍',
            items: [
              { text: '项目安装', link: '/catchadmin/install' },
              { text: '项目目录', link: '/catchadmin/project-intro' },
              { text: '命令介绍', link: '/catchadmin/console' },
              { text: '请求介绍', link: '/catchadmin/request' },
              { text: '模型介绍', link: '/catchadmin/model' },
              { text: '权限介绍', link: '/catchadmin/data-scope' },
              { text: '项目扩展', link: '/catchadmin/extend' },
              { text: 'HTTP客户端', link: '/catchadmin/http' },
              { text: '导出Excel', link: '/catchadmin/export-excel' },
              { text: '敏感词', link: '/catchadmin/sensitive-word' },
              { text: '定时任务', link: '/catchadmin/crontab' },
              { text: '表格组件', link: '/catchadmin/catch-table' },
              { text: '前端开发', link: '/catchadmin/front' }
            ]
          },
          {
            text: '常见问题',
            link: '/faq'
          }
        ]
      },
      '/3.0/': {
        base: '3.0/',
        items: [
          { text: '介绍', link: '/intro' },
          {
            text: '项目文档',
            items: [
              { text: '项目安装', link: '/catchadmin/install' },
              { text: '项目介绍', link: '/catchadmin/project_intro' }
            ]
          },
          {
            text: '服务端',
            items: [
              { text: '配置', link: '/server/config' },
              { text: '约定', link: '/server/promise' },
              { text: '模块化', link: '/server/modules' },
              { text: '模型介绍', link: '/server/model' },
              { text: '权限介绍', link: '/server/permission' },
              { text: '数据权限', link: '/server/data_permission' },
              { text: '代码生成', link: '/server/generate' },
              { text: '命令介绍', link: '/server/command' },
              { text: '小技巧', link: '/server/tips' }
            ]
          },
          {
            text: '前端',
            items: [
              { text: '简介', link: '/front/intro' },
              { text: '入口', link: '/front/entry' },
              { text: '布局', link: '/front/layout' },
              { text: '侧边栏&路由', link: '/front/side-menu' },
              { text: '权限认证', link: '/front/permissions' },
              { text: '样式', link: '/front/style' },
              { text: '请求', link: '/front/request' }
            ]
          },
          { text: '视频教程', link: '/video' },
          { text: '常见问题', link: '/faq' }
        ]
      }
    },

    search: {
      provider: 'algolia',
      options: {
        appId: 'Z82AVC6OQ9',
        apiKey: '3418e43d03b752b8354c9fa5295e4547',
        indexName: 'catchadmin',
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
      pattern: 'https://github.com/catch-admin/new-docs/edit/master/:path',
      text: '在 GitHub 上编辑此页面'
    },
    docFooter: {
      prev: false,
      next: false
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
