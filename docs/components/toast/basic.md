# Basic Toast

## Usage

```html
<ods-toast open title="Título"> Corpo da mensagem </ods-toast>
```

```js
import '@olympus/components/toast'
```

> React

```jsx
import { OdsToast } from '@olympus/components/react/toast'
const App = () => (
  <OdsToast open title="Título">
    Corpo da mensagem
  </OdsToast>
)
```

## Variants

> Use the `variant` attribute to change a toast color. **Default:** Primary

<Preview is-grid="true">
  <ods-toast open title="Title" timeout=0 position="relative">Primary</ods-toast>
  <ods-toast open title="Title" timeout=0 position="relative" variant="danger">Danger</ods-toast>
  <ods-toast open title="Title" timeout=0 position="relative" variant="warning">Warning</ods-toast>
  <ods-toast open title="Title" timeout=0 position="relative" variant="success">Success</ods-toast>
</Preview>

```html
<ods-toast title="Title" open>Primary</ods-toast>
<ods-toast title="Title" open variant="danger">Danger</ods-toast>
<ods-toast title="Title" open variant="warning">Warning</ods-toast>
<ods-toast title="Title" open variant="success">Success</ods-toast>
```

> React

```jsx
import { OdsToast } from '@olympus/components/react/toast'
const App = () => (
  <>
    <OdsToast>Primary</OdsToast>
    <OdsToast variant="danger">Danger</OdsToast>
    <OdsToast variant="warning">Warning</OdsToast>
    <OdsToast variant="success">Success</OdsToast>
  </>
)
```

## Position

> Use the `position` attribute to change a toast position in screen<br />**Default:** topRight<br />

### Position based in screen

```html
<ods-toast position="topLeft">TopLeft</ods-toast>
<ods-toast position="topCenter">TopCenter</ods-toast>
<ods-toast position="topRight">TopRight</ods-toast>
<ods-toast position="bottomLeft">BottomLeft</ods-toast>
<ods-toast position="bottomCenter">BottomCenter</ods-toast>
<ods-toast position="bottomRight">BottomRight</ods-toast>
```

### Position relative to parent container

```html
<ods-toast position="relative">Relative</ods-toast>
```

> React

```jsx
import { OdsToast } from '@olympus/components/react/toast'
const App = () => (
  <>
    <OdsToast position="topLeft">TopLeft</OdsToast>
    <OdsToast position="topCenter">TopCenter</OdsToast>
    <OdsToast position="topRight">TopRight</OdsToast>
    <OdsToast position="bottomLeft">BottomLeft</OdsToast>
    <OdsToast position="bottomCenter">BottomCenter</OdsToast>
    <OdsToast position="bottomRight">BottomRight</OdsToast>
    <OdsToast position="relative">Relative</OdsToast>
  </>
)
```

## Timeout

> Use the `timeout` attribute to set how much time the component will be shown in screen in `ms`<br />**Default:** 6000<br />

```html
<ods-toast timeout="3000">TopLeft</ods-toast>
```

> React

```jsx
import { OdsToast } from '@olympus/components/react/toast'
const App = () => (
  <>
    <OdsToast timeout="3000">TopLeft</OdsToast>
  </>
)
```

## Slots

> To add an icon to toast element, use the `icon` slot.

<Preview>
  <ods-toast title="Title" open position="relative" timeout=0>
    <span class="material-symbols-outlined" slot="icon"> info </span>
    Toast Message
  </ods-toast>
</Preview>

```html
<ods-toast title="Title" open position="relative" timeout="0">
  <span class="material-symbols-outlined" slot="icon"> info </span>
  Toast Message
</ods-toast>
```

> React

```jsx
import { OdsToast } from '@olympus/components/react/toast'
const App = () => (
  <>
    <OdsToast title="Title" open position="relative" timeout=0>
      <span class="mso" style="display: flex; padding: 0">
        settings
      </span>
    </OdsToast>
  </>
)
```

::: tip Material Icon
In the examples above, Material Symbols was used,
`class=mso` equal `class=material-symbols-outlined`
:::
