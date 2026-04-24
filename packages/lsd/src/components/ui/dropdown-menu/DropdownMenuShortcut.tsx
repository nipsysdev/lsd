import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * DropdownMenuShortcut - Displays keyboard shortcuts for menu items.
 *
 * @exportAs sub
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
