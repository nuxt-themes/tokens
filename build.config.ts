import { copyFile } from 'fs/promises'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,

  entries: [
    './src/module.ts',
  ],

  hooks: {
    'build:done': async () => {
      await copyFile('src/tokens.config.ts', 'dist/tokens.config.ts')
    },
  },
})
