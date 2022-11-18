import { defineConfig } from 'vitepress'
import path from 'path'

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
            },
            {
              text: 'Packages',
              link: '/getting-started/packages'
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
              text: 'Buttons',
              link: '/components/buttons/overview'
            },
            {
              text: 'Fields',
              link: '/components/fields/overview',
              items: [
                {
                  text: 'Input',
                  link: '/components/fields/input/overview',
                  items: [
                    {
                      text: 'Overview',
                      link: '/components/fields/input/overview'
                    },
                    {
                      text: 'Outline',
                      link: '/components/fields/input/outline'
                    },
                    {
                      text: 'Fill',
                      link: '/components/fields/input/fill'
                    },
                    {
                      text: 'Inline',
                      link: '/components/fields/input/inline'
                    },
                    {
                      text: 'Square',
                      link: '/components/fields/input/square'
                    },
                    {
                      text: 'Pill',
                      link: '/components/fields/input/pill'
                    }
                  ]
                },
                {
                  text: 'Textarea',
                  link: '/components/fields/textarea/overview',
                  items: [
                    {
                      text: 'Overview',
                      link: '/components/fields/textarea/overview'
                    },
                    {
                      text: 'Outline',
                      link: '/components/fields/textarea/outline'
                    },
                    {
                      text: 'Fill',
                      link: '/components/fields/textarea/fill'
                    },
                    {
                      text: 'Inline',
                      link: '/components/fields/textarea/inline'
                    },
                    {
                      text: 'Square',
                      link: '/components/fields/textarea/square'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/tokens/': [
        {
          text: 'Tokens',
          items: [
            {
              text: 'Border',
              link: '/tokens/border'
            },
            {
              text: 'Color',
              link: '/tokens/color'
            },
            {
              text: 'Elevation',
              link: '/tokens/elevation'
            },
            {
              text: 'Opacity',
              link: '/tokens/opacity'
            },
            {
              text: 'Radii',
              link: '/tokens/radii'
            },
            {
              text: 'Size',
              link: '/tokens/size'
            },
            {
              text: 'Spacing',
              link: '/tokens/spacing'
            },
            {
              text: 'Time',
              link: '/tokens/time'
            },
            {
              text: 'Typography',
              link: '/tokens/typography'
            },
            {
              text: 'Z-index',
              link: '/tokens/z-index'
            }
          ]
        }
      ]
    }
  }
})
