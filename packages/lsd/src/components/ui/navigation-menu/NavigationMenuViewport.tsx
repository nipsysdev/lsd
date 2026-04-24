import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface NavigationMenuViewportProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Viewport> {}

/**
 * NavigationMenuViewport - The viewport that contains navigation menu content in viewport mode.
 *
 * Provides a container for dropdown content with positioning and animations.
 *
 * @exportAs sub
 */
export function NavigationMenuViewport({ className, ...props }: NavigationMenuViewportProps) {
  return (
    <div
      className={cn(
        // Layout & Positioning
        'lsd:absolute',
        'lsd:flex',
        // Spacing
        'lsd:top-full',
        'lsd:left-0',
        // Alignment
        'lsd:justify-center',
        // Stacking
        'lsd:isolate',
        'lsd:z-50'
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          // Colors & Backgrounds
          'lsd:bg-(--lsd-popover)',
          'lsd:text-(--lsd-popover-foreground)',
          // Borders
          'lsd:border',
          // Layout & Positioning
          'lsd:relative',
          // Sizing
          'lsd:h-(--radix-navigation-menu-viewport-height)',
          'lsd:w-full',
          'md:lsd:w-[var(--radix-navigation-menu-viewport-width)]',
          // Spacing
          'lsd:mt-(--lsd-spacing-larger)',
          'lsd:origin-top-center',
          // Borders, Shapes & Effects
          'lsd:rounded-md',
          'lsd:shadow-md',
          // Overflow
          'lsd:overflow-hidden',
          // Animations - Open state
          'lsd:data-[state=open]:animate-in',
          'lsd:data-[state=open]:zoom-in-90',
          // Animations - Closed state
          'lsd:data-[state=closed]:animate-out',
          'lsd:data-[state=closed]:zoom-out-95',
          className
        )}
        {...props}
      />
    </div>
  );
}
