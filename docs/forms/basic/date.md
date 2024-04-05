# 日期

## 基础使用

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->date('日期', 'date')->format('YYYY-MM-DD')
})->labelWidth(120);
```

:::tip
组件默认格式是 YYYY-MM-DD (2014-03-12)
:::

## 默认值

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->date('日期', 'date')->default('2020-01-01');
})->labelWidth(120);
```

## 日期时间

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->datetime('date', '日期')->default('2020-01-01 00:01:03');
})->labelWidth(120);
```

:::tip
日期时间组件默认格式是 YYYY-MM-DD H:i:s (2014-03-12 00:01:03)
:::
