import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type NavigationMenuListProps = React.ComponentProps<typeof NavigationMenuPrimitive.List>;

/**
 * NavigationMenuList - Container for navigation menu items arranged in a horizontal list.
 */
export function NavigationMenuList({ className, ...props }: NavigationMenuListProps) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        'lsd:group lsd:flex lsd:flex-1 lsd:list-none lsd:items-start lsd:justify-start lsd:gap-(--lsd-spacing-1)',
        className
      )}
      {...props}
    />
  );
}
