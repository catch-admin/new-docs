# 权限介绍

权限是大家所熟知的`RBAC`权限，即用户一对多角色，角色一对多权限。如果对 `RBAC` 权限没有足够的了解可以看一下这篇[基于角色的访问控制](https://docs.oracle.com/cd/E19253-01/819-7061/rbac-38/index.html) 的 blog。

## 基本约定

- 超级管理员不受任何权限控制
- 对于`RBAC`权限，`GET`请求是默认放行，不受权限限制

## 权限约定

## 权限模块

`catchadmin` 默认不开启权限模块，也不使用动态菜单。所以第一步应该是开启模块

```php
php artisan catch:module:install permissions
```

:::info
开启之后如果没有权限菜单，可以刷新一下
:::

### 中间件

权限模块提供了权限控制的中间件，如下

```php title="modules/Permissions/Middlewares/PermissionGate.php"
class PermissionGate
{
    public function handle(Request $request, \Closure $next)
    {
        // get 请求全部通过
        if ($request->isMethod('get')) {
            return $next($request);
        }

        /* @var User $user */
        $user = $request->user(getGuardName());

        // 没有权限则被拦截
        if (! $user->can()) {
            throw new PermissionForbidden();
        }

        return $next($request);
    }
}
```

### 添加权限

其实上面的稍做了解即可，最重要还是看看权限是由哪些元数据组成。因为这是前后端的项目，所以比一般渲染的要复杂一点，但并不是不能做，前提一定要先去了解 [`vue 的路由`](https://router.vuejs.org/)相关知识。首先找到**权限管理/菜单管理**页面，点击新增，看到以下界面

![pSl4dVP.png](https://s1.ax1x.com/2023/01/16/pSl4dVP.png)
`CatchAdmin` 将权限分为三种类型

- **目录** 目录仅仅就是一级菜单
- **菜单** 菜单就是主要的页面
- **按钮** 每个页面的操作，每个按钮都对应后端的控制的一个 `action`，这个非常重要

- 路由 `Path` 对应前端 `vue` 路由的 `path`
- 组件 对应前端 `vue` 路由的 `component`
  - 目录类型一般都是选择 Layout 组件
  - 菜单类型则是选择对应页面的组件

传统的 `Laravel` 项目，`RBAC` 都可以通过 `Controller` 来控制页面以及页面操作的权限控制。其实前后端分离的项目也是一样，只不过对于传统的渲染项目，页面也是由 PHP 控制的。前后端分离之后，页面都交给了前端，但是数据操作并没有交给前端，所以对于前后端分离的项目，`RBAC` 主要的作用就是控制`API`访问，上面的几个概念都是由前端控制的。后端的着重点在`按钮类型`, 即对控制器的`action(方法)` 控制。
所以后端需要添加控制器的每一个`action`操作, 针对这些 `action` 进行权限赋予。

### 权限判断

`catchadmin` 使用模块化，所以权限标识的格式是这样的

```
module@controller@action // 模块名称@控制器名称@控制器方法名称
```

例如权限模块的角色列表，它是放在权限模块(Permissions)角色控制器(RolesController)的`index`方法。那么进行权限判断的格式就是这样的

```php
Modules\Permissions\Http\Controller\RolesController@index
```

如果出现权限认证失败，那么极大可能是你在后台权限菜单设置的问题，你需要去数据库确认下
![catchadmin 权限-laravel admin](https://image.catchadmin.com/202405220926755.png)
对应的 `moudle` 和 `permission_mark` 字段，确认是否符合上面的规则

#### 当前用户是否有权限

```php
Auth::user()->can(string $permission = null);
```

- permissions 如果需要判断某个特定的权限，permission 参数格式: module@controller@action, 例如 `permission@Roles@index`

#### 用户的权限

```php
/*@var Model\Roles $user*/
$user->withPermissions()->permissions;
```

#### 角色权限

```php
/*@var Model\Roles $role*/
$role->getPermissions()
```
