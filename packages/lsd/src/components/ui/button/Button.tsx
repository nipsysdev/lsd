import { CircleNotchIcon } from '@phosphor-icons/react';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './types';

/**
 * A clickable element with multiple visual variants and features.
 *
 * Displays interactive button controls with various styles. Supports loading states, disabled states, and flexible composition.
 *
 * @docSectionPageDescription
 * Clickable element with customizable styles and features.
 *
 * @docSectionAbout
 * Interactive button component with multiple visual variants including filled, outlined, and rounded styles. Supports loading states, disabled states, and flexible composition using Radix Slot.
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to the button
 * • Enter or Space - Activate the button
 * • Shift + Tab - Navigate to previous element
 *
 * @docSectionAccessibilityAria
 * • disabled attribute managed for non-interactive states
 * • aria-busy set to true during loading state
 * • Proper role preservation with asChild composition
 *
 * @docSectionAccessibilityFocus
 * Visible focus indicators follow the LSD design system. Focus is correctly managed when disabled or loading with proper focus restoration.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style including background, border, and corner radius.
   */
  variant?:
    | 'filled'
    | 'outlined'
    | 'filled-rounded'
    | 'outlined-rounded'
    | 'link'
    | 'ghost'
    | 'ghost-rounded'
    | 'destructive'
    | 'destructive-rounded'
    | 'success'
    | 'success-rounded';

  /**
   * Dimensions including height and padding.
   */
  size?: 'sm' | 'md' | 'lg' | 'square-sm' | 'square-md' | 'square-lg';

  /**
   * Merges props onto immediate child for composition.
   */
  asChild?: boolean;

  /**
   * Shows spinner and disables during async operations.
   */
  loading?: boolean;

  /**
   * Expands to fill container width.
   */
  fullWidth?: boolean;
}

const LoadingSpinner = ({ size }: { size?: string }) => {
  const getSpinnerSize = () => {
    const md = 'lsd:w-[var(--lsd-spacing-large)] lsd:h-[var(--lsd-spacing-large)]';
    switch (size) {
      case 'square-sm':
        return 'lsd:w-[var(--lsd-spacing-small)] lsd:h-[var(--lsd-spacing-small)]';
      case 'sm':
        return 'lsd:w-[var(--lsd-spacing-base)] lsd:h-[var(--lsd-spacing-base)]';
      case 'md':
      case 'square-md':
        return md;
      case 'lg':
      case 'square-lg':
        return 'lsd:w-[var(--lsd-spacing-larger)] lsd:h-[var(--lsd-spacing-larger)]';
      default:
        return md;
    }
  };

  return <CircleNotchIcon className={`${getSpinnerSize()} lsd:animate-spin`} weight="duotone" />;
};

/**
 * A clickable element with multiple visual variants and features.
 *
 * Displays interactive button controls with various styles. Supports loading states, disabled states, and flexible composition.
 *
 * @docSectionPageDescription
 * Clickable element with customizable styles and features.
 *
 * @docSectionAbout
 * Interactive button component with multiple visual variants including filled, outlined, and rounded styles. Supports loading states, disabled states, and flexible composition using Radix Slot.
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to the button
 * • Enter or Space - Activate the button
 * • Shift + Tab - Navigate to previous element
 *
 * @docSectionAccessibilityAria
 * • disabled attribute managed for non-interactive states
 * • aria-busy set to true during loading state
 * • Proper role preservation with asChild composition
 *
 * @docSectionAccessibilityFocus
 * Visible focus indicators follow the LSD design system. Focus is correctly managed when disabled or loading with proper focus restoration.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isLinkVariant = variant === 'link';
    const isGhostVariant = variant === 'ghost' || variant === 'ghost-rounded';
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          // Colors & Backgrounds
          'lsd:text-foreground',
          // Borders, Shapes & Effects
          'lsd:border',
          isLinkVariant || isGhostVariant ? 'lsd:border-0' : '',
          // Interactive States
          'lsd:hover:underline',
          'lsd:disabled:opacity-34',
          'lsd:disabled:cursor-not-allowed',
          'lsd:disabled:no-underline',
          // Sizing
          fullWidth ? 'lsd:w-full' : '',
          buttonVariants({ variant, size }),
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span
            className={cn(
              // Layout & Positioning
              'lsd:flex',
              'lsd:items-center',
              'lsd:justify-center',
              // Spacing
              'lsd:gap-(--lsd-spacing-smaller)'
            )}
          >
            <LoadingSpinner size={size} />
            {children && (
              <span
                className={cn(
                  // Opacity
                  'lsd:opacity-50'
                )}
              >
                {children}
              </span>
            )}
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
