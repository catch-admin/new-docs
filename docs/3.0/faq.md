# 常见问题

## 依赖问题

由于 `Laravel10` 刚发布，无法安装。可能是由于镜像更新慢导致的，所以建议取消使用镜像。使用'魔法'(懂得吧)去下载

### 使用腾讯云镜像

使用下面的命令即可

```shell
composer config -g repos.packagist composer https://mirrors.tencent.com/composer/
```

## 设置了菜单，却只显示子级?

目前菜单设置上，如果是二级菜单，并且只有`一个`二级菜单的情况下，那么只会显示二级菜单。

## 路由未找到

遇到这个问题首先去查看路由

```
php artisan route:list
```

看看接口路由是否在路由表里，如果没有找到，那么就应该看看模块是否开启，在 `storage/app/modules.json` 文件里查看，以权限模块为例

```json
{
  "title": "权限管理",
  "name": "permissions",
  "path": "permissions",
  "keywords": "权限, 角色, 部门",
  "description": "权限管理模块",
  "provider": "\\Modules\\Permissions\\Providers\\PermissionsServiceProvider",
  "version": "1.0.0",
  "enable": true // 该字段是否开启
}
```

## 模块路由命名重复

最近整 PRO 的时候遇到一个问题, CMS 模块和 SHOP 模块都有一个分类控制，名为 `CategoryController`, 正常来说只要这么分组设置路由就可以了

```php
// cms 分类路由
Route::prefix('cms')->group(function () {
    Route::apiResource('category', CategoryController::class);
});

// shop 分类路由
Route::prefix('shop')->group(function () {
    Route::apiResource('category', CategoryController::class);
});
```

但是这里会出现一个问题，当使用

```sh
php artisan route:cache
```

的时候，会提示一个错误

```shell
  Unable to prepare route [api/shop/category] for serialization. Another route has already been assigned name [category.index].
```

这个问题就是两个路由的 `name` 重复了, 无法进行缓存了。这里就需要设置成这样,只改 shop 的路由即可

```php
// shop 分类路由
Route::prefix('shop')->group(function () {
    Route::apiResource('category', CategoryController::class)->names('shop_category')
});
```

## 打包出现报错

如果打包出现 ts 过多的类型错误，而你对类型又不太敏感的话，对应用没有影响。
一个快速的解决办法就是修改 `package.json 文件` build 命令

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build", // [!code --]
    "build": "vite build", // [!code ++]
    "preview": "vite preview"
  }
}
```
