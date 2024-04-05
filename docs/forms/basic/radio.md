# Radio 组件

[ElementPlus Radio 组件](https://element-plus.org/zh-CN/component/radio.html)

## 基础使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->radio('status', '状态')
        ->options([
            [
                'label' => '启用',
                'value' => 1
            ],
            [
                'label' => '禁用',
                'value' => 0
            ]
        ]);

})->labelWidth(120);
```

## 默认值

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->radio('status', '状态')
        ->options([
            [
                'label' => '启用',
                'value' => 1
            ],
            [
                'label' => '禁用',
                'value' => 0
            ]
        ])->default(1);

})->labelWidth(120);
```

## 按钮样式

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->radio('status', '状态')
        ->options([
            [
                'label' => '启用',
                'value' => 1
            ],
            [
                'label' => '禁用',
                'value' => 0
            ]
        ])->default(1)->asButton();

})->labelWidth(120);
```
