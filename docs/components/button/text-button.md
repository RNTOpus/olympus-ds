# Text Button

## Usage

```html
<ods-text-button> Label </ods-text-button>
```

```js
import '@olympus/components/text-button'
```

> React

```jsx
import { OdsTextButton } from '@olympus/components/react/text-button'
const App = () => <OdsTextButton> Label </OdsTextButton>
```

## Examples

### Variants

> Use the `variant` attribute to change a button's color.<br />**Default:** Primary<br />

<Preview>
  <ods-text-button>Primary</ods-text-button>
  <ods-text-button variant="danger">Danger</ods-text-button>
  <ods-text-button variant="warning">Warning</ods-text-button>
  <ods-text-button variant="success">Success</ods-text-button>
</Preview>

```html
<ods-text-button>Primary</ods-text-button>
<ods-text-button variant="danger">Danger</ods-text-button>
<ods-text-button variant="warning">Warning</ods-text-button>
<ods-text-button variant="success">Success</ods-text-button>
```

> React

```jsx
import { OdsTextButton } from '@olympus/components/react/text-button'
const App = () => (
  <>
    <OdsTextButton>Primary</OdsTextButton>
    <OdsTextButton variant="danger">Danger</OdsTextButton>
    <OdsTextButton variant="warning">Warning</OdsTextButton>
    <OdsTextButton variant="success">Success</OdsTextButton>
  </>
)
```

### Size

> Use the `size` attribute to change a button's size<br />**Default:** Normal<br />

<Preview>
  <ods-text-button size="small">Small</ods-text-button>
  <ods-text-button size="medium">Medium</ods-text-button>
  <ods-text-button size="normal">Normal</ods-text-button>
</Preview>

```html
<ods-text-button size="small">Small</ods-text-button>
<ods-text-button size="medium">Medium</ods-text-button>
<ods-text-button size="normal">Normal</ods-text-button>
```

> React

```jsx
import { OdsTextButton } from '@olympus/components/react/text-button'
const App = () => (
  <>
    <OdsTextButton size="small">Small</OdsTextButton>
    <OdsTextButton size="medium">Medium</OdsTextButton>
    <OdsTextButton size="normal">Normal</OdsTextButton>
  </>
)
```

### Disabled

> Use the `disabled` attribute to disable a button.

<Preview>
  <ods-text-button disabled>Primary</ods-text-button>
  <ods-text-button variant="danger" disabled>Danger</ods-text-button>
  <ods-text-button variant="warning" disabled>Warning</ods-text-button>
  <ods-text-button variant="success" disabled>Success</ods-text-button>
</Preview>

```html
<ods-text-button disabled>Primary</ods-text-button>
<ods-text-button variant="danger" disabled>Danger</ods-text-button>
<ods-text-button variant="warning" disabled>Warning</ods-text-button>
<ods-text-button variant="success" disabled>Success</ods-text-button>
```

> React

```jsx
import { OdsTextButton } from '@olympus/components/react/text-button'
const App = () => (
  <>
    <OdsTextButton disabled>Primary</OdsTextButton>
    <OdsTextButton variant="danger" disabled>
      Danger
    </OdsTextButton>
    <OdsTextButton variant="warning" disabled>
      Warning
    </OdsTextButton>
    <OdsTextButton variant="success" disabled>
      Success
    </OdsTextButton>
  </>
)
```

### Slots

> To add a label to the button, just define the text or some html element. <br />Use the `prefix` and `suffix` slots to add icons.

<Preview>
  <ods-text-button rounded="standard">
    <span class="material-symbols-outlined" style="display: flex; padding: 0"> settings </span>
  </ods-text-button>
  <ods-text-button rounded="standard">
    <span class="material-symbols-outlined" slot="prefix"> settings </span>
    Settings
  </ods-text-button>
  <ods-text-button rounded="standard">
    <span>Next</span>
    <span class="material-symbols-outlined" slot="suffix"> chevron_right </span>
  </ods-text-button>
  <ods-text-button rounded="standard">
    <span class="material-symbols-outlined" slot="prefix"> link </span>
    Open
    <span class="material-symbols-outlined" slot="suffix" style="font-size: 20px"> open_in_new </span>
  </ods-text-button>
</Preview>

```html
<ods-text-button>
  <span class="mso" style="display: flex; padding: 0"> settings </span>
</ods-text-button>
<ods-text-button>
  <span class="mso" slot="prefix"> settings </span>
  Settings
</ods-text-button>
<ods-text-button>
  <span>Next</span>
  <span class="mso" slot="suffix"> chevron_right </span>
</ods-text-button>
<ods-text-button>
  <span class="mso" slot="prefix"> link </span>
  Open
  <span class="mso" slot="suffix" style="font-size: 20px"> open_in_new </span>
</ods-text-button>
```

> React

```jsx
import { OdsTextButton } from '@olympus/components/react/text-button'
const App = () => (
  <>
    <OdsTextButton>
      <span class="mso" style="display: flex; padding: 0">
        settings
      </span>
    </OdsTextButton>
    <OdsTextButton>
      <span class="mso" slot="prefix">
        settings
      </span>
      Settings
    </OdsTextButton>
    <OdsTextButton>
      <span>Next</span>
      <span class="mso" slot="suffix">
        chevron_right
      </span>
    </OdsTextButton>
    <OdsTextButton>
      <span class="mso" slot="prefix">
        link
      </span>
      Open
      <span class="mso" slot="suffix" style="font-size: 20px">
        open_in_new
      </span>
    </OdsTextButton>
  </>
)
```

::: tip Material Icon
In the examples above, Material Symbols was used,
`class=mso` equal `class=material-symbols-outlined`
:::
