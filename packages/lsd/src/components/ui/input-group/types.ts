export type InputGroupAddonAlign = 'inline-start' | 'inline-end';
export type InputGroupButtonSize = 'sm' | 'md' | 'lg';
export type InputGroupButtonVariant = 'text' | 'icon';
export type InputGroupSize = 'sm' | 'md' | 'lg';

export interface InputGroupProps extends React.ComponentProps<'div'> {
  /**
   * Size variant for the input group.
   */
  size?: InputGroupSize;
}

export interface InputGroupAddonProps extends React.ComponentProps<'div'> {
  /**
   * Alignment of the addon element.
   */
  align?: InputGroupAddonAlign;
}

export interface InputGroupButtonProps extends Omit<React.ComponentProps<'button'>, 'size'> {
  /**
   * Visual style variant for button.
   */
  variant?: InputGroupButtonVariant;

  /**
   * Size variant for button.
   */
  size?: InputGroupButtonSize;

  /**
   * Button type attribute.
   */
  type?: 'button' | 'submit' | 'reset';
}

export interface InputGroupTextProps extends React.ComponentProps<'span'> {}

export interface InputGroupInputProps extends Omit<React.ComponentProps<'input'>, 'size'> {}
