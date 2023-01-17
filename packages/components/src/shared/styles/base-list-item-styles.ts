import { css } from 'lit'
export default css`
  :host {
    position: relative;
    display: flex;
    align-items: stretch;
    padding: var(--ods-spacing-xxs) var(--ods-spacing-xs);
    font-family: var(--ods-font-family-base, 'system-ui');
    font-size: var(--ods-font-size-md);
    font-weight: var(--ods-font-weight-regular);
    color: var(--ods-color-neutral-base);
    border: thin solid transparent;
    border-radius: var(--ods-radii-sm);
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
    transition: background .2s ease-out, color .3s ease-out;
  }

  .label {
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .prefix,
  .suffix {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prefix--has-content ~ .label--has-content,
  .label--has-content ~ .suffix--has-content {
    padding-left: var(--ods-spacing-xs);
  }

  :host([disabled]) {
    outline: none;
    opacity: var(--ods-opacity-level-intense);
    cursor: not-allowed;
  }

  :host(:hover:not([disabled])){
    outline: none;
    color: var(--ods-color-primary-base);
    background-color: var(--ods-color-primary-100);
  }

  :host(:focus) {
    outline: none;
    color: var(--ods-color-neutral-base);
    border-color: var(--ods-color-primary-40);
  }

  :host([active]:not([disabled])){
    outline: none;
    color: var(--ods-color-primary-100);
    background-color: var(--ods-color-primary-base);
  }

  :host([selected]:not([disabled])){
    outline: none;
    color: var(--ods-color-success-40);
    background-color: var(--ods-color-success-100);
  }

  :host([selected]:not([disabled]):focus){
    border-color: var(--ods-color-success-40);
  }

`
