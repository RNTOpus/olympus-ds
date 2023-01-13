---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/RNTOpus.png',
    name: 'Renato Andrade',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/RNTOpus' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/rntdesign/' }
    ]
  },
  {
    avatar: 'https://github.com/PauloRTesJr.png',
    name: 'Paulo Roberto Tessarolli Jr',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/PauloRTesJr' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/paulortesjr/' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      We are Opus
    </template>
    <template #lead>
      The development of Olympus is guided by the frontend team at Opus Software.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
