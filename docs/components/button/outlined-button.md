# Outlined Button

## Usage

```html
<ods-outlined-button> Label </ods-outlined-button>
```

```js
import '@olympus/components/outlined-button'
```

> React

```jsx
import { OdsOutlinedButton } from '@olympus/components/react/outlined-button'
const App = () => <OdsOutlinedButton> Label </OdsOutlinedButton>
```

## Examples

### Variants

> Use the `variant` attribute to change a button's color.<br />**Default:** Primary<br />

<Preview>
  <ods-outlined-button>Primary</ods-outlined-button>
  <ods-outlined-button variant="danger">Danger</ods-outlined-button>
  <ods-outlined-button variant="warning">Warning</ods-outlined-button>
  <ods-outlined-button variant="success">Success</ods-outlined-button>
</Preview>

```html
<ods-outlined-button>Primary</ods-outlined-button>
<ods-outlined-button variant="danger">Danger</ods-outlined-button>
<ods-outlined-button variant="warning">Warning</ods-outlined-button>
<ods-outlined-button variant="success">Success</ods-outlined-button>
```

> React

```jsx
import { OdsOutlinedButton } from '@olympus/components/react/outlined-button'
const App = () => (
  <>
    <OdsOutlinedButton>Primary</OdsOutlinedButton>
    <OdsOutlinedButton variant="danger">Danger</OdsOutlinedButton>
    <OdsOutlinedButton variant="warning">Warning</OdsOutlinedButton>
    <OdsOutlinedButton variant="success">Success</OdsOutlinedButton>
  </>
)
```

### Size

> Use the `size` attribute to change a button's size<br />**Default:** Normal<br />

<Preview>
  <ods-outlined-button size="small">Small</ods-outlined-button>
  <ods-outlined-button size="medium">Medium</ods-outlined-button>
  <ods-outlined-button size="normal">Normal</ods-outlined-button>
</Preview>

```html
<ods-outlined-button size="small">Small</ods-outlined-button>
<ods-outlined-button size="medium">Medium</ods-outlined-button>
<ods-outlined-button size="normal">Normal</ods-outlined-button>
```

> React

```jsx
import { OdsOutlinedButton } from '@olympus/components/react/outlined-button'
const App = () => (
  <>
    <OdsOutlinedButton size="small">Small</OdsOutlinedButton>
    <OdsOutlinedButton size="medium">Medium</OdsOutlinedButton>
    <OdsOutlinedButton size="normal">Normal</OdsOutlinedButton>
  </>
)
```

### Rounded

> Use the `rounded` attribute to change the rounded shape of the button<br />**Default:** Standard

<Preview>
  <ods-outlined-button rounded="standard">Standard</ods-outlined-button>
  <ods-outlined-button rounded="none">None</ods-outlined-button>
  <ods-outlined-button rounded="pill">Pill</ods-outlined-button>
  <ods-outlined-button rounded="circle">+</ods-outlined-button>
</Preview>

```html
<ods-outlined-button rounded="standard">Standard</ods-outlined-button>
<ods-outlined-button rounded="none">None</ods-outlined-button>
<ods-outlined-button rounded="pill">Pill</ods-outlined-button>
<ods-outlined-button rounded="circle">+</ods-outlined-button>
```

> React

```jsx
import { OdsOutlinedButton } from '@olympus/components/react/outlined-button'
const App = () => (
  <>
    <OdsOutlinedButton rounded="standard">Standard</OdsOutlinedButton>
    <OdsOutlinedButton rounded="none">None</OdsOutlinedButton>
    <OdsOutlinedButton rounded="pill">Pill</OdsOutlinedButton>
    <OdsOutlinedButton rounded="circle">+</OdsOutlinedButton>
  </>
)
```

### Disabled

> Use the `disabled` attribute to disable a button.

<Preview>
  <ods-outlined-button disabled>Primary</ods-outlined-button>
  <ods-outlined-button variant="danger" disabled>Danger</ods-outlined-button>
  <ods-outlined-button variant="warning" disabled>Warning</ods-outlined-button>
  <ods-outlined-button variant="success" disabled>Success</ods-outlined-button>
</Preview>

```html
<ods-outlined-button disabled>Primary</ods-outlined-button>
<ods-outlined-button variant="danger" disabled>Danger</ods-outlined-button>
<ods-outlined-button variant="warning" disabled>Warning</ods-outlined-button>
<ods-outlined-button variant="success" disabled>Success</ods-outlined-button>
```

> React

```jsx
import { OdsOutlinedButton } from '@olympus/components/react/outlined-button'
const App = () => (
  <>
    <OdsOutlinedButton disabled>Primary</OdsOutlinedButton>
    <OdsOutlinedButton variant="danger" disabled>
      Danger
    </OdsOutlinedButton>
    <OdsOutlinedButton variant="warning" disabled>
      Warning
    </OdsOutlinedButton>
    <OdsOutlinedButton variant="success" disabled>
      Success
    </OdsOutlinedButton>
  </>
)
```

### Fully

> Use the `fully` attribute to apply 100% width to the button.

<Preview is-grid="true">
  <ods-outlined-button fully>Primary</ods-outlined-button>
  <ods-outlined-button variant="danger" fully>Danger</ods-outlined-button>
  <ods-outlined-button variant="warning" fully>Warning</ods-outlined-button>
  <ods-outlined-button variant="success" fully>Success</ods-outlined-button>
</Preview>

```html
<ods-outlined-button fully>Primary</ods-outlined-button>
<ods-outlined-button variant="danger" fully>Danger</ods-outlined-button>
<ods-outlined-button variant="warning" fully>Warning</ods-outlined-button>
<ods-outlined-button variant="success" fully>Success</ods-outlined-button>
```

> React

```jsx
import { OdsOutlinedButton } from '@olympus/components/react/outlined-button'
const App = () => (
  <>
    <OdsOutlinedButton fully>Primary</OdsOutlinedButton>
    <OdsOutlinedButton variant="danger" fully>
      Danger
    </OdsOutlinedButton>
    <OdsOutlinedButton variant="warning" fully>
      Warning
    </OdsOutlinedButton>
    <OdsOutlinedButton variant="success" fully>
      Success
    </OdsOutlinedButton>
  </>
)
```

### Slots

> To add a label to the button, just define the outlined or some html element. <br />Use the `prefix` and `suffix` slots to add icons.

<Preview>
  <ods-outlined-button rounded="standard">
    <span class="material-symbols-outlined" style="display: flex; padding: 0"> settings </span>
  </ods-outlined-button>
  <ods-outlined-button rounded="standard">
    <span class="material-symbols-outlined" slot="prefix"> settings </span>
    Settings
  </ods-outlined-button>
  <ods-outlined-button rounded="standard">
    <span>Next</span>
    <span class="material-symbols-outlined" slot="suffix"> chevron_right </span>
  </ods-outlined-button>
  <ods-outlined-button rounded="standard">
    <span class="material-symbols-outlined" slot="prefix"> link </span>
    Open
    <span class="material-symbols-outlined" slot="suffix" style="font-size: 20px"> open_in_new </span>
  </ods-outlined-button>
</Preview>

```html
<ods-outlined-button>
  <span class="mso" style="display: flex; padding: 0"> settings </span>
</ods-outlined-button>
<ods-outlined-button>
  <span class="mso" slot="prefix"> settings </span>
  Settings
</ods-outlined-button>
<ods-outlined-button>
  <span>Next</span>
  <span class="mso" slot="suffix"> chevron_right </span>
</ods-outlined-button>
<ods-outlined-button>
  <span class="mso" slot="prefix"> link </span>
  Open
  <span class="mso" slot="suffix" style="font-size: 20px"> open_in_new </span>
</ods-outlined-button>
```

> React

```jsx
import { OdsOutlinedButton } from '@olympus/components/react/outlined-button'
const App = () => (
  <>
    <OdsOutlinedButton>
      <span class="mso" style="display: flex; padding: 0">
        settings
      </span>
    </OdsOutlinedButton>
    <OdsOutlinedButton>
      <span class="mso" slot="prefix">
        settings
      </span>
      Settings
    </OdsOutlinedButton>
    <OdsOutlinedButton>
      <span>Next</span>
      <span class="mso" slot="suffix">
        chevron_right
      </span>
    </OdsOutlinedButton>
    <OdsOutlinedButton>
      <span class="mso" slot="prefix">
        link
      </span>
      Open
      <span class="mso" slot="suffix" style="font-size: 20px">
        open_in_new
      </span>
    </OdsOutlinedButton>
  </>
)
```

::: tip Material Icon
In the examples above, Material Symbols was used,
`class=mso` equal `class=material-symbols-outlined`
:::
