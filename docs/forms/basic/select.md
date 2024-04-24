# Select 组件

[ElementPlus Select 组件](https://element-plus.org/zh-CN/component/select.html)

## 基础使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->select('users', '用户')
        ->options(function () {
            return Permissions::query()->select('id', 'permission_name')->get();
        })
        ->label('permission_name');
})->labelWidth(120);
```

## 多选

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {

$form->select('users', '用户')
    ->options(function () {
        return Permissions::query()->select('id', 'permission_name')->get();
    })
    ->label('permission_name')
    ->multiple();

})->labelWidth(120);

```

## 允许动态创建

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {

    $form->select('users', '用户')
        ->options(function () {
            return Permissions::query()->select('id', 'permission_name')->get();
        })
        ->label('permission_name')
        ->multiple()
        ->allowCreate();

})->labelWidth(120);
```

## 设置默认值

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {

    $form->select('users', '用户')
        ->options(function () {
            return Permissions::query()->select('id', 'permission_name')->get();
        })
        ->label('permission_name')
        ->multiple()
        ->allowCreate()
        ->default([1,2,3,4,5]);

})->labelWidth(120);
```

## 远程数据

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->select('users', '用户')
        ->api('permissions/permissions')
        ->label('permission_name')
        ->multiple()
        ->default([1]);

})->labelWidth(120);
```

## 远程数据过滤数据

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->select('users', '用户')
        ->api('permissions/permissions')
        // query 方法
        ->query([
            'permission_name' => '哈哈哈'
        ])
        ->label('permission_name')
        ->multiple();

})->labelWidth(120);
```

## 分组模式

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->select('users', '用户')
        ->options([
            [
                'label' => '超级管理员',
                'options' => [
                    [
                        'label' => '管理员',
                        'value' => '管理员'
                    ]
                ]
            ],
            [
                'label' => '管理员',
                'options' => [
                    [
                        'label' => '管理员',
                        'value' => '管理员'
                    ]
                ]
            ]
        ])
        ->label('label', 'value')
        ->group()
        ->multiple();

})->labelWidth(120);
```

![laravel admin catchadmin 动态表单 select组件](/docs/assets/images/selectgroup.jpg)
