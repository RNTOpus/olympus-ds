<script setup>
  import '../../dist/packages/components/button'
  const version = '0.0.1'
  const packageName = '@olympus/components'
  const componentName = 'button'
  const cdn = `https://cdn.jsdelivr.net/npm/${packageName}/${componentName}@${version}/index.js`
</script>


# Button
<a style="color:var(--vp-c-brand)" href="#" :title="`${packageName}`" target="_blank">{{packageName}}</a>
<br />
<small><b>latest:</b> {{ version }} </small>


## Installation

<Tabs>
  <Tab active="true" title="NPM">
    <BlockCode lang="bash" :content="`npm install ${packageName}`" />
  </Tab>
  <Tab title="YARN">
    <BlockCode lang="bash" :content="`yarn add ${packageName}`" />
  </Tab>
</Tabs>

## Usage

<Tabs>
  <Tab active="true" title="JS/TS">
    <BlockCode lang="javascript" :content="`import '${packageName}/${componentName}'`" />
  </Tab>
  <Tab title="HTML">
    <BlockCode lang="html" content="<ods-button> Label </ods-button>" />
  </Tab>
  <Tab title="REACT">
    <BlockCode lang="jsx" :content="`import { OdsButton } from '${packageName}/react/${componentName}';
const App = () => (<OdsButton>Button</OdsButton>);`" />
  </Tab>
</Tabs>

## Examples

### Variants
>Use the `variant` attribute to change a button's color.<br />**Default:** Primary<br />**Type:** OdsButtonVariant

<Preview>
  <ods-button>Primary</ods-button>
  <ods-button variant="danger">Danger</ods-button>
  <ods-button variant="warning">Warning</ods-button>
  <ods-button variant="success">Success</ods-button>
</Preview>

<Tabs>
  <Tab active="true" title="HTML">
    <BlockCode lang="html" content='<ods-button>Primary</ods-button>
<ods-button variant="danger">Danger</ods-button>
<ods-button variant="warning">Warning</ods-button>
<ods-button variant="success">Success</ods-button>' />
  </Tab>
  <Tab title="REACT">
    <BlockCode lang="jsx" :content='`import { OdsButton } from "${packageName}/react/${componentName}";
import type { OdsButtonVariant } from "${packageName}/${componentName}";
const App = () => (
  <>
    <OdsButton>Primary</OdsButton>
    <OdsButton variant="danger">Danger</OdsButton>
    <OdsButton variant="warning">Warning</OdsButton>
    <OdsButton variant="success">Success</OdsButton>
  </>
);`' />
  </Tab>
</Tabs>


### Size
>Use the `size` attribute to change a button's size<br />**Default:** Normal<br />**Type:** OdsButtonSize

<Preview>
  <ods-button size="small">Small</ods-button>
  <ods-button size="medium">Medium</ods-button>
  <ods-button size="normal">Normal</ods-button>
</Preview>

<Tabs>
  <Tab active="true" title="HTML">
    <BlockCode lang="html" content='<ods-button size="small">Small</ods-button>
<ods-button size="medium">Medium</ods-button>
<ods-button size="normal">Normal</ods-button>' />
  </Tab>
  <Tab title="REACT">
    <BlockCode lang="jsx" :content='`import { OdsButton } from "${packageName}/react/${componentName}";
import type { OdsButtonSize } from "${packageName}/${componentName}";
const App = () => (
  <>
    <OdsButton size="small">Small</OdsButton>
    <OdsButton size="medium">Medium</OdsButton>
    <OdsButton size="normal">Normal</OdsButton>
  </>
);`' />
  </Tab>
</Tabs>


### Outlined
>Use the `outlined` attribute to render outlined buttons with transparent backgrounds

<Preview>
  <ods-button outlined>Primary</ods-button>
  <ods-button variant="danger" outlined>Danger</ods-button>
  <ods-button variant="warning" outlined>Warning</ods-button>
  <ods-button variant="success" outlined>Success</ods-button>
</Preview>

<Tabs>
  <Tab active="true" title="HTML">
    <BlockCode lang="html" content='<ods-button outlined>Primary</ods-button>
<ods-button variant="danger" outlined>Danger</ods-button>
<ods-button variant="warning" outlined>Warning</ods-button>
<ods-button variant="success" outlined>Success</ods-button>' />
  </Tab>
  <Tab title="REACT">
    <BlockCode lang="jsx" :content='`import { OdsButton } from "${packageName}/react/${componentName}";
const App = () => (
  <>
    <OdsButton outlined>Primary</OdsButton>
    <OdsButton variant="danger" outlined>Danger</OdsButton>
    <OdsButton variant="warning" outlined>Warning</OdsButton>
    <OdsButton variant="success" outlined>Success</OdsButton>
  </>
);`' />
  </Tab>
</Tabs>

### Disabled
>Use the `disabled` attribute to disable a button.

<Preview>
  <ods-button disabled>Primary</ods-button>
  <ods-button variant="danger" disabled>Danger</ods-button>
  <ods-button variant="warning" disabled>Warning</ods-button>
  <ods-button variant="success" disabled>Success</ods-button>
</Preview>

<Tabs>
  <Tab active="true" title="HTML">
    <BlockCode lang="html" content='<ods-button disabled>Primary</ods-button>
<ods-button variant="danger" disabled>Danger</ods-button>
<ods-button variant="warning" disabled>Warning</ods-button>
<ods-button variant="success" disabled>Success</ods-button>' />
  </Tab>
  <Tab title="REACT">
    <BlockCode lang="jsx" :content='`import { OdsButton } from "${packageName}/react/${componentName}";
const App = () => (
  <>
    <OdsButton disabled>Primary</OdsButton>
    <OdsButton variant="danger" disabled>Danger</OdsButton>
    <OdsButton variant="warning" disabled>Warning</OdsButton>
    <OdsButton variant="success" disabled>Success</OdsButton>
  </>
);`' />
  </Tab>
</Tabs>

### Ghost
>Use the `ghost` attribute to render a button with no background and no border.

<Preview>
  <ods-button ghost>Primary</ods-button>
  <ods-button variant="danger" ghost>Danger</ods-button>
  <ods-button variant="warning" ghost>Warning</ods-button>
  <ods-button variant="success" ghost>Success</ods-button>
</Preview>

<Tabs>
  <Tab active="true" title="HTML">
    <BlockCode lang="html" content='<ods-button ghost>Primary</ods-button>
<ods-button variant="danger" ghost>Danger</ods-button>
<ods-button variant="warning" ghost>Warning</ods-button>
<ods-button variant="success" ghost>Success</ods-button>' />
  </Tab>
  <Tab title="REACT">
    <BlockCode lang="jsx" :content='`import { OdsButton } from "${packageName}/react/${componentName}";
const App = () => (
  <>
    <OdsButton ghost>Primary</OdsButton>
    <OdsButton variant="danger" ghost>Danger</OdsButton>
    <OdsButton variant="warning" ghost>Warning</OdsButton>
    <OdsButton variant="success" ghost>Success</OdsButton>
  </>
);`' />
  </Tab>
</Tabs>

### Fully
>Use the `fully` attribute to apply 100% width to the button.

<Preview is-grid="true">
  <ods-button fully>Primary</ods-button>
  <ods-button variant="danger" fully>Danger</ods-button>
  <ods-button variant="warning" fully>Warning</ods-button>
  <ods-button variant="success" fully>Success</ods-button>
</Preview>

<Tabs>
  <Tab active="true" title="HTML">
    <BlockCode lang="html" content='<ods-button fully>Primary</ods-button>
<ods-button variant="danger" fully>Danger</ods-button>
<ods-button variant="warning" fully>Warning</ods-button>
<ods-button variant="success" fully>Success</ods-button>' />
  </Tab>
  <Tab title="REACT">
    <BlockCode lang="jsx" :content='`import { OdsButton } from "${packageName}/react/${componentName}";
const App = () => (
  <>
    <OdsButton fully>Primary</OdsButton>
    <OdsButton variant="danger" fully>Danger</OdsButton>
    <OdsButton variant="warning" fully>Warning</OdsButton>
    <OdsButton variant="success" fully>Success</OdsButton>
  </>
);`' />
  </Tab>
</Tabs>


### Rounded
>Use the `rounded` attribute to change the rounded shape of the button<br />**Default:** Standard<br />**Type:** OdsRoundedButton

<Preview>
  <ods-button rounded="standard">Standard</ods-button>
  <ods-button rounded="none">None</ods-button>
  <ods-button rounded="pill">Pill</ods-button>
  <ods-button rounded="circle">+</ods-button>
</Preview>

<Tabs>
  <Tab active="true" title="HTML">
    <BlockCode lang="html" content='<ods-button rounded="standard">Standard</ods-button>
<ods-button rounded="none">None</ods-button>
<ods-button rounded="pill">Pill</ods-button>
<ods-button rounded="circle">+</ods-button>' />
  </Tab>
  <Tab title="REACT">
    <BlockCode lang="jsx" :content='`import { OdsButton } from "${packageName}/react/${componentName}";
const App = () => (
  <>
    <OdsButton rounded="standard">Standard</OdsButton>
    <OdsButton rounded="none">None</OdsButton>
    <OdsButton rounded="pill">Pill</OdsButton>
    <OdsButton rounded="circle">+</OdsButton>
  </>
);`' />
  </Tab>
</Tabs>

### Slots
>To add a label to the button, just define the text or some html element. <br />Use the `prefix` and `suffix` slots to add icons.

<Preview>
  <ods-button rounded="standard">
    <span class="material-symbols-outlined" style="display: flex; padding: 0"> settings </span>
  </ods-button>
  <ods-button rounded="standard">
    <span class="material-symbols-outlined" slot="prefix"> settings </span>
    Settings
  </ods-button>
  <ods-button rounded="standard">
    <span>Next</span>
    <span class="material-symbols-outlined" slot="suffix"> chevron_right </span>
  </ods-button>
  <ods-button rounded="standard">
    <span class="material-symbols-outlined" slot="prefix"> link </span>
    Open
    <span class="material-symbols-outlined" slot="suffix" style="font-size: 20px"> open_in_new </span>
  </ods-button>
</Preview>

<Tabs>
  <Tab active="true" title="HTML">
    <BlockCode lang="html" content='<ods-button>
  <span class="mso" style="display: flex; padding: 0"> settings </span>
</ods-button>
<ods-button>
  <span class="mso" slot="prefix"> settings </span>
  Settings
</ods-button>
<ods-button>
  <span>Next</span>
  <span class="mso" slot="suffix"> chevron_right </span>
</ods-button>
<ods-button>
  <span class="mso" slot="prefix"> link </span>
    Open
  <span class="mso" slot="suffix" style="font-size: 20px"> open_in_new </span>
</ods-button>' />
  </Tab>
  <Tab title="REACT">
    <BlockCode lang="jsx" :content='`import { OdsButton } from "${packageName}/react/${componentName}";
const App = () => (
  <>
    <OdsButton>
      <span class="mso" style="display: flex; padding: 0"> settings </span>
    </OdsButton>
    <OdsButton>
       <span class="mso" slot="prefix"> settings </span>
      Settings
    </OdsButton>
    <OdsButton>
      <span>Next</span>
      <span class="mso" slot="suffix"> chevron_right </span>
    </OdsButton>
    <OdsButton>
      <span class="mso" slot="prefix"> link </span>
        Open
      <span class="mso" slot="suffix" style="font-size: 20px"> open_in_new </span>
    </OdsButton>
  </>
);`' />
  </Tab>
</Tabs>

::: tip Material Icon
In the examples above, Material Symbols was used,
`class=mso` equal `class=material-symbols-outlined`
:::

## Importing

<Tabs>
  <Tab active="true" title="SCRIPT">
    <small>To import this component from the CDN using a script tag.</small>
    <BlockCode lang="html" :content='`<script type="module" src="${cdn}"></script>`' />
  </Tab>
  <Tab title="IMPORT">
    <small>To import this component from the CDN using a Javascript import.</small>
    <BlockCode lang="js" :content='`import "${cdn}"`' />
  </Tab>
  <Tab title="BUNDLER">
    <small>To import this component using a bundler.</small>
    <BlockCode lang="js" :content='`import "${packageName}/${componentName}"`' />
  </Tab>
  <Tab title="REACT">
    <small>To import this component as a React Component.</small>
    <BlockCode lang="js" :content='`import { OdsButton } from "${packageName}/react/${componentName}"`' />
  </Tab>
</Tabs>


## Properties

| Name        | Description           | Type  | Default  |
| ------------|:---------------------:| -----| --------|
| `variant`   | The button's variant. <br /> <sub>Type: `OdsButtonVariant`</sub> | `'primary'` <br /> `'danger'` <br /> `'warning'` <br /> `'success'` | `'primary'`
| `size`   | The button's size. <br /> <sub>Type: `OdsButtonSize`</sub> | `'small'` <br /> `'medium'` <br /> `'normal'` | `'normal'`
| `type`   | The button's type. <br /> <sub>Type: `OdsButtonType`</sub> | `'button'` <br /> `'submit'` <br /> `'reset'` | `'button'`
| `oulined`   | Render outlined buttons with transparent backgrounds | `boolean` | `false`
| `disabled`   | Disabled button | `boolean` | `false`
| `fully`   | Apply 100% width to the button | `boolean` | `false`
| `rounded`   | The button's rounded shape. <br /> <sub>Type: `OdsRoundedButton`</sub> | `'standard'` <br /> `'none'` <br /> `'pill'` <br /> `'circle'` | `'standard'`
| `ghost`   | Render buttons without background and border | `boolean` | `false`


## Events

| Event        | React Event   | Description                         | Event Detail
| -------------| --------------|:-----------------------------------:| -----------| 
| `ods-blur`   | `onOdsBlur`   | Emitted when the button loses focus | -
| `ods-focus`  | `onOdsFocus`  | Emitted when the button gains focus | -

## Methods

| Event        | Description                   | Arguments
| -------------| ------------------------------|-----------| 
| `click`      | Click on the button           | -
| `focus`      | Focus on the button           | `options: FocusOptions`
| `blur`       | Removes focus from the button | -

## Slots

| Name     | Description                       
| ---------| ---------------------------------|
| default  | The button's label. 
| `prefix` | Used to prepend an icon or similar element to the button.
| `suffix` | Used to append an icon or similar element to the button.

## CSS Parts

| Name     | Description                       
| ---------| ---------------------------------|
| `button` | The native button component.
| `label`  | The `<span>` button label.

