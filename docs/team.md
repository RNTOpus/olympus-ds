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
      { icon: 'twitter', link: 'https://twitter.com/rnt_dev' },
      { icon: 'linkedin', link: 'https://twitter.com/rnt_dev' }
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
