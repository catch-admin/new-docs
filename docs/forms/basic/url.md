# 链接组件

## 基础使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->url('url', 'URL')->required();
})->labelWidth(120);
```
