<script setup>
  import { ref, onMounted, computed } from 'vue';
  import { getHighlighter, setCDN } from 'shiki'
  const props = defineProps(['lang', 'content' ]);
  const code = ref(null)

  setCDN('https://unpkg.com/shiki/')

  onMounted(async () => {
  if (!code.value) {
    const highlighter = await getHighlighter({theme: 'dark-plus'})
    code.value = highlighter.codeToHtml(props.content, { lang: props.lang })
  }
})
</script>

<template>
  <div class="language-bash" :class="'language-'+ lang">
      <button class="copy"></button>
      <span class="lang">{{lang}}</span>
      <span class="code" v-html="code"></span>
  </div>
</template>

<style>
  .tab {
    display: none;
  }
  .tab.active {
    display: block;
  }
  .vp-doc pre[class*='language-'] {
    position: relative;
    margin: 16px -24px;
    background-color: var(--vp-code-block-bg);
    overflow-x: auto;
    transition: background-color 0.5s;
  }
</style>
