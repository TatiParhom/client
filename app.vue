<template>
  <NuxtLoadingIndicator throttle="0" duration="5000" />
  <Navbar />
  <NuxtPage />
  <Footer />
  <Upp />
</template>

<script setup>
const base = 'https://6bc41f582d60.vps.myjino.ru'
const api = await $fetch(`${base}/api/config?populate=*`)
const config = api.data

import { initFlowbite } from "flowbite";

onMounted(() => {
    initFlowbite();
})

const isDarkMode = ref('')
const isDark = ref(false)

useHead({
  title: config.title,
  meta: [
    { name: 'description', content: config.desc },
    { name: 'keywords', content: config.keywords },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: base + config.favicon.url },

  ],
  // head: {
  //     script: [
  //       {
  //         src: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js',
  //         async: true,
  //         defer: true
  //       },
  //     ]
  //   },
htmlAttrs: {
  class: isDarkMode.value
},

  bodyAttrs: {
    class: 'container mx-auto bg-white dark:bg-gray-900'
  },
})
</script>