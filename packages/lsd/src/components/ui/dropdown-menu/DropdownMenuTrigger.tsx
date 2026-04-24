import { Trigger as DropdownMenuPrimitive } from '@radix-ui/react-dropdown-menu';
import type * as React from 'react';

export interface DropdownMenuTriggerProps
  extends React.ComponentProps<typeof DropdownMenuPrimitive> {}

/**
 * DropdownMenuTrigger - Button or element that opens the dropdown menu when activated.
 *
 * @exportAs sub
 */
export function DropdownMenuTrigger({ ...props }: DropdownMenuTriggerProps) {
  return <DropdownMenuPrimitive data-slot="dropdown-menu-trigger" {...props} />;
}
