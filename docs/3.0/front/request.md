# 请求

前端请求默认使用的是 `axios`，但是为了方便，后台提供了 `Http` 对象快速发起请求

```typescript title="resource/admin/support/http.ts"
import Http from '/admin/support/http'

// GET 请求
http.get(path: string, params: object = {})

// POST 请求
http.post(path: string, data: object = {})

// PUT 请求
http.put(path: string, data: object = {})

// DELETE 请求
http.delete(path: string)
```

### 设置超时

```typescript
Http.timeout(5).get()
```

### 设置 BASEURL

```typescript
Http.setBaseUrl('https://api.com').get()
```

### 设置 header

```typescript
Http.setHeader(key:string, value:string).get()
```

## 表单请求

表单请求则使用了 `vue3` 的新特性 `hooks`，也称为[组合式函数](https://cn.vuejs.org/guide/reusability/composables.html)。查看 `resource/admin/composables/curd`，总共提供六个操作。

### GetList

`getList` 请求列表数据

```typescript
const { data, query, search, reset, loading } = useGetList(api)

// 接口返回的数据必须 computed 才具备响应
const tableData = computed(() => data.value?.data)
```

- data 接口返回的数据
- query:{} 查询数据
- search() 搜索方法
- reset() 重制方法
- loading:boolean 列表请求 loading

### Create

**create** 其实包含两个操作，创建和更新，当 **props.primary** 是 **null** 的时候，就是创建数据不为空时，则是更新数据

```typescript
const { formData, form, loading, submitForm, close } = useCreate(props.api, props.primary)

// 更新的 ID
if (props.primary) {
  useShow(props.api, props.primary, formData)
}

// 关闭弹窗
const emit = defineEmits(['close'])
close(() => emit('close'))
```

- formData 提交的 Form 数据
- form 表单 ref
- loading 提交数据表单 loading
- submitForm(form) 点击提交表单的方法, 参数就是 `form`
- close 关闭弹窗

### Destroy

```typescript
const { destroy, deleted } = useDestroy()
onMounted(() => {
  // 观察数据是否删除，删除之后刷新列表
  deleted(reset)
})
```

- destory(path: string, id: string | number) 删除数据的方法，一般都是用于列表删除数据
- deleted(callback: Function) 观测数据是否删除，参数删除后的回调操作

### Enabled

`enabled` 作用就是请求状态切换

```typescript
const { enabled, success, loading, afterEnabled } = useEnabled()
```

- enabled(path: string, id: string | number, data: object = {}) 请求切换
- success(callback: Function) 参数成功后的回调函数
- loading 请求时 loading
- afterEnabled 请求完成之后的操作, 只有设置成方法才会被调用

```typescript
afterEnabled.value = () => {}
```

### Open

打开 `Dialog` 弹窗，一般用于通过`Dialog` **创建/更新**数据的时候

```typescript
const { open, close, title, visible, id } = useOpen()
```

- open(primary: any = null) 显示`Dialog`
- close(callback: Function) 关闭 `Dialog` callback 关闭后的回调方法
- title: string Dialog 标题
- visible: boolean Dialog 状态
- id 数据的 ID

### Show

show 方法就是拉取更新时的数据，填充表单

```typescript
if (props.primary) {
  useShow(props.api, props.primary, formData)
}
```
