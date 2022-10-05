<script setup>
  import { ref, onMounted } from 'vue';
  const props = defineProps([ 'active' ]);
</script>

<template>
  <div class="tab vp-doc" :class="(active == 'true') ? 'active' : ''">
    <slot></slot>
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
