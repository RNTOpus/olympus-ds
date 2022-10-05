import { defineConfig, DefaultTheme } from 'vitepress'

const ogDescription = 'Olympus Design System'
const ogImage = 'https://olympus.dev/og-image.png'
const ogTitle = 'Olympus'
const ogUrl = 'https://olympus.dev'

export default defineConfig({
  title: `Olympus`,
  description: 'Olympus Design System',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/opus-brand.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@olympus' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/opus-brand.png',

    // editLink: {
    //   pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
    //   text: 'Suggest changes to this page'
    // },

    // socialLinks: [
    //   { icon: 'twitter', link: 'https://twitter.com/vite_js' },
    //   { icon: 'discord', link: 'https://chat.vitejs.dev' },
    //   { icon: 'github', link: 'https://github.com/vitejs/vite' }
    // ],

    // algolia: {
    //   appId: '7H67QR5P0A',
    //   apiKey: 'deaab78bcdfe96b599497d25acc6460e',
    //   indexName: 'vitejs',
    //   searchParameters: {
    //     facetFilters: ['tags:en']
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev'
    // },

    // localeLinks: {
    //   text: 'English',
    //   items: [
    //     { text: '简体中文', link: 'https://cn.vitejs.dev' },
    //     { text: '日本語', link: 'https://ja.vitejs.dev' },
    //     { text: 'Español', link: 'https://es.vitejs.dev' }
    //   ]
    // },

    footer: {
      message: `Released under the MIT License.`,
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
