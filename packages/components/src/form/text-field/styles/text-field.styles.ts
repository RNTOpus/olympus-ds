import { css } from 'lit'
export default css`
  :host {
    position: relative;
  }
  .text-field {
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


  .text-field:disabled {
    cursor: not-allowed;
  }

  .text-field::placeholder,
  .text-field::-webkit-datetime-edit-text {
    color: var(--ods-color-neutral-70);
  }

  .text-field::-webkit-inner-spin-button,
  .text-field::-webkit-calendar-picker-indicator {
    padding-bottom: .8rem;
    cursor: pointer;
  }

`
