# Text Field (outline)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Label" />
</Preview>

```html
<ods-text-field label="Label" />
```

> React

```jsx
const App = () => <OdsTextField label="Label" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Static Label" staticLabel />
</Preview>

```html
<ods-text-field label="Static Label" staticLabel />
```

> React

```jsx
const App = () => <OdsTextField label="Static Label" staticLabel />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Search" placeholder="find a product by name" />
</Preview>

```html
<ods-text-field label="Search" placeholder="find a product by name" />
```

> React

```jsx
const App = () => 
  <OdsTextField label="Search" placeholder="find a product by name" />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-text-field label="Disabled" disabled />
</Preview>

```html
<ods-text-field label="Disabled" disabled />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Required" required />
</Preview>

```html
<ods-text-field label="Required" required />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Name" value="John Doe" clearable />
</Preview>

```html
<ods-text-field label="Name" value="John Doe" clearable />
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" value="John Doe" clearable />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-text-field label="Text" />
  <ods-text-field label="Number" type="number" />
  <ods-text-field label="Password" type="password" invalid />
  <ods-text-field label="E-mail" type="email" />
  <ods-text-field label="Search" type="search" />
  <ods-text-field label="Tel" type="tel" />
  <ods-text-field label="Url" type="url" />
  <ods-text-field label="Date" type="date" />
  <ods-text-field label="Time" type="time" />
  <ods-text-field label="Datetime Local" type="datetime-local" />
</Preview>

```html
<ods-text-field label="Text" />
<ods-text-field label="Number" type="number" />
<ods-text-field label="Password" type="password" />
<ods-text-field label="E-mail" type="email" />
<ods-text-field label="Search" type="search" />
<ods-text-field label="Tel" type="tel" />
<ods-text-field label="Url" type="url" />
<ods-text-field label="Date" type="date" />
<ods-text-field label="Time" type="time" />
<ods-text-field label="Datetime Local" type="datetime-local" />
```

> React

```jsx
const App = () => (
  <>
    <OdsTextField label="Text" />
    <OdsTextField label="Number" type="number" />
    <OdsTextField label="Password" type="password" />
    <OdsTextField label="E-mail" type="email" />
    <OdsTextField label="Search" type="search" />
    <OdsTextField label="Tel" type="tel" />
    <OdsTextField label="Url" type="url" />
    <OdsTextField label="Date" type="date" />
    <OdsTextField label="Time" type="time" />
    <OdsTextField label="Datetime Local" type="datetime-local" />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-text-field label="Valid" valid />
</Preview>

```html
<ods-text-field label="Valid" valid />
```

> React

```jsx
const App = () => <OdsTextField label="Valid" valid />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-text-field label="Invalid" invalid />
</Preview>

```html
<ods-text-field label="Invalid" invalid />
```

> React

```jsx
const App = () => <OdsTextField label="Invalid" invalid />
```


## Alias (as)

`attribute` `input | textarea` `input`

<Preview is-grid="true">
  <ods-text-field label="Name" as="textarea" />
</Preview>

```html
<ods-text-field label="Name" as="textarea" />
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" as="textarea" />
)
```

## Pill

`attribute` `boolean` `false`

> Use the `pill` attribute to render the input in pill format.

::: warning
Only works in outline appearance
:::

<Preview is-grid="true">
  <ods-text-field label="Pill format" pill />
</Preview>

```html
<ods-text-field label="Pill format" pill />
```

> React

```jsx
const App = () => <OdsTextField label="Pill format" pill />
```

## Square
`attribute` `boolean` `false`

> Use the `square` attribute to render the input with straight edges.

::: warning
Only works in outline appearance
:::

<Preview is-grid="true">
  <ods-text-field label="Square format" square />
</Preview>

```html
<ods-text-field label="Square" square />
```

> React

```jsx
const App = () => <OdsTextField label="Square" square />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-text-field label="Left Icon">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Left Icon">
  <span class="icon" slot="left-icon"> email </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Left Icon">
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
  <ods-text-field label="Right Icon">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Right Icon">
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Right Icon">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextField>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-text-field label="Person e-mail">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Person e-mail">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Person e-mail">
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
  <ods-text-field label="Name" required>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required>
  <span class="ht" slot="helper-text">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required>
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
  <ods-text-field label="Name" required>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextField>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-text-field label="Name" required>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-text-field>
</Preview>

```html
<ods-text-field label="Name" required>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextField>
)
```

