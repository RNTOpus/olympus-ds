import { html } from 'lit';
import '@olympus/button';

import Documentation from './button.doc.mdx';
import { argTypes } from './utils/argTypes';

export default {
  title: 'Components/Button',
  argTypes: argTypes(),
  parameters: {
    actions: {
      handles: ['click'],
    },
    docs: {
      page: Documentation,
    },
  },
};

const getIcon = (icon, position = 'left') => html`<span class="material-symbols-outlined" slot="${position}-icon"> ${icon} </span>`

const Template = ({
  variant,
  size,
  label,
  type,
  disabled,
  outlined,
  fully,
  slot,
  leftIcon,
  rightIcon
}) => {
  return html`<ods-button label=${label} variant=${variant} size=${size} type=${type} ?disabled=${disabled} ?outlined=${outlined}
  ?fully=${fully} onclick="console.log('CLICOU!')">
  ${leftIcon !== 'none' ? getIcon(leftIcon) : ''}
  ${slot ? slot : ''}
  ${rightIcon !== 'none' ? getIcon(rightIcon, 'right') : ''}
</ods-button>`;
};

export const Default = Template.bind({});

Default.args = {
  label: 'Botão',
  type: 'button',
  variant: 'primary',
  size: 'normal',
  disabled: false,
  outlined: false,
  fully: false,
  slot: 'Renato',
  leftIcon: 'none',
  rightIcon: 'none'
};
