import { NavigationMenu as NavigationMenuPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

export type NavigationMenuItemProps = React.ComponentProps<typeof NavigationMenuPrimitive.Item>;

/**
 * NavigationMenuItem - A单个导航菜单项,包含触发器和内容。
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
