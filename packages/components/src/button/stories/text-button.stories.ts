import { Story } from '@storybook/web-components'
import { html } from 'lit-html'

import '../text-button.component'

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
    disabled: { control: 'boolean' }
  }
}

const Template: Story = ({ label, variant, size, disabled }) => html` <ods-text-button
  variant=${variant}
  size=${size}
  ?disabled=${disabled}
>
  <span class="mso" slot="prefix">🐙</span>
  ${label}
  <span class="mso" slot="suffix">🚀</span>
</ods-text-button>`

export const Text = Template.bind({})
Text.args = {
  label: 'Button Outlined',
  variant: 'primary',
  size: 'normal',
  disabled: false
}
