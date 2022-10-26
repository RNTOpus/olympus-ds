import { css } from 'lit'
export default css`
  .field {
    position: relative;
    width: var(--ods-field-width);
    height: var(--ods-field-height);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 var(--ods-spacing-sm);
    background-color: transparent;
    color: var(--ods-field-text-color);
    border: none;
    border-radius: var(--ods-field-border-radius);
    font-family: var(--ods-font-family-base, 'system-ui');
    font-weight: var(--ods-font-weight-bold);
    font-size: var(--ods-field-font-size);
    transition: all 0.4s ease;
  }

  .field .icon {
    color: var(--ods-field-icon-color);
    display: flex;
  }

  .field .middle {
    flex: 1;
  }

  :host([as="textarea"]) .field {
    height: auto;
  }

  :host([appearance="outline"]) .field {
    border: solid var(--ods-border-stroke-xxs) var(--ods-field-border-color);
  }

  :host([appearance="inline"]) .field {
    --ods-field-border-radius: 0;
    padding: 0;
    border-bottom: solid var(--ods-border-stroke-xxs) var(--ods-field-border-color);
  }

  :host([appearance="fill"]) .field {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: solid var(--ods-border-stroke-xxs) var(--ods-field-border-color);
    background-color: var(--ods-color-neutral-100)
  }

  :host .field .icon slot::slotted(*) {
    display: flex !important;
    color: var(--ods-field-icon-color);
  }

  :host .field .icon.-left slot::slotted(*) {
    padding-right: var(--ods-spacing-sm)
  }

  :host .field .icon.-right slot::slotted(*) {
    padding-left: var(--ods-spacing-sm)
  }

  :host([pill]) .field {
    padding: 0 var(--ods-spacing-md);
  }
`
