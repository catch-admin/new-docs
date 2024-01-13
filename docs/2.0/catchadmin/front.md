# 前端开发

## 非常重要的更新

前端模块也需要单独安装自己的组件 例如 `permissions` 模块下面就有 `router.js`

```javascript
export default {
  users: () => import('@/views/permission/users'),
  roles: () => import('@/views/permission/roles'),
  rules: () => import('@/views/permission/rules'),
  departments: () => import('@/views/permission/departments'),
  jobs: () => import('@/views/permission/jobs')
}
```

如果是老项目，那么就需要你切割 `config/componentsMap.js` 到每个模块下的 `router.js`。 新项目就按照当前模式开发就可以了

## 去除动画效果

找到
`@/layout/components/AppMain.vue`
这里在 `app-main` 外部包了一层 `keep-alive` 主要是为了缓存 `router-view` 的，配合页面的 `tabs-view` 标签导航使用，如不需要可自行去除。

其中`transition` 定义了页面之间切换动画，可以根据自己的需求，自行修改转场动画。相关文档。默认提供了`fade`和`fade-transform`两个转场动画，具体 `css`实现见`transition.scss`。如果需要调整可在`AppMain.vue`中调整 `transition` 的 `name`。

## keep-alive

找到
`@/layout/components/AppMain.vue`
以下代码

```javascript
<keep-alive :include="cachedViews">
  <router-view :key="key" />
</keep-alive>
```

去除 `include` 和 `key `即可。

:::warning
目前缓存的方案对于某些业务是不适合的，比如文章详情页这种 /article/1 /article/2，他们的路由不同但对应的组件却是一样的，所以他们的组件 name 就是一样的，就如前面提到的，keep-alive 的 include 只能根据组件名来进行缓存，所以这样就出问题了。目前有两种解决方案：

不使用 keep-alive 的 include 功能 ，直接是用 keep-alive 缓存所有组件，这样子是支持前面所说的业务情况的。当然直接使用 keep-alive 也是有弊端的，他并不能动态的删除缓存，你最多只能帮它设置一个最大缓存实例的个数 limit。
:::

## Diglog 拖拽

引入拖拽指令

```javascript
import elDragDialog from '@/directive/el-drag-dialog'

export default {
  directives: { elDragDialog }
}
```

在 Dialog 上使用指令

```javascript
<el-dialog v-el-drag-dialog />
```

## 表格操作(请采用 catch-table 组件，后期会废除)

下面的操作基于 引入 mixins，

```javascript
import formOperate from '@/layout/mixin/formOperate'

export default {
  mixins: [formOperate]
}
```

### 参数

- formName: string ｜ 表名
- formFieldsData: object ｜ 表单对象
- queryParam: object ｜ 搜索参数
- defaultQueryParam: array | 默认搜索参数
- refreshRoute: bool | 刷新路由（一般用不到）
- url: string | 请求的操作的 URL

### 新增

- beforeCreate: function | 新增前
- handleCreate: function

### 更新

- beforeUpdate: function | 更新前
- handleUpdate: function

### 删除

- beforeDelete: function | 删除前
- handleDelete: functio

### 批量删除

- handleSelectMulti: function | 批量选择
- beforeMultiDelete: function | 批量删除前
- handleMultiDelete: function

### 提交

- beforeSubmit: function | 提交前
- handleSubmit: function

### 取消

- handleCancel: function
- afterCancel: function | 取消后

### 搜索

- handleSearch

### 刷新

- handleRefresh

### 分页

```javascript
<el-pagination
  background
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="paginate.current"
  hide-on-single-page
  :page-sizes="paginate.sizes"
  :page-size="paginate.limit"
  :layout="paginate.layout"
  :total="paginate.total"/>
```
