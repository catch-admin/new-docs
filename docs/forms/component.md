# 基类组件

基类组件是所有组件的基础，组件内一些方法，适合所有子类组件使用

## 属性

### props

组件内的 props，结构如下

```php
/**
 * @var array{
 *     label:string,
 *     name:string,
 *     component:string,
 *     required:bool,
 *     initialValue:mixed,
 *     help:string,
 *     children?:Component|array<Component>,
 *     hidden:string|bool,
 *     hiddenLabel:bool,
 *     rules: array,
 *     class:string,
 *     style:mixed,
 *     change:array
 *   } $props
 */
```

### component

`component` 属性是每个组件都需要使用的，主要是使用标记使用哪个组件

## 初始化

子组件继承 Component 之后, 初始化必须传入 `name` 值, `label` 是可选项

```php
class Son extends Component {}


$son = new Son('name'， label?)
```

## initial

如果需要在初始化之后要提前做些什么，可以自己实现 `initial` 方法, 例如

```php
class Son extends Component
{

    public function initial()
    {

        echo "do something";
    }
}
```

## 其他方法

- `getName()` 获取组件名称
- `getLabel()` 获取组件 label 值
- `getComponent()` 获取组件名称
- `default(mixed $value)` 设置默认值
- `hidden($hidden)` 条件隐藏
- `labelHidden()` 隐藏 label
- `rules(array $rules)` 验证规则
- `class(string $class) `tailwindcss class 样式
- `style(string $style)` style 行内样式
- `prop($key, $value)` 设置组件的 props
- `when($condition, \Closure $callback)` when 条件
- `props(array $props)` 添加 props
- `help(string $help)` 提示
