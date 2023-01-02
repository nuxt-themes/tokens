import { defineTheme } from 'pinceau'
import type { ConfigTokens } from 'pinceau'
import color from '../tokens/Base/colors.json'
import core from '../tokens/Base/core.json'
import typography from '../tokens/Base/typography.json'

// JSON Tokens
const tokens = {
  color,
  ...core,
  ...typography,
}

// Global properties utils
const utils: ConfigTokens['utils'] = {
  my: (value) => {
    return {
      marginTop: value,
      marginBottom: value,
    }
  },
  mx: (value) => {
    return {
      marginLeft: value,
      marginRight: value,
    }
  },
  py: (value) => {
    return {
      paddingTop: value,
      paddingBottom: value,
    }
  },
  px: (value) => {
    return {
      paddingLeft: value,
      paddingRight: value,
    }
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  } as any,
  lineClamp: (lines: any) => ({
    'overflow': 'hidden',
    'display': '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': lines,
  }) as any,
  text: (size: any) => ({
    fontSize: `{text.${size}.fontSize}`,
    lineHeight: `{text.${size}.lineHeight}`,
  }),
}

export default defineTheme({
  ...tokens,

  // Common utilities
  utils,

  media: {
    '$schema': {
      title: 'Your website media queries.',
      tags: [
        '@studio-input design-token',
        '@studio-input-token-type color',
        '@studio-icon material-symbols:screenshot-monitor-outline-rounded',
      ],
    },
    'xs': { value: '(min-width: 475px)' },
    'sm': { value: '(min-width: 640px)' },
    'md': { value: '(min-width: 768px)' },
    'lg': { value: '(min-width: 1024px)' },
    'xl': { value: '(min-width: 1280px)' },
    '2xl': { value: '(min-width: 1536px)' },
    'rm': { value: '(prefers-reduced-motion: reduce)' },
    'landscape': { value: 'only screen and (orientation: landscape)' },
    'portrait': { value: 'only screen and (orientation: portrait)' },
  },
})
