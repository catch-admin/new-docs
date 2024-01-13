# 入口

前端项目放置在 `resource/admin` 目录，关于 admin 各个目录的作用就不做多介绍了，可以到[项目介绍](/docs/3.0/catchadmin/project_intro)中查看。`app.ts` 即项目的入口

```javascript title="resource/admin/app.ts"
import '/admin/styles/index.scss'

import CatchAdmin from './support/catchAdmin'

// 首先引入的是 catchadmin 对象
const admin = new CatchAdmin()

// 启动项目
admin.bootstrap()
```

进入到 `CatchAdmin` 对象中，可以看到项目引入了哪些全局组件

```javascript title="resource/admin/support/catchAdmin.ts"
import { createApp } from 'vue'
import type { App as app } from 'vue'
import App from '/admin/App.vue'
import router, { bootstrapRouter } from '/admin/router'
import ElementPlus from 'element-plus'
import zh from 'element-plus/es/locale/lang/zh-cn'
import { bootstrapStore } from '/admin/stores'
import Cache from './cache'
import { bootstrapI18n } from '/admin/i18n'
import guard from '/admin/router/guard'

/**
 * catchadmin
 */
export default class CatchAdmin {
  protected app: app

  protected element: string

  /**
   * construct
   *
   * @param ele
   */
  constructor(ele: string = '#app') {
    this.app = createApp(App)
    this.element = ele
  }

  /**
   * admin boot
   */
  bootstrap(): void {
    this.useElementPlus().usePinia().useI18n().useRouter().mount()
  }

  /**
   * 挂载节点
   *
   * @returns
   */
  protected mount(): void {
    this.app.mount(this.element)
  }

  /**
   * 加载路由
   *
   * @returns
   */
  protected useRouter(): CatchAdmin {

    // 拦截路由
    guard(router)

    bootstrapRouter(this.app)

    return this
  }

  /**
   * ui
   *
   * @returns
   */
  protected useElementPlus(): CatchAdmin {
    this.app.use(ElementPlus, {
      locale: Cache.get('language') === 'zh' && zh,
    })
    return this
  }

  /**
   * use pinia
   */
  protected usePinia(): CatchAdmin {
    bootstrapStore(this.app)

    return this
  }

  /**
   * use i18n
   */
  protected useI18n(): CatchAdmin {
    bootstrapI18n(this.app)

    return this
  }
}
```

主要使用了以下几个组件

- ElementPlus
- Vue Router
- Pinia
- I18n

其实总结就是一句话，向 `Vue` 注入组件，最后挂载到 `#app` **dom** 上

```javascript
this.useElementPlus().usePinia().useI18n().useRouter().mount()
```
