<script setup>
const props = defineProps(['isGrid', 'col'])
</script>

<template>
  <section class="preview" :style="props.isGrid ? {display: 'grid', gridTemplateColumns: `repeat(${props.col}, 1fr)`} : {}">
    <slot></slot>
  </section>
</template>

<style>
  @import "https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/index.css";
  :root {
    --ods-font-family-base: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --vp-c-brand: #f42550;
  }
  .preview {
    border: thin solid var(--vp-c-divider-light);
    border-radius: 5px;
    margin: 20px 0 0;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }

</style>
