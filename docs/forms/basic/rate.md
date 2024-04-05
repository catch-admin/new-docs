# Rate 评分组件

[ElementPlus 评分组件](https://element-plus.org/zh-CN/component/rate.html)

## 基础使用

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->rate('rate', '评分');

})->labelWidth(120);
```

## 设置评分颜色

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->rate('rate', '评分')->colors(['blue', 'red', '#f7ba2a']);

})->labelWidth(120);
```

## 允许半选

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->rate('rate', '评分')->colors(['blue', 'red', '#f7ba2a'])
    ->allowHalf();

})->labelWidth(120);
```
