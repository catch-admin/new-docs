---
sidebar_position: 2
---

# 新增

### 接口地址
- `api/permissions/roles`

### 请求方式
- `post`


### Body参数
|参数|必选|类型|说明|
|----|----|----|----|
|role_name|是|string|角色名称
|parent_id|否|number|角色父级
|identify|是|string|角色标识
|description|否|string|角色描述
|data_range|否|string|角色数据权限`1 全部数据 2 自定义数据 3 本人数据 4 部门数据 5 部门及以下数据`|
|departments|否|string|当数据权限等于`2`时，可以自定义部门
|permissions|否|array|角色名称

### 响应
`默认响应`