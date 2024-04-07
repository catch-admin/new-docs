# Button

## 基本使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->button('自定义')->primary();

})->labelWidth(70);
```

![button组件-catchadmin 动态表单](/docs/assets/images/button.jpg)

## 添加事件

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->button('自定义')->primary()->clickEvent('someEvent');

})->labelWidth(70);
```
