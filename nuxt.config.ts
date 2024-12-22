// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@prisma/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],
  prisma: {
    autoSetupPrisma: true,
  },
  css: ['@/assets/css/main.css'],
  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700],
    },
    providers: {
      google: false,
    },
    priority: ['bunny'],
  },
})