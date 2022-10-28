# Input (pill)

:::tip Attribute
**name**: `pill`<br />
**type**: `boolean` <br />
**default:** `false`
:::

::: warning
Only works in outline appearance
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-input label="Label" pill />
</Preview>

```html
<ods-input label="Label" pill />
```

> React

```jsx
const App = () => <OdsInput label="Label" pill />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Static Label" staticLabel pill />
</Preview>

```html
<ods-input label="Static Label" staticLabel pill />
```

> React

```jsx
const App = () => <OdsInput label="Static Label" staticLabel pill />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-input label="Search" placeholder="find a product by name" pill />
</Preview>

```html
<ods-input label="Search" placeholder="find a product by name" pill />
```

> React

```jsx
const App = () => 
  <OdsInput label="Search" placeholder="find a product by name" pill />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-input label="Disabled" disabled pill />
</Preview>

```html
<ods-input label="Disabled" disabled pill />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled pill />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Required" required pill />
</Preview>

```html
<ods-input label="Required" required pill />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled pill />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Name" value="John Doe" clearable pill />
</Preview>

```html
<ods-input label="Name" value="John Doe" clearable pill />
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" value="John Doe" clearable pill />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-input label="Text" pill />
  <ods-input label="Number" type="number" pill />
  <ods-input label="Password" type="password" invalid pill />
  <ods-input label="E-mail" type="email" pill />
  <ods-input label="Search" type="search" pill />
  <ods-input label="Tel" type="tel" pill />
  <ods-input label="Url" type="url" pill />
  <ods-input label="Date" type="date" pill />
  <ods-input label="Time" type="time" pill />
  <ods-input label="Datetime Local" type="datetime-local" pill />
</Preview>

```html
<ods-input label="Text" pill />
<ods-input label="Number" type="number" pill />
<ods-input label="Password" type="password" pill />
<ods-input label="E-mail" type="email" pill />
<ods-input label="Search" type="search" pill />
<ods-input label="Tel" type="tel" pill />
<ods-input label="Url" type="url" pill />
<ods-input label="Date" type="date" pill />
<ods-input label="Time" type="time" pill />
<ods-input label="Datetime Local" type="datetime-local" pill />
```

> React

```jsx
const App = () => (
  <>
    <OdsInput label="Text" pill />
    <OdsInput label="Number" type="number" pill />
    <OdsInput label="Password" type="password" pill />
    <OdsInput label="E-mail" type="email" pill />
    <OdsInput label="Search" type="search" pill />
    <OdsInput label="Tel" type="tel" pill />
    <OdsInput label="Url" type="url" pill />
    <OdsInput label="Date" type="date" pill />
    <OdsInput label="Time" type="time" pill />
    <OdsInput label="Datetime Local" type="datetime-local" pill />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-input label="Valid" valid pill />
</Preview>

```html
<ods-input label="Valid" valid pill />
```

> React

```jsx
const App = () => <OdsInput label="Valid" valid pill />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-input label="Invalid" invalid pill />
</Preview>

```html
<ods-input label="Invalid" invalid pill />
```

> React

```jsx
const App = () => <OdsInput label="Invalid" invalid pill />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-input label="Left Icon" pill>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-input>
</Preview>

```html
<ods-input label="Left Icon" pill>
  <span class="icon" slot="left-icon"> email </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Left Icon" pill>
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
  <ods-input label="Right Icon" pill>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Right Icon" pill>
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Right Icon" pill>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsInput>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-input label="Person e-mail" pill>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Person e-mail" pill>
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Person e-mail" pill>
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
  <ods-input label="Name" required pill>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required pill>
  <span class="ht" slot="helper-text">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required pill>
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
  <ods-input label="Name" required pill>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required pill>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required pill>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsInput>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-input label="Name" required pill>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required pill>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required pill>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsInput>
)
```
