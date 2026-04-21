import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface NavigationMenuIndicatorProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Indicator> {}

/**
 * NavigationMenuIndicator - Visual indicator showing the active navigation menu item.
 *
 * Displays as a small triangle pointing to the active item.
 *
 * @exportAs sub
 */
export function NavigationMenuIndicator({ className, ...props }: NavigationMenuIndicatorProps) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        // Layout & Positioning
        'lsd:flex',
        // Sizing
        'lsd:h-1.5',
        // Spacing
        'lsd:top-full',
        // Alignment
        'lsd:items-end',
        'lsd:justify-center',
        // Stacking
        'lsd:z-1',
        // Overflow
        'lsd:overflow-hidden',
        // Animations - Hidden state
        'lsd:data-[state=hidden]:animate-out',
        'lsd:data-[state=hidden]:fade-out',
        // Animations - Visible state
        'lsd:data-[state=visible]:animate-in',
        'lsd:data-[state=visible]:fade-in',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          // Colors & Backgrounds
          'lsd:bg-lsd-border',
          // Layout & Positioning
          'lsd:relative',
          // Sizing
          'lsd:h-2',
          'lsd:w-2',
          // Spacing
          'lsd:top-[60%]',
          // Borders, Shapes & Effects
          'lsd:rotate-45',
          'lsd:rounded-tl-sm',
          'lsd:shadow-md'
        )}
      />
    </NavigationMenuPrimitive.Indicator>
  );
}
