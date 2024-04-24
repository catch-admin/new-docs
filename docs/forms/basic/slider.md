# 滑块组件

[ElementPlus 滑块组件](https://element-plus.org/zh-CN/component/slider.html)

## 基础使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->slider('slider', '滑块');
})->labelWidth(120);
```

## 设置范围

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->slider('slider', '滑块')
        // 设置最小 最大值以及步长
        ->range(1, 10, 2);
})->labelWidth(120);
```

## 显示输入框

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->slider('slider', '滑块')
        // 设置最小 最大值以及步长
        ->range(1, 10, 2)
        ->showInput();
})->labelWidth(120);
```

![laravel admin catchadmin 动态表单 slider组件](/docs/assets/images/slider.png)
