import { html } from 'lit-html'
import { Story } from '@storybook/web-components'
import '../input.component'

export default {
  title: 'Input',
  decorators: [
    story => html`<div style="display: flex; flex-direction: column; gap: 2rem; width: 40vw;">${story()}</div>`
  ],
  argTypes: {
    label: { type: 'text' },
    placeholder: { type: 'text' },
    staticLabel: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    type: {
      options: ['text', 'number', 'password', 'email', 'search', 'tel', 'url', 'date', 'time', 'datetime-local'],
      control: { type: 'select' }
    },
    valid: { control: 'boolean' },
    invalid: { control: 'boolean' },
    pill: { control: 'boolean' },
    square: { control: 'boolean' }
  },
  args: {
    label: 'Input',
    staticLabel: false,
    placeholder: 'Placeholder',
    disabled: false,
    required: false,
    clearable: false,
    type: 'text',
    valid: false,
    invalid: false,
    pill: false,
    square: false
  }
}

export const Fill: Story = ({
  label,
  staticLabel,
  placeholder,
  disabled,
  required,
  clearable,
  type,
  valid,
  invalid,
  pill,
  square
}) =>
  html` <ods-input
    appearance="fill"
    label=${label}
    ?staticLabel=${staticLabel}
    placeholder=${placeholder}
    ?disabled=${disabled}
    ?required=${required}
    ?clearable=${clearable}
    type=${type}
    ?valid=${valid}
    ?invalid=${invalid}
    ?pill=${pill}
    ?square=${square}
  >
    <span slot="left-icon"> 👍 </span>
    <span slot="right-icon"> 🐵 </span>
    <span class="ht" slot="helper-text">* Required</span>
    <span class="ht" slot="helper-text-end">* Required</span>
  </ods-input>`
