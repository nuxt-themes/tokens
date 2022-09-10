<script setup lang="ts">
import type { PropType } from 'vue'
import type { PinceauTokens } from 'pinceau'

const props = defineProps({
  name: {
    type: String,
    required: false,
  },
  tokens: {
    type: Object as PropType<PinceauTokens>,
    required: true,
  },
  flatten: {
    type: Boolean,
    required: false,
    default: false,
  },
  nestings: {
    type: Array,
    required: false,
    default: () => ([]),
  },
})

const values = computed(
  () => {
    return Object.entries(props.tokens)
  },
)
</script>

<template>
  <section>
    <NuxtLink v-if="name" :id="name" :to="`#${nestings.length ? [...nestings, name].join('-') : name}`">
      <h2>{{ name }}</h2>
    </NuxtLink>

    <ul :class="{ flatten }">
      <li v-for="[key, value] of values" :key="key">
        <DisplayValue v-if="value.value" :token="value" :name="key" :nestings="[...nestings, name]" />
        <TokensSection v-else :tokens="value" :flatten="true" :name="key" :nestings="[...nestings, name]" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="ts">
css({
  section: {
    '& > * + *': {
      marginLeft: '2rem'
    }
  },
  'h2, h3': {
    fontStyle: 'capitalize',
    textTransform: 'capitalize',
    fontFamily: '{fonts.base}',
    fontWeight: 'bold',
    marginTop: '{space.4}'
  },
  'h2': {
    fontSize: '{fontSizes.3xl}',
  },
  'h3': {
    fontSize: '{fontSizes.2xl}',
  },
  ul: {
    variants: {
      flatten: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '{space.16}',
        "@screen:lg": {
          gap: '{space.32}',
        }
      }
    }
  }
})
</style>
