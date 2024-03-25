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
- [nodejs](https://nodejs.org/zh-cn/)
- [yarn 前端包管理器](https://yarn.bootcss.com/)
- [vite](https://cn.vitejs.dev/)

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

### 上线如何模块未找到，无法在后台展示，请确认以下一个方面

- 数据表是否同步?
- 数据表的数据是否同步，主要是权限表`permissions`里是否同步
- 模块是否开启? 可以直接查看 `storage/app/modules.json` 是否存在，如果不存在，请上传

#### 推荐配置

```sh
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip 配置
    gzip  on;
    gzip_min_length 1k;
    gzip_comp_level 4;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript ;
    gzip_static on;
    gzip_vary on;
    gzip_buffers 8 16k;


    include /etc/nginx/conf.d/*.conf;
}
```

### 项目部署配置

```js
server
{
    listen  443  ssl http2;
    // 配置自己域名
    server_name server.com;
    index admin.html index.html index.php index.htm default.php default.htm default.html;
    root root_path;

    ## SSL 证书
    ssl_certificate     pem_path;  # pem文件的路径
    ssl_certificate_key  key_path; # key文件的路径
    ssl_session_timeout  5m;    #缓存有效期
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location /api {
       if (!-e $request_filename) {
        rewrite  ^(.*)$  /index.php?s=/$1  last;
        break;
      }
    }

   location / {
     root admin_root_path; // 配置前端根目录地址
     try_files $uri $uri/ /admin.html;
   }

   # PHP 支持
    location ~ \.php$ {
        try_files $uri /index.php =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```
