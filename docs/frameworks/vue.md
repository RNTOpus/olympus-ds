# Vue

## Configuration

::: tip
Add `isCustomElement` in `compilerOptions`, as example below:
:::

**In-Browser config:**

```js
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('-');
```

**Vite config:**

```js
import vue from '@vitejs/plugin-vue';
export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'), // [!code focus]
        },
      },
    }),
  ],
};
```

**Vue Cli config:**

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: (tag) => tag.startsWith('ion-'), // [!code focus]
        },
      }));
  },
};
```

[Official documentation](https://vuejs.org/guide/extras/web-components.html)

## Usage

::: info Example
Button component
:::


```vue
<script setup>
  import '@olympus/components/button'; // [!code ++]
</script>
<template>
  <ods-button /> // [!code ++]
</template>
<style>
  @import "@olympus/tokens/index.css"; // [!code ++]
</style>
```

## Tokens

::: warning Styles
Import **Olympus** tokens or rewrite tokens with your own values
:::

```css
@import "@olympus/tokens/index.css";
```
