import { css } from 'lit'
import buttonCommonStyles from './button.common.styles'

export default css`

  ${ buttonCommonStyles }

  :host([variant='primary']) {
    --ods-button-bg-color: transparent;
    --ods-button-text-color: var(--ods-color-primary-base);
    --ods-button-border-color: var(--ods-color-primary-base);
  }
  :host([variant='danger']) {
    --ods-button-bg-color: transparent;
    --ods-button-text-color: var(--ods-color-danger-base);
    --ods-button-border-color: var(--ods-color-danger-base);
  }
  :host([variant='warning']) {
    --ods-button-bg-color: transparent;
    --ods-button-text-color: var(--ods-color-warning-30);
    --ods-button-border-color: var(--ods-color-warning-base);
  }
  :host([variant='success']) {
    --ods-button-bg-color: transparent;
    --ods-button-text-color: var(--ods-color-success-30);
    --ods-button-border-color: var(--ods-color-success-base);
  }

  /* hover */
  :host([variant='primary']) .button:not(:disabled):not(:active):hover {
    --ods-button-bg-color: transparent;
    --ods-button-text-color: var(--ods-color-primary-70);
    --ods-button-border-color: var(--ods-color-primary-60);
    filter: drop-shadow(
      var(--ods-button-shadow-offset-x) var(--ods-button-shadow-offset-y) var(--ods-button-shadow-blur-radius)
        var(--ods-button-shadow-color)
    );
  }
  :host([variant='danger']) .button:not(:disabled):not(:active):hover {
    --ods-button-text-color: var(--ods-color-danger-60);
    --ods-button-border-color: var(--ods-color-danger-60);
  }
  :host([variant='warning']) .button:not(:disabled):not(:active):hover {
    --ods-button-text-color: var(--ods-color-warning-60);
    --ods-button-border-color: var(--ods-color-warning-60);
  }
  :host([variant='success']) .button:not(:disabled):not(:active):hover {
    --ods-button-text-color: var(--ods-color-success-60);
    --ods-button-border-color: var(--ods-color-success-60);
  }

  /* active */
  :host([variant='primary']) .button:not(:disabled):active {
    --ods-button-bg-color: transparent;
    --ods-button-border-color: var(--ods-color-primary-30);
    --ods-button-text-color: var(--ods-color-primary-30);
  }
  :host([variant='danger']) .button:not(:disabled):active {
    --ods-button-border-color: var(--ods-color-danger-30);
    --ods-button-text-color: var(--ods-color-danger-30);
  }
  :host([variant='warning']) .button:not(:disabled):active {
    --ods-button-border-color: var(--ods-color-warning-30);
    --ods-button-text-color: var(--ods-color-warning-30);
  }
  :host([variant='success']) .button:not(:disabled):active {
    --ods-button-border-color: var(--ods-color-success-30);
    --ods-button-text-color: var(--ods-color-success-30);
  }
`
