import { html } from 'lit';
import '../button';

import Documentation from './button.doc.mdx';
import { argTypes } from './utils/argTypes';

export default {
  title: 'Web/Components/Button',
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

const Template = ({ state, size, label, type, disabled, outlined, fully }) => {
  return html` <ods-button
    state=${state}
    size=${size}
    type=${type}
    ?disabled=${disabled}
    ?outlined=${outlined}
    ?fully=${fully}
    onclick="console.log('CLICOU!')"
  >
    ${label}
  </ods-button>`;
};

export const Playground = Template.bind({});

Playground.args = {
  label: 'Botão',
  type: 'button',
  state: 'primary',
  size: 'normal',
  disabled: false,
  outlined: false,
  fully: false,
};
