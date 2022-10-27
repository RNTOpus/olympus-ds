# Textarea Field (outline)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-textarea-field label="Label" />
</Preview>

```html
<ods-textarea-field label="Label" />
```

> React

```jsx
const App = () => <OdsTextareaField label="Label" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea-field label="Static Label" staticLabel />
</Preview>

```html
<ods-textarea-field label="Static Label" staticLabel />
```

> React

```jsx
const App = () => <OdsTextareaField label="Static Label" staticLabel />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-textarea-field label="Search" placeholder="find a product by name" />
</Preview>

```html
<ods-textarea-field label="Search" placeholder="find a product by name" />
```

> React

```jsx
const App = () => 
  <OdsTextareaField label="Search" placeholder="find a product by name" />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-textarea-field label="Disabled" disabled />
</Preview>

```html
<ods-textarea-field label="Disabled" disabled />
```

> React

```jsx
const App = () => <OdsTextareaField label="Disabled" disabled />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea-field label="Required" required />
</Preview>

```html
<ods-textarea-field label="Required" required />
```

> React

```jsx
const App = () => <OdsTextareaField label="Disabled" disabled />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea-field label="Name" value="John Doe" clearable />
</Preview>

```html
<ods-textarea-field label="Name" value="John Doe" clearable />
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Name" value="John Doe" clearable />
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-textarea-field label="Valid" valid />
</Preview>

```html
<ods-textarea-field label="Valid" valid />
```

> React

```jsx
const App = () => <OdsTextareaField label="Valid" valid />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-textarea-field label="Invalid" invalid />
</Preview>

```html
<ods-textarea-field label="Invalid" invalid />
```

> React

```jsx
const App = () => <OdsTextareaField label="Invalid" invalid />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-textarea-field label="Left Icon">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Left Icon">
  <span class="icon" slot="left-icon"> email </span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Left Icon">
    <span class="icon" slot="left-icon">
      email
    </span>
  </OdsTextareaField>
)
```

## Right Icon

`slot`

> Use the `right-icon` slot to insert the icon on the right.

<Preview is-grid="true">
  <ods-textarea-field label="Right Icon">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Right Icon">
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Right Icon">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextareaField>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-textarea-field label="Person e-mail">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Person e-mail">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Person e-mail">
    <span class="icon" slot="left-icon">
      email
    </span>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextareaField>
)
```

## Helper Text
`slot`

> Use the `helper-text` slot to insert the content below the field.

<Preview is-grid="true">
  <ods-textarea-field label="Name" required>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Name" required>
  <span class="ht" slot="helper-text">* Required</span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Name" required>
    <span class="ht" slot="helper-text">
      * Required
    </span>
  </OdsTextareaField>
)
```

## Helper Text End
`slot`

> Use the `helper-text-end` slot to insert the content below the field on the right side.

<Preview is-grid="true">
  <ods-textarea-field label="Name" required>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Name" required>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Name" required>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextareaField>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-textarea-field label="Name" required>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Name" required>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Name" required>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextareaField>
)
```

