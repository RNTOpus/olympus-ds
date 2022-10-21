# Button

## Usage

```html
<ods-button> Label </ods-button>
```

```js
import '@olympus/components/button'
```

> React

```jsx
import { OdsButton } from '@olympus/components/react/button'
const App = () => <OdsButton> Label </OdsButton>
```

## Examples

<Preview>
  <ods-button>Filled</ods-button>
  <ods-button outline>Outlined</ods-button>
</Preview>

```html
<ods-button>Filled</ods-button>
<ods-button outline>Outline</ods-button>
```

> React

```jsx
import { OdsButton } from '@olympus/components/react/button'
const App = () => (
  <>
    <OdsButton>Filled</OdsButton>
    <OdsButton outline>Outline</OdsButton>
  </>
)
```

### Size

> Use the `size` attribute to change a button's size<br />**Default:** Normal<br />

<Preview>
  <ods-button size="small">Small</ods-button>
  <ods-button size="medium">Medium</ods-button>
  <ods-button size="normal">Normal</ods-button>
</Preview>

<Preview>
  <ods-button size="small" outline>Small</ods-button>
  <ods-button size="medium" outline>Medium</ods-button>
  <ods-button size="normal" outline>Normal</ods-button>
</Preview>

```html
<ods-button size="small">Small</ods-button>
<ods-button size="medium">Medium</ods-button>
<ods-button size="normal">Normal</ods-button>
```

> React

```jsx
import { OdsButton } from '@olympus/components/react/button'
const App = () => (
  <>
    <OdsButton size="small">Small</OdsButton>
    <OdsButton size="medium">Medium</OdsButton>
    <OdsButton size="normal">Normal</OdsButton>
  </>
)
```

### Rounded

> Use the `rounded` attribute to change the rounded shape of the button<br />**Default:** Standard<br />

<Preview>
  <ods-button rounded="standard">Standard</ods-button>
  <ods-button rounded="none">None</ods-button>
  <ods-button rounded="pill">Pill</ods-button>
  <ods-button rounded="circle">+</ods-button>
</Preview>

<Preview>
  <ods-button rounded="standard" outline>Standard</ods-button>
  <ods-button rounded="none" outline>None</ods-button>
  <ods-button rounded="pill" outline>Pill</ods-button>
  <ods-button rounded="circle" outline>+</ods-button>
</Preview>

```html
<ods-button rounded="standard">Standard</ods-button>
<ods-button rounded="none">None</ods-button>
<ods-button rounded="pill">Pill</ods-button>
<ods-button rounded="circle">+</ods-button>
```

> React

```jsx
import { OdsButton } from '@olympus/components/react/button'
const App = () => (
  <>
    <OdsButton rounded="standard">Standard</OdsButton>
    <OdsButton rounded="none">None</OdsButton>
    <OdsButton rounded="pill">Pill</OdsButton>
    <OdsButton rounded="circle">+</OdsButton>
  </>
)
```

### Disabled

> Use the `disabled` attribute to disable a button.

<Preview>
  <ods-button disabled>Basic</ods-button>
  <ods-button disabled outline>Outline</ods-button>
</Preview>

```html
<ods-button disabled>Basic</ods-button>
```

> React

```jsx
import { OdsButton } from '@olympus/components/react/button'
const App = () => <OdsButton disabled>Basic</OdsButton>
```

### Fully

> Use the `fully` attribute to apply 100% width to the button.

<Preview is-grid="true">
  <ods-button fully>Basic</ods-button>
  <ods-button fully outline>Outline</ods-button>
</Preview>

```html
<ods-button fully>Basic</ods-button>
```

> React

```jsx
import { OdsButton } from '@olympus/components/react/button'
const App = () => <OdsButton fully>Basic</OdsButton>
```

### Slots

> To add a label to the button, just define the text or some html element. <br />Use the `prefix` and `suffix` slots to add icons.

<Preview>
  <ods-button rounded="standard">
    <span class="material-symbols-outlined" style="display: flex; padding: 0"> settings </span>
  </ods-button>
  <ods-button rounded="standard">
    <span class="material-symbols-outlined" slot="prefix"> settings </span>
    Settings
  </ods-button>
  <ods-button rounded="standard">
    <span>Next</span>
    <span class="material-symbols-outlined" slot="suffix"> chevron_right </span>
  </ods-button>
  <ods-button rounded="standard">
    <span class="material-symbols-outlined" slot="prefix"> link </span>
    Open
    <span class="material-symbols-outlined" slot="suffix" style="font-size: 20px"> open_in_new </span>
  </ods-button>
</Preview>

<Preview>
  <ods-button rounded="standard" outline>
    <span class="material-symbols-outlined" style="display: flex; padding: 0"> settings </span>
  </ods-button>
  <ods-button rounded="standard" outline>
    <span class="material-symbols-outlined" slot="prefix"> settings </span>
    Settings
  </ods-button>
  <ods-button rounded="standard" outline>
    <span>Next</span>
    <span class="material-symbols-outlined" slot="suffix"> chevron_right </span>
  </ods-button>
  <ods-button rounded="standard" outline>
    <span class="material-symbols-outlined" slot="prefix"> link </span>
    Open
    <span class="material-symbols-outlined" slot="suffix" style="font-size: 20px"> open_in_new </span>
  </ods-button>
</Preview>

```html
<ods-button>
  <span class="mso" style="display: flex; padding: 0"> settings </span>
</ods-button>
<ods-button>
  <span class="mso" slot="prefix"> settings </span>
  Settings
</ods-button>
<ods-button>
  <span>Next</span>
  <span class="mso" slot="suffix"> chevron_right </span>
</ods-button>
<ods-button>
  <span class="mso" slot="prefix"> link </span>
  Open
  <span class="mso" slot="suffix" style="font-size: 20px"> open_in_new </span>
</ods-button>
```

> React

```jsx
import { OdsButton } from '@olympus/components/react/button'
const App = () => (
  <>
    <OdsButton>
      <span class="mso" style="display: flex; padding: 0">
        settings
      </span>
    </OdsButton>
    <OdsButton>
      <span class="mso" slot="prefix">
        settings
      </span>
      Settings
    </OdsButton>
    <OdsButton>
      <span>Next</span>
      <span class="mso" slot="suffix">
        chevron_right
      </span>
    </OdsButton>
    <OdsButton>
      <span class="mso" slot="prefix">
        link
      </span>
      Open
      <span class="mso" slot="suffix" style="font-size: 20px">
        open_in_new
      </span>
    </OdsButton>
  </>
)
```

::: tip Material Icon
In the examples above, Material Symbols was used,
`class=mso` equal `class=material-symbols-outlined`
:::
