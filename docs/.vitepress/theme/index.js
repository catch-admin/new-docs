import './tailwind.css'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Pro from './pro.vue'
import Star from './star.vue'
import NotFound from './notfound.vue'
import { onContentUpdated } from 'vitepress'
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(Pro),
      'doc-top': () => h(Star),
      'not-found': () => h(NotFound)
    })
  }
}
