---
sidebar_position: 1
---
# 登录

### 接口地址
- `api/login`

### 请求方式
- `POST`

### 请求参数
|参数|必选|类型|说明
|  ---- | ---- |----|----
|email|是|string|登录账户邮箱📮
|password|是|string|登录账户的密码
|remember|否|bool|记住账户
### 响应
|参数|类型|说明
|  ---- | ---- |----
|token|string|登录成功后的认证 Token
