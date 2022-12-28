import { css } from 'lit'
export default css`
  :host {
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: var(--ods-spacing-sm);
    width: 350px;

    --ods-toast-width: max-content;
    --ods-toast-height: var(--ods-size-xxl);
    --ods-toast-bg-color: var(--ods-color-neutral-base);
    --ods-toast-text-color: var(--ods-color-neutral-100);
    --ods-toast-border-color: transparent;
    --ods-toast-title-font-size: var(--ods-font-size-tiny);
    --ods-toast-title-font-weight: var(--ods-font-weight-bold);
    --ods-toast-font-size: var(--ods-font-size-sm);
    --ods-toast-border: none;
    --ods-toast-border-radius: var(--ods-radii-xs);
    --ods-toast-shadow: unset;
    --ods-toast-shadow-offset-x: 0;
    --ods-toast-shadow-offset-y: var(--ods-size-xxxs);
    --ods-toast-shadow-blur-radius: var(--ods-size-xxxs);
    --ods-toast-shadow-spread-radius: none;
    --ods-toast-shadow-color: rgba(0, 0, 0, 0.16);

    background-color: var(--ods-toast-bg-color);
    color: var(--ods-toast-text-color);
    border-style: solid;
    border-width: var(--ods-border-stroke-xxs);
    border-color: var(--ods-toast-border-color);
    background-color: var(--ods-toast-bg-color);
    color: var(--ods-toast-text-color);
    border-radius: var(--ods-toast-border-radius);
    font-family: var(--ods-font-family-base, 'system-ui');
    font-weight: var(--ods-font-weight-bold);
    font-size: var(--ods-toast-font-size);
    transition: all 0.4s ease;
    box-shadow: var(--ods-toast-shadow);
  }

  :host(:not([open])) {
    display: none;
  }

  :host([variant='primary']) {
    --ods-toast-bg-color: var(--ods-color-primary-base);
    --ods-toast-text-color: var(--ods-color-primary-100);
  }
  :host([variant='danger']) {
    --ods-toast-bg-color: var(--ods-color-danger-base);
    --ods-toast-text-color: var(--ods-color-danger-100);
  }
  :host([variant='warning']) {
    --ods-toast-bg-color: var(--ods-color-warning-base);
    --ods-toast-text-color: var(--ods-color-warning-10);
  }
  :host([variant='success']) {
    --ods-toast-bg-color: var(--ods-color-success-base);
    --ods-toast-text-color: var(--ods-color-success-10);
  }

  .body {
    display: flex;
    gap: var(--ods-spacing-xxs);
  }

  :host slot::slotted(*),
  .close {
    padding: 0 var(--ods-spacing-xxs);
    font-size: var(--ods-toast-font-size);
  }

  .close-button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .content .content-title {
    font-size: var(--ods-toast-title-font-size);
    font-weight: var(--ods-toast-title-font-weight);
    margin: 0 0 var(--ods-spacing-sm);
  }

  @media only screen and (max-width: 600px) {
    :host {
      width: 75vw;
    }
  }
`
