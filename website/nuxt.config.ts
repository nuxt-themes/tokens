import { createResolver } from "@nuxt/kit"

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  app: {
    head: {
      title: '@nuxt-themes/tokens',
      meta: [
        {
          key: 'meta',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1'
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
      ]
    }
  },

  modules: ['../src/module', 'nuxt-icon', '@nuxt/content', '@vueuse/motion/nuxt'],

  components: [
    {
      path: resolve('./components'),
      global: true
    },
    {
      path: resolve('../node_modules/@nuxt-themes/typography/components'),
      global: true,
    },
    {
      path: resolve('../node_modules/@nuxt-themes/typography/components/global'),
      global: true,
    }
  ],

  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
  },
})
