import { defineTheme } from 'pinceau'
import colors from '../tokens/Base/colors.json'
import core from '../tokens/Base/core.json'
import typography from '../tokens/Base/typography.json'

const tokens = {
  colors,
  ...core,
  ...typography,
}

delete tokens.text

export default defineTheme({
  ...tokens,

  media: {
    'xs': { value: '(min-width: 475px)' },
    'sm': { value: '(min-width: 640px)' },
    'md': { value: '(min-width: 768px)' },
    'lg': { value: '(min-width: 1024px)' },
    'xl': { value: '(min-width: 1280px)' },
    '2xl': { value: '(min-width: 1536px)' },
    'rm': { value: '(prefers-reduced-motion: reduce)' },
    // 'landscape': { value: 'only screen and (orientation: landscape)' },
    // 'portrait': { value: 'only screen and (orientation: portrait)' },
  },

  screens: {
    'xs': { value: '475px' },
    'sm': { value: '640px' },
    'md': { value: '768px' },
    'lg': { value: '1024px' },
    'xl': { value: '1280px' },
    '2xl': { value: '1536px' },
  },
})
