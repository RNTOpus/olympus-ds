# Input (outline)

:::tip Attribute
**name**: `appearance`<br />
**type**: `outline` `fill` `inline` | `OdsFieldAppearance` <br />
**default:** `outline`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-input label="Label" />
</Preview>

```html
<ods-input label="Label" />
```

> React

```jsx
const App = () => <OdsInput label="Label" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Static Label" staticLabel />
</Preview>

```html
<ods-input label="Static Label" staticLabel />
```

> React

```jsx
const App = () => <OdsInput label="Static Label" staticLabel />
```

## Placeholder
`attribute` `string`

<Preview is-grid="true">
  <ods-input label="Search" placeholder="find a product by name" />
</Preview>

```html
<ods-input label="Search" placeholder="find a product by name" />
```

> React

```jsx
const App = () => 
  <OdsInput label="Search" placeholder="find a product by name" />
```

## Disabled
`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a input.

<Preview is-grid="true">
  <ods-input label="Disabled" disabled />
</Preview>

```html
<ods-input label="Disabled" disabled />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled />
```

## Required
`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Required" required />
</Preview>

```html
<ods-input label="Required" required />
```

> React

```jsx
const App = () => <OdsInput label="Disabled" disabled />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-input label="Name" value="John Doe" clearable />
</Preview>

```html
<ods-input label="Name" value="John Doe" clearable />
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" value="John Doe" clearable />
)
```

## Type

::: tip Type list
`text` `number` `password` `email` `search` `tel` `url` `date` `time` `datetime-local` 
:::

`attribute` `string` `text`

<Preview is-grid="true">
  <ods-input label="Text" />
  <ods-input label="Number" type="number" />
  <ods-input label="Password" type="password" invalid />
  <ods-input label="E-mail" type="email" />
  <ods-input label="Search" type="search" />
  <ods-input label="Tel" type="tel" />
  <ods-input label="Url" type="url" />
  <ods-input label="Date" type="date" />
  <ods-input label="Time" type="time" />
  <ods-input label="Datetime Local" type="datetime-local" />
</Preview>

```html
<ods-input label="Text" />
<ods-input label="Number" type="number" />
<ods-input label="Password" type="password" />
<ods-input label="E-mail" type="email" />
<ods-input label="Search" type="search" />
<ods-input label="Tel" type="tel" />
<ods-input label="Url" type="url" />
<ods-input label="Date" type="date" />
<ods-input label="Time" type="time" />
<ods-input label="Datetime Local" type="datetime-local" />
```

> React

```jsx
const App = () => (
  <>
    <OdsInput label="Text" />
    <OdsInput label="Number" type="number" />
    <OdsInput label="Password" type="password" />
    <OdsInput label="E-mail" type="email" />
    <OdsInput label="Search" type="search" />
    <OdsInput label="Tel" type="tel" />
    <OdsInput label="Url" type="url" />
    <OdsInput label="Date" type="date" />
    <OdsInput label="Time" type="time" />
    <OdsInput label="Datetime Local" type="datetime-local" />
  </>
)
```

## Valid
`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-input label="Valid" valid />
</Preview>

```html
<ods-input label="Valid" valid />
```

> React

```jsx
const App = () => <OdsInput label="Valid" valid />
```

## Invalid
`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-input label="Invalid" invalid />
</Preview>

```html
<ods-input label="Invalid" invalid />
```

> React

```jsx
const App = () => <OdsInput label="Invalid" invalid />
```


## Alias (as)

`attribute` `input | textarea` `input`

<Preview is-grid="true">
  <ods-input label="Name" as="textarea" />
</Preview>

```html
<ods-input label="Name" as="textarea" />
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" as="textarea" />
)
```

## Pill

`attribute` `boolean` `false`

> Use the `pill` attribute to render the input in pill format.

::: warning
Only works in outline appearance
:::

<Preview is-grid="true">
  <ods-input label="Pill format" pill />
</Preview>

```html
<ods-input label="Pill format" pill />
```

> React

```jsx
const App = () => <OdsInput label="Pill format" pill />
```

## Square
`attribute` `boolean` `false`

> Use the `square` attribute to render the input with straight edges.

::: warning
Only works in outline appearance
:::

<Preview is-grid="true">
  <ods-input label="Square format" square />
</Preview>

```html
<ods-input label="Square" square />
```

> React

```jsx
const App = () => <OdsInput label="Square" square />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-input label="Left Icon">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-input>
</Preview>

```html
<ods-input label="Left Icon">
  <span class="icon" slot="left-icon"> email </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Left Icon">
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
  <ods-input label="Right Icon">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Right Icon">
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Right Icon">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsInput>
)
```

## Left and Right Icon
`slots`

<Preview is-grid="true">
  <ods-input label="Person e-mail">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-input>
</Preview>

```html
<ods-input label="Person e-mail">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Person e-mail">
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
  <ods-input label="Name" required>
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required>
  <span class="ht" slot="helper-text">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required>
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
  <ods-input label="Name" required>
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required>
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required>
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsInput>
)
```

## Helper Texts
`slots`

<Preview is-grid="true">
  <ods-input label="Name" required>
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-input>
</Preview>

```html
<ods-input label="Name" required>
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-input>
```

> React

```jsx
const App = () => (
  <OdsInput label="Name" required>
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsInput>
)
```

