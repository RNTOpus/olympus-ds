import { css } from 'lit'
export default css`
  .label {
    font-family: var(--ods-font-family-base, 'system-ui');
    font-weight: var(--ods-font-weight-medium);
    font-size: var(--ods-label-font-size);
    color: var(--ods-label-color);
    transition: all 0.4s ease;
    letter-spacing: -0.02em;
    line-height: 130%;
  }
`
