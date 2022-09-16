import { addons } from '@storybook/addons';
import webComponentsTheme from './webComponentsTheme';

addons.setConfig({
  theme: webComponentsTheme,
  panelPosition: 'right',
  enableShortcuts: false
});
