---
sidebar_position: 1
---
# 列表

### 接口地址
- `api/permissions/jobs`

### 请求方式
- `GET`


### Query 参数
|参数|必选|类型|说明|
|----|----|----|----|
|job_name|否|string|岗位名称|
|limit|是|number|每页数量|
|page|是|number|页码|


### 响应
|参数|类型|说明|
|----|----|----|
|job_name|string|岗位名称|
|coding|string|岗位编码|
|description|string|岗位描述|
|sort|number|排序|
|status|number|状态 `1 启用 2 禁用`|

