import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    color: {
      options: ['primary', 'danger', 'warning', 'success'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['small', 'medium', 'normal'],
      control: { type: 'inline-radio' },
    },
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Botão',
  fully: false,
  outlined: false,
  disabled: false,
  size: 'normal',
  color: 'primary'
};
