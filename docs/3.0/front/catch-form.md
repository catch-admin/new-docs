# 🔮 动态表单

经过一段时间调研和开发，最终还是推出了全新动态表单的功能，不仅支持 JSON 配置，还支持的动态解析和动态调用，相较于前一个版本，提高了非常多
:::tip
示例都是基于整个后台框架的，不要单独拎出去使用
:::

:::tip
如果你需要服务端组件，可以支持购买[]
:::

## 基本使用

先来看一个简单的表单示例，表单包含一个`input` 框架

```vue
<template>
  <div>
    <CatchForm :schema="form" @onSubmit="submit" />
  </div>
</template>
<script lang="ts" setup>
const form = {
  items: [
    {
      name: 'name',
      props: {
        clearable: true
      },
      label: '姓名',
      component: 'input',
      class: 'mt-4',
      required: true
    }
  ]
}

const submit = (formData) => {
  console.log(formData)
}
</script>
```

使用 `CatchForm` 组件，这里非常简单，包含一个 props 和一个提交方法

- `schema` 是 form 的数据结构，就是存放 form 组件的对象
- `onSubmit` 是 form 提交方法

再来看下 schema 的结构

```js
type schema = {
  labelWidth: number // label 宽度
  labelAlign: string // label 位置
  size: string // 表单大小
  footer: Object // 表单底部
  class?: string // 表单 class 支持 tailwindcss
  disabled?: boolean // 是否禁用
  labelBold?: boolean // label 文字是否粗体
  items: formItemsType // 表单字段
}

```

所以回到刚才的 `form` 数据，看看结构，里面只包含 `items`，也就是表单的字段集合。再来看看表单字段的结构

```typescript
 {
      name: 'name', // 字段 name
      props: { // 组件对应的 props，可以参考 ElementPlus 对应组件的 props
        clearable: true
      },
      label: '姓名', // label 值
      component: 'input', // 组件
      class: 'mt-4', // 组件 class，支持 tailwindcss
      required: true // 是否必选
  }
```

再来看看字段的定义, 包含全部

```js
interface formItemType {
  label?: string // label 值
  name: string // 字段 name
  component: string // 字段组件
  required?: boolean // 是否必填
  props?: object // // 组件对应的 props，可以参考 ElementPlus 对应组件的 props
  initialValue?: any // 默认值
  children?: formItemType[] // 支持子组件，例如 grid 组件
  hidden?: boolean | string // 是否隐藏
  hideLabel?: boolean // 是否隐藏 label
  rules?: any[] // 表单验证规则
  class?: string // 组件 class，支持 tailwindcss
  style?: any // 行内样式
  change?: changeItemType[] // change 方法
}
```

## 表单组件

:::warning
所有组件的 `name` 都是必须的

动态组件内的 props 属性，都是和 ElementPlus 组件内的 `props`, 由于篇幅限制这里就不再展示，请到官方文档查看
:::

### 辅助组件

#### Alert 组件

[Alert 组件 props](https://element-plus.org/zh-CN/component/alert.html#alert-api)

```typescript
 {
      name: 'alert',
      props: {
        title: "Hello Alert"
      },
      component: 'alert', // 组件
  }
```

#### button 组件

[button 组件 props](https://element-plus.org/zh-CN/component/button.html#button-api)

```typescript
 {
    name: 'button',
    props: {
        name: '提交',
        clickEvent: 'submitForm' // 点击提交事件
    },
    component: 'button', // 组件
  }
```

#### 分割线组件

[分割线组件 props](https://element-plus.org/zh-CN/component/divider.html#api)

```typescript
 {
     name: 'divider',
     props: {
        title: '分割线组件'
     },
     component: 'divider', // 组件
  }
```

### Layout 组件

#### Grid 组件

Grid 两栏

```typescript
{
    component: 'grid',
    children: [
        {
            label: '名称',
            component: 'input',
            props: {
                placeholder: '请输入名称'
            },
            name: 'name'
        },
        {
            label: '名称1',
            component: 'input',
            props: {
                placeholder: '请输入名称1'
            },
            name: 'name1'
        }
    ],
    props: {
        columns: 2, // 栏目数量
        'column-gap': 20, // 栏目间距
        'row-gap': 20 // 行间距
    },
    name: 'grid'
}
```

#### Card 组件

`Card` 和 `Grid` 可以通过 `children`属性 组合使用

```js
 {
    component: 'card',
    children: [
        {
            label: '名称',
            component: 'input',
            props: {
                placeholder: '请输入名称'
            },
            name: 'name'
        }
    ],
    props: {
        header: '卡片'
    },
    name: 'card'
}
```

#### Inline 行内组件

```js
{
    component: 'inline',
    children: [
        {
            label: '名称',
            component: 'input',
            props: {
                placeholder: '请输入名称'
            },
            name: 'name'
        },
        {
            label: '名称1',
            component: 'input',
            props: {
                placeholder: '请输入名称'
            },
            name: 'name1'
        }
    ],
    props: {
        align: 'left',
        gap: 20
    },
    name: 'inline'
}
```

### 表单字段组件

#### Switch 组件

[switch 组件 props](https://element-plus.org/zh-CN/component/switch.html#api)

```js
{
    label: '开关',
    component: 'switch',
    props: {
        'inline-prompt': false
    },
    name: 'status'
}
```

#### Input 组件

[Input 组件 props](https://element-plus.org/zh-CN/component/input.html#api)

```js
{
    label: '名称',
    component: 'input',
    props: {
        placeholder: '请输入名称'
    },
    name: 'name'
}
```

#### Password 组件

[Input 组件 props](https://element-plus.org/zh-CN/component/input.html#api)

```js
{
    label: '密码',
    component: 'password',
    props: {
        placeholder: '请输入密码'
    },
    name: 'password'
}
```

#### Select 组件

[Select 组件 props](https://element-plus.org/zh-CN/component/select.html#select-api)

```js
 {
    label: '下拉选择框',
    component: 'select',
    props: {
        options: [
            {
                label: '选项1',
                value: 'value1'
            },
            {
                label: '选项2',
                value: 'value2'
            },
            {
                label: '选项3',
                value: 'value3'
            }
        ],
        placeholder: '请选择...',
        labelKey: 'label',
        valueKey: 'value'
    },
    name: 'select'
}
```

#### Cascader 组件

[Cascader 组件 props](https://element-plus.org/zh-CN/component/cascader.html#cascader-api)

```js
 {
    label: '级联选择器',
    component: 'cascader',
    props: {
        placeholder: '请选择...',
        labelKey: 'label',
        valueKey: 'value',
        options: [
            {
                label: '选项1',
                value: 'value1',
                children: [
                    {
                        label: '选项1-1',
                        value: 'value1-1'
                    },
                    {
                        label: '选项1-2',
                        value: 'value1-2'
                    },
                    {
                        label: '选项1-3',
                        value: 'value1-2'
                    }
                ]
            },
            {
                label: '选项2',
                value: 'value2',
                children: [
                    {
                        label: '选项2-1',
                        value: 'value2-1'
                    },
                    {
                        label: '选项2-2',
                        value: 'value2-2'
                    },
                    {
                        label: '选项2-3',
                        value: 'value2-2'
                    }
                ]
            },
            {
                label: '选项3',
                value: 'value3'
            }
        ]
    },
    name: 'cascader'
}
```

#### Checkbox 组件

[Checkbox 组件 props](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-api)

```js
 {
    label: '多选框组',
    component: 'checkbox',
    props: {
        placeholder: '请选择...',
        options: [
            {
                label: '选项1',
                value: 'value1'
            },
            {
                label: '选项2',
                value: 'value2'
            },
            {
                label: '选项3',
                value: 'value3'
            }
        ],
        labelKey: 'label',
        valueKey: 'value'
    },
    name: 'checkbox'
}
```

#### ColorPicker 组件

[ColorPicker 组件 props](https://element-plus.org/zh-CN/component/color-picker.html#api)

```js
 {
    label: '颜色选择器',
    component: 'color_picker',
    name: 'colorPicker'
 }
```

#### 日期组件

[日期组件 props](https://element-plus.org/zh-CN/component/date-picker.html#api)

```js
 {
    label: '日期选择器',
    component: 'date_picker',
    props: {
        type: 'datetime',
        placeholder: '请选择日期',
        clearable: false
    },
    name: 'DatePicker'
 }
```

#### 图标选择器

#### 数字组件

[数字组件 props](https://element-plus.org/zh-CN/component/input-number.html#api)

```js
 {
    label: '数字组件',
    initialValue: 1,
    component: 'input_number',
    name: 'input_number'
 }
```

#### Radio 组件

[Radio 组件 props](https://element-plus.org/zh-CN/component/radio.html#radio-api)

```js
 {
    label: '单选框组',
    component: 'radio',
    props: {
        options: [
            {
                label: '选项1',
                value: 'value1'
            },
            {
                label: '选项2',
                value: 'value2'
            },
            {
                label: '选项3',
                value: 'value3'
            }
        ],
        labelKey: 'label',
        valueKey: 'value',
        optionType: 'circle',
        direction: 'horizontal',
    },
    name: 'radio'
}
```

#### Rate 评分组件

[Rate 评分组件 props](https://element-plus.org/zh-CN/component/rate.html#api)

```js
{
    label: '评分',
    component: 'rate',
    name: 'rate'
}
```

#### 滑块组件

[滑块组件 props](https://element-plus.org/zh-CN/component/slider.html#api)

```js
{
    label: '滑块',
    component: 'slider',
    name: 'slider'
}
```

#### Transfer 组件

[Transfer 组件 props](https://element-plus.org/zh-CN/component/transfer.html#api)

```js
{
    label: '穿梭框',
    component: 'transfer',
    props: {
        options: [
            {
                label: '选项1',
                value: 'value1'
            },
            {
                label: '选项2',
                value: 'value2'
            },
            {
                label: '选项3',
                value: 'value3'
            }
        ],
        labelKey: 'label',
        valueKey: 'value'
    },
    name: 'transfer'
}
```

#### 上传组件

##### 单图上传

```js
import { getAuthToken, env } from '/admin/support/helper'
const form = {
  items: [
    {
      label: '单图上传',
      props: {
        action: env('VITE_BASE_URL') + 'upload/image',
        name: 'image',
        token: 'Bearer ' + getAuthToken()
      },
      component: 'upload_image',
      name: 'image'
    }
  ]
}
```

##### 多图上传

```js
import { getAuthToken, env } from '/admin/support/helper'
const form = {
  items: [
    {
      label: '多图上传',
      props: {
        action: env('VITE_BASE_URL') + 'upload/image',
        name: 'image',
        token: 'Bearer ' + getAuthToken()
      },
      component: 'upload_images',
      name: 'image'
    }
  ]
}
```

##### 单文件上传

```js
import { getAuthToken, env } from '/admin/support/helper'
const form = {
  items: [
    {
      label: '单文件上传',
      props: {
        action: env('VITE_BASE_URL') + 'upload/file',
        name: 'image',
        token: 'Bearer ' + getAuthToken()
      },
      component: 'upload_file',
      name: 'file'
    }
  ]
}
```

##### 多文件上传

```js
import { getAuthToken, env } from '/admin/support/helper'
const form = {
  items: [
    {
      label: '多文件上传',
      props: {
        action: env('VITE_BASE_URL') + 'upload/file',
        name: 'image',
        token: 'Bearer ' + getAuthToken()
      },
      component: 'upload_files',
      name: 'file'
    }
  ]
}
```

#### Tree 组件

[Tree 组件 props](https://element-plus.org/zh-CN/component/tree.html#%E5%B1%9E%E6%80%A7)

```js
{
    label: '树形结构',
    props: {
        'show-checkbox': true,
        options: [
            {
                label: '选项1',
                value: 'value1',
                children: [
                    {
                        label: '选项1-1',
                        value: 'value1-1'
                    },
                    {
                        label: '选项1-2',
                        value: 'value1-2'
                    },
                    {
                        label: '选项1-3',
                        value: 'value1-2'
                    }
                ]
            },
            {
                label: '选项2',
                value: 'value2',
                children: [
                    {
                        label: '选项2-1',
                        value: 'value2-1'
                    },
                    {
                        label: '选项2-2',
                        value: 'value2-2'
                    },
                    {
                        label: '选项2-3',
                        value: 'value2-2'
                    }
                ]
            },
            {
                label: '选项3',
                value: 'value3'
            }
        ],
    },
    component: 'tree',
    name: 'tree'
}
```

#### 自增表单

```js
{
    label: '动态配置',
    props: {
        children: [
            {
                name: 'name',
                label: '名称',
                component: 'input',
                props: {
                    clearable: true,
                    placeholder: '请输入名称'
                }
            },
            {
                name: 'name1',
                label: '名称1',
                component: 'input',
                props: {
                    clearable: true,
                    placeholder: '请输入名称1'
                }
            }
        ]
    },
    component: 'form_list',
    name: 'hello'
}
```
