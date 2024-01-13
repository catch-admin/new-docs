# 命令介绍

新版 `catchadmin` 命令都是以 **catch** 开头, 想要查看全部命令的话，可以使用

```shell
php artisan | grep catch
```

### 查看版本号

```shell
php artisan catch:version
```

### 项目安装

```shell
php artisan catch:install
```

该命令是用于初始化项目

### 模块安装

```shell
php artisan catch:module:install <module>
```

- module 必选参数

例如安装权限模块

```shell
php artisan catch:module:install <permissions>
```

### 创建 Migrate 文件

```shell
php artisan catch:make:migration <module> <migration_name>
```

### 创建 Seed 文件

```shell
php artisan catch:make:seeder <module> <seeder_name>
```

### 执行 Migrate

```shell
php artisan catch:migrate <module>
```

执行模块的 migrates 文件, 创建模块相关表结构

```shell
php artisan catch:migrate permissions
```

### 执行 Seed

```shell
php artisan catch:db:seed <module>
```

执行模块的 seed 文件，填充初始化数据

```shell
php artisan catch:migrate permissions
```

### 导出模块相关的菜单

```shell
php artisan catch:export:menu <module> <table?>
```

- table 可选参数，默认是 `permissions` 表

导出权限模块的菜单，并且生成`seed`文件。这个命令只在打包模块时会有用处，如果模块不用与与其他人共享的话，基本用不着

```php
php artisan catch:export:menu permissions
```

### 生成模型

```shell
php artisan catch:make:model <module> <modelName> <table?>
```

生成模型文件

```shell
php artisan catch:make:model permissions Users
```

内容如下

```php
namespace Modules\Permissions\Models;

use Catch\Base\CatchModel as Model;

class Users extends Model
{
    protected $table = 'users';

    protected $fillable = [
        'id', 'username', 'password', 'email', 'avatar', 'remember_token', 'department_id', 'creator_id', 'status', 'login_ip', 'login_at', 'created_at', 'updated_at', 'deleted_at',
    ];

}
```

:::info
添加非常有用的三个指令，这三个指令会分离前后端路由，从而加速应用的访问速度。实验性功能
:::

### 路由缓存

```shell
php artisan catch:route:cache
```

这个命令会将前后台路由分开缓存

### 路由缓存清理

```shell
php artisan catch:route:clear
```

### 路由列表

```shell
php artisan catch:route:list
```

- 可选项 --app

默认查看`后台`应用的路由，即`modules`目录下的应用。
