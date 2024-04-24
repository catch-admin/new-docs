# Gird 组件

Gird 布局组件

## 双栏布局

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->grid(function (Grid $grid) {

        $grid->grid(function (Grid $grid) {
            $grid->text('name', '角色名称');
        });


        $grid->grid(function (Grid $grid) {
            $grid->text('display_name', '显示名称');
        });
    }, 2);

})->labelWidth(120);
```

![laravel admin catchadmin 动态表单 grid组件](/docs/assets/images/grid2.jpg)

## 三栏布局

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->grid(function (Grid $grid) {

        $grid->grid(function (Grid $grid) {
            $grid->text('name', '角色名称');
        });


        $grid->grid(function (Grid $grid) {
            $grid->text('display_name', '显示名称');
        });

        $grid->grid(function (Grid $grid) {
            $grid->text('description', '描述');
        });
    }, 3);

})->labelWidth(70);
```

![laravel admin catchadmin 动态表单 grid组件](/docs/assets/images/grid3.jpg)

:::tip
Grid 布局栏目过多注意使用 labelWidth 的宽度
:::
