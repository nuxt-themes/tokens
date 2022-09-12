import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    'pinceau/nuxt',
  ],
  pinceau: {
    configFileName: 'tokens.config',
  },
  colorMode: {
    classSuffix: '',
  },
})
