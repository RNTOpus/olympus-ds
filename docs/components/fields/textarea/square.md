# Textarea (square)

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
  <ods-textarea label="Label" square />
</Preview>

```html
<ods-textarea label="Label" square />
```

> React

```jsx
const App = () => <OdsTextarea label="Label" square />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea label="Static Label" staticLabel square />
</Preview>

```html
<ods-textarea label="Static Label" staticLabel square />
```

> React

```jsx
const App = () => <OdsTextarea label="Static Label" staticLabel square />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-textarea label="Search" placeholder="find a product by name" square />
</Preview>

```html
<ods-textarea label="Search" placeholder="find a product by name" square />
```

> React

```jsx
const App = () => 
  <OdsTextarea label="Search" placeholder="find a product by name" square />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-textarea label="Disabled" disabled square />
</Preview>

```html
<ods-textarea label="Disabled" disabled square />
```

> React

```jsx
const App = () => <OdsTextarea label="Disabled" disabled square />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea label="Required" required square />
</Preview>

```html
<ods-textarea label="Required" required square />
```

> React

```jsx
const App = () => <OdsTextarea label="Disabled" disabled square />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea label="Name" value="John Doe" clearable square />
</Preview>

```html
<ods-textarea label="Name" value="John Doe" clearable square />
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Name" value="John Doe" clearable square />
)
```

## Valid

`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-textarea label="Valid" valid square />
</Preview>

```html
<ods-textarea label="Valid" valid square />
```

> React

```jsx
const App = () => <OdsTextarea label="Valid" valid square />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-textarea label="Invalid" invalid square />
</Preview>

```html
<ods-textarea label="Invalid" invalid square />
```

> React

```jsx
const App = () => <OdsTextarea label="Invalid" invalid square />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-textarea label="Left Icon" square>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-textarea >
</Preview>

```html
<ods-textarea label="Left Icon" square>
  <span class="icon" slot="left-icon"> email </span>
</ods-textarea >
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Left Icon" square>
    <span class="icon" slot="left-icon">
      email
    </span>
  </OdsTextarea>
)
```

## Right Icon

`slot`

> Use the `right-icon` slot to insert the icon on the right.

<Preview is-grid="true">
  <ods-textarea label="Right Icon" square>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea >
</Preview>

```html
<ods-textarea label="Right Icon" square>
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea >
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Right Icon" square>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextarea>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-textarea label="Person e-mail" square>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Person e-mail" square>
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Person e-mail" square>
    <span class="icon" slot="left-icon">
      email
    </span>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextarea>
)
```

## Helper Text
`slot`

> Use the `helper-text` slot to insert the content below the field.

<Preview is-grid="true">
  <ods-textarea label="Name" required square>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Name" required square>
  <span class="ht" slot="helper-text">* Required</span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Name" required square>
    <span class="ht" slot="helper-text">
      * Required
    </span>
  </OdsTextarea>
)
```

## Helper Text End
`slot`

> Use the `helper-text-end` slot to insert the content below the field on the right side.

<Preview is-grid="true">
  <ods-textarea label="Name" required square>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Name" required square>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Name" required square>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextarea>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-textarea label="Name" required square>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Name" required square>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Name" required square>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextarea>
)
```
