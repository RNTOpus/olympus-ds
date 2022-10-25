import { css } from 'lit'
export default css`
  .helper-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--ods-font-family-base, 'system-ui');
    font-weight: var(--ods-font-weight-regular);
    font-size: var(--ods-field-helper-text-font-size);
    color: var(--ods-field-helper-text-color);
    transition: all 0.4s ease;
    letter-spacing: -2%;
    line-height: 130%;
  }
  .helper-text .start {
    text-align: left;
  }
  .helper-text .end {
    text-align: right;
  }

  :host([pill]) .helper-text {
    padding: 0 var(--ods-spacing-md);
  }

  :host([appearance="inline"]) .helper-text {
    padding: 0;
  }
`
