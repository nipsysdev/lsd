export type InputGroupAddonAlign = 'inline-start' | 'inline-end';
export type InputGroupButtonSize = 'sm' | 'md' | 'lg';
export type InputGroupButtonVariant = 'text' | 'icon';
export type InputGroupSize = 'sm' | 'md' | 'lg';

export interface InputGroupProps extends React.ComponentProps<'div'> {
  size?: InputGroupSize;
}

export interface InputGroupAddonProps extends React.ComponentProps<'div'> {
  align?: InputGroupAddonAlign;
}

export interface InputGroupButtonProps extends Omit<React.ComponentProps<'button'>, 'size'> {
  variant?: InputGroupButtonVariant;
  size?: InputGroupButtonSize;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputGroupTextProps extends React.ComponentProps<'span'> {}

export interface InputGroupInputProps extends Omit<React.ComponentProps<'input'>, 'size'> {}
