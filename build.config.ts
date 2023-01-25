import { copyFile } from 'fs/promises'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,

  entries: [
    './src/module',
  ],

  hooks: {
    'build:done': async () => {
      await copyFile('src/tokens.config.ts', 'dist/tokens.config.ts')
    },
  },

  rollup: {
    emitCJS: true,
  },

  externals: [
    '@nuxt/schema',
    '@nuxt/schema-edge',
    '@nuxt/kit',
    '@nuxt/kit-edge',
    'nuxt',
    'nuxt-edge',
    'nuxt3',
    'vue',
    'vue-demi',
  ],
})
