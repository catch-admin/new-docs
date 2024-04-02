# Boolean

该组件实际就是 `Switch` 组件

## 默认

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->boolean('status', '状态');

})->labelWidth(120);
```

![switch组件默认](/docs/assets/images/switch.png)

## 添加文字提示

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->boolean('status', '状态')->true()->false();

})->labelWidth(120);
```

![switch组件添加文字提示](/docs/assets/images/switch1.jpg)

## 添加默认值

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->boolean('status', '状态')->true()->false()->default(1);
})->labelWidth(120);
```

![switch组件添加默认值](/docs/assets/images/switch1.jpg)
