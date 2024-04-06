# Transfer

[ElementPlus transfer 组件](https://element-plus.org/zh-CN/component/transfer.html)

## 基础使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->transfer('transfer', '穿梭框')

        ->options([
            [
                'key' => 1,
                'label' => '超级管理员'

            ],
            [
                'key' => 2,
                'label' => '测试人员'
            ]
        ]);
})->labelWidth(120);
```

## 搜索过滤

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->transfer('transfer', '穿梭框')

        ->options([
            [
                'key' => 1,
                'label' => '超级管理员'

            ],
            [
                'key' => 2,
                'label' => '测试人员'
            ]
        ])->filter('搜索角色');
})->labelWidth(120);
```
