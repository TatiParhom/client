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

useHead({
  title: config.title,
  meta: [
    { name: 'description', content: config.desc },
    { name: 'keywords', content: config.keywords },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: base + config.favicon.url },

  ],
  bodyAttrs: {
    class: 'container mx-auto bg-white dark:bg-gray-900'
  },
})
</script>