# Tree 组件

[ElementPlus tree 组件](https://element-plus.org/zh-CN/component/tree.html)

## 基础使用

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->tree('树形结构', 'tree')->required()
               ->options(function (){
                  return Permissions::select(['id', 'parent_id', 'permission_name as label'])->get()->toTree();
               });
})->labelWidth(120);
```

## 默认展开

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->tree('树形结构', 'tree')->required()
               ->options(function (){
                  return Permissions::select(['id', 'parent_id', 'permission_name as label'])->get()->toTree();
               })
               // 默认展开
               ->isExpanded();
})->labelWidth(120);
```

## 多选框

```php
 $form = new Form();

return $form->make(new Roles(), function (Form $form) {
    $form->tree('树形结构', 'tree')->required()
               ->options(function (){
                  return Permissions::select(['id', 'parent_id', 'permission_name as label'])->get()->toTree();
               })
               ->isExpanded()
               // 多选框
               ->showCheckbox();
})->labelWidth(120);
```
