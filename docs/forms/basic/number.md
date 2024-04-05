# 数字组件

[ElementPlus Input Number 组件](https://element-plus.org/zh-CN/component/input-number.html)

## 基础使用

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->number('number', '数字');

})->labelWidth(120);
```

## 步长

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->number('number', '数字')->step(2)->default(1);

})->labelWidth(120);
```

## 设置范围

设置 1（min） 到 10 (max) 范围

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->number('number', '数字')->step(2)->default(1);
            ->range(1, 10);
})->labelWidth(120);
```
