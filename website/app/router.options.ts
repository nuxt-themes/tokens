import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, _from, savedPosition) => {
    if (to.hash) {
      const el = document.querySelector(to.hash) as any

      if (!el) { return }

      const { marginTop } = getComputedStyle(el)

      const marginTopValue = parseInt(marginTop) + 64

      const offset = ((document.querySelector(to.hash) as any).offsetTop - marginTopValue)

      document.body.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }
}
