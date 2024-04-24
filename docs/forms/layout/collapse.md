# 面板组件

## 使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->collapse(function (Collapse $collapse) {
        $collapse->collapse(function (Collapse $collapse) {
            $collapse->text('name', '角色名称1');
            $collapse->text('name2', '角色名称2');
            $collapse->text('name2', '角色名称2');
            $collapse->text('name2', '角色名称2');
        })->title('基本信息');

        $collapse->collapse(function (Collapse $collapse) {
            $collapse->text('name', '角色名称1');
            $collapse->text('name2', '角色名称2');
            $collapse->text('name2', '角色名称2');
            $collapse->text('name2', '角色名称2');
        })->title('基本信息1');

    });

})->labelWidth(70);
```

![laravel admin catchadmin 动态表单 collapse组件](/docs/assets/images/collapse.jpg)
