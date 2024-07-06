# 项目安装

## 环境要求

- PHP >= 8.2+
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

:::tip
如果你是第一次使用或者需要一个完整的集成环境，CatchAdmin 官方也提供了一个 Laravel 入门教程，目前正在完善中。
可以尝试使用该文档 [Laragon 集成环境安装](https://laravel-study.catchadmin.com/hello-laravel.html#%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87)
:::

### 下载项目

接下来，您需要下载 CatchAdmin 项目。您可以前往该项目在 [CatchAdmin](https://github.com/JaguarJack/catch-admin) 上的页面进行下载，也可以使用 `git` clone 命令将代码克隆到本地，这样就能及时获取代码更新。

```sh
git clone https://github.com/JaguarJack/catch-admin.git
```

当然你也可以使用 [Gitee](https://gitee.com/jaguarjack/catchAdmin), 有可能会同步不及时。

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

:::info
如果安装失败，可能是 composer 源的问题，可以使用下面的命令切换到腾讯源

composer config repo.packagist composer https://repo.huaweicloud.com/repository/php/
:::

这个命令会自动下载并安装`CatchAdmin`项目所需要的 PHP 包。
除了 PHP 包之外，该项目还需要一些前端包。您可以使用以下命令安装这些包：

```shell
// 安装完 nodejs 之后，再安装 yarn
npm install --global yarn

// 安装完成之后，使用
yarn install
```

:::tip
如果遇到网络问题，或者安装过慢的情况，需要加上前端镜像，使用这个命令即可 `yarn config set registry https://registry.npmmirror.com`
:::

这样就可以安装所有需要的依赖包了。依赖安装完成之后，还需要安装项目的基本信息，如下

```shell
// 安装后台, 按照提示输入对应信息即可
php artisan catch:install

// 启动后台
php artisan serve

// 启动前端项目
yarn dev
```

:::warning
注意不能直接访问 PHP 项目，导致 Exception，前后端分离，需要通过 API 接口形式访问，所以你需要安装 VUE 项目后台，看到数据的展示
:::

:::tip
如果你是第一次使用 Vue，建议先去看看 [Vue](https://cn.vuejs.org/) 文档，了解一下

vue 后台使用了是 `element Plus` [文档地址](https://element-plus.org)
:::
