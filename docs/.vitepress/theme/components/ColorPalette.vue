<script setup>
const props = defineProps(['tokens', 'type'])
const getColors = tokenType => {
  return Object.keys(props.tokens)
    .filter(color => color.includes(tokenType))
    .map(color => ({
      name: tokenType,
      key: color,
      scale: color.replace(`color${tokenType}`, ''),
      value: props.tokens[color]
    }))
    .sort((a, b) => a.scale - b.scale)
}
</script>

<template>
  <section class="color-pallette">
    <div class="item">
      <div class="info">
        <div class="title">
          <strong>{{ type }}</strong>
        </div>
        <div class="type">
          <img src="/icons/css.png" class="icon" alt="CSS" />
          <small>--ods-color-{{ type.toLowerCase() }}-{n}</small>
        </div>
        <div class="type">
          <img src="/icons/sass.png" class="icon" alt="SASS" />
          <small>$ods-color-{{ type.toLowerCase() }}-{n}</small>
        </div>
        <div class="type">
          <img src="/icons/js.png" class="icon" alt="javascript" />
          <small>color{{ type }}{n}</small>
        </div>
      </div>
      <div class="colors">
        <div class="color" v-for="(color, index) in getColors(type)" :key="index">
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
