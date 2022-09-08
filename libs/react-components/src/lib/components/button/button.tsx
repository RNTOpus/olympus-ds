import React from 'react';
import '@olympus-ds/component-styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: 'primary' | 'danger' | 'warning' | 'success';
  disabled?: boolean | false;
  size?: 'small' | 'medium' | 'normal';
  outlined?: boolean | false;
  fully?: boolean | false;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'primary',
      size = 'normal',
      label,
      fully,
      outlined,
      ...props
    },
    buttonRef
  ) => {
    return (
      <button
        className={`ods-button`}
        data-color={color}
        data-size={size}
        data-fully={fully}
        data-outlined={outlined}
        {...props}
        ref={buttonRef}
      >
        {label}
      </button>
    );
  }
);
Button.displayName = "Button"
export default React.memo(Button);
