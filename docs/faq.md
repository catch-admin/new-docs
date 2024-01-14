# 常见问题

## 为什么项目安装成功之后无法访问

- 安装项目之后，打开 DEBUG，将 `.env` 的 `debug` 设置为 `true`.
- 不要直接访问 PHP 项目，即使你在配置完域名之后.

## 为什么权限添加之后没有生效

CatchAdmin 在用户登录之后，会将登录用户的权限信息缓存起来。所以需要刷新一下后台重新拉取信息。

## 常见错误

Cloud not Create token :strpos() expect parameter 1 to be string. array give
请检查 .env 文件是否生成了 jwt 密钥。如果没有，请执行

```
php think jwt:create
```

:::tip
如果还是不行，请检查是否有 .env 文件
:::

```
There are no commands defined in the "jwt" namespace.
```

解决方案有两个，均由于 Composer 升级导致的。

- 降低 composer 版本, composer self-update --rollback
- 升级 tp 核心版本，composer update 即可

:::tip
目前推荐第一种，防止有其他包没有做适配工作。激进点可以选择第二种，毕竟 composer2 太香了。
:::

## 为什么找不到 CatchAdmin 的 SQL 文件

`CatchAdmin` 摒弃了 `SQL` 形式的安装，采用了 `Migration` 建立数据表，数据表在每个模块都是独立。 具体可以查看模块下的 `database` 文件下的 `migration`可以清晰看到每个模块的数据表的迭代情况

## 如何获取登录用户的信息

`CatchAdmin` 可以全局获取登录用户信息

```php
request()->user()
// 获取用户角色
request()->user()->getRoles()
```

## composer install 安装报错

如果遇到了 `think service:discover handling the post-autoload-dump event returned with error code 255 错误`。

- 如果存在 composer.lock, 删除 `vendor` 文件夹以及删除 `composer.lock` 文件，之后 `composer install`。
- 直接 composer update 即可

## 上线部署

优化自动加载的时候要去除 `require-dev` 的加载目录

```
composer dump-autoload --no-dev
```

## 出现权限问题

```
chmod(): Operation not permitted
```

需要改变运行用户, 找到 fpm 运行的用户组，然后使用下面命令，`fpm` 默认是 `www-data`, 如果修改了用户，根据实际情况修改即可。

```
chown -R www-data:www-data catch/
```

## 出现路由未定义

- 检查 `runtime\catch` 目录下是否有缓存
- 检查对应的模块是否开启, module.json 文件 `enable` 字段

## 定义日期类型错误

```
Incorrect date value: ‘0000-00-00 00:00:00‘ for column ‘xxxx‘ at row 1
```

查看 `sql_mode`变量

```php
show variables like '%sql_mode%'

```

如果含有 `NO_ZERO_IN_DATE, NO_ZERO_DATE`, 则去除。

```
set @@sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```

变量最好配置 mysql 的 `my.cnf` 中，否则重启会失效

## 模型注释无法生成

首先移除

```
composer remove jaguarjack/file-generate --ignore-platform-reqs

```

在重新安装

```
composer require jaguarjack/file-generate:dev-master --ignore-platform-reqs
```
