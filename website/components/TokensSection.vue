<script setup lang="ts">
import type { PropType } from 'vue'
import type { DesignToken, PinceauTokens } from 'pinceau'
import { useVModel } from '@vueuse/core'

const props = defineProps({
  hoveredToken: {
    type: Object as PropType<DesignToken | undefined>,
    required: false,
  },
  clipboardState: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
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

const emit = defineEmits(['update:hoveredToken', 'update:clipboardState'])

const hoveredToken = useVModel(props, 'hoveredToken', emit)

const clipboardState = useVModel(props, 'clipboardState', emit)

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
        <DisplayValue v-if="value.value" v-model:hoveredToken="hoveredToken" v-model:clipboardState="clipboardState" :token="value" :type="type" :name="key" :nestings="[...nestings, name]" />
        <TokensSection v-else v-model:hoveredToken="hoveredToken" v-model:clipboardState="clipboardState" :tokens="value" :type="type" :flatten="true" :name="key" :nestings="[...nestings, name]" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="ts">
css({
  'h2, h3': {
    fontStyle: 'capitalize',
    textTransform: 'capitalize',
    fontFamily: '{fonts.base}',
    fontWeight: 'bold',
    marginTop: '{space.32}'
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
        "@mq.lg": {
          gap: '{space.32}',
        }
      }
    }
  }
})
</style>
