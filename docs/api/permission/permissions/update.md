---
sidebar_position: 3
---
# 更新

### 接口地址
- `api/permissions/permissions/{id}`

### 请求方式
- `put`


### Body参数
|参数|必选|类型|说明|
|----|----|----|----|
|type|是|number|类型 `1 目录 2 菜单 3 按钮`|
|parent_id|是|string|父级ID|
|permission_name|是|number|菜单名称|
|permission_mark|否|array|菜单权限标识|
|icon|是|array|菜单 Icon|
|module|否|number|所属模块|
|route|否|array|前端路由 path|
|hidden|否|array|是否隐藏|
|redirect|否|array|前端 redirect 属性|
|Keepalive|否|array|前端 keepalive（目前没有作用，预留）|
|active_menu|否|array|激活菜单 `当从A菜单跳转到B内页时，需要激活 A 菜单时，这里填写A菜单路由`|
|sort|否|array|排序|
|is_inner|否|array|是否是内页（预留）|


### 响应
`默认响应`