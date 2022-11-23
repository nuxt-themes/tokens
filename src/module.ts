import { createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import type { PinceauOptions } from 'pinceau'

interface ModuleOptions {
  fonts: string[]
}

const module: any = defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt-themes/tokens',
    configKey: 'tokens',
  },
  defaults: () => ({
    fonts: [
      'https://rsms.me/inter/inter.css',
      'https://fonts.googleapis.com/css2?family=Fira+Code&display=swaps',
    ],
  }),
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

    // Push fonts from `fonts` keys
    nuxt.options.app.head = nuxt.options.app.head || {}
    nuxt.options.app.head.link = nuxt.options.app.head.link || []
    ;(options?.fonts || []).forEach(
      (href) => {
        nuxt.options.app.head.link.push({
          rel: 'stylesheet',
          href,
        })
      },
    )

    await installModule('@nuxtjs/color-mode', {
      classSuffix: '',
    })

    // Ensure Pinceau is loaded
    await installModule(
      'pinceau/nuxt',
      {
        configFileName: 'tokens.config',
      },
    )
  },
})

export default module
