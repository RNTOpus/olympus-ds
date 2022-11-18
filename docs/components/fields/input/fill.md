# Input (fill)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-input label="Label" appearance="fill" />
</Preview>

```html
<ods-input label="Label" appearance="fill" />
```

> React

```jsx
const App = () => <OdsInput label="Label" appearance="fill" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Static Label" staticLabel appearance="fill" />
</Preview>

```html
<ods-input label="Static Label" staticLabel appearance="fill" />
```

> React

```jsx
const App = () => <OdsInput label="Static Label" staticLabel appearance="fill" />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-input label="Search" placeholder="find a product by name" appearance="fill" />
</Preview>

```html
<ods-input label="Search" placeholder="find a product by name" appearance="fill" />
```

> React

```jsx
const App = () => 
  <OdsInput label="Search" placeholder="find a product by name" appearance="fill" />
```

## Disabled
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Disabled" disabled appearance="fill" />
</Preview>

```html
<ods-input label="Disabled" disabled appearance="fill" />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled appearance="fill" />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Required" required appearance="fill" />
</Preview>

```html
<ods-input label="Required" required appearance="fill" />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled appearance="fill" />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Name" value="John Doe" clearable appearance="fill" />
</Preview>

```html
<ods-input label="Name" value="John Doe" clearable appearance="fill" />
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" value="John Doe" clearable appearance="fill" />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-input label="Text" appearance="fill" />
  <ods-input label="Number" type="number" appearance="fill" />
  <ods-input label="Password" type="password" invalid appearance="fill" />
  <ods-input label="E-mail" type="email" appearance="fill" />
  <ods-input label="Search" type="search" appearance="fill" />
  <ods-input label="Tel" type="tel" appearance="fill" />
  <ods-input label="Url" type="url" appearance="fill" />
  <ods-input label="Date" type="date" appearance="fill" />
  <ods-input label="Time" type="time" appearance="fill" />
  <ods-input label="Datetime Local" type="datetime-local" appearance="fill" />
</Preview>

```html
<ods-input label="Text" appearance="fill" />
<ods-input label="Number" type="number" appearance="fill" />
<ods-input label="Password" type="password" appearance="fill" />
<ods-input label="E-mail" type="email" appearance="fill" />
<ods-input label="Search" type="search" appearance="fill" />
<ods-input label="Tel" type="tel" appearance="fill" />
<ods-input label="Url" type="url" appearance="fill" />
<ods-input label="Date" type="date" appearance="fill" />
<ods-input label="Time" type="time" appearance="fill" />
<ods-input label="Datetime Local" type="datetime-local" appearance="fill" />
```

> React

```jsx
const App = () => (
  <>
    <OdsInput label="Text" appearance="fill" />
    <OdsInput label="Number" type="number" appearance="fill" />
    <OdsInput label="Password" type="password" appearance="fill" />
    <OdsInput label="E-mail" type="email" appearance="fill" />
    <OdsInput label="Search" type="search" appearance="fill" />
    <OdsInput label="Tel" type="tel" appearance="fill" />
    <OdsInput label="Url" type="url" appearance="fill" />
    <OdsInput label="Date" type="date" appearance="fill" />
    <OdsInput label="Time" type="time" appearance="fill" />
    <OdsInput label="Datetime Local" type="datetime-local" appearance="fill" />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-input label="Valid" valid appearance="fill" />
</Preview>

```html
<ods-input label="Valid" valid appearance="fill" />
```

> React

```jsx
const App = () => <OdsInput label="Valid" valid appearance="fill" />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-input label="Invalid" invalid appearance="fill" />
</Preview>

```html
<ods-input label="Invalid" invalid appearance="fill" />
```

> React

```jsx
const App = () => <OdsInput label="Invalid" invalid appearance="fill" />
```

## Alias (as)

`attribute` `input | textarea` `input`

<Preview is-grid="true">
  <ods-input label="Name" as="textarea" appearance="fill" />
</Preview>

```html
<ods-input label="Name" as="textarea" appearance="fill" />
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" as="textarea" appearance="fill" />
)
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-input label="Left Icon" appearance="fill">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-input>
</Preview>

```html
<ods-input label="Left Icon" appearance="fill">
  <span class="icon" slot="left-icon"> email </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Left Icon" appearance="fill">
    <span class="icon" slot="left-icon">
      email
    </span>
  </OdsInput>
)
```

## Right Icon

`slot`

> Use the `right-icon` slot to insert the icon on the right.

<Preview is-grid="true">
  <ods-input label="Right Icon" appearance="fill">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Right Icon" appearance="fill">
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Right Icon" appearance="fill">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsInput>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-input label="Person e-mail" appearance="fill">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Person e-mail" appearance="fill">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Person e-mail" appearance="fill">
    <span class="icon" slot="left-icon">
      email
    </span>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsInput>
)
```

## Helper Text
`slot`

> Use the `helper-text` slot to insert the content below the field.

<Preview is-grid="true">
  <ods-input label="Name" required appearance="fill">
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required appearance="fill">
  <span class="ht" slot="helper-text">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required appearance="fill">
    <span class="ht" slot="helper-text">
      * Required
    </span>
  </OdsInput>
)
```

## Helper Text End
`slot`

> Use the `helper-text-end` slot to insert the content below the field on the right side.

<Preview is-grid="true">
  <ods-input label="Name" required appearance="fill">
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required appearance="fill">
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required appearance="fill">
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsInput>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-input label="Name" required appearance="fill">
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required appearance="fill">
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required appearance="fill">
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsInput>
)
```

