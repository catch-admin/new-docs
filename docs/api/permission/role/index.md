---
sidebar_position: 1
---
# 列表

### 接口地址
- `api/permissions/roles`

### 请求方式
- `GET`


### Query 参数
|参数|必选|类型|说明|
|----|----|----|----|
|role_name|否|string|角色名称|


### 响应
|参数|类型|说明|
|----|----|----|
|id|number|ID|
|role_name|string|角色名称|
|identify|string|角色标识|
|parent_id|number|父级ID|
|permissions|Array|角色权限|
|creator|string|创建人|
|description|string|描述|
|data_range|number|数据权限`1 全部数据 2 自定义数据 3 本人数据 4 部门数据 5 部门及以下数据`|
|created_at|string|创建时间|
