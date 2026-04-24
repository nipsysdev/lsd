import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';
import { MenubarPortal } from './MenubarPortal';
import { menubarContentVariants } from './types';

/**
 * Dropdown content container with positioning options.
 *
 * @exportAs sub
 */
export interface MenubarContentProps extends React.ComponentProps<typeof MenubarPrimitive.Content> {
  /**
   * Alignment of content relative to trigger.
   *
   * Controls horizontal positioning of dropdown.
   */
  align?: 'start' | 'center' | 'end';
  /**
   * Offset from trigger in pixels.
   *
   * Adjusts distance from trigger.
   */
  alignOffset?: number;
  /**
   * Vertical offset in pixels.
   *
   * Distance between trigger and content.
   */
  sideOffset?: number;
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: MenubarContentProps) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(menubarContentVariants(), className)}
        {...props}
      />
    </MenubarPortal>
  );
}

export { MenubarContent };
