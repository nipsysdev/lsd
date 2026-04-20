import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';

export interface DropdownMenuGroupProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Group> {}

/**
 * DropdownMenuGroup - Groups menu items together.
 *
 * @exportAs sub
 */
export function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}
