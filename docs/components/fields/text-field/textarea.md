# Text Field (alias|as)

:::tip Attribute
**name**: `alias | as`<br />
**type**: `input` `textarea` | `OdsTextFieldAlias` <br />
**default:** `input`
:::

## Label

`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Label (outline)" as="textarea" />
  <ods-text-field label="Label (fill)" appearance="fill" as="textarea" />
  <ods-text-field label="Label (inline)" appearance="inline" as="textarea" />
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Label" as="textarea" />
```

> React

```jsx
const App = () => <OdsTextField label="Label" as="textarea" />
```

## Static Label

> Use the `staticLabel` attribute to not animate the label.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Static Label (outline)" staticLabel as="textarea" />
  <ods-text-field label="Static Label (fill)" staticLabel appearance="fill" as="textarea" />
  <ods-text-field label="Static Label (inline)" staticLabel appearance="inline" as="textarea" />
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Static Label" as="textarea" staticLabel />
```

> React

```jsx
const App = () => <OdsTextField label="Static Label" as="textarea" staticLabel />
```

## Placeholder

`attribute` `string`

<Preview is-grid="true">
  <ods-text-field label="Search (outline)" placeholder="find a product by name" as="textarea" />
  <ods-text-field label="Search (fill)" placeholder="find a product by name" appearance="fill" as="textarea" />
  <ods-text-field label="Search (inline)" placeholder="find a product by name" appearance="inline" as="textarea" />
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Search" placeholder="find a product by name" as="textarea" />
```

> React

```jsx
const App = () => <OdsTextField label="Search" placeholder="find a product by name" as="textarea" />
```

## Disabled

`attribute` `boolean` `false`

> Use the `disabled` attribute to disable a textarea.

<Preview is-grid="true">
  <ods-text-field label="Disabled (outline)" disabled as="textarea" />
  <ods-text-field label="Disabled (fill)" disabled appearance="fill" as="textarea" />
  <ods-text-field label="Disabled (inline)" disabled appearance="inline" as="textarea" />
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Disabled" disabled as="textarea" />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled as="textarea" />
```

## Required

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Required (outline)" required as="textarea" />
  <ods-text-field label="Required (fill)" required appearance="fill" as="textarea" />
  <ods-text-field label="Required (inline)" required appearance="inline" as="textarea" />
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Required" required as="textarea" />
```

> React

```jsx
const App = () => <OdsTextField label="Disabled" disabled as="textarea" />
```

## Clearable

> Use the `clearable` attribute to render a button to clear the field.

`attribute` `boolean` `false`

<Preview is-grid="true">
  <ods-text-field label="Name (outline)" value="John Doe" clearable as="textarea" />
  <ods-text-field label="Name (fill)" value="John Doe" clearable appearance="fill" as="textarea" />
  <ods-text-field label="Name (inline)" value="John Doe" clearable appearance="inline" as="textarea" />
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Name" value="John Doe" clearable as="textarea" />
```

> React

```jsx
const App = () => <OdsTextField label="Name" value="John Doe" clearable as="textarea" />
```

## Valid

`attribute` `boolean` `false`

> Use the `valid` attribute to render the input with success colors.

<Preview is-grid="true">
  <ods-text-field label="Valid (outline)" valid as="textarea" />
  <ods-text-field label="Valid (fill)" valid appearance="fill" as="textarea" />
  <ods-text-field label="Valid (inline)" valid appearance="inline" as="textarea" />
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Valid" valid as="textarea" />
```

> React

```jsx
const App = () => <OdsTextField label="Valid" valid as="textarea" />
```

## Invalid

`attribute` `boolean` `false`

> Use the `invalid` attribute to render the input with danger colors.

<Preview is-grid="true">
  <ods-text-field label="Invalid (outline)" invalid as="textarea" />
  <ods-text-field label="Invalid (fill)" invalid appearance="fill" as="textarea" />
  <ods-text-field label="Invalid (inline)" invalid appearance="inline" as="textarea" />
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Invalid" invalid as="textarea" />
```

> React

```jsx
const App = () => <OdsTextField label="Invalid" invalid as="textarea" />
```

## Left Icon

`slot`

> Use the `left-icon` slot to insert the icon on the left.

<Preview is-grid="true">
  <ods-text-field label="Left Icon (outline)" as="textarea">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-text-field>
  <ods-text-field label="Left Icon (fill)" appearance="fill" as="textarea">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-text-field>
  <ods-text-field label="Left Icon (inline)" appearance="inline" as="textarea">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
  </ods-text-field>
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Left Icon" as="textarea">
  <span class="icon" slot="left-icon"> email </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Left Icon" as="textarea">
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
  <ods-text-field label="Right Icon (outline)" as="textarea">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
  <ods-text-field label="Right Icon (fill)" appearance="fill" as="textarea">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
  <ods-text-field label="Right Icon (inline)" appearance="inline" as="textarea">
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Right Icon" as="textarea">
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Right Icon" as="textarea">
    <span class="icon" slot="right-icon">
      person
    </span>
  </OdsTextField>
)
```

## Left and Right Icon

`slots`

<Preview is-grid="true">
  <ods-text-field label="Person e-mail (outline)" as="textarea">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
  <ods-text-field label="Person e-mail (fill)" appearance="fill" as="textarea">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
  <ods-text-field label="Person e-mail (inline)" appearance="inline" as="textarea">
    <span class="material-symbols-outlined" slot="left-icon"> alternate_email </span>
    <span class="material-symbols-outlined" slot="right-icon"> person </span>
  </ods-text-field>
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Person e-mail" as="textarea">
  <span class="icon" slot="left-icon"> email </span>
  <span class="icon" slot="right-icon"> person </span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Person e-mail" as="textarea">
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
  <ods-text-field label="Name (outline)" required as="textarea">
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-text-field>
  <ods-text-field label="Name (fill)" required appearance="fill" as="textarea">
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-text-field>
  <ods-text-field label="Name (inline)" required appearance="inline" as="textarea">
    <span class="ht" slot="helper-text"> * Required </span>
  </ods-text-field>
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Name" required as="textarea">
  <span class="ht" slot="helper-text">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required as="textarea">
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
  <ods-text-field label="Name (outline)" required as="textarea">
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-text-field>
  <ods-text-field label="Name (fill)" required appearance="fill" as="textarea">
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-text-field>
  <ods-text-field label="Name (inline)" required appearance="inline" as="textarea">
    <span class="ht" slot="helper-text-end"> * Required </span>
  </ods-text-field>
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Name" required as="textarea">
  <span class="ht" slot="helper-text-end">* Required</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required as="textarea">
    <span class="ht" slot="helper-text-end">
      * Required
    </span>
  </OdsTextField>
)
```

## Helper Texts

`slots`

<Preview is-grid="true">
  <ods-text-field label="Name (outline)" required as="textarea">
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-text-field>
  <ods-text-field label="Name (fill)" required appearance="fill" as="textarea">
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-text-field>
  <ods-text-field label="Name (inline)" required appearance="inline" as="textarea">
    <span class="ht" slot="helper-text">10 character limit</span>
    <span class="ht" slot="helper-text-end">0/10</span>
  </ods-text-field>
</Preview>

::: tip Variations
`appearance` `fill | inline`
:::

```html
<ods-text-field label="Name" required as="textarea">
  <span class="ht" slot="helper-text">10 character limit</span>
  <span class="ht" slot="helper-text-end">0/10</span>
</ods-text-field>
```

> React

```jsx
const App = () => (
  <OdsTextField label="Name" required as="textarea">
    <span class="ht" slot="helper-text">
      10 character limit
    </span>
    <span class="ht" slot="helper-text-end">
      0/10
    </span>
  </OdsTextField>
)
```
