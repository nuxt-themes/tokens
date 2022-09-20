export default defineNuxtConfig({
  meta: {
    title: '@nuxt-themes/tokens',
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
    link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }],
  },

  modules: ['../src/module', 'nuxt-icon', '@nuxt/content', '@vueuse/motion/nuxt'],

  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
  },
})
