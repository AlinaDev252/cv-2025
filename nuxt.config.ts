import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},  // Enable Tailwind CSS
      autoprefixer: {},  // Enable Autoprefixer
    },
  },
})
