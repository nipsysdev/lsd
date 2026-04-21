import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuSubContentProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> {}

/**
 * DropdownMenuSubContent - Container for submenu items.
 *
 * @exportAs sub
 */
export function DropdownMenuSubContent({ className, ...props }: DropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        // Colors & Backgrounds
        'lsd:bg-lsd-surface',
        'lsd:text-lsd-text-primary',
        // Borders
        'lsd:border',
        // Layout & Positioning
        'lsd:z-50',
        // Sizing
        'lsd:min-w-32',
        // Spacing
        'lsd:origin-(--radix-dropdown-menu-content-transform-origin)',
        'lsd:p-(--lsd-spacing-smaller)',
        // Borders, Shapes & Effects
        'lsd:rounded-none',
        'lsd:shadow-lg',
        // Overflow
        'lsd:overflow-hidden',
        // Animations - Open state
        'data-[state=open]:animate-in',
        'data-[state=open]:fade-in-0',
        'data-[state=open]:zoom-in-95',
        // Animations - Closed state
        'data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0',
        'data-[state=closed]:zoom-out-95',
        // Animations - Slide based on side
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  );
}
