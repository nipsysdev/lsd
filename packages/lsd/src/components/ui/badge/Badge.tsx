import { XIcon } from '@phosphor-icons/react';
import { Slot } from '@radix-ui/react-slot';
import type * as React from 'react';
import { getDotSizeClasses } from '@/lib/size-utils';
import { cn } from '@/lib/utils';
import { type BadgeVariants, badgeVariants } from './types';

/**
 * Badge - Displays status, tags, or metadata.
 *
 * Small label for categorizing content or displaying status information.
 * Supports click interactions, dismissible badges, dot variants, and
 * icon placement for visual emphasis.
 *
 * @docSectionPageDescription
 * Displays status, tags, or metadata with optional interactions and dismissibility.
 *
 * @docSectionAbout
 * Small label component for categorizing content or displaying status information.
 * Supports clickable badges, dismissible badges with an X button, dot variants for compact indicators,
 * and icon placement for visual emphasis.
 *
 * @docSectionAccessibilityKeyboard
 * • Tab - Navigate to clickable badges
 * • Enter or Space - Activate clickable badge (when role="button")
 *
 * @docSectionAccessibilityAria
 * • role="button" when onClick is provided
 * • aria-label="Dismiss" on dismiss button
 * • Badge text should be descriptive of the status or category
 *
 * @docSectionAccessibilityFocus
 * • Clickable badges are focusable (tabIndex={0})
 * • Focus ring indicates keyboard focus on clickable badges
 */

export interface BadgeProps extends React.ComponentProps<'span'>, BadgeVariants {
  /**
   * Render the child as the root element.
   *
   * Merges props with the first child element for custom rendering.
   */
  asChild?: boolean;

  /**
   * Callback when dismiss button is clicked.
   *
   * Displays an X icon that triggers this callback when clicked.
   */
  onDismiss?: () => void;

  /**
   * Callback when badge is clicked.
   *
   * Makes the badge interactive and adds button role behavior.
   */
  onClick?: () => void;

  /**
   * Icon to display alongside badge text.
   *
   * Renders the icon positioned left or right based on iconPosition.
   */
  icon?: React.ReactNode;

  /**
   * Position of the icon relative to badge text.
   *
   * Controls whether icon appears before or after the text content.
   */
  iconPosition?: 'left' | 'right';

  /**
   * Display as a dot without text.
   *
   * Renders a circular dot indicator instead of a text badge.
   */
  dot?: boolean;
}

function Badge({
  className,
  variant,
  size,
  asChild = false,
  onDismiss,
  onClick,
  icon,
  iconPosition = 'left',
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span';
  const isClickable = Boolean(onClick);
  const isDot = dot || variant === 'dot';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick?.();
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDismiss?.();
  };

  const dotClasses = isDot ? getDotSizeClasses(size) : '';

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, size }),
        isClickable && 'lsd:cursor-pointer',
        isDot && 'lsd:rounded-full lsd:p-0 lsd:border-0',
        dotClasses,
        className
      )}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={handleKeyDown}
      onClick={isClickable ? onClick : undefined}
      {...props}
    >
      {isDot ? null : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="lsd:flex lsd:items-center lsd:justify-center">{icon}</span>
          )}
          {children && <span>{children}</span>}
          {icon && iconPosition === 'right' && (
            <span className="lsd:flex lsd:items-center lsd:justify-center">{icon}</span>
          )}
          {onDismiss && (
            <button
              type="button"
              className="lsd:flex lsd:items-center lsd:justify-center lsd:rounded-full lsd:hover:bg-black/10 lsd:dark:hover:bg-white/10 lsd:transition-colors lsd:cursor-pointer lsd:border-0 lsd:p-0 lsd:bg-transparent"
              onClick={handleDismiss}
              aria-label="Dismiss"
            >
              <XIcon weight="duotone" />
            </button>
          )}
        </>
      )}
    </Comp>
  );
}

export { Badge };
