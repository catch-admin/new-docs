# ThinkPHP 版本安装

## 环境要求

- PHP >= 8.0+
- Nginx
- Mysql >= 5.7

## 安装

### 准备

在安装这个软件之前，您需要准备一些必要的工具，包括：

- [git 代码管理](https://git-scm.com/downloads)
- [composer PHP 包管理器](https://getcomposer.org/download/)
- [nodejs >= 18.8.0](https://nodejs.org/zh-cn/)
- [yarn 前端包管理器](https://yarn.bootcss.com/)
- [vite](https://cn.vitejs.dev/)

### 下载项目

接下来，您需要下载 CatchAdmin 项目。您可以前往该项目的托管仓库 [CatchAdmin](https://gitee.com/catchamin/catchadmin-tp) 上的页面进行下载，也可以使用 `git` clone 命令将代码克隆到本地，这样就能及时获取代码更新。

```sh
git clone https://gitee.com/catchamin/catchadmin-tp.git
```

请注意，该项目不提供 Web 安装方式，因此您需要使用命令行方式进行安装。在安装之前，请确保已经安装了 `composer` 包管理器。如果您使用的是 `Mac OS` 或者 `Linux`，可以在终端输入以下命令安装 `composer`

```shell
// mac os
brew install composer

// linux
sudo apt-get install composer
```

如果您使用的是 `Windows` 系统，可以从 [composer](https://docs.phpcomposer.com/) 的官方网站下载 exe 安装文件进行安装。一旦您已经安装了 `composer`，接下来您可以进入 `CatchAdmin` 项目所在的目录，并运行以下命令进行安装：

```shell
composer install
```

这个命令会自动下载并安装`CatchAdmin`项目所需要的 PHP 包。
除了 PHP 包之外，该项目还需要一些前端包。您可以使用以下命令安装这些包：

```shell
// 安装完 nodejs 之后，再安装 yarn
npm install --global yarn
```

:::tip
一定要安装好 yarn 和 Git 工具
:::

### 命令安装

:::tip
安装的时候输入
:::

```shell
// 安装后台, 按照提示输入对应信息即可
php think catch:install
```

命令会自动安装前端项目，并且自动下载前端依赖。所以在这个命令执行完之后，可以直接使用下面的命令启动前端项目。在根目录下

```sh
cd web && yarn dev
```

:::warning
注意不能直接访问 PHP 项目，导致 Exception，前后端分离，需要通过 API 接口形式访问，所以你需要安装 VUE 项目后台，看到数据的展示
:::

:::tip
如果你是第一次使用 Vue，建议先去看看 [Vue](https://cn.vuejs.org/) 文档，了解一下

vue 后台使用了是 `element Plus` [文档地址](https://element-plus.org)
:::

### 打包前端项目

打包前请先配置正是环境 API 地址。在项目的根目录下的`.env.production`文件配置

```
# base api
VITE_BASE_URL = '正式环境的 API 地址'
```

然后进行打包

```
yarn run build
```

:::tip
前端项目配置最好开启 `Gzip`,可以加速前端项目访问速度。
:::
