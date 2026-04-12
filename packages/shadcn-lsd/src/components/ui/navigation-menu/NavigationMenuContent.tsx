import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type NavigationMenuContentProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Content
>;

/**
 * NavigationMenuContent - The dropdown content that appears when a navigation menu item is triggered.
 * Supports various positioning options and smooth animations.
 */
export function NavigationMenuContent({ className, ...props }: NavigationMenuContentProps) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'lsd:top-0 lsd:left-0 lsd:w-full lsd:p-2 lsd:pr-2.5 md:lsd:absolute md:lsd:w-auto',
        'data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out',
        'group-data-[viewport=false]/navigation-menu:lsd:top-full group-data-[viewport=false]/navigation-menu:lsd:mt-[1.5rem] group-data-[viewport=false]/navigation-menu:lsd:overflow-hidden group-data-[viewport=false]/navigation-menu:lsd:rounded-md group-data-[viewport=false]/navigation-menu:lsd:border group-data-[viewport=false]/navigation-menu:lsd:bg-[var(--lsd-popover)] group-data-[viewport=false]/navigation-menu:lsd:text-[var(--lsd-popover-foreground)] group-data-[viewport=false]/navigation-menu:lsd:shadow-md group-data-[viewport=false]/navigation-menu:lsd:duration-200 **:data-[slot=navigation-menu-link]:focus:lsd:ring-0 **:data-[slot=navigation-menu-link]:focus:lsd:outline-none group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95',
        className
      )}
      {...props}
    />
  );
}
