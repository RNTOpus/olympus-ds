import { html } from 'lit-html'

import * as icons from './icons'

export const renderIcon = (iconName: string, color = 'currentColor', size = 24) => {
  return html`
    <svg class="icon -${iconName}" xmlns="http://www.w3.org/2000/svg" height="${size}" width="${size}" viewBox="0 0 ${size} ${size}" fill="none">
      <path fill="${color}" d="${icons[iconName]}" />
    </svg>
  `
}

export default renderIcon
