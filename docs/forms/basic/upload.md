# 上传组件

上传组件分为四组方法，对应前端四种上传组件。区分开，可以很好知道业务功能的作用。

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

OR

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->upload('file', '多图')->images('/api/upload/image');

})->labelWidth(120);
```

## 单文件上传

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->upload('file', '单图')->file('/api/upload/file');

})->labelWidth(120);
```

## 多文件上传

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->upload('file', '多图')->file('/api/upload/file', true);
file
})->labelWidth(120);
```

OR

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->upload('file', '多图')->files('/api/upload/file');

})->labelWidth(120);
```
