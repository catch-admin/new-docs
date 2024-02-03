/**
 * 2.0 版本
 */
const root = '/docs'
const version2root = `${root}/catchadmin`

export default {
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
}
