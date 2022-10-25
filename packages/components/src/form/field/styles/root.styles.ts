import { css } from 'lit'
import labelStyles from './label.styles'
import fieldStyles from './field.styles'
import helperTextStyles from './helper-text.styles'

export default css`
  :host {
    display: flex;
    position: relative;
    --ods-field-label-color: var(--ods-color-neutral-base);
    --ods-field-label-font-size: var(--ods-font-size-sm);
    --ods-field-width: 100%;
    --ods-field-height: 3.125rem;
    --ods-field-opacity: 1;
    --ods-field-cursor: default;
    --ods-field-bg-color: var(--ods-color-neutral-white);
    --ods-field-text-color: var(--ods-color-neutral-30);
    --ods-field-icon-color: var(--ods-color-neutral-30);
    --ods-field-border-color: var(--ods-color-neutral-80);
    --ods-field-font-size: var(--ods-font-size-md);
    --ods-field-border-radius: var(--ods-radii-xs);
    --ods-field-helper-text-color: var(--ods-color-primary-base);
    --ods-field-helper-text-font-size: var(--ods-font-size-tiny);
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

  .container * {
    opacity: var(--ods-field-opacity);
    cursor: var(--ods-field-cursor);
  }

  :host([invalid]) {
    --ods-field-border-color: var(--ods-color-danger-60);
    --ods-field-icon-color: var(--ods-color-danger-base);
    --ods-field-helper-text-color: var(--ods-color-danger-base);
  }

  :host([valid]) {
    --ods-field-border-color: var(--ods-color-success-base);
    --ods-field-icon-color: var(--ods-color-success-40);
    --ods-field-helper-text-color: var(--ods-color-success-30);
  }

  :host([focused]) {
    --ods-field-label-color: var(--ods-color-primary-base);
  }

  :host([focused]),
  :host(:not([disabled]):not([valid]):not([invalid])) .field:hover,
  :host(:not([disabled]):not([valid]):not([invalid])) .label:hover {
    --ods-field-border-color: var(--ods-color-primary-base);
  }

  :host([pill][appearance="outline"]) {
    --ods-field-border-radius: var(--ods-radii-pill);
  }

  :host([square][appearance="outline"]) {
    --ods-field-border-radius: var(--ods-radii-none);
  }

  :host([disabled]) {
    --ods-field-opacity: var(--ods-opacity-level-intense);
    --ods-field-cursor: not-allowed;
  }

  ${labelStyles}

  ${fieldStyles}

  ${helperTextStyles}
`
