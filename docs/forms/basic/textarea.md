# Textarea

`Textarea` 使用 `text 组件` 包装

## 基础使用

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->textarea('textarea', '文本域')->required();
})->labelWidth(120);
```
