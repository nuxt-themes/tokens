<script setup lang="ts">
import type { PropType } from 'vue'
import type { DesignToken } from 'pinceau'

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
    <h1>
      <IconNuxt class="icon" />
      <span>@nuxt-themes/tokens</span>
    </h1>
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
    padding: '{space.4} {space.8}',
    position: 'sticky',
    top: '{space.0}',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@dark': {
      backgroundColor: 'rgba({colors.black}, 0.4)',
    },
    a: {
      lineHeight: '0'
    },
    zIndex: '50',
    h1: {
      display: 'flex',
      alignItems: 'center',
      gap: '{space.2}',
      fontSize: '{fontSizes.sm}',
      fontWeight: '{fontWeights.black}',
      '@mq.xl': {
        fontSize: '{fontSizes.xl}',
      },
      '.icon': {
        width: '{size.32}'
      },
      span: {
        display: 'none'
      },
      '@mq.xs': {
        span: {
          display: 'inline',
        }
      },
    },
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: '{space.4}'
      },
      ':deep(.icon)': {
        height: '{size.16}',
        width: '{size.16}'
      },
      '@mq.xl': {
        ':deep(.icon)': {
          height: '{size.24}',
          width: '{size.24}'
        }
      }
    }
  }
})
</style>
