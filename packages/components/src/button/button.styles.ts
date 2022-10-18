import { css } from 'lit';

export default css`
:host {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  --ods-button-width:  max-content;
  --ods-button-height:  var(--ods-size-xxl);
  --ods-button-bg-color: var(--ods-color-primary-base);
  --ods-button-text-color: var(--ods-color-primary-100);
  --ods-button-border-color: transparent;
  --ods-button-font-size: var(--ods-font-size-md);
  --ods-button-border: none;
  --ods-button-border-radius: var(--ods-radii-xs);
  --ods-button-shadow: unset;
  --ods-button-shadow-offset-x: 0;
  --ods-button-shadow-offset-y: var(--ods-size-xxxs);
  --ods-button-shadow-blur-radius: var(--ods-size-xxxs);
  --ods-button-shadow-spread-radius: none;
  --ods-button-shadow-color: rgba(0, 0, 0, 0.16);
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--ods-button-width);
  height: var(--ods-button-height);
  padding: 0 var(--ods-spacing-xxs);
  border-style: solid;
  border-width: var(--ods-border-stroke-xxs);
  border-color: var(--ods-button-border-color);
  background-color: var(--ods-button-bg-color);
  color: var(--ods-button-text-color);
  border-radius: var(--ods-button-border-radius);
  font-family: var(--ods-font-family-base, 'system-ui');
  font-weight: var(--ods-font-weight-bold);
  font-size: var(--ods-button-font-size);
  cursor: pointer;
  transition: all .4s ease;
  box-shadow: var(--ods-button-shadow);
}

.button:disabled {
  opacity: var(--ods-opacity-level-medium);
  cursor: not-allowed;
}

.button:focus {
  outline: none;
}

:host slot::slotted(*) {
  padding: 0 var(--ods-spacing-xxs);
  font-size: var(--ods-button-font-size);
}

:host .label {
  padding: 0 var(--ods-spacing-xxs);
}

/* Color */
:host([variant="danger"]) {
  --ods-button-bg-color: var(--ods-color-danger-base);
  --ods-button-text-color: var(--ods-color-danger-100);
}
:host([variant="warning"]) {
  --ods-button-bg-color: var(--ods-color-warning-base);
  --ods-button-text-color: var(--ods-color-warning-10);
}
:host([variant="success"]) {
  --ods-button-bg-color: var(--ods-color-success-base);
  --ods-button-text-color: var(--ods-color-success-10);
}

/* Hover */
:host .button:not(:disabled):not(:active):hover {
  --ods-button-bg-color: var(--ods-color-primary-60);
  --ods-button-shadow: var(--ods-button-shadow-offset-x) var(--ods-button-shadow-offset-y) var(--ods-button-shadow-blur-radius) var(--ods-button-shadow-color);
}
:host([variant="danger"]) .button:not(:disabled):not(:active):hover {
  --ods-button-bg-color: var(--ods-color-danger-60);
}
:host([variant="warning"]) .button:not(:disabled):not(:active):hover {
  --ods-button-bg-color: var(--ods-color-warning-60);
}
:host([variant="success"]) .button:not(:disabled):not(:active):hover {
  --ods-button-bg-color: var(--ods-color-success-60);
}

/* Pressed */
:host .button:not(:disabled):active {
  --ods-button-bg-color: var(--ods-color-primary-30);
  --ods-button-shadow: inset var(--ods-button-shadow-offset-x) var(--ods-button-shadow-offset-y) var(--ods-button-shadow-blur-radius) var(--ods-button-shadow-color);
}
:host([variant="danger"]) .button:not(:disabled):active {
  --ods-button-bg-color: var(--ods-color-danger-30);
}
:host([variant="warning"]) .button:not(:disabled):active {
  --ods-button-bg-color: var(--ods-color-warning-30);
  --ods-button-text-color: var(--ods-color-warning-100);
}
:host([variant="success"]) .button:not(:disabled):active {
  --ods-button-bg-color: var(--ods-color-success-30);
  --ods-button-text-color: var(--ods-color-success-100);
}


/* Outlined */
:host([outlined]) {
  --ods-button-bg-color: transparent;
  --ods-button-text-color: var(--ods-color-primary-base);
  --ods-button-border-color: var(--ods-color-primary-base);
}
:host([outlined][variant="danger"]) {
  --ods-button-bg-color: transparent;
  --ods-button-text-color: var(--ods-color-danger-base);
  --ods-button-border-color: var(--ods-color-danger-base);
}
:host([outlined][variant="warning"])  {
  --ods-button-bg-color: transparent;
  --ods-button-text-color: var(--ods-color-warning-30);
  --ods-button-border-color: var(--ods-color-warning-base);
}
:host([outlined][variant="success"]) {
  --ods-button-bg-color: transparent;
  --ods-button-text-color: var(--ods-color-success-30);
  --ods-button-border-color: var(--ods-color-success-base);
}

/* Outlined:hover */
:host([outlined]) .button:not(:disabled):not(:active):hover {
  --ods-button-bg-color: transparent;
  --ods-button-text-color: var(--ods-color-primary-70);
  --ods-button-border-color: var(--ods-color-primary-60);
  filter: drop-shadow(var(--ods-button-shadow-offset-x) var(--ods-button-shadow-offset-y) var(--ods-button-shadow-blur-radius) var(--ods-button-shadow-color));
}
:host([outlined][variant="danger"]) .button:not(:disabled):not(:active):hover {
  --ods-button-text-color: var(--ods-color-danger-60);
  --ods-button-border-color: var(--ods-color-danger-60);
}
:host([outlined][variant="warning"]) .button:not(:disabled):not(:active):hover  {
  --ods-button-text-color: var(--ods-color-warning-60);
  --ods-button-border-color: var(--ods-color-warning-60);
}
:host([outlined][variant="success"]) .button:not(:disabled):not(:active):hover  {
  --ods-button-text-color: var(--ods-color-success-60);
  --ods-button-border-color: var(--ods-color-success-60);
}

/* Outlined:active */
:host([outlined]) .button:not(:disabled):active {
  --ods-button-bg-color: transparent;
  --ods-button-border-color: var(--ods-color-primary-30);
  --ods-button-text-color: var(--ods-color-primary-30);
}
:host([outlined][variant="danger"]) .button:not(:disabled):active {
  --ods-button-border-color: var(--ods-color-danger-30);
  --ods-button-text-color: var(--ods-color-danger-30);
}
:host([outlined][variant="warning"]) .button:not(:disabled):active {
  --ods-button-border-color: var(--ods-color-warning-30);
  --ods-button-text-color: var(--ods-color-warning-30);
}
:host([outlined][variant="success"]) .button:not(:disabled):active {
  --ods-button-border-color: var(--ods-color-success-30);
  --ods-button-text-color: var(--ods-color-success-30);
}

/* Size */
:host([size="medium"]) {
  --ods-button-height:  var(--ods-size-xl);
  --ods-button-font-size: var(--ods-font-size-sm);
}
:host([size="small"]) {
  --ods-button-height:  var(--ods-size-lg);
  --ods-button-font-size: var(--ods-font-size-tiny);
}
:host slot::slotted(*),
:host([fully]) .button {
  --ods-button-width: 100%;
}

/* Rounded */
:host([rounded="none"]) {
  --ods-button-border-radius: var(--ods-radii-none);
}
:host([rounded="pill"]) {
  --ods-button-border-radius: var(--ods-radii-pill);
}
:host([rounded="pill"]) .button {
  min-width: var(--ods-size-giga);
}
:host([rounded="circle"]) {
  --ods-button-border-radius: var(--ods-radii-circular);
  --ods-button-width: var(--ods-size-xxl);
  --ods-button-height: var(--ods-size-xxl);
}
:host([rounded="circle"]) .button {
  padding: 0
}

/* Ghost */
:host([ghost]) {
  --ods-button-bg-color: transparent;
  --ods-button-border-color: transparent;
  --ods-button-text-color: var(--ods-color-primary-base);
}
:host([ghost][variant="danger"]) {
  --ods-button-bg-color: transparent;
  --ods-button-border-color: transparent;
  --ods-button-text-color: var(--ods-color-danger-base);
}
:host([ghost][variant="warning"])  {
  --ods-button-bg-color: transparent;
  --ods-button-border-color: transparent;
  --ods-button-text-color: var(--ods-color-warning-30);
}
:host([ghost][variant="success"]) {
  --ods-button-bg-color: transparent;
  --ods-button-border-color: transparent;
  --ods-button-text-color: var(--ods-color-success-30);
}

/* Ghost:hover */
:host([ghost]) .button:not(:disabled):not(:active):hover {
  --ods-button-bg-color: transparent;
  --ods-button-border-color: transparent;
  --ods-button-text-color: var(--ods-color-primary-70);
  --ods-button-shadow: none;
}
:host([ghost][variant="danger"]) .button:not(:disabled):not(:active):hover {
  --ods-button-text-color: var(--ods-color-danger-60);
}
:host([ghost][variant="warning"]) .button:not(:disabled):not(:active):hover  {
  --ods-button-text-color: var(--ods-color-warning-60);
}
:host([ghost][variant="success"]) .button:not(:disabled):not(:active):hover  {
  --ods-button-text-color: var(--ods-color-success-60);
}

/* Ghost:active */
:host([ghost]) .button:not(:disabled):active {
  --ods-button-bg-color: transparent;
  --ods-button-border-color: transparent;
  --ods-button-text-color: var(--ods-color-primary-30);
  --ods-button-shadow: none;
}
:host([ghost][variant="danger"]) .button:not(:disabled):active {
  --ods-button-text-color: var(--ods-color-danger-30);
}
:host([ghost][variant="warning"]) .button:not(:disabled):active {
  --ods-button-text-color: var(--ods-color-warning-30);
}
:host([ghost][variant="success"]) .button:not(:disabled):active {
  --ods-button-text-color: var(--ods-color-success-30);
}
`;
