<template>
    <footer class="bg-cover bg-center bg-customLight dark:bg-gray-900"
        style="background-image: url('https://6bc41f582d60.vps.myjino.ru/uploads/IMG_2003_2d89f52fca.jpg');">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="~/public/favicon.webp" class="w-full md:w-80 md:h-52" alt="Flowbite Logo" />
                        <!--<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Психология и саморазвитие</span>-->
                    </NuxtLink>
                    <!--<a href="/" class="flex items-center">
                    <img src="~/public/favicon.webp" class=" h-50"
                    alt="Flowbite Logo" />
                      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Психология и саморазвитие</span>
                    </a>-->
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Категории</h2>
                        <!-- <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <NuxtLink :to="'/category/' + post.categories?.[0].documentId"
                                    class="text-gray-500 dark:text-gray-400 font-medium">
                                    Психология
                                    {{ post.categories?.[0]?.title || 'Без категории' }}
                                </NuxtLink>
                            </li>
                            <li class="mb-4">
                                <NuxtLink to="/category/psychology" class="text-gray-500 dark:text-gray-400 font-medium">
                                    Саморазвитие
                                </NuxtLink>
                            </li>
                        </ul> -->
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Социальные сети</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="https://t.me/tatiana_parhomova" class="hover:underline ">Telegram</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://vk.com/tatiana_parkhomova" class="hover:underline">VK</a>
                            </li>
                            <li class="mb-4">
                                <a href="hhttps://www.instagram.com/p/CGyzECIlvHrt1BdzzNNwhzMxHFm9Ozj7Xus_h00/?igsh=YzZucnE1eGU2Njkx"
                                    class="hover:underline">Instagram</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://wa.me/89539135999" class="hover:underline">WatsApp</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Информация</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Политика конфиденциальности</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Условия &amp; Положения</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/contact"
                        class="hover:underline">Татьяна Пархомова™</a>. Все
                    права защищены.
                </span>
                <div class="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="https://t.me/tatiana_parhomova" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <i class="fa-brands fa-telegram fa-lg" style="color: #0088cc;"></i>
                        <span class="sr-only">Telegram</span>
                    </a>
                    <a href="https://wa.me/89539135999" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <i class="fa-brands fa-whatsapp fa-lg" style="color: #25d366;"></i>
                        <span class="sr-only">WhatsApp</span>
                    </a>
                    <a href="hhttps://www.instagram.com/p/CGyzECIlvHrt1BdzzNNwhzMxHFm9Ozj7Xus_h00/?igsh=YzZucnE1eGU2Njkx" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <i class="fa-brands fa-instagram fa-lg" style="color: #E1306C;"></i>
                        <span class="sr-only">Instagram</span>
                    </a>
                    <a href="https://vk.com/tatiana_parkhomova" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <i class="fa-brands fa-vk fa-lg" style="color: #4680C2;"></i>
                        <span class="sr-only">ВКонтакте</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

