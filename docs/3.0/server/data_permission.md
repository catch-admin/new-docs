# 数据权限

## 介绍

其实数据一般情况下不会使用到，所以数据权限不是默认启用的。数据权限是跟角色相关，如图
![pSlzXdO.png](https://s1.ax1x.com/2023/01/16/pSlzXdO.png)
角色一般支持以下权限

- 全部数据权限
- 自定数据权限
- 部门数据权限
- 部门及以下数据权限
- 仅本人数据权限

## 约定

如果想使用数据权限，那么数据表一定需要数据用户标记，所以表字段必须包含用户标识，`catchadmin` 使用 `creator_id` 字段

## 使用

- 在使用之前一定要确认你已经在角色上设置了**数据权限**范围
- 如果使用部门权限，那么用户就必须设置**所属部门**

完成以上两步，使用上就非常简单，但必须是`权限模块`开启的情况，并且使用权限模块。因为数据权限是和角色强绑定的。

```php title="modules/Permissions/Models/Traits/DataRange.php"
use Modules\Permissions\Models\Traits\DataRange;

Class AnyModel extends CatchModel
{
    use DataRange;
}
```

如果使用 **DataRange trait** 时，那么在列表数据中会自动进行数据权限的过滤。

如果想单独使用，本质上数据权限还是用的 `scope` 查询，可以进行如下查询

```php
Model::select('*')->dataRange()->get();
```
