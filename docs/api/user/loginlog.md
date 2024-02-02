---
sidebar_position: 6
---

# 登录日志

### 接口地址
- `api/user/login/log`

### 请求方式
- `GET`

### Query参数
|参数|必选|类型|说明|
|----|----|----|----|
|limit|是|number|每页数量|
|page|是|number|页码|

### 响应
|参数|类型|说明|
|----|----|----|
|id|number|ID|
|account|string|账户邮箱|
|location|string|登录地址|
|login_at|string|登录时间|
|login_ip|string|登录IP|
|platform|string|平台 windows/macos/linux|
|status|number|登录状态 `1 成功 2 失败`|