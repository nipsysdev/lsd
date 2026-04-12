import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';

export type DropdownMenuGroupProps = React.ComponentProps<typeof DropdownMenuPrimitive.Group>;

/**
 * DropdownMenuGroup - Groups menu items together.
 * Useful for organizing related items without adding separators.
 */
export function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}
