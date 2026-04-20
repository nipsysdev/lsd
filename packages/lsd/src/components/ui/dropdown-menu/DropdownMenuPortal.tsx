import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';

export interface DropdownMenuPortalProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Portal> {}

/**
 * DropdownMenuPortal - Renders dropdown menu content outside the normal DOM flow.
 *
 * @exportAs sub
 */
export function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}
