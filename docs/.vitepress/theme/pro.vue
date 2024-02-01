<template>
  <div
    class="mt-10 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 transition hover:bg-[length:400%_400%] hover:shadow-xl hover:[animation-duration:_4s]">
    <div class="rounded-[10px] bg-white p-[1px] sm:p-[1px]">
      <img src="./images/pro.jpg" class="rounded-[10px]" />
      <div class="block m-2 text-lg text-gray-500">CatchAdmin专业版🎉</div>

      <a href="#">
        <h3 class="mt-0.5 text-sm font-medium text-gray-900 pl-2 pr-2">CatchAdmin简约而不失实力。用心打造了一个实用的管理面板，追求简洁和功能的完美平衡</h3>
      </a>

      <div class="flex flex-wrap gap-1 pl-2 pr-2 mt-4 mb-4">
        <a href="https://license.catchadmin.com/">
          <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">立即购买🚀</span>
        </a>
        <a href="https://pro.catchadmin.com/">
          <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">查看演示👀</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const title = document.querySelector('.VPNavBarTitle .title')
title.href = 'https://catchadmin.com/'
/** 
import confetti from 'canvas-confetti'

confetti({
  particleCount: 100,
  spread: 70,
  origin: {
    x: '700px',
    y: '900px'
  }
})*/
</script>
