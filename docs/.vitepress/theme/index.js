import './tailwind.css'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Pro from './pro.vue'
import Star from './star.vue'
import NotFound from './notfound.vue'
import { onContentUpdated } from 'vitepress'
import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(Pro),
      'doc-top': () => h(Star),
      'not-found': () => h(NotFound),
      'doc-top': onContentUpdated(() => {
        var strFullPath = window.document.location.href
        var strPath = window.document.location.pathname
        var pos = strFullPath.indexOf(strPath)
        var prePath = strFullPath.substring(0, pos)
        var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1)
        console.log(prePath, postPath)
      })
    })
  },
  onContentUpdated: onContentUpdated
}
