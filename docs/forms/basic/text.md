# 文本组件

[ElementPlus Input 组件](https://element-plus.org/zh-CN/component/input.html) 表单组件这个组件用的是最多的

## 基础使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->text('text', '文本');
})->labelWidth(120);
```

## 必填

```php
return $form->make(new Roles(), function (Form $form) {
    $form->text('text', '文本')->required()
})->labelWidth(120);
```

## 设置最大长度

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->text('text', '文本')->required()

        ->limit(100)->showLimit();
})->labelWidth(120);
```
