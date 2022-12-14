# @olympus-ds/design-tokens

> Design tokens for using the Olympus Design System

## Getting started

To install `@olympus/design-tokens` in your project, you will need to run the following
command using [npm](https://www.npmjs.com/):

```bash
npm install @olympus/design-tokens
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add @olympus/design-tokens
```

## Usage

You can use the `@olympus/design-tokens` module in your JavaScript and CSS/SASS.

### CSS

You can get all tokens by doing:

```css
@import '@olympus/design-tokens/index.css';
```

or individually by doing:

```css
@import '@olympus/design-tokens/css/colors';
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
@import '@olympus/design-tokens';
```

or individually by doing:

```scss
@import '@olympus/design-tokens/scss/colors';
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
import { borderStrokeLg, colorNeutral50, fontFamilyBase } from '@olympus/design-tokens';

// CommonJS
const { borderStrokeLg, colorNeutral50, fontFamilyBase } = require('@olympus/design-tokens');
```

or individually by doing:

```js
// ESM
import { colorNeutral50 } from '@olympus/design-tokens/lib/color';

// CommonJS
const { colorNeutral50 } = require('@olympus/design-tokens/lib/color');
```

### Design Tokens

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







