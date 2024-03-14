# 模块化

在开发前首先需要了解后台的一个最重要的功能 `模块`。后台里面的所有的业务功能都被拆分到最小概念模块中里。开发者之间也可以互相共享模块。

:::info
模块所有信息都存储在 `storage/app/modules.json` 文件里，请注意，模块路由未找到，模块无缘无故消失，都与该文件有关
:::

### 模块如何工作

模块通常是存放在**modules**目录下的，通过下面的命令来进行模块安装

```shell
php artisan catch:module:install <module>
```

运行完成之后，会在 `storage/app` 下，生成 `modules.json`，在该文件里可以看到模块相关的信息。如果是从 2.x 版本过渡到 3.x 的，那么应该很了解这个概念。和之前并无太大差别，当然`Laravel`社区早就有了这种概念。
![模块架构图](https://z3.ax1x.com/2021/04/26/gSrLz6.png)

要了解模块具体如何工作的，用一个新模块开发来说明下

### 开发新模块

开发模块可以通过创建模块开始
![pSlN1y9.md.png](https://s1.ax1x.com/2023/01/16/pSlN1y9.md.png)

点击开发工具的模块管理，然后新建模块，按照提示填入模块的相关信息之后，点击创建即可。就会自动生成相关模块的文件，如下生成一个 **test** 模块

![pSlN2Y8.md.png](https://s1.ax1x.com/2023/01/16/pSlN2Y8.md.png)
![pSlNv6J.png](https://s1.ax1x.com/2023/01/16/pSlNv6J.png)

如图可以看到已经生成了**Test**模块

- Http 目录就是开发模块
- Models 模型存在
- database 存在 **migration** 和 **seed** 的目录
- Providers 这个非常重要，和 Laravel Package 差不多，路由，commands，config 都是需要从这里载入
- route.php 路由文件

这里着重看下 `Provider`

```php
namespace Modules\Test\Providers;

use Catch\CatchAdmin;
use Catch\Providers\CatchModuleServiceProvider;

class TestServiceProvider extends CatchModuleServiceProvider
{
    public function moduleName(): string|array
    {
        return 'common';
    }
}
```

默认情况下，会自动加载路由。额外提供另外几个功能

- 事件 如果需要加载模块事件，这个和`Laravel` 提供的默认事件一样。Provdier 提供一个默认`$events`数组

```php
class TestServiceProvider extends CatchModuleServiceProvider
{
    protected $events = [];
}
```

- 中间件 需要实现 `middlewares` 方法!

```php
class TestServiceProvider extends CatchModuleServiceProvider
{
    protected function middlewares(): array
    {
        return [];
    }
}
```

:::warning
这里设置的 middlewares 是作用于所有模块的，所以谨慎设置
:::

### 安装

:::info
如果不需要提供给别人使用的话，可以不用继续往小看了
:::

如果想将模块贡献出来，供其他人使用，还需要一个安装器。安装器一般都是约定在`module`的根目录下。可以从权限模块找到相关案例。来看下权限模块的安装器

```php
namespace Modules\Permissions;

use Catch\Support\Module\Installer as ModuleInstaller;

class Installer extends ModuleInstaller
{
    protected function info(): array
    {
        // TODO: Implement info() method.
        return [
            'title' => '权限管理',
            'name' => 'permissions',
            'path' => 'permissions',
            'keywords' => '权限, 角色, 部门',
            'description' => '权限管理模块',
            'provider' => PermissionsServiceProvider::class
        ];
    }

    protected function requirePackages(): void
    {
        // TODO: Implement requirePackages() method.
    }

    protected function removePackages(): void
    {
        // TODO: Implement removePackages() method.
    }
}
```

安装器需要提供模块的信息，主要通过 `info` 方法来实现，如果模块有依赖的包，那么需要在 `requirePackages` 方法实现

```php
protected function requirePackages(): void
{
    // TODO: Implement requirePackages() method.
    $this->composer()->require('package/name')
}
```

如果使用的是动态菜单，还需要导出模块的相关菜单信息，可以使用这个命令

```shell
php artisan catch:export:menu <module> <table?>
```

- table 可选参数，默认是 `permissions` 表

导出权限模块的菜单，并且生成`seed`文件。这个命令只在打包模块时会有用处，如果模块不用与与其他人共享的话，基本用不着

```php
php artisan catch:export:menu permissions
```

完成这两步，就可以将模块分享给用户了，👏 欢迎大家共建社区
