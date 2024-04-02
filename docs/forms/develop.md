# 开发

为了更好的介绍，文档将如何开发提到最前面，组件详细使用可以在对应组件页面了解到。目前开发一些案列正在进行中，后续继续补充

## 入门

首先创建一个简单的角色表单

```php
use CatchForm\Components\Form;
use Modules\Permissions\Models\Roles;

class RoleForm
{
    public function render()
    {
        $form = new Form();

        return $form->make(new Roles(), function (Form $form) {
            $form->text('role_name', '角色名称')->required();
            $form->text('identify', '角色显示名称')->required();
            $form->text('description', '角色描述')->required();
        });
    }
}
```

- 使用 `Form` 组件创建 `$form` 对象
- 使用 `make` 方法
  - 第一个参数是表单录入的`数据模型`
  - 第二个则接受一个`匿名函数`，里面是对应表单的内容

#### 如下图显示

![入门表单](/docs/assets/images/roleform.png)

## 分栏布局

有时候表单需要分栏布局，目前 catchform 采用 Gird 进行分栏布局。下面演示双栏布局

```php
class RoleForm
{
    public function render()
    {
        $form = new Form();

        return $form->make(new Roles(), function (Form $form) {
            $form->grid(function (Grid $grid) {
                $grid->grid(function (Grid $grid) {
                    $grid->text('role_name', '角色名称')->required();
                    $grid->text('identify', '角色显示名称')->required();
                });

                $grid->grid(function (Grid $grid) {
                    $grid->text('description', '角色描述')->required();
                });
            }, 2);
        })->labelWidth(120);

    }
}
```

显示效果如下
![分栏布局](/docs/assets/images/gird.jpg)

## 表单条件

有时候表单元素之间需要一些状态条件联动，举个简单的示例，还是以上面的示例为例

```php
class RoleForm
{
    public function render()
    {
        $form = new Form();

        return $form->make(new Roles(), function (Form $form) {
            $form->text('role_name', '角色名称')->required();

            // 需要在 role_name === admin 的时候隐藏
            $form->text('identify', '角色显示名称')->required()
                ->hidden(Form::of('role_name')->equal('admin'));

            $form->text('description', '角色描述')->required();
        })->labelWidth(120);

    }
}
```

![条件演示](/docs/assets/images/condition.gif)

## 表单验证

表单组件内部内置了很多可用规则，下面演示个只允许字母的规则。

```php
class RoleForm
{
    public function render()
    {
       $form = new Form();

        return $form->make(new Roles(), function (Form $form) {
            $form->grid(function (Grid $grid) {
                $grid->grid(function (Grid $grid) {
                    $grid->text('role_name', '角色名称')->required();
                    $grid->text('identify', '角色显示名称')->required()
                        // 只允许字母
                        ->rules('alpha');
                });

                $grid->grid(function (Grid $grid) {
                    $grid->text('description', '角色描述')->required();
                });
            }, 2);
        })->labelWidth(120);

    }
}
```

![条件演示](/docs/assets/images/rule.gif)

### 可用规则

[可用规则，请查看可用规则验证列表](./rules.md)
