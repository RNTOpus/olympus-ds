export type ButtonAttribute =
  | 'type'
  | 'color'
  | 'size'
  | 'disabled'
  | 'fully'
  | 'outlined';
export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonColor = 'primary' | 'danger' | 'warning' | 'success';
export type ButtonSize = 'small' | 'medium' | 'normal';
export type ButtonProps = {
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean | false;
  outlined?: boolean | false;
  fully?: boolean | false;
};
