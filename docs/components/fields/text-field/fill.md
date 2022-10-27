# Text Field (fill)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Label" appearance="fill" />
</Preview>

```html
<ods-text-field label="Label" appearance="fill" />
```

> React

```jsx
const App = () => <OdsTextField label="Label" appearance="fill" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Static Label" staticLabel appearance="fill" />
</Preview>

```html
<ods-text-field label="Static Label" staticLabel appearance="fill" />
```

> React

```jsx
const App = () => <OdsTextField label="Static Label" staticLabel appearance="fill" />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Search" placeholder="find a product by name" appearance="fill" />
</Preview>

```html
<ods-text-field label="Search" placeholder="find a product by name" appearance="fill" />
```

> React

```jsx
const App = () => 
  <OdsTextField label="Search" placeholder="find a product by name" appearance="fill" />
```

## Disabled
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Disabled" disabled appearance="fill" />
</Preview>

```html
<ods-text-field label="Disabled" disabled appearance="fill" />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled appearance="fill" />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Required" required appearance="fill" />
</Preview>

```html
<ods-text-field label="Required" required appearance="fill" />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled appearance="fill" />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Name" value="John Doe" clearable appearance="fill" />
</Preview>

```html
<ods-text-field label="Name" value="John Doe" clearable appearance="fill" />
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" value="John Doe" clearable appearance="fill" />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-text-field label="Text" appearance="fill" />
  <ods-text-field label="Number" type="number" appearance="fill" />
  <ods-text-field label="Password" type="password" invalid appearance="fill" />
  <ods-text-field label="E-mail" type="email" appearance="fill" />
  <ods-text-field label="Search" type="search" appearance="fill" />
  <ods-text-field label="Tel" type="tel" appearance="fill" />
  <ods-text-field label="Url" type="url" appearance="fill" />
  <ods-text-field label="Date" type="date" appearance="fill" />
  <ods-text-field label="Time" type="time" appearance="fill" />
  <ods-text-field label="Datetime Local" type="datetime-local" appearance="fill" />
</Preview>

```html
<ods-text-field label="Text" appearance="fill" />
<ods-text-field label="Number" type="number" appearance="fill" />
<ods-text-field label="Password" type="password" appearance="fill" />
<ods-text-field label="E-mail" type="email" appearance="fill" />
<ods-text-field label="Search" type="search" appearance="fill" />
<ods-text-field label="Tel" type="tel" appearance="fill" />
<ods-text-field label="Url" type="url" appearance="fill" />
<ods-text-field label="Date" type="date" appearance="fill" />
<ods-text-field label="Time" type="time" appearance="fill" />
<ods-text-field label="Datetime Local" type="datetime-local" appearance="fill" />
```

> React

```jsx
const App = () => (
  <>
    <OdsTextField label="Text" appearance="fill" />
    <OdsTextField label="Number" type="number" appearance="fill" />
    <OdsTextField label="Password" type="password" appearance="fill" />
    <OdsTextField label="E-mail" type="email" appearance="fill" />
    <OdsTextField label="Search" type="search" appearance="fill" />
    <OdsTextField label="Tel" type="tel" appearance="fill" />
    <OdsTextField label="Url" type="url" appearance="fill" />
    <OdsTextField label="Date" type="date" appearance="fill" />
    <OdsTextField label="Time" type="time" appearance="fill" />
    <OdsTextField label="Datetime Local" type="datetime-local" appearance="fill" />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-text-field label="Valid" valid appearance="fill" />
</Preview>

```html
<ods-text-field label="Valid" valid appearance="fill" />
```

> React

```jsx
const App = () => <OdsTextField label="Valid" valid appearance="fill" />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-text-field label="Invalid" invalid appearance="fill" />
</Preview>

```html
<ods-text-field label="Invalid" invalid appearance="fill" />
```

> React

```jsx
const App = () => <OdsTextField label="Invalid" invalid appearance="fill" />
```

## Alias (as)

`attribute` `input | textarea` `input`

<Preview is-grid="true">
  <ods-text-field label="Name" as="textarea" appearance="fill" />
</Preview>

```html
<ods-text-field label="Name" as="textarea" appearance="fill" />
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" as="textarea" appearance="fill" />
)
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-text-field label="Left Icon" appearance="fill">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Left Icon" appearance="fill">
  <span class="icon" slot="left-icon"> email </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Left Icon" appearance="fill">
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
  <ods-text-field label="Right Icon" appearance="fill">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Right Icon" appearance="fill">
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Right Icon" appearance="fill">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextField>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-text-field label="Person e-mail" appearance="fill">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Person e-mail" appearance="fill">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Person e-mail" appearance="fill">
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
  <ods-text-field label="Name" required appearance="fill">
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required appearance="fill">
  <span class="ht" slot="helper-text">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required appearance="fill">
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
  <ods-text-field label="Name" required appearance="fill">
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required appearance="fill">
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required appearance="fill">
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextField>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-text-field label="Name" required appearance="fill">
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required appearance="fill">
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required appearance="fill">
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextField>
)
```

