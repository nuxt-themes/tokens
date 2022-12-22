import { defineAppConfig } from 'nuxt/app'

export default defineAppConfig({
  prose: {
    copyButton: {
      iconCopy: 'ph:copy',
      iconCopied: 'ph:check',
    },
    headings: {
      icon: 'ph:link',
    },
  },
})
