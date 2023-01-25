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
  root: {
    type: Boolean,
    required: false,
  },
  ...variants,
})

const emit = defineEmits(['update:hoveredToken', 'update:clipboardState'])

const route = useRoute()

const collapsed = ref<boolean>(route.hash === `#${props.name}` ? false : props.root)

const hoveredToken = useVModel(props, 'hoveredToken', emit)

const clipboardState = useVModel(props, 'clipboardState', emit)

const values = computed<any>(() => Object.entries(props.tokens))

const collapse = () => {
  if (!props.root) {
    return
  }

  collapsed.value = !collapsed.value
}
</script>

<template>
  <section :class="{ root }">
    <component :is="root ? 'button' : 'div'" @click="collapse">
      <ProseH2 v-if="name" :id="name">
        {{ name }}
      </ProseH2>
      <div v-if="root">
        <Icon v-if="collapsed" name="lucide:chevrons-up-down" />
        <Icon v-else name="lucide:chevrons-down-up" />
      </div>
    </component>

    <ul v-if="!collapsed">
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
  },
  section: {
    '&.root': {
      '& > button': {
        borderBottom: '{borderWidth.lg} solid {color.gray.100}',
        '@dark': {
          borderBottom: '{borderWidth.lg} solid {color.gray.900}',
        },
        h2: {
          margin: 0
        },
        '& > div': {
          fontSize: '{fontSize.2xl}'
        }
      }
    },
    '& > div,button': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  },
  variants: {
    flatten: {
      true: {
        ul: {
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
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
