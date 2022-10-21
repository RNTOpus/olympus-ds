import { css } from 'lit'
export default css`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    --ods-button-width: max-content;
    --ods-button-height: var(--ods-size-xxl);
    --ods-button-bg-color: var(--ods-color-neutral-base);
    --ods-button-text-color: var(--ods-color-neutral-100);
    --ods-button-border-color: transparent;
    --ods-button-font-size: var(--ods-font-size-md);
    --ods-button-border: none;
    --ods-button-border-radius: var(--ods-radii-xs);
    --ods-button-shadow: unset;
    --ods-button-shadow-offset-x: 0;
    --ods-button-shadow-offset-y: var(--ods-size-xxxs);
    --ods-button-shadow-blur-radius: var(--ods-size-xxxs);
    --ods-button-shadow-spread-radius: none;
    --ods-button-shadow-color: rgba(0, 0, 0, 0.16);
  }

  :host([outline]) {
    --ods-button-bg-color: transparent;
    --ods-button-border-color: var(--ods-color-neutral-base);
    --ods-button-text-color: var(--ods-color-neutral-base);
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--ods-button-width);
    height: var(--ods-button-height);
    padding: 0 var(--ods-spacing-xxs);
    border-style: solid;
    border-width: var(--ods-border-stroke-xxs);
    border-color: var(--ods-button-border-color);
    background-color: var(--ods-button-bg-color);
    color: var(--ods-button-text-color);
    border-radius: var(--ods-button-border-radius);
    font-family: var(--ods-font-family-base, 'system-ui');
    font-weight: var(--ods-font-weight-bold);
    font-size: var(--ods-button-font-size);
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: var(--ods-button-shadow);
  }

  .button:disabled {
    opacity: var(--ods-opacity-level-medium);
    cursor: not-allowed;
  }

  .button:focus {
    outline: none;
  }

  :host slot::slotted(*) {
    padding: 0 var(--ods-spacing-xxs);
    font-size: var(--ods-button-font-size);
  }

  :host .label {
    padding: 0 var(--ods-spacing-xxs);
  }

  /* Size */
  :host([size='medium']) {
    --ods-button-height: var(--ods-size-xl);
    --ods-button-font-size: var(--ods-font-size-sm);
  }
  :host([size='small']) {
    --ods-button-height: var(--ods-size-lg);
    --ods-button-font-size: var(--ods-font-size-tiny);
  }
  :host slot::slotted(*),
  :host([fully]) .button {
    --ods-button-width: 100%;
  }

  /* Rounded */
  :host([rounded='none']) {
    --ods-button-border-radius: var(--ods-radii-none);
  }
  :host([rounded='pill']) {
    --ods-button-border-radius: var(--ods-radii-pill);
  }
  :host([rounded='pill']) .button {
    min-width: var(--ods-size-giga);
  }
  :host([rounded='circle']) {
    --ods-button-border-radius: var(--ods-radii-circular);
    --ods-button-width: var(--ods-size-xxl);
    --ods-button-height: var(--ods-size-xxl);
  }
  :host([rounded='circle']) .button {
    padding: 0;
  }
`
