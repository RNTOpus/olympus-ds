# Getting Started

## Packages

| Name       |           Description             | version |
| :---------- | :--------------------------------------------------------------------: | :--------
| [`tokens`](../tokens/)  |  Design tokens   | 0.0.1
| [`components`](../components/)  |  Web Components   |  0.0.1

## Quick start

Add tokens to your page

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@olympus/design-tokens@{VERSION}/index.css">
```
Add components as a module to your page

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@olympus/components@{VERSION}/index.js"></script>
```

If you prefer add components in UMD format

```html
<script src="https://cdn.jsdelivr.net/npm/@olympus/components@{VERSION}/umd/index.min.js"></script>
```

## Installation

```bash
npm install @olympus/{packageName}
```

or

```bash
yarn add @olympus/{packageName}
```

## Usage

> Script
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@olympus/{packageName}@{version}/index.js"></script>
```
> Import
```js
import "https://cdn.jsdelivr.net/npm/@olympus/{packageName}@{version}/index.js"
```
> Bundler
```js
import "@olympus/{packageName}"
```

> React
```jsx
import * as OdsReactComponents from "@olympus/components/react"
```



