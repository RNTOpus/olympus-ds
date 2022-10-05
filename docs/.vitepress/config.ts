import { defineConfig } from 'vitepress'

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

  themeConfig: {
    logo: '/opus-brand.png',
    footer: {
      message: ``,
      copyright: 'Copyright © 2022-present Opus Software'
    },
    nav: [
      { text: 'Getting Started', link: '/getting-started/', activeMatch: '/getting-started/' },
      { text: 'Frameworks', link: '/frameworks/', activeMatch: '/frameworks/' },
      { text: 'Components', link: '/components/', activeMatch: '/components/' },
      { text: 'Tokens', link: '/tokens/', activeMatch: '/tokens/' }
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            {
              text: 'Overview',
              link: '/getting-started/'
            },
            {
              text: 'Installation',
              link: '/getting-started/installation'
            },
            {
              text: 'Usage',
              link: '/getting-started/usage'
            }
          ]
        }
      ],
      '/frameworks/': [
        {
          text: 'Frameworks',
          items: [
            {
              text: 'Angular',
              link: '/frameworks/angular'
            },
            {
              text: 'React',
              link: '/frameworks/react'
            },
            {
              text: 'Vue',
              link: '/frameworks/vue'
            },
            {
              text: 'Svelte',
              link: '/frameworks/svelte'
            }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            {
              text: 'Button',
              link: '/components/button'
            }
          ]
        }
      ],
      '/tokens/': [
        {
          text: 'Tokens',
          items: [
            {
              text: 'Color',
              link: '/tokens/color'
            }
          ]
        }
      ]
    }
  }
})
