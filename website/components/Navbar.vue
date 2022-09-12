<script setup lang="ts">
import type { PropType } from 'vue'
import type { DesignToken } from 'pinceau'
import { useMotion } from '@vueuse/motion'

defineProps({
  hoveredToken: {
    type: Object as PropType<DesignToken | undefined>,
    required: false,
  },
  clipboardState: {
    type: String,
    required: false,
  },
  type: {
    type: String as PropType<'variable' | 'token'>,
    required: false,
  },
})
</script>

<template>
  <header>
    <h1>@nuxt-themes/tokens</h1>
    <div>
      <TokenBadge :type="type" :clipboard-state="clipboardState" :token="hoveredToken" />
      <ThemeSelect />
      <NuxtLink to="https://github.com/nuxt-themes/tokens" target="_blank">
        <Icon name="fa-brands:github" />
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped lang="ts">
css({
  header: {
    overflow: 'hidden',
    height: '{size.64}',
    backdropFilter: 'saturate(180%) blur(20px)',
    width: '100%',
    padding: '{space.16} {space.32}',
    position: 'sticky',
    top: '{space.0}',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba({colors.neutral.white}, 0.4)',
    "@dark": {
      backgroundColor: 'rgba({colors.neutral.black}, 0.4)',
    },
    a: {
      lineHeight: '0'
    },
    zIndex: '50',
    h1: {
      fontSize: '{fontSizes.sm}',
      fontWeight: '{fontWeights.black}',
      '@screen:xl': {
        fontSize: '{fontSizes.xl}',
      }
    },
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: '{space.16}'
      },
      'svg, a > svg': {
        height: '{size.16}',
        width: '{size.16}'
      },
      '@screen:xl': {
        'svg, a > svg': {
          height: '{size.32}',
          width: '{size.32}'
        }
      }
    }
  }
})
</style>
