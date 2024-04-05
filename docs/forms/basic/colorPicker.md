# ColorPicker 组件

ElementPlus [颜色选择组件](https://element-plus.org/zh-CN/component/color-picker.html)

## 基础使用

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->colorPicker('颜色', 'color');

})->labelWidth(120);
```

## 默认值

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->colorPicker('颜色', 'color')->default('#1890ff');

})->labelWidth(120);
```
