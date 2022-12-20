import { html } from 'lit-html'
import { Meta, Story } from '@storybook/web-components'
import 'reflect-metadata'

export default {
  title: 'Introduction'
} as Meta

const Template: Story = () => html`<h1>Storybook para desenvolvimento</h1>`

export const Intro = Template.bind({})
