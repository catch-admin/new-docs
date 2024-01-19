# 表格组件

:::warning
表格组件目前可以完成正常的 85% 的操作，部分需求请回归正常的页面开发。再使用之前，请熟悉 element table 组件。 目前基础模块有大量案例可供参考。具体查看代码。有问题请去[`论坛提问`](https://bbs.catchadmin.com)，请不要在群里问，重复的问题太多
:::

## 后端

`Table` 组件目前由下面`Table`本身，`Search` 组件和表格 `Header` 还有 `Actions` 组成。后端返回 `Json` 数据，给前端渲染页面表格。 所以这个要配合前端 `table` 是实现操作。在看视频介绍之前，一定要先看文档。[视频介绍](https://www.bilibili.com/video/BV1Py4y1x7q5/)记得三连 +

## Table

### 设置表格头部

```php
  table->header(array $header)
```

:::tip
$header 是 HeaderItem 集合，具体请看 HeaderItem 说明
:::

### 设置表格操作

```php
  table->withActions(array $actions)
```

:::tip
$actions 是 Actions 集合，具体请看 Actions 说明
:::

### 设置搜索

```php
table->withSearch(array $search)
```

:::tip
$search 是由 Search 集合，具体请看 Search 说明
:::

### 设置表格事件，具体查看 [Element Table Events](https://element.eleme.cn/#/zh-CN/component/table)

```php
  table->withEvents(array $events)

```

### 设置默认搜索参数

```php
table->withDefaultQueryParams(array $params)
```

### 设置搜索参数

```php
  table->withFilterParams(array $filterParams)
```

### 设置隐藏分页

```php
  table->withHiddenPaginate()
```

### 设置表格列表路由

```php
table->withApiRoute(string $apiRoute)
```

### 设置表单弹出层的宽度

```php
table->withDialogWidth(string $width)
```

### 设置导入路由

```php
table->withImportRoute(string $route)
```

### 设置导出路由

```php
table->withExportRoute(string $route)
```

### 设置树状列表，具体查看 Element Tree Table

```php
table->toTreeTable(string $rowKey = 'id', array $props = [])
```

### 设置树状列表展开

```php
$table->expandAll(bool $expand=true)
```

### 固定表头

```php
$table->withHeight(int $height)
```

### 斑马纹

```php
$table->withStripe()
```

### 绑定模式

```php
$table->withBind()
```

:::tip
使用该方法之后，前端 `catch-table` 可以更加简洁的使用。注意看之后前端的说明
:::

### 设置强制更新组件

```php
table->forceUpdate()
```

### 快捷导入导出，只支持单模型导入导出

```php
table->withUsedModelAndExcel(string $usedModel, array $excel)
```

### usedModel 必须使用的模型，例如 Users::class

```php
$excel 是 Excel 对象 集合，具体看下面的 Excel 组件
```

## Search 搜索组件

### 设置 label

```php
Search::label(string $label)
```

:::warning
label 设置是静态属性，所以每次都需要单独调用一次，不然下次调用会使用上一次的结果
:::

### 设置 text，文本搜索

```php
Search::text($name, $placeholder)

```

### 设置 select

```php
Search::select($name, $placeholder, $options)

```

### 设置 name, 默认 name 搜索

```php
Search::name()
```

### 设置 status, 默认 status 状态搜索

```php
Search::status()
```

### 设置 startAt, 默认 start_at 开始时间搜索

```php
Search::startAt()
```

### 设置 endAt, 默认 end_at 结束时间搜索

```php
Search::endAt()
```

:::tip
`Form` 组件的方法， `Search` 组件一样可以使用。根本上来说，`Search` 组件是由 `Form` 组件包装的
:::

## HeaderItem 表格列组件

### 设置 label

```php
HeaderItem::label(string $label)
```

### 设置 prop

```php
HeaderItem::prop(string $prop)
```

### 设置宽度

```php
HeaderItem::width(string $width)
```

### 设置操作

```php
HeaderItem::actions(array $actions)
```

:::tip
$actions 是 Actions 对象集合
:::

### 设置排序

```php
HeaderItem::sortable()
```

### 设置多选, 用在列表第一列，配合 table 的 selectChange 事件使用

```php
HeaderItem::selection()
```

### 列设置不导出

```php
HeaderItem::dontExport()
```

### 列设置不导入

```php
HeaderItem::dontImport()
```

### 固定列

```php
HeaderItem::fixed($fixed = true)
```

:::tip
fixed 支持 bool，或者字符串 left 和 right
:::

### 展开行

```php
HeaderItem::expand()
```

## table 列的插槽

这些组件提供了列的数据可动态操作，除了内置的组件，自己也可以自定义列的插槽组件

### switch 组件

```php
HeaderItem::withSwitchComponent(array $options = [], $updateFields = null)
```

:::tip
可以使用 Form::options()->add('文字', 1)->render()
:::

### edit 组件

```php
HeaderItem::withEditComponent($updateFields = null)
```

### eidtNumber 组件

```php
HeaderItem::withEditNumberComponent($updateFields = null)
```

### select 组件

```php
HeaderItem::withSelectComponent(array $options, $updateFields = null)
```

### preview 组件（预览组件）

```php
HeaderItem::withPreviewComponent($field = null)
```

### component 组件

```php
HeaderItem::component(string $name, string $updateField = '', $options = [])
```

### 下载 组件

```php
HeaderItem::withDownloadComponent($field = null)
```

## Actions 组件

:::tip
Actions 会创建对应的按钮操作
:::

### 普通按钮

```php
Actions::normal(string $text, $type = '', string $event = null)
```

- text：按钮显示的文字
- type：按钮的类型，具体查看 Element button (opens new window)的 type
- event：按钮的 click 事件，设置之后需要在前端实现该事件

### 创建操作

```php
Actions::create()
```

### 更新操作

```php
Actions::update()
```

### 删除操作

```php
Actions::delete()
```

### 查看操作

```php
Actions::view()
```

### 导出操作，配合 table 的 exportRoute 使用

```php
Actions::export()
```

### 导入操作, 配合 table 的 importRoute 使用

```php
Actions::import()
```

### 路由跳转

```php
Actions::to(string $router)
```

## Excel 组件

### 设置 label

```php
Excel::label(string $label)
```

### 设置 prop

```php
Excel::prop(string $prop)
```

### 设置 options

```php
Excel::options(array $options)
```

:::tip
提供字段枚举值的转换，例如表的 status 字段，1 代表 启用 2 代表禁用,那么可以按照下面的例子设置
:::

```php
[
   [
     'label' => '启用',
     'value' => 1,
   ],

   [
     'label' => '禁用',
     'value' => 2,
   ]
]
```

正确设置之后，导入导出才可以正确转换。

### 设置导入

```php
Excel::import(bool $import)
```

一般来说，你设置了字段都会在导入导出中使用，但是如果你不需要的，可以通过这个方法设置为 false,下面的 export 同理

### 设置导出

```php
Excel::export(bool $export)
```

## 前端

一般模式下前端 `props` 需要配合后端填充就可以了。

```javascript
<catch-table
  :ref="table.ref"
  :headers="table.headers"
  :border="true"
  :search="table.search"
  :filterParams="table.filterParams"
  :formCreate="formCreate"
  :actions="table.actions"
  :table-events="table.events"
  :api-route="table.apiRoute"
  :selectable="selectable"
/>
```

绑定模式下的操作更加简洁

```javascript
<catch-table
  :formCreate="formCreate"
  v-bind="table"
/>
```

## 表单组件

表单组件前端基于 [form-create](http://www.form-create.com/v2/guide/), 后端基于其 [PHP 扩展包](http://php.form-create.com/docs/2.0/README)。请在使用前阅读其文档。Form 在其基础上做了适配后台的非过度封装。 下面是新增的 Form 组件。

### 图片上传

```php
Form::image(string $title, string $value = '')

```

### 多图上传

```php
Form::images(string $title, string $value = '')
```

### 文件上传

```php
Form::file(string $title, string $value = '')
```

### 多文件上传

```php
Form::files(string $title, string $value = '')
```

### 编辑器

```php
Form::editor($field, $title, $value = '')
```

:::tip
编辑器需要在 Dialog 中初始化，否则在第二次打开无法使用。具体请看[论坛解决方案](https://bbs.catchadmin.com/post/13)

### 省市区

:::tip
在使用省区市组件之前，也要使用 php think region 命令获取省市区数据，之后在使用组件
:::

```php
Form::area($field, $title, $props = [])
```

## 额外支持的表单验证

### 正则验证

```php
Form::validatePattern(string $pattern)
```

### 纯数字验证

```php
Form::validateAlpha()
```

### 支持字母和数字

```php
Form::validateAlphaNum()
```

### 字母和数字，下划线\_及破折号-

```php
Form::validateAlphaDash()
```

### 手机号

```php
Form::validateMobile()
```

### 身份证

```php
Form::validateIdCard()
```

### 邮政编码

```php
Form::validateZip()
```

### IP 地址

```php
Form::validateIp()
```

### 座机

```php
Form::validateLandLine()
```

### 密码

```php
Form::validatePassword()
```

### 强密码

```php
Form::validateStrongPassword()
```

### 纯汉字

```php
Form::validateChineseCharacter()
```

## Form 的最佳实践

`CatchAdmin` 是模块化的，那么模块只管理模块的 `Form` 就好了。因为每个模块的 `Form` 只是渲染页面，而不涉及数据操作。所以针对每个模块使用 `Factory` 来管理，那么针对所有模块则使用了抽象工厂。下面来看看如何做的。

首先在任意模块创建 `form` 文件夹，然后创建 `Factory.php` 文件

```php
use catcher\library\form\FormFactory;

class Factory extends FormFactory
{
    public static function from(): string
    {
        return __NAMESPACE__;
    }
}
```

继承 `FormFactory` 抽象工厂，实现 `from `方法，返回当前的 `Namespace` 就可以。

创建一个 `From.php` 文件。继承 `Form` 之后，实现 `fields `方法。

```php
use catcher\library\form\Form;

class Form extends Form
{
    public function fields(): array
    {
        // TODO: Implement fields() method.
        return [
            self::input('job_name', '岗位名称')->required(),

            self::input('coding', '岗位编码'),

            self::radio('status', '状态')->value(1)->options(
                self::options()->add('启用', 1)->add('禁用', 2)->render()
            ),

            self::number('sort', '排序')->value(1)->min(1)->max(10000),
        ];
    }

}

```

最后创建使用工厂生产 `Form`

```php
Factory::create('form');
```
