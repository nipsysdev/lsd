import type * as React from 'react';
import { cn } from '@/lib/utils';

export type DropdownMenuShortcutProps = React.ComponentProps<'span'>;

/**
 * DropdownMenuShortcut - Displays keyboard shortcuts for menu items.
 * Aligned to the right of the menu item with subtle styling.
 */
export function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        // Layout
        'lsd:ml-auto',
        // Text styling
        'lsd:text-xs lsd:tracking-widest lsd:text-lsd-text-secondary',
        className
      )}
      {...props}
    />
  );
}
