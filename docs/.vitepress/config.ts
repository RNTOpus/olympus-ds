import { defineConfig } from 'vitepress'
import path from 'path'
import { ODS_DOC_NAVIGATION } from './navigation/main'
import { ODS_DOC_SIDEBAR } from './navigation/sidebar'

const ogDescription = 'OlymPUS Design System'
const ogImage = 'https://olympus.dev/og-image.png'
const ogTitle = 'OlymPUS'
const ogUrl = 'https://olympus.dev'


export default defineConfig({
  title: `OlymPUS`,
  description: 'OlymPUS Design System',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/opus-brand.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@olympus' }],
    ['meta', { name: 'theme-color', content: '#f42550' }]
  ],

  vue: {
    reactivityTransform: true
  },

  vite: {
    resolve: {
      alias: [
        {
          find: '@package/components',
          replacement: path.resolve(__dirname, '../../dist/packages/components')
        }
      ]
    }
  },

  themeConfig: {
    logo: '/opus-brand.png',
    nav: ODS_DOC_NAVIGATION,
    sidebar: ODS_DOC_SIDEBAR,
    lastUpdatedText: 'Updated Date',
    editLink: {
      pattern: 'https://bitbucket.org/opusbr/opus-olympus-design-system/src/develop/docs/:path',
      text: 'Suggest changes to this page'
    },
    footer: {
      message: ``,
      copyright: 'Copyright © 2022-present Opus Software'
    }
  }
})
