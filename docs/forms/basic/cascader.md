# Cascader 组件

对应 ElementPlus [Cascader 级联组件](https://element-plus.org/zh-CN/component/cascader.html)
级联组件目前主要在后台用于父级组件，例如权限菜单选择等功能上，下面的功能演示主要使用 `permissions` 权限菜单表作为数据源演示

## 入门

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->cascader('permissions', '权限')->options(function (){
        // 数据源, 使用树形菜单
        return Permissions::get()->toTree();

    })->label('permission_name');

})->labelWidth(120);
```

通过 `options` 方法设置数据源, 然后根据实际业务设置 `value` 和 `label` 值, 如下所示效果
![laravel admin catchadmin 动态表单 Cascader组件](/docs/assets/images/cascader.jpg)

## 只显示一级

初始化状态，会显示所有层级，如果只显示一级，可以使用

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->cascader('permissions', '权限')->options(function (){
        // 数据源, 使用树形菜单
        return Permissions::get()->toTree();

    })->label('permission_name')->isShowAllLevels(false);

})->labelWidth(120);
```

## 选择任意一级

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->cascader('permissions', '权限')->options(function (){
        // 数据源, 使用树形菜单
        return Permissions::select(['id', 'parent_id', 'permission_name'])->get()->toTree();

    })->label('permission_name')
    ->isShowAllLevels(false)
    ->checkStrictly();

})->labelWidth(120);
```

## 多选

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->cascader('permissions', '权限')->options(function (){
        // 数据源, 使用树形菜单
        return Permissions::get()->toTree();

    })->label('permission_name')
    ->isShowAllLevels(false)
    ->checkStrictly()
    ->multiple();

})->labelWidth(120);
```

![laravel admin catchadmin 动态表单 Cascader组件](/docs/assets/images/cascader1.jpg)

## 赋值

### 多选

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->cascader('permissions', '权限')->options(function (){
        // 数据源, 使用树形菜单
        return Permissions::get()->toTree();

    })->label('permission_name')
    ->isShowAllLevels(false)
    ->multiple()->value([1,2,3])

})->labelWidth(120);
```

### 单选

```php
$form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->cascader('permissions', '权限')->options(function (){
        // 数据源, 使用树形菜单
        return Permissions::get()->toTree();

    })->label('permission_name')
    ->isShowAllLevels(false)
    ->checkStrictly()
    ->value(1);

})->labelWidth(120);
```
