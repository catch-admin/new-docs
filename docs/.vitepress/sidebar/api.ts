/**
 * api 侧边栏
 */
const root = '/docs'
const api = `${root}/api`
const apiUser = `${api}/user`
const apiPermission = `${api}/permission`

export default {
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
}
