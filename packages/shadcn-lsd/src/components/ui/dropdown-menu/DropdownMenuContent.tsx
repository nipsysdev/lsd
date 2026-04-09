import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Content> {
  sideOffset?: number;
}

/**
 * DropdownMenuContent - The container for dropdown menu items.
 * Handles positioning, animations, and styling of the dropdown panel.
 */
export function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          // Positioning and bounds
          'lsd:z-50 lsd:max-h-(--radix-dropdown-menu-content-available-height) lsd:min-w-32 lsd:origin-(--radix-dropdown-menu-content-transform-origin)',
          // Scrolling
          'lsd:overflow-x-hidden lsd:overflow-y-auto',
          // Layout and spacing
          'lsd:rounded-none lsd:border lsd:bg-lsd-surface lsd:p-1',
          // Animation
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          // Text colors
          'lsd:text-lsd-text-primary',
          // Shadow
          'lsd:shadow-md',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}
