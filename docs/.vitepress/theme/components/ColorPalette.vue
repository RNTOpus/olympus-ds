<script setup>
import * as colors from 'https://cdn.jsdelivr.net/npm/olympus-ds-design-tokens@0.0.8/lib/color.js'
import { ref } from 'vue'
const categories = ref(['Primary', 'Success', 'Warning', 'Danger', 'Neutral'])
const getColors = category => {
  return Object.keys(colors)
    .filter(color => color.includes(category))
    .map(color => ({
      name: category,
      key: color,
      scale: color.replace(`color${category}`, ''),
      value: colors[color]
    }))
    .sort((a, b) => a.scale - b.scale)
}
</script>

<template>
  <section class="color-pallette">
    <div class="item" v-for="(category, index) in categories">
      <div class="info">
        <div class="title">
          <strong>{{ category }}</strong>
        </div>
        <div class="type">
          <img src="/icons/css.png" class="icon" alt="CSS" />
          <small>--ods-color-{{ category.toLowerCase() }}-{n}</small>
        </div>
        <div class="type">
          <img src="/icons/sass.png" class="icon" alt="SASS" />
          <small>$ods-color-{{ category.toLowerCase() }}-{n}</small>
        </div>
        <div class="type">
          <img src="/icons/js.png" class="icon" alt="javascript" />
          <small>color{{ category }}{n}</small>
        </div>
      </div>
      <div class="colors">
        <div class="color" v-for="(color, index) in getColors(category)">
          <div class="rect" :style="{ backgroundColor: color.value }"></div>
          <div class="scale">{{ color.scale }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.color-pallette {
  border: thin solid var(--vp-c-divider-light);
  border-radius: 5px;
  margin: 20px 0 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.color-pallette .item {
  display: flex;
  gap: 2rem;
}
.color-pallette .item .info {
  flex-shrink: 0;
}

.color-pallette .item .info .type {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.color-pallette .item .info .type .icon {
  width: 15px;
}

.color-pallette .item .info .type small {
  display: block;
  color: var(--vp-c-text-2);
}

.color-pallette .item .colors {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  column-gap: 0.25rem;
  flex-wrap: wrap;
  flex: 1;
}

.color-pallette .item .colors .color .scale {
  font-size: 12px;
  text-align: center;
  color: var(--vp-c-text-2);
}

.color-pallette .item .colors .color .rect {
  width: 100%;
  height: 40px;
  border-radius: 5px;
}
</style>
