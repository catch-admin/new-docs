# 自增表单

## 基本使用

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->formList('users', '用户', function (FormList $formList) {

        $formList->text('name', '名称')->required();
        $formList->text('email', '邮箱')->required();
    });

})->labelWidth(70);
```

:::tip
默认使用 table 模式
:::

![laravel admin catchadmin 动态表单 dymaic组件](/docs/assets/images/dymaic.png)

## 卡片模式

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->formList('users', '用户', function (FormList $formList) {

        $formList->text('name', '名称')->required();
        $formList->text('email', '邮箱')->required();
    })->asCard();

})->labelWidth(70);
```

![laravel admin catchadmin 动态表单 dymaic组件](/docs/assets/images/dymaic1.png)

## 默认值

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->formList('users', '用户', function (FormList $formList) {

        $formList->text('name', '名称')->required();
        $formList->text('email', '邮箱')->required();
    })->default([
        [
            'name' => '张三',
            'email' => 'zhangsan@qq.com',
        ],
        [
            'name' => '李四',
            'email' => 'lisi@qq.com',
        ]
    ])->asCard();

})->labelWidth(70);
```

![laravel admin catchadmin 动态表单 dymaic组件](/docs/assets/images/dymaic2.png)
