---
sidebar_position: 3
---
# 更新

### 接口地址
- `api/permissions/departments/{id}`

### 请求方式
- `put`


### Body参数
|参数|必选|类型|说明|
|----|----|----|----|
|parent_id|是|string|父级ID|
|department_name|是|string|部门名称|
|principal|string|number|部门联系人|
|email|是|string|邮箱|
|mobile|否|string|手机号|
|sort|否|number|排序|


### 响应
`默认响应`