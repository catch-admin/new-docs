---
sidebar_position: 1
---
# 列表

### 接口地址
- `api/permissions/departments`

### 请求方式
- `GET`


### Query 参数
|参数|必选|类型|说明|
|----|----|----|----|
|department_name|否|string|部门名称|


### 响应
|参数|类型|说明|
|----|----|----|
|id|number|ID|
|department_name|string|部门名称|
|parent_id|string|父级ID|
|sort|number|排序|
|status|number|状态`1 启用 2 禁用`|
|creator|string|创建人|
|created_at|string|创建时间|
|children|array|部门下级集合|

