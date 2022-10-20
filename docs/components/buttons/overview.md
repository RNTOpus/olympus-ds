# Buttons

## Components

| Name                                     | HTML                   | React              |
| :--------------------------------------- | :--------------------  | :---------------   |
| [`Basic`](basic.md)                      | `<ods-button>`         | `OdsButton`        |
| [`Filled Button`](filled-button.md)      | `<ods-filled-button>`  | `OdsFilledButton`  |
| [`Outlined Button`](outlined-button.md)  | `<ods-outlined-button>`| `OdsOutlinedButton`|
| [`Text Button`](text-button.md)          | `<ods-text-button>`    | `OdsTextButton`    |


## Properties

| Name       |       Description         | Type                      | Default      |
| ---------- | :-----------------------: | ------------------------- | ------------ |
| `variant`  |  The button's variant. <br /> <sub>Type: `OdsButtonVariant`</sub>   | `'primary'` <br /> `'danger'` <br /> `'warning'` <br /> `'success'` | `'primary'`  |
| `size`     |       The button's size. <br /> <sub>Type: `OdsTextButtonSize`</sub>       | `'small'` <br /> `'medium'` <br /> `'normal'`                       | `'normal'`   |
| `type`     |       The button's type. <br /> <sub>Type: `OdsTextButtonType`</sub>       | `'button'` <br /> `'submit'` <br /> `'reset'`                       | `'button'`   |
| `oulined`  |          Render outlined buttons with transparent backgrounds          | `boolean`                                                           | `false`      |
| `disabled` |                            Disabled button                             | `boolean`                                                           | `false`      |
| `fully`    |                     Apply 100% width to the button                     | `boolean`                                                           | `false`      |
| `rounded`  | The button's rounded shape. <br /> <sub>Type: `OdsRoundedButton`</sub> | `'standard'` <br /> `'none'` <br /> `'pill'` <br /> `'circle'`      | `'standard'` |
| `ghost`    |              Render buttons without background and border              | `boolean`                                                           | `false`      |

## Events

| Event       | React Event  |             Description             | Event Detail |
| ----------- | ------------ | :---------------------------------: | ------------ |
| `ods-blur`  | `onOdsBlur`  | Emitted when the button loses focus | -            |
| `ods-focus` | `onOdsFocus` | Emitted when the button gains focus | -            |

## Methods

| Event   | Description                   | Arguments               |
| ------- | ----------------------------- | ----------------------- |
| `click` | Click on the button           | -                       |
| `focus` | Focus on the button           | `options: FocusOptions` |
| `blur`  | Removes focus from the button | -                       |

## Slots

| Name     | Description                                               |
| -------- | --------------------------------------------------------- |
| default  | The button's label.                                       |
| `prefix` | Used to prepend an icon or similar element to the button. |
| `suffix` | Used to append an icon or similar element to the button.  |

## CSS Parts

| Name     | Description                  |
| -------- | ---------------------------- |
| `button` | The native button component. |
| `label`  | The `<span>` button label.   |
