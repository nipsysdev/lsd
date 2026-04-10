import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { NavigationMenuViewport } from './NavigationMenuViewport';

export type NavigationMenuProps = React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
};

/**
 * NavigationMenu - A navigation menu component for displaying a hierarchical list of links.
 * Supports viewport mode for mobile/desktop responsive behavior and submenus.
 * @default viewport false - Non-viewport mode provides better positioning control
 */
export function NavigationMenu({
  className,
  children,
  viewport = false,
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={className}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}
