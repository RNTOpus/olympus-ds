import { css } from 'lit'
import labelStyles from './label.styles'
import fieldStyles from './field.styles'
import helperTextStyles from './helper-text.styles'

export default css`
  :host {
    display: flex;
    position: relative;
    --ods-label-color: var(--ods-color-neutral-base);
    --ods-label-font-size: var(--ods-font-size-sm);
    --ods-field-width: 100%;
    --ods-field-height: auto;
    --ods-field-bg-color: var(--ods-color-neutral-white);
    --ods-field-text-color: var(--ods-color-neutral-30);
    --ods-field-border-color: var(--ods-color-neutral-80);
    --ods-field-font-size: var(--ods-font-size-md);
    --ods-field-border-radius: var(--ods-radii-xs);
  }

  :host * {
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--ods-spacing-xxxs);
    width: 100%;
  }

  ${labelStyles}

  ${fieldStyles}

  ${helperTextStyles}
`
