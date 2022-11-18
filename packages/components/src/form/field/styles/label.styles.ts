import { css } from 'lit'
export default css`
  .label {
    position: absolute;
    top: 0;
    left: 0;
    font-family: var(--ods-font-family-base, 'system-ui');
    font-weight: var(--ods-font-weight-medium);
    font-size: var(--ods-field-label-font-size);
    color: var(--ods-field-label-color);
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, top 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    transform-origin: left top;
    letter-spacing: -0.02em;
    line-height: 130%;
    z-index: 1;
    pointer-events: none;
  }
  :host([pill]) .label {
    padding: 0 var(--ods-spacing-xxs);
  }

  :host([labelState="static"]) .label {
    position: static;
  }

  :host([labelState="grow"]) .label {
    top: var(--ods-spacing-sm);
    left: var(--ods-spacing-sm);
  }

  :host([labelState="shrink"]) .label {
    text-transform: uppercase;
    top: var(--ods-spacing-xxs);
    left: var(--ods-spacing-sm);
    font-size: var(--ods-size-xxs);
  }

  :host([labelState="shrink"][hasLeftIcon]) .label,
  :host([labelState="grow"][hasLeftIcon]) .label {
    left: var(--ods-spacing-xxxl);
  }

  :host([labelState="shrink"]) .label ~ .field .middle {
    padding-top: var(--ods-spacing-xs);
  }

  :host([appearance="inline"]) .label {
    padding: 0;
    left: 0;
  }

  :host([appearance="inline"][hasLeftIcon]) .label {
    left: var(--ods-spacing-xl);
  }

`
