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

  screens: {
    'xs': { value: '475px' },
    'sm': { value: '640px' },
    'md': { value: '768px' },
    'lg': { value: '1024px' },
    'xl': { value: '1280px' },
    '2xl': { value: '1536px' },
  },
})
