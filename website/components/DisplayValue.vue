<script setup lang="ts">
import type { PropType } from 'vue'
import type { DesignToken } from 'pinceau'
import * as vt from 'style-value-types'
import { useClipboard, useVModel } from '@vueuse/core'

const props = defineProps({
  hoveredToken: {
    type: Object as PropType<DesignToken | undefined>,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  clipboardState: {
    type: String,
    required: false,
  },
  nestings: {
    type: Array,
    required: false,
    default: () => ([]),
  },
  name: {
    type: String,
    required: true,
  },
  token: {
    type: Object as PropType<DesignToken> as any,
    required: true,
  },
})

const emit = defineEmits(['update:hoveredToken', 'update:clipboardState'])

const hoveredToken = useVModel(props, 'hoveredToken', emit)

const clipboardState = useVModel(props, 'clipboardState', emit)

const tokenValue = computed(() => props?.token?.value || props.token?.original?.value)

const copyValue = computed(() => {
  if (props.token?.variable) {
    return `{${props.token.variable.replace('var(--', '').replace(')', '').split('-').join('.')}}`
  }
  return props.token?.value || ''
})

const { copy: _copy } = useClipboard({ source: copyValue })

const copy = () => {
  _copy()
  if (clipboardState.value !== 'copied') {
    clipboardState.value = 'copied'
    setTimeout(() => (clipboardState.value = ''), 1000)
  }
}

const leave = () => {
  hoveredToken.value = undefined
}

const enter = () => {
  hoveredToken.value = props.token
}

const isScreen = computed(() => props.nestings.includes('media'))

const isColor = computed(() => vt.color.test(tokenValue.value))

const isFont = computed(() => props.token.type === 'font')

const isRadii = computed(() => props.nestings.includes('radii'))

const isSize = computed(() => props.nestings.includes('size'))

const isSpace = computed(() => props.nestings.includes('space'))

const isShadow = computed(() => props.nestings.includes('shadow'))

const isBorderWidth = computed(() => props.nestings.includes('borderWidth'))

const isOpacity = computed(() => props.nestings.includes('opacity'))

const isFontWeights = computed(() => props.nestings.includes('fontWeight'))

const isFontSizes = computed(() => props.nestings.includes('fontSize'))

const isLetterSpacings = computed(() => props.nestings.includes('letterSpacing'))

const isLeads = computed(() => props.nestings.includes('lead'))

const isText = computed(() => props.nestings.includes('text'))
</script>

<template>
  <div @mouseenter="enter" @mouseleave="leave" @click="() => copy()">
    <NuxtLink v-if="name" :id="name" :to="`#${nestings.length ? [...nestings, name].join('-') : name}`">
      <h3>{{ name }}</h3>
    </NuxtLink>
    <span>
      <template v-if="isScreen">
        <div class="box" :style="{ width: tokenValue, height: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isColor">
        <div class="box color" :style="{ backgroundColor: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isFont">
        <div class="paragraph" :style="{ fontFamily: tokenValue }">
          <PlaceholderText />
        </div>
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isShadow">
        <div class="box shadow">
          <div class="shadowed" :style="{ boxShadow: tokenValue }">
        &nbsp;
          </div>
        </div>
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isRadii">
        <div class="box radii" :style="{ borderRadius: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isSize">
        <div class="box size" :style="{ width: tokenValue, height: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isSpace">
        <div class="box space" :style="{ width: '500px', height: '500px', padding: tokenValue }">
          <div />
        </div>
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isBorderWidth">
        <div class="box borderWidths" :style="{ borderWidth: `${tokenValue}` }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isOpacity">
        <div class="box opacity">
          <div :style="{ opacity: tokenValue }">
        &nbsp;
          </div>
        </div>
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isFontWeights">
        <PlaceholderText single :style="{ fontWeight: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isFontSizes">
        <PlaceholderText single :style="{ fontSize: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isLetterSpacings">
        <PlaceholderText single :style="{ letterSpacing: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else-if="isLeads">
        <PlaceholderText single class="leads" :style="{ lineHeight: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-else>
        <span>{{ tokenValue }}</span>
      </template>
      <p>{{ token.variable }}</p>
    </span>
  </div>
</template>

<style scoped lang="ts">
css({
  div: {
    cursor: 'copy'
  },
  ':deep(.leads)': {
    backgroundColor: '{color.green.500}',
    borderRadius: '{radii.sm}  '
  },
  'h3': {
    fontStyle: 'capitalize',
    textTransform: 'capitalize',
    fontFamily: '{font.sans}',
    fontWeight: 'bold',
    marginTop: '{space.2}',
    fontSize: '{fontSize.3xl}'
  },
  '.box': {
    position: 'relative',
    height: '32px',
    width: '32px',
    borderRadius: '{radii.xl}',
    backgroundColor: '{color.black}',
    '@dark': {
      backgroundColor: '{color.white}'
    },
    '&.color': {
      border: '2px solid {color.white}',
      span: {
        position: 'absolute',
        bottom: '{space.2}',
        right: '{space.4}',
        opacity: '50%'
      }
    },
    '&.shadow': {
      border: '2px solid {color.white}',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '256px',
      height: '256px',
      backgroundColor: '{color.white}',
      '@dark': {
        backgroundColor: 'white'
      },
      span: {
        position: 'absolute',
        bottom: '{space.4}',
        right: '{space.8}',
        opacity: '50%'
      },
      '& > .shadowed': {
        width: '64px',
        height: '64px',
        borderRadius: '{radii.xl}',
        backgroundColor: '{color.white}',
      },
    },
    '&.size': {
      backgroundColor: '{color.black}',
      '@dark': {
        backgroundColor: '{color.white}'
      },
     },
    '&.radii': {
      border: '8px solid {color.indigoblue.500}',
    },
    '&.space': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '{color.black}',
      "@dark": {
        backgroundColor: '{color.white}',
      },
      '& > div': {
        backgroundColor: '{color.white}',
        borderRadius: '{radii.lg}',
        width: '100%',
        height: '100%',
        "@dark": {
          backgroundColor: '{color.black}',
        }
      }
    },
    '&.borderWidths': {
      borderColor: '{color.indigoblue.500}',
      borderStyle: 'solid'
    },
    '&.opacity': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      "@dark": {
        backgroundColor: '{color.white}',
      },
      '& > div': {
        backgroundColor: '{color.white}',
        borderRadius: '{radii.lg}',
        width: '50%',
        height: '50%',
        "@dark": {
          backgroundColor: '{color.black}',
        }
      }
    }
  },
  '.paragraph': {
    fontSize: '{fontSize.xl}'
  },
  'span': {
    '& > span': {
      fontWeight: '{fontWeight.bold}'
    }
  },
})
</style>
