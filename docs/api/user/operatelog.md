---
sidebar_position: 7
---
# 操作日志

### 接口地址
- `api/user/operate/log`

### 请求方式
- `GET`

### Query参数
|参数|必选|类型|说明|
|----|----|----|----|
|limit|是|number|每页数量|
|page|是|number|页码|
|scope|是|string|范围数据 `self:本人数据 all:全部数据`|

### 响应
|参数|类型|说明|
|----|----|----|
|id|number|ID|
|action|string|操作 action，格式`controller@action`|
|http_code|number|http状态码|
|http_method|string|http请求方式|
|ip|string|IP|
|module|string|模块|
|params|string|请求参数|
|start_at|string|请求开始时间|
|time_taken|number|请求耗时|
|creator_id|number|创建人ID|
|creator|string|创建人昵称 |