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
    position: {
      options: ['relative', 'topRight', 'topLeft', 'topCenter', 'bottomRight', 'bottomLeft', 'bottomCenter'],
      control: { type: 'select' }
    },
    open: { control: 'boolean' },
    timeout: { control: 'number' },
    outline: { control: 'boolean' }
  }
}

const Template: Story = ({ message, variant, title, open, timeout, position, outline }) =>
  html`
    <ods-toast
      variant=${variant}
      title=${title}
      ?open=${open}
      timeout=${timeout}
      position=${position}
      ?outline=${outline}
    >
      <span class="mso" slot="icon">🐙</span>
      ${message}
    </ods-toast>
  `

export const Primary = Template.bind({})
Primary.args = {
  title: 'Toast Title',
  message: 'Toast',
  variant: 'primary',
  open: true,
  timeout: 0,
  position: 'relative',
  outline: false
}
