import { CaretRightIcon } from '@phosphor-icons/react';
import { Menubar as MenubarPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';
import { type MenubarSubTriggerVariants, menubarSubTriggerVariants } from './types';

/**
 * Opens submenu with arrow indicator.
 *
 * @exportAs sub
 */
export interface MenubarSubTriggerProps
  extends React.ComponentProps<typeof MenubarPrimitive.SubTrigger>,
    MenubarSubTriggerVariants {
  /**
   * Indent the trigger.
   *
   * Adds left margin for grouped items.
   */
  inset?: boolean;
}

function MenubarSubTrigger({ className, inset, children, ...props }: MenubarSubTriggerProps) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(menubarSubTriggerVariants({ inset }), 'lsd:group', className)}
      {...props}
    >
      <span className="lsd:group-hover:underline lsd:group-focus:underline">{children}</span>
      <CaretRightIcon className="lsd:ml-auto lsd:size-4" weight="duotone" />
    </MenubarPrimitive.SubTrigger>
  );
}

export { MenubarSubTrigger };
