import { Slot } from '@radix-ui/react-slot';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type BadgeVariants, badgeVariants } from './types';
import { XIcon } from '@phosphor-icons/react';

export interface BadgeProps extends React.ComponentProps<'span'>, BadgeVariants {
  asChild?: boolean;
  onDismiss?: () => void;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
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

  // Get dot size based on size prop
  const getDotSize = () => {
    const md = 'lsd:w-[var(--lsd-spacing-small)] lsd:h-[var(--lsd-spacing-small)]';
    switch (size) {
      case 'sm':
        return 'lsd:w-[var(--lsd-spacing-smaller)] lsd:h-[var(--lsd-spacing-smaller)]';
      case 'md':
        return md;
      case 'lg':
        return 'lsd:w-[var(--lsd-spacing-base)] lsd:h-[var(--lsd-spacing-base)]';
      default:
        return md;
    }
  };

  const dotClasses = isDot ? getDotSize() : '';

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
              <XIcon weight="duotone"/>
            </button>
          )}
        </>
      )}
    </Comp>
  );
}

export { Badge };
