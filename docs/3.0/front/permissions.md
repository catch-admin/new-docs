# 权限认证

上面其实也讲到了权限相关的，用户在通过认证之后，后端在用户信息中其实已经加入了该用户所有权限。可以通过 `resource/admin/store/user/index.ts` 的 `UserStore`获取

```typescript
const userHasPermissions = userStore.getPermissions
```

## 权限指令

权限指令是使用 `vue`的 `directive` 实现一个前端操作控制的指令，例如新增，更新等等操作。如果你需要页面级别的权限操作，那么这个指令可以很好的帮助你实现该功能

例如控制权限模块的角色更新功能，你可以使用 `v-action` 进行控制，如果登录人员没有改操作权限，那么此操作按钮将不再页面展示。

```javascript
<Update @click="openRoleForm(scope.row.id, scope.row.permissions)" v-action="'permissions.role.update'"/>
```

权限指令要求的格式和后端相似，格式如下

```javascript
module.controller.action

or

module@controller@action
```

### 实现方案

众所周知，后端是模块的，为了防止模块之间的路由会发生冲突，所以权限标识是由**模块** + **controller@action** 组合
:::info
后端路由即 controller@action，权限标识也是这样定义
:::
所以权限检测可以这么写, 伪代码如下

```typescript
function hasPermission(string mark) {
    // mark 是这样的形式 module + '@' + 'controller@action'
    // 当然也可以定义其他形式的
    const userHasPermissions = userStore.getPermissions
    userHasPermissions.each(item => {
        if (permissions === (item.module + '@' + item.permission_mark)) {
            return true
        }
    })
    return false
}
```

这样就是检测权限了，那么再将其引入到自定义指令中，这里代码仅提供思路，正确性未知

```typescript
app.directive('permission', (el, binding) => {
  const hasPermission = hasPermission(binding.value)
  if (!hasPermission) {
    el.style.display = none
  }
})
```

在项目中这么使用

```html
<template>
  <el-button v-permission="user@user@store">创建权限</el-button>
</template>
```

具体实现可到前端项目的`directives`目录下的 action 查看
