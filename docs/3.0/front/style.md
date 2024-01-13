# 样式

样式存在 `resource/admin/style` 目录下，结构如下

```
├─theme
| ├─dark.scss // 暗黑主题
| ├─index.scss
| ├─light.css // 默认主题
├─element.scss // Element 样式
├─index.scss // scss 入口
├─tailwind.css // tailwindcss
├─var.scss  // 自定义变量
```

样式上好像并没有什么可以说的了， style 目录的样式都是全局样式。
还有一点就是目前后台的样式是响应式的，基于 `tailwindcss` 做的，tailwindcss 还是很方便的。

:::info
其实用到全局样式的地方不是很多，一般还是在 vue 文件中使用 scope 来改样式
:::
