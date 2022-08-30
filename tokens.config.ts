import { defineTokens } from '@nuxtjs/design-tokens'
import colors from './tokens/base/colors.json'
import core from './tokens/base/core.json'
import typography from './tokens/base/typography.json'

delete typography.text
delete core.boxshadow

export default defineTokens({
  ...core,
  ...typography,
  colors
})
