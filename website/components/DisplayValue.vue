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
  if (props.type === 'token' && props.token?.path) {
    return `{${props.token.path.join('.')}}`
  }
  return props.token?.attributes?.variable || props.token?.value || props.token?.original?.value || ''
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

const isFont = computed(() => props.token.type === 'fontFamilies')

const isRadii = computed(() => props.nestings.includes('radii'))

const isSize = computed(() => props.nestings.includes('size'))

const isSpace = computed(() => props.nestings.includes('space'))

const isShadow = computed(() => props.nestings.includes('shadows'))

const isBorderWidth = computed(() => props.nestings.includes('borderWidths'))

const isOpacity = computed(() => props.nestings.includes('opacity'))

const isFontWeights = computed(() => props.nestings.includes('fontWeights'))

const isFontSizes = computed(() => props.nestings.includes('fontSizes'))

const isLetterSpacings = computed(() => props.nestings.includes('letterSpacings'))

const isLeads = computed(() => props.nestings.includes('leads'))

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
      <template v-if="isColor">
        <div class="box color" :style="{ backgroundColor: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isFont">
        <div class="paragraph" :style="{ fontFamily: tokenValue }">
          <PlaceholderText />
        </div>
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isShadow">
        <div class="box shadow">
          <div class="shadowed" :style="{ boxShadow: tokenValue }">
        &nbsp;
          </div>
        </div>
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isRadii">
        <div class="box radii" :style="{ borderRadius: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isSize">
        <div class="box size" :style="{ width: tokenValue, height: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isSpace">
        <div class="box space" :style="{ width: '500px', height: '500px', padding: tokenValue }">
          <div />
        </div>
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isBorderWidth">
        <div class="box borderWidths" :style="{ borderWidth: `${tokenValue}` }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isOpacity">
        <div class="box opacity">
          <div :style="{ opacity: tokenValue }">
        &nbsp;
          </div>
        </div>
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isFontWeights">
        <PlaceholderText single :style="{ fontWeight: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isFontSizes">
        <PlaceholderText single :style="{ fontSize: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isLetterSpacings">
        <PlaceholderText single :style="{ letterSpacing: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <template v-if="isLeads">
        <PlaceholderText single class="leads" :style="{ lineHeight: tokenValue }" />
        <span>{{ tokenValue }}</span>
      </template>
      <p>{{ token.attributes.variable }}</p>
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
    borderRadius: '{radii.sm}'
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
    height: '256px',
    width: '256px',
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
        width: '128px',
        height: '128px',
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
