<template>
    <h1>Поиск...</h1>
    <main>
        <article v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
        </article>
        <p v-if="posts.length === 0">Нет доступных статей.</p>
    </main>
</template>

<script setup>
const search = useSearchStore()
const posts = ref([])


async function searchAlert() {
    console.log(search.searchQuery);

    if(!search.searchQuery ==! true) {
        try {
            const response = await $fetch(`https://a1c537287dd6.vps.myjino.ru/api/posts?filters[$or][0][title][$containsi]=${search.searchQuery}&filters[$or][1][body][$containsi]=${search.searchQuery}`);
            posts.value = response.data;
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
        
        
    }
}

// Слушаем изменения в search.searchQuery
watch(() => search.searchQuery, (newQuery) => {
    if (newQuery) {
        searchAlert(); // Вызываем поиск, если есть новый запрос
        console.log(posts.value);
    } else {
        posts.value = []; // Очищаем результаты, если запрос пустой
    }
});

onMounted(() => searchAlert())
</script>