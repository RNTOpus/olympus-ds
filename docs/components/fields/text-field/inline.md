# Text Field (fill)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Label" appearance="inline" />
</Preview>

```html
<ods-text-field label="Label" appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextField label="Label" appearance="inline" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Static Label" staticLabel appearance="inline" />
</Preview>

```html
<ods-text-field label="Static Label" staticLabel appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextField label="Static Label" staticLabel appearance="inline" />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Search" placeholder="find a product by name" appearance="inline" />
</Preview>

```html
<ods-text-field label="Search" placeholder="find a product by name" appearance="inline" />
```

> React

```jsx
const App = () => 
  <OdsTextField label="Search" placeholder="find a product by name" appearance="inline" />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-text-field label="Disabled" disabled appearance="inline" />
</Preview>

```html
<ods-text-field label="Disabled" disabled appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled appearance="inline" />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Required" required appearance="inline" />
</Preview>

```html
<ods-text-field label="Required" required appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled appearance="inline" />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Name" value="John Doe" clearable appearance="inline" />
</Preview>

```html
<ods-text-field label="Name" value="John Doe" clearable appearance="inline" />
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" value="John Doe" clearable appearance="inline" />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-text-field label="Text" appearance="inline" />
  <ods-text-field label="Number" type="number" appearance="inline" />
  <ods-text-field label="Password" type="password" invalid appearance="inline" />
  <ods-text-field label="E-mail" type="email" appearance="inline" />
  <ods-text-field label="Search" type="search" appearance="inline" />
  <ods-text-field label="Tel" type="tel" appearance="inline" />
  <ods-text-field label="Url" type="url" appearance="inline" />
  <ods-text-field label="Date" type="date" appearance="inline" />
  <ods-text-field label="Time" type="time" appearance="inline" />
  <ods-text-field label="Datetime Local" type="datetime-local" appearance="inline" />
</Preview>

```html
<ods-text-field label="Text" appearance="inline" />
<ods-text-field label="Number" type="number" appearance="inline" />
<ods-text-field label="Password" type="password" appearance="inline" />
<ods-text-field label="E-mail" type="email" appearance="inline" />
<ods-text-field label="Search" type="search" appearance="inline" />
<ods-text-field label="Tel" type="tel" appearance="inline" />
<ods-text-field label="Url" type="url" appearance="inline" />
<ods-text-field label="Date" type="date" appearance="inline" />
<ods-text-field label="Time" type="time" appearance="inline" />
<ods-text-field label="Datetime Local" type="datetime-local" appearance="inline" />
```

> React

```jsx
const App = () => (
  <>
    <OdsTextField label="Text" appearance="inline" />
    <OdsTextField label="Number" type="number" appearance="inline" />
    <OdsTextField label="Password" type="password" appearance="inline" />
    <OdsTextField label="E-mail" type="email" appearance="inline" />
    <OdsTextField label="Search" type="search" appearance="inline" />
    <OdsTextField label="Tel" type="tel" appearance="inline" />
    <OdsTextField label="Url" type="url" appearance="inline" />
    <OdsTextField label="Date" type="date" appearance="inline" />
    <OdsTextField label="Time" type="time" appearance="inline" />
    <OdsTextField label="Datetime Local" type="datetime-local" appearance="inline" />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-text-field label="Valid" valid appearance="inline" />
</Preview>

```html
<ods-text-field label="Valid" valid appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextField label="Valid" valid appearance="inline" />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-text-field label="Invalid" invalid appearance="inline" />
</Preview>

```html
<ods-text-field label="Invalid" invalid appearance="inline" />
```

> React

```jsx
const App = () => <OdsTextField label="Invalid" invalid appearance="inline" />
```


## Alias (as)

`attribute` `input | textarea` `input`

<Preview is-grid="true">
  <ods-text-field label="Name" as="textarea" appearance="inline" />
</Preview>

```html
<ods-text-field label="Name" as="textarea" appearance="inline" />
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" as="textarea" appearance="inline" />
)
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-text-field label="Left Icon" appearance="inline">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Left Icon" appearance="inline">
  <span class="icon" slot="left-icon"> email </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Left Icon" appearance="inline">
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
  <ods-text-field label="Right Icon" appearance="inline">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Right Icon" appearance="inline">
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Right Icon" appearance="inline">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextField>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-text-field label="Person e-mail" appearance="inline">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Person e-mail" appearance="inline">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Person e-mail" appearance="inline">
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
  <ods-text-field label="Name" required appearance="inline">
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required appearance="inline">
  <span class="ht" slot="helper-text">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required appearance="inline">
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
  <ods-text-field label="Name" required appearance="inline">
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required appearance="inline">
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required appearance="inline">
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextField>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-text-field label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required appearance="inline">
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextField>
)
```

