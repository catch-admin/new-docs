# Password 组件

密码组件也是有 Input 包装而来

## 基础使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->password('password', '密码');

})->labelWidth(120);
```

## 强度密码

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->password('password', '密码')->stronger();

})->labelWidth(120);
```

## 显示密码

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->password('password', '密码')->stronger()

        ->show();

})->labelWidth(120);
```
