export type InputGroupAddonAlign = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';
export type InputGroupButtonSize = 'xs' | 'sm' | 'icon-xs' | 'icon-sm';

export interface InputGroupProps extends React.ComponentProps<'div'> {}

export interface InputGroupAddonProps extends React.ComponentProps<'div'> {
  align?: InputGroupAddonAlign;
}

export interface InputGroupButtonProps extends Omit<React.ComponentProps<'button'>, 'size'> {
  variant?: string;
  size?: InputGroupButtonSize;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputGroupTextProps extends React.ComponentProps<'span'> {}

export interface InputGroupInputProps extends Omit<React.ComponentProps<'input'>, 'size'> {}

export interface InputGroupTextareaProps extends React.ComponentProps<'textarea'> {}
