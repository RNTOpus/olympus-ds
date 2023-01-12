import { Story } from '@storybook/web-components'
import { html } from 'lit-html'

import '../filled-button.component'

export default {
  title: 'Button',
  decorators: [
    story => html`<div style="display: flex; flex-direction: column; gap: 2rem; width: 40vw;">${story()}</div>`
  ],
  argTypes: {
    label: { type: 'text' },
    variant: {
      options: ['primary', 'danger', 'warning', 'success', 'basic', 'neutral'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'normal'],
      control: { type: 'select' }
    },
    rounded: {
      options: ['standard', 'none', 'pill', 'circle'],
      control: { type: 'select' }
    },
    disabled: { control: 'boolean' },
    fully: { control: 'boolean' }
  }
}

const Template: Story = ({ label, variant, size, rounded, disabled, fully }) => html` <ods-filled-button
  variant=${variant}
  size=${size}
  rounded=${rounded}
  ?disabled=${disabled}
  ?fully=${fully}
>
  <span class="mso" slot="prefix">🐙</span>
  ${label}
  <span class="mso" slot="suffix">🚀</span>
</ods-filled-button>`

export const Filled = Template.bind({})
Filled.args = {
  label: 'Button Filled',
  variant: 'primary',
  size: 'normal',
  rounded: 'standard',
  disabled: false,
  fully: false
}
