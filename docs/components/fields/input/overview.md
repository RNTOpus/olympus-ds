# Input

## Usage

```js
import '@olympus/components/input'
```

```html
<ods-input label="name" />
```

> React

```jsx
import { OdsInput } from '@olympus/components/react/input'
const App = () => <OdsInput label="Name" />
```

## Examples

| Name                    | Description                                             |
| :---------------------- | :------------------------------------------------------ |
| [`Outline`](outline.md) | Default rendering                                       |
| [`Fill`](fill.md)       | Rendering with bottom border and gray background        |
| [`Inline`](inline.md)   | Rendering with bottom border and transparent background |
| [`Square`](square.md)   | Square border rendering                                 |
| [`Pill`](pill.md)       | Pill format rendering                                   |

## Properties

> The [native **input** attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input#atributos) supported in this component are: `some types` `autocomplete` `autocorrect` `autofocus` `disabled` [`enterkeyhint`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) `form` `inputmode` `max` `maxlength` `min` `minlength` `name` `pattern` `placeholder` `readonly` `required` `spellcheck` `step` `value`

### Below other attributes:

| Name         | Description                                                        | Type                                                                                                                                                                      | Default     |
| ------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `appearance` | Field appearance. <br /> <sub>Type: `OdsFieldAppearance`</sub>     | `'outline'` <br /> `'fill'` <br /> `'inline'`                                                                                                                             | `'outline'` |
| `type`       | Some types of native input. <br /> <sub>Type: `OdsInputType`</sub> | `'date'` <br /> `'datetime-local'` <br /> `'email'` <br /> `'number'` <br /> `'password'` <br /> `'search'` <br /> `'tel'` <br /> `'text'` <br /> `'time'` <br /> `'url'` | `'text'`    |
| `label`      | The field label.                                                   | `string`                                                                                                                                                                  | -           |
| `labelState` | Remove field label animation                                       | `boolean`                                                                                                                                                                 | `false`     |
| `pill`       | Render the field in pill format.                                   | `boolean`                                                                                                                                                                 | `false`     |
| `square`     | Render the field with straight edges.                              | `boolean`                                                                                                                                                                 | `false`     |
| `valid`      | Render the field with success colors.                              | `boolean`                                                                                                                                                                 | `false`     |
| `invalid`    | Render the field with danger colors.                               | `boolean`                                                                                                                                                                 | `false`     |

## Events

| Event             | React Event       | Description                                             | Event Detail |
| ----------------- | ----------------- | ------------------------------------------------------- | ------------ |
| `ods-blur`        | `onOdsBlur`       | Emitted when the field loses focus                      | -            |
| `ods-focus`       | `onOdsFocus`      | Emitted when the field gains focus                      | -            |
| `ods-change`      | `onOdsChange`     | Emitted when the field value is changed.                | `value`      |
| `ods-empty-click` | `onOdsEmptyClick` | Emitted when the clear field button is clicked          | -            |
| `ods-eye-click `  | `onOdsEyeClick`   | Emitted when the password view toggle button is clicked | -            |

## Methods

| Event   | Description                  | Arguments               |
| ------- | ---------------------------- | ----------------------- |
| `focus` | Focus on the field           | `options: FocusOptions` |
| `blur`  | Removes focus from the field | -                       |

## Slots

| Name              | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| `left-icon`       | Used to prepend an icon to the field.                         |
| `right-icon`      | Used to append an icon to the field.                          |
| `helper-text`     | Used to insert the content below the field.                   |
| `helper-text-end` | Used to insert the content below the field on the right side. |

## CSS Parts

| Name          | Description                              |
| ------------- | ---------------------------------------- |
| `wrapper`     | Access the `ods-field` custom component. |
| `field`       | The `<input>` element.                   |
| `label`       | The `<span>` field label.                |
| `icon-button` | The right icon `<button>`                |
