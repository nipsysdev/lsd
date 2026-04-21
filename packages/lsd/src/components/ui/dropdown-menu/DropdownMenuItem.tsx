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
        // Colors & Backgrounds - Destructive variant
        variant === 'destructive' && 'lsd:text-lsd-destructive-text',
        // Layout & Positioning
        'lsd:relative',
        'lsd:flex',
        // Alignment
        'lsd:items-center',
        // Sizing
        'lsd:text-sm',
        // Spacing
        'lsd:gap-(--lsd-spacing-smaller)',
        'lsd:px-2',
        'lsd:py-1.5',
        // Borders, Shapes & Effects
        'lsd:rounded-none',
        'lsd:outline-none',
        'lsd:select-none',
        // Interactive States - Focus/Hover
        'focus:lsd:bg-[var(--lsd-accent)]',
        'focus:lsd:text-[var(--lsd-accent-foreground)]',
        'lsd:hover:underline',
        'lsd:focus:underline',
        // Interactive States - Disabled
        'data-[disabled]:lsd:pointer-events-none',
        'data-[disabled]:lsd:opacity-50',
        // Interactive States - Destructive variant focus
        variant === 'destructive' && 'focus:lsd:bg-[var(--lsd-destructive)]/10',
        variant === 'destructive' && 'focus:lsd:text-[var(--lsd-destructive-text)]',
        variant === 'destructive' && 'dark:focus:lsd:bg-[var(--lsd-destructive)]/20',
        // Interactive States - Cursor
        'lsd:cursor-pointer',
        // Pseudo-selectors & ARIA - Inset variant
        'data-[inset]:lsd:pl-8',
        // Pseudo-selectors & ARIA - SVG styling
        '[&_svg]:lsd:pointer-events-none',
        '[&_svg]:lsd:shrink-0',
        '[&_svg:not([class*=size-])]:lsd:size-4',
        '[&_svg:not([class*=text-])]:lsd:text-[var(--lsd-text-secondary)]',
        // Pseudo-selectors & ARIA - Destructive variant SVG
        variant === 'destructive' &&
          '[&[data-variant=destructive]]:[&_svg]:lsd:text-[var(--lsd-destructive-text)]',
        className
      )}
      {...props}
    />
  );
}
