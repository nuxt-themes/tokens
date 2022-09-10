<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}
</script>

<template>
  <button aria-label="Color Mode" @click="onClick">
    <ColorScheme>
      <Icon v-if="colorMode.preference === 'dark'" name="uil:moon" />
      <Icon v-else-if="colorMode.preference === 'light'" name="uil:sun" />
      <Icon v-else name="uil:desktop" />
      <template #placeholder>
        <Icon name="uil:sun" />
      </template>
    </ColorScheme>
  </button>
</template>

<style scoped lang="ts">
css({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
</style>
