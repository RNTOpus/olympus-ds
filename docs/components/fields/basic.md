# Input

## Usage

```html
<ods-input> Label </ods-button>
```

```js
import '@olympus/components/input'
```

> React

```jsx
import { OdsInput } from '@olympus/components/react/input'
const App = () => <OdsInput> Label </OdsInput>
```

## Examples

<Preview is-grid="true">
  <ods-text-field label="First Name" placeholder="Digite aqui" required staticLabel type="date" />

  <ods-text-field label="Last Name">
    <span slot="helper-text">Ajuda me</span>
  </ods-text-field>

  <ods-text-field label="Phone" value="11986106505">
    <span slot="helper-text-end">(00) 0000-0000</span>
  </ods-text-field>

  <ods-text-field label="Email">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-text-field>

  <ods-text-field label="Document">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>

  <ods-text-field label="Document" disabled>
    <span class="material-symbols-outlined" slot="suffix"> person </span>
  </ods-text-field>

  <ods-text-field label="Document" pill type="date">
    <span class="material-symbols-outlined" slot="left-icon"> person </span>
  </ods-text-field>

  <ods-text-field label="Document" square>
    <span class="material-symbols-outlined" slot="suffix"> person </span>
  </ods-text-field>

  <ods-text-field label="Document" invalid>
    <span class="material-symbols-outlined" slot="suffix"> person </span>
  </ods-text-field>

  <ods-text-field label="Document" valid>
    <span class="material-symbols-outlined" slot="suffix"> person </span>
  </ods-text-field>

  <ods-text-field label="Document" appearance="fill">
    <span class="material-symbols-outlined" slot="suffix"> person </span>
  </ods-text-field>

  <ods-text-field label="Document" appearance="inline">
    <span class="material-symbols-outlined" slot="suffix"> person </span>
  </ods-text-field>

  <ods-text-field label="Document" appearance="inline">
    <span class="material-symbols-outlined" slot="left-icon"> person </span>
  </ods-text-field>

  <ods-text-field label="Document" appearance="inline" type="date" />
</Preview>
