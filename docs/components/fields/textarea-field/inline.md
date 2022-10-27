# Textarea Field (fill)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-textarea-field label="Label" appearance="inline" />
</Preview>

```html
<ods-textarea-field label="Label" appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextareaField  label="Label" appearance="inline" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea-field label="Static Label" staticLabel appearance="inline" />
</Preview>

```html
<ods-textarea-field label="Static Label" staticLabel appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextareaField  label="Static Label" staticLabel appearance="inline" />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-textarea-field label="Search" placeholder="find a product by name" appearance="inline" />
</Preview>

```html
<ods-textarea-field label="Search" placeholder="find a product by name" appearance="inline" />
```

> React

```jsx
const App = () => 
  <OdsTextareaField  label="Search" placeholder="find a product by name" appearance="inline" />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-textarea-field label="Disabled" disabled appearance="inline" />
</Preview>

```html
<ods-textarea-field label="Disabled" disabled appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextareaField  label="Disabled" disabled appearance="inline" />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea-field label="Required" required appearance="inline" />
</Preview>

```html
<ods-textarea-field label="Required" required appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextareaField  label="Disabled" disabled appearance="inline" />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea-field label="Name" value="John Doe" clearable appearance="inline" />
</Preview>

```html
<ods-textarea-field label="Name" value="John Doe" clearable appearance="inline" />
```

> React

```jsx
const App = () => (
  <OdsTextareaField  label="Name" value="John Doe" clearable appearance="inline" />
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-textarea-field label="Valid" valid appearance="inline" />
</Preview>

```html
<ods-textarea-field label="Valid" valid appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextareaField  label="Valid" valid appearance="inline" />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-textarea-field label="Invalid" invalid appearance="inline" />
</Preview>

```html
<ods-textarea-field label="Invalid" invalid appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextareaField  label="Invalid" invalid appearance="inline" />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-textarea-field label="Left Icon" appearance="inline">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Left Icon" appearance="inline">
  <span class="icon" slot="left-icon"> email </span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField  label="Left Icon" appearance="inline">
    <span class="icon" slot="left-icon">
      email
    </span>
  </OdsTextareaField >
)
```

## Right Icon

`slot`

> Use the `right-icon` slot to insert the icon on the right.

<Preview is-grid="true">
  <ods-textarea-field label="Right Icon" appearance="inline">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Right Icon" appearance="inline">
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField  label="Right Icon" appearance="inline">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextareaField >
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-textarea-field label="Person e-mail" appearance="inline">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Person e-mail" appearance="inline">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField  label="Person e-mail" appearance="inline">
    <span class="icon" slot="left-icon">
      email
    </span>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextareaField >
)
```

## Helper Text
`slot`

> Use the `helper-text` slot to insert the content below the field.

<Preview is-grid="true">
  <ods-textarea-field label="Name" required appearance="inline">
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Name" required appearance="inline">
  <span class="ht" slot="helper-text">* Required</span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField  label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">
      * Required
    </span>
  </OdsTextareaField >
)
```

## Helper Text End
`slot`

> Use the `helper-text-end` slot to insert the content below the field on the right side.

<Preview is-grid="true">
  <ods-textarea-field label="Name" required appearance="inline">
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Name" required appearance="inline">
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField  label="Name" required appearance="inline">
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextareaField >
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-textarea-field label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-textarea-field>
</Preview>

```html
<ods-textarea-field label="Name" required appearance="inline">
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-textarea-field>
```

> React

```jsx
const App = () => (
  <OdsTextareaField  label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextareaField >
)
```

