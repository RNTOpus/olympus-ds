# Textarea Field

## Usage

```js
import '@olympus/components/textarea-field'
```

```html
<ods-textarea-field label="name" />
```

> React

```jsx
import { OdsTextField } from '@olympus/components/react/textarea-field '
const App = () => <OdsTextareaField label="Name" />
```

## Examples

| Name                    | Description                                             |
| :---------------------- | :------------------------------------------------------ |
| [`Outline`](outline.md) | Default rendering                                       |
| [`Fill`](fill.md)       | Rendering with bottom border and gray background        |
| [`Inline`](inline.md)   | Rendering with bottom border and transparent background |
| [`Square`](square.md)   | Square border rendering                                 |

## Properties

> The [native **textarea** attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/textarea#atributos) supported in this component are: `autocomplete` `autofocus` `disabled` [`enterkeyhint`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) `form` `maxlength` `minlength` `name` `placeholder` `readonly` `required` `spellcheck` `value`

### Below other attributes:

| Name         | Description                                                    | Type                                          | Default     |
| ------------ | -------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `appearance` | Field appearance. <br /> <sub>Type: `OdsFieldAppearance`</sub> | `'outline'` <br /> `'fill'` <br /> `'inline'` | `'outline'` |
| `label`      | The field label.                                               | `string`                                      | -           |
| `labelState` | Remove field label animation                                   | `boolean`                                     | `false`     |
| `square`     | Render the field with straight edges.                          | `boolean`                                     | `false`     |
| `valid`      | Render the field with success colors.                          | `boolean`                                     | `false`     |
| `invalid`    | Render the field with danger colors.                           | `boolean`                                     | `false`     |

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
| `field`       | The `<textarea>` element.                |
| `label`       | The `<span>` field label.                |
| `icon-button` | The right icon `<button>`                |
