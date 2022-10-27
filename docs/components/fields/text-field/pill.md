# Text Field (pill)

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
  <ods-text-field label="Label" pill />
</Preview>

```html
<ods-text-field label="Label" pill />
```

> React

```jsx
const App = () => <OdsTextField label="Label" pill />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Static Label" staticLabel pill />
</Preview>

```html
<ods-text-field label="Static Label" staticLabel pill />
```

> React

```jsx
const App = () => <OdsTextField label="Static Label" staticLabel pill />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Search" placeholder="find a product by name" pill />
</Preview>

```html
<ods-text-field label="Search" placeholder="find a product by name" pill />
```

> React

```jsx
const App = () => 
  <OdsTextField label="Search" placeholder="find a product by name" pill />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-text-field label="Disabled" disabled pill />
</Preview>

```html
<ods-text-field label="Disabled" disabled pill />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled pill />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Required" required pill />
</Preview>

```html
<ods-text-field label="Required" required pill />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled pill />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Name" value="John Doe" clearable pill />
</Preview>

```html
<ods-text-field label="Name" value="John Doe" clearable pill />
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" value="John Doe" clearable pill />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-text-field label="Text" pill />
  <ods-text-field label="Number" type="number" pill />
  <ods-text-field label="Password" type="password" invalid pill />
  <ods-text-field label="E-mail" type="email" pill />
  <ods-text-field label="Search" type="search" pill />
  <ods-text-field label="Tel" type="tel" pill />
  <ods-text-field label="Url" type="url" pill />
  <ods-text-field label="Date" type="date" pill />
  <ods-text-field label="Time" type="time" pill />
  <ods-text-field label="Datetime Local" type="datetime-local" pill />
</Preview>

```html
<ods-text-field label="Text" pill />
<ods-text-field label="Number" type="number" pill />
<ods-text-field label="Password" type="password" pill />
<ods-text-field label="E-mail" type="email" pill />
<ods-text-field label="Search" type="search" pill />
<ods-text-field label="Tel" type="tel" pill />
<ods-text-field label="Url" type="url" pill />
<ods-text-field label="Date" type="date" pill />
<ods-text-field label="Time" type="time" pill />
<ods-text-field label="Datetime Local" type="datetime-local" pill />
```

> React

```jsx
const App = () => (
  <>
    <OdsTextField label="Text" pill />
    <OdsTextField label="Number" type="number" pill />
    <OdsTextField label="Password" type="password" pill />
    <OdsTextField label="E-mail" type="email" pill />
    <OdsTextField label="Search" type="search" pill />
    <OdsTextField label="Tel" type="tel" pill />
    <OdsTextField label="Url" type="url" pill />
    <OdsTextField label="Date" type="date" pill />
    <OdsTextField label="Time" type="time" pill />
    <OdsTextField label="Datetime Local" type="datetime-local" pill />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-text-field label="Valid" valid pill />
</Preview>

```html
<ods-text-field label="Valid" valid pill />
```

> React

```jsx
const App = () => <OdsTextField label="Valid" valid pill />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-text-field label="Invalid" invalid pill />
</Preview>

```html
<ods-text-field label="Invalid" invalid pill />
```

> React

```jsx
const App = () => <OdsTextField label="Invalid" invalid pill />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-text-field label="Left Icon" pill>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Left Icon" pill>
  <span class="icon" slot="left-icon"> email </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Left Icon" pill>
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
  <ods-text-field label="Right Icon" pill>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Right Icon" pill>
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Right Icon" pill>
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextField>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-text-field label="Person e-mail" pill>
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Person e-mail" pill>
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Person e-mail" pill>
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
  <ods-text-field label="Name" required pill>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required pill>
  <span class="ht" slot="helper-text">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required pill>
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
  <ods-text-field label="Name" required pill>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required pill>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required pill>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextField>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-text-field label="Name" required pill>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required pill>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required pill>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextField>
)
```
