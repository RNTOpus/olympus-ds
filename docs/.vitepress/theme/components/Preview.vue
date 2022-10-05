<script setup>
const props = defineProps(['isGrid', 'col'])
</script>

<template>
  <section class="preview" :style="props.isGrid ? {display: 'grid', gridTemplateColumns: `repeat(${props.col}, 1fr)`} : {}">
    <slot></slot>
  </section>
</template>

<style>
  .preview {
    border: thin solid var(--vp-c-divider-light);
    border-radius: 5px;
    margin: 20px 0 0;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
</style>
