<script setup>
import { theme } from '#pinceau/theme'

const categories = computed(
  () => {
    return Object.entries(theme).filter(([key]) => !(['prose', 'typography', 'text'].includes(key)))
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
    overflowX: 'hidden',
    backgroundColor: '{colors.white}',
    color: '{colors.black}',
    '@dark': {
      backgroundColor: '{colors.black}',
      color: '{colors.white}'
    }
  },
  body: {
    overflowY: 'scroll'
  }
})
</style>

<style scoped lang="ts">
css({
  section: {
    padding: '{space.8}'
  },
  '.nuxt-themes-tokens': {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})
</style>
