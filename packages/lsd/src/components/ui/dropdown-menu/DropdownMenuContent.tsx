import {
  Content as DropdownMenuContentPrimitive,
  Portal as DropdownMenuPortalPrimitive,
} from '@radix-ui/react-dropdown-menu';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuContentProps
  extends React.ComponentProps<typeof DropdownMenuContentPrimitive> {
  /**
   * Distance in pixels from the trigger element to the menu content.
   */
  sideOffset?: number;
}

/**
 * DropdownMenuContent - Container for dropdown menu items with positioning and animations.
 *
 * @exportAs sub
 */
export function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPortalPrimitive>
      <DropdownMenuContentPrimitive
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          // Colors & Backgrounds
          'lsd:bg-lsd-surface',
          'lsd:text-lsd-text-primary',
          // Borders
          'lsd:border',
          // Layout & Positioning
          'lsd:z-50',
          // Sizing
          'lsd:max-h-(--radix-dropdown-menu-content-available-height)',
          'lsd:min-w-32',
          // Spacing
          'lsd:origin-(--radix-dropdown-menu-content-transform-origin)',
          'lsd:p-(--lsd-spacing-smaller)',
          // Borders, Shapes & Effects
          'lsd:rounded-none',
          'lsd:shadow-md',
          // Overflow
          'lsd:overflow-x-hidden',
          'lsd:overflow-y-auto',
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
    </DropdownMenuPortalPrimitive>
  );
}
