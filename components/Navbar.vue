<template>
  <nav class="bg-cover bg-center" 
     style="background-image: url('https://6bc41f582d60.vps.myjino.ru/uploads/IMG_2003_2d89f52fca.jpg');">
    <div class="flex flex-wrap items-center justify-between mx-auto py-4">
        <NuxtLink to="/" class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
            <img src="~/public/favicon.webp" 
            class="w-full md:w-80 md:h-52"  alt="Flowbite Logo" />
            <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Психология и саморазвитие</span> -->
        </NuxtLink>
      <div class="flex gap-8 md:order-2">
        <DarkMode />
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
          class="md:hidden text-customBrown dark:text-customYellow hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-customYellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <search />
          <input v-model="search.searchQuery" @focus="goToSearch" type="search" id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-customBrown focus:border-customBrown dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Поиск...">
        </div>
        <button data-collapse-toggle="navbar-search" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-customBrown rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-customYellow dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input v-model="search.searchQuery" @focus="goToSearch" type="search" id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Поиск...">
        </div>
        <button id="theme-toggle" type="button"
          class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
          <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </button>
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NuxtLink to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customBrown md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="{ 'md:text-customBrown': isActive(''), 'dark:md:text-blue-700': isActive('') }">
              Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customBrown md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="{ 'md:text-customBrown': isActive('blog') || isActive('post') || isActive('category'), 'dark:md:text-customBrown': isActive('blog') || isActive('post') || isActive('category') }">
              Блог</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/foryou"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customBrown md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="{ 'md:text-customBrown': isActive(''), 'dark:md:text-blue-700': isActive('') }">
              Для тебя</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customBrown md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              :class="{ 'md:text-customBrown': isActive('contact'), 'dark:md:text-blue-700': isActive('contact') }">
              Контакты</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { watch } from 'vue';

const search = useSearchStore()

const route = useRoute()
const isActive = (path) => route.path.split('/')[1] === path

const inputSearch = ref()
watch(inputSearch, async () => {
  console.log()
})

const router = useRouter()
function goToSearch() {
  router.push('/search')
}
</script>



<!-- <script setup>
const route = useRoute()
const isActive = (path) => route.path.split('/')[1] === path
const isDarkMode = ref('')
const isDark = ref(false)


useRequestHeader({
  htmlAttrs:
})

const activeClass = ref('text-blue-500')
</script> -->

<!-- <style scoped>
    ul {
        display: flex;
        list-style: none;
        gap: 10px;

        align-items: center;
        margin: 25px 50px;
        padding: 0;
        
        font-family: inherit;
        font-size: 25px;
        font-weight: bold;

        text-decoration: underline;

        cursor: pointer;
    }

    li {
        display: inline;
        margin: 25px;
        text-decoration: overline;
        color: #2b5579;
    }
    

</style>  -->