# 图标选择器

## 基本使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->iconSelect('icon', '图标');

})->labelWidth(120);
```

![laravel admin catchadmin 动态表单 图标选择器](/docs/assets/images/iconselect.png)
