<template>
<div>
  Hello World!

  <br />

  <pre>{{ JSON.stringify(themeTokens, null, 2)}}</pre>
</div>
</template>

<script setup lang="ts">
// @ts-ignore
import { themeTokens } from '#design-tokens'
</script>

<style scoped lang="ts">
css({
  div: {
    padding: '1rem',
    backgroundColor: '{colors.indigoblue.200}'
  }
})
</style>
