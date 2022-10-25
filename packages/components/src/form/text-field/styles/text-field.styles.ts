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
  }

  .input:disabled {
    cursor: not-allowed;
  }

  .input::placeholder {
    color: var(--ods-color-neutral-70);
  }

`
