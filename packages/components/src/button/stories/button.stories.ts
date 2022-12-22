import { html } from 'lit-html'
import { Story } from '@storybook/web-components'
import '../button.component'

export default {
  title: 'Button'
}

const Template: Story = ({ label }) => html`<ods-button>${label}</ods-button>`

export const Basic = Template.bind({})
Basic.args = {
  label: 'Button'
}
