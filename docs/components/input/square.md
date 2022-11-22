# Input (square)

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
  <ods-input label="Label" square />
</Preview>

```html
<ods-input label="Label" square />
```

> React

```jsx
const App = () => <OdsInput label="Label" square />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Static Label" staticLabel square />
</Preview>

```html
<ods-input label="Static Label" staticLabel square />
```

> React

```jsx
const App = () => <OdsInput label="Static Label" staticLabel square />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-input label="Search" placeholder="find a product by name" square />
</Preview>

```html
<ods-input label="Search" placeholder="find a product by name" square />
```

> React

```jsx
const App = () => 
  <OdsInput label="Search" placeholder="find a product by name" square />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-input label="Disabled" disabled square />
</Preview>

```html
<ods-input label="Disabled" disabled square />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled square />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Required" required square />
</Preview>

```html
<ods-input label="Required" required square />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled square />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Name" value="John Doe" clearable square />
</Preview>

```html
<ods-input label="Name" value="John Doe" clearable square />
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" value="John Doe" clearable square />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-input label="Text" square />
  <ods-input label="Number" type="number" square />
  <ods-input label="Password" type="password" invalid square />
  <ods-input label="E-mail" type="email" square />
  <ods-input label="Search" type="search" square />
  <ods-input label="Tel" type="tel" square />
  <ods-input label="Url" type="url" square />
  <ods-input label="Date" type="date" square />
  <ods-input label="Time" type="time" square />
  <ods-input label="Datetime Local" type="datetime-local" square />
</Preview>

```html
<ods-input label="Text" square />
<ods-input label="Number" type="number" square />
<ods-input label="Password" type="password" square />
<ods-input label="E-mail" type="email" square />
<ods-input label="Search" type="search" square />
<ods-input label="Tel" type="tel" square />
<ods-input label="Url" type="url" square />
<ods-input label="Date" type="date" square />
<ods-input label="Time" type="time" square />
<ods-input label="Datetime Local" type="datetime-local" square />
```

> React

```jsx
const App = () => (
  <>
    <OdsInput label="Text" square />
    <OdsInput label="Number" type="number" square />
    <OdsInput label="Password" type="password" square />
    <OdsInput label="E-mail" type="email" square />
    <OdsInput label="Search" type="search" square />
    <OdsInput label="Tel" type="tel" square />
    <OdsInput label="Url" type="url" square />
    <OdsInput label="Date" type="date" square />
    <OdsInput label="Time" type="time" square />
    <OdsInput label="Datetime Local" type="datetime-local" square />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-input label="Valid" valid square />
</Preview>

```html
<ods-input label="Valid" valid square />
```

> React

```jsx
const App = () => <OdsInput label="Valid" valid square />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-input label="Invalid" invalid square />
</Preview>

```html
<ods-input label="Invalid" invalid square />
```

> React

```jsx
const App = () => <OdsInput label="Invalid" invalid square />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-input label="Left Icon" square>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-input>
</Preview>

```html
<ods-input label="Left Icon" square>
  <span class="icon" slot="left-icon"> email </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Left Icon" square>
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
  <ods-input label="Right Icon" square>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Right Icon" square>
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Right Icon" square>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsInput>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-input label="Person e-mail" square>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Person e-mail" square>
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Person e-mail" square>
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
  <ods-input label="Name" required square>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required square>
  <span class="ht" slot="helper-text">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required square>
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
  <ods-input label="Name" required square>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required square>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required square>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsInput>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-input label="Name" required square>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required square>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required square>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsInput>
)
```
