import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type NavigationMenuViewportProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Viewport
>;

/**
 * NavigationMenuViewport - The viewport that contains navigation menu content in viewport mode.
 * Provides a container for dropdown content with proper positioning and animations.
 */
export function NavigationMenuViewport({ className, ...props }: NavigationMenuViewportProps) {
  return (
    <div
      className={cn(
        'lsd:absolute lsd:top-full lsd:left-0 lsd:isolate lsd:z-50 lsd:flex lsd:justify-center'
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'lsd:origin-top-center lsd:relative lsd:mt-[1.5rem] lsd:h-[var(--radix-navigation-menu-viewport-height)] lsd:w-full lsd:overflow-hidden lsd:rounded-md lsd:border lsd:bg-[var(--lsd-popover)] lsd:text-[var(--lsd-popover-foreground)] lsd:shadow-md lsd:data-[state=closed]:animate-out lsd:data-[state=closed]:zoom-out-95 lsd:data-[state=open]:animate-in lsd:data-[state=open]:zoom-in-90 md:lsd:w-[var(--radix-navigation-menu-viewport-width)]',
          className
        )}
        {...props}
      />
    </div>
  );
}
