# 项目介绍

Catchcadmin V3 是一个开源的后台管理系统，它提供了一组完整的解决方案，可以帮助开发者快速构建各种类型的管理后台，例如 CMS、ERP、CRM、OA 等。Catchcadmin V3 版本的改动非常大，它采用了 Laravel 10.X、Vue3 和 ElementPlus 等最新的技术，以及更加优秀的代码组织方式，以更好地满足开发者的需求。

- typescript
- vue3
- tailwindcss（css 组件库）
- Laravel （之前使用 tp6 的话，用起来应该没有压力）

### 目录结构

`Catchadmin` V3 版本服务端和前端放在一个项目中，这样会更方便开发。

:::warning
注意这是 master 分支代码木结构

目前 catchadmin 已经使用 server 分支开发，也作为默认分支。server 分支是完全分离的项目
:::

```
├─app
├─bootstrap
├─config（配置目录）
├─database（migration和seed存放目录）
├─lang（多语言目录）
├─public（运行目录
├─modules（模块目录）
├─resources
│  ├─admin (前端目录)
│  │  ├─assets
|  |  ├─compoents (组件)
|  |  ├─enum （枚举）
|  |  ├─layout
|  |  ├─router
|  |  ├─store （pinia目录）
|  |  ├─styles （样式目录）
|  |  ├─support (助手方法)
|  |  ├─types （类型目录）
|  |  ├─views
|  |  | App.vue
|  |  | app.ts
|  |  | env.d.ts
│  │
│  └─views
├─routes
├─storage
├─tests
│  .env-example（env配置示例）
│  .gitattributes
│  .gitignore
│  .travis.yml
│  composer.json
│  .php-cs-fixer.dist.php
|  package.json
│  phpunit.xml
│  postcss.config.js
│  tailwind.config.js
│  tsconfig.json
│  tsconfig.node.json
│  vite.config.js (Vue项目配置)
└─ artisan（命令行入口文件）
```

这里可以先熟悉目录结构，在后续将介绍系统内具体的一些方法和配置。

和之前 2.x 相比，最大的变化就是将核心目录已经独立出去，使用单独的 `composer` 加载，如果遇到任何问题或者 bug 可以到[catchadmin/core](https://github.com/catch-admin/core)仓库提交 issue！

## 视频介绍

[catchadmin 新版本安装](https://www.bilibili.com/video/BV1eY411v71J/)
