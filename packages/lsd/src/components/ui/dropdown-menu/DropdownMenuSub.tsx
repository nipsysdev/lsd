import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';

export interface DropdownMenuSubProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Sub> {}

/**
 * DropdownMenuSub - Submenu container for nested dropdown menus.
 *
 * @exportAs sub
 */
export function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}
