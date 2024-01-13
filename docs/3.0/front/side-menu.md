# 侧边栏&路由

路由和侧边栏是组织起一个后台应用的关键骨架。

项目侧边栏和路由是绑定在一起的，`resource/admin/router/index.ts` 是整个路由的入口文件，如果是按正常顺序文档看下来，应该知道本项目的路由分为两种情况

- 动态生成的路由，也就是权限管理打开后，菜单管理的数据
- 每个模块的**views**目录下的 `router.js` 配置静态路由

所以一般情况下不用管`resource/admin/router/index.ts`路由这个入口文件。

## 类型

对于权限和菜单,系统定义了两种类型，查看 `resource/admin/types`

### 权限类型

```js title="resource/admin/types/Permissions.ts"
export interface Permission {
  id: number // id
  parent_id: number // 父级 ID
  permission_name: string // 权限名称
  type: number // 类型
  icon: string // icon 图标
  component: string // 组件
  module: string // 模块
  permission_mark: string // 权限标识
  route: string // 路由，对应的是 vue route 的 path
  redirect: string
  keepAlive: boolean
  hidden: boolean // 是否隐藏
  is_inner: boolean // 是否是内页
}
```

### 菜单类型

菜单类型，最终都是由权限类型转换而来，所以一旦是动态生成的路由，那么元数据都是由菜单数据提供

```js title="resource/admin/types/Menu.ts"
import { Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'

// meta 元数据
// 在记录上附加自定义数据。
// 这个数据将会附着在 vue route 上
export interface Meta {
  title: string
  icon: string // icon
  roles?: string[] // 哪些角色可以访问页面，未实现，保留
  cache?: boolean // 页面缓存，未实现，保留
  hidden: boolean // 是否隐藏，当设置成 true 时，菜单则不会在侧边栏显示。例如内页编辑页面啊，Login,页面 404 页面啊
  keepalive?: boolean // 是否 keepalive 目前未实现，保留数据结构
  is_inner?: boolean // 是否是内页
}

// @ts-ignore
// Menu 类型和 Vue Route 类型一样了
export interface Menu extends Omit<RouteRecordRaw, 'meta'> {
  path: string // path 访问路径
  name: string // name 菜单名称
  meta?: Meta // meta，路由附着的额外数据
  redirect?: string
  component?: Component // 页面组件
  children?: Menu[] // 子菜单
}
```

在了解完这两个相关类型之后，再来看动态菜单和权限如何实现的，静态菜单就不做介绍了。首先找到`resource/admin/route/guard/index.ts` 文件，从这里开始，这里是路由导航守卫。下面直接通过代码来注解如何实现

```js title="resource/admin/route/guard/index.ts"
const guard = (router: Router) => {
  // white list
  const whiteList: string[] = [WhiteListPage.LOGIN_PATH, WhiteListPage.NOT_FOUND_PATH]

  router.beforeEach(async (to, from, next) => {
    // set page title
    setPageTitle(to.meta.title as unknown as string)
    // page start
    progress.start()
    // 获取用户的 token
    const authToken = getAuthToken()
    // 如果 token 存在
    if (authToken) {
      // 如果进入 /login 页面，重定向到首页
      if (to.path === WhiteListPage.LOGIN_PATH) {
        next({ path: '/' })
      } else {
        const userStore = useUserStore()
        // 获取用户ID
        if (userStore.getId) {
          next()
        } else {
          try {
            // 阻塞获取用户信息
            // ⚠️ 用户信息已经包含了该用户所有可用权限，在 `permissions` 里
            await userStore.getUserInfo()
            // 如果后端没有返回 permissions，前台则只使用静态路由
            if (userStore.getPermissions !== undefined) {
              // 挂载路由（实际是从后端获取用户的权限）
              const permissionStore = usePermissionsStore()
              // 动态路由挂载，这里是主要实现动态路由菜单的地方
              const asyncRoutes = permissionStore.getAsyncMenusFrom(toRaw(userStore.getPermissions))
              // 在这里使用 addRoute 动态挂在路由
              asyncRoutes.forEach((route: Menu) => {
                router.addRoute(route as unknown as RouteRecordRaw)
              })
            }
            next({ ...to, replace: true })
          } catch (e) {
            removeAuthToken()
            next({ path: `${WhiteListPage.LOGIN_PATH}?redirect=/${to.path}` })
          }
        }
      }
      progress.done()
    } else {
      // 如果不在白名单
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next({ path: WhiteListPage.LOGIN_PATH })
      }
      progress.done()
    }
  })

  router.afterEach(() => {
    progress.done()
  })
}

export default guard
```

## 侧边栏

上面经过路由导航守卫之后，动态权限就已经转化为动态菜单了。主要通过这个方法来实现转换

```js
const asyncRoutes = permissionStore.getAsyncMenusFrom(toRaw(userStore.getPermissions))
```

这里就不细说里面的实现了，是通过递归实现无限极菜单。但是这里一个非常重要的点，就是权限是通过`pinia` 进行保存的，因为 `pinia` 是响应式的。找到 `resource/admin/store/user/permissions.ts`，看下 `permissionStore` 的定义

```js title="resource/admin/store/user/permissions.ts"
interface Permissions {
  menus: Menu[] // 菜单

  asyncMenus: Menu[] // 动态菜单

  permissions: Permission[] // 权限

  menuPathMap: Map<string, string> // menu 和 path 的 MAP 数据
}

export const usePermissionsStore = defineStore('PermissionsStore', {
  // state 里面定义的几个数据都是响应式的
  state: (): Permissions => {
    return {
      menus: [],

      asyncMenus: [],

      permissions: [],

      menuPathMap: new Map(),
    }
  },
}
```

既然菜单都是响应式的，那就好办了呀！菜单的数据就直接从 `store` 获取就可以了。
侧边栏的实现是在 `layout/components/Menu`，侧边栏的菜单也是基于`ElementPlus` 的
`el-menu` 实现的。因为是动态菜单，所以这里的用到了`vue` 的[渲染函数](https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes)。源码在 `layout/components/Menu/index.vue` 中
