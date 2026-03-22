import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type DropdownMenuSeparatorProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Separator
>;

/**
 * DropdownMenuSeparator - A visual divider between dropdown menu sections.
 * Extends full width with margin offset to align with menu content.
 */
export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(
        // Layout
        'lsd:-mx-1 lsd:my-1 lsd:h-px',
        // Border uses LSD border token
        'lsd:bg-[var(--lsd-border)]',
        className
      )}
      {...props}
    />
  );
}
