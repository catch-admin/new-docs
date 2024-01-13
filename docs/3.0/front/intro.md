# 简介

前端首先由 `Vue3` 构建，所以要想写前端第一步要先看[vue3 文档](https://cn.vuejs.org/)。第二还需要 [typescript](https://www.tslang.cn/docs/home.html) 的加持，这两个是项目的根基，所以一定要好好看看，其他用到的主要组件

- ElementPlus [官网地址](https://element-plus.org/)
- tailwindcss [官网地址](https://tailwindcss.com/)
- Pinia [官网地址](https://pinia.vuejs.org/)
- icon [hero icon](https://heroicons.com/)

## vite 配置

这里就直接用项目的配置一一说明了，不拆开来看了

```js title="vite.config.js"
// rootPath 项目根目录
const rootPath = resolve(__dirname)

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      vueJsx(),
      createHtmlPlugin({
        minify: true,
        // 调整入口文件，入口文件放到了 public 下
        template: 'public/admin.html'
      }),
      // 路径别名
      alias({
        entries: [
          {
            find: '/admin',
            replacement: resolve(rootPath, 'resources/admin')
          },
          {
            find: '@/module',
            replacement: resolve(rootPath, 'modules')
          }
        ]
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core']
        // resolvers: [ ElementPlusResolver({importStyle: 'sass'}) ]
      }),
      Components({
        dirs: ['resources/admin/components/', 'resources/admin/layout/'],

        extensions: ['vue'],

        deep: true,

        dts: true,

        include: [/\.vue$/, /\.vue\?vue/],

        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
        // resolvers: [ ElementPlusResolver({ importStyle: 'sass'}) ]
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true
      })
    ],
    publicDir: false,
    // 接口地址
    define: {
      BASE_URL: env.BASE_URL
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@/assets/styles/element.scss" as *;`,
      }
    },
    // 这里是 dev server
    server: {
      host: '127.0.0.1',
      port: 8000,
      open: true, // 自动打开浏览器
      cors: true, // 允许跨域
      strictPort: false, // 端口占用直接退出
      hmr: true,
      fs: {
        allow: ['./']
      }
    },
    // 打包
    build: {
      chunkSizeWarningLimit: 2000,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
          pure_funcs: ['console.log', 'console.info'],
          drop_debugger: true
        }
      },
      // 打包输出到 public/admin 目录
      outDir: 'public/admin',
      assetsDir: 'assets',
      rollupOptions: {
        input: './public/admin.html',
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',

          entryFileNames: 'assets/js/[name]-[hash].js',

          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
})
```

因为和 `Laravel` 共用一个 `.env` 文件，所以 `.env` 有配置

```js
// 注 这个配置在后台安装的时候已经默认配置了
VITE_BASE_URL=${APP_URL}/api/
```

:::info
vite 的环境变量都需要在前面加上 `VITE` 前缀，在 **vite.config.js** 使用的时候直接访问 `env.BASE_URL`即可
:::

但是如果打包的话，还需要添加 `.env.production` 配置文件，里面配置

```js
// api url 接口地址
VITE_BASE_URL = API_URL
```
