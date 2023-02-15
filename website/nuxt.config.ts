import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['@nuxt-themes/typography'],

  app: {
    head: {
      title: '@nuxt-themes/tokens',
      meta: [
        {
          key: 'meta',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
      ],
    },
  },

  modules: ['../src/module', 'nuxt-icon', '@nuxt/content', '@vueuse/motion/nuxt'],

  components: [
    {
      path: resolve('./components'),
      global: true,
    },
  ],

  content: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
  },

  typescript: {
    includeWorkspace: true,
  },

  build: {
    transpile: ['nuxt/app'],
  },
})
