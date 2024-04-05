# 邮件组件

邮件组件时间是由文本组件包装而来

## 使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->email();

})->labelWidth(120);
```

其他用法请查看 [文本组件](text.md)
