# Textarea (fill)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-textarea label="Label" appearance="inline" />
</Preview>

```html
<ods-textarea label="Label" appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextarea  label="Label" appearance="inline" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea label="Static Label" staticLabel appearance="inline" />
</Preview>

```html
<ods-textarea label="Static Label" staticLabel appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextarea  label="Static Label" staticLabel appearance="inline" />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-textarea label="Search" placeholder="find a product by name" appearance="inline" />
</Preview>

```html
<ods-textarea label="Search" placeholder="find a product by name" appearance="inline" />
```

> React

```jsx
const App = () => 
  <OdsTextarea  label="Search" placeholder="find a product by name" appearance="inline" />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-textarea label="Disabled" disabled appearance="inline" />
</Preview>

```html
<ods-textarea label="Disabled" disabled appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextarea  label="Disabled" disabled appearance="inline" />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea label="Required" required appearance="inline" />
</Preview>

```html
<ods-textarea label="Required" required appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextarea  label="Disabled" disabled appearance="inline" />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea label="Name" value="John Doe" clearable appearance="inline" />
</Preview>

```html
<ods-textarea label="Name" value="John Doe" clearable appearance="inline" />
```

> React

```jsx
const App = () => (
  <OdsTextarea  label="Name" value="John Doe" clearable appearance="inline" />
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-textarea label="Valid" valid appearance="inline" />
</Preview>

```html
<ods-textarea label="Valid" valid appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextarea  label="Valid" valid appearance="inline" />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-textarea label="Invalid" invalid appearance="inline" />
</Preview>

```html
<ods-textarea label="Invalid" invalid appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextarea  label="Invalid" invalid appearance="inline" />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-textarea label="Left Icon" appearance="inline">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Left Icon" appearance="inline">
  <span class="icon" slot="left-icon"> email </span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea  label="Left Icon" appearance="inline">
    <span class="icon" slot="left-icon">
      email
    </span>
  </OdsTextarea >
)
```

## Right Icon

`slot`

> Use the `right-icon` slot to insert the icon on the right.

<Preview is-grid="true">
  <ods-textarea label="Right Icon" appearance="inline">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Right Icon" appearance="inline">
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea  label="Right Icon" appearance="inline">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextarea >
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-textarea label="Person e-mail" appearance="inline">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Person e-mail" appearance="inline">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea  label="Person e-mail" appearance="inline">
    <span class="icon" slot="left-icon">
      email
    </span>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextarea >
)
```

## Helper Text
`slot`

> Use the `helper-text` slot to insert the content below the field.

<Preview is-grid="true">
  <ods-textarea label="Name" required appearance="inline">
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Name" required appearance="inline">
  <span class="ht" slot="helper-text">* Required</span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea  label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">
      * Required
    </span>
  </OdsTextarea >
)
```

## Helper Text End
`slot`

> Use the `helper-text-end` slot to insert the content below the field on the right side.

<Preview is-grid="true">
  <ods-textarea label="Name" required appearance="inline">
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Name" required appearance="inline">
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea  label="Name" required appearance="inline">
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextarea >
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-textarea label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Name" required appearance="inline">
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea  label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextarea >
)
```

