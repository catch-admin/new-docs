## Inline 组件

Inline 组件行内布局组件

## 使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->inline(function (Inline $inline) {
        $inline->text('name', '角色名称1');
        $inline->text('name2', '角色名称2');
        $inline->text('name2', '角色名称2');
        $inline->text('name2', '角色名称2');
    })->column();

})->labelWidth(70);

```

![inline组件-catchadmin 动态表单](/docs/assets/images/inline.jpg)
