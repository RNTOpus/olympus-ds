export const ODS_DOC_NAVIGATION = [
  { text: 'Getting Started', link: '/getting-started/', activeMatch: '/getting-started/' },
  { text: 'Frameworks', link: '/frameworks/', activeMatch: '/frameworks/' },
  {
    text: 'Components',
    activeMatch: '/components/',
    items: [
      { text: 'Overview', link: '/components/' },
      { text: 'Development', link: '/components/development' },
      {
        items: [
          { text: 'Playground', link: 'https://stackblitz.com/@RNTOpus/collections/olympus-ds-examples' },
          {
            text: 'Figma',
            link: 'https://www.figma.com/file/ZH9NtXko3YwOH8PkseGLgd/Olympus-Design-System?node-id=456%3A51&t=ajXLgWOgBXshmfET-0'
          }
        ]
      }
    ]
  },
  {
    text: 'Tokens',
    activeMatch: '/tokens/',
    items: [
      { text: 'Overview', link: '/tokens/' },
      { text: 'Development', link: '/tokens/development' },
      {
        items: [
          {
            text: 'Figma',
            link: 'https://www.figma.com/file/ZH9NtXko3YwOH8PkseGLgd/Olympus-Design-System?node-id=415%3A54&t=ajXLgWOgBXshmfET-0'
          }
        ]
      }
    ]
  },
  {
    text: 'About',
    items: [{ text: 'Team', link: '/team' }]
  }
]
