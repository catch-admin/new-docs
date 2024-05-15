import { defineConfig } from 'vitepress'

const root = '/docs'
const version2root = `${root}/catchadmin`
const version3root = `${root}/3.0`
const version3server = `${version3root}/server`
const version3start = `${version3root}/start`
const version3front = `${version3root}/front`
const api = `${root}/api`
const forms = `${root}/forms`
const apiUser = `${api}/user`
const apiPermission = `${api}/permission`

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CatchAdmin 文档',
  titleTemplate: 'CatchAdmin 文档 | Laravel 开源后台 | Laravel 后台 | Laravel Admin | 最新技术的 Laravel Admin Management System',
  description:
    'CatchAdmin 是一款基于 Laravel 和 Vue3 新的技术栈而成 Laravel Admin 管理后台系统框架。CatchAdmin 采用前后端分离策略，Laravel 框架仅仅作为 Api 输出。系统设计充分考虑了模块间的解耦，每个模块之间都有独立的控制器，路由，模型，数据表。在开发上尽可能将模块之间的影响降到最低，降低了开发上的难度，提高后期维护的效率。',
  assetsDir: 'docs/assets',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-ETX73YSQ1V' }],
    ['script', { async: '', src: '/docs/assets/star.js' }],
    [
      'script',
      {},
      `setTimeout(() => {
        const title = document.querySelector('.VPNavBarTitle .title')
      
        title.href = 'javascript:void(0)'
        title.onclick = () => {
          window.location.href = 'https://catchadmin.com/'
        }
      }, 500);
      `
    ],
    // 百度统计
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?5fcb7ae92be895d2e1e9d4136e2ed21b";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
      })();`
    ],
    [
      'script',
      {},
      `window.$crisp=[];window.CRISP_WEBSITE_ID="3b932646-67e5-49a8-b7ee-6aa67f65879f";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
    ]
  ],
  rewrites: {
    'api/(.*)': 'docs/api/(.*)',
    'forms/(.*)': 'docs/forms/(.*)',
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
      /**{
        text: '专业版文档',
        link: 'https://catchadmin.com/pro/docs/start/overview'
      },*/
      {
        text: '动态表单✨',
        link: '/docs/forms/intro'
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
              { text: '项目介绍', link: `${version3start}/project_intro.md` },
              { text: '项目部署', link: `${version3root}/deploy.md` }
            ]
          },
          {
            text: '其他版本',
            items: [
              { text: 'ThinkPHP 版本安装', link: `${version3start}/thinkphp.md` },
              { text: 'Webman 版本安装', link: `${version3start}/webman.md` }
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
              { text: '请求', link: `${version3front}/request.md` },
              { text: '🥇 动态表格', link: `${version3front}/catch-table.md` },
              { text: '🔮 动态表单', link: `${version3front}/catch-form.md` }
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
      },
      '/docs/forms/': {
        items: [
          { text: '组件介绍', link: `${forms}/intro.md` },
          { text: '基类组件', link: `${forms}/component.md` },
          { text: '快速使用', link: `${forms}/develop.md` },
          { text: '表单规则', link: `${forms}/rules.md` },
          {
            text: 'Layout组件',
            items: [
              {
                text: 'Grid 组件',
                link: `${forms}/layout/grid`
              },
              {
                text: 'Collapse 组件',
                link: `${forms}/layout/collapse`
              },
              {
                text: 'Card 组件',
                link: `${forms}/layout/card`
              },
              {
                text: 'Inline 组件',
                link: `${forms}/layout/inline`
              }
            ]
          },
          {
            text: '基础组件',
            items: [
              {
                text: 'Boolean 组件',
                link: `${forms}/basic/boolean`
              },
              {
                text: 'Cascader 组件',
                link: `${forms}/basic/cascader`
              },
              {
                text: 'Checkbox 组件',
                link: `${forms}/basic/checkbox`
              },
              {
                text: '颜色选择组件',
                link: `${forms}/basic/colorPicker`
              },
              {
                text: '日期组件',
                link: `${forms}/basic/date`
              },
              {
                text: '邮箱组件',
                link: `${forms}/basic/email`
              },
              {
                text: 'Icon选择组件',
                link: `${forms}/basic/iconSelect`
              },
              {
                text: '数字组件',
                link: `${forms}/basic/number`
              },
              {
                text: '密码组件',
                link: `${forms}/basic/password`
              },
              {
                text: 'Radio 组件',
                link: `${forms}/basic/radio`
              },
              {
                text: '评分(rate)组件',
                link: `${forms}/basic/rate`
              },
              {
                text: 'Select组件',
                link: `${forms}/basic/select`
              },
              {
                text: 'Slider组件',
                link: `${forms}/basic/slider`
              },
              {
                text: '文本组件',
                link: `${forms}/basic/text`
              },
              {
                text: '文本域组件',
                link: `${forms}/basic/textarea`
              },
              {
                text: 'Transfer 组件',
                link: `${forms}/basic/transfer`
              },
              {
                text: '上传组件',
                link: `${forms}/basic/upload`
              },
              {
                text: 'Tree 组件',
                link: `${forms}/basic/tree`
              },
              {
                text: '链接组件',
                link: `${forms}/basic/url`
              },
              {
                text: '自增组件',
                link: `${forms}/basic/dymaic`
              }
            ]
          },
          {
            text: '辅助组件',
            items: [
              {
                text: 'Alert',
                link: `${forms}/assist/alert`
              },
              {
                text: '按钮组件',
                link: `${forms}/assist/button`
              },
              {
                text: '标题组件',
                link: `${forms}/assist/title`
              }
            ]
          }
        ]
      }
    },

    search: {
      provider: 'local'
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
      level: 'deep',
      label: '页面导航'
    },
    lastUpdated: {
      text: '最近更新'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/JaguarJack/catch-admin' }]
  }
})
