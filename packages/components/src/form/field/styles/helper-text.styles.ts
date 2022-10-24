import { css } from 'lit'
export default css`
  .helper-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--ods-font-family-base, 'system-ui');
    font-weight: var(--ods-font-weight-medium);
    font-size: var(--ods-font-size-tiny);
    color: var(--ods-label-color);
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
`
