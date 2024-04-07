# Title

## 基本使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->divider('分割线');

})->labelWidth(70);
```

## 左侧显示

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->divider('分割线')->left()

})->labelWidth(70);
```

## 右侧显示

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->divider('分割线')->right()

})->labelWidth(70);
```
