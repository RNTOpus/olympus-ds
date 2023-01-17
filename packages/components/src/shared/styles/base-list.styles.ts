import { css } from 'lit'
export default css`
  :host {
    display: flex;
    flex-direction: column;
    position: relative;
    background: white;
    border-radius: var(--ods-radii-sm);
    padding: var(--ods-spacing-xs);
    gap: var(--ods-spacing-xxxs);
    z-index: var(--ods-z-index-9);
  }

  :host([appearance='outlined']) {
    border: thin solid var(--ods-color-neutral-90);
  }

  :host([appearance='shaded']) {
    border: thin solid var(--ods-color-neutral-90);
    box-shadow: 0 12px 32px var(--ods-color-neutral-90), 0 2px 6px var(--ods-color-neutral-80);
  }

  :host([orientation='horizontal']) {
    flex-direction: row;
  }

  :host slot::slotted(ods-divider) {
    --ods-divider-spacing: var(--ods-spacing-xxxs);
  }
`
