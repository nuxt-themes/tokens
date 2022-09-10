<template>
  <header>
    <h1>@nuxt-themes/tokens</h1>
    <div>
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
    padding: '{space.16} {space.32}',
    position: 'sticky',
    top: '{space.0}',
    backgroundColor: '{colors.neutral.white}',
    "@dark": {
      backgroundColor: '{colors.neutral.black}',
    },
    zIndex: '50',
    h1: {
      fontSize: '{fontSizes.3xl}',
      fontWeight: '{fontWeights.black}'
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    div: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '{space.12}',
      '&:deep(svg)': {
        height: '32px',
        width: '32px'
      }
    }
  }
})
</style>
