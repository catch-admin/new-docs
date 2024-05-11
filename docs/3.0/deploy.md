# 部署

## 前端项目

打包前请先配置正是环境 API 地址。在前端项目的根目录下的`.env.production`文件配置

```
# base api
// 例如 https://api.catchadmin.com/api/

VITE_BASE_URL = '正式环境的 API 地址'
```

配置完成之后呢，是用下面的命令进行打包

```
yarn run build
```

### 打包出现报错

如果打包出现 ts 过多的类型错误，而你对类型又不太敏感的话，对应用没有影响。一个快速的解决办法就是修改 `package.json 文件` build 命令

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build", // [!code --]
    "build": "vite build", // [!code ++]
    "preview": "vite preview"
  }
}
```

在打包完成之后呢，会在前端项目的根目录生成一个 `dist` 目录，`dist` 目录就是打包后的前端项目，是一个纯 html Js 项目，直接上传到服务器即可。
:::tip
前端项目配置最好开启 `Gzip`,可以加速前端项目访问速度。
:::

## 后端

后端使用的 `PHP`，你只需要将 PHP 项目上传至服务器即可。对于 `vendor` 文件夹，个人建议是不要直接上传。你可以在服务器安装依赖。出现无法安装的网络问题，可以看
[使用镜像](./faq.md#使用腾讯云镜像)
:::warning
如果使用了 catchadmin 初始化项目目录结构，一定要排除 `web` 目录，因为它是前端项目，不需要和后端一并上传，前端只需要 dist 打包后的目录即可
:::

### 上线注意点

- `.env` 环境文件是否配置好？
  :::tip
  APP_URL 一定要和上面前端打包的配置 VITE_BASE_URL 相同
  还有数据库信息
  :::
- 数据库表是否同步?
- 数据表的数据是否同步，主要是**权限菜单**表`permissions`里是否同步
- 模块是否开启? 模块如果没有开启，整个项目都会无法正常运行 (`这个步骤只针对 Laravel 主项目`)
  :::tip
  一定要检查线上项目`storage/app/modules.json` 是否存在。如果不存在，要将本地项目`storage/app/modules.json`上传到服务器
  :::
- 模块如果正常开启的状态下，路由还是无法正常工作 (`这个步骤只针对 Laravel 主项目`)
  :::tip
  - 首先是用 php artian route:clear
  - 然后查看路由 php artisan route:list
  - 最后缓存路由 php artisan route:cache
    :::

## 部署

:::warning
如果你使用的是宝塔相关的，一定不要完全复制下面的配置。因为宝塔有很多预配置项，例如 https ssl 配置是不需要你自己手动配置
:::

### 分开部署（双域名）

我们这里将两项目分开部署，分为前端项目和后端项目。根目录定义为 `/www`目录， 前端就是用 `/www/admin` 目录，后端使用 `/www/api` 目录
:::tip
这里的目录只做展示说明使用，实际部署请按照自身需求设置
:::

- `/www/admin` 上传 `dist` 目录内容到 admin 目录中
- `/www/api` 上传后端项目到 api 目录中

::: code-group

```php [前端项目]
server
{
    listen 80;
    server_name admin.catchadmin.com;
    return 301 https://admin.catchadmin.com$request_uri;
}

server
{
    listen  443  ssl http2;
    server_name admin.catchadmin.com;
    index.html index.php index.htm default.php default.htm default.html;


    ssl_certificate       # pem文件的路径
    ssl_certificate_key   # key文件的路径

    # ssl验证相关配置
    ssl_session_timeout  5m;    #缓存有效期
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    root /www/admin;
    location / {
    	try_files $uri $uri/ /index.html =404;
    }
}

```

```php [后端项目]
server
{
    listen 80;
    server_name api.catchadmin.com;
    return 301 https://api.catchadmin.com$request_uri;
}


server
{
    listen  443  ssl http2;
    server_name api.catchadmin.com;
    index index.html index.php index.htm default.php default.htm default.html;
    root /www/api/public;

    ssl_certificate     /etc/nginx/acme/catchadmin.com/catchadmin.com.cer;  # pem文件的路径
    ssl_certificate_key  /etc/nginx/acme/catchadmin.com/catchadmin.com.key; # key文件的路径
    ssl_session_timeout  5m;    #缓存有效期
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location / {
       if (!-e $request_filename) {
        rewrite  ^(.*)$  /index.php?s=/$1  last;
        break;
      }
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
    ## nginx log 自己配置
    access_log;
    error_log;
}

```

:::

### 合并部署（单域名）

:::warning
如果使用宝塔部署，下面的 location 配置静态目录的可能会无法工作，还是由于宝塔的预配置，目前还不知道是哪里的问题！有兴趣的可以研究下
:::
合并部署的意思是使用一个域名部署, 假设还是用上面 `api` 目录，`api` 目录还是上传的 PHP 的项目，前端项目上传到 `public/admin` 下

```php

server
{
    listen 80;
    server_name api.catchadmin.com;
    return 301 https://api.catchadmin.com$request_uri;
}


server
{
    listen  443  ssl http2;
    server_name api.catchadmin.com;
    index index.html index.php index.htm default.php default.htm default.html;
    root /www/api/public;

    ssl_certificate     # pem文件的路径
    ssl_certificate_key  # key文件的路径
    ssl_session_timeout  5m;    #缓存有效期
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    # 因为接口都是以 api.catchadmin.com/api 开头，所以可以很好的使用 location
    # 如果访问 api.catchadmin.com/api 目录 则用 php 解释下
    location /api {
       if (!-e $request_filename) {
        rewrite  ^(.*)$  /index.php?s=/$1  last;
        break;
      }
    }

    # 如果访问根目录 api.catchadmin.com/， 则直接访问前端项目
    location / {
      root /www/api/public/admin;
      try_files $uri $uri/ /index.html;
    }

    # 上传的静态目录 location
    location /uploads/ {
      alias /www/api/public/storage/uploads/;
      autoindex on;
    }


     #PHP 支持
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

### Octane 部署配置

针对 Laravel 项目

```php
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server
{
    listen 80;
    server_name api.catchadmin.com;
    return 301 https://api.catchadmin.com$request_uri;
}


server
{
   listen  443  ssl http2;
    server_name api.catchadmin.com;
    index index.html index.php index.htm default.php default.htm default.html;
    root /www/api/public;

    ssl_certificate     # pem文件的路径
    ssl_certificate_key  # key文件的路径
    ssl_session_timeout  5m;    #缓存有效期
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    # 因为接口都是以 api.catchadmin.com/api 开头，所以可以很好的使用 location
    # 如果访问 api.catchadmin.com/api 目录 则用 php 解释下
    location /api {
       if (!-e $request_filename) {
        rewrite  ^(.*)$  /index.php?s=/$1  last;
        break;
      }
    }

    # 如果访问根目录 api.catchadmin.com/， 则直接访问前端项目
    location / {
      root /www/api/public/admin;
      try_files $uri $uri/ /index.html;
    }

    # 上传的静态目录 location
    location /uploads/ {
      alias /www/api/public/storage/uploads/;
      autoindex on;
    }

    location @octane {
        set $suffix "";

        if ($uri = /index.php) {
            set $suffix ?$query_string;
        }

        proxy_http_version 1.1;
        proxy_set_header Host $http_host;
        proxy_set_header Scheme $scheme;
        proxy_set_header SERVER_PORT $server_port;
        proxy_set_header REMOTE_ADDR $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        proxy_pass http://172.18.0.2:9800$suffix;
    }
}

```
