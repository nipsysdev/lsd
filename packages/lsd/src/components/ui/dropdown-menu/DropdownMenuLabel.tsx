import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface DropdownMenuLabelProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Label> {
  /**
   * Adds extra left padding to align with menu items that have inset styling.
   */
  inset?: boolean;
}

/**
 * DropdownMenuLabel - Non-interactive label for organizing dropdown menu content.
 *
 * @exportAs sub
 */
export function DropdownMenuLabel({ className, inset, ...props }: DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        // Typography Font
        'lsd:font-medium',
        'lsd:text-sm',
        // Colors & Backgrounds
        'lsd:text-lsd-text-primary',
        // Spacing
        'lsd:px-2',
        'lsd:py-1.5',
        // Pseudo-selectors & ARIA - Inset variant
        'data-[inset]:lsd:pl-8',
        className
      )}
      {...props}
    />
  );
}
