---
sidebar_position: 3
---
# 更新

### 接口地址
- `api/users/{id}`

### 请求方式
- `put`


### Body参数
|参数|必选|类型|说明|
|----|----|----|----|
|username|是|string|用户名|
|email|是|string|邮箱|
|password|否|number|密码，如果密码不填，则不更新密码|
|roles|是|array|角色ID集合|
|department_id|否|number|部门ID|
|jobs|否|array|岗位ID集合|


### 响应
`默认响应`