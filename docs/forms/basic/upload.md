# 上传组件

## 上传图片

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->upload('file', '单图')->image('/api/upload/image');

})->labelWidth(120);
```

## 上传多图

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->upload('file', '多图')->image('/api/upload/image', true);

})->labelWidth(120);
```
