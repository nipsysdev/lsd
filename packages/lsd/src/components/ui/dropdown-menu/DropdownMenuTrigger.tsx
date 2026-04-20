import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type * as React from 'react';

export interface DropdownMenuTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive.Trigger> {}

/**
 * DropdownMenuTrigger - Button or element that opens the dropdown menu when activated.
 *
 * @exportAs sub
 */
export function DropdownMenuTrigger({ ...props }: DropdownMenuTriggerProps) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}
