<template>
  <main>
    <h2 class="text-4xl font-extrabold my-4 dark:text-white">Блог</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
      <article v-for="post in displayedPosts" :key="post.id"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <NuxtLink class="block overflow-hidden" :to="'/post/' + post.documentId">
          <img class="rounded-t-lg" :src="base_url + post.img.url" :alt=post.img.alternativeText />
        </NuxtLink>
        <div class="p-5">
          <NuxtLink :to="'/post/' + post.documentId">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h5>
          </NuxtLink>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.desc }}</p>
          <NuxtLink :to="'/post/' + post.documentId"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Подробнее
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </NuxtLink>
        </div>
      </article>
    </div>
    <button v-if="!(displayedPosts.length === posts.length)" @click="loadMore" type="button"
      class="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Смотреть
      еще</button>
  </main>
</template>



    <!-- <article v-for="(post, index) in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <div class="link">
        <img :src="base_url + post.img.url" :alt=post.img.alternativeText>
        <NuxtLink :style="'background:'+post.categories[0].bg" :to="'/post/' + post.documentId">&raquo;</NuxtLink>
      </div>
      <p>{{ post.desc }}</p>
      <ul class="tag">
        <li v-for="(category, index) in post.categories" :key="category.id">
          <NuxtLink :style="'background:'+post.categories[index].bg" :to="'/category/' + post.categories[0].documentId">{{ category.title }}</NuxtLink>
        </li>
      </ul>
    </article> -->
  
<script setup>
const base_url = "https://6bc41f582d60.vps.myjino.ru"
const api = await $fetch('https://6bc41f582d60.vps.myjino.ru/api/posts?populate=*')
const posts = api.data
const displayedPosts = ref(posts.slice(0, 4)) // отображаем первые 12 статей
const loadMore = () => displayedPosts.value = posts.slice(0, displayedPosts.value.length + 4)
</script>
  
  <!-- 
  <template>
      <header>
        <h2>Статьи</h2>
      </header>
      <main>
        <article class="post" v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <ul>
            <li v-for="tag  in post.tags" :key="tag.id">{{ tag }}</li>
          </ul>
          <a href="#">Читать подробнее</a>
        </article>
      </main>
    </template>
    
    <script setup lang="ts">
      const dataTwice = await $fetch('https://dummyjson.com/posts')
      const posts = dataTwice.posts;
    
    </script>
    
    <style scoped>
    main {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    li:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .post {
      background-color: brown;
      color: aliceblue;
      padding: 10px;
      width: 280px;
    }
    .post  a{
      font-size: 18px;
      color: wheat;
    }
    </style> -->

<style scoped>
.post {
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(204, 104, 247, 0.855);
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
}

.post:hover {
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(172, 86, 243, 0.799);
  background-color: #f1f1f1;
  transition: all 0.3s ease;
}

.post:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(231, 82, 237, 0.805);
  background-color: #fff;
  opacity: 0.5;
  transition: all 0.3s ease;
}
</style>