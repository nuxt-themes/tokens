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
      'pinceau:options',
      (options: PinceauOptions) => {
        options.configOrPaths = options?.configOrPaths || []
        if (Array.isArray(options?.configOrPaths)) {
          options.configOrPaths.push(modulePath.resolve())
        }
      },
    )

    // Push fonts from `fonts` keys
    nuxt.options.head = nuxt.options.head || {}
    nuxt.options.head.link = nuxt.options.head.link || []
    (options?.fonts || []).forEach(
      (href) => {
        nuxt.options.head.link.push({
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
