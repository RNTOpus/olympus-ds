# Textarea Field (square)

:::tip Attribute
**name**: `square`<br />
**type**: `boolean` <br />
**default:** `false`
:::

::: warning
Only works in outline appearance
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-textarea-field label="Label" square />
</Preview>

```html
<ods-textarea-field label="Label" square />
```

> React

```jsx
const App = () => <OdsTextareaField label="Label" square />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea-field label="Static Label" staticLabel square />
</Preview>

```html
<ods-textarea-field label="Static Label" staticLabel square />
```

> React

```jsx
const App = () => <OdsTextareaField label="Static Label" staticLabel square />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-textarea-field label="Search" placeholder="find a product by name" square />
</Preview>

```html
<ods-textarea-field label="Search" placeholder="find a product by name" square />
```

> React

```jsx
const App = () => 
  <OdsTextareaField label="Search" placeholder="find a product by name" square />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-textarea-field label="Disabled" disabled square />
</Preview>

```html
<ods-textarea-field label="Disabled" disabled square />
```

> React

```jsx
const App = () => <OdsTextareaField label="Disabled" disabled square />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea-field label="Required" required square />
</Preview>

```html
<ods-textarea-field label="Required" required square />
```

> React

```jsx
const App = () => <OdsTextareaField label="Disabled" disabled square />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea-field label="Name" value="John Doe" clearable square />
</Preview>

```html
<ods-textarea-field label="Name" value="John Doe" clearable square />
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Name" value="John Doe" clearable square />
)
```

## Valid

`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-textarea-field label="Valid" valid square />
</Preview>

```html
<ods-textarea-field label="Valid" valid square />
```

> React

```jsx
const App = () => <OdsTextareaField label="Valid" valid square />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-textarea-field label="Invalid" invalid square />
</Preview>

```html
<ods-textarea-field label="Invalid" invalid square />
```

> React

```jsx
const App = () => <OdsTextareaField label="Invalid" invalid square />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-textarea-field label="Left Icon" square>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-textarea-field >
</Preview>

```html
<ods-textarea-field label="Left Icon" square>
  <span class="icon" slot="left-icon"> email </span>
</ods-textarea-field >
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Left Icon" square>
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
  <ods-textarea-field label="Right Icon" square>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea-field >
</Preview>

```html
<ods-textarea-field label="Right Icon" square>
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea-field >
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Right Icon" square>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextareaField>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-textarea-field label="Person e-mail" square>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Person e-mail" square>
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Person e-mail" square>
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
  <ods-textarea-field label="Name" required square>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Name" required square>
  <span class="ht" slot="helper-text">* Required</span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Name" required square>
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
  <ods-textarea-field label="Name" required square>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Name" required square>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Name" required square>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextareaField>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-textarea-field label="Name" required square>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Name" required square>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField label="Name" required square>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextareaField>
)
```
