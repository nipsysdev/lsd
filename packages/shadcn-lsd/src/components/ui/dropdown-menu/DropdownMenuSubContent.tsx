import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type DropdownMenuSubContentProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.SubContent
>;

/**
 * DropdownMenuSubContent - The container for submenu items.
 * Similar to DropdownMenuContent but without portal, positioned relative to its trigger.
 */
export function DropdownMenuSubContent({ className, ...props }: DropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        // Positioning and bounds
        'lsd:z-50 lsd:min-w-32 lsd:origin-(--radix-dropdown-menu-content-transform-origin)',
        // Overflow and shape
        'lsd:overflow-hidden lsd:rounded-none lsd:border lsd:bg-lsd-surface lsd:p-1',
        // Animation
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        // Text colors
        'lsd:text-lsd-text-primary',
        // Shadow (stronger for submenu)
        'lsd:shadow-lg',
        className
      )}
      {...props}
    />
  );
}
