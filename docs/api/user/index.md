---
sidebar_position: 1
---
# 列表

### 接口地址
- `api/users`

### 请求方式
- `GET`


### Query 参数
|参数|必选|类型|说明|
|----|----|----|----|
|username|否|string|用户名|
|email|否|string|邮箱|
|status|否|number|状态|
|department_id|否|number|部门ID|
|limit|是|number|每页数量|
|page|是|number|页码|


### 响应
|参数|类型|说明|
|----|----|----|
|id|number|用户名|
|username|string|用户名|
|email|string|邮箱|
|avatar|number|用户头像|
|department_id|number|部门ID|
|creator_id|number|创建人ID|
|creator|string|创建人名称|
|jobs|array|用户拥有岗位ID集合|
|roles|array|用户拥有角色ID集合|
|status|number|状态 1 正常 2 禁用|
|created_at|number|创建时间|

