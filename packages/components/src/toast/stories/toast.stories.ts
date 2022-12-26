import { html } from 'lit-html'
import { Story } from '@storybook/web-components'
import '../toast.component'

export default {
  title: 'Toast'
}

const Template: Story = ({ label }) => html`<ods-toast>${label}</ods-toast>`

export const Primary = Template.bind({})
Primary.args = {
  label: 'Toast'
}
