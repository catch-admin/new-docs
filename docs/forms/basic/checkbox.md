# Checkbox 组件

Element Plus [Checkbox 多选框组件](https://element-plus.org/zh-CN/component/checkbox.html)

## 基础用法

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->checkbox('status', '状态')->options([
        [
            'value' => 1,
            'label' => '开启'
        ],
        [
            'value' => 0,
            'label' => '关闭'
        ],
        [
            'value' => 2,
            'label' => '隐藏'
        ]
    ]);

})->labelWidth(120);
```

![laravel admin catchadmin 动态表单 checkbox组件](/docs/assets/images/checkbox.jpg)

## 默认值/赋值

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->checkbox('status', '状态')->options([
        [
            'value' => 1,
            'label' => '开启'
        ],
        [
            'value' => 0,
            'label' => '关闭'
        ],
        [
            'value' => 2,
            'label' => '隐藏'
        ]
    ])->value([1,2]);

})->labelWidth(120);
```

![laravel admin catchadmin 动态表单 checkbox组件](/docs/assets/images/checkbox1.jpg)

## 禁用某个选项

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->checkbox('status', '状态')->options([
        [
            'value' => 1,
            'label' => '开启'
        ],
        [
            'value' => 0,
            'label' => '关闭',
            'disabled' => true
        ],
        [
            'value' => 2,
            'label' => '隐藏'
        ]
    ])->value([1,2]);

})->labelWidth(120);
```

## 按钮选项样式

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->checkbox('status', '状态')->options([
        [
            'value' => 1,
            'label' => '开启'
        ],
        [
            'value' => 0,
            'label' => '关闭',
            'disabled' => true
        ],
        [
            'value' => 2,
            'label' => '隐藏'
        ]
    ])->value([1,2])->asButton();

})->labelWidth(120);
```
