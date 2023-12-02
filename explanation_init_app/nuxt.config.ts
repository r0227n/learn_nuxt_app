// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  }

    vite: {
    server: {
      watch: {
        usePolling: true, // hotreload を有効か
      },
    },
  },
})
