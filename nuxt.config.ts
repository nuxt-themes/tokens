// That allows to overwrite these dependencies paths via `.env` for local development
const envModules = {
  colorMode: process?.env?.THEME_DEV_COLOR_MODE_PATH || '@nuxtjs/color-mode',
  tokens: process?.env?.THEME_DEV_PINCEAU_PATH || 'pinceau/nuxt',
}

export default defineNuxtConfig({
  modules: [
    envModules.colorMode,
    envModules.tokens,
  ],
  pinceau: {
    configFileName: 'tokens.config',
    colorSchemeMode: 'class',
  },
  colorMode: {
    classSuffix: '',
  },
  build: {
    transpile: ['nuxt/app'],
  },
})
