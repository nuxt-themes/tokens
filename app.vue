<script setup>
import { theme } from '#pinceau'

const categories = computed(
  () => {
    return Object.entries(theme)
  },
)
</script>

<template>
  <div class="nuxt-themes-tokens">
    <Navbar />
    <section class="motd">
      <ContentDoc />
    </section>
    <TokensSection v-for="[key, tokens] in categories" :key="key" :name="key" :tokens="tokens" />
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
    },
    section: {
      padding: '{space.32}'
    }
  },
  '.nuxt-themes-tokens': {
    '.motd': {
      lineHeight: '{leads.loose}'
    }
  }
})
</style>
