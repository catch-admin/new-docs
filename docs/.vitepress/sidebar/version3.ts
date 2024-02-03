/**
 * 3.0 版本
 */
const root = '/docs'
const version3root = `${root}/3.0`
const version3server = `${version3root}/server`
const version3start = `${version3root}/start`
const version3front = `${version3root}/front`

export default {
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
