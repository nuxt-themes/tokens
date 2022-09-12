<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const props = defineProps({
  clipboardState: {
    type: String,
    required: false,
  },
})

const copied = ref()
const copy = ref()

const { apply: applyCopy } = useMotion(copy, {
  initial: {
    scale: 1,
    rotate: 0,
  },
})
const { apply: applyCopied } = useMotion(copied, {
  initial: {
    scale: 0,
    rotate: 180,
  },
})

watch(
  () => props.clipboardState,
  (nextState) => {
    if (nextState === 'copied') {
      applyCopy({ scale: 0, rotate: 180 })
      applyCopied({ scale: 1, rotate: 0 })
      return
    }

    applyCopied({ scale: 0, rotate: 180 })
    applyCopy({ scale: 1, rotate: 0 })
  },
)
</script>

<template>
  <span>
    <span ref="copied">
      <Icon name="ri:paint-brush-fill" />
    </span>
    <span ref="copy">
      <Icon name="lucide:clipboard-copy" />
    </span>
  </span>
</template>

<style scoped lang="ts">
css({
  'span': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '{size.32}',
    width: '{size.32}',
    position: 'relative',
    '& > span': {
      position: 'absolute',
      '&:deep(svg)': {
        height: '{size.24}',
        width: '{size.24}'
      },
    }
  }
})
</style>
