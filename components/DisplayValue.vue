<script setup lang="ts">
import type { PropType } from 'vue'
import type { DesignToken } from 'pinceau'
import * as vt from 'style-value-types'

const props = defineProps({
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

const tokenValue = computed(() => props?.token?.value || props.token?.original?.value)

const isScreen = computed(() => props.nestings.includes('screens'))

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
</script>

<template>
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
      <PlaceholderText single :style="{ lineHeight: tokenValue }" />
      <span>{{ tokenValue }}</span>
    </template>
    <p>{{ token.attributes.variable }}</p>
  </span>
</template>

<style lang="ts">
css({
  'h3': {
    fontStyle: 'capitalize',
    textTransform: 'capitalize',
    fontFamily: '{fonts.base}',
    fontWeight: 'bold',
    marginTop: '{space.4}',
    fontSize: '{fontSizes.3xl}'
  },
  '.box': {
    position: 'relative',
    height: '256px',
    width: '256px',
    borderRadius: '{radii.xl}',
    backgroundColor: '{colors.neutral.black}',
    '@dark': {
      backgroundColor: '{colors.neutral.white}'
    },
    '&.color': {
      border: '2px solid {colors.neutral.white}',
      span: {
        position: 'absolute',
        bottom: '{space.4}',
        right: '{space.8}',
        opacity: '50%'
      }
    },
    '&.shadow': {
      border: '2px solid {colors.neutral.white}',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '256px',
      height: '256px',
      backgroundColor: '{colors.neutral.white}',
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
        backgroundColor: '{colors.neutral.white}',
      },
    },
    '&.size': {
      backgroundColor: '{colors.neutral.black}',
      '@dark': {
        backgroundColor: '{colors.neutral.white}'
      },
     },
    '&.radii': {
      border: '8px solid {colors.indigoblue.500}',
    },
    '&.space': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '{colors.neutral.black}',
      "@dark": {
        backgroundColor: '{colors.neutral.white}',
      },
      '& > div': {
        backgroundColor: '{colors.neutral.white}',
        borderRadius: '{radii.lg}',
        width: '100%',
        height: '100%',
        "@dark": {
          backgroundColor: '{colors.neutral.black}',
        }
      }
    },
    '&.borderWidths': {
      borderColor: '{colors.indigoblue.500}',
      borderStyle: 'solid'
    },
    '&.opacity': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      "@dark": {
        backgroundColor: '{colors.neutral.white}',
      },
      '& > div': {
        backgroundColor: '{colors.neutral.white}',
        borderRadius: '{radii.lg}',
        width: '50%',
        height: '50%',
        "@dark": {
          backgroundColor: '{colors.neutral.black}',
        }
      }
    }
  },
  '.paragraph': {
    fontSize: '{fontSizes.xl}'
  },
  'span': {
    '& > span': {
      fontWeight: '{fontWeights.bold}'
    }
  }
})
</style>
