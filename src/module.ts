import { createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import type { PinceauOptions } from 'pinceau'

const module: any = defineNuxtModule<any>({
  meta: {
    name: '@nuxt-themes/tokens',
    configKey: 'tokens',
  },
  async setup(_, nuxt) {
    const modulePath = createResolver(import.meta.url)

    nuxt.hook(
      // @ts-expect-error - ??
      'pinceau:options',
      (options: PinceauOptions) => {
        options.configOrPaths = options?.configOrPaths || []
        if (Array.isArray(options?.configOrPaths)) {
          options.configOrPaths.push(modulePath.resolve())
        }
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
