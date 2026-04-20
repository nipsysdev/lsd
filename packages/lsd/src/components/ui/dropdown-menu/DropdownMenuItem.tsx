import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuItemProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
  /**
   * Adds extra left padding to align with other inset items.
   */
  inset?: boolean;
  /**
   * Visual style of the menu item.
   */
  variant?: 'default' | 'destructive';
}

/**
 * DropdownMenuItem - Selectable item in the dropdown menu with default and destructive variants.
 *
 * @exportAs sub
 */
export function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        // Base layout
        'lsd:relative lsd:flex lsd:cursor-default lsd:items-center',
        // Spacing and sizing
        'lsd:gap-(--lsd-spacing-smaller) lsd:rounded-none lsd:px-2 lsd:py-1.5',
        // Text
        'lsd:text-sm lsd:outline-none lsd:select-none',
        // Focus/hover states
        'focus:lsd:bg-[var(--lsd-accent)] focus:lsd:text-[var(--lsd-accent-foreground)]',
        // Disabled state
        'data-[disabled]:lsd:pointer-events-none data-[disabled]:lsd:opacity-50',
        // Inset variant
        'data-[inset]:lsd:pl-8',
        // Destructive variant
        variant === 'destructive' && [
          'lsd:text-lsd-destructive-text',
          'focus:lsd:bg-[var(--lsd-destructive)]/10 focus:lsd:text-[var(--lsd-destructive-text)]',
          'dark:focus:lsd:bg-[var(--lsd-destructive)]/20',
        ],
        // Icon styling
        '[&_svg]:lsd:pointer-events-none [&_svg]:lsd:shrink-0 [&_svg:not([class*=size-])]:lsd:size-4 [&_svg:not([class*=text-])]:lsd:text-[var(--lsd-text-secondary)]',
        variant === 'destructive' &&
          '[&[data-variant=destructive]]:[&_svg]:lsd:text-[var(--lsd-destructive-text)]',
        className
      )}
      {...props}
    />
  );
}
