---
sidebar_position: 3
---
# 更新

### 接口地址
- `api/permissions/jobs/{id}`

### 请求方式
- `put`


### Body参数
|参数|必选|类型|说明|
|----|----|----|----|
|job_name|是|string|岗位名称|
|coding|是|string|岗位编码|
|description|否|string|岗位描述|
|sort|否|number|排序|
|status|否|number|状态 `1 启用 2 禁用`|


### 响应
`默认响应`