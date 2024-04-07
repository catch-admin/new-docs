# Alert

## 使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->alert('标题1')->description('描述在这里')->success();

})->labelWidth(70);
```

## 显示 ICON

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->alert('标题1')->description('描述在这里')->success()->showIcon();

})->labelWidth(70);
```

## Dark 模式

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->alert('标题1')->description('描述在这里')->success()->showIcon()
            ->dark()

})->labelWidth(70);
```
