<script setup>
  function onMenuItemClick(event) {
    alert(`{ ${event.detail.label}: ${event.detail.value} }`)
    console.log(event);
  }
</script>


# Multiple Selection Menu

:::tip Attribute
**name**: `selection-type`<br />
**type**: `none` `single` `multiple` | `SelectionType` <br />
**default:** `none`
:::

## Appearance

::: tip Type list
`none` `outlined` `shaded` | `OdsMenuAppearance`
:::

`attribute` `string` `none`

**Preview**

<Preview>
  <ods-menu selection-type="multiple">
    <ods-menu-item>None A</ods-menu-item>
    <ods-menu-item>None B</ods-menu-item>
  </ods-menu>
  <ods-menu appearance="outlined" selection-type="multiple">
    <ods-menu-item>Outlined A</ods-menu-item>
    <ods-menu-item>Outlined B</ods-menu-item>
  </ods-menu>
  <ods-menu appearance="shaded" selection-type="multiple">
    <ods-menu-item>Shaded A</ods-menu-item>
    <ods-menu-item>Shaded B</ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{2,3}
<ods-menu selection-type="multiple"> ... </ods-menu> // default
<ods-menu appearance="outlined" selection-type="multiple"> ... </ods-menu>
<ods-menu appearance="shaded" selection-type="multiple"> ... </ods-menu>
```

> React

```jsx{6,7}
... // import

const App = () => (
  <>
    <OdsMenu selection-type="multiple"> ... </OdsMenu> // default
    <OdsMenu appearance="outlined" selection-type="multiple"> ... </OdsMenu>
    <OdsMenu appearance="shaded" selection-type="multiple"> ... </OdsMenu>
  </>
)
```

## Orientation

::: tip Type list
`vertical` `horizontal` or `ListOrientation`
:::

`attribute` `string` `vertical`

**Preview**

<Preview is-grid="true">
  <ods-menu orientation="horizontal" selection-type="multiple" style="max-width: max-content;" >
   <ods-menu-item>None A</ods-menu-item>
   <ods-menu-item>None B</ods-menu-item>
  </ods-menu>
  <ods-menu appearance="outlined" orientation="horizontal" selection-type="multiple" style="max-width: max-content;" >
   <ods-menu-item>Outlined A</ods-menu-item>
   <ods-menu-item>Outlined B</ods-menu-item>
  </ods-menu>
  <ods-menu appearance="shaded" orientation="horizontal" selection-type="multiple" style="max-width: max-content;">
   <ods-menu-item>Shaded A</ods-menu-item>
   <ods-menu-item>Shaded B</ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html
<ods-menu orientation="horizontal" selection-type="multiple"> ... </ods-menu>
```

> React

```jsx{4}
... // import

const App = () => <OdsMenu orientation="horizontal" selection-type="multiple"> ... </OdsMenu>
```

## Label

`attribute` `string` `undefined`

> Use the `label` attribute as a menu key. This key and the value of the selected menu item will be returned in the change event.

**Preview**

<Preview is-grid="true">
  <ods-menu appearance="outlined" label="myMenu" selection-type="multiple" style="max-width: max-content;" >
   <ods-menu-item value="A">Item A</ods-menu-item>
   <ods-menu-item value="B" selected>Item B</ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{2,6}
<ods-menu 
  label="myMenu"
  orientation="horizontal" 
  selection-type="multiple">
  <ods-menu-item value="A">Item A</ods-menu-item>
  <ods-menu-item value="B" selected>Item B</ods-menu-item>
</ods-menu>
```

> React

```jsx{5,9}
... // import

const App = () => (
<OdsMenu
  label="myMenu"
  orientation="horizontal"
  selection-type="multiple">
    <OdsMenuItem value="A">Item A</OdsMenuItem>
    <OdsMenuItem value="B" selected>Item B</OdsMenuItem>
</OdsMenu>
)
```

**Return on `ods-change` event**

```js
{
  ...
  detail: {
    label: 'myMenu',
    value: 'B'
    ...
  }
}
```

## Value

`attribute` `string` `''`

> Use the `value` attribute to select one or more menu items on first load.

**Preview**

<Preview is-grid="true">
  <ods-menu appearance="outlined" label="myMenu" value="B,C" selection-type="multiple" style="max-width: max-content;" >
   <ods-menu-item value="A">Item A</ods-menu-item>
   <ods-menu-item value="B">Item B</ods-menu-item>
   <ods-menu-item value="C">Item C</ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{2,3}
<ods-menu 
  label="myMenu"
  value="B,C"
  orientation="horizontal" 
  selection-type="multiple">
  <ods-menu-item value="A">Item A</ods-menu-item>
  <ods-menu-item value="B">Item B</ods-menu-item>
  <ods-menu-item value="C">Item C</ods-menu-item>
</ods-menu>
```

> React

```jsx{5,6}
... // import

const App = () => (
<OdsMenu
  label="myMenu"
  value="B,C"
  orientation="horizontal"
  selection-type="multiple">
    <OdsMenuItem value="A">Item A</OdsMenuItem>
    <OdsMenuItem value="B">Item B</OdsMenuItem>
    <OdsMenuItem value="C">Item C</OdsMenuItem>
</OdsMenu>
)
```

**Return on `ods-change` event**

```js
{
  ...
  detail: {
    label: 'myMenu',
    value: 'B,C'
    ...
  }
}
```

## Value separator

`attribute` `string` `','`

> Use the `value-separator` attribute to separate the values.

**Preview**

<Preview is-grid="true">
  <ods-menu appearance="outlined" label="myMenu" value="B|C" value-separator="|" selection-type="multiple" style="max-width: max-content;" >
   <ods-menu-item value="A">Item A</ods-menu-item>
   <ods-menu-item value="B">Item B</ods-menu-item>
   <ods-menu-item value="C">Item C</ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{3,4}
<ods-menu 
  label="myMenu"
  value="B|C"
  value-separator="|"
  orientation="horizontal" 
  selection-type="multiple">
  <ods-menu-item value="A">Item A</ods-menu-item>
  <ods-menu-item value="B">Item B</ods-menu-item>
  <ods-menu-item value="C">Item C</ods-menu-item>
</ods-menu>
```

> React

```jsx{6,7}
... // import

const App = () => (
<OdsMenu
  label="myMenu"
  value="B|C"
  value-separator="|"
  orientation="horizontal"
  selection-type="multiple">
    <OdsMenuItem value="A">Item A</OdsMenuItem>
    <OdsMenuItem value="B">Item B</OdsMenuItem>
    <OdsMenuItem value="C">Item C</OdsMenuItem>
</OdsMenu>
)
```

**Return on `ods-change` event**

```js
{
  ...
  detail: {
    label: 'myMenu',
    value: 'B|C'
    ...
  }
}
```

## Selected

`attribute` `string[]` `[]`

> Use the `selected` attribute to select one or more menu items on first load.

**Preview**

<Preview is-grid="true">
  <ods-menu appearance="outlined" label="myMenu" :selected="['B', 'C']" selection-type="multiple" style="max-width: max-content">
   <ods-menu-item value="A">Item A</ods-menu-item>
   <ods-menu-item value="B">Item B</ods-menu-item>
   <ods-menu-item value="C">Item C</ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{2,3}
<ods-menu 
  label="myMenu"
  selected=['B', 'C']
  orientation="horizontal" 
  selection-type="multiple">
  <ods-menu-item value="A">Item A</ods-menu-item>
  <ods-menu-item value="B">Item B</ods-menu-item>
  <ods-menu-item value="C">Item C</ods-menu-item>
</ods-menu>
```

> React

```jsx{5,6}
... // import

const App = () => (
<OdsMenu
  label="myMenu"
  selected={['B', 'C']}
  orientation="horizontal"
  selection-type="multiple">
    <OdsMenuItem value="A">Item A</OdsMenuItem>
    <OdsMenuItem value="B">Item B</OdsMenuItem>
    <OdsMenuItem value="C">Item C</OdsMenuItem>
</OdsMenu>
)
```

**Return on `ods-change` event**

```js
{
  ...
  detail: {
    label: 'myMenu',
    value: 'B,C'
    ...
  }
}
```

::: warning
When the value attribute and the selected attribute are filled in, only the value will be considered in the first load.
:::

## Selected Menu Item

`attribute` `boolean` `false`

> As seen above it's possible to select one or more menu items on first load by the `value` or `selected` attributes of the `ods-menu`. But it also works by adding the `selected` attribute directly to the menu item.

**Preview**

<Preview is-grid="true">
  <ods-menu appearance="outlined" selection-type="multiple" style="max-width: max-content;" >
    <ods-menu-item>Item A</ods-menu-item>
    <ods-menu-item selected>Item B</ods-menu-item>
    <ods-menu-item selected>Item C</ods-menu-item>
  </ods-menu>
  <ods-menu appearance="outlined" orientation="horizontal" selection-type="multiple" style="max-width: max-content;" >
    <ods-menu-item>Item A</ods-menu-item>
    <ods-menu-item selected>Item B</ods-menu-item>
    <ods-menu-item selected>Item C</ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{3,4}
<ods-menu selection-type="multiple">
  <ods-menu-item>Item A</ods-menu-item>
  <ods-menu-item selected>Item B</ods-menu-item>
  <ods-menu-item selected>Item C</ods-menu-item>
</ods-menu>
```

> React

```jsx{6,7}
... // import

const App = () => (
  <OdsMenu selection-type="multiple">
    <OdsMenuItem>Item A</OdsMenuItem>
    <OdsMenuItem selected>Item B</OdsMenuItem>
    <OdsMenuItem selected>Item C</OdsMenuItem>
  </OdsMenu>
)
```

## Disabled

`attribute` `boolean` `false`

**Preview**

<Preview is-grid="true">
  <ods-menu appearance="outlined" selection-type="multiple" style="max-width: max-content;">
    <ods-menu-item>Item A</ods-menu-item>
    <ods-menu-item disabled>Item B</ods-menu-item>
    <ods-menu-item>Item C</ods-menu-item>
  </ods-menu>
  <ods-menu appearance="outlined" selection-type="multiple" orientation="horizontal" style="max-width: max-content;">
    <ods-menu-item>Item A</ods-menu-item>
    <ods-menu-item disabled>Item B</ods-menu-item>
    <ods-menu-item>Item C</ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{3}
<ods-menu selection-type="multiple">
  <ods-menu-item>Item A</ods-menu-item>
  <ods-menu-item disabled>Item B</ods-menu-item>
  <ods-menu-item>Item C</ods-menu-item>
</ods-menu>
```

> React

```jsx{6}
... // import

const App = () => (
  <OdsMenu selection-type="multiple">
    <OdsMenuItem>Item A</OdsMenuItem>
    <OdsMenuItem disabled>Item B</OdsMenuItem>
    <OdsMenuItem>Item C</OdsMenuItem>
  </OdsMenu>
)
```

## Divider

> Use the `ods-divider` component to separate menu items.

**Preview**

<Preview is-grid="true">
  <ods-menu appearance="outlined" selection-type="multiple" style="max-width: max-content;">
    <ods-menu-item>Item A</ods-menu-item>
    <ods-menu-item>Item B</ods-menu-item>
    <ods-divider />
    <ods-menu-item>Item C</ods-menu-item>
  </ods-menu>
  <ods-menu appearance="outlined" selection-type="multiple" orientation="horizontal" style="max-width: max-content;">
    <ods-menu-item>Item A</ods-menu-item>
    <ods-menu-item>Item B</ods-menu-item>
    <ods-divider vertical />
    <ods-menu-item>Item C</ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{4}
<ods-menu selection-type="multiple">
  <ods-menu-item>Item A</ods-menu-item>
  <ods-menu-item>Item B</ods-menu-item>
  <ods-divider />
  <ods-menu-item>Item C</ods-menu-item>
</ods-menu>
```

> React

```jsx{7}
... // import

const App = () => (
  <OdsMenu selection-type="multiple">
    <OdsMenuItem>Item A</OdsMenuItem>
    <OdsMenuItem>Item B</OdsMenuItem>
    <OdsDivider />
    <OdsMenuItem>Item C</OdsMenuItem>
  </OdsMenu>
)
```

## Suffix

> Use the `suffix` slot inside the `menu-item` to add icons or other element after the label.

**Preview**

<Preview is-grid="true">
  <ods-menu appearance="outlined" selection-type="multiple" style="max-width: max-content;">
    <ods-menu-item>Item A</ods-menu-item>
    <ods-menu-item>Item B</ods-menu-item>
    <ods-divider />
    <ods-menu-item>
      <div>Item C</div>
      <span class="material-symbols-outlined" slot="suffix"> settings </span>
    </ods-menu-item>
  </ods-menu>
  <ods-menu appearance="outlined" selection-type="multiple" orientation="horizontal" style="max-width: max-content;">
    <ods-menu-item>Item A</ods-menu-item>
    <ods-menu-item>Item B</ods-menu-item>
    <ods-divider vertical />
    <ods-menu-item>
    Item C
      <span class="material-symbols-outlined" slot="suffix"> settings </span>
    </ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{3}
<ods-menu selection-type="multiple">
  <ods-menu-item>
    <span class="icon" slot="suffix"> settings </span>
  </ods-menu-item>
</ods-menu>
```

> React

```jsx{6}
... // import

const App = () => (
  <OdsMenu selection-type="multiple">
    <OdsMenuItem>
      <span class="icon" slot="suffix"> settings </span>
    </OdsMenuItem>
  </OdsMenu>
)
```

## Events

> Every time the state of a menu item changes, the `ods-change` event is triggered.

**Preview**

<Preview is-grid="true">
  <ods-menu appearance="outlined" selection-type="multiple" label="myMenu" @ods-change="onMenuItemClick" style="max-width: max-content;">
    <ods-menu-item value="Item A">Item A</ods-menu-item>
    <ods-menu-item value="Item B">Item B</ods-menu-item>
    <ods-divider />
    <ods-menu-item value="Item C">
      Item C
      <span class="material-symbols-outlined" slot="suffix"> settings </span>
    </ods-menu-item>
  </ods-menu>
</Preview>

**Code**

```html{4,5}
// vue example
<ods-menu 
  selection-type="multiple" 
  label="myMenu" 
  @ods-change="onMenuItemClick">
  <ods-menu-item value="Item A">Item A</ods-menu-item>
  <ods-menu-item value="Item B">Item B</ods-menu-item>
</ods-menu>
```

> React

```jsx{6,7}
... // import

const App = () => (
  <OdsMenu 
    selection-type="multiple" 
    label="myMenu" 
    onOdsChange={onMenuItemClick}>
    <OdsMenuItem value="Item A">Item A</OdsMenuItem>
    <OdsMenuItem value="Item B">Item B</OdsMenuItem>
  </OdsMenu>
)
```

**Return on `ods-change` event**

```js
{
  ...
  detail: {
    label: 'myMenu',
    value: 'Item ?, Item ?'
    selected: ['Item ?', 'Item ?']
    selectedItems: [{SelectedMenuItem}]
    targetItem: {ClickedMenuItem}
    ...
  }
}
```
