/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#91736C',
        customLight: '#FFFCF5',
        customYellow: '#FFEEC0',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],

  darkMode: 'class',
}



