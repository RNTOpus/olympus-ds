# Text Field Components

| Name       | HTML             | React         |
| :--------- | :--------------- | :------------ |
| `Input`    | `<ods-input>`    | `OdsInput`    |
| `Textarea` | `<ods-textarea>` | `OdsTextarea` |

## Usage

```js
import '@olympus/components/input'
import '@olympus/components/textarea'
```

```html
<ods-input label="Title" />
<ods-textarea label="Description" />
```

> React

```jsx
import { OdsInput } from '@olympus/components/react/input'
import { OdsTextarea } from '@olympus/components/react/textarea'
const App = () => (
  <>
    <OdsInput label="Title" />
    <OdsTextarea label="Description" />
  </>
)
```

## Depends

> The `ods-field` component is used as a wrapper for other field components.

- [OdsField Props](../field/README.md)

## Templates

### Common

> The `common-template` has properties, states and methods common to input and textarea.

- [Common Props](./docs/common-props.md)

### Input

> The `input-template` has properties, states and methods to input element.<br />
> Renders the native input element

- [Input Usage](docs/input-usage.md)
- [Input Props](docs/input-props.md)


### Textarea

> The `textarea-template` has properties, states and methods to textarea element.<br />
> Renders the native textarea element

 - [Textarea Usage](docs/textarea-usage.md)
 - [Textarea Props](docs/textarea-props.md)


## Events

> The **events** are defined in the common template file

- [click to see the events](./docs/events.md)


## Methods

> The **methods** are defined in the common template file

- [click to see the methods](./docs/methods.md)

## Slots

- [click to see the slots](./docs/slots.md)

## CSS Parts

- [click to see the CSS parts](./docs/css-parts.md)
