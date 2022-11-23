import { defineTheme } from 'pinceau'
import colors from '../tokens/Base/colors.json'
import core from '../tokens/Base/core.json'
import typography from '../tokens/Base/typography.json'
import utils from './utils'

// JSON Tokens
const tokens = {
  colors,
  ...core,
  ...typography,
}

export default defineTheme({
  ...tokens,

  // Common utilities
  utils,

  media: {
    'xs': { value: '(min-width: 475px)' },
    'sm': { value: '(min-width: 640px)' },
    'md': { value: '(min-width: 768px)' },
    'lg': { value: '(min-width: 1024px)' },
    'xl': { value: '(min-width: 1280px)' },
    '2xl': { value: '(min-width: 1536px)' },
    'rm': { value: '(prefers-reduced-motion: reduce)' },
    'landscape': { value: 'only screen and (orientation: landscape)' },
    'portrait': { value: 'only screen and (orientation: portrait)' },
  }
})
