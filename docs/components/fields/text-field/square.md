# Text Field (square)

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
  <ods-text-field label="Label" square />
</Preview>

```html
<ods-text-field label="Label" square />
```

> React

```jsx
const App = () => <OdsTextField label="Label" square />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Static Label" staticLabel square />
</Preview>

```html
<ods-text-field label="Static Label" staticLabel square />
```

> React

```jsx
const App = () => <OdsTextField label="Static Label" staticLabel square />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Search" placeholder="find a product by name" square />
</Preview>

```html
<ods-text-field label="Search" placeholder="find a product by name" square />
```

> React

```jsx
const App = () => 
  <OdsTextField label="Search" placeholder="find a product by name" square />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-text-field label="Disabled" disabled square />
</Preview>

```html
<ods-text-field label="Disabled" disabled square />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled square />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Required" required square />
</Preview>

```html
<ods-text-field label="Required" required square />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled square />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Name" value="John Doe" clearable square />
</Preview>

```html
<ods-text-field label="Name" value="John Doe" clearable square />
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" value="John Doe" clearable square />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-text-field label="Text" square />
  <ods-text-field label="Number" type="number" square />
  <ods-text-field label="Password" type="password" invalid square />
  <ods-text-field label="E-mail" type="email" square />
  <ods-text-field label="Search" type="search" square />
  <ods-text-field label="Tel" type="tel" square />
  <ods-text-field label="Url" type="url" square />
  <ods-text-field label="Date" type="date" square />
  <ods-text-field label="Time" type="time" square />
  <ods-text-field label="Datetime Local" type="datetime-local" square />
</Preview>

```html
<ods-text-field label="Text" square />
<ods-text-field label="Number" type="number" square />
<ods-text-field label="Password" type="password" square />
<ods-text-field label="E-mail" type="email" square />
<ods-text-field label="Search" type="search" square />
<ods-text-field label="Tel" type="tel" square />
<ods-text-field label="Url" type="url" square />
<ods-text-field label="Date" type="date" square />
<ods-text-field label="Time" type="time" square />
<ods-text-field label="Datetime Local" type="datetime-local" square />
```

> React

```jsx
const App = () => (
  <>
    <OdsTextField label="Text" square />
    <OdsTextField label="Number" type="number" square />
    <OdsTextField label="Password" type="password" square />
    <OdsTextField label="E-mail" type="email" square />
    <OdsTextField label="Search" type="search" square />
    <OdsTextField label="Tel" type="tel" square />
    <OdsTextField label="Url" type="url" square />
    <OdsTextField label="Date" type="date" square />
    <OdsTextField label="Time" type="time" square />
    <OdsTextField label="Datetime Local" type="datetime-local" square />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-text-field label="Valid" valid square />
</Preview>

```html
<ods-text-field label="Valid" valid square />
```

> React

```jsx
const App = () => <OdsTextField label="Valid" valid square />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-text-field label="Invalid" invalid square />
</Preview>

```html
<ods-text-field label="Invalid" invalid square />
```

> React

```jsx
const App = () => <OdsTextField label="Invalid" invalid square />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-text-field label="Left Icon" square>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Left Icon" square>
  <span class="icon" slot="left-icon"> email </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Left Icon" square>
    <span class="icon" slot="left-icon">
      email
    </span>
  </OdsTextField>
)
```

## Right Icon

`slot`

> Use the `right-icon` slot to insert the icon on the right.

<Preview is-grid="true">
  <ods-text-field label="Right Icon" square>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Right Icon" square>
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Right Icon" square>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextField>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-text-field label="Person e-mail" square>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Person e-mail" square>
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Person e-mail" square>
    <span class="icon" slot="left-icon">
      email
    </span>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextField>
)
```

## Helper Text
`slot`

> Use the `helper-text` slot to insert the content below the field.

<Preview is-grid="true">
  <ods-text-field label="Name" required square>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required square>
  <span class="ht" slot="helper-text">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required square>
    <span class="ht" slot="helper-text">
      * Required
    </span>
  </OdsTextField>
)
```

## Helper Text End
`slot`

> Use the `helper-text-end` slot to insert the content below the field on the right side.

<Preview is-grid="true">
  <ods-text-field label="Name" required square>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required square>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required square>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextField>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-text-field label="Name" required square>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required square>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required square>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextField>
)
```
