// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Настройка сервера разработки
  devServer: {
    host: '0.0.0.0', // Позволяет доступ извне
  },

  // Совместимость с версией
  compatibilityDate: '2024-04-03', // Можно обновить по необходимости

  // Инструменты разработчика
  devtools: { enabled: false },

  // Подключение CSS
  css: ['~/assets/css/main.css'],

  // Настройка PostCSS
  postcss: {
    plugins: {
      tailwindcss: {}, // Подключение Tailwind
      autoprefixer: {}, // Автоматическое добавление вендорных префиксов
    },
  },

  // Модули проекта
  modules: [
    '@pinia/nuxt', // Подключение Pinia
  ],

  // Настройка Pinia
  pinia: {
    storesDirs: ['./stores/**'], // Директория с хранилищами
  },

  // Глобальные настройки заголовка (head)
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', // Подключение Font Awesome
        },
      ],
    },
  },
});