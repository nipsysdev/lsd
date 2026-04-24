import { Separator as DropdownMenuSeparatorPrimitive } from '@radix-ui/react-dropdown-menu';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuSeparatorProps
  extends React.ComponentProps<typeof DropdownMenuSeparatorPrimitive> {}

export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuSeparatorPrimitive
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
