import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type NavigationMenuIndicatorProps = React.ComponentProps<
  typeof NavigationMenuPrimitive.Indicator
>;

/**
 * NavigationMenuIndicator - visual indicator showing the active navigation menu item.
 * Displays as a small triangle pointing to the active item.
 */
export function NavigationMenuIndicator({ className, ...props }: NavigationMenuIndicatorProps) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'lsd:top-full lsd:z-[1] lsd:flex lsd:h-1.5 lsd:items-end lsd:justify-center lsd:overflow-hidden lsd:data-[state=hidden]:animate-out lsd:data-[state=hidden]:fade-out lsd:data-[state=visible]:animate-in lsd:data-[state=visible]:fade-in',
        className
      )}
      {...props}
    >
      <div className="lsd:relative lsd:top-[60%] lsd:h-2 lsd:w-2 lsd:rotate-45 lsd:rounded-tl-sm lsd:bg-[var(--lsd-border)] lsd:shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}
