import { createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import type { PinceauOptions } from 'pinceau'

// That allows to overwrite these dependencies paths via `.env` for local development
const envModules = {
  colorMode: process?.env?.THEME_DEV_COLOR_MODE_PATH || '@nuxtjs/color-mode',
  pinceau: process?.env?.THEME_DEV_PINCEAU_PATH || 'pinceau/nuxt',
}

const module: any = defineNuxtModule({
  meta: {
    name: '@nuxt-themes/tokens',
    configKey: 'tokens',
  },
  async setup(_, nuxt) {
    const modulePath = createResolver(import.meta.url)

    // Push local tokens config in layers
    nuxt.hook(
      'pinceau:options',
      (options: PinceauOptions) => {
        options.configLayers = options?.configLayers || []
        options.configLayers.push({
          cwd: modulePath.resolve(),
          configFileName: 'tokens.config',
        })
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

    await installModule(envModules.colorMode, { classSuffix: '' })

    await installModule(envModules.pinceau, { configFileName: 'tokens.config', colorSchemeMode: 'class' })
  },
})

export default module
