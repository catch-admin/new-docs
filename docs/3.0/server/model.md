# 模型介绍

一般后台项目大多数业务处理都是跟模型相关的，所以在模型上做的处理还是比较多的。目前`catchadmin`的模型都是继承 `CatchAModel`，所以先来看看`CatchModel`。
:::info
model 一定要慢慢看完，开发加倍效果
:::

## CatchModel

```php
abstract class CatchModel extends Model
{
    use BaseOperate, Trans, SoftDeletes, ScopeTrait;

    /**
     * unix timestamp
     *
     * @var string
     */
    protected $dateFormat = 'U';

    /**
     * paginate limit
     */
    protected $perPage = 10;

    /**
     * @var string[]
     */
    protected array $defaultCasts = [
        'created_at' => 'datetime:Y-m-d H:i:s',

        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected array $defaultHidden = ['deleted_at'];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->init();
    }

    /**
     * init
     */
    protected function init()
    {
        $this->makeHidden($this->defaultHidden);

        $this->mergeCasts($this->defaultCasts);
    }


    // 修改软删除的查询条件
    public static function bootSoftDeletes(): void
    {
        static::addGlobalScope(new SoftDelete());
    }
}
```

`CatchAdmin` 的所有表的 `created_at` 和 `updated_at` 都是 timestamp，也就是 int 类型，所以在返回给客户端的时候，需要转成 date，所以单独设置了 `defaultCasts`

```php
protected array $defaultCasts = [
    'created_at' => 'datetime:Y-m-d H:i:s',

    'updated_at' => 'datetime:Y-m-d H:i:s',
];
```

> 这里有人肯定会有疑问？为什么要非要加一个 `defaultCasts` 属性呢？为什么不直接用 `casts`？

:::tip
因为所有模型都是继承`CatchAdmin`, 并且这个日期转换基本每个模型都会用得到。所以一旦这里如果设置成 `casts`, 有可能会被用户自定义的 `casts` 覆盖。还有一个 `defualtHidden`属性是一个道理
:::

## 软删除

由于`CatchAdmin` 软删除默认值是**0**，所以软删除的查询条件也必须改变。在 `CatchModel` 引入 `SoftDeleteScope`，当然使用还是和原本是一样的，无需改动

```php
class SoftDelete extends SoftDeletingScope
{
    public function apply(Builder $builder, Model $model)
    {
        $builder->where($model->getQualifiedDeletedAtColumn(), '=', 0);
    }
}
```

## 属性

除了上面的改变，`CatchAdmin` 还新增了若干属性，以增强项目的粘合性。

```php

    // 当需要树状结构的表，父级设置 'parent_id', 建议就使用默认的
    // 因为后台提供的 Tree 结构都是使用该字段
    protected string $parentIdColumn = 'parent_id';

    // 排序字段，默认使用 sort
    protected string $sortField = 'sort';

    // 排序规则
    protected bool $sortDesc = true;

    // 列表的数据返回是否以树状结构返回
    protected bool $asTree = false;

    // 列表查询的默认字段
    protected array $fields = [];

    // 列表是否是分页
    // 默认分页
    protected bool $isPaginate = true;

    // 创建和更新数据提交的字段
    // form 字段
    protected array $form = [];

    // 提交的数据是否有关联关系
    // 例如用户（user） 和 角色 （roles）
    // user 跟角色是一对多的关系
    // 那么 user 模型里面就设置角色关系的方法
    // formRelations 就是使用该方法名称
    protected array $formRelations = [];
```

## 模型方法

## 列表

```php
public function getList(): miexed
```

## 保存数据

```php
public function storeBy(array $data): bool`
```

## 保存数据

```php
public function createBy(array $data): mixed
```

:::info
该方法可用于循环插入数据，`storeBy` 则不行
:::

## 更新数据

```php
public function updateBy($id, array $data): mixed
```

## 查询数据

```php
public function firstBy($value, $field = null, array $columns = ['*']): ?Model
```

默认使用 `id` 字段查询

## 删除数据

```php
public function deleteBy($id, bool $force = false): ?bool
```

默认使用 `id` 字段的 `value` 删除，`force` 参数则进行物理删除

## 状态切换

```php
public function toggleBy($id, string $field = 'status'): bool
```

通过 `ID` 进行状态切换，默认是 `status` 字段

## 处理树状数据的下级数据

```php
public function updateChildren(mixed $parentId, string $field, mixed $value): void
```

## 字段别名

```php
public function aliasField(string|array $fields): string|array
```

## 设置 ceator_id

```php
public function setCreatorId()
```

## 获取创建人

```php
public function scopeCreator();
```

这是 `scope` 查询，可以直接使用。

```php
Model::select('*')->creator()->get();
```

当然使用该查询，数据表里面必须包含`creator_id`字段，即创建人字段，否则没有作用

## 模糊查询

```php
public function whereLike($field, $value)
```

## 快速查询

```php
public function quickSearch(array $params = [])
```

该方法是通过模型属性 `searchable` 搭配 Request 进行快速搜索，下面一个例子

```php
protected array $searchable = [
    'status' => '=',

    'nickname' => 'like'
]
```

如果进行这样的设置，模型的查询就会自动动态生成这样的代码, 通过这样的设置就可以很轻松的进行搜索

```php
Model::select('*')
    ->where('status', $request->get('status'))
    ->whereLike('nickname', $request->get('nickname'))
    ->get();
```

## 开启事务

之前都需要引入开启事务，例如

```php
DB::beginTransaction();
```

现在可以直接在模型调用了

```php
$this->beginTransaction();
```

事务的其他几个操作也是一样的，可以直接在模型中开启
