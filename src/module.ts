import { createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import type { PinceauOptions } from 'pinceau'

const module: any = defineNuxtModule({
  meta: {
    name: '@nuxt-themes/tokens',
    configKey: 'tokens',
  },
  async setup(options, nuxt) {
    const modulePath = createResolver(import.meta.url)

    nuxt.hook(
      // @ts-ignore
      'pinceau:options',
      (options: PinceauOptions) => {
        options.configOrPaths = options?.configOrPaths || []
        if (Array.isArray(options?.configOrPaths)) {
          options.configOrPaths.push(modulePath.resolve())
        }
      },
    )

    // Inject sub-exports types to tsconfig paths
    nuxt.hook('prepare:types', (opts) => {
      const tsConfig: typeof opts.tsConfig & { vueCompilerOptions?: any } = opts.tsConfig
      tsConfig.compilerOptions = tsConfig.compilerOptions || {}
      tsConfig.compilerOptions.paths = tsConfig.compilerOptions.paths || {}
      tsConfig.compilerOptions.paths['@nuxt-themes/tokens/tokens'] = [modulePath.resolve('./tokens.config.ts')]
      tsConfig.compilerOptions.paths['@nuxt-themes/tokens/config'] = [modulePath.resolve('./tokens.config.ts')]
    })

    await installModule('@nuxtjs/color-mode', { classSuffix: '' })
    
    await installModule('pinceau/nuxt', { configFileName: 'tokens.config' })
  },
})

export default module
