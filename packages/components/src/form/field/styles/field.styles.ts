import { css } from 'lit'
export default css`
  .field {
    width: var(--ods-field-width);
    height: var(--ods-field-height);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: var(--ods-spacing-xs) var(--ods-spacing-sm);
    border-style: solid;
    border-width: var(--ods-border-stroke-xxs);
    border-color: var(--ods-field-border-color);
    background-color: var(--ods-field-bg-color);
    color: var(--ods-field-text-color);
    border-radius: var(--ods-field-border-radius);
    font-family: var(--ods-font-family-base, 'system-ui');
    font-weight: var(--ods-font-weight-bold);
    font-size: var(--ods-field-font-size);
    transition: all 0.4s ease;
  }

  .field .prefix,
  .field .suffix {
    color: currentColor;
  }

  .field .middle {
    flex: 1;
  }

  :host .field .prefix slot::slotted(*),
  :host .field .suffix slot::slotted(*) {
    display: flex !important;
    color: currentColor;
  }

  :host .field .prefix slot::slotted(*) {
    padding-right: var(--ods-spacing-sm)
  }

  :host .field .suffix slot::slotted(*) {
    padding-left: var(--ods-spacing-sm)
  }
`
