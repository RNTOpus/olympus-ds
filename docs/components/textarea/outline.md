# Textarea (outline)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-textarea label="Label" />
</Preview>

```html
<ods-textarea label="Label" />
```

> React

```jsx
const App = () => <OdsTextarea label="Label" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea label="Static Label" staticLabel />
</Preview>

```html
<ods-textarea label="Static Label" staticLabel />
```

> React

```jsx
const App = () => <OdsTextarea label="Static Label" staticLabel />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-textarea label="Search" placeholder="find a product by name" />
</Preview>

```html
<ods-textarea label="Search" placeholder="find a product by name" />
```

> React

```jsx
const App = () => 
  <OdsTextarea label="Search" placeholder="find a product by name" />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-textarea label="Disabled" disabled />
</Preview>

```html
<ods-textarea label="Disabled" disabled />
```

> React

```jsx
const App = () => <OdsTextarea label="Disabled" disabled />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea label="Required" required />
</Preview>

```html
<ods-textarea label="Required" required />
```

> React

```jsx
const App = () => <OdsTextarea label="Disabled" disabled />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-textarea label="Name" value="John Doe" clearable />
</Preview>

```html
<ods-textarea label="Name" value="John Doe" clearable />
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Name" value="John Doe" clearable />
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-textarea label="Valid" valid />
</Preview>

```html
<ods-textarea label="Valid" valid />
```

> React

```jsx
const App = () => <OdsTextarea label="Valid" valid />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-textarea label="Invalid" invalid />
</Preview>

```html
<ods-textarea label="Invalid" invalid />
```

> React

```jsx
const App = () => <OdsTextarea label="Invalid" invalid />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-textarea label="Left Icon">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Left Icon">
  <span class="icon" slot="left-icon"> email </span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Left Icon">
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
  <ods-textarea label="Right Icon">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Right Icon">
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Right Icon">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextarea>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-textarea label="Person e-mail">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Person e-mail">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Person e-mail">
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
  <ods-textarea label="Name" required>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Name" required>
  <span class="ht" slot="helper-text">* Required</span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Name" required>
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
  <ods-textarea label="Name" required>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Name" required>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Name" required>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextarea>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-textarea label="Name" required>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-textarea>
</Preview>

```html
<ods-textarea label="Name" required>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-textarea>
```

> React

```jsx
const App = () => (
  <OdsTextarea label="Name" required>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextarea>
)
```

