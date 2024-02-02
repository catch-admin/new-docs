---
sidebar_position: 5
---

# 更新在线用户信息

### 接口地址
- `api/user/online`

### 请求方式
- `post`


### Body参数
|参数|必选|类型|说明|
|----|----|----|----|
|username|是|string|用户名|
|email|是|string|邮箱|
|password|否|string|密码，如果密码不填，则不更新密码|
|avatar|否|string|头像|


### 响应
`默认响应`