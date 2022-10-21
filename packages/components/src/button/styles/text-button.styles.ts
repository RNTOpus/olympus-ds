import { css } from 'lit'
import buttonCommonStyles from './button.common.styles'

export default css`

  ${ buttonCommonStyles }

  :host([variant='primary']) {
    --ods-button-bg-color: transparent;
    --ods-button-border-color: transparent;
    --ods-button-text-color: var(--ods-color-primary-base);
  }
  :host([variant='danger']) {
    --ods-button-bg-color: transparent;
    --ods-button-border-color: transparent;
    --ods-button-text-color: var(--ods-color-danger-base);
  }
  :host([variant='warning']) {
    --ods-button-bg-color: transparent;
    --ods-button-border-color: transparent;
    --ods-button-text-color: var(--ods-color-warning-30);
  }
  :host([variant='success']) {
    --ods-button-bg-color: transparent;
    --ods-button-border-color: transparent;
    --ods-button-text-color: var(--ods-color-success-30);
  }

  /* Hover */
  :host([variant='primary']) .button:not(:disabled):not(:active):hover {
    --ods-button-bg-color: transparent;
    --ods-button-border-color: transparent;
    --ods-button-text-color: var(--ods-color-primary-70);
    --ods-button-shadow: none;
  }
  :host([variant='danger']) .button:not(:disabled):not(:active):hover {
    --ods-button-text-color: var(--ods-color-danger-60);
  }
  :host([variant='warning']) .button:not(:disabled):not(:active):hover {
    --ods-button-text-color: var(--ods-color-warning-60);
  }
  :host([variant='success']) .button:not(:disabled):not(:active):hover {
    --ods-button-text-color: var(--ods-color-success-60);
  }

  /* Active */
  :host([variant='primary']) .button:not(:disabled):active {
    --ods-button-bg-color: transparent;
    --ods-button-border-color: transparent;
    --ods-button-text-color: var(--ods-color-primary-30);
    --ods-button-shadow: none;
  }
  :host([variant='danger']) .button:not(:disabled):active {
    --ods-button-text-color: var(--ods-color-danger-30);
  }
  :host([variant='warning']) .button:not(:disabled):active {
    --ods-button-text-color: var(--ods-color-warning-30);
  }
  :host([variant='success']) .button:not(:disabled):active {
    --ods-button-text-color: var(--ods-color-success-30);
  }
`
