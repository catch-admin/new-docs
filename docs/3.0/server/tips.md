# 小技巧

这里将会更新一些`Catchadmin`后台管理系统中的一些小技巧和 Laravel 框架中的小 tips，以便开发者更好适应这个框架的开发。也 👏 欢迎开发者补充

## 取消路由中间件

`CatchAdmin` 后台路由默认加了设置的中间件，目前的是有四个。

```php
Catch\Middleware\AuthMiddleware // 认证中间件
Catch\Middleware\JsonResponseMiddleware // Json 响应中间件
Modules\User\Middlewares\OperatingMiddleware // 操作日志记录的中间件
Modules\Permissions\Middlewares\PermissionGate // 权限认证的中间件
```

由于在模块服务中添加的路由通常都是**全局**注册到后台所有路由中，但是有时候你并不需要这些路由, 比如做微信公众号验证的时候，并不需要这些路由。你可以使用下面的技巧`withoutMiddleware(config('catch.route.middlewares'))` 取消模块中所有的公共中间件

```php
Route::withoutMiddleware(config('catch.route.middlewares'))
    ->prefix('wechat')
    ->group(function(){
    Route::prefix('official')->group(function (){
       Route::get('sign', [OfficialAccountController::class, 'sign']);
    });
    //next
});
```

## 响应自定义

目前 `CatchAdmin` 中的响应结构都是固定的, 格式如下

```php
return [
    'message' => '',
    'data' => '',
    'code' => ''
]
```

某些情况下你需要特定的结构的话，并不需要上面固定的结构，那么你可以使用下面的技巧.

```php
Route::withoutMiddleware('Catch\Middleware\JsonResponseMiddleware')
    ->group(function(){
    Route::prefix('test')->group(function (){
       Route::get('test', [TestController::class, 'index']);
    });
});
```

这是由于 `CatchAdmin`通过中间件将所有响应都转换成了`JsonResponse`,然后通过劫持 `JsonResponse` 对象，返回固定的响应格式。
所以只要取消 `JsonResponseMiddleware`, 然后再自己自定义针对特定接口做相应的数据结构即可

## 验证属性遇到第一个错误直接返回

如果不做任何控制的话，Laravel 的验证会将每个属性的规则全部验证一遍，然后返回属性的第一个错误，这样非常浪费，例如属性如果需要数据库验证的话，那么即使前面的规则不符合了，还会使用到数据库验证，例如下面的例子

```php
$request->validate([
            'code' => [
                'required',
                'size:6',
                function (string $attribute, mixed $value, \Closure $fail) use ($request) {
                   // 这里是数据验证 code 码，例如手机验证码
            }]
        ]);
```

按照目前的 rule，即使前台发送的 code 不符合 size:6 这个要求，它还是会使用从数据库验证，非常浪费。所以需要遇到第一个 error 就返回，可以这么使用

```php
$request->validate([
            'code' => [
                'bail', // 添加这个属性即可
                'required',
                'size:6',
                function (string $attribute, mixed $value, \Closure $fail) use ($request) {
                   // 这里是数据验证 code 码，例如手机验证码
            }]
        ]);
```

如果是直接通过 `$request->validate()` 进行请求数据的验证，那么每个属性都需要加 `bail` 规则，如果你使用的是 `FormRequest` 进行验证。那么可以使用下面的技巧。添加 `stopOnFirstFailure` 属性

```php
protected $stopOnFirstFailure = true;
```

:::info
通过将 stopOnFirstFailure 属性添加到请求类，一旦发生单个验证失败，它应该停止验证所有属性
:::
