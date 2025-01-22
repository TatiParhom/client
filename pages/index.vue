<template>
    <main class="container max-w-4xl mx-auto text-center break-normal flex flex-col items-center pt-32 bg-customBrown font-sans leading-normal tracking-normal">

        <!--Container-->
        <div class="bg-customBrown container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

            <div class="bg-customLight mx-0 sm:mx-6">

                

                    <!--Карточка приветствия-->
                    <div class="container h-full bg-customYellow border-4 border-customBrown">
    <a href="/blog" class="flex flex-wrap no-underline hover:no-underline">
        <!-- Отступ сверху и рамка вокруг картинки -->
        <div class="relative w-full h-[60vh] max-h-[460px] overflow-hidden mt-6 border-2 border-customBrown rounded shadow-md">
            <img src="https://6bc41f582d60.vps.myjino.ru/uploads/IMG_8846_65f63e804a.jpeg" 
                 alt="Main Image" 
                 class="absolute top-0 left-0 w-full h-full object-cover rounded">
        </div>

        <!-- Контент карточки -->
        <div class="bg-customYellow py-10 px-6 md:px-20 text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">
                Добро пожаловать на мой блог! 🌿
            </h1>
            <p class="text-xl text-gray-700 mb-6">
                Здесь начинается ваше путешествие к пониманию себя и окружающего мира.
                Это пространство, где психология встречается с саморазвитием,
                а вдохновение становится вашим верным спутником.
            </p>
            <div class="text-left md:text-center text-gray-700">
                <p class="text-lg md:text-xl mb-4">
                    🔍 <strong>Что вас ждет?</strong>
                </p>
                <ul class="list-disc list-inside md:list-outside md:mx-auto text-lg leading-relaxed">
                    <li>Уникальные статьи, которые помогут взглянуть на привычные вещи под новым углом.</li>
                    <li>Практические советы для улучшения вашей жизни.</li>
                    <li>Глубокие размышления о том, как найти гармонию и раскрыть свой потенциал.</li>
                </ul>
            </div>
            <p class="text-lg text-gray-700 mt-6 italic">
                Не спешите — изучайте, вдохновляйтесь, и пусть каждый визит сюда
                станет шагом к вашему лучшему "я".
            </p>
            <p class="text-2xl font-semibold text-customBrown mt-6">
                ✨ Добро пожаловать в мир, где каждый пост может изменить вашу жизнь! 🌟
            </p>
        </div>
    </a>
</div>
<!--/Карточка приветствия-->



                    <!--Posts Container-->
                    <div class="bg-customBrown flex flex-wrap justify-between pt-12 -mx-6">

                        <!--1/3 col -->
                        <div v-for="post in posts" :key="post.id"
                            class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink rounded">
                            <div class="flex-1 bg-customYellow rounded overflow-hidden rounded-tshadow-lg">
                                <a href="/blog" class="flex flex-wrap no-underline hover:no-underline">
                                    <img 
        :src="'https://6bc41f582d60.vps.myjino.ru/' + post.img.url" 
        class="w-full h-60 max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover rounded-t pb-6 transition-transform duration-300 ease-in-out hover:scale-110">
                                    <p class="w-full text-gray-600 text-xs md:text-sm px-6">Читай новый пост!</p>
                                    <div class="w-full font-bold text-xl text-gray-900 px-6">{{ post.title }}</div>
                                    <p class="text-gray-800 font-serif text-base px-6 mb-5">
                                        {{ post.desc }}
                                    </p>
                                </a>
                            </div>
                        </div>

                        <!--1/2 col -->
                        <div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                            <div class="flex-1 bg-customYellow rounded-t rounded-b-none overflow-hidden shadow-lg">
                                <a href="/blog" class="flex flex-wrap no-underline hover:no-underline">
                                    <img src="https://6bc41f582d60.vps.myjino.ru/uploads/IMG_2004_869fb86828.jpg"
                                        class="h-full w-full rounded-t pb-6">
                                    <div class="w-full font-bold text-xl text-gray-900 px-6">Цитата дня
                                    </div>
                                </a>
                            </div>
                            <div
                                class="flex-none mt-auto bg-customYellow rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                            </div>
                        </div>

                        <!--1/2 col -->
                        <div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                            <div class="flex-1 flex-row bg-customYellow rounded-t rounded-b-none overflow-hidden shadow-lg">
                                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                    <img src="https://6bc41f582d60.vps.myjino.ru/uploads/IMG_8860_5b0fd8cdb8.jpeg"
                                        class="h-full w-full rounded-t pb-6">
                                    <div class="w-full font-bold text-xl text-gray-900 px-6">Сегодня...
                                    </div>
                                    <p class="text-gray-800 font-serif text-base px-6 mb-5"
                                        style="font-family: 'Georgia', serif; font-style: italic;">
                                        Придёт день, когда ты поймёшь, что всю вселенную ты можешь найти внутри себя... И
                                        тогда ты станешь волшебником. Став волшебником, ты уже не будешь жить в мире - этот
                                        мир будет жить в тебе.
                                    </p>
                                </a>
                            </div>
                            <div
                                class="flex-none mt-auto bg-customYellow rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                            </div>
                        </div>

                        <!--2/3 col -->
                        <div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div class="flex-1 bg-customYellow rounded-t rounded-b-none overflow-hidden shadow-lg">
                                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                    <img src="https://6bc41f582d60.vps.myjino.ru/uploads/IMG_8150_f96789c5bf.JPG"
                                        class="h-full w-full rounded-t pb-6">
                                    <div class="w-full font-bold text-xl text-gray-900 px-6">Мои рекомендации
                                    </div>
                                    <p class="text-gray-800 font-serif text-base px-6 mb-5">
                                        Что почитать.. Посмотреть.. Послушать..
                                    </p>
                                </a>
                            </div>
                            <div
                                class="flex-none mt-auto bg-customYellow rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                            </div>
                        </div>
                    </div>
                    <!--/ Post Content-->
                </div>
                <!--Subscribe-->
                <div class="container font-sans bg-customBrown rounded mt-8 p-4 md:p-24 text-center">
                <h2 class="font-bold text-2xl md:text-4xl text-customYellow">Подпишись и получай новости первым</h2>
                <div class="w-full text-center pt-4">
                    <form action="#">
                        <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                            <input type="email" placeholder="youremail@example.com" required class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none">
                            <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-customYellow text-customBrown text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-customLight">
                                Подписаться
                            </button>
                        </div>
                    </form>
                </div>
                <!-- /Subscribe-->
            </div>
        </div>
    </main>
</template>

<script setup>
const posts = ref([])

const api = async () => {
    try {
        const response = await $fetch('https://6bc41f582d60.vps.myjino.ru/api/posts?populate=*&pagination[pageSize]=3')
        const data = await response.data
        posts.value = data
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => api())
</script>

<style scoped>
.title {
    width: 100%;
    height: 100%;
    padding: auto;
    background-color: img;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 100px;
    color: white;
    mix-blend-mode: multiply;
}

</style>