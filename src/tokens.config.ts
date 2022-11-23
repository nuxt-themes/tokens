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

// Global properties utils
const utils = {
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
