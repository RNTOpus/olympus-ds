import { html } from 'lit-html';

import '../../../../../../dist/libs/web-components';

export default {
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
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

const templateButton = ({ color, size, label, type, disabled, outlined, fully }) => {
  return html` <ods-button
    color=${color}
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

export const Playground = templateButton.bind({});

Playground.args = {
  label: 'Botão',
  type: 'button',
  color: 'primary',
  size: 'normal',
  disabled: false,
  outlined: false,
  fully: false
};
