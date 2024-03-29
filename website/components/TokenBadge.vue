<script setup lang="ts">
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
  if (!props.token) {
    return ''
  }

  if (props.type === 'token' && props.token?.path) {
    return `{${props.token.path.join('.')}}`
  }

  const variable = props.token?.variable

  if (variable) {
    return `{${variable.replace('var(--', '').replace(')', '').split('-').join('.')}}`
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
  <Transition @enter="apply('enter')" @leave="(_: any, done: any) => leave(done)">
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
    border: '1px solid {color.green.500}',
    backgroundColor: 'rgba({color.green.200}, 0.4)',
    padding: '{space.1} {space.2}',
    borderRadius: '{radii.lg}',
    fontWeight: '{fontWeight.bold}',
    color: '{color.black}',
    '@dark': {
      color: '{color.white}'
    }
  }
})
</style>
