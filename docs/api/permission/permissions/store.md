---
sidebar_position: 2
---

# 新增

### 接口地址
- `api/permissions/permissions`

### 请求方式
- `post`


### Body参数
:::info
该接口既可以除了添加菜单之外，还可以批量添加 `action`
:::
#### 添加菜单(模式1)
|参数|必选|类型|说明|
|----|----|----|----|
|type|是|number|类型 `1 目录 2 菜单 3 按钮`|
|parent_id|是|string|父级ID|
|permission_name|是|number|菜单名称|
|icon|是|array|菜单 Icon|
|module|否|number|所属模块|
|route|否|array|前端路由 path|
|hidden|否|array|是否隐藏|
|redirect|否|array|前端 redirect 属性|
|Keepalive|否|array|前端 keepalive（目前没有作用，预留）|
|active_menu|否|array|激活菜单 `当从A菜单跳转到B内页时，需要激活 A 菜单时，这里填写A菜单路由`|
|permission_mark|否|array|菜单权限标识|
|sort|否|array|排序|
|is_inner|否|array|是否是内页（预留）|

#### 批量添加 action(模式二)
:::info
模式二添加，可以菜单列表中看到，当你添加完一个`菜单类型`之后，权限标识列会出现一个`+`号标记，可通过它点击生成actions
:::
|参数|必选|类型|说明|
|----|----|----|----|
|actions|是|bool|默认 true|
|parent_id|是|number|action 的父级ID|

### 响应
`默认响应`