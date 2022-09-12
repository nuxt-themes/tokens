<script setup>
import { theme } from '#pinceau'

const categories = computed(
  () => {
    return Object.entries(theme)
  },
)

const cpType = ref('token')

const cpState = ref('')

const hoveredToken = ref()
</script>

<template>
  <div class="nuxt-themes-tokens">
    <Navbar :type="cpType" :clipboard-state="cpState" :hovered-token="hoveredToken" />

    <section class="motd">
      <ContentDoc />
    </section>

    <TokensSection v-for="[key, tokens] in categories" :key="key" v-model:hoveredToken="hoveredToken" v-model:clipboardState="cpState" :type="cpType" :name="key" :tokens="tokens" />
  </div>
</template>

<style lang="ts">
css({
  'html, body': {
    width: '100%',
    height: '100%',
    maxWidth: '100vw',
    maxHeight: '100vh',
    overflowX: 'hidden',
    backgroundColor: '{colors.neutral.white}',
    color: '{colors.neutral.black}',
    '@dark': {
      backgroundColor: '{colors.neutral.black}',
      color: '{colors.neutral.white}'
    }
  }
})
</style>

<style scoped lang="ts">
css({
  section: {
    padding: '{space.32}'
  },
  '.nuxt-themes-tokens': {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '.motd': {
      lineHeight: '{leads.loose}'
    }
  }
})
</style>
