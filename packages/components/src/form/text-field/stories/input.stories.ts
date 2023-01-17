import { html } from 'lit-html'
import { Story } from '@storybook/web-components'
import '../input.component'

export default {
  title: 'Input'
}

const Template: Story = ({ label }) => html`<ods-input label=${label} />`

export const Basic = Template.bind({})
Basic.args = {
  label: 'Input'
}
