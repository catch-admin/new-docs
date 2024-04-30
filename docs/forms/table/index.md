# 动态表格

CatchAdmin 支持服务端动态表格功能，提供了无需写前端页面的能力。

## 基本使用

```php
use CatchForm\Table\Table;

$table = new Table();

$table->api('admin')
      ->columns(function (Table $table) {
        $table->column('标题', 'title');

        $table->column('描述', 'description');

        $table->column('版本', 'version')->slot('hello');
      })
      ->filter(function (Table $table) {
            $table->input('名称', 'title');
      })

```

## 基础属性

### 表格高度

```php
$table->height(100)
```

### 表格边框

```php
$table->border(string $border)
```

### 表格尺寸

#### Large

```php
$table->large()
```

#### small

```php
$table->small()
```

### 空表格文字

```php
$table->emptyText('暂无数据')
```

## 表格分页

### 是否显示

```php
$table->pagination(false)
```

### 分页限制

```php
$table->limit(10)
```

### 分页 Limit 组

```php
$table->limits([10, 20, 30, 50])
```

### 分页页码

```php
$table->page(10)
```

### 分页 layout

```php
$table->layout('prev,next')
```

## 表格排序

```php
$table->sort()
```

## 表格操作显示

```php
$table-showOperation(false)
```

## 表格工具栏显示

```php
$table->showTools(false)
```

## RowKey

`rowkey` 作用主要显示是否是树形表格

```php
$table->rowKey('id')
```

## 展示搜索栏

```php
$table->isShowSearch(false)
```

## 导出

```php
$table->export('export/something')
```

## 表格弹窗

表格弹窗主要用来显示操作表单的

```php
$table->dialog(1200, 800)
```

## 删除确认提示

```php
$table->destroyConfirm('确认删除?')
```
