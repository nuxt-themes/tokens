import { defineNuxtConfig } from 'nuxt'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [resolve('./_nuxt.config.ts')],
  meta: {
    title: '@nuxt-themes/tokens',
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
    link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }],
  },
  modules: ['nuxt-icon', '@nuxt/content'],
  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
  },
})
