import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuSeparatorProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Separator> {}

/**
 * DropdownMenuSeparator - Visual divider between dropdown menu sections.
 *
 * @exportAs sub
 */
export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(
        // Colors & Backgrounds
        'lsd:bg-lsd-border',
        // Layout & Positioning
        // Sizing
        'lsd:h-px',
        // Spacing
        'lsd:-mx-1',
        'lsd:my-1',
        className
      )}
      {...props}
    />
  );
}
