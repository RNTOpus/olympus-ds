# Input (fill)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-input label="Label" appearance="inline" />
</Preview>

```html
<ods-input label="Label" appearance="inline" />
```

> React

```jsx
const App = () => <OdsInput label="Label" appearance="inline" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Static Label" staticLabel appearance="inline" />
</Preview>

```html
<ods-input label="Static Label" staticLabel appearance="inline" />
```

> React

```jsx
const App = () => <OdsInput label="Static Label" staticLabel appearance="inline" />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-input label="Search" placeholder="find a product by name" appearance="inline" />
</Preview>

```html
<ods-input label="Search" placeholder="find a product by name" appearance="inline" />
```

> React

```jsx
const App = () => 
  <OdsInput label="Search" placeholder="find a product by name" appearance="inline" />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-input label="Disabled" disabled appearance="inline" />
</Preview>

```html
<ods-input label="Disabled" disabled appearance="inline" />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled appearance="inline" />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Required" required appearance="inline" />
</Preview>

```html
<ods-input label="Required" required appearance="inline" />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled appearance="inline" />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Name" value="John Doe" clearable appearance="inline" />
</Preview>

```html
<ods-input label="Name" value="John Doe" clearable appearance="inline" />
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" value="John Doe" clearable appearance="inline" />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-input label="Text" appearance="inline" />
  <ods-input label="Number" type="number" appearance="inline" />
  <ods-input label="Password" type="password" invalid appearance="inline" />
  <ods-input label="E-mail" type="email" appearance="inline" />
  <ods-input label="Search" type="search" appearance="inline" />
  <ods-input label="Tel" type="tel" appearance="inline" />
  <ods-input label="Url" type="url" appearance="inline" />
  <ods-input label="Date" type="date" appearance="inline" />
  <ods-input label="Time" type="time" appearance="inline" />
  <ods-input label="Datetime Local" type="datetime-local" appearance="inline" />
</Preview>

```html
<ods-input label="Text" appearance="inline" />
<ods-input label="Number" type="number" appearance="inline" />
<ods-input label="Password" type="password" appearance="inline" />
<ods-input label="E-mail" type="email" appearance="inline" />
<ods-input label="Search" type="search" appearance="inline" />
<ods-input label="Tel" type="tel" appearance="inline" />
<ods-input label="Url" type="url" appearance="inline" />
<ods-input label="Date" type="date" appearance="inline" />
<ods-input label="Time" type="time" appearance="inline" />
<ods-input label="Datetime Local" type="datetime-local" appearance="inline" />
```

> React

```jsx
const App = () => (
  <>
    <OdsInput label="Text" appearance="inline" />
    <OdsInput label="Number" type="number" appearance="inline" />
    <OdsInput label="Password" type="password" appearance="inline" />
    <OdsInput label="E-mail" type="email" appearance="inline" />
    <OdsInput label="Search" type="search" appearance="inline" />
    <OdsInput label="Tel" type="tel" appearance="inline" />
    <OdsInput label="Url" type="url" appearance="inline" />
    <OdsInput label="Date" type="date" appearance="inline" />
    <OdsInput label="Time" type="time" appearance="inline" />
    <OdsInput label="Datetime Local" type="datetime-local" appearance="inline" />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-input label="Valid" valid appearance="inline" />
</Preview>

```html
<ods-input label="Valid" valid appearance="inline" />
```

> React

```jsx
const App = () => <OdsInput label="Valid" valid appearance="inline" />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-input label="Invalid" invalid appearance="inline" />
</Preview>

```html
<ods-input label="Invalid" invalid appearance="inline" />
```

> React

```jsx
const App = () => <OdsInput label="Invalid" invalid appearance="inline" />
```


## Alias (as)

`attribute` `input | textarea` `input`

<Preview is-grid="true">
  <ods-input label="Name" as="textarea" appearance="inline" />
</Preview>

```html
<ods-input label="Name" as="textarea" appearance="inline" />
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" as="textarea" appearance="inline" />
)
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-input label="Left Icon" appearance="inline">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-input>
</Preview>

```html
<ods-input label="Left Icon" appearance="inline">
  <span class="icon" slot="left-icon"> email </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Left Icon" appearance="inline">
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
  <ods-input label="Right Icon" appearance="inline">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Right Icon" appearance="inline">
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Right Icon" appearance="inline">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsInput>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-input label="Person e-mail" appearance="inline">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Person e-mail" appearance="inline">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Person e-mail" appearance="inline">
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
  <ods-input label="Name" required appearance="inline">
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required appearance="inline">
  <span class="ht" slot="helper-text">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required appearance="inline">
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
  <ods-input label="Name" required appearance="inline">
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required appearance="inline">
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required appearance="inline">
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsInput>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-input label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required appearance="inline">
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required appearance="inline">
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsInput>
)
```

