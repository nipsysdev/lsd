import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export interface NavigationMenuItemProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Item> {}

/**
 * NavigationMenuItem - A navigation menu item containing a trigger and optional content.
 *
 * Wraps trigger and content with relative positioning.
 *
 * @exportAs sub
 */
export function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('lsd:relative', className)}
      {...props}
    />
  );
}
