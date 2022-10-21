import { css } from 'lit'
import buttonCommonStyles from './button.common.styles'

export default css`

  ${ buttonCommonStyles }

  :host([variant='primary']) {
    --ods-button-bg-color: var(--ods-color-primary-base);
    --ods-button-text-color: var(--ods-color-primary-100);
  }
  :host([variant='danger']) {
    --ods-button-bg-color: var(--ods-color-danger-base);
    --ods-button-text-color: var(--ods-color-danger-100);
  }
  :host([variant='warning']) {
    --ods-button-bg-color: var(--ods-color-warning-base);
    --ods-button-text-color: var(--ods-color-warning-10);
  }
  :host([variant='success']) {
    --ods-button-bg-color: var(--ods-color-success-base);
    --ods-button-text-color: var(--ods-color-success-10);
  }

  /* Hover */
  :host([variant='primary']) .button:not(:disabled):not(:active):hover {
    --ods-button-bg-color: var(--ods-color-primary-60);
    --ods-button-shadow: var(--ods-button-shadow-offset-x) var(--ods-button-shadow-offset-y)
      var(--ods-button-shadow-blur-radius) var(--ods-button-shadow-color);
  }
  :host([variant='danger']) .button:not(:disabled):not(:active):hover {
    --ods-button-bg-color: var(--ods-color-danger-60);
  }
  :host([variant='warning']) .button:not(:disabled):not(:active):hover {
    --ods-button-bg-color: var(--ods-color-warning-60);
  }
  :host([variant='success']) .button:not(:disabled):not(:active):hover {
    --ods-button-bg-color: var(--ods-color-success-60);
  }


  /* Active */
  :host([variant='primary']) .button:not(:disabled):active {
    --ods-button-bg-color: var(--ods-color-primary-30);
    --ods-button-shadow: inset var(--ods-button-shadow-offset-x) var(--ods-button-shadow-offset-y)
      var(--ods-button-shadow-blur-radius) var(--ods-button-shadow-color);
  }
  :host([variant='danger']) .button:not(:disabled):active {
    --ods-button-bg-color: var(--ods-color-danger-30);
  }
  :host([variant='warning']) .button:not(:disabled):active {
    --ods-button-bg-color: var(--ods-color-warning-30);
    --ods-button-text-color: var(--ods-color-warning-100);
  }
  :host([variant='success']) .button:not(:disabled):active {
    --ods-button-bg-color: var(--ods-color-success-30);
    --ods-button-text-color: var(--ods-color-success-100);
  }
`
