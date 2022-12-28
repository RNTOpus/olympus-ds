import { html } from 'lit-html'
import { Story } from '@storybook/web-components'
import '../toast.component'

export default {
  title: 'Toast',
  argTypes: {
    title: { type: 'text' },
    message: { type: 'text' },
    variant: {
      options: ['primary', 'danger', 'warning', 'success'],
      control: { type: 'select' }
    },
    open: { control: 'boolean' }
  }
}

const Template: Story = ({ message, variant, title, open }) =>
  html`
    <ods-toast variant=${variant} title=${title} ?open=${open}>
      <span class="mso" slot="icon">🐙</span>
      ${message}
    </ods-toast>
  `

export const Primary = Template.bind({})
Primary.args = {
  title: 'Toast Title',
  message: 'Toast',
  variant: 'primary',
  open: true
}
