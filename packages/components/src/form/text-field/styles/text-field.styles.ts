import { css } from 'lit'
export default css`
  :host {
    position: relative;
  }
  .input {
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    padding: 0px;
    outline: none;
    font-family: var(--ods-font-family-base, 'system-ui');
    font-weight: var(--ods-font-weight-regular);
    font-size: var(--ods-font-size-sm);
    color: var(--ods-color-neutral-30);
  }

  .input:disabled {
    cursor: not-allowed;
  }

  .input::placeholder,
  .input::-webkit-datetime-edit-text {
    color: var(--ods-color-neutral-70);
  }

  .input::-webkit-inner-spin-button,
  .input::-webkit-calendar-picker-indicator {
    padding-bottom: .8rem;
    cursor: pointer;
  }

  :host([as='textarea']) .input {
    padding: var(--ods-spacing-sm) 0;
    height: var(--ods-size-giga);
    overflow:hidden;
    box-sizing: border-box;
  }

`
