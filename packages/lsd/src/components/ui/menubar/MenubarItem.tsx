import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { type MenubarItemVariants, menubarItemVariants } from './types';

/**
 * Standard clickable menu item with optional shortcut.
 *
 * @exportAs sub
 */
export interface MenubarItemProps
  extends React.ComponentProps<typeof MenubarPrimitive.Item>,
    MenubarItemVariants {
  /**
   * Keyboard shortcut to display.
   *
   * Shows shortcut text to the right of item.
   */
  shortcut?: string;
  /**
   * Visual style variant.
   *
   * Options: default, destructive.
   */
  variant?: 'default' | 'destructive';
  /**
   * Indent the item.
   *
   * Adds left margin for grouped items.
   */
  inset?: boolean;
}

function MenubarItem({
  className,
  inset,
  variant = 'default',
  shortcut,
  children,
  ...props
}: MenubarItemProps) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(menubarItemVariants({ variant, inset }), 'lsd:group', className)}
      {...props}
    >
      <span className="lsd:group-hover:underline lsd:group-focus:underline">{children}</span>
      {shortcut && (
        <span className="lsd:text-lsd-text-secondary lsd:ml-auto lsd:text-xs lsd:tracking-widest">
          {shortcut}
        </span>
      )}
    </MenubarPrimitive.Item>
  );
}

export { MenubarItem };
