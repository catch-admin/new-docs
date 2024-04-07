# 卡片组件

## 使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->card(function (Card $card) {
        $card->text('name', '角色名')->required();

        $card->inline(function (Inline $inline) {
            $inline->text('display_name', '显示名')->required();
            $inline->text('description', '描述')->required();
        });

        $card->grid(function (Grid $grid) {
            $grid->text('display_name', '显示名')->required();
            $grid->text('description', '描述')->required();
        }, 2);

        $card->collapse(function (Collapse $collapse) {
            $collapse->collapse(function (Collapse $collapse) {
                $collapse->text('name', '角色名称1');
            })->title('基本信息');

            $collapse->collapse(function (Collapse $collapse) {
                $collapse->text('name2', '角色名称2');
            })->title('基本信息1');
        });
    });

})->labelWidth(70);
```

![card组件-catchadmin 动态表单](/docs/assets/images/card.jpg)
