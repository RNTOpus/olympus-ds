# @olympus/button

This component was created with [Web Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components) for use in the technologies below:

![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Badge](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Badge](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00)

## Installation

With ([npm](https://www.npmjs.com/)):

```bash dark
npm install @olympus/button
```

Or [Yarn](https://yarnpkg.com/en/):

```bash dark
yarn add @olympus/button
```

### Use:

```js dark
import '@olympus/button';
```

> **Attention:** Import **Olympus** tokens or overwrite with your own values<br />.
> [Learn more about tokens and see how to customize them]().

```css dark
@import '~@olympus/design-tokens/index.css';
```

## Summary

- [Use in **Angular**](#angular)
- [Use in **Vue**](#vue)
- [Use in **Svelte**](#svelte)

## React

> Para react utilize a biblioteca [`@olympus/react-components`]()

## Angular

> To use **Web Components** in Angular.<br />Add **CUSTOM_ELEMENTS_SCHEMA** in `@NgModule.schemas`, as example below:

```js dark
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
...
@NgModule({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  ...
})
export class AppModule { }

```

> Usage example in **ANGULAR**:

```typescript dark
import '@olympus/button';

@Component({
  selector: 'my-component',
  template: `<ods-button />`,
  styleUrls: ['./my.component.css'],
})
export class MyComponent {}
```

## Vue

> To use **Web Components** in Vue.<br />Add **isCustomElement** in `compilerOptions`, as example below:<br />[Official documentation](https://vuejs.org/guide/extras/web-components.html)

**In-Browser config:**

```js dark
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('-');
```

**Vite config:**

```js dark
import vue from '@vitejs/plugin-vue';
export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
  ],
};
```

**Vue Cli config:**

```js dark
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
          isCustomElement: (tag) => tag.startsWith('ion-'),
        },
      }));
  },
};
```

> Usage example in **VUE**:

```javascript dark
<script setup>
  import { reactive } from 'vue'
  import '@olympus/button';
</script>
<template>
  <ods-button />
</template>
<style>
  @import "@olympus/design-tokens/index.css";
</style>
```

## Svelte

> No configuration required to use **Web Components** in Svelte, see an example of usage:

```javascript dark
  <script>
    import "@olympus/design-tokens/index.css";
    import '@olympus/button';
  </script>
  <ods-button />
```
