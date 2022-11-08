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
    // @ts-ignore
    'pinceau:options': (options) => {
      return options
    },
  },
  colorMode: {
    classSuffix: '',
  },
})
