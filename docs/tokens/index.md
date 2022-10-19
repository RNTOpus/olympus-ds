<script setup>
  const version = '0.0.1'
  const cdn = `https://cdn.jsdelivr.net/npm/@olympus/tokens@${version}/index.js`
  const packageName = '@olympus/tokens'
</script>

# Tokens
<a style="color:var(--vp-c-brand)" href="#" :title="`${packageName}`" target="_blank">{{packageName}}</a>
<br />
<small><b>latest:</b> {{ version }} </small>

## Installation

```bash
npm install @olympus/tokens
```

or

```bash
yarn add @olympus/tokens
```

## Usage

You can use the `@olympus/tokens` module in your JavaScript and CSS/SASS.

### CSS

You can get all tokens by doing:

```css
@import '@olympus/tokens/index.css';
```

or individually by doing:

```css
@import '@olympus/tokens/css/colors';
```

These variables follow the naming convention: `--{prefix}-{category}-{type}-{variation}`.
For example:

```css
--ods-border-stroke-lg;
--ods-color-neutral-50;
--ods-font-family-base;
```

### Sass

You can get all tokens by doing:

```scss
@import '@olympus/tokens';
```

or individually by doing:

```scss
@import '@olympus/tokens/scss/colors';
```

These variables follow the naming convention: `${prefix}-{category}-{type}-{variation}`.
For example:

```scss
$ods-border-stroke-lg;
$ods-color-neutral-50;
$ods-font-family-base;
```

### JavaScript

For JavaScript, you can import and use this module by doing the following in
your code:

```js
// ESM
import { borderStrokeLg, colorNeutral50, fontFamilyBase } from '@olympus/tokens';

// CommonJS
const { borderStrokeLg, colorNeutral50, fontFamilyBase } = require('@olympus/tokens');
```

or individually by doing:

```js
// ESM
import { colorNeutral50 } from '@olympus/tokens/lib/color';

// CommonJS
const { colorNeutral50 } = require('@olympus/tokens/lib/color');
```

## Tokens

| Category | Types | Variations |
| :--- | :--- | :--- | 
| border | stroke | none / xxs / xs / sm / md / lg
| color | neutral | 00-100 / white / black / base
| color | primary <br /> success <br /> warning <br /> danger | 00-100 / base
| font | family | base
| font | size | tiny / sm / md / lg / xl / xxl / xxxl / mega / ultra / giga / base
| font | weight | 100-900 / thin / light / regular / bold / black
| opacity | level | semiopaque / intense / medium / light / semitransparent
| radii | - | none / xxs / xs / sm / md / lg / circular / pill
| size | - | nano / xxxs/ xxs / xs /sm / md / lg / xl / xxl / xxxl / mega / ultra / giga
| spacing | - | nano / xxxs/ xxs / xs /sm / md / lg / xl / xxl / xxxl / mega / ultra / giga
| time | transition | short / base / long / xl
| time | delay <br /> duration | short / base / long
| zIndex | - | min / 1-9 / overlay / max
