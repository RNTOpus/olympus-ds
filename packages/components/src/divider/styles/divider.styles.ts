import { css } from 'lit'
export default css`
  :host {
    --ods-divider-color: var(--ods-color-neutral-90);
    --ods-divider-width: var(--ods-border-stroke-xxs);
    --ods-divider-spacing: var(--ods-spacing-xs);
  }
  :host(:not([vertical])) {
    display: block;
    width: 100%;
    border-top: solid var(--ods-divider-width) var(--ods-divider-color);
    margin: var(--ods-divider-spacing) 0;
  }
  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--ods-divider-width) var(--ods-divider-color);
    margin: 0 var(--ods-divider-spacing);
  }
`
