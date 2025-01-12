// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@prisma/nuxt',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
  ],
  prisma: {
    autoSetupPrisma: true,
  },
  alias: {
    '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js'
  },
  css: ['@/assets/css/main.css'],
})
