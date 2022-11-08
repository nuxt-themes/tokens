export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    'pinceau/nuxt',
  ],
  pinceau: {
    configFileName: 'tokens.config',
    colorSchemeMode: 'class',
  },
  hooks: {
    'pinceau:options': (options) => {
      return options
    },
  },
  colorMode: {
    classSuffix: '',
  },
})
