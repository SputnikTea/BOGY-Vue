// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['vitest/globals'],
      },
      typeCheck: true,
    },
  },
})
