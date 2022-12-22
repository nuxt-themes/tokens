<script setup lang="ts">
import type { PropType } from 'vue'
import type { DesignToken } from 'pinceau'
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
    type: Object as PropType<any>,
    required: true,
  },
  nestings: {
    type: Array,
    required: false,
    default: () => ([]),
  },
  ...variants,
})

const emit = defineEmits(['update:hoveredToken', 'update:clipboardState'])

const hoveredToken = useVModel(props, 'hoveredToken', emit)

const clipboardState = useVModel(props, 'clipboardState', emit)

const values = computed<any>(
  () => {
    return Object.entries(props.tokens)
  },
)
</script>

<template>
  <section>
    <ProseH2 v-if="name" :id="name">
      {{ name }}
    </ProseH2>

    <ul>
      <li v-for="[key, value] of values" :key="key">
        <DisplayValue v-if="value.value" v-model:hoveredToken="hoveredToken" v-model:clipboardState="clipboardState" :token="value" :type="type" :name="key" :nestings="[...nestings, name]" />
        <TokensSection v-else v-model:hoveredToken="hoveredToken" v-model:clipboardState="clipboardState" :tokens="value" :type="type" flatten :name="key" :nestings="[...nestings, name]" />
      </li>
    </ul>
  </section>
</template>

<style scoped lang="ts">
css({
  'h2, h3': {
    fontStyle: 'capitalize',
    textTransform: 'capitalize',
    fontFamily: '{font.sans}',
    fontWeight: 'bold',
    marginTop: '{space.8}'
  },
  variants: {
    flatten: {
      true: {
        ul: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '{space.4}',
          "@lg": {
            gap: '{space.16}',
          }
        }
      }
    }
  }
})
</style>
