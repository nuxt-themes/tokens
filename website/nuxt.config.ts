import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
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

  css: [
    resolve('../node_modules/@nuxt-themes/typography/main.css'),
  ],

  components: [
    {
      path: resolve('./components'),
      global: true,
    },
    {
      path: resolve('../node_modules/@nuxt-themes/typography/components'),
      global: true,
    },
    {
      path: resolve('../node_modules/@nuxt-themes/typography/components/global'),
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
