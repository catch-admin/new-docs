<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'

const envId = 'https://comment.catchadmin.com'
const twikooJs = ref(null)
const router = useRouter()

function initTwikoo() {
  try {
    twikoo.init({
      envId,
      onCommentLoaded: initLightGallery
    })
  } catch (e) {}
}

function initLightGallery() {
  var commentContents = [...document.getElementsByClassName('vp-doc'), ...document.getElementsByClassName('tk-content')]
  for (var i = 0; i < commentContents.length; i++) {
    var commentItem = commentContents[i]
    var imgEls = commentItem.getElementsByTagName('img')
    if (imgEls.length > 0) {
      for (var j = 0; j < imgEls.length; j++) {
        var imgEl = imgEls[j]
        if (imgEl.parentElement.tagName === 'A') continue
        var aEl = document.createElement('a')
        aEl.setAttribute('class', 'tk-lg-link')
        aEl.setAttribute('href', imgEl.getAttribute('src'))
        aEl.setAttribute('data-src', imgEl.getAttribute('src'))
        aEl.appendChild(imgEl.cloneNode(false))
        imgEl.parentNode.insertBefore(aEl, imgEl.nextSibling)
        imgEl.remove()
      }
      lightGallery(commentItem, {
        selector: '.tk-lg-link',
        share: false
      })
    }
  }
}

function initJs() {
  if (twikooJs.value) {
    twikooJs.value.onload = initTwikoo
    router.onAfterRouteChanged = onRoute
  }
}

function onRoute(to) {
  if (to) setTimeout(initTwikoo, 1000)
}

onMounted(() => {
  initTwikoo()
  initJs()
})
</script>

<template>
  <div class="mt-5 comment-container vp-raw">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/css/lightgallery.css" />
    <component :is="'script'" src="https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/lightgallery.min.js"></component>
    <div id="twikoo"></div>
    <component :is="'script'" src="https://cdn.jsdelivr.net/npm/twikoo@1.6.31/dist/twikoo.all.min.js" ref="twikooJs"></component>
  </div>
</template>
<style>
.tk-row-actions-start {
  .tk-submit-action-icon:nth-of-type(2) {
    display: none;
  }
}
.tk-footer {
  display: none;
}
</style>
