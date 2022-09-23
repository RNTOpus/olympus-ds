import '@olympus/button';
import { html } from 'lit-html';
import { argTypes } from './utils/argTypes';
import { renderHTML, renderSourceCode } from './utils/render';

export default {
  title: 'Components/Button/Variations',
  decorators: [(story) => html`<div class="story-page">${story()}</div>`],
  argTypes: argTypes(false),
  parameters: {
    controls: {
      hideNoControlsWarning: true,
      disabled: true,
    },
    actions: {
      handles: ['click'],
    },
  },
};

const PrimaryTemplate = () => renderHTML();
export const Primary = PrimaryTemplate.bind({});
Primary.parameters = {
  docs: {
    source: {
      code: renderSourceCode(),
      language: 'html',
      type: 'auto',
    },
  },
};

const DangerTemplate = () => renderHTML('Danger');
export const Danger = DangerTemplate.bind({});
Danger.parameters = {
  docs: {
    source: {
      code: renderSourceCode('danger'),
      language: 'html',
      type: 'auto',
    },
  },
};

const WarningTemplate = () => renderHTML('Warning');
export const Warning = WarningTemplate.bind({});
Warning.parameters = {
  docs: {
    source: {
      code: renderSourceCode('warning'),
      language: 'html',
      type: 'auto',
    },
  },
};

const SuccessTemplate = () => renderHTML('Success');
export const Success = SuccessTemplate.bind({});
Success.parameters = {
  docs: {
    source: {
      code: renderSourceCode('success'),
      language: 'html',
      type: 'auto',
    },
  },
};
