import './tailwind.css'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Pro from './pro.vue'
import NotFound from './notfound.vue'
import Comment from './comment.vue'
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(Pro),
      'not-found': () => h(NotFound),
      'doc-after': () => h(Comment)
    })
  }
}
