<script setup lang="ts">
import type { PropType } from 'vue'
import type { DesignToken } from 'pinceau'
import { useMotion } from '@vueuse/motion'

const props = defineProps({
  token: {
    type: Object as any,
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
})

const displayValue = computed(() => {
  if (!props.token) { return '' }

  if (props.type === 'token' && props.token?.path) {
    return `{${props.token.path.join('.')}}`
  }

  return props.token?.attributes?.variable || props.token?.value || props.token?.original?.value || ''
})

const badge = ref()

const { apply, leave } = useMotion(
  badge,
  {
    initial: {
      y: 100,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 600,
        damping: 35,
      },
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 600,
        damping: 35,
      },
    },
  },
)
</script>

<template>
  <Transition @enter="apply('enter')" @leave="(_, done) => leave(done)">
    <button v-if="token" ref="badge">
      {{ displayValue }}
      <ClipboardState :clipboard-state="clipboardState" />
    </button>
  </Transition>
</template>

<style scoped lang="ts">
css({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    border: '1px solid {colors.green.500}',
    backgroundColor: 'rgba({colors.green.200}, 0.4)',
    padding: '{space.1} {space.2}',
    borderRadius: '{radii.lg}',
    fontWeight: '{fontWeights.bold}',
    color: '{colors.neutral.white}',
  }
})
</style>
