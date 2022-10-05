<script setup>
import '../../../packages/button/dist/index'
</script>

<template>
  <section class="preview">
    <slot></slot>
  </section>
</template>

<style>
  @import "olympus-ds-design-tokens/index.css";
  :root {
    --ods-font-family-base: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --vp-c-brand: #cb022c
  }
  :root(.dark) {
    --vp-c-brand: #f42550
  }
  .preview {
    border: thin solid var(--vp-c-divider-light);
    border-radius: 5px;
    margin: 20px 0;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
</style>
